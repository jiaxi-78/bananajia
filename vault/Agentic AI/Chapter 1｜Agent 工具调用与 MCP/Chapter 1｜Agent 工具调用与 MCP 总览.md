---
id: 'agentic-ai-note-01'
category: 'agentic-ai'
chapter: 'chapter-1'
course: 'Agentic AI 智能体开发实战'
date: 'Card 01'
title_zh: 'Chapter 1｜Agent 工具调用与 MCP 总览'
title_en: 'Chapter 1 | Agent Tool Use and MCP Overview'
summary_zh: '整理第一章的主线：从提示词解析式工具调用，到 Function Calling，再到 MCP 标准化工具协议，最后落到 GAME 框架里的 Agent 主循环。'
summary_en: 'A first-pass map of Chapter 1: from prompt-parsed tool use, to Function Calling, to MCP as a standardized tool protocol, and finally to the Agent loop in the GAME framework.'
tags: []
---

# Chapter 1｜Agent 工具调用与 MCP 总览

> 整理第一章的主线：从提示词解析式工具调用，到 Function Calling，再到 MCP 标准化工具协议，最后落到 GAME 框架里的 Agent 主循环。

## 第一组：Agent 为什么需要工具调用？

### 如果大模型已经会回答问题，为什么还要让它调用工具？

思考：大模型本身更像一个语言推理和生成核心，但它并不天然拥有实时数据、外部系统权限，也不能直接执行本地文件读取、天气查询、数据库检索这类动作。工具调用就是把模型从“只会说”扩展成“能请求外部能力”的关键一步。

在第一章里，最简单的例子是让模型通过 `list_files` 和 `read_file` 读取项目文件；MCP 示例里则是让模型通过天气工具获取和风天气 API 的实时数据。这两类例子背后的共同点是：模型负责判断“该不该用工具、用哪个工具、参数是什么”，工具负责执行确定性的外部动作。

感想：这让我觉得 Agent 的本质不是“模型突然变聪明了”，而是系统把模型放进了一个可行动的环境里。模型负责决策，工具负责接触世界，两者之间的接口设计就变得非常重要。

卡片版总结：工具调用让 LLM 从纯文本生成器变成可以访问外部能力的 Agent。模型不直接拥有实时信息和系统权限，而是通过工具完成查询、读取、计算、执行等动作。

## 第二组：提示词解析式工具调用为什么脆弱？

### `01-AgentWithTools.ipynb` 里的 Prompt-Parsed Tool Agent 在解决什么问题？

思考：这个 notebook 展示的是一种最朴素的 Agent 写法：在 prompt 里告诉模型按指定格式输出 JSON，然后程序再从模型回复里解析出工具名和参数，最后用本地函数执行对应动作。

它的好处是直观，能帮助我们看见 Agent 循环的雏形：用户提出目标，模型生成行动计划，程序解析行动，执行工具，把观察结果再放回上下文。这个过程已经很像 ReAct 里的“思考 - 行动 - 观察”循环。

但它也很脆弱。因为工具调用依赖模型“乖乖输出正确格式”。只要模型多写一句解释、JSON 少一个引号、参数格式不一致，解析逻辑就容易失败。所以这种方式更适合理解原理，不太适合复杂生产系统。

卡片版总结：提示词解析式工具调用把工具选择写在模型自然语言输出里，简单直观，但依赖格式约束和字符串解析，容易因为输出不稳定而失败。

## 第三组：Function Calling 改进了哪里？

### `02-AgentLoopWithFunctionCalling.ipynb` 为什么比手动解析 JSON 更稳？

思考：Function Calling 的核心变化是：工具不再只是 prompt 里的文字约定，而是通过结构化 schema 明确告诉模型。模型返回的也不是一段需要人肉解析的自然语言，而是结构化的 `tool_calls`：工具名称、参数 JSON、调用 ID 都被 API 层规范好了。

这样一来，程序可以更直接地做三件事：
- 根据模型返回的工具名查找本地函数。
- 把结构化参数传给函数执行。
- 把工具结果作为 `tool` 消息写回对话历史。

