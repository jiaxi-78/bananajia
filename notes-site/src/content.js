export const site = {
  title: {
    zh: '鼠的学习空间',
    en: 'Shu\'s Learning Space'
  },
  tagline: '// Personal Signal · Learning Log',
  intro: {
    zh: '记录我正在学的几门课、写下来的笔记，还有偶尔做饭的心得。选一个分区开始。',
    en: 'Notes from courses I\'m taking, things I\'ve written down, and occasional cooking experiments. Pick a section to start.'
  }
}

export const categories = [
  {
    id: 'diy-llm',
    name: 'DIY LLM',
    code: '01',
    tag: 'LEARNING/01',
    accent: 'cyan',
    tagline: {
      zh: '从零实现一个语言模型',
      en: 'Build a language model from scratch'
    },
    description: {
      zh: '跟着 CS336 / DIY LLM 一步步搭起来的笔记，从分词器、优化器到训练流水线。',
      en: 'Step-by-step notes following CS336 / DIY LLM, from tokenizers and optimizers to the training pipeline.'
    }
  },
  {
    id: 'agentic-ai',
    name: 'Agentic AI',
    code: '02',
    tag: 'LEARNING/02',
    accent: 'magenta',
    tagline: {
      zh: '智能体开发',
      en: 'Agentic AI development'
    },
    description: {
      zh: '围绕单体智能体的感知、工具使用、记忆、规划等能力建立系统认知。',
      en: 'Building a systematic understanding of single-agent capabilities: perception, tool use, memory, and planning.'
    }
  },
  {
    id: 'multi-agent',
    name: 'Multi-Agent',
    code: '03',
    tag: 'LEARNING/03',
    accent: 'violet',
    tagline: {
      zh: '多 Agent 设计与工程化',
      en: 'Multi-agent design and engineering'
    },
    description: {
      zh: '多 Agent 协同、通信协议、角色分工、落地时的工程权衡。',
      en: 'Multi-agent collaboration, communication protocols, role assignment, and engineering trade-offs in production.'
    }
  },
  {
    id: 'cooking',
    name: 'Cooking',
    code: '04',
    tag: 'LIFE/01',
    accent: 'amber',
    tagline: {
      zh: '厨房里的小实验',
      en: 'Little experiments in the kitchen'
    },
    description: {
      zh: '偶尔记录做过的菜、学到的手法，和一些失败也值得分享的翻车现场。',
      en: 'Occasional notes on dishes I\'ve made, techniques I\'ve picked up, and kitchen disasters worth sharing.'
    }
  },
  {
    id: 'essays',
    name: {
      zh: '随笔',
      en: 'Essays'
    },
    code: '05',
    tag: 'LIFE/02',
    accent: 'teal',
    tagline: {
      zh: '读代码时的碎片思考',
      en: 'Fragments from reading code'
    },
    description: {
      zh: '读源码、拆项目时随手记下的问题和理解，不求体系，只求想清楚。',
      en: 'Questions and thoughts jotted down while reading source code and dissecting projects. No system — just clarity.'
    }
  },
  {
    id: 'system-design',
    name: 'System Design',
    code: '06',
    tag: 'LEARNING/04',
    accent: 'lime',
    tagline: {
      zh: '从架构概念到工程直觉',
      en: 'From architecture concepts to engineering intuition'
    },
    description: {
      zh: '从单机到分布式系统的完整进阶路线，涵盖扩容、估算、面试框架、限流、一致性哈希、KV Store、短链、爬虫、通知、信息流、聊天、搜索、视频、云盘等 16 个章节。',
      en: 'Complete system design course from single server to distributed systems.'
    }
  }
]

export const chapters = [
  {
    id: 'lesson-1',
    categoryId: 'diy-llm',
    code: '01',
    title: {
      zh: '第一节课｜从零构建语言模型',
      en: 'Lesson 1 | Building a Language Model from Scratch'
    },
    description: {
      zh: '课程哲学、分词、模型架构、Scaling Laws 与对齐的第一轮总览。',
      en: 'A first overview of course philosophy, tokenization, model architecture, scaling laws, and alignment.'
    }
  },
  {
    id: 'chapter-2',
    categoryId: 'diy-llm',
    code: '02',
    title: {
      zh: 'Chapter 2｜分词器',
      en: 'Chapter 2 | Tokenizers'
    },
    description: {
      zh: '围绕 tokenizer、BPE、数据预处理和系统成本整理的章节笔记。',
      en: 'Chapter notes on tokenizers, BPE, data preprocessing, and system-level costs.'
    }
  },
  {
    id: 'lesson-2',
    categoryId: 'diy-llm',
    code: '03',
    title: {
      zh: '第二节课｜PyTorch 与优化器',
      en: 'Lesson 2 | PyTorch and Optimizers'
    },
    description: {
      zh: '张量视图、stride、einsum、反向传播和常用优化器的可视化笔记。',
      en: 'Visual notes on tensor views, stride, einsum, backpropagation, and common optimizers.'
    }
  },
  {
    id: 'chapter-4',
    categoryId: 'diy-llm',
    code: '04',
    title: {
      zh: 'Chapter 4｜语言模型架构和训练细节',
      en: 'Chapter 4 | Language Model Architecture and Training Details'
    },
    description: {
      zh: '位置编码、Transformer 数据流、注意力细节、归一化、GLU 与 RoPE。',
      en: 'Positional encoding, Transformer data flow, attention details, normalization, GLU, and RoPE.'
    }
  },
  {
    id: 'llm-quickstart-template',
    categoryId: 'essays',
    code: '01',
    title: {
      zh: 'LLM 应用的三层能力｜从纯对话到 RAG',
      en: 'Three Layers of LLM Apps | From Chat to RAG'
    },
    description: {
      zh: '纯对话、Tool Calling 和 RAG 各自在做什么，怎么实现，直接 SDK 和 LangChain 怎么选。',
      en: 'What plain chat, tool calling, and RAG each do, how they work, and when to use raw SDK vs LangChain.'
    }
  },
  {
    id: 'part00_preface',
    categoryId: 'system-design',
    code: '01',
    title: {
      zh: '前言',
      en: '前言'
    },
    description: {
      zh: '前言相关笔记。',
      en: 'Notes on 前言.'
    }
  },
  {
    id: 'part01_scale_from_zero',
    categoryId: 'system-design',
    code: '02',
    title: {
      zh: '扩容路径｜从零到百万用户',
      en: '扩容路径｜从零到百万用户'
    },
    description: {
      zh: '扩容路径｜从零到百万用户相关笔记。',
      en: 'Notes on 扩容路径｜从零到百万用户.'
    }
  },
  {
    id: 'part02_estimation',
    categoryId: 'system-design',
    code: '03',
    title: {
      zh: '容量估算｜纸上估算',
      en: '容量估算｜纸上估算'
    },
    description: {
      zh: '容量估算｜纸上估算相关笔记。',
      en: 'Notes on 容量估算｜纸上估算.'
    }
  },
  {
    id: 'part03_interview_framework',
    categoryId: 'system-design',
    code: '04',
    title: {
      zh: '面试框架｜四步推进法',
      en: '面试框架｜四步推进法'
    },
    description: {
      zh: '面试框架｜四步推进法相关笔记。',
      en: 'Notes on 面试框架｜四步推进法.'
    }
  },
  {
    id: 'part04_rate_limiter',
    categoryId: 'system-design',
    code: '05',
    title: {
      zh: '限流器｜算法与架构',
      en: '限流器｜算法与架构'
    },
    description: {
      zh: '限流器｜算法与架构相关笔记。',
      en: 'Notes on 限流器｜算法与架构.'
    }
  },
  {
    id: 'part05_consistent_hashing',
    categoryId: 'system-design',
    code: '06',
    title: {
      zh: '一致性哈希',
      en: '一致性哈希'
    },
    description: {
      zh: '一致性哈希相关笔记。',
      en: 'Notes on 一致性哈希.'
    }
  },
  {
    id: 'part06_key_value_store',
    categoryId: 'system-design',
    code: '07',
    title: {
      zh: '分布式 Key-Value Store',
      en: '分布式 Key-Value Store'
    },
    description: {
      zh: '分布式 Key-Value Store相关笔记。',
      en: 'Notes on 分布式 Key-Value Store.'
    }
  },
  {
    id: 'part07_unique_id',
    categoryId: 'system-design',
    code: '08',
    title: {
      zh: '分布式唯一 ID',
      en: '分布式唯一 ID'
    },
    description: {
      zh: '分布式唯一 ID相关笔记。',
      en: 'Notes on 分布式唯一 ID.'
    }
  },
  {
    id: 'part08_url_shortener',
    categoryId: 'system-design',
    code: '09',
    title: {
      zh: 'URL 短链接系统',
      en: 'URL 短链接系统'
    },
    description: {
      zh: 'URL 短链接系统相关笔记。',
      en: 'Notes on URL 短链接系统.'
    }
  },
  {
    id: 'part09_web_crawler',
    categoryId: 'system-design',
    code: '10',
    title: {
      zh: '网络爬虫',
      en: '网络爬虫'
    },
    description: {
      zh: '网络爬虫相关笔记。',
      en: 'Notes on 网络爬虫.'
    }
  },
  {
    id: 'part10_notification_system',
    categoryId: 'system-design',
    code: '11',
    title: {
      zh: '通知系统',
      en: '通知系统'
    },
    description: {
      zh: '通知系统相关笔记。',
      en: 'Notes on 通知系统.'
    }
  },
  {
    id: 'part11_news_feed',
    categoryId: 'system-design',
    code: '12',
    title: {
      zh: 'News Feed 信息流',
      en: 'News Feed 信息流'
    },
    description: {
      zh: 'News Feed 信息流相关笔记。',
      en: 'Notes on News Feed 信息流.'
    }
  },
  {
    id: 'part12_chat_system',
    categoryId: 'system-design',
    code: '13',
    title: {
      zh: '聊天系统',
      en: '聊天系统'
    },
    description: {
      zh: '聊天系统相关笔记。',
      en: 'Notes on 聊天系统.'
    }
  },
  {
    id: 'part13_autocomplete',
    categoryId: 'system-design',
    code: '14',
    title: {
      zh: '搜索自动补全',
      en: '搜索自动补全'
    },
    description: {
      zh: '搜索自动补全相关笔记。',
      en: 'Notes on 搜索自动补全.'
    }
  },
  {
    id: 'part14_youtube',
    categoryId: 'system-design',
    code: '15',
    title: {
      zh: '视频平台｜YouTube',
      en: '视频平台｜YouTube'
    },
    description: {
      zh: '视频平台｜YouTube相关笔记。',
      en: 'Notes on 视频平台｜YouTube.'
    }
  },
  {
    id: 'part15_google_drive',
    categoryId: 'system-design',
    code: '16',
    title: {
      zh: '云盘系统｜Google Drive',
      en: '云盘系统｜Google Drive'
    },
    description: {
      zh: '云盘系统｜Google Drive相关笔记。',
      en: 'Notes on 云盘系统｜Google Drive.'
    }
  },
  {
    id: 'part16_learning_continues',
    categoryId: 'system-design',
    code: '17',
    title: {
      zh: '继续学习',
      en: '继续学习'
    },
    description: {
      zh: '继续学习相关笔记。',
      en: 'Notes on 继续学习.'
    }
  }
]

export const notes = [
  {
    id: '🗺️ 课程地图',
    categoryId: '',
    chapterId: null,
    course: '',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '前言',
        paragraphs: [],
        faqs: [],
        bullets: [
          '[[conversion-principles.md|转换原则]]',
          '[[course-map.md|课程地图]]',
          '[[glossary.md|术语表]]'
        ],
        emphasisCards: []
      },
      {
        heading: '扩容路径｜从零到百万用户',
        paragraphs: [],
        faqs: [],
        bullets: [
          '[[01-single-server-request-flow.md|从单机系统开始理解请求路径]]',
          '[[02-database-and-basic-scaling.md|拆出数据库并选择合适的数据存储]]',
          '[[03-load-balancer-and-replication.md|用负载均衡和数据库复制提高可用性]]',
          '[[04-cache-and-cdn.md|用缓存和 CDN 加速系统响应]]',
          '[[05-stateless-web-tier-and-autoscaling.md|把状态移出 Web 层，实现无状态扩展]]',
          '[[06-data-centers-and-message-queue.md|多数据中心与消息队列：走向分布式系统]]',
          '[[07-observability-and-database-sharding.md|可观测性与数据库分片]]',
          '[[08-scaling-playbook.md|从零到百万用户的扩展清单]]',
          '[[补充-Stateless Web Tier 和聚合指标怎么理解.md|补充：Stateless Web Tier 和聚合指标怎么理解]]',
          '[[补充-从零扩展到百万用户.md|补充：从零扩展到百万用户]]'
        ],
        emphasisCards: []
      },
      {
        heading: '容量估算｜纸上估算',
        paragraphs: [],
        faqs: [],
        bullets: [
          '[[01-units-and-latency-basics.md|估算前的基本单位和延迟直觉]]',
          '[[02-availability-and-sla.md|用几个 9 衡量可用性]]',
          '[[03-qps-and-storage-estimation.md|用 Twitter 示例练习 QPS 与存储估算]]',
          '[[补充-纸上估算：用数量级判断系统能不能跑.md|补充：纸上估算：用数量级判断系统能不能跑]]'
        ],
        emphasisCards: []
      },
      {
        heading: '面试框架｜四步推进法',
        paragraphs: [],
        faqs: [],
        bullets: [
          '[[01-interview-mindset-and-scope.md|系统设计面试不是抢答题]]',
          '[[02-high-level-design.md|提出高层设计并获得共识]]',
          '[[03-design-deep-dive.md|深入关键组件，而不是陷入所有细节]]',
          '[[04-wrap-up-dos-and-donts.md|收尾、复盘与面试节奏控制]]'
        ],
        emphasisCards: []
      },
      {
        heading: '限流器｜算法与架构',
        paragraphs: [],
        faqs: [],
        bullets: [
          '[[01-rate-limiter-problem-and-requirements.md|认识 Rate Limiter 与设计范围]]',
          '[[02-placement-and-api-gateway.md|限流器应该放在哪里]]',
          '[[03-token-leaky-fixed-window.md|三种基础限流算法]]',
          '[[04-sliding-window-algorithms.md|滑动窗口算法：准确性与内存的取舍]]',
          '[[05-high-level-architecture.md|限流器的高层架构]]',
          '[[06-rules-distributed-and-race-conditions.md|规则、并发与分布式限流]]',
          '[[07-optimization-monitoring-and-wrap-up.md|优化、监控与限流器设计总结]]',
          '[[补充-Rate Limiter：几个真正容易卡住的问题.md|补充：Rate Limiter：几个真正容易卡住的问题]]',
          '[[补充-很多用户的限流计数器怎么扛.md|补充：很多用户的限流计数器怎么扛]]'
        ],
        emphasisCards: []
      },
      {
        heading: '一致性哈希',
        paragraphs: [],
        faqs: [],
        bullets: [
          '[[01-rehashing-problem.md|为什么普通哈希扩容会崩]]',
          '[[02-hash-ring-lookup.md|一致性哈希环如何定位服务器]]',
          '[[03-node-change-affected-keys.md|节点增删时只迁移必要数据]]',
          '[[04-virtual-nodes-tradeoff.md|虚拟节点让负载更均衡]]'
        ],
        emphasisCards: []
      },
      {
        heading: '分布式 Key-Value Store',
        paragraphs: [],
        faqs: [],
        bullets: [
          '[[01-scope-and-single-server.md|从单机 KV 到分布式 KV]]',
          '[[02-cap-and-tradeoffs.md|CAP 下的设计取舍]]',
          '[[03-partition-and-replication.md|数据如何分片与复制]]',
          '[[04-quorum-versioning-vector-clock.md|Quorum 与版本冲突处理]]',
          '[[05-failure-detection-and-repair.md|故障检测、临时接管与副本修复]]',
          '[[06-architecture-read-write-path.md|KV Store 的整体架构与读写路径]]'
        ],
        emphasisCards: []
      },
      {
        heading: '分布式唯一 ID',
        paragraphs: [],
        faqs: [],
        bullets: [
          '[[01-requirements-and-candidate-solutions.md|唯一 ID 生成器的需求边界]]',
          '[[02-compare-id-generation-options.md|四种 ID 生成方案对比]]',
          '[[03-snowflake-deep-dive.md|Snowflake 式 64-bit ID 设计]]'
        ],
        emphasisCards: []
      },
      {
        heading: 'URL 短链接系统',
        paragraphs: [],
        faqs: [],
        bullets: [
          '[[01-requirements-and-apis.md|短链接系统的需求与 API]]',
          '[[02-redirect-flow-and-status-code.md|重定向流程与 301/302 选择]]',
          '[[03-hash-function-and-base62.md|短码生成：Hash 还是 Base62]]',
          '[[04-data-model-and-end-to-end-flow.md|短链接系统的完整架构]]'
        ],
        emphasisCards: []
      },
      {
        heading: '网络爬虫',
        paragraphs: [],
        faqs: [],
        bullets: [
          '[[01-crawler-scope.md|从“抓网页”到“设计爬虫系统”]]',
          '[[02-crawler-pipeline.md|爬虫系统的核心流水线]]',
          '[[03-url-frontier-scheduling.md|URL Frontier 与抓取调度]]',
          '[[04-downloader-robustness.md|Downloader 的鲁棒性设计]]'
        ],
        emphasisCards: []
      },
      {
        heading: '通知系统',
        paragraphs: [],
        faqs: [],
        bullets: [
          '[[01-notification-scope.md|通知系统的范围与需求]]',
          '[[02-high-level-flow.md|通知发送链路与高层架构]]',
          '[[03-reliability-and-controls.md|通知可靠性、幂等与用户控制]]',
          '[[04-monitoring-security-analytics.md|通知系统的监控、安全与分析]]'
        ],
        emphasisCards: []
      },
      {
        heading: 'News Feed 信息流',
        paragraphs: [],
        faqs: [],
        bullets: [
          '[[01-news-feed-scope-apis.md|News Feed 的范围、数据模型与 API]]',
          '[[02-feed-publishing-fanout.md|Feed Publishing 与 Fanout 取舍]]',
          '[[03-feed-retrieval-scaling.md|Feed 读取、缓存与扩展]]'
        ],
        emphasisCards: []
      },
      {
        heading: '聊天系统',
        paragraphs: [],
        faqs: [],
        bullets: [
          '[[01-chat-scope-protocols.md|Chat System 的范围与通信协议]]',
          '[[02-architecture-storage-model.md|聊天系统架构与存储模型]]',
          '[[03-service-discovery-one-to-one-flow.md|服务发现与一对一消息流]]',
          '[[04-multi-device-group-chat.md|多设备同步与群聊设计]]',
          '[[05-presence-and-wrap-up.md|Online Presence、断线处理与扩展话题]]'
        ],
        emphasisCards: []
      },
      {
        heading: '搜索自动补全',
        paragraphs: [],
        faqs: [],
        bullets: [
          '[[01-autocomplete-scope-estimation.md|从需求到容量估算：什么是快的自动补全]]',
          '[[02-high-level-data-query-service.md|高层设计：数据收集服务与查询服务]]',
          '[[03-trie-optimization.md|Trie 深入：用空间换时间的 Top K 缓存]]',
          '[[04-production-autocomplete.md|生产化自动补全：日志、缓存、过滤与分片]]'
        ],
        emphasisCards: []
      },
      {
        heading: '视频平台｜YouTube',
        paragraphs: [],
        faqs: [],
        bullets: [
          '[[01-youtube-scope-cost.md|YouTube 需求边界与成本估算]]',
          '[[02-upload-streaming-high-level.md|高层架构：上传流与播放流分离]]',
          '[[03-transcoding-dag.md|视频转码：DAG 工作流与并行处理]]',
          '[[04-optimization-security-cost.md|优化视频系统：速度、安全与 CDN 成本]]',
          '[[05-failure-wrap-up.md|故障处理与扩展讨论]]'
        ],
        emphasisCards: []
      },
      {
        heading: '云盘系统｜Google Drive',
        paragraphs: [],
        faqs: [],
        bullets: [
          '[[01-drive-scope-estimation.md|云盘需求：可靠、同步、低带宽]]',
          '[[02-single-server-to-high-level.md|从单机存储到高层架构]]',
          '[[03-block-server-consistency.md|Block Server：增量同步与强一致性]]',
          '[[04-upload-download-notification.md|上传、下载与通知服务]]',
          '[[05-storage-failure-tradeoffs.md|存储优化、故障处理与设计取舍]]'
        ],
        emphasisCards: []
      },
      {
        heading: '继续学习',
        paragraphs: [],
        faqs: [],
        bullets: [
          '[[01-real-world-architecture-reading.md|从真实系统架构中继续学习]]',
          '[[02-engineering-blogs-learning-loop.md|工程博客与长期学习闭环]]'
        ],
        emphasisCards: []
      }
    ]
  },
  {
    id: '01_autocomplete_scope_estimation',
    categoryId: 'system-design',
    chapterId: 'part13_autocomplete',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你应该能把自动补全从“输入框下面弹几个词”拆成可设计的系统问题：它为什么比普通搜索更容易打出高 QPS，哪些体验指标真正重要，如何用用户数、输入频率、峰值系数估算容量，以及为什么后续架构必须围绕预计算、缓存和降级展开。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '自动补全不是搜索结果页的缩小版，而是一条发生在用户输入过程中的高频低延迟链路。用户每输入几个字符就可能触发请求，前缀越短，请求越集中，结果还必须在很短时间内返回，否则输入框会显得迟钝。它通常只返回 5 到 10 条建议，允许结果不是全局最新，但不能慢、不能抖、不能经常空。',
          '因此设计自动补全的第一步不是立刻说 Trie，而是先定义“快”的边界：客户端要减少无意义请求，服务端要避免在线扫描和复杂排序，数据构建链路要提前算好热门前缀的 Top K。真正的核心取舍是用离线计算、额外存储和短暂旧数据，换在线请求的稳定低延迟。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '普通搜索通常发生在用户按下回车之后，一次搜索对应一次较重的查询；自动补全发生在输入过程中，一次搜索意图可能变成多次请求。假设用户输入 `winter jacket`，客户端如果每个字符都请求，服务端会收到 `w`、`wi`、`win` 等一串前缀。即使做了节流，一次搜索也常常产生 2 到 4 次补全请求。',
          '压力来源有三类。第一是流量放大：日活、每人搜索次数和每次输入触发次数相乘后，QPS 可能比搜索页本身更高。第二是热点集中：`a`、`s`、`i` 这类短前缀会被大量用户同时请求，容易形成缓存热点和单分片压力。第三是延迟敏感：用户正在打字，200 毫秒以上的响应就会明显滞后，重试和排队会让体验更糟。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '容量估算从用户行为开始。先估每天有多少搜索意图，再估每个意图会触发多少补全请求，最后乘以峰值系数。比如 1000 万日活，每人每天搜索 5 次，每次输入经节流后触发 3 次请求，每天就是 1.5 亿次补全请求。平均 QPS 约 1700，但搜索流量有明显时段集中，乘以 8 倍峰值后就接近 1.4 万 QPS。',
          '延迟预算要按链路拆：客户端节流等待、网络往返、网关、查询服务、索引读取、过滤排序和序列化。为了把服务端延迟压低，查询服务不能每次去数据库里 `LIKE prefix%`，也不能扫描日志算热度。更常见的机制是后台把候选词清洗、计数、打分，并为常见前缀生成可直接读取的 Top K 列表；在线请求只做输入规范化、查索引、轻量过滤和返回。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '假设电商搜索框要补全 `iph`。客户端在用户输入 `i` 时可能不请求，等到 `ip` 或停顿 100 毫秒后请求。网关收到请求后根据语言和地区路由到补全服务。服务先把前缀统一小写、去掉多余空格，再查本地内存中的前缀索引，拿到 `iphone 15 case`、`iphone charger`、`iphone screen protector` 等候选。返回前再过滤下架品类、敏感词和地区不可售内容，最后只给前端 8 条。',
          '如果没有预计算，服务端需要在商品表或搜索日志里找所有以 `iph` 开头的词，再按热度和点击率排序。这个操作在单次请求里看似能做，但在上万 QPS 和短前缀热点下会迅速拖垮数据库。预计算的好处是把“找所有候选并排序”移到后台批处理或流式处理，在线阶段只读取结果。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '预计算会带来存储放大和更新延迟。一个热门词会出现在多个前缀列表里，`iphone` 会影响 `i`、`ip`、`iph`、`ipho` 等节点；如果热度变化，需要等待下一轮构建或依赖实时覆盖层。自动补全通常能接受分钟级旧数据，但新闻、股票、活动促销等场景可能要求更快更新。',
          '常见坑是把自动补全当成“数据库前缀查询题”。面试里只说建索引或加缓存不够，因为问题的关键不是单次查得出来，而是在高频、热点、低延迟、可过滤、可回滚的条件下稳定查出来。另一个坑是过度个性化：个性化能提高相关性，但会降低缓存命中率，并引入隐私和数据稀疏问题，应作为后续扩展，而不是基础版本的前提。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：自动补全的流量来自用户输入过程，会把一次搜索放大成多次低延迟请求，所以我会先估算请求量和峰值，再把在线查询设计成读取预计算 Top K，客户端节流、服务端缓存，后台异步更新索引，异常时返回旧结果或减少候选数。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '自动补全的本质是高频前缀查询。它的难点不只是数据结构，而是请求放大、短前缀热点、延迟预算和结果质量之间的平衡。容量估算能帮助我们排除在线扫描方案，并自然推导出预计算、缓存、版本化发布和降级策略。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 如果客户端完全不做节流，补全服务的 QPS 会怎样变化？\n2. 为什么短前缀比长前缀更容易形成热点？\n3. 哪些业务场景可以接受旧建议，哪些场景必须更实时？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节把自动补全拆成数据收集链路和在线查询链路，看看日志、候选词、索引快照和查询服务如何配合。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '01_chat_scope_protocols',
    categoryId: 'system-design',
    chapterId: 'part12_chat_system',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能在设计聊天系统前明确功能范围、实时性要求和消息语义，并能比较短轮询、长轮询和 WebSocket。你还要能说明 ack、送达、已读、离线消息和多设备同步不是同一件事，不能在设计里混用。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '聊天系统的核心不是把文本写进数据库，而是让消息在多个用户、多个设备和不稳定网络之间可靠流动。普通 HTTP 适合发送历史查询和配置修改，不适合作为服务端主动推送新消息的主链路。实时聊天通常选择 WebSocket 或类似长连接；长轮询可作为降级；短轮询只适合低频刷新。设计前要先确定是否支持一对一、群聊、离线消息、已读回执、图片语音、在线状态和端到端加密，因为每一项都会改变架构复杂度。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '聊天是强交互系统。用户发出消息后希望立即看到“已发送”，对方在线时希望秒级收到，网络断开后又不能丢消息。移动端还会切换网络、退后台、重复发送，本地临时消息和服务端消息需要合并。如果只用“客户端每隔几秒问一次有没有新消息”，空请求会很多，延迟也不稳定；如果只推送不落库，连接失败就会丢消息。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '短轮询是客户端固定间隔请求新消息，实现简单但请求量大、延迟取决于间隔。长轮询是客户端发起请求后服务端挂起，有消息或超时再返回，减少空请求但仍需要不断重建请求。WebSocket 建立一次连接后，客户端和服务端可以双向发送数据，适合实时聊天，但引入连接状态管理、心跳、重连和负载均衡问题。',
          '消息语义要分层。发送 ack 表示服务端已接收或已持久化；delivered 表示消息到达某个设备；read 表示用户打开或阅读到某个位置。离线消息不是单独的一份数据，而是用户下次上线时根据会话序号补拉缺失消息。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '用户 A 给 B 发文本消息。A 的客户端通过 WebSocket 把消息和 client_msg_id 发给 gateway，gateway 转给消息服务。消息服务校验 A 是否属于会话，写入消息表，生成 message_id 和会话内 sequence，然后给 A 返回 ack。B 如果在线，系统通过 B 所在 gateway 推送消息；B 如果离线，消息仍在存储中，B 下次上线带着 last_seen_sequence 拉取缺失区间。',
          '这里 ack 只说明系统收到了，不说明 B 已经看到。B 的设备收到后可以回 delivered；B 打开会话后再上报 read。把这些状态分开，系统才能在弱网和多设备场景下解释清楚。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          'WebSocket 实时性好，但 gateway 是有状态组件，需要心跳、连接注册、故障重连和水平扩展。长轮询兼容性好，但服务端挂起连接和重建请求成本更高。短轮询最简单，却不适合大规模实时聊天。已读回执提升体验，但群聊里对每个人维护已读会带来很大写入和存储压力。',
          '常见坑是把服务端 ack 当成对方已读，或者把在线推送当成可靠投递。可靠性的基础应是先持久化，再推送；实时推送失败时仍能补拉。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：聊天系统要先定义消息语义和范围，实时链路用 WebSocket 维护在线连接，可靠性靠消息持久化和离线补拉，而不是只依赖在线推送。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '通信协议决定实时体验，消息语义决定可靠性边界。WebSocket 解决服务端主动推送，消息存储解决断线和离线，ack、送达、已读分别表达不同阶段。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么短轮询不适合作为大规模实时聊天主方案？\n2. 客户端收到发送 ack，是否代表对方已经看到消息？\n3. WebSocket 断开后，客户端应该带哪些信息恢复？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节拆解聊天系统的高层架构和存储模型，看看 gateway、消息服务、队列和消息表如何配合。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '01_crawler_scope',
    categoryId: 'system-design',
    chapterId: 'part09_web_crawler',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能把爬虫从一个下载脚本提升为可长期运行的系统来描述：先界定抓取范围和数据用途，再说明礼貌性、去重、更新频率和失败处理为什么必须进入设计。面试里被问到 Web Crawler 时，你不应直接画几个 worker，而要先把“抓什么、抓多大、抓多快、给谁用”说清楚。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '爬虫系统的本质是持续发现 URL、按规则抓取页面、从脏乱的网页世界里稳定产出可用数据。难点不在一次 HTTP 请求，而在 URL 会无限扩散、站点会限流、页面会变化、失败会反复出现、重复内容会污染结果。如果没有范围控制，爬虫会抓到登录页、日历页、搜索结果页和无穷参数 URL；如果没有礼貌性，目标站点会封禁你；如果没有状态和重试，少量坏页面就会拖垮整个 pipeline。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '网页不是一个干净的数据源。一个新闻首页可能每分钟变化，一个归档页几年不变；同一篇文章可能有移动版、桌面版、带追踪参数版；一个页面里的链接又会指向更多页面，形成不断扩张的图。系统资源却是有限的：带宽、DNS、连接数、存储、解析 CPU、下游索引容量都有限。爬虫设计的第一层压力就是在无限候选和有限资源之间做选择。',
          '还有外部约束。目标网站不是你的数据库，它有自己的负载能力和访问规则。robots.txt、限流、登录墙、版权和隐私边界都会影响能不能抓。把这些约束留到实现阶段再补，通常会导致抓取范围失控、数据质量很差，甚至服务被对方封掉。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '一个爬虫从 seed URL 开始。系统先把种子 URL 规范化，判断是否在允许范围内，然后加入 URL frontier。downloader 从 frontier 取出当前允许抓取的 URL，执行 HTTP 请求，得到状态码、响应头、正文或错误。parser 解析 HTML，抽取正文、标题、链接、语言、时间等结构化信息。新链接再次经过规范化、范围过滤和去重，合格后回到 frontier。页面内容则进入内容去重和存储。',
          '这里最关键的是状态，而不是循环。每个 URL 至少要知道 pending、fetching、fetched、failed、retry_later、blocked 等状态，并记录最后抓取时间、失败次数、内容 hash、最终 URL。这样调度器才能决定什么时候重抓、哪些失败要重试、哪些 URL 已经没有价值。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '假设你要抓新闻站文章。范围可以定义为只抓 `example.com` 下的首页、频道页和文章页，跳过登录、评论分页、站内搜索和带 `utm_*` 的追踪参数。系统先抓首页，解析出 100 个链接，其中 60 个是文章、20 个是频道、20 个是广告或外站链接。过滤后，80 个候选 URL 进入 frontier。downloader 按 host 限速抓取，parser 从文章页抽取标题、正文、发布时间和正文链接。若文章 A 同时以 `/news/123` 和 `/amp/news/123` 出现，URL 去重可能不够，内容 hash 或 canonical URL 可以帮助识别它们是同一篇。',
          '这个例子能推出三个设计点：范围过滤防止链接图爆炸；按 host 调度保护目标站点；URL 去重和内容去重解决的是不同层面的重复。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '范围越宽，覆盖率越高，但调度、存储和合规风险也越高。抓取频率越高，新鲜度越好，但更容易触发限流，成本也更大。保存原始 HTML 方便回放和重新解析，但会显著增加存储成本；只保存结构化结果成本低，但解析规则错了就难以修复。',
          '常见坑是把爬虫说成“队列加 worker”。这忽略了最重要的抓取边界和调度策略。另一个坑是只做 URL 去重，不做内容去重，最后同一篇文章被不同参数、不同终端页面重复入库。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：爬虫系统不是单次下载器，而是一个受范围、礼貌性和新鲜度约束的持续抓取系统；我会先定义抓取目标和边界，再用 frontier、downloader、parser、去重和存储组成可观察、可重试的流水线。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '爬虫的入口是 URL，但设计核心是控制无限扩散。范围决定抓什么，frontier 决定何时抓，downloader 处理外部网络不确定性，parser 和去重保证数据可用。只要先把这些边界讲清楚，后面的架构才不会变成堆组件。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 如果只允许抓新闻站首页和文章页，你会如何定义 URL 过滤规则？\n2. 为什么按域名限速比只做全局限流更重要？\n3. URL 去重和内容去重分别会漏掉哪些重复？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节把爬虫拆成 URL frontier、downloader、parser、去重器和存储，沿着一条 URL 的生命周期看完整流水线如何工作。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '01_drive_scope_estimation',
    categoryId: 'system-design',
    chapterId: 'part15_google_drive',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你应该能说明云盘系统的核心承诺是什么，为什么它不只是对象存储，如何拆分可靠保存、多设备同步、共享、版本恢复和低带宽优化，并能对文件内容、元数据和同步事件做粗略容量估算。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '云盘的核心承诺是：用户把文件放进去，之后能在不同设备上可靠地找回来。相比普通上传下载系统，云盘更强调同步体验。用户在电脑上修改文档，手机和网页端应尽快看到变化；网络断开后上传要能恢复；误删、覆盖或冲突时，系统最好能提供回收站、版本历史和冲突副本。',
          '所以设计云盘不能只说“文件放对象存储”。真正的问题是文件元数据、内容块、客户端本地状态、通知事件和权限之间如何保持一致，同时尽量少传数据。大文件只改了几 KB 却重传几 GB，是用户和系统都难以接受的。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '云盘面对的是长期状态，而不是一次性请求。文件会被重命名、移动、共享、删除、恢复和多端修改；客户端可能离线几天后重新上线；本地磁盘可能满，文件可能被其他程序锁定；移动端还要考虑电量和流量。服务端必须在这些不稳定条件下保证用户的数据不丢。',
          '压力来源也不止存储容量。元数据记录可能非常多，一个用户有几万个小文件并不罕见；同步事件频率可能很高，一个自动保存文档几分钟一次变更；共享和权限会让同一文件出现在多个人的目录视图里。云盘系统要同时处理容量、状态、一致性、带宽和安全。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '功能边界可以先定为：上传、下载、删除、重命名、移动目录、同步文件夹、共享链接、回收站和版本历史。非功能需求包括可靠性、可用性、一致性、低带宽、安全和可恢复。可靠性要求文件块不能丢；一致性要求目录树和版本不要互相矛盾；低带宽要求只传变化部分；安全要求权限隔离和加密。',
          '容量估算要分三类。文件内容假设 1000 万用户，每人平均 10GB，就是 100PB 级别。元数据假设每人 1 万个文件，就是千亿级记录，每条要保存文件 ID、父目录、名称、大小、版本、哈希、所有者、权限、更新时间和删除状态。同步事件则取决于活跃用户和修改频率，会影响通知服务、变更日志和客户端拉取。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '用户在笔记本上修改一个 2GB 的视频项目文件，只改了中间 10MB。朴素方案会重新上传整个 2GB，网络慢时要等很久，也给服务端带来大量重复写入。更好的方案是客户端把文件切块，计算每个块的哈希，只上传变化块，然后提交一个新的文件版本，版本里记录完整块列表。',
          '另一台设备收到通知后，不直接下载完整文件，而是先拉取变更日志，发现该文件有新版本。它对比本地已有块，缺哪些块就下载哪些块，最后组装成新文件。这个例子说明云盘的关键不是单个上传 API，而是块、版本、通知和客户端状态共同协作。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '低带宽优化会增加复杂度。切块、哈希、去重、压缩和加密都需要客户端计算，移动端可能耗电；版本历史提高可恢复性，但会占用额外存储；强一致能减少冲突，但跨区域写入延迟更高；最终一致更可用，但客户端要处理冲突和补偿拉取。',
          '常见坑是把云盘当成“对象存储 + 数据库”。对象存储能保存内容，但不能自动解决目录树、版本提交、多设备同步和冲突。另一个坑是忽略小文件和元数据规模，只估算总 GB。很多云盘瓶颈来自大量小文件的元数据查询和同步事件，而不是单个大文件。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：云盘设计的核心是可靠保存和多设备同步，我会把文件内容、文件元数据和同步事件分开估算，并用切块增量上传、版本元数据、变更日志和通知服务来减少带宽并保证可恢复。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '云盘不是简单的文件仓库，而是围绕长期用户状态构建的同步系统。它要保证文件不丢、目录不乱、修改可恢复、设备能追上变化，同时控制存储和带宽成本。需求阶段把这些压力说清楚，后续架构才不会只停留在对象存储。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 云盘为什么需要版本历史和回收站？\n2. 文件内容存储和文件元数据存储为什么适合分开？\n3. 用户修改 2GB 文件中的 1MB 内容时，系统怎样避免重传整个文件？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节从单机文件服务器出发，逐步拆成客户端、元数据服务、块服务、对象存储和通知服务。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '01_interview_mindset_and_scope',
    categoryId: 'system-design',
    chapterId: 'part03_interview_framework',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '本节要帮你建立系统设计面试的基本姿势：先澄清需求和边界，再选择合适深度，而不是听到题目就开始画组件。你要能解释为什么范围控制会影响架构质量，也能把功能需求和非功能需求分开表达。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '系统设计面试考的不是谁背的组件多，而是谁能在不完整信息下做合理取舍。开场最重要的是澄清：用户是谁，核心功能是什么，读写规模多大，延迟和可用性要求如何，哪些功能不做。范围越清楚，后面的架构越不会跑偏。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '很多候选人失败在太快进入方案。题目说“设计 YouTube”，他立刻画 CDN、转码、推荐和搜索；但面试官可能只想先看视频上传与播放。题目说“设计聊天系统”，他直接讨论 WebSocket 集群，却没问是否需要群聊、离线消息、已读回执和端到端加密。',
          '系统设计题通常故意很大，因为真实工程也经常从模糊问题开始。你的任务不是一次覆盖所有功能，而是把问题切成可讨论的核心路径。范围控制能让面试官看到你的产品判断、沟通能力和工程优先级。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '开场可以按四步推进。第一，复述题目，确认目标，例如“我们设计一个支持短链接创建和跳转的服务”。第二，澄清功能需求：用户能做什么，系统要返回什么。第三，澄清非功能需求：规模、延迟、可用性、一致性、安全和成本。第四，明确不做范围：比如暂不做后台运营、复杂推荐或多语言审核。',
          '功能需求描述产品行为，非功能需求描述系统约束。二者不能混。比如“用户可以上传视频”是功能；“上传后 5 分钟内可播放，播放可用性 99.9%”是非功能。面试中把这两类分开，会让后续设计更清晰。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '题目是“设计一个限流器”。糟糕开场是直接说“用 Redis 加 Lua”。更好的开场是问：限流对象是用户、IP、API key 还是租户？规则是每秒、每分钟还是每日配额？限流后返回 429 还是排队？系统部署在 API Gateway 还是服务内部？需要分布式全局准确，还是允许小误差换性能？',
          '这些问题会改变设计。如果只保护登录接口，可能按 IP 和账号组合限流；如果是开放 API 平台，要按 API key 和套餐限流；如果要求全球严格配额，跨区域一致性会成为难点；如果只需单机网关保护，内存计数可能足够。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '澄清需求的收益是避免过度设计，但也不能问个没完。面试时间有限，问题要围绕会改变架构的点。问完后要主动给默认假设，让讨论继续推进。例如“如果没有特殊要求，我先假设读多写少、峰值是平均 5 倍、核心路径优先保证可用”。',
          '常见坑是把澄清问题当背诵清单，问了却不用在设计里。另一个坑是范围收得过小，避开题目关键难点。好的范围控制不是逃避复杂度，而是先锁定核心路径，再在时间允许时扩展。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：“我先确认设计范围。为了让方案可落地，我会把需求分成功能和非功能两类，并明确哪些能力本轮不覆盖。接下来架构会围绕核心读写路径和规模假设展开。”'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '系统设计面试是协作式问题求解。好的开场能把模糊题目变成可设计系统，让每个组件都有需求来源。不要急着抢答，先把问题框住，后面的方案才有主线。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 哪些澄清问题会真正改变架构选择？\n2. 功能需求和非功能需求分别举三个例子。\n3. 如果面试官说“你自己假设”，你应该怎样继续？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会讲如何提出高层设计，并通过核心请求流和数据流与面试官达成共识。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '01_news_feed_scope_apis',
    categoryId: 'system-design',
    chapterId: 'part11_news_feed',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能说明 News Feed 支持的核心动作：发帖、关注、读取首页、分页、排序和可见性控制；也要能区分帖子本体、关系数据、feed 索引和缓存。面试里不要把 feed 当成一个列表接口，它背后是关系、内容、排序和权限的组合。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          'News Feed 的目标是让用户打开首页时快速看到与自己相关的一组内容。设计前必须明确范围：是好友动态还是关注流，是否混入推荐，排序是时间倒序还是算法分数，是否支持隐私、屏蔽、删除、编辑和媒体。最基础的数据可以分成四类：用户关系表保存谁关注谁，帖子表保存内容本体，feed 索引保存某个用户首页候选 post id，缓存保存近期热点列表和详情。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          'Feed 看起来只是 `GET /feed`，但每次返回都依赖多个变化源。用户关注关系会变，帖子可能删除或改权限，排序规则可能调整，热门内容会造成读热点。若读取时临时扫描所有关注者帖子，延迟会很高；若发布时把完整帖子复制到每个关注者首页，存储会膨胀，删除和权限变化也难处理。因此要把内容本体和 feed 索引分开。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '帖子发布 API 创建内容，例如 `POST /posts`，请求包含作者、正文、媒体引用、可见性和客户端幂等键。服务端写入帖子表后产生发布事件，后续 fanout 决定是否写入关注者 feed。关注 API 维护关系，例如 `POST /follow` 和 `DELETE /follow`，关系变化影响后续 feed，也可能触发历史补齐或清理。',
          '读取 API 使用 cursor 分页，例如 `GET /feed?cursor=...&limit=20`。服务端先从 feed 索引取轻量 post id，再批量读取帖子详情、作者信息和媒体元数据，最后做可见性过滤和排序。cursor 比 offset 更适合不断插入新内容的列表，因为 offset 会在新帖子到来时重复或跳过。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '用户 A 关注了 B、C、D。B 发布一条仅关注者可见的帖子，帖子服务先写 `posts` 表，生成 post_id。fanout worker 根据 B 的关注者把 post_id 写入 A 的 feed 索引。A 打开首页时，feed 服务取出最近 20 个 post_id，批量查询帖子表，再检查 A 是否仍关注作者、帖子是否被删除、是否被屏蔽。返回结果包含下一页 cursor，例如最后一条的时间戳和 post_id。',
          '如果 A 后来取消关注 B，系统可以选择异步清理 A feed 中 B 的旧内容，也可以读取时过滤。前者读取快但写成本高，后者实现简单但读取多一次校验。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '时间倒序 feed 简单、可解释，适合入门设计；算法排序体验可能更好，但需要候选生成、特征、分数和实验系统。新关注后是否补齐历史动态是产品取舍：补齐让首页更丰富，但会带来额外写入。删除和权限变化如果只依赖异步清理，短时间内可能泄露内容，因此读取时最终校验很重要。',
          '常见坑是用 offset 分页处理实时 feed，翻页时容易重复或漏项。另一个坑是在 feed 索引里复制完整帖子内容，导致编辑、删除和媒体更新时要修改大量副本。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：我会把 News Feed 拆成发布、关系和读取三条路径，帖子表保存内容本体，feed 索引只保存轻量候选，读取时批量补详情并做最终可见性校验。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          'Feed 的复杂度来自“每个用户看到的列表都不同，而且列表持续变化”。清晰的数据边界能让发布、关注、读取和权限变化互不拖死。基础设计先做好时间倒序和 cursor，再扩展推荐排序。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么 feed 索引通常存 post id，而不是完整帖子内容？\n2. 新关注一个用户后，是否要立刻补齐历史动态？\n3. 删除帖子后，如何保证它不再出现在任何人的首页？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节讨论 Feed Publishing 与 Fanout：发布时推给关注者，还是读取时再聚合。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '01_notification_scope',
    categoryId: 'system-design',
    chapterId: 'part10_notification_system',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能区分交易、安全、互动、营销等通知类型，说明 push、短信、邮件和站内通知的差异，并在设计前明确可靠性、延迟、用户偏好、频控和合规边界。通知系统的关键不是能不能发出去，而是该不该发、用什么渠道发、失败后如何处理。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '通知系统连接的是业务事件和用户注意力。订单支付成功、登录异常、评论回复、营销活动看起来都是“发一条消息”，但可靠性、时效、成本和合规要求完全不同。好的设计会先给通知分级：安全和交易通知更重可靠性和审计；互动通知重及时和聚合；营销通知重分群、频控和退订。分类清楚后，系统才知道哪些要跨渠道补偿，哪些可以延迟合并，哪些用户关闭后必须停止。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '如果业务服务直接调用短信、邮件或 push 平台，短期实现很快，长期会出现三个问题。第一，渠道规则分散在各业务里，模板、退订、语言、频控无法统一。第二，第三方渠道延迟和失败会拖慢业务主链路，例如下单接口等待短信网关。第三，用户体验失控：同一事件重复提醒、夜间营销 push、退订后仍收到邮件，都会伤害信任。',
          '通知的压力还来自成本和合规。短信贵，邮件容易进垃圾箱，push 依赖设备 token，站内通知实时性弱但可追溯。不同渠道不能用同一种策略。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '业务服务提交的是语义化通知请求，而不是直接提交渠道内容。请求包含用户、通知类型、业务对象、优先级、模板参数、幂等键和期望渠道。通知系统收到后，先校验类型和权限，再读取用户偏好、设备信息、语言地区、时区和免打扰规则。随后系统根据通知等级选择渠道，渲染模板，进入发送链路。',
          '用户控制是主流程的一部分。营销通知必须检查订阅和频控；互动通知可以合并；安全通知可能绕过普通静默规则，但仍要符合产品和法规边界。渠道选择也要有策略：push 适合低成本实时提醒，短信适合高价值和高覆盖场景，邮件适合长内容和可追溯信息，站内通知适合保存历史和补偿。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '用户支付订单后，订单服务提交 `order_paid` 通知，请求里有 user_id、order_id、金额展示参数和幂等键。通知系统发现这是交易类通知，用户不能退订核心交易提醒，于是创建站内通知，同时发送 push；如果 push token 失效，可以记录失败，但不一定升级短信。登录异常则不同：系统可能同时发邮件和 push，必要时短信补偿，因为安全风险更高。营销优惠券则必须检查用户是否订阅、当天是否已达上限、当前是否处于免打扰时段。',
          '这说明“通知类型”决定后续所有策略，而不是所有消息走同一条发送规则。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '渠道越多，覆盖率越高，但模板管理、失败处理和用户偏好会更复杂。严格频控能减少打扰，但可能降低短期转化。交易通知绕过免打扰能保证及时，却必须谨慎定义边界，否则会被业务滥用。',
          '常见坑是把通知系统设计成渠道转发器，只关心 APNs、FCM、短信接口怎么调，却不处理偏好、频控和幂等。另一个坑是让业务服务知道太多渠道细节，导致新增渠道或修改退订规则时要改一堆业务代码。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：我会先按业务重要性给通知分级，再让业务服务提交语义化请求，由通知系统统一处理偏好、模板、频控、渠道选择、投递和审计。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '通知系统的范围包括业务触发、用户控制、渠道能力和可靠性等级。真正的难点不是“发送”，而是在成本、体验、合规和可靠性之间做稳定决策。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 哪些通知必须跨渠道补偿，哪些只需要站内保留？\n2. 用户关闭 push 但开启邮件时，业务服务是否应该感知？\n3. 安全通知和营销通知的频控边界为什么不同？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节拆解一条通知从业务事件到最终投递的高层架构，包括队列、worker、模板服务和渠道适配器。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '01_rate_limiter_problem_and_requirements',
    categoryId: 'system-design',
    chapterId: 'part04_rate_limiter',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '本节要讲清 Rate Limiter 到底保护什么、限制谁、按什么规则限制，以及限流后系统应该怎样响应。你要能把限流和认证、风控、熔断区分开，并在面试开场阶段把需求范围问清楚。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '限流器的核心任务是在请求进入昂贵或脆弱资源前控制速率，保护系统容量，并让资源分配更公平。它可以按 IP、用户、API key、设备、租户、接口或组合维度限流；可以返回 429、排队、降级或触发风控。设计限流器前，必须先明确限流对象、时间窗口、准确性要求、部署位置和故障策略。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '没有限流时，系统会把所有请求都尽力往后端送。正常峰值、脚本误调用、恶意攻击、客户端重试风暴都会挤占数据库、缓存、搜索、短信网关等资源。一个用户疯狂刷新，可能影响所有用户；一个合作方写错循环，可能把开放 API 打满；登录接口被撞库，可能让认证服务和数据库同时承压。',
          '限流不是只为了防坏人，也为了公平。付费 API 平台要保证不同套餐有不同配额；多租户系统要避免一个租户占满共享资源；短信、邮件、支付等外部资源有成本和供应商限制。限流器就是把这些业务和容量约束变成请求入口的执行规则。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '限流决策通常需要四个输入：标识谁在请求，识别请求属于哪个规则，读取当前计数或令牌状态，决定放行还是拒绝。一次请求进入后，限流器从 Header、Token、IP 或路径中生成 key，例如 `user:123:/search`；再读取规则，如每分钟 60 次；然后根据算法更新状态；最后返回 allow 或 deny。',
          '限流和相关概念要分开。认证回答“你是谁”，授权回答“你能不能访问这个资源”，限流回答“你访问得是否太频繁”。熔断保护的是下游服务故障时停止继续调用，限流保护的是流量进入前不超过容量。风控会判断行为风险，限流是其中一个执行手段，但不是完整风控系统。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '一个开放 API 允许免费用户每分钟 100 次请求，企业用户每分钟 10000 次。请求到达网关后，网关从 API key 解析出用户和套餐，生成 key：`api_key:abc123`。限流器读取该 key 在当前窗口内的状态，如果免费用户已经用了 100 次，第 101 次返回 HTTP 429，并在响应头中给出 `Retry-After`。',
          '登录接口规则不同。它可能同时按账号和 IP 限制：同一账号每 5 分钟最多 5 次失败，同一 IP 每分钟最多 30 次登录尝试。这样既能挡住对单个账号的爆破，也能限制单个来源的高频请求。但代理池会绕过单 IP，所以还要结合验证码、设备指纹和风控。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '限流太松保护不了后端，太严会误杀正常用户。按 IP 简单，但 NAT、公司出口和移动网络会让很多用户共享 IP；按用户准确，但未登录场景不可用；按 API key 适合开放平台，但 key 泄露后要能吊销。返回 429 清晰，但对关键内部任务可能需要排队或降级。',
          '常见坑是把限流当安全系统的全部。攻击者可以换 IP、换账号、分布式绕过；限流只能控制速率，不能判断所有恶意行为。另一个坑是忘记自身可用性：限流器在入口处，每个请求都经过它，一旦它依赖的存储变慢，整个系统都会被拖慢。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：“我会先明确限流对象、规则粒度、时间窗口、拒绝行为和准确性要求。限流器的职责是控制请求速率保护后端，不替代认证和风控；它本身也必须低延迟、高可用，并有故障时的放行或拒绝策略。”'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          'Rate Limiter 是容量保护和公平分配的入口组件。它的难点不只是算法，还包括规则定义、身份维度、误杀、绕过和故障策略。开场把需求问清，后面的放置位置和算法选择才有依据。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 登录接口为什么通常要同时按账号和 IP 限流？\n2. API key 限流和用户 ID 限流有什么差异？\n3. 限流器依赖的存储故障时，fail open 和 fail closed 各有什么风险？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会讨论限流器应该放在哪里：客户端、服务内部、中间件还是 API Gateway。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '01_real_world_architecture_reading',
    categoryId: 'system-design',
    chapterId: 'part16_learning_continues',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你应该能带着问题阅读真实架构文章，而不是只记技术名词。你会知道如何找业务背景和系统压力，如何画数据流、控制流和失败路径，如何把一个真实案例转化成系统设计面试中可复用的表达。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '系统设计能力不会在读完几个经典题后自动完成。经典题提供框架，真实系统提供约束。继续学习的重点不是记住“某公司用了 Kafka、Redis、Flink”，而是读出它为什么需要这些组件，原方案在哪里失败，新方案牺牲了什么，又换来了什么。',
          '读架构文章时，要把自己放在设计者的位置上：当时的流量、状态、延迟、容量、一致性、成本或故障压力是什么？如果没有这些压力，最终架构就只是答案截图，无法迁移到自己的设计里。真正有用的是从压力推导机制，再从机制总结取舍。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '很多人读工程博客会陷入“收藏很多，表达很少”的状态。文章看完了，面试时仍然只会说加缓存、上队列、做分库，因为阅读停在组件名，没有进入问题结构。系统设计考察的不是你听过多少工具，而是能否解释为什么需要某个机制，以及它会带来什么新问题。',
          '真实架构文章还常常省略背景。团队内部知道的流量规模、历史包袱、组织边界和成本约束，读者未必知道。如果不主动追问，很容易把一个大公司在特定阶段的方案当成通用最佳实践，搬到小系统里就成了过度设计。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '阅读可以分三步。第一步找压力：原系统是因为 QPS 增长、延迟过高、数据不一致、成本失控、部署困难还是故障频繁而改变？把压力写成具体句子，例如“同步链路太长导致用户请求等待 3 秒”比“性能不好”更有用。',
          '第二步画流动：请求从哪里进入，数据写到哪里，异步任务由谁触发，状态保存在谁那里，失败由谁重试。这里要区分数据流和控制流。数据流说明内容如何移动，控制流说明谁决定下一步。第三步总结取舍：这个方案解决了什么问题，引入了什么复杂度，适合什么前提，不适合什么规模或团队。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '假设你读到一篇文章说某团队引入消息队列优化订单创建。不要只记“订单系统用了 MQ”。先问：为什么同步流程不够？可能是创建订单后还要扣库存、发优惠券、发送通知、写分析日志，用户请求被一串下游依赖拖慢。再画流：订单服务先写订单主记录和 outbox 事件，异步 worker 消费事件处理通知和日志，库存可能仍然同步或使用预留机制。',
          '接着写取舍。收益是用户请求更短，下游故障不会直接阻塞下单；代价是事件可能重复、乱序或延迟，必须做幂等、状态查询和补偿。这样你得到的不是“加队列”这个词，而是一张可迁移的卡片：当同步链路过长且部分副作用允许延迟时，可以用事件异步化，但要处理消息语义。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '读真实系统要警惕规模错配。大公司为了多区域容灾、组织协作和合规而引入的复杂架构，小团队未必需要。反过来，小系统的简单方案也不代表大规模下仍可行。判断方案是否可复用，要看压力是否相似，而不是行业或技术栈是否相似。',
          '常见坑是只摘组件清单，不摘失败路径。缓存失效后谁回源？队列重复消息谁去重？搜索索引落后主库时用户看到什么？CDN 回源失败是否有备用路径？这些边界问题才是系统设计能力增长最快的地方。另一个坑是只看成功改造，不看迁移过程；真实系统往往需要灰度、双写、回滚和指标验证。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：我阅读真实架构时不会先记组件，而是先找原系统压力，再画请求和数据如何流动，最后总结方案解决的问题和新增复杂度；这样才能把案例转化成可复用的设计判断，而不是背诵某公司的技术选型。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '真实架构文章的价值在于约束和取舍。先找背景压力，再画数据流、控制流和失败路径，最后提炼适用条件。能把“用了什么”翻译成“为什么用、怎么流、哪里会坏、代价是什么”，阅读才会变成设计能力。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 你最近读过的一个架构案例，它最初要解决的具体压力是什么？\n2. 如果把那个案例搬到小规模系统里，会不会过度设计？\n3. 读文章时，哪些信息能帮助你判断方案是否可复用？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节把工程博客、论文和事故复盘组织成长期学习闭环，避免读完就忘、收藏却不会用。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '01_rehashing_problem',
    categoryId: 'system-design',
    chapterId: 'part05_consistent_hashing',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能解释 `hash(key) % N` 为什么在节点数变化时制造大面积重映射，能把“缓存命中率下降”和“数据库被打爆”串成一条因果链，也能判断普通取模哈希在哪些场景仍然可以接受。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '普通取模哈希的问题不在平时，而在节点集合变化时。只要 `N` 从 4 变成 5，几乎所有 key 都要重新计算归属；这会让原本已经分布好的缓存或数据像被重新洗牌一样迁移。一致性哈希要解决的核心，就是把节点增删造成的影响限制在局部，而不是让全局 key 一起搬家。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '分布式系统很少一直维持固定节点数。缓存集群会扩容，机器会故障，机房会维护，热点业务会临时加机器。用 `hash(key) % N` 时，`N` 是公式的一部分，所以节点数量改变会改变每个 key 的计算结果。比如某个 key 的哈希值是 17，4 台机器时落在 `17 % 4 = 1`，5 台机器时落在 `17 % 5 = 2`。这不是少数 key 的偶然变化，而是大多数 key 的规律性变化。',
          '对缓存来说，重映射意味着请求去了新节点，但数据还在旧节点，结果就是大量 miss。miss 以后请求会穿透到数据库、搜索服务或对象存储；如果这些下游本来靠缓存削峰，突然承接全量读流量，就会出现延迟上升、连接池耗尽、重试放大。对持久化 KV 来说，重映射还意味着数据迁移、读写路由切换、迁移失败重试和一致性窗口。',
          '还有一个容易被低估的压力是恢复速度。扩容或缩容通常发生在系统已经有压力的时候：要么流量上涨，要么机器故障，要么容量接近上限。如果这时再触发全量重映射，系统需要同时承担读请求、回源请求和迁移流量。迁移越大，越可能把原本只是容量问题扩大成可用性问题。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '普通哈希的流程很直接：客户端或路由层拿到 key，计算哈希值，再对当前节点数取模，得到目标节点编号。这个方法在节点集合稳定时很高效，因为每次路由只需要一次哈希和一次取模。',
          '问题也藏在这一步：节点编号依赖“当前位置”和“总节点数”。当新增一台机器时，不是只让一部分 key 去新机器，而是所有 key 都用新除数重新取模。原来的 0、1、2、3 号桶不再代表同一批哈希值区间。缩容时也一样，坏掉的不是只有下线机器上的 key，健康机器上的很多 key 也会被重新分配。',
          '因此，普通取模哈希适合“节点数长期固定、数据容易重建、迁移成本低”的场景；它不适合“在线扩缩容频繁、缓存承载核心读流量、数据需要持续可用”的场景。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '假设有 4 台缓存，保存 4000 万个用户资料 key，平均每台 1000 万。一天晚上流量升高，你把集群扩成 5 台。直觉上新增 1 台机器应该只迁移约 20% 数据，但取模哈希不是这样工作。每个 key 都从 `% 4` 改成 `% 5`，大量 key 的目标节点变化，可能只有少部分还留在原节点。',
          '请求链路会变成这样：用户请求 `user:123`，路由层算出新节点是 cache-4；cache-4 没有这条数据，于是查数据库；数据库返回后写入 cache-4。与此同时，`user:456`、`user:789` 等热点 key 也在经历同样过程。扩容本来是为了减压，却因为命中率骤降把压力转移到了数据库。',
          '如果这是持久化存储，麻烦更大。你不能简单地让新路由生效，因为旧数据还在原节点；也不能无限期查两边，因为读路径变复杂。你必须设计迁移任务、迁移标记、双读或转发策略，并处理迁移过程中写入到旧节点还是新节点的问题。',
          '可以把这件事想成一次路由表语义变化。旧路由表认为 key 属于 cache-2，新路由表认为它属于 cache-4。只要不同客户端刷新路由表的时间不同，同一个 key 就可能被不同客户端写到不同位置。缓存场景最多是命中率下降；存储场景则可能出现读不到最新写入，所以普通取模在有状态存储里尤其危险。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '普通取模哈希的优点是实现简单、计算快、分布通常均匀；缺点是对节点变化极其敏感。一个常见误区是只看“哈希函数是否均匀”，却忽略“节点数变化后是否稳定”。均匀性解决的是平时负载分布，稳定性解决的是扩缩容和故障时的影响范围，两者不是同一个问题。',
          '另一个坑是以为扩容只影响新增机器上的那部分数据。对取模哈希来说，扩容改变的是分配公式，不是简单增加一个接收者，所以影响会扩散到整个集群。工程上如果必须用取模哈希，就要把它限制在临时分桶、离线任务、可整批重算的小数据集，或者提前接受扩容时整体重建的成本。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：`hash(key) % N` 在节点数固定时简单有效，但 `N` 一变，大部分 key 的归属都会变化，导致缓存雪崩式 miss 或大规模数据迁移；一致性哈希的价值就是把节点增删的影响限制到相邻区间。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '普通取模哈希不是坏方案，而是边界清晰的方案。它解决固定节点数下的分配问题，却没有解决动态节点集合下的稳定路由问题。在线系统越依赖缓存和分片存储，越需要减少扩缩容时的全局扰动。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 如果缓存命中率从 95% 掉到 50%，数据库承受的读流量会增加多少倍？\n2. 为什么新增一台机器也会让原本健康机器上的 key 被迁走？\n3. 哪些业务可以接受普通取模哈希扩容时的整体重建？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会把 key 和节点放到同一个哈希环上，解释一致性哈希如何用“顺时针找第一个节点”的规则稳定定位服务器。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '01_requirements_and_apis',
    categoryId: 'system-design',
    chapterId: 'part08_url_shortener',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能定义短链接系统的功能需求、非功能需求和核心 API，并从读写比例、存储量、延迟和安全风险推导后续架构。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '短链接系统表面是把长 URL 变短，核心是建立 `short_code -> long_url` 的稳定映射，并在高频跳转路径上快速返回重定向。设计时要先区分创建链路和跳转链路：创建相对低频但要校验和去重，跳转极高频且要求低延迟。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '长 URL 不适合短信、社交媒体、二维码和广告投放。短链接把复杂 URL 压缩成短码，方便传播，也便于统计点击来源。但一旦短链接被大量访问，跳转服务就成了用户进入目标页面的入口，延迟和可用性直接影响业务转化。',
          '系统压力主要来自读写不对称。每天可能创建 100 万条短链，却有 10 亿次跳转。创建时可以多做校验、风控、持久化；跳转时不能每次做复杂逻辑，否则 P99 延迟会上升。安全问题也很现实：恶意用户可能创建钓鱼链接，攻击者可能扫描短码，热点短链可能瞬间爆发。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '功能需求通常包括：创建短链接、根据短码跳转、设置过期时间、支持自定义短码、统计访问次数、禁用违规链接。非功能需求包括：跳转低延迟、高可用、短码唯一、可扩展、可观测、能抵御恶意扫描。',
          '核心 API 可以设计为两个主接口。创建接口：`POST /api/links`，请求体包含 `long_url`、可选 `custom_alias`、可选 `expire_at`。服务返回 `short_url`、`short_code`、过期时间和状态。跳转接口：`GET /{short_code}`，服务查询映射并返回 301 或 302。管理接口可以包括禁用、更新目标 URL、查询统计，但它们不在跳转主路径上。',
          '容量估算会影响数据模型。假设每天创建 100 万条，保留 5 年，映射表约 18 亿行。每条记录包含短码、长 URL、状态、创建者、时间等，可能需要数百 GB 到 TB 级存储。跳转 QPS 远高于创建 QPS，因此缓存是关键。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '创建流程：用户提交 `https://example.com/products?id=123&utm=...`；API 服务先校验 URL 格式、协议是否允许、域名是否在黑名单；如果支持去重，可以对规范化后的长 URL 计算指纹；短码生成器生成候选短码；数据库以 `short_code` 唯一索引插入；成功后返回 `https://sho.rt/a8K3xQ`。',
          '跳转流程：浏览器访问 `/a8K3xQ`；跳转服务从路径提取短码，先查缓存；命中后检查状态和过期时间，返回重定向；未命中再查数据库，查到后写缓存并返回。查不到时返回 404，并可短暂缓存不存在结果，避免扫描流量打爆数据库。',
          '这两个流程的差异决定架构：创建链路可以同步写数据库，跳转链路要尽可能少访问数据库，统计链路最好异步。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '短码长度越短，越容易冲突，也越容易被枚举；越长，用户体验稍差但空间更大。自定义短码提升可读性，但需要处理抢占、保留词和品牌滥用。允许修改长 URL 会增加缓存失效和安全审核复杂度；不允许修改则语义简单。',
          '常见坑是只设计创建 API，不估算跳转 QPS。短链接系统通常读远大于写，架构要围绕跳转路径优化。另一个坑是忽略安全：如果不做恶意 URL 检测、限流和禁用状态，短链接服务很容易变成钓鱼和垃圾信息基础设施。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：短链接系统的核心是短码到长 URL 的映射；创建链路负责校验、生成和持久化，跳转链路负责低延迟查询和重定向，统计与风控应尽量异步或旁路，不阻塞用户跳转。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '短链接设计要从需求边界开始。短码唯一只是基础，高频跳转、缓存、过期、状态、安全、统计才决定系统是否能在线上稳定运行。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 如果每天创建 100 万短链，保留 5 年，大约需要存多少条映射？\n2. 自定义短码会给唯一性和安全带来哪些额外问题？\n3. 为什么跳转统计不应该同步写在用户请求主路径上？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会聚焦浏览器跳转流程，以及为什么短链接通常在 301 和 302 之间谨慎选择。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '01_requirements_and_candidate_solutions',
    categoryId: 'system-design',
    chapterId: 'part07_unique_id',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能说清唯一 ID 生成器到底要满足哪些约束，为什么“唯一”只是底线，还要考虑趋势递增、长度、吞吐、可用性和可解析性。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '分布式唯一 ID 的目标不是随便生成一个不重复字符串，而是在高并发、多机器、跨机房环境下，持续生成可存储、可索引、可排序、可排障的 ID。需求不同，方案会完全不同：数据库自增、UUID、号段、Snowflake 都有适用边界。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '单机系统可以用数据库自增主键，因为所有写入都经过一个数据库实例，顺序由数据库保证。分布式系统里，订单服务、消息服务、评论服务可能有多个实例同时创建记录。如果每次都回到一个中心数据库拿 ID，中心点会成为瓶颈和故障点；如果每台机器自己递增，又会互相撞号。',
          '业务还会提出额外要求。数据库主键希望短一点，索引局部性好；日志排查希望从 ID 看出生成时间；订单号可能不能暴露机器数量或业务规模；消息 ID 可能要求大致按时间排序；前端展示可能希望不太长。不同约束会影响位数、编码、中心化程度和容错策略。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '设计前先明确六个问题。第一，是否全局唯一，范围是单表、单业务还是全公司。第二，是否需要趋势递增，关系到数据库 B+Tree 插入是否频繁随机写。第三，吞吐峰值是多少，例如每秒 10 万还是 1000 万。第四，可用性要求如何，ID 服务不可用是否会阻断主链路。第五，ID 长度和类型限制，是否必须 64-bit 整数。第六，是否需要从 ID 反查时间、机器或业务线。',
          '这些问题会排除很多方案。如果只需要离线唯一，UUID 足够；如果必须 64-bit 且趋势递增，Snowflake 更合适；如果系统强依赖数据库且规模不大，自增 ID 简单可靠；如果希望减少中心服务调用，号段模式可以批量取号。',
          '还要区分“严格递增”和“趋势递增”。严格递增要求全局每个新 ID 都比之前大，通常需要中心化排序，成本高。趋势递增只要求大体随时间增长，允许同一毫秒内不同机器生成的 ID 局部乱序，更适合高吞吐分布式系统。',
          '还要明确 ID 的生命周期。有些 ID 只在内部数据库使用，有些会暴露给用户、写进日志、出现在客服系统和对账文件里。内部 ID 可以偏效率，外部展示 ID 还要考虑可读性、不可枚举、是否包含敏感信息。很多公司会同时有内部主键和外部单号，两者不要混为一谈。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '假设电商订单系统每天 1 亿订单，峰值每秒 5 万，订单表按 ID 做主键，要求 ID 是 64-bit 整数，方便数据库索引，同时排查时能看出大致创建时间。这个需求下，UUID 虽然唯一，但 128-bit 且随机分布，会让主键索引写入更分散；单数据库自增虽然有序，但中心数据库压力和故障风险高。',
          '更合适的方向是 Snowflake：用高位表示时间戳，中间表示机房和机器，低位表示同一毫秒内的序列号。这样多个实例可以本地生成 ID，不用每次访问数据库；时间在高位保证趋势递增；机器位避免不同实例冲突；序列号解决同一毫秒内多次生成。',
          '如果另一个场景只是给图片上传生成对象名，长度不敏感，也不要求排序，那么 UUID 或随机 token 可能更简单。需求边界一变，最优答案就变。',
          '再比如消息队列的 message id，重点可能是去重和追踪，而不是数据库主键局部性；短链接 code 的重点是短、不可轻易枚举，而不一定要按时间排序。把这些场景拆开，才能避免一个 ID 方案到处套用。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '常见误区是只回答“用 Snowflake”，却不问 ID 是否需要隐藏业务信息、是否能接受时钟回拨、是否需要跨语言安全表示。JavaScript 的 number 不能精确表示所有 64-bit 整数，前端传输可能要用字符串。',
          '另一个坑是把唯一 ID 和安全 token 混为一谈。Snowflake ID 可预测，不适合作为密码重置链接或公开访问凭证；安全 token 需要足够随机和不可枚举。订单 ID 如果暴露给用户，也可能需要额外生成展示号，避免被推测业务量。',
          '还有一个坑是没有定义失败行为。ID 服务不可用时，是阻塞创建、使用本地缓存号段，还是降级成临时 ID 后异步修正？不同选择会影响数据模型。主键一旦写入数据库通常很难更换，所以不要设计之后再补正式 ID 的流程，除非业务明确支持临时记录。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：唯一 ID 设计要先定需求，唯一性只是底线，还要看是否趋势递增、是否 64-bit、峰值吞吐、可用性和是否可被外部枚举；不同约束会导向数据库自增、UUID、号段或 Snowflake。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          'ID 生成器是典型的“需求决定架构”问题。先问清 ID 的使用位置和失败代价，再选方案，才能避免用过重或过弱的设计解决错误的问题。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么严格全局递增比趋势递增难很多？\n2. 公开 URL 中的 ID 为什么不一定适合用可预测的自增数？\n3. 64-bit ID 传到 JavaScript 前端时要注意什么？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会对比数据库自增、UUID、号段和 Snowflake 四种方案，分析它们分别适合什么边界。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '01_scope_and_single_server',
    categoryId: 'system-design',
    chapterId: 'part06_key_value_store',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能说清楚 Key-Value Store 的基本接口、单机实现能解决什么问题、为什么容量和可用性会逼着系统走向分布式。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          'KV Store 的核心是按 key 读写 value：`put(key, value)`、`get(key)`、`delete(key)`。单机 KV 可以做到简单、低延迟、强一致，但它受限于单机磁盘、内存、网络和故障域。分布式 KV 不是为了显得复杂，而是为了突破容量上限、吞吐上限和单点故障。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '很多系统最初都可以用单机 KV。用户配置、会话状态、商品库存快照、特征数据，都可以用 key 找 value。只要数据量不大、请求不高、故障可接受，单机方案非常高效。',
          '问题从三个方向出现。第一是容量：单机磁盘和内存有限，value 可能不断增长，索引也要占空间。第二是吞吐：读写请求都打到一台机器，CPU、网卡、磁盘 IOPS 会成为瓶颈。第三是可用性：机器宕机、磁盘损坏、进程崩溃都会让服务不可用。即使有备份，恢复时间也可能超过业务能接受的范围。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '单机 KV 通常包含几个部分。内存里有索引，把 key 映射到 value 的位置；写入先进入日志或 WAL，保证崩溃后可恢复；后台把数据整理成更适合读取或压缩的格式。基于 LSM-tree 的系统会先写内存表和日志，内存表满了刷成磁盘文件，再通过 compaction 合并。',
          '读请求先查内存结构，再查磁盘文件；写请求追加日志并更新内存结构。这个设计很快，因为顺序写比随机写便宜。删除通常不是立即物理删除，而是写一个 tombstone，等后台合并时清理。',
          '单机里还可以很清楚地定义一致性：写入返回成功后，后续读取应该看到这次写入；如果进程崩溃，WAL 重放后也应恢复到某个明确状态。这种语义简单，是单机方案最大的优点之一。分布式化以后，同一个 key 可能存在多个副本，读请求可能打到不同节点，才会出现读到旧值或两个写入谁覆盖谁的问题。',
          '分布式化会在这个基础上增加两件事：分片和复制。分片解决容量与吞吐，把不同 key 放到不同节点；复制解决可用性和读扩展，把同一份数据放到多个节点。后续章节讨论的 CAP、Quorum、故障检测，本质上都是围绕这两件事展开。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '假设你要存用户偏好，key 是 `user:123:pref`，value 是一段 JSON。单机时，请求到达 KV 进程，服务把 key 写入 WAL，更新内存表，然后返回成功。之后读取同一个 key，先在内存表找到最新值，直接返回。如果服务崩溃，重启时重放 WAL，恢复未刷盘的数据。',
          '当用户数从 100 万涨到 5 亿，单机开始撑不住。你可以把 key 按哈希分成 128 个逻辑分片，再把这些分片分布到多台机器。`user:123:pref` 经过路由落到 shard-7，shard-7 当前主副本在 node-a，备副本在 node-b 和 node-c。写入时不再只是写本机，还要考虑副本确认策略；读取时也要决定读主还是读任意副本。',
          '这一步会把原本隐藏在单机里的很多假设暴露出来：元数据服务要告诉客户端 shard-7 在哪里；node-a 故障时要选新主；node-b 落后时要补数据；扩容时要把一部分 shard 迁到新机器。分布式 KV 的复杂度不是来自接口变复杂，而是来自这些原本由单机边界自动保证的事情，需要系统显式保证。',
          '这个例子说明，分布式 KV 不是换了接口，而是在相同 `get/put` 语义下，把定位、复制、故障和一致性都显式化。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '单机 KV 的优势是简单和一致性强：一个进程看到的写入顺序就是系统顺序。分布式 KV 的优势是容量、吞吐和可用性，但代价是路由、复制延迟、冲突、修复和运维复杂度。',
          '常见坑是上来就堆组件，却没说清需求边界。面试时要先明确 value 大小、读写比例、是否需要范围查询、是否允许最终一致、故障时优先可用还是强一致。另一个坑是把 KV 当成关系数据库替代品。KV 擅长按 key 访问，不擅长复杂查询、跨 key 事务和随意二级索引。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：单机 KV 用日志、内存索引和磁盘文件提供快速 get/put；当容量、吞吐或可用性超过单机边界时，引入分片和复制，后续复杂度主要来自路由、一致性和故障恢复。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          'KV Store 的接口很简单，但系统复杂度来自规模。单机解决局部读写效率，分布式解决整体容量与可靠性。设计前先划清需求边界，比直接背 Dynamo、Cassandra 组件名更重要。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么写 WAL 后再更新内存结构可以提高崩溃恢复能力？\n2. KV Store 为什么不适合随意做跨 key 查询？\n3. 分片和复制分别解决了什么不同问题？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会讨论 CAP：当网络分区发生时，KV Store 为什么必须在一致性和可用性之间做取舍。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '01_single_server_request_flow',
    categoryId: 'system-design',
    chapterId: 'part01_scale_from_zero',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能把一个最小网站的请求路径从浏览器讲到数据库，再从数据库讲回响应；能说明单机架构为什么适合起步，也能指出它最早会被哪些压力打穿。系统设计不是从负载均衡器开始的，而是从一次请求到底经过了什么开始的。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '单机系统不是低级方案，而是最小可工作的系统边界：浏览器通过 DNS 找到服务器，发送 HTTP 请求，Web 服务执行业务逻辑，读写本机或同机数据库，然后返回结果。它的优点是简单、便宜、定位问题快；缺点是所有计算、存储、网络和故障风险都集中在一台机器上。后续扩展的每一步，本质上都是把某一种压力从这台机器上拆出去。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '如果一开始就讨论分布式组件，读者很容易只记住名词，却不知道组件为什么出现。真实系统最先面对的是很朴素的问题：请求多了 CPU 忙不过来，数据库查询变慢，磁盘空间不够，发布一个 bug 会让全站不可用，机器宕机后用户连首页都打不开。单机架构把这些压力放在同一个地方，所以它既方便观察，也方便暴露瓶颈。',
          '压力来源可以分成几类：流量压力让连接数和请求处理线程耗尽；状态压力让数据库、文件和会话越来越重；延迟压力来自慢查询、磁盘 IO、外部接口等待；容量压力来自用户、帖子、图片、日志持续增长；可用性压力来自单点故障。理解这些压力，后面才知道该拆 Web 层、数据库、缓存还是静态资源。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '一次请求通常这样流动：用户在浏览器输入域名，浏览器先查 DNS，把域名解析成 IP；浏览器和服务器建立 TCP 或 TLS 连接；HTTP 请求带着路径、方法、Header、Cookie 等信息进入 Web Server；Web Server 把请求交给业务代码；业务代码校验参数、读取会话、访问数据库或文件；数据库返回结果；业务代码组装 HTML 或 JSON；Web Server 把响应发回浏览器。',
          '这里有几个边界要分清。DNS 只解决“去哪里”；HTTP 解决“怎么表达请求和响应”；Web Server 解决“如何接住连接并路由”；业务代码解决“产品规则是什么”；数据库解决“状态如何持久化”。单机系统把这些边界放在一台机器上，不代表它们是同一件事。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '假设做一个待办事项网站。用户访问 `/tasks`，浏览器先解析 `todo.example.com`，连到服务器。服务器上的 Nginx 接住请求，把它转给应用进程。应用检查 Cookie，确认用户是 `u123`，然后执行查询：从 `tasks` 表读取这个用户未完成的任务。数据库返回 20 条记录，应用把它们转成 JSON，浏览器渲染列表。',
          '当用户量从 10 人变成 10 万人，路径没有变，但每一步的压力都变了。DNS 解析可能被缓存，不是主要瓶颈；应用进程要处理更多连接；数据库要承受更多查询；磁盘要保存更多任务和日志。如果首页慢，不能只说“加服务器”，要先看是 CPU 忙、数据库慢、网络满、还是某个外部依赖拖住了请求。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '单机的最大价值是降低复杂度：没有跨服务网络调用，没有分布式一致性，没有多副本同步。它适合早期验证产品和学习请求路径。代价是扩展弹性差，故障影响面大，资源之间互相抢占。应用进程占满 CPU，数据库也会受影响；数据库写日志打满磁盘，Web 服务也可能无法写临时文件。',
          '常见坑是把“单机”理解成“不专业”，一上来就堆缓存、队列、网关和微服务。面试里这样反而显得没有判断力。更好的表达是：先给出最小系统，再说明它在什么指标下会失效，并让后续设计围绕失效点展开。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：“我会先从单机请求路径开始建模：DNS 到 Web Server，到业务代码，再到数据库。这样能明确系统的最小闭环；当流量、状态、容量或可用性压力超过单机上限时，再按瓶颈逐步拆分。”'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '单机系统帮助我们看清一次请求的完整链路，也暴露了系统设计最重要的压力来源。它不是终点，而是所有扩展动作的参照物。只有知道一台机器为什么撑不住，才知道下一步该加什么、拆什么、监控什么。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 如果用户反馈“网站慢”，你会沿请求路径检查哪些环节？\n2. 为什么同机部署应用和数据库会让问题定位简单，但扩展困难？\n3. 单机系统宕机时，哪些用户操作会立刻失败？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会把数据库从 Web 服务中拆出来，讨论为什么数据层独立后，系统才开始具备更清晰的扩展空间。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '01_units_and_latency_basics',
    categoryId: 'system-design',
    chapterId: 'part02_estimation',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '本节要帮你建立系统设计估算的底层直觉：数据单位怎么换算，延迟数量级如何比较，哪些操作通常很快，哪些操作天然很慢。你要能用这些直觉判断一个方案是否大致合理，而不是等到最后才发现数字站不住。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '估算不是精确算账，而是用数量级排除不可能方案。KB、MB、GB、TB 帮你估数据规模；微秒、毫秒、秒帮你估请求延迟；内存、SSD、网络、跨地域调用之间差几个数量级。系统设计里很多选择，本质上都是在“多占一点空间”和“少等一点时间”之间交换。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '如果没有单位直觉，面试回答容易漂浮。你可能说“把所有数据放内存”，却没有算 10 亿条记录需要多少内存；也可能说“每个请求查数据库三次没问题”，却没意识到 P95 延迟会被慢查询和网络放大。工程系统不是只要逻辑正确就够，还要在容量、延迟和成本上成立。',
          '单位问题常见在三个地方。第一，存储估算低估元数据、索引、副本和增长。第二，延迟估算忽略网络往返、队列等待和下游调用。第三，吞吐估算只看平均值，不看峰值和尾延迟。建立直觉可以让你及时追问：数据多大、请求多快、峰值多高、能不能缓存。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '数据单位可以粗略按 1000 或 1024 换算：1 KB 约一千字节，1 MB 约一百万字节，1 GB 约十亿字节，1 TB 约一万亿字节。估算时不必纠结二进制差异，关键是数量级。比如一条消息 1 KB，10 亿条就是约 1 TB；再考虑索引、副本和压缩，实际可能是几 TB。',
          '延迟直觉要分层。CPU 访问内存通常远快于磁盘；同机内存访问比跨网络调用快很多；同城机房网络比跨洲网络快；用户请求的总延迟是多个环节叠加，还会被最慢环节和排队放大。系统设计中，缓存、批处理、异步队列和 CDN 都是在改变这些延迟路径。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '假设设计一个短消息系统，每天新增 1 亿条消息，每条正文平均 500 字节，发送者、接收者、时间戳、状态等元数据再加 200 字节，粗略每条 700 字节。单日原始数据约 70 GB。一年约 25 TB。若保留 3 副本，存储就到 75 TB；再加索引和日志，可能接近 100 TB。',
          '延迟上，用户发送消息希望 100 毫秒内返回。如果发送链路同步做写数据库、推送通知、写搜索索引、写分析日志，任何一步慢都会拖住用户。更合理的路径是同步保存消息和必要元数据，返回成功；推送、索引、分析放入队列异步做。这个判断不是背答案，而是由延迟预算推出来的。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '估算的价值是快速发现主要矛盾，但它也会简化现实。平均消息大小不代表所有消息，热门用户不代表平均用户，跨地域网络和故障重试也会改变数字。做估算时要说清假设，并给出安全系数。',
          '常见坑是算到小数点后两位，反而忽略副本、索引、峰值和增长。另一个坑是只算存储不算带宽：图片、视频、Feed 这类系统，网络出口成本可能比数据库更关键。面试里，数量级正确通常比精确值更重要。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：“我会先用数量级估算数据大小、QPS、带宽和延迟预算。这里不追求精确到个位数，而是确认方案在容量和响应时间上没有明显不可能，并明确副本、索引和峰值的放大系数。”'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '单位直觉让架构讨论落地。数据大小决定存储和分片压力，延迟数量级决定同步还是异步，带宽决定 CDN 和压缩是否必要。先有粗算，后面的组件选择才有依据。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 一条 2 KB 的动态记录，每天新增 5000 万条，一年原始存储大约是多少？\n2. 为什么跨地域调用不适合放在用户请求的强同步路径里？\n3. 估算时为什么要给副本、索引和峰值留安全系数？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会讨论可用性和 SLA：几个 9 不是口号，而是可以换算成全年可宕机时间的约束。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '01_youtube_scope_cost',
    categoryId: 'system-design',
    chapterId: 'part14_youtube',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你应该能把视频平台的范围限定在上传、处理、存储和播放四条主线上，能粗略估算视频带来的存储、带宽和转码成本，并能解释为什么视频系统设计必须先谈成本和流量形态，而不是先画应用服务器。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '视频平台不是“把文件传上去再让别人下载”。它同时面对大文件上传、长时间异步处理、多版本存储、全球播放、CDN 带宽、版权审核和访问控制。系统设计时要先缩小范围：本轮通常聚焦上传、转码、存储和播放，搜索、推荐、评论、订阅、直播可以作为扩展。',
          '成本估算是视频系统的入口。一个原始视频经过多清晰度、多码率、切片和封面处理后，存储可能放大数倍；一个热门视频的播放流量会直接转化成 CDN 成本。架构选择本质上是在存储成本、带宽成本、转码成本和播放体验之间找平衡。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '文本和图片系统的单次对象通常较小，应用服务器还可能短暂参与数据传输；视频不同，单个文件动辄几百 MB 到数 GB，播放又是持续流量。如果所有上传和播放都经过应用服务器，磁盘、网卡和连接数都会很快成为瓶颈，应用层还会被大流量字节传输挤占，无法稳定处理元数据和权限。',
          '视频还有版本放大问题。为了适配手机、电视、弱网和不同浏览器，平台不能只保存上传原件，而要生成 360p、720p、1080p 等多个版本，并按几秒一段切片。用户看到的是一个播放按钮，背后却是存储、转码、CDN、清单文件和播放器策略共同工作。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '需求边界可以按数据生命周期拆。上传阶段要可靠接收大文件，支持断点续传和校验；处理阶段要异步转码、截图、切片、审核；存储阶段要保存原始文件、转码结果、封面、字幕和元数据；播放阶段要让播放器拿到清单，并从 CDN 就近拉取切片。',
          '容量估算先看新增存储。假设每天上传 100 万个视频，平均原始大小 500MB，每天原始数据约 500TB。若转码后生成多个版本，连同切片和封面，新增量可能接近 1PB/天。再看播放带宽：每天 1 亿次播放，平均观看 5 分钟，平均码率 2Mbps，每次约 75MB，总量约 7.5PB/天。这个量级决定了视频字节必须走对象存储和 CDN。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '用户上传一个 800MB 的 1080p 视频。平台先保存原始文件，随后生成 360p、720p、1080p 三个播放版本，每个版本再切成 4 秒片段，并生成播放清单和封面。如果转码结果总大小约为原视频的 1.5 到 3 倍，这一个上传就可能带来 1.2GB 到 2.4GB 的长期存储。',
          '播放时，观众不是下载整个视频，而是先拿到清单文件，再按当前网络下载连续切片。热门视频发布后，前几分钟大量观众请求相同切片，如果 CDN 命中率高，大部分流量在边缘节点消化；如果没有 CDN 或预热不足，源站会被回源流量打满，首帧时间和卡顿率都会变差。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '保留原始视频便于未来重新转码、提升质量或满足创作者下载，但成本很高；删除原始视频能省钱，却限制后续处理能力。生成更多清晰度能改善弱网和大屏体验，但增加转码和存储。CDN 覆盖更广能降低延迟，但缓存和回源费用更高。',
          '常见坑是把视频平台画成“客户端 -> 应用服务器 -> 数据库 -> 文件系统”。这忽略了视频字节路径和元数据路径的区别。应用服务器适合处理权限、状态、任务调度和清单下发，不适合长期搬运视频内容。另一个坑是不估算带宽，只谈存储；事实上播放带宽常常比存储更快成为成本大头。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：视频平台要先限定上传、转码、存储和播放范围，并估算存储放大和播放带宽；我的设计会让应用服务控制元数据和权限，让对象存储、转码集群和 CDN 承担大文件与大流量路径。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '视频系统的架构由成本和流量形态驱动。上传是大文件可靠写入，处理是资源密集型异步任务，存储是长期容量问题，播放是全球带宽问题。只有先把这些压力拆开，后续的上传流、播放流和转码 DAG 才有依据。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么视频播放不应该让所有切片都经过应用服务器？\n2. 原始视频永久保存和删除分别有什么代价？\n3. 一个视频突然爆火时，最先承受压力的组件有哪些？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节把视频平台拆成上传流和播放流，说明元数据服务、对象存储、队列、转码服务和 CDN 如何协作。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '02_architecture_storage_model',
    categoryId: 'system-design',
    chapterId: 'part12_chat_system',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能画出 chat gateway、消息服务、消息存储、队列和推送服务的关系，并能设计会话、成员、消息三类核心数据。重点是分清连接状态和消息状态：前者临时、易变，后者必须可靠持久化。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '聊天系统通常有两条路径。实时路径由 chat gateway 维护 WebSocket 连接，负责收包、推包和心跳；持久化路径由消息服务校验权限、写入消息、生成序号，并把投递任务交给队列。gateway 可以横向扩展但有连接状态；消息服务尽量无状态；消息存储保存会话历史和同步依据。先入库再投递，是避免丢消息的基本原则。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '如果消息只存在 gateway 内存里，gateway 崩溃或客户端断线就会丢。若每次发送都同步等待所有接收方设备确认，延迟会被最慢设备拖住。聊天系统必须同时满足低延迟和可靠恢复，因此要把“在线连接在哪里”和“消息是否存在”分成两种状态。连接映射可以过期，消息记录不能随连接消失。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '基础模型通常包括 Conversation、ConversationMember 和 Message。Conversation 记录会话 id、类型、创建时间和扩展属性；ConversationMember 记录成员、角色、加入时间、离开时间、最后已读 sequence；Message 记录 message_id、conversation_id、sender_id、内容、创建时间、会话内 sequence、client_msg_id 和状态。',
          'sequence 用于会话内排序和增量同步。client_msg_id 用于客户端重试幂等：弱网下客户端可能重复发送同一条本地消息，服务端通过 sender_id、conversation_id、client_msg_id 判断是否已经处理。消息写入成功后，投递事件进入队列，在线设备实时收到，离线设备以后按 sequence 补拉。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          'A 在会话 C 中发送“你好”。客户端生成 client_msg_id `m-123` 并发送。消息服务检查 A 是 C 的成员，查询 `m-123` 未处理，于是给 C 分配 sequence 101，写入 Message 表。写入成功后返回 ack：message_id 为 `srv-789`，sequence 为 101。随后投递 worker 查询 B 的在线连接，若 B 在线就推送；若 B 离线则只更新未读状态。',
          'A 的手机因为超时又发送一次 `m-123`。服务端命中幂等记录，返回同一个 message_id，而不是再创建 sequence 102。这就是 client_msg_id 的价值。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '会话内递增 sequence 让分页和补拉简单，但需要为单个会话处理并发写入顺序；全局有序 id 易追踪，却不能直接表示每个会话的连续消息位置。关系库存储易用，超大规模时可能按 conversation_id 分片或使用宽列存储。存原始富文本、媒体引用和审计字段会增加复杂度，但有利于后续搜索、审核和回放。',
          '常见坑是把 message_id 当作所有排序依据，忽略不同会话并发写入时全局 id 不一定适合会话展示。另一个坑是为每个群成员复制完整消息内容，导致大群写放大严重。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：我会用 gateway 处理长连接，用无状态消息服务做权限校验和持久化，用会话内 sequence 支持排序与补拉，用 client_msg_id 处理客户端重试幂等。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '聊天架构的骨架是连接、消息和投递三者分离。连接状态帮助实时推送，消息存储保证可靠恢复，队列让投递异步化。数据模型清楚后，多设备和群聊才能自然扩展。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么不能只把在线消息放在 gateway 内存里？\n2. client_msg_id 和服务端 message_id 各自解决什么问题？\n3. 超大群为什么不适合为每个成员复制完整消息内容？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节看服务发现和一对一消息流，重点是系统如何找到接收方当前连接在哪台机器上。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '02_availability_and_sla',
    categoryId: 'system-design',
    chapterId: 'part02_estimation',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '本节要让你理解可用性、SLA 和错误预算之间的关系。你要能把 99%、99.9%、99.99% 换算成大致停机时间，并说明为什么可用性目标越高，架构、流程和成本都会明显上升。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '可用性表示系统在约定时间内能正确服务请求的比例。99.9% 看起来只差 0.9%，但它意味着一年最多约 8.76 小时不可用；99.99% 则约 52.6 分钟。每多一个 9，都要求更少单点、更快恢复、更严格发布和更完善监控。SLA 不是宣传数字，而是会反过来约束设计的工程承诺。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '很多系统设计答案会随口说“高可用”，但高到什么程度、允许失败多久、哪些接口必须可用，并不清楚。对博客评论和在线支付来说，同样 5 分钟故障的影响完全不同。没有可用性目标，就无法判断是否需要多副本、跨区域灾备、自动故障切换或灰度发布。',
          '可用性压力来自故障不可避免。机器会坏，网络会抖，数据库会锁住，缓存会满，发布会引入 bug，下游服务会超时。系统设计不是假装这些不会发生，而是限制故障影响面，并缩短发现、隔离和恢复时间。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '可用性通常用可服务时间除以总时间。粗略换算：99% 一年约允许 3.65 天不可用；99.9% 约 8.76 小时；99.99% 约 52.6 分钟；99.999% 约 5.26 分钟。数字越高，人工登录修机器就越不够，必须依靠自动检测、自动切换和预案演练。',
          'SLA 是对外承诺，SLO 是内部目标，SLI 是衡量指标。比如“支付创建接口 99.95% 请求在 300 毫秒内成功返回”可以是 SLO；成功率和延迟就是 SLI。错误预算则是允许失败的空间。如果预算快用完，团队应该减少高风险发布，把精力放在稳定性上。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '一个 API 平台承诺月度 99.9% 可用。一个月按 30 天算，总时间 43200 分钟，0.1% 不可用就是 43.2 分钟。如果一次数据库故障恢复花 30 分钟，一次错误发布回滚花 20 分钟，这个月就已经超预算。',
          '为了满足目标，系统可能需要多台 API 服务器、负载均衡健康检查、数据库主从和备份、发布灰度、错误率告警。若目标提高到 99.99%，月度不可用只有约 4.3 分钟，很多手工流程都不够快：必须自动摘除坏实例，数据库切换要演练，告警要在用户大量投诉前触发。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '高可用的成本不仅是多买机器，还包括架构复杂度、测试、值班、演练和数据一致性。跨区域多活可以提升区域容灾，但会引入数据冲突和网络延迟。自动故障切换可以缩短恢复时间，但误切换也可能扩大事故。',
          '常见坑是只算服务器 uptime，不算业务成功率。机器活着但数据库超时、接口大量 500、支付结果丢失，对用户来说都是不可用。另一个坑是所有功能使用同一个可用性目标。实际设计应区分核心路径和非核心路径，支付、登录、读取首页的要求可能不同。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：“我会先明确核心接口的 SLO，例如成功率和 P95 延迟，再把几个 9 换算成允许故障时间。目标越高，就越需要自动化故障检测、冗余、灰度发布和恢复演练，而不是只说多部署几台机器。”'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '可用性把“稳定”变成可度量约束。几个 9 代表允许失败的时间窗口，也代表设计和运维成本。好的系统设计会按业务重要性分层承诺，而不是对所有功能盲目追求最高可用。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 99.9% 月度可用性大约允许多少分钟不可用？\n2. 为什么接口返回大量超时也应该算作不可用？\n3. 哪些功能可以降级，哪些功能必须优先保证可用？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会用一个社交产品例子，把用户数、QPS、存储和带宽估算串起来。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '02_cap_and_tradeoffs',
    categoryId: 'system-design',
    chapterId: 'part06_key_value_store',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能用网络分区场景解释 CAP，而不是只背 C、A、P 三个字母；也要能说明 KV Store 为什么常在强一致和高可用之间按业务选择。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          'CAP 讨论的是分布式系统遇到网络分区时的选择。分区不可避免时，系统要么拒绝部分请求来保证一致性，要么继续服务但允许不同副本短暂不一致。KV Store 的设计不能同时在分区下保证所有客户端都可用、所有读都看到最新写、还容忍网络断开。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '复制让数据有多个副本，提高了可用性，但也制造了同步问题。正常情况下，主副本写入后同步到从副本，读任意副本都可能很快。但网络不是永远可靠：机房之间可能断连，机架交换机可能故障，某些节点可能只能和一部分节点通信。',
          '这时如果客户端在分区两侧都继续写同一个 key，就可能产生两个“最新值”。例如用户购物车在 A 分区加了商品，在 B 分区删除了商品，两边都认为自己成功。等网络恢复，系统必须决定哪个值保留，或者把冲突暴露给业务合并。',
          '网络分区不一定是两半完全断开，也可能是单向丢包、跨机房延迟突然升高、某些节点能连上协调者但连不上副本。对客户端来说，这些现象经常只表现为超时。系统必须在超时时决定：继续等以确认一致性，还是先返回成功以保证可用性。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '一致性 C 指所有客户端看到的数据像来自同一份最新副本。可用性 A 指每个非故障节点收到请求都能给出响应。分区容忍 P 指网络分区发生时系统仍能运行，而不是假设网络永远可靠。',
          '在真实分布式系统里，P 不是可选项，因为网络分区总会发生。选择发生在 C 和 A 之间。偏 CP 的系统在无法确认多数副本时拒绝写入或读取，牺牲可用性保证不会读到分裂状态。偏 AP 的系统在分区时继续接受请求，保证服务可用，之后通过版本、冲突解决或最后写入覆盖来收敛。',
          'KV Store 可以按 key 或按操作选择不同策略。用户账户余额可能需要 CP，宁可失败也不能双花；用户在线状态、推荐特征、点赞计数可能偏 AP，短暂不一致比不可用更可接受。',
          '延迟也是取舍的一部分。跨地域强一致通常要等待远端确认，用户写入延迟会变高；本地先写再异步复制延迟低，但远端读可能暂时看不到最新值。CAP 在工程里往往会落到这些具体问题：是否等待多数副本、是否允许本地读、分区时是否拒绝少数派写入。',
          '还要注意，系统可以在不同操作上选择不同级别。例如同一个用户资料服务，修改密码可能要求多数派确认，更新头像缓存可以异步复制；读取安全配置可能走强一致读，读取展示昵称可以走本地副本。这样做比给整个系统贴一个 CP 或 AP 标签更贴近真实工程。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '假设一个 key 有 3 个副本，分布在 N1、N2、N3。客户端向 N1 写 `profile=Alice-v2`，正常策略要求至少 2 个副本确认才成功。现在 N1 和 N2 在一个分区，N3 在另一个分区。',
          '偏 CP 的做法是多数派继续服务。N1、N2 能形成多数，写入可以成功；N3 单独一边无法确认多数，对写请求返回失败或不可用。这样网络恢复后，不会出现 N3 独自接受了另一个值并与多数派冲突。',
          '偏 AP 的做法是两边都可以接受写入。N3 也可能写入 `profile=Alice-v3`。网络恢复后，系统发现同一个 key 有两个版本，需要通过时间戳、向量时钟或业务合并处理。用户体验更连续，但一致性成本被推迟到了修复阶段。',
          '如果这个 key 是用户昵称，最后写入胜出可能可以接受；如果是账户余额，两个分区分别扣款就会造成严重错误。CAP 的回答一定要落到业务语义，否则只是背概念。面试中主动说出哪些数据偏 CP、哪些数据偏 AP，会比笼统说系统选择 CP 或 AP 更有说服力。',
          '读请求也有类似选择。分区时，少数派副本可以继续返回自己本地的旧值，这提高可用性但可能误导用户；也可以拒绝读取，要求客户端去多数派或稍后重试。很多系统会把这种策略做成可配置项：强一致读走多数派，普通读允许读本地副本，用调用方的业务语义决定成本。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          'CP 的代价是分区或副本不足时请求失败，用户可能看到错误或超时；AP 的代价是读到旧值、冲突合并和业务语义复杂。选择没有绝对好坏，要看错误的成本。银行转账错误的成本高于短暂看不到最新头像，策略自然不同。',
          'CAP 还会和用户体验结合。偏 CP 的系统不一定直接抛出难懂错误，可以展示“系统繁忙，请稍后重试”；偏 AP 的系统也不一定完全放任冲突，可以在后台合并后给用户提示。架构取舍最终要落到产品能接受的行为，而不是只落在论文术语上。',
          '常见坑是把 CAP 理解成“只能三选二”，然后在没有分区的正常情况下也套用。更准确的说法是：当分区发生时，必须在一致性和可用性之间取舍。另一个坑是说系统是“最终一致”却不解释如何收敛。最终一致不是魔法，需要版本、反熵、读修复、冲突解决这些机制支撑。',
          '还要避免把可用性理解成永远不报错。CAP 里的可用性强调非故障节点收到请求要给响应，但响应是否符合最新一致视图是另一件事。很多系统会返回明确失败、降级结果或旧值，这些都是工程上的可用性策略，需要说清楚语义。',
          '面试里最好不要停在“选择 CP，因为数据重要”这种层级。更好的表达是：分区时少数派拒绝写入，读请求如果不能达到多数派就失败；这样牺牲部分可用性，换来不会产生两个都被确认的最新值。把行为说出来，取舍才可信。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：网络分区不可避免，所以 CAP 的实际选择是分区时保 C 还是保 A；KV Store 对关键数据可以偏 CP，对可合并或可容忍旧值的数据可以偏 AP，但必须说明冲突如何检测和修复。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          'CAP 不是抽象口号，而是副本在网络断开时的行为选择。分布式 KV 的很多设计，如 Quorum、版本号、读修复，都是为了在业务可接受的范围内平衡一致性、可用性和延迟。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么 P 在跨机器系统中通常不能被放弃？\n2. 购物车和账户余额对 CAP 的取舍可能有什么不同？\n3. “最终一致”如果没有修复机制，会变成什么问题？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会讨论数据如何分片与复制：key 先落到哪个分片，再写到哪些副本。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '02_compare_id_generation_options',
    categoryId: 'system-design',
    chapterId: 'part07_unique_id',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能比较数据库自增、UUID、号段模式和 Snowflake 的机制、优缺点与适用场景，而不是只记一个推荐答案。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '数据库自增最简单但中心化；UUID 去中心化且冲突概率极低，但长且无序；号段模式减少中心调用，但需要处理号段浪费和服务重启；Snowflake 本地生成、64-bit、趋势递增，但依赖机器位分配和时钟稳定。没有万能方案，只有匹配需求的方案。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          'ID 生成看似小功能，实际处在写入链路入口。它一旦慢，创建订单、发消息、写评论都会慢；它一旦不可用，整个业务可能无法产生新数据；它一旦冲突，数据库唯一约束会报错，甚至造成数据串写。',
          '不同方案把压力放在不同位置：有的依赖数据库，有的依赖随机数质量，有的依赖中心号段服务，有的依赖系统时钟和机器编号。比较方案时要看失败模式，而不仅看正常路径。',
          '还要看 ID 被谁消费。数据库主键关心索引写入形态，分库分表关心路由字段，审计日志关心可追踪性，对外链接关心不可猜测。一个方案在某个维度优秀，可能在另一个维度很差。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '数据库自增由单个数据库序列保证唯一和递增。应用插入记录时拿到自增主键，简单可靠，适合单库或低规模系统。问题是写入集中在数据库，跨库分表后全局唯一和顺序会变难。',
          'UUID 通常是 128-bit，应用本地生成，不需要协调。随机 UUID 冲突概率极低，适合对象名、请求追踪 ID、离线合并。但它较长，作为数据库聚簇主键会导致随机插入，影响索引局部性。某些时间有序 UUID 变体可以改善排序，但仍要注意长度。',
          '号段模式是应用从中心服务一次申请一段 ID，例如 `[100000, 101000)`，本地递增发放。这样中心服务压力从每个 ID 一次调用降为每个号段一次调用。缺点是实例崩溃会浪费未用号段，号段服务不可用时只能靠本地剩余库存撑一段时间。',
          'Snowflake 把 ID 拆成时间戳、机器 ID、序列号。每台机器独立生成，时间高位保证趋势递增，机器位保证跨机器唯一，序列号保证同一毫秒内不冲突。它适合高吞吐、需要 64-bit 整数和大致有序的业务。',
          '还有一些混合方案。例如数据库自增可以按业务线分段，奇偶号分给不同机房；UUID 可以使用时间有序变体改善索引；Snowflake 可以把机器位拆成机房位和节点位。面试里不需要把所有变体背完，但要能说明这些变体都在调节同几个维度：中心化程度、顺序性、长度和可预测性。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '一个内部后台系统每秒只有几十次写入，单库部署，用数据库自增最省心。订单系统每秒数万写入，分库分表，希望主键趋势递增，用 Snowflake 更合适。图片存储服务只需要对象名不重复，不按 ID 排序，UUID 或随机字符串更简单。',
          '再看号段模式。ID 服务维护一张表：业务名、当前最大值、步长。订单服务实例启动后申请 10000 个 ID，拿到 `[500000,510000)`，之后本地递增。中心服务短暂不可用时，实例仍能发放剩余 ID。如果实例只用了 2000 个就崩溃，剩下 8000 个被浪费，但不会造成重复。',
          '这些例子说明，对比方案不能只问“会不会重复”，还要问“失败时会怎样、数据库写入形态怎样、是否可接受空洞”。',
          '如果业务要求 ID 连续无空洞，比如某些财务票据编号，那普通号段和 Snowflake 都不合适，因为故障、回滚和重试都可能产生空洞。这类需求通常要单独设计严格编号服务，并接受更低吞吐和更强审计约束。大多数技术主键不需要连续，只需要唯一。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '数据库自增的坑是扩展性和暴露业务规模；UUID 的坑是索引随机写和长度；号段的坑是号段浪费、中心服务表更新竞争、步长设置；Snowflake 的坑是时钟回拨、机器 ID 冲突和同毫秒序列耗尽。',
          '另一个常见误区是把“有序”说成绝对。号段模式在单实例内递增，但多个实例并发拿不同号段，全局生成时间不一定严格有序。Snowflake 通常趋势递增，但不同机器时钟偏差会造成局部乱序。多数业务需要的是索引友好的大体递增，而不是全局线性序列。',
          '选择方案时可以用一个简单排序：先问是否必须不可预测，是则偏随机 token；再问是否必须短整数和趋势递增，是则偏 Snowflake 或号段；如果规模很小，数据库自增胜在简单。这个判断顺序能帮助你在面试里快速收敛，而不是把四种方案平铺直叙。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：低规模单库用自增最简单；不要求排序且能接受长 ID 用 UUID；想减少中心调用可用号段；高并发、64-bit、趋势递增场景常用 Snowflake，但要处理时钟和机器编号。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '四种方案分别把复杂度放在数据库、随机空间、号段中心服务和本地时钟上。比较它们时，重点看吞吐、顺序性、长度、可用性和故障后的行为。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 号段模式为什么允许 ID 有空洞但不能重复？\n2. UUID 作为数据库主键为什么可能影响写入性能？\n3. Snowflake 的机器 ID 如果配置重复，会发生什么？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会深入 Snowflake 式 64-bit ID，逐位解释时间戳、机器位和序列号如何协同工作。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '02_crawler_pipeline',
    categoryId: 'system-design',
    chapterId: 'part09_web_crawler',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能画出一条 URL 从进入系统到页面入库的完整路径，并解释 URL frontier、downloader、parser、去重器、存储各自解决什么问题。重点不是背组件名，而是说清楚数据如何流动、失败如何回写、为什么每个阶段需要独立扩展。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '成熟爬虫是一条异步流水线：URL frontier 负责候选 URL 和调度节奏，downloader 负责网络请求，parser 负责抽取内容和新链接，去重器负责减少重复抓取和重复入库，存储层保存原始页面、结构化结果和抓取元数据。这样拆分后，下载慢可以扩 downloader，解析慢可以扩 parser，存储慢可以加缓冲和批写；某个页面失败也不会阻塞其他 URL。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '如果用一个循环顺序完成“取 URL、下载、解析、写库、发现新 URL”，吞吐量会被最慢环节锁住。网络请求可能等待数秒，parser 可能被复杂 HTML 消耗 CPU，存储可能在高峰期抖动。更糟的是，任何一步失败都会让整个循环的状态变得混乱：下载超时后 URL 是否重试？解析失败后原始 HTML 是否保留？写库失败后新链接是否已经入队？流水线的目的就是把这些状态边界切清楚。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          'URL 进入系统后先做规范化，例如去掉 fragment、统一协议和 host、排序无意义 query、处理结尾斜杠。规范化后的 URL 经过 URL 去重，合格后写入 frontier。frontier 不只是 FIFO 队列，它保存 URL 的优先级、host、下一次可抓时间、失败次数和状态。',
          'downloader 从 frontier 拉取“当前允许抓”的 URL，设置超时、User-Agent、重定向限制和响应大小限制，产出统一 fetch result。成功结果交给 parser，临时失败回写 frontier 等待重试，永久失败标记终态。parser 从 HTML 中抽取正文、标题、meta、canonical URL 和新链接。新链接回到规范化和去重流程；页面内容进入内容去重和存储。存储通常分两层：对象存储放原始 HTML，数据库或搜索引擎放结构化结果和索引。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '假设 frontier 输出 `https://news.example.com/a?id=123&utm=ad`。规范化模块把 `utm` 去掉，得到稳定 URL。downloader 请求后遇到 301，最终到达 `/articles/123`，它记录原始 URL、最终 URL、状态码、响应头和抓取时间。parser 发现 canonical URL 也是 `/articles/123`，抽取正文，并解析出 40 个新链接。链接中 10 个是外站、5 个是登录页、8 个已经抓过，剩下 17 个进入 frontier。内容 hash 显示这篇文章与昨天抓到的移动版相同，于是结构化结果只更新抓取元数据，不重复创建文章。',
          '这条流说明：URL 去重发生在抓取前，内容去重发生在抓取后；downloader 不理解文章语义，parser 不决定访问节奏；存储不仅保存内容，也保存抓取证据。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '流水线拆得越细，扩展和隔离越好，但队列、状态一致性和监控复杂度会上升。小规模爬虫可以把 parser 和 downloader 放在同一 worker 内，但仍要保持逻辑边界。大规模爬虫则需要独立队列、批量写入、背压和死信处理。',
          '常见坑是把业务解析塞进 downloader，导致网络失败和页面解析混在一起；另一个坑是只监控最终入库量，不监控各阶段队列积压，等发现数据变少时已经不知道卡在下载、解析还是写库。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：我会把爬虫设计成异步 pipeline，让 frontier 控制抓取节奏，downloader 统一处理网络结果，parser 产生结构化数据和新 URL，去重与存储分别保证资源效率和数据质量。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '爬虫流水线的价值在于边界清晰。每个阶段只做自己负责的事，并把结果和失败原因结构化交给下游或调度器。这样系统才能在网页失败、流量波动和规则变化时继续运行。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. URL 去重和内容去重分别解决什么问题？\n2. 如果 parser 明显慢于 downloader，应该如何做背压？\n3. 原始 HTML 在哪些场景下值得保存？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节深入 URL frontier，重点看优先级、礼貌性、重抓周期和失败重试如何共同决定下一批 URL。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '02_database_and_basic_scaling',
    categoryId: 'system-design',
    chapterId: 'part01_scale_from_zero',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '这一节要让你理解为什么数据库通常会从应用服务器中拆出来，拆出来之后解决了什么问题，又带来了哪些新问题。你还要能区分关系型数据库、NoSQL、文件存储和缓存分别适合保存什么数据。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '把数据库独立部署，是系统从单机走向可扩展架构的第一步。它让应用层和数据层可以分别扩容、分别优化、分别备份，也让数据不再跟着某台 Web 机器一起消失。但数据库独立后，请求多了一次网络访问，数据模型、连接池、备份恢复、权限和容量规划都必须认真设计。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '在单机系统里，应用和数据库共享 CPU、内存、磁盘和网络。早期这很方便，但流量上来后会互相干扰：应用进程吃满 CPU，数据库查询变慢；数据库索引或日志写入占满磁盘 IO，应用响应也被拖慢；发布应用时重启机器，数据库也跟着不可用。更危险的是，机器损坏可能同时带走服务和数据。',
          '系统设计里，计算和状态的扩展方式不同。Web 应用通常可以多开几份，因为请求之间相对独立；数据库保存的是权威状态，不能简单复制几份然后各写各的。把数据库拆出来，就是先承认“无状态计算”和“有状态存储”应该用不同方式管理。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '拆分后的请求路径变成：浏览器请求 Web 服务器，Web 服务器执行业务逻辑，通过数据库连接池访问独立数据库，数据库返回查询结果，应用再返回响应。连接池很关键，因为每个请求临时创建数据库连接代价高，连接过多又会压垮数据库。应用通常维护固定数量连接，复用它们执行查询。',
          '选择存储时，要看数据访问模式。关系型数据库适合强结构、事务、复杂查询，比如用户、订单、账单。文档数据库适合结构变化频繁的对象，比如配置、内容草稿。键值存储适合简单快速读取，比如会话、验证码。对象存储适合图片、视频、备份文件。缓存保存的是可再生副本，不是权威数据。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '继续待办事项网站。原来应用和 SQLite 在同一台机器上。用户创建任务时，应用直接写本地文件数据库。现在改成三台 Web 服务器和一台 PostgreSQL：负载均衡把请求分给任意 Web 服务器，Web 服务器通过连接池连接 PostgreSQL，执行 `insert into tasks`。任务数据只在 PostgreSQL 中作为权威版本保存。',
          '这样 Web 层可以横向扩展：请求多了就加应用机器。数据库也可以单独升级磁盘、内存、索引和备份策略。但如果每台 Web 服务器开 100 个连接，三台就是 300 个连接，数据库可能先被连接数拖垮。所以拆分不是简单搬家，还要设计连接池大小、慢查询监控和索引。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '收益是资源隔离、数据安全和扩展边界清晰；成本是网络延迟、连接管理、部署复杂度和数据依赖变强。数据库一旦独立，就成为系统核心依赖，必须考虑备份、恢复演练、权限隔离、迁移脚本和容量报警。',
          '常见坑有两个。第一，把 NoSQL 当成“更快的数据库”，忽略事务、查询能力和一致性差异。第二，把图片、日志、用户头像都塞进关系型数据库，导致备份变大、查询变慢、成本升高。面试中要从访问模式推导存储，而不是先背产品名。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：“我会先把 Web 层和数据库拆开，让无状态计算和有状态数据分离。关系型数据库保存核心一致数据，文件类内容放对象存储，热点读可以再引入缓存，但缓存不替代权威存储。”'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '数据库独立让系统获得第一层清晰边界：应用负责计算，数据库负责状态。它提升了扩展和可靠性，但也要求认真处理连接、索引、备份和存储选择。好的存储设计来自数据访问模式，而不是组件名。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 哪些数据必须放在权威数据库中，哪些可以放缓存？\n2. 数据库连接池过大和过小分别会导致什么问题？\n3. 为什么用户头像通常不直接存进关系型数据库表里？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会讨论当一台 Web 服务器不够时，如何用负载均衡和数据库复制提高系统可用性。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '02_engineering_blogs_learning_loop',
    categoryId: 'system-design',
    chapterId: 'part16_learning_continues',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你应该能建立从选择材料、主动阅读、复述加工、对比案例到沉淀设计卡片的学习闭环。你还应该知道如何把工程博客、论文、事故复盘和开源文档变成面试表达与工程判断，而不是停留在收藏夹里。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '长期学习系统设计，最怕只输入不加工。工程博客读了很多，面试时仍然说不清，通常是因为知识没有经过复述、对比和应用。有效闭环应该是：选择一篇材料，提取问题背景和架构变化，用自己的话复述，和已学案例对比，再压缩成一张设计卡片。',
          '材料不必只追新。经典架构复盘、数据库论文、云厂商最佳实践、事故报告和开源系统设计文档，都值得反复读。关键是每次阅读都带着问题：这篇材料能补上我哪个薄弱点？是缓存一致性、消息队列、存储分层、搜索索引、限流熔断，还是多区域容灾？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '系统设计知识很容易碎片化。今天看一篇缓存文章，明天看一个队列事故，后天看数据库论文，如果没有主题和输出，它们只会变成零散印象。面试或工作中遇到问题时，你很难把它们调出来，因为你没有把案例压缩成可检索、可表达、可比较的结构。',
          '另一个问题是材料质量参差不齐。有些文章只是技术栈展示，没有说明原问题、数据规模和失败经验；有些文章很深，但如果没有带着问题读，会被细节淹没。学习闭环的目的，是让你有选择地输入，并把输入转成自己的判断。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '第一步选材料。优先选有具体问题、约束、数据、方案变化和效果指标的文章。事故复盘尤其有价值，因为它会暴露教程很少讲的边界：配置变更、依赖超时、缓存雪崩、数据修复、监控盲区和组织沟通。每周围绕一个主题读几篇，比随机收藏几十篇更有效。',
          '第二步加工。读完后立刻做四件事：用三句话复述问题、方案和代价；画一个请求流或数据流；写一个失败场景；和一个已学案例对比。第三步沉淀成设计卡片，字段可以包括适用场景、核心机制、数据流、收益、代价、故障处理和一句面试表达。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '假设本周主题是“预计算”。你可以把自动补全的 Top K、新闻 Feed 的 fanout、视频转码清单和报表系统的物化视图放在一起比较。它们共同点是把昂贵计算从在线请求移到后台，收益是低延迟，代价是数据延迟、存储放大和发布回滚问题。',
          '整理成卡片时，不要写成“预计算很重要”。可以写：适用在读多写少、允许短暂旧数据、在线延迟敏感的场景；机制是后台按版本生成结果，在线只读快照；风险是构建失败、热点变化和旧数据展示；故障处理是保留上一版、灰度发布、监控点击率或命中率。以后遇到自动补全、排行榜、Feed 或报表题，这张卡都能复用。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '学习闭环需要时间，不能追求每天读很多。慢一点读、写出自己的复述，通常比快速刷十篇更有效。过度整理也有问题，如果卡片太长，它会变成另一篇文章，反而难以调用。好的卡片应该短到能复习，具体到能回答问题。',
          '常见坑是只记录结论，不记录适用条件。比如“用缓存提升性能”如果没有读写比例、过期策略、回源保护和一致性要求，就不能指导设计。另一个坑是只读成功案例，不读事故复盘；事故能训练你关注失败路径，而失败路径恰恰是面试和工程中最能体现成熟度的地方。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：我会把工程博客加工成设计卡片，记录它解决的压力、核心数据流、收益、代价和失败处理；面试时不是背文章，而是根据题目的约束调用相似模式，并主动说明适用条件和风险。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '长期学习靠闭环，而不是收藏。选有约束的材料，读出问题和机制，画出数据流，写出失败场景，再沉淀成短卡片。持续这样做，系统设计知识会从零散名词变成可比较、可迁移、可表达的判断库。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 你最薄弱的系统设计主题是什么？可以用哪些材料补它？\n2. 读完一篇工程博客后，你能否不看原文画出数据流？\n3. 如果一张设计卡片只能保留 6 行，你会保留哪些信息？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '课程正文到这里收束。接下来可以回到前面的案例，用同一套阅读、复述、对比和卡片方法重新审视自己的系统设计答案。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '02_feed_publishing_fanout',
    categoryId: 'system-design',
    chapterId: 'part11_news_feed',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能区分写时分发和读时聚合，解释它们分别把成本放在发布路径还是读取路径，并能设计普通用户写时分发、大 V 读时聚合的混合方案。面试里这是 News Feed 最核心的扩展性取舍。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '用户发帖后有两种基本策略。写时分发是在发布后把 post id 写入每个关注者的 feed 索引，读取非常快，但大 V 发帖会产生巨大写放大。读时聚合是不提前写关注者 feed，等用户打开首页时再从关注对象的近期帖子中合并，发布很轻，但读取会变重。实际系统常用混合方案：普通用户写时分发，大 V 或热点账号读时聚合。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '社交产品通常读多写少，首页读取延迟非常敏感。把工作提前到发布时做，可以让大多数用户打开首页很快。但关注者数量分布极不均匀：普通用户可能几十个粉丝，大 V 可能几千万粉丝。若所有作者都写时分发，大 V 一条帖子会制造千万级写入、队列积压和缓存抖动；若所有作者都读时聚合，用户每次打开首页都要查询大量关注者，读取延迟不可控。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '写时分发流程是：帖子写入成功后发布事件进入队列，fanout worker 查询作者关注者列表，按 follower 分片批量写入每个关注者的 feed 索引。读取时只取当前用户的索引，批量补帖子详情。读时聚合流程是：读取首页时查询用户关注的作者，拉取这些作者的近期帖子，合并排序后返回。',
          '混合方案需要作者策略。系统根据粉丝数、活跃度、发帖频率和热点状态把作者分为普通作者和特殊作者。普通作者发帖走 fanout-on-write；特殊作者发帖只写作者帖子表和热点缓存。用户读取时，先取个人 feed 索引，再拉取其关注的特殊作者近期帖子，两部分按时间或分数合并。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '作者 B 有 500 个关注者，发帖后 fanout worker 批量写入 500 个 feed 索引，这个成本可接受，换来 500 个用户之后读取更快。作者 V 有 2000 万关注者，如果同样写时分发，一条帖子会让队列堆积很久，还可能把 feed store 打出热点。因此 V 的帖子只写一次，放入 V 的近期帖子缓存。',
          '用户 A 关注了 B 和 V。A 打开首页时，系统从 A 的个人 feed 索引取到 B 的帖子，同时发现 A 关注的特殊作者包括 V，于是读取 V 最近几条帖子，把两部分按时间合并。这样避免 V 发帖时的写爆炸，又不让 A 漏看 V 的最新内容。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '写时分发读取快、逻辑简单，但发布成本和存储写入会随粉丝数放大。读时聚合发布轻，但读取时 fan-in 大，需要缓存、限制关注数或候选数量。混合方案效果好，但会引入合并排序、特殊作者列表维护和一致性补偿。',
          '常见坑是只说“用消息队列 fanout”而不处理大 V。队列能削峰，不能消除千万级写入本身。另一个坑是 fanout worker 失败后没有进度记录，导致部分关注者永远收不到内容。正确做法是按 follower 分片记录任务进度，可重试、可补偿。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：写时分发优化读取但有写放大，读时聚合优化发布但有读放大；我会对普通用户写时分发，对大 V 保留读时聚合，并在读取时合并两类候选。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          'Fanout 设计本质是把成本放在哪里。大多数用户适合提前写，少数超级热点用户不能提前写。混合策略承认用户分布不均匀，用不同路径处理不同规模。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 如何判断一个用户应切换到读时聚合？\n2. fanout worker 中途失败，怎样避免漏写永久存在？\n3. 混合读取时如何去重和排序来自两条路径的内容？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节看用户打开首页时，系统如何从 feed 索引、缓存、帖子服务和 CDN 拼出完整列表。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '02_hash_ring_lookup',
    categoryId: 'system-design',
    chapterId: 'part05_consistent_hashing',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能画出一致性哈希环，说明 key 如何找到负责它的节点，理解“顺时针第一个节点”为什么能让路由在节点变化时保持局部稳定。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '一致性哈希把节点和 key 都映射到同一个固定哈希空间。查找时，不再用节点数取模，而是从 key 在环上的位置开始顺时针走，遇到的第一个节点就是负责节点。因为哈希空间本身不随节点数变化，所以增删节点只会改变环上的一小段归属。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '上一节的问题来自 `N` 进入了路由公式。只要节点数变化，公式结果就全局变化。我们需要一种路由方式：节点数量可以变，但 key 的位置计算不变；节点加入或离开时，只改变它附近的归属边界。',
          '这背后的压力来自在线服务的持续可用性。缓存不能因为扩容就大面积失效，存储不能因为下线一台机器就全局迁移，客户端也不能维护频繁变化的复杂分片表。一致性哈希通过固定哈希空间，把“节点数变化”变成“环上少数点的变化”。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '先选一个足够大的哈希空间，例如 0 到 `2^32 - 1`。把这个空间首尾相接，看成一个环。每台服务器用自己的标识做哈希，比如 `hash("cache-a")`，得到它在环上的位置。每个 key 也用同一个哈希函数得到位置，比如 `hash("user:123")`。',
          '查找流程分三步。第一步，计算 key 的哈希位置。第二步，在有序的节点位置列表中找到第一个大于等于该位置的节点。第三步，如果已经超过最大节点位置，就回到环头，选择最小位置的节点。这个“回到开头”的动作就是环形空间的意义。',
          '实现时通常不真的画环，而是维护一个排序数组或平衡树。查找就是二分搜索：找到第一个大于等于 key hash 的节点。如果找不到，就返回第一个节点。路由复杂度是 `O(log M)`，其中 `M` 是环上的节点点位数。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '假设哈希空间是 0 到 99，三台服务器位置分别是 A=10、B=40、C=75。key `k1` 的位置是 18，顺时针第一个节点是 B，所以归 B。key `k2` 的位置是 60，归 C。key `k3` 的位置是 90，往前走到 99 后回到 0，遇到 A，所以归 A。',
          '现在新增服务器 D，位置是 55。它只会接管 B 和 D 之间吗？要小心方向：D 负责的是它逆时针前一个节点 B 到自己之间的区间，也就是 `(40,55]`。原来这个区间的 key 会归 C，因为从 41 到 55 顺时针第一个节点是 C；D 加入后这些 key 改归 D。其他区间，比如 `(10,40]` 仍归 B，`(55,75]` 仍归 C，`(75,10]` 仍归 A。',
          '这个例子说明，一致性哈希不是不迁移，而是只迁移新增节点“切入”的那段区间。新增节点越多或虚拟节点越多，迁移会分散成多段，但仍然是局部变化。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '一致性哈希牺牲了一点查找复杂度，换来节点变化时的稳定性。普通取模只要一次 `%`，一致性哈希需要维护有序点位并做二分查找；但在网络 IO 和存储访问面前，这点 CPU 成本通常很小。',
          '常见坑是把“环”理解成数据结构本身，以为必须实现成链表。实际工程里用排序数组、TreeMap、跳表都可以，关键是能找到后继节点。另一个坑是忘记环尾回环：如果 key 的位置大于所有节点位置，它应该归最小位置节点，而不是报错或归最后一个节点。',
          '还要注意，哈希函数必须稳定。服务重启、语言版本升级或节点名称变化不应改变同一节点的哈希位置，否则等价于节点被删除再新增，会触发迁移。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：一致性哈希把 key 和节点映射到固定环上，key 顺时针找到第一个节点；因为 key 的哈希位置不依赖节点总数，所以节点增删只影响相邻区间，而不是全局重算。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '一致性哈希的核心不是“画一个圆”，而是去掉路由公式里的节点数依赖。固定哈希空间提供稳定坐标，顺时针后继规则提供确定归属，局部区间变化提供扩缩容时的可控迁移。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么一致性哈希查找要找“后继节点”，而不是找最近节点？\n2. 如果 key hash 大于所有节点 hash，应该路由到哪里？\n3. 节点名称变更为什么可能造成数据迁移？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会具体分析节点加入和离开时，哪些 key 会迁移，哪些 key 完全不受影响。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '02_high_level_data_query_service',
    categoryId: 'system-design',
    chapterId: 'part13_autocomplete',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你应该能画出自动补全的两条主链路：一条从搜索日志、点击日志和业务词库生成候选词索引，另一条在用户输入前缀时快速返回建议。你还应该能解释为什么写入链路和查询链路必须分离，以及版本化索引、缓存和回滚怎样保证线上稳定。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '自动补全系统通常不是一个服务直接读数据库，而是“后台构建、前台读取”。后台负责收集原始数据、清洗、聚合、打分、过滤，最后生成可查询的索引快照；前台查询服务只接收前缀，读取已准备好的 Top K，并做少量实时过滤。两条链路的节奏完全不同：数据构建可以秒级、分钟级甚至小时级，在线查询却要毫秒级。',
          '这种分离能把重计算从用户请求中拿走，也能隔离故障。日志系统延迟、索引构建失败或某批数据质量不好时，查询服务仍然可以加载上一版快照继续服务。自动补全宁愿短时间返回旧但合理的建议，也不应该因为后台处理波动让输入框失去响应。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '候选词的来源很杂。用户历史查询能反映真实意图，但里面有错别字、隐私信息、攻击字符串和低频噪声；点击日志能说明哪些建议有用，但反馈有延迟；商品名、视频名、地点名等业务数据能补冷启动，但不一定符合用户搜索习惯；运营配置和屏蔽词还会随时变化。',
          '如果查询服务直接依赖这些原始来源，就会同时面对高延迟和不稳定数据。每次用户输入都去日志里聚合热度，延迟不可控；每次都访问多个业务库，某个依赖超时就拖慢输入框；把未清洗的日志直接展示，还可能暴露隐私或违规内容。因此必须有一条专门的数据链路，把脏而大的原始数据变成小而稳定的查询数据。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '数据收集链路通常从事件开始：搜索请求、点击、曝光、业务对象更新和人工配置进入日志队列。处理任务先做规范化，比如大小写、空格、语言识别、拼写归一和敏感内容过滤；再按词、语言、地区、时间窗口聚合，计算基础频次、近期趋势、点击反馈和业务权重；最后把候选词写成某种前缀索引或前缀到 Top K 的映射。',
          '查询链路则尽量短。客户端传入前缀、语言、地区和可选上下文，网关做限流和路由，查询服务规范化输入后读取本地内存索引或缓存，得到候选列表，再做权限、敏感词、地区和可见性过滤，返回固定数量的建议。索引以版本发布，新版本先在少量机器加载和校验，指标正常后再扩大范围；如果点击率、空结果率或错误率异常，可以快速回滚。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '以视频网站补全为例，用户搜索和播放点击进入日志流。后台每 10 分钟统计最近 24 小时内的热门查询，并结合长期热度和视频可见状态生成候选。`funny cat` 如果最近搜索多、点击率高、关联视频可播放，就会进入相关前缀的 Top K。索引构建完成后产出版本 `v42`，查询服务下载快照并在内存中加载。',
          '用户输入 `fun` 时，请求到达查询服务。服务读取 `v42` 中 `fun` 的候选列表，得到 `funny cat videos`、`fun workout` 等结果；返回前发现某条候选对应内容被下架，就从备用候选里补一条。若 `v43` 构建失败，线上继续使用 `v42`，用户最多看到稍旧的热度，不会受到构建故障影响。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '链路分离会引入数据延迟和发布复杂度。后台构建越稳，实时性越差；实时更新越多，查询合并和一致性越复杂。常见折中是主索引定期全量构建，少量实时热词或封禁词走覆盖层，查询时合并主索引和覆盖层结果。',
          '常见坑是只画一个“日志进数据库，服务查数据库”的图，忽略索引版本、回滚和数据质量。另一个坑是把过滤全放到查询时做。查询时过滤可以处理临时策略，但主索引里如果已经混入大量垃圾候选，过滤后容易不够展示，且浪费缓存空间。正确做法是构建前重过滤，查询前轻过滤。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：我会把自动补全拆成数据构建链路和在线查询链路，后台从日志和业务数据中清洗、聚合、打分并生成版本化索引，前台查询只读内存索引和缓存；这样牺牲一点实时性，换取低延迟、可回滚和故障隔离。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '自动补全高层架构的主线是读写分离。写入侧面对大规模、脏数据和复杂计算；读取侧面对高 QPS、低延迟和稳定结果。版本化快照、灰度发布、回滚和分层过滤，是把这个系统从演示推进到生产的关键。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么查询服务不应该直接扫描搜索日志生成建议？\n2. 主索引和实时覆盖层分别适合承载哪些数据？\n3. 新索引发布后点击率下降，你会优先检查哪些环节？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节深入 Trie 和 Top K 缓存，看看前缀索引如何用空间换取在线查询速度。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '02_high_level_design',
    categoryId: 'system-design',
    chapterId: 'part03_interview_framework',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '本节要讲清楚高层设计的作用：不是把所有组件画满，而是用少量核心模块说明请求如何流动、数据如何保存、系统边界在哪里。你要能从需求推导出架构图，并知道何时停下来向面试官确认方向。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '高层设计要覆盖核心路径：客户端如何进系统，服务层如何处理，数据存在哪里，异步任务如何流转，缓存或队列是否必要。它的目标是建立共同地图，让面试官知道你准备深入哪里。高层图太粗会像口号，太细会浪费时间；好的图能支撑后续讨论。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '没有高层设计，面试会变成零散问答。你可能先讲数据库索引，又跳到缓存，再跳到 API，面试官很难判断系统是否完整。高层设计把需求转成结构，让每个模块都有位置：入口层、业务层、存储层、异步层、观测和运维边界。',
          '同时，高层设计也是纠偏点。如果你理解错需求，越早画出请求流，越早被面试官纠正。比如你以为短链接只需要跳转，面试官其实还关心分析统计；你以为聊天只支持一对一，面试官要求万人群。高层阶段暴露误解，比深入后返工更好。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '提出高层设计可以按“API、数据模型、请求流、组件”顺序。先列核心 API，例如创建、读取、更新、删除。再定义关键数据实体，例如用户、帖子、链接、消息、规则。然后讲核心请求流：写请求怎么进入、读请求怎么返回、异步任务如何触发。最后画组件：负载均衡、服务、数据库、缓存、队列、对象存储等。',
          '获得共识的关键是明确哪些是当前重点，哪些只是占位。比如缓存可以先作为读加速出现，但不要立刻讨论淘汰算法；队列可以先表示异步任务，但不要马上展开重试策略。高层设计应给深入留接口。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '设计短链接服务时，高层设计可以这样走：客户端调用 `POST /shorten` 提交长 URL；应用服务生成短码，写入数据库；客户端访问 `GET /{code}`，服务查短码映射，返回 301/302 跳转；访问日志写入队列，异步统计点击量。读流量远大于写流量时，短码映射可以缓存。',
          '这个高层图已经回答了主要问题：入口是什么，核心数据是短码到长 URL 的映射，读路径如何跳转，统计为什么异步，缓存放在哪里。接下来可以选择深入短码生成、缓存一致性、数据库分片或统计管道，而不是所有细节一起讲。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '高层设计要在完整性和时间之间取舍。组件太少，可能漏掉关键非功能需求；组件太多，面试会变成堆技术名词。理想状态是先覆盖核心闭环，再根据瓶颈补组件。每加一个组件，都要说它改变了哪条请求流或数据流。',
          '常见坑是图上有缓存、队列、数据库、搜索、消息总线，但没有解释请求怎么走。另一个坑是画图后不和面试官确认，直接深入自己熟悉的点。面试是互动过程，高层设计后要问“这个方向是否符合你希望我深入的范围”。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：“我先给一个高层闭环：入口 API、核心服务、权威存储、读写路径和必要的异步处理。确认这张图覆盖主要需求后，我再选择最有风险的部分深入。”'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '高层设计是系统的共同地图。它要让人看见请求流、数据流和边界，而不是欣赏组件清单。先建闭环，再深入瓶颈，是面试中最稳的节奏。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 高层设计阶段为什么不应该过早讨论数据库索引细节？\n2. 一个好的架构图至少应该回答哪几条请求流？\n3. 什么时候应该在图中加入队列？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会讨论如何选择深入点：既要展示技术深度，又不能陷入所有细节。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '02_high_level_flow',
    categoryId: 'system-design',
    chapterId: 'part10_notification_system',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能画出通知从业务服务到用户设备的完整链路，并解释通知服务、消息队列、worker、模板服务、渠道适配器和结果存储各自的职责。重点是理解为什么发送必须异步化，以及每一步如何留下可追踪状态。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '典型通知链路是：业务服务产生事件，通知服务接收并校验请求，创建通知任务并写入队列，worker 执行偏好检查、模板渲染、渠道选择和投递，最后记录渠道响应和用户反馈。异步队列是关键，因为业务请求不应该被第三方渠道的延迟、限流或故障拖住。订单支付接口只需要知道通知任务已被系统接收，不应该等待短信平台真正发送成功。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '通知发送链路同时连接内部业务和外部渠道。内部业务追求低延迟和稳定返回；外部渠道有不可控延迟、限流、错误码和维护窗口。如果同步发送，高峰期渠道变慢会反向拖垮业务接口。如果没有统一链路，各业务会重复实现模板、重试、退订和日志，最后同一用户收到多条重复通知，排障时也找不到完整路径。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '入口层负责标准化请求。它验证通知类型、调用方权限、模板参数和幂等键，创建 notification record。幂等键通常由 notification_type、business_id、user_id 组成，用来抵抗业务重试。随后任务进入队列。队列按优先级和渠道隔离，例如安全验证码和营销活动不应共用同一个无优先级队列。',
          'worker 消费任务后，读取用户偏好、设备 token、邮箱、手机号、语言和时区，决定是否发送以及用哪些渠道。模板服务根据通知类型和语言渲染标题、正文和跳转链接。渠道适配器屏蔽 APNs、FCM、短信、邮件之间的协议差异，把第三方结果转换成统一状态：成功、临时失败、永久失败、token 失效、被限流。结果存储记录每次尝试、错误码、渠道 message id、重试次数和最终状态。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '用户评论了你的帖子，帖子服务提交 `comment_reply` 通知。入口层用 `comment_reply:comment_id:receiver_id` 做幂等检查，发现没有发送过，于是写入通知表并投递到互动通知队列。worker 取到任务后发现你开启了 push，但当前处于夜间免打扰；因为这是普通互动通知，它被延迟到第二天早上，或合并进“你有 3 条新评论”。如果是登录异常通知，同样在夜间发生，策略可能允许立即 push 和邮件。',
          '当 FCM 返回 token invalid 时，适配器把它标记为永久失败，并触发设备 token 清理；如果返回 503，则任务按指数退避重试。业务服务不需要理解这些渠道细节。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '异步化提升业务可用性，但会引入最终一致：业务成功返回时，用户可能还没收到通知。因此需要状态查询和可观测性。按优先级拆队列能隔离关键任务，但会增加运维复杂度。模板服务统一管理能减少重复，却需要版本、灰度和回滚机制。',
          '常见坑是只把队列当缓冲，不记录通知状态；一旦发送失败，客服和业务都无法判断是未创建、排队中、渠道失败还是被用户偏好拦截。另一个坑是所有通知共用一个 worker 池，营销高峰挤占安全验证码。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：通知链路应把业务事件和渠道投递解耦，入口做幂等和校验，队列做削峰和优先级隔离，worker 统一处理偏好、模板、渠道适配和结果记录。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '通知系统的高层架构围绕异步任务展开。业务只提交语义化请求，通知系统负责把请求变成符合用户偏好和渠道规则的投递尝试，并把每次尝试变成可追踪状态。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么业务服务不应该直接调用短信网关？\n2. 幂等键放在入口层有什么好处？\n3. push 渠道故障时，邮件和站内通知是否应该继续发送？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节深入可靠性、幂等、重试、死信队列和用户控制，看看通知怎样避免重复、丢失和打扰。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '02_placement_and_api_gateway',
    categoryId: 'system-design',
    chapterId: 'part04_rate_limiter',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '本节要比较限流器放在客户端、服务内部、反向代理、API Gateway 和专用限流服务中的差异。你要能根据控制力、延迟、准确性、运维成本和安全性选择合适位置。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '客户端限流只能改善体验，不能作为可信保护；服务内部限流贴近业务，灵活但重复实现成本高；API Gateway 或反向代理限流适合统一保护入口；专用限流服务适合复杂规则和多服务共享。大多数系统会组合使用：入口层做粗粒度保护，服务内部做业务细粒度保护。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '限流放错位置，会导致保护失效或成本过高。如果只在客户端限制，恶意用户可以改代码或直接调用 API 绕过。如果每个服务都自己实现限流，规则难统一，代码重复，监控分散。如果只在入口网关限流，服务内部的昂贵操作可能仍缺少业务级保护。',
          '放置位置还决定可见信息。网关容易看到 IP、路径、Header、API key，却未必知道业务对象，例如某个用户正在给哪个手机号发短信。服务内部知道业务上下文，但请求已经消耗了一部分入口资源。设计时要问：在哪一层能最早、最便宜、最准确地做决策。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '入口层限流的请求流是：客户端请求到 API Gateway，网关解析身份和路径，调用本地或远程限流逻辑，放行后再转发到后端服务。它的优点是请求还没进入业务集群就被拦住，适合保护整体容量和开放 API 配额。',
          '服务内部限流的请求流是：请求进入业务服务后，服务根据业务参数生成更精确的 key，例如 `phone:138xxxx:sms` 或 `user:123:create_order`，再判断是否放行。它适合保护短信、支付、创建资源等昂贵动作。专用限流服务则把规则管理、计数状态和决策 API 抽成共享组件，多个入口或服务都可以调用。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '一个电商系统有搜索、下单和短信验证码。搜索接口流量大但风险相对低，可以在网关按用户和 IP 做每秒请求限制，避免爬虫打爆搜索集群。短信验证码则需要服务内部限流，因为规则依赖手机号、账号状态、设备和风险等级：同一手机号一分钟只能发一次，一天最多五次。',
          '如果全部放网关，网关需要理解大量业务字段，会变得臃肿；如果全部放服务内部，恶意搜索请求已经穿过网关和路由层，浪费入口资源。组合方案更合理：网关挡粗流量，服务内部挡业务滥用，规则中心统一配置和审计。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          'API Gateway 集中治理方便，能统一日志、指标、规则和 429 响应，但它也可能成为延迟热点和故障集中点。服务内部灵活，但不同团队实现不一致会带来漏洞。专用限流服务能力强，但每个请求远程调用它会增加延迟，所以常配合本地缓存规则、批量获取令牌或边缘计数。',
          '常见坑是认为“网关限流就够了”。网关通常不知道所有业务语义，无法替代业务级限制。另一个坑是让后端服务每次同步调用远程限流服务，却没有超时和降级，结果限流服务慢时拖慢全站。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：“我会在入口层做统一的粗粒度限流，尽早保护后端；在业务服务内对短信、登录、下单等高风险操作做细粒度限流。复杂规则由规则中心管理，但请求路径上的决策要尽量低延迟并有本地降级。”'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '限流位置决定了保护范围和判断精度。入口层早但信息少，业务层准但成本已发生，专用服务统一但要控制调用延迟。成熟设计通常是多层限流，而不是押注单一位置。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么客户端限流不能作为安全边界？\n2. 哪些接口适合在网关限流，哪些适合在业务服务内部限流？\n3. 远程限流服务变慢时，调用方应该如何降级？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会介绍三种基础算法：固定窗口、漏桶和令牌桶，并比较它们的行为差异。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '02_redirect_flow_and_status_code',
    categoryId: 'system-design',
    chapterId: 'part08_url_shortener',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能描述浏览器访问短链后的完整跳转流程，区分 301 和 302 的缓存语义，并说明状态码选择如何影响统计、修改目标 URL 和客户端行为。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '短链接跳转的核心响应是 HTTP 重定向：服务返回 3xx 状态码和 `Location` 头，浏览器再请求长 URL。301 表示永久重定向，客户端和搜索引擎更可能缓存；302 表示临时重定向，更适合需要统计点击、可能禁用或修改目标的短链接服务。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '短链接服务并不把目标网页内容代理回来，它只告诉客户端真正地址在哪里。这样服务端负担轻，用户最终仍然访问原网站。但重定向状态码会影响浏览器、CDN、搜索引擎和中间代理的缓存行为。',
          '如果错误地把可变短链返回 301，浏览器可能记住短码到长 URL 的关系。之后你禁用短链、修改目标或想统计点击，用户的浏览器可能绕过短链接服务直接访问旧 URL。对广告投放和访问分析来说，这会造成统计缺失和控制失效。',
          '这也是短链和普通网站迁移的区别。网站把旧域名永久迁到新域名时，希望客户端和搜索引擎记住新位置；短链服务则通常希望每次点击都先经过自己，因为它要检查链接是否过期、是否被封禁、是否需要记录访问事件。状态码选择实际上是在选择“把控制权交给客户端缓存”还是“保留在服务端”。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '跳转请求从浏览器开始：用户访问 `https://sho.rt/a8K3xQ`，DNS 解析到短链服务，HTTP 请求带着路径 `/a8K3xQ` 到达负载均衡。应用提取短码，查询缓存或数据库，检查状态、过期时间和安全策略。如果有效，返回：',
          '`HTTP/1.1 302 Found`',
          '`Location: https://example.com/products?id=123`',
          '浏览器收到后自动发起第二个请求到 `Location`。短链服务通常不参与第二次请求，所以它能统计的是第一次点击事件，包括时间、IP、User-Agent、Referer 等。',
          '301 表示资源永久移动，适合永远不变、希望搜索权重转移的场景。302 或 307 表示临时跳转，更适合短链接。302 历史上可能把 POST 改成 GET；短链接跳转通常是 GET，所以影响不大。307 更严格保留方法，但短链场景用 302 更常见。',
          '缓存头也要配合状态码。即使用 302，如果 CDN 或代理被配置了较长缓存，仍可能减少短链服务收到的请求。对于强依赖统计和风控的短链，可以设置较保守的缓存策略；对于内部固定跳转，可以允许边缘缓存来降低延迟。状态码不是唯一开关，它和 `Cache-Control`、CDN 规则一起决定实际行为。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '用户第一次点击营销短信里的短链 `/sale2026`。服务查到目标 URL 是活动页 A，返回 302，并异步记录一次点击。第二天活动结束，运营把短链禁用。用户再次访问时，请求仍会到短链服务，服务可以返回 410 Gone 或提示不可用，因为浏览器没有永久缓存跳转。',
          '如果当初返回 301，部分客户端可能直接缓存 `/sale2026 -> 活动页 A`。第二天即使服务端禁用了短链，客户端仍可能绕过短链服务去访问活动页 A。统计少了，风控也失效了。',
          '再看永久文档链接。如果公司内部短链 `/handbook` 永远指向一个稳定文档，并希望浏览器缓存减少跳转延迟，可以考虑 301。但这应是明确业务选择，而不是默认。',
          '还有一种折中是按链接类型选择。营销、广告、短信短链默认 302，因为它们需要统计和可撤回；文档迁移、旧页面改版可以用 301，因为目标稳定且希望搜索引擎转移权重。面试时说清这个分层，比简单回答“用 302”更完整。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '302 的优点是控制权留在短链服务，便于统计、风控、过期和修改；代价是每次访问都要多一次短链服务请求。301 的优点是客户端可缓存，后续更快；代价是难以撤回，统计和控制能力变弱。',
          '常见坑是只从“永久短链”字面理解选择 301。短链即使长期有效，也可能需要统计、禁用、风控和目标更新，所以工程上常默认 302。另一个坑是同步写统计数据库再返回跳转，这会把分析系统延迟带到用户路径。更好的做法是先返回重定向，把事件写入队列或日志。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：短链跳转返回 3xx 和 Location，浏览器再访问长 URL；默认更倾向 302，因为短链服务通常要保留统计、禁用和修改目标的控制权，301 只适合明确永久且可缓存的场景。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '重定向状态码不是细枝末节，它决定短链服务是否还能控制后续访问。多数业务短链需要可观测、可撤回和可变更，因此 302 是更稳妥的默认选择。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么 301 可能导致短链点击统计减少？\n2. 短链服务能统计目标网站加载完成吗？为什么？\n3. 什么场景下你会主动选择 301？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会讨论短码如何生成：Hash、随机码、自增 ID 加 Base62 分别有什么风险和优势。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '02_single_server_to_high_level',
    categoryId: 'system-design',
    chapterId: 'part15_google_drive',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你应该能解释单机文件服务器为什么无法支撑云盘规模，能画出客户端、元数据服务、块服务、对象存储和通知服务的高层架构，并能说明文件元数据与文件内容分离后的收益和代价。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '最朴素的云盘是一台服务器：用户上传文件，服务器写磁盘，再把路径写进数据库。这个方案适合演示，不适合真实云盘。文件会撑爆单机磁盘，下载会打满网卡，机器故障会造成不可用，跨设备同步也缺少可靠的事件机制。',
          '高层架构应按职责拆开：客户端负责发现本地变化和执行同步；元数据服务管理目录、版本、权限和状态；块服务处理切块、哈希、上传下载和去重；对象存储保存真正的文件块；通知服务告诉其他设备有变化。拆开后，每个部分可以按自己的负载模式扩展。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '单机方案最大的问题是把所有职责混在一起。它既接收请求，又保存内容，又管理目录和权限。一旦热门文件被大量下载，上传也会变慢；一旦磁盘损坏，文件可能丢失；一旦要扩容，文件路径、数据库记录和本地磁盘状态都很难迁移。',
          '更关键的是，同步不是单机文件服务器天然支持的能力。两台设备同时修改同一个文件，谁覆盖谁？一个设备离线三天后上线，从哪里知道期间发生了哪些变化？一个大文件只改一点，服务器如何知道哪些内容可复用？这些问题都需要独立的元数据、块和变更模型。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '客户端是云盘架构中的主动参与者。桌面端监控本地文件系统，计算文件和块哈希，维护同步队列，处理离线重试；移动端更偏按需下载和后台同步；网页端通常按用户动作上传下载。客户端不是“薄壳”，它负责把本地变化转成服务端可理解的版本提交。',
          '服务端分层处理。元数据服务保存文件树、版本、权限和删除状态，适合用支持事务和索引的数据库；块服务根据哈希判断哪些块已存在，生成上传下载地址，并做校验；对象存储保存块内容，负责大容量和高可靠；通知服务基于变更日志提醒其他设备拉取最新元数据。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '上传一个文件时，客户端先向元数据服务声明要创建或更新文件，拿到文件 ID 和当前版本。随后客户端把文件切成块并计算哈希，向块服务询问哪些块已经存在。缺失块通过预签名地址上传到对象存储，块服务校验成功后，客户端提交新版本元数据，包含块列表、大小、哈希和 base version。',
          '下载时流程反过来。客户端先问元数据服务某个文件的当前版本，拿到块列表，再通过块服务获得下载地址，从对象存储并发下载块并在本地组装。元数据服务不传大文件内容，因此可以专注处理目录、权限和版本查询。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '分层后系统更可扩展，但链路更长。一次上传可能涉及元数据服务、块服务、对象存储和通知服务，任何一步失败都要能恢复。元数据提交和块上传需要明确边界：块上传成功不等于文件版本可见，只有版本提交成功才代表用户的文件更新完成。',
          '常见坑是让所有文件下载都经过元数据服务转发，导致元数据服务承载大流量字节路径。另一个坑是把客户端看得太简单，忽略本地状态、重试和冲突处理。云盘体验很大程度取决于客户端同步器是否可靠，而不只是服务端 API。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：我会从单机方案的问题出发，把云盘拆成元数据路径和内容路径；元数据服务管理文件树、版本和权限，块服务与对象存储负责内容块，客户端维护同步状态，通知服务只提醒设备去拉变更。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '云盘高层架构的关键是职责分离。元数据和内容分离后，目录查询、版本一致性和大文件传输可以分别优化。客户端、块服务、对象存储和通知服务共同组成同步闭环，解决单机方案无法处理的规模和多端问题。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么文件下载不应该都经过元数据服务？\n2. 客户端在云盘同步中承担哪些关键工作？\n3. 对象存储短暂不可用时，元数据服务应该怎样表现？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节深入 Block Server，讨论切块、哈希、压缩、加密、去重和版本一致性提交。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '02_upload_streaming_high_level',
    categoryId: 'system-design',
    chapterId: 'part14_youtube',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你应该能画出视频上传、处理、发布和播放的主链路，说明上传流和播放流为什么要分离，并能讲清元数据服务、对象存储、消息队列、转码服务和 CDN 各自承担的职责。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '视频系统至少有两条主链路。上传流负责把创作者的视频可靠接收下来，保存原始文件，创建元数据，并触发后台处理；播放流负责让观众快速拿到可播放版本，通过 CDN 按切片观看。两条链路共享视频元数据，但延迟要求、失败处理和流量规模完全不同。',
          '上传可以慢一些，关键是可恢复、可校验、状态清楚；播放必须首帧快、卡顿少、就近访问。把两者分开后，转码队列积压不会影响已有视频播放，播放高峰也不会拖垮上传入口。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '如果上传、转码和播放被放进一个同步流程，用户上传时就要等待转码完成，连接可能持续数分钟甚至更久；任何转码失败都会让上传请求失败；应用服务器还要同时处理大文件流和播放请求，资源互相抢占。这个设计在小 demo 中能跑，在真实视频平台中会非常脆弱。',
          '播放链路的问题更明显。观众数量可能远大于上传者数量，热门视频会造成短时间的全球播放峰值。播放请求需要靠近用户的位置处理，而上传任务更关注可靠写入和后台计算。两者天然应该分开扩展。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '上传流程通常从创建视频记录开始。客户端请求应用服务创建一个视频 ID，服务返回分片上传地址或临时凭证。客户端把文件分片上传到对象存储或上传服务，完成后通知后端。后端校验文件大小、哈希、格式和权限，更新状态为待处理，并向队列投递转码任务。',
          '处理流程由 worker 异步消费。转码服务读取原始文件，生成多个清晰度、切片、封面、字幕或音频轨，完成后更新元数据。播放流程则从视频页开始：应用服务检查权限和状态，返回播放清单地址、封面、字幕和签名信息；播放器根据清单从 CDN 拉取切片，CDN 未命中时再回源到对象存储。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '创作者上传一个视频时，页面先显示“上传中”。客户端按 8MB 分片上传，断网后只重传缺失分片。全部分片完成后，服务端把视频状态从 `uploading` 改为 `processing`，并投递任务。此时创作者能看到“处理中”，但观众还不能播放。',
          '转码服务先生成 360p 版本并切片，审核通过后把状态改为 `playable_partial`，页面可以先允许低清晰度播放；随后 720p、1080p 完成，元数据继续补充可用版本。观众打开视频页时，应用服务返回清单，播放器从 CDN 拉取前几个切片，播放流不经过上传服务。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '上传流分离会引入状态机复杂度。视频可能处于上传中、待转码、处理中、审核中、部分可播放、失败、删除等状态。页面和 API 必须基于状态展示，而不能假设上传完成就能播放。播放流走 CDN 提高性能，但也带来缓存失效、签名 URL、内容下架后边缘节点清理等问题。',
          '常见坑是忘记断点续传和幂等。大文件上传中断是常态，客户端和服务端都要记录分片状态。同一个完成通知可能重复到达，重复投递转码任务也可能发生，后端接口必须能安全处理。另一个坑是让视频切片经由应用服务器转发，这会把最重的数据路径压到最不该承载它的组件上。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：我会把视频系统拆成上传流和播放流，上传流负责分片、校验、对象存储和异步转码，播放流负责鉴权、清单下发和 CDN 切片播放；两者通过视频元数据和状态机连接，但按不同负载独立扩展。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '上传流关注可靠性和可追踪状态，播放流关注低延迟和高带宽分发。元数据服务连接两条链路，队列把重处理异步化，对象存储和 CDN 承担视频字节。这个分离是视频平台高层架构的主骨架。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 上传完成但转码未完成时，视频页面应该如何展示？\n2. 为什么播放清单可以由应用服务返回，而视频切片不适合？\n3. 转码队列积压时，上传者和观众分别会感受到什么？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节深入转码系统，讨论如何用 DAG 把解析、转码、切片、封面和审核组织成可并行、可重试的工作流。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '03_block_server_consistency',
    categoryId: 'system-design',
    chapterId: 'part15_google_drive',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你应该能解释 Block Server 如何通过切块减少上传下载流量，块哈希、压缩、加密和去重分别解决什么问题，以及为什么文件版本提交必须有一致性控制，不能只看块是否上传成功。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          'Block Server 的作用是把“整个文件”拆成“可独立处理的块”。当文件只修改一部分时，客户端只上传变化块，服务端用块列表组合出新版本。它让云盘能节省带宽、支持断点续传、做内容校验和去重，尤其适合大文件和频繁局部修改的文件。',
          '但切块会引入版本一致性问题。一个文件版本可能由几百或几千个块组成，系统必须保证元数据里声明的每个块都已经可靠保存。不能出现“目录显示新版本存在，但下载时缺块”的状态。因此块上传和版本提交要分阶段，最终提交必须原子化。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '云盘用户经常修改的是文件的一小部分，而不是整个文件。文档自动保存、设计文件局部修改、代码仓库变动、虚拟机镜像增量变化，都会产生“内容大、变化小”的模式。如果每次都上传完整文件，用户等待长，服务端带宽和存储写入也浪费。',
          '与此同时，多设备会并发修改。设备 A 基于版本 10 修改并上传，设备 B 也基于版本 10 修改并上传。如果服务端只按最后到达覆盖，另一个人的修改就会无声丢失。增量同步必须和版本控制一起设计，否则只是省了带宽，却制造数据丢失风险。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '切块可以固定大小，也可以内容定义。固定大小例如每 4MB 一块，实现简单、定位容易；缺点是在文件开头插入一点内容后，后续边界全变，很多块哈希失效。内容定义切块根据内容特征决定边界，插入删除后更多块能保持不变，但计算复杂度更高。',
          '客户端上传前计算块哈希，向块服务查询哪些块已存在。存在的块无需上传，缺失块上传后由服务端重新计算哈希校验。压缩通常在加密前完成，因为加密后的数据难以压缩。去重依赖内容哈希，但端到端加密或每用户不同密钥会削弱跨用户去重，这是一组隐私与成本的取舍。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '用户修改一个 100MB 文件。客户端按 4MB 切成 25 个块，发现只有第 7、8 块内容变化。它向块服务发送 25 个哈希，服务端回答 23 个已存在，2 个缺失。客户端只上传这 2 个块，块服务校验并保存后，客户端提交新版本：文件大小、完整块列表、文件哈希和 base version。',
          '元数据服务检查当前版本仍是客户端声明的 base version。如果是，就原子提交版本 11，并写入变更日志；如果当前已经是版本 11 或更高，说明其他设备先提交了修改，服务端拒绝覆盖，客户端需要生成冲突副本或提示用户合并。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '块越小，增量上传越精细，去重机会越多，但块元数据、请求数和索引压力越大；块越大，管理简单，但小改动可能带来较多重传。跨用户去重节省空间，却可能泄露“系统是否已有某内容”的信息；端到端加密保护隐私，却让服务端搜索、预览、病毒扫描和去重变难。',
          '常见坑是把块上传成功当成文件更新成功。块只是材料，文件版本才是用户可见状态。另一个坑是不用 base version 做并发控制，导致多设备最后写入覆盖前一次写入。云盘宁愿产生冲突副本，也不应该悄悄丢掉用户修改。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：Block Server 通过切块和哈希实现缺块上传，减少带宽并支持校验和去重；但文件更新要分成块上传和版本提交两阶段，提交时用 base version 做乐观并发控制，保证不会引用不存在的块或覆盖并发修改。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          'Block Server 解决低带宽和可靠校验，版本提交解决一致性。切块策略、加密顺序、去重范围和冲突处理都不是细枝末节，它们决定云盘能否在大文件、多设备和弱网络环境下可信运行。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 固定大小切块在文件开头插入内容时为什么效果变差？\n2. 跨用户去重和端到端加密之间有什么冲突？\n3. 两台设备同时修改同一个文件时，云盘应该怎样处理？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节展开上传、下载和通知服务，看看多设备如何发现远端变化并补偿遗漏事件。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '03_design_deep_dive',
    categoryId: 'system-design',
    chapterId: 'part03_interview_framework',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '本节要讲如何在高层设计之后选择深入方向。你要能判断哪些组件最值得展开，怎样围绕机制、取舍和故障流深入，而不是把时间花在无关实现细节上。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '深入设计不是随机挑一个熟悉组件狂讲，而是选择系统中风险最大、最能体现取舍的部分。常见深入点包括数据模型、读写路径、缓存一致性、分片键、队列重试、限流算法、故障恢复和监控。深入时要讲机制：请求怎么流动、数据怎么变化、失败时怎样恢复。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '系统设计题时间有限，不可能把每个模块都讲到实现级别。如果你平均用力，每个点都浅；如果你钻进无关细节，比如某个 HTTP Header 或某种框架配置，又会偏离系统设计。面试官希望看到你能识别主要风险，并在关键处做工程判断。',
          '关键组件通常来自需求压力。读流量巨大，就深入缓存和读路径；写入要求严格一致，就深入事务和复制；任务异步复杂，就深入队列、重试和幂等；数据规模巨大，就深入分片、索引和迁移。深入点应该由前面的估算和需求自然推导出来。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '深入一个组件可以按四层讲。第一，正常流：一次请求或一条数据如何经过它。第二，数据结构：需要保存哪些字段、索引或状态。第三，取舍：为什么选这个方案，不选什么替代方案。第四，失败流：超时、重复、丢失、热点、扩容时怎么办。',
          '例如深入缓存，不只是说“用 Redis”。要说 key 怎么设计，读 miss 后如何回源，写入后如何失效，TTL 如何设置，热点 key 如何保护，缓存挂了是否降级。深入队列也类似：消息何时写入，消费者如何确认，失败怎么重试，重复消费如何幂等。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '在短链接系统中，值得深入短码生成。方案一是随机生成 6 到 8 位字符，写库时遇到冲突重试。优点简单，缺点是规模大后冲突概率上升，需要唯一约束和重试。方案二是用自增 ID 转 Base62，优点无冲突、短码紧凑，缺点是暴露增长趋势，需要加扰或号段服务。方案三是哈希长 URL，优点同 URL 可复用，缺点是冲突处理和自定义短码复杂。',
          '深入时还要讲失败流。如果数据库写成功但响应超时，客户端重试可能生成多个短码；可以用幂等 key 或按长 URL 去重。访问短码时缓存未命中查库，查不到要缓存空结果防穿透，但 TTL 要短，避免刚创建的短码被旧空缓存挡住。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '深入的收益是展示工程深度；风险是跑题。讲到足够支撑设计后要收住，把结论带回系统目标。不要把深入变成背八股，比如列出十种缓存淘汰策略却不说明本题需要哪一种。',
          '常见坑是只讲正常路径，不讲失败路径。另一个坑是只给一种方案，不比较取舍。面试官更关心你能否说明“为什么在当前约束下选它”，而不是你知道多少名词。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：“我会选择读写压力最大或正确性风险最高的组件深入。展开时我会先讲正常数据流，再讲关键数据结构、方案取舍和失败处理，最后回到它如何满足前面的需求。”'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '深入设计要服务于系统风险。真正有价值的细节，是能解释容量、延迟、一致性、故障和成本的细节。选对深入点，比把所有模块都浅浅扫一遍更重要。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 如果题目是聊天系统，你会优先深入消息投递、在线状态还是搜索？为什么？\n2. 深入缓存时，哪些问题比“用不用 Redis”更关键？\n3. 如何判断自己已经讲得足够深入，应该收回到整体设计？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会讲面试收尾：如何复盘取舍、补充监控和故障策略，并避免常见表达失误。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '03_feed_retrieval_scaling',
    categoryId: 'system-design',
    chapterId: 'part11_news_feed',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能描述首页读取的完整数据流，设计 cursor 分页、批量取详情、缓存和可见性校验，并分析高并发下的主要瓶颈。Feed 读取是用户打开应用的第一屏，延迟和稳定性都非常敏感。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '典型读取流程是：根据 user_id 从 feed cache 或 feed store 取一批轻量 post id，合并必要的读时聚合候选，过滤不可见或已删除内容，批量读取帖子详情、作者信息、计数和媒体元数据，返回结果和 cursor。优化原则是索引轻量、详情批量、第一页缓存、分页稳定、权限最终校验。不要让首页接口逐条调用帖子服务和用户服务，否则 20 条内容会放大成几十次 RPC。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          'Feed 读取压力高且集中。用户启动应用、下拉刷新和热点事件都会打到首页接口。每条 feed 又依赖多个数据源：帖子、作者、媒体、点赞评论计数、屏蔽关系和可见性。如果没有聚合和缓存，读取路径会出现 N+1 查询；如果缓存不校验权限，删除或屏蔽后的内容可能继续展示；如果分页不稳定，新内容插入会让用户翻页时重复或漏项。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          'feed 索引按用户保存有序列表，元素包含 post_id、author_id、created_at、score 等轻量字段。近期第一页可以放 Redis，较老数据放持久化 store。读取时先拿多于 page size 的候选，因为后续过滤会丢掉一部分。详情获取使用批量 API，一次拿帖子、作者简要信息和媒体 URL；计数类数据可以允许短暂延迟，避免强一致拖慢首页。',
          'cursor 需要表达当前位置。时间倒序可以用最后一条的时间戳加 post_id；算法排序可能还要保存分数、实验版本或会话 id。删除和权限变化采用读取时最终校验，同时异步清理缓存。热点内容和热点用户可以预热第一页，媒体文件由 CDN 提供，feed 接口只返回元数据和访问地址。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '用户 A 请求第一页 `limit=20`。feed 服务先从 Redis 取 A 最近 50 个候选 post_id，再拉取 A 关注的大 V 最近 5 条，合并去重后按时间排序。随后批量调用帖子服务取 40 条详情，其中 3 条已删除、2 条因屏蔽不可见，于是被过滤。系统返回前 20 条，并附带 cursor：最后一条的 `created_at` 和 `post_id`。',
          'A 继续翻页时，cursor 限定“从这个位置之后继续取”，即使此时有新帖子插入第一页，也不会影响当前翻页序列。用户下拉刷新时则重新请求第一页，允许看到新内容。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '缓存第一页能显著降低延迟，但删除和权限变化需要最终校验。批量聚合减少 RPC 次数，但聚合服务本身可能成为热点，需要超时、降级和缓存。计数实时性越高，写读压力越大；很多产品接受点赞数短暂不准。page size 越大，单次请求越重；越小，客户端请求次数越多。',
          '常见坑是使用 offset 分页处理动态列表，导致重复和跳项。另一个坑是同步清理大 V 内容在所有用户缓存中的副本，成本极高；更常见做法是读取时过滤，后台慢慢清理。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：Feed 读取先拿轻量索引，再批量补全详情和作者信息，用 cursor 保证分页稳定，并在读取时做最终可见性校验来抵抗缓存过期。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '读取路径的目标是少调用、少数据、可降级。索引只存候选，详情批量补，第一页缓存承接高频访问，cursor 保护翻页体验，最终校验保护权限正确性。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 首页接口为什么容易出现 N+1 查询？\n2. 删除大 V 帖子后，为什么不适合同步清理所有用户缓存？\n3. 算法排序 feed 的 cursor 为什么比时间倒序复杂？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一部分进入聊天系统，从聊天范围、实时协议和基础消息语义开始。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '03_hash_function_and_base62',
    categoryId: 'system-design',
    chapterId: 'part08_url_shortener',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能解释短码空间如何计算，比较长 URL 哈希、随机生成、自增 ID 转 Base62 的差异，并说明冲突检测为什么不可省略。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '短码生成的目标是短、唯一、可存储、可路由。Base62 是编码方式，不是唯一性来源；Hash 和随机码都可能冲突；自增 ID 转 Base62 天然唯一但可预测。工程上通常依赖数据库唯一索引兜底，冲突后重试或换码。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '短链接的用户体验要求短码尽量短，但短码越短，可用空间越小。使用 62 个字符，即数字、小写和大写字母，长度 6 的空间是 `62^6`，约 568 亿。看起来很大，但如果系统长期运行、创建量巨大、还要防扫描和保留自定义词，就必须认真处理冲突和可枚举性。',
          '生成短码还要考虑是否同一个长 URL 总是得到同一个短码，是否能从短码推测创建顺序，是否方便分库分表，是否支持自定义 alias。这些要求会影响方案。',
          '还要考虑短码空间的使用率。随机抽取在空间很空时几乎不会撞，但当已使用比例升高，重试次数会快速上升。实际系统通常不会把某个长度的空间用到接近满才扩容，而是提前切到更长短码，或者不同业务使用不同前缀和长度策略。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '长 URL 哈希方案是对规范化后的 URL 计算哈希，再取若干位编码成短码。优点是同一 URL 容易得到同一短码，去重自然；缺点是截断哈希会冲突，且长 URL 细微差异会产生不同短码。必须在插入时检查短码是否已存在，冲突则加盐重算或延长短码。',
          '随机码方案是从 Base62 空间随机抽取固定长度字符串。优点是不可预测，简单；缺点是随着已用短码增加，碰撞概率升高，需要重试。长度要根据总量和可接受碰撞率选择。',
          '自增 ID 转 Base62 是先生成唯一整数 ID，再把它编码成短字符串。例如 125 转成 Base62。优点是不会冲突，短码长度随 ID 增长；缺点是可枚举，攻击者可以猜测相邻短链。可以通过打乱 ID、加密映射或随机偏移缓解，但复杂度会上升。',
          'Base62 的本质是进制转换。十进制数字 3844 在 62 进制中可以用更少字符表达，但如果输入数字重复，输出仍然重复；如果输入数字可预测，输出也只是换了一种可预测形式。因此讨论 Base62 时一定要回到“输入 ID 从哪里来”这个问题。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '假设创建第 10,000,000 条短链。如果用自增 ID，数字 10,000,000 转 Base62 大约只需要 4 到 5 个字符，数据库唯一性来自 ID 生成器。插入映射表时保存 `short_code -> long_url`。跳转时按 short_code 查表即可。',
          '如果用随机 6 位 Base62，服务生成 `a8K3xQ`，尝试插入数据库。唯一索引成功则返回；如果冲突，重新生成，最多重试几次。随着短码使用率升高，冲突会变多，所以不能只在内存里判断，更不能假设随机不会撞。',
          '如果用 URL 哈希，`https://example.com/a?x=1` 和 `https://example.com/a?x=1&utm=ad` 是否算同一个 URL，取决于规范化策略。你可能要去掉某些追踪参数、统一大小写、补全默认端口。否则去重效果会很差。',
          '冲突处理要设计成正常路径的一部分，而不是异常报警。比如候选短码插入失败时，服务可以加盐重新哈希，或把短码长度从 6 增到 7，再尝试有限次数。超过重试上限时返回创建失败，而不是循环生成导致请求长时间挂住。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          'Hash 适合希望同 URL 去重的场景，但要处理规范化和冲突；随机码适合防枚举，但要预留足够空间；自增 Base62 适合高效唯一，但天然暴露增长趋势。自定义短码要单独走保留词、唯一性和权限校验。',
          '常见坑是说“用 Base62 保证唯一”。Base62 只是把数字或字节表示得更短，不负责生成不重复输入。另一个坑是忽略唯一索引。无论算法多好，线上并发下都应让数据库或强一致存储用唯一约束做最后防线。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：短码可以由哈希、随机或唯一 ID 编码得到；Base62 只是编码方式，唯一性要靠 ID 源、冲突检测和数据库唯一索引保证，方案选择取决于是否需要去重、防枚举和趋势不可见。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '短码生成要同时看空间大小、冲突概率、可预测性和数据库约束。真正可靠的方案不是“算法看起来不会撞”，而是撞了也能被检测并恢复。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 长度 6 的 Base62 短码空间大约是多少？\n2. 为什么自增 ID 转 Base62 容易被枚举？\n3. URL 规范化会如何影响哈希去重？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会把短码、映射表、缓存、消息队列和统计系统串成完整短链接架构。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '03_load_balancer_and_replication',
    categoryId: 'system-design',
    chapterId: 'part01_scale_from_zero',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '本节要讲清楚两个扩展动作：Web 层用负载均衡把请求分给多台机器，数据库用复制把数据副本放到多台机器。你要能说明它们分别解决什么问题，以及为什么“多一台机器”不自动等于“系统更可靠”。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '负载均衡解决的是入口请求分发和 Web 层故障转移；数据库复制解决的是数据副本、读扩展和故障恢复。前者面对的是无状态或弱状态的请求处理，后者面对的是有状态数据的一致性。两者都能提高可用性，但都会引入新的边界：健康检查、会话处理、主从延迟、故障切换和读写路由。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '当只有一台 Web 服务器时，它既是容量上限，也是单点故障。流量峰值会让它连接数耗尽；机器重启会让所有用户请求失败；发布新版本也只能硬切。加多台 Web 服务器后，用户请求必须被分配到其中一台，这就是负载均衡的来源。',
          '数据库也有类似问题，但更敏感。核心数据只有一份时，主库故障会让写入停止，备份恢复也需要时间。读流量很大时，所有查询压到主库，会影响写入延迟。因此需要复制副本，把数据从主库同步到从库，让从库承担读流量或作为故障恢复候选。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '负载均衡器位于用户和 Web 服务器之间。它接收请求，检查后端机器健康状态，再按轮询、最少连接、权重、哈希等策略转发。健康检查不是摆设：如果某台机器进程挂了，负载均衡器要停止发请求；如果机器只是变慢，还要结合超时和错误率判断是否摘除。',
          '数据库复制通常是主库接收写入，并把变更日志同步给从库。从库重放日志，得到与主库接近的数据副本。读写分离时，写请求走主库，部分读请求走从库。这里的关键是复制延迟：刚写入的数据，可能还没同步到从库，用户立刻读取就可能看不到。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '一个博客系统有两台 Web 服务器 A、B 和一个负载均衡器。用户访问文章页，负载均衡器发现 A、B 都健康，就把一部分请求发给 A，一部分发给 B。如果 A 发布失败，健康检查开始返回 500，负载均衡器把 A 摘除，流量继续走 B，用户只感到容量下降，而不是全站不可用。',
          '数据库层有主库 M 和从库 R。作者发布文章时，应用写 M；普通读文章请求可以读 R。若作者发布后立刻刷新，读 R 可能因为复制延迟看不到新文章。解决办法可以是“写后读主库”、给用户短时间粘到主库，或者接受短暂最终一致。这就是机制推导出的取舍。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '负载均衡提升了 Web 层可用性，但它自己也要高可用，否则入口又成单点。多台 Web 服务器还要求应用尽量无状态，不能把登录会话只存在某台机器内存里。数据库复制提升读能力和恢复能力，但不能免费扩展写入；主库仍然是写瓶颈。',
          '常见坑是把“读写分离”说成必选答案，却不讨论复制延迟和读一致性。另一个坑是忽略故障切换：主库挂了，谁升主、应用连接怎么改、旧主恢复后如何避免双写，这些才是工程难点。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：“Web 层我会通过负载均衡横向扩展，并配健康检查做故障摘除；数据库层用主从复制提升读能力和恢复能力，但要明确写仍走主库，并处理复制延迟带来的读一致性问题。”'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '负载均衡和复制都在消除单点，但对象不同：一个分发请求，一个复制状态。多副本让系统更可靠，也让一致性、路由和故障切换变复杂。设计时要始终问：请求发到哪里，数据从哪里来，故障时谁接管。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么 Web 服务器更容易横向扩展，而数据库写入不容易？\n2. 用户刚修改昵称后立刻刷新，如果读到旧昵称，可能是什么原因？\n3. 负载均衡器自己的高可用应该如何考虑？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会把注意力转向响应速度：通过缓存和 CDN，把重复读取和静态资源压力从核心系统移开。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '03_node_change_affected_keys',
    categoryId: 'system-design',
    chapterId: 'part05_consistent_hashing',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能精确说明新增节点和删除节点分别影响哪段 key，能把一致性哈希的“局部迁移”转成可执行的数据搬迁流程，并识别故障时读写路由的风险。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '一致性哈希在节点变化时只改变相邻区间的归属。新增节点会接管它逆时针前驱到自己之间的 key；删除节点会把原本属于它的区间交给顺时针后继。其他节点负责的区间不变，所以缓存 miss 和数据迁移都被限制在必要范围内。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '系统扩容或故障下线时，真正麻烦的不是“多一台或少一台机器”，而是迁移范围是否可控。迁移范围越大，读路径越容易 miss，写路径越容易遇到双写或路由不一致，后台搬迁越容易拖垮网络和磁盘。',
          '我们希望新增机器时只把一部分压力转给它，而不是让所有 key 重新分布；也希望删除机器时只处理它原来负责的数据，而不是让整个集群重排。一致性哈希的局部区间性质正是为这个目标服务的。',
          '这里的“必要数据”有两个含义。第一，新增节点要拿到的，是它上线后真正负责的那段 key，不应该额外搬迁其他区间。第二，删除节点要处理的，是原来只能从它那里读到的那段 key，不应该让别的健康区间也重新洗牌。把影响范围压小，才能让迁移任务可限速、可暂停、可回滚。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '环上每个节点负责从它的逆时针前驱之后，到它自己位置为止的半开半闭区间。用数学写法就是：节点 B 负责 `(prev(B), B]`。查找 key 时顺时针找后继节点，等价于说 key 落在哪个节点的负责区间里。',
          '新增节点 D 时，它插入在前驱 P 和后继 S 之间。插入前，区间 `(P, S]` 全部由 S 负责；插入后，D 负责 `(P, D]`，S 只负责 `(D, S]`。因此需要迁移的只有 `(P, D]` 这段，来源通常是 S。',
          '删除节点 D 时，D 原来负责 `(P, D]`。删除后，从 P 顺时针会直接遇到 S，所以这段区间交给 S。需要迁移或恢复的也只有 D 原本负责的这段数据。对于缓存，这段可能只是重新预热；对于持久化存储，则要从副本或备份恢复。',
          '这个规则还能帮助估算迁移量。如果节点在环上分布足够均匀，删除一台真实节点大约影响 `1/N` 的 key；如果使用虚拟节点，影响会分散到多个小区间。估算迁移量很重要，因为它决定后台任务限速、网络带宽预留、迁移期间是否需要降低业务流量。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '仍用 0 到 99 的环：A=10、B=40、C=75。C 负责 `(40,75]`。如果新增 D=55，D 接管 `(40,55]`，这些 key 原先在 C 上，现在迁到 D；`(55,75]` 仍由 C 负责。假设这段里有 `order:8`、`user:20` 两个 key，它们迁移后，客户端按新环查找会直接去 D。',
          '删除 B=40 时，B 原来负责 `(10,40]`。删除后，这段交给 C，因为从这些 key 的位置顺时针走，遇到的第一个节点变成 C。A 和 C 的其他区间不需要动。迁移流程可以是：先在路由表中标记 B draining，禁止新写直接落 B；把 `(10,40]` 的数据复制到 C 或由 C 从副本拉取；校验完成后再从环上移除 B。',
          '如果系统支持副本，迁移还要考虑副本链。例如主副本按顺时针第一个节点选择，备副本选择后续两个不同故障域节点。新增 D 后，不仅主归属可能变化，某些 key 的第二、第三副本也可能变化。设计时要明确“迁移主数据”和“补齐副本”是两个动作，避免只迁主副本而留下副本布局不健康。',
          '故障下线更复杂，因为 B 可能已经不可读。此时不能依赖 B 推数据，必须依赖复制机制。例如每个 key 写入顺时针连续 3 个节点，那么 B 故障后，C 可以从后续副本或反熵修复中补齐缺失数据。',
          '工程上通常还会把计划下线和故障下线分开处理。计划下线可以先把节点标记为 draining：仍允许旧数据读取，但不再接收新分配区间，后台慢慢迁出。故障下线则需要立即把路由绕开坏节点，同时接受短时间内部分缓存变冷或部分副本需要修复的现实。两者都使用同一套环上区间规则，但操作顺序和风险不同。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '局部迁移降低了影响范围，但没有消除迁移成本。新增节点时，被接管区间的缓存仍会冷，持久化数据仍要搬，迁移期间仍要处理读旧位置还是新位置。常见工程做法是分阶段：先加入路由但限流接收，再后台迁移，再逐步放开流量。',
          '常见坑是只讨论新增，不讨论删除和故障。面试里如果只说“加节点只影响一小段”，但没有说坏节点上的数据从哪里来，会显得方案只适合缓存不适合存储。另一个坑是迁移和路由切换顺序错了：先切流再迁移会造成大量 miss，先迁移但不冻结写入又可能漏掉迁移期间的新写。',
          '还有一个坑是忽略客户端路由表刷新。即使服务端已经把新节点加入环，客户端或代理也可能持有旧环。解决办法通常是给环配置版本号，请求携带版本，服务端发现版本过旧时让客户端刷新；或者把路由集中在代理层，减少需要同步元数据的客户端数量。',
          '迁移监控也不能省。至少要看每个区间的待迁 key 数、迁移吞吐、失败重试、源节点和目标节点延迟，以及切流后 miss 或读失败是否异常。没有这些指标，就无法判断局部迁移是否真的局部可控。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：一致性哈希里每个节点负责前驱到自己的区间；新增节点只接管前驱到新节点的区间，删除节点只把自己的区间交给后继，因此节点变化时迁移范围是局部的。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '一致性哈希把节点变化转化为区间边界变化。理解“前驱、后继、负责区间”后，就能推导出新增、删除、故障恢复时的数据流，而不是只背一句“影响少量 key”。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 新节点 D 插入 P 和 S 之间时，数据应该从哪个节点迁来？\n2. 如果删除节点是突然宕机，为什么还需要副本机制？\n3. 迁移期间如何避免同一个 key 的新写落到旧位置？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会讨论虚拟节点：为什么真实节点很少时环上分布容易不均，以及如何用多个点位改善负载。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '03_partition_and_replication',
    categoryId: 'system-design',
    chapterId: 'part06_key_value_store',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能区分分片和复制，说明 key 如何定位到分片、副本如何放置，以及分片迁移和副本数量对系统容量、可用性、成本的影响。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '分片是把不同 key 分到不同节点，解决容量和吞吐；复制是把同一个 key 放到多个节点，解决可用性和读扩展。一个成熟 KV Store 通常先用一致性哈希或分片表确定 key 属于哪个分片，再把这个分片复制到多个故障域不同的节点上。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '单机放不下所有数据，也扛不住所有请求，所以必须分片。但只分片不复制会带来新风险：任何一台机器故障，它负责的 key 都不可用。只复制不分片也不够，因为每台机器仍然保存全量数据，容量和写吞吐无法扩展。',
          '分片和复制要一起设计。分片粒度太粗，迁移时一次搬太多；粒度太细，元数据和调度复杂。副本太少，故障风险高；副本太多，写放大和存储成本高。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '分片有两种常见方式。第一种是哈希分片：对 key 计算哈希，映射到逻辑 shard。它适合点查，负载通常均匀，但不支持按 key 范围扫描。第二种是范围分片：按 key 的字典序或业务范围切分，适合范围查询，但容易因为热点范围导致负载倾斜。',
          '逻辑 shard 通常再映射到物理节点。这样扩容时可以移动部分 shard，而不是改变所有 key 的算法。复制则为每个 shard 选择多个副本，例如主副本负责写入，从副本异步或同步复制；或者采用 leaderless 模式，让协调者向多个副本读写。',
          '副本放置要跨故障域。三个副本如果都在同一台物理机或同一机架，电源或交换机故障会一起失效。更合理的是跨机器、跨机架，甚至跨可用区，但距离越远，复制延迟越高。',
          '元数据也必须被认真管理。系统要知道每个 shard 当前有哪些副本、谁是 leader、哪些副本正在迁移、哪些副本已经落后。如果客户端拿到过期元数据，就可能把写入发到旧 leader，或者读到正在下线的副本。因此分片表通常带版本号，节点变更要通过明确的发布流程生效。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '假设有 1024 个逻辑 shard，key `cart:user123` 哈希后落到 shard-317。元数据服务记录 shard-317 的三个副本在 node-a、node-f、node-k，其中 node-a 是 leader。写入时，路由层找到 shard，再把请求发给 leader；leader 写本地日志后复制给 follower，达到确认条件后返回。',
          '扩容时新增 node-m 和 node-n，不需要改变 key 的哈希算法。调度器可以把部分 shard 从旧节点迁到新节点，例如把 shard-317 的一个 follower 从 node-f 迁到 node-m。迁移期间，新 follower 先复制快照，再追增量日志，追平后更新元数据。',
          '如果 node-a 故障，系统可以把 node-f 提升为 leader。客户端不用知道所有细节，只要路由层刷新元数据，之后同一个 key 仍然定位到 shard-317，只是 leader 变了。',
          '如果这是范围分片，迁移方式会不同。比如按用户 ID 范围切分，`user:0-999999` 在 shard-1。某个大客户让这个范围变热，系统可能要把范围切成两段，而不是简单移动整个 shard。范围分片的优势是能扫描相邻 key，代价是需要持续监控热点并动态切分。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '哈希分片均匀但牺牲范围查询；范围分片支持扫描但要处理热点和切分。主从复制语义清楚，但 leader 是写入瓶颈；leaderless 可用性更强，但读写要处理版本冲突。',
          '常见坑是把“分片数”等同于“机器数”。如果直接 `hash % machine_count`，扩容会回到普通哈希的问题。更稳妥的是固定较多逻辑分片，再把逻辑分片调度到机器。另一个坑是只说三副本，却不说副本放置策略；三副本放在同一故障域，真实可靠性提升很有限。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：分片把 key 空间拆开以扩展容量和吞吐，复制把同一份数据放到多个故障域以提高可用性；工程上常用逻辑 shard 加副本放置表，避免扩容时全局重哈希。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '分片和复制分别回答“数据放哪一份”和“同一份放几处”。前者决定扩展性，后者决定故障承受能力。真正的设计要把路由、迁移、副本放置和故障域一起考虑。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么逻辑 shard 数量通常大于物理机器数？\n2. 哈希分片和范围分片分别适合什么查询模式？\n3. 三副本为什么不应该放在同一个机架？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会进入 Quorum、版本号和向量时钟，讨论副本不一致时如何读写和检测冲突。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '03_qps_and_storage_estimation',
    categoryId: 'system-design',
    chapterId: 'part02_estimation',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '本节要用一个类 Twitter 的信息流系统练习估算方法。你要能从日活、发帖频率、读写比例推导 QPS，从内容大小、保留时间和副本数推导存储，并把估算结果反过来影响架构选择。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          'QPS 估算通常从用户行为出发：多少用户、每天做几次操作、峰值是平均值的几倍。存储估算从单条数据大小、每日新增量、保留周期、副本和索引放大出发。估算不是面试中的附属环节，它会决定是否需要缓存、队列、分片、CDN 和异步 Fanout。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '如果不估算，信息流系统很容易答成“发帖写数据库，读的时候查关注的人”。这个方案在用户很少时可行，但当用户关注上千人、Feed 每秒被刷几十万次时，临时聚合会压垮数据库。相反，如果写入很少、读取极多，提前生成 Feed 可能更划算。',
          '估算的目的就是判断读写压力在哪里。Twitter 类系统通常读多写少，但少数大 V 的一条帖子会影响大量粉丝。普通用户和超级用户的分布不均，是信息流设计的核心压力来源。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          'QPS 推导可以分三步。先算平均：日操作次数除以一天 86400 秒。再乘峰值系数，比如 3 到 10 倍。最后按接口拆分：发帖、读时间线、点赞、关注、图片加载。读写比例不同，优化方向不同。',
          '存储推导也分层。文本内容、用户 ID、时间戳、状态等组成原始数据；索引支持按用户和时间查询；副本用于可靠性；缓存和预计算 Feed 会额外占空间。图片和视频不要混在帖子表里估，要按对象存储和 CDN 带宽单独估。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '假设日活 1000 万，每人每天刷时间线 20 次，发帖 0.2 次。读时间线日请求约 2 亿次，平均 QPS 约 2315；按峰值 5 倍算，约 1.2 万 QPS。发帖日请求 200 万次，平均 QPS 约 23，峰值约 100 到 200。这个系统明显读压力远高于写压力。',
          '存储上，假设每条帖文本和元数据 1 KB，每天 200 万条，原始文本约 2 GB/天，一年约 730 GB。三副本加索引可能到几 TB，仍可控。真正重的是图片：如果 20% 帖子带 500 KB 图片，每天图片约 200 GB，一年约 73 TB，三副本更高。因此图片应进对象存储和 CDN，帖子表只保存引用。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '估算结果会引导架构。读时间线 QPS 高，可以缓存热门用户资料和时间线片段；发帖 QPS 低但 Fanout 可能很重，可以用队列异步把帖子写入粉丝收件箱。对大 V，完全写扩散可能产生百万级任务，需要特殊路径，如读时合并或混合 Fanout。',
          '常见坑是把平均 QPS 当峰值，导致系统一到晚高峰就崩。另一个坑是忽略大对象，把图片视频按文本估算。还有一个坑是只算帖子存储，不算 Feed 预计算、搜索索引、备份和日志。面试里要主动说明假设，数字可以粗，但维度不能少。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：“我会从用户行为估平均 QPS，再用峰值系数放大，并拆成读时间线和发帖两类。存储上分文本元数据和媒体对象分别估算，再加副本、索引和缓存放大，用结果决定读缓存、异步 Fanout 和对象存储。”'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          'QPS 和存储估算把产品行为翻译成系统压力。类 Twitter 系统的关键不是发帖本身，而是读多写少、粉丝分布不均和媒体内容巨大。估算越贴近访问模式，架构选择越有说服力。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 如果日活翻倍但发帖频率不变，读写压力分别如何变化？\n2. 为什么大 V 发帖会让写扩散方案遇到特殊压力？\n3. 图片和视频为什么要单独估算存储与带宽？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一部分会转向系统设计面试流程：如何先澄清范围，再逐步提出高层设计和深入重点。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '03_reliability_and_controls',
    categoryId: 'system-design',
    chapterId: 'part10_notification_system',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能解释通知系统里的重复、丢失、乱序和打扰是怎么产生的，并能设计幂等、重试、死信队列、频控、合并、退订和免打扰机制。你还要能说明可靠性不是无限重试，而是按通知类型做分级保证。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '通知可靠性的目标不是“每条都强行送达”，而是重要通知尽量送达，重复通知尽量避免，失败原因可追踪，用户明确不想收到的通知不再发送。为了做到这一点，幂等、错误分类、延迟重试、死信队列、用户偏好和频控必须在主链路中，而不是事后补日志或补脚本。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '通知链路天然不是一次调用就结束。业务服务可能超时重试，队列可能至少一次投递，worker 可能在调用第三方后崩溃，第三方渠道可能返回模糊状态，设备 token 可能过期，用户也可能刚刚退订。没有幂等会导致重复通知；没有重试会丢掉临时失败；没有错误分类会反复重试永久失败；没有用户控制会造成投诉和退订。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '幂等用于抵抗重复提交。通知服务为业务事件生成稳定 key，例如 `order_paid:order_id:user_id`，创建任务前先查是否已存在。重复请求返回同一条通知记录，而不是创建新任务。队列消费也要幂等，worker 在发送前检查任务状态，避免崩溃恢复后重复投递。',
          '重试要基于错误类型。网络超时、第三方 5xx、限流属于临时失败，可以指数退避；token 无效、用户退订、模板缺失、手机号格式错误属于永久失败，不应继续发送。重试次数耗尽后进入死信队列，保留上下文供排查。用户控制包括订阅、黑名单、免打扰、时区、渠道偏好和频控。频控可以按用户、通知类型、活动和渠道设窗口，例如 10 分钟内合并点赞通知。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '一个支付成功通知提交后，通知服务写入任务，但业务服务没收到响应，于是重试。同一个幂等键命中已有记录，系统不会再创建第二条。worker 发送 push 时 APNs 返回临时 503，任务 1 分钟后重试；第二次成功后状态变为 sent。另一个营销通知在发送前发现用户当天已收到 3 条活动消息，超过上限，于是状态记录为 suppressed_by_rate_limit，而不是静默丢弃。',
          '再看互动通知：10 个用户在 2 分钟内点赞同一帖子。系统可以先写入聚合窗口，最终发送“一些人赞了你的帖子”，减少打扰和发送成本。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '幂等检查增加一次读写，但能避免重复通知这种用户非常敏感的问题。强重试提升送达率，但如果不分类，会把故障放大成重试风暴。频控保护体验，却可能让业务方觉得通知“没发出去”，所以必须记录抑制原因。免打扰对普通通知很有价值，但安全通知是否绕过必须由产品和合规定义。',
          '常见坑是把发送成功等同于用户收到。第三方 accepted 只代表平台接收，不代表设备展示或用户阅读。另一个坑是退订只在邮件底部处理，push、短信和站内通知没有统一偏好模型。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：我会用幂等键防重复，用错误分类和指数退避处理临时失败，用死信队列保留不可自动恢复任务，同时把退订、免打扰、频控和合并放进发送前检查。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '通知可靠性是系统可靠性和用户体验的共同结果。重要通知需要可追踪、可重试，低价值通知需要可合并、可抑制。只有把每次发送尝试和每次拦截都记录下来，系统才能解释“为什么用户收到或没收到”。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 哪些错误应该重试，哪些应该直接标记永久失败？\n2. 如何设计“同一用户 10 分钟内最多收到一条点赞通知”？\n3. 发送成功、送达、打开和已读分别表示什么？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节看监控、安全和分析，重点是系统如何发现大面积静默失败，以及如何保护通知中的用户数据。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '03_service_discovery_one_to_one_flow',
    categoryId: 'system-design',
    chapterId: 'part12_chat_system',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能说明用户连接到 gateway 后系统如何记录连接位置，并能描述一条一对一消息从发送方到接收方的完整流程。你还要能处理接收方在线、离线、多设备在线和 gateway 故障几种情况。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '一对一聊天的关键问题是：消息写入后，服务端如何把它推给正确的在线设备。WebSocket 连接挂在某台 gateway 上，所以系统需要 connection registry 或 presence 服务保存 user_id、device_id、gateway_id、connection_id 的映射，并用心跳和 TTL 保持新鲜。可靠流程应该是先持久化，再投递；实时推送失败时，接收方仍能靠补拉拿到消息。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '服务端集群里有很多 gateway。负载均衡只在建立连接时知道客户端去了哪台机器，消息服务本身不一定持有连接。如果 A 的消息写入后不知道 B 在哪台 gateway 上，就无法实时推送。连接还会因为网络切换、应用退后台、gateway 重启而失效，因此连接注册不能永久有效，必须能过期和刷新。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '客户端连接 gateway 后，gateway 验证 token，创建 connection_id，并把 user_id、device_id、gateway_id、connection_id、最后心跳时间写入 registry。记录带 TTL，心跳刷新。发送消息时，gateway 把客户端包交给消息服务；消息服务做会话权限和幂等检查，写入消息表并生成 sequence；写入成功后发布投递事件。',
          '投递 worker 查询接收方连接。若在线，它通过内部 RPC、消息总线或 gateway 路由把消息发给对应 gateway，再由 gateway 推给客户端。若用户有多个设备，投递给所有在线设备；离线设备以后按 last_seen_sequence 补拉。若 registry 记录过期或 gateway 推送失败，系统不反复在线推送，而是依赖存储和补拉保证最终收到。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          'B 同时在手机和电脑登录。手机连接 gateway-1，电脑连接 gateway-3，registry 中有两条记录。A 发消息后，消息服务写入 sequence 208，投递 worker 查到 B 的两个在线设备，分别把消息路由到 gateway-1 和 gateway-3。gateway-1 推送成功，gateway-3 发现连接已断，返回失败。系统记录电脑设备未送达，但不创建第二份消息。B 电脑重连时带 last_seen_sequence 205，服务端返回 206 到 208 的缺失消息。',
          '这说明在线投递是优化实时性，消息存储才是可靠性的来源。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          'registry 放 Redis 简单高效，但要处理 TTL、心跳频率和误判离线；专门 presence 服务能力更强，但系统复杂度更高。推送到所有设备体验一致，但会增加投递 fanout；只推当前活跃设备成本低，却会让多端状态不一致。服务端记录 delivered_to_device 可以提升状态展示，但强一致维护每个设备状态会让链路变重。',
          '常见坑是 registry 记录不设 TTL，异常断线后用户永远在线。另一个坑是推送前不入库，导致 gateway 崩溃时消息消失。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：一对一投递依赖 connection registry 定位用户设备所在 gateway，但可靠性靠消息先落库；在线就实时推送，离线或推送失败就根据 sequence 补拉。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '服务发现解决“人连在哪”，消息存储解决“消息是什么”。把两者分开，系统才能在连接抖动、节点故障和多设备在线时保持消息不丢。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. connection registry 里的记录为什么必须有 TTL？\n2. 发送方收到服务端 ack 时，能说明接收方在线吗？\n3. gateway 推送后崩溃，客户端如何补齐可能遗漏的消息？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节扩展到多设备和群聊，讨论同步游标、消息放大、成员变更和历史可见性。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '03_snowflake_deep_dive',
    categoryId: 'system-design',
    chapterId: 'part07_unique_id',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能拆解 Snowflake ID 的位分配，说明生成流程，计算单机吞吐上限，并解释时钟回拨、机器 ID 分配和序列号耗尽的处理方式。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          'Snowflake 用一个 64-bit 整数承载时间、机器和序列三类信息。典型结构是符号位不用，41 位时间戳，10 位机器 ID，12 位毫秒内序列号。它让每台机器无需中心服务即可生成趋势递增且全局唯一的 ID，但正确性依赖机器编号唯一和时钟单调。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '高并发业务不能每生成一个 ID 都访问中心数据库，否则中心点会限制吞吐并放大故障。完全随机的 ID 虽然去中心化，但不利于数据库索引，也不方便排查。Snowflake 试图在两者之间取平衡：本地生成、短整数、按时间大体递增。',
          '挑战在于多台机器同时生成 ID。要不重复，ID 中必须包含能区分机器和同一时间内多次生成的字段；要趋势递增，时间字段必须放在高位；要控制长度，总位数又不能无限扩张。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '常见位分配是：1 位符号位固定为 0，41 位毫秒时间戳，10 位 worker ID，12 位 sequence。时间戳通常不是 Unix epoch 的完整毫秒，而是减去自定义起始时间，延长可用年限。41 位毫秒大约可用 69 年。10 位 worker 支持 1024 个节点。12 位序列号表示同一毫秒内每个节点最多生成 4096 个 ID。',
          '生成流程如下：读取当前毫秒 `now`；如果 `now` 大于上次时间，序列号归零；如果等于上次时间，序列号加一；如果序列号超过 4095，就等待下一毫秒；如果 `now` 小于上次时间，说明时钟回拨，需要拒绝、等待、切换备用时钟或使用回拨标记策略。最后把三个字段左移拼接成整数。',
          '解析时也很直接：右侧低 12 位是序列号，再往上 10 位是 worker，剩下高位是时间差。这个可解析性对排查很有用，可以从 ID 判断大致生成时间和节点。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '假设自定义 epoch 是 2024-01-01，当前距离 epoch 过去了 1000 毫秒，worker ID 是 17，本毫秒内第 5 次生成。ID 可以理解为：',
          '`timestamp=1000 | worker=17 | sequence=5`',
          '真实拼接会把 timestamp 左移 22 位，把 worker 左移 12 位，再加上 sequence。下一次如果仍在同一毫秒，sequence 变成 6；如果进入下一毫秒，timestamp 变成 1001，sequence 归零。因为时间在高位，后一个毫秒生成的 ID 通常比前一个毫秒更大。',
          '如果某台机器在同一毫秒内请求超过 4096 个 ID，sequence 用完，生成器不能继续加到 4096，因为 12 位放不下。它必须阻塞到下一毫秒，或者提前通过更多序列位、更多节点分摊流量来提高容量。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          'Snowflake 的优点是本地生成、吞吐高、64-bit、趋势递增、可解析。代价是依赖时钟和 worker ID 管理。时钟回拨是最常见风险：如果机器时间从 10:00:01 回到 10:00:00，而序列号又从 0 开始，就可能生成和过去相同的 ID。',
          'worker ID 也必须全局唯一，不能靠人工随便写配置。工程上可以用配置中心、注册中心或启动时租约分配，并在节点重启、容器扩缩容时保证不会重复。另一个坑是把 Snowflake ID 暴露为 JavaScript number，导致精度丢失；对外 API 更稳妥地用字符串。',
          '还有隐私取舍。Snowflake 可解析时间和机器信息，方便排查，也可能暴露业务节奏。面向外部用户的订单展示号可以再做混淆或另生成。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：Snowflake 把 64-bit ID 拆成时间戳、机器 ID 和毫秒内序列号，靠时间高位实现趋势递增，靠机器位和序列号避免冲突；核心风险是时钟回拨、worker ID 重复和单毫秒序列耗尽。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          'Snowflake 是高并发 ID 生成的经典折中：比数据库自增更分散，比 UUID 更短且更有序。它适合内部主键和日志追踪，但需要严肃处理时钟、机器编号和对外暴露问题。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 41 位毫秒时间戳为什么要配合自定义 epoch？\n2. 同一毫秒内 sequence 用尽时，为什么不能直接继续递增？\n3. 容器环境下 worker ID 分配比物理机环境更容易出什么问题？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一部分会进入短链接系统，先从需求、容量估算和 API 边界开始设计。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '03_token_leaky_fixed_window',
    categoryId: 'system-design',
    chapterId: 'part04_rate_limiter',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '本节要讲清固定窗口、漏桶和令牌桶三种基础限流算法。你要能解释每种算法如何更新状态、怎样决定放行，以及它们对突发流量、公平性和实现复杂度的影响。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '固定窗口实现最简单，但窗口边界会产生突刺；漏桶把请求按稳定速率流出，适合平滑下游压力，但会增加排队或丢弃；令牌桶按固定速率补充令牌，允许一定突发，是工程中非常常用的选择。算法选择取决于你是想严格平滑流量，还是允许短时突发但限制长期平均速率。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '限流不是简单计数。不同业务对突发的容忍度不同。搜索接口可能允许用户短时间连续输入几次；短信接口不希望突发；下游数据库需要平滑压力；开放 API 平台更关心长期配额公平。如果算法行为和业务不匹配，要么误杀正常用户，要么保护不了后端。',
          '同样是“每分钟 100 次”，固定窗口、滑动窗口、令牌桶的实际放行曲线不同。面试中如果只说“用 Redis 计数”，没有说明边界行为，就没有真正回答限流算法。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '固定窗口按时间切桶，例如每分钟一个 key：`user:123:12:01`。请求来时计数加一，超过阈值拒绝。它状态少、实现简单，适合粗粒度配额。但用户可以在 12:01:59 发 100 次，12:02:00 再发 100 次，短时间内形成 200 次突刺。',
          '漏桶把请求想成进水，把处理想成按固定速率出水。桶满时新请求被拒绝或排队。它让下游看到稳定速率，但用户可能等待。令牌桶则按固定速率往桶里放令牌，桶有容量上限；请求消耗令牌，有令牌放行，没有令牌拒绝。桶容量决定允许的突发大小，补充速率决定长期平均速率。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '假设规则是每秒平均 10 次，允许最多 50 次突发。令牌桶容量设 50，补充速率每秒 10 个。用户空闲 5 秒后，桶里最多 50 个令牌；接下来瞬间发 40 个请求，都能通过，因为它们消耗已有令牌。随后如果继续每秒 100 个请求，令牌很快耗尽，之后只能按每秒约 10 个通过。',
          '如果换成漏桶，每秒只流出 10 个请求。瞬间 40 个请求会进入队列，桶容量够就排队慢慢处理，不够就拒绝。它保护下游更稳定，但会让用户等待。固定窗口则可能在窗口切换时允许更大突刺，实现简单但边界不平滑。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '固定窗口适合简单配额和低风险场景；漏桶适合保护必须稳定处理的下游；令牌桶适合允许用户短时突发但控制长期平均的 API。令牌桶也不是万能：桶容量太大，突发会压垮后端；容量太小，用户体验变差。',
          '常见坑是混淆漏桶和令牌桶。漏桶强调稳定输出，令牌桶强调积累许可后允许突发。另一个坑是忽略时钟和原子性：分布式环境下多个实例同时更新计数，如果没有原子操作，可能放行超过限制。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：“固定窗口简单但有边界突刺；漏桶能平滑输出但可能排队；令牌桶通过补充速率限制长期平均，通过桶容量允许有限突发。若是 API 限流，我通常会优先考虑令牌桶或滑动窗口，并说明突发容量。”'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '限流算法决定流量曲线。固定窗口便宜但粗糙，漏桶平滑但牺牲等待时间，令牌桶在突发和平均速率之间更灵活。选算法时要从业务能否接受突发和排队开始。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 固定窗口为什么会在窗口边界产生突刺？\n2. 漏桶和令牌桶最核心的行为差异是什么？\n3. 令牌桶的容量和补充速率分别控制什么？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会继续深入滑动窗口算法，讨论如何用更高内存成本换取更平滑、更准确的限流判断。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '03_transcoding_dag',
    categoryId: 'system-design',
    chapterId: 'part14_youtube',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你应该能解释视频转码为什么必须异步化，如何用 DAG 表达解析、转码、切片、封面、字幕和审核之间的依赖，以及并行执行、重试、幂等和资源控制为什么是转码系统的核心。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '转码是把用户上传的原始视频变成平台可稳定播放的标准输出。它包括解析格式、生成多清晰度、多码率版本、切片、生成封面、处理音轨字幕、内容审核和发布元数据。这个流程耗时长、资源重、步骤多，不适合放在上传请求里同步执行。',
          'DAG，也就是有向无环图，适合描述转码工作流。必须先做的步骤串起来，可以同时做的步骤并行跑。失败时只重试相关节点，而不是重跑整个视频。转码系统的设计重点不是“起几个 worker”，而是依赖、状态、重试和资源隔离。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '用户上传的视频格式不可控：编码、分辨率、帧率、音频轨、旋转信息、容器格式都可能不同。播放器如果直接播放原文件，会遇到兼容性和网络适配问题。平台需要输出标准格式，并为不同网络准备不同码率，让播放器能在清晰度和流畅度之间切换。',
          '同时，转码非常消耗 CPU、GPU 和 I/O。一个长视频可能处理几十分钟。如果同步执行，上传接口会超时，用户连接会断，失败后也难以恢复。异步任务让上传先完成可靠保存，再由后台按照资源情况慢慢处理。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '一个简化 DAG 可以这样组织：第一步解析原始文件，得到时长、编码、分辨率和音轨；随后并行生成 360p、720p、1080p 视频，也可以同时生成封面和预览图；每个清晰度完成后进入切片任务；所有必需切片完成后生成播放清单；审核通过后更新视频状态为可播放。',
          'DAG 调度器要保存每个节点的输入、输出、状态、依赖、重试次数和错误信息。节点只有在依赖完成后才能运行。worker 执行任务时要幂等，输出路径应由视频 ID、版本和任务类型确定，重复执行不会产生冲突。状态更新也要带版本，防止旧任务覆盖新任务结果。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '一个 20 分钟视频上传完成后，调度器创建工作流 `video_123_v1`。解析节点成功后，系统发现原视频是 1080p，于是创建 360p、720p、1080p 三个转码节点，同时创建封面节点。360p 很快完成并切片，720p 也完成，1080p 因 worker 崩溃失败。',
          '此时系统不需要重跑解析、封面和低清晰度转码。调度器只重试 1080p 节点。若业务允许低清晰度先上线，审核通过后可以先发布 360p/720p，并把 1080p 标记为继续处理中。用户能观看，后台也保留继续补齐高码率版本的能力。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '并行能缩短处理时间，但会增加资源峰值。高峰期如果所有视频都同时生成所有清晰度，转码集群会被打满。系统需要优先级和配额：短视频、热门创作者、付费用户或即将发布的视频可以优先；低播放预期的视频可以延迟生成高码率。',
          '常见坑是忽略幂等和部分失败。队列重复投递、worker 写完文件后崩溃、调度器超时重发都很常见。如果任务输出路径不确定，重复执行可能留下脏文件；如果元数据提交不是条件更新，旧任务可能把新版本状态覆盖掉。另一个坑是要求所有版本都成功才上线，这会让一个不重要的高码率失败阻塞整个视频。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：转码是资源重、耗时长、依赖复杂的异步流程，我会用 DAG 记录每个处理节点的依赖和状态，让不同清晰度并行执行，失败只重试相关节点，并通过幂等输出和资源配额保证稳定。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          'DAG 让视频处理从一串难以恢复的脚本，变成可观察、可重试、可并行的工作流。转码系统要同时关注输出兼容性、处理速度、资源成本和失败恢复。能否正确处理部分成功，往往决定用户是否能尽早看到可播放视频。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么不能在上传接口里同步完成转码？\n2. 1080p 转码失败时，是否应该阻止 360p 版本上线？\n3. 转码任务重复执行时，如何避免冲突文件和错误状态？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节讨论视频系统的速度、安全和成本优化，重点看 CDN、自适应码率、签名 URL 和分层存储。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '03_trie_optimization',
    categoryId: 'system-design',
    chapterId: 'part13_autocomplete',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你应该能解释 Trie 为什么适合前缀查询，为什么“找到前缀节点”还不够，如何在节点上缓存 Top K，把自动补全请求变成稳定的内存读取，以及这种方案在空间、更新、分片和实时性上会付出什么代价。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          'Trie 把字符串按字符路径组织起来，用户输入的前缀天然对应树上的一条路径。输入 `app`，服务沿着 `a -> p -> p` 找到节点，这一步的成本主要取决于前缀长度，而不是候选词总数。但如果找到节点后再遍历整棵子树、收集所有词并排序，在线延迟仍然不可控。',
          '真正让 Trie 适合生产自动补全的，是在每个前缀节点预先保存该前缀下最值得展示的 Top K。查询时只需走路径、读列表、做少量过滤。代价是空间放大和更新复杂：一个词会写入多个前缀节点，热度变化也要影响多个列表。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '前缀查询看起来简单，实则容易被“候选集合大小”拖垮。`xqz` 这种冷门前缀候选很少，怎么查都快；`a`、`app`、`new` 这类热门前缀可能挂着成千上万条候选。如果在线阶段才排序，短前缀请求会集中消耗 CPU，延迟也会随着词库增长而变差。',
          '此外，自动补全只需要前几条建议，不需要完整结果集。为 `app` 找到十万条以 `app` 开头的词没有意义，用户只会看到前 8 条。问题就从“如何找到所有匹配词”转成“如何最快拿到已经排好序的少量候选”。这正是 Top K 缓存要解决的事。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '构建 Trie 时，每个词从根节点沿字符插入。比如 `application` 会经过 `a`、`ap`、`app`、`appl` 等节点。每个节点维护一个候选列表，列表元素包含词、分数、语言地区、业务标签和必要展示信息。构建阶段根据热度分数把词加入它所有前缀节点的候选集合，再截断到 Top K 或 Top N。',
          '查询流程很短：规范化前缀，沿 Trie 字符路径定位节点，若路径不存在则返回空或回退更短前缀；若节点存在，读取缓存候选，按实时规则过滤不可见内容，返回前 K 条。为了过滤后仍够展示，节点通常不只存前端展示数量，而是多存一些备用项，例如前端展示 8 条，节点保存 20 或 50 条。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '词库中有 `apple`、`app store`、`application`、`apply coupon`，分数分别来自搜索频次、点击率和近期趋势。后台构建时，这些词都会影响 `a`、`ap`、`app` 节点。假设 `app store` 分数最高，`apple` 次之，那么 `app` 节点的 Top K 会把它们排在前面。',
          '用户输入 `app` 时，服务不会查全库，也不会遍历 `app` 子树。它只走三步到 `app` 节点，取出已经排好的列表。若 `app store` 在某地区不可用，查询时把它过滤掉，再用节点里第 9 或第 10 个候选补位。这说明节点保存备用候选很重要，否则过滤后页面可能只剩两三条。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          'Trie + Top K 的主要成本是内存和构建时间。词越长，写入的前缀节点越多；K 越大，节点列表越大；支持多语言、多地区、个性化后，索引可能按维度成倍增长。更新也不便宜，一个词热度上升后，不只叶子节点要改，它的所有前缀节点都可能要重新排序。',
          '常见坑是说“用 Trie，查询 O(m)”就结束。O(m) 只覆盖定位前缀节点，不覆盖排序和过滤。如果节点不缓存 Top K，实际查询仍可能慢。另一个坑是直接实时修改主 Trie。高频增量更新会让多机版本一致、并发写和回滚都变复杂，生产中常用定期全量快照加实时覆盖层的折中。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：Trie 解决的是前缀定位，节点 Top K 缓存解决的是在线排序成本；我会在构建阶段把热门候选写入各前缀节点，查询时只读内存列表并轻量过滤，用空间放大和更新延迟换稳定低延迟。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          'Trie 的价值不在于名字，而在于它把前缀变成路径。Top K 缓存进一步把复杂排序移到构建阶段。这个方案适合读多写少、低延迟要求高的自动补全，但必须说明空间放大、更新传播、过滤补位和分片倾斜。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 如果每个节点只存 5 条候选，过滤后不够展示怎么办？\n2. 实时热词应该直接改主 Trie，还是作为覆盖层合并？\n3. 按首字母分片和按哈希分片分别会带来什么问题？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节把自动补全放进生产环境，讨论日志质量、热点缓存、敏感过滤、分片和故障降级。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '03_url_frontier_scheduling',
    categoryId: 'system-design',
    chapterId: 'part09_web_crawler',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能解释 URL frontier 为什么是爬虫的调度中心，并能设计包含优先级、礼貌性、重抓周期和失败重试的 URL 状态模型。面试中你要能说明 frontier 不是普通队列，而是决定“何时抓、先抓谁、暂时不抓谁”的控制面。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          'URL frontier 管理的是抓取秩序。它既要提高覆盖率和新鲜度，又要避免压垮目标站点，还要把失败 URL 安排到合适时间重试。一个简单 FIFO 队列无法表达“这个 host 10 秒后才能抓”“这个首页每 5 分钟重抓一次”“这个 URL 已经 429，明天再试”“这个旧归档页优先级降低”这些规则。因此，frontier 更像调度系统，而不是待办清单。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '爬虫面对的 URL 数量通常远大于可立即抓取的容量。若只按发现顺序抓，热门首页可能被埋在大量低价值详情页后面，新内容发现变慢；若只按优先级抓，又可能连续请求同一站点，引发封禁；若失败后立即重试，会在对方故障时制造重试风暴。调度问题来自多种压力的冲突：新鲜度、覆盖率、礼貌性、失败恢复和资源成本不能同时最大化。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          'frontier 的核心数据包括 URL、host、状态、优先级、next_fetch_time、last_fetch_time、失败次数、重试原因、内容变化历史。调度器先筛选 next_fetch_time 已到的 URL，再按 host 的 next_allowed_time 和并发上限过滤，最后根据优先级取出一批任务交给 downloader。',
          '常见实现会按 host 分桶。每个 host 有自己的小队列、并发计数和下一次允许抓取时间；全局调度器从多个可用 host 中轮转取任务。重抓策略则根据页面类型和历史变化决定 revisit interval：首页和频道页短，旧文章长。失败重试使用指数退避，临时错误延后再试，永久错误标记终态。大规模场景下，持久化存储保存全量 URL 元数据，内存队列只维护近期可抓候选。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '系统有三个 host：A 新闻站、B 博客、C 文档站。A 首页每分钟变化，文章页每天变化；B 经常返回 429；C 很稳定但页面很多。frontier 会给 A 首页较高优先级和短重抓周期，但仍要求同一 host 两次请求间隔至少 2 秒。B 一旦出现 429，host 级 next_allowed_time 被推迟，相关 URL 使用退避重试。C 的大量低优先级页面被慢慢抓，不能挤占高价值页面。',
          '当 downloader 报告 A 的某篇文章 500，frontier 记录失败次数为 1，10 分钟后重试；如果连续失败 5 次，则延后到第二天或进入人工观察。这个流程让失败变成调度输入，而不是日志里的噪声。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '按 host 分桶能保护目标站点，但会让调度实现复杂，需要处理 host 队列为空、热门 host 积压、全局吞吐不足等问题。优先级越精细，越需要可靠的评分和监控；评分过度依赖旧规则，会让新站点长期没有机会。布隆过滤器能节省 URL 去重内存，但有误判，可能导致少量新 URL 被当作已见过而漏抓。',
          '常见坑是把重试任务直接塞回队头，导致故障站点反复占用 worker。另一个坑是只做全局 QPS，不做 host 级限制；整体 QPS 看起来不高，但某个小站点可能被瞬间打满。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：frontier 是爬虫的调度器，我会按 host 维护队列和礼貌性约束，再结合 URL 优先级、下一次可抓时间和失败退避，决定 downloader 每一轮拿到哪些任务。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          'URL frontier 把无限候选 URL 转换为有节奏的抓取计划。它的质量直接决定爬虫的新鲜度、稳定性和对外部站点的友好程度。普通队列解决“存放任务”，frontier 解决“正确调度任务”。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 如果某个站点持续返回 429，frontier 应该调整 URL 级还是 host 级状态？\n2. 布隆过滤器误判会带来什么后果？哪些业务可以接受？\n3. 如何根据历史内容变化动态调整重抓周期？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节聚焦 downloader，看看网络请求如何用超时、重试、限流和结果结构化把外部不确定性挡在系统边界上。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '04_cache_and_cdn',
    categoryId: 'system-design',
    chapterId: 'part01_scale_from_zero',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '本节要让你理解缓存和 CDN 为什么能显著降低延迟与后端压力。你要能区分应用缓存、数据库缓存、浏览器缓存和 CDN 的位置，也要知道缓存命中、过期、失效和一致性会怎样影响系统行为。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '缓存的本质是把可重复使用的数据副本放到离请求更近、读取更快的位置；CDN 是面向静态资源和边缘节点的缓存网络。它们解决的不是所有问题，而是“重复读太多、源站太远、数据库压力太大”的问题。缓存提升速度和容量，代价是数据可能过期、失效逻辑复杂、故障时会把流量突然打回源站。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '很多系统的读请求远多于写请求。热门文章、商品详情、头像、CSS、图片和视频会被大量重复访问。如果每次都查数据库、读对象存储、跨地区传输，系统会在同样的数据上浪费大量 CPU、IO 和带宽。用户离服务器越远，网络往返延迟越明显。',
          '缓存出现是因为“权威数据”和“读取副本”可以分开管理。权威数据需要准确和持久，缓存副本追求快速和就近。只要业务能接受一定过期窗口，或者能在写入后主动失效缓存，就可以把大量读压力挡在核心系统外面。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '应用缓存通常放在应用和数据库之间。请求先查缓存，命中就直接返回；未命中再查数据库，把结果写入缓存，并设置过期时间。常见策略是 cache-aside：应用负责读缓存、读数据库、回填缓存。写入时可以先写数据库，再删除缓存，避免旧值继续被读到。',
          'CDN 位于用户和源站之间，缓存图片、脚本、样式、视频等静态或半静态内容。用户请求资源时，先访问离自己近的 CDN 节点；节点有副本就直接返回，没有就回源站拉取并缓存。浏览器缓存则在用户设备上，减少重复下载。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '一个商品详情页每秒被访问 5000 次，但商品价格每小时才变几次。没有缓存时，每次请求都查数据库，数据库会被重复读拖慢。加入 Redis 后，请求先查 `product:123`。如果命中，应用直接返回商品名称、图片地址和库存摘要；如果未命中，查数据库并写入 Redis，过期时间设 5 分钟。',
          '商品图片则放对象存储并接 CDN。北京用户访问图片时，CDN 北京节点有缓存就直接返回；没有就回源拉取。这样数据库压力由详情数据缓存降低，源站带宽由 CDN 降低。若运营改了商品标题，应用写数据库后删除 Redis key；若替换图片，需要刷新 CDN 或使用带版本号的新 URL。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '缓存收益很大，但会引入一致性和稳定性问题。过期时间太短，命中率低；太长，用户看到旧数据。缓存集中失效会造成大量请求同时打到数据库，形成缓存雪崩。热点 key 被极高流量访问，可能压垮单个缓存节点。CDN 刷新也不是瞬时完成，全球节点可能存在传播延迟。',
          '常见坑是把缓存当成数据库使用，把唯一权威状态写在缓存里；或者只说“加 Redis”，却不说明 key 如何设计、何时失效、未命中如何回源。面试里要强调缓存是副本，必须围绕命中率、一致性和故障回退设计。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：“我会把高频重复读的数据放入缓存，把静态资源放到 CDN。请求先读离用户或应用更近的副本，未命中再回源；同时用过期时间、主动失效和监控来控制旧数据与回源压力。”'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '缓存和 CDN 都是在用副本换速度和容量。它们让系统少做重复工作，也让用户离数据更近。但缓存不是免费加速器，必须处理过期、一致性、穿透、雪崩和回源保护。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 哪些数据适合缓存，哪些数据不适合缓存？\n2. 写数据库后为什么常见做法是删除缓存，而不是直接更新缓存？\n3. CDN 缓存旧图片时，使用版本化 URL 有什么好处？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会讨论如何把用户会话等状态移出 Web 层，让多台 Web 服务器真正可以任意扩缩容。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '04_data_model_and_end_to_end_flow',
    categoryId: 'system-design',
    chapterId: 'part08_url_shortener',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能设计短链接映射表，串起创建、跳转、统计三条链路，并说明缓存、数据库、队列、风控和分片各自解决什么问题。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '短链接系统应该把创建链路、跳转链路和统计链路拆开。创建链路保证短码唯一和 URL 合法；跳转链路用缓存和数据库快速找到长 URL；统计链路异步消费访问事件。这样用户等待的路径短，后台分析和风控又能持续工作。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '短链接的写入和读取特征差异很大。创建短链需要校验 URL、生成短码、写数据库，失败可以让用户重试；跳转请求来自海量用户点击，延迟敏感，不能被统计写入或复杂风控拖慢；统计数据量巨大，但允许秒级甚至分钟级延迟。',
          '如果把所有事情放在一个同步请求里，跳转服务会变得脆弱：数据库慢会影响跳转，统计库慢也会影响跳转，风控外部服务抖动还会影响跳转。拆链路的目标就是让关键路径只做必须动作。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '核心映射表可以包含：`id`、`short_code`、`long_url`、`url_hash`、`created_by`、`created_at`、`expire_at`、`status`、`updated_at`。`short_code` 必须有唯一索引。`status` 用于启用、禁用、审核中、删除等状态。`expire_at` 用于自动过期。`url_hash` 可用于长 URL 去重。',
          '创建链路：客户端提交长 URL；API 校验协议、域名、黑名单和用户权限；生成短码；插入映射表；如果唯一索引冲突，重试或返回自定义短码已占用；成功后返回短 URL。可以异步预热缓存，但不是必须。',
          '跳转链路：请求到短链域名；服务提取 short_code；先查缓存；命中后检查状态和过期，返回 302；未命中查数据库，找到后写缓存，查不到则返回 404 并短暂负缓存。访问事件写入日志或消息队列，不阻塞返回。',
          '统计链路：消费者从队列读取事件，清洗 IP、User-Agent、Referer，按短码、分钟、地区、设备聚合，写入分析存储。原始日志可短期保留，聚合数据长期保存。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '用户创建短链时，服务生成 `a8K3xQ` 并插入数据库。数据库表中 `short_code=a8K3xQ`，`long_url=https://example.com/product/123`，`status=active`，`expire_at=2026-12-31`。返回后，用户把短链发到社交平台。',
          '一小时后大量用户访问 `/a8K3xQ`。第一批请求缓存未命中，服务查数据库并写入 Redis，TTL 设置到过期时间或一个较长默认值。后续请求直接从 Redis 拿到 long_url，返回 302。同时跳转服务把事件 `{code,time,ip,user_agent,referer}` 写入 Kafka。消费者异步计算每分钟点击量和地区分布。',
          '如果运营禁用该短链，管理服务更新数据库状态，并删除缓存。之后跳转请求重新查到 disabled 状态，返回 410 或安全提示页，而不是继续跳转。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '缓存能显著降低数据库压力，但带来失效问题。目标 URL、状态或过期时间变化时，要删除或更新缓存。负缓存能挡住扫描不存在短码的流量，但 TTL 不能太长，否则刚创建的新短码可能被旧的不存在缓存影响。',
          '数据库分片可以按 `short_code` 哈希，因为跳转查询主要按短码点查。按创建时间分片方便归档，但跳转时必须先知道时间，不适合主查询路径。统计库不应和映射库混在一起，否则海量访问事件会影响核心映射查询。',
          '常见坑是把访问计数同步更新在映射表里。热门短链每次点击都更新同一行，会造成写热点和锁竞争。更好的做法是事件异步聚合，控制台展示可接受短暂延迟。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：短链接架构分成创建、跳转、统计三条链路；映射表用 short_code 唯一索引，跳转先查缓存再查数据库并返回 302，访问事件写队列异步聚合，缓存失效、负缓存和限流保护高频读路径。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '完整短链接系统的关键是把低延迟跳转路径保护起来。数据库负责权威映射，缓存负责高频读取，队列负责统计解耦，风控和状态字段负责安全控制。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么访问计数不适合每次同步更新映射表？\n2. 负缓存 TTL 设置过长会带来什么问题？\n3. 短码映射表按 `short_code` 哈希分片有什么优势？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一部分会进入 Web Crawler，讨论如何定义抓取范围、调度 URL、去重并控制爬虫对目标站点的压力。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '04_downloader_robustness',
    categoryId: 'system-design',
    chapterId: 'part09_web_crawler',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能说明 downloader 在爬虫中的网络边界职责，并能设计超时、重试、重定向、限流、响应大小保护和失败分类。你还要能解释为什么 downloader 的目标不是每个页面都成功，而是在大量失败中保持系统可控。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          'downloader 是爬虫接触外部世界的组件。它面对的是不同质量、不同延迟、不同限制的网站，所以必须把不稳定网络转换成统一、可观察、可重试的 fetch result。它应该专注网络层：发请求、控连接、处理状态码、限制响应体、记录错误类型。页面语义、正文抽取和业务判断应交给 parser，否则组件边界会混乱。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '真实网页请求会以各种方式失败：DNS 超时、TLS 握手失败、连接被重置、服务器返回 500、响应很慢、重定向成环、内容类型标错、页面巨大到撑爆内存。若 worker 没有超时，少数慢站点就能占满线程；若重试不分类，404 会被反复请求；若不限制响应大小，一个异常页面可能拖垮进程。downloader 的鲁棒性来自承认失败是常态，并让每种失败都有清晰去向。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '请求前，downloader 从 frontier 获取 URL 和抓取配置，包括 host 限速、超时、最大响应体、允许的 content-type、最大重定向次数。请求中，它分别控制连接超时、读取超时和整体任务超时，并限制并发连接数。请求后，它把结果封装为 fetch result：原始 URL、最终 URL、状态码、响应头、内容长度、内容类型、抓取时间、错误类型、是否建议重试。',
          '错误分类是关键。网络抖动、连接重置、部分 5xx、429 通常是临时失败，可以延迟重试；404、410、robots 禁止、明确不支持的 content-type 通常是终态；重定向循环、响应过大、解压失败需要记录特殊原因。downloader 不直接决定全局策略，但要提供足够信息让 frontier 调整 URL 或 host 的状态。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '一个 URL 请求后返回 302，跳到 HTTPS，再跳到移动版，最后进入一个循环。downloader 在第 5 次重定向时停止，返回 `redirect_loop`，并记录已经访问过的跳转链。frontier 收到后不会立即重试，而是降低该 URL 优先级或标记失败。另一个 URL 返回 503，downloader 标记为临时失败，frontier 用指数退避安排 10 分钟后重试。如果同一 host 的 503 比例持续升高，系统可以触发 host 级降速或熔断。',
          '再看响应大小：某页面声明 HTML，但实际不断流式输出几十 MB。downloader 到达上限后中止读取，返回 `response_too_large`。这不是抓取失败的偶然细节，而是保护 worker、内存和存储的必要边界。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '超时设得太短会误伤慢站点，太长会降低吞吐；重试次数太少会丢掉临时可恢复页面，太多会制造重试风暴。全局限流简单，但 host 级限流更能体现礼貌性。保存完整响应头和错误原因会增加存储量，却能显著提升排障能力。',
          '常见坑是把所有非 200 都当失败重试，导致 404、403、robots 禁止被反复请求。另一个坑是 downloader 直接解析业务内容，结果 HTML 结构变化时网络层也要跟着改。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：downloader 的职责是把不可靠的外部 HTTP 世界包装成稳定的抓取结果；我会用超时、重试分类、重定向限制、响应大小保护和 host 级限流来保证失败可控，并把结果回写给 frontier。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '鲁棒 downloader 不追求“全部成功”，而是追求失败可分类、资源可保护、状态可回写。只要 downloader 输出结构化结果，调度、解析、监控才能基于事实做决策。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 哪些 HTTP 状态码适合重试？哪些应视为终态？\n2. 如果某个 host 平均延迟突然升高，downloader 和 frontier 分别能做什么？\n3. 响应体大小限制过低或过高分别有什么风险？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一部分进入通知系统，先从通知类型、触发场景、用户偏好和可靠性等级开始界定设计范围。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '04_monitoring_security_analytics',
    categoryId: 'system-design',
    chapterId: 'part10_notification_system',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能设计通知链路的核心监控指标和告警，说明模板、权限、日志、设备 token 和个人信息的安全边界，并理解投递分析如何反向优化通知策略。上线后的通知系统，最怕的是业务以为发了、用户没收到、系统也没报警。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '通知系统必须围绕完整链路建设可观察性：入口是否接收、队列是否积压、worker 是否消费、渠道是否成功、用户是否打开。只看发送请求量没有意义，因为任务可能卡在队列、被偏好拦截、被渠道限流或因 token 失效失败。安全上，通知内容经常包含订单、验证码、账号异常和联系方式，模板权限、日志脱敏和数据访问控制都必须严肃处理。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '通知失败常常是静默的。第三方渠道可能接受请求但延迟投递，某个 worker 版本可能把模板参数渲染错，营销活动可能让低优先级队列堆积，设备 token 清理不及时会让成功率持续下降。没有分层指标时，团队只能看到“用户说没收到”，却不知道问题发生在哪一段。',
          '安全风险也来自链路分散。任何业务都能发任意模板，就可能把内部字段发给用户；日志打印完整手机号和验证码，会让排障日志变成敏感数据仓库；模板后台没有审批，误改一次可能影响所有用户。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '监控分四层。入口层看请求量、拒绝量、幂等命中、参数校验失败和调用方分布。队列层看积压长度、最老任务等待时间、消费速率、重试数和死信数。渠道层看成功率、错误码分布、第三方延迟、限流比例和 token 失效率。用户层看到达率、打开率、退订率、投诉率和频控抑制量。',
          '告警要按通知类型分级。验证码失败率上升需要分钟级报警，营销队列延迟可以降速处理。安全机制包括调用方权限、通知类型白名单、模板版本审批、变量白名单、敏感字段脱敏、设备 token 加密或受控访问、日志最小化。分析层不只看打开率，还要结合退订率、投诉率、转化率和长期留存。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '某天 push 打开率突然下降。入口请求量正常，队列没有积压，worker 消费正常，但渠道层显示 FCM `Unregistered` 错误比例翻倍。这说明不是业务没提交，也不是队列堵了，而是设备 token 大量失效。系统可以加快 token 清理，并观察是否来自某个客户端版本。',
          '再看模板安全：登录异常通知模板需要城市和设备名，但业务方误传了完整 IP、内部风控分和用户身份证号。如果模板变量没有白名单，这些字段可能被渲染给用户。正确做法是模板只能引用允许字段，后台修改需要审批和版本回滚。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '指标越细，定位越快，但存储和仪表盘维护成本越高。用户行为分析越完整，越能优化策略，但必须遵守隐私和保留期限。渠道切换能提高可用性，但短信、邮件、push 的安全性和成本不同，不能把敏感内容随意扩散到更多渠道。',
          '常见坑是只监控 worker 成功调用第三方，不监控第三方错误码和用户反馈。另一个坑是把通知内容原样写日志，短期排障方便，长期形成严重数据泄露风险。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：我会按入口、队列、渠道和用户反馈四层监控通知链路，并通过调用方权限、模板版本、变量白名单、日志脱敏和数据最小化保护敏感信息。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '监控回答“通知链路哪里出问题”，安全回答“谁可以发什么内容给谁”，分析回答“这些通知是否值得继续发”。三者一起，通知系统才不仅能发送，还能长期可信地运行。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. push 成功率突然下降时，你会先看哪几类指标？\n2. 模板管理后台为什么需要审批、版本和回滚？\n3. 打开率高但退订率也高，可能说明什么问题？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一部分进入 News Feed，先从信息流的范围、数据模型和 API 设计开始。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '04_multi_device_group_chat',
    categoryId: 'system-design',
    chapterId: 'part12_chat_system',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能说明同一用户多设备在线时消息和已读如何同步，并能区分小群和大群的投递策略。你还要能处理成员加入、退出、历史可见性和未读计数这些群聊里常见但容易漏掉的问题。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '聊天系统不能假设一个用户只有一台设备，也不能把群聊简单看成很多个一对一。多设备的原则是消息属于会话，设备只维护同步位置；群聊的原则是小群可以在线 fanout，大群要减少每条消息对全体成员的写放大。成员变更必须记录 join_sequence 和 leave_sequence，否则新成员历史可见性、退群后访问权限和未读计数都会出错。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '用户可能在手机、电脑和平板同时在线。若电脑发出的消息不推给手机，手机会缺一段历史；若每个设备各自维护已读，用户会看到不同未读状态。群聊则带来放大效应：一条消息在 20 人小群里推送 20 次可以接受，在 20 万人大群里同步遍历所有成员就会压垮队列和存储。成员进出群还会改变谁能看哪些历史消息。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '多设备同步依赖会话消息和游标。服务端保存一份 Message，用户或设备保存 last_seen_sequence、last_read_sequence。发送设备提交消息后，服务端持久化，再推给接收方设备，也推给发送者的其他设备。客户端本地临时消息通过 client_msg_id 和服务端 message_id 合并。',
          '小群投递可以查询成员列表，向在线成员设备推送，离线成员之后补拉。大群通常写一次群消息，在线活跃成员实时收到，非活跃成员打开群时按 sequence 拉取，避免为每个成员写一份消息。成员表记录 join_sequence、leave_sequence、角色和禁言状态，读取时按可见区间过滤。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          'A 在电脑发群消息，sequence 为 500。服务端把消息写入群会话后，推给群内在线成员，也推给 A 的手机。A 手机收到后用 message_id 展示为已发送，不再生成本地重复消息。新成员 D 在 sequence 520 时入群。如果产品规定不能看入群前历史，D 读取时只能看到 sequence >= 520 的消息；如果允许看最近 100 条，则 join 策略要明确记录。',
          '用户 B 读到 sequence 510，服务端更新 B 的 last_read_sequence。B 的手机和电脑都以这个用户级游标为准，未读数由群最新 sequence 减去 last_read_sequence 近似计算。大群里如果有删除和权限过滤，未读数可以延迟修正。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '用户级已读简单，适合多数产品；设备级已读更精确，但会让状态同步复杂。小群显示每个人已读体验好，大群维护明细成本太高。大群减少写放大后，读取路径会更依赖缓存和按需拉取。历史可见性越灵活，读取过滤和审计字段越复杂。',
          '常见坑是新成员入群后直接按 conversation_id 读取全部消息，造成历史泄露。另一个坑是为大群每个成员写未读记录，群消息高峰时写入量爆炸。未读可以用游标和懒更新，不必每条消息都更新每个成员。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：多设备靠会话消息加同步游标保持一致；小群可以按成员在线 fanout，大群应写一次消息并让成员按 sequence 拉取，同时用 join 和 leave sequence 控制历史可见性。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '多设备和群聊都是“同一份消息被多个视角读取”的问题。不要复制完整消息给每个设备或每个成员，而要保存消息本体、成员关系和读取位置，让实时推送成为加速路径。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么发送者的其他设备也要收到自己发出的消息？\n2. 小群和大群的已读回执为什么不能用同一策略？\n3. 新成员能否查看入群前历史，系统需要保存哪些字段支持？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节讨论在线状态、断线重连和聊天系统后续扩展方向。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '04_optimization_security_cost',
    categoryId: 'system-design',
    chapterId: 'part14_youtube',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你应该能说明 CDN、自适应码率、预热和切片策略如何改善播放体验，签名 URL、权限校验和内容审核如何保护视频访问，以及按热度分层如何控制带宽、存储和转码成本。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '视频优化有三个目标：播放要快，内容要安全，成本要可控。三者经常互相牵制。把所有视频都缓存到全球边缘节点很快，但成本高；鉴权越严格，播放前检查越多；生成更多清晰度能适配更多网络，却增加转码和存储。',
          '可落地的方案通常按热度和权限分层：热门公开视频提前预热 CDN，长尾视频按需回源；私密或付费视频使用短期签名 URL；高价值或高播放量内容生成完整码率阶梯，冷门内容可以延迟生成高码率。优化不是单点技巧，而是策略组合。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '播放体验由首帧时间、卡顿率、清晰度和失败率共同决定。用户点播放后，如果清单获取慢、首个切片远、码率选择过高或 CDN 未命中，就会卡。另一方面，视频内容常涉及版权、付费、地区限制和未成年人安全，不能因为 CDN 缓存方便就绕开权限。',
          '成本压力同样真实。视频带宽是持续消耗，热门内容每多播放一次都产生流量费用；存储会随着转码版本长期累积；转码资源在高峰期昂贵。一个只追求高清和全球缓存的设计，可能在业务增长后成本失控。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '播放速度依赖自适应码率和 CDN。应用服务返回播放清单，清单列出不同码率和切片地址。播放器先选择较稳的码率快速起播，再根据下载速度切换。CDN 把热门切片缓存到边缘节点，减少回源。对预期爆火的视频，可以预热前几个切片和常用清晰度，降低发布初期的回源压力。',
          '安全控制通常在两处完成。播放前，应用服务根据视频状态、用户权限、地区和付费关系生成带过期时间的签名清单或切片 URL；播放中，CDN 校验签名，防止链接长期被盗用。内容审核、版权指纹和下架状态写入元数据，所有入口都要尊重这些状态。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '一个付费课程视频对购买用户开放。用户打开页面时，应用服务确认购买记录和地区限制，返回 2 小时有效的播放清单签名。播放器从 CDN 下载切片，CDN 校验签名后放行。若链接被转发给未购买用户，过期或签名不匹配会被拒绝。',
          '同一个平台的公开视频采用不同策略。热门发布会视频上线前预热 360p 和 720p 的前几十个切片，确保首批观众快速起播；冷门长尾视频不预热，第一次播放时回源，之后在边缘缓存一段时间。如果后续播放量仍低，高码率版本可以迁到冷存储或延迟生成。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '签名 URL 的过期时间太短，用户播放到一半可能切片请求失败；太长，泄露后的滥用窗口变大。CDN 缓存时间太长，下架或权限变化不易生效；太短，命中率下降、回源成本上升。切片太长，码率切换不灵活；切片太短，请求数和元数据开销变高。',
          '常见坑是把安全完全交给应用服务器，却让真实切片 URL 永久公开；或者反过来只依赖 CDN 防盗链，忽略业务权限。另一个坑是用“全部生成、全部缓存”解决体验问题，这在小规模可行，在大规模会被成本反噬。面试中要主动说明按热度、权限和价值分层。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：视频优化要同时看体验、安全和成本；我会用自适应码率和 CDN 保证播放，用签名 URL 和审核状态控制访问，并按内容热度决定预热、缓存时间、清晰度数量和存储层级。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '视频系统的优化不是单纯加 CDN。CDN 解决距离和带宽，自适应码率解决网络波动，签名 URL 解决访问控制，分层存储和延迟转码解决成本。每个优化都带来新代价，必须靠指标和策略控制。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 签名 URL 过期时间太短或太长分别会造成什么问题？\n2. 为什么冷门视频不一定要立即生成所有清晰度版本？\n3. CDN 命中率下降时，成本和用户体验会怎样变化？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节讨论上传、转码、存储、CDN 和元数据服务的故障处理，并收束视频平台设计的主线。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '04_production_autocomplete',
    categoryId: 'system-design',
    chapterId: 'part13_autocomplete',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你应该能把自动补全从数据结构方案推进到生产方案：如何治理日志质量，如何保护短前缀热点，如何做多级缓存、敏感过滤、索引发布、分片扩容和故障降级，以及这些机制各自解决什么风险。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '生产自动补全的难点不是“能不能按前缀查到词”，而是“查出来的词能不能稳定、干净、可控地展示”。用户日志里会混入隐私、辱骂、广告、拼写错误和刷量；热门前缀会把流量集中到少数节点；不同语言和地区不能混用同一套结果；新索引发布可能让空结果率或点击率突然异常。',
          '实用架构通常是分层防护：客户端节流和本地缓存，网关限流，查询服务读内存索引，热门前缀进入本地或边缘缓存，结果返回前做轻量过滤。后台持续生成版本化索引并支持回滚。这样系统既能快，也能在数据质量、依赖故障或流量突增时保住体验。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '自动补全直接影响用户输入路径，任何小问题都会被放大。一个垃圾词进入热门前缀，可能被大量用户看到；一个短前缀缓存同时失效，可能瞬间把查询服务打满；一个分片承载了过多热门语言或前缀，会让整体 P99 延迟变差；一个过滤规则只在后台生效，遇到紧急封禁时就来不及。',
          '同时，自动补全的正确性不是强事务正确性，而是展示质量。它需要过滤、排序、地域策略、业务上下架和实时运营共同参与。只关注延迟会让结果脏，只关注质量又可能让链路太重。生产化的目标是让重规则尽量前置，在线阶段只做必须的轻判断。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '日志治理分两层。构建索引前做重清洗：去除低频噪声、个人信息、攻击输入、违规内容，统一大小写、空格、语言、繁简和拼写变体，并结合点击率避免“搜得多但没人点”的词占据高位。查询返回前做轻过滤：临时封禁、权限不可见、地区不匹配、业务对象下架等。',
          '缓存也分层。客户端缓存最近前缀，用户从 `app` 输入到 `appl` 时可以先展示旧建议；查询服务本地缓存短前缀和热点结果；必要时在边缘或网关缓存公共热门前缀。索引发布要带版本号，缓存 key 中包含版本，避免新旧数据混乱。分片可以按语言地区、前缀范围或哈希拆分，热点前缀要复制到多台机器分摊。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '假设新手机发布当天，`iphone` 相关前缀流量暴涨。后台实时热词层把 `iphone 17` 相关候选加入覆盖索引，主索引仍按小时构建。用户输入 `iph` 时，查询服务先读主 Trie 的候选，再合并实时覆盖层，去重后按分数返回。因为 `iph` 是热点，结果还会进入本地缓存，后续请求不用重复合并。',
          '如果运营发现某个候选违规，需要立即屏蔽。系统不应等待下一轮全量构建，而是把词写入实时封禁表。查询服务返回前检查封禁表，把它过滤掉并用备用候选补位。稍后全量构建会把该词从主索引中彻底移除。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '多级缓存降低延迟，但会制造一致性问题。缓存时间太长，封禁和业务下架不及时；缓存同时过期，又会引发回源风暴。常见做法是设置抖动过期、版本化缓存、热点预热，并为短前缀准备静态降级结果。',
          '分片能扩容，但会带来倾斜和运维复杂度。按首字母分片简单，却可能让 `s`、`c` 或某些语言特别热；按哈希均匀，但排查和范围预热不直观。面试中常见误区是只说“加缓存、加分片”，没有说明监控指标。生产系统至少要看延迟、错误率、缓存命中率、空结果率、过滤命中率、索引版本、点击率和回滚次数。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：生产化自动补全要把数据质量、热点保护和发布回滚放进设计里；我会构建前重过滤、查询前轻过滤，用多级缓存保护短前缀热点，用版本化索引灰度发布，并在异常时回退旧索引或只服务热门前缀。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '自动补全上线后的核心是稳定展示。它既要快，也要干净、可控、可回滚。日志清洗解决候选质量，缓存解决热点延迟，分片解决容量，版本化发布解决数据风险，监控和降级解决不可避免的异常。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 哪些用户输入不应该进入候选词库？\n2. 短前缀缓存同时失效会造成什么后果？\n3. 新索引发布后空结果率突然升高，你会先检查哪些指标？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一部分进入视频平台设计，从 YouTube 类系统的需求边界、存储成本和播放带宽开始。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '04_quorum_versioning_vector_clock',
    categoryId: 'system-design',
    chapterId: 'part06_key_value_store',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能解释 `N/R/W` 的含义，推导为什么 `R + W > N` 能提高读到新值的概率，并说明版本号、向量时钟如何发现并处理并发写冲突。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          'Quorum 用多个副本的读写确认数来平衡一致性、可用性和延迟。`N` 是副本数，`W` 是写成功需要确认的副本数，`R` 是读成功需要返回的副本数。当 `R + W > N` 时，读集合和最近一次成功写集合至少有一个副本重叠。版本机制则用来判断多个副本返回的值哪个更新，或是否存在无法自动排序的并发冲突。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '复制带来的核心问题是副本可能不同步。写入可能只到达部分副本，某个副本可能暂时宕机，网络可能延迟。读请求如果只读一个副本，可能读到旧值；写请求如果必须等待所有副本，延迟和失败率又会变高。',
          '因此系统需要一个中间策略：不用每次等全体副本，也不能完全相信单个副本。Quorum 就是这个策略。它通过读写确认数量控制“新值被读到”的机会，同时保留一定可用性。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '假设 `N=3`。如果 `W=2`，一次写入至少写到 2 个副本才算成功。如果 `R=2`，一次读取至少从 2 个副本拿结果。因为 2+2>3，读到的两个副本中至少有一个参与了最近成功写入，协调者就有机会看到新版本。',
          '读到多个版本后，系统要比较版本。简单版本号可以由 leader 递增，适合单 leader 写入。时间戳也常见，但依赖时钟，跨机器时可能出错。向量时钟记录每个写入参与者的计数，例如 `{A:2, B:1}`。如果一个版本的所有计数都大于等于另一个，并且至少一个更大，就说明它是后继；如果两个版本互有更大，例如 `{A:2}` 和 `{B:1}`，说明它们是并发写，系统不能安全自动覆盖。',
          '冲突处理有几种方式：最后写入胜出、保留多版本交给业务合并、按数据类型自动合并。选择取决于业务语义。用户昵称可以最后写胜出，购物车更适合合并商品集合。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '一个 key `cart:u1` 有三个副本 A、B、C，设置 `N=3, W=2, R=2`。用户先加入商品 x，协调者写入 A、B 成功，C 因网络延迟未写到。之后读取时，协调者读 B、C。B 返回版本 v2，C 返回旧版本 v1。因为读到了两个副本，协调者能发现版本差异，返回较新的 v2，并可以顺手把 v2 修复到 C。',
          '再看冲突。网络分区时，用户在分区一把购物车加入 x，写到 A；在分区二加入 y，写到 B。两个写入都没有看到对方，版本分别是 `{A:1}` 和 `{B:1}`。网络恢复后读取 A、B，协调者发现二者不可比较，就不能简单说哪个更新。对购物车，合理做法是返回两个 sibling 或在服务端合并成 `{x,y}`，再写回新版本 `{A:1,B:1,Coordinator:1}`。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '提高 `W` 会增强写入持久性和一致性，但增加写延迟和失败概率；提高 `R` 会更容易读到新值，但读延迟更高。`R=1,W=1` 可用性和延迟好，但容易读旧；`R=QUORUM,W=QUORUM` 更稳，但在副本故障时更容易失败。',
          '常见坑是以为 `R + W > N` 就等于强一致。它只保证读写集合有交集，还要求版本比较、读修复、并发控制等机制正确；如果发生并发写，仍可能出现冲突。另一个坑是滥用最后写入胜出，导致时钟漂移或并发更新覆盖用户数据。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：Quorum 通过 `N/R/W` 控制读写需要联系的副本数，`R+W>N` 能让读集合与成功写集合相交；版本号或向量时钟负责判断新旧和发现并发冲突，冲突最终要按业务语义合并。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          'Quorum 解决“联系多少副本”的问题，版本机制解决“多个结果如何比较”的问题。二者配合才能让分布式 KV 在副本延迟和故障下仍然给出可解释的读写行为。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. `N=3` 时，`R=1,W=2` 和 `R=2,W=1` 分别偏向什么体验？\n2. 为什么向量时钟能发现并发写，而单调时间戳不一定能？\n3. 购物车冲突为什么不适合简单最后写入胜出？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会讨论故障检测、临时接管和副本修复：副本掉队以后，系统如何重新收敛。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '04_sliding_window_algorithms',
    categoryId: 'system-design',
    chapterId: 'part04_rate_limiter',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '本节要讲清滑动窗口日志和滑动窗口计数两类算法。你要能解释它们如何避免固定窗口边界突刺，以及为什么准确性、内存和计算成本之间必须取舍。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '滑动窗口的目标是判断“过去连续一段时间内”请求是否超限，而不是按固定整点窗口计数。滑动日志保存每次请求时间戳，准确但内存高；滑动计数把时间切成小桶，近似但更省资源。窗口越细越准确，状态越多；窗口越粗越省资源，误差越大。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '固定窗口的缺陷在窗口边界。用户可以在上一分钟最后一秒和下一分钟第一秒各打满配额，形成短时间双倍流量。对数据库、短信、登录这类接口，这种突刺可能正是系统要避免的。滑动窗口通过观察“当前时间往前推 60 秒”的请求数，让边界不再固定。',
          '问题是，精确观察过去 60 秒意味着你要知道这 60 秒里每次请求发生的时间。高 QPS、多用户、多规则时，这些时间戳会占用大量内存，并增加清理成本。因此工程上经常用近似计数换资源。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '滑动窗口日志的流程是：每个 key 保存一个按时间排序的请求时间戳集合。请求到来时，先删除窗口外的旧时间戳，再统计剩余数量。如果数量低于阈值，就插入当前时间并放行；否则拒绝。它准确，但每个通过请求都要写一个时间戳。',
          '滑动窗口计数把窗口切成多个小桶。例如 60 秒窗口切成 6 个 10 秒桶。请求来时只增加当前桶计数，判断时汇总最近 6 个桶。为了更平滑，还可以按当前桶经过比例对上一窗口计数做加权估算。它减少状态量，但会有近似误差。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '规则是每分钟最多 100 次。滑动日志下，用户在 12:00:30 请求时，系统删除 11:59:30 之前的时间戳，然后数 11:59:30 到 12:00:30 之间已有多少请求。如果已有 100 个，拒绝；如果 99 个，插入当前时间戳并放行。这严格满足任意连续 60 秒不超过 100。',
          '滑动计数下，把 60 秒切成 6 桶。12:00:30 时，系统汇总 11:59:30 到 12:00:30 涉及的几个桶。因为桶是离散的，边界处可能多算或少算，但内存从“保存每次请求”变成“保存每个桶的计数”。对百万用户来说，这个差异非常大。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '滑动日志准确，适合低 QPS 或高价值接口，如密码重置、短信验证码。高 QPS API 若对每个 key 保存大量时间戳，内存和清理成本会很高。滑动计数更适合大规模服务，但要接受误差，并选择合适桶大小。',
          '常见坑是只说“滑动窗口更准确”，却不说明成本。另一个坑是桶大小随便选：1 秒桶更准但状态多，10 秒桶省资源但误差大。还要注意并发原子性，删除旧数据、计数和插入必须作为一个一致决策，否则多个请求同时通过会超限。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：“滑动窗口避免固定窗口边界突刺。若追求精确，可以保存请求时间戳；若面向高 QPS，我会用分桶计数或加权估算，在准确性和内存之间取舍，并保证更新操作原子化。”'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '滑动窗口让限流判断更接近真实的连续时间，但不是免费午餐。精确需要更多状态，近似可以扩展到更大规模。算法选择要和 key 数量、请求频率、误杀成本一起看。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 滑动窗口如何缓解固定窗口边界突刺？\n2. 为什么滑动日志在高 QPS 场景内存成本高？\n3. 分桶大小会如何影响准确性和资源消耗？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会把算法放进系统架构中，讨论规则服务、计数存储、网关和监控如何组合成完整限流器。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '04_upload_download_notification',
    categoryId: 'system-design',
    chapterId: 'part15_google_drive',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你应该能描述云盘上传和下载的完整流程，解释通知服务为什么只负责提醒变化而不是传输文件内容，并能分析离线、重试、重复事件和乱序事件如何影响同步体验。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '云盘同步不是一次 API 调用，而是一组持续运行的流程。上传把本地变化变成远端新版本，下载把远端新版本拉到本地，通知服务提醒其他设备“有变化了”。通知不是可靠数据源，它更像门铃，真正的状态要从变更日志和元数据服务拉取。',
          '可靠同步必须接受现实：客户端会离线，网络会抖动，通知会重复或乱序，上传可能只完成一半。系统要围绕版本号、同步游标、变更日志和幂等操作设计，让设备即使错过实时推送，也能最终追上正确状态。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '多设备同步的困难在于设备状态各不相同。电脑可能已经上传到版本 20，手机还停在版本 17；网页端可能刚删除一个文件，桌面端离线期间又改了它；移动推送可能被系统限制，长连接可能断开。如果客户端只相信最后收到的一条通知，很容易漏掉变化。',
          '文件操作也不只是内容变化。重命名、移动、删除、恢复、权限变更都要同步，而且这些操作有顺序。先移动目录再删除文件，和先删除再移动，结果不同。服务端需要把变化写入有序日志，客户端用游标按顺序追赶。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '上传流程从本地变更检测开始。客户端先做去抖动，避免自动保存产生大量重复任务；然后计算哈希和块哈希，查询缺失块，上传并校验；最后提交文件新版本。提交成功后，元数据服务写入变更日志，并通知该用户其他设备有新的变更序号。',
          '下载流程从同步游标开始。客户端收到通知或定期轮询后，请求“从我上次看到的序号之后发生了什么”。服务端返回新增、删除、移动、重命名、版本更新等事件。客户端根据本地状态决定下载哪些块、删除哪些占位项、更新哪些目录。若发现序号不连续，就触发更完整的增量拉取或目录校验。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '桌面端把 `report.docx` 从版本 5 更新到版本 6。提交成功后，服务端写入变更序号 101：文件 ID `f1` 版本更新。手机端在线，收到通知 `{latest_seq: 101}`，但通知里不包含文件内容。手机用自己的游标 97 去拉变更，拿到 98 到 101 的事件，逐个应用，再按需下载 `f1` 缺失的块。',
          '如果手机漏掉通知，也没关系。它下次打开应用时会用游标 97 轮询，仍然能拉到同一批变更。如果通知重复到达，客户端发现 101 已处理，就忽略。可靠性来自变更日志和游标，而不是通知消息本身。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '实时通知能提升体验，但维护长连接和移动推送成本高，且不保证一定送达。轮询更简单可靠，但延迟和服务端负载更高。常见做法是通知加补偿轮询：在线时尽快推送，离线或漏推时靠游标拉取修正。',
          '常见坑是让通知直接携带完整文件列表甚至内容。这样通知会变重，重复和乱序处理困难，也容易泄露数据。另一个坑是没有幂等上传：客户端重试同一个提交可能创建多个版本，或者重复删除导致状态错误。服务端应让块上传、版本提交和事件消费都能安全重放。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：云盘同步我会用变更日志作为可靠事实源，用通知服务做轻量提醒；客户端带同步游标拉取变化，上传和下载都设计成幂等流程，这样即使离线、漏通知或重复事件，也能最终恢复到正确状态。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '上传、下载和通知共同构成同步闭环。上传以块和版本提交为边界，下载以变更日志和游标为依据，通知只负责降低感知延迟。系统不应把实时推送当成可靠存储，而要让客户端随时能从日志中补齐缺失状态。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么通知消息不适合直接携带完整文件内容？\n2. 客户端错过一段通知后，如何恢复到正确状态？\n3. 按需同步会给离线可用性带来哪些新问题？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节讨论存储优化、故障处理和云盘在一致性、隐私、成本、体验之间的关键取舍。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '04_virtual_nodes_tradeoff',
    categoryId: 'system-design',
    chapterId: 'part05_consistent_hashing',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能解释虚拟节点解决什么负载不均问题，说明虚拟节点如何映射回真实机器，并理解它带来的元数据、迁移和运维成本。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '一致性哈希只保证节点变化影响局部，不天然保证每台机器拿到的区间一样大。真实节点少时，环上的随机位置可能导致某台机器负责很长区间。虚拟节点的做法是让一台真实机器在环上拥有多个点位，把大区间切散，从概率上让负载更均匀。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '如果只有 3 台真实服务器，它们在环上的位置可能非常不均匀。A 和 B 离得很近，B 和 C 离得很远，那么 C 可能负责很长一段区间，承担远高于平均值的 key 数量和请求量。哈希函数均匀并不等于少量样本一定均匀，节点点位越少，随机波动越明显。',
          '负载不均会带来连锁问题：某台机器 CPU 更高、内存更早打满、热点 key 更集中、扩容效果不稳定。你可能以为加了一台机器能分走 25% 压力，但如果它落在很短的区间，实际只接到少量请求。',
          '这种不均衡在缓存里表现为某些节点淘汰更频繁、命中率更低；在存储里表现为某些节点磁盘增长更快、compaction 更重、读写延迟更高。即使平均容量看起来够，最重的那台机器先到瓶颈，整个集群就要提前扩容。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '虚拟节点把一台真实机器拆成多个环上点位。例如真实机器 A 生成 `A#0`、`A#1`、`A#2` 等虚拟节点，每个虚拟节点都独立哈希到环上。路由时 key 仍然顺时针找第一个点位，但找到的是虚拟节点；系统再通过映射表把虚拟节点转回真实机器 A。',
          '这样做有两个效果。第一，真实机器的负责区间由多个小区间组成，随机误差会相互抵消，整体更接近平均。第二，新增或删除真实机器时，迁移不再集中在一个大区间，而是分散到多个小区间，来源和目标更均匀。',
          '虚拟节点数量需要权衡。数量越多，负载越均匀，迁移越平滑；但环上的点位越多，路由表越大，节点变更时要处理的区间越多。不同容量的机器还可以配置不同虚拟节点数，例如大机器 200 个，小机器 100 个，以表达权重。',
          '虚拟节点还改善扩容时的来源分布。没有虚拟节点时，新机器通常只从一个后继节点接管一段区间，那个后继节点要承担主要迁出压力。使用虚拟节点后，新机器的多个点位散在环上，会从多台旧机器各拿一小段，迁移流量更容易摊平，单台旧机器不至于被迁移任务打满。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '假设 A、B、C 三台机器直接上环，位置分别是 5、15、80。A 负责 `(80,5]`，跨过环尾，约 25% 空间；B 负责 `(5,15]`，只有 10%；C 负责 `(15,80]`，高达 65%。如果请求 key 大体均匀，C 会承受远高于其他机器的压力。',
          '现在每台机器放 100 个虚拟节点。A 的 100 个点散在环上，B 和 C 也是。A 不再只负责一段，而是负责 100 个小区间的总和。单个小区间仍可能偏大，但 100 个区间相加后更接近三分之一。新增 D 时，D 的虚拟节点会从 A、B、C 的多个位置切走小区间，而不是只从一个后继节点拿一整段。',
          '假设 D 也有 100 个虚拟节点，它上线后可能从 A 接走 30 段、从 B 接走 35 段、从 C 接走 35 段。每段都可以独立迁移、限速和重试。相比一次性从 C 搬走一个巨大连续区间，这种碎片化迁移更容易控制风险，但调度系统也要能追踪更多小任务的状态。',
          '在路由实现里，环上保存的是 `(hash, vnode_id, physical_node)`。查到 `B#37` 后，真正发请求的是物理节点 B。迁移任务也按虚拟节点区间扫描：把属于 `D#12` 的 key 从它的后继节点迁到 D。',
          '权重也可以通过虚拟节点表达。假设 A 是 32 核、B 是 16 核，A 可以拥有 200 个虚拟节点，B 拥有 100 个。这样 A 在环上期望拿到约两倍区间。相比在请求层做特殊权重，虚拟节点权重直接影响 key 归属和迁移计划，语义更统一。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '虚拟节点的代价主要是元数据和运维复杂度。客户端或代理需要加载更大的环；节点变更时要广播更多点位；监控也要能从虚拟节点聚合到真实节点。虚拟节点太少，均衡效果有限；太多，路由表膨胀，迁移任务碎片化。',
          '常见坑是以为虚拟节点能解决热点 key。它解决的是 key 空间区间不均，不解决某一个 key 被极高频访问的问题。热点 key 需要副本读、请求合并、本地缓存或专门的热点拆分策略。另一个坑是所有机器给同样虚拟节点数，却忽略机器容量差异；如果机器规格不同，虚拟节点数应该表达权重。',
          '还要避免虚拟节点数量拍脑袋。可以先用模拟数据把 key hash 到环上，观察最大节点负载与平均负载的比例，再结合路由表大小和迁移任务数量选一个值。很多系统不是虚拟节点越多越好，而是达到足够均衡后继续增加收益很小。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：虚拟节点让每台真实机器在环上占多个位置，把一个大区间拆成多个小区间，从概率上平滑负载；它改善均衡和迁移分散度，但会增加路由元数据和运维复杂度。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '一致性哈希解决节点变化时的稳定性，虚拟节点进一步解决少量真实节点导致的负载不均。两者经常一起出现，但关注点不同：一个控制迁移范围，一个改善分布质量。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么真实节点越少，直接一致性哈希越容易不均？\n2. 虚拟节点能不能解决单个热门 key 带来的流量倾斜？\n3. 如果机器规格不同，虚拟节点数量应该如何设置？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一部分会进入分布式 Key-Value Store，先从单机 KV 的能力边界开始，逐步推导为什么需要分片、复制和冲突处理。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '04_wrap_up_dos_and_donts',
    categoryId: 'system-design',
    chapterId: 'part03_interview_framework',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '本节要讲系统设计面试最后阶段该如何收束。你要能把方案的核心路径、主要取舍、未解决风险和后续扩展讲清楚，也要知道哪些表达会让答案显得不成熟。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '好的收尾不是重复架构图，而是复盘：这个设计满足了哪些需求，最关键的取舍是什么，故障时如何退化，监控哪些指标，下一步可以怎样演进。收尾能把零散讨论重新组织成一个有判断力的答案，让面试官看到你不仅会搭系统，也会运营系统。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '很多候选人前半段讲得不错，最后却突然结束：“大概就是这样。”这会浪费展示全局能力的机会。系统设计本质上没有完美答案，收尾阶段要主动承认边界：哪些地方为了时间简化了，哪些地方在规模扩大后需要重做，哪些风险需要监控。',
          '收尾也能修复前面的小遗漏。如果你没来得及讲告警、数据迁移、降级或安全，可以在最后用简洁方式补上。但收尾不是新增一堆组件，而是说明你知道方案在真实环境中怎样运行和演进。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '收尾可以按五句话组织。第一，总结核心请求流和数据流。第二，说明关键扩展点，例如缓存、队列、分片或多区域。第三，列出主要取舍，例如一致性换延迟、空间换速度、异步换用户等待时间。第四，给出故障与监控，例如错误率、P95 延迟、队列积压、缓存命中率、数据库慢查询。第五，说明下一阶段演进条件。',
          '节奏控制也很重要。开场 5 分钟澄清需求，中间 10 到 15 分钟高层设计，后半段深入 1 到 2 个关键点，最后 2 到 3 分钟收尾。实际时间会变化，但你要主动管理，而不是被某个细节拖走。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '以限流器设计收尾，可以这样复盘：请求先到 API Gateway，按用户、IP 或 API key 生成限流 key；网关读取规则，使用 Redis 或本地加分布式状态执行令牌桶或滑动窗口；超限返回 429，并带重试信息；规则由配置服务下发；监控命中率、拒绝率、存储延迟和误杀情况。',
          '然后补充取舍：如果使用集中 Redis，准确性高但依赖外部存储；如果使用本地计数，延迟低但全局不精确。故障时可以对核心内部流量 fail open，对高风险接口 fail closed 或使用保守本地规则。这样收尾把架构、取舍和故障策略连在一起。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '收尾的好处是让答案完整，但不能变成长篇补课。最后阶段应优先讲最高风险的遗漏，而不是打开新话题。比如已经没时间了，就不要突然深入一致性哈希细节；可以说“如果继续扩展，我会重点看分片和热点 key”。',
          '常见坑包括：说“这个系统不会有问题”，忽略故障；说“加机器就行”，忽略状态和瓶颈；把技术名词当结论；被面试官挑战时急着辩解，不愿调整假设。成熟表达是承认约束，给出替代方案和选择理由。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：“最后我总结一下：这个方案覆盖了核心读写路径，主要用缓存和异步队列降低延迟，用监控和降级处理故障。当前取舍是接受部分最终一致来换吞吐；如果规模继续增长，我会优先评估分片和热点治理。”'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '收尾是把设计从“能画出来”提升到“能运行起来”。它要求你回到需求、复盘取舍、说明风险和演进条件。系统设计没有满分模板，但有清晰的工程判断。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 你的收尾中通常会包含哪些监控指标？\n2. 如果面试官指出一个漏洞，你应该如何回应？\n3. 为什么“加机器就行”不是一个合格的扩展解释？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一部分会进入具体案例：设计 Rate Limiter，把前面的需求澄清、估算、高层设计和深入取舍串起来。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '05_failure_detection_and_repair',
    categoryId: 'system-design',
    chapterId: 'part06_key_value_store',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能说明 KV Store 如何发现节点异常，临时把请求交给其他节点，以及通过读修复、hinted handoff、反熵同步让副本重新一致。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '分布式 KV 不能只设计正常读写，还必须设计副本掉线后的补救路径。故障检测判断节点是否可疑，临时接管保证请求尽量可用，修复机制负责把掉队副本补齐。没有修复，最终一致就只是愿望。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '节点故障很常见：进程崩溃、磁盘变慢、网络抖动、GC 暂停都可能让副本短时间不可达。写入时如果某个副本没收到数据，其他副本继续前进，它就落后了。读取时如果碰到落后副本，用户可能读到旧值。',
          '系统不能把每次超时都当成永久死亡，否则会频繁迁移和误切流；也不能一直相信节点健康，否则请求会卡在坏节点上。故障处理的难点正是在“不确定”中做可恢复的决定。',
          '慢故障尤其麻烦。一个节点没有宕机，但磁盘延迟从 2ms 变成 2s，会让大量请求堆积、线程池耗尽、上游重试放大。故障检测因此不能只看存活心跳，还要看请求延迟、错误率和排队长度。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '故障检测通常结合心跳、请求失败率、延迟和 gossip。节点之间定期交换状态，如果某个节点长时间没有响应，就标记为 suspect，而不是立刻永久删除。suspect 状态可以让路由层降低流量或跳过该节点。',
          'Gossip 的价值在于去中心化传播状态。每个节点只和少量邻居交换自己知道的成员状态，经过几轮传播，大多数节点都会知道某个副本可疑。它不需要一个全局健康检查中心，但状态传播有延迟，所以路由层仍要配合本地超时和重试策略。',
          '临时接管常见做法是 hinted handoff。假设 key 的一个副本应该写到 C，但 C 暂时不可达，协调者可以把这份写入暂存在 D，并记录 hint：这条数据最终属于 C。C 恢复后，D 把 hint 回放给 C。这样写入可用性更高，但系统要限制 hint 保留时间和数量。',
          '副本修复有两类。读修复是在读取多个副本时发现旧版本，顺手把新版本写回旧副本。反熵修复是在后台比较副本数据，找出差异并同步，常用 Merkle Tree 降低全量比较成本。二者互补：读修复修热点快，反熵修冷数据。',
          '副本修复还要避免影响前台流量。后台同步通常需要限速，并在节点 CPU、磁盘 IO 或业务延迟升高时自动让路。否则修复任务本来是为了恢复健康，却可能把刚恢复的节点再次压慢。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '`profile:u1` 有副本 A、B、C，写入要求 `W=2`。某次写入时 A、B 成功，C 超时。系统返回成功，因为达到 W。此时 C 落后。如果之后读请求只读 C，就可能读到旧值；如果读 `R=2`，读到 B 和 C，协调者比较版本后返回 B 的新值，并把新值修复到 C。',
          '再看 C 完全不可达的情况。新的写入本该写 A、B、C，但 C 不通。协调者写 A、B，并把 C 的那份临时交给 D 保存 hint。几分钟后 C 恢复，D 把期间的 hint 按 key 回放给 C。后台反熵任务再比较 A、B、C 的 Merkle Tree，确认是否还有漏掉的 key。',
          '如果 C 离线太久，hint 可能过期或数据太多，此时不能无限堆积。系统需要触发完整副本重建：从健康副本复制快照，再追增量日志。',
          '反熵修复通常不会逐条全量比较所有 key，那样成本太高。常见做法是把 key 空间分段，为每段构建摘要树。两个副本先比较根摘要，相同就跳过；不同再向下比较子段，最终定位差异范围。这样冷数据即使很久没人读，也能在后台被发现并修复。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '故障检测越敏感，越能快速绕过坏节点，但误判越多；检测越保守，误判少，但用户可能等待慢节点超时。Hinted handoff 提高可用性，但会增加临时节点存储压力，也可能在恢复时形成回放洪峰。读修复省后台资源，但只有被读到的数据才会修；反熵覆盖全面，但消耗网络和磁盘。',
          '常见坑是只说“有多副本所以不会丢”，却不说明掉队副本如何追上。另一个坑是把慢节点当成死节点。慢节点可能比宕机更危险，因为它不断拖慢请求又不触发明确失败，所以需要超时、熔断和延迟指标配合。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：KV Store 通过心跳和 gossip 发现可疑节点，用 hinted handoff 或副本切换维持可用，再通过读修复和反熵同步把落后副本补齐，最终一致依赖这些修复机制落地。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '故障不是异常路径，而是分布式 KV 的日常路径。一个完整方案必须说明检测、绕过、临时保存、恢复回放和后台校验，否则读写协议只能覆盖系统健康时的情况。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么 suspect 状态比直接判死更稳妥？\n2. 读修复为什么不能替代反熵修复？\n3. Hinted handoff 如果无限保留，会带来什么风险？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会把前面所有机制串起来，形成 KV Store 的整体架构和一次完整读写路径。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '05_failure_wrap_up',
    categoryId: 'system-design',
    chapterId: 'part14_youtube',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你应该能识别视频平台中上传、转码、存储、CDN 和元数据服务的常见故障，能说明不同故障下用户可接受的降级体验，并能把视频系统的设计主线总结为分离、异步、分层和可降级。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '视频系统的故障常常不是全站不可用，而是某条链路局部失败：上传分片卡住、转码队列积压、某个清晰度缺失、CDN 回源变慢、元数据已发布但切片不可读。好的设计不是假设这些事不会发生，而是为每种故障准备用户能理解的状态和系统能恢复的路径。',
          '对观众来说，能用低清晰度播放通常比完全不能播放更好；对上传者来说，看到明确的处理中、失败原因和重试按钮，比文件悄悄丢失更重要。视频平台的核心原则可以收束为：上传和播放分离，重处理异步执行，大流量走对象存储和 CDN，应用服务控制状态和权限。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '视频链路长，任何环节都可能慢或失败。上传依赖客户端网络和对象存储；转码依赖队列、worker 和算力；播放依赖元数据、清单、CDN、源站和播放器；审核和版权系统还可能阻止发布。由于每个环节的耗时和失败模式不同，单一的“成功/失败”状态无法描述真实情况。',
          '此外，用户容忍度不同。上传中的等待可以接受，但不能丢进度；转码中的等待可以接受，但要显示状态；播放中的卡顿最敏感，需要快速切换路径或码率。故障处理必须围绕具体体验设计，而不是只在服务端重试。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '上传故障通过分片、校验、断点续传和凭证刷新处理。客户端记录已上传分片，服务端提供查询接口，重复上传同一分片要幂等。转码故障通过 DAG 状态、节点重试、死信队列和部分发布处理。低清晰度成功时可以先上线，高码率继续补齐。',
          '播放故障通过多级降级处理。清单服务要高可用并可缓存；切片下载失败时，播放器可以重试、降低码率、切换 CDN 域名或回退备用源；CDN 区域异常时，路由层可以切到其他 CDN。发布状态不能只看数据库更新，还要确认关键切片和清单已经可读，避免“页面显示可播放但实际 404”。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '假设一个视频转码完成后，元数据服务误把状态改为可播放，但 720p 的部分切片还没复制到对象存储。观众播放到该时间点时会卡住或报错。预防方式是在发布前做可读性检查：至少确认清单存在、首段切片可读、每个声明的码率都有完整切片列表。若检查失败，视频保持处理中或只发布已验证的 360p。',
          '再看 CDN 故障。某地区边缘节点回源超时，播放器连续请求切片失败。客户端可以先降低码率请求更小切片，同时尝试备用 CDN 域名；服务端监控发现该地区错误率上升后，把新清单中的域名切到另一家 CDN。用户可能看到短暂清晰度下降，但不至于完全无法观看。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '更强的发布校验能减少播放失败，但会延长视频上线时间；更多 CDN 备份能提高可用性，但增加合同、路由和缓存一致性成本；更积极的重试能提升成功率，但可能放大故障时的负载。降级不是免费午餐，需要限流、退避和优先级。',
          '常见坑是把所有故障都交给“重试”。上传重试没有分片状态会浪费带宽，转码重试没有幂等会产生脏输出，播放重试没有退避会加重 CDN 压力。另一个坑是扩展功能画太多，把搜索、推荐、直播全部塞进主图。面试中更好的做法是先把核心视频链路讲稳，再说明扩展如何接入元数据和事件流。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：视频平台的故障处理要按链路设计，上传保进度和幂等，转码保 DAG 状态和部分发布，播放保 CDN 降级和码率切换；整体目标不是每个版本都完美，而是在局部失败时保住可恢复上传和可观看播放。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '视频系统设计的主线是分离、异步、分层和降级。上传与播放分离避免互相拖垮，转码异步化避免阻塞用户请求，对象存储和 CDN 承担重数据路径，状态机和监控让局部失败可见、可恢复、可解释。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 如果转码队列积压 6 小时，应该优先处理哪些视频？\n2. CDN 某地区异常时，播放器和后端分别可以做什么？\n3. 元数据已发布但视频文件不可读，这类问题如何预防？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一部分进入云盘系统设计，从可靠同步、低带宽和多设备一致性的需求边界开始。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '05_high_level_architecture',
    categoryId: 'system-design',
    chapterId: 'part04_rate_limiter',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '本节要把限流算法放进真实系统。你要能说明一个完整限流器由哪些模块组成：请求入口、规则配置、决策执行、状态存储、响应处理、监控告警，以及它们之间的数据如何流动。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '完整限流器不只是一个算法函数。它通常包括 API Gateway 或服务拦截器、规则管理服务、低延迟计数存储、本地规则缓存、原子更新逻辑、限流响应和监控报表。请求路径上要极快，规则更新要可控，状态存储要能承受高并发，故障时要有明确退化策略。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '算法只回答“给定一个 key 是否放行”，但系统还要回答：规则从哪里来，如何动态生效，谁能修改，修改后如何审计，计数状态放哪里，多个网关如何共享状态，限流命中如何观察，用户收到什么响应。缺少这些，限流器只能算 demo，不能算生产设计。',
          '限流器处在请求入口，每次请求都要经过它。它不能慢，不能频繁出错，也不能让规则更新导致全站异常。因此架构要把“控制面”和“数据面”分开：控制面管理规则，数据面在请求路径上快速决策。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '控制面负责规则生命周期。管理员或业务系统提交规则，例如 `api_key` 每分钟 1000 次；规则服务校验、版本化、发布；网关或服务实例定期拉取或订阅规则，并缓存在本地。这样请求不必每次远程读取规则。',
          '数据面负责实时判断。请求到达网关后，网关根据规则生成 key，调用本地限流库或 Redis/Lua 等原子计数存储，得到 allow 或 deny。放行请求继续转发；拒绝请求返回 429 或业务错误码。所有决策会记录指标：通过数、拒绝数、存储延迟、错误数和规则命中分布。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '开放 API 平台有三种套餐：免费、专业、企业。规则服务保存套餐到配额的映射，并允许运营修改。API Gateway 每 30 秒拉取规则，存在本地内存。请求进入后，网关从 API key 查到租户和套餐，生成 key：`tenant:42:/v1/search`，再用 Redis 执行令牌桶 Lua 脚本，原子地补充令牌、扣减令牌并返回结果。',
          '如果结果是拒绝，网关返回 429，并带上剩余配额和重试时间。监控系统展示每个租户的拒绝率。如果 Redis 延迟升高，网关可以短时间使用本地保守限流规则，或对低风险接口 fail open，对高成本接口 fail closed。这个高层架构把规则、决策和故障策略分开了。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '集中存储如 Redis 能提供较准确的全局状态，但会增加网络延迟并成为热点依赖。本地限流延迟低、可用性好，但多个实例之间状态不共享，全局准确性差。规则本地缓存能降低延迟，但会有短暂不一致；规则发布需要版本号和回滚。',
          '常见坑是让请求路径每次访问规则数据库，导致限流器自己变成瓶颈。另一个坑是没有审计和灰度，错误规则一发布就误杀大量用户。生产系统应支持按租户、接口或比例灰度规则，并快速回滚。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：“我会把限流器分成控制面和数据面。控制面管理规则、版本和发布；数据面在网关或服务内用本地规则缓存加低延迟状态存储做原子决策，并输出拒绝率、延迟和错误率监控。”'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '限流器的高层架构要围绕低延迟决策和可控规则发布设计。算法只是数据面的一部分；规则管理、状态存储、监控和故障退化同样决定系统是否可靠。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么规则服务不应该在每个请求上同步访问？\n2. 控制面和数据面分离有什么好处？\n3. 限流规则发布错误时，系统应该如何快速恢复？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会深入规则、并发和分布式限流，讨论原子性、热点 key、跨实例准确性和竞态条件。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '05_presence_and_wrap_up',
    categoryId: 'system-design',
    chapterId: 'part12_chat_system',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能设计在线状态的心跳、TTL、延迟离线和订阅机制，说明断线重连时如何恢复消息和状态，并能把聊天系统扩展到媒体、搜索、加密、审核和超大群。在线状态看似一个绿点，实际是高频、易抖动、最终一致的临时状态。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          'Presence 不应该和消息可靠投递绑成强事务。合理设计是：客户端通过心跳刷新连接状态，registry 用 TTL 判断连接是否有效，用户级在线状态由多个设备连接合并而来，短暂断线用 grace period 吸收抖动，状态变化只推给订阅者。断线重连时，客户端带 last_seen_sequence、device_id 和会话上下文，服务端先补缺失消息，再恢复订阅。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '移动网络不稳定，应用退后台、系统省电、Wi-Fi 切 5G 都会让连接短暂断开。如果每次断开都立刻广播离线，好友列表会频繁闪烁，presence 服务也会承受大量写入和推送。大群里如果广播每个成员上下线，状态流量可能比消息还大。在线状态需要实时感，但不需要强一致；用户看到几秒延迟通常可以接受。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '客户端连接 gateway 后定期发送心跳，gateway 刷新 connection registry 的过期时间。presence 服务根据有效连接判断设备在线，再聚合为用户在线：至少一个设备在线，用户就在线。正常退出可以立即删除连接；异常断网只能等 TTL。grace period 用来延迟离线广播，如果用户短时间内重连，就不通知别人离线。',
          '订阅机制控制状态传播范围。聊天窗口只订阅当前会话成员，好友列表只订阅可见好友，大群只展示少量活跃状态或不展示全员在线。断线重连时，客户端提交 last_seen_sequence，服务端返回缺失消息，并重新注册设备连接和 presence 订阅。发送中的本地消息用 client_msg_id 查询或重发，服务端幂等处理。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          'B 的手机进电梯后断网 20 秒。gateway 收不到心跳，但 registry 记录还没过 TTL，presence 不立即广播离线。25 秒后连接恢复，B 重连到 gateway-2，带 last_seen_sequence 310。服务端发现会话最新 sequence 是 314，于是补发 311 到 314，并刷新 B 的连接记录。好友没有看到 B 频繁上下线，B 也没有丢消息。',
          '如果 B 超过 TTL 仍未恢复，presence 才把用户状态改为离线，并通知正在和 B 聊天或好友列表中订阅 B 状态的客户端，而不是全站广播。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '心跳越频繁，在线状态越及时，但移动端耗电和服务端写入越高；TTL 越长，误判离线越少，但用户实际离线后显示在线更久。grace period 能减少闪烁，但会降低状态实时性。订阅范围越大，功能越丰富，广播压力也越高。',
          '常见坑是把 presence 当强一致状态，要求每次连接变化都同步写库并广播。另一个坑是断线重连只恢复 WebSocket，不补拉消息，导致断线窗口内的消息永久缺失。Presence 只能说明可能在线，不能作为消息是否送达的唯一依据。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：在线状态是带 TTL 的临时状态，我会用心跳刷新、延迟离线吸收抖动、订阅机制限制广播；断线重连时通过 last_seen_sequence 补拉消息，并用 client_msg_id 处理本地重发。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '聊天系统的可靠性来自消息存储和同步游标，presence 只提供实时体验。它允许最终一致，应该用 TTL、心跳、grace period 和订阅控制来平衡实时性、成本和稳定性。后续扩展可以加入媒体对象存储与 CDN、消息搜索索引、端到端加密、内容审核、风控和超大群分层推送。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么用户级在线状态要考虑多设备？\n2. 大群为什么不适合广播每个成员上下线？\n3. 客户端断线重连时，需要向服务端提供哪些同步信息？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          'CH12 到这里完成；后续可以把聊天系统继续扩展到媒体消息、加密通信、消息搜索、内容审核和超大群架构。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '05_stateless_web_tier_and_autoscaling',
    categoryId: 'system-design',
    chapterId: 'part01_scale_from_zero',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '这一节要讲清楚“无状态 Web 层”到底无的是什么状态，以及为什么它是自动扩缩容的前提。你要能解释会话、上传文件、临时任务和本地缓存如果绑在某台机器上，会怎样破坏扩展和故障转移。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '无状态 Web 层不是说业务没有状态，而是说任意一台 Web 服务器不保存只能由自己继续处理的关键状态。用户会话放到共享存储或签名 Token，文件放对象存储，任务放队列，权威数据放数据库。这样负载均衡器可以把请求发给任意机器，机器故障或扩容时不需要搬迁用户状态。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '多台 Web 服务器刚上线时，经常遇到“用户一刷新就掉登录”的问题。原因是登录会话保存在 A 机器内存里，下一次请求被负载均衡器发到 B，B 不认识这个用户。类似问题还会出现在本地上传文件、内存中的购物车、正在执行的长任务、只存在本机的临时结果。',
          '如果 Web 层有强本地状态，扩容就很困难。新机器没有旧状态，不能立刻接流量；旧机器下线前要迁移状态，发布和故障恢复都变复杂。自动扩缩容要求机器可以随时加入和离开，前提就是请求处理不依赖某台固定机器。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '无状态化的基本做法是把状态按性质放到合适位置。身份信息可以用服务端 Session 存储在 Redis，也可以用带签名的 JWT 让服务端验证而不保存会话。用户上传文件先传对象存储，数据库只保存文件地址和元数据。耗时任务写入消息队列，由后台 worker 异步处理。业务数据仍写权威数据库。',
          '自动扩缩容依赖指标和模板。系统根据 CPU、请求延迟、队列长度或连接数触发扩容，启动新的 Web 实例；实例通过健康检查后加入负载均衡；流量下降后再缩容。因为实例没有不可替代状态，所以终止一台机器不会丢用户会话或业务数据。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '一个电商网站最初把购物车存在 Web 服务器内存。用户第一次请求到 A，加入商品；第二次请求到 B，购物车为空。临时解决可以做粘性会话，让同一用户尽量回到 A，但 A 故障时购物车仍丢失，扩容也不均衡。',
          '更稳的方案是把购物车写入 Redis 或数据库。用户请求到任意 Web 服务器，服务器都根据用户 ID 读取同一份购物车。上传商品评论图片时，Web 服务器生成上传凭证，浏览器把图片传到对象存储，Web 只保存 URL。这样新增十台 Web 机器时，不需要复制内存，也不需要关心用户之前访问过哪台。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '无状态化提升扩展性和故障恢复能力，但会增加外部依赖。Session 放 Redis，Redis 故障会影响登录；JWT 减少服务端存储，但吊销和权限变更不如 Session 灵活；所有状态都外移，也会增加网络调用和序列化成本。',
          '常见坑是把粘性会话当成无状态。粘性会话只是让请求尽量回到同一台机器，它掩盖了状态绑定，不能解决机器故障和弹性伸缩。另一个坑是把本地磁盘当临时上传区，结果扩容后文件散落在不同机器，后台处理找不到文件。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：“我会让 Web 层保持无状态，登录态、文件、任务和业务数据都放到共享或持久组件中。这样负载均衡可以自由分发请求，实例可以按指标自动加入或退出，不会因为机器变化丢状态。”'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '无状态 Web 层的核心是让机器可替换。它把扩展问题从“如何搬迁状态”变成“如何启动更多相同实例”。真正的状态仍然存在，只是被放到了更适合持久化、共享和恢复的位置。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. JWT 和服务端 Session 在撤销登录方面有什么差异？\n2. 哪些本地状态会阻碍 Web 层自动扩缩容？\n3. 为什么粘性会话不是长期理想方案？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会进入更大的系统边界：多数据中心如何服务不同地区用户，消息队列如何削峰和解耦。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '05_storage_failure_tradeoffs',
    categoryId: 'system-design',
    chapterId: 'part15_google_drive',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你应该能说明云盘如何通过分层存储、生命周期管理、去重和压缩控制成本，能识别元数据、块存储、通知和客户端同步中的常见故障，并能总结一致性、隐私、成本和体验之间的取舍。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '云盘长期运行后，最大压力来自海量存储和复杂同步状态。很多文件很少被访问，但用户仍期望可靠保存；很多块内容重复，但隐私策略可能限制跨用户去重；多设备同步要尽快，但强一致会增加延迟和系统复杂度。云盘设计就是选择一组可解释的规则，而不是追求所有目标同时最优。',
          '可靠性底线不能省。文件块要有多副本或纠删码，元数据要备份和可恢复，版本历史和回收站要能处理误删和覆盖。成本优化可以做，但不能以“偶尔丢文件”为代价。用户对云盘的信任一旦破坏，很难恢复。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '云盘数据具有长期性和低访问频率不均衡。用户可能多年不打开某个文件，但一旦需要，就期望它完整可用。热门共享文件会频繁下载，个人旧照片可能长期冷存储。统一使用最高性能存储太贵，统一使用冷存储体验又差。',
          '同步故障也很复杂。元数据数据库故障会影响目录和版本提交；块存储故障会影响上传下载；通知故障会让多端同步变慢；客户端故障会造成本地任务中断。不同故障的用户影响不同，不能用同一套降级方式处理。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '存储优化首先是分层。近期访问和共享频繁的内容放热存储，下载快；长期未访问的内容迁到冷存储，成本低但取回慢；回收站和历史版本可以设置生命周期，超过保留期后清理。迁移策略应基于访问时间、文件大小、用户套餐、共享热度和合规要求。',
          '故障处理按组件拆。元数据要主从、备份、分区和恢复演练；块存储要多副本、校验和、后台修复和丢块检测；通知服务短暂不可用时，客户端仍能靠变更日志轮询恢复；客户端要记录同步任务、支持重试、处理磁盘满和文件锁定。服务端不能相信客户端时间，要用服务端版本号和提交顺序判断一致性。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '用户删除了一个共享文件。系统不应立刻删除所有块，而是把元数据标记为删除并进入回收站，同时写入变更日志。其他设备收到变化后把本地文件移除或标记删除。若用户在保留期内恢复，元数据可以重新指向原版本块；若保留期结束，后台生命周期任务再清理不再被任何版本引用的块。',
          '再看块损坏。对象存储读取某个块时校验和不匹配，块服务不应返回坏数据，而应从其他副本读取，并触发后台修复。如果所有副本都不可读，系统要把文件标记为异常并报警。可靠性依赖校验、冗余和修复，而不是假设存储永远正确。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '强一致适合元数据提交、权限和版本号，因为这些决定用户看到的文件树；通知可以最终一致，因为漏通知能通过轮询补偿；文件内容读取可以按地域和缓存优化，只要校验和保证内容正确。端到端加密提升隐私，但会影响服务端搜索、在线预览、病毒扫描和跨用户去重。',
          '常见坑是过度追求去重。跨用户去重能省空间，但可能带来隐私侧信道；如果用户使用不同密钥，加密后内容也无法直接去重。另一个坑是忽略客户端故障，把同步问题都归因于服务端。真实云盘里，磁盘满、文件被占用、系统休眠、时钟不准都会造成同步异常。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：云盘的底线是可靠性，成本优化应建立在多副本、校验和和可恢复元数据之上；我会对元数据采用较强一致，对通知采用最终一致和补偿拉取，对存储按热度分层，并明确端到端加密、去重和在线预览之间的取舍。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '云盘收束时要突出取舍。分层存储和生命周期管理控制成本，校验和和冗余保证可靠，变更日志和客户端补偿保证同步恢复。不同数据需要不同一致性：元数据更强，通知更弱，内容路径重可靠和校验。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么通知服务短暂不可用不应该导致文件状态丢失？\n2. 端到端加密会影响云盘的哪些高级功能？\n3. 哪些数据适合强一致，哪些数据可以接受最终一致？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一部分进入学习方法，讨论如何从真实系统架构和工程博客中持续提升系统设计能力。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '06_architecture_read_write_path',
    categoryId: 'system-design',
    chapterId: 'part06_key_value_store',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '读完这一节，你要能从客户端请求开始，完整讲出 KV Store 的路由、协调、写入、读取、冲突处理和后台修复链路。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '一个分布式 KV Store 可以拆成五层：客户端路由或代理、元数据与分片管理、协调者、存储节点、后台修复与迁移任务。写路径负责把一个 key 写到足够副本并记录版本；读路径负责从足够副本取值、比较版本、返回结果并修复旧副本。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '单独理解分片、复制、Quorum、故障修复还不够，面试和工程设计都需要把它们串成请求路径。否则容易出现组件都说到了，但不知道请求具体经过哪里、失败在哪里被处理、元数据在哪里生效。',
          'KV Store 的难点是用户看到的接口简单，内部却要同时处理定位、并发、复制、故障和后台一致性。如果读写路径讲不清，说明设计还停留在名词层面。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '客户端发起 `put(key,value)` 后，首先通过客户端库或代理查元数据，确定 key 属于哪个 shard，以及这个 shard 的副本列表。请求到达协调者，协调者为写入生成版本信息，把写请求并发发送给 N 个副本。副本先写 WAL，再更新内存结构，返回确认。协调者收到至少 W 个成功后返回客户端；未成功副本后续通过 hint 或反熵补齐。',
          '`get(key)` 时，协调者同样定位副本列表，并向 R 个或更多副本发读请求。副本返回 value 和版本。协调者比较版本：如果有明确最新版本，返回它；如果发现旧副本，异步读修复；如果出现并发版本，按业务策略合并或把多版本返回上层处理。',
          '元数据管理负责 shard 到节点的映射、leader 位置、副本健康状态和迁移状态。后台任务负责 compaction、快照、反熵、扩容迁移、故障副本重建。这些任务不在用户同步路径上，但决定系统长期是否稳定。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '写入 `put("cart:u1", {"items":["book"]})`。代理计算 key hash，查到 shard-317，副本是 A、B、C，Quorum 配置 `N=3,W=2`。协调者把写发给 A、B、C。A 和 B 写 WAL 成功并返回，C 超时。协调者返回成功，同时记录 C 需要修复，或把写入 hint 到临时节点。',
          '之后读取 `get("cart:u1")`，配置 `R=2`。协调者读 B 和 C。B 返回新版本，C 返回旧版本。协调者比较版本后返回新值，并异步把新版本写回 C。用户只感受到一次普通读取，但内部完成了版本判断和副本修复。',
          '扩容时，调度器把 shard-317 的一个副本从旧节点迁到新节点。新节点先拷贝快照，再追 WAL 增量。追平后元数据切换副本列表。读写路径通过刷新元数据自然使用新副本。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '客户端直连存储节点少一跳，延迟低，但每个客户端都要处理元数据刷新和失败重试；代理模式集中控制，客户端简单，但代理本身要扩展和高可用。同步复制一致性更好但延迟高，异步复制延迟低但可能丢最近写入。后台修复越积极，收敛越快，但会抢占业务 IO。',
          '常见坑是把协调者设计成单点。协调者通常应该是任意节点或无状态代理都能承担的角色，否则它会成为瓶颈。另一个坑是忽略元数据版本。迁移期间如果客户端拿到旧路由，可能把写发到旧副本，所以请求要携带或校验元数据版本，必要时返回重试。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：写路径先根据元数据定位 shard 和副本，由协调者写入多个副本并等待 W 个确认；读路径读取 R 个副本，比较版本后返回最新值并触发读修复，后台再用反熵和迁移任务保证长期收敛。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          'KV Store 的架构不是组件堆叠，而是读写路径和后台路径的配合。同步路径决定用户延迟和可见一致性，异步路径决定副本能否在故障后恢复到健康状态。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 代理模式和客户端路由模式分别适合什么团队和业务规模？\n2. 为什么协调者最好不要是单点固定角色？\n3. 迁移期间旧元数据可能导致哪些读写错误？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一部分会进入唯一 ID 生成器，讨论如何在分布式环境下生成全局唯一、趋势递增、可扩展的 ID。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '06_data_centers_and_message_queue',
    categoryId: 'system-design',
    chapterId: 'part01_scale_from_zero',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '本节要解释两个常见演进：多数据中心用于降低跨地域延迟和提升灾备能力，消息队列用于把同步请求拆成可异步处理的任务。你要能说明它们解决的压力不同，也要知道它们会带来一致性、重复消费和故障恢复问题。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '多数据中心解决的是地理距离、区域故障和容量分布；消息队列解决的是请求峰值、服务耦合和慢任务隔离。前者把服务部署到多个地区，后者把任务从在线请求链路中拆出来。它们都让系统更有弹性，但也让数据同步、路由、幂等和监控变得更重要。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '单一区域部署时，远距离用户会承受更高网络延迟。欧洲用户访问美国机房，即使服务器很快，光网络往返也要时间。更严重的是，整个区域故障、云厂商事故或网络中断，会让全球用户受影响。多数据中心就是为延迟和灾备而生。',
          '消息队列来自另一类压力：请求链路里有些工作很慢，且不一定要立刻完成。例如发送邮件、生成缩略图、写审计日志、推送通知。如果每个用户请求都同步等待这些任务，峰值时 Web 服务会被慢依赖拖住。队列把“先接住请求”和“慢慢处理任务”分开。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '多数据中心通常包含流量路由和数据复制。DNS、全局负载均衡或边缘网关根据用户位置和健康状态，把请求导向合适区域。静态资源可以多地缓存；读多写少的数据可以跨区域复制；强一致写入则要谨慎选择主区域或分区主写，否则冲突处理会非常复杂。',
          '消息队列的流程是：生产者把任务写入队列，队列持久化并按顺序或分区保存，消费者从队列拉取或接收任务，处理成功后确认。若消费者失败，任务可以重试。队列让生产速度和消费速度解耦，但意味着任务可能延迟、重复、乱序，消费者必须能幂等处理。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '一个图片分享应用在美国和欧洲都有用户。图片上传请求可以就近进入欧洲机房，原图存对象存储，元数据写入主数据库或区域数据库。浏览图片时，欧洲用户从欧洲 CDN 和服务读取，延迟更低。如果美国区域故障，流量可以切到欧洲，但写入能力取决于数据库复制和主从策略。',
          '上传图片后要生成三种缩略图。同步做法是用户请求一直等图片处理完成；队列做法是 Web 服务保存原图和记录后，把 `generate_thumbnail` 任务写入队列并立即返回“处理中”。后台 worker 消费任务，生成缩略图，更新数据库。若 worker 崩溃，任务重试；因此生成逻辑要用同一个文件名覆盖或检查状态，避免重复生成导致脏数据。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '多数据中心降低延迟和提升灾备，但成本高，部署复杂，数据一致性更难。不是所有系统都需要一开始多活；如果用户集中在一个地区，先做好单区域高可用和备份更实际。队列能削峰，但不是无限缓冲。消费者处理不过来时，队列积压会让任务延迟变长，甚至磁盘爆满。',
          '常见坑是认为“用了队列就不会丢消息”。消息可靠性取决于持久化、确认机制、重试和死信队列。另一个坑是忘记幂等：消费者重试同一条支付或发券任务，可能造成重复扣款或重复发券。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：“多数据中心主要处理跨地域延迟和区域故障，消息队列主要处理异步解耦和削峰。它们提升弹性，但我要同时说明数据复制策略、任务幂等、重试和积压监控。”'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '多数据中心把系统扩展到空间维度，消息队列把请求链路扩展到时间维度。一个让用户更近，一个让慢任务晚点做。两者都要求你从故障流而不是正常流出发，设计同步、重试和恢复。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 哪些业务必须同步完成，哪些可以放入队列异步处理？\n2. 多数据中心下，为什么跨区域强一致写入很难？\n3. 消费者重复处理同一条消息时，如何保证结果不重复？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会讨论可观测性和数据库分片：当系统变复杂后，如何知道哪里出问题，以及如何继续突破单库容量。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '06_rules_distributed_and_race_conditions',
    categoryId: 'system-design',
    chapterId: 'part04_rate_limiter',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '本节要讲限流器在分布式环境中的难点：规则匹配、状态共享、原子更新、热点 key 和跨区域一致性。你要能说明为什么单机算法搬到多实例后会出错，以及工程上怎样控制误差。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '分布式限流的核心难点是多个实例同时对同一个 key 做决策。如果每个实例各算各的，全局配额会被放大；如果所有请求都打到集中存储，准确性提高但延迟和热点风险上升。工程上常在准确性、可用性和性能之间取舍：集中原子计数、本地预分配令牌、分层限流和近似算法都是常见方案。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '单机限流很简单，因为所有请求都经过同一个内存状态。多台网关后，请求被负载均衡分散到不同实例。如果规则是每分钟 100 次，而 10 台网关各自本地允许 100 次，全局就可能变成 1000 次。对开放 API、短信和登录接口来说，这个误差可能不可接受。',
          '但把所有计数放到一个 Redis 也不是完美答案。高频 key 会成为热点，网络调用增加延迟，Redis 故障会影响入口。跨区域系统更复杂：欧洲和美国网关如果都同步访问同一个中心存储，延迟高；如果各自本地计数，全局配额又不准确。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '集中原子计数是最直接方案。所有实例对同一个 key 调用同一个存储，用 Redis Lua、数据库原子更新或专用计数服务保证“检查并更新”不可分割。这样不会出现两个请求同时看到还有 1 次额度并都通过的问题。',
          '另一种方案是令牌预分配。全局服务把某个 key 的令牌分批发给各网关实例，实例本地消耗，低延迟；用完再申请。它牺牲部分准确性，换取性能和可用性。分层限流也常见：本地先按粗规则拦一层，集中存储再做关键规则，减少中心压力。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '一个租户每秒最多 1000 次 API 调用，系统有 20 台网关。完全本地限流时，每台设置 1000 次会严重超发；每台平均分 50 次又会在流量不均时误杀，因为某些网关收到更多请求。集中 Redis 可以准确控制 1000 次，但这个租户成为热点 key，每秒所有请求都更新同一个 key。',
          '改进方案是本地加全局。每台网关先有一个本地令牌桶，限制极端突发；全局 Redis 用 Lua 控制总配额。对超大租户，可以把 key 拆成多个子 key 近似计数，或由令牌服务给网关分配小批量令牌。这样误差可控，热点压力下降。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '准确性越高，通常越依赖共享状态和原子更新；延迟越低，通常越偏本地决策；可用性越高，通常要允许一定误差或降级。跨区域全局强一致限流成本很高，很多业务会选择区域配额加全局异步对账，而不是每次请求跨洲同步。',
          '常见坑是忽略竞态条件。比如先 `GET count` 再 `SET count+1`，两个并发请求可能都通过。另一个坑是规则冲突：用户级、IP 级、租户级、接口级规则同时存在时，要定义匹配优先级和合并方式，通常是任一规则超限就拒绝。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：“分布式限流要处理多个实例同时更新同一配额的问题。强准确可以用集中原子计数；高性能可以用本地令牌和全局预分配；跨区域场景通常要接受可控误差，并用分层限流和监控防止超发。”'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '分布式限流的难点不在算法名字，而在共享状态和并发决策。你需要明确准确性要求，再选择集中、分层、本地或预分配方案。规则优先级、原子性和热点治理是工程落地的核心。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 为什么 `GET` 后再 `SET` 不能保证限流计数正确？\n2. 本地限流和集中限流分别适合什么场景？\n3. 跨区域限流为什么常常需要接受近似准确？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会收尾限流器设计，讨论优化、监控、故障退化和面试中如何完整表达。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '07_observability_and_database_sharding',
    categoryId: 'system-design',
    chapterId: 'part01_scale_from_zero',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '这一节要讲两个容易被低估的主题：可观测性帮助你知道系统为什么慢、哪里错、容量还剩多少；数据库分片帮助你在单库容量或写入能力到顶后继续扩展。你要能说明监控、日志、追踪和分片键各自解决什么问题。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '系统越复杂，越不能靠感觉排障。可观测性通过指标、日志和链路追踪把请求、资源和错误暴露出来。数据库分片则是在单个数据库无法承受数据量或写入量时，把数据按规则分散到多个库或表。前者让系统可理解，后者让数据层可扩展；两者都需要提前设计，否则问题出现时补救成本很高。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '当架构只有一台机器时，登录上去看 CPU、日志和数据库就能定位大部分问题。加入负载均衡、缓存、队列、多副本和多数据中心后，一个请求可能经过十几个组件。用户说“支付失败”，可能是网关超时、缓存旧数据、队列积压、数据库锁等待，也可能是某个下游接口错误。',
          '数据库也会遇到硬上限。单库数据量太大，索引变深，备份恢复变慢；写入太多，主库 CPU、IO 或锁冲突到顶；某些大表迁移需要数小时。此时只读复制不能解决写入和容量问题，分片才进入视野。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '可观测性通常分三层。指标记录可聚合的数字，如 QPS、错误率、P95 延迟、CPU、队列长度、缓存命中率。日志记录具体事件，如某个请求失败的用户、参数、错误码。链路追踪给请求打 trace id，串起它在网关、服务、数据库和队列中的耗时。三者结合，才能从“哪里异常”走到“为什么异常”。',
          '分片的核心是选择分片键和路由规则。按用户 ID 哈希，可以把用户数据均匀分到多个库；按时间分片，适合日志和订单归档；按地区分片，适合本地化业务。请求进来后，应用或中间件根据分片键计算目标库表，再执行读写。没有分片键的查询会变成跨分片扫描，成本很高。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '一个订单系统的 `orders` 表达到 20 亿行，主库写入延迟升高，备份恢复超过可接受时间。团队决定按 `user_id` 哈希分成 64 个逻辑分片，映射到 8 个物理数据库。用户查看订单时，请求带用户 ID，路由到对应分片，只查一小部分数据。',
          '上线后，客服要按订单号查订单。如果订单号里没有分片信息，就不知道去哪一个库查，只能扫 64 个分片，慢且容易放大压力。更好的做法是订单号包含分片位，或者维护订单号到用户 ID 的索引表。可观测性也要跟上：每个分片的 QPS、慢查询、磁盘和错误率都要分别看，否则某个热分片会被总平均值掩盖。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '可观测性有成本：采样、存储、索引和告警维护都会消耗资源。日志太少无法排障，日志太多成本爆炸，还可能泄露敏感数据。分片能扩展容量和写入，但会牺牲跨分片事务、全局排序、聚合查询和运维简单性。',
          '常见坑是过早分片。很多系统通过索引优化、归档、读写分离、缓存就能撑很久，分片一旦做了，业务查询和数据迁移都会长期受影响。另一个坑是选错分片键，比如按地区分片却遇到单个大城市流量极高，导致热点分片。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：“系统复杂后我会用指标定位异常面，用日志看具体错误，用 trace 串起请求路径；当单库容量或写入到顶时，再按核心访问路径选择分片键，避免跨分片查询成为常态。”'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '可观测性让复杂系统可诊断，分片让数据库突破单点容量。一个解决“看不见”，一个解决“装不下、写不动”。但它们都不是装饰项：监控要围绕关键路径，分片要围绕查询模式。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 指标、日志和链路追踪分别适合回答什么问题？\n2. 为什么没有分片键的查询会很危险？\n3. 什么时候应该先优化索引或归档，而不是直接分片？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一节会把前面的扩展步骤串成一张路线图，帮助你在面试中按压力来源逐步演进系统。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '07_optimization_monitoring_and_wrap_up',
    categoryId: 'system-design',
    chapterId: 'part04_rate_limiter',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '本节要把 Rate Limiter 的优化和收尾讲完整。你要能说明如何降低限流器自身延迟，如何监控误杀和绕过，如何在依赖故障时退化，以及如何在面试中把整个设计串成一段清晰答案。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '限流器上线后，最重要的不是算法名称，而是它是否低延迟、可观测、可调规则、可降级。优化方向包括本地缓存规则、批量或预取令牌、减少远程调用、热点 key 拆分和近似计数。监控要覆盖通过率、拒绝率、决策延迟、存储错误、规则命中和用户投诉。故障策略要按业务风险选择 fail open、fail closed 或保守本地规则。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '限流器保护别人，但它自己也在关键路径上。一次普通 API 请求可能只需要几十毫秒，如果限流决策多花 20 毫秒，整体延迟会明显上升。更糟的是，限流存储故障可能让所有请求卡住。一个保护组件如果没有退化策略，就会变成新的事故源。',
          '另外，限流规则不是写完就结束。业务增长、套餐变化、攻击方式变化、误杀反馈都会要求调整规则。没有监控和审计，团队不知道限流是否真的保护了后端，也不知道是否伤害了正常用户。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '性能优化先从请求路径看。规则应缓存在本地，避免每次查配置库；状态更新应尽量一次网络往返完成，如 Redis Lua 原子脚本；高频 key 可以做本地预扣令牌或分片计数；对低风险接口可以使用近似算法减少中心压力。所有外部调用都要有短超时。',
          '监控要分业务和系统两层。系统指标包括限流决策 P95 延迟、存储 QPS、错误率、超时率、热点 key、规则发布版本。业务指标包括每个租户或接口的拒绝率、429 数量、重试成功率、验证码触发率、投诉和转化下降。没有业务视角，误杀很难被发现。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '一个 API Gateway 使用 Redis 做全局令牌桶。上线初期，一切正常。某天大客户活动导致 `tenant:big:/search` 成为热点 key，Redis 单分片 CPU 升高，限流决策 P95 从 2 毫秒涨到 30 毫秒。监控发现热点后，团队把该租户的配额拆成 16 个子桶，网关按请求哈希选择子桶，并保留总量近似控制。',
          '同一天，规则发布把免费套餐从每分钟 100 次误改成 10 次，429 暴涨。因为规则有版本和审计，团队快速回滚；因为监控按套餐和接口展示拒绝率，问题几分钟内被发现。如果没有这些机制，用户只会看到“系统变差”，团队却不知道是规则错误。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '优化常常用准确性换性能。子桶、预分配和本地缓存都会带来短暂误差；但如果业务能接受，这比所有请求强依赖中心存储更稳。fail open 能保护用户体验，但攻击流量可能进入后端；fail closed 能保护后端，但存储故障会误伤正常请求。很多系统会按接口分级：公开搜索可 fail open，短信和支付创建更保守。',
          '常见坑是只监控被拒请求，不监控允许请求和后端压力。限流目标是保护系统，如果 429 很少但数据库仍被打爆，规则可能太松或维度不对。另一个坑是没有灰度规则发布，导致配置错误立刻影响所有用户。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：“我会把限流器作为关键路径组件来优化和监控：规则本地缓存，计数更新原子且低延迟，热点 key 有拆分或预分配方案；监控通过率、拒绝率、决策延迟和误杀反馈；依赖故障时按业务风险选择 fail open、fail closed 或本地保守规则。”'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '一个完整 Rate Limiter 设计要覆盖需求、放置位置、算法、架构、分布式并发、规则管理、优化、监控和故障退化。面试里不要只背令牌桶；要讲清它如何保护系统，代价是什么，失败时如何不把问题扩大。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 限流器应该监控哪些系统指标和业务指标？\n2. 什么场景适合 fail open，什么场景适合 fail closed？\n3. 热点 key 会怎样影响集中式限流存储，如何缓解？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一部分会进入一致性哈希，讨论当数据或请求需要分布到多台机器时，如何减少扩容和缩容带来的迁移成本。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '08_scaling_playbook',
    categoryId: 'system-design',
    chapterId: 'part01_scale_from_zero',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '本节目标',
        paragraphs: [
          '这一节要把前面所有扩展动作连成一条可讲述的路线。你要能根据用户规模、读写比例、数据量、延迟和可用性要求，解释系统为什么从单机演进到负载均衡、缓存、队列、多数据中心和分片。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '先说结论',
        paragraphs: [
          '扩展不是按组件清单采购，而是按瓶颈逐步演进：先做最小系统，拆出数据库；Web 层不够就加负载均衡；读压力高就加缓存和 CDN；状态阻碍扩容就做无状态化；慢任务拖住请求就上队列；跨地域和灾备要求提高再考虑多数据中心；单库容量或写入到顶才分片。每一步都要说明解决的压力和新增的成本。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '为什么会有这个问题',
        paragraphs: [
          '系统设计面试里，很多回答失败不是因为少说一个组件，而是因为顺序没有因果。刚起步的产品没必要先上多数据中心，读流量不高时缓存收益有限，单库还很空时分片只会增加复杂度。真正的架构演进来自压力变化：用户变多、数据变大、延迟要求更严、可用性要求更高、团队发布更频繁。',
          '这也是工程现实。每引入一个组件，就多一个故障模式和运维对象。缓存会过期，队列会积压，副本会延迟，负载均衡器要健康检查，分片会影响查询。扩展清单的价值不是“全都要”，而是帮你知道什么时候该要。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '核心机制',
        paragraphs: [
          '可以按四类压力组织答案。容量压力：CPU、内存、磁盘、连接数、数据库行数。延迟压力：跨地域网络、慢查询、重复计算、同步等待。可用性压力：单点故障、发布风险、区域故障。复杂度压力：排障困难、数据增长、团队协作。',
          '对应动作也有顺序。单机验证业务；独立数据库保护状态；多 Web 实例加负载均衡提高入口容量；缓存和 CDN 减少重复读；无状态化支持自动扩缩容；队列隔离慢任务并削峰；监控和追踪让问题可见；复制和多数据中心提升恢复能力；分片处理单库上限。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '具体例子',
        paragraphs: [
          '假设一个社交应用从 1000 用户增长到 100 万用户。早期一台应用加一台数据库足够。用户开始频繁刷首页后，读请求远大于写请求，先缓存热门帖子和用户资料，图片走 CDN。登录会话放 Redis，Web 层变无状态，负载均衡后面可以加更多实例。',
          '后来上传图片和发送通知变慢，影响发帖接口，就把图片处理、通知推送写入队列，后台 worker 异步消费。再后来欧洲用户增长，访问美国机房延迟高，就部署欧洲边缘和服务节点。最终帖子表和关系表巨大，单库写入和备份吃紧，才按用户 ID 或关系方向拆分数据。每一步都由具体症状驱动。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '取舍与常见坑',
        paragraphs: [
          '扩展的收益是容量、延迟和可用性提升；成本是系统状态更多、故障路径更多、团队认知负担更高。越早引入复杂组件，越早承担这些成本。面试中要展示判断力：先满足需求，再保留演进空间。',
          '常见坑是把架构图画成最终形态，却不解释为什么现在需要。另一个坑是只讨论正常请求流，不讨论失败流：缓存挂了怎么办，队列积压怎么办，数据库主库挂了怎么办，某个区域不可用怎么办。成熟回答必须包含退化策略和观测指标。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '面试表达',
        paragraphs: [
          '可以这样说：“我会按瓶颈演进架构，而不是一开始堆满组件。每一步先说明当前压力，再说明方案如何改变请求流或数据流，并补充它带来的新故障模式和监控点。”'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '小结',
        paragraphs: [
          '从零到百万用户不是一张固定图，而是一组决策顺序。先用简单系统验证，再按压力拆分。好答案要能把组件放回问题里：它为什么出现，怎样工作，代价是什么，失败时系统如何退化。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '思考题',
        paragraphs: [
          '1. 如果一个系统读多写少，你会优先考虑哪些扩展动作？\n2. 为什么分片通常不应该排在架构演进的最前面？\n3. 面试中如何用“压力来源”组织高层设计叙述？'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '下一节预告',
        paragraphs: [
          '下一部分会进入估算：用基本单位、延迟直觉、可用性和 QPS，把设计从“感觉可行”推进到“数字上站得住”。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: 'chapter4-attention-efficiency-stability',
    categoryId: 'diy-llm',
    chapterId: 'chapter-4',
    course: 'DIY LLM',
    date: 'Card 07',
    title: {
      zh: 'Chapter 4｜4.2.5-4.3 注意力变体、参数量与训练稳定性',
      en: 'Chapter 4 | 4.2.5-4.3 Attention Variants, Parameter Count, and Training Stability'
    },
    summary: {
      zh: '把 MQA/GQA/MLA/DSA、稀疏注意力、长上下文外推、FFN 参数、权重衰减、z-loss、QK Norm 和软截断拆成可视化笔记。',
      en: 'Breaking down MQA/GQA/MLA/DSA, sparse attention, long-context extrapolation, FFN parameters, weight decay, z-loss, QK Norm, and soft capping into visual notes.'
    },
    tags: [],
    sections: [
      {
        heading: '第一组：先复习 Q/K/V 原来怎么用',
        paragraphs: [
          '自注意力里，每个 token 的 hidden 向量会分别乘三组权重，得到 Q、K、V。Q 像”我要找什么”，K 像”我有什么标签可被别人匹配”，V 像”如果别人关注我，我实际贡献什么内容”。',
          '计算时，某个位置的 Q 会和所有位置的 K 做点积，得到注意力分数；softmax 后变成权重；这些权重再去加权求和所有位置的 V。也就是说，K 决定”看谁”，V 决定”拿什么”。',
          '在多头注意力 MHA 里，每个 head 都有自己的一套 Q/K/V，所以每个 head 都能用自己的方式判断相关性，也能保存自己的一份 KV cache。推理长上下文时，KV cache 很贵，后面的 MQA/GQA/MLA 都是在想办法让 KV 更省。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: [
          {
            title: 'Q 是当前 token 的问题',
            body: '当前位置拿 Q 去问：我应该关注上下文里的哪些 token？'
          },
          {
            title: 'K 是每个 token 的索引标签',
            body: '所有历史 token 的 K 会被拿来和当前 Q 匹配，决定注意力权重。'
          },
          {
            title: 'V 是真正被汇总的信息',
            body: 'softmax 权重出来后，模型不是加权 K，而是加权 V。'
          }
        ]
      },
      {
        heading: '第二组：MHA、MQA、GQA、MLA 到底差在哪里',
        paragraphs: [
          'MHA 是”每个 Q head 配一套自己的 K/V”。表达力强，但推理时每层每个 token 都要缓存很多 K/V。',
          'MQA 是”很多 Q head 共享同一套 K/V”。为什么可以共享？因为 Q 仍然可以有很多个头，负责提出不同问题；但被查询的历史内容 K/V 可以压成同一份公共记忆。代价是不同头看到的 K/V 记忆变少，表达灵活度下降一些。',
          'GQA 是 MHA 和 MQA 中间态：不是所有 Q head 共享一套 K/V，而是每一组 Q head 共享一套 K/V。比如 8 个 Q head 分成 2 组，每组 4 个 Q head 共享一套 K/V。它比 MHA 省 cache，比 MQA 保留更多多样性。',
          'MLA 可以理解成更进一步：不是直接缓存完整 K/V，而是先把 K/V 联合压到一个低维 latent 里，需要时再从 latent 还原出注意力需要的信息。低秩联合压缩的意思是：用更小的中间表示，近似承载原来高维 K/V 的主要信息，就像用少量主成分描述一张大表。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: [],
        attentionVariantVisual: {
          variants: [
            {
              kind: 'mha',
              label: 'MHA',
              title: {
                zh: '每头独立 K/V',
                en: 'Independent K/V per head'
              },
              q: [
                'Q1',
                'Q2',
                'Q3',
                'Q4'
              ],
              kv: [
                'K/V1',
                'K/V2',
                'K/V3',
                'K/V4'
              ],
              body: {
                zh: '表达最灵活，但 KV cache 最大。',
                en: 'Most flexible expression, but largest KV cache.'
              }
            },
            {
              kind: 'mqa',
              label: 'MQA',
              title: {
                zh: '所有头共享 K/V',
                en: 'All heads share K/V'
              },
              q: [
                'Q1',
                'Q2',
                'Q3',
                'Q4'
              ],
              kv: [
                'shared K/V'
              ],
              body: {
                zh: 'Q 仍有多头，但历史记忆只有一份，推理 cache 很省。',
                en: 'Q still has multiple heads, but historical memory is a single copy — very cache-efficient for inference.'
              }
            },
            {
              kind: 'gqa',
              label: 'GQA',
              title: {
                zh: '分组共享 K/V',
                en: 'Grouped K/V sharing'
              },
              q: [
                'Q1',
                'Q2',
                'Q3',
                'Q4'
              ],
              kv: [
                'K/V group A',
                'K/V group B'
              ],
              body: {
                zh: '介于 MHA 和 MQA 之间：省一部分 cache，也保留一部分多样性。',
                en: 'Between MHA and MQA: saves some cache while retaining some diversity.'
              }
            },
            {
              kind: 'mla',
              label: 'MLA',
              title: {
                zh: '低维 latent 存记忆',
                en: 'Low-dim latent for memory'
              },
              q: [
                'Q1',
                'Q2',
                'Q3',
                'Q4'
              ],
              kv: [
                'compressed latent'
              ],
              body: {
                zh: '把 K/V 联合压缩成低维表示，减少缓存，再按需还原。',
                en: 'Jointly compress K/V into a low-dimensional representation, reducing cache, and reconstruct on demand.'
              }
            }
          ]
        }
      },
      {
        heading: '第三组：稀疏注意力为什么能获得更大的注意力窗口',
        paragraphs: [
          '完整注意力的成本随上下文长度平方增长。一个 token 如果能看 128k 个历史 token，那么每层都要对巨大的注意力矩阵做计算和读写。窗口越长，成本越夸张。',
          '稀疏注意力的核心不是”窗口真的免费变大”，而是”候选上下文很长，但每次只认真看其中一部分”。比如滑动窗口只看附近 token，global token 偶尔全局连通，top-k 稀疏注意力先筛出最相关的一小批 token，再只对它们做完整注意力。',
          '这样模型名义上可以接收更长上下文，因为它不用为每个 token 都和所有历史 token 两两计算。代价是：被稀疏模式跳过的信息不能被当前层直接读取，所以设计重点变成”哪些位置必须看，哪些位置可以跳过”。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: [],
        sparseWindowVisual: {
          cells: [
            'local',
            'local',
            'global',
            'global',
            'global',
            'global',
            'global',
            'global',
            'global',
            'global',
            'global',
            'global',
            'local',
            'local',
            'local',
            'off',
            'global',
            'off',
            'skip',
            'off',
            'global',
            'off',
            'off',
            'off',
            'global',
            'local',
            'local',
            'local',
            'global',
            'skip',
            'off',
            'off',
            'global',
            'off',
            'off',
            'off',
            'global',
            'off',
            'local',
            'local',
            'local',
            'off',
            'off',
            'off',
            'global',
            'off',
            'off',
            'skip',
            'global',
            'global',
            'global',
            'local',
            'local',
            'local',
            'global',
            'global',
            'global',
            'global',
            'global',
            'global',
            'global',
            'off',
            'skip',
            'off',
            'local',
            'local',
            'local',
            'off',
            'global',
            'skip',
            'off',
            'off',
            'global',
            'skip',
            'off',
            'off',
            'global',
            'local',
            'local',
            'local',
            'global',
            'off',
            'off',
            'off',
            'global',
            'off',
            'off',
            'off',
            'global',
            'off',
            'local',
            'local',
            'local',
            'off',
            'off',
            'off',
            'global',
            'global',
            'global',
            'global',
            'global',
            'global',
            'global',
            'local',
            'local',
            'local',
            'global',
            'global',
            'global',
            'off',
            'off',
            'off',
            'global',
            'skip',
            'off',
            'off',
            'local',
            'local',
            'local',
            'off',
            'global',
            'off',
            'off',
            'off',
            'global',
            'off',
            'off',
            'off',
            'global',
            'local',
            'local',
            'local',
            'global',
            'off',
            'off',
            'skip',
            'global',
            'off',
            'off',
            'off',
            'global',
            'off',
            'local',
            'local'
          ],
          legend: [
            {
              kind: 'local',
              title: {
                zh: '滑动窗口',
                en: 'Sliding window'
              },
              body: {
                zh: '每个 token 主要看附近邻居，RoPE 只需要处理局部距离。',
                en: 'Each token mainly looks at nearby neighbors; RoPE only needs to handle local distances.'
              }
            },
            {
              kind: 'global',
              title: {
                zh: '偶尔全局注意力',
                en: 'Occasional global attention'
              },
              body: {
                zh: '少数层或少数位置做完整连通，帮助远距离信息跨窗口传递。',
                en: 'A few layers or positions do full connectivity, helping long-range information transfer across windows.'
              }
            },
            {
              kind: 'skip',
              title: {
                zh: '动态选中的远处 token',
                en: 'Dynamically selected distant tokens'
              },
              body: {
                zh: 'top-k 或 indexer 先筛选，再对少量重要远处 token 做注意力。',
                en: 'Top-k or an indexer pre-selects, then attention is computed only on a small number of important distant tokens.'
              }
            }
          ]
        }
      },
      {
        heading: '第四组：什么叫长度外推，为什么”无位置嵌入的完全注意力”有用',
        paragraphs: [
          '外推就是：训练时主要见过较短长度，比如 8k 或 32k；推理时希望模型能处理更长长度，比如 128k、1M。模型在没充分训练过的长度上还能工作，就叫长度外推。',
          'RoPE 这类位置方法会把”距离”编码进角度。训练时如果只见过短距离，推理时突然出现很大的位置索引，角度模式可能落到训练分布外，模型会不稳。滑动窗口的好处是 RoPE 只处理局部距离，外推压力变小。',
          '原文说的”四块组合”可以这样理解：每四层里，一层做没有位置嵌入的全局自注意力，它不知道绝对位置，所以不受超长位置索引的外推困扰，但能让远处 token 互相交换信息；另外三层用带 RoPE 的滑动窗口注意力，负责局部顺序和局部语义。',
          '这招很巧：全局层偶尔出现，成本可控；局部层多数出现，位置感知稳定；远距离依赖通过无位置全局层传过去，避免 RoPE 被迫解释超长距离。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: [
          {
            title: '外推不是”推理”',
            body: '这里的 extrapolation 指长度超出训练分布，不是模型思考能力的推理。'
          },
          {
            title: '无位置全局层像”远程广播”',
            body: '它不关心谁在第几位，只负责让远处信息能碰到一起。'
          },
          {
            title: '带 RoPE 滑窗层像”局部精读”',
            body: '它只在附近窗口里使用位置感，避免 RoPE 面对训练外的超长距离。'
          }
        ]
      },
      {
        heading: '第五组：DSA 的”细粒度动态稀疏”是什么意思，最近是不是很多人在用',
        paragraphs: [
          '细粒度是说稀疏选择可以细到 token 或小块 token 级别，而不是粗暴地规定”只能看固定窗口”或”只能看固定模式”。动态是说每个 query 会根据当前内容选择该看哪些 token，不是提前写死一张永远不变的稀疏图。',
          'DSA 可以理解成两步：先用一个轻量 indexer 在很长上下文里快速找候选，再从候选里挑 top-k token，让标准注意力只处理这些被选中的位置。这样既保留长上下文的可能性，又把真正昂贵的注意力算子限制在少量 token 上。',
          '它是不是最近用得很多？更准确说：截至 2026-04，它是 DeepSeek-V3.2-Exp 引入的很新的实验性方向，已经被 vLLM 等推理生态快速适配，但还不能说已经像 MQA/GQA/RoPE 那样成为所有主流模型的常规标配。它更像”长上下文稀疏注意力正在升温的一条代表路线”。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: [
          {
            title: '细粒度',
            body: '不是整段整段地固定跳过，而是可以细到 token 级选择。'
          },
          {
            title: '动态',
            body: '不是固定稀疏图，而是每个 query 根据内容临时选重要 token。'
          },
          {
            title: 'DSA 的位置',
            body: '它目前更像前沿实验和工程适配热点，不是已经完全替代普通注意力的通用默认项。'
          }
        ]
      },
      {
        heading: '第六组：4.3 里参数为什么和模型维度、宽度、深度有关',
        paragraphs: [
          '模型维度 d_model 就是每个 token hidden 向量的长度，也常被直觉地叫”模型宽度”。比如 d_model=4096，意思是每个位置用 4096 个数字表示。',
          '深度一般就是 Transformer block 的层数。层数越多，同一类模块重复越多，参数量也越多。',
          'FFN 的参数和输入维度有关，因为 FFN 是线性层：输入 d_model，先投影到中间维度 d_ff，再投影回 d_model。两块权重大约是 d_model x d_ff 和 d_ff x d_model，所以大约 2 x d_model x d_ff。',
          'GLU 也有参数，因为它不是一个免费开关。它通常有内容分支、门控分支、输出分支：xW_up、xW_gate、再 W_down。门控那条路也要通过一个线性层学出来，所以会多一组权重。'
        ],
        faqs: [],
        bullets: [
          '注意力常见参数：Wq、Wk、Wv、Wo。',
          'FFN 常见参数：W_up、W_down；如果是 GLU/SwiGLU，还会多 W_gate。',
          '归一化参数：LayerNorm/RMSNorm 的缩放参数 gamma，有时还有 beta。',
          'embedding 参数：词表大小 vocab_size x d_model。',
          '宽度：通常指 hidden size / d_model 变大。',
          '深度：通常指 Transformer 层数变多。'
        ],
        emphasisCards: []
      },
      {
        heading: '第七组：权重衰减到底带来了什么',
        paragraphs: [
          '权重衰减可以理解成”别让权重长得太夸张”的约束。优化器每次更新时，除了按梯度降低 loss，也会轻轻把权重往 0 拉一点。',
          '它带来的主要收益是正则化：减少模型过度依赖某些特别大的权重，让表示更平滑，泛化更好。在大模型训练里，它也能让参数尺度更可控，减少一些数值和优化上的坏习惯。',
          '但权重衰减不是越大越好。如果拉得太狠，模型会学不动或表达能力下降。所以它是一种”温和刹车”，不是主发动机。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '第八组：softmax、z-loss、QK Norm 和软截断在控制什么',
        paragraphs: [
          '这里要先拆一个误会：LayerNorm 不是 softmax。LayerNorm 是把一个向量的数值尺度标准化；softmax 是把一组分数变成概率分布。一个是调数值范围，一个是做概率归一化。',
          '注意力里的 softmax 输入是 QK 点积分数。如果这些分数过大，softmax 会极度尖锐：一个 token 权重接近 1，其他接近 0；如果 logit 尺度持续膨胀，还可能导致训练不稳定。这就是所谓”不良行为”：注意力过早塌缩、梯度变差、数值尺度失控。',
          'z-loss 控制的是 softmax 的归一化因子 z，也就是 exp(logits) 的总量对应的 log-sum-exp。它惩罚过大的 log-sum-exp，让 logits 不要整体膨胀。QK Norm 则是在 softmax 之前先规范 Q 和 K，让点积分数天然别太大。',
          '软截断是截断 logits 或 attention scores 的极端值，但不是硬 clip 到一个死边界，而是用平滑函数把过大的值压弯。反对意见是：它可能压掉有用的强信号，导致困惑度变差；而 QK Norm 更像从源头控制 Q/K 的尺度，常常允许更激进学习率，让优化器更有空间发挥。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: [
          {
            title: 'LayerNorm 不是 softmax',
            body: 'LayerNorm 调一条向量的尺度；softmax 把一组分数变成概率。'
          },
          {
            title: 'QK Norm 控制输入',
            body: '它不去修 softmax 输出，而是在 softmax 前让 QK 分数别失控。'
          },
          {
            title: '软截断的争议',
            body: '稳定不等于效果更好；如果把有用的大分数也压掉，困惑度可能变差。'
          }
        ],
        stabilityControlVisual: {
          controls: [
            {
              kind: 'raw',
              title: {
                zh: '原始 QK 分数',
                en: 'Raw QK Scores'
              },
              bars: [
                18,
                22,
                36,
                92,
                14,
                20
              ],
              body: {
                zh: '分数跨度很大，softmax 容易变尖。',
                en: 'Score range is very wide, making softmax prone to becoming peaked.'
              }
            },
            {
              kind: 'zloss',
              title: 'z-loss',
              bars: [
                20,
                28,
                40,
                70,
                18,
                24
              ],
              body: {
                zh: '惩罚整体 log-sum-exp 膨胀，别让 logits 集体长太大。',
                en: 'Penalizes overall log-sum-exp inflation to keep logits from growing too large collectively.'
              }
            },
            {
              kind: 'qknorm',
              title: 'QK Norm',
              bars: [
                36,
                42,
                50,
                62,
                34,
                40
              ],
              body: {
                zh: '先规范 Q/K，再点积，从源头控制 softmax 输入范围。',
                en: 'Normalizes Q/K first, then computes dot products, controlling the softmax input range at the source.'
              }
            },
            {
              kind: 'softcap',
              title: {
                zh: '软截断',
                en: 'Soft Capping'
              },
              bars: [
                24,
                30,
                42,
                58,
                22,
                28
              ],
              body: {
                zh: '把极端值平滑压弯，但可能压掉有用强信号。',
                en: 'Smoothly bends down extreme values, but may suppress useful strong signals.'
              }
            }
          ]
        }
      },
      {
        heading: '第九组：一句话总结',
        paragraphs: [
          '这一段的主线是：注意力变体主要在省 KV cache 和长上下文成本；稀疏注意力主要在”长上下文里只认真看少量重要位置”；4.3 的参数量由宽度 d_model、FFN 中间维度、层数和模块结构共同决定；训练稳定性方法则是在控制 softmax 前后的数值尺度，避免注意力分布和 logits 失控。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: 'chapter4-modern-transformer-variants',
    categoryId: 'diy-llm',
    chapterId: 'chapter-4',
    course: 'DIY LLM',
    date: 'Card 06',
    title: {
      zh: 'Chapter 4｜4.2 现代 Transformer 变体笔记',
      en: 'Chapter 4 | 4.2 Modern Transformer Variants Notes'
    },
    summary: {
      zh: '整理 4.2.1 到 4.2.4：归一化、门控前馈网络、GELU/GLU，以及 RoPE 为什么把绝对位置变成相对距离。',
      en: 'Covering Sections 4.2.1 through 4.2.4: normalization, gated feed-forward networks, GELU/GLU, and why RoPE turns absolute positions into relative distances.'
    },
    tags: [],
    sections: [
      {
        heading: '第一组：归一化从 Post-LN 到 Pre-LN，再到 RMSNorm',
        paragraphs: [
          '这里先纠正一个容易看反的点：原始 Transformer 用的是 Post-LN，也就是”子层 -> 残差 -> LayerNorm”；现代大模型更常用的是 Pre-LN，也就是”LayerNorm -> 子层 -> 残差”。通常说的是 Pre-LN 训练更稳定，而不是 Post-LN 优于 Pre-LN。',
          'Post-LN 的问题是 LayerNorm 放在残差之后，可能干扰残差这条”信息和梯度高速公路”。Pre-LN 把归一化放到子层前面，残差主干更干净，所以深层模型更稳定。',
          'RMSNorm 是对 LayerNorm 的简化：不减均值，也通常不加 beta 偏置，只按均方根缩放。它少算一步、少读一些参数，速度更快，而效果通常相当甚至略好，所以 LLaMA、PaLM、T5 等都大量使用。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: [
          {
            title: '更准确的总结',
            body: '现代主流不是”后归一化优于前归一化”，而是 Pre-LN 通常比 Post-LN 更稳定；RMSNorm 又进一步替代了很多 LayerNorm 场景。'
          },
          {
            title: 'RMSNorm 的收益',
            body: '主要收益是更快、更省、更稳定地达到类似效果；它不是换了模型能力核心，而是把稳定化组件做得更轻。'
          },
          {
            title: '残差里的关键',
            body: '残差希望信息和梯度能直接穿过很多层；如果归一化位置不合适，就可能打扰这条直通路径。'
          }
        ],
        normModernVisual: {
          cards: [
            {
              kind: 'post',
              title: {
                zh: 'Post-LN：原始论文',
                en: 'Post-LN: original paper'
              },
              steps: [
                'Sublayer',
                '+ Residual',
                'LayerNorm'
              ],
              body: {
                zh: '先做子层和残差相加，再归一化。原始 Transformer 这样做，但深层训练更不稳定。',
                en: 'Sublayer and residual are added first, then normalized. The original Transformer does this, but deep training is less stable.'
              }
            },
            {
              kind: 'pre',
              title: {
                zh: 'Pre-LN：现代主流',
                en: 'Pre-LN: modern mainstream'
              },
              steps: [
                'LayerNorm',
                'Sublayer',
                '+ Residual'
              ],
              body: {
                zh: '先归一化再进子层，残差主干更直接，深层训练更稳定。',
                en: 'Normalize first, then enter the sublayer. The residual trunk is more direct and deep training is more stable.'
              }
            },
            {
              kind: 'rms',
              title: {
                zh: 'RMSNorm：更轻量',
                en: 'RMSNorm: lighter weight'
              },
              steps: [
                'No mean',
                'RMS scale',
                'γ only'
              ],
              body: {
                zh: '不减均值，主要按向量长度缩放；计算更省，效果仍然很好。',
                en: 'No mean subtraction — mainly scales by vector magnitude. Cheaper to compute, and performance is still excellent.'
              }
            }
          ]
        }
      },
      {
        heading: '第二组：Hadamard 积、GELU 和门控 FFN',
        paragraphs: [
          'Hadamard 积就是逐元素相乘。两个形状相同的向量，不做矩阵乘法，而是第 1 个乘第 1 个、第 2 个乘第 2 个。GLU 里的 ⊙ 就是这个意思。',
          'GLU 可以理解成两条通道：一条内容通道 xW 产生候选信息，一条门控通道 σ(xV) 或 GELU(xV) 决定每个维度放行多少。它不是全开/全关，而是每个维度一个连续开度。',
          'GELU 是 Gaussian Error Linear Unit。直觉上，它像一个平滑版 ReLU：不是小于 0 直接切掉、大于 0 直接通过，而是根据输入大小平滑地决定保留多少。它在 0 附近更柔和，梯度更平滑。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: [
          {
            title: 'Hadamard 积是什么',
            body: '[a,b,c] ⊙ [x,y,z] = [ax, by, cz]。它是逐元素乘，不是矩阵乘法。'
          },
          {
            title: 'GELU 是什么',
            body: 'GELU 是平滑激活函数，可以理解成”按概率/置信度柔和放行输入”，比 ReLU 的硬切更平滑。'
          },
          {
            title: '门控改变带来的提升',
            body: '最终提升是：FFN 不再只是统一激活，而能根据输入动态筛选特征；梯度更平滑，表达更灵活，经验上损失和任务表现通常更好。'
          }
        ],
        gateVisual: {
          content: {
            title: {
              zh: '内容通道 xW',
              en: 'Content pathway xW'
            },
            values: [
              72,
              34,
              88,
              52,
              66,
              42
            ],
            body: {
              zh: '先生成一组候选特征：这些是”可能要表达的内容”。',
              en: 'First generate a set of candidate features: these are “what might be expressed.”'
            }
          },
          gate: {
            title: {
              zh: '门控通道 GELU(xV)',
              en: 'Gating pathway GELU(xV)'
            },
            values: [
              0.9,
              0.25,
              0.72,
              0.45,
              0.8,
              0.35
            ],
            body: {
              zh: '再为每个维度生成开度：哪些特征多放行，哪些少放行。',
              en: 'Then generate a degree of openness for each dimension: which features to let through more, which less.'
            }
          },
          output: {
            title: {
              zh: 'Hadamard 积后输出',
              en: 'Output after Hadamard product'
            },
            values: [
              65,
              9,
              63,
              24,
              53,
              15
            ],
            body: {
              zh: '逐元素相乘后，输出变成”被门控筛过的内容”。',
              en: 'After element-wise multiplication, the output becomes “content filtered through the gate.”'
            }
          }
        }
      },
      {
        heading: '第三组：RoPE 的相对距离到底是谁和谁相对',
        paragraphs: [
          'RoPE 讨论的相对距离，是注意力里 query 所在位置 m 和 key 所在位置 n 的相对距离。也就是”当前 token 在看另一个 token 时，两者隔了多远”。',
          '普通绝对位置编码是把 PE(pos) 加到输入上；RoPE 则是在注意力层里对 Q 和 K 做旋转。位置 m 的 Q 旋转 mθ，位置 n 的 K 旋转 nθ。它们做内积时，绝对的 m 和 n 会组合成 m - n，所以注意力分数天然带有相对距离。',
          '为什么 R(n) 的转置等于 R(-n)？因为旋转矩阵是正交矩阵，转置等于逆；而”逆旋转 n 度”就是”旋转 -n 度”。所以 R(n)^T = R(n)^{-1} = R(-n)。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: [
          {
            title: 'm 是位置索引',
            body: 'm 不是向量维度，而是 token 在序列里的位置。第 0 个 token m=0，第 10 个 token m=10。'
          },
          {
            title: 'θ_i 是维度对的频率',
            body: '每一对二维子空间有自己的旋转速度 θ_i。有的维度对转得快，擅长近距离；有的转得慢，擅长远距离。'
          },
          {
            title: '相对位置来自 m - n',
            body: 'Q 在位置 m，K 在位置 n。二者内积后出现 R(m-n)，所以模型看到的是”这两个 token 相隔多少”。'
          }
        ],
        ropeVisual: {
          planes: [
            {
              title: {
                zh: '二维子块 1',
                en: '2D sub-block 1'
              },
              original: -25,
              rotated: 24,
              body: {
                zh: '一对维度形成一个小平面，向量在这个平面里按位置旋转。',
                en: 'A pair of dimensions forms a small plane; the vector rotates in this plane based on position.'
              }
            },
            {
              title: {
                zh: '二维子块 2',
                en: '2D sub-block 2'
              },
              original: -25,
              rotated: 58,
              body: {
                zh: '另一对维度用不同 θ，旋转速度不同，负责另一种频率的位置感。',
                en: 'Another pair of dimensions uses a different θ with a different rotation speed, responsible for a different frequency of positional awareness.'
              }
            }
          ],
          blocks: [
            {
              label: 'dim 0-1',
              speed: 'fast θ0'
            },
            {
              label: 'dim 2-3',
              speed: 'medium θ1'
            },
            {
              label: 'dim 4-5',
              speed: 'slow θ2'
            },
            {
              label: 'dim 6-7',
              speed: 'slower θ3'
            }
          ]
        }
      },
      {
        heading: '第四组：为什么把高维向量切成多个二维子块',
        paragraphs: [
          '高维当然也可以有旋转，但高维旋转不是唯一直观的一个角度。二维旋转很简单：一个平面、一个角度、一个 2x2 矩阵。高维空间里可以在很多平面上旋转，参数和解释都会复杂很多。',
          'RoPE 选择把高维向量拆成很多个二维小平面，是因为这样既简单高效，又能保留旋转矩阵的好性质：长度不变、可逆、相对距离能通过角度差表达。',
          'θ_i = 10000^{-2i/d} 里的 10000 不是训练学出来的，而是沿用正弦位置编码的频率基准。它控制不同维度频率从快到慢地铺开。实际模型里这个 base 可以调整，比如为了长上下文会改成别的值或做 scaling。'
        ],
        faqs: [],
        bullets: [
          '二维旋转：一个 2x2 矩阵就能表达，非常清楚。',
          '高维旋转：有很多可能旋转平面，不再是一个简单角度。',
          '分块旋转：把高维问题变成很多个二维问题。',
          '每个二维块一个 θ_i：不同块负责不同频率。',
          '10000 是频率尺度基准，不是神秘常数，也不是唯一选择。'
        ],
        emphasisCards: []
      },
      {
        heading: '第五组：一句话总结',
        paragraphs: [
          '4.2 的主线可以记成：归一化从 Post-LN 走向更稳定更轻的 Pre-LN/RMSNorm；FFN 从普通 ReLU MLP 走向按输入动态筛选特征的 GLU/SwiGLU；位置编码从”给 token 加绝对位置”走向”在 Q/K 内积中自然出现相对距离”的 RoPE。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: 'chapter4-position-encoding-visual',
    categoryId: 'diy-llm',
    chapterId: 'chapter-4',
    course: 'DIY LLM',
    date: 'Card 04',
    title: {
      zh: 'Chapter 4｜位置编码可视化：我爱你 vs 你爱我',
      en: 'Chapter 4 | Positional Encoding Visualized: “I love you” vs “You love me”'
    },
    summary: {
      zh: '用同一组 token 的不同排列，直观看 Transformer 为什么必须知道”谁在第几个位置”。',
      en: 'Using different orderings of the same set of tokens to visually show why a Transformer must know “who is in which position.”'
    },
    tags: [],
    sections: [
      {
        heading: '第一组：为什么同样三个字，模型要区分顺序',
        paragraphs: [
          '”我爱你”和”你爱我”用到的 token 完全一样，都是”我、爱、你”。如果只看 token 集合，它们没有区别；但语言含义完全不同，因为主语和宾语交换了。',
          '位置编码做的事情，就是把每个 token 和它所在的位置绑定起来。于是模型看到的不是单独的”我”，而是”我在第 0 位”或”我在第 2 位”。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: [],
        positionEncodingVisual: {
          bag: [
            {
              text: '我',
              key: 'wo'
            },
            {
              text: '爱',
              key: 'ai'
            },
            {
              text: '你',
              key: 'ni'
            }
          ],
          sentences: [
            {
              label: '我爱你',
              tokens: [
                {
                  text: '我',
                  key: 'wo',
                  pos: 0
                },
                {
                  text: '爱',
                  key: 'ai',
                  pos: 1
                },
                {
                  text: '你',
                  key: 'ni',
                  pos: 2
                }
              ]
            },
            {
              label: '你爱我',
              tokens: [
                {
                  text: '你',
                  key: 'ni',
                  pos: 0
                },
                {
                  text: '爱',
                  key: 'ai',
                  pos: 1
                },
                {
                  text: '我',
                  key: 'wo',
                  pos: 2
                }
              ]
            }
          ],
          differences: [
            {
              title: {
                zh: '”爱”没有变',
                en: '”Love” hasn\'t changed'
              },
              body: {
                zh: '两句话里的”爱”都在 pos 1，所以它拿到的是同一个位置身份。中间这个动作词的位置没有变化。',
                en: 'In both sentences, “love” is at pos 1, so it receives the same positional identity. The position of this action word in the middle hasn\'t changed.'
              }
            },
            {
              title: {
                zh: '”我”和”你”换了位置身份',
                en: '”I” and “you” swapped positional identities'
              },
              body: {
                zh: '”我爱你”里是 我@0、你@2；”你爱我”里是 你@0、我@2。词本身一样，但和位置相加后的输入向量已经不同。',
                en: 'In “I love you” it\'s I@0, you@2; in “You love me” it\'s you@0, I@2. The words are the same, but the input vectors after adding position are already different.'
              }
            },
            {
              title: {
                zh: '注意力看到的是带位置的表示',
                en: 'Attention sees position-augmented representations'
              },
              body: {
                zh: '模型后面计算 Q/K/V 时，用的是 Token Embedding + Positional Encoding 后的结果，所以它可以学到”第 0 位更像主语，第 2 位更像宾语”这类顺序模式。',
                en: 'When the model computes Q/K/V downstream, it uses the result of Token Embedding + Positional Encoding, so it can learn ordering patterns like “position 0 is more like a subject, position 2 is more like an object.”'
              }
            }
          ]
        }
      },
      {
        heading: '第二组：把公式翻译成人话',
        paragraphs: [],
        faqs: [],
        bullets: [
          'Token embedding 负责表示”这个字/词是什么意思”。',
          'Position encoding 负责表示”它在句子里的第几个位置”。',
          '最终输入是二者相加：X = Token + PE(pos)。',
          '所以同一个”我”，放在 pos 0 和 pos 2，会得到两个不同的输入向量。',
          '位置编码不是直接告诉模型语法规则，而是给模型提供区分顺序的线索。'
        ],
        emphasisCards: [
          {
            title: '正余弦位置编码是”加”',
            body: 'pos 0、1、2、3 都会生成固定的位置向量 PE(pos)，然后和 token embedding 相加：X = Token + PE(pos)。'
          },
          {
            title: '不是把 token 向量乘上一个位置值',
            body: '这里不是”我”的向量乘以 pos 0 的值，而是”我”的向量加上 PE(0)。同一个 token 加不同位置向量后，身份就变了。'
          },
          {
            title: 'RoPE 才更像”旋转/乘矩阵”',
            body: '后面讲 RoPE 时，它不是把 PE 直接加到 token 上，而是在注意力里按位置旋转 Q/K 向量。'
          }
        ]
      },
      {
        heading: '第三组：把位置编码公式画出来',
        paragraphs: [
          '公式里最重要的不是要背下 sin 和 cos，而是理解：每个位置 pos 会在很多条不同频率的波上取值，最后这些取值拼成一个”位置指纹”。',
          '低维通常变化快，适合区分相邻位置；高维变化慢，适合提供更长距离的平滑位置信号。一个位置不是靠单个数字表示，而是靠一整组高低频信号共同表示。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: [],
        positionFormulaVisual: {
          waves: [
            {
              label: 'dim 0 / sin',
              note: {
                zh: '高频：相邻位置差异明显',
                en: 'High frequency: adjacent positions differ noticeably'
              },
              points: [
                {
                  x: 0,
                  y: 50
                },
                {
                  x: 8,
                  y: 28
                },
                {
                  x: 16,
                  y: 12
                },
                {
                  x: 24,
                  y: 18
                },
                {
                  x: 32,
                  y: 42
                },
                {
                  x: 40,
                  y: 68
                },
                {
                  x: 48,
                  y: 86
                },
                {
                  x: 56,
                  y: 78
                },
                {
                  x: 64,
                  y: 54
                },
                {
                  x: 72,
                  y: 30
                },
                {
                  x: 80,
                  y: 14
                },
                {
                  x: 88,
                  y: 24
                },
                {
                  x: 96,
                  y: 50
                }
              ]
            },
            {
              label: 'dim 1 / cos',
              note: {
                zh: '和 sin 成对，提供相位方向',
                en: 'Paired with sin, providing phase direction'
              },
              points: [
                {
                  x: 0,
                  y: 12
                },
                {
                  x: 8,
                  y: 18
                },
                {
                  x: 16,
                  y: 40
                },
                {
                  x: 24,
                  y: 66
                },
                {
                  x: 32,
                  y: 84
                },
                {
                  x: 40,
                  y: 78
                },
                {
                  x: 48,
                  y: 55
                },
                {
                  x: 56,
                  y: 28
                },
                {
                  x: 64,
                  y: 14
                },
                {
                  x: 72,
                  y: 22
                },
                {
                  x: 80,
                  y: 45
                },
                {
                  x: 88,
                  y: 72
                },
                {
                  x: 96,
                  y: 88
                }
              ]
            },
            {
              label: 'dim 6 / sin',
              note: {
                zh: '低频：变化更慢，覆盖更远',
                en: 'Low frequency: changes more slowly, covers longer range'
              },
              points: [
                {
                  x: 0,
                  y: 50
                },
                {
                  x: 8,
                  y: 46
                },
                {
                  x: 16,
                  y: 42
                },
                {
                  x: 24,
                  y: 38
                },
                {
                  x: 32,
                  y: 34
                },
                {
                  x: 40,
                  y: 31
                },
                {
                  x: 48,
                  y: 29
                },
                {
                  x: 56,
                  y: 27
                },
                {
                  x: 64,
                  y: 26
                },
                {
                  x: 72,
                  y: 27
                },
                {
                  x: 80,
                  y: 29
                },
                {
                  x: 88,
                  y: 33
                },
                {
                  x: 96,
                  y: 38
                }
              ]
            }
          ],
          positions: [
            {
              pos: 0,
              values: [
                54,
                92,
                54,
                92,
                54,
                92
              ],
              caption: {
                zh: 'pos 0 的位置指纹',
                en: 'Positional fingerprint of pos 0'
              }
            },
            {
              pos: 1,
              values: [
                88,
                70,
                61,
                90,
                56,
                92
              ],
              caption: {
                zh: 'pos 1 的位置指纹',
                en: 'Positional fingerprint of pos 1'
              }
            },
            {
              pos: 2,
              values: [
                91,
                30,
                68,
                86,
                58,
                91
              ],
              caption: {
                zh: 'pos 2 的位置指纹',
                en: 'Positional fingerprint of pos 2'
              }
            }
          ],
          steps: [
            {
              title: {
                zh: '1. 每个位置取一组波形值',
                en: '1. Each position samples a set of wave values'
              },
              body: {
                zh: 'pos 是横坐标。pos=0、1、2 会在每条 sin/cos 曲线上取到不同高度。',
                en: 'pos is the x-coordinate. pos=0, 1, 2 sample different heights on each sin/cos curve.'
              }
            },
            {
              title: {
                zh: '2. 不同维度使用不同频率',
                en: '2. Different dimensions use different frequencies'
              },
              body: {
                zh: '有的维度变化快，有的维度变化慢；组合起来既能区分近邻，也能表达远距离。',
                en: 'Some dimensions change fast, others change slowly; combined, they can distinguish neighbors and express long-range distances.'
              }
            },
            {
              title: {
                zh: '3. 这些值拼成位置向量',
                en: '3. These values form the position vector'
              },
              body: {
                zh: '把所有维度的取值合在一起，就是 PE(pos)。它会和 token embedding 相加。',
                en: 'Concatenate all dimension values together to get PE(pos). It will be added to the token embedding.'
              }
            }
          ]
        }
      },
      {
        heading: '第四组：一句话总结',
        paragraphs: [
          '没有位置编码时，”我爱你”和”你爱我”像同一袋词；加上位置编码后，它们变成两组不同的 token@position 组合。Transformer 正是靠这种位置身份，才能把相同词汇的不同顺序区分开。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: 'chapter4-transformer-flow-visual',
    categoryId: 'diy-llm',
    chapterId: 'chapter-4',
    course: 'DIY LLM',
    date: 'Card 05',
    title: {
      zh: 'Chapter 4｜Transformer 标准流程可视化',
      en: 'Chapter 4 | Visualizing the Standard Transformer Flow'
    },
    summary: {
      zh: '把 4.1 节的位置编码、多头注意力、残差归一化和前馈网络重新串成一条数据流，看清一个 token 表示如何穿过 Transformer block。',
      en: 'Reconnect the positional encoding, multi-head attention, residual normalization, and feed-forward network from Section 4.1 into a single data flow to see how a token representation passes through a Transformer block.'
    },
    tags: [],
    sections: [
      {
        heading: '第一组：先看总流程，不先看零件',
        paragraphs: [
          '4.1 节原文的问题不是知识点错，而是讲法偏”组件罗列”：先讲位置编码，再讲多头注意力，再讲 LayerNorm/残差，再讲 FFN。这样适合查概念，但不太适合建立整体流程。',
          '更好抓的主线是：输入 token 先变成带位置的向量，然后反复经过 N 个 Transformer block。每个 block 里先做”全局信息交换”的注意力，再做”逐位置特征加工”的 FFN，中间用残差和归一化保证信息和梯度稳定。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '第二组：一条数据流看完整 Transformer',
        paragraphs: [],
        faqs: [],
        bullets: [],
        emphasisCards: [],
        transformerFlow: {
          steps: [
            {
              kind: 'input',
              title: 'Tokens',
              body: {
                zh: '文本先被分词，变成 token id 序列。',
                en: 'Text is first tokenized into a sequence of token IDs.'
              },
              shape: '[batch, seq]',
              visual: {
                type: 'tokens',
                title: {
                  zh: '文本先变成一串 token',
                  en: 'Text becomes a sequence of tokens'
                },
                body: {
                  zh: '模型不会直接读自然语言字符串，而是先把句子切成 token，再把 token 映射成 id。',
                  en: 'The model doesn\'t read natural language strings directly — it first splits sentences into tokens, then maps each token to an ID.'
                },
                items: [
                  '我',
                  '爱',
                  '你',
                  '<eos>'
                ]
              }
            },
            {
              kind: 'embed',
              title: 'Token Embedding + Position',
              body: {
                zh: '每个 token 查表变成向量，再加上位置编码，让模型知道顺序。',
                en: 'Each token is looked up in an embedding table to become a vector, then positional encoding is added so the model knows the order.'
              },
              shape: '[batch, seq, d_model]',
              visual: {
                type: 'embedding',
                title: {
                  zh: '每个 token 获得”词义 + 位置”身份',
                  en: 'Each token gets a “meaning + position” identity'
                },
                body: {
                  zh: 'Token embedding 表示”它是谁”，position encoding 表示”它站在哪里”，相加后才进入 Transformer。',
                  en: 'Token embedding represents “what it is,” position encoding represents “where it stands” — they are added together before entering the Transformer.'
                },
                items: [
                  {
                    token: '我',
                    pos: 'pos0',
                    result: '我@0'
                  },
                  {
                    token: '爱',
                    pos: 'pos1',
                    result: '爱@1'
                  },
                  {
                    token: '你',
                    pos: 'pos2',
                    result: '你@2'
                  }
                ]
              }
            },
            {
              kind: 'attn',
              title: 'Multi-Head Attention',
              body: {
                zh: '每个位置和其他位置两两比较，决定该从上下文中拿哪些信息。',
                en: 'Each position compares with every other position to decide what information to gather from the context.'
              },
              shape: '[batch, seq, d_model]',
              visual: {
                type: 'attention',
                title: {
                  zh: '注意力矩阵：每个位置看其他位置',
                  en: 'Attention matrix: each position looks at every other position'
                },
                body: {
                  zh: '颜色越亮，表示当前位置越关注另一个位置。多头就是多张这样的关系图并行计算。',
                  en: 'Brighter colors mean the current position pays more attention to another position. Multi-head means multiple such relationship maps computed in parallel.'
                },
                cells: [
                  0.95,
                  0.45,
                  0.25,
                  0.3,
                  0.9,
                  0.5,
                  0.22,
                  0.52,
                  0.88
                ]
              }
            },
            {
              kind: 'norm',
              title: 'Add & Norm',
              body: {
                zh: '残差保留原信息，LayerNorm 稳住数值分布。',
                en: 'The residual preserves original information; LayerNorm stabilizes the numerical distribution.'
              },
              shape: '[batch, seq, d_model]',
              visual: {
                type: 'norm',
                title: {
                  zh: 'Add & Norm：修正量加回主干，再稳定数值',
                  en: 'Add & Norm: add the correction back to the trunk, then stabilize values'
                },
                body: {
                  zh: '残差像捷径，LayerNorm 像调音量。一个保信息，一个稳分布。',
                  en: 'The residual is like a shortcut; LayerNorm is like adjusting the volume. One preserves information, the other stabilizes distribution.'
                }
              }
            },
            {
              kind: 'ffn',
              title: 'Feed Forward',
              body: {
                zh: '对每个位置独立做 MLP：先扩维、激活、再压回 d_model。',
                en: 'Apply an MLP independently at each position: expand dimensions, activate, then project back to d_model.'
              },
              shape: '512 -> 2048 -> 512',
              visual: {
                type: 'ffn',
                title: {
                  zh: 'FFN：每个 token 自己做非线性加工',
                  en: 'FFN: each token undergoes its own nonlinear processing'
                },
                body: {
                  zh: '注意力负责混合上下文；FFN 负责把混合后的每个位置单独消化加工。',
                  en: 'Attention mixes context across tokens; FFN then processes each position\'s mixed representation individually.'
                }
              }
            },
            {
              kind: 'norm',
              title: 'Add & Norm',
              body: {
                zh: '再次用残差和归一化，把 FFN 的修正量稳定地合回主干。',
                en: 'Use residual and normalization again to stably merge the FFN correction back into the trunk.'
              },
              shape: '[batch, seq, d_model]',
              visual: {
                type: 'norm',
                title: {
                  zh: '第二次 Add & Norm：把 FFN 的加工结果接回主干',
                  en: 'Second Add & Norm: merge the FFN output back into the trunk'
                },
                body: {
                  zh: '每个 block 通常有两次 Add & Norm：一次跟在 Attention 后，一次跟在 FFN 后。',
                  en: 'Each block typically has two Add & Norm steps: one after Attention, one after FFN.'
                }
              }
            },
            {
              kind: 'stack',
              title: 'Repeat N Blocks',
              body: {
                zh: '同样的 block 堆叠多层，表示逐层被更新。',
                en: 'The same block is stacked multiple layers; representations are updated layer by layer.'
              },
              shape: 'x N',
              visual: {
                type: 'stack',
                title: {
                  zh: '堆叠多层：表示一层层变丰富',
                  en: 'Stacking layers: representations become richer layer by layer'
                },
                body: {
                  zh: '每层都重复”交流 -> 稳定 -> 加工 -> 稳定”，越往后表示越抽象。',
                  en: 'Each layer repeats “exchange → stabilize → process → stabilize.” The deeper you go, the more abstract the representations.'
                },
                layers: [
                  'Block 1',
                  'Block 2',
                  'Block 3',
                  '...',
                  'Block N'
                ]
              }
            },
            {
              kind: 'output',
              title: 'Output / LM Head',
              body: {
                zh: '最后映射到词表维度，预测下一个 token 的概率。',
                en: 'Finally map to vocabulary dimensions to predict the probability of the next token.'
              },
              shape: '[batch, seq, vocab]',
              visual: {
                type: 'output',
                title: {
                  zh: '输出层：把 hidden 向量变成词表概率',
                  en: 'Output layer: turn hidden vectors into vocabulary probabilities'
                },
                body: {
                  zh: '语言模型最后会给每个候选 token 一个分数，再通过 softmax 变成概率。',
                  en: 'The language model assigns a score to each candidate token, then converts scores into probabilities via softmax.'
                },
                items: [
                  {
                    token: '你',
                    score: 82
                  },
                  {
                    token: '我',
                    score: 38
                  },
                  {
                    token: '他',
                    score: 24
                  },
                  {
                    token: '了',
                    score: 58
                  }
                ]
              }
            }
          ],
          block: [
            {
              kind: 'main',
              title: {
                zh: '输入表示 X',
                en: 'Input representation X'
              },
              body: {
                zh: '已经包含 token 含义 + 位置信息',
                en: 'Already contains token meaning + positional information'
              }
            },
            {
              kind: 'attn',
              title: 'Self-Attention',
              body: {
                zh: '让每个 token 看见其他 token',
                en: 'Let each token see every other token'
              }
            },
            {
              kind: 'skip',
              title: {
                zh: '残差连接',
                en: 'Residual Connection'
              },
              body: 'X + Attention(X)'
            },
            {
              kind: 'norm',
              title: 'LayerNorm',
              body: {
                zh: '把分布拉回稳定范围',
                en: 'Pull the distribution back to a stable range'
              }
            },
            {
              kind: 'ffn',
              title: 'FFN',
              body: {
                zh: '逐 token 的非线性特征加工',
                en: 'Per-token nonlinear feature processing'
              }
            },
            {
              kind: 'skip',
              title: {
                zh: '残差连接',
                en: 'Residual Connection'
              },
              body: {
                zh: '再次保留主干信息',
                en: 'Preserve trunk information once more'
              }
            },
            {
              kind: 'norm',
              title: 'LayerNorm',
              body: {
                zh: '输出给下一层',
                en: 'Output to the next layer'
              }
            }
          ],
          takeaways: [
            {
              title: {
                zh: 'Attention 是”横向交流”',
                en: 'Attention is “lateral communication”'
              },
              body: {
                zh: '它在 sequence 维度上工作，让第 i 个位置可以读取第 j 个位置的信息。',
                en: 'It operates along the sequence dimension, letting position i read information from position j.'
              }
            },
            {
              title: {
                zh: 'FFN 是”纵向加工”',
                en: 'FFN is “vertical processing”'
              },
              body: {
                zh: '它不混合不同 token，而是对每个位置自己的 hidden 向量做非线性变换。',
                en: 'It doesn\'t mix different tokens — instead, it applies a nonlinear transformation to each position\'s own hidden vector.'
              }
            },
            {
              title: {
                zh: '残差和归一化是”稳定主干”',
                en: 'Residuals and normalization are the “stabilizing backbone”'
              },
              body: {
                zh: '它们不是负责理解语义的主角，但决定深层模型能不能稳定训练。',
                en: 'They aren\'t the main actors for understanding semantics, but they determine whether a deep model can train stably.'
              }
            }
          ]
        }
      },
      {
        heading: '第三组：4.1 节应该怎么读',
        paragraphs: [],
        faqs: [],
        bullets: [
          '位置编码：解决”Transformer 本身不知道顺序”的问题。',
          '多头注意力：解决”每个 token 如何从上下文拿信息”的问题。',
          '残差连接：解决”深层网络别把原信息弄丢”的问题。',
          'LayerNorm：解决”每层输出分布别乱飘”的问题。',
          'FFN：解决”注意力混完信息后，每个位置如何进一步加工特征”的问题。',
          '这几个模块合起来，才是一个可堆叠的 Transformer block。'
        ],
        emphasisCards: []
      },
      {
        heading: '第四组：多头注意力为什么计算量和单头相当',
        paragraphs: [
          '这里容易误解。”多头”听起来像是把注意力算了 h 次，所以计算量应该变成 h 倍。但 Transformer 不是让每个头都用完整的 d_model 维度，而是把 d_model 拆成 h 个更小的 head_dim。',
          '比如原始 Transformer 里 d_model = 512，heads = 8，那么每个头的 d_k = 512 / 8 = 64。也就是说，不是 8 个头各自算 512 维注意力，而是 8 个头各自算 64 维注意力。'
        ],
        faqs: [],
        bullets: [
          '单头：一次用完整 512 维做注意力。',
          '多头：8 个头，每个头只用 64 维做注意力。',
          '总维度仍然是 8 x 64 = 512。',
          '所以总计算量大致没有变成 8 倍，而是把同一份总维度拆开并行算。'
        ],
        emphasisCards: [
          {
            title: '多头不是复制 8 份完整模型',
            body: '它更像把一个 512 维的大空间切成 8 个 64 维的小空间，每个头负责一个子空间。'
          },
          {
            title: '为什么适合 GPU',
            body: '多个头之间相互独立，可以被组织成批量矩阵乘法并行计算，而不是一个头算完再算下一个头。'
          },
          {
            title: '表达更丰富',
            body: '计算总量接近，但模型可以从多个子空间看关系：有的头看局部依赖，有的头看长距离关系，有的头看语义相似。'
          }
        ],
        multiHeadComputeVisual: {
          single: {
            title: {
              zh: '单头注意力',
              en: 'Single-Head Attention'
            },
            width: '512 dim',
            body: {
              zh: '一个头直接看完整 512 维空间。',
              en: 'One head directly views the full 512-dimensional space.'
            }
          },
          multi: {
            title: {
              zh: '多头注意力',
              en: 'Multi-Head Attention'
            },
            heads: [
              '64',
              '64',
              '64',
              '64',
              '64',
              '64',
              '64',
              '64'
            ],
            body: {
              zh: '8 个头各看 64 维，总宽度仍然是 512。',
              en: '8 heads each view 64 dimensions; the total width is still 512.'
            }
          },
          equations: [
            {
              label: {
                zh: '单头主维度',
                en: 'Single-head total dim'
              },
              value: '1 x 512 = 512'
            },
            {
              label: {
                zh: '多头主维度',
                en: 'Multi-head total dim'
              },
              value: '8 x 64 = 512'
            },
            {
              label: {
                zh: '核心直觉',
                en: 'Core intuition'
              },
              value: {
                zh: '切开并行，不是复制 8 份',
                en: 'Split and parallelize, not duplicate 8 times'
              }
            }
          ]
        }
      },
      {
        heading: '第五组：为什么注意力分数要除以 sqrt(d_k)',
        paragraphs: [
          '注意力分数来自 Q 和 K 的点积。点积不是一个数乘一个数，而是把 d_k 个维度上的乘积加起来：score = q1k1 + q2k2 + ... + q_dk k_dk。',
          '如果 d_k 很大，加起来的项就很多。即使每一项本身不大，总和的波动也会随着维度变大而变大。直觉上，64 个小数相加通常比 4 个小数相加更容易得到绝对值很大的结果。',
          'softmax 对特别大的正数和特别小的负数很敏感。如果分数差距太大，softmax 会变得非常尖：最大的那个位置接近 1，其他位置接近 0。这样模型太早变得”只看一个 token”，而且反向传播时梯度会很弱。'
        ],
        faqs: [],
        bullets: [
          '不缩放：d_k 越大，QK 点积的数值范围越容易变大。',
          '分数过大：softmax 输出会过度尖锐，接近 one-hot。',
          '过度尖锐：很多位置概率接近 0，梯度也会变小。',
          '除以 sqrt(d_k)：把点积分数拉回相对稳定的尺度。',
          '结果：不同 head_dim 下，softmax 输入都比较温和，训练更稳定。'
        ],
        emphasisCards: [
          {
            title: '不是除以 d_k，而是除以 sqrt(d_k)',
            body: '因为点积方差大致随 d_k 增长，标准差随 sqrt(d_k) 增长；除以 sqrt(d_k) 是在稳定标准差尺度。'
          },
          {
            title: '”合理范围”是什么意思',
            body: '不是保证每个值都固定在某个区间，而是让分数的典型大小不要随着 d_k 增大而越来越夸张。'
          },
          {
            title: '它保护 softmax 的梯度',
            body: 'softmax 太尖时，大部分位置梯度很小；缩放后分布更平滑，注意力权重还有可学习空间。'
          }
        ],
        softmaxScaleVisual: {
          panels: [
            {
              kind: 'sharp',
              title: {
                zh: '不除 sqrt(d_k)',
                en: 'Without dividing by sqrt(d_k)'
              },
              bars: [
                8,
                12,
                18,
                92,
                10,
                14
              ],
              body: {
                zh: '点积分数跨度太大，softmax 变尖，几乎只剩一个位置有权重。',
                en: 'Dot product scores span too wide, softmax becomes peaked — almost only one position retains weight.'
              }
            },
            {
              kind: 'smooth',
              title: {
                zh: '除以 sqrt(d_k)',
                en: 'Dividing by sqrt(d_k)'
              },
              bars: [
                34,
                42,
                48,
                64,
                38,
                44
              ],
              body: {
                zh: '分数尺度被拉回，多个位置仍有梯度和竞争空间。',
                en: 'Score scale is pulled back; multiple positions still have gradients and room to compete.'
              }
            }
          ],
          rule: {
            title: {
              zh: '为什么是 sqrt(d_k)',
              en: 'Why sqrt(d_k)'
            },
            body: {
              zh: '点积的方差随 d_k 增大，标准差随 sqrt(d_k) 增大；除以 sqrt(d_k) 是把典型波动尺度压回稳定范围。',
              en: 'The variance of the dot product grows with d_k, and the standard deviation grows with sqrt(d_k); dividing by sqrt(d_k) brings the typical fluctuation scale back to a stable range.'
            }
          }
        }
      },
      {
        heading: '第六组：归一化和残差到底在干什么',
        paragraphs: [
          '残差连接和 LayerNorm 经常一起出现，但它们解决的是两个不同问题。残差关心”信息通道别断”，LayerNorm 关心”数值分布别乱”。',
          '残差连接就是把输入 x 直接绕过子层，加到子层输出上：output = x + Sublayer(x)。这意味着即使 Sublayer 暂时学得不好，模型至少还能保留原始输入，不至于每过一层就把信息洗掉。',
          'LayerNorm 则是在每个 token 的 hidden 向量内部做标准化。它会把这一层输出的数值拉到比较稳定的分布，再交给下一层。这样层数变深以后，数值不容易一层层放大或漂移。'
        ],
        faqs: [],
        bullets: [
          '残差连接：提供一条信息高速公路，避免深层网络把原信息弄丢。',
          '残差连接：也让梯度更容易反向传回前面的层。',
          'LayerNorm：把每个 token 的 hidden 向量重新标准化。',
          'LayerNorm：减少分布漂移，让下一层看到更稳定的输入。',
          'Add & Norm：先把子层修正量加回主干，再把结果稳定住。'
        ],
        emphasisCards: [
          {
            title: '残差像”保底原文”',
            body: '子层可以尝试修改表示，但原表示会被直接加回来，所以模型不用每层都从零重建信息。'
          },
          {
            title: 'LayerNorm 像”调音量”',
            body: '它不是改变语义主线，而是把 hidden 向量的数值尺度拉稳定，避免后面的层输入忽大忽小。'
          },
          {
            title: '两者合在一起才适合堆深',
            body: '残差保信息和梯度，归一化稳数值分布，所以 Transformer block 才能一层层堆起来。'
          }
        ],
        blockMechanicsVisual: {
          cards: [
            {
              kind: 'residual',
              title: {
                zh: 'Residual：信息走捷径',
                en: 'Residual: information takes a shortcut'
              },
              body: {
                zh: '子层负责提出修正，原输入沿捷径保留下来，最后相加。',
                en: 'The sublayer proposes corrections while the original input is preserved via the shortcut, then they are added together.'
              }
            },
            {
              kind: 'norm',
              title: {
                zh: 'LayerNorm：数值重新拉齐',
                en: 'LayerNorm: re-aligning the values'
              },
              bars: [
                {
                  before: 90,
                  after: 56
                },
                {
                  before: 20,
                  after: 45
                },
                {
                  before: 72,
                  after: 60
                },
                {
                  before: 34,
                  after: 48
                },
                {
                  before: 96,
                  after: 58
                }
              ],
              body: {
                zh: '左边高低差很乱，右边被调到更稳定的尺度。',
                en: 'The left side has chaotic highs and lows; the right side is adjusted to a more stable scale.'
              }
            },
            {
              kind: 'ffn',
              title: {
                zh: 'FFN：逐 token 加工',
                en: 'FFN: per-token processing'
              },
              body: {
                zh: '每个位置单独经过 512 -> 2048 -> 512 的非线性变换。',
                en: 'Each position independently undergoes a 512 -> 2048 -> 512 nonlinear transformation.'
              }
            }
          ]
        }
      },
      {
        heading: '第七组：前馈网络 FFN 是什么，为什么放在注意力后面',
        paragraphs: [
          'FFN 全称是 Feed Forward Network，在 Transformer block 里它不是处理整段序列关系的模块，而是对每个位置的 hidden 向量单独做一次小型 MLP。',
          '注意力层负责让 token 之间交流：第 i 个 token 可以从其他 token 那里拿信息。交流完成后，每个位置已经混入了上下文信息。FFN 接着对每个位置的新表示做进一步加工：先扩维、过激活函数、再压回原维度。',
          '所以它放在注意力后面是有道理的：先让每个 token 收集上下文，再让每个 token 独立消化这些上下文信息。如果只有注意力，没有 FFN，模型的非线性加工能力会弱很多。'
        ],
        faqs: [],
        bullets: [
          'Attention：混合不同 token 之间的信息。',
          'FFN：不再混 token，而是加工每个 token 自己的 hidden 表示。',
          '原始 Transformer：512 -> 2048 -> ReLU -> 512。',
          '扩维：给模型更大的中间空间来组合特征。',
          '激活函数：引入非线性，否则多层线性变换仍然等价于一层线性变换。',
          '压回 d_model：保持维度不变，方便残差连接和下一层继续处理。'
        ],
        emphasisCards: [
          {
            title: 'Attention 负责”看别人”',
            body: '它回答：这个位置应该从序列中哪些位置拿信息？'
          },
          {
            title: 'FFN 负责”想一想”',
            body: '它回答：拿到上下文以后，这个位置自己的表示应该怎样被非线性加工？'
          },
          {
            title: '为什么最后还回到 d_model',
            body: 'Transformer block 要可堆叠，每层输入输出维度必须一致，残差连接也要求两边形状能相加。'
          }
        ]
      },
      {
        heading: '第八组：一句话总结',
        paragraphs: [
          '标准 Transformer 的流程可以记成：先把 token 变成带位置的向量，然后在每个 block 里做”注意力交换信息 -> 残差归一化稳定 -> FFN 加工特征 -> 残差归一化稳定”，最后重复多层并映射到输出。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: 'conversion_principles',
    categoryId: 'system-design',
    chapterId: 'part00_preface',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '核心目标',
        paragraphs: [
          '把一本书改造成“短、清楚、连续”的学习路径。每一章不一定对应一个页面；如果原章太长，要拆成多个短 lesson。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '拆分颗粒度',
        paragraphs: [],
        faqs: [],
        bullets: [
          '每个 lesson 建议 800-1500 中文字。',
          '超过 1800 字，优先拆分。',
          '每节只处理 1 个主问题或 2-3 个紧密相关的小概念。',
          '一个原书章节可以拆成 `01-概念.md`、`02-机制.md`、`03-实践.md`。',
          '不为了保持原书章节完整而牺牲可读性。'
        ],
        emphasisCards: []
      },
      {
        heading: '固定结尾',
        paragraphs: [
          '每个 lesson 必须以三个部分结束：',
          '1. `小结`：3-5 条 bullet，帮助读者收束。\n2. `思考题`：2-4 个问题，至少一个检查理解，至少一个引向应用。\n3. `下一节预告`：用 1-2 句话说明下一节讲什么，为什么自然接上。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '内容改写规则',
        paragraphs: [],
        faqs: [],
        bullets: [
          '用原创语言解释概念。',
          '只在必要时引用短句。',
          '长段原文改成总结、例子、图表、练习或问答。',
          '保留原书逻辑，但可以为了学习体验拆分、合并或调整节奏。'
        ],
        emphasisCards: []
      },
      {
        heading: '页面质量检查',
        paragraphs: [],
        faqs: [],
        bullets: [
          '这一节是否足够短？',
          '标题是否只承诺一个明确主题？',
          '开头是否先告诉读者本节目标？',
          '中间是否有例子？',
          '结尾是否有小结、思考题和下一节预告？',
          '下一节是否自然承接，而不是突然跳转？'
        ],
        emphasisCards: []
      }
    ]
  },
  {
    id: 'course_map',
    categoryId: 'system-design',
    chapterId: 'part00_preface',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '原书信息',
        paragraphs: [
          '| 项目 | 内容 |\n| --- | --- |\n| 书名 | System Design Interview: An Insider\'s Guide |\n| 作者 | Alex Xu |\n| 来源文件 | `source/System Design Interview An Insider’s Guide (Alex Xu) (z-library.sk, 1lib.sk, z-lib.sk).pdf` |\n| 页数 | 269 |\n| 章节 | 16 章 |\n| 转换目标 | 短 lesson 形式的 Docsify 课程 |'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '章节规划',
        paragraphs: [
          '| Part | 原书章节 | 主题 | 页码范围 | 课程化处理 |\n| --- | --- | --- | --- | --- |\n| Part 01 | Chapter 1 | Scale from Zero to Millions of Users | 5-33 | 拆成多节，建立扩展性基本图谱 |\n| Part 02 | Chapter 2 | Back-of-the-Envelope Estimation | 34-41 | 拆成估算方法和常见量级 |\n| Part 03 | Chapter 3 | Framework for System Design Interviews | 42-50 | 拆成面试流程和沟通策略 |\n| Part 04 | Chapter 4 | Design a Rate Limiter | 51-70 | 拆成需求、算法、分布式实现 |\n| Part 05 | Chapter 5 | Design Consistent Hashing | 71-86 | 拆成问题、环、虚拟节点、应用 |\n| Part 06 | Chapter 6 | Design a Key-Value Store | 87-109 | 拆成数据模型、分区、复制、冲突 |\n| Part 07 | Chapter 7 | Unique ID Generator | 110-118 | 拆成方案比较和 Snowflake 思路 |\n| Part 08 | Chapter 8 | URL Shortener | 119-131 | 拆成 API、短码、重定向、规模化 |\n| Part 09 | Chapter 9 | Web Crawler | 132-150 | 拆成调度、抓取、去重、礼貌性 |\n| Part 10 | Chapter 10 | Notification System | 151-165 | 拆成渠道、队列、可靠性、限流 |\n| Part 11 | Chapter 11 | News Feed System | 166-177 | 拆成发布、拉取、缓存、排序 |\n| Part 12 | Chapter 12 | Chat System | 178-199 | 拆成连接、消息、在线状态、存储 |\n| Part 13 | Chapter 13 | Search Autocomplete | 200-219 | 拆成 Trie、更新、缓存、规模化 |\n| Part 14 | Chapter 14 | Design YouTube | 220-243 | 拆成上传、转码、播放、推荐边界 |\n| Part 15 | Chapter 15 | Design Google Drive | 244-263 | 拆成同步、元数据、块存储、冲突 |\n| Part 16 | Chapter 16 | The Learning Continues | 264-268 | 拆成复盘和后续学习路径 |'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '拆分标准',
        paragraphs: [],
        faqs: [],
        bullets: [
          '每节尽量控制在 800-1500 中文字。',
          '复杂章节拆成 3-5 节，短章节拆成 1-2 节。',
          '每节必须包含 `小结`、`思考题`、`下一节预告`。',
          '所有内容使用原创教学语言，不直接搬运原书长段文字。'
        ],
        emphasisCards: []
      }
    ]
  },
  {
    id: 'cs336-note-01',
    categoryId: 'diy-llm',
    chapterId: 'lesson-1',
    course: 'CS336',
    date: 'Card 01',
    title: {
      zh: 'llm-为什么从零开始构建语言模型？',
      en: 'LLM — Why Build a Language Model from Scratch?'
    },
    summary: {
      zh: '用问答的方式重新整理第一节课内容。比起直接记结论，这种写法更能保留”一个问题如何把思考往前推”的过程。',
      en: 'Reorganizing the first lecture in Q&A format. Compared to just recording conclusions, this style better preserves the process of how one question pushes thinking forward.'
    },
    tags: [],
    sections: [
      {
        heading: '第一组：课程哲学与”苦涩的教训”',
        paragraphs: [],
        faqs: [
          {
            question: '为什么讲师会强调要从零开始构建语言模型？',
            answer: [
              '思考：这门课一开始就在提醒我们，真正危险的不是不会用模型，而是越来越习惯只停留在抽象层里。API 当然方便，但方便也意味着很多关键细节被折叠了。数据怎么组织、系统怎么支撑、模型为什么这样设计，如果这些问题都被屏蔽掉，研究者最后就会慢慢失去判断力。',
              '感想：所以”从零开始构建”在这里更像是一种重新接触底层的训练。它不是为了重复造轮子，而是为了把自己重新放回技术链条里，重新理解模型效果、成本和约束之间到底是怎么互相牵动的。',
              '**参考链接**：'
            ],
            links: [
              {
                label: 'Stanford CS336 Course Page',
                href: 'https://stanford-cs336.github.io/spring2025/'
              }
            ]
          },
          {
            question: '为什么课程反而强调算法效率在更大规模下会更重要？',
            answer: [
              '思考：”苦涩的教训”常常被简化成”规模最重要”，但课程里更有意思的一点是，它并没有把规模和算法对立起来。相反，讲师强调的是，规模越大，效率越重要。',
              '感想：这点很能说服我。因为在小实验里，一点浪费似乎无伤大雅，但一旦训练规模变大，低效就会被成倍放大。最后省下来的不只是几个 token，而是整套训练预算和时间成本。这样看，算法优化并不是小修小补，而是在大规模时代变得更值钱了。',
              '**参考链接**：'
            ],
            links: [
              {
                label: 'The Bitter Lesson - Rich Sutton',
                href: 'http://www.incompleteideas.net/IncIdeas/BitterLesson.html'
              }
            ]
          }
        ],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '第二组：分词技术（Tokenization）',
        paragraphs: [],
        faqs: [
          {
            question: 'BPE 到底在做什么？它为什么会成为一种常见的分词方法？',
            answer: [
              '思考：BPE 最有意思的地方，在于它不是单纯地”把文字切开”，而是在做一种压缩上的折中。它不断把高频相邻片段合并进词表里，让常见模式用更短的 token 表达出来，于是词表大小和序列长度之间就形成了一种平衡。',
              '感想：这样理解之后，分词就不只是前处理步骤了，而更像是模型效率设计的一部分。它在很早的地方就决定了后面训练到底会轻松还是笨重。',
              '**参考链接**：'
            ],
            links: [
              {
                label: 'Neural Machine Translation of Rare Words with Subword Units',
                href: 'https://arxiv.org/abs/1508.07909'
              }
            ]
          },
          {
            question: '为什么讲师会特别强调压缩率？为什么压缩率为 1 会非常糟糕？',
            answer: [
              '思考：讲师反复提压缩率，也是在提醒我们，分词方案的好坏不能只看”能不能表示文本”，还要看它会不会把序列拖得过长。纯字节级编码虽然干净，但压缩率几乎为 1，意味着文本没有真正被压缩。',
              '感想：一旦想到 attention 的计算会随着序列长度快速膨胀，就很容易明白为什么这种做法会如此低效。原来”分得太细”不是表达更精确，而是可能直接把训练成本推高。',
              '**参考链接**：'
            ],
            links: [
              {
                label: 'OpenAI tiktoken',
                href: 'https://github.com/openai/tiktoken'
              }
            ]
          },
          {
            question: '这些 token 最后是怎么还原回文本的？',
            answer: [
              '思考：解码这件事也让我对词表有了更具体的感觉。模型最后输出的并不是直接可读的文字，而是 token id；这些 id 还要通过词表映射回字节片段，再重新拼成字符串。',
              '感想：所以词表并不是一个附属表格，它其实同时参与了编码和解码，决定了模型如何看到文本，也决定了我们如何把模型输出重新读懂。',
              '**参考链接**：'
            ],
            links: [
              {
                label: 'OpenAI tiktoken',
                href: 'https://github.com/openai/tiktoken'
              }
            ]
          }
        ],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '第三组：模型架构与涌现行为',
        paragraphs: [],
        faqs: [
          {
            question: '为什么课程会强调 Transformer 自 2017 年以来已经发生了很多变化？',
            answer: [
              '思考：虽然我们还在说 Transformer，但今天的大模型其实早就不是 2017 年论文里的原始版本了。课程里提到的很多改进，比如 SwiGLU、RoPE、RMSNorm、GQA，本质上都在说明一个事实：主干架构没有被推翻，但细节已经被一轮又一轮地重新雕过。',
              '感想：这会让我觉得，”还是 Transformer”这句话某种程度上有点误导。因为看起来名字没变，但内部很多关键部件已经被替换掉了。真正重要的，也许正是这些长期累积起来的小改动。',
              '**参考链接**：'
            ],
            links: [
              {
                label: 'RoFormer: Enhanced Transformer with Rotary Position Embedding',
                href: 'https://arxiv.org/abs/2104.09864'
              },
              {
                label: 'GLU Variants Improve Transformer',
                href: 'https://arxiv.org/abs/2002.05202'
              },
              {
                label: 'GQA in Llama 2',
                href: 'https://arxiv.org/abs/2307.09288'
              }
            ]
          },
          {
            question: '为什么小模型上的实验结果，可能会误导我们对大模型能力的判断？',
            answer: [
              '思考：关于涌现的部分也很有冲击力。课程想提醒的不是”能力会神秘出现”，而是小模型上的结果可能会让人过早地下结论。有些能力在小规模时几乎看不出来，但一旦越过某个规模阈值，表现会突然跳出来。',
              '感想：这让我重新理解了为什么研究里会有那么多”看起来没效果，后来却很重要”的方向。如果只盯着小模型曲线，很容易误判一个方法没有前途；而真正的问题可能只是，它还没有到该显现能力的规模。',
              '**参考链接**：'
            ],
            links: [
              {
                label: 'Emergent Abilities of Large Language Models',
                href: 'https://arxiv.org/abs/2206.07682'
              }
            ]
          }
        ],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '第四组：规模定律（Scaling Laws）与对齐（Alignment）',
        paragraphs: [],
        faqs: [
          {
            question: '什么叫 “Chinchilla 最优”？它到底在回答什么问题？',
            answer: [
              '思考：Chinchilla 最优最打动我的地方，是它把”模型做大”这件事从一种直觉，变成了一个更讲分配的问题。课程里给出的经验法则 D ≈ 20N，其实是在说：参数量和数据量要一起看，不能只盯着其中一个维度。',
              '感想：这会让我觉得，大模型并不是越大越强，而是越大越需要被”喂饱”。如果参数不断上去，但数据没有跟上，最后得到的可能只是一个看起来很大、实际却没有被充分训练的模型。',
              '**参考链接**：'
            ],
            links: [
              {
                label: 'Training Compute-Optimal Large Language Models (Chinchilla)',
                href: 'https://arxiv.org/abs/2203.15556'
              }
            ]
          },
          {
            question: 'SFT 和 DPO/GRPO 这类方法最本质的区别是什么？',
            answer: [
              '思考：SFT 和 DPO/GRPO 的区别，也不只是训练步骤不同，而是它们在学习不同类型的信号。SFT 学的是一个比较明确的”标准回答”，而 DPO、GRPO 学的是偏好和奖励，也就是哪种回答更被认可。',
              '感想：这样一对比，就会发现”对齐”并不是简单地继续做监督学习，而是在把模型从”会答题”慢慢推向”答得更符合人类偏好”。它关注的不只是正确性，还包括回答风格、取舍和偏好结构。',
              '**参考链接**：'
            ],
            links: [
              {
                label: 'Direct Preference Optimization',
                href: 'https://arxiv.org/abs/2305.18290'
              }
            ]
          },
          {
            question: '为什么 GRPO 会被单独拿出来讨论？',
            answer: [
              '思考：GRPO 被单独提出来，也说明现在大家很在意反馈学习的效率问题。比起更重的 RLHF 流程，它试图用更简化的目标减少训练负担。',
              '感想：这一点和前面讲的效率问题其实是连在一起的。哪怕到了对齐阶段，讨论的也不只是效果本身，而是效果能不能用更可承受的代价得到。',
              '**参考链接**：'
            ],
            links: [
              {
                label: 'DeepSeekMath: GRPO',
                href: 'https://arxiv.org/abs/2402.03300'
              }
            ]
          }
        ],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: 'cs336-note-02-in-progress',
    categoryId: 'diy-llm',
    chapterId: 'lesson-2',
    course: 'CS336',
    date: 'Card 02',
    title: {
      zh: 'PyTorch 与资源核算',
      en: 'PyTorch and Resource Accounting'
    },
    summary: {
      zh: '一边看原文一边积累问题，把容易混淆的概念先讲清楚，再慢慢沉淀成最后可直接写到卡片上的总结。',
      en: 'Accumulating questions while reading the original text, clarifying easily confused concepts first, then gradually distilling them into summaries ready for flashcards.'
    },
    tags: [],
    sections: [
      {
        heading: '第一组：稀疏化与模型压缩',
        paragraphs: [],
        faqs: [
          {
            question: '原文说”结构化稀疏是一种模型压缩方法，通常对稠密模型按 50% 稀疏度做 n:m 剪枝”，这里说的是训练时还是训练后？为什么模型会变稀疏？',
            answer: [
              '思考：这里默认说的首先是训练后或训练接近结束时的压缩流程。更典型的做法是，先拿到一个已经训练好的稠密模型，再按照 2:4、4:8、8:16 这类 n:m 规则，把每组连续权重里一部分认为”不太重要”的权重直接剪成 0，然后再做一点微调，让模型把性能补回来。所以它被称为模型压缩，本质上是在把已经学到的稠密参数重新整理成一种更省算力、更省存储的形式。',
              '补充：但稀疏化也不一定只能发生在训练后。实际里还有两种常见变体：一种是训练中逐步剪枝，也就是边训练边把权重慢慢推成稀疏；另一种是从一开始就带着稀疏约束训练稀疏模型。只是对入门材料来说，最容易理解、也最符合”压缩”这个说法的，通常还是”先训练出稠密模型，再剪枝，再微调”的路线。',
              '为什么会稀疏：不是模型自己天然长成稀疏，而是人为施加了稀疏约束。研究者发现，很多权重即使被置零，对最终效果影响也没那么大，说明网络里存在冗余。于是就可以把一部分低重要性的连接剪掉，让参数矩阵里出现大量 0，这就叫稀疏。',
              '结构化稀疏和非结构化剪枝的差别，关键不只在”剪多少”，还在”怎么剪”。非结构化剪枝可以在全矩阵里自由挑任意权重置零，灵活但零分布很散，硬件不容易高效利用；结构化稀疏则要求零按照固定模式出现，比如每 4 个连续权重里必须有 2 个是 0。这样自由度低一些，但更容易被 GPU 或专用加速器真正加速，所以工程上通常更有价值。',
              '卡片版总结：结构化稀疏通常指先训练出稠密模型，再按固定 n:m 模式把部分低重要性权重剪成 0，并通过微调恢复性能。模型之所以”变稀疏”，不是因为训练自然得到，而是因为我们主动做了剪枝或加入了稀疏约束；这样做的目的是减少参数、内存和计算量，同时让硬件更容易加速。'
            ],
            links: []
          },
          {
            question: '怎么理解转置后的张量是非连续的？一开始没转置的时候是连续的，转置以后只是视图改变吗，那也还是连续的？',
            answer: [
              '思考：关键要把”形状/视图变了”和”底层内存排列是否连续”分开。张量连续，指的是它在内存里按照当前这个形状所期望的顺序一段一段紧挨着排好；而转置通常只是改了看数据的方式，也就是改了 shape 和 stride，并没有真的把底层数据重新搬家。',
              '举个最简单的例子，一个 2x3 张量如果按行连续存储，内存顺序会像 `[a, b, c, d, e, f]`。把它转置成 3x2 之后，我们在逻辑上想看到的是 `[[a, d], [b, e], [c, f]]`。但底层内存并没有变成 `[a, d, b, e, c, f]`，它还是原来那段连续内存。所以对于"转置后的这个新形状"来说，相邻元素往往不是挨着放的，而是要跳着取，这就是非连续。',
              '补充：所以你说”只是视图改变”这句其实是对的，也正因为它只是视图改变、没有重排内存，它才常常变成非连续。如果转置之后还想让它在新布局下也连续，就得显式做一次内存重排，比如很多框架里的 contiguous()、clone() 或 copy 之类操作。',
              '从 stride 理解会更清楚。连续张量的 stride 和它当前 shape 是匹配的；转置后 shape 变了，stride 也会交换。这样虽然还能正确索引到原数据，但访问模式已经不是”按新形状顺着一块连续内存往后读”了，所以框架会说它 non-contiguous。',
              '卡片版总结：转置通常不是把数据重新排一遍，而是返回一个共享底层存储的视图。因为 shape 变了但底层内存顺序没变，转置后的张量往往需要按 stride 跳着访问元素，所以对”新形状”来说它通常是非连续的；只有显式重排内存后，它才会重新变成连续。'
            ],
            links: []
          },
          {
            question: '如果把转置后的结果赋给一个变量，这个变量存的到底是什么？为什么再对它做 view/reshape 时会失败？不就是从原来的 x 去看 y 再看一次吗？',
            answer: [
              '思考：把转置后的结果赋给一个新变量时，这个变量并不是只存”x 加一个查看方法”的口头概念，但可以近似这样理解。更准确地说，它会得到一个新的张量对象 y；这个对象和 x 共享同一块底层 storage，同时 y 自己带着新的 shape、stride 和 offset 这些元信息。也就是说，y 不是一份新数据副本，而是”指向同一块内存、但索引规则不同”的另一个张量描述。',
              '为什么 view 会失败：因为 view 不是随便改一下 shape 就行，它要求底层内存布局能够支持这种新形状，而且通常要求这个张量在当前访问规则下是连续的，或者至少各维度满足可以无拷贝重解释的条件。转置后的 y 往往 stride 已经变了，元素访问是跳着走的，所以很多新的 shape 没法只靠改元信息来表达。',
              '关键点在于，”再看一次”并不总是合法。你当然可以先从 x 得到一个转置视图 y，但如果 y 的元素顺序在逻辑上已经是按跳跃方式组织的，那么想把 y 再 view 成别的形状时，框架需要保证：新形状里的相邻元素，真的能对应到底层内存里某种一致的 stride 规则。如果做不到，就不能只靠 view 完成，只能先把数据拷贝成连续布局。',
              '举例：x 是 2x3 的连续张量，转置后 y 变成 3x2，但底层还是同一段 `[a, b, c, d, e, f]`。这时 y 逻辑上读出来是 `[[a, d], [b, e], [c, f]]`。如果你再想把 y view 成一维并希望得到 `[a, d, b, e, c, f]`，这不是原内存里的连续顺序，而是一个交错读取结果，所以单靠改 shape 不够，往往必须先 contiguous() 再 view。',
              '补充：这也是为什么很多框架里 reshape 比 view 更”宽容”。reshape 会先尝试无拷贝；如果发现当前 stride 不支持，就可能偷偷复制出一份连续内存再返回。而 view 更严格，它强调的是”只改查看方式，不动底层数据”，所以条件不满足时就直接失败。',
              '卡片版总结：转置赋值给新变量后，新变量得到的是一个共享底层 storage 的新张量对象，它有自己的 shape 和 stride。view 失败不是因为不能”再看一次”，而是因为当前 stride 所描述的访问方式不足以支持目标形状；如果目标形状需要新的连续布局，就必须先做 contiguous 或让 reshape 触发拷贝。'
            ],
            links: []
          },
          {
            question: 'stride 是什么？',
            answer: [
              '思考：stride 可以理解成”沿着某一维移动一格时，底层内存地址要跳多少个元素”。它描述的不是张量里存了什么值，而是框架应该怎样从底层 storage 里把这些值按 shape 读出来。',
              '比如一个 shape 是 2x3 的连续张量 `[[a, b, c], [d, e, f]]`，底层内存通常是 `[a, b, c, d, e, f]`。这时它的 stride 往往是 (3, 1)：在第 0 维也就是行方向往下走一格，要跨过 3 个元素；在第 1 维也就是列方向往右走一格，只要跨过 1 个元素。',
              '所以 shape 告诉你”这是几行几列”，stride 告诉你”从一个位置走到下一个位置时，去内存里怎么跳”。两者要一起看，框架才能知道一个二维或更高维张量到底映射到哪块底层数据。',
              '为什么它重要：连续张量之所以连续，就是因为它的 stride 和当前 shape 是匹配的，按逻辑顺序访问时正好顺着内存往后读。像转置这种操作，往往不改底层数据，只改 shape 和 stride。例如一个 2x3 连续张量转置成 3x2 后，stride 常常会从 (3, 1) 变成 (1, 3)。这样依然能正确取到值，但访问模式已经变成”跳着读”，所以它常常是非连续的。',
              '也可以把 stride 想成导航规则。storage 是仓库，shape 是地图网格，stride 是你在网格中每走一步时该跨过多少个箱子。没有 stride，框架只知道张量看起来长什么样，却不知道该怎样去底层内存把元素拿出来。',
              '卡片版总结：stride 表示在某一维上移动一个单位时，底层内存要跳过多少个元素。shape 决定张量”长什么样”，stride 决定框架”怎么读到它”；转置、切片等 view 操作本质上常常是在改 stride，而不是改底层数据。'
            ],
            links: []
          },
          {
            question: '在 `[batch, sequence, hidden]` 里，`x @ y.transpose(-2, -1)` 为什么会得到 `(batch, sequence, sequence)`？这里的 hidden 是用来干什么的？',
            answer: [
              '思考：这里最关键的是把最后两维当成矩阵乘法在看，而把 batch 维当成”并行处理多少个样本”。如果 x 的形状是 (batch, sequence, hidden)，那对于每个 batch 来说，x 都可以看成一个 `sequence x hidden` 的矩阵，也就是”sequence 个 token，每个 token 用一个 hidden 维向量表示”。',
              '这时 y 原本也是 `(batch, sequence, hidden)`。把它做 `transpose(-2, -1)` 之后，最后两维从 `(sequence, hidden)` 变成 `(hidden, sequence)`，所以每个 batch 里的 y 就从一个 `sequence x hidden` 矩阵变成了一个 `hidden x sequence` 矩阵。',
              '于是每个 batch 内部做的其实是：`(sequence x hidden) @ (hidden x sequence) = (sequence x sequence)`。中间那个 hidden 维正好被乘掉了，所以最后留下的是两个 sequence 维。这就是为什么输出是 `(batch, sequence, sequence)`。',
              '那 hidden 是干什么的：它可以理解成每个 token 的特征维度，也就是 embedding 或隐状态向量的长度。一个 token 不是只用一个数表示，而是用一个 `hidden` 维的向量表示它的语义、上下文信息等。矩阵乘法时，hidden 这一维充当的是”做相似度比较或特征交互的通道数”。',
              '如果把一个 token 看成一个 hidden 维向量，那么 `x[i]` 和 `y[j]` 做点积时，本质上就是在 hidden 这个特征空间里比较第 i 个 token 和第 j 个 token。算出来的一个标量，就表示这两个位置之间的匹配程度或相关程度。所以最后得到的 `(sequence, sequence)`，可以理解成”每个 token 和每个 token 之间两两比较后的分数表”。',
              '这正是 attention 里很核心的直觉：每个 token 都带着一个 hidden 维表示，模型通过沿着 hidden 维做点积，把 token 两两之间的关系算出来，因此得到一个 `sequence x sequence` 的注意力分数矩阵。hidden 不是被丢掉了，而是作为比较特征被聚合进了这个分数里。',
              '卡片版总结：在 `(batch, sequence, hidden)` 中，hidden 表示每个 token 的特征向量长度。`x @ y.transpose(-2, -1)` 本质上是在每个 batch 内做 `(sequence x hidden) @ (hidden x sequence)`，所以 hidden 被乘掉，输出变成 `(sequence x sequence)`；它表示序列中每个位置和其他位置之间的两两相关性。'
            ],
            links: []
          },
          {
            question: '为什么说”如果未来修改了张量形状，比如在 Transformer 里加了 heads 维度，这段代码就可能出错”？',
            answer: [
              '思考：这里真正想提醒的不是 `transpose(-2, -1)` 这个写法本身一定有问题，而是”当你脑子里默认张量永远是 `[batch, sequence, hidden]` 时，很多后续操作会悄悄依赖这个固定顺序”。一旦模型结构变了，比如把 hidden 拆成 `heads x head_dim`，原来那些写死维度位置的 `view`、`transpose`、矩阵乘法、softmax 就很容易不再表达你真正想做的事。',
              '以 attention 为例，最开始你可能只有 `(batch, sequence, hidden)`，写 `x @ y.transpose(-2, -1)` 得到 `(batch, sequence, sequence)`，这在”单头”理解下没问题。但真正的 multi-head attention 往往会先把 hidden 拆开，变成 `(batch, sequence, heads, head_dim)`，然后再重排成 `(batch, heads, sequence, head_dim)`。这时你真正想做的乘法已经变成：每个 head 内部都各自算一个 `sequence x sequence` 的分数矩阵。',
              '如果这时你还沿用原来针对三维张量的思路，比如忘了先把 heads 挪到前面，或者 `view` 时仍假设最后一维就是完整 hidden，那么代码虽然有时还能跑，但语义可能已经错了：你可能会不小心把不同 head 混在一起，或者把本该在每个 head 内独立进行的运算，变成跨 head 的错误组合。',
              '更具体地说，危险通常出在两类地方。第一类是 `view`：原先你可能写 `x.view(batch, sequence, num_heads, head_dim)`，但如果前面经历过 transpose，这个张量可能已经不是连续的，直接 view 就会失败。第二类是”维度位置写死”：比如你默认第 1 维永远是 sequence、第 2 维永远是 hidden，可一旦 shape 变成四维，这个假设就不成立了，softmax 到底应该沿哪个维度做、transpose 应该交换哪两个维度，都需要重新想清楚。',
              '所以原文那句”未来修改形状后代码可能出错”，本质是在说：靠手工记忆维度顺序写代码很脆弱。模型一旦从单头扩展到多头，张量的语义轴变多了，原来那套”最后两维做点积”的写法虽然形式上还在，但每一维到底代表什么必须重新确认，否则就很容易把逻辑写偏。',
              '卡片版总结：问题不在于 `transpose(-2, -1)` 本身，而在于很多代码默认张量永远是 `[batch, sequence, hidden]`。当模型加入 `heads` 等新维度后，原来写死的 `view`、`transpose` 和矩阵乘法会依赖错误的维度语义，轻则报错，重则代码能跑但计算逻辑已经错了。'
            ],
            links: []
          },
          {
            question: '`einsum(“batch seq1 hidden, batch seq2 hidden -> batch seq1 seq2”)` 里说未出现在输出中的 `hidden` 会被自动求和，但求和又不是矩阵乘法，这该怎么理解？',
            answer: [
              '思考：你卡住的点非常关键。单独”求和”当然不是矩阵乘法，但矩阵乘法本来就不是只做乘法，而是”先对应元素相乘，再把乘积加起来”。也就是常说的乘加运算。`einsum` 只是把这个过程写得更显式。',
              '拿最普通的矩阵乘法来说，如果 `A` 是 `(m, k)`，`B` 是 `(k, n)`，那么结果 `C[i, j]` 的定义就是：`C[i, j] = Σ_t A[i, t] * B[t, j]`。这里那个 `Σ_t` 就是对中间维度做求和；而在求和之前，每一项都先做了乘法。所以矩阵乘法本质上就是”沿共享维度做乘积再求和”。',
              '放到你的 `einsum` 里，`”batch seq1 hidden, batch seq2 hidden -> batch seq1 seq2”` 的意思是：对于固定的 `batch, seq1, seq2`，结果等于 `sum_hidden x[batch, seq1, hidden] * y[batch, seq2, hidden]`。也就是说，对每个 `hidden` 位置先把两个向量分量相乘，再把所有 hidden 位置的乘积加起来。',
              '这其实正是两个 hidden 维向量的点积。点积不是”只有求和”，而是”逐项相乘后再求和”。所以这里消失的 `hidden` 维，并不是被随便加掉了，而是在执行点积；而一堆 token 两两之间的点积排成表，最终就形成了 `(seq1, seq2)` 的矩阵。',
              '换句话说，`einsum` 里的”未出现在输出中的维度会被求和”，真正完整的理解应该是：这个维度如果同时出现在输入里，就会先参与逐元素乘法，再被约掉。它表达的是张量收缩（contraction），而矩阵乘法正是张量收缩的一种特殊情况。',
              '卡片版总结：`einsum` 里消失的维度不是”直接求和”，而是”先沿该维度逐项相乘，再把乘积求和”。矩阵乘法本质就是这种乘加过程，因此 `hidden` 在这里被约掉，正对应每对 token 表示之间的点积。'
            ],
            links: []
          },
          {
            question: '`einsum(x, w, “... hidden1, hidden1 hidden2 -> ... hidden2”)` 这种是不是在对 `hidden1` 做压缩？',
            answer: [
              '思考：更准确地说，这里不是单纯”压缩 hidden1”，而是在做一次线性变换。`x` 的最后一维是 `hidden1`，权重矩阵 `w` 的形状是 `(hidden1, hidden2)`，两者相乘后，输出最后一维变成 `hidden2`。所以本质上是把每个位置上的 `hidden1` 维表示，映射成一个新的 `hidden2` 维表示。',
              '为什么 `hidden1` 会消失：因为它是输入特征维，同时也是权重矩阵的输入维。在 `einsum` 里，共享的 `hidden1` 会先参与乘法，再沿这个维度求和，于是得到新的输出特征 `hidden2`。这和全连接层、线性层 `nn.Linear(hidden1, hidden2)` 是同一件事。',
              '只有在 `hidden2 < hidden1` 时，你可以把它口头上理解成”降维”或”压缩特征维”；如果 `hidden2 > hidden1`，那反而是在升维；如果两者相等，则只是做了一次同维度的线性混合。所以”压缩”不是这个公式本身的定义，而只是某些具体维度设置下的结果。',
              '这里的 `...` 也很重要，它表示前面的 batch、sequence、heads 等维度都原样保留。也就是说，这个操作不是在压 batch 或 sequence，而是对每个位置上那个 `hidden1` 向量，都独立应用同一个线性变换矩阵 `w`，把它变成 `hidden2` 向量。',
              '卡片版总结：`”... hidden1, hidden1 hidden2 -> ... hidden2”` 本质上是线性层/矩阵乘法，把最后一维从 `hidden1` 映射到 `hidden2`。`hidden1` 被约掉不是因为它天然表示”压缩”，而是因为它作为输入特征维参与乘加运算；是否算压缩，要看 `hidden2` 是否小于 `hidden1`。'
            ],
            links: []
          },
          {
            question: '`x = rearrange(x, “... heads hidden2 -> ... (heads hidden2)”)` 是什么意思？',
            answer: [
              '思考：这句不是在做计算，而是在改张量的组织方式。`rearrange(x, “... heads hidden2 -> ... (heads hidden2)”)` 的意思是，把最后两个维度 `heads` 和 `hidden2` 合并成一个更大的维度 `heads * hidden2`，前面的 `...` 维度都保持不变。',
              '如果原来 x 的形状是 `(batch, sequence, heads, hidden2)`，那执行后就会变成 `(batch, sequence, heads * hidden2)`。所以它本质上是在”把多头重新拼回一个大向量”。',
              '这在 multi-head attention 里非常常见。前面模型会先把一个大 hidden 拆成 `heads x head_dim`，让每个 head 独立计算；等每个 head 都算完之后，再把这些 head 的结果重新并起来，恢复成一个单一的特征维。这里的 `hidden2` 很多时候就可以理解成每个 head 的 `head_dim`。',
              '和前面的 `einsum` 不一样，`rearrange` 不会做乘加，也不会引入新的信息；它只是重新解释或重排维度。你可以把它理解成”把原来分开放的多个小向量，按顺序接成一个长向量”。',
              '卡片版总结：`”... heads hidden2 -> ... (heads hidden2)”` 表示把最后两个维度合并成一个维度，即把多个 head 的输出重新拼接起来。它不是线性变换，也不是求和，而只是改变张量的形状和维度组织方式。'
            ],
            links: []
          },
          {
            question: '反向传播到底在做什么？',
            answer: [
              '思考：反向传播本质上不是”再算一遍前向”，而是沿着计算图从输出往回，系统地计算每个参数对最终 loss 的影响有多大，也就是梯度。前向传播负责把输入一步步变成输出并算出 loss；反向传播负责回答”如果某个权重稍微变大一点，loss 会往哪个方向变、变多少”。',
              '它最核心的数学工具是链式法则。因为神经网络是很多层函数复合起来的，所以损失对前面某层参数的影响，必须通过后面所有层一层层传回来。反向传播做的就是把这个链式法则高效地组织起来：先算最后一层的梯度，再利用这些中间梯度往前递推，而不是对每个参数单独做一次昂贵的微分。',
              '从线性层角度看，如果前向是 `y = xW`，那么反向通常要算三件事：loss 对输出 `y` 的梯度、loss 对输入 `x` 的梯度，以及 loss 对权重 `W` 的梯度。也就是说，反向传播不只是为了更新参数，它还得把梯度继续传给更前面的层，所以会额外产生多次矩阵乘法。',
              '这也是为什么训练比只做推理贵得多。推理只需要前向；训练既要前向得到 loss，又要反向把梯度一路传回去，再由优化器更新参数。反向里需要保存中间激活、计算参数梯度和激活梯度，所以显存和算力开销都会明显更大。',
              '卡片版总结：反向传播是利用链式法则，从 loss 反向计算各层参数和中间变量梯度的过程。它的作用不是重新做预测，而是告诉模型每个参数该往哪个方向更新；因此训练不仅比推理多了梯度信息，还多了大量额外计算和显存开销。'
            ],
            links: []
          },
          {
            question: '为什么训练 Transformer 常写成大约 `6 x 数据量 x 参数量`？',
            answer: [
              '思考：这里说的通常不是参数个数本身，而是训练计算量的粗略估计。更常见的写法是：训练一个稠密 Transformer 的总 FLOPs 约等于 `6 x N x D`，其中 `N` 是参数量，`D` 是训练中看到的 token 数。很多材料也会把它口语化成”6 倍的数据点乘参数量”，但在语言模型语境里，那个”数据点”通常更准确地说是 token 数。',
              '为什么是 6：对一个 token 做一次前向传播时，最主要的开销来自大量矩阵乘法。粗略看，每个参数大致会参与一次乘加运算，一个乘加常近似记作 2 FLOPs，所以前向大约是 `2N` FLOPs/token。训练时还要做反向传播，而反向通常还要再算两类类似规模的东西：一类是对激活的梯度，一类是对参数的梯度，总共再加上约 `4N` FLOPs/token。于是前向 `2N` 加反向 `4N`，总共就是约 `6N` FLOPs/token。',
              '所以如果总共训练了 `D` 个 token，总训练算力就近似是 `6ND`。这个公式之所以好用，是因为它抓住了大模型训练里最主要的部分：稠密线性层和矩阵乘法的开销。它不是精确到每一项的物理定律，而是一个工程上非常常见的估算规则。',
              '为什么说是”近似”：因为真实 Transformer 里还会有 attention、softmax、layernorm、embedding、不同序列长度、参数共享、MoE、激活检查点等细节，这些都会改变常数项。但对标准稠密 Transformer 来说，主导计算量的通常仍是矩阵乘法，所以 `6 x 参数量 x token 数` 这个近似在规模分析里很常见。',
              '卡片版总结：`6 x 数据量 x 参数量` 说的是训练 FLOPs 的粗略估计，不是模型大小。它来自”前向约 `2N`，反向约 `4N`，合计约 `6N` FLOPs/token” 这个经验近似；再乘上训练看到的 token 数 `D`，就得到总训练计算量约 `6ND`。'
            ],
            links: []
          }
        ],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: 'cs336-note-03-optimizers',
    categoryId: 'diy-llm',
    chapterId: 'lesson-2',
    course: 'CS336',
    date: 'Card 03',
    title: {
      zh: '第二节课补充｜常用优化器可视化',
      en: 'Lecture 2 Supplement | Optimizer Visualizations'
    },
    summary: {
      zh: '把 SGD、Momentum、AdaGrad、RMSProp、Adam 放在同一页里，用统一的视觉方式看它们各自是怎么”走向最优点”的。',
      en: 'Putting SGD, Momentum, AdaGrad, RMSProp, and Adam on the same page with a unified visual approach to see how each one “walks toward the optimum.”'
    },
    tags: [],
    sections: [
      {
        heading: '第一组：先抓一个统一直觉',
        paragraphs: [
          '可以把训练想成在一张起伏地形上往低谷走。参数是你现在站的位置，梯度告诉你脚下最陡的上坡方向，所以更新时要朝反方向走。不同优化器的区别，不在于它们要不要看梯度，而在于它们”信不信当前这一步””会不会记住过去的方向””会不会给不同参数不同步长”。',
          '下面每张卡片里的小图都不是精确数学轨迹，而是帮助建立直觉的示意图：横轴可以想成训练推进过程，纵轴可以想成离最优点还有多远。点越往右下，表示越接近稳定收敛。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '第二组：五种常用优化器',
        paragraphs: [],
        faqs: [],
        bullets: [],
        emphasisCards: [],
        optimizerVisuals: [
          {
            label: 'Baseline',
            name: 'SGD',
            badge: {
              zh: '最直接',
              en: 'Most Direct'
            },
            summary: {
              zh: '每一步只看当前梯度，像是闭着眼沿最陡方向往下走，简单但容易来回抖动。',
              en: 'Each step only looks at the current gradient — like walking downhill blindfolded along the steepest direction. Simple, but prone to oscillation.'
            },
            trace: [
              [
                8,
                18
              ],
              [
                20,
                44
              ],
              [
                30,
                30
              ],
              [
                42,
                58
              ],
              [
                52,
                42
              ],
              [
                65,
                70
              ],
              [
                76,
                58
              ],
              [
                88,
                82
              ]
            ],
            points: [
              {
                zh: '更新规则最简单：参数减去学习率乘以当前梯度。',
                en: 'The simplest update rule: subtract the learning rate times the current gradient from the parameters.'
              },
              {
                zh: '优点是实现直接、内存开销小。',
                en: 'The advantage is straightforward implementation with low memory overhead.'
              },
              {
                zh: '缺点是遇到狭长谷地时容易左右震荡，收敛不够稳。',
                en: 'The downside is it easily oscillates side-to-side in narrow valleys, leading to unstable convergence.'
              }
            ]
          },
          {
            label: 'Velocity',
            name: 'Momentum',
            badge: {
              zh: '更顺',
              en: 'Smoother'
            },
            summary: {
              zh: '像推着一个小球下坡，不只看眼前斜率，还会保留过去的速度，所以更容易穿过小震荡。',
              en: 'Like pushing a ball downhill — it doesn\'t just look at the current slope but also retains past velocity, so it passes through minor oscillations more easily.'
            },
            trace: [
              [
                8,
                22
              ],
              [
                18,
                30
              ],
              [
                30,
                34
              ],
              [
                42,
                40
              ],
              [
                56,
                50
              ],
              [
                68,
                60
              ],
              [
                78,
                70
              ],
              [
                88,
                82
              ]
            ],
            points: [
              {
                zh: '在 SGD 基础上引入梯度的指数移动平均，形成动量。',
                en: 'Builds on SGD by introducing an exponential moving average of gradients, forming momentum.'
              },
              {
                zh: '能在方向稳定时越走越快，在噪声方向上减少摆动。',
                en: 'Accelerates when the direction is consistent while reducing swings in noisy directions.'
              },
              {
                zh: '常被用来解释”为什么优化轨迹会更平滑”。',
                en: 'Often used to explain “why the optimization trajectory becomes smoother.”'
              }
            ]
          },
          {
            label: 'Adaptive',
            name: 'AdaGrad',
            badge: {
              zh: '越走越谨慎',
              en: 'Increasingly Cautious'
            },
            summary: {
              zh: '历史梯度越大的参数，后面步子会越小；稀疏特征常能获得更大的有效学习率。',
              en: 'Parameters with larger historical gradients take smaller steps later; sparse features often get a larger effective learning rate.'
            },
            trace: [
              [
                8,
                20
              ],
              [
                18,
                32
              ],
              [
                28,
                44
              ],
              [
                38,
                55
              ],
              [
                48,
                63
              ],
              [
                60,
                70
              ],
              [
                74,
                76
              ],
              [
                88,
                81
              ]
            ],
            points: [
              {
                zh: '核心是累计历史梯度平方，并据此缩放每个参数的学习率。',
                en: 'The core idea is accumulating squared historical gradients and scaling each parameter\'s learning rate accordingly.'
              },
              {
                zh: '对稀疏特征友好，因为不常更新的参数不会被过度压小。',
                en: 'Friendly to sparse features, since infrequently updated parameters won\'t be excessively shrunk.'
              },
              {
                zh: '问题是学习率会一路衰减，后期可能走得过慢。',
                en: 'The problem is the learning rate decays monotonically, potentially becoming too slow in later stages.'
              }
            ]
          },
          {
            label: 'Adaptive EMA',
            name: 'RMSProp',
            badge: {
              zh: '更耐用',
              en: 'More Durable'
            },
            summary: {
              zh: '不再把所有历史梯度平方一直累加，而是只保留近期的指数加权平均，所以步长不会过早枯竭。',
              en: 'Instead of endlessly accumulating all squared historical gradients, it keeps only a recent exponentially weighted average, so the step size doesn\'t dry up too early.'
            },
            trace: [
              [
                8,
                18
              ],
              [
                19,
                28
              ],
              [
                30,
                40
              ],
              [
                42,
                50
              ],
              [
                54,
                61
              ],
              [
                66,
                69
              ],
              [
                78,
                77
              ],
              [
                88,
                83
              ]
            ],
            points: [
              {
                zh: '可以看成对 AdaGrad 的修正：只记住最近一段时间的梯度平方。',
                en: 'Can be seen as a fix to AdaGrad: only remember recent squared gradients.'
              },
              {
                zh: '这样既有自适应学习率，又避免无限累加带来的过早减速。',
                en: 'This preserves adaptive learning rates while avoiding the premature slowdown caused by endless accumulation.'
              },
              {
                zh: '在循环网络等场景里历史上很常见。',
                en: 'Historically very common in recurrent network and similar scenarios.'
              }
            ]
          },
          {
            label: 'Most Common',
            name: 'Adam',
            badge: {
              zh: '最常用',
              en: 'Most Common'
            },
            summary: {
              zh: '同时保留一阶动量和二阶统计，既有 Momentum 的方向感，也有 RMSProp 的自适应步长。',
              en: 'Maintains both first-order momentum and second-order statistics, combining Momentum\'s sense of direction with RMSProp\'s adaptive step size.'
            },
            trace: [
              [
                8,
                20
              ],
              [
                18,
                26
              ],
              [
                30,
                34
              ],
              [
                42,
                44
              ],
              [
                55,
                56
              ],
              [
                67,
                66
              ],
              [
                79,
                76
              ],
              [
                88,
                83
              ]
            ],
            points: [
              {
                zh: '一阶矩估计负责积累方向，二阶矩估计负责调节步长。',
                en: 'The first moment estimate accumulates direction; the second moment estimate adjusts the step size.'
              },
              {
                zh: '通常开箱即用表现较稳，因此成为深度学习里的默认选项之一。',
                en: 'Usually performs reliably out of the box, making it one of the default choices in deep learning.'
              },
              {
                zh: '也要注意它不一定总比 SGD 泛化更好，具体任务仍要看实验。',
                en: 'Note that it doesn\'t always generalize better than SGD — specific tasks still require experimentation.'
              }
            ]
          }
        ]
      },
      {
        heading: '第三组：一句话对比',
        paragraphs: [],
        faqs: [],
        bullets: [
          'SGD：只看眼前这一步，简单但容易抖。',
          'Momentum：在 SGD 上加”惯性”，更平滑也更快。',
          'AdaGrad：按历史梯度自适应缩放学习率，但后期容易太慢。',
          'RMSProp：保留 AdaGrad 的自适应优点，同时避免学习率持续塌缩。',
          'Adam：把 Momentum 和 RMSProp 结合起来，是最常见的默认优化器。'
        ],
        emphasisCards: []
      }
    ]
  },
  {
    id: 'diy-llm-tokenizer-note-02',
    categoryId: 'diy-llm',
    chapterId: 'chapter-2',
    course: 'DIY LLM',
    date: 'Chapter 02',
    title: {
      zh: '读《分词器》的一些思考',
      en: 'Reflections on Reading "Tokenizers"'
    },
    summary: {
      zh: '继续用问题驱动的方式整理分词器这一章，把数据预处理、BPE 边界处理、系统代价和算法评估几块串起来看。',
      en: 'Continuing to organize the tokenizer chapter in a question-driven way, connecting data preprocessing, BPE boundary handling, system costs, and algorithm evaluation.'
    },
    tags: [],
    sections: [
      {
        heading: '第一组：数据预处理与多语言平衡',
        paragraphs: [],
        faqs: [
          {
            question: '为什么训练分词器前做”数据脱敏”不仅是为了隐私，也能提升分词效率？',
            answer: [
              '思考：文档里提到的脱敏很有意思，因为它并不是单纯出于合规或隐私保护。像人名、手机号、地址这类高基数信息，往往出现频率低、变化却很多。如果把这些内容原样留在语料里，BPE 会被迫在大量偶然出现的碎片上做统计，结果就是高频合并机会被噪声稀释掉。',
              '感想：这样看，脱敏其实是在做一种结构化去噪。把 [NAME]、[PHONE] 这类模式统一之后，分词器更容易把注意力放在可复用的语言结构上，而不是被一次性实例牵着走。它减少的不只是隐私风险，也减少了词表学习里的无效竞争。',
              '**参考链接**：'
            ],
            links: [
              {
                label: 'DIY LLM Chapter 2 原文',
                href: 'https://github.com/datawhalechina/diy-llm/blob/main/docs/chapter2/chapter2_%E5%88%86%E8%AF%8D%E5%99%A8.md'
              }
            ]
          },
          {
            question: '如果训练语料里英文占绝大多数、韩文只占很小比例，会发生什么？',
            answer: [
              '思考：低资源语言最容易出现的问题不是”被翻译成别的语言”，而是被切得特别碎。因为词表空间会优先被高频语言占据，韩文里那些本来应该成为常见子词的模式，根本进不了高频统计和合并流程，最后只能以更零碎的 token 形式存在。',
              '感想：这种碎片化听起来只是分词不优雅，但后果其实很实际。token 数会增加，训练和推理成本会更高，模型对这门语言的表达也更难稳定下来。所以文档里建议在语料阶段就做平衡处理，比如对低资源语言过采样、对高资源语言下采样，我觉得这一步比很多后续补救都更根本。',
              '**参考链接**：'
            ],
            links: [
              {
                label: 'DIY LLM Chapter 2 原文',
                href: 'https://github.com/datawhalechina/diy-llm/blob/main/docs/chapter2/chapter2_%E5%88%86%E8%AF%8D%E5%99%A8.md'
              }
            ]
          }
        ],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '第二组：BPE 算法细节与边界处理',
        paragraphs: [],
        faqs: [
          {
            question: '为什么有些 BPE 实现会加上 </w> 这样的单词边界标记，或者在开头加空格？',
            answer: [
              '思考：边界标记最核心的作用，是让编码保持可逆。BPE 在不断合并子词时，如果完全不知道哪里是词边界，最后得到的 token 可能在统计上很高频，但在解码时却不知道该在哪里断开。也就是说，编码虽然能压缩，解码却可能失去原始文本结构。',
              '感想：这一点让我意识到，分词器设计并不只是”怎么切得更短”，还要考虑”怎么无歧义地拼回去”。像 </w> 或者前导空格，看起来只是技术细节，但本质上是在给模型保留还原文本的路标。',
              '**参考链接**：'
            ],
            links: [
              {
                label: 'Subword-NMT: BPE 实现背景',
                href: 'https://arxiv.org/abs/1508.07909'
              },
              {
                label: 'DIY LLM Chapter 2 原文',
                href: 'https://github.com/datawhalechina/diy-llm/blob/main/docs/chapter2/chapter2_%E5%88%86%E8%AF%8D%E5%99%A8.md'
              }
            ]
          },
          {
            question: '为什么很多 BPE 训练脚本在处理字节序列时会用 latin-1，而不是 utf-8？',
            answer: [
              '思考：这里选 latin-1 不是因为它语义更强，而是因为它足够”机械”。latin-1 可以把 0 到 255 的每个字节一一映射成字符，所以任何原始字节序列都能无损地被 Python 当成字符串处理。这样即便切到一个汉字的中间字节，也不会因为不是合法 utf-8 序列而报错。',
              '感想：这让我觉得，很多工程上的选择其实不是追求优雅，而是在追求稳定可逆。对分词器来说，先安全地把所有字节托住，比先谈字符层面的语义要更基础，因为连表示都不稳定，后面的统计和合并就无从谈起。',
              '**参考链接**：'
            ],
            links: [
              {
                label: 'Python codecs: latin-1',
                href: 'https://docs.python.org/3/library/codecs.html'
              },
              {
                label: 'DIY LLM Chapter 2 原文',
                href: 'https://github.com/datawhalechina/diy-llm/blob/main/docs/chapter2/chapter2_%E5%88%86%E8%AF%8D%E5%99%A8.md'
              }
            ]
          }
        ],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '第三组：系统影响与特殊 Token',
        paragraphs: [],
        faqs: [
          {
            question: '序列长度对 Transformer 的计算复杂度到底有什么影响？为什么不能直接用纯字节级编码？',
            answer: [
              '思考：文档把这个问题讲得很直接。分词压缩率低，最直接的后果就是序列变长；而一旦序列变长，Transformer 里的 attention 开销会快速上升。因为 attention 需要处理 token 两两之间的关系，所以复杂度通常和序列长度的平方相关。',
              '感想：这样一来，纯字节级编码的问题就非常现实了。它不是”能不能用”的问题，而是”代价能不能承受”的问题。哪怕它在表示上最通用，只要序列长到一定程度，训练显存和推理延迟都会变得很难接受。',
              '**参考链接**：'
            ],
            links: [
              {
                label: 'Attention Is All You Need',
                href: 'https://arxiv.org/abs/1706.03762'
              },
              {
                label: 'DIY LLM Chapter 2 原文',
                href: 'https://github.com/datawhalechina/diy-llm/blob/main/docs/chapter2/chapter2_%E5%88%86%E8%AF%8D%E5%99%A8.md'
              }
            ]
          },
          {
            question: '像 <PAD>、<MASK>、<CLS> 这样的特殊 Token，为什么不能参与 BPE 的合并统计？',
            answer: [
              '思考：这些特殊 token 的意义不是来自文本频率，而是来自系统约定。它们承担的是填充、遮盖、分类起始这类控制功能，所以它们的 id 和边界必须保持稳定。如果把它们也扔进 BPE 合并流程，它们就可能被拆开、重组，甚至和普通文本片段混在一起。',
              '感想：这会让我更清楚地看到，分词器并不只是语言工具，它同时也是系统接口的一部分。特殊 token 一旦不稳定，影响的就不只是词表，而是训练和推理全流程的一致性。',
              '**参考链接**：'
            ],
            links: [
              {
                label: 'Hugging Face Tokenizer Special Tokens',
                href: 'https://huggingface.co/docs/transformers/main_classes/tokenizer'
              },
              {
                label: 'DIY LLM Chapter 2 原文',
                href: 'https://github.com/datawhalechina/diy-llm/blob/main/docs/chapter2/chapter2_%E5%88%86%E8%AF%8D%E5%99%A8.md'
              }
            ]
          }
        ],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '第四组：算法对比与评估',
        paragraphs: [],
        faqs: [
          {
            question: 'BPE 和 Unigram 在筛选词表时最本质的区别是什么？',
            answer: [
              '思考：BPE 的思路是从小往大做加法，不断把高频片段合并进词表；而 Unigram 更像是先把候选词表铺得很大，再反过来做减法。它会给每个子词估计概率，然后迭代地把那些对整体似然贡献小的 token 剪掉，直到剩下一个更精炼的词表。',
              '感想：这两种方法的气质很不一样。BPE 更像贪心地抓住高频结构，Unigram 则更像从整体上反复修枝。也正因为这样，Unigram 往往给人一种”词表是被筛出来的”感觉，而不是一步步拼出来的。',
              '**参考链接**：'
            ],
            links: [
              {
                label: 'Subword Regularization: Unigram Language Model',
                href: 'https://arxiv.org/abs/1804.10959'
              },
              {
                label: 'DIY LLM Chapter 2 原文',
                href: 'https://github.com/datawhalechina/diy-llm/blob/main/docs/chapter2/chapter2_%E5%88%86%E8%AF%8D%E5%99%A8.md'
              }
            ]
          },
          {
            question: '除了压缩比，还可以用什么指标来评估一个分词器？',
            answer: [
              '思考：压缩比当然重要，但它只能说明序列有没有被缩短，不能说明这种缩短是不是”合理”。文档提到还要看平均序列长度和分布、碎片化程度、跨语言平衡度、OOV 率等指标，因为这些东西会直接影响显存占用、推理效率，以及模型对专业术语和新词的理解能力。',
              '感想：这让我觉得，分词器评估其实比表面上更像一个系统问题。一个分词器不该只在统计表上表现漂亮，还要在真实任务里少占资源、少制造碎片、少让关键实体被切坏。最终评估的不是”切法本身”，而是它有没有帮助模型更稳地工作。',
              '**参考链接**：'
            ],
            links: [
              {
                label: 'SentencePiece',
                href: 'https://github.com/google/sentencepiece'
              },
              {
                label: 'DIY LLM Chapter 2 原文',
                href: 'https://github.com/datawhalechina/diy-llm/blob/main/docs/chapter2/chapter2_%E5%88%86%E8%AF%8D%E5%99%A8.md'
              }
            ]
          }
        ],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: 'glossary',
    categoryId: 'system-design',
    chapterId: 'part00_preface',
    course: 'System Design',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: []
  },
  {
    id: 'llm-quickstart-template-note-01',
    categoryId: 'essays',
    chapterId: 'llm-quickstart-template',
    course: '',
    date: 'Card 01',
    title: {
      zh: 'LLM 应用的三层能力：纯对话、Tool Calling 和 RAG',
      en: 'Three Layers of LLM Apps: Plain Chat, Tool Calling, and RAG'
    },
    summary: {
      zh: '沿着三层能力——纯对话、工具调用、向量检索——走一遍完整的数据流和实现逻辑，搞清楚每一层到底在做什么。',
      en: 'Walk through the data flow and implementation of three capability layers — plain chat, tool calling, and vector retrieval — to understand what each one actually does.'
    },
    tags: [],
    sections: [
      {
        heading: '第一组：LLM 应用的三层能力',
        paragraphs: [
          '构建一个 LLM 应用，能力大致分三层：纯对话、工具调用（Tool Calling）、检索增强生成（RAG）。每一层解决的问题不同，实现复杂度也逐级递增。',
          '实现上有两条路线可以选：直接用 SDK（openai / anthropic 库）调 API，或者用 LangChain 框架做统一封装。两种方式做的事情完全一样，区别在于抽象程度和灵活性的取舍。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '第二组：纯对话——while 循环 + 消息列表 + API 调用',
        paragraphs: [
          '纯对话是三层能力里最简单的一层。整个数据流可以用一句话概括：维护一个消息列表，每次带着完整对话历史调 API，拿回回复，追加到历史，循环。'
        ],
        faqs: [],
        bullets: [
          'chat_loop 里维护一个 history 列表。',
          '每轮对话结束后把 user 和 assistant 的消息都追加进去。',
          '下一轮会把完整 history 发给 API，这样模型就有了多轮对话记忆。'
        ],
        emphasisCards: [
          {
            title: 'OpenAI 和 Claude 的关键差异',
            body: 'OpenAI 的 system prompt 是 messages 数组的第一条消息（role: “system”）；Claude 的 system prompt 是 messages.create() 的一个独立 system 参数。从 OpenAI 切到 Claude 时很容易踩坑。'
          },
          {
            title: '为什么同时有 SDK 和 LangChain 两个版本',
            body: 'LangChain 用 model.ainvoke(messages) 一行搞定，不用区分 OpenAI 还是 Claude。但它是黑盒、更新滞后、多一层依赖。直接 SDK 版本存在的意义是让你看清楚 LangChain 底下到底发生了什么。'
          }
        ]
      },
      {
        heading: '第三组：Tool Calling——让模型决定调什么函数',
        paragraphs: [
          '纯对话是”用户说 → 模型回 → 结束”。Tool Calling 在此基础上加了一个 agentic loop：用户说 → 模型可能要调工具 → 执行工具 → 把结果喂回模型 → 模型可能还要调更多工具 → ... → 最终回复。',
          '最重要的概念：模型不执行工具，它只是”说”要调哪个工具、传什么参数；你的代码负责执行，然后把结果喂回去。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: [
          {
            title: '第一层：工具定义 + 注册',
            body: '用 JSON schema 告诉模型有哪些工具可用（名称、描述、参数类型），同时维护一个 name → function 的注册表。注意 OpenAI 和 Claude 的 schema 格式不同。'
          },
          {
            title: '第二层：Agentic Loop',
            body: 'while True 调 API，检查有没有 tool_calls。有就执行并把结果塞回 messages，没有就 break 返回文本回复。模型可以在一轮里连续调用多个工具。'
          },
          {
            title: '第三层：dispatch_tool 路由执行',
            body: '根据名字从注册表查函数，json.loads 解析参数（OpenAI 返回 JSON 字符串，Claude 返回 dict），用 **dict 解包成关键字参数调用。就 14 行代码。'
          }
        ]
      },
      {
        heading: '第四组：Tool Calling 具体走一遍',
        paragraphs: [
          '以用户问”Copenhagen 今天天气怎么样”为例，走一遍完整流程。'
        ],
        faqs: [],
        bullets: [
          '第 1 轮 API 调用：模型返回 tool_call(“get_weather”, {city: “Copenhagen”})。',
          '代码执行 get_weather(“Copenhagen”)，拿到结果 “12°C, partly cloudy”。',
          '把工具结果追加到 messages。',
          '第 2 轮 API 调用：模型看到工具结果，返回文本 “哥本哈根今天 12°C，多云”。',
          '没有 tool_calls → break，返回最终回复。'
        ],
        emphasisCards: [
          {
            title: 'dict 是什么',
            body: '**\nPython 语法糖。**{“city”: “Copenhagen”} 解包后等价于 func(city=”Copenhagen”)。让不同工具的参数可以统一处理，不用写 if/else。'
          },
          {
            title: 'json.loads 为什么需要',
            body: 'OpenAI 返回的工具参数是 JSON 字符串 \'{“city”: “Copenhagen”}\'，需要先解析成 dict 才能用 ** 解包。Claude 直接返回 dict，不需要这一步。'
          }
        ]
      },
      {
        heading: '第五组：LangChain 怎么简化 Tool Calling',
        paragraphs: [
          '直接 SDK 要手写 JSON schema、手写注册表、手写 dispatch 路由，还要处理 OpenAI 和 Claude 的格式差异。LangChain 用 @tool 装饰器一步到位。'
        ],
        faqs: [],
        bullets: [
          '@tool 从函数自动提取：函数名 → 工具名，docstring → description，参数类型注解 → input schema。',
          'model.bind_tools(tools) 把工具列表绑定到模型上，之后每次 ainvoke 时自动带上工具 schema。',
          'tool.invoke(args) 直接调用，不需要 dispatch 路由。',
          'agentic loop 也更简洁：不用区分 OpenAI/Claude 的返回格式。'
        ],
        emphasisCards: []
      },
      {
        heading: '第六组：RAG——让模型能回答训练数据之外的问题',
        paragraphs: [
          'RAG 全称 Retrieval-Augmented Generation。核心思路：先从向量数据库检索相关信息，把检索结果作为上下文补充给模型，模型基于上下文生成回答。',
          'RAG 分两个阶段：建库（离线，只跑一次）和检索（在线，每次查询都跑）。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: [
          {
            title: '建库阶段',
            body: '读数据 → 每条拼成文本 → 调 Embedding API 生成 1536 维向量 → 存入 SQLite（普通表存原始数据，虚拟表存向量）。'
          },
          {
            title: '检索阶段',
            body: '用户查询文本 → 同样生成 1536 维向量 → 在虚拟表里做向量相似度搜索（WHERE embedding MATCH ?）→ JOIN 回原始表拿数据 → 返回 top-k 结果。'
          }
        ]
      },
      {
        heading: '第七组：RAG 里的关键概念',
        paragraphs: [],
        faqs: [],
        bullets: [
          'Embedding 模型是一个压缩器：无论文本多长，都变成固定 1536 维向量。语义相近的文本，向量就会很接近。',
          '1536 是 OpenAI text-embedding-3-small 的固定输出维度，换模型维度就不一样。',
          '代价是信息损失——向量只负责”找到”，原文负责”理解”。所以检索后还要把原始文本返回给模型。',
          'VIRTUAL TABLE 是 SQLite 的扩展机制：表的接口是 SQL，但底层存储和查询逻辑由插件（sqlite-vec）实现。SQLite 原生引擎只能精确匹配和范围查询，没法算向量相似度。',
          '选 sqlite-vec 而不是 Pinecone/Chroma：轻量，不用装额外服务，一个 .db 文件就是整个向量数据库。小规模数据完全够用，生产环境再换专门的向量数据库也不迟。'
        ],
        emphasisCards: [
          {
            title: 'RAG 怎么和 Tool Calling 串起来',
            body: '把向量检索封装成一个工具函数 get_anime_series，注册到 Tool Calling 的工具列表里。用户问”推荐一部太空冒险动漫”时，模型决定调这个工具，拿到检索结果后生成自然语言推荐。'
          }
        ]
      },
      {
        heading: '第八组：一句话总结',
        paragraphs: [
          '纯对话是 while 循环 + 消息列表 + API 调用；Tool Calling 在此基础上加了 agentic loop，让模型决定调什么工具、你的代码负责执行；RAG 把外部知识通过向量检索塞进上下文，让模型能回答训练数据之外的问题。三层能力逐级递进，每一层的核心机制都不复杂，复杂度主要来自不同 API 之间的格式差异。'
        ],
        faqs: [],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '补充-Rate Limiter：几个真正容易卡住的问题',
    categoryId: '',
    chapterId: null,
    course: '',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '第一组：固定窗口和 burst',
        paragraphs: [],
        faqs: [
          {
            question: '固定窗口不是针对单个用户的吗，为什么用户多了会出问题？',
            answer: [
              '思考：固定窗口通常按 key 限流，key 可以是 user_id、IP、api_key，也可以是全局系统。单用户也会有窗口边界问题：12:00:59 发 5 次，12:01:00 再发 5 次，2 秒内通过 10 次。',
              '结论：人多不是唯一问题。真正的问题包括窗口边界 burst、大量活跃 key、热点 key、TTL 管理和多节点同步。'
            ],
            links: []
          },
          {
            question: 'Token Bucket 为什么更适合突发流量？',
            answer: [
              '思考：Token Bucket 按固定速率补充 token，也允许桶里积攒一部分 token。平时流量低时积累，突发流量来时先消耗存量，再回到稳定速率。',
              '结论：它是在允许短时突发和限制长期平均速率之间做折中。'
            ],
            links: []
          }
        ],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '第二组：Middleware 和分布式状态',
        paragraphs: [],
        faqs: [
          {
            question: 'Middleware 到底是什么，是第三方服务吗？',
            answer: [
              '思考：Middleware 是夹在客户端和业务服务之间、处理公共能力的软件层，比如限流、鉴权、日志、API gateway、load balancer。它可以自己写，也可以用 Cloudflare、Kong、AWS API Gateway、Nginx 插件。',
              '结论：它不是必须第三方，也不是前端，而是业务逻辑外面的一层通用处理链路。'
            ],
            links: []
          },
          {
            question: '分布式限流讲了很多，最后还是要中心 Redis 吗？',
            answer: [
              '思考：很多现实系统是中心化状态 + 分布式执行。多个 rate limiter 节点执行判断，但计数器、token、窗口状态放到 Redis Cluster 这类共享状态存储里。',
              '结论：原因很直接：多个节点必须看到同一个用户已经用了多少额度。Redis 本身再通过 cluster、分片、replica、Multi-AZ 降低单点风险。'
            ],
            links: []
          },
          {
            question: '每个用户一个计数器，用户很多时怎么解决？',
            answer: [
              '思考：不要为所有注册用户永久保存计数器，只为最近活跃用户保存短生命周期状态。比如固定窗口 1 分钟限流，key 设置 60 到 65 秒 TTL，窗口过去自动删除。',
              '结论：内存压力约等于当前活跃用户数 × 每个限流状态大小，而不是总注册用户数。再配合 Redis Cluster 分片、粗细两层限流、省内存算法和热点 key 特殊处理。'
            ],
            links: []
          }
        ],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '补充-Stateless Web Tier 和聚合指标怎么理解',
    categoryId: '',
    chapterId: null,
    course: '',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '第一组：Stateless Web Tier',
        paragraphs: [],
        faqs: [
          {
            question: '为什么水平扩展 Web 层时，要把 session 从 Web server 里拿出去？',
            answer: [
              '思考：多台 Web server 后，请求会被负载均衡分发到不同实例。如果 session 只在某台机器内存里，下一次请求落到另一台机器就可能找不到状态。',
              '结论：状态一旦绑定在某台机器上，扩缩容、故障替换和负载均衡都会变复杂。'
            ],
            links: []
          },
          {
            question: 'Stateless 和 serverless 是一回事吗？前端会直接访问数据库吗？',
            answer: [
              '思考：stateless 描述的是状态是否绑定在某个实例上。serverless 描述的是服务是否由函数平台或托管运行环境管理。',
              '结论：正常路径仍然是客户端到后端 Web tier，再由后端访问 Redis 或数据库，不是浏览器直接连数据库。'
            ],
            links: []
          }
        ],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '第二组：Aggregated Level Metrics',
        paragraphs: [],
        faqs: [
          {
            question: 'Aggregated level metrics 是什么意思？',
            answer: [
              '思考：它不是盯着某一台机器，而是把同一层里的多个实例汇总起来看，比如整个 database tier、cache tier、web tier 的整体表现。',
              '结论：聚合指标回答的是“这一整层健不健康”，instance-level 指标回答的是“哪台机器有问题”。'
            ],
            links: []
          },
          {
            question: '数据库层和缓存层分别应该看哪些聚合指标？',
            answer: [
              '思考：database tier 可以看整体 QPS、p95/p99 查询延迟、错误率、连接池使用率、慢查询数量。cache tier 可以看整体命中率、ops/sec、p99 latency、eviction rate、内存使用率。',
              '结论：先用聚合指标定位是哪一层退化，再下钻到实例级别排查热点、故障节点或配置问题。'
            ],
            links: []
          }
        ],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '补充-从零扩展到百万用户',
    categoryId: '',
    chapterId: null,
    course: '',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '第一组：扩容路径',
        paragraphs: [],
        faqs: [
          {
            question: '为什么说系统扩容是渐进式演化？',
            answer: [
              '思考：早期 MVP 用单机最快。等流量增长后，再把瓶颈层拆出来独立扩容。',
              '结论：不要为了未来的百万用户一开始就堆满 Kubernetes、微服务和多机房。先跑通业务，再按瓶颈演进。'
            ],
            links: []
          },
          {
            question: '最常见的扩容顺序是什么？',
            answer: [
              '思考：单机部署，拆分应用层和数据层，加入负载均衡，数据库主从复制，缓存，CDN，无状态 Web 层，多数据中心，消息队列，数据库分片，最后才是微服务化。',
              '结论：每一步都应该回答一个具体问题，而不是为了架构图好看。'
            ],
            links: []
          },
          {
            question: 'Load Balancer、DB Replication、Cache 分别解决什么？',
            answer: [
              '思考：LB 把流量分到多个 App Server；DB Replication 让写走主库、读走从库；Cache 把热点数据放内存，减少数据库访问。',
              '结论：可以记成：LB 救应用层，主从救读压力，缓存救数据库。'
            ],
            links: []
          },
          {
            question: 'CDN、Stateless、MQ、Sharding 什么时候出现？',
            answer: [
              '思考：全球用户访问慢时加 CDN；多台 App Server 后把 session 放到 Redis/DB/JWT；耗时副作用变多后用 MQ；单库太大或写入太高时做 sharding。',
              '结论：CDN 救延迟，Stateless 救弹性伸缩，MQ 救同步链路和流量峰值，Sharding 救容量和写入瓶颈。'
            ],
            links: []
          }
        ],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '补充-很多用户的限流计数器怎么扛',
    categoryId: '',
    chapterId: null,
    course: '',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '第一组：问题从哪里来',
        paragraphs: [],
        faqs: [
          {
            question: '为什么 user 级限流会产生很多计数器？',
            answer: [
              '思考：如果规则是每个 user 每分钟最多 100 次，那么每个活跃用户在当前窗口里都需要一个状态，例如 rate_limit:user123:202604211030 -> 37。活跃用户达到几百万时，key 数量、内存占用、热点访问、过期清理都会变成真实成本。',
              '结论：关键不是总注册用户数，而是当前窗口内的活跃用户集合有多大。'
            ],
            links: []
          },
          {
            question: '最重要的第一招是什么？',
            answer: [
              '思考：给限流 key 设置 TTL。比如固定窗口 1 分钟限流，key = rl:user:123:minute:202604211030，TTL 设置为 60 到 65 秒，窗口过去后自动删除。',
              '结论：这会把“无限增长”变成“只保存当前或最近几个窗口”，内存约等于当前活跃用户数 × 每个状态大小。'
            ],
            links: []
          }
        ],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '第二组：分片和分层',
        paragraphs: [],
        faqs: [
          {
            question: '一个 Redis 放不下所有计数器怎么办？',
            answer: [
              '思考：用 Redis Cluster 或自定义分片，把 user_id 通过 hash 映射到不同 shard。每台 Redis 只负责一部分用户的限流状态。',
              '结论：这和数据库分库分表是同一个直觉：不是一本大本子记所有人，而是很多本子各记一部分人。'
            ],
            links: []
          },
          {
            question: '为什么不是所有请求都做 user 级限流？',
            answer: [
              '思考：限流维度应该按业务成本选择。公开接口可以先按 IP 粗限流，登录后或敏感接口再按 user_id；昂贵接口按 API 维度，B 端场景按 tenant 或 app key。',
              '结论：只给真正需要精细控制的维度建计数器，能显著减少状态数量。'
            ],
            links: []
          },
          {
            question: '“粗 + 细”两层限流怎么工作？',
            answer: [
              '思考：第一层在网关、Nginx、Envoy 或边缘节点做粗限流，比如单 IP 每秒最多 200。第二层再到 Redis 做细限流，比如单 user 每分钟最多 20 次发帖。',
              '结论：大部分垃圾流量在第一层被挡掉，中心 Redis 不需要为所有乱请求维护细粒度状态。'
            ],
            links: []
          }
        ],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '第三组：算法和热点',
        paragraphs: [],
        faqs: [
          {
            question: '为什么限流算法会影响内存？',
            answer: [
              '思考：固定窗口和令牌桶通常每个 key 只需要 count、token 数、上次 refill 时间这类少量状态。滑动窗口日志要保存很多 timestamp，精确但更贵。',
              '结论：用户量巨大时，常优先选 token bucket、fixed window 或 sliding window counter，而不是最重的 sliding log。'
            ],
            links: []
          },
          {
            question: '热点用户或大客户 key 怎么处理？',
            answer: [
              '思考：明星用户、大客户 app key、爆款接口可能让单个 key 被疯狂更新。可以拆成多个子 key 再聚合，给大客户单独配额池，或由中心 Redis 预分配一批 token 给边缘节点本地扣。',
              '结论：热点不是靠平均分片自动解决的，必须单独识别和处理。'
            ],
            links: []
          }
        ],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '第四组：近似和本地同步',
        paragraphs: [],
        faqs: [
          {
            question: '极大规模时可以不追求 100% 精确吗？',
            answer: [
              '思考：可以，但要看场景。Count-Min Sketch、Bloom Filter、HyperLogLog 这类近似结构更适合防刷、风控、粗筛，不适合作为严格限流的唯一依据。',
              '结论：便宜方法先大致判断谁可疑，再对可疑对象做精细限流。'
            ],
            links: []
          },
          {
            question: '本地计数 + 中心同步适合什么时候？',
            answer: [
              '思考：如果每次请求都查 Redis 压力太大，可以让 edge node 本地先记小计数，定期或按批量同步到中心。这样更快，也减轻 Redis 压力。',
              '结论：代价是不再绝对精确，可能短暂超发。这就是精确性和性能的 trade-off。'
            ],
            links: []
          },
          {
            question: '真正的工程答案是什么？',
            answer: [
              '思考：通常不是单独一招，而是 TTL 自动过期、Redis Cluster 分片、网关粗限流、Redis 细限流、省内存算法、热点 key 特殊处理一起用。',
              '结论：用户很多、计数器很多，不是靠单点硬扛，而是靠短生命周期状态 + 分片存储 + 分层限流 + 省内存算法一起解决。'
            ],
            links: []
          }
        ],
        bullets: [],
        emphasisCards: []
      }
    ]
  },
  {
    id: '补充-纸上估算：用数量级判断系统能不能跑',
    categoryId: '',
    chapterId: null,
    course: '',
    date: '',
    title: '',
    summary: '',
    tags: [],
    sections: [
      {
        heading: '第一组：估算的核心',
        paragraphs: [],
        faqs: [
          {
            question: 'Back-of-the-envelope estimation 的重点是算得准吗？',
            answer: [
              '思考：这类题要把模糊系统拆成用户数、请求量、峰值、存储、带宽这些可估算部分。',
              '结论：假设清楚、单位清楚、数量级合理比精确到个位数更重要。'
            ],
            links: []
          },
          {
            question: '为什么要熟悉容量单位、延迟数字和几个 9？',
            answer: [
              '思考：KB、MB、GB、TB、PB 是容量估算地基；延迟数字提醒我们内存、磁盘、网络差几个数量级；99.9%、99.99%、99.999% 分别对应不同停机预算。',
              '结论：这些数量级会直接影响缓存、顺序 I/O、CDN、多 region、异步复制和冗余设计。'
            ],
            links: []
          }
        ],
        bullets: [],
        emphasisCards: []
      },
      {
        heading: '第二组：Twitter 估算套路',
        paragraphs: [],
        faqs: [
          {
            question: '如何从 MAU 估算写入 QPS 和媒体存储？',
            answer: [
              '思考：先把 MAU 转成 DAU，再乘以每人每天请求数，最后除以 86400 秒。3 亿 MAU、50% DAU、每人 2 条 tweet，平均写入约 3500 QPS。',
              '结论：如果 10% tweet 带 1 MB 媒体，每天约 30 TB；保存 5 年约 55 PB。这个结果会自然引出对象存储、CDN、冷热分层和生命周期管理。'
            ],
            links: []
          }
        ],
        bullets: [],
        emphasisCards: []
      }
    ]
  }
]
