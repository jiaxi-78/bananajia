---
id: 'chapter5-mixture-of-experts'
category: 'diy-llm'
chapter: 'chapter-5'
course: 'DIY LLM'
title_zh: 'Chapter 5｜混合专家模型'
title_en: 'Chapter 5 | Mixture of Experts'
summary_zh: '补充 DeepSpeed-MoE 中 PR-MoE、MoS、稠密模型 upcycling、残差专家、金字塔式专家分布、分阶段蒸馏和 MoE 分布式训练/推理系统优化。'
summary_en: 'Notes on DeepSpeed-MoE: PR-MoE, MoS, dense-to-MoE upcycling, residual experts, pyramid expert allocation, staged distillation, and distributed MoE training/inference optimizations.'
tags:
  - LLM
  - MoE
  - DeepSpeed
---

# Chapter 5｜混合专家模型

## DeepSpeed-MoE：PR-MoE、MoS 与系统优化

DeepSpeed-MoE 这一节可以拆成三件事来看：

1. **模型结构压缩：PR-MoE**
2. **蒸馏压缩：MoS**
3. **分布式训练和推理系统优化**

它的核心目标不是单纯“把模型做大”，而是让 MoE 这种稀疏专家模型在训练、部署、推理延迟上都真的可用。

## 1. PR-MoE 是什么？

PR-MoE = **Pyramid-Residual MoE**，也就是“金字塔式 + 残差式”的 MoE。

普通 MoE Transformer 通常是：

```text
每个 MoE 层都有同样多的专家，例如每层 128 个 experts
每个 token 经过 router，只选 top-1 或 top-2 个 expert
```

DeepSpeed-MoE 发现两个现象：

1. **不是每一层都同样需要很多专家。**

   浅层更偏通用表示，深层更偏任务相关或语义相关表示，所以深层更值得放更多 experts。

2. **Top-2 MoE 有效果，但通信更贵。**

   Top-2 的意思是每个 token 走两个专家，表达力更强，但需要把 token 发给两个专家，通信量变大。

所以 PR-MoE 做了两个设计：

```text
Pyramid-MoE:
浅层少专家，深层多专家
例如前面 MoE 层 32 个专家，后面 MoE 层 64 或 128 个专家

Residual-MoE:
每个 token 总是经过一个固定 dense MLP
再经过 router 选中的一个 MoE expert
最后把两条分支加起来
```

也就是：

```text
普通 Top-1 MoE:
output = selected_expert(x)

Residual-MoE:
output = dense_mlp(x) + selected_expert(x)
```

这里的 `selected_expert(x)` 可以理解成对固定 MLP 的“残差纠错项”。

## 2. “专家残差纠错”是什么意思？

它不是说 expert 真的在显式预测某个误差标签，而是一种结构直觉：

```text
dense MLP 负责通用变换
MoE expert 负责针对不同 token 补充或修正
```

例如 token `bank` 在金融语境和河岸语境中需要不同处理。固定 MLP 给一个通用表示，router 再选择不同 expert 来补充修正。

这样它接近 Top-2 MoE 的效果，但通信更像 Top-1：

```text
Top-2 MoE:
token 要发给两个动态 expert，通信更重

Residual-MoE:
一个固定 MLP 在本地算
只把 token 发给一个动态 expert，通信更轻
```

论文里说 Residual-MoE 和 Top-2-MoE 泛化效果接近，但训练速度因为通信量减少而更快。

## 3. “金字塔式”是什么意思？

金字塔式就是专家数量沿层数递增：

```text
浅层: 32 experts
中层: 64 experts
深层: 128 experts
```

不是每层都 128 个专家。

直觉是：浅层学词形、局部模式、基础语法，大家都差不多；深层学更抽象的语义和任务相关模式，更需要专家分工。所以把专家预算集中到后面，可以用更少参数达到接近标准 MoE 的质量。

DeepSpeed 教程里也明确说，PR-MoE 的 `--num-experts` 可以是一个 list，并建议后面的层使用更多 experts。

## 4. MoS 是什么？

MoS = **Mixture-of-Students**。

