---
id: 'chapter4-position-encoding-visual'
category: 'diy-llm'
chapter: 'chapter-4'
course: 'DIY LLM'
date: 'Card 04'
title_zh: 'Chapter 4｜位置编码可视化：我爱你 vs 你爱我'
title_en: 'Chapter 4 | Positional Encoding Visualized: “I love you” vs “You love me”'
summary_zh: '用同一组 token 的不同排列，直观看 Transformer 为什么必须知道”谁在第几个位置”。'
summary_en: 'Using different orderings of the same set of tokens to visually show why a Transformer must know “who is in which position.”'
tags: []
---

# Chapter 4｜位置编码可视化：我爱你 vs 你爱我

> 用同一组 token 的不同排列，直观看 Transformer 为什么必须知道”谁在第几个位置”。

## 第一组：为什么同样三个字，模型要区分顺序

”我爱你”和”你爱我”用到的 token 完全一样，都是”我、爱、你”。如果只看 token 集合，它们没有区别；但语言含义完全不同，因为主语和宾语交换了。

位置编码做的事情，就是把每个 token 和它所在的位置绑定起来。于是模型看到的不是单独的”我”，而是”我在第 0 位”或”我在第 2 位”。


```json:positionEncodingVisual
{
  "bag": [
    {
      "text": "我",
      "key": "wo"
    },
    {
      "text": "爱",
      "key": "ai"
    },
    {
      "text": "你",
      "key": "ni"
    }
  ],
  "sentences": [
    {
      "label": "我爱你",
      "tokens": [
        {
          "text": "我",
          "key": "wo",
          "pos": 0
        },
        {
          "text": "爱",
          "key": "ai",
          "pos": 1
        },
        {
          "text": "你",
          "key": "ni",
          "pos": 2
        }
      ]
    },
    {
      "label": "你爱我",
      "tokens": [
        {
          "text": "你",
          "key": "ni",
          "pos": 0
        },
        {
          "text": "爱",
          "key": "ai",
          "pos": 1
        },
        {
          "text": "我",
          "key": "wo",
          "pos": 2
        }
      ]
    }
  ],
  "differences": [
    {
      "title": {
        "zh": "”爱”没有变",
        "en": "”Love” hasn't changed"
      },
      "body": {
        "zh": "两句话里的”爱”都在 pos 1，所以它拿到的是同一个位置身份。中间这个动作词的位置没有变化。",
        "en": "In both sentences, “love” is at pos 1, so it receives the same positional identity. The position of this action word in the middle hasn't changed."
      }
    },
    {
      "title": {
        "zh": "”我”和”你”换了位置身份",
        "en": "”I” and “you” swapped positional identities"
      },
      "body": {
        "zh": "”我爱你”里是 我@0、你@2；”你爱我”里是 你@0、我@2。词本身一样，但和位置相加后的输入向量已经不同。",
        "en": "In “I love you” it's I@0, you@2; in “You love me” it's you@0, I@2. The words are the same, but the input vectors after adding position are already different."
      }
    },
    {
      "title": {
        "zh": "注意力看到的是带位置的表示",
        "en": "Attention sees position-augmented representations"
      },
      "body": {
        "zh": "模型后面计算 Q/K/V 时，用的是 Token Embedding + Positional Encoding 后的结果，所以它可以学到”第 0 位更像主语，第 2 位更像宾语”这类顺序模式。",
        "en": "When the model computes Q/K/V downstream, it uses the result of Token Embedding + Positional Encoding, so it can learn ordering patterns like “position 0 is more like a subject, position 2 is more like an object.”"
      }
    }
  ]
}
```

## 第二组：把公式翻译成人话
- Token embedding 负责表示”这个字/词是什么意思”。
- Position encoding 负责表示”它在句子里的第几个位置”。
- 最终输入是二者相加：X = Token + PE(pos)。
- 所以同一个”我”，放在 pos 0 和 pos 2，会得到两个不同的输入向量。
- 位置编码不是直接告诉模型语法规则，而是给模型提供区分顺序的线索。


> **正余弦位置编码是”加”**
> pos 0、1、2、3 都会生成固定的位置向量 PE(pos)，然后和 token embedding 相加：X = Token + PE(pos)。

> **不是把 token 向量乘上一个位置值**
> 这里不是”我”的向量乘以 pos 0 的值，而是”我”的向量加上 PE(0)。同一个 token 加不同位置向量后，身份就变了。

> **RoPE 才更像”旋转/乘矩阵”**
> 后面讲 RoPE 时，它不是把 PE 直接加到 token 上，而是在注意力里按位置旋转 Q/K 向量。

## 第三组：把位置编码公式画出来

公式里最重要的不是要背下 sin 和 cos，而是理解：每个位置 pos 会在很多条不同频率的波上取值，最后这些取值拼成一个”位置指纹”。

低维通常变化快，适合区分相邻位置；高维变化慢，适合提供更长距离的平滑位置信号。一个位置不是靠单个数字表示，而是靠一整组高低频信号共同表示。


