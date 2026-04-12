import Link from "next/link";

export const metadata = {
  title: "ANPR Case Study | Prashant Yadav",
  description:
    "Case study of a multi-stream ANPR pipeline built with NVIDIA DeepStream, RabbitMQ, and Golang on Jetson Nano."
};

const architecture = [
  "Input streams from roadside cameras were ingested into DeepStream on Jetson Nano.",
  "PGIE model detected license plates and SGIE model recognized plate text.",
  "DeepStream metadata was emitted through nvmsgbroker into RabbitMQ.",
  "A Golang post-processing service validated plates, extracted state codes, and calculated confidence.",
  "Processed events were pushed to downstream toll services through Fastag API integration."
];

const challenges = [
  {
    title: "Edge performance constraints",
    detail:
      "Jetson Nano resources were limited for multi-stream inference, so I tuned model pipeline settings and batching strategy for stable throughput."
  },
  {
    title: "Noisy real-world frames",
    detail:
      "Motion blur, occlusion, and lighting variation produced uncertain reads. I added confidence-aware post-processing to reject unreliable plate outputs."
  },
  {
    title: "Reliable handoff to business systems",
    detail:
      "Toll processing required dependable messaging. RabbitMQ routing and retry strategy ensured events were delivered with minimal loss."
  }
];

const outcomes = [
  "Enabled real-time multi-stream plate detection and recognition on edge hardware.",
  "Automated toll transaction flow with Fastag API integration.",
  "Reduced manual intervention by around 80%.",
  "Improved monitoring quality by exposing confidence and frequency metrics for every plate event."
];

export default function AnprCaseStudyPage() {
  return (
    <main className="page-wrap">
      <article className="card post">
        <p className="kicker">Case Study</p>
        <h1>Multi-Stream ANPR with DeepStream on Jetson Nano</h1>
        <p className="summary">
          This project delivered real-time automatic number plate recognition (ANPR) for toll automation by combining NVIDIA DeepStream inference, resilient messaging, and domain-specific post-processing.
        </p>

        <section>
          <h2>Project Context</h2>
          <p>
            The goal was to build a production-ready ANPR system that could process multiple camera feeds, recognize license plates accurately, and trigger downstream payment workflows without manual operators.
          </p>
        </section>

        <section>
          <h2>Architecture</h2>
          <ol>
            {architecture.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2>Engineering Challenges & Solutions</h2>
          {challenges.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </section>

        <section>
          <h2>Results</h2>
          <ul>
            {outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Key Technologies</h2>
          <p>
            NVIDIA DeepStream, PGIE/SGIE models, Jetson Nano, RabbitMQ, Golang, Docker, Fastag API
          </p>
        </section>
      </article>

      <section className="card">
        <Link href="/blog/deepstream-anpr-multistream">Read the ANPR blog post</Link>
        <br />
        <Link href="/">Back to portfolio</Link>
      </section>
    </main>
  );
}
