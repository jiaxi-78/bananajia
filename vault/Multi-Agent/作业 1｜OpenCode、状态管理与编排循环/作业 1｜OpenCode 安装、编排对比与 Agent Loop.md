---
id: 'multi-agent-opencode-homework-01'
category: 'multi-agent'
chapter: 'multi-agent-homework-01'
course: 'Multi-Agent'
title_zh: '作业 1|OpenCode 安装、编排对比与 Agent Loop'
title_en: 'Homework 1 | OpenCode Setup, Orchestration Comparison, and the Agent Loop'
summary_zh: '完成 OpenCode 安装与国产模型配置,对比裸 API 调用和编排式智能体的差异,并梳理 OpenCode 的观察-思考-行动-更新状态闭环。'
summary_en: 'OpenCode setup with a domestic model provider, a comparison between raw API usage and orchestrated agents, and a walkthrough of OpenCode's observe-think-act-update loop.'
tags:
  - Multi-Agent
  - OpenCode
  - Agent Loop
  - Homework
---

# 作业 1|OpenCode 安装、编排对比与 Agent Loop

> 安装 OpenCode、完成国产模型配置,对比裸 API 调用和编排式智能体,并理解"观察 → 思考 → 行动 → 更新状态"的核心闭环。

## 本节作业概览

这次作业分三部分:

- 任务 1:安装 OpenCode 并完成环境配置
- 任务 2:对比实验:裸 API 调用 vs OpenCode 编排
- 任务 3:阅读 OpenCode 源码中的编排循环(选学)

我这次把材料整理成一个可直接提交到个人网站的作业页,安装结果、截图、对比体会和源码入口都放在同一处。

## 任务 1:安装 OpenCode 并完成环境配置

我参考了官方 README 完成安装,并配置了国产模型兼容的 API。当前这次实验使用的是可兼容 OpenAI 接口的模型服务,重点不在具体某一家,而在于 OpenCode 作为编排器能否稳定接管对话状态、工具调用和执行流程。

