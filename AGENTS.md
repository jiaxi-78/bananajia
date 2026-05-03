# AGENTS.md

## 项目概述

本仓库当前以 `vault/` 笔记库、`scripts/` 内容构建脚本和 `notes-site/` 静态站点为核心，用于整理和发布个人学习内容，其中已包含 Agentic AI、Multi-Agent、DIY LLM 等主题。项目的演进目标是在现有内容体系之上，逐步扩展为一个面向 AI/LLM/Agent 领域的知识库助手，能够自动从 GitHub Trending 与 Hacker News 采集技术动态，经过 AI 分析后结构化存储为 JSON，并分发到 Telegram、飞书等渠道。

## 技术栈

- 当前仓库：Node.js、Vite、React、GitHub Actions
- Python 3.12
- OpenCode + 国产大模型
- LangGraph
- OpenClaw

说明：当前代码仓已经落地的是 `vault/ -> scripts/ -> notes-site/` 的内容构建与发布链路；Python 与 Agent 编排相关能力属于后续演进方向。

## 编码规范

- 遵循 PEP 8。
- 变量、函数、模块名统一使用 `snake_case`。
- 函数、类、模块文档统一使用 Google 风格 docstring。
- 禁止使用裸 `print()` 输出调试信息，统一使用日志组件。
- 优先保持函数职责单一，避免过长函数与隐式副作用。
- JSON 序列化字段应保持稳定，避免随意改名或删除已落库字段。

## Agent 行为原则

- Think Before Coding: 在执行采集、分析、整理或代码修改前，先确认目标、上下文和输出位置；信息不足时先补问，不要带着假设直接执行。
- Simplicity First: 优先选择最小可行方案，避免为了未来可能的需求提前引入额外抽象、配置层或复杂流程。
- Surgical Changes: 只修改与当前任务直接相关的文件和逻辑；不要顺手改动无关内容、重构旁支代码或清理不属于本次任务的历史问题。
- Goal-Driven Execution: 每次任务都应有可验证结果，例如成功写入 `knowledge/raw/`、生成合法 JSON、完成状态流转、或明确是否进入分发渠道。

## 项目结构

```text
.github/
  workflows/        # GitHub Pages 构建与发布流程
.opencode/
  agents/           # Agent 定义与编排配置
  skills/           # 可复用技能、提示词模板与工具封装
notes-site/
  src/              # React 前端与构建产物入口
scripts/
  build-content.mjs # 从 vault 构建 notes-site/src/content.js
  extract-notes.mjs # 从站点内容反向导出 vault
vault/
  00-Meta/          # 站点元信息、分类、章节配置
  Agentic AI/       # 单 Agent 主题笔记
  Multi-Agent/      # 多 Agent 主题笔记
  DIY LLM/          # LLM 学习笔记
knowledge/
  raw/              # 原始采集数据，按来源或日期归档
  articles/         # 分析、清洗、结构化后的知识条目 JSON
```

说明：`knowledge/` 和 `.opencode/` 是为 AI 知识库助手预留/目标结构；当前仓库中的实际内容主入口仍然是 `vault/`。

## 当前工作流

- 内容源优先维护在 `vault/`，不要把 `notes-site/src/content.js` 当作手工编辑入口。
- 修改内容解析逻辑时，优先调整 `scripts/build-content.mjs`。
- 修改展示层时，优先调整 `notes-site/src/`。
- 站点发布链路为：`vault/` -> `scripts/build-content.mjs` -> `notes-site` 构建 -> GitHub Pages。
- GitHub Actions 会在 `vault/**`、`scripts/**`、`notes-site/**` 变化时自动触发构建与发布。

## 知识条目 JSON 格式

每条知识条目必须以 JSON 对象形式存储，推荐字段如下：

```json
{
  "id": "gh_20260502_langgraph_multi_agent_patterns",
  "title": "LangGraph Multi-Agent Patterns in Production",
  "source": "github_trending",
  "source_url": "https://github.com/example/repo",
  "author": "example_org",
  "published_at": "2026-05-02T08:30:00Z",
  "collected_at": "2026-05-02T09:00:00Z",
  "summary": "介绍了基于 LangGraph 的多 Agent 编排模式、状态管理策略以及生产环境实践。",
  "highlights": [
    "展示了多 Agent 协作的状态流转设计",
    "包含可观测性与失败重试策略",
    "适合作为 Agent 工程落地参考"
  ],
  "tags": ["AI", "LLM", "Agent", "LangGraph"],
  "status": "reviewed",
  "language": "en",
  "content_type": "repository",
  "score": 8.7,
  "distribution_channels": ["telegram", "feishu"],
  "notes": "适合进入本周技术情报摘要。"
}
```

字段说明：

