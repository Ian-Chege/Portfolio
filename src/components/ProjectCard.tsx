import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50 sm:p-7">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="font-serif text-xl font-medium text-foreground">
          {project.title}
        </h3>
        {project.status ? (
          <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-xs text-muted">
            {project.status}
          </span>
        ) : null}
      </div>

      {project.builtBy ? (
        <p className="mb-2 text-xs font-medium tracking-wide text-accent uppercase">
          {project.builtBy}
        </p>
      ) : null}

      <p className="mb-3 text-base font-medium text-foreground">
        {project.oneLiner}
      </p>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-background px-2.5 py-1 font-mono text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 text-sm font-medium">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition-opacity hover:opacity-70"
          >
            {project.liveLabel ?? "Visit"} ↗
          </a>
        ) : null}
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            Source ↗
          </a>
        ) : null}
      </div>
    </article>
  );
}
