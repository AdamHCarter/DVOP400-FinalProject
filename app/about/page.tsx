import { aboutFacts, site } from "@/content/site";

export default function AboutPage() {
  return (
    <div className="container">
      <section className="page-section about-grid">
        <div className="about-image-card">
          <img
            className="portrait"
            src="/media/adam-bw.jpg"
            alt="Adam Carter portrait"
          />
          <div className="note-panel">
            <span className="section-eyebrow">About me</span>
            <h3>{site.name}</h3>
            <p>
              DevOps Engineer / Full-Stack Developer who likes useful tools, strong systems, and
              clean design.
            </p>
          </div>
        </div>

        <div className="note-panel">
          <div className="section-heading">
            <span className="section-eyebrow">About Me</span>
            <h2>IT, customer service, and development all shaped how I work.</h2>
            <p>
              I have spent most of my years moving across different fields like IT and customer
              service, and that mix taught me how to keep people and systems moving in the same
              direction.
            </p>
          </div>

          <ul className="note-list">
            {aboutFacts.map((fact) => (
              <li key={fact.label}>
                <strong>{fact.label}</strong>
                <span>{fact.value}</span>
                <p>{fact.note}</p>
              </li>
            ))}
          </ul>

          <div className="resume-callout" style={{ marginTop: "1rem" }}>
            <h3>What drives me</h3>
            <p>
              I enjoy containers, I like the cloud because it is secure and scalable, and I prefer
              building systems that are easy to support in the real world.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <span className="section-eyebrow">Working style</span>
          <h2>Practical, responsive, and easy to collaborate with.</h2>
          <p>
            My background across support, hospitality, and development made me comfortable with
            changing requirements and with building solutions that still feel human.
          </p>
        </div>

        <div className="card-grid">
          <article className="card">
            <h3>Modern technologies</h3>
            <p>
              The degrees I am taking are modern and based on current technologies used in the
              field, which helps me stay close to what employers need.
            </p>
          </article>
          <article className="card">
            <h3>Homelab experience</h3>
            <p>
              I self-host a few key apps for development in my homelab and use a mix of Docker,
              Podman, and LXC to keep those environments organized.
            </p>
          </article>
          <article className="card">
            <h3>Systems thinking</h3>
            <p>
              I tend to think in terms of reliability, clarity, and maintainability instead of just
              shipping code quickly.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
