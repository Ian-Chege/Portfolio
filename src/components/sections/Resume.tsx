import { ScrollReveal } from "@/components/ScrollReveal";
import { site } from "@/data/site";

export function Resume() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 sm:px-8">
      <ScrollReveal>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-surface p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              Want the short version?
            </h2>
            <p className="mt-2 max-w-md text-muted">
              Download my resume for a quick summary of experience, education,
              and skills.
            </p>
          </div>
          <a
            href={site.resumeUrl}
            download
            className="shrink-0 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Download Resume ↓
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
