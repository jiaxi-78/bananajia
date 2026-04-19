export const site = {
  title: '鼠的学习空间',
  tagline: '// Personal Signal · Learning Log',
  intro: '记录我正在学的几门课、写下来的笔记，还有偶尔做饭的心得。选一个分区开始。',
}

export const categories = [
  {
    id: 'diy-llm',
    name: 'DIY LLM',
    code: '01',
    tag: 'LEARNING/01',
    accent: 'cyan',
    tagline: '从零实现一个语言模型',
    description: '跟着 CS336 / DIY LLM 一步步搭起来的笔记，从分词器、优化器到训练流水线。',
  },
  {
    id: 'agentic-ai',
    name: 'Agentic AI',
    code: '02',
    tag: 'LEARNING/02',
    accent: 'magenta',
    tagline: '智能体开发',
    description: '围绕单体智能体的感知、工具使用、记忆、规划等能力建立系统认知。',
  },
  {
    id: 'multi-agent',
    name: 'Multi-Agent',
    code: '03',
    tag: 'LEARNING/03',
    accent: 'violet',
    tagline: '多 Agent 设计与工程化',
    description: '多 Agent 协同、通信协议、角色分工、落地时的工程权衡。',
  },
  {
    id: 'cooking',
    name: 'Cooking',
    code: '04',
    tag: 'LIFE/01',
    accent: 'amber',
    tagline: '厨房里的小实验',
    description: '偶尔记录做过的菜、学到的手法，和一些失败也值得分享的翻车现场。',
  },
]