名字有点绕，本质是：

```text
用 PR-MoE 当 teacher
训练一个更浅、更小的 MoE student
这个 student 仍然是 MoE，不是 dense 模型
```

为什么叫 Mixture-of-Students？因为它不是把 MoE 蒸馏成一个普通 dense student，而是把“大 MoE teacher”蒸馏成“小 MoE student”。学生模型内部仍有多个专家。

论文中的典型做法是把 PR-MoE 的专家分支深度减少，例如从 24 层减少到 21 层，约 12.5% depth reduction。配合 PR-MoE，总参数可以从标准 MoE 明显压下来：

```text
350M+MoE-128: 13B 参数
350M+PR-MoE-32/64: 4B 参数
350M+PR-MoE+MoS: 3.5B 参数

1.3B+MoE-128: 52B 参数
1.3B+PR-MoE-64/128: 31B 参数
1.3B+PR-MoE+MoS: 27B 参数
```

## 5. MoE 蒸馏成 dense student 是什么路线？

“把 MoE 蒸馏成一个普通 dense student”指的是：**teacher 是 MoE 模型，但 student 不再保留 MoE 结构，而是变成一个普通稠密 Transformer。**

例如 teacher 是：

```text
MoE teacher:
Attention
MoE FFN layer: router + 128 experts
Attention
MoE FFN layer: router + 128 experts
...
```

student 变成：

```text
Dense student:
Attention
普通 FFN
Attention
普通 FFN
...
```

也就是说，student 没有 router，没有 experts，也没有 token routing。每个 token 都走同一套 FFN 参数。

为什么有人会这么做？因为 MoE 虽然训练省 compute，但部署复杂：

```text
MoE:
总参数多
专家分散在多张 GPU 上
token 要被 router 分发到不同 expert
需要 All-to-All 通信
推理系统复杂

Dense:
结构简单
每个 token 路径固定
部署、量化、推理框架支持都更成熟
```

所以一种想法是：先训练一个很强的 MoE teacher，再用它教一个较小 dense student。这样希望 student 吸收 teacher 的知识，但推理时像普通模型一样简单。

蒸馏时通常是让 dense student 学 teacher 的输出分布：

```text
loss = CE(student, 真正下一个 token)
     + α * KL(student logits, teacher logits)
```

teacher 不只是告诉 student “正确答案是 Paris”，还告诉它：

```text
Paris: 0.55
France: 0.10
London: 0.04
...
```

这些 soft probabilities 包含了 teacher 对语言空间的细腻判断。

但问题是：**MoE -> dense 会丢掉结构优势。**

MoE 的优势来自“条件计算”：

```text
不同 token 走不同 expert
不同 expert 可以学不同模式
每次只激活少数 expert
```

如果蒸馏成 dense student，这些专家分工会被压进一套统一 FFN 里。student 部署简单了，但不再有 MoE 的稀疏激活优势。

所以 DeepSpeed-MoE 的 MoS 不走这个路线。它不是：

```text
大 MoE teacher -> 小 dense student
```

而是：

```text
大 PR-MoE teacher -> 小 MoE student
```

也就是 student 仍然保留：

```text
router
experts
稀疏激活
expert parallelism 的潜力
```

只是把模型做浅一点、小一点。这样它既吃到蒸馏带来的压缩效果，又保留 MoE 的核心好处。

一句话：**MoE 蒸馏成 dense student 是“用 MoE 训练出一个普通模型”；MoS 是“用大 MoE 训练出一个更小的 MoE”。**

## 6. 这里的蒸馏到底怎么蒸馏？

训练 student 时，loss 是两部分：

```text
总 loss = 语言模型 CE loss + α * 蒸馏 KL loss
```

更直白地说：

1. **CE loss**：student 要预测真实下一个 token。
2. **KL loss**：student 的输出分布要模仿 teacher 的 soft label。

soft label 指 teacher 对词表里每个 token 的概率分布，不只是正确答案。例如真实下一个词是 `Paris`，teacher 可能还会给 `France`、`London` 等词较小但有意义的概率。student 学这个分布，比只学 hard label 信息更多。

