---
id: 'chapter4-transformer-flow-visual'
category: 'diy-llm'
chapter: 'chapter-4'
course: 'DIY LLM'
date: 'Card 05'
title_zh: 'Chapter 4｜Transformer 标准流程可视化'
title_en: 'Chapter 4 | Visualizing the Standard Transformer Flow'
summary_zh: '把 4.1 节的位置编码、多头注意力、残差归一化和前馈网络重新串成一条数据流，看清一个 token 表示如何穿过 Transformer block。'
summary_en: 'Reconnect the positional encoding, multi-head attention, residual normalization, and feed-forward network from Section 4.1 into a single data flow to see how a token representation passes through a Transformer block.'
tags: []
---

# Chapter 4｜Transformer 标准流程可视化

> 把 4.1 节的位置编码、多头注意力、残差归一化和前馈网络重新串成一条数据流，看清一个 token 表示如何穿过 Transformer block。

## 第一组：先看总流程，不先看零件

4.1 节原文的问题不是知识点错，而是讲法偏”组件罗列”：先讲位置编码，再讲多头注意力，再讲 LayerNorm/残差，再讲 FFN。这样适合查概念，但不太适合建立整体流程。

更好抓的主线是：输入 token 先变成带位置的向量，然后反复经过 N 个 Transformer block。每个 block 里先做”全局信息交换”的注意力，再做”逐位置特征加工”的 FFN，中间用残差和归一化保证信息和梯度稳定。

## 第二组：一条数据流看完整 Transformer


