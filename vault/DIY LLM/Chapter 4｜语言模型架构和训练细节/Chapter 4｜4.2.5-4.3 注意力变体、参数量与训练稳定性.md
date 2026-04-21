---
id: 'chapter4-attention-efficiency-stability'
category: 'diy-llm'
chapter: 'chapter-4'
course: 'DIY LLM'
date: 'Card 07'
title_zh: 'Chapter 4｜4.2.5-4.3 注意力变体、参数量与训练稳定性'
title_en: 'Chapter 4 | 4.2.5-4.3 Attention Variants, Parameter Count, and Training Stability'
summary_zh: '把 MQA/GQA/MLA/DSA、稀疏注意力、长上下文外推、FFN 参数、权重衰减、z-loss、QK Norm 和软截断拆成可视化笔记。'
summary_en: 'Breaking down MQA/GQA/MLA/DSA, sparse attention, long-context extrapolation, FFN parameters, weight decay, z-loss, QK Norm, and soft capping into visual notes.'
tags: []
---

# Chapter 4｜4.2.5-4.3 注意力变体、参数量与训练稳定性

> 把 MQA/GQA/MLA/DSA、稀疏注意力、长上下文外推、FFN 参数、权重衰减、z-loss、QK Norm 和软截断拆成可视化笔记。

## 第一组：先复习 Q/K/V 原来怎么用

自注意力里，每个 token 的 hidden 向量会分别乘三组权重，得到 Q、K、V。Q 像”我要找什么”，K 像”我有什么标签可被别人匹配”，V 像”如果别人关注我，我实际贡献什么内容”。

计算时，某个位置的 Q 会和所有位置的 K 做点积，得到注意力分数；softmax 后变成权重；这些权重再去加权求和所有位置的 V。也就是说，K 决定”看谁”，V 决定”拿什么”。

在多头注意力 MHA 里，每个 head 都有自己的一套 Q/K/V，所以每个 head 都能用自己的方式判断相关性，也能保存自己的一份 KV cache。推理长上下文时，KV cache 很贵，后面的 MQA/GQA/MLA 都是在想办法让 KV 更省。

> **Q 是当前 token 的问题**
> 当前位置拿 Q 去问：我应该关注上下文里的哪些 token？

> **K 是每个 token 的索引标签**
> 所有历史 token 的 K 会被拿来和当前 Q 匹配，决定注意力权重。

> **V 是真正被汇总的信息**
> softmax 权重出来后，模型不是加权 K，而是加权 V。

## 第二组：MHA、MQA、GQA、MLA 到底差在哪里

MHA 是”每个 Q head 配一套自己的 K/V”。表达力强，但推理时每层每个 token 都要缓存很多 K/V。

MQA 是”很多 Q head 共享同一套 K/V”。为什么可以共享？因为 Q 仍然可以有很多个头，负责提出不同问题；但被查询的历史内容 K/V 可以压成同一份公共记忆。代价是不同头看到的 K/V 记忆变少，表达灵活度下降一些。

GQA 是 MHA 和 MQA 中间态：不是所有 Q head 共享一套 K/V，而是每一组 Q head 共享一套 K/V。比如 8 个 Q head 分成 2 组，每组 4 个 Q head 共享一套 K/V。它比 MHA 省 cache，比 MQA 保留更多多样性。

MLA 可以理解成更进一步：不是直接缓存完整 K/V，而是先把 K/V 联合压到一个低维 latent 里，需要时再从 latent 还原出注意力需要的信息。低秩联合压缩的意思是：用更小的中间表示，近似承载原来高维 K/V 的主要信息，就像用少量主成分描述一张大表。


