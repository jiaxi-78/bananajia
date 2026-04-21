---
id: 'llm-quickstart-template-note-01'
category: 'essays'
chapter: 'llm-quickstart-template'
course: ''
date: 'Card 01'
title_zh: 'LLM 应用的三层能力：纯对话、Tool Calling 和 RAG'
title_en: 'Three Layers of LLM Apps: Plain Chat, Tool Calling, and RAG'
summary_zh: '沿着三层能力——纯对话、工具调用、向量检索——走一遍完整的数据流和实现逻辑，搞清楚每一层到底在做什么。'
summary_en: 'Walk through the data flow and implementation of three capability layers — plain chat, tool calling, and vector retrieval — to understand what each one actually does.'
tags: []
---

# LLM 应用的三层能力：纯对话、Tool Calling 和 RAG

> 沿着三层能力——纯对话、工具调用、向量检索——走一遍完整的数据流和实现逻辑，搞清楚每一层到底在做什么。

## 第一组：LLM 应用的三层能力

构建一个 LLM 应用，能力大致分三层：纯对话、工具调用（Tool Calling）、检索增强生成（RAG）。每一层解决的问题不同，实现复杂度也逐级递增。

实现上有两条路线可以选：直接用 SDK（openai / anthropic 库）调 API，或者用 LangChain 框架做统一封装。两种方式做的事情完全一样，区别在于抽象程度和灵活性的取舍。

## 第二组：纯对话——while 循环 + 消息列表 + API 调用

纯对话是三层能力里最简单的一层。整个数据流可以用一句话概括：维护一个消息列表，每次带着完整对话历史调 API，拿回回复，追加到历史，循环。
- chat_loop 里维护一个 history 列表。
- 每轮对话结束后把 user 和 assistant 的消息都追加进去。
- 下一轮会把完整 history 发给 API，这样模型就有了多轮对话记忆。


> **OpenAI 和 Claude 的关键差异**
> OpenAI 的 system prompt 是 messages 数组的第一条消息（role: “system”）；Claude 的 system prompt 是 messages.create() 的一个独立 system 参数。从 OpenAI 切到 Claude 时很容易踩坑。

> **为什么同时有 SDK 和 LangChain 两个版本**
> LangChain 用 model.ainvoke(messages) 一行搞定，不用区分 OpenAI 还是 Claude。但它是黑盒、更新滞后、多一层依赖。直接 SDK 版本存在的意义是让你看清楚 LangChain 底下到底发生了什么。

## 第三组：Tool Calling——让模型决定调什么函数

纯对话是”用户说 → 模型回 → 结束”。Tool Calling 在此基础上加了一个 agentic loop：用户说 → 模型可能要调工具 → 执行工具 → 把结果喂回模型 → 模型可能还要调更多工具 → ... → 最终回复。

最重要的概念：模型不执行工具，它只是”说”要调哪个工具、传什么参数；你的代码负责执行，然后把结果喂回去。

> **第一层：工具定义 + 注册**
> 用 JSON schema 告诉模型有哪些工具可用（名称、描述、参数类型），同时维护一个 name → function 的注册表。注意 OpenAI 和 Claude 的 schema 格式不同。

> **第二层：Agentic Loop**
> while True 调 API，检查有没有 tool_calls。有就执行并把结果塞回 messages，没有就 break 返回文本回复。模型可以在一轮里连续调用多个工具。

> **第三层：dispatch_tool 路由执行**
> 根据名字从注册表查函数，json.loads 解析参数（OpenAI 返回 JSON 字符串，Claude 返回 dict），用 **dict 解包成关键字参数调用。就 14 行代码。

## 第四组：Tool Calling 具体走一遍

以用户问”Copenhagen 今天天气怎么样”为例，走一遍完整流程。
- 第 1 轮 API 调用：模型返回 tool_call(“get_weather”, {city: “Copenhagen”})。
- 代码执行 get_weather(“Copenhagen”)，拿到结果 “12°C, partly cloudy”。
- 把工具结果追加到 messages。
- 第 2 轮 API 调用：模型看到工具结果，返回文本 “哥本哈根今天 12°C，多云”。
- 没有 tool_calls → break，返回最终回复。


> ****dict 是什么**
> Python 语法糖。**{“city”: “Copenhagen”} 解包后等价于 func(city=”Copenhagen”)。让不同工具的参数可以统一处理，不用写 if/else。

> **json.loads 为什么需要**
> OpenAI 返回的工具参数是 JSON 字符串 '{“city”: “Copenhagen”}'，需要先解析成 dict 才能用 ** 解包。Claude 直接返回 dict，不需要这一步。

## 第五组：LangChain 怎么简化 Tool Calling

直接 SDK 要手写 JSON schema、手写注册表、手写 dispatch 路由，还要处理 OpenAI 和 Claude 的格式差异。LangChain 用 @tool 装饰器一步到位。
- @tool 从函数自动提取：函数名 → 工具名，docstring → description，参数类型注解 → input schema。
- model.bind_tools(tools) 把工具列表绑定到模型上，之后每次 ainvoke 时自动带上工具 schema。
- tool.invoke(args) 直接调用，不需要 dispatch 路由。
- agentic loop 也更简洁：不用区分 OpenAI/Claude 的返回格式。


## 第六组：RAG——让模型能回答训练数据之外的问题

RAG 全称 Retrieval-Augmented Generation。核心思路：先从向量数据库检索相关信息，把检索结果作为上下文补充给模型，模型基于上下文生成回答。

RAG 分两个阶段：建库（离线，只跑一次）和检索（在线，每次查询都跑）。

> **建库阶段**
> 读数据 → 每条拼成文本 → 调 Embedding API 生成 1536 维向量 → 存入 SQLite（普通表存原始数据，虚拟表存向量）。

> **检索阶段**
> 用户查询文本 → 同样生成 1536 维向量 → 在虚拟表里做向量相似度搜索（WHERE embedding MATCH ?）→ JOIN 回原始表拿数据 → 返回 top-k 结果。

## 第七组：RAG 里的关键概念
- Embedding 模型是一个压缩器：无论文本多长，都变成固定 1536 维向量。语义相近的文本，向量就会很接近。
- 1536 是 OpenAI text-embedding-3-small 的固定输出维度，换模型维度就不一样。
- 代价是信息损失——向量只负责”找到”，原文负责”理解”。所以检索后还要把原始文本返回给模型。
- VIRTUAL TABLE 是 SQLite 的扩展机制：表的接口是 SQL，但底层存储和查询逻辑由插件（sqlite-vec）实现。SQLite 原生引擎只能精确匹配和范围查询，没法算向量相似度。
- 选 sqlite-vec 而不是 Pinecone/Chroma：轻量，不用装额外服务，一个 .db 文件就是整个向量数据库。小规模数据完全够用，生产环境再换专门的向量数据库也不迟。


> **RAG 怎么和 Tool Calling 串起来**
> 把向量检索封装成一个工具函数 get_anime_series，注册到 Tool Calling 的工具列表里。用户问”推荐一部太空冒险动漫”时，模型决定调这个工具，拿到检索结果后生成自然语言推荐。

## 第八组：一句话总结

纯对话是 while 循环 + 消息列表 + API 调用；Tool Calling 在此基础上加了 agentic loop，让模型决定调什么工具、你的代码负责执行；RAG 把外部知识通过向量检索塞进上下文，让模型能回答训练数据之外的问题。三层能力逐级递进，每一层的核心机制都不复杂，复杂度主要来自不同 API 之间的格式差异。