```json:transformerFlow
{
  "steps": [
    {
      "kind": "input",
      "title": "Tokens",
      "body": {
        "zh": "文本先被分词，变成 token id 序列。",
        "en": "Text is first tokenized into a sequence of token IDs."
      },
      "shape": "[batch, seq]",
      "visual": {
        "type": "tokens",
        "title": {
          "zh": "文本先变成一串 token",
          "en": "Text becomes a sequence of tokens"
        },
        "body": {
          "zh": "模型不会直接读自然语言字符串，而是先把句子切成 token，再把 token 映射成 id。",
          "en": "The model doesn't read natural language strings directly — it first splits sentences into tokens, then maps each token to an ID."
        },
        "items": [
          "我",
          "爱",
          "你",
          "<eos>"
        ]
      }
    },
    {
      "kind": "embed",
      "title": "Token Embedding + Position",
      "body": {
        "zh": "每个 token 查表变成向量，再加上位置编码，让模型知道顺序。",
        "en": "Each token is looked up in an embedding table to become a vector, then positional encoding is added so the model knows the order."
      },
      "shape": "[batch, seq, d_model]",
      "visual": {
        "type": "embedding",
        "title": {
          "zh": "每个 token 获得”词义 + 位置”身份",
          "en": "Each token gets a “meaning + position” identity"
        },
        "body": {
          "zh": "Token embedding 表示”它是谁”，position encoding 表示”它站在哪里”，相加后才进入 Transformer。",
          "en": "Token embedding represents “what it is,” position encoding represents “where it stands” — they are added together before entering the Transformer."
        },
        "items": [
          {
            "token": "我",
            "pos": "pos0",
            "result": "我@0"
          },
          {
            "token": "爱",
            "pos": "pos1",
            "result": "爱@1"
          },
          {
            "token": "你",
            "pos": "pos2",
            "result": "你@2"
          }
        ]
      }
    },
    {
      "kind": "attn",
      "title": "Multi-Head Attention",
      "body": {
        "zh": "每个位置和其他位置两两比较，决定该从上下文中拿哪些信息。",
        "en": "Each position compares with every other position to decide what information to gather from the context."
      },
      "shape": "[batch, seq, d_model]",
      "visual": {
        "type": "attention",
        "title": {
          "zh": "注意力矩阵：每个位置看其他位置",
          "en": "Attention matrix: each position looks at every other position"
        },
        "body": {
          "zh": "颜色越亮，表示当前位置越关注另一个位置。多头就是多张这样的关系图并行计算。",
          "en": "Brighter colors mean the current position pays more attention to another position. Multi-head means multiple such relationship maps computed in parallel."
        },
        "cells": [
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
      "kind": "norm",
      "title": "Add & Norm",
      "body": {
        "zh": "残差保留原信息，LayerNorm 稳住数值分布。",
        "en": "The residual preserves original information; LayerNorm stabilizes the numerical distribution."
      },
      "shape": "[batch, seq, d_model]",
      "visual": {
        "type": "norm",
        "title": {
          "zh": "Add & Norm：修正量加回主干，再稳定数值",
          "en": "Add & Norm: add the correction back to the trunk, then stabilize values"
        },
        "body": {
          "zh": "残差像捷径，LayerNorm 像调音量。一个保信息，一个稳分布。",
          "en": "The residual is like a shortcut; LayerNorm is like adjusting the volume. One preserves information, the other stabilizes distribution."
        }
      }
    },
    {
      "kind": "ffn",
      "title": "Feed Forward",
      "body": {
        "zh": "对每个位置独立做 MLP：先扩维、激活、再压回 d_model。",
        "en": "Apply an MLP independently at each position: expand dimensions, activate, then project back to d_model."
      },
      "shape": "512 -> 2048 -> 512",
      "visual": {
        "type": "ffn",
        "title": {
          "zh": "FFN：每个 token 自己做非线性加工",
          "en": "FFN: each token undergoes its own nonlinear processing"
        },
        "body": {
          "zh": "注意力负责混合上下文；FFN 负责把混合后的每个位置单独消化加工。",
          "en": "Attention mixes context across tokens; FFN then processes each position's mixed representation individually."
        }
      }
    },
    {
      "kind": "norm",
      "title": "Add & Norm",
      "body": {
        "zh": "再次用残差和归一化，把 FFN 的修正量稳定地合回主干。",
        "en": "Use residual and normalization again to stably merge the FFN correction back into the trunk."
      },
      "shape": "[batch, seq, d_model]",
      "visual": {
        "type": "norm",
        "title": {
          "zh": "第二次 Add & Norm：把 FFN 的加工结果接回主干",
          "en": "Second Add & Norm: merge the FFN output back into the trunk"
        },
        "body": {
          "zh": "每个 block 通常有两次 Add & Norm：一次跟在 Attention 后，一次跟在 FFN 后。",
          "en": "Each block typically has two Add & Norm steps: one after Attention, one after FFN."
        }
      }
    },
    {
      "kind": "stack",
      "title": "Repeat N Blocks",
      "body": {
        "zh": "同样的 block 堆叠多层，表示逐层被更新。",
        "en": "The same block is stacked multiple layers; representations are updated layer by layer."
      },
      "shape": "x N",
      "visual": {
        "type": "stack",
        "title": {
          "zh": "堆叠多层：表示一层层变丰富",
          "en": "Stacking layers: representations become richer layer by layer"
        },
        "body": {
          "zh": "每层都重复”交流 -> 稳定 -> 加工 -> 稳定”，越往后表示越抽象。",
          "en": "Each layer repeats “exchange → stabilize → process → stabilize.” The deeper you go, the more abstract the representations."
        },
        "layers": [
          "Block 1",
          "Block 2",
          "Block 3",
          "...",
          "Block N"
        ]
      }
    },
    {
      "kind": "output",
      "title": "Output / LM Head",
      "body": {
        "zh": "最后映射到词表维度，预测下一个 token 的概率。",
        "en": "Finally map to vocabulary dimensions to predict the probability of the next token."
      },
      "shape": "[batch, seq, vocab]",
      "visual": {
        "type": "output",
        "title": {
          "zh": "输出层：把 hidden 向量变成词表概率",
          "en": "Output layer: turn hidden vectors into vocabulary probabilities"
        },
        "body": {
          "zh": "语言模型最后会给每个候选 token 一个分数，再通过 softmax 变成概率。",
          "en": "The language model assigns a score to each candidate token, then converts scores into probabilities via softmax."
        },
        "items": [
          {
            "token": "你",
            "score": 82
          },
          {
            "token": "我",
            "score": 38
          },
          {
            "token": "他",
            "score": 24
          },
          {
            "token": "了",
            "score": 58
          }
        ]
      }
    }
  ],
  "block": [
    {
      "kind": "main",
      "title": {
        "zh": "输入表示 X",
        "en": "Input representation X"
      },
      "body": {
        "zh": "已经包含 token 含义 + 位置信息",
        "en": "Already contains token meaning + positional information"
      }
    },
    {
      "kind": "attn",
      "title": "Self-Attention",
      "body": {
        "zh": "让每个 token 看见其他 token",
        "en": "Let each token see every other token"
      }
    },
    {
      "kind": "skip",
      "title": {
        "zh": "残差连接",
        "en": "Residual Connection"
      },
      "body": "X + Attention(X)"
    },
    {
      "kind": "norm",
      "title": "LayerNorm",
      "body": {
        "zh": "把分布拉回稳定范围",
        "en": "Pull the distribution back to a stable range"
      }
    },
    {
      "kind": "ffn",
      "title": "FFN",
      "body": {
        "zh": "逐 token 的非线性特征加工",
        "en": "Per-token nonlinear feature processing"
      }
    },
    {
      "kind": "skip",
      "title": {
        "zh": "残差连接",
        "en": "Residual Connection"
      },
      "body": {
        "zh": "再次保留主干信息",
        "en": "Preserve trunk information once more"
      }
    },
    {
      "kind": "norm",
      "title": "LayerNorm",
      "body": {
        "zh": "输出给下一层",
        "en": "Output to the next layer"
      }
    }
  ],
  "takeaways": [
    {
      "title": {
        "zh": "Attention 是”横向交流”",
        "en": "Attention is “lateral communication”"
      },
      "body": {
        "zh": "它在 sequence 维度上工作，让第 i 个位置可以读取第 j 个位置的信息。",
        "en": "It operates along the sequence dimension, letting position i read information from position j."
      }
    },
    {
      "title": {
        "zh": "FFN 是”纵向加工”",
        "en": "FFN is “vertical processing”"
      },
      "body": {
        "zh": "它不混合不同 token，而是对每个位置自己的 hidden 向量做非线性变换。",
        "en": "It doesn't mix different tokens — instead, it applies a nonlinear transformation to each position's own hidden vector."
      }
    },
    {
      "title": {
        "zh": "残差和归一化是”稳定主干”",
        "en": "Residuals and normalization are the “stabilizing backbone”"
      },
      "body": {
        "zh": "它们不是负责理解语义的主角，但决定深层模型能不能稳定训练。",
        "en": "They aren't the main actors for understanding semantics, but they determine whether a deep model can train stably."
      }
    }
  ]
}
```

