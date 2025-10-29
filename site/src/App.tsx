export default function App() {
  return (
    <div>
      <header className="nav" aria-label="Navegación principal">
        <div className="wrap nav-inner">
          <div className="brand">Jathir Rubio</div>
          <nav>
            <ul>
              <li><a href="#about">about</a></li>
              <li><a href="#skills">skills</a></li>
              <li><a href="#projects">projects</a></li>
              <li><a href="#experience">experiencia</a></li>
              <li><a href="#education">educación</a></li>
              <li><a href="./cv.pdf" target="_blank" rel="noopener">cv</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="wrap">
        {/* HERO */}
        <section className="hero" id="home">
          <span className="pill">bienvenido</span>
          <h1>Pequeño rincón en internet para mis proyectos de mecatrónica, software y notas.</h1>
          <p>Ingeniero en Mecatrónica. Trabajo con Python, C/C++, React, control de motores, visión por computadora y reconstrucción 3D con drones.</p>
          <div className="hero-cta">
            <a className="btn primary" href="#projects">Ver proyectos</a>
            <a className="btn" href="#about">Sobre mí</a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <h2>About</h2>
          <p className="sub">Breve presentación + enlaces destacados.</p>
          <div className="grid">
            <article className="card half">
              <h3>¿Quién soy?</h3>
              <p>Soy Jathir Rubio. Me apasionan la ingeniería, el desarrollo de software, la IA y la visualización científica.</p>
            </article>
            <article className="card half">
              <h3>Especialidades</h3>
              <ul className="list">
                <li>Python, MATLAB, C/C++</li>
                <li>React + TypeScript</li>
                <li>Control (Dahlin, Deadbeat)</li>
                <li>CAD &amp; 3D (Blender, Meshroom)</li>
              </ul>
            </article>
          </div>
        </section>

        {/* SKILLS (placeholder) */}
        <section id="skills" className="section">
          <h2>Skills</h2>
          <p className="sub">Mapa rápido de competencias técnicas.</p>
          <div className="grid">
            <article className="card half"><h3>Software</h3><p>Python, C/C++, MATLAB, React/TS…</p></article>
            <article className="card half"><h3>Hardware</h3><p>STM32, L298N, encoders, DJI…</p></article>
          </div>
        </section>

        {/* PROJECTS (placeholder) */}
        <section id="projects" className="section">
          <h2>Projects</h2>
          <p className="sub">Algunos trabajos y experimentos recientes.</p>
          <div className="grid">
            <article className="card half">
              <h3>Volumetría con drones</h3>
              <p>Reconstrucción 3D con SAM, COLMAP/Meshroom y cálculo de volumen.</p>
            </article>
            <article className="card half">
              <h3>Control de motor con Dahlin</h3>
              <p>Identificación PRBS y controlador discreto; telemetría HC-06 y análisis MATLAB.</p>
            </article>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION (placeholder) */}
        <section id="experience" className="section">
          <h2>Experiencia</h2>
          <div className="card"><p>Timeline breve de roles/proyectos con logros.</p></div>
        </section>

        <section id="education" className="section">
          <h2>Educación</h2>
          <div className="card"><p>Tec de Monterrey — Ing. Mecatrónica (en curso).</p></div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div>© {new Date().getFullYear()} · Hecho con ❤ por Jathir Rubio</div>
        </div>
      </footer>
    </div>
  )
}
