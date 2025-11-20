// src/components/Tag.tsx
/**
 * Tag renders a pill-style label for skills or project metadata.
 */
export function Tag({ children }: { children: string }) {
  return <span className="tag">{children}</span>
}