## 第三组：4.1 节应该怎么读
- 位置编码：解决”Transformer 本身不知道顺序”的问题。
- 多头注意力：解决”每个 token 如何从上下文拿信息”的问题。
- 残差连接：解决”深层网络别把原信息弄丢”的问题。
- LayerNorm：解决”每层输出分布别乱飘”的问题。
- FFN：解决”注意力混完信息后，每个位置如何进一步加工特征”的问题。
- 这几个模块合起来，才是一个可堆叠的 Transformer block。


## 第四组：多头注意力为什么计算量和单头相当

这里容易误解。”多头”听起来像是把注意力算了 h 次，所以计算量应该变成 h 倍。但 Transformer 不是让每个头都用完整的 d_model 维度，而是把 d_model 拆成 h 个更小的 head_dim。

比如原始 Transformer 里 d_model = 512，heads = 8，那么每个头的 d_k = 512 / 8 = 64。也就是说，不是 8 个头各自算 512 维注意力，而是 8 个头各自算 64 维注意力。
- 单头：一次用完整 512 维做注意力。
- 多头：8 个头，每个头只用 64 维做注意力。
- 总维度仍然是 8 x 64 = 512。
- 所以总计算量大致没有变成 8 倍，而是把同一份总维度拆开并行算。


> **多头不是复制 8 份完整模型**
> 它更像把一个 512 维的大空间切成 8 个 64 维的小空间，每个头负责一个子空间。

> **为什么适合 GPU**
> 多个头之间相互独立，可以被组织成批量矩阵乘法并行计算，而不是一个头算完再算下一个头。

> **表达更丰富**
> 计算总量接近，但模型可以从多个子空间看关系：有的头看局部依赖，有的头看长距离关系，有的头看语义相似。


