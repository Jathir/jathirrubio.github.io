// src/components/ImageCarousel.tsx
import { useState } from "react"

type ImageCarouselProps = {
  images: string[]
  alt?: string
  className?: string
}

function resolveSrc(p: string) {
  if (/^https?:\/\//i.test(p)) return p
  const base = (import.meta as any).env?.BASE_URL ?? "/"
  if (p.startsWith(base)) return p
  const cleaned = p.startsWith("/") ? p.slice(1) : p
  return `${base}${cleaned}`
}

export function ImageCarousel({ images, alt = "", className }: ImageCarouselProps) {
  const [index, setIndex] = useState(0)

  if (!images || images.length === 0) return null

  const goPrev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const goNext = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  const cls = className ? `carousel ${className}` : "carousel"
  return (
    <div className={cls} role="group" aria-label="image carousel">
      <img src={resolveSrc(images[index])} alt={alt} />
      {images.length > 1 ? (
        <div className="carousel-nav">
          <button className="carousel-btn" aria-label="Previous image" onClick={goPrev}>
            <span aria-hidden="true">‹</span>
          </button>
          <button className="carousel-btn" aria-label="Next image" onClick={goNext}>
            <span aria-hidden="true">›</span>
          </button>
        </div>
      ) : null}
    </div>
  )
}
