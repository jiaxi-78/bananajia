* [课程首页](README.md)

* 前言
  * [课程地图](part00-preface/course-map.md)
  * [转换原则](part00-preface/conversion-principles.md)
  * [术语表](part00-preface/glossary.md)

* Part 01: 从零扩展到百万用户
  * [01. 从单机系统开始理解请求路径](part01-scale-from-zero/01-single-server-request-flow.md)
  * [02. 拆出数据库并选择合适的数据存储](part01-scale-from-zero/02-database-and-basic-scaling.md)
  * [03. 用负载均衡和数据库复制提高可用性](part01-scale-from-zero/03-load-balancer-and-replication.md)
  * [04. 用缓存和 CDN 加速系统响应](part01-scale-from-zero/04-cache-and-cdn.md)
  * [05. 把状态移出 Web 层，实现无状态扩展](part01-scale-from-zero/05-stateless-web-tier-and-autoscaling.md)
  * [06. 多数据中心与消息队列：走向分布式系统](part01-scale-from-zero/06-data-centers-and-message-queue.md)
  * [07. 可观测性与数据库分片](part01-scale-from-zero/07-observability-and-database-sharding.md)
  * [08. 从零到百万用户的扩展清单](part01-scale-from-zero/08-scaling-playbook.md)

* Part 02: 粗略估算
  * [01. 估算前的基本单位和延迟直觉](part02-estimation/01-units-and-latency-basics.md)
  * [02. 用几个 9 衡量可用性](part02-estimation/02-availability-and-sla.md)
  * [03. 用 Twitter 示例练习 QPS 与存储估算](part02-estimation/03-qps-and-storage-estimation.md)

* Part 03: 系统设计面试框架
  * [01. 系统设计面试不是抢答题](part03-interview-framework/01-interview-mindset-and-scope.md)
  * [02. 提出高层设计并获得共识](part03-interview-framework/02-high-level-design.md)
  * [03. 深入关键组件，而不是陷入所有细节](part03-interview-framework/03-design-deep-dive.md)
  * [04. 收尾、复盘与面试节奏控制](part03-interview-framework/04-wrap-up-dos-and-donts.md)

* Part 04: 设计限流器
  * [01. 认识 Rate Limiter 与设计范围](part04-rate-limiter/01-rate-limiter-problem-and-requirements.md)
  * [02. 限流器应该放在哪里](part04-rate-limiter/02-placement-and-api-gateway.md)
  * [03. 三种基础限流算法](part04-rate-limiter/03-token-leaky-fixed-window.md)
  * [04. 滑动窗口算法：准确性与内存的取舍](part04-rate-limiter/04-sliding-window-algorithms.md)
  * [05. 限流器的高层架构](part04-rate-limiter/05-high-level-architecture.md)
  * [06. 规则、并发与分布式限流](part04-rate-limiter/06-rules-distributed-and-race-conditions.md)
  * [07. 优化、监控与限流器设计总结](part04-rate-limiter/07-optimization-monitoring-and-wrap-up.md)

* Part 05: 一致性哈希
  * [01. 为什么普通哈希扩容会崩](part05-consistent-hashing/01-rehashing-problem.md)
  * [02. 一致性哈希环如何定位服务器](part05-consistent-hashing/02-hash-ring-lookup.md)
  * [03. 节点增删时只迁移必要数据](part05-consistent-hashing/03-node-change-affected-keys.md)
  * [04. 虚拟节点让负载更均衡](part05-consistent-hashing/04-virtual-nodes-tradeoff.md)

* Part 06: 设计 Key-Value Store
  * [01. 从单机 KV 到分布式 KV](part06-key-value-store/01-scope-and-single-server.md)
  * [02. CAP 下的设计取舍](part06-key-value-store/02-cap-and-tradeoffs.md)
  * [03. 数据如何分片与复制](part06-key-value-store/03-partition-and-replication.md)
  * [04. Quorum 与版本冲突处理](part06-key-value-store/04-quorum-versioning-vector-clock.md)
  * [05. 故障检测、临时接管与副本修复](part06-key-value-store/05-failure-detection-and-repair.md)
  * [06. KV Store 的整体架构与读写路径](part06-key-value-store/06-architecture-read-write-path.md)

* Part 07: 分布式唯一 ID
  * [01. 唯一 ID 生成器的需求边界](part07-unique-id/01-requirements-and-candidate-solutions.md)
  * [02. 四种 ID 生成方案对比](part07-unique-id/02-compare-id-generation-options.md)
  * [03. Snowflake 式 64-bit ID 设计](part07-unique-id/03-snowflake-deep-dive.md)

