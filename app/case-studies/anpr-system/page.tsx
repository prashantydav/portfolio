import Link from "next/link";

export const metadata = {
  title: "ANPR Case Study | Prashant Yadav",
  description:
    "Case study of a multi-stream ANPR pipeline built with DeepStream, RabbitMQ, and Golang for toll automation."
};

const architecture = [
  "Camera streams are ingested into a DeepStream pipeline running on Jetson Nano edge nodes.",
  "PGIE detects number plates and SGIE extracts plate text from localized regions.",
  "Structured metadata is pushed via nvmsgbroker into RabbitMQ for reliable transport.",
  "A Golang service validates, normalizes, and enriches each detection event with confidence context.",
  "Final outputs are routed into Fastag-connected services to automate toll workflows."
];

const challenges = [
  {
    title: "Edge resource constraints",
    detail:
      "I tuned batch settings and inference scheduling to preserve throughput while staying within Jetson Nano limits."
  },
  {
    title: "Quality variance in raw frames",
    detail:
      "Lighting shifts, motion blur, and occlusion were mitigated through confidence thresholds and post-processing logic."
  },
  {
    title: "Operational reliability",
    detail:
      "RabbitMQ retries and durable queues ensured that downstream systems received events even under unstable conditions."
  }
];

const outcomes = [
  "Delivered real-time plate recognition across multiple live streams.",
  "Integrated with payment workflows to reduce manual operator dependency.",
  "Improved event observability with confidence-level metrics."
];

export default function AnprCaseStudyPage() {
  return (
    <main className="mx-auto grid w-[min(920px,calc(100%-1.5rem))] gap-8 py-10 md:py-14">
      <article className="space-y-8 rounded-3xl border border-border bg-panel p-7 md:p-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Case Study</p>
          <h1 className="mt-3 font-heading text-4xl leading-tight">Multi-Stream ANPR with DeepStream on Jetson Nano</h1>
          <p className="mt-3 text-sm text-muted md:text-base">
            This solution combined edge inference, resilient messaging, and API integration to support live toll
            automation workflows in the field.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl">Architecture</h2>
          <ol className="space-y-2 text-sm text-muted md:text-base">
            {architecture.map((step) => (
              <li key={step} className="rounded-xl border border-border/80 bg-bg/30 px-4 py-3">
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl">Engineering Challenges</h2>
          <div className="space-y-3">
            {challenges.map((item) => (
              <article key={item.title} className="rounded-xl border border-border/80 bg-bg/30 px-4 py-3">
                <h3 className="font-heading text-lg">{item.title}</h3>
                <p className="mt-1 text-sm text-muted md:text-base">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl">Outcomes</h2>
          <ul className="space-y-2 text-sm text-muted md:text-base">
            {outcomes.map((outcome) => (
              <li key={outcome} className="rounded-xl border border-border/80 bg-bg/30 px-4 py-3">
                {outcome}
              </li>
            ))}
          </ul>
        </section>
      </article>

      <section className="flex flex-wrap gap-4">
        <Link href="/blog/deepstream-anpr-multistream" className="text-sm text-muted transition hover:text-ink">
          Read related blog post
        </Link>
        <Link href="/" className="text-sm text-muted transition hover:text-ink">
          Back to portfolio
        </Link>
      </section>
    </main>
  );
}
