import Link from "next/link";
import { blogPosts } from "@/lib/site-data";

export const metadata = {
  title: "Project Blog | Prashant Yadav",
  description: "Engineering posts covering AI, CV, voice systems, and production ML projects."
};

export default function BlogIndexPage() {
  return (
    <main className="page-wrap">
      <section className="card">
        <p className="kicker">Blog</p>
        <h1>Project Explanations</h1>
        <p className="summary">
          Practical notes on system design, deployment decisions, and outcomes from my AI engineering projects.
        </p>
      </section>

      <section className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.slug} className="card blog-card">
            <p className="muted">{post.date}</p>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <p className="tags">{post.tags.join(" | ")}</p>
            <Link href={`/blog/${post.slug}`} className="read-link">
              Read post
            </Link>
          </article>
        ))}
      </section>

      <section className="card">
        <Link href="/">Back to portfolio</Link>
      </section>
    </main>
  );
}