export const notes = [
  {
    id: 'cs336-note-01',
    categoryId: 'diy-llm',
    course: 'CS336',
    date: 'Card 01',
    title: 'llm-为什么从零开始构建语言模型？',
    summary:
      '用问答的方式重新整理第一节课内容。比起直接记结论，这种写法更能保留“一个问题如何把思考往前推”的过程。',
    tags: [],
    sections: [
      {
        heading: '第一组：课程哲学与“苦涩的教训”',
        faqs: [
          {
            question: '为什么讲师会强调要从零开始构建语言模型？',
            answer: [
              '思考：这门课一开始就在提醒我们，真正危险的不是不会用模型，而是越来越习惯只停留在抽象层里。API 当然方便，但方便也意味着很多关键细节被折叠了。数据怎么组织、系统怎么支撑、模型为什么这样设计，如果这些问题都被屏蔽掉，研究者最后就会慢慢失去判断力。',
              '感想：所以“从零开始构建”在这里更像是一种重新接触底层的训练。它不是为了重复造轮子，而是为了把自己重新放回技术链条里，重新理解模型效果、成本和约束之间到底是怎么互相牵动的。',
            ],
            links: [
              {
                label: 'Stanford CS336 Course Page',
                href: 'https://stanford-cs336.github.io/spring2025/',
              },
            ],
          },
          {
            question: '为什么课程反而强调算法效率在更大规模下会更重要？',
            answer: [
              '思考：“苦涩的教训”常常被简化成“规模最重要”，但课程里更有意思的一点是，它并没有把规模和算法对立起来。相反，讲师强调的是，规模越大，效率越重要。',
              '感想：这点很能说服我。因为在小实验里，一点浪费似乎无伤大雅，但一旦训练规模变大，低效就会被成倍放大。最后省下来的不只是几个 token，而是整套训练预算和时间成本。这样看，算法优化并不是小修小补，而是在大规模时代变得更值钱了。',
            ],
            links: [
              {
                label: 'The Bitter Lesson - Rich Sutton',
                href: 'http://www.incompleteideas.net/IncIdeas/BitterLesson.html',
              },
            ],
          },
        ],
      },
      {
        heading: '第二组：分词技术（Tokenization）',
        faqs: [
          {
            question: 'BPE 到底在做什么？它为什么会成为一种常见的分词方法？',
            answer: [
              '思考：BPE 最有意思的地方，在于它不是单纯地“把文字切开”，而是在做一种压缩上的折中。它不断把高频相邻片段合并进词表里，让常见模式用更短的 token 表达出来，于是词表大小和序列长度之间就形成了一种平衡。',
              '感想：这样理解之后，分词就不只是前处理步骤了，而更像是模型效率设计的一部分。它在很早的地方就决定了后面训练到底会轻松还是笨重。',
            ],
            links: [
              {
                label: 'Neural Machine Translation of Rare Words with Subword Units',
                href: 'https://arxiv.org/abs/1508.07909',
              },
            ],
          },
          {
            question: '为什么讲师会特别强调压缩率？为什么压缩率为 1 会非常糟糕？',
            answer: [
              '思考：讲师反复提压缩率，也是在提醒我们，分词方案的好坏不能只看“能不能表示文本”，还要看它会不会把序列拖得过长。纯字节级编码虽然干净，但压缩率几乎为 1，意味着文本没有真正被压缩。',
              '感想：一旦想到 attention 的计算会随着序列长度快速膨胀，就很容易明白为什么这种做法会如此低效。原来“分得太细”不是表达更精确，而是可能直接把训练成本推高。',
            ],
            links: [
              {
                label: 'OpenAI tiktoken',
                href: 'https://github.com/openai/tiktoken',
              },
            ],
          },
          {
            question: '这些 token 最后是怎么还原回文本的？',
            answer: [
              '思考：解码这件事也让我对词表有了更具体的感觉。模型最后输出的并不是直接可读的文字，而是 token id；这些 id 还要通过词表映射回字节片段，再重新拼成字符串。',
              '感想：所以词表并不是一个附属表格，它其实同时参与了编码和解码，决定了模型如何看到文本，也决定了我们如何把模型输出重新读懂。',
            ],
            links: [
              {
                label: 'OpenAI tiktoken',
                href: 'https://github.com/openai/tiktoken',
              },
            ],
          },
        ],
      },
      {
        heading: '第三组：模型架构与涌现行为',
        faqs: [
          {
            question: '为什么课程会强调 Transformer 自 2017 年以来已经发生了很多变化？',
            answer: [
              '思考：虽然我们还在说 Transformer，但今天的大模型其实早就不是 2017 年论文里的原始版本了。课程里提到的很多改进，比如 SwiGLU、RoPE、RMSNorm、GQA，本质上都在说明一个事实：主干架构没有被推翻，但细节已经被一轮又一轮地重新雕过。',
              '感想：这会让我觉得，“还是 Transformer”这句话某种程度上有点误导。因为看起来名字没变，但内部很多关键部件已经被替换掉了。真正重要的，也许正是这些长期累积起来的小改动。',
            ],
            links: [
              {
                label: 'RoFormer: Enhanced Transformer with Rotary Position Embedding',
                href: 'https://arxiv.org/abs/2104.09864',
              },
              {
                label: 'GLU Variants Improve Transformer',
                href: 'https://arxiv.org/abs/2002.05202',
              },
              {
                label: 'GQA in Llama 2',
                href: 'https://arxiv.org/abs/2307.09288',
              },
            ],
          },
          {
            question: '为什么小模型上的实验结果，可能会误导我们对大模型能力的判断？',
            answer: [
              '思考：关于涌现的部分也很有冲击力。课程想提醒的不是“能力会神秘出现”，而是小模型上的结果可能会让人过早地下结论。有些能力在小规模时几乎看不出来，但一旦越过某个规模阈值，表现会突然跳出来。',
              '感想：这让我重新理解了为什么研究里会有那么多“看起来没效果，后来却很重要”的方向。如果只盯着小模型曲线，很容易误判一个方法没有前途；而真正的问题可能只是，它还没有到该显现能力的规模。',
            ],
            links: [
              {
                label: 'Emergent Abilities of Large Language Models',
                href: 'https://arxiv.org/abs/2206.07682',
              },
            ],
          },
        ],
      },
      {
        heading: '第四组：规模定律（Scaling Laws）与对齐（Alignment）',
        faqs: [
          {
            question: '什么叫 “Chinchilla 最优”？它到底在回答什么问题？',
            answer: [
              '思考：Chinchilla 最优最打动我的地方，是它把“模型做大”这件事从一种直觉，变成了一个更讲分配的问题。课程里给出的经验法则 D ≈ 20N，其实是在说：参数量和数据量要一起看，不能只盯着其中一个维度。',
              '感想：这会让我觉得，大模型并不是越大越强，而是越大越需要被“喂饱”。如果参数不断上去，但数据没有跟上，最后得到的可能只是一个看起来很大、实际却没有被充分训练的模型。',
            ],
            links: [
              {
                label: 'Training Compute-Optimal Large Language Models (Chinchilla)',
                href: 'https://arxiv.org/abs/2203.15556',
              },
            ],
          },
          {
            question: 'SFT 和 DPO/GRPO 这类方法最本质的区别是什么？',
            answer: [
              '思考：SFT 和 DPO/GRPO 的区别，也不只是训练步骤不同，而是它们在学习不同类型的信号。SFT 学的是一个比较明确的“标准回答”，而 DPO、GRPO 学的是偏好和奖励，也就是哪种回答更被认可。',
              '感想：这样一对比，就会发现“对齐”并不是简单地继续做监督学习，而是在把模型从“会答题”慢慢推向“答得更符合人类偏好”。它关注的不只是正确性，还包括回答风格、取舍和偏好结构。',
            ],
            links: [
              {
                label: 'Direct Preference Optimization',
                href: 'https://arxiv.org/abs/2305.18290',
              },
            ],
          },
          {
            question: '为什么 GRPO 会被单独拿出来讨论？',
            answer: [
              '思考：GRPO 被单独提出来，也说明现在大家很在意反馈学习的效率问题。比起更重的 RLHF 流程，它试图用更简化的目标减少训练负担。',
              '感想：这一点和前面讲的效率问题其实是连在一起的。哪怕到了对齐阶段，讨论的也不只是效果本身，而是效果能不能用更可承受的代价得到。',
            ],
            links: [
              {
                label: 'DeepSeekMath: GRPO',
                href: 'https://arxiv.org/abs/2402.03300',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'diy-llm-tokenizer-note-02',
    categoryId: 'diy-llm',
    course: 'DIY LLM',
    date: 'Chapter 02',
    title: '读《分词器》的一些思考',
    summary:
      '继续用问题驱动的方式整理分词器这一章，把数据预处理、BPE 边界处理、系统代价和算法评估几块串起来看。',
    tags: [],
    sections: [
      {
        heading: '第一组：数据预处理与多语言平衡',
        faqs: [
          {
            question: '为什么训练分词器前做“数据脱敏”不仅是为了隐私，也能提升分词效率？',
            answer: [
              '思考：文档里提到的脱敏很有意思，因为它并不是单纯出于合规或隐私保护。像人名、手机号、地址这类高基数信息，往往出现频率低、变化却很多。如果把这些内容原样留在语料里，BPE 会被迫在大量偶然出现的碎片上做统计，结果就是高频合并机会被噪声稀释掉。',
              '感想：这样看，脱敏其实是在做一种结构化去噪。把 [NAME]、[PHONE] 这类模式统一之后，分词器更容易把注意力放在可复用的语言结构上，而不是被一次性实例牵着走。它减少的不只是隐私风险，也减少了词表学习里的无效竞争。',
            ],
            links: [
              {
                label: 'DIY LLM Chapter 2 原文',
                href: 'https://github.com/datawhalechina/diy-llm/blob/main/docs/chapter2/chapter2_%E5%88%86%E8%AF%8D%E5%99%A8.md',
              },
            ],
          },
          {
            question: '如果训练语料里英文占绝大多数、韩文只占很小比例，会发生什么？',
            answer: [
              '思考：低资源语言最容易出现的问题不是“被翻译成别的语言”，而是被切得特别碎。因为词表空间会优先被高频语言占据，韩文里那些本来应该成为常见子词的模式，根本进不了高频统计和合并流程，最后只能以更零碎的 token 形式存在。',
              '感想：这种碎片化听起来只是分词不优雅，但后果其实很实际。token 数会增加，训练和推理成本会更高，模型对这门语言的表达也更难稳定下来。所以文档里建议在语料阶段就做平衡处理，比如对低资源语言过采样、对高资源语言下采样，我觉得这一步比很多后续补救都更根本。',
            ],
            links: [
              {
                label: 'DIY LLM Chapter 2 原文',
                href: 'https://github.com/datawhalechina/diy-llm/blob/main/docs/chapter2/chapter2_%E5%88%86%E8%AF%8D%E5%99%A8.md',
              },
            ],
          },
        ],
      },
      {
        heading: '第二组：BPE 算法细节与边界处理',
        faqs: [
          {
            question: '为什么有些 BPE 实现会加上 </w> 这样的单词边界标记，或者在开头加空格？',
            answer: [
              '思考：边界标记最核心的作用，是让编码保持可逆。BPE 在不断合并子词时，如果完全不知道哪里是词边界，最后得到的 token 可能在统计上很高频，但在解码时却不知道该在哪里断开。也就是说，编码虽然能压缩，解码却可能失去原始文本结构。',
              '感想：这一点让我意识到，分词器设计并不只是“怎么切得更短”，还要考虑“怎么无歧义地拼回去”。像 </w> 或者前导空格，看起来只是技术细节，但本质上是在给模型保留还原文本的路标。',
            ],
            links: [
              {
                label: 'Subword-NMT: BPE 实现背景',
                href: 'https://arxiv.org/abs/1508.07909',
              },
              {
                label: 'DIY LLM Chapter 2 原文',
                href: 'https://github.com/datawhalechina/diy-llm/blob/main/docs/chapter2/chapter2_%E5%88%86%E8%AF%8D%E5%99%A8.md',
              },
            ],
          },
          {
            question: '为什么很多 BPE 训练脚本在处理字节序列时会用 latin-1，而不是 utf-8？',
            answer: [
              '思考：这里选 latin-1 不是因为它语义更强，而是因为它足够“机械”。latin-1 可以把 0 到 255 的每个字节一一映射成字符，所以任何原始字节序列都能无损地被 Python 当成字符串处理。这样即便切到一个汉字的中间字节，也不会因为不是合法 utf-8 序列而报错。',
              '感想：这让我觉得，很多工程上的选择其实不是追求优雅，而是在追求稳定可逆。对分词器来说，先安全地把所有字节托住，比先谈字符层面的语义要更基础，因为连表示都不稳定，后面的统计和合并就无从谈起。',
            ],
            links: [
              {
                label: 'Python codecs: latin-1',
                href: 'https://docs.python.org/3/library/codecs.html',
              },
              {
                label: 'DIY LLM Chapter 2 原文',
                href: 'https://github.com/datawhalechina/diy-llm/blob/main/docs/chapter2/chapter2_%E5%88%86%E8%AF%8D%E5%99%A8.md',
              },
            ],
          },
        ],
      },
      {
        heading: '第三组：系统影响与特殊 Token',
        faqs: [
          {
            question: '序列长度对 Transformer 的计算复杂度到底有什么影响？为什么不能直接用纯字节级编码？',
            answer: [
              '思考：文档把这个问题讲得很直接。分词压缩率低，最直接的后果就是序列变长；而一旦序列变长，Transformer 里的 attention 开销会快速上升。因为 attention 需要处理 token 两两之间的关系，所以复杂度通常和序列长度的平方相关。',
              '感想：这样一来，纯字节级编码的问题就非常现实了。它不是“能不能用”的问题，而是“代价能不能承受”的问题。哪怕它在表示上最通用，只要序列长到一定程度，训练显存和推理延迟都会变得很难接受。',
            ],
            links: [
              {
                label: 'Attention Is All You Need',
                href: 'https://arxiv.org/abs/1706.03762',
              },
              {
                label: 'DIY LLM Chapter 2 原文',
                href: 'https://github.com/datawhalechina/diy-llm/blob/main/docs/chapter2/chapter2_%E5%88%86%E8%AF%8D%E5%99%A8.md',
              },
            ],
          },
          {
            question: '像 <PAD>、<MASK>、<CLS> 这样的特殊 Token，为什么不能参与 BPE 的合并统计？',
            answer: [
              '思考：这些特殊 token 的意义不是来自文本频率，而是来自系统约定。它们承担的是填充、遮盖、分类起始这类控制功能，所以它们的 id 和边界必须保持稳定。如果把它们也扔进 BPE 合并流程，它们就可能被拆开、重组，甚至和普通文本片段混在一起。',
              '感想：这会让我更清楚地看到，分词器并不只是语言工具，它同时也是系统接口的一部分。特殊 token 一旦不稳定，影响的就不只是词表，而是训练和推理全流程的一致性。',
            ],
            links: [
              {
                label: 'Hugging Face Tokenizer Special Tokens',
                href: 'https://huggingface.co/docs/transformers/main_classes/tokenizer',
              },
              {
                label: 'DIY LLM Chapter 2 原文',
                href: 'https://github.com/datawhalechina/diy-llm/blob/main/docs/chapter2/chapter2_%E5%88%86%E8%AF%8D%E5%99%A8.md',
              },
            ],
          },
        ],
      },
      {
        heading: '第四组：算法对比与评估',
        faqs: [
          {
            question: 'BPE 和 Unigram 在筛选词表时最本质的区别是什么？',
            answer: [
              '思考：BPE 的思路是从小往大做加法，不断把高频片段合并进词表；而 Unigram 更像是先把候选词表铺得很大，再反过来做减法。它会给每个子词估计概率，然后迭代地把那些对整体似然贡献小的 token 剪掉，直到剩下一个更精炼的词表。',
              '感想：这两种方法的气质很不一样。BPE 更像贪心地抓住高频结构，Unigram 则更像从整体上反复修枝。也正因为这样，Unigram 往往给人一种“词表是被筛出来的”感觉，而不是一步步拼出来的。',
            ],
            links: [
              {
                label: 'Subword Regularization: Unigram Language Model',
                href: 'https://arxiv.org/abs/1804.10959',
              },
              {
                label: 'DIY LLM Chapter 2 原文',
                href: 'https://github.com/datawhalechina/diy-llm/blob/main/docs/chapter2/chapter2_%E5%88%86%E8%AF%8D%E5%99%A8.md',
              },
            ],
          },
          {
            question: '除了压缩比，还可以用什么指标来评估一个分词器？',
            answer: [
              '思考：压缩比当然重要，但它只能说明序列有没有被缩短，不能说明这种缩短是不是“合理”。文档提到还要看平均序列长度和分布、碎片化程度、跨语言平衡度、OOV 率等指标，因为这些东西会直接影响显存占用、推理效率，以及模型对专业术语和新词的理解能力。',
              '感想：这让我觉得，分词器评估其实比表面上更像一个系统问题。一个分词器不该只在统计表上表现漂亮，还要在真实任务里少占资源、少制造碎片、少让关键实体被切坏。最终评估的不是“切法本身”，而是它有没有帮助模型更稳地工作。',
            ],
            links: [
              {
                label: 'SentencePiece',
                href: 'https://github.com/google/sentencepiece',
              },
              {
                label: 'DIY LLM Chapter 2 原文',
                href: 'https://github.com/datawhalechina/diy-llm/blob/main/docs/chapter2/chapter2_%E5%88%86%E8%AF%8D%E5%99%A8.md',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'cs336-note-02-in-progress',
    categoryId: 'diy-llm',
    course: 'CS336',
    date: 'Card 02',
    title: 'PyTorch 与资源核算',
    summary:
      '一边看原文一边积累问题，把容易混淆的概念先讲清楚，再慢慢沉淀成最后可直接写到卡片上的总结。',
    tags: [],
    sections: [
      {
        heading: '第一组：稀疏化与模型压缩',
        faqs: [
          {
            question:
              '原文说“结构化稀疏是一种模型压缩方法，通常对稠密模型按 50% 稀疏度做 n:m 剪枝”，这里说的是训练时还是训练后？为什么模型会变稀疏？',
            answer: [
              '思考：这里默认说的首先是训练后或训练接近结束时的压缩流程。更典型的做法是，先拿到一个已经训练好的稠密模型，再按照 2:4、4:8、8:16 这类 n:m 规则，把每组连续权重里一部分认为“不太重要”的权重直接剪成 0，然后再做一点微调，让模型把性能补回来。所以它被称为模型压缩，本质上是在把已经学到的稠密参数重新整理成一种更省算力、更省存储的形式。',
              '补充：但稀疏化也不一定只能发生在训练后。实际里还有两种常见变体：一种是训练中逐步剪枝，也就是边训练边把权重慢慢推成稀疏；另一种是从一开始就带着稀疏约束训练稀疏模型。只是对入门材料来说，最容易理解、也最符合“压缩”这个说法的，通常还是“先训练出稠密模型，再剪枝，再微调”的路线。',
              '为什么会稀疏：不是模型自己天然长成稀疏，而是人为施加了稀疏约束。研究者发现，很多权重即使被置零，对最终效果影响也没那么大，说明网络里存在冗余。于是就可以把一部分低重要性的连接剪掉，让参数矩阵里出现大量 0，这就叫稀疏。',
              '结构化稀疏和非结构化剪枝的差别，关键不只在“剪多少”，还在“怎么剪”。非结构化剪枝可以在全矩阵里自由挑任意权重置零，灵活但零分布很散，硬件不容易高效利用；结构化稀疏则要求零按照固定模式出现，比如每 4 个连续权重里必须有 2 个是 0。这样自由度低一些，但更容易被 GPU 或专用加速器真正加速，所以工程上通常更有价值。',
              '卡片版总结：结构化稀疏通常指先训练出稠密模型，再按固定 n:m 模式把部分低重要性权重剪成 0，并通过微调恢复性能。模型之所以“变稀疏”，不是因为训练自然得到，而是因为我们主动做了剪枝或加入了稀疏约束；这样做的目的是减少参数、内存和计算量，同时让硬件更容易加速。',
            ],
            links: [],
          },
          {
            question:
              '怎么理解转置后的张量是非连续的？一开始没转置的时候是连续的，转置以后只是视图改变吗，那也还是连续的？',
            answer: [
              '思考：关键要把“形状/视图变了”和“底层内存排列是否连续”分开。张量连续，指的是它在内存里按照当前这个形状所期望的顺序一段一段紧挨着排好；而转置通常只是改了看数据的方式，也就是改了 shape 和 stride，并没有真的把底层数据重新搬家。',
              '举个最简单的例子，一个 2x3 张量如果按行连续存储，内存顺序会像 [a, b, c, d, e, f]。把它转置成 3x2 之后，我们在逻辑上想看到的是 [[a, d], [b, e], [c, f]]。但底层内存并没有变成 [a, d, b, e, c, f]，它还是原来那段连续内存。所以对于“转置后的这个新形状”来说，相邻元素往往不是挨着放的，而是要跳着取，这就是非连续。',
              '补充：所以你说“只是视图改变”这句其实是对的，也正因为它只是视图改变、没有重排内存，它才常常变成非连续。如果转置之后还想让它在新布局下也连续，就得显式做一次内存重排，比如很多框架里的 contiguous()、clone() 或 copy 之类操作。',
              '从 stride 理解会更清楚。连续张量的 stride 和它当前 shape 是匹配的；转置后 shape 变了，stride 也会交换。这样虽然还能正确索引到原数据，但访问模式已经不是“按新形状顺着一块连续内存往后读”了，所以框架会说它 non-contiguous。',
              '卡片版总结：转置通常不是把数据重新排一遍，而是返回一个共享底层存储的视图。因为 shape 变了但底层内存顺序没变，转置后的张量往往需要按 stride 跳着访问元素，所以对“新形状”来说它通常是非连续的；只有显式重排内存后，它才会重新变成连续。',
            ],
            links: [],
          },
          {
            question:
              '如果把转置后的结果赋给一个变量，这个变量存的到底是什么？为什么再对它做 view/reshape 时会失败？不就是从原来的 x 去看 y 再看一次吗？',
            answer: [
              '思考：把转置后的结果赋给一个新变量时，这个变量并不是只存“x 加一个查看方法”的口头概念，但可以近似这样理解。更准确地说，它会得到一个新的张量对象 y；这个对象和 x 共享同一块底层 storage，同时 y 自己带着新的 shape、stride 和 offset 这些元信息。也就是说，y 不是一份新数据副本，而是“指向同一块内存、但索引规则不同”的另一个张量描述。',
              '为什么 view 会失败：因为 view 不是随便改一下 shape 就行，它要求底层内存布局能够支持这种新形状，而且通常要求这个张量在当前访问规则下是连续的，或者至少各维度满足可以无拷贝重解释的条件。转置后的 y 往往 stride 已经变了，元素访问是跳着走的，所以很多新的 shape 没法只靠改元信息来表达。',
              '关键点在于，“再看一次”并不总是合法。你当然可以先从 x 得到一个转置视图 y，但如果 y 的元素顺序在逻辑上已经是按跳跃方式组织的，那么想把 y 再 view 成别的形状时，框架需要保证：新形状里的相邻元素，真的能对应到底层内存里某种一致的 stride 规则。如果做不到，就不能只靠 view 完成，只能先把数据拷贝成连续布局。',
              '举例：x 是 2x3 的连续张量，转置后 y 变成 3x2，但底层还是同一段 [a, b, c, d, e, f]。这时 y 逻辑上读出来是 [[a, d], [b, e], [c, f]]。如果你再想把 y view 成一维并希望得到 [a, d, b, e, c, f]，这不是原内存里的连续顺序，而是一个交错读取结果，所以单靠改 shape 不够，往往必须先 contiguous() 再 view。',
              '补充：这也是为什么很多框架里 reshape 比 view 更“宽容”。reshape 会先尝试无拷贝；如果发现当前 stride 不支持，就可能偷偷复制出一份连续内存再返回。而 view 更严格，它强调的是“只改查看方式，不动底层数据”，所以条件不满足时就直接失败。',
              '卡片版总结：转置赋值给新变量后，新变量得到的是一个共享底层 storage 的新张量对象，它有自己的 shape 和 stride。view 失败不是因为不能“再看一次”，而是因为当前 stride 所描述的访问方式不足以支持目标形状；如果目标形状需要新的连续布局，就必须先做 contiguous 或让 reshape 触发拷贝。',
            ],
            links: [],
          },
          {
            question: 'stride 是什么？',
            answer: [
              '思考：stride 可以理解成“沿着某一维移动一格时，底层内存地址要跳多少个元素”。它描述的不是张量里存了什么值，而是框架应该怎样从底层 storage 里把这些值按 shape 读出来。',
              '比如一个 shape 是 2x3 的连续张量 [[a, b, c], [d, e, f]]，底层内存通常是 [a, b, c, d, e, f]。这时它的 stride 往往是 (3, 1)：在第 0 维也就是行方向往下走一格，要跨过 3 个元素；在第 1 维也就是列方向往右走一格，只要跨过 1 个元素。',
              '所以 shape 告诉你“这是几行几列”，stride 告诉你“从一个位置走到下一个位置时，去内存里怎么跳”。两者要一起看，框架才能知道一个二维或更高维张量到底映射到哪块底层数据。',
              '为什么它重要：连续张量之所以连续，就是因为它的 stride 和当前 shape 是匹配的，按逻辑顺序访问时正好顺着内存往后读。像转置这种操作，往往不改底层数据，只改 shape 和 stride。例如一个 2x3 连续张量转置成 3x2 后，stride 常常会从 (3, 1) 变成 (1, 3)。这样依然能正确取到值，但访问模式已经变成“跳着读”，所以它常常是非连续的。',
              '也可以把 stride 想成导航规则。storage 是仓库，shape 是地图网格，stride 是你在网格中每走一步时该跨过多少个箱子。没有 stride，框架只知道张量看起来长什么样，却不知道该怎样去底层内存把元素拿出来。',
              '卡片版总结：stride 表示在某一维上移动一个单位时，底层内存要跳过多少个元素。shape 决定张量“长什么样”，stride 决定框架“怎么读到它”；转置、切片等 view 操作本质上常常是在改 stride，而不是改底层数据。',
            ],
            links: [],
          },
          {
            question:
              '在 `[batch, sequence, hidden]` 里，`x @ y.transpose(-2, -1)` 为什么会得到 `(batch, sequence, sequence)`？这里的 hidden 是用来干什么的？',
            answer: [
              '思考：这里最关键的是把最后两维当成矩阵乘法在看，而把 batch 维当成“并行处理多少个样本”。如果 x 的形状是 (batch, sequence, hidden)，那对于每个 batch 来说，x 都可以看成一个 `sequence x hidden` 的矩阵，也就是“sequence 个 token，每个 token 用一个 hidden 维向量表示”。',
              '这时 y 原本也是 `(batch, sequence, hidden)`。把它做 `transpose(-2, -1)` 之后，最后两维从 `(sequence, hidden)` 变成 `(hidden, sequence)`，所以每个 batch 里的 y 就从一个 `sequence x hidden` 矩阵变成了一个 `hidden x sequence` 矩阵。',
              '于是每个 batch 内部做的其实是：`(sequence x hidden) @ (hidden x sequence) = (sequence x sequence)`。中间那个 hidden 维正好被乘掉了，所以最后留下的是两个 sequence 维。这就是为什么输出是 `(batch, sequence, sequence)`。',
              '那 hidden 是干什么的：它可以理解成每个 token 的特征维度，也就是 embedding 或隐状态向量的长度。一个 token 不是只用一个数表示，而是用一个 `hidden` 维的向量表示它的语义、上下文信息等。矩阵乘法时，hidden 这一维充当的是“做相似度比较或特征交互的通道数”。',
              '如果把一个 token 看成一个 hidden 维向量，那么 `x[i]` 和 `y[j]` 做点积时，本质上就是在 hidden 这个特征空间里比较第 i 个 token 和第 j 个 token。算出来的一个标量，就表示这两个位置之间的匹配程度或相关程度。所以最后得到的 `(sequence, sequence)`，可以理解成“每个 token 和每个 token 之间两两比较后的分数表”。',
              '这正是 attention 里很核心的直觉：每个 token 都带着一个 hidden 维表示，模型通过沿着 hidden 维做点积，把 token 两两之间的关系算出来，因此得到一个 `sequence x sequence` 的注意力分数矩阵。hidden 不是被丢掉了，而是作为比较特征被聚合进了这个分数里。',
              '卡片版总结：在 `(batch, sequence, hidden)` 中，hidden 表示每个 token 的特征向量长度。`x @ y.transpose(-2, -1)` 本质上是在每个 batch 内做 `(sequence x hidden) @ (hidden x sequence)`，所以 hidden 被乘掉，输出变成 `(sequence x sequence)`；它表示序列中每个位置和其他位置之间的两两相关性。',
            ],
            links: [],
          },
          {
            question:
              '为什么说“如果未来修改了张量形状，比如在 Transformer 里加了 heads 维度，这段代码就可能出错”？',
            answer: [
              '思考：这里真正想提醒的不是 `transpose(-2, -1)` 这个写法本身一定有问题，而是“当你脑子里默认张量永远是 `[batch, sequence, hidden]` 时，很多后续操作会悄悄依赖这个固定顺序”。一旦模型结构变了，比如把 hidden 拆成 `heads x head_dim`，原来那些写死维度位置的 `view`、`transpose`、矩阵乘法、softmax 就很容易不再表达你真正想做的事。',
              '以 attention 为例，最开始你可能只有 `(batch, sequence, hidden)`，写 `x @ y.transpose(-2, -1)` 得到 `(batch, sequence, sequence)`，这在“单头”理解下没问题。但真正的 multi-head attention 往往会先把 hidden 拆开，变成 `(batch, sequence, heads, head_dim)`，然后再重排成 `(batch, heads, sequence, head_dim)`。这时你真正想做的乘法已经变成：每个 head 内部都各自算一个 `sequence x sequence` 的分数矩阵。',
              '如果这时你还沿用原来针对三维张量的思路，比如忘了先把 heads 挪到前面，或者 `view` 时仍假设最后一维就是完整 hidden，那么代码虽然有时还能跑，但语义可能已经错了：你可能会不小心把不同 head 混在一起，或者把本该在每个 head 内独立进行的运算，变成跨 head 的错误组合。',
              '更具体地说，危险通常出在两类地方。第一类是 `view`：原先你可能写 `x.view(batch, sequence, num_heads, head_dim)`，但如果前面经历过 transpose，这个张量可能已经不是连续的，直接 view 就会失败。第二类是“维度位置写死”：比如你默认第 1 维永远是 sequence、第 2 维永远是 hidden，可一旦 shape 变成四维，这个假设就不成立了，softmax 到底应该沿哪个维度做、transpose 应该交换哪两个维度，都需要重新想清楚。',
              '所以原文那句“未来修改形状后代码可能出错”，本质是在说：靠手工记忆维度顺序写代码很脆弱。模型一旦从单头扩展到多头，张量的语义轴变多了，原来那套“最后两维做点积”的写法虽然形式上还在，但每一维到底代表什么必须重新确认，否则就很容易把逻辑写偏。',
              '卡片版总结：问题不在于 `transpose(-2, -1)` 本身，而在于很多代码默认张量永远是 `[batch, sequence, hidden]`。当模型加入 `heads` 等新维度后，原来写死的 `view`、`transpose` 和矩阵乘法会依赖错误的维度语义，轻则报错，重则代码能跑但计算逻辑已经错了。',
            ],
            links: [],
          },
          {
            question:
              '`einsum("batch seq1 hidden, batch seq2 hidden -> batch seq1 seq2")` 里说未出现在输出中的 `hidden` 会被自动求和，但求和又不是矩阵乘法，这该怎么理解？',
            answer: [
              '思考：你卡住的点非常关键。单独“求和”当然不是矩阵乘法，但矩阵乘法本来就不是只做乘法，而是“先对应元素相乘，再把乘积加起来”。也就是常说的乘加运算。`einsum` 只是把这个过程写得更显式。',
              '拿最普通的矩阵乘法来说，如果 `A` 是 `(m, k)`，`B` 是 `(k, n)`，那么结果 `C[i, j]` 的定义就是：`C[i, j] = Σ_t A[i, t] * B[t, j]`。这里那个 `Σ_t` 就是对中间维度做求和；而在求和之前，每一项都先做了乘法。所以矩阵乘法本质上就是“沿共享维度做乘积再求和”。',
              '放到你的 `einsum` 里，`"batch seq1 hidden, batch seq2 hidden -> batch seq1 seq2"` 的意思是：对于固定的 `batch, seq1, seq2`，结果等于 `sum_hidden x[batch, seq1, hidden] * y[batch, seq2, hidden]`。也就是说，对每个 `hidden` 位置先把两个向量分量相乘，再把所有 hidden 位置的乘积加起来。',
              '这其实正是两个 hidden 维向量的点积。点积不是“只有求和”，而是“逐项相乘后再求和”。所以这里消失的 `hidden` 维，并不是被随便加掉了，而是在执行点积；而一堆 token 两两之间的点积排成表，最终就形成了 `(seq1, seq2)` 的矩阵。',
              '换句话说，`einsum` 里的“未出现在输出中的维度会被求和”，真正完整的理解应该是：这个维度如果同时出现在输入里，就会先参与逐元素乘法，再被约掉。它表达的是张量收缩（contraction），而矩阵乘法正是张量收缩的一种特殊情况。',
              '卡片版总结：`einsum` 里消失的维度不是“直接求和”，而是“先沿该维度逐项相乘，再把乘积求和”。矩阵乘法本质就是这种乘加过程，因此 `hidden` 在这里被约掉，正对应每对 token 表示之间的点积。',
            ],
            links: [],
          },
          {
            question:
              '`einsum(x, w, "... hidden1, hidden1 hidden2 -> ... hidden2")` 这种是不是在对 `hidden1` 做压缩？',
            answer: [
              '思考：更准确地说，这里不是单纯“压缩 hidden1”，而是在做一次线性变换。`x` 的最后一维是 `hidden1`，权重矩阵 `w` 的形状是 `(hidden1, hidden2)`，两者相乘后，输出最后一维变成 `hidden2`。所以本质上是把每个位置上的 `hidden1` 维表示，映射成一个新的 `hidden2` 维表示。',
              '为什么 `hidden1` 会消失：因为它是输入特征维，同时也是权重矩阵的输入维。在 `einsum` 里，共享的 `hidden1` 会先参与乘法，再沿这个维度求和，于是得到新的输出特征 `hidden2`。这和全连接层、线性层 `nn.Linear(hidden1, hidden2)` 是同一件事。',
              '只有在 `hidden2 < hidden1` 时，你可以把它口头上理解成“降维”或“压缩特征维”；如果 `hidden2 > hidden1`，那反而是在升维；如果两者相等，则只是做了一次同维度的线性混合。所以“压缩”不是这个公式本身的定义，而只是某些具体维度设置下的结果。',
              '这里的 `...` 也很重要，它表示前面的 batch、sequence、heads 等维度都原样保留。也就是说，这个操作不是在压 batch 或 sequence，而是对每个位置上那个 `hidden1` 向量，都独立应用同一个线性变换矩阵 `w`，把它变成 `hidden2` 向量。',
              '卡片版总结：`"... hidden1, hidden1 hidden2 -> ... hidden2"` 本质上是线性层/矩阵乘法，把最后一维从 `hidden1` 映射到 `hidden2`。`hidden1` 被约掉不是因为它天然表示“压缩”，而是因为它作为输入特征维参与乘加运算；是否算压缩，要看 `hidden2` 是否小于 `hidden1`。',
            ],
            links: [],
          },
          {
            question:
              '`x = rearrange(x, "... heads hidden2 -> ... (heads hidden2)")` 是什么意思？',
            answer: [
              '思考：这句不是在做计算，而是在改张量的组织方式。`rearrange(x, "... heads hidden2 -> ... (heads hidden2)")` 的意思是，把最后两个维度 `heads` 和 `hidden2` 合并成一个更大的维度 `heads * hidden2`，前面的 `...` 维度都保持不变。',
              '如果原来 x 的形状是 `(batch, sequence, heads, hidden2)`，那执行后就会变成 `(batch, sequence, heads * hidden2)`。所以它本质上是在“把多头重新拼回一个大向量”。',
              '这在 multi-head attention 里非常常见。前面模型会先把一个大 hidden 拆成 `heads x head_dim`，让每个 head 独立计算；等每个 head 都算完之后，再把这些 head 的结果重新并起来，恢复成一个单一的特征维。这里的 `hidden2` 很多时候就可以理解成每个 head 的 `head_dim`。',
              '和前面的 `einsum` 不一样，`rearrange` 不会做乘加，也不会引入新的信息；它只是重新解释或重排维度。你可以把它理解成“把原来分开放的多个小向量，按顺序接成一个长向量”。',
              '卡片版总结：`"... heads hidden2 -> ... (heads hidden2)"` 表示把最后两个维度合并成一个维度，即把多个 head 的输出重新拼接起来。它不是线性变换，也不是求和，而只是改变张量的形状和维度组织方式。',
            ],
            links: [],
          },
          {
            question: '反向传播到底在做什么？',
            answer: [
              '思考：反向传播本质上不是“再算一遍前向”，而是沿着计算图从输出往回，系统地计算每个参数对最终 loss 的影响有多大，也就是梯度。前向传播负责把输入一步步变成输出并算出 loss；反向传播负责回答“如果某个权重稍微变大一点，loss 会往哪个方向变、变多少”。',
              '它最核心的数学工具是链式法则。因为神经网络是很多层函数复合起来的，所以损失对前面某层参数的影响，必须通过后面所有层一层层传回来。反向传播做的就是把这个链式法则高效地组织起来：先算最后一层的梯度，再利用这些中间梯度往前递推，而不是对每个参数单独做一次昂贵的微分。',
              '从线性层角度看，如果前向是 `y = xW`，那么反向通常要算三件事：loss 对输出 `y` 的梯度、loss 对输入 `x` 的梯度，以及 loss 对权重 `W` 的梯度。也就是说，反向传播不只是为了更新参数，它还得把梯度继续传给更前面的层，所以会额外产生多次矩阵乘法。',
              '这也是为什么训练比只做推理贵得多。推理只需要前向；训练既要前向得到 loss，又要反向把梯度一路传回去，再由优化器更新参数。反向里需要保存中间激活、计算参数梯度和激活梯度，所以显存和算力开销都会明显更大。',
              '卡片版总结：反向传播是利用链式法则，从 loss 反向计算各层参数和中间变量梯度的过程。它的作用不是重新做预测，而是告诉模型每个参数该往哪个方向更新；因此训练不仅比推理多了梯度信息，还多了大量额外计算和显存开销。',
            ],
            links: [],
          },
          {
            question: '为什么训练 Transformer 常写成大约 `6 x 数据量 x 参数量`？',
            answer: [
              '思考：这里说的通常不是参数个数本身，而是训练计算量的粗略估计。更常见的写法是：训练一个稠密 Transformer 的总 FLOPs 约等于 `6 x N x D`，其中 `N` 是参数量，`D` 是训练中看到的 token 数。很多材料也会把它口语化成“6 倍的数据点乘参数量”，但在语言模型语境里，那个“数据点”通常更准确地说是 token 数。',
              '为什么是 6：对一个 token 做一次前向传播时，最主要的开销来自大量矩阵乘法。粗略看，每个参数大致会参与一次乘加运算，一个乘加常近似记作 2 FLOPs，所以前向大约是 `2N` FLOPs/token。训练时还要做反向传播，而反向通常还要再算两类类似规模的东西：一类是对激活的梯度，一类是对参数的梯度，总共再加上约 `4N` FLOPs/token。于是前向 `2N` 加反向 `4N`，总共就是约 `6N` FLOPs/token。',
              '所以如果总共训练了 `D` 个 token，总训练算力就近似是 `6ND`。这个公式之所以好用，是因为它抓住了大模型训练里最主要的部分：稠密线性层和矩阵乘法的开销。它不是精确到每一项的物理定律，而是一个工程上非常常见的估算规则。',
              '为什么说是“近似”：因为真实 Transformer 里还会有 attention、softmax、layernorm、embedding、不同序列长度、参数共享、MoE、激活检查点等细节，这些都会改变常数项。但对标准稠密 Transformer 来说，主导计算量的通常仍是矩阵乘法，所以 `6 x 参数量 x token 数` 这个近似在规模分析里很常见。',
              '卡片版总结：`6 x 数据量 x 参数量` 说的是训练 FLOPs 的粗略估计，不是模型大小。它来自“前向约 `2N`，反向约 `4N`，合计约 `6N` FLOPs/token” 这个经验近似；再乘上训练看到的 token 数 `D`，就得到总训练计算量约 `6ND`。',
            ],
            links: [],
          },
        ],
      },
    ],
  },
  {
    id: 'cs336-note-03-optimizers',
    categoryId: 'diy-llm',
    course: 'CS336',
    date: 'Card 03',
    title: '第二节课补充｜常用优化器可视化',
    summary:
      '把 SGD、Momentum、AdaGrad、RMSProp、Adam 放在同一页里，用统一的视觉方式看它们各自是怎么“走向最优点”的。',
    tags: [],
    sections: [
      {
        heading: '第一组：先抓一个统一直觉',
        paragraphs: [
          '可以把训练想成在一张起伏地形上往低谷走。参数是你现在站的位置，梯度告诉你脚下最陡的上坡方向，所以更新时要朝反方向走。不同优化器的区别，不在于它们要不要看梯度，而在于它们“信不信当前这一步”“会不会记住过去的方向”“会不会给不同参数不同步长”。',
          '下面每张卡片里的小图都不是精确数学轨迹，而是帮助建立直觉的示意图：横轴可以想成训练推进过程，纵轴可以想成离最优点还有多远。点越往右下，表示越接近稳定收敛。',
        ],
      },
      {
        heading: '第二组：五种常用优化器',
        optimizerVisuals: [
          {
            label: 'Baseline',
            name: 'SGD',
            badge: '最直接',
            summary: '每一步只看当前梯度，像是闭着眼沿最陡方向往下走，简单但容易来回抖动。',
            trace: [
              [8, 18],
              [20, 44],
              [30, 30],
              [42, 58],
              [52, 42],
              [65, 70],
              [76, 58],
              [88, 82],
            ],
            points: [
              '更新规则最简单：参数减去学习率乘以当前梯度。',
              '优点是实现直接、内存开销小。',
              '缺点是遇到狭长谷地时容易左右震荡，收敛不够稳。',
            ],
          },
          {
            label: 'Velocity',
            name: 'Momentum',
            badge: '更顺',
            summary: '像推着一个小球下坡，不只看眼前斜率，还会保留过去的速度，所以更容易穿过小震荡。',
            trace: [
              [8, 22],
              [18, 30],
              [30, 34],
              [42, 40],
              [56, 50],
              [68, 60],
              [78, 70],
              [88, 82],
            ],
            points: [
              '在 SGD 基础上引入梯度的指数移动平均，形成动量。',
              '能在方向稳定时越走越快，在噪声方向上减少摆动。',
              '常被用来解释“为什么优化轨迹会更平滑”。',
            ],
          },
          {
            label: 'Adaptive',
            name: 'AdaGrad',
            badge: '越走越谨慎',
            summary: '历史梯度越大的参数，后面步子会越小；稀疏特征常能获得更大的有效学习率。',
            trace: [
              [8, 20],
              [18, 32],
              [28, 44],
              [38, 55],
              [48, 63],
              [60, 70],
              [74, 76],
              [88, 81],
            ],
            points: [
              '核心是累计历史梯度平方，并据此缩放每个参数的学习率。',
              '对稀疏特征友好，因为不常更新的参数不会被过度压小。',
              '问题是学习率会一路衰减，后期可能走得过慢。',
            ],
          },
          {
            label: 'Adaptive EMA',
            name: 'RMSProp',
            badge: '更耐用',
            summary: '不再把所有历史梯度平方一直累加，而是只保留近期的指数加权平均，所以步长不会过早枯竭。',
            trace: [
              [8, 18],
              [19, 28],
              [30, 40],
              [42, 50],
              [54, 61],
              [66, 69],
              [78, 77],
              [88, 83],
            ],
            points: [
              '可以看成对 AdaGrad 的修正：只记住最近一段时间的梯度平方。',
              '这样既有自适应学习率，又避免无限累加带来的过早减速。',
              '在循环网络等场景里历史上很常见。',
            ],
          },
          {
            label: 'Most Common',
            name: 'Adam',
            badge: '最常用',
            summary: '同时保留一阶动量和二阶统计，既有 Momentum 的方向感，也有 RMSProp 的自适应步长。',
            trace: [
              [8, 20],
              [18, 26],
              [30, 34],
              [42, 44],
              [55, 56],
              [67, 66],
              [79, 76],
              [88, 83],
            ],
            points: [
              '一阶矩估计负责积累方向，二阶矩估计负责调节步长。',
              '通常开箱即用表现较稳，因此成为深度学习里的默认选项之一。',
              '也要注意它不一定总比 SGD 泛化更好，具体任务仍要看实验。',
            ],
          },
        ],
      },
      {
        heading: '第三组：一句话对比',
        bullets: [
          'SGD：只看眼前这一步，简单但容易抖。',
          'Momentum：在 SGD 上加“惯性”，更平滑也更快。',
          'AdaGrad：按历史梯度自适应缩放学习率，但后期容易太慢。',
          'RMSProp：保留 AdaGrad 的自适应优点，同时避免学习率持续塌缩。',
          'Adam：把 Momentum 和 RMSProp 结合起来，是最常见的默认优化器。',
        ],
      },
    ],
  },
]
