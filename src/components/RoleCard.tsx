"use client";

import { useState } from "react";
import type { Experience } from "@/data/experience";

export function RoleCard({ role }: { role: Experience }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid gap-2 border-b border-border pb-10 last:border-none sm:grid-cols-[1fr_2.5fr] sm:gap-8">
      <div>
        <h3 className="font-serif text-xl font-medium text-foreground">
          {role.role}
        </h3>
        <p className="mt-1 text-accent">{role.company}</p>
        <p className="mt-1 text-sm text-muted">{role.dates}</p>
        {role.employmentType ? (
          <span className="mt-2 inline-block rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
            {role.employmentType}
          </span>
        ) : null}
      </div>

      <div>
        <ul className="space-y-2.5">
          {role.highlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {role.tech ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {role.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-surface px-2.5 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        ) : null}

        {role.roadmap ? (
          <>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="mt-5 flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-70"
            >
              {open ? "Show less" : "Read more: full contribution breakdown"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {open ? (
              <div className="animate-in mt-6 border-l border-border pl-6">
                {role.roadmap.map((area) => (
                  <div key={area.title} className="relative mb-8 last:mb-0">
                    <h4 className="relative font-serif text-base font-medium text-foreground">
                      <span className="absolute top-1/2 -left-[29px] h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-accent bg-background" />
                      {area.title}
                    </h4>
                    {area.description ? (
                      <p className="mt-1 text-sm text-muted">{area.description}</p>
                    ) : null}
                    <ul className="mt-3 space-y-2">
                      {area.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {area.tech ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {area.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-surface px-2.5 py-1 font-mono text-xs text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
}
