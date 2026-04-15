import Link from "next/link";
import {
  certifications,
  education,
  experiences,
  featuredProjects,
  heroHighlights,
  navItems,
  profile,
  services,
  stack
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none absolute -left-28 top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -right-28 top-80 h-80 w-80 rounded-full bg-secondary/20 blur-3xl animate-pulse-soft" />

      <header className="sticky top-0 z-20 border-b border-border/80 bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex w-[min(1150px,calc(100%-1.5rem))] items-center justify-between py-4">
          <p className="font-heading text-sm uppercase tracking-[0.22em] text-primary">
            Prashant Yadav
          </p>
          <nav className="hidden items-center gap-5 text-sm text-muted lg:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="transition hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={profile.resumeFile}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-primary/20"
          >
            Resume
          </a>
        </div>
      </header>

      <main className="mx-auto grid w-[min(1150px,calc(100%-1.5rem))] gap-14 py-10 md:gap-20 md:py-16">
        <section className="grid gap-8 md:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-6">
            <p className="animate-fade-up font-heading text-xs uppercase tracking-[0.26em] text-primary">
              AI / ML Engineer Portfolio
            </p>
            <h1 className="animate-fade-up animate-delay-100 font-heading text-4xl leading-tight md:text-6xl">
              Building practical AI systems that ship and scale.
            </h1>
            <p className="animate-fade-up animate-delay-200 max-w-2xl text-base text-muted md:text-lg">
              {profile.summary}
            </p>
            <div className="animate-fade-up animate-delay-300 flex flex-wrap gap-3">
              <a
                href={profile.resumeFile}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary/50 bg-primary px-5 py-2.5 text-sm font-semibold text-bg transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                View Resume
              </a>
              <Link
                href="/blog"
                className="rounded-full border border-border bg-panel px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-primary/50"
              >
                Read Project Blogs
              </Link>
              <Link
                href="/case-studies/anpr-system"
                className="rounded-full border border-border bg-panel px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-primary/50"
              >
                ANPR Case Study
              </Link>
            </div>
            <div className="animate-fade-up animate-delay-400 grid gap-3 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <article
                  key={item}
                  className="rounded-2xl border border-border bg-panel/80 px-4 py-3 text-sm text-muted transition hover:-translate-y-1 hover:border-primary/45"
                >
                  {item}
                </article>
              ))}
            </div>
          </div>

          <aside className="animate-fade-up animate-delay-300 rounded-3xl border border-border bg-panel/85 p-6 shadow-glow">
            <h2 className="font-heading text-xl">Contact</h2>
            <div className="mt-4 grid gap-3 text-sm text-muted">
              <p>{profile.location}</p>
              <a href={`mailto:${profile.email}`} className="transition hover:text-ink">
                {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="transition hover:text-ink">
                {profile.phone}
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-ink">
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-ink"
              >
                LinkedIn
              </a>
            </div>
          </aside>
        </section>

        <section id="about" className="grid gap-7 md:grid-cols-[0.9fr_1.1fr]">
          <div className="animate-fade-up rounded-3xl border border-border bg-panel p-6 md:p-8">
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-primary">About</p>
            <h2 className="mt-3 font-heading text-3xl">AI Engineer focused on production outcomes.</h2>
            <p className="mt-4 text-sm text-muted md:text-base">
              I work at the intersection of LLM applications, computer vision systems, and backend reliability. My
              approach is pragmatic: measure impact, ship robust pipelines, and keep models observable once they are in
              the real world.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stack.map((group, index) => (
              <article
                key={group.category}
                className={`animate-fade-up rounded-3xl border border-border bg-panel/75 p-5 transition hover:-translate-y-1 hover:border-primary/45 ${
                  index % 2 === 0 ? "animate-delay-100" : "animate-delay-200"
                }`}
              >
                <h3 className="font-heading text-lg">{group.category}</h3>
                <p className="mt-2 text-sm text-muted">{group.items.join(" • ")}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-6">
          <div className="animate-fade-up space-y-2">
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-primary">Experience</p>
            <h2 className="font-heading text-3xl">Roles and impact across AI products</h2>
          </div>

          <div className="grid gap-4">
            {experiences.map((experience, index) => (
              <article
                key={`${experience.company}-${experience.title}`}
                className={`animate-fade-up rounded-3xl border border-border bg-panel p-6 transition hover:border-primary/45 ${
                  index % 2 === 0 ? "animate-delay-100" : "animate-delay-200"
                }`}
              >
                <h3 className="font-heading text-2xl">{experience.title}</h3>
                <p className="mt-1 text-sm text-muted">
                  {experience.company} | {experience.duration}
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {experience.projects.map((project) => (
                    <div key={project.name} className="rounded-2xl border border-border/80 bg-bg/35 p-4">
                      <h4 className="font-heading text-lg">{project.name}</h4>
                      <p className="mt-2 text-xs uppercase tracking-[0.12em] text-primary/85">
                        {project.stack.join(" • ")}
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-muted">
                        {project.highlights.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="grid gap-6 md:grid-cols-[1fr_1fr]">
          <div className="animate-fade-up rounded-3xl border border-border bg-panel p-6">
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-primary">Certifications</p>
            <h2 className="mt-2 font-heading text-3xl">Continuous upskilling</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {certifications.map((cert) => (
                <li key={cert} className="rounded-xl border border-border/80 bg-bg/30 px-4 py-3">
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          <div id="education" className="animate-fade-up animate-delay-100 rounded-3xl border border-border bg-panel p-6">
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-primary">Education</p>
            <h2 className="mt-2 font-heading text-3xl">Academic foundation</h2>
            <div className="mt-4 space-y-3">
              {education.map((record) => (
                <article key={`${record.program}-${record.school}`} className="rounded-xl border border-border/80 bg-bg/30 px-4 py-3">
                  <h3 className="font-heading text-base">{record.program}</h3>
                  <p className="text-sm text-muted">{record.school}</p>
                  {record.duration ? <p className="text-xs text-muted">{record.duration}</p> : null}
                  <p className="mt-1 text-sm font-semibold text-primary">{record.score}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="space-y-6">
          <div className="animate-fade-up space-y-2">
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-primary">Projects</p>
            <h2 className="font-heading text-3xl">Selected engineering work</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <article
                key={project.title}
                className={`animate-fade-up rounded-3xl border border-border bg-panel p-6 transition hover:-translate-y-1 hover:border-primary/55 ${
                  index % 2 === 0 ? "animate-delay-100" : "animate-delay-200"
                }`}
              >
                <h3 className="font-heading text-2xl">{project.title}</h3>
                <p className="mt-2 text-sm text-muted">{project.description}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.12em] text-primary/85">
                  {project.tech.join(" • ")}
                </p>
                <Link
                  href={project.href}
                  className="mt-5 inline-flex rounded-full border border-primary/45 px-4 py-2 text-sm font-semibold transition hover:bg-primary hover:text-bg"
                >
                  Explore
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="space-y-6">
          <div className="animate-fade-up space-y-2">
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-primary">Services</p>
            <h2 className="font-heading text-3xl">What I can help build</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`animate-fade-up rounded-3xl border border-border bg-panel p-6 transition hover:border-primary/55 ${
                  index % 2 === 0 ? "animate-delay-100" : "animate-delay-200"
                }`}
              >
                <h3 className="font-heading text-2xl">{service.title}</h3>
                <p className="mt-2 text-sm text-muted">{service.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="animate-fade-up rounded-3xl border border-primary/40 bg-panel p-8 shadow-glow">
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-primary">Contact</p>
          <h2 className="mt-2 font-heading text-3xl">Let&apos;s build your next AI product.</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted md:text-base">
            I&apos;m open to AI/ML engineering roles and project collaborations where reliability, measurable business
            impact, and shipping speed all matter.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-primary/45 bg-primary px-5 py-2.5 text-sm font-semibold text-bg transition hover:-translate-y-0.5"
            >
              Email Me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border bg-bg/30 px-5 py-2.5 text-sm font-semibold transition hover:border-primary/45"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border bg-bg/30 px-5 py-2.5 text-sm font-semibold transition hover:border-primary/45"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