这正是智能体主循环里很核心的闭环：`messages -> model -> tool_calls -> execute tools -> append observations -> model`。如果模型决定已经足够回答，就返回普通文本；如果还需要外部信息，就继续发起工具调用。

感想：Function Calling 不是让模型“更懂工具”，而是让模型和程序之间的契约更清楚。少一点猜字符串，多一点结构化协议，整个系统就更可控。

卡片版总结：Function Calling 用 schema 定义工具，用结构化 `tool_calls` 表达模型的行动意图。它减少了手动解析文本的脆弱性，是从演示型 Agent 走向工程化 Agent 的关键步骤。

## 第四组：MCP 到底多加了一层什么？

### 如果 Function Calling 已经能调工具，为什么还需要 MCP？

思考：Function Calling 主要解决“模型如何表达要调用哪个函数”的问题，但函数本身通常还是写在当前应用内部。MCP 更进一步，它把工具服务独立出来，让 Agent 客户端通过标准协议连接外部工具服务器。

第一章的 `mcp-demo` 里，`weather_server.py` 用 FastMCP 暴露两个工具：`get_weather_warning` 和 `get_daily_forecast`。客户端不需要直接知道和风天气 API 怎么请求，只需要连接 MCP 服务器、列出工具、调用工具。这样工具就从“某个程序里的函数”变成了“可以被不同客户端复用的服务”。

这也是 stdio 和 sse 两种通信模式有意义的地方：
- `stdio` 适合本地工具，像启动一个脚本子进程，通过标准输入输出交互。
- `sse` 更适合网络服务、远程部署或多用户共享。

感想：Function Calling 像是模型和当前程序之间的函数调用契约；MCP 则像是 Agent 世界里的 USB-C，把工具、资源、提示这些外部能力做成统一接口。

卡片版总结：MCP 不是替代 Function Calling，而是标准化 Agent 客户端和外部工具服务器之间的连接方式。它让工具可以独立部署、复用和调试。

## 第五组：MCP 和 JSON-RPC 是什么关系？

### JSON-RPC 在 MCP 里负责什么？

思考：MCP 可以理解成“Agent 应用和外部工具服务之间的协议”，而 JSON-RPC 是 MCP 用来编码消息的基础格式。也就是说，MCP 规定了有哪些能力，比如 tools、resources、prompts、capability negotiation；JSON-RPC 则规定这些能力在客户端和服务器之间怎么发消息。

JSON-RPC 本身很简单，它不是一个完整的网络协议，而是一套 JSON 消息约定。它主要定义三种消息：

| 类型 | 作用 | 有没有 `id` | 是否期待响应 |
|---|---|---:|---:|
| Request | 发起一次操作 | 有 | 是 |
| Response | 回复某个 Request | 有，和请求对应 | 否 |
| Notification | 单向通知 | 没有 | 否 |

比如客户端想列出 MCP Server 上有哪些工具，本质上可以看成发一个 request：

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/list",
  "params": {}
}
```

服务器返回 response：

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "tools": []
  }
}
```

这里的 `id` 很关键。因为客户端可能同时发出多个请求，服务器返回时就靠同一个 `id` 把响应和原请求对应起来。如果是 notification，就没有 `id`，意思是“我只是通知你一件事，不需要你回我”。

卡片版总结：JSON-RPC 负责规定 MCP 消息的基本形状：request 用 `method + params + id` 发起调用，response 用同一个 `id` 返回结果或错误，notification 没有 `id`、不期待回复。

### JSON-RPC 和 HTTP、stdio、SSE 是同一层东西吗？

思考：不是。JSON-RPC 是消息格式，stdio、Streamable HTTP 这类是传输方式。可以把它们分成两层：

- 消息层：JSON-RPC，规定消息长什么样。
- 传输层：stdio 或 Streamable HTTP，规定消息怎么送过去。

在 `stdio` 模式下，客户端把 MCP Server 当成本地子进程启动，然后通过标准输入输出传递一行一行的 JSON-RPC 消息。这个模式适合本地工具，比如文件系统、命令行脚本、本机数据库访问。

在 HTTP 模式下，JSON-RPC 消息会通过 HTTP 请求传输，更适合远程服务、多用户共享或需要部署成服务的工具。早期材料里常会看到 SSE，新的 MCP 规范更强调 Streamable HTTP；但不管底层传输怎么变，核心消息仍然是 JSON-RPC。

