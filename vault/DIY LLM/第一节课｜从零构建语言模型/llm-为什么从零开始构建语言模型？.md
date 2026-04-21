---
id: 'cs336-note-01'
category: 'diy-llm'
chapter: 'lesson-1'
course: 'CS336'
date: 'Card 01'
title_zh: 'llm-为什么从零开始构建语言模型？'
title_en: 'LLM — Why Build a Language Model from Scratch?'
summary_zh: '用问答的方式重新整理第一节课内容。比起直接记结论，这种写法更能保留”一个问题如何把思考往前推”的过程。'
summary_en: 'Reorganizing the first lecture in Q&A format. Compared to just recording conclusions, this style better preserves the process of how one question pushes thinking forward.'
tags: []
---

# llm-为什么从零开始构建语言模型？

> 用问答的方式重新整理第一节课内容。比起直接记结论，这种写法更能保留”一个问题如何把思考往前推”的过程。

## 第一组：课程哲学与”苦涩的教训”

### 为什么讲师会强调要从零开始构建语言模型？

思考：这门课一开始就在提醒我们，真正危险的不是不会用模型，而是越来越习惯只停留在抽象层里。API 当然方便，但方便也意味着很多关键细节被折叠了。数据怎么组织、系统怎么支撑、模型为什么这样设计，如果这些问题都被屏蔽掉，研究者最后就会慢慢失去判断力。

感想：所以”从零开始构建”在这里更像是一种重新接触底层的训练。它不是为了重复造轮子，而是为了把自己重新放回技术链条里，重新理解模型效果、成本和约束之间到底是怎么互相牵动的。