```json:attentionVariantVisual
{
  "variants": [
    {
      "kind": "mha",
      "label": "MHA",
      "title": {
        "zh": "每头独立 K/V",
        "en": "Independent K/V per head"
      },
      "q": [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
      ],
      "kv": [
        "K/V1",
        "K/V2",
        "K/V3",
        "K/V4"
      ],
      "body": {
        "zh": "表达最灵活，但 KV cache 最大。",
        "en": "Most flexible expression, but largest KV cache."
      }
    },
    {
      "kind": "mqa",
      "label": "MQA",
      "title": {
        "zh": "所有头共享 K/V",
        "en": "All heads share K/V"
      },
      "q": [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
      ],
      "kv": [
        "shared K/V"
      ],
      "body": {
        "zh": "Q 仍有多头，但历史记忆只有一份，推理 cache 很省。",
        "en": "Q still has multiple heads, but historical memory is a single copy — very cache-efficient for inference."
      }
    },
    {
      "kind": "gqa",
      "label": "GQA",
      "title": {
        "zh": "分组共享 K/V",
        "en": "Grouped K/V sharing"
      },
      "q": [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
      ],
      "kv": [
        "K/V group A",
        "K/V group B"
      ],
      "body": {
        "zh": "介于 MHA 和 MQA 之间：省一部分 cache，也保留一部分多样性。",
        "en": "Between MHA and MQA: saves some cache while retaining some diversity."
      }
    },
    {
      "kind": "mla",
      "label": "MLA",
      "title": {
        "zh": "低维 latent 存记忆",
        "en": "Low-dim latent for memory"
      },
      "q": [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
      ],
      "kv": [
        "compressed latent"
      ],
      "body": {
        "zh": "把 K/V 联合压缩成低维表示，减少缓存，再按需还原。",
        "en": "Jointly compress K/V into a low-dimensional representation, reducing cache, and reconstruct on demand."
      }
    }
  ]
}
```

## 第三组：稀疏注意力为什么能获得更大的注意力窗口

完整注意力的成本随上下文长度平方增长。一个 token 如果能看 128k 个历史 token，那么每层都要对巨大的注意力矩阵做计算和读写。窗口越长，成本越夸张。

稀疏注意力的核心不是”窗口真的免费变大”，而是”候选上下文很长，但每次只认真看其中一部分”。比如滑动窗口只看附近 token，global token 偶尔全局连通，top-k 稀疏注意力先筛出最相关的一小批 token，再只对它们做完整注意力。

这样模型名义上可以接收更长上下文，因为它不用为每个 token 都和所有历史 token 两两计算。代价是：被稀疏模式跳过的信息不能被当前层直接读取，所以设计重点变成”哪些位置必须看，哪些位置可以跳过”。


```json:sparseWindowVisual
{
  "cells": [
    "local",
    "local",
    "global",
    "global",
    "global",
    "global",
    "global",
    "global",
    "global",
    "global",
    "global",
    "global",
    "local",
    "local",
    "local",
    "off",
    "global",
    "off",
    "skip",
    "off",
    "global",
    "off",
    "off",
    "off",
    "global",
    "local",
    "local",
    "local",
    "global",
    "skip",
    "off",
    "off",
    "global",
    "off",
    "off",
    "off",
    "global",
    "off",
    "local",
    "local",
    "local",
    "off",
    "off",
    "off",
    "global",
    "off",
    "off",
    "skip",
    "global",
    "global",
    "global",
    "local",
    "local",
    "local",
    "global",
    "global",
    "global",
    "global",
    "global",
    "global",
    "global",
    "off",
    "skip",
    "off",
    "local",
    "local",
    "local",
    "off",
    "global",
    "skip",
    "off",
    "off",
    "global",
    "skip",
    "off",
    "off",
    "global",
    "local",
    "local",
    "local",
    "global",
    "off",
    "off",
    "off",
    "global",
    "off",
    "off",
    "off",
    "global",
    "off",
    "local",
    "local",
    "local",
    "off",
    "off",
    "off",
    "global",
    "global",
    "global",
    "global",
    "global",
    "global",
    "global",
    "local",
    "local",
    "local",
    "global",
    "global",
    "global",
    "off",
    "off",
    "off",
    "global",
    "skip",
    "off",
    "off",
    "local",
    "local",
    "local",
    "off",
    "global",
    "off",
    "off",
    "off",
    "global",
    "off",
    "off",
    "off",
    "global",
    "local",
    "local",
    "local",
    "global",
    "off",
    "off",
    "skip",
    "global",
    "off",
    "off",
    "off",
    "global",
    "off",
    "local",
    "local"
  ],
  "legend": [
    {
      "kind": "local",
      "title": {
        "zh": "滑动窗口",
        "en": "Sliding window"
      },
      "body": {
        "zh": "每个 token 主要看附近邻居，RoPE 只需要处理局部距离。",
        "en": "Each token mainly looks at nearby neighbors; RoPE only needs to handle local distances."
      }
    },
    {
      "kind": "global",
      "title": {
        "zh": "偶尔全局注意力",
        "en": "Occasional global attention"
      },
      "body": {
        "zh": "少数层或少数位置做完整连通，帮助远距离信息跨窗口传递。",
        "en": "A few layers or positions do full connectivity, helping long-range information transfer across windows."
      }
    },
    {
      "kind": "skip",
      "title": {
        "zh": "动态选中的远处 token",
        "en": "Dynamically selected distant tokens"
      },
      "body": {
        "zh": "top-k 或 indexer 先筛选，再对少量重要远处 token 做注意力。",
        "en": "Top-k or an indexer pre-selects, then attention is computed only on a small number of important distant tokens."
      }
    }
  ]
}
```

