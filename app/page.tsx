import Link from "next/link";
import {
  certifications,
  education,
  experiences,
  profile,
  stack
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <main className="page-wrap">
      <section className="hero card">
        <div>
          <p className="kicker">Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="summary">{profile.summary}</p>
          <div className="actions">
            <a href={profile.resumeFile} target="_blank" rel="noreferrer">
              View Resume PDF
            </a>
            <Link href="/blog">Project Blogs</Link>
            <Link href="/case-studies/anpr-system">ANPR Case Study</Link>
          </div>
        </div>
        <div className="contact-box">
          <p>{profile.location}</p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>{profile.phone}</a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>

      <section className="card">
        <h2>Technical Stack</h2>
        <div className="stack-grid">
          {stack.map((group) => (
            <article key={group.category}>
              <h3>{group.category}</h3>
              <p>{group.items.join(" | ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Experience & Projects</h2>
        <div className="timeline">
          {experiences.map((experience) => (
            <article key={experience.title + experience.company} className="job">
              <h3>{experience.title}</h3>
              <p className="muted">
                {experience.company} | {experience.duration}
              </p>
              {experience.projects.map((project) => (
                <div key={project.name} className="project">
                  <h4>{project.name}</h4>
                  <p className="muted">{project.stack.join(" | ")}</p>
                  <ul>
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="card split">
        <div>
          <h2>Education</h2>
          {education.map((record) => (
            <article key={record.program + record.school} className="edu-item">
              <h3>{record.program}</h3>
              <p>{record.school}</p>
              {record.duration ? <p className="muted">{record.duration}</p> : null}
              <p className="score">{record.score}</p>
            </article>
          ))}
        </div>

        <div>
          <h2>Certifications</h2>
          <ul>
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