感想：这能帮我避免一个误解：MCP 不是“用了某种特殊网络魔法”，而是把 Agent 工具调用抽象成标准 JSON-RPC 消息，再放到不同传输方式上跑。

卡片版总结：JSON-RPC 是 MCP 的消息格式，不是传输协议。stdio/HTTP 负责运输消息，JSON-RPC 负责定义消息结构，MCP 负责定义这些消息代表什么工具、资源和能力。

### MCP 调工具时，JSON-RPC 大概长什么样？

思考：以天气 Demo 为例，`get_daily_forecast` 这个 Python 函数被 `@mcp.tool()` 注册成 MCP 工具以后，客户端并不是直接 import 这个函数调用，而是通过 MCP 会话发送工具调用请求。

概念上，它可以理解成类似这样的 request：

```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "get_daily_forecast",
    "arguments": {
      "location": "101010100",
      "days": 3
    }
  }
}
```

服务器执行工具后，再返回 response：

```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "result": {
    "content": [
      {
        "type": "text",
        "text": "日期: 2026-04-22 ..."
      }
    ]
  }
}
```

如果工具执行失败，response 里不会是 `result`，而会是 `error`，通常包含错误码、错误消息和可选的额外数据。

这也解释了为什么 MCP 工具要有 schema：客户端先通过 `tools/list` 知道工具名称、描述、参数结构；模型根据 schema 决定调用哪个工具；客户端再把工具名和参数包装成 `tools/call` 这类 JSON-RPC 请求。

卡片版总结：MCP 的工具调用本质上是 JSON-RPC request/response：客户端发 `tools/call`，参数里带工具名和 arguments；服务器执行工具后，用同一个 `id` 返回结果或错误。

参考：

