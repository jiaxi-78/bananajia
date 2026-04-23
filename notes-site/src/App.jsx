import './App.css'
import { useEffect, useMemo, useState } from 'react'
import { notes as rawNotes, site as rawSite, categories as rawCategories, chapters as rawChapters } from './content.js'

function flattenBilingual(obj) {
  if (Array.isArray(obj)) return obj.map(flattenBilingual)
  if (obj && typeof obj === 'object') {
    if (obj.zh !== undefined && obj.en !== undefined) return obj.zh
    const result = {}
    for (const [k, v] of Object.entries(obj)) result[k] = flattenBilingual(v)
    return result
  }
  return obj
}

// 解析 Markdown 行内格式：`code` 、**bold** 、*italic*
function parseInlineMarkdown(text) {
  if (!text || typeof text !== 'string') return text

  const parts = []
  let lastIndex = 0
  const regex = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g

  let match
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }

    const content = match[0]
    if (content.startsWith('`') && content.endsWith('`')) {
      parts.push(<code key={match.index} className="inline-code">{content.slice(1, -1)}</code>)
    } else if (content.startsWith('**') && content.endsWith('**')) {
      parts.push(<strong key={match.index}>{content.slice(2, -2)}</strong>)
    } else if (content.startsWith('*') && content.endsWith('*')) {
      parts.push(<em key={match.index}>{content.slice(1, -1)}</em>)
    }

    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts.length === 0 ? text : parts
}

// 使用原始数据（不在模块级别展平）
const notes = rawNotes
const site = rawSite
const categories = rawCategories
const chapters = rawChapters

const noteNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']

