export const profile = {
  siteName: 'Learning Studio',
  tagline: 'React notes hub for classes, homework, and experiments',
  eyebrow: 'Study Hub / Spring 2026',
  headline: '用一个主页把笔记、作业和实验记录串起来。',
  intro:
    '这个站点会同时放课程笔记、作业复盘和可视化实验。现在先从 DIY LLM 开始，后面可以继续加模型训练曲线、对比图和项目展示页。',
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
    id: 'diy-llm-note-01',
    course: 'DIY LLM',
    date: '2026-04-14',
    title: 'DIY LLM 作业笔记：先搭环境，再给后续训练留出口',
    summary:
      '这次先把 Python 环境和 wandb 准备好，同时搭了一个 React 主页，后续实验记录和作业展示就可以集中放在这里。',
    tags: ['uv', 'wandb', 'Vite', 'React', 'Study Site'],
    sections: [
      {
        heading: '这次作业先完成了什么',
        paragraphs: [
          '第一步是把本地开发环境整理干净，用 uv 在当前项目目录创建 .venv，并把 wandb 装进去。这样后面做训练实验时，日志记录和实验追踪都已经有接口可接。',
          '第二步是给课程内容搭一个单独的展示入口。相比把笔记散落在不同文档里，用一个 React 主页来放课程笔记和作业，后续维护会更轻松。',
        ],
      },
      {
        heading: '我这次真正学到的点',
        bullets: [
          '项目早期先把环境和记录工具搭好，后面做实验时不会反复返工。',
          'wandb 适合快速记录训练过程，尤其是 loss、accuracy、超参数和实验对比。',
          '把作业写成网页内容比只交代码更完整，因为能顺手补上背景、思路和结果解释。',
        ],
      },
      {
        heading: '这个站为什么用 Vite + React',
        paragraphs: [
          '原因不是它最复杂，而是它刚好够用。现在可以快速发一个主页，后面如果要加训练曲线、数据可视化或不同作业的展示卡片，也不用重构整个站。',
          '另外 GitHub Pages 很适合这种静态内容。只要前端页面能 build 成静态文件，就能直接部署出去。',
        ],
      },
      {
        heading: '下一步准备怎么扩展',
        bullets: [
          '把 DIY LLM 的后续作业继续追加成新笔记，不再单独散落。',
          '加入训练曲线图和实验比较卡片，形成真正的作业 archive。',
          '如果后面有需要，再把项目说明、作业截图和 GitHub 链接补进来。',
        ],
        codeLabel: 'Environment setup',
        code: `uv venv .venv
uv pip install --python .venv/bin/python wandb
source .venv/bin/activate`,
      },
    ],
  },
]

export const homeworks = [
  {
    id: 'homework-diy-llm-01',
    course: 'DIY LLM',
    status: 'In Progress',
    title: 'Homework 01 / 环境搭建与实验入口',
    summary:
      '目标是先把训练实验需要的基础设施准备好，包括 Python 环境、wandb 和一个能持续记录内容的主页。',
    deliverables: [
      '本地 .venv 虚拟环境',
      'wandb 实验追踪依赖',
      '可发布的 React 笔记主页',
    ],
  },
  {
    id: 'homework-archive',
    course: 'Course Archive',
    status: 'Planned',
    title: '作业归档页',
    summary:
      '后面每次作业都可以做成卡片式归档，保留任务背景、实现、实验记录和最终结论。',
    deliverables: ['作业卡片列表', '分类标签', '按课程筛选'],
  },
  {
    id: 'results-dashboard',
    course: 'Experiment Board',
    status: 'Future',
    title: '实验结果展示板',
    summary:
      '等训练内容多起来后，再加图表区域来展示 loss 曲线、超参数比较和 checkpoint 说明。',
    deliverables: ['训练曲线', '参数表', '结果解读'],
  },
]

export const roadmap = [
  {
    title: '训练曲线面板',
    description: '把 wandb 导出的结果或本地日志接成折线图，直观看 loss 和学习率变化。',
    stack: 'Recharts / ECharts',
  },
  {
    title: '实验对比页',
    description: '并排比较不同超参数、不同 prompt 或不同 tokenizer 设置的效果。',
    stack: 'React cards + tables',
  },
  {
    title: '作业作品集',
    description: '把每次作业整理成公开主页，形成一个持续增长的学习档案。',
    stack: 'GitHub Pages',
  },
]
