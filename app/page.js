const services = [
  "Web Design",
  "Web Development",
  "AI Automation",
  "Business Systems",
];

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="navbar">
        <a href="#" className="logo">
          MH<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-cta">
          Start a Project
        </a>
      </nav>

      <section className="hero">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        <div className="hero-grid" />

        <div className="hero-content">
          <p className="eyebrow">
            <span className="status-dot" />
            DIGITAL CREATIVE & AI AUTOMATION
          </p>

          <h1>
            WE BUILD
            <br />
            <span>EXPERIENCES</span>
            <br />
            THAT MOVE.
          </h1>

          <p className="hero-description">
            Premium websites, digital experiences and intelligent automation
            systems designed to make modern brands impossible to ignore.
          </p>

          <div className="hero-actions">
            <a href="#work" className="primary-button">
              Explore My Work <span>↗</span>
            </a>

            <a href="#contact" className="secondary-button">
              Start a Project
            </a>
          </div>
        </div>

        <div className="hero-orbit">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit-core">
            <span>AI</span>
          </div>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line" />
          <span>01 — 06</span>
        </div>
      </section>

      <section id="about" className="intro-section">
        <p className="section-label">01 / ABOUT</p>

        <h2>
          I DESIGN DIGITAL
          <br />
          <span>EXPERIENCES</span> WITH PURPOSE.
        </h2>

        <p className="large-text">
          I combine design, development and AI automation to create digital
          products that look premium, feel fast and actually solve problems.
        </p>
      </section>

      <section id="services" className="services-section">
        <p className="section-label">02 / SERVICES</p>

        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service}>
              <span>0{index + 1}</span>
              <h3>{service}</h3>
              <p>
                Strategy, design and technology combined into a focused digital
                experience.
              </p>
              <div className="card-arrow">↗</div>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="work-section">
        <p className="section-label">03 / SELECTED WORK</p>

        <div className="work-heading">
          <h2>SELECTED<br /><span>PROJECTS.</span></h2>
          <p>Digital experiences built for the modern web.</p>
        </div>

        <div className="project-card">
          <div className="project-number">01</div>
          <div>
            <p className="project-type">E-COMMERCE / SHOPIFY</p>
            <h3>VELORA</h3>
            <p className="project-copy">
              A premium fashion and accessories experience with a cinematic
              visual direction.
            </p>
          </div>
          <span className="project-arrow">↗</span>
        </div>

        <div className="project-card">
          <div className="project-number">02</div>
          <div>
            <p className="project-type">AI / AUTOMATION</p>
            <h3>SMART SYSTEM</h3>
            <p className="project-copy">
              Automated workflows connecting websites, data and intelligent AI
              systems.
            </p>
          </div>
          <span className="project-arrow">↗</span>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <p className="section-label">04 / CONTACT</p>

        <h2>
          HAVE AN IDEA?
          <br />
          <span>LET&apos;S BUILD IT.</span>
        </h2>

        <a href="mailto:hello@example.com" className="contact-button">
          Get In Touch ↗
        </a>
      </section>

      <footer className="footer">
        <span>MH. / PREMIUM DIGITAL</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