- [OpenCode 官方仓库](https://github.com/anomalyco/opencode)
- [官方 README 安装说明](https://github.com/anomalyco/opencode#installation)

下面两张图分别对应:

- `opencode` 启动和环境就绪
- 第一次对话成功

![截图 1|OpenCode 启动界面](/uploads/multi-agent/homework-01/opencode-home.png)

![截图 2|第一次对话成功](/uploads/multi-agent/homework-01/opencode-first-chat.png)

如果只把这一步当成"装好一个 CLI",其实还没抓到重点。真正关键的是:它不是单次 API 请求工具,而是带状态、带工具、带循环的智能体运行环境。

## 任务 2:对比实验:裸 API 调用 vs OpenCode 编排

### 一个最小的裸 API 版本

下面是一个最小化的 Python 调用示例。它能把 prompt 发给模型,但它本身并不会读文件、不会跑命令、不会维护会话,也不会自动把观察结果回填到下一轮推理里。

LLM Stream Events:


### 我的体会:什么是"无状态"和"有状态"

裸 API 更像一次性的函数调用:我要自己读文件、拼 prompt、管理上下文、决定下一步要不要继续调工具。它是"无状态"的,不是模型完全没有上下文,而是这个上下文要由我自己在每一轮手动维护。OpenCode 则更像一个带运行时的智能体:我只说"分析这个文件",它会自己观察环境、决定要不要读文件、执行命令、继续追问,并把这些结果放回同一个会话状态里。所以差异不只是"界面更好",而是编排器把 ReAct 闭环接了起来:观察 -> 思考 -> 行动 -> 更新状态 -> 再观察。也因为这样,OpenCode 更接近真正可持续工作的 agent,而不是一次性聊天接口。

### 这两种方式的差异

- 裸 API:能力原子化,控制权高,但所有工具和状态都要自己接
- OpenCode:控制权少一点,但把工具调用、会话延续、状态更新和下一步动作都编排进去了
- 裸 API 更适合做单点能力验证
- OpenCode 更适合做"连续完成任务"的工作流

从工程角度看,我这次最明显的感受不是"哪个更聪明",而是"哪个更像系统"。裸 API 是一个接口,OpenCode 才开始接近一个真正的 agent runtime。

## 任务 3：阅读 OpenCode 源码中的编排循环（选学）

OpenCode 当前官方仓库：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

### 关键源码文件

| 文件 | 作用 |
|------|------|
| `packages/opencode/src/session/prompt.ts` | **主循环入口**，`runLoop()` 函数是 Agent Loop 的核心 |
| `packages/opencode/src/session/processor.ts` | 事件驱动的 LLM 流处理器，处理 thinking/tool/text 事件 |
| `packages/opencode/src/session/llm.ts` | LLM 调用层，组装 system prompt + messages + tools |
| `packages/opencode/src/session/compaction.ts` | 上下文压缩，token 超限时自动摘要历史消息 |
| `packages/opencode/src/agent/agent.ts` | Agent 定义（build/plan/subagent） |

### Agent Loop 核心结构

主循环位于 `prompt.ts` 的 `runLoop()` 函数，核心是一个 **`while (true)` 循环**，结合 `processor.ts` 的事件流驱动模式：

LLM Stream Events:


### 事件流驱动模型

`processor.ts` 不是简单的请求-响应，而是通过 **Effect.js Stream** 处理 LLM 流事件：

``n
LLM Stream Events:
├── reasoning-start / reasoning-delta / reasoning-end  → 思维链（thinking）
├── tool-input-start / tool-input-delta / tool-input-end → 工具输入参数
├── tool-call → 发起工具调用
├── tool-result → 工具执行结果写回 session
├── text-start / text-delta / text-end → 文本输出
├── finish-step → 单步完成，计算 token 用量/费用
└── error → 错误处理 + 重试逻辑
```

每个事件都实时写入 session（通过 `session.updatePart()` / `session.updatePartDelta()`），实现流式 UI 更新。

### 关键设计决策

**1. Doom Loop 检测**：如果连续 3 次调用同一工具 + 相同输入参数，自动弹出权限确认，防止无限循环。

**2. 上下文压缩（Compaction）**：当消息 token 超过模型上下文窗口限制时，自动触发 `compaction.ts`：
- 用小模型生成对话摘要
- 压缩后替换历史消息
- 保留关键决策和代码变更信息
- 压缩完成后继续循环（不丢失任务状态）

**3. Subtask 子任务**：支持将复杂任务拆分为子 session，主循环会先处理子任务完成后再继续。

**4. 双 Agent 模式**：
- `build` agent：默认，完整读写权限，执行开发任务
- `plan` agent：只读模式，用于代码探索和方案设计
- 可通过 Tab 键切换，plan → build 切换时会注入过渡提示词

**5. 重试机制**：`SessionRetry` 提供指数退避重试，对 API 限流和临时错误自动恢复。

### 观察 → 思考 → 行动 → 更新状态 的映射

| ReAct 阶段 | OpenCode 实现 |
|------------|--------------|
| **观察 (Observe)** | 读取 session 消息 + 文件系统快照 + LSP 诊断信息 |
| **思考 (Think)** | LLM 生成 reasoning（思维链）+ 选择工具/生成文本 |
| **行动 (Act)** | 执行工具调用（shell/文件/MCP/LSP） |
| **更新状态 (Update)** | 工具结果写回 session → 消息历史更新 → UI 实时渲染 |

这与任务 2 中的裸 API 形成鲜明对比：裸 API 只覆盖了"思考"这一步，而 OpenCode 把四个阶段串成了一个持续运行的闭环。

这也是我这次把它和"裸 API"区分开的关键：OpenCode 不是简单包了一层聊天接口，而是把状态管理、工具执行和循环调度合在一起了。

## 小结

这次作业让我更清楚地区分了三件事:

- `模型 API`:给你一个生成接口
- `工具系统`:给模型接上读文件、执行命令、搜索等能力
- `编排循环`:让模型能在一个有状态的任务环境里持续工作

如果只用裸 API,我拿到的是一个回答器;如果加上 OpenCode 这种编排器,我开始接近一个真正能工作的 agent。

