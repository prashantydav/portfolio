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
    <main className="mx-auto grid w-[min(920px,calc(100%-1.5rem))] gap-8 py-10 md:py-14">
      <article className="rounded-3xl border border-border bg-panel p-7 md:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">{post.date}</p>
        <h1 className="mt-3 font-heading text-4xl leading-tight">{post.title}</h1>
        <p className="mt-3 text-base text-muted">{post.excerpt}</p>
        <p className="mt-3 text-xs uppercase tracking-[0.13em] text-muted">{post.tags.join(" • ")}</p>

        <div className="mt-8 space-y-8">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="font-heading text-2xl">{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-sm text-muted md:text-base">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>

      <section>
        <Link href="/blog" className="text-sm text-muted transition hover:text-ink">
          Back to all posts
        </Link>
      </section>
    </main>
  );
}
