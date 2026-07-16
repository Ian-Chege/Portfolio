# Portfolio Website — Project Brief

Owner: Ian Chege
Built by: Jane (IgniteDev Studio)
Status: Gathering content — not yet built

## Goal
Build a personal developer portfolio website for Ian Chege that unifies his software work, writing, and resume into one clean site.

## Stack & Style
- Next.js (App Router) + TypeScript + Tailwind CSS
- Deploy-ready for Vercel
- Clean, minimal dev-portfolio aesthetic — generous whitespace, strong typography (one serif/distinctive sans for headings, clean sans for body), subtle single accent color, no gradients/neon, light mode default with optional dark mode toggle
- Minimal animation — a few tasteful fade/slide-in-on-scroll transitions max

## What's confirmed so far

Scope of content to include:
- Coding/academic + professional projects
- IgniteDev-adjacent products: Lunor (renamed from Chronamor), Selah, DevRamp
- Work history: Viewcy, Castynet
- Blog/articles
- Resume
- "Everything" — full personal site, not just a project list

Known public profile info (pulled from web):
- GitHub: github.com/Ian-Chege
  - Bio: "Building impactful products."
  - Nairobi, Kenya · UTC+3
  - Website listed: viewcy.com
  - 19 public repos, 42 stars given, 35 followers, 14 following
  - Pinned repo: `IgniteDevKE/Collab-Board` — "Collaborative board for individuals and teams" (TypeScript)
  - Achievements: Pair Extraordinaire x4, Pull Shark x3, YOLO, Quickdraw (active PR/collab history)
- LinkedIn: linkedin.com/in/ian-chege (content not accessible via automated fetch — need manual copy-paste of headline/About/Experience/Education)

Note on private repos: `gh` CLI is authenticated locally as Ian-Chege with `repo` scope, so private repos ARE readable from Claude Code (unlike the Claude web session, which had no live GitHub access).

## Confirmed projects to feature (2026-07-16)
1. Selah Application (`Ian-Chege/Selah-Application`)
2. Chronamor / Lunor (`Ian-Chege/chronamor`)
3. DevRamp (`Ian-Chege/devramp`)
4. The Potters Church | Thika website (`Ian-Chege/Potters_Church_Thika_Website`)
5. Digikids LMS Prototype (`Ian-Chege/Digikids_LMS_Prototype`)
6. DrugScan (`Ian-Chege/DrugScan`)
7. Collab-Board (`IgniteDevKE/Collab-Board`)
8. Work @ Viewcy (case-study blurb, no repo link — proprietary)

## Still needed (fill in before/while building)
- [x] LinkedIn headline, About section, Experience entries, Education — see [LINKEDIN.md](LINKEDIN.md)
- [x] Project details for: Lunor, Selah, DevRamp, and 5 others — see [PROJECTS.md](PROJECTS.md)
- [x] Viewcy role/work — Software Engineer, Jan 2025–present, full case study in PROJECTS.md
- [x] Castynet role/work — Software Engineer, May 2023–Jan 2024, bullets in LINKEDIN.md (built the Digikids LMS project)
- [x] Certifications — include all 6, add a Certifications section (see LINKEDIN.md)
- [x] Blog/article list — 3 posts on Hashnode, link out (see BLOG.md)
- [x] Resume — PDF provided, saved to assets/resume.pdf (see RESUME.md)
- [x] Skills list grouped by category — sourced from resume (see RESUME.md)
- [x] Contact info — ianchegedev@gmail.com + phone, GitHub, LinkedIn
- [x] Domain — Vercel subdomain for now (ian-chege.vercel.app or similar), custom domain later

## All content gathering complete (2026-07-16) — ready to scaffold
See PROJECTS.md, LINKEDIN.md, BLOG.md, RESUME.md for full source content.

Additional confirmed facts:
- Founder, IgniteDev, Jan 2024–Present (ongoing) — products: Selah, Collab-Board, Lunor
- Software Engineer, Viewcy, Jan 2025–Present
- Software Engineer, Castynet (full-time) + Product Support Staff, YouVersion (part-time, concurrent), May 2023–Jan 2024

## Sections to build
1. Hero — name, one-line role/positioning statement, short intro, links to GitHub/LinkedIn/email
2. Projects — card/grid, each with title, one-line description, tech tags, live + repo links, screenshot placeholder
3. Blog/Writing — list of articles (title, excerpt, date, link out or local MDX route)
4. Resume — downloadable PDF button + optional inline summary
5. Skills — grouped tag list (not progress bars)
6. Contact — email, socials, simple form or mailto

## Technical requirements
- Fully responsive, mobile-first
- SEO metadata (title, description, OG tags) per page
- Reusable components (ProjectCard, SectionHeading, etc.)
- Content data-driven via config files (`projects.ts`, `resume.ts`) — easy to update without touching layout
- Accessible: semantic HTML, alt text, keyboard nav
- Mark any placeholder content clearly as `[TODO: ...]`
