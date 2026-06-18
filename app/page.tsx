import Link from "next/link";

import { homeHighlights, site } from "@/content/site";

export default function HomePage() {
  return (
    <div className="container">
      <section className="hero page-section">
        <div className="hero-grid">
          <div className="hero-panel">
            <span className="hero-eyebrow">Personal website for {site.name}</span>
            <h1 className="hero-title">Building modern systems with a calm, practical mindset.</h1>
            <p className="hero-copy">
              I am a DevOps Engineer and Full-Stack Developer who likes clean interfaces,
              dependable delivery, and technology that scales without losing sight of the people
              using it.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/about">
                Learn more about me
              </Link>
              <a className="button button-secondary" href={`mailto:${site.email}`}>
                Email me
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <span>Current direction</span>
                <strong>DevOps engineering, front-end polish, and cloud-friendly delivery</strong>
              </div>
              <div className="stat-card">
                <span>What I value</span>
                <strong>Secure, available, scalable systems that feel easy to use</strong>
              </div>
              <div className="stat-card">
                <span>Outside work</span>
                <strong>Self-hosting homelab services with Docker, Podman, and LXC</strong>
              </div>
            </div>
          </div>

          <div className="hero-aside">
            <div className="card">
              <span className="section-eyebrow">Quick snapshot</span>
              <h3>What this site covers</h3>
              <p>
                A simple home page, an about page with a portrait, and a resume page that brings
                work history and schooling together in one place.
              </p>
            </div>
            <div className="card-grid">
              {homeHighlights.map((item) => (
                <article key={item.title} className="card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <span className="section-eyebrow">Why this draft works</span>
          <h2>Clear structure, fast navigation, and room to grow.</h2>
          <p>
            The first draft leans into readability and strong sections so it can be used as a
            portfolio, resume landing page, or a starting point for future projects.
          </p>
        </div>

        <div className="card-grid">
          <article className="card">
            <h3>Focused content</h3>
            <p>
              Each page has one job: introduce the site, tell your story, or summarize your resume
              experience.
            </p>
          </article>
          <article className="card">
            <h3>Static export ready</h3>
            <p>
              The app is configured for a front-end-only static build so it can be deployed without
              a server.
            </p>
          </article>
          <article className="card">
            <h3>Easy to update</h3>
            <p>
              Most personal details live in one shared content file, so you can revise copy in one
              place as your experience changes.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