**参考链接**：
- [Stanford CS336 Course Page](https://stanford-cs336.github.io/spring2025/)

### 为什么课程反而强调算法效率在更大规模下会更重要？

思考：”苦涩的教训”常常被简化成”规模最重要”，但课程里更有意思的一点是，它并没有把规模和算法对立起来。相反，讲师强调的是，规模越大，效率越重要。

感想：这点很能说服我。因为在小实验里，一点浪费似乎无伤大雅，但一旦训练规模变大，低效就会被成倍放大。最后省下来的不只是几个 token，而是整套训练预算和时间成本。这样看，算法优化并不是小修小补，而是在大规模时代变得更值钱了。

**参考链接**：
- [The Bitter Lesson - Rich Sutton](http://www.incompleteideas.net/IncIdeas/BitterLesson.html)

## 第二组：分词技术（Tokenization）

### BPE 到底在做什么？它为什么会成为一种常见的分词方法？

思考：BPE 最有意思的地方，在于它不是单纯地”把文字切开”，而是在做一种压缩上的折中。它不断把高频相邻片段合并进词表里，让常见模式用更短的 token 表达出来，于是词表大小和序列长度之间就形成了一种平衡。

感想：这样理解之后，分词就不只是前处理步骤了，而更像是模型效率设计的一部分。它在很早的地方就决定了后面训练到底会轻松还是笨重。

**参考链接**：
- [Neural Machine Translation of Rare Words with Subword Units](https://arxiv.org/abs/1508.07909)

### 为什么讲师会特别强调压缩率？为什么压缩率为 1 会非常糟糕？

思考：讲师反复提压缩率，也是在提醒我们，分词方案的好坏不能只看”能不能表示文本”，还要看它会不会把序列拖得过长。纯字节级编码虽然干净，但压缩率几乎为 1，意味着文本没有真正被压缩。

感想：一旦想到 attention 的计算会随着序列长度快速膨胀，就很容易明白为什么这种做法会如此低效。原来”分得太细”不是表达更精确，而是可能直接把训练成本推高。

**参考链接**：
- [OpenAI tiktoken](https://github.com/openai/tiktoken)

### 这些 token 最后是怎么还原回文本的？

思考：解码这件事也让我对词表有了更具体的感觉。模型最后输出的并不是直接可读的文字，而是 token id；这些 id 还要通过词表映射回字节片段，再重新拼成字符串。

感想：所以词表并不是一个附属表格，它其实同时参与了编码和解码，决定了模型如何看到文本，也决定了我们如何把模型输出重新读懂。

**参考链接**：
- [OpenAI tiktoken](https://github.com/openai/tiktoken)

## 第三组：模型架构与涌现行为

### 为什么课程会强调 Transformer 自 2017 年以来已经发生了很多变化？

思考：虽然我们还在说 Transformer，但今天的大模型其实早就不是 2017 年论文里的原始版本了。课程里提到的很多改进，比如 SwiGLU、RoPE、RMSNorm、GQA，本质上都在说明一个事实：主干架构没有被推翻，但细节已经被一轮又一轮地重新雕过。

感想：这会让我觉得，”还是 Transformer”这句话某种程度上有点误导。因为看起来名字没变，但内部很多关键部件已经被替换掉了。真正重要的，也许正是这些长期累积起来的小改动。

**参考链接**：
- [RoFormer: Enhanced Transformer with Rotary Position Embedding](https://arxiv.org/abs/2104.09864)
- [GLU Variants Improve Transformer](https://arxiv.org/abs/2002.05202)
- [GQA in Llama 2](https://arxiv.org/abs/2307.09288)

### 为什么小模型上的实验结果，可能会误导我们对大模型能力的判断？

思考：关于涌现的部分也很有冲击力。课程想提醒的不是”能力会神秘出现”，而是小模型上的结果可能会让人过早地下结论。有些能力在小规模时几乎看不出来，但一旦越过某个规模阈值，表现会突然跳出来。

感想：这让我重新理解了为什么研究里会有那么多”看起来没效果，后来却很重要”的方向。如果只盯着小模型曲线，很容易误判一个方法没有前途；而真正的问题可能只是，它还没有到该显现能力的规模。

**参考链接**：
- [Emergent Abilities of Large Language Models](https://arxiv.org/abs/2206.07682)

## 第四组：规模定律（Scaling Laws）与对齐（Alignment）

### 什么叫 “Chinchilla 最优”？它到底在回答什么问题？

思考：Chinchilla 最优最打动我的地方，是它把”模型做大”这件事从一种直觉，变成了一个更讲分配的问题。课程里给出的经验法则 D ≈ 20N，其实是在说：参数量和数据量要一起看，不能只盯着其中一个维度。

感想：这会让我觉得，大模型并不是越大越强，而是越大越需要被”喂饱”。如果参数不断上去，但数据没有跟上，最后得到的可能只是一个看起来很大、实际却没有被充分训练的模型。

**参考链接**：
- [Training Compute-Optimal Large Language Models (Chinchilla)](https://arxiv.org/abs/2203.15556)

### SFT 和 DPO/GRPO 这类方法最本质的区别是什么？

思考：SFT 和 DPO/GRPO 的区别，也不只是训练步骤不同，而是它们在学习不同类型的信号。SFT 学的是一个比较明确的”标准回答”，而 DPO、GRPO 学的是偏好和奖励，也就是哪种回答更被认可。

感想：这样一对比，就会发现”对齐”并不是简单地继续做监督学习，而是在把模型从”会答题”慢慢推向”答得更符合人类偏好”。它关注的不只是正确性，还包括回答风格、取舍和偏好结构。

**参考链接**：
- [Direct Preference Optimization](https://arxiv.org/abs/2305.18290)

### 为什么 GRPO 会被单独拿出来讨论？

思考：GRPO 被单独提出来，也说明现在大家很在意反馈学习的效率问题。比起更重的 RLHF 流程，它试图用更简化的目标减少训练负担。

感想：这一点和前面讲的效率问题其实是连在一起的。哪怕到了对齐阶段，讨论的也不只是效果本身，而是效果能不能用更可承受的代价得到。

**参考链接**：
- [DeepSeekMath: GRPO](https://arxiv.org/abs/2402.03300)
