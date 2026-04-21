export const site = {
  title: '鼠的学习空间',
  tagline: '// Personal Signal · Learning Log',
  intro: '记录我正在学的几门课、写下来的笔记，还有偶尔做饭的心得。选一个分区开始。'
}

export const categories = [
  {
    id: 'diy-llm',
    name: 'DIY LLM',
    code: '01',
    tag: 'LEARNING/01',
    accent: 'cyan',
    tagline: '从零实现一个语言模型',
    description: '跟着 CS336 / DIY LLM 一步步搭起来的笔记，从分词器、优化器到训练流水线。'
  },
  {
    id: 'agentic-ai',
    name: 'Agentic AI',
    code: '02',
    tag: 'LEARNING/02',
    accent: 'magenta',
    tagline: '智能体开发',
    description: '围绕单体智能体的感知、工具使用、记忆、规划等能力建立系统认知。'
  },
  {
    id: 'multi-agent',
    name: 'Multi-Agent',
    code: '03',
    tag: 'LEARNING/03',
    accent: 'violet',
    tagline: '多 Agent 设计与工程化',
    description: '多 Agent 协同、通信协议、角色分工、落地时的工程权衡。'
  },
  {
    id: 'cooking',
    name: 'Cooking',
    code: '04',
    tag: 'LIFE/01',
    accent: 'amber',
    tagline: '厨房里的小实验',
    description: '偶尔记录做过的菜、学到的手法，和一些失败也值得分享的翻车现场。'
  },
  {
    id: 'essays',
    name: '随笔',
    code: '05',
    tag: 'LIFE/02',
    accent: 'teal',
    tagline: '读代码时的碎片思考',
    description: '读源码、拆项目时随手记下的问题和理解，不求体系，只求想清楚。'
  },
  {
    id: 'system-design',
    name: 'System Design',
    code: '06',
    tag: 'LEARNING/04',
    accent: 'lime',
    tagline: '从架构概念到工程直觉',
    description: '整理系统设计阅读中的关键概念、容量估算、扩容路径和限流器里的工程权衡。'
  }
]

export const chapters = [
  {
    id: 'lesson-1',
    categoryId: 'diy-llm',
    code: '01',
    title: '第一节课｜从零构建语言模型',
    description: '课程哲学、分词、模型架构、Scaling Laws 与对齐的第一轮总览。'
  },
  {
    id: 'chapter-2',
    categoryId: 'diy-llm',
    code: '02',
    title: 'Chapter 2｜分词器',
    description: '围绕 tokenizer、BPE、数据预处理和系统成本整理的章节笔记。'
  },
  {
    id: 'lesson-2',
    categoryId: 'diy-llm',
    code: '03',
    title: '第二节课｜PyTorch 与优化器',
    description: '张量视图、stride、einsum、反向传播和常用优化器的可视化笔记。'
  },
  {
    id: 'chapter-4',
    categoryId: 'diy-llm',
    code: '04',
    title: 'Chapter 4｜语言模型架构和训练细节',
    description: '位置编码、Transformer 数据流、注意力细节、归一化、GLU 与 RoPE。'
  },
  {
    id: 'llm-quickstart-template',
    categoryId: 'essays',
    code: '01',
    title: 'LLM 应用的三层能力｜从纯对话到 RAG',
    description: '纯对话、Tool Calling 和 RAG 各自在做什么，怎么实现，直接 SDK 和 LangChain 怎么选。'
  },
  {
    id: 'system-design-basics',
    categoryId: 'system-design',
    code: '01',
    title: '基础概念｜Stateless 与聚合指标',
    description: 'Stateless Web Tier、serverless 的区别，以及 aggregated metrics 和 instance-level metrics 怎么配合。'
  },
  {
    id: 'system-design-estimation',
    categoryId: 'system-design',
    code: '02',
    title: '容量估算｜纸上估算',
    description: '用合理假设、单位换算和数量级思维估算 QPS、存储、带宽和可用性。'
  },
  {
    id: 'system-design-scaling',
    categoryId: 'system-design',
    code: '03',
    title: '扩容路径｜从零到百万用户',
    description: '单机、负载均衡、数据库复制、缓存、CDN、无状态服务、消息队列和分片的演进顺序。'
  },
  {
    id: 'system-design-rate-limiter',
    categoryId: 'system-design',
    code: '04',
    title: '限流器｜分布式状态与计数器',
    description: '固定窗口、middleware、中心 Redis、TTL、分片和分层限流。'
  }
]

