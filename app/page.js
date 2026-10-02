const services = [
  {
    number: "01",
    title: "WEB DESIGN",
    text: "Premium interfaces and digital experiences built around strong visual identity.",
  },
  {
    number: "02",
    title: "WEB DEVELOPMENT",
    text: "Fast, responsive and modern websites built for real-world performance.",
  },
  {
    number: "03",
    title: "AI AUTOMATION",
    text: "Intelligent workflows that connect websites, data, tools and AI.",
  },
  {
    number: "04",
    title: "BUSINESS SYSTEMS",
    text: "Digital systems designed to reduce repetitive work and improve workflows.",
  },
];

const projects = [
  {
    number: "01",
    category: "E-COMMERCE / SHOPIFY",
    title: "VELORA",
    text: "A premium fashion and accessories experience.",
  },
  {
    number: "02",
    category: "WEB / WORDPRESS",
    title: "NEXORA",
    text: "A cinematic digital experience built around modern visual storytelling.",
  },
  {
    number: "03",
    category: "AI / AUTOMATION",
    title: "SMART FLOW",
    text: "An intelligent workflow connecting websites, data and AI systems.",
  },
];

export default function Home() {
  return (
    <main className="site">

      {/* NAVIGATION */}

      <nav className="navbar">
        <a href="#" className="logo">
          AH<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-cta">
          Let&apos;s Talk ↗
        </a>
      </nav>


      {/* HERO */}

      <section className="hero">

        <div className="hero-noise" />
        <div className="hero-grid" />

        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-content">

          <div className="hero-status">
            <span />
            AVAILABLE FOR PROJECTS
          </div>

          <p className="hero-small">
            AHMED HANY / DIGITAL CREATIVE
          </p>

          <h1>
            I BUILD
            <br />
            <span>DIGITAL</span>
            <br />
            EXPERIENCES.
          </h1>

          <p className="hero-description">
            Web Designer, Developer and AI Automation creator focused on
            building premium digital experiences that combine design,
            technology and intelligent systems.
          </p>

          <div className="hero-buttons">

            <a href="#work" className="hero-button primary">
              Explore My Work
              <span>↗</span>
            </a>

            <a href="#contact" className="hero-button secondary">
              Start a Project
            </a>

          </div>

        </div>


        {/* HERO VISUAL */}

        <div className="hero-visual">

          <div className="visual-orbit orbit-a" />
          <div className="visual-orbit orbit-b" />
          <div className="visual-orbit orbit-c" />

          <div className="visual-core">

            <div className="core-inner">
              AH
            </div>

          </div>

          <div className="floating-card card-one">
            <span>01</span>
            <strong>DESIGN</strong>
          </div>

          <div className="floating-card card-two">
            <span>02</span>
            <strong>CODE</strong>
          </div>

          <div className="floating-card card-three">
            <span>03</span>
            <strong>AI</strong>
          </div>

        </div>


        <div className="hero-bottom">

          <span>SCROLL TO EXPLORE</span>

          <div className="scroll-line">
            <span />
          </div>

          <span>2026</span>

        </div>

      </section>


      {/* ABOUT */}

      <section id="about" className="about section">

        <div className="section-top">
          <span>01 / ABOUT</span>
          <span>AHMED HANY</span>
        </div>

        <div className="about-layout">

          <h2>
            DESIGNING
            <br />
            <span>WHAT&apos;S NEXT.</span>
          </h2>

          <div className="about-copy">

            <p className="about-intro">
              I&apos;m Ahmed Hany — a digital creator focused on web design,
              development and AI-powered automation.
            </p>

            <p>
              I combine visual design with modern web technologies to create
              websites and systems that are not only visually strong, but also
              functional and useful.
            </p>

            <div className="about-signature">
              AH<span>.</span>
            </div>

          </div>

        </div>

      </section>


      {/* SERVICES */}

      <section id="services" className="services section">

        <div className="section-top">
          <span>02 / SERVICES</span>
          <span>WHAT I DO</span>
        </div>

        <div className="services-header">

          <h2>
            FROM IDEA
            <br />
            <span>TO DIGITAL.</span>
          </h2>

          <p>
            Strategy, design, development and automation brought together
            into one digital experience.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service) => (
            <article className="service-card" key={service.number}>

              <div className="service-number">
                {service.number}
              </div>

              <div className="service-content">

                <h3>{service.title}</h3>

                <p>{service.text}</p>

              </div>

              <div className="service-arrow">
                ↗
              </div>

            </article>
          ))}

        </div>

      </section>


      {/* WORK */}

      <section id="work" className="work section">

        <div className="section-top">
          <span>03 / SELECTED WORK</span>
          <span>PROJECTS</span>
        </div>

        <div className="work-heading">

          <h2>
            SELECTED
            <br />
            <span>PROJECTS.</span>
          </h2>

          <p>
            A selection of digital experiences, websites and intelligent
            systems.
          </p>

        </div>

        <div className="projects">

          {projects.map((project) => (
            <article className="project" key={project.number}>

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-info">

                <span>{project.category}</span>

                <h3>{project.title}</h3>

                <p>{project.text}</p>

              </div>

              <div className="project-action">
                VIEW
                <span>↗</span>
              </div>

            </article>
          ))}

        </div>

      </section>


      {/* AI AUTOMATION */}

      <section className="automation section">

        <div className="section-top">
          <span>04 / AI AUTOMATION</span>
          <span>INTELLIGENT SYSTEMS</span>
        </div>

        <div className="automation-layout">

          <div>

            <h2>
              MAKE
              <br />
              <span>WORK SMARTER.</span>
            </h2>

            <p>
              I build automation systems that connect websites, forms,
              databases, email and AI into intelligent workflows.
            </p>

          </div>

          <div className="workflow">

            <div className="workflow-node">
              WEBSITE
            </div>

            <div className="workflow-line" />

            <div className="workflow-node">
              AUTOMATION
            </div>

            <div className="workflow-line" />

            <div className="workflow-node active">
              AI
            </div>

            <div className="workflow-line" />

            <div className="workflow-node">
              ACTION
            </div>

          </div>

        </div>

      </section>


      {/* PROCESS */}

      <section className="process section">

        <div className="section-top">
          <span>05 / PROCESS</span>
          <span>HOW I WORK</span>
        </div>

        <div className="process-grid">

          <div>
            <span>01</span>
            <h3>DISCOVER</h3>
            <p>Understand the idea, goals and audience.</p>
          </div>

          <div>
            <span>02</span>
            <h3>DESIGN</h3>
            <p>Create the visual direction and experience.</p>
          </div>

          <div>
            <span>03</span>
            <h3>BUILD</h3>
            <p>Turn the concept into a real digital product.</p>
          </div>

          <div>
            <span>04</span>
            <h3>AUTOMATE</h3>
            <p>Connect systems and intelligent workflows.</p>
          </div>

        </div>

      </section>


      {/* CONTACT */}

      <section id="contact" className="contact section">

        <div className="contact-glow" />

        <span className="contact-label">
          06 / CONTACT
        </span>

        <h2>
          HAVE AN
          <br />
          <span>IDEA?</span>
        </h2>

        <p>
          Let&apos;s turn it into something people remember.
        </p>

        <a
          href="mailto:hello@example.com"
          className="contact-button"
        >
          Start a Conversation ↗
        </a>

      </section>


      {/* FOOTER */}

      <footer className="footer">

        <div>
          <strong>AHMED HANY<span>.</span></strong>
          <p>WEB / AI / DIGITAL</p>
        </div>

        <div>
          <p>© 2026 AHMED HANY</p>
          <p>BUILT FOR THE FUTURE.</p>
        </div>

      </footer>

    </main>
  );
}
