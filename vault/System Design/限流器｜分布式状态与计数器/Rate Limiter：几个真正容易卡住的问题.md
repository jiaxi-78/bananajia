---
id: 'system-design-rate-limiter-note-04'
category: 'system-design'
chapter: 'system-design-rate-limiter'
course: 'System Design'
date: 'Card 04'
title_zh: 'Rate Limiter：几个真正容易卡住的问题'
title_en: 'Rate Limiter: Questions That Actually Cause Confusion'
summary_zh: '固定窗口为什么会有问题，中间件到底是什么，分布式限流为什么常常还要 Redis，以及大量用户计数器怎么扛。'
summary_en: 'Why fixed windows are tricky, what middleware means, why distributed rate limiting often still uses Redis, and how large counter sets are handled.'
tags: []
---

# Rate Limiter：几个真正容易卡住的问题

> 固定窗口为什么会有问题，中间件到底是什么，分布式限流为什么常常还要 Redis，以及大量用户计数器怎么扛。

## 第一组：固定窗口和 burst

### 固定窗口不是针对单个用户的吗，为什么用户多了会出问题？

思考：固定窗口通常按 key 限流，key 可以是 user_id、IP、api_key，也可以是全局系统。单用户也会有窗口边界问题：12:00:59 发 5 次，12:01:00 再发 5 次，2 秒内通过 10 次。

结论：人多不是唯一问题。真正的问题包括窗口边界 burst、大量活跃 key、热点 key、TTL 管理和多节点同步。

### Token Bucket 为什么更适合突发流量？

思考：Token Bucket 按固定速率补充 token，也允许桶里积攒一部分 token。平时流量低时积累，突发流量来时先消耗存量，再回到稳定速率。

结论：它是在允许短时突发和限制长期平均速率之间做折中。

## 第二组：Middleware 和分布式状态

### Middleware 到底是什么，是第三方服务吗？

思考：Middleware 是夹在客户端和业务服务之间、处理公共能力的软件层，比如限流、鉴权、日志、API gateway、load balancer。它可以自己写，也可以用 Cloudflare、Kong、AWS API Gateway、Nginx 插件。

结论：它不是必须第三方，也不是前端，而是业务逻辑外面的一层通用处理链路。

### 分布式限流讲了很多，最后还是要中心 Redis 吗？

思考：很多现实系统是中心化状态 + 分布式执行。多个 rate limiter 节点执行判断，但计数器、token、窗口状态放到 Redis Cluster 这类共享状态存储里。

结论：原因很直接：多个节点必须看到同一个用户已经用了多少额度。Redis 本身再通过 cluster、分片、replica、Multi-AZ 降低单点风险。

### 每个用户一个计数器，用户很多时怎么解决？

思考：不要为所有注册用户永久保存计数器，只为最近活跃用户保存短生命周期状态。比如固定窗口 1 分钟限流，key 设置 60 到 65 秒 TTL，窗口过去自动删除。

结论：内存压力约等于当前活跃用户数 × 每个限流状态大小，而不是总注册用户数。再配合 Redis Cluster 分片、粗细两层限流、省内存算法和热点 key 特殊处理。
