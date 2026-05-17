---
id: 'multi-agent-agents-memory-homework-02'
category: 'multi-agent'
chapter: 'multi-agent-homework-02'
course: 'Multi-Agent'
title_zh: '作业 2｜AGENTS.md、Memory 对比与遗漏补全'
title_en: 'Homework 2 | AGENTS.md, Memory Comparison, and Missing Rules'
summary_zh: '基于自己的多 Agent 项目整理 AGENTS.md 的 7 个组成部分，对比有无 Memory 时的实现差异，并补充遗漏的操作约束。'
summary_en: 'A structured AGENTS.md for a multi-agent project, plus a comparison between runs with and without memory, and a refinement of missing operational rules.'
tags:
  - Multi-Agent
  - AGENTS
  - Memory
  - Homework
---

# 作业 2｜AGENTS.md、Memory 对比与遗漏补全

> 这一节的重点不是“写一份说明文档”，而是把项目的长期约束写成 Agent 能持续执行的 Memory。

## 本节作业概览

本次作业分三部分：

- 任务 1：为项目编写 AGENTS.md
- 任务 2：对比实验：有 Memory vs 无 Memory
- 任务 3：思考题：你的 Memory 遗漏了什么

我选用的是自己正在做的一个多 Agent 知识整理项目。这个项目的核心不是单个聊天接口，而是把采集、分析、整理、报告输出拆成多个职责明确的 agent，并保证数据链路可追溯。

## 任务 1：为项目编写 AGENTS.md

### 1. 项目概述

这个项目的目标是：围绕给定主题，从多个来源采集信息，完成清洗、分析、去重、评分，并最终生成带来源引用的结构化报告。整个系统不是“大模型一次性回答”，而是一个多 Agent 协同的数据处理工作流。

### 2. 技术栈

- Python 3.12
- OpenCode
- LangGraph
- OpenClaw

### 3. 编码规范

- 遵循 PEP 8
- 统一使用 `snake_case`
- 统一使用 Google 风格 docstring
- 禁止裸 `print()`，调试和运行日志走 logging

### 4. 项目结构

```text
knowledge_app/
  collector.py
  analyzer.py
  curator.py
  renderer.py
  auth.py
  models/
  pipelines/
tests/
  test_normalize.py
  test_score.py
  test_dedupe.py
  test_render.py
data/
  raw/
  processed/
reports/
AGENTS.md
```

这个结构的重点不是目录好不好看，而是职责边界清楚：采集、分析、整理、渲染彼此独立，不要在一个大文件里把所有逻辑揉在一起。

### 5. 知识条目的 JSON 格式

```json
{
  "id": "item_001",
  "topic": "multi-agent memory",
  "title": "Why project memory matters",
  "summary": "A short normalized summary of the source.",
  "source_url": "https://example.com/post",
  "source_type": "blog",
  "collected_at": "2026-05-17T20:30:00Z",
  "score": 0.87,
  "tags": ["memory", "agents"],
  "raw_content_path": "data/raw/item_001.json"
}
```

这里最关键的字段不是 `summary`，而是 `source_url` 和 `raw_content_path`。没有这两个字段，后面的结论就不可追溯，报告也不可靠。

### 6. Agent 角色概览

| 角色 | 责任 | 输入 | 输出 |
|------|------|------|------|
| 采集（collector） | 抓取原始资料，保存 raw data | 主题、来源列表 | 原始网页/文档/结构化抓取结果 |
| 分析（analyzer） | 提取主题、摘要、标签、评分 | raw data | 标准化后的知识条目 |
| 整理（curator） | 去重、聚合、排序、组装主线 | 知识条目列表 | 高质量条目集合 |
| 渲染（renderer） | 输出最终报告 | 整理后的条目 | 带来源引用的 Markdown / HTML 报告 |

### 7. 红线（绝对禁止的操作）

- 不允许在没有保存 raw data 的情况下直接覆盖原始来源
- 不允许在最终报告里写没有来源 URL 支撑的结论
- 不允许把 collector、analyzer、curator、renderer 的逻辑硬耦合到一个模块里
- 不允许把测试绕过后直接声称“功能完成”
- 不允许因为单个来源失败而直接让整份报告生成失败

### 一版 AGENTS.md 的核心样子