但 DeepSpeed-MoE 发现：**全程蒸馏反而不好**。原因是 student 已经被压小了，容量有限；如果一直同时追 teacher 分布和真实 LM loss，后期可能欠拟合真实任务。

所以 MoS 用 **staged KD**，也就是分阶段知识蒸馏：

```text
训练前期:
CE loss + KL distillation loss
让 student 先跟着 teacher 学稳定分布

训练后期:
关掉 KD
只用语言模型 CE loss
让 student 自己优化真实预训练目标
```

论文示例里提到，在大约 400K steps 后停止 KD。

## 7. 稠密模型 upcycling 为 MoE 是什么意思？

这里的 `upcycling dense model into MoE`，可以直接理解成：

**先训练出一个普通的稠密 Transformer，再把它升级改造成 MoE，然后继续训练。**

它不是从零随机初始化一个全新的 MoE，而是尽量复用你已经花大成本训练出来的 dense checkpoint。

最常见的改法是：

```text
原来:
Attention
FFN
Attention
FFN

改成:
Attention
MoE FFN = router + 多个 experts
Attention
MoE FFN = router + 多个 experts
```

这里的 `expert` 本质上通常还是 FFN/MLP，只不过从“每层一套共享 FFN”变成了“每层很多套并行 FFN，再由 router 挑少数几个来算”。

### 7.1 具体怎么“升”？

直觉上分成四步：

1. **先有一个训练好的 dense 模型**

   这个模型已经学会了基础语言能力、知识和表示。

2. **把部分 FFN 层替换成 MoE 层**

   也就是在原本的 dense MLP 位置，换成：

   ```text
   router + expert_1 + expert_2 + ... + expert_n
   ```

3. **用原 dense FFN 的权重去初始化 experts**

   常见方式包括：

   - 直接复制原 FFN 到所有 experts
   - 复制后加一点随机扰动，让 experts 别一模一样
   - router 单独随机初始化

4. **继续训练**

   让 router 学会分配 token，让 experts 慢慢从“大家都像原来的 FFN”变成“各自专精不同模式”。

所以它叫 `upcycling`，本质就是：

```text
把旧的 dense 训练成果改造成更高容量的稀疏模型继续用
```

### 7.2 为什么要这么做？

因为从零训练 MoE 很贵，而且不一定划算。

如果你已经有一个不错的 dense 模型，那么直接把它升级成 MoE，有几个明显好处：

- **复用已有训练成本**：原来的预训练没白费
- **初始化更强**：不是从纯随机开始
- **早期更容易可用**：至少模型一开始就有基本语言能力

你可以把它想成：

```text
dense 模型 = 一个已经很强的全科老师
MoE 模型 = 一个老师团队，每个老师分工负责不同方向
upcycling = 先有一个好老师，再把他扩展成一个分工协作的老师团队
```

### 7.3 为什么它又不一定总是最好？

因为旧的 dense 权重既是资产，也是约束。

一方面，旧权重提供了强初始化；另一方面，它也可能让 experts 难以真正分化。

原因大概有两类：

1. **旧表示太强，expert 不容易“忘掉再重学”**

   原 dense 模型已经把很多通用能力压进同一套参数里。现在你复制出多个 experts，它们起点都很像原来的 FFN，于是容易“长得都差不多”，而不是快速形成明确分工。

2. **router 是新来的，往往学得慢**

   experts 继承了旧权重，但 router 常常是随机初始化。训练前期它分配 token 的方式接近随机或很粗糙，等 router 慢慢学明白时，学习率可能已经衰减了，专家分工就会形成得不够彻底。

这也是为什么一些工作，比如 OLMoE，会发现：

- 某些设置下，从零训练的 MoE 在足够数据后能追上甚至超过 upcycled MoE
- 但另一些设置下，upcycling 又明显更省预算、更快进入可用区间

### 7.4 怎么和“从零训练 MoE”对比着记？

你可以直接记成两条路线：

