// src/components/Card.tsx
import type { ReactNode } from "react"

type CardProps = {
  title?: string
  variant?: "full" | "half"
  children: ReactNode
}

/**
 * Card provides consistent visual framing for content blocks and can shrink
 * to half-width when used inside CSS grids.
 */
export function Card({ title, variant = "full", children }: CardProps) {
  const cls = variant === "half" ? "card half" : "card"
  return (
    <article className={cls}>
      {title ? <h3>{title}</h3> : null}
      {children}
    </article>
  )
}
