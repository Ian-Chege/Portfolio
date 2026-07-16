import { site } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32">
      <p className="mb-6 text-sm font-medium tracking-wide text-accent uppercase">
        {site.role} · {site.location}
      </p>
      <h1 className="max-w-3xl font-serif text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
        Building impactful products that solve real problems.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        I&apos;m Ian, currently shipping full-stack features at{" "}
        <a
          href="https://viewcy.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
        >
          Viewcy
        </a>
        , and building Selah, Collab-Board, and Lunor as founder of IgniteDev.
        Always open to connecting with fellow builders.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href={site.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          GitHub
        </a>
        <a
          href={site.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${site.email}`}
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          {site.email}
        </a>
      </div>
    </section>
  );
}
