import Link from "next/link";
import { blogPosts } from "@/lib/site-data";

export const metadata = {
  title: "Project Blog | Prashant Yadav",
  description: "Write-ups on AI product architecture, computer vision systems, and MLOps execution."
};

export default function BlogIndexPage() {
  return (
    <main className="mx-auto grid w-[min(1000px,calc(100%-1.5rem))] gap-8 py-10 md:py-14">
      <section className="rounded-3xl border border-border bg-panel p-7">
        <p className="font-heading text-xs uppercase tracking-[0.2em] text-primary">Blog</p>
        <h1 className="mt-3 font-heading text-4xl">Engineering Notes</h1>
        <p className="mt-3 text-sm text-muted md:text-base">
          Practical breakdowns of architecture choices, production constraints, and the outcomes from shipped AI
          systems.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-3xl border border-border bg-panel p-6 transition hover:-translate-y-1 hover:border-primary/55"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-primary">{post.date}</p>
            <h2 className="mt-2 font-heading text-2xl">{post.title}</h2>
            <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.12em] text-muted">{post.tags.join(" • ")}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-5 inline-flex rounded-full border border-primary/45 px-4 py-2 text-sm font-semibold transition hover:bg-primary hover:text-bg"
            >
              Read post
            </Link>
          </article>
        ))}
      </section>

      <section>
        <Link href="/" className="text-sm text-muted transition hover:text-ink">
          Back to portfolio
        </Link>
      </section>
    </main>
  );
}