## 第四组：什么叫长度外推，为什么”无位置嵌入的完全注意力”有用

外推就是：训练时主要见过较短长度，比如 8k 或 32k；推理时希望模型能处理更长长度，比如 128k、1M。模型在没充分训练过的长度上还能工作，就叫长度外推。

RoPE 这类位置方法会把”距离”编码进角度。训练时如果只见过短距离，推理时突然出现很大的位置索引，角度模式可能落到训练分布外，模型会不稳。滑动窗口的好处是 RoPE 只处理局部距离，外推压力变小。

原文说的”四块组合”可以这样理解：每四层里，一层做没有位置嵌入的全局自注意力，它不知道绝对位置，所以不受超长位置索引的外推困扰，但能让远处 token 互相交换信息；另外三层用带 RoPE 的滑动窗口注意力，负责局部顺序和局部语义。

这招很巧：全局层偶尔出现，成本可控；局部层多数出现，位置感知稳定；远距离依赖通过无位置全局层传过去，避免 RoPE 被迫解释超长距离。

> **外推不是”推理”**
> 这里的 extrapolation 指长度超出训练分布，不是模型思考能力的推理。

> **无位置全局层像”远程广播”**
> 它不关心谁在第几位，只负责让远处信息能碰到一起。

> **带 RoPE 滑窗层像”局部精读”**
> 它只在附近窗口里使用位置感，避免 RoPE 面对训练外的超长距离。

## 第五组：DSA 的”细粒度动态稀疏”是什么意思，最近是不是很多人在用

细粒度是说稀疏选择可以细到 token 或小块 token 级别，而不是粗暴地规定”只能看固定窗口”或”只能看固定模式”。动态是说每个 query 会根据当前内容选择该看哪些 token，不是提前写死一张永远不变的稀疏图。

DSA 可以理解成两步：先用一个轻量 indexer 在很长上下文里快速找候选，再从候选里挑 top-k token，让标准注意力只处理这些被选中的位置。这样既保留长上下文的可能性，又把真正昂贵的注意力算子限制在少量 token 上。

它是不是最近用得很多？更准确说：截至 2026-04，它是 DeepSeek-V3.2-Exp 引入的很新的实验性方向，已经被 vLLM 等推理生态快速适配，但还不能说已经像 MQA/GQA/RoPE 那样成为所有主流模型的常规标配。它更像”长上下文稀疏注意力正在升温的一条代表路线”。

> **细粒度**
> 不是整段整段地固定跳过，而是可以细到 token 级选择。

> **动态**
> 不是固定稀疏图，而是每个 query 根据内容临时选重要 token。

> **DSA 的位置**
> 它目前更像前沿实验和工程适配热点，不是已经完全替代普通注意力的通用默认项。

## 第六组：4.3 里参数为什么和模型维度、宽度、深度有关

模型维度 d_model 就是每个 token hidden 向量的长度，也常被直觉地叫”模型宽度”。比如 d_model=4096，意思是每个位置用 4096 个数字表示。

深度一般就是 Transformer block 的层数。层数越多，同一类模块重复越多，参数量也越多。

FFN 的参数和输入维度有关，因为 FFN 是线性层：输入 d_model，先投影到中间维度 d_ff，再投影回 d_model。两块权重大约是 d_model x d_ff 和 d_ff x d_model，所以大约 2 x d_model x d_ff。

GLU 也有参数，因为它不是一个免费开关。它通常有内容分支、门控分支、输出分支：xW_up、xW_gate、再 W_down。门控那条路也要通过一个线性层学出来，所以会多一组权重。
- 注意力常见参数：Wq、Wk、Wv、Wo。
- FFN 常见参数：W_up、W_down；如果是 GLU/SwiGLU，还会多 W_gate。
- 归一化参数：LayerNorm/RMSNorm 的缩放参数 gamma，有时还有 beta。
- embedding 参数：词表大小 vocab_size x d_model。
- 宽度：通常指 hidden size / d_model 变大。
- 深度：通常指 Transformer 层数变多。


