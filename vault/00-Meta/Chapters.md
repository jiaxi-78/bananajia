---
type: 'chapters'
---

# 章节目录

| 编号 | 标题 | 分类 | 描述 |
|------|------|------|------|
| 01 | 第一节课｜从零构建语言模型 | DIY LLM | 课程哲学、分词、模型架构、Scaling Laws 与对齐的第一轮总览。 |
| 02 | Chapter 2｜分词器 | DIY LLM | 围绕 tokenizer、BPE、数据预处理和系统成本整理的章节笔记。 |
| 03 | 第二节课｜PyTorch 与优化器 | DIY LLM | 张量视图、stride、einsum、反向传播和常用优化器的可视化笔记。 |
| 04 | Chapter 4｜语言模型架构和训练细节 | DIY LLM | 位置编码、Transformer 数据流、注意力细节、归一化、GLU 与 RoPE。 |
| 06 | Chapter 13｜大模型的基本训练流程 | DIY LLM | 预训练、SFT、RLHF、PPO 与 DPO 的主线梳理，以及自回归、JSONL、assistant loss、预算强制等关键概念。 |
| 01 | LLM 应用的三层能力｜从纯对话到 RAG | 随笔 | 纯对话、Tool Calling 和 RAG 各自在做什么，怎么实现，直接 SDK 和 LangChain 怎么选。 |
| 01 | 基础概念｜Stateless 与聚合指标 | System Design | Stateless Web Tier、serverless 的区别，以及 aggregated metrics 和 instance-level metrics 怎么配合。 |
| 02 | 容量估算｜纸上估算 | System Design | 用合理假设、单位换算和数量级思维估算 QPS、存储、带宽和可用性。 |
| 03 | 扩容路径｜从零到百万用户 | System Design | 单机、负载均衡、数据库复制、缓存、CDN、无状态服务、消息队列和分片的演进顺序。 |
| 04 | 限流器｜分布式状态与计数器 | System Design | 固定窗口、middleware、中心 Redis、TTL、分片和分层限流。 |

### 第一节课｜从零构建语言模型
---
id: 'lesson-1'
category: 'diy-llm'
code: '01'
title_zh: '第一节课｜从零构建语言模型'
title_en: 'Lesson 1 | Building a Language Model from Scratch'
description_zh: '课程哲学、分词、模型架构、Scaling Laws 与对齐的第一轮总览。'
description_en: 'A first overview of course philosophy, tokenization, model architecture, scaling laws, and alignment.'
---

### Chapter 2｜分词器
---
id: 'chapter-2'
category: 'diy-llm'
code: '02'
title_zh: 'Chapter 2｜分词器'
title_en: 'Chapter 2 | Tokenizers'
description_zh: '围绕 tokenizer、BPE、数据预处理和系统成本整理的章节笔记。'
description_en: 'Chapter notes on tokenizers, BPE, data preprocessing, and system-level costs.'
---

### 第二节课｜PyTorch 与优化器
---
id: 'lesson-2'
category: 'diy-llm'
code: '03'
title_zh: '第二节课｜PyTorch 与优化器'
title_en: 'Lesson 2 | PyTorch and Optimizers'
description_zh: '张量视图、stride、einsum、反向传播和常用优化器的可视化笔记。'
description_en: 'Visual notes on tensor views, stride, einsum, backpropagation, and common optimizers.'
---

### Chapter 4｜语言模型架构和训练细节
---
id: 'chapter-4'
category: 'diy-llm'
code: '04'
title_zh: 'Chapter 4｜语言模型架构和训练细节'
title_en: 'Chapter 4 | Language Model Architecture and Training Details'
description_zh: '位置编码、Transformer 数据流、注意力细节、归一化、GLU 与 RoPE。'
description_en: 'Positional encoding, Transformer data flow, attention details, normalization, GLU, and RoPE.'
---

### Chapter 13｜大模型的基本训练流程
---
id: 'chapter-13'
category: 'diy-llm'
code: '06'
title_zh: 'Chapter 13｜大模型的基本训练流程'
title_en: 'Chapter 13 | The Basic Training Pipeline of LLMs'
description_zh: '预训练、SFT、RLHF、PPO 与 DPO 的主线梳理，以及自回归、JSONL、assistant loss、预算强制等关键概念。'
description_en: 'A structured overview of pre-training, SFT, RLHF, PPO, and DPO, including key concepts like autoregression, JSONL, assistant-only loss, and budget forcing.'
---

### LLM 应用的三层能力｜从纯对话到 RAG
---
id: 'llm-quickstart-template'
category: 'essays'
code: '01'
title_zh: 'LLM 应用的三层能力｜从纯对话到 RAG'
title_en: 'Three Layers of LLM Apps | From Chat to RAG'
description_zh: '纯对话、Tool Calling 和 RAG 各自在做什么，怎么实现，直接 SDK 和 LangChain 怎么选。'
description_en: 'What plain chat, tool calling, and RAG each do, how they work, and when to use raw SDK vs LangChain.'
---

### 基础概念｜Stateless 与聚合指标
---
id: 'system-design-basics'
category: 'system-design'
code: '01'
title_zh: '基础概念｜Stateless 与聚合指标'
title_en: 'Basics | Stateless and Aggregated Metrics'
description_zh: 'Stateless Web Tier、serverless 的区别，以及 aggregated metrics 和 instance-level metrics 怎么配合。'
description_en: 'The difference between stateless web tiers and serverless, plus how aggregated metrics work with instance-level metrics.'
---

### 容量估算｜纸上估算
---
id: 'system-design-estimation'
category: 'system-design'
code: '02'
title_zh: '容量估算｜纸上估算'
title_en: 'Capacity | Back-of-the-envelope Estimation'
description_zh: '用合理假设、单位换算和数量级思维估算 QPS、存储、带宽和可用性。'
description_en: 'Using assumptions, units, and order-of-magnitude thinking to estimate QPS, storage, bandwidth, and availability.'
---

### 扩容路径｜从零到百万用户
---
id: 'system-design-scaling'
category: 'system-design'
code: '03'
title_zh: '扩容路径｜从零到百万用户'
title_en: 'Scaling | From Zero to Millions'
description_zh: '单机、负载均衡、数据库复制、缓存、CDN、无状态服务、消息队列和分片的演进顺序。'
description_en: 'The evolution from a single server to load balancing, replication, cache, CDN, stateless services, queues, and sharding.'
---

### 限流器｜分布式状态与计数器
---
id: 'system-design-rate-limiter'
category: 'system-design'
code: '04'
title_zh: '限流器｜分布式状态与计数器'
title_en: 'Rate Limiter | Distributed State and Counters'
description_zh: '固定窗口、middleware、中心 Redis、TTL、分片和分层限流。'
description_en: 'Fixed windows, middleware, central Redis, TTLs, sharding, and layered rate limiting.'
---