```markdown
# AGENTS.md

## 1. Project Overview
This project builds a multi-agent knowledge pipeline for collecting, analyzing,
curating, and rendering source-backed reports.

## 2. Tech Stack
- Python 3.12
- OpenCode
- LangGraph
- OpenClaw

## 3. Coding Rules
- PEP 8
- snake_case
- Google-style docstrings
- no bare print()

## 4. Project Structure
- collector
- analyzer
- curator
- renderer
- tests
- data/raw

## 5. Knowledge Item JSON
- every item must keep source_url
- every item must keep raw_content_path

## 6. Agent Roles
- collector
- analyzer
- curator
- renderer

## 7. Red Lines
- no unsourced claims
- no skipping raw data
- no tightly coupled agent modules
```

## 任务 2：对比实验：有 Memory vs 无 Memory

这次我使用相同的编程指令，让 OpenCode 在两种条件下生成实现：

- 一次保留 `AGENTS.md`
- 一次删除 `AGENTS.md`

测试指令是类似“写一个用户登录接口”这样的任务。结果差异非常明显。

![有 Memory vs 无 Memory 的实现差异](/uploads/multi-agent/homework-02/memory-vs-no-memory.png)

### 整体设计差异

| 维度 | 上一次无 AGENTS 约束实现 | 现在有 AGENTS 约束实现 |
|------|------|------|
| 用户来源 | SQLite `users` 表 | 环境变量 |
| 会话 / token | 数据库 `user_sessions` 表保存 session token hash | HMAC 签名 token，不落库 |
| 密码存储 | `pbkdf2_sha256` hash 存 DB | 不存密码，只校验环境变量 |
| 数据库变更 | 新增 `users`、`user_sessions` 表和索引 | 无数据库变更 |
| 代码位置 | 大量认证逻辑放进 `database.py` | 独立 `knowledge_app/auth.py` |
| API 返回字段 | `token` | `tokenType`、`accessToken`、`expiresAt`、`user` |
| 用户创建 | 需要先调用 `create_user()` | 配置环境变量即可 |
| 测试方式 | 启动真实 HTTP server 测 `/api/login` | 直接测 `login()` 逻辑 |
| 改动范围 | 较大，涉及 README、DB schema、API、测试 | 较小，涉及 auth 模块、API、env、测试 |
| 复杂度 | 更完整，但重 | 更轻量，但不是多用户系统 |

### 我观察到的差异

没有 Memory 时，Agent 倾向于“按通用后端模板做一个完整认证系统”，所以自然会引入 SQLite、user 表、session 表、密码 hash 和更大的改动范围。这个实现不一定错，但它更像“默认工程解法”，而不是“贴合当前项目边界的解法”。

有 Memory 时，Agent 明显更贴近项目约束：它知道这个项目重点不是多用户 SaaS，而是一个知识处理系统，所以选择了更轻的环境变量认证方式，把改动限制在独立的 `auth.py` 模块里，也更符合“优先做小而可验证的改动”这条规则。

所以这次对比里，Memory 带来的提升不只是代码风格更统一，而是：

- 改动范围更收敛
- 模块边界更清晰
- 更符合项目真实需求
- 更少“默认过度设计”

## 任务 3：思考题：你的 Memory 遗漏了什么？

这部分反而是最有价值的。因为第一次写完 AGENTS.md 之后，我发现 Agent 虽然知道技术栈和风格规则，但还不够理解“这个项目应该怎么做工程决策”。

也就是说，缺的不是语法层规则，而是操作层规则。

### 后来补上的 agent 操作建议

- 优先做小而可验证的改动
- 保持 `collector`、`analyzer`、`curator`、`renderer` 解耦
- 尽可能先保存 raw data，再进行转换
- 最终报告中的每条结论都要保留来源 URL
- 为归一化、评分、去重和报告渲染添加测试
- 某个来源失败时应优雅降级，继续生成部分报告

### 这些补充为什么重要

前一版 AGENTS.md 更多是在定义“代码怎么写”，后一版开始定义“系统应该怎么演进”。这两者的差异很大：

- 风格规则只会影响写法
- 操作规则会影响架构决策、模块边界和实现范围

这也是我这次作业里最大的收获：如果只写“PEP 8、snake_case、禁止 print”，Agent 会更整洁，但不一定更懂你的项目。真正有用的 Memory，必须把项目的工程偏好也写进去。

## 小结

这次作业让我更明确地看到，AGENTS.md 不只是给 Agent 一个“代码规范清单”，而是把项目记忆写成可执行约束。

对我这个项目来说，真正重要的不是让 Agent 学会更漂亮地写代码，而是让它知道：

- 什么改动是合理边界内的
- 什么设计太重
- 什么信息必须可追溯
- 哪些模块绝对不能耦合

当这些规则写进 Memory 之后，Agent 的输出就不只是“更规范”，而是“更像这个项目本来就该有的实现”。
