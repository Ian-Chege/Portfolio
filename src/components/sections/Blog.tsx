import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { blogPosts } from "@/data/blog";

export function Blog() {
  return (
    <section id="writing" className="mx-auto max-w-5xl px-6 py-24 sm:px-8">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Writing"
          title="Notes on building things"
          description="Occasional technical writing, published on Hashnode."
        />
      </ScrollReveal>

      <div className="divide-y divide-border border-t border-border">
        {blogPosts.map((post, i) => (
          <ScrollReveal key={post.title} delay={i * 60}>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between gap-2 py-6 sm:flex-row sm:items-center sm:gap-8"
            >
              <div>
                <h3 className="font-serif text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-3 text-sm text-muted">
                <span>{post.date}</span>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
                <span className="text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  ↗
                </span>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
