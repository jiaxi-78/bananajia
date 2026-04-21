import { site, categories, chapters, notes } from '../notes-site/src/content.js'
import fs from 'fs'
import path from 'path'

const OUT_DIR = path.resolve(process.cwd(), 'vault')

// 清空旧的 vault
if (fs.existsSync(OUT_DIR)) {
  fs.rmSync(OUT_DIR, { recursive: true })
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function getText(val, fallback = '') {
  if (typeof val === 'string') return val
  if (val && typeof val === 'object') return val.zh || val.en || fallback
  return fallback
}

function getEn(val) {
  if (typeof val === 'string') return val
  if (val && typeof val === 'object') return val.en || val.zh || ''
  return ''
}

function slugify(text) {
  return getText(text)
    .replace(/[\\/:*?"<>|]/g, '-')
    .trim()
}

function toFrontmatter(obj) {
  const lines = Object.entries(obj).map(([k, v]) => {
    if (v === undefined || v === null) return `${k}: ''`
    if (Array.isArray(v)) {
      if (v.length === 0) return `${k}: []`
      return `${k}:\n${v.map(item => `  - ${String(item).replace(/'/g, "''")}`).join('\n')}`
    }
    if (typeof v === 'string') {
      return `${k}: '${v.replace(/'/g, "''")}'`
    }
    return `${k}: ${v}`
  })
  return `---\n${lines.join('\n')}\n---`
}

function jsonBlock(data, label = 'data') {
  return `\n\n\`\`\`json:${label}\n${JSON.stringify(data, null, 2)}\n\`\`\``
}

// 1. 站点元数据
ensureDir(path.join(OUT_DIR, '00-Meta'))

fs.writeFileSync(
  path.join(OUT_DIR, '00-Meta', 'Site.md'),
  `${toFrontmatter({
    type: 'site',
    title_zh: getText(site.title),
    title_en: getEn(site.title),
    tagline: site.tagline,
    intro_zh: getText(site.intro),
    intro_en: getEn(site.intro),
  })}\n\n# ${getText(site.title)}\n\n> ${site.tagline}\n\n${getText(site.intro)}\n`,
  'utf-8'
)

// 2. 分类索引
const catRows = categories.map(c =>
  `| ${c.code} | ${getText(c.name)} | ${c.id} | ${c.tag} | ${getText(c.tagline)} |`
).join('\n')

fs.writeFileSync(
  path.join(OUT_DIR, '00-Meta', 'Categories.md'),
  `${toFrontmatter({ type: 'categories' })}\n\n# 分类目录\n\n| 编号 | 名称 | ID | 标签 | 标语 |\n|------|------|-----|------|------|\n${catRows}\n\n## 详细\n\n${categories.map(c => {
  const fm = {
    id: c.id,
    name_zh: getText(c.name),
    name_en: getEn(c.name),
    code: c.code,
    tag: c.tag,
    accent: c.accent,
    tagline_zh: getText(c.tagline),
    tagline_en: getEn(c.tagline),
    description_zh: getText(c.description),
    description_en: getEn(c.description),
  }
  return `### ${getText(c.name)}\n${toFrontmatter(fm)}\n\n${getText(c.description)}`
}).join('\n\n')}\n`,
  'utf-8'
)

// 3. 章节索引
const chapRows = chapters.map(ch => {
  const cat = categories.find(c => c.id === ch.categoryId)
  return `| ${ch.code} | ${getText(ch.title)} | ${getText(cat?.name || ch.categoryId)} | ${getText(ch.description)} |`
}).join('\n')

fs.writeFileSync(
  path.join(OUT_DIR, '00-Meta', 'Chapters.md'),
  `${toFrontmatter({ type: 'chapters' })}\n\n# 章节目录\n\n| 编号 | 标题 | 分类 | 描述 |\n|------|------|------|------|\n${chapRows}\n\n${chapters.map(ch => {
  const fm = {
    id: ch.id,
    category: ch.categoryId,
    code: ch.code,
    title_zh: getText(ch.title),
    title_en: getEn(ch.title),
    description_zh: getText(ch.description),
    description_en: getEn(ch.description),
  }
  return `### ${getText(ch.title)}\n${toFrontmatter(fm)}`
}).join('\n\n')}\n`,
  'utf-8'
)

// 4. 转换每篇笔记
for (const note of notes) {
  const category = categories.find(c => c.id === note.categoryId)
  const chapter = chapters.find(ch => ch.id === note.chapterId)

  const catName = getText(category?.name, note.categoryId)
  const chapName = getText(chapter?.title, note.chapterId || '未分类')

  const dir = path.join(OUT_DIR, slugify(catName), slugify(chapName))
  ensureDir(dir)

  const filename = `${slugify(getText(note.title))}.md`
  const filepath = path.join(dir, filename)

  // 构建 frontmatter
  const fm = {
    id: note.id,
    category: note.categoryId,
    chapter: note.chapterId,
    course: note.course,
    date: note.date,
    title_zh: getText(note.title),
    title_en: getEn(note.title),
    summary_zh: getText(note.summary),
    summary_en: getEn(note.summary),
    tags: note.tags || [],
  }

  let body = ''

  for (const section of note.sections || []) {
    body += `\n## ${getText(section.heading)}\n`

    if (section.paragraphs) {
      for (const p of section.paragraphs) {
        body += `\n${getText(p)}\n`
      }
    }

    if (section.faqs) {
      for (const faq of section.faqs) {
        body += `\n### ${getText(faq.question)}\n`
        for (const ans of faq.answer || []) {
          body += `\n${getText(ans)}\n`
        }
        if (faq.links?.length) {
          body += `\n**参考链接**：\n`
          for (const link of faq.links) {
            body += `- [${link.label}](${link.href})\n`
          }
        }
      }
    }

    if (section.bullets) {
      for (const b of section.bullets) {
        body += `- ${getText(b)}\n`
      }
      body += '\n'
    }

    if (section.emphasisCards) {
      for (const card of section.emphasisCards) {
        body += `\n> **${getText(card.title)}**\n> ${getText(card.body)}\n`
      }
    }

    const visualKeys = [
      'optimizerVisuals',
      'positionEncodingVisual',
      'positionFormulaVisual',
      'transformerFlow',
      'multiHeadComputeVisual',
      'softmaxScaleVisual',
      'blockMechanicsVisual',
      'normModernVisual',
      'gateVisual',
      'ropeVisual',
      'attentionVariantVisual',
      'sparseWindowVisual',
      'stabilityControlVisual',
    ]

    for (const key of visualKeys) {
      if (section[key]) {
        body += jsonBlock(section[key], key)
        body += '\n'
      }
    }
  }

  const content = `${toFrontmatter(fm)}\n\n# ${getText(note.title)}\n\n> ${getText(note.summary)}\n${body}`
  fs.writeFileSync(filepath, content, 'utf-8')
  console.log(`✅ ${filepath}`)
}

console.log(`\n🎉 完成！共导出 ${notes.length} 篇笔记到 ${OUT_DIR}`)
