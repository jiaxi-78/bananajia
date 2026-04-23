import fs from 'fs'
import path from 'path'

const VAULT_DIR = path.resolve(process.cwd(), 'vault')
const OUTPUT_FILE = path.resolve(process.cwd(), 'notes-site/src/content.js')

// 1. 读取配置
const config = JSON.parse(fs.readFileSync(path.join(VAULT_DIR, '00-Meta', 'config.json'), 'utf-8'))

// 2. 扫描所有 Markdown 笔记
function findNotes(dir, result = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      const base = path.basename(fullPath)
      if (base.startsWith('.') || base === '00-Meta') continue
      findNotes(fullPath, result)
    } else if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'README.md') {
      result.push(fullPath)
    }
  }
  return result
}

// 3. 解析 frontmatter
function parseFrontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { data: {}, body: text }

  const yaml = match[1]
  const body = match[2]
  const data = {}
  let currentKey = null

  for (const line of yaml.split('\n')) {
    const trimmed = line.trim()
    if (trimmed.startsWith('- ')) {
      if (currentKey) {
        if (!Array.isArray(data[currentKey])) data[currentKey] = []
        let val = trimmed.slice(2).trim()
        if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1).replace(/''/g, "'")
        data[currentKey].push(val)
      }
    } else if (trimmed.includes(':')) {
      const idx = trimmed.indexOf(':')
      const key = trimmed.slice(0, idx).trim()
      let value = trimmed.slice(idx + 1).trim()
      if (value === '[]') {
        data[key] = []
      } else if (value.startsWith("'") && value.endsWith("'")) {
        data[key] = value.slice(1, -1).replace(/''/g, "'")
      } else {
        data[key] = value
      }
      currentKey = key
    }
  }
  return { data, body }
}

// 4. 解析正文
function parseBody(body) {
  const sections = []
  let currentSection = null
  let currentFaq = null
  let state = 'idle'
  let emphasisTitle = null
  let emphasisBody = []
  let visualJson = []
  let visualLabel = null
  let pendingParagraph = []

  function flushParagraph() {
    if (pendingParagraph.length > 0) {
      const text = pendingParagraph.join('\n').trim()
      if (text) {
        if (state === 'faq' && currentFaq) {
          currentFaq.answer.push(text)
        } else if (currentSection) {
          currentSection.paragraphs.push(text)
        }
      }
      pendingParagraph = []
    }
  }

  function flushEmphasis() {
    if (emphasisTitle && currentSection) {
      currentSection.emphasisCards.push({
        title: emphasisTitle,
        body: emphasisBody.join('\n').trim(),
      })
    }
    emphasisTitle = null
    emphasisBody = []
  }

  const lines = body.split('\n')
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    const trimmed = line.trim()

    // code block
    if (trimmed.startsWith('```json:')) {
      flushParagraph()
      flushEmphasis()
      visualLabel = trimmed.slice(8).trim()
      visualJson = []
      i++
      while (i < lines.length && lines[i].trim() !== '```') {
        visualJson.push(lines[i])
        i++
      }
      try {
        const data = JSON.parse(visualJson.join('\n'))
        if (currentSection) currentSection[visualLabel] = data
      } catch (e) {
        console.warn('JSON parse error:', visualLabel)
      }
      visualLabel = null
      i++
      continue
    }

    // section heading
    if (trimmed.startsWith('## ')) {
      flushParagraph()
      flushEmphasis()
      if (currentSection) sections.push(currentSection)
      currentSection = {
        heading: trimmed.slice(3).trim(),
        paragraphs: [],
        faqs: [],
        bullets: [],
        emphasisCards: [],
      }
      currentFaq = null
      state = 'section'
      i++
      continue
    }

    // faq question
    if (trimmed.startsWith('### ')) {
      flushParagraph()
      flushEmphasis()
      currentFaq = {
        question: trimmed.slice(4).trim(),
        answer: [],
        links: [],
      }
      if (currentSection) currentSection.faqs.push(currentFaq)
      state = 'faq'
      i++
      continue
    }

    // bullets
    if (trimmed.startsWith('- ')) {
      flushParagraph()
      flushEmphasis()
      const content = trimmed.slice(2).trim()
      // 链接
      const linkMatch = content.match(/\[([^\]]+)\]\(([^)]+)\)/)
      if (linkMatch && state === 'faq' && currentFaq) {
        currentFaq.links.push({ label: linkMatch[1], href: linkMatch[2] })
      } else if (currentSection) {
        currentSection.bullets.push(content)
      }
      i++
      continue
    }

    // emphasis card
    if (trimmed.startsWith('> ')) {
      flushParagraph()
      const content = trimmed.slice(2).trim()
      if (content.startsWith('**') && content.includes('**')) {
        const titleMatch = content.match(/\*\*([^*]+)\*\*/)
        if (titleMatch) {
          flushEmphasis()
          emphasisTitle = titleMatch[1].trim()
          const rest = content.replace(/\*\*[^*]+\*\*/, '').trim()
          if (rest) emphasisBody.push(rest)
        } else {
          emphasisBody.push(content)
        }
      } else {
        emphasisBody.push(content)
      }
      i++
      continue
    }

    // 空行
    if (trimmed === '') {
      flushParagraph()
      i++
      continue
    }

    // 普通段落
    pendingParagraph.push(trimmed)
    i++
  }

  flushParagraph()
  flushEmphasis()
  if (currentSection) sections.push(currentSection)

  return sections
}

