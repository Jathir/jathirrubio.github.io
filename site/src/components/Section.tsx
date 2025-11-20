// src/components/Section.tsx
import type { ReactNode } from "react"

type SectionProps = {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
}

/**
 * Section wraps each major resume area with consistent spacing and anchors
 * so the navbar can link to them.
 */
export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {subtitle ? <p className="sub">{subtitle}</p> : null}
      {children}
    </section>
  )
}