- [Model Context Protocol Specification](https://modelcontextprotocol.io/specification/draft)
- [MCP Transports](https://modelcontextprotocol.io/specification/draft/basic/transports)
- [MCP Lifecycle](https://modelcontextprotocol.io/specification/draft/basic/lifecycle)

## 第六组：MCP 天气 Demo 的业务链路是什么？

### 用户问“北京天气怎么样”时，系统里发生了什么？

思考：以 DeepSeek 版 MCP 客户端为例，完整链路大概是：

1. 客户端启动 `weather_server.py`，建立 MCP 会话。
2. 客户端通过 `list_tools` 获取服务器暴露的工具 schema。
3. 用户输入自然语言问题。
4. 模型根据问题和工具 schema 判断是否调用天气预警或天气预报工具。
5. 客户端把模型产生的工具调用发给 MCP 服务器。
6. 服务器请求和风天气 API，并把 JSON 数据格式化成文本。
7. 客户端把工具结果写回消息历史，让模型整合成最终回答。

这里最值得注意的是职责分离：模型不直接请求和风天气 API；客户端不直接决定天气是否适合户外活动；服务器也不负责理解用户自然语言。每一层只做自己的事。

卡片版总结：MCP 天气 Demo 的链路是“用户问题 -> 模型选择工具 -> 客户端调用 MCP -> 服务器请求外部 API -> 工具结果回填 -> 模型生成最终回答”。它展示的是 Agent 工程里的分层协作。

## 第七组：GAME 框架把 Agent 拆成了哪些部分？

### `ASimpleAgentFramework.ipynb` 里的 GAME 架构想解决什么？

思考：GAME 可以拆成 Goals、Actions、Memory、Environment。它不是某个神秘算法，而是一种帮助我们组织 Agent 系统的架构视角。

- Goals：定义 Agent 要完成什么，给模型一个目标边界。
- Actions：定义 Agent 能做什么，也就是工具注册和工具 schema。
- Memory：保存对话历史、工具结果和中间状态。
- Environment：真正执行动作的环境，比如本地文件系统、API、MCP 工具服务。

Agent 主循环就是把这四者接起来：根据 Goal 和 Memory 构造 prompt，让模型在 Actions 里选择下一步，再由 Environment 执行动作，把结果写回 Memory，直到任务完成或达到停止条件。

感想：这样看，Agent 不是一个单一对象，而是一套循环系统。模型只是其中一个决策组件；真正决定系统能不能稳定工作的，是目标、工具、记忆、执行环境之间有没有清晰边界。

卡片版总结：GAME 框架把 Agent 拆成目标、动作、记忆、环境四部分。它强调 Agent 的能力来自“模型决策 + 工具执行 + 状态积累 + 环境反馈”的循环。

## 第八组：Goal 和 Environment 到底怎么理解？

### GAME 框架里的 Goal 是 LLM 问出用户意图之后才有的吗？

思考：Goal 不一定是 LLM 通过追问用户得到的。更准确地说，Goal 是“智能体当前要完成的任务目标”。它可以来自用户直接表达，也可以来自系统或开发者的预设，还可以来自 LLM 对模糊意图的澄清和整理。

比如用户直接说“帮我总结这个项目 README”，这个用户意图就可以直接变成 Goal。课程里的 Agent 也可能被程序预先设定成“读取项目文件，并生成项目说明”，这时 Goal 是系统配置好的，不需要模型临时问出来。

只有当用户表达很模糊时，LLM 才需要先追问。比如用户说“帮我弄一下这个项目”，模型可能需要先问清楚：是想运行、总结、修 bug，还是写文档？等用户回答后，模型再把澄清后的意图整理成 Goal。

卡片版总结：Goal 是 Agent 要追求的目标，可以来自用户、系统配置，也可以由 LLM 通过澄清对话提炼出来；它不是一定要由 LLM 问出来。

### Environment 是真的运行环境，还是模型得到的上下文？

思考：Environment 更接近 Agent 可以“行动并收到反馈”的外部世界，而不是 prompt 里的上下文本身。它可以是真的运行环境，也可以是被程序封装出来的执行环境。

在第一章里，`list_project_files()` 能看到项目文件，`read_project_file(name)` 能读取文件内容；MCP Demo 里，天气工具能请求和风天气 API。这些都是 Agent 可以通过 Action 接触到的外部环境。

所以 Environment 不是 Context 本身，而是产生 Observation 的地方。Agent 执行动作以后，Environment 返回结果；这些结果进入 Memory，最后再被组织成当前上下文喂给 LLM。

可以这样区分：

| 概念 | 是什么 | 例子 |
|---|---|---|
| `Memory` | Agent 已经知道或经历过的历史 | 对话记录、工具返回结果、之前的观察 |
| `Environment` | Agent 可以操作和观察的外部世界 | 文件系统、API、数据库、浏览器、MCP Server |
| `Context` | 当前喂给 LLM 的信息包 | Goal、Memory、工具说明、最近 Observation |

一个简化流程是：

```text
Goal: 帮我总结项目
  ↓
LLM 决定 Action: list_project_files
  ↓
Environment 执行这个 Action: 访问文件系统
  ↓
Observation: 返回文件列表
  ↓
Memory 记录 Observation
  ↓
LLM 基于新的上下文决定下一步
```

卡片版总结：Goal 是“我要去哪”；Environment 是“我能接触和改变的世界”；Memory 是“我一路上看到和记住的东西”；Context 是把这些信息临时打包后交给 LLM 的输入。

## 第九组：这一章的主线怎么记？

### 从工具调用到 MCP，再到 Agent 框架，顺序应该怎么理解？

思考：这一章可以按三层递进来记：

第一层是工具调用原理：模型不能只回答，还要能提出行动；最早可以靠 prompt 约定和 JSON 解析来实现。

第二层是结构化调用：Function Calling 把“行动意图”从自然语言里提出来，变成 schema 和 `tool_calls`，让程序更稳定地执行工具。

第三层是工具服务化：MCP 把工具从应用内部抽离成独立服务，让 Agent 可以通过标准协议连接外部能力。

最后，GAME 框架把这些能力放回一个完整 Agent 系统里：目标约束它，工具扩展它，记忆延续它，环境承载它。

卡片版总结：第一章的学习路线是：先理解 Agent 为什么要工具，再理解 Function Calling 如何让工具调用结构化，然后理解 MCP 如何让工具服务标准化，最后用 GAME 框架把 Agent 主循环组织起来。
