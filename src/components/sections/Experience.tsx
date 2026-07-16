import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { RoleCard } from "@/components/RoleCard";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-24 sm:px-8">
      <ScrollReveal>
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
      </ScrollReveal>

      <div className="space-y-10">
        {experience.map((role, i) => (
          <ScrollReveal key={`${role.company}-${role.role}`} delay={i * 60}>
            <RoleCard role={role} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