```text
路线 A：dense -> upcycle -> MoE
优点：省已有训练成果，起点强
缺点：可能被旧权重束缚，expert 分工形成慢

路线 B：random init -> train MoE from scratch
优点：router 和 experts 从头共同演化，更自由
缺点：前期成本更高，需要更多数据和训练预算
```

所以 `upcycling` 不是“绝对更先进”，而是一种非常现实的工程策略：

**先用 dense 把底座练出来，再把它升级成 MoE，看看能不能用更少额外成本换到更大的容量和更高的参数效率。**

> **一句话记忆**
> 稠密模型 upcycling 为 MoE，就是把已经训练好的 dense 模型当成起点，把部分 FFN 改成专家层、继承旧权重后继续训练，让模型从“单一路径计算”升级成“稀疏专家计算”。

## 8. MoE 这个想法最早是谁提出来的？

如果问“MoE 这个想法最早是谁提出来的”，通常要分两层回答：

### 8.1 原始的 Mixture of Experts

最早一般追溯到 1991 年的经典论文：

- Robert A. Jacobs
- Michael I. Jordan
- Steven J. Nowlan
- Geoffrey E. Hinton

论文是：

- [Adaptive Mixtures of Local Experts (1991)](https://people.eecs.berkeley.edu/~jordan/papers/mixtures-of-experts.pdf)

这篇论文讲的还不是今天 LLM 里常见的 Transformer MoE，但核心思想已经在了：

```text
不要让一套参数处理所有样本
而是让一个 gating / routing 机制把不同输入分给不同 expert
```

所以如果只问“MoE 这个想法是谁先提的”，最稳妥的答案就是：

**Jacobs、Jordan、Nowlan、Hinton 在 1991 年提出了经典的 Mixture of Experts。**

### 8.2 现代大模型里的稀疏 MoE

今天大家在 LLM 里说的 MoE，更多是指“稀疏激活的专家 Transformer”。这条线真正做火的是 Google Brain 在 2017 年的工作：

- Noam Shazeer
- Azalia Mirhoseini
- Krzysztof Maziarz
- Andy Davis
- Quoc Le
- Geoffrey Hinton
- Jeff Dean

对应论文：

- [Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer (2017)](https://arxiv.org/abs/1701.06538)

这篇论文的重要性在于：它把“专家只激活少数几个”的稀疏计算路线真正做成了可以大规模扩展神经网络参数量的工程方案。

### 8.3 把 MoE 做进超大规模 Transformer

后面把它推到现代大模型训练主线上、让更多人真正把 MoE 和 Transformer 联系起来的代表作，是：

- [GShard (2020)](https://arxiv.org/abs/2006.16668)
- [Switch Transformers (2021)](https://arxiv.org/abs/2101.03961)
- [GLaM (2021)](https://arxiv.org/abs/2112.06905)

一句话记：

```text
1991：提出 MoE 思想
2017：做出现代稀疏门控 MoE
2020-2021：把它做进超大规模 Transformer
```

## 9. 系统优化那里怎么理解？

MoE 推理的麻烦不只是算力，而是 **通信和读权重**。

普通 dense 模型每个 token 都走完整模型。MoE 看起来省计算，因为每个 token 只走少数 experts。但问题是：

```text
不同 token 会被 router 发到不同 expert
expert 分布在不同 GPU 上
所以 token 要在 GPU 间搬来搬去
```

这就需要 **All-to-All 通信**：每张 GPU 都可能给其他 GPU 发 token，也可能从其他 GPU 收 token。

DeepSpeed-MoE 的系统优化主要是三类。

### 第一类：专家参数和非专家参数用不同并行方式

Transformer 里有两类参数：

```text
非专家参数:
attention、layernorm、embedding 等

专家参数:
MoE 里的 MLP experts
```

DeepSpeed-MoE 对它们区别处理：

```text
expert parallelism:
不同专家放到不同 GPU 上

expert slicing:
一个 expert 太大时，再切到多张 GPU 上

tensor slicing:
attention 等非专家参数按张量切分

data parallelism:
复制非专家部分，不同 GPU 处理不同 batch
```

意思是：不要用一种并行策略硬套所有层，而是专家层、非专家层分别选最合适的切法。

这对 PR-MoE 特别重要，因为 PR-MoE 不同层的专家数量不一样。例如一个模型在不同 MoE 层有 32、64、128 个专家，那么最合适的 expert parallel degree 也不一样。DeepSpeed-MoE 支持不同层用不同 expert parallelism 和 data parallelism 组合，避免有些 GPU 空着、有些 GPU 太忙，也避免每张卡放太多专家导致显存浪费。

### 第二类：减少 All-to-All 的通信范围

如果有 `p` 张 GPU，朴素 All-to-All 可能接近所有 GPU 互相通信，复杂度随 `p` 增长。

DeepSpeed-MoE 做了两件事：

```text
Hierarchical All-to-All:
先节点内通信，再节点间通信
减少跨节点通信跳数

Parallelism-coordinated communication:
利用 tensor slicing 造成的数据副本
只让同一个 tensor-parallel rank 的 GPU 参加某次 All-to-All
```

所以看到的 `O(p)` 到 `O(p/L)`，大概是在说：如果 tensor slicing degree 是 `L`，那么一次 All-to-All 参与的 GPU 数从 `p` 降到 `p/L`。

论文正文更正式地写了两种复杂度：

```text
层次化 All-to-All:
通信 hops 从 O(p) 降到 O(G + p/G)
其中 G 是单节点 GPU 数，p 是总 GPU 数

利用 tensor slicing 限制通信参与者:
参与 All-to-All 的 GPU 数除以 tensor-slicing degree
```

### 第三类：把稀疏操作改成显式数据布局转换

MoE router 做的事大概是：

```text
每个 token 选 expert
把 token 按 expert 分组
送到对应 expert
expert 算完后
再按原 token 顺序拼回来
```

很多实现会用稀疏矩阵或 einsum 来表达这个过程，但里面大量是 0，浪费算力和 kernel launch。

DeepSpeed-MoE 改成：

```text
建立 token -> expert 的 mapping table
按 expert id 显式重排 token
专家计算
再按 mapping table 还原顺序
```

这就是“显式数据布局转换”。它不再假装这是一个大稀疏矩阵乘法，而是直接搬数据、排序、还原。论文说这让 MoE kernel 相关延迟降低超过 6 倍。

## 10. 一句话总结

**PR-MoE 是把专家放得更聪明，MoS 是把 PR-MoE 再蒸馏变小，系统优化是让 token 找专家这件事在多 GPU 上搬得更少、更规整、更快。**

## 11. Reference

主论文：

- [DeepSpeed-MoE: Advancing Mixture-of-Experts Inference and Training to Power Next-Generation AI Scale, ICML 2022](https://arxiv.org/abs/2201.05596)
- [PMLR PDF](https://proceedings.mlr.press/v162/rajbhandari22a/rajbhandari22a.pdf)

官方解释：

- [Microsoft Research blog: DeepSpeed MoE](https://www.microsoft.com/en-us/research/blog/deepspeed-advancing-moe-inference-and-training-to-power-next-generation-ai-scale/)
- [DeepSpeed MoE for NLG tutorial](https://www.deepspeed.ai/tutorials/mixture-of-experts-nlg/)
- [DeepSpeed MoE inference tutorial](https://www.deepspeed.ai/tutorials/mixture-of-experts-inference/)

背景论文：

- [Adaptive Mixtures of Local Experts, Jacobs et al. 1991](https://people.eecs.berkeley.edu/~jordan/papers/mixtures-of-experts.pdf)
- [Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer, Shazeer et al. 2017](https://arxiv.org/abs/1701.06538)
- [GShard, Lepikhin et al. 2020](https://arxiv.org/abs/2006.16668)
- [Switch Transformers, Fedus et al. 2021](https://arxiv.org/abs/2101.03961)
- [GLaM, Du et al. 2021](https://arxiv.org/abs/2112.06905)
- [OLMoE: Open Mixture-of-Experts Language Models, Allingham et al. 2024](https://arxiv.org/abs/2409.02060)