```json:positionFormulaVisual
{
  "waves": [
    {
      "label": "dim 0 / sin",
      "note": {
        "zh": "高频：相邻位置差异明显",
        "en": "High frequency: adjacent positions differ noticeably"
      },
      "points": [
        {
          "x": 0,
          "y": 50
        },
        {
          "x": 8,
          "y": 28
        },
        {
          "x": 16,
          "y": 12
        },
        {
          "x": 24,
          "y": 18
        },
        {
          "x": 32,
          "y": 42
        },
        {
          "x": 40,
          "y": 68
        },
        {
          "x": 48,
          "y": 86
        },
        {
          "x": 56,
          "y": 78
        },
        {
          "x": 64,
          "y": 54
        },
        {
          "x": 72,
          "y": 30
        },
        {
          "x": 80,
          "y": 14
        },
        {
          "x": 88,
          "y": 24
        },
        {
          "x": 96,
          "y": 50
        }
      ]
    },
    {
      "label": "dim 1 / cos",
      "note": {
        "zh": "和 sin 成对，提供相位方向",
        "en": "Paired with sin, providing phase direction"
      },
      "points": [
        {
          "x": 0,
          "y": 12
        },
        {
          "x": 8,
          "y": 18
        },
        {
          "x": 16,
          "y": 40
        },
        {
          "x": 24,
          "y": 66
        },
        {
          "x": 32,
          "y": 84
        },
        {
          "x": 40,
          "y": 78
        },
        {
          "x": 48,
          "y": 55
        },
        {
          "x": 56,
          "y": 28
        },
        {
          "x": 64,
          "y": 14
        },
        {
          "x": 72,
          "y": 22
        },
        {
          "x": 80,
          "y": 45
        },
        {
          "x": 88,
          "y": 72
        },
        {
          "x": 96,
          "y": 88
        }
      ]
    },
    {
      "label": "dim 6 / sin",
      "note": {
        "zh": "低频：变化更慢，覆盖更远",
        "en": "Low frequency: changes more slowly, covers longer range"
      },
      "points": [
        {
          "x": 0,
          "y": 50
        },
        {
          "x": 8,
          "y": 46
        },
        {
          "x": 16,
          "y": 42
        },
        {
          "x": 24,
          "y": 38
        },
        {
          "x": 32,
          "y": 34
        },
        {
          "x": 40,
          "y": 31
        },
        {
          "x": 48,
          "y": 29
        },
        {
          "x": 56,
          "y": 27
        },
        {
          "x": 64,
          "y": 26
        },
        {
          "x": 72,
          "y": 27
        },
        {
          "x": 80,
          "y": 29
        },
        {
          "x": 88,
          "y": 33
        },
        {
          "x": 96,
          "y": 38
        }
      ]
    }
  ],
  "positions": [
    {
      "pos": 0,
      "values": [
        54,
        92,
        54,
        92,
        54,
        92
      ],
      "caption": {
        "zh": "pos 0 的位置指纹",
        "en": "Positional fingerprint of pos 0"
      }
    },
    {
      "pos": 1,
      "values": [
        88,
        70,
        61,
        90,
        56,
        92
      ],
      "caption": {
        "zh": "pos 1 的位置指纹",
        "en": "Positional fingerprint of pos 1"
      }
    },
    {
      "pos": 2,
      "values": [
        91,
        30,
        68,
        86,
        58,
        91
      ],
      "caption": {
        "zh": "pos 2 的位置指纹",
        "en": "Positional fingerprint of pos 2"
      }
    }
  ],
  "steps": [
    {
      "title": {
        "zh": "1. 每个位置取一组波形值",
        "en": "1. Each position samples a set of wave values"
      },
      "body": {
        "zh": "pos 是横坐标。pos=0、1、2 会在每条 sin/cos 曲线上取到不同高度。",
        "en": "pos is the x-coordinate. pos=0, 1, 2 sample different heights on each sin/cos curve."
      }
    },
    {
      "title": {
        "zh": "2. 不同维度使用不同频率",
        "en": "2. Different dimensions use different frequencies"
      },
      "body": {
        "zh": "有的维度变化快，有的维度变化慢；组合起来既能区分近邻，也能表达远距离。",
        "en": "Some dimensions change fast, others change slowly; combined, they can distinguish neighbors and express long-range distances."
      }
    },
    {
      "title": {
        "zh": "3. 这些值拼成位置向量",
        "en": "3. These values form the position vector"
      },
      "body": {
        "zh": "把所有维度的取值合在一起，就是 PE(pos)。它会和 token embedding 相加。",
        "en": "Concatenate all dimension values together to get PE(pos). It will be added to the token embedding."
      }
    }
  ]
}
```

## 第四组：一句话总结

没有位置编码时，”我爱你”和”你爱我”像同一袋词；加上位置编码后，它们变成两组不同的 token@position 组合。Transformer 正是靠这种位置身份，才能把相同词汇的不同顺序区分开。
