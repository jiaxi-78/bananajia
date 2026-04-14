import { useState } from 'react'
import './App.css'
import { homeworks, notes, profile, roadmap, stats } from './content.js'

function App() {
  const [activeNoteId, setActiveNoteId] = useState(notes[0]?.id ?? '')
  const activeNote = notes.find((note) => note.id === activeNoteId) ?? notes[0]

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">JL</span>
          <span>
            <strong>{profile.siteName}</strong>
            <small>{profile.tagline}</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#notes">Notes</a>
          <a href="#homework">Homework</a>
          <a href="#visuals">Visuals</a>
        </nav>
      </header>

      <main className="layout">
        <section className="hero-panel" id="home">
          <div className="hero-copy">
            <p className="eyebrow">{profile.eyebrow}</p>
            <h1>{profile.headline}</h1>
            <p className="hero-text">{profile.intro}</p>

            <div className="hero-actions">
              <a className="primary-link" href="#notes">
                进入笔记
              </a>
              <a className="secondary-link" href="#homework">
                查看作业
              </a>
            </div>
          </div>

          <aside className="focus-card">
            <p className="card-label">Current Focus</p>
            <h2>{activeNote.title}</h2>
            <p>{activeNote.summary}</p>
            <ul className="chip-list" aria-label="Current focus tags">
              {activeNote.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="stats-grid" aria-label="Highlights">
          {stats.map((item) => (
            <article className="stat-card" key={item.label}>
              <p className="stat-value">{item.value}</p>
              <h2>{item.label}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </section>

        <section className="content-panel" id="notes">
          <div className="section-heading">
            <p className="eyebrow">Notes</p>
            <h2>课程笔记和过程记录</h2>
            <p>
              先把每次作业写成可复盘的页面，后面再补更多专题、图表和实验对比。
            </p>
          </div>

          <div className="note-browser">
            <div className="note-list" role="tablist" aria-label="Notes list">
              {notes.map((note) => (
                <button
                  key={note.id}
                  className={`note-card ${note.id === activeNote.id ? 'is-active' : ''}`}
                  onClick={() => setActiveNoteId(note.id)}
                  type="button"
                >
                  <span className="note-date">{note.date}</span>
                  <strong>{note.title}</strong>
                  <p>{note.summary}</p>
                  <span className="note-course">{note.course}</span>
                </button>
              ))}
            </div>

            <article className="note-detail">
              <div className="note-detail-header">
                <p className="eyebrow">{activeNote.course}</p>
                <h3>{activeNote.title}</h3>
                <p>{activeNote.summary}</p>
              </div>

              <div className="detail-tags" aria-label="Selected note tags">
                {activeNote.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {activeNote.sections.map((section) => (
                <section className="detail-section" key={section.heading}>
                  <h4>{section.heading}</h4>

                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}

                  {section.code ? (
                    <div className="code-block">
                      <p className="code-label">{section.codeLabel}</p>
                      <pre>
                        <code>{section.code}</code>
                      </pre>
                    </div>
                  ) : null}
                </section>
              ))}
            </article>
          </div>
        </section>

        <section className="content-panel" id="homework">
          <div className="section-heading">
            <p className="eyebrow">Homework</p>
            <h2>把作业也变成作品集的一部分</h2>
            <p>
              每次作业不仅交代码，也保留背景、实验记录和结果解释。后面可以继续加链接、截图和演示。
            </p>
          </div>

          <div className="homework-grid">
            {homeworks.map((homework) => (
              <article className="homework-card" key={homework.id}>
                <div className="homework-meta">
                  <span>{homework.status}</span>
                  <span>{homework.course}</span>
                </div>
                <h3>{homework.title}</h3>
                <p>{homework.summary}</p>
                <ul>
                  {homework.deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-panel" id="visuals">
          <div className="section-heading">
            <p className="eyebrow">Visuals</p>
            <h2>后续可以直接接入可视化</h2>
            <p>
              这个站已经是 React 结构，后面加图表、实验对比或训练结果展示不会卡住。
            </p>
          </div>

          <div className="roadmap-grid">
            {roadmap.map((item) => (
              <article className="roadmap-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.stack}</span>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
