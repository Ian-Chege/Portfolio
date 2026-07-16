import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { skills, certifications } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24 sm:px-8">
      <ScrollReveal>
        <SectionHeading eyebrow="Skills" title="Tools I work with" />
      </ScrollReveal>

      <div className="grid gap-10 sm:grid-cols-2">
        {skills.map((group, i) => (
          <ScrollReveal key={group.category} delay={i * 60}>
            <h3 className="mb-4 text-sm font-medium tracking-wide text-muted uppercase">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1.5 text-sm text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={120} className="mt-16">
        <h3 className="mb-6 text-sm font-medium tracking-wide text-muted uppercase">
          Certifications
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="rounded-xl border border-border bg-surface p-4"
            >
              <p className="font-medium text-foreground">{cert.name}</p>
              <p className="mt-1 text-sm text-muted">
                {cert.issuer} · {cert.date}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
