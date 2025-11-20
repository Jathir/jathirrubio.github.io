// src/components/Timeline.tsx
type TimelineItem = {
  role: string
  place: string
  period: string
  description: string
}

/**
 * Timeline lists chronological achievements inside a card, useful for compact
 * histories such as awards or condensed experience.
 */
export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="card">
      <div className="timeline">
        {items.map((item) => (
          <div className="tl-item" key={item.role + item.period}>
            <h4>{item.role}</h4>
            <div className="when">
              {item.place} · {item.period}
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
