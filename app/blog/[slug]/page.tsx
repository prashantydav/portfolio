import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/site-data";

type Params = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Params) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    return { title: "Post not found" };
  }
  return {
    title: `${post.title} | Prashant Yadav`,
    description: post.excerpt
  };
}

export default function BlogPostPage({ params }: Params) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="page-wrap">
      <article className="card post">
        <p className="kicker">{post.date}</p>
        <h1>{post.title}</h1>
        <p className="summary">{post.excerpt}</p>
        <p className="tags">{post.tags.join(" | ")}</p>

        {post.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </article>

      <section className="card">
        <Link href="/blog">Back to all posts</Link>
      </section>
    </main>
  );
}
