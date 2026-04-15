import './App.css'
import { notes, site } from './content.js'

function App() {
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

        <div className="post-list">
          {notes.map((note) => (
            <article className="post-card" key={note.id}>
              <div className="post-meta">
                {note.date ? <span>{note.date}</span> : null}
                {note.course ? <span>{note.course}</span> : null}
              </div>

              {note.title ? <h3>{note.title}</h3> : null}
              {note.summary ? <p className="post-summary">{note.summary}</p> : null}

              <div className="post-content">
                {note.sections.map((section) => (
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
                    {section.code ? (
                      <pre className="code-block">
                        <code>{section.code}</code>
                      </pre>
                    ) : null}
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