function readRouteFromHash() {
  const [categoryId, secondPart, thirdPart] = window.location.hash
    .replace(/^#\/?/, '')
    .split('/')
    .map((part) => decodeURIComponent(part))
    .filter(Boolean)

  if (!categoryId) {
    return { categoryId: null, chapterId: null, noteId: null }
  }

  if (thirdPart) {
    return {
      categoryId,
      chapterId: secondPart ?? null,
      noteId: thirdPart,
    }
  }

  const legacyNote = notes.find((note) => note.id === secondPart)
  if (legacyNote) {
    return {
      categoryId: legacyNote.categoryId ?? categoryId,
      chapterId: legacyNote.chapterId ?? null,
      noteId: legacyNote.id,
    }
  }

  return {
    categoryId,
    chapterId: secondPart ?? null,
    noteId: null,
  }
}

function writeRouteToHash(categoryId, chapterId, noteId) {
  if (!categoryId) {
    window.history.pushState(null, '', window.location.pathname + window.location.search)
    return
  }

  const parts = [categoryId]
  if (chapterId) parts.push(chapterId)
  if (noteId) parts.push(noteId)
  const route = `#/${parts.map((part) => encodeURIComponent(part)).join('/')}`

  window.history.pushState(null, '', route)
}

function OptimizerVisualSection({ items }) {
  return (
    <div className="optimizer-grid">
      {items.map((item) => (
        <article className="optimizer-card" key={item.name}>
          <div className="optimizer-head">
            <div>
              <p className="optimizer-label">{item.label}</p>
              <h5>{item.name}</h5>
            </div>
            <span className="optimizer-badge">{item.badge}</span>
          </div>

          <p className="optimizer-summary">{item.summary}</p>

          <div className="optimizer-plot" aria-hidden="true">
            <div className="optimizer-plot-axis optimizer-plot-axis-x" />
            <div className="optimizer-plot-axis optimizer-plot-axis-y" />

            {item.trace.map((point, index) => (
              <div
                key={`${item.name}-${index}`}
                className={`optimizer-dot${index === item.trace.length - 1 ? ' is-last' : ''}`}
                style={{ left: `${point[0]}%`, top: `${point[1]}%` }}
              />
            ))}
          </div>

          <ul className="optimizer-points">
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

function PositionalEncodingVisualSection({ data }) {
  return (
    <div className="position-lab">
      <div className="position-bag">
        <p className="position-label">不加位置编码：模型只看到同一袋 token</p>
        <div className="token-bag" aria-label="token bag">
          {data.bag.map((token) => (
            <span className={`word-chip word-${token.key}`} key={token.text}>
              {token.text}
            </span>
          ))}
        </div>
        <p className="position-note">
          两句话都包含“我 / 爱 / 你”，如果完全没有顺序信号，自注意力本身很难知道谁在前、谁在后。
        </p>
      </div>

      <div className="position-compare">
        {data.sentences.map((sentence) => (
          <article className="position-sentence" key={sentence.label}>
            <h5>{sentence.label}</h5>
            <div className="position-flow">
              {sentence.tokens.map((token) => (
                <div className="position-token" key={`${sentence.label}-${token.pos}`}>
                  <span className={`word-chip word-${token.key}`}>{token.text}</span>
                  <span className="plus">+</span>
                  <span className={`pos-chip pos-${token.pos}`}>pos {token.pos}</span>
                  <span className="arrow">=</span>
                  <span className="encoded-chip">
                    {token.text}@{token.pos}
                  </span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="position-difference">
        {data.differences.map((item) => (
          <div className="difference-card" key={item.title}>
            <span className="difference-title">{item.title}</span>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function PositionFormulaVisualSection({ data }) {
  return (
    <div className="formula-lab">
      <div className="formula-equation">
        <span>PE(pos, 2i) = sin(pos / scale_i)</span>
        <span>PE(pos, 2i+1) = cos(pos / scale_i)</span>
      </div>

      <div className="wave-grid">
        {data.waves.map((wave) => (
          <article className="wave-card" key={wave.label}>
            <div className="wave-head">
              <span>{wave.label}</span>
              <small>{wave.note}</small>
            </div>
            <div className="wave-track" aria-hidden="true">
              {wave.points.map((point, index) => (
                <span
                  className="wave-dot"
                  key={`${wave.label}-${index}`}
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                />
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="position-slices">
        {data.positions.map((position) => (
          <div className="position-slice" key={position.pos}>
            <span className="slice-pos">pos {position.pos}</span>
            <div className="slice-bars">
              {position.values.map((value, index) => (
                <span
                  className="slice-bar"
                  key={`${position.pos}-${index}`}
                  style={{ height: `${value}%` }}
                />
              ))}
            </div>
            <span className="slice-caption">{position.caption}</span>
          </div>
        ))}
      </div>

      <div className="formula-steps">
        {data.steps.map((step) => (
          <div className="formula-step" key={step.title}>
            <span>{step.title}</span>
            <p>{step.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function EmphasisCards({ items, t = (v) => v }) {
  return (
    <div className="emphasis-grid">
      {items.map((item, i) => (
        <article className="emphasis-card" key={i}>
          <strong>{parseInlineMarkdown(t(item.title))}</strong>
          <p>{parseInlineMarkdown(t(item.body))}</p>
        </article>
      ))}
    </div>
  )
}

function TransformerFlowSection({ data }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeStep = data.steps[activeIndex] ?? data.steps[0]

  return (
    <div className="transformer-flow">
      <div className="flow-lane">
        {data.steps.map((step, index) => (
          <button
            type="button"
            className={`flow-node flow-${step.kind}${index === activeIndex ? ' is-active' : ''}`}
            key={step.title}
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
          >
            <span className="flow-index">{String(index + 1).padStart(2, '0')}</span>
            <h5>{step.title}</h5>
            <p>{step.body}</p>
            <code>{step.shape}</code>
          </button>
        ))}
      </div>

      {activeStep?.visual ? (
        <div className={`flow-detail detail-${activeStep.kind}`}>
          <div className="flow-detail-copy">
            <span className="flow-detail-kicker">Selected step</span>
            <h5>{activeStep.visual.title}</h5>
            <p>{activeStep.visual.body}</p>
          </div>

          <div className={`flow-detail-art art-${activeStep.visual.type}`} aria-hidden="true">
            {activeStep.visual.type === 'tokens' ? (
              <div className="token-stream">
                {activeStep.visual.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            ) : null}

            {activeStep.visual.type === 'embedding' ? (
              <div className="embedding-stack">
                {activeStep.visual.items.map((item) => (
                  <div className="embedding-row" key={item.token}>
                    <span className="token-mini">{item.token}</span>
                    <span className="math-plus">+</span>
                    <span className="pos-mini">{item.pos}</span>
                    <span className="math-arrow">=</span>
                    <span className="vector-mini">{item.result}</span>
                  </div>
                ))}
              </div>
            ) : null}

            {activeStep.visual.type === 'attention' ? (
              <div className="attention-matrix">
                {activeStep.visual.cells.map((cell, index) => (
                  <span
                    key={`${cell}-${index}`}
                    style={{ opacity: cell }}
                  />
                ))}
              </div>
            ) : null}

            {activeStep.visual.type === 'norm' ? (
              <div className="add-norm-art">
                <span className="residual-line">x</span>
                <span className="sublayer-line">sublayer(x)</span>
                <span className="add-node">+</span>
                <span className="norm-node">LayerNorm</span>
              </div>
            ) : null}

            {activeStep.visual.type === 'ffn' ? (
              <div className="ffn-visual">
                <span>512</span>
                <i />
                <span className="wide">2048</span>
                <i />
                <span>512</span>
              </div>
            ) : null}

            {activeStep.visual.type === 'stack' ? (
              <div className="stack-visual">
                {activeStep.visual.layers.map((layer) => (
                  <span key={layer}>{layer}</span>
                ))}
              </div>
            ) : null}

            {activeStep.visual.type === 'output' ? (
              <div className="output-visual">
                {activeStep.visual.items.map((item) => (
                  <span key={item.token} style={{ height: `${item.score}%` }}>
                    {item.token}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className="block-zoom">
        <div className="block-rail">
          {data.block.map((item) => (
            <div className={`block-cell block-${item.kind}`} key={item.title}>
              <span>{item.title}</span>
              <small>{item.body}</small>
            </div>
          ))}
        </div>
      </div>

      <div className="flow-takeaways">
        {data.takeaways.map((item) => (
          <div className="flow-takeaway" key={item.title}>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function MultiHeadComputeVisual({ data }) {
  return (
    <div className="head-compute">
      <div className="head-model single-head">
        <h5>{data.single.title}</h5>
        <div className="dimension-bar">
          <span style={{ width: '100%' }}>{data.single.width}</span>
        </div>
        <p>{data.single.body}</p>
      </div>

      <div className="head-vs">vs</div>

      <div className="head-model multi-head">
        <h5>{data.multi.title}</h5>
        <div className="head-strips">
          {data.multi.heads.map((head) => (
            <span key={head}>{head}</span>
          ))}
        </div>
        <p>{data.multi.body}</p>
      </div>

      <div className="compute-equation">
        {data.equations.map((eq) => (
          <div key={eq.label}>
            <span>{eq.label}</span>
            <strong>{eq.value}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}

function SoftmaxScaleVisual({ data }) {
  return (
    <div className="softmax-visual">
      {data.panels.map((panel) => (
        <article className={`softmax-panel ${panel.kind}`} key={panel.title}>
          <h5>{panel.title}</h5>
          <div className="score-bars">
            {panel.bars.map((bar, index) => (
              <span
                key={`${panel.title}-${index}`}
                style={{ height: `${bar}%` }}
                aria-label={`score ${index}`}
              />
            ))}
          </div>
          <p>{panel.body}</p>
        </article>
      ))}
      <div className="scale-rule">
        <strong>{data.rule.title}</strong>
        <p>{data.rule.body}</p>
      </div>
    </div>
  )
}

function BlockMechanicsVisual({ data }) {
  return (
    <div className="mechanics-grid">
      {data.cards.map((card) => (
        <article className={`mechanic-card mechanic-${card.kind}`} key={card.title}>
          <h5>{card.title}</h5>
          <div className="mechanic-art" aria-hidden="true">
            {card.kind === 'residual' ? (
              <>
                <span className="main-path" />
                <span className="skip-path" />
                <span className="join-node">+</span>
              </>
            ) : null}
            {card.kind === 'norm' ? (
              <>
                {card.bars.map((bar, index) => (
                  <span className="norm-bar before" style={{ height: `${bar.before}%` }} key={`b-${index}`} />
                ))}
                {card.bars.map((bar, index) => (
                  <span className="norm-bar after" style={{ height: `${bar.after}%` }} key={`a-${index}`} />
                ))}
              </>
            ) : null}
            {card.kind === 'ffn' ? (
              <>
                <span className="ffn-box small">512</span>
                <span className="ffn-arrow">&gt;</span>
                <span className="ffn-box large">2048</span>
                <span className="ffn-arrow">&gt;</span>
                <span className="ffn-box small">512</span>
              </>
            ) : null}
          </div>
          <p>{card.body}</p>
        </article>
      ))}
    </div>
  )
}

function NormModernVisual({ data }) {
  return (
    <div className="norm-modern">
      {data.cards.map((card) => (
        <article className={`norm-modern-card norm-${card.kind}`} key={card.title}>
          <h5>{card.title}</h5>
          <div className="norm-flow-art" aria-hidden="true">
            {card.steps.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>
          <p>{card.body}</p>
        </article>
      ))}
    </div>
  )
}

function GateVisual({ data }) {
  return (
    <div className="gate-visual">
      <div className="gate-path content-path">
        <h5>{data.content.title}</h5>
        <div className="gate-bars" aria-hidden="true">
          {data.content.values.map((value, index) => (
            <span key={index} style={{ height: `${value}%` }} />
          ))}
        </div>
        <p>{data.content.body}</p>
      </div>

      <div className="gate-path control-path">
        <h5>{data.gate.title}</h5>
        <div className="gate-slats" aria-hidden="true">
          {data.gate.values.map((value, index) => (
            <span key={index} style={{ opacity: value }} />
          ))}
        </div>
        <p>{data.gate.body}</p>
      </div>

      <div className="hadamard-node" aria-hidden="true">⊙</div>

      <div className="gate-output">
        <h5>{data.output.title}</h5>
        <div className="gate-bars output-bars" aria-hidden="true">
          {data.output.values.map((value, index) => (
            <span key={index} style={{ height: `${value}%` }} />
          ))}
        </div>
        <p>{data.output.body}</p>
      </div>
    </div>
  )
}

function RoPEVisual({ data }) {
  return (
    <div className="rope-visual">
      <div className="rope-plane-grid">
        {data.planes.map((plane) => (
          <article className="rope-plane" key={plane.title}>
            <h5>{plane.title}</h5>
            <div className="rotation-plane" aria-hidden="true">
              <span className="axis x-axis" />
              <span className="axis y-axis" />
              <span className="vector original" style={{ transform: `rotate(${plane.original}deg)` }} />
              <span className="vector rotated" style={{ transform: `rotate(${plane.rotated}deg)` }} />
            </div>
            <p>{plane.body}</p>
          </article>
        ))}
      </div>

      <div className="rope-relative">
        <div className="rope-token">
          <span>Q at pos m</span>
          <strong>R(mθ)Q</strong>
        </div>
        <div className="rope-token">
          <span>K at pos n</span>
          <strong>R(nθ)K</strong>
        </div>
        <div className="rope-result">
          <span>attention dot product sees</span>
          <strong>R((m - n)θ)</strong>
        </div>
      </div>

      <div className="rope-blocks">
        {data.blocks.map((block) => (
          <div className="rope-block" key={block.label}>
            <span>{block.label}</span>
            <small>{block.speed}</small>
          </div>
        ))}
      </div>
    </div>
  )
}

function AttentionVariantVisual({ data }) {
  return (
    <div className="attention-variant-grid">
      {data.variants.map((variant) => (
        <article className={`attention-variant-card variant-${variant.kind}`} key={variant.title}>
          <div className="variant-head">
            <span>{variant.label}</span>
            <h5>{variant.title}</h5>
          </div>
          <div className="qkv-row" aria-hidden="true">
            <div className="q-stack">
              {variant.q.map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="kv-stack">
              {variant.kv.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <p>{variant.body}</p>
        </article>
      ))}
    </div>
  )
}

function SparseWindowVisual({ data }) {
  return (
    <div className="sparse-window">
      <div className="sparse-matrix" aria-label="Sparse attention pattern">
        {data.cells.map((cell, index) => (
          <span
            key={`${cell}-${index}`}
            className={`sparse-cell cell-${cell}`}
            title={cell}
          />
        ))}
      </div>
      <div className="sparse-legend">
        {data.legend.map((item) => (
          <div key={item.title}>
            <span className={`legend-dot cell-${item.kind}`} />
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function StabilityControlVisual({ data }) {
  return (
    <div className="stability-control">
      {data.controls.map((control) => (
        <article className={`stability-card stability-${control.kind}`} key={control.title}>
          <h5>{control.title}</h5>
          <div className="stability-bars" aria-hidden="true">
            {control.bars.map((bar, index) => (
              <span key={index} style={{ height: `${bar}%` }} />
            ))}
          </div>
          <p>{control.body}</p>
        </article>
      ))}
    </div>
  )
}

function HubView({ onPickCategory, counts, t }) {
  return (
    <section className="hub">
      <header className="hub-header">
        <p className="hub-eyebrow">&gt;_ {t(site.tagline)}</p>
        <h1 className="hub-title">
          <span className="glitch" data-text={t(site.title)}>{t(site.title)}</span>
        </h1>
        {site.intro ? <p className="hub-intro">{t(site.intro)}</p> : null}
      </header>

      <div className="hub-grid">
        {categories.map((cat) => {
          const count = counts[cat.id] ?? 0
          return (
            <button
              key={cat.id}
              type="button"
              className={`hub-card accent-${cat.accent}`}
              onClick={() => onPickCategory(cat.id)}
              aria-label={`Open ${t(cat.name)}`}
            >
              <div className="hub-card-corners" aria-hidden="true">
                <span /><span /><span /><span />
              </div>
              <div className="hub-card-top">
                <span className="hub-card-tag">{cat.tag}</span>
                <span className="hub-card-code">{cat.code}</span>
              </div>
              <h2 className="hub-card-name">{t(cat.name)}</h2>
              <p className="hub-card-tagline">{t(cat.tagline)}</p>
              <p className="hub-card-desc">{t(cat.description)}</p>
              <div className="hub-card-bottom">
                <span className="hub-card-count">
                  {count > 0 ? `${count} entries` : 'coming soon'}
                </span>
                <span className="hub-card-arrow" aria-hidden="true">&rarr;</span>
              </div>
            </button>
          )
        })}
      </div>

      <footer className="hub-footer">
        <span className="status-dot" aria-hidden="true" />
        <span>connection stable · signal {new Date().getFullYear()}</span>
      </footer>
    </section>
  )
}

function CategoryView({
  category,
  categoryChapters,
  chapterNotes,
  activeChapterId,
  activeNoteId,
  onPickChapter,
  onPickNote,
  onBack,
  t,
}) {
  const activeChapter = categoryChapters.find((chapter) => chapter.id === activeChapterId)
    ?? categoryChapters[0]
  const activeNote = chapterNotes.find((n) => n.id === activeNoteId) ?? chapterNotes[0]

  const accentClass = `accent-${category.accent}`

  return (
    <section className={`category-view ${accentClass}`}>
      <nav className="category-topbar">
        <button type="button" className="back-btn" onClick={onBack}>
          <span aria-hidden="true">&larr;</span> back to hub
        </button>
        <span className="category-topbar-tag">{category.tag}</span>
      </nav>

      <header className="category-header">
        <p className="category-eyebrow">&gt;_ {t(category.tagline)}</p>
        <h1 className="category-title glitch" data-text={t(category.name)}>
          {t(category.name)}
        </h1>
        <p className="category-desc">{t(category.description)}</p>
      </header>

      {categoryChapters.length === 0 ? (
        <div className="empty-state">
          <div className="empty-frame">
            <p className="empty-label">// NO SIGNAL</p>
            <h3>{t({ zh: '这个分类还在建设中', en: 'This section is under construction' })}</h3>
            <p>{t({ zh: '这门课的笔记还没写，等我学到能分享的阶段就会在这里出现。', en: 'Notes for this course haven\'t been written yet. They\'ll appear here once I have something worth sharing.' })}</p>
          </div>
        </div>
      ) : (
        <div className="note-browser">
          <nav className="chapter-nav" aria-label="Chapters">
            {categoryChapters.map((chapter) => {
              const isActive = chapter.id === activeChapter?.id
              const noteCount = notes.filter((note) => (
                note.categoryId === category.id && note.chapterId === chapter.id
              )).length

              return (
                <button
                  key={chapter.id}
                  type="button"
                  className={`chapter-card${isActive ? ' is-active' : ''}`}
                  onClick={() => onPickChapter(chapter.id)}
                  aria-pressed={isActive}
                >
                  <span className="chapter-card-code">{chapter.code}</span>
                  <span className="chapter-card-copy">
                    <span className="chapter-card-title">{t(chapter.title)}</span>
                    <span className="chapter-card-desc">{t(chapter.description)}</span>
                    <span className="chapter-card-count">{noteCount} cards</span>
                  </span>
                </button>
              )
            })}
          </nav>

          {activeChapter ? (
            <div className="chapter-section-head">
              <span>{activeChapter.code}</span>
              <h2>{t(activeChapter.title)}</h2>
              <p>{t(activeChapter.description)}</p>
            </div>
          ) : null}

          <nav className="note-nav" aria-label="Notes">
            {chapterNotes.map((note, index) => {
              const isActive = note.id === activeNote?.id
              const label = noteNumbers[index] ?? String(index + 1)

              return (
                <button
                  key={note.id}
                  type="button"
                  className={`note-nav-item${isActive ? ' is-active' : ''}`}
                  onClick={() => onPickNote(note.id)}
                  aria-pressed={isActive}
                >
                  <span className="note-nav-index">{label}</span>
                  <span className="note-nav-copy">
                    <span className="note-nav-date">{note.date}</span>
                    <span className="note-nav-title">{t(note.title)}</span>
                  </span>
                </button>
              )
            })}
          </nav>

          {activeNote ? (
            <article className="post-card" key={activeNote.id}>
              <div className="post-meta">
                {activeNote.date ? <span>{activeNote.date}</span> : null}
                {activeNote.course ? <span>// {activeNote.course}</span> : null}
              </div>

              {activeNote.title ? <h3>{t(activeNote.title)}</h3> : null}
              {activeNote.summary ? <p className="post-summary">{t(activeNote.summary)}</p> : null}

              <div className="post-content">
                {activeNote.sections.map((section) => (
                  <section className="post-section" key={t(section.heading)}>
                    <h4>{t(section.heading)}</h4>

                    {section.paragraphs?.map((paragraph, pi) => (
                      <p key={pi}>{parseInlineMarkdown(t(paragraph))}</p>
                    ))}

                    {section.faqs ? (
                      <div className="faq-list">
                        {section.faqs.map((item) => (
                          <details className="faq-item" key={t(item.question)}>
                            <summary>{t(item.question)}</summary>
                            <div className="faq-answer">
                              {item.answer.map((paragraph, ai) => (
                                <p key={ai}>{parseInlineMarkdown(t(paragraph))}</p>
                              ))}

                              {item.links ? (
                                <ul className="reference-list">
                                  {item.links.map((link) => (
                                    <li key={link.href}>
                                      <a href={link.href} target="_blank" rel="noreferrer">
                                        {link.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </div>
                          </details>
                        ))}
                      </div>
                    ) : null}

                    {section.bullets ? (
                      <ul>
                        {section.bullets.map((bullet, bi) => (
                          <li key={bi}>{parseInlineMarkdown(t(bullet))}</li>
                        ))}
                      </ul>
                    ) : null}
                    {section.optimizerVisuals ? (
                      <OptimizerVisualSection items={section.optimizerVisuals} />
                    ) : null}
                    {section.positionEncodingVisual ? (
                      <PositionalEncodingVisualSection data={section.positionEncodingVisual} />
                    ) : null}
                    {section.positionFormulaVisual ? (
                      <PositionFormulaVisualSection data={section.positionFormulaVisual} />
                    ) : null}
                    {section.emphasisCards ? (
                      <EmphasisCards items={section.emphasisCards} t={t} />
                    ) : null}
                    {section.transformerFlow ? (
                      <TransformerFlowSection data={section.transformerFlow} />
                    ) : null}
                    {section.multiHeadComputeVisual ? (
                      <MultiHeadComputeVisual data={section.multiHeadComputeVisual} />
                    ) : null}
                    {section.softmaxScaleVisual ? (
                      <SoftmaxScaleVisual data={section.softmaxScaleVisual} />
                    ) : null}
                    {section.blockMechanicsVisual ? (
                      <BlockMechanicsVisual data={section.blockMechanicsVisual} />
                    ) : null}
                    {section.normModernVisual ? (
                      <NormModernVisual data={section.normModernVisual} />
                    ) : null}
                    {section.gateVisual ? (
                      <GateVisual data={section.gateVisual} />
                    ) : null}
                    {section.ropeVisual ? (
                      <RoPEVisual data={section.ropeVisual} />
                    ) : null}
                    {section.attentionVariantVisual ? (
                      <AttentionVariantVisual data={section.attentionVariantVisual} />
                    ) : null}
                    {section.sparseWindowVisual ? (
                      <SparseWindowVisual data={section.sparseWindowVisual} />
                    ) : null}
                    {section.stabilityControlVisual ? (
                      <StabilityControlVisual data={section.stabilityControlVisual} />
                    ) : null}
                    {section.code ? (
                      <pre className="code-block">
                        <code>{t(section.code)}</code>
                      </pre>
                    ) : null}
                  </section>
                ))}
              </div>
            </article>
          ) : null}
        </div>
      )}
    </section>
  )
}

function LangToggle({ lang, onToggle }) {
  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${lang === 'zh' ? 'English' : '中文'}`}
    >
      <span className={lang === 'zh' ? 'is-active' : ''}>中</span>
      <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
    </button>
  )
}

function makeT(lang) {
  return function t(value) {
    if (value && typeof value === 'object' && !Array.isArray(value) && (value.zh || value.en)) {
      return value[lang] ?? value.zh ?? value.en
    }
    return value
  }
}

function App() {
  const [route, setRoute] = useState(() => readRouteFromHash())
  const [lang, setLang] = useState('zh')
  const t = useMemo(() => makeT(lang), [lang])
  const toggleLang = () => setLang((prev) => (prev === 'zh' ? 'en' : 'zh'))

  const counts = useMemo(() => {
    const map = {}
    for (const note of notes) {
      const cid = note.categoryId ?? 'uncategorized'
      map[cid] = (map[cid] ?? 0) + 1
    }
    return map
  }, [])

  useEffect(() => {
    const syncRoute = () => setRoute(readRouteFromHash())
    window.addEventListener('hashchange', syncRoute)
    window.addEventListener('popstate', syncRoute)

    return () => {
      window.removeEventListener('hashchange', syncRoute)
      window.removeEventListener('popstate', syncRoute)
    }
  }, [])

  const activeCategory = categories.find((c) => c.id === route.categoryId)
  const categoryChapters = activeCategory
    ? chapters.filter((chapter) => chapter.categoryId === activeCategory.id)
    : []

  // 如果分类没有 chapters，直接显示所有笔记，不按 chapter 过滤
  const hasChapters = categoryChapters.length > 0
  const activeChapterId = hasChapters
    ? (categoryChapters.some((chapter) => chapter.id === route.chapterId)
        ? route.chapterId
        : categoryChapters[0]?.id ?? null)
    : null

  const chapterNotes = activeCategory
    ? hasChapters
      ? notes.filter((note) => (
          note.categoryId === activeCategory.id && note.chapterId === activeChapterId
        ))
      : notes.filter((note) => note.categoryId === activeCategory.id)
    : []
  const activeNoteId = chapterNotes.some((note) => note.id === route.noteId)
    ? route.noteId
    : chapterNotes[0]?.id ?? null

  const openCategory = (categoryId) => {
    const firstChapter = chapters.find((chapter) => chapter.categoryId === categoryId)
    const firstNote = firstChapter
      ? notes.find((note) => note.categoryId === categoryId && note.chapterId === firstChapter.id)
      : null
    const nextRoute = {
      categoryId,
      chapterId: firstChapter?.id ?? null,
      noteId: firstNote?.id ?? null,
    }
    setRoute(nextRoute)
    writeRouteToHash(nextRoute.categoryId, nextRoute.chapterId, nextRoute.noteId)
  }

  const openChapter = (chapterId) => {
    const firstNote = notes.find((note) => (
      note.categoryId === activeCategory.id && note.chapterId === chapterId
    ))
    const nextRoute = {
      categoryId: activeCategory.id,
      chapterId,
      noteId: firstNote?.id ?? null,
    }
    setRoute(nextRoute)
    writeRouteToHash(nextRoute.categoryId, nextRoute.chapterId, nextRoute.noteId)
  }

  const openNote = (noteId) => {
    const note = notes.find((item) => item.id === noteId)
    const nextRoute = {
      categoryId: activeCategory.id,
      chapterId: note?.chapterId ?? activeChapterId,
      noteId,
    }
    setRoute(nextRoute)
    writeRouteToHash(nextRoute.categoryId, nextRoute.chapterId, nextRoute.noteId)
  }

  const openHub = () => {
    setRoute({ categoryId: null, chapterId: null, noteId: null })
    writeRouteToHash(null, null, null)
  }

  return (
    <main className="shell">
      <LangToggle lang={lang} onToggle={toggleLang} />
      {activeCategory ? (
        <CategoryView
          category={activeCategory}
          categoryChapters={categoryChapters}
          chapterNotes={chapterNotes}
          activeChapterId={activeChapterId}
          activeNoteId={activeNoteId}
          onPickChapter={openChapter}
          onPickNote={openNote}
          onBack={openHub}
          t={t}
        />
      ) : (
        <HubView counts={counts} onPickCategory={openCategory} t={t} />
      )}
    </main>
  )
}

export default App