```json:multiHeadComputeVisual
{
  "single": {
    "title": {
      "zh": "单头注意力",
      "en": "Single-Head Attention"
    },
    "width": "512 dim",
    "body": {
      "zh": "一个头直接看完整 512 维空间。",
      "en": "One head directly views the full 512-dimensional space."
    }
  },
  "multi": {
    "title": {
      "zh": "多头注意力",
      "en": "Multi-Head Attention"
    },
    "heads": [
      "64",
      "64",
      "64",
      "64",
      "64",
      "64",
      "64",
      "64"
    ],
    "body": {
      "zh": "8 个头各看 64 维，总宽度仍然是 512。",
      "en": "8 heads each view 64 dimensions; the total width is still 512."
    }
  },
  "equations": [
    {
      "label": {
        "zh": "单头主维度",
        "en": "Single-head total dim"
      },
      "value": "1 x 512 = 512"
    },
    {
      "label": {
        "zh": "多头主维度",
        "en": "Multi-head total dim"
      },
      "value": "8 x 64 = 512"
    },
    {
      "label": {
        "zh": "核心直觉",
        "en": "Core intuition"
      },
      "value": {
        "zh": "切开并行，不是复制 8 份",
        "en": "Split and parallelize, not duplicate 8 times"
      }
    }
  ]
}
```

## 第五组：为什么注意力分数要除以 sqrt(d_k)

注意力分数来自 Q 和 K 的点积。点积不是一个数乘一个数，而是把 d_k 个维度上的乘积加起来：score = q1k1 + q2k2 + ... + q_dk k_dk。

如果 d_k 很大，加起来的项就很多。即使每一项本身不大，总和的波动也会随着维度变大而变大。直觉上，64 个小数相加通常比 4 个小数相加更容易得到绝对值很大的结果。

softmax 对特别大的正数和特别小的负数很敏感。如果分数差距太大，softmax 会变得非常尖：最大的那个位置接近 1，其他位置接近 0。这样模型太早变得”只看一个 token”，而且反向传播时梯度会很弱。
- 不缩放：d_k 越大，QK 点积的数值范围越容易变大。
- 分数过大：softmax 输出会过度尖锐，接近 one-hot。
- 过度尖锐：很多位置概率接近 0，梯度也会变小。
- 除以 sqrt(d_k)：把点积分数拉回相对稳定的尺度。
- 结果：不同 head_dim 下，softmax 输入都比较温和，训练更稳定。


> **不是除以 d_k，而是除以 sqrt(d_k)**
> 因为点积方差大致随 d_k 增长，标准差随 sqrt(d_k) 增长；除以 sqrt(d_k) 是在稳定标准差尺度。

> **”合理范围”是什么意思**
> 不是保证每个值都固定在某个区间，而是让分数的典型大小不要随着 d_k 增大而越来越夸张。

> **它保护 softmax 的梯度**
> softmax 太尖时，大部分位置梯度很小；缩放后分布更平滑，注意力权重还有可学习空间。


```json:softmaxScaleVisual
{
  "panels": [
    {
      "kind": "sharp",
      "title": {
        "zh": "不除 sqrt(d_k)",
        "en": "Without dividing by sqrt(d_k)"
      },
      "bars": [
        8,
        12,
        18,
        92,
        10,
        14
      ],
      "body": {
        "zh": "点积分数跨度太大，softmax 变尖，几乎只剩一个位置有权重。",
        "en": "Dot product scores span too wide, softmax becomes peaked — almost only one position retains weight."
      }
    },
    {
      "kind": "smooth",
      "title": {
        "zh": "除以 sqrt(d_k)",
        "en": "Dividing by sqrt(d_k)"
      },
      "bars": [
        34,
        42,
        48,
        64,
        38,
        44
      ],
      "body": {
        "zh": "分数尺度被拉回，多个位置仍有梯度和竞争空间。",
        "en": "Score scale is pulled back; multiple positions still have gradients and room to compete."
      }
    }
  ],
  "rule": {
    "title": {
      "zh": "为什么是 sqrt(d_k)",
      "en": "Why sqrt(d_k)"
    },
    "body": {
      "zh": "点积的方差随 d_k 增大，标准差随 sqrt(d_k) 增大；除以 sqrt(d_k) 是把典型波动尺度压回稳定范围。",
      "en": "The variance of the dot product grows with d_k, and the standard deviation grows with sqrt(d_k); dividing by sqrt(d_k) brings the typical fluctuation scale back to a stable range."
    }
  }
}
```

## 第六组：归一化和残差到底在干什么

残差连接和 LayerNorm 经常一起出现，但它们解决的是两个不同问题。残差关心”信息通道别断”，LayerNorm 关心”数值分布别乱”。

残差连接就是把输入 x 直接绕过子层，加到子层输出上：output = x + Sublayer(x)。这意味着即使 Sublayer 暂时学得不好，模型至少还能保留原始输入，不至于每过一层就把信息洗掉。

