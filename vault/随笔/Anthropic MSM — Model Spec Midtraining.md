---
tags:
  - AI
  - alignment
  - paper
date: 2026-05-06
---

# Anthropic MSM — Model Spec Midtraining

## 核心思路

在预训练和微调之间插一个新阶段：让模型先理解自己的行为规范（Model Spec），再学具体行为。

```
预训练 → 【MSM】→ 对齐微调（SFT/RLHF）
              ↑
         新插入的训练阶段
```

**目标：做正确的事，且出于正确的原因。**

## 解决什么问题

现有对齐方法（SFT/RLHF）只教"做什么"，没教"为什么"。
→ 模型在未见场景下泛化失败（勒索、泄密、alignment faking）

## 方法

MSM 阶段用**合成文档**训练模型，这些文档讨论 Model Spec 的内容：
- **What** — 规范是什么
- **Why** — 为什么要遵守

## 关键实验

**奶酪实验**：两个模型用完全相同的微调数据（奶酪偏好），但 MSM 阶段给了不同 Spec：
- 模型 A：奶酪偏好 = 追求性价比 → 在艺术、交通领域也推崇便宜的
- 模型 B：奶酪偏好 = 支持美国文化 → 在政治领域也推崇美国的

**同样的微调数据 + 不同的 MSM = 完全不同的泛化方向**

## 跨模型验证

在 Llama 3.1-8B 和 Qwen2.5-7B 上都验证有效。

## 为什么值得关注

1. **泛化控制** — 可以通过 MSM 指定模型的泛化方向
2. **减少 Agent misalignment** — 显著降低未见场景下的不道德行为
3. **可复现** — 代码开源

## 链接

- 论文：https://arxiv.org/abs/2605.02087
- 代码：https://github.com/chloeli-15/model_spec_midtraining
- 博客：https://alignment.anthropic.com/2026/msm/

## 与 Qwen LoRA 项目的关联

MSM 思路可以应用到 Qwen3.6 上：
- Agent 自进化也需要底层规范来指导泛化
- 不只是改行为，先改"理解"
