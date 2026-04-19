import './App.css'
import { useEffect, useMemo, useState } from 'react'
import { notes, site, categories } from './content.js'

const noteNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']

function readRouteFromHash() {
  const [categoryId, noteId] = window.location.hash
    .replace(/^#\/?/, '')
    .split('/')
    .map((part) => decodeURIComponent(part))
    .filter(Boolean)

  return { categoryId: categoryId ?? null, noteId: noteId ?? null }
}

function writeRouteToHash(categoryId, noteId) {
  if (!categoryId) {
    window.history.pushState(null, '', window.location.pathname + window.location.search)
    return
  }

  const route = noteId
    ? `#/${encodeURIComponent(categoryId)}/${encodeURIComponent(noteId)}`
    : `#/${encodeURIComponent(categoryId)}`

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

function HubView({ onPickCategory, counts }) {
  return (
    <section className="hub">
      <header className="hub-header">
        <p className="hub-eyebrow">&gt;_ {site.tagline}</p>
        <h1 className="hub-title">
          <span className="glitch" data-text={site.title}>{site.title}</span>
        </h1>
        {site.intro ? <p className="hub-intro">{site.intro}</p> : null}
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
              aria-label={`Open ${cat.name}`}
            >
              <div className="hub-card-corners" aria-hidden="true">
                <span /><span /><span /><span />
              </div>
              <div className="hub-card-top">
                <span className="hub-card-tag">{cat.tag}</span>
                <span className="hub-card-code">{cat.code}</span>
              </div>
              <h2 className="hub-card-name">{cat.name}</h2>
              <p className="hub-card-tagline">{cat.tagline}</p>
              <p className="hub-card-desc">{cat.description}</p>
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

function CategoryView({ category, categoryNotes, activeNoteId, onPickNote, onBack }) {
  const activeNote = categoryNotes.find((n) => n.id === activeNoteId) ?? categoryNotes[0]

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
        <p className="category-eyebrow">&gt;_ {category.tagline}</p>
        <h1 className="category-title glitch" data-text={category.name}>
          {category.name}
        </h1>
        <p className="category-desc">{category.description}</p>
      </header>

      {categoryNotes.length === 0 ? (
        <div className="empty-state">
          <div className="empty-frame">
            <p className="empty-label">// NO SIGNAL</p>
            <h3>这个分类还在建设中</h3>
            <p>这门课的笔记还没写，等我学到能分享的阶段就会在这里出现。</p>
          </div>
        </div>
      ) : (
        <div className="note-browser">
          <nav className="note-nav" aria-label="Notes">
            {categoryNotes.map((note, index) => {
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
                    <span className="note-nav-title">{note.title}</span>
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

              {activeNote.title ? <h3>{activeNote.title}</h3> : null}
              {activeNote.summary ? <p className="post-summary">{activeNote.summary}</p> : null}

              <div className="post-content">
                {activeNote.sections.map((section) => (
                  <section className="post-section" key={section.heading}>
                    <h4>{section.heading}</h4>

                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    {section.faqs ? (
                      <div className="faq-list">
                        {section.faqs.map((item) => (
                          <details className="faq-item" key={item.question}>
                            <summary>{item.question}</summary>
                            <div className="faq-answer">
                              {item.answer.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
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
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                    {section.optimizerVisuals ? (
                      <OptimizerVisualSection items={section.optimizerVisuals} />
                    ) : null}
                    {section.code ? (
                      <pre className="code-block">
                        <code>{section.code}</code>
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

function App() {
  const [route, setRoute] = useState(() => readRouteFromHash())

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
  const categoryNotes = activeCategory
    ? notes.filter((n) => n.categoryId === activeCategory.id)
    : []
  const activeNoteId = categoryNotes.some((note) => note.id === route.noteId)
    ? route.noteId
    : categoryNotes[0]?.id ?? null

  const openCategory = (categoryId) => {
    const firstNote = notes.find((note) => note.categoryId === categoryId)
    const nextRoute = { categoryId, noteId: firstNote?.id ?? null }
    setRoute(nextRoute)
    writeRouteToHash(nextRoute.categoryId, nextRoute.noteId)
  }

  const openNote = (noteId) => {
    const nextRoute = { categoryId: activeCategory.id, noteId }
    setRoute(nextRoute)
    writeRouteToHash(nextRoute.categoryId, nextRoute.noteId)
  }

  const openHub = () => {
    setRoute({ categoryId: null, noteId: null })
    writeRouteToHash(null, null)
  }

  return (
    <main className="shell">
      {activeCategory ? (
        <CategoryView
          category={activeCategory}
          categoryNotes={categoryNotes}
          activeNoteId={activeNoteId}
          onPickNote={openNote}
          onBack={openHub}
        />
      ) : (
        <HubView counts={counts} onPickCategory={openCategory} />
      )}
    </main>
  )
}

export default App