- `id`: 全局唯一标识，建议由来源、日期、主题 slug 组成。
- `title`: 条目标题。
- `source`: 数据来源，如 `github_trending`、`hacker_news`。
- `source_url`: 原始链接。
- `author`: 作者、组织或提交者。
- `published_at`: 原内容发布时间，使用 ISO 8601。
- `collected_at`: 系统采集时间，使用 ISO 8601。
- `summary`: AI 生成的摘要。
- `highlights`: 关键要点列表。
- `tags`: 标签列表，聚焦 AI/LLM/Agent 相关主题。
- `status`: 条目状态，建议使用 `raw`、`analyzed`、`reviewed`、`published`。
- `language`: 内容语言。
- `content_type`: 内容类型，如 `repository`、`article`、`discussion`、`tool`。
- `score`: AI 评估后的重要性或推荐分数。
- `distribution_channels`: 计划分发渠道。
- `notes`: 额外备注。

## 知识录入方式

- 用户可以提供结构化输入，也可以直接提供非结构化内容，例如一段描述、多个链接、临时备注、主题关键词，甚至只是“这个不错先收进去”。
- Agent 需要优先从非结构化输入中提取 `url`、`source`、主题线索、分发意图和优先级；信息不足时再补问。
- 若用户只给链接，不要求用户必须先整理成固定 JSON 或 YAML。
- 对 GitHub 仓库、Hacker News 讨论、博客文章等不同来源，允许先以较宽松格式进入暂存区，再补全标准字段。

示例输入：

```text
这个想收进知识库，偏 multi-agent：
https://github.com/langchain-ai/langgraph

这个 HN 讨论也不错，先存着：
https://news.ycombinator.com/item?id=123456
```

## 归档与补问规则

- 如果无法判断内容应归入哪个主题、目录或状态，Agent 应先向用户发起一轮简短确认。
- 可补问的信息包括：归档位置、主题分类、是否需要结构化整理、是否需要后续分发。
- 若用户未明确说明，默认按“先收集、后整理、暂不分发”的策略处理。

默认规则：

- 新收到的链接或原始材料，优先进入 `knowledge/raw/`。
- 完成摘要、标签、评分和字段校验后，再进入 `knowledge/articles/`。
- 主题暂不明确时，先使用通用标签，如 `AI`、`LLM`、`Agent`。
- 用户未明确要求分发时，默认不推送到 Telegram 或飞书。
- 若内容与现有 `vault/` 分类高度相关，可补问用户是否同时沉淀为站点笔记主题。

## Agent 角色概览

| 角色 | 核心职责 | 输入 | 输出 |
| --- | --- | --- | --- |
| 采集 Agent | 抓取 GitHub Trending、Hacker News 的 AI/LLM/Agent 相关动态，并做基础去重与来源标记 | 网站列表、抓取规则、时间窗口 | `knowledge/raw/` 下的原始数据 |
| 分析 Agent | 调用 OpenCode + 国产大模型，对原始内容进行摘要、打标签、评分、提取亮点 | 原始采集数据 | 标准化 JSON 草稿 |
| 整理 Agent | 校验 JSON 字段完整性、统一状态、归档到知识库，并触发 Telegram/飞书分发 | JSON 草稿、分发配置 | `knowledge/articles/` 中的正式条目与分发结果 |

## 仓库协作约定

- 涉及现有站点内容时，优先尊重 `vault/00-Meta/config.json` 中的分类、章节与站点元信息配置。
- 若内容可由脚本重新生成，应优先修改源数据或生成逻辑，而不是只修改生成结果。
- 新增 AI 知识条目时，保持 JSON 字段名稳定，避免影响未来索引、检索和分发流程。
- 如果后续引入采集、分析、分发脚本，默认放在清晰的独立目录中，避免和现有站点构建脚本混杂。

## 红线

以下操作绝对禁止：

- 禁止伪造、篡改或臆造来源内容。
- 禁止删除原始采集数据，除非有明确的数据清理策略与审批。
- 禁止把 `notes-site/src/content.js` 这类可再生文件当作长期唯一事实来源。
- 禁止在未理解生成链路的情况下直接修改构建产物，导致 `vault/` 与站点内容不一致。
- 禁止将密钥、Token、Cookie、Webhook 地址写入代码仓库。
- 禁止提交 Telegram Bot Token、飞书 Webhook、GitHub Cookie、抓取会话信息等敏感配置。
- 禁止使用裸 `print()`、硬编码敏感配置或在日志中输出敏感信息。
- 禁止绕过 JSON 字段校验直接写入 `knowledge/articles/`。
- 禁止发布未经分析或状态不是 `reviewed`/`published` 的条目到外部分发渠道。
- 禁止抓取与项目主题无关的内容，避免知识库污染。
- 禁止在没有限流、重试和异常处理的情况下直接对外部站点进行高频请求。
- 禁止随意删除 `vault/` 下的原始笔记、`00-Meta` 配置或破坏 `.github/workflows/deploy-pages.yml` 发布链路。
