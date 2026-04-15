export const site = {
  title: 'bananajia',
  intro: '',
  category: 'CS336 Learning Notes',
}

export const stats = [
  {
    value: '01',
    label: '当前课程',
    description: '先围绕 DIY LLM 建站，把每次作业都沉淀成可复用页面。',
  },
  {
    value: '03',
    label: '站点栏目',
    description: '首页、笔记、作业，结构先简单但能持续扩展。',
  },
  {
    value: 'Ready',
    label: '可视化能力',
    description: '后面可以直接接 Recharts、ECharts 或 Plotly 展示实验结果。',
  },
]

export const notes = [
  {
    id: 'cs336-note-01',
    course: 'CS336',
    date: 'Lesson 01',
    title: '看完视频第一节课的一些思考',
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
]
