---
id: 'chapter4-modern-transformer-variants'
category: 'diy-llm'
chapter: 'chapter-4'
course: 'DIY LLM'
date: 'Card 06'
title_zh: 'Chapter 4｜4.2 现代 Transformer 变体笔记'
title_en: 'Chapter 4 | 4.2 Modern Transformer Variants Notes'
summary_zh: '整理 4.2.1 到 4.2.4：归一化、门控前馈网络、GELU/GLU，以及 RoPE 为什么把绝对位置变成相对距离。'
summary_en: 'Covering Sections 4.2.1 through 4.2.4: normalization, gated feed-forward networks, GELU/GLU, and why RoPE turns absolute positions into relative distances.'
tags: []
---

# Chapter 4｜4.2 现代 Transformer 变体笔记

> 整理 4.2.1 到 4.2.4：归一化、门控前馈网络、GELU/GLU，以及 RoPE 为什么把绝对位置变成相对距离。

## 第一组：归一化从 Post-LN 到 Pre-LN，再到 RMSNorm

这里先纠正一个容易看反的点：原始 Transformer 用的是 Post-LN，也就是”子层 -> 残差 -> LayerNorm”；现代大模型更常用的是 Pre-LN，也就是”LayerNorm -> 子层 -> 残差”。通常说的是 Pre-LN 训练更稳定，而不是 Post-LN 优于 Pre-LN。

Post-LN 的问题是 LayerNorm 放在残差之后，可能干扰残差这条”信息和梯度高速公路”。Pre-LN 把归一化放到子层前面，残差主干更干净，所以深层模型更稳定。

RMSNorm 是对 LayerNorm 的简化：不减均值，也通常不加 beta 偏置，只按均方根缩放。它少算一步、少读一些参数，速度更快，而效果通常相当甚至略好，所以 LLaMA、PaLM、T5 等都大量使用。

> **更准确的总结**
> 现代主流不是”后归一化优于前归一化”，而是 Pre-LN 通常比 Post-LN 更稳定；RMSNorm 又进一步替代了很多 LayerNorm 场景。

> **RMSNorm 的收益**
> 主要收益是更快、更省、更稳定地达到类似效果；它不是换了模型能力核心，而是把稳定化组件做得更轻。

> **残差里的关键**
> 残差希望信息和梯度能直接穿过很多层；如果归一化位置不合适，就可能打扰这条直通路径。


```json:normModernVisual
{
  "cards": [
    {
      "kind": "post",
      "title": {
        "zh": "Post-LN：原始论文",
        "en": "Post-LN: original paper"
      },
      "steps": [
        "Sublayer",
        "+ Residual",
        "LayerNorm"
      ],
      "body": {
        "zh": "先做子层和残差相加，再归一化。原始 Transformer 这样做，但深层训练更不稳定。",
        "en": "Sublayer and residual are added first, then normalized. The original Transformer does this, but deep training is less stable."
      }
    },
    {
      "kind": "pre",
      "title": {
        "zh": "Pre-LN：现代主流",
        "en": "Pre-LN: modern mainstream"
      },
      "steps": [
        "LayerNorm",
        "Sublayer",
        "+ Residual"
      ],
      "body": {
        "zh": "先归一化再进子层，残差主干更直接，深层训练更稳定。",
        "en": "Normalize first, then enter the sublayer. The residual trunk is more direct and deep training is more stable."
      }
    },
    {
      "kind": "rms",
      "title": {
        "zh": "RMSNorm：更轻量",
        "en": "RMSNorm: lighter weight"
      },
      "steps": [
        "No mean",
        "RMS scale",
        "γ only"
      ],
      "body": {
        "zh": "不减均值，主要按向量长度缩放；计算更省，效果仍然很好。",
        "en": "No mean subtraction — mainly scales by vector magnitude. Cheaper to compute, and performance is still excellent."
      }
    }
  ]
}
```

## 第二组：Hadamard 积、GELU 和门控 FFN

Hadamard 积就是逐元素相乘。两个形状相同的向量，不做矩阵乘法，而是第 1 个乘第 1 个、第 2 个乘第 2 个。GLU 里的 ⊙ 就是这个意思。

GLU 可以理解成两条通道：一条内容通道 xW 产生候选信息，一条门控通道 σ(xV) 或 GELU(xV) 决定每个维度放行多少。它不是全开/全关，而是每个维度一个连续开度。

GELU 是 Gaussian Error Linear Unit。直觉上，它像一个平滑版 ReLU：不是小于 0 直接切掉、大于 0 直接通过，而是根据输入大小平滑地决定保留多少。它在 0 附近更柔和，梯度更平滑。

> **Hadamard 积是什么**
> [a,b,c] ⊙ [x,y,z] = [ax, by, cz]。它是逐元素乘，不是矩阵乘法。

> **GELU 是什么**
> GELU 是平滑激活函数，可以理解成”按概率/置信度柔和放行输入”，比 ReLU 的硬切更平滑。

> **门控改变带来的提升**
> 最终提升是：FFN 不再只是统一激活，而能根据输入动态筛选特征；梯度更平滑，表达更灵活，经验上损失和任务表现通常更好。