* Part 08: 设计短链接系统
  * [01. 短链接系统的需求与 API](part08-url-shortener/01-requirements-and-apis.md)
  * [02. 重定向流程与 301/302 选择](part08-url-shortener/02-redirect-flow-and-status-code.md)
  * [03. 短码生成：Hash 还是 Base62](part08-url-shortener/03-hash-function-and-base62.md)
  * [04. 短链接系统的完整架构](part08-url-shortener/04-data-model-and-end-to-end-flow.md)

* Part 09: 设计网络爬虫
  * [01. 从“抓网页”到“设计爬虫系统”](part09-web-crawler/01-crawler-scope.md)
  * [02. Crawler 的高层架构与工作流](part09-web-crawler/02-crawler-pipeline.md)
  * [03. URL Frontier：让爬虫有秩序地抓](part09-web-crawler/03-url-frontier-scheduling.md)
  * [04. Downloader、鲁棒性与问题内容处理](part09-web-crawler/04-downloader-robustness.md)

* Part 10: 设计通知系统
  * [01. 通知系统的范围与通道](part10-notification-system/01-notification-scope.md)
  * [02. 通知发送链路与高层架构](part10-notification-system/02-high-level-flow.md)
  * [03. 可靠性、模板、用户设置与限流](part10-notification-system/03-reliability-and-controls.md)
  * [04. 安全、监控与通知效果追踪](part10-notification-system/04-monitoring-security-analytics.md)

* Part 11: 设计 News Feed
  * [01. News Feed 的需求、API 与两条主流程](part11-news-feed/01-news-feed-scope-apis.md)
  * [02. Feed Publishing 与 Fanout 取舍](part11-news-feed/02-feed-publishing-fanout.md)
  * [03. News Feed Retrieval 与扩展点](part11-news-feed/03-feed-retrieval-scaling.md)

* Part 12: 设计聊天系统
  * [01. Chat System 的范围与通信协议](part12-chat-system/01-chat-scope-protocols.md)
  * [02. 聊天系统架构、存储与消息模型](part12-chat-system/02-architecture-storage-model.md)
  * [03. Service Discovery 与一对一消息流](part12-chat-system/03-service-discovery-one-to-one-flow.md)
  * [04. 多设备同步与群聊消息流](part12-chat-system/04-multi-device-group-chat.md)
  * [05. Online Presence、断线处理与扩展话题](part12-chat-system/05-presence-and-wrap-up.md)

* Part 13: 搜索自动补全
  * [01. 从需求到容量估算：什么是快的自动补全](part13-autocomplete/01-autocomplete-scope-estimation.md)
  * [02. 高层设计：数据收集服务与查询服务](part13-autocomplete/02-high-level-data-query-service.md)
  * [03. Trie 深入：用空间换时间的 Top K 缓存](part13-autocomplete/03-trie-optimization.md)
  * [04. 生产化自动补全：日志、缓存、过滤与分片](part13-autocomplete/04-production-autocomplete.md)

* Part 14: 设计 YouTube
  * [01. YouTube 需求边界与成本估算](part14-youtube/01-youtube-scope-cost.md)
  * [02. 高层架构：上传流与播放流分离](part14-youtube/02-upload-streaming-high-level.md)
  * [03. 视频转码：DAG 工作流与并行处理](part14-youtube/03-transcoding-dag.md)
  * [04. 优化视频系统：速度、安全与 CDN 成本](part14-youtube/04-optimization-security-cost.md)
  * [05. 故障处理与扩展讨论](part14-youtube/05-failure-wrap-up.md)

* Part 15: 设计 Google Drive
  * [01. 云盘需求：可靠、同步、低带宽](part15-google-drive/01-drive-scope-estimation.md)
  * [02. 从单机存储到高层架构](part15-google-drive/02-single-server-to-high-level.md)
  * [03. Block Server：增量同步与强一致性](part15-google-drive/03-block-server-consistency.md)
  * [04. 上传、下载与通知服务](part15-google-drive/04-upload-download-notification.md)
  * [05. 存储优化、故障处理与设计取舍](part15-google-drive/05-storage-failure-tradeoffs.md)

* Part 16: 继续学习
  * [01. 从真实系统架构中继续学习](part16-learning-continues/01-real-world-architecture-reading.md)
  * [02. 工程博客与长期学习闭环](part16-learning-continues/02-engineering-blogs-learning-loop.md)

* 模板
  * [课程页模板](templates/lesson-template.md)
  * [章节拆解表](templates/chapter-breakdown.md)
  * [章节拆分规则](templates/chapter-splitting-rules.md)
  * [解释质量标准](templates/explanation-quality-standard.md)
