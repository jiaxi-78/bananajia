---
id: 'system-design-basics-note-01'
category: 'system-design'
chapter: 'system-design-basics'
course: 'System Design'
date: 'Card 01'
title_zh: 'Stateless Web Tier 和聚合指标怎么理解'
title_en: 'Understanding Stateless Web Tiers and Aggregated Metrics'
summary_zh: '无状态 Web 层不是 serverless，而是把 session 等状态移到共享存储；聚合指标是在 tier 层级观察整体健康状况。'
summary_en: 'A stateless web tier is not serverless. It moves session state into shared storage, while aggregated metrics observe health at the tier level.'
tags: []
---

# Stateless Web Tier 和聚合指标怎么理解

> 无状态 Web 层不是 serverless，而是把 session 等状态移到共享存储；聚合指标是在 tier 层级观察整体健康状况。

## 第一组：Stateless Web Tier

### 为什么水平扩展 Web 层时，要把 session 从 Web server 里拿出去？

思考：多台 Web server 后，请求会被负载均衡分发到不同实例。如果 session 只在某台机器内存里，下一次请求落到另一台机器就可能找不到状态。

结论：状态一旦绑定在某台机器上，扩缩容、故障替换和负载均衡都会变复杂。

### Stateless 和 serverless 是一回事吗？前端会直接访问数据库吗？

思考：stateless 描述的是状态是否绑定在某个实例上。serverless 描述的是服务是否由函数平台或托管运行环境管理。

结论：正常路径仍然是客户端到后端 Web tier，再由后端访问 Redis 或数据库，不是浏览器直接连数据库。

## 第二组：Aggregated Level Metrics

### Aggregated level metrics 是什么意思？

思考：它不是盯着某一台机器，而是把同一层里的多个实例汇总起来看，比如整个 database tier、cache tier、web tier 的整体表现。

结论：聚合指标回答的是“这一整层健不健康”，instance-level 指标回答的是“哪台机器有问题”。

### 数据库层和缓存层分别应该看哪些聚合指标？

思考：database tier 可以看整体 QPS、p95/p99 查询延迟、错误率、连接池使用率、慢查询数量。cache tier 可以看整体命中率、ops/sec、p99 latency、eviction rate、内存使用率。

结论：先用聚合指标定位是哪一层退化，再下钻到实例级别排查热点、故障节点或配置问题。