LayerNorm 则是在每个 token 的 hidden 向量内部做标准化。它会把这一层输出的数值拉到比较稳定的分布，再交给下一层。这样层数变深以后，数值不容易一层层放大或漂移。
- 残差连接：提供一条信息高速公路，避免深层网络把原信息弄丢。
- 残差连接：也让梯度更容易反向传回前面的层。
- LayerNorm：把每个 token 的 hidden 向量重新标准化。
- LayerNorm：减少分布漂移，让下一层看到更稳定的输入。
- Add & Norm：先把子层修正量加回主干，再把结果稳定住。


> **残差像”保底原文”**
> 子层可以尝试修改表示，但原表示会被直接加回来，所以模型不用每层都从零重建信息。

> **LayerNorm 像”调音量”**
> 它不是改变语义主线，而是把 hidden 向量的数值尺度拉稳定，避免后面的层输入忽大忽小。

> **两者合在一起才适合堆深**
> 残差保信息和梯度，归一化稳数值分布，所以 Transformer block 才能一层层堆起来。


```json:blockMechanicsVisual
{
  "cards": [
    {
      "kind": "residual",
      "title": {
        "zh": "Residual：信息走捷径",
        "en": "Residual: information takes a shortcut"
      },
      "body": {
        "zh": "子层负责提出修正，原输入沿捷径保留下来，最后相加。",
        "en": "The sublayer proposes corrections while the original input is preserved via the shortcut, then they are added together."
      }
    },
    {
      "kind": "norm",
      "title": {
        "zh": "LayerNorm：数值重新拉齐",
        "en": "LayerNorm: re-aligning the values"
      },
      "bars": [
        {
          "before": 90,
          "after": 56
        },
        {
          "before": 20,
          "after": 45
        },
        {
          "before": 72,
          "after": 60
        },
        {
          "before": 34,
          "after": 48
        },
        {
          "before": 96,
          "after": 58
        }
      ],
      "body": {
        "zh": "左边高低差很乱，右边被调到更稳定的尺度。",
        "en": "The left side has chaotic highs and lows; the right side is adjusted to a more stable scale."
      }
    },
    {
      "kind": "ffn",
      "title": {
        "zh": "FFN：逐 token 加工",
        "en": "FFN: per-token processing"
      },
      "body": {
        "zh": "每个位置单独经过 512 -> 2048 -> 512 的非线性变换。",
        "en": "Each position independently undergoes a 512 -> 2048 -> 512 nonlinear transformation."
      }
    }
  ]
}
```

## 第七组：前馈网络 FFN 是什么，为什么放在注意力后面

FFN 全称是 Feed Forward Network，在 Transformer block 里它不是处理整段序列关系的模块，而是对每个位置的 hidden 向量单独做一次小型 MLP。

注意力层负责让 token 之间交流：第 i 个 token 可以从其他 token 那里拿信息。交流完成后，每个位置已经混入了上下文信息。FFN 接着对每个位置的新表示做进一步加工：先扩维、过激活函数、再压回原维度。

所以它放在注意力后面是有道理的：先让每个 token 收集上下文，再让每个 token 独立消化这些上下文信息。如果只有注意力，没有 FFN，模型的非线性加工能力会弱很多。
- Attention：混合不同 token 之间的信息。
- FFN：不再混 token，而是加工每个 token 自己的 hidden 表示。
- 原始 Transformer：512 -> 2048 -> ReLU -> 512。
- 扩维：给模型更大的中间空间来组合特征。
- 激活函数：引入非线性，否则多层线性变换仍然等价于一层线性变换。
- 压回 d_model：保持维度不变，方便残差连接和下一层继续处理。


> **Attention 负责”看别人”**
> 它回答：这个位置应该从序列中哪些位置拿信息？

> **FFN 负责”想一想”**
> 它回答：拿到上下文以后，这个位置自己的表示应该怎样被非线性加工？

> **为什么最后还回到 d_model**
> Transformer block 要可堆叠，每层输入输出维度必须一致，残差连接也要求两边形状能相加。

## 第八组：一句话总结

标准 Transformer 的流程可以记成：先把 token 变成带位置的向量，然后在每个 block 里做”注意力交换信息 -> 残差归一化稳定 -> FFN 加工特征 -> 残差归一化稳定”，最后重复多层并映射到输出。
