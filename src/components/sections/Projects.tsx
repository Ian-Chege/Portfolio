import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-6 py-24 sm:px-8"
    >
      <ScrollReveal>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A mix of founder-owned products, client work, and personal projects, spanning web, mobile, and AI."
        />
      </ScrollReveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 60}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