// 5. 双语笔记目录映射：中文目录 → 英文目录（相对于 vault/）
const BILINGUAL_DIRS = {
  'Cooking/docs-zh': 'Cooking/noma-fermentation-fixed'
}

// 将相对路径转换为匹配键（用于查找对应的英文文件）
function getMatchKey(relativePath) {
  // 去掉目录前缀，只保留子目录 + 文件名
  for (const [zhDir, enDir] of Object.entries(BILINGUAL_DIRS)) {
    if (relativePath.startsWith(zhDir + path.sep)) {
      return relativePath.slice(zhDir.length + 1) // +1 for path.sep
    }
    if (relativePath.startsWith(enDir + path.sep)) {
      return relativePath.slice(enDir.length + 1)
    }
  }
  return null
}

// 判断文件是否属于中文目录
function isZhFile(relativePath) {
  for (const zhDir of Object.keys(BILINGUAL_DIRS)) {
    if (relativePath.startsWith(zhDir + path.sep)) return true
  }
  return false
}

// 判断文件是否属于英文目录
function isEnFile(relativePath) {
  for (const enDir of Object.values(BILINGUAL_DIRS)) {
    if (relativePath.startsWith(enDir + path.sep)) return true
  }
  return false
}

// 合并两份笔记的 sections，按索引对齐
function mergeBilingualSections(zhSections, enSections) {
  const merged = []
  const maxLen = Math.max(zhSections.length, enSections.length)
  for (let i = 0; i < maxLen; i++) {
    const zhS = zhSections[i] || {}
    const enS = enSections[i] || {}
    const section = {}

    // heading
    if (zhS.heading || enS.heading) {
      section.heading = { zh: zhS.heading || '', en: enS.heading || '' }
    }

    // paragraphs
    const maxPara = Math.max((zhS.paragraphs || []).length, (enS.paragraphs || []).length)
    if (maxPara > 0) {
      section.paragraphs = []
      for (let j = 0; j < maxPara; j++) {
        const zhP = (zhS.paragraphs || [])[j] || ''
        const enP = (enS.paragraphs || [])[j] || ''
        section.paragraphs.push({ zh: zhP, en: enP })
      }
    }

    // bullets
    const maxBullets = Math.max((zhS.bullets || []).length, (enS.bullets || []).length)
    if (maxBullets > 0) {
      section.bullets = []
      for (let j = 0; j < maxBullets; j++) {
        const zhB = (zhS.bullets || [])[j] || ''
        const enB = (enS.bullets || [])[j] || ''
        section.bullets.push({ zh: zhB, en: enB })
      }
    }

    // faqs
    const maxFaqs = Math.max((zhS.faqs || []).length, (enS.faqs || []).length)
    if (maxFaqs > 0) {
      section.faqs = []
      for (let j = 0; j < maxFaqs; j++) {
        const zhF = (zhS.faqs || [])[j] || { question: '', answer: [], links: [] }
        const enF = (enS.faqs || [])[j] || { question: '', answer: [], links: [] }
        const maxAns = Math.max((zhF.answer || []).length, (enF.answer || []).length)
        const mergedAns = []
        for (let k = 0; k < maxAns; k++) {
          mergedAns.push({
            zh: (zhF.answer || [])[k] || '',
            en: (enF.answer || [])[k] || ''
          })
        }
        section.faqs.push({
          question: { zh: zhF.question || '', en: enF.question || '' },
          answer: mergedAns,
          links: zhF.links || enF.links || []
        })
      }
    }

    // emphasisCards
    const maxCards = Math.max((zhS.emphasisCards || []).length, (enS.emphasisCards || []).length)
    if (maxCards > 0) {
      section.emphasisCards = []
      for (let j = 0; j < maxCards; j++) {
        const zhC = (zhS.emphasisCards || [])[j] || { title: '', body: '' }
        const enC = (enS.emphasisCards || [])[j] || { title: '', body: '' }
        section.emphasisCards.push({
          title: { zh: zhC.title || '', en: enC.title || '' },
          body: { zh: zhC.body || '', en: enC.body || '' }
        })
      }
    }

    // visuals / JSON data 保留中文版本（通常数据是一样的）
    for (const key of Object.keys(zhS)) {
      if (!['heading', 'paragraphs', 'bullets', 'faqs', 'emphasisCards'].includes(key)) {
        section[key] = zhS[key]
      }
    }

    merged.push(section)
  }
  return merged
}