export const notes = [
  {
    id: 'chapter4-attention-efficiency-stability',
    categoryId: 'diy-llm',
    chapterId: 'chapter-4',
    course: 'DIY LLM',
    date: 'Card 07',
    title: 'Chapter 4｜4.2.5-4.3 注意力变体、参数量与训练稳定性',
    summary: '把 MQA/GQA/MLA/DSA、稀疏注意力、长上下文外推、FFN 参数、权重衰减、z-loss、QK Norm 和软截断拆成可视化笔记。',
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
              title: '每头独立 K/V',
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
              body: '表达最灵活，但 KV cache 最大。'
            },
            {
              kind: 'mqa',
              label: 'MQA',
              title: '所有头共享 K/V',
              q: [
                'Q1',
                'Q2',
                'Q3',
                'Q4'
              ],
              kv: [
                'shared K/V'
              ],
              body: 'Q 仍有多头，但历史记忆只有一份，推理 cache 很省。'
            },
            {
              kind: 'gqa',
              label: 'GQA',
              title: '分组共享 K/V',
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
              body: '介于 MHA 和 MQA 之间：省一部分 cache，也保留一部分多样性。'
            },
            {
              kind: 'mla',
              label: 'MLA',
              title: '低维 latent 存记忆',
              q: [
                'Q1',
                'Q2',
                'Q3',
                'Q4'
              ],
              kv: [
                'compressed latent'
              ],
              body: '把 K/V 联合压缩成低维表示，减少缓存，再按需还原。'
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
              title: '滑动窗口',
              body: '每个 token 主要看附近邻居，RoPE 只需要处理局部距离。'
            },
            {
              kind: 'global',
              title: '偶尔全局注意力',
              body: '少数层或少数位置做完整连通，帮助远距离信息跨窗口传递。'
            },
            {
              kind: 'skip',
              title: '动态选中的远处 token',
              body: 'top-k 或 indexer 先筛选，再对少量重要远处 token 做注意力。'
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
              title: '原始 QK 分数',
              bars: [
                18,
                22,
                36,
                92,
                14,
                20
              ],
              body: '分数跨度很大，softmax 容易变尖。'
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
              body: '惩罚整体 log-sum-exp 膨胀，别让 logits 集体长太大。'
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
              body: '先规范 Q/K，再点积，从源头控制 softmax 输入范围。'
            },
            {
              kind: 'softcap',
              title: '软截断',
              bars: [
                24,
                30,
                42,
                58,
                22,
                28
              ],
              body: '把极端值平滑压弯，但可能压掉有用强信号。'
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
    title: 'Chapter 4｜4.2 现代 Transformer 变体笔记',
    summary: '整理 4.2.1 到 4.2.4：归一化、门控前馈网络、GELU/GLU，以及 RoPE 为什么把绝对位置变成相对距离。',
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
              title: 'Post-LN：原始论文',
              steps: [
                'Sublayer',
                '+ Residual',
                'LayerNorm'
              ],
              body: '先做子层和残差相加，再归一化。原始 Transformer 这样做，但深层训练更不稳定。'
            },
            {
              kind: 'pre',
              title: 'Pre-LN：现代主流',
              steps: [
                'LayerNorm',
                'Sublayer',
                '+ Residual'
              ],
              body: '先归一化再进子层，残差主干更直接，深层训练更稳定。'
            },
            {
              kind: 'rms',
              title: 'RMSNorm：更轻量',
              steps: [
                'No mean',
                'RMS scale',
                'γ only'
              ],
              body: '不减均值，主要按向量长度缩放；计算更省，效果仍然很好。'
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
            title: '内容通道 xW',
            values: [
              72,
              34,
              88,
              52,
              66,
              42
            ],
            body: '先生成一组候选特征：这些是”可能要表达的内容”。'
          },
          gate: {
            title: '门控通道 GELU(xV)',
            values: [
              0.9,
              0.25,
              0.72,
              0.45,
              0.8,
              0.35
            ],
            body: '再为每个维度生成开度：哪些特征多放行，哪些少放行。'
          },
          output: {
            title: 'Hadamard 积后输出',
            values: [
              65,
              9,
              63,
              24,
              53,
              15
            ],
            body: '逐元素相乘后，输出变成”被门控筛过的内容”。'
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
              title: '二维子块 1',
              original: -25,
              rotated: 24,
              body: '一对维度形成一个小平面，向量在这个平面里按位置旋转。'
            },
            {
              title: '二维子块 2',
              original: -25,
              rotated: 58,
              body: '另一对维度用不同 θ，旋转速度不同，负责另一种频率的位置感。'
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
    title: 'Chapter 4｜位置编码可视化：我爱你 vs 你爱我',
    summary: '用同一组 token 的不同排列，直观看 Transformer 为什么必须知道”谁在第几个位置”。',
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
              title: '”爱”没有变',
              body: '两句话里的”爱”都在 pos 1，所以它拿到的是同一个位置身份。中间这个动作词的位置没有变化。'
            },
            {
              title: '”我”和”你”换了位置身份',
              body: '”我爱你”里是 我@0、你@2；”你爱我”里是 你@0、我@2。词本身一样，但和位置相加后的输入向量已经不同。'
            },
            {
              title: '注意力看到的是带位置的表示',
              body: '模型后面计算 Q/K/V 时，用的是 Token Embedding + Positional Encoding 后的结果，所以它可以学到”第 0 位更像主语，第 2 位更像宾语”这类顺序模式。'
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
              note: '高频：相邻位置差异明显',
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
              note: '和 sin 成对，提供相位方向',
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
              note: '低频：变化更慢，覆盖更远',
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
              caption: 'pos 0 的位置指纹'
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
              caption: 'pos 1 的位置指纹'
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
              caption: 'pos 2 的位置指纹'
            }
          ],
          steps: [
            {
              title: '1. 每个位置取一组波形值',
              body: 'pos 是横坐标。pos=0、1、2 会在每条 sin/cos 曲线上取到不同高度。'
            },
            {
              title: '2. 不同维度使用不同频率',
              body: '有的维度变化快，有的维度变化慢；组合起来既能区分近邻，也能表达远距离。'
            },
            {
              title: '3. 这些值拼成位置向量',
              body: '把所有维度的取值合在一起，就是 PE(pos)。它会和 token embedding 相加。'
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
    title: 'Chapter 4｜Transformer 标准流程可视化',
    summary: '把 4.1 节的位置编码、多头注意力、残差归一化和前馈网络重新串成一条数据流，看清一个 token 表示如何穿过 Transformer block。',
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
              body: '文本先被分词，变成 token id 序列。',
              shape: '[batch, seq]',
              visual: {
                type: 'tokens',
                title: '文本先变成一串 token',
                body: '模型不会直接读自然语言字符串，而是先把句子切成 token，再把 token 映射成 id。',
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
              body: '每个 token 查表变成向量，再加上位置编码，让模型知道顺序。',
              shape: '[batch, seq, d_model]',
              visual: {
                type: 'embedding',
                title: '每个 token 获得”词义 + 位置”身份',
                body: 'Token embedding 表示”它是谁”，position encoding 表示”它站在哪里”，相加后才进入 Transformer。',
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
              body: '每个位置和其他位置两两比较，决定该从上下文中拿哪些信息。',
              shape: '[batch, seq, d_model]',
              visual: {
                type: 'attention',
                title: '注意力矩阵：每个位置看其他位置',
                body: '颜色越亮，表示当前位置越关注另一个位置。多头就是多张这样的关系图并行计算。',
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
              body: '残差保留原信息，LayerNorm 稳住数值分布。',
              shape: '[batch, seq, d_model]',
              visual: {
                type: 'norm',
                title: 'Add & Norm：修正量加回主干，再稳定数值',
                body: '残差像捷径，LayerNorm 像调音量。一个保信息，一个稳分布。'
              }
            },
            {
              kind: 'ffn',
              title: 'Feed Forward',
              body: '对每个位置独立做 MLP：先扩维、激活、再压回 d_model。',
              shape: '512 -> 2048 -> 512',
              visual: {
                type: 'ffn',
                title: 'FFN：每个 token 自己做非线性加工',
                body: '注意力负责混合上下文；FFN 负责把混合后的每个位置单独消化加工。'
              }
            },
            {
              kind: 'norm',
              title: 'Add & Norm',
              body: '再次用残差和归一化，把 FFN 的修正量稳定地合回主干。',
              shape: '[batch, seq, d_model]',
              visual: {
                type: 'norm',
                title: '第二次 Add & Norm：把 FFN 的加工结果接回主干',
                body: '每个 block 通常有两次 Add & Norm：一次跟在 Attention 后，一次跟在 FFN 后。'
              }
            },
            {
              kind: 'stack',
              title: 'Repeat N Blocks',
              body: '同样的 block 堆叠多层，表示逐层被更新。',
              shape: 'x N',
              visual: {
                type: 'stack',
                title: '堆叠多层：表示一层层变丰富',
                body: '每层都重复”交流 -> 稳定 -> 加工 -> 稳定”，越往后表示越抽象。',
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
              body: '最后映射到词表维度，预测下一个 token 的概率。',
              shape: '[batch, seq, vocab]',
              visual: {
                type: 'output',
                title: '输出层：把 hidden 向量变成词表概率',
                body: '语言模型最后会给每个候选 token 一个分数，再通过 softmax 变成概率。',
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
              title: '输入表示 X',
              body: '已经包含 token 含义 + 位置信息'
            },
            {
              kind: 'attn',
              title: 'Self-Attention',
              body: '让每个 token 看见其他 token'
            },
            {
              kind: 'skip',
              title: '残差连接',
              body: 'X + Attention(X)'
            },
            {
              kind: 'norm',
              title: 'LayerNorm',
              body: '把分布拉回稳定范围'
            },
            {
              kind: 'ffn',
              title: 'FFN',
              body: '逐 token 的非线性特征加工'
            },
            {
              kind: 'skip',
              title: '残差连接',
              body: '再次保留主干信息'
            },
            {
              kind: 'norm',
              title: 'LayerNorm',
              body: '输出给下一层'
            }
          ],
          takeaways: [
            {
              title: 'Attention 是”横向交流”',
              body: '它在 sequence 维度上工作，让第 i 个位置可以读取第 j 个位置的信息。'
            },
            {
              title: 'FFN 是”纵向加工”',
              body: '它不混合不同 token，而是对每个位置自己的 hidden 向量做非线性变换。'
            },
            {
              title: '残差和归一化是”稳定主干”',
              body: '它们不是负责理解语义的主角，但决定深层模型能不能稳定训练。'
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
            title: '单头注意力',
            width: '512 dim',
            body: '一个头直接看完整 512 维空间。'
          },
          multi: {
            title: '多头注意力',
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
            body: '8 个头各看 64 维，总宽度仍然是 512。'
          },
          equations: [
            {
              label: '单头主维度',
              value: '1 x 512 = 512'
            },
            {
              label: '多头主维度',
              value: '8 x 64 = 512'
            },
            {
              label: '核心直觉',
              value: '切开并行，不是复制 8 份'
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
              title: '不除 sqrt(d_k)',
              bars: [
                8,
                12,
                18,
                92,
                10,
                14
              ],
              body: '点积分数跨度太大，softmax 变尖，几乎只剩一个位置有权重。'
            },
            {
              kind: 'smooth',
              title: '除以 sqrt(d_k)',
              bars: [
                34,
                42,
                48,
                64,
                38,
                44
              ],
              body: '分数尺度被拉回，多个位置仍有梯度和竞争空间。'
            }
          ],
          rule: {
            title: '为什么是 sqrt(d_k)',
            body: '点积的方差随 d_k 增大，标准差随 sqrt(d_k) 增大；除以 sqrt(d_k) 是把典型波动尺度压回稳定范围。'
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
              title: 'Residual：信息走捷径',
              body: '子层负责提出修正，原输入沿捷径保留下来，最后相加。'
            },
            {
              kind: 'norm',
              title: 'LayerNorm：数值重新拉齐',
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
              body: '左边高低差很乱，右边被调到更稳定的尺度。'
            },
            {
              kind: 'ffn',
              title: 'FFN：逐 token 加工',
              body: '每个位置单独经过 512 -> 2048 -> 512 的非线性变换。'
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
    id: 'cs336-note-01',
    categoryId: 'diy-llm',
    chapterId: 'lesson-1',
    course: 'CS336',
    date: 'Card 01',
    title: 'llm-为什么从零开始构建语言模型？',
    summary: '用问答的方式重新整理第一节课内容。比起直接记结论，这种写法更能保留”一个问题如何把思考往前推”的过程。',
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
    title: 'PyTorch 与资源核算',
    summary: '一边看原文一边积累问题，把容易混淆的概念先讲清楚，再慢慢沉淀成最后可直接写到卡片上的总结。',
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
              '举个最简单的例子，一个 2x3 张量如果按行连续存储，内存顺序会像 [a, b, c, d, e, f]。把它转置成 3x2 之后，我们在逻辑上想看到的是 [[a, d], [b, e], [c, f]]。但底层内存并没有变成 [a, d, b, e, c, f]，它还是原来那段连续内存。所以对于”转置后的这个新形状”来说，相邻元素往往不是挨着放的，而是要跳着取，这就是非连续。',
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
              '举例：x 是 2x3 的连续张量，转置后 y 变成 3x2，但底层还是同一段 [a, b, c, d, e, f]。这时 y 逻辑上读出来是 [[a, d], [b, e], [c, f]]。如果你再想把 y view 成一维并希望得到 [a, d, b, e, c, f]，这不是原内存里的连续顺序，而是一个交错读取结果，所以单靠改 shape 不够，往往必须先 contiguous() 再 view。',
              '补充：这也是为什么很多框架里 reshape 比 view 更”宽容”。reshape 会先尝试无拷贝；如果发现当前 stride 不支持，就可能偷偷复制出一份连续内存再返回。而 view 更严格，它强调的是”只改查看方式，不动底层数据”，所以条件不满足时就直接失败。',
              '卡片版总结：转置赋值给新变量后，新变量得到的是一个共享底层 storage 的新张量对象，它有自己的 shape 和 stride。view 失败不是因为不能”再看一次”，而是因为当前 stride 所描述的访问方式不足以支持目标形状；如果目标形状需要新的连续布局，就必须先做 contiguous 或让 reshape 触发拷贝。'
            ],
            links: []
          },
          {
            question: 'stride 是什么？',
            answer: [
              '思考：stride 可以理解成”沿着某一维移动一格时，底层内存地址要跳多少个元素”。它描述的不是张量里存了什么值，而是框架应该怎样从底层 storage 里把这些值按 shape 读出来。',
              '比如一个 shape 是 2x3 的连续张量 [[a, b, c], [d, e, f]]，底层内存通常是 [a, b, c, d, e, f]。这时它的 stride 往往是 (3, 1)：在第 0 维也就是行方向往下走一格，要跨过 3 个元素；在第 1 维也就是列方向往右走一格，只要跨过 1 个元素。',
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
    title: '第二节课补充｜常用优化器可视化',
    summary: '把 SGD、Momentum、AdaGrad、RMSProp、Adam 放在同一页里，用统一的视觉方式看它们各自是怎么”走向最优点”的。',
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
            badge: '最直接',
            summary: '每一步只看当前梯度，像是闭着眼沿最陡方向往下走，简单但容易来回抖动。',
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
              '更新规则最简单：参数减去学习率乘以当前梯度。',
              '优点是实现直接、内存开销小。',
              '缺点是遇到狭长谷地时容易左右震荡，收敛不够稳。'
            ]
          },
          {
            label: 'Velocity',
            name: 'Momentum',
            badge: '更顺',
            summary: '像推着一个小球下坡，不只看眼前斜率，还会保留过去的速度，所以更容易穿过小震荡。',
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
              '在 SGD 基础上引入梯度的指数移动平均，形成动量。',
              '能在方向稳定时越走越快，在噪声方向上减少摆动。',
              '常被用来解释”为什么优化轨迹会更平滑”。'
            ]
          },
          {
            label: 'Adaptive',
            name: 'AdaGrad',
            badge: '越走越谨慎',
            summary: '历史梯度越大的参数，后面步子会越小；稀疏特征常能获得更大的有效学习率。',
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
              '核心是累计历史梯度平方，并据此缩放每个参数的学习率。',
              '对稀疏特征友好，因为不常更新的参数不会被过度压小。',
              '问题是学习率会一路衰减，后期可能走得过慢。'
            ]
          },
          {
            label: 'Adaptive EMA',
            name: 'RMSProp',
            badge: '更耐用',
            summary: '不再把所有历史梯度平方一直累加，而是只保留近期的指数加权平均，所以步长不会过早枯竭。',
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
              '可以看成对 AdaGrad 的修正：只记住最近一段时间的梯度平方。',
              '这样既有自适应学习率，又避免无限累加带来的过早减速。',
              '在循环网络等场景里历史上很常见。'
            ]
          },
          {
            label: 'Most Common',
            name: 'Adam',
            badge: '最常用',
            summary: '同时保留一阶动量和二阶统计，既有 Momentum 的方向感，也有 RMSProp 的自适应步长。',
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
              '一阶矩估计负责积累方向，二阶矩估计负责调节步长。',
              '通常开箱即用表现较稳，因此成为深度学习里的默认选项之一。',
              '也要注意它不一定总比 SGD 泛化更好，具体任务仍要看实验。'
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
    title: '读《分词器》的一些思考',
    summary: '继续用问题驱动的方式整理分词器这一章，把数据预处理、BPE 边界处理、系统代价和算法评估几块串起来看。',
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
    id: 'llm-quickstart-template-note-01',
    categoryId: 'essays',
    chapterId: 'llm-quickstart-template',
    course: '',
    date: 'Card 01',
    title: 'LLM 应用的三层能力：纯对话、Tool Calling 和 RAG',
    summary: '沿着三层能力——纯对话、工具调用、向量检索——走一遍完整的数据流和实现逻辑，搞清楚每一层到底在做什么。',
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
    id: 'system-design-basics-note-01',
    categoryId: 'system-design',
    chapterId: 'system-design-basics',
    course: 'System Design',
    date: 'Card 01',
    title: 'Stateless Web Tier 和聚合指标怎么理解',
    summary: '无状态 Web 层不是 serverless，而是把 session 等状态移到共享存储；聚合指标是在 tier 层级观察整体健康状况。',
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
    id: 'system-design-estimation-note-02',
    categoryId: 'system-design',
    chapterId: 'system-design-estimation',
    course: 'System Design',
    date: 'Card 02',
    title: '纸上估算：用数量级判断系统能不能跑',
    summary: '估算题不是考精确算术，而是训练合理假设、单位意识和数量级判断。',
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
  },
  {
    id: 'system-design-rate-limiter-counters-note-05',
    categoryId: 'system-design',
    chapterId: 'system-design-rate-limiter',
    course: 'System Design',
    date: 'Card 05',
    title: '很多用户的限流计数器怎么扛',
    summary: '不要把“很多用户 = 很多计数器”理解成必须由一台机器硬扛。现实里靠短生命周期状态、分片、分层、近似和热点处理组合解决。',
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
    id: 'system-design-rate-limiter-note-04',
    categoryId: 'system-design',
    chapterId: 'system-design-rate-limiter',
    course: 'System Design',
    date: 'Card 04',
    title: 'Rate Limiter：几个真正容易卡住的问题',
    summary: '固定窗口为什么会有问题，中间件到底是什么，分布式限流为什么常常还要 Redis，以及大量用户计数器怎么扛。',
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
    id: 'system-design-scale-note-03',
    categoryId: 'system-design',
    chapterId: 'system-design-scaling',
    course: 'System Design',
    date: 'Card 03',
    title: '从零扩展到百万用户',
    summary: '系统扩容不是一开始就设计最终形态，而是随着瓶颈出现逐步演进。',
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
  }
]
