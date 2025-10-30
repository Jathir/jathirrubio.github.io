// src/components/Navbar.tsx
type NavItem = { label: string; href: string }

const NAV_ITEMS: NavItem[] = [
  { label: "about", href: "#about" },
  { label: "education", href: "#education" },
  { label: "experience", href: "#experience" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "awards", href: "#awards" },
  { label: "certifications", href: "#certifications" },
  { label: "contact", href: "#contact" },
]

export function Navbar() {
  return (
    <header className="nav" aria-label="Main navigation">
      <div className="wrap nav-inner">
        <div className="brand">Jathir Rubio</div>
        <nav>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label.toLowerCase()}</a>
              </li>
            ))}
            <li>
              <a href="./cv.pdf" target="_blank" rel="noopener">
                cv
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
