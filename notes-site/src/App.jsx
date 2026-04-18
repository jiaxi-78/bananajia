import './App.css'
import { useState } from 'react'
import { notes, site } from './content.js'

const noteNumbers = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']

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

function App() {
  const [activeNoteId, setActiveNoteId] = useState(notes[0]?.id ?? null)
  const activeNote = notes.find((note) => note.id === activeNoteId) ?? notes[0]

  return (
    <main className="blog-shell">
      <header className="blog-header">
        <h1>{site.title}</h1>
        {site.intro ? <p className="blog-intro">{site.intro}</p> : null}
      </header>

      <section className="category-block" aria-labelledby="category-title">
        <div className="category-head">
          <p className="category-label">Category</p>
          <h2 id="category-title">{site.category}</h2>
        </div>

        <div className="note-browser">
          <nav className="note-nav" aria-label="Notes">
            {notes.map((note, index) => {
              const isActive = note.id === activeNote?.id
              const label = noteNumbers[index] ?? String(index + 1)

              return (
                <button
                  key={note.id}
                  type="button"
                  className={`note-nav-item${isActive ? ' is-active' : ''}`}
                  onClick={() => setActiveNoteId(note.id)}
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
                {activeNote.course ? <span>{activeNote.course}</span> : null}
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
      </section>
    </main>
  )
}

export default App
