// src/App.tsx
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Section } from "./components/Section"
import { Card } from "./components/Card"
import { Tag } from "./components/Tag"
import { ImageCarousel } from "./components/ImageCarousel"
import { content } from "./content"

import tecLogo from "./assets/tec.svg"
import hszgLogo from "./assets/hszg.png"
import profilePhoto from "./assets/profile.png"

/**
 * App composes every section of the single page resume using shared
 * components and data pulled from `content`.
 */
const contact = content.contact as typeof content.contact & { cv?: string }
// Fallback to bundling `cv.pdf` if a custom contact.cv path is not present.
const cvHref = `${import.meta.env.BASE_URL}${contact.cv ?? "cv.pdf"}`

export default function App() {
  return (
    <div>
      <Navbar />

      <main className="wrap">
        {/* HERO */}
        <Hero />

        {/* ABOUT */}
        <Section id="about" title={content.about.title} subtitle={content.about.subtitle}>
          <div className="grid">
            {/* texto */}
            <Card variant="half" title="Who am I?">
              <p style={{ textAlign: "justify" }}>{content.about.who}</p>
              <p className="meta">{content.about.meta}</p>
            </Card>

            <Card variant="half" title="Profile & languages">
              <div className="about-profile">
                <div className="about-profile-text">
                  <ul className="vlist">
                    <li><strong>Nationality:</strong> {content.about.profile.nationality}</li>
                    <li><strong>Location:</strong> {content.about.profile.location}</li>
                    <li>
                      <strong>Languages:</strong>
                      <ul className="vlist" style={{ marginTop: "6px" }}>
                        {content.about.profile.languages.map((lang) => (
                          <li key={lang}>{lang}</li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="about-profile-photo">
                  <ImageCarousel
                    className="about"
                    images={(content.about.profile as any).images?.length ? (content.about.profile as any).images : [profilePhoto]}
                    alt="Photo of Jathir Rubio"
                  />
                </div>
              </div>
            </Card>

          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education" title={content.education.title} subtitle={content.education.subtitle}>
          <div className="grid">
            {/* HSZG */}
            <Card variant="half">
              <div className="edu-logo-top">
                <img src={hszgLogo} alt="Hochschule Zittau/Görlitz" className="edu-logo" />
              </div>
              <h3>{content.education.items[0].title}</h3>
              <p className="meta">
                {content.education.items[0].place} · {content.education.items[0].period}
              </p>
              <p>{content.education.items[0].description}</p>
            </Card>

            {/* TEC */}
            <Card variant="half">
              <div className="edu-logo-top">
                <img src={tecLogo} alt="Tecnológico de Monterrey" className="edu-logo" />
              </div>
              <h3>{content.education.items[1].title}</h3>
              <p className="meta">
                {content.education.items[1].place} · {content.education.items[1].period}
              </p>
              <p>{content.education.items[1].description}</p>
            </Card>
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" title={content.experience.title} subtitle={content.experience.subtitle}>
          <div className="grid">
            {content.experience.items.map((exp) => (
              <Card key={exp.role + exp.period}>
                <div className="exp-row">
                <div className="exp-text">
                  <h3>{exp.role}</h3>
                <p className="meta">
                  {exp.place} · {exp.period}
                </p>
                <ul className="vlist">
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                </div>
                {Array.isArray((exp as any).images) && (exp as any).images.length > 0 ? (
                  <div className="exp-media">
                    <ImageCarousel images={(exp as any).images} alt={`${exp.role} media`} />
                  </div>
                ) : null}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title={content.skills.title} subtitle={content.skills.subtitle}>
          <div className="grid">
            <Card variant="half" title="Software & languages">
              <ul className="vlist">
                {content.skills.software.map((s) => (
                  <li key={s.name}>{s.name}</li>
                ))}
              </ul>
            </Card>

            <Card variant="half" title="Robotics, automation & CAD">
              <ul className="vlist">
                {content.skills.hardware.map((s) => (
                  <li key={s.name}>{s.name}</li>
                ))}
              </ul>
              <div style={{ marginTop: "10px" }}>
                {content.skills.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Card>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title={content.projects.title} subtitle={content.projects.subtitle}>
          <div className="grid">
            {content.projects.items.map((p) => (
              <Card key={p.title} variant="half" title={p.title}>
                <p>{p.description}</p>
                <div style={{ marginTop: "6px" }}>
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* AWARDS */}
        <Section id="awards" title={content.awards.title} subtitle={content.awards.subtitle}>
          <div className="card">
            <ul className="vlist">
              {content.awards.items.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </Section>

        {/* CERTIFICATIONS */}
        <Section
          id="certifications"
          title={content.certifications.title}
          subtitle={content.certifications.subtitle}
        >
          <div className="card">
            <ul className="vlist">
              {content.certifications.items.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title={content.contact.title} subtitle={content.contact.subtitle}>
          <div className="grid">
            <Card variant="half" title="Email & location">
              <p>
                <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
              </p>
              {content.contact.location ? <p>{content.contact.location}</p> : null}
            </Card>

            <Card variant="half" title="Links">
              <ul className="vlist links-list">
                <li>
                  <a href={content.contact.github} target="_blank" rel="noreferrer">
                    <span className="icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <path
                          fill="currentColor"
                          d="M12 .5C5.65.5.7 5.44.7 11.77c0 5 3.23 9.24 7.7 10.74.56.1.76-.24.76-.54v-1.9c-3.13.68-3.8-1.5-3.8-1.5-.5-1.25-1.22-1.58-1.22-1.58-.99-.68.08-.66.08-.66 1.1.07 1.68 1.12 1.68 1.12.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.68-1.45-2.5-.29-5.12-1.25-5.12-5.57 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.45.11-3.03 0 0 .95-.3 3.11 1.15.9-.25 1.86-.37 2.82-.37.96 0 1.92.12 2.82.37 2.16-1.45 3.1-1.15 3.1-1.15.61 1.58.23 2.74.11 3.03.72.79 1.15 1.79 1.15 3.02 0 4.34-2.63 5.27-5.14 5.55.39.33.73.98.73 1.99v2.94c0 .3.2.65.76.54 4.48-1.5 7.7-5.73 7.7-10.74C23.3 5.44 18.35.5 12 .5Z"
                        />
                      </svg>
                    </span>
                    GitHub
                  </a>
                </li>

                <li>
                  <a href={content.contact.linkedin} target="_blank" rel="noreferrer">
                    <span className="icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <path
                          fill="currentColor"
                          d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.48 1 4.96 2.12 4.98 3.5zM.3 8.04h4.4V24H.3zM8.4 8.04h4.21v2.17h.06c.59-1.11 2.04-2.28 4.2-2.28 4.49 0 5.32 2.95 5.32 6.78V24h-4.4v-8.3c0-1.98-.04-4.52-2.76-4.52-2.77 0-3.19 2.17-3.19 4.38V24H8.4z"
                        />
                      </svg>
                    </span>
                    LinkedIn
                  </a>
                </li>

                <li>
                  <a href={cvHref} target="_blank" rel="noopener">
                    <span className="icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <path
                          fill="currentColor"
                          d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm6 1.5V8h4.5L12 3.5z"
                        />
                      </svg>
                    </span>
                    CV (PDF)
                  </a>
                </li>
              </ul>
            </Card>
          </div>
        </Section>
      </main>

      <footer>
        <div className="wrap">
          <div>© {new Date().getFullYear()} · Built by Jathir Rubio</div>
        </div>
      </footer>
    </div>
  )
}
