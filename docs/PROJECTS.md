# Projects — Pulled Data (2026-07-16)

Source of truth for `projects.ts`. Fill `[TODO]` gaps before/while building.

---

## 1. Selah
- **Built by**: IgniteDev (your founder venture)
- **Repo**: `Ian-Chege/Selah-Application` (private) — pnpm monorepo: `apps/dashboard` (Next.js admin), `apps/mobile` (Expo), `packages/convex` (shared backend)
- **Live**: https://selahhub.net
- **One-liner**: A Bible meditation app that turns passive reading into a scroll-driven journey through Scripture.
- **Description**: Users scroll through 7 progressive "depth layers" of a single verse — Surface, Word Study, Context, Imagery, Cross-References, Application, Meditation — TikTok-style vertical snap scrolling, but for engaging with a passage of Scripture. Includes a Notion-style admin dashboard for creating and managing verse stacks.
- **Stack**: Expo (React Native) mobile app, Next.js 16 + shadcn/ui admin dashboard, Convex (real-time DB), Jotai (planned), Clerk auth (planned)
- **Status**: Active build
- **Repo link on site**: no — private repo, live link only

## 2. Lunor (formerly Chronamor)
- **Built by**: IgniteDev (your founder venture) — repo happens to live under your personal GitHub account, not the `IgniteDevKE` org, but it's an IgniteDev product alongside Selah and Collab-Board
- **Repo**: `Ian-Chege/chronamor` (private) — repo name still says chronamor, site copy uses Lunor
- **Live**: https://lunorstars.vercel.app/
- **One-liner**: Personalized star map platform for Africa — see the exact stars above your city on a meaningful date.
- **Description**: "Chronos (time) + Amor (love)." Users enter a city + date + time (e.g. a wedding day, birth, anniversary) and get a personalized star map poster showing the real sky at that moment, customizable with title, message, color theme, and font — priced for print (KES 1,500). Astronomy-engine-driven star positioning, canvas star-field animations, navy/gold design system.
- **Stack**: Next.js 16, Tailwind v4, TypeScript, App Router, Convex, Clerk, Resend, React Email
- **Status**: Landing page + design system complete; core star-map builder in active development (per ROADMAP.md)
- **Repo link on site**: no — private repo, live link only

## 3. DevRamp
- **Repo**: `Ian-Chege/devramp` (public)
- **Live**: https://devrampz.vercel.app
- **One-liner**: Developer onboarding videos that stay current — AI flags when code changes make a walkthrough stale.
- **Description**: Record screen walkthroughs (or upload existing video), DevRamp transcribes via OpenAI Whisper and extracts every file path/code reference mentioned. Connects to GitHub via webhook — when a merged PR touches a referenced file, DevRamp flags the video as needing an update. Solves the "onboarding video rot" problem.
- **Stack**: Next.js, Convex, Clerk, Radix UI, GitHub OAuth/webhooks, OpenAI Whisper
- **Status**: Beta
- **Repo link on site**: public repo — safe to link

## 4. The Potters Church | Thika
- **Repo**: `Ian-Chege/Potters_Church_Thika_Website` (private)
- **Live**: https://www.potterschurch.net/
- **One-liner**: Church website for The Potters Church, Thika — "A Place of Love, Fellowship, and Healing."
- **Description**: Client site for The Potters Church, Thika (Senior Pastor Paul Kamau). Homepage with pastoral welcome message, upcoming events listing (services, evangelism outreach, fellowship gatherings), location/directions, and mission statement ("To inspire, shape, and ignite people's destiny by the help of the Holy Spirit"). Content managed via Sanity CMS.
- **Stack**: Next.js, Sanity CMS (next-sanity, Portable Text), Tailwind, shadcn/Radix UI, Framer Motion
- **Status**: [TODO]
- **Client project**: confirmed — frame as freelance/client work (church commissioned the site)
- **Repo link on site**: no — private repo, live link only

## 5. Digikids LMS Prototype
- **Repo**: `Ian-Chege/Digikids_LMS_Prototype` (private, archived)
- **Live**: https://lms-platform-test.vercel.app
- **One-liner**: Full-featured e-learning platform prototype with course sales, video, and teacher/student modes.
- **Description**: Browse/filter courses, purchase via Stripe, chapter progress tracking, student dashboard, teacher mode for course/chapter creation with drag-and-drop reordering, video upload + processing via Mux with HLS playback, rich text editor, file uploads via UploadThing.
- **Stack**: Next.js 14, React, Prisma + PostgreSQL (NeonDB), Stripe, Mux, Clerk, UploadThing, Tailwind
- **Status**: Archived prototype
- **Repo link on site**: no — private repo, live link only
- **Note**: since archived + labeled "prototype," may be worth framing as a learning/portfolio-demonstration project rather than a live product.

## 6. DrugScan
- **Repo**: `Ian-Chege/DrugScan` (public)
- **Live**: No web deploy — Android APK distributed via Expo (link in README)
- **One-liner**: AI-powered prescription scanner — snap a photo or type shorthand, get medication details and interaction checks.
- **Description**: Scan a prescription by camera/gallery or type shorthand (e.g. "Bruffen 1x3"), enter condition + allergies, and get AI-generated medication recommendations: dosage, frequency, safety tips, drug interaction warnings. Includes a "My Meds" tracker and daily schedule ("My Day").
- **Stack**: Expo (React Native), Convex + Convex Auth, OpenAI, Expo Notifications, expo-image-picker
- **Status**: Android-only, active; iOS planned
- **Card CTA**: "Download APK" (link in README) instead of "Live site" — use the 4 screenshots already in README/`assets/screenshots/` (home, scan-results, my-meds, my-day) as the card imagery