// 构建单个笔记对象
function buildNote(file, sections, isBilingual = false) {
  const text = fs.readFileSync(file, 'utf-8')
  const { data, body } = parseFrontmatter(text)
  // 根据文件路径推断 categoryId 和 chapterId（备份，当 frontmatter 缺失时使用）
  const relativePath = path.relative(VAULT_DIR, file)
  const pathParts = relativePath.split(path.sep)
  const inferredCategory = pathParts[0].toLowerCase().replace(/\s+/g, '-')

  // 处理双语目录结构：Cooking/docs-zh/part01-primer/file.md → chapterId 应该是 part01_primer
  let inferredChapter = null
  if (pathParts.length > 1) {
    const isBilingualSubdir = Object.keys(BILINGUAL_DIRS).some(zhDir =>
      relativePath.startsWith(zhDir + path.sep)
    )
    if (isBilingualSubdir && pathParts.length > 2) {
      inferredChapter = pathParts[2].replace(/-/g, '_')
    } else {
      inferredChapter = pathParts[1].replace(/-/g, '_')
    }
  }

  let inferredTitle = data.title || ''
  if (!inferredTitle) {
    const h1Match = body.match(/^#\s+(.+)$/m)
    if (h1Match) {
      inferredTitle = h1Match[1].trim()
    } else if (sections.length > 0 && sections[0].heading) {
      inferredTitle = sections[0].heading
    } else {
      inferredTitle = path.basename(file, '.md')
        .replace(/^\d+[-_]/, '')
        .replace(/-/g, ' ')
        .replace(/_/g, ' ')
    }
  }

  return {
    id: data.id || path.basename(file, '.md'),
    categoryId: data.category || inferredCategory || '',
    chapterId: data.chapter || inferredChapter || null,
    course: data.course || '',
    date: data.date || '',
    title: data.title_en
      ? { zh: data.title_zh || inferredTitle, en: data.title_en }
      : inferredTitle,
    summary: data.summary_en
      ? { zh: data.summary_zh || data.summary, en: data.summary_en }
      : (data.summary_zh || data.summary || ''),
    tags: data.tags || [],
    sections,
  }
}

// 6. 生成 content.js
const allFiles = findNotes(VAULT_DIR)
const notes = []

// 收集双语文件对
const enFileMap = new Map() // matchKey → enFilePath
const zhFiles = []
const otherFiles = []

for (const file of allFiles) {
  const rel = path.relative(VAULT_DIR, file)
  if (isZhFile(rel)) {
    zhFiles.push(file)
  } else if (isEnFile(rel)) {
    const key = getMatchKey(rel)
    if (key) enFileMap.set(key, file)
  } else {
    otherFiles.push(file)
  }
}

// 处理双语对：以中文为主，合并英文
for (const zhFile of zhFiles) {
  const zhRel = path.relative(VAULT_DIR, zhFile)
  const matchKey = getMatchKey(zhRel)
  const enFile = matchKey ? enFileMap.get(matchKey) : null

  const zhText = fs.readFileSync(zhFile, 'utf-8')
  const { data: zhData, body: zhBody } = parseFrontmatter(zhText)
  const zhSections = parseBody(zhBody)

  let mergedSections = zhSections
  let mergedTitle = null
  let mergedSummary = null

  if (enFile && fs.existsSync(enFile)) {
    const enText = fs.readFileSync(enFile, 'utf-8')
    const { data: enData, body: enBody } = parseFrontmatter(enText)
    const enSections = parseBody(enBody)
    mergedSections = mergeBilingualSections(zhSections, enSections)

    // 合并标题和摘要
    const zhH1 = zhBody.match(/^#\s+(.+)$/m)
    const enH1 = enBody.match(/^#\s+(.+)$/m)
    if (zhH1 || enH1) {
      mergedTitle = { zh: (zhH1?.[1] || '').trim(), en: (enH1?.[1] || '').trim() }
    }
    if (zhData.summary || enData.summary) {
      mergedSummary = { zh: zhData.summary || '', en: enData.summary || '' }
    }
  }

  const note = buildNote(zhFile, mergedSections, !!enFile)
  if (mergedTitle) note.title = mergedTitle
  if (mergedSummary) note.summary = mergedSummary
  notes.push(note)
}

// 处理非双语文件
for (const file of otherFiles) {
  const text = fs.readFileSync(file, 'utf-8')
  const { data, body } = parseFrontmatter(text)
  const sections = parseBody(body)
  notes.push(buildNote(file, sections))
}

// 排序：按 id 字母顺序
notes.sort((a, b) => a.id.localeCompare(b.id))

// 生成 JS 文件内容
function stringify(val, indent = 2) {
  const pad = ' '.repeat(indent)
  if (val === null) return 'null'
  if (typeof val === 'string') {
    const escaped = val
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'")
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
    return `'${escaped}'`
  }
  if (typeof val === 'number' || typeof val === 'boolean') return String(val)
  if (Array.isArray(val)) {
    if (val.length === 0) return '[]'
    const items = val.map(v => stringify(v, indent + 2)).join(',\n' + pad)
    return `[\n${pad}${items}\n${' '.repeat(indent - 2)}]`
  }
  if (typeof val === 'object') {
    const entries = Object.entries(val)
    if (entries.length === 0) return '{}'
    const items = entries.map(([k, v]) => {
      const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : `'${k}'`
      return `${key}: ${stringify(v, indent + 2)}`
    }).join(',\n' + pad)
    return `{\n${pad}${items}\n${' '.repeat(indent - 2)}}`
  }
  return String(val)
}

const siteStr = stringify(config.site)
const categoriesStr = stringify(config.categories)
const chaptersStr = stringify(config.chapters)
const notesStr = stringify(notes)

const output = `export const site = ${siteStr}

export const categories = ${categoriesStr}

export const chapters = ${chaptersStr}

export const notes = ${notesStr}
`

fs.writeFileSync(OUTPUT_FILE, output, 'utf-8')
console.log(`✅ 已生成 content.js （${notes.length} 篇笔记）`)
