---
id: 'multi-agent-opencode-homework-01'
category: 'multi-agent'
chapter: 'multi-agent-homework-01'
course: 'Multi-Agent'
title_zh: '作业 1｜OpenCode 安装、编排对比与 Agent Loop'
title_en: 'Homework 1 | OpenCode Setup, Orchestration Comparison, and the Agent Loop'
summary_zh: '完成 OpenCode 安装与国产模型配置，对比裸 API 调用和编排式智能体的差异，并梳理 OpenCode 的观察-思考-行动-更新状态闭环。'
summary_en: 'OpenCode setup with a domestic model provider, a comparison between raw API usage and orchestrated agents, and a walkthrough of OpenCode’s observe-think-act-update loop.'
tags:
  - Multi-Agent
  - OpenCode
  - Agent Loop
  - Homework
---

# 作业 1｜OpenCode 安装、编排对比与 Agent Loop

> 安装 OpenCode、完成国产模型配置，对比裸 API 调用和编排式智能体，并理解“观察 → 思考 → 行动 → 更新状态”的核心闭环。

## 本节作业概览

这次作业分三部分：

- 任务 1：安装 OpenCode 并完成环境配置
- 任务 2：对比实验：裸 API 调用 vs OpenCode 编排
- 任务 3：阅读 OpenCode 源码中的编排循环（选学）

我这次把材料整理成一个可直接提交到个人网站的作业页，安装结果、截图、对比体会和源码入口都放在同一处。

## 任务 1：安装 OpenCode 并完成环境配置

我参考了官方 README 完成安装，并配置了国产模型兼容的 API。当前这次实验使用的是可兼容 OpenAI 接口的模型服务，重点不在具体某一家，而在于 OpenCode 作为编排器能否稳定接管对话状态、工具调用和执行流程。

- [OpenCode 官方仓库](https://github.com/anomalyco/opencode)
- [官方 README 安装说明](https://github.com/anomalyco/opencode#installation)

下面两张图分别对应：

- `opencode` 启动和环境就绪
- 第一次对话成功

![截图 1｜OpenCode 启动界面](/uploads/multi-agent/homework-01/opencode-home.png)

![截图 2｜第一次对话成功](/uploads/multi-agent/homework-01/opencode-first-chat.png)

如果只把这一步当成“装好一个 CLI”，其实还没抓到重点。真正关键的是：它不是单次 API 请求工具，而是带状态、带工具、带循环的智能体运行环境。

## 任务 2：对比实验：裸 API 调用 vs OpenCode 编排

### 一个最小的裸 API 版本

下面是一个最小化的 Python 调用示例。它能把 prompt 发给模型，但它本身并不会读文件、不会跑命令、不会维护会话，也不会自动把观察结果回填到下一轮推理里。

```python
from openai import OpenAI
from pathlib import Path
import os

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
    base_url=os.getenv("OPENAI_BASE_URL"),
)

target_file = Path("example.py")
code = target_file.read_text(encoding="utf-8")

prompt = f"""
Please review the following Python file.

Focus on:
1. bugs
2. code style
3. possible refactors

File content:
{code}
"""

resp = client.chat.completions.create(
    model=os.getenv("OPENAI_MODEL", "deepseek-chat"),
    messages=[
        {"role": "system", "content": "You are a careful code reviewer."},
        {"role": "user", "content": prompt},
    ],
    temperature=0.2,
)

print(resp.choices[0].message.content)
```

### 我的体会：什么是“无状态”和“有状态”

裸 API 更像一次性的函数调用：我要自己读文件、拼 prompt、管理上下文、决定下一步要不要继续调工具。它是“无状态”的，不是模型完全没有上下文，而是这个上下文要由我自己在每一轮手动维护。OpenCode 则更像一个带运行时的智能体：我只说“分析这个文件”，它会自己观察环境、决定要不要读文件、执行命令、继续追问，并把这些结果放回同一个会话状态里。所以差异不只是“界面更好”，而是编排器把 ReAct 闭环接了起来：观察 -> 思考 -> 行动 -> 更新状态 -> 再观察。也因为这样，OpenCode 更接近真正可持续工作的 agent，而不是一次性聊天接口。

### 这两种方式的差异

- 裸 API：能力原子化，控制权高，但所有工具和状态都要自己接
- OpenCode：控制权少一点，但把工具调用、会话延续、状态更新和下一步动作都编排进去了
- 裸 API 更适合做单点能力验证
- OpenCode 更适合做“连续完成任务”的工作流

从工程角度看，我这次最明显的感受不是“哪个更聪明”，而是“哪个更像系统”。裸 API 是一个接口，OpenCode 才开始接近一个真正的 agent runtime。

## 任务 3：阅读 OpenCode 源码中的编排循环（选学）

OpenCode 当前官方仓库在这里：

- [OpenCode 官方仓库](https://github.com/anomalyco/opencode)

这次我重点看的主循环入口是：

- [packages/opencode/src/session/prompt.ts](https://github.com/anomalyco/opencode/blob/2a1305f2315d8d0625a75b4627cc6c8292abb486/packages/opencode/src/session/prompt.ts)

如果只从结构上理解，它的核心不是“调一次模型”，而是围绕 session 持续运行一个 loop。这个 loop 每一轮都会：

1. 取出当前 session 的消息和状态
2. 判断上一个 assistant 输出是否结束，还是还需要继续处理 tool calls
3. 如果有 subtask 或 compaction，先处理这些中间任务
4. 解析当前 agent、model、可用 tools 和 system prompt
5. 调模型生成下一步
6. 如果模型发起工具调用，就执行工具，再把结果写回 session
7. 如果结果还没完成，就继续下一轮

可以把它抽象成下面这个闭环：

```text
while session not finished:
    observe current messages and session state
    decide whether the assistant is done
    if there are pending tool calls:
        execute tools
        write tool outputs back to session
        continue

    if there are subtasks or compaction tasks:
        handle them first
        continue

    assemble prompts, tools, permissions, and model context
    call the model
    store assistant output into session

    if assistant requests more tool work:
        continue
    if assistant finishes normally:
        break
```

这也是我这次把它和“裸 API”区分开的关键：OpenCode 不是简单包了一层聊天接口，而是把状态管理、工具执行和循环调度合在一起了。

## 小结

这次作业让我更清楚地区分了三件事：

- `模型 API`：给你一个生成接口
- `工具系统`：给模型接上读文件、执行命令、搜索等能力
- `编排循环`：让模型能在一个有状态的任务环境里持续工作

如果只用裸 API，我拿到的是一个回答器；如果加上 OpenCode 这种编排器，我开始接近一个真正能工作的 agent。