## 7. Collab-Board
- **Built by**: IgniteDev (your founder venture)
- **Repo**: `IgniteDevKE/Collab-Board` (public, 1★, currently pinned on GitHub profile)
- **Live**: https://collabboardx.vercel.app/
- **One-liner**: Real-time collaborative whiteboard — draw, sticky-note, and brainstorm together on a shared canvas.
- **Description**: Create or join a board, invite others, draw together in real time. Toolbar with text, shapes, sticky notes, pencil; layering, coloring, undo/redo, keyboard shortcuts; organizations and invites; favoriting.
- **Stack**: Next.js 14, Liveblocks (real-time), Convex, Clerk (auth/orgs), Tailwind + shadcn/ui, perfect-freehand (drawing)
- **Status**: Live, public repo — safe to link directly

## 8. Work @ Viewcy
- **Type**: Case study, no repo links (proprietary/employer repos)
- **Basis**: commit history across the whole Viewcy org, filtered to your author email (`ianchegedev@gmail.com`). This is much bigger than just the mobile app — you're contributing full-stack across the product suite.

### Contribution footprint by repo
| Repo | Commits | What it is | Your work |
|---|---|---|---|
| `core` | 380 | Current main platform — Rails API + Next.js web frontend for Viewcy event management | Ticketing (77 commits touch it), payments (103), membership/benefits (68), manage dashboard (25), branded OG/share-card system for iOS/WhatsApp |
| `ABE` | 256 | "Agentic Business Engine" — Viewcy's internal LLM-driven business ops platform (Rails + Next.js + Expo + Electron), production at abe.ing | Mobile app (Expo): chat channels, "Talk to Abe" voice call feature, mobile signup/OTP auth flow, video playback |
| `viewcy-fe` (archived) | 223 | Predecessor Next.js/TS web frontend, superseded by `core` | Event management stats, multi-day event door-time display, add-guest flow, Cypress test coverage, QR code generator app feature |
| `native-app` (this repo) | 223 | React Native/Expo consumer mobile app — video, tickets, playlists | Persistent video player surface, unified global search, personalized "For You" recommendations + taste-bootstrap onboarding, Mixpanel analytics instrumentation, playlist editing, ticket claim flows, two-stage in-app review prompt |
| `check-in-app` | 96 | React Native event check-in app | Engagement-gated two-stage in-app review/feedback prompt, versioned auth endpoint migration |
| `fools-journey-mail` | 81 | Tarot-pull marketing integration (Next.js) | Event-scoped tarot card draw sessions, card data architecture, manual email sender tooling |
| `weekly-sales-report` | 19 | Sales reporting integration | — |
| `viewcy-embed-project` | 13 | Embeddable widget project | — |
| `Viewcy` (legacy monolith, since 2016) | 5 | Original Rails app | Minor fixes/docs |
| `seat-marker`, `gigdeal` | 3, 1 | Seat-map tooling, GigDeal booking product | Minor touches |

**Total: ~1,000+ commits across the org.** Timeline spans 2025-04-29 (earliest `native-app` commit) through today, still active.

- **Role**: Software Engineer
- **Dates**: January 2025 → present

### Final case-study blurb (v3 — enriched with resume specifics)
> **Software Engineer, Viewcy** — Jan 2025–present. Built "Fool's Journey" from scratch, a full-stack SaaS platform (Next.js 15, TypeScript, Convex, React 19) delivering automated, personalized tarot experiences to event ticket purchasers via webhook-driven email automation. Shipped Tap to Pay for the check-in app, letting event staff accept contactless payments directly from iPhones with no dedicated hardware. Implemented location-based event discovery in the mobile app (Google Places API, session tokens, GPS "near me" filtering), plus an automated weekly sales-reporting system (financial metrics, Convex cron jobs, Resend email delivery). Also shipped ticketing, payments, and membership-benefit features on the core Rails/Next.js platform, and built the mobile chat + voice interface for [ABE](https://abe.ing), Viewcy's AI-driven business operations platform. Established QA automation (Jest, Cypress) and CI/CD testing pipelines via GitHub Actions.
>
> **Tech**: TypeScript, Next.js 15, React Native, Expo, Convex, Rails, Jest, Cypress, GitHub Actions, React Query, Jotai.

- **Named features now identified** (previously just commit-count buckets): "Fool's Journey" = the `fools-journey-mail` repo; "Tap to Pay" lives in `check-in-app`; the weekly sales report = `weekly-sales-report` repo.
- **Fool's Journey**: given it's explicitly called out as "built from scratch" with a specific stack, worth considering as its own project card (9th project) rather than folded into the Viewcy blurb — flagging for your call.
- **ABE**: confirmed public, can be named and linked (abe.ing)
- **viewcy-fe**: folded into the "core platform" story
- **Status**: case study content finalized — ready for site build

---

## Resolved (2026-07-16)
1. ✅ Chronamor → **Lunor** is the public name
2. ✅ Private repos → **live links only**, no GitHub repo link
3. ✅ Potters Church → **client/freelance** project
4. ✅ DevRamp → **Beta**
5. ✅ DrugScan → use README screenshots for card imagery, "Download APK" CTA
6. ✅ Viewcy → draft case-study blurb written above (see Project 8), based on 223 real commits

## Still open
- Potters Church: real feature list (README is Next.js boilerplate — need to check live site or ask you directly)
- Viewcy blurb: confirm/edit title, employment dates, wording
- All other brief items still pending: LinkedIn content, Castynet work, blog articles, resume, skills list, contact prefs, domain/branding, screenshots for Selah/Lunor/DevRamp/Collab-Board
