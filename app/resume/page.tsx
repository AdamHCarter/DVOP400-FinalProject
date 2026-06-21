import { educationHistory, skillGroups, site, workHistory } from "@/content/site";

export default function ResumePage() {
  return (
    <div className="container">
      <section className="page-section resume-grid">
        <div className="resume-callout">
          <span className="section-eyebrow">Resume</span>
          <h2>{site.name}</h2>
          <p>{site.title}</p>
          <p>
            Based in IT, support, and front-end development, with a focus on dependable delivery,
            current technologies, and cloud-aware systems.
          </p>
        </div>

        <div className="resume-split">
          <div>
            <div className="section-heading">
              <span className="section-eyebrow">Work history</span>
              <h2>Experience</h2>
            </div>

            <div className="timeline-list">
              {workHistory.map((job) => (
                <article key={job.company} className="timeline-card">
                  <div className="timeline-top">
                    <div>
                      <h3>{job.role}</h3>
                      <p>{job.company}</p>
                    </div>
                    <span className="timeline-meta">{job.period}</span>
                  </div>
                  <p>{job.summary}</p>
                  <ul className="timeline-list">
                    {job.achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="section-heading">
              <span className="section-eyebrow">Schooling</span>
              <h2>Education</h2>
            </div>

            <div className="timeline-list">
              {educationHistory.map((school) => (
                <article key={school.degree} className="timeline-card">
                  <div className="timeline-top">
                    <div>
                      <h3>{school.degree}</h3>
                      <p>{school.school}</p>
                    </div>
                    <span className="timeline-meta">{school.status}</span>
                  </div>
                  <p>{school.details}</p>
                </article>
              ))}
            </div>

            <div className="page-section">
              <div className="section-heading">
                <span className="section-eyebrow">Skills</span>
                <h2>Core strengths</h2>
              </div>

              <div className="skills-grid">
                {skillGroups.map((group) => (
                  <article key={group.title} className="skill-card">
                    <h3>{group.title}</h3>
                    <div className="skill-pills">
                      {group.skills.map((skill) => (
                        <span key={skill} className="skill-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