## 第七组：权重衰减到底带来了什么

权重衰减可以理解成”别让权重长得太夸张”的约束。优化器每次更新时，除了按梯度降低 loss，也会轻轻把权重往 0 拉一点。

它带来的主要收益是正则化：减少模型过度依赖某些特别大的权重，让表示更平滑，泛化更好。在大模型训练里，它也能让参数尺度更可控，减少一些数值和优化上的坏习惯。

但权重衰减不是越大越好。如果拉得太狠，模型会学不动或表达能力下降。所以它是一种”温和刹车”，不是主发动机。

## 第八组：softmax、z-loss、QK Norm 和软截断在控制什么

这里要先拆一个误会：LayerNorm 不是 softmax。LayerNorm 是把一个向量的数值尺度标准化；softmax 是把一组分数变成概率分布。一个是调数值范围，一个是做概率归一化。

注意力里的 softmax 输入是 QK 点积分数。如果这些分数过大，softmax 会极度尖锐：一个 token 权重接近 1，其他接近 0；如果 logit 尺度持续膨胀，还可能导致训练不稳定。这就是所谓”不良行为”：注意力过早塌缩、梯度变差、数值尺度失控。

z-loss 控制的是 softmax 的归一化因子 z，也就是 exp(logits) 的总量对应的 log-sum-exp。它惩罚过大的 log-sum-exp，让 logits 不要整体膨胀。QK Norm 则是在 softmax 之前先规范 Q 和 K，让点积分数天然别太大。

软截断是截断 logits 或 attention scores 的极端值，但不是硬 clip 到一个死边界，而是用平滑函数把过大的值压弯。反对意见是：它可能压掉有用的强信号，导致困惑度变差；而 QK Norm 更像从源头控制 Q/K 的尺度，常常允许更激进学习率，让优化器更有空间发挥。

> **LayerNorm 不是 softmax**
> LayerNorm 调一条向量的尺度；softmax 把一组分数变成概率。

> **QK Norm 控制输入**
> 它不去修 softmax 输出，而是在 softmax 前让 QK 分数别失控。

> **软截断的争议**
> 稳定不等于效果更好；如果把有用的大分数也压掉，困惑度可能变差。


```json:stabilityControlVisual
{
  "controls": [
    {
      "kind": "raw",
      "title": {
        "zh": "原始 QK 分数",
        "en": "Raw QK Scores"
      },
      "bars": [
        18,
        22,
        36,
        92,
        14,
        20
      ],
      "body": {
        "zh": "分数跨度很大，softmax 容易变尖。",
        "en": "Score range is very wide, making softmax prone to becoming peaked."
      }
    },
    {
      "kind": "zloss",
      "title": "z-loss",
      "bars": [
        20,
        28,
        40,
        70,
        18,
        24
      ],
      "body": {
        "zh": "惩罚整体 log-sum-exp 膨胀，别让 logits 集体长太大。",
        "en": "Penalizes overall log-sum-exp inflation to keep logits from growing too large collectively."
      }
    },
    {
      "kind": "qknorm",
      "title": "QK Norm",
      "bars": [
        36,
        42,
        50,
        62,
        34,
        40
      ],
      "body": {
        "zh": "先规范 Q/K，再点积，从源头控制 softmax 输入范围。",
        "en": "Normalizes Q/K first, then computes dot products, controlling the softmax input range at the source."
      }
    },
    {
      "kind": "softcap",
      "title": {
        "zh": "软截断",
        "en": "Soft Capping"
      },
      "bars": [
        24,
        30,
        42,
        58,
        22,
        28
      ],
      "body": {
        "zh": "把极端值平滑压弯，但可能压掉有用强信号。",
        "en": "Smoothly bends down extreme values, but may suppress useful strong signals."
      }
    }
  ]
}
```

## 第九组：一句话总结

这一段的主线是：注意力变体主要在省 KV cache 和长上下文成本；稀疏注意力主要在”长上下文里只认真看少量重要位置”；4.3 的参数量由宽度 d_model、FFN 中间维度、层数和模块结构共同决定；训练稳定性方法则是在控制 softmax 前后的数值尺度，避免注意力分布和 logits 失控。