```json:gateVisual
{
  "content": {
    "title": {
      "zh": "内容通道 xW",
      "en": "Content pathway xW"
    },
    "values": [
      72,
      34,
      88,
      52,
      66,
      42
    ],
    "body": {
      "zh": "先生成一组候选特征：这些是”可能要表达的内容”。",
      "en": "First generate a set of candidate features: these are “what might be expressed.”"
    }
  },
  "gate": {
    "title": {
      "zh": "门控通道 GELU(xV)",
      "en": "Gating pathway GELU(xV)"
    },
    "values": [
      0.9,
      0.25,
      0.72,
      0.45,
      0.8,
      0.35
    ],
    "body": {
      "zh": "再为每个维度生成开度：哪些特征多放行，哪些少放行。",
      "en": "Then generate a degree of openness for each dimension: which features to let through more, which less."
    }
  },
  "output": {
    "title": {
      "zh": "Hadamard 积后输出",
      "en": "Output after Hadamard product"
    },
    "values": [
      65,
      9,
      63,
      24,
      53,
      15
    ],
    "body": {
      "zh": "逐元素相乘后，输出变成”被门控筛过的内容”。",
      "en": "After element-wise multiplication, the output becomes “content filtered through the gate.”"
    }
  }
}
```

## 第三组：RoPE 的相对距离到底是谁和谁相对

RoPE 讨论的相对距离，是注意力里 query 所在位置 m 和 key 所在位置 n 的相对距离。也就是”当前 token 在看另一个 token 时，两者隔了多远”。

普通绝对位置编码是把 PE(pos) 加到输入上；RoPE 则是在注意力层里对 Q 和 K 做旋转。位置 m 的 Q 旋转 mθ，位置 n 的 K 旋转 nθ。它们做内积时，绝对的 m 和 n 会组合成 m - n，所以注意力分数天然带有相对距离。

为什么 R(n) 的转置等于 R(-n)？因为旋转矩阵是正交矩阵，转置等于逆；而”逆旋转 n 度”就是”旋转 -n 度”。所以 R(n)^T = R(n)^{-1} = R(-n)。

> **m 是位置索引**
> m 不是向量维度，而是 token 在序列里的位置。第 0 个 token m=0，第 10 个 token m=10。

> **θ_i 是维度对的频率**
> 每一对二维子空间有自己的旋转速度 θ_i。有的维度对转得快，擅长近距离；有的转得慢，擅长远距离。

> **相对位置来自 m - n**
> Q 在位置 m，K 在位置 n。二者内积后出现 R(m-n)，所以模型看到的是”这两个 token 相隔多少”。


```json:ropeVisual
{
  "planes": [
    {
      "title": {
        "zh": "二维子块 1",
        "en": "2D sub-block 1"
      },
      "original": -25,
      "rotated": 24,
      "body": {
        "zh": "一对维度形成一个小平面，向量在这个平面里按位置旋转。",
        "en": "A pair of dimensions forms a small plane; the vector rotates in this plane based on position."
      }
    },
    {
      "title": {
        "zh": "二维子块 2",
        "en": "2D sub-block 2"
      },
      "original": -25,
      "rotated": 58,
      "body": {
        "zh": "另一对维度用不同 θ，旋转速度不同，负责另一种频率的位置感。",
        "en": "Another pair of dimensions uses a different θ with a different rotation speed, responsible for a different frequency of positional awareness."
      }
    }
  ],
  "blocks": [
    {
      "label": "dim 0-1",
      "speed": "fast θ0"
    },
    {
      "label": "dim 2-3",
      "speed": "medium θ1"
    },
    {
      "label": "dim 4-5",
      "speed": "slow θ2"
    },
    {
      "label": "dim 6-7",
      "speed": "slower θ3"
    }
  ]
}
```

## 第四组：为什么把高维向量切成多个二维子块

高维当然也可以有旋转，但高维旋转不是唯一直观的一个角度。二维旋转很简单：一个平面、一个角度、一个 2x2 矩阵。高维空间里可以在很多平面上旋转，参数和解释都会复杂很多。

RoPE 选择把高维向量拆成很多个二维小平面，是因为这样既简单高效，又能保留旋转矩阵的好性质：长度不变、可逆、相对距离能通过角度差表达。

θ_i = 10000^{-2i/d} 里的 10000 不是训练学出来的，而是沿用正弦位置编码的频率基准。它控制不同维度频率从快到慢地铺开。实际模型里这个 base 可以调整，比如为了长上下文会改成别的值或做 scaling。
- 二维旋转：一个 2x2 矩阵就能表达，非常清楚。
- 高维旋转：有很多可能旋转平面，不再是一个简单角度。
- 分块旋转：把高维问题变成很多个二维问题。
- 每个二维块一个 θ_i：不同块负责不同频率。
- 10000 是频率尺度基准，不是神秘常数，也不是唯一选择。


## 第五组：一句话总结

4.2 的主线可以记成：归一化从 Post-LN 走向更稳定更轻的 Pre-LN/RMSNorm；FFN 从普通 ReLU MLP 走向按输入动态筛选特征的 GLU/SwiGLU；位置编码从”给 token 加绝对位置”走向”在 Q/K 内积中自然出现相对距离”的 RoPE。
