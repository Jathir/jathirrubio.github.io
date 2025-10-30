// src/components/Hero.tsx
import { content } from "../content"

export function Hero() {
  const { title, subtitle, ctaPrimary, ctaSecondary } = content.hero

  return (
    <section className="hero" id="home">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div className="hero-cta">
        <a className="btn primary" href={ctaPrimary.href}>
          {ctaPrimary.label}
        </a>
        <a className="btn" href={ctaSecondary.href}>
          {ctaSecondary.label}
        </a>
      </div>
    </section>
  )
}
