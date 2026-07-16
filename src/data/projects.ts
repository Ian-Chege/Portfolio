export type Project = {
  slug: string;
  title: string;
  builtBy?: string;
  oneLiner: string;
  description: string;
  tech: string[];
  status?: string;
  liveUrl?: string;
  liveLabel?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "selah",
    title: "Selah",
    builtBy: "IgniteDev",
    oneLiner:
      "A Bible meditation app that turns passive reading into a scroll-driven journey through Scripture.",
    description:
      "Users scroll through 7 progressive depth layers of a single verse (Surface, Word Study, Context, Imagery, Cross-References, Application, Meditation): TikTok-style vertical snap scrolling, but for engaging with Scripture. Includes a Notion-style admin dashboard for creating and managing verse stacks.",
    tech: ["Expo", "React Native", "Next.js", "Convex", "Clerk"],
    status: "Active build",
    liveUrl: "https://selahhub.net",
    liveLabel: "Visit Selah",
  },
  {
    slug: "lunor",
    title: "Lunor",
    builtBy: "IgniteDev",
    oneLiner:
      "Personalized star map platform for Africa: see the exact stars above your city on a meaningful date.",
    description:
      "Chronos (time) + Amor (love). Enter a city, date, and time (a wedding, a birth, an anniversary) and get a personalized star map poster showing the real sky at that moment, customizable with title, message, color theme, and font.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Convex", "Clerk"],
    status: "In development",
    liveUrl: "https://lunorstars.vercel.app/",
    liveLabel: "Visit Lunor",
  },
  {
    slug: "devramp",
    title: "DevRamp",
    oneLiner:
      "Developer onboarding videos that stay current: AI flags when code changes make a walkthrough stale.",
    description:
      "Record screen walkthroughs, DevRamp transcribes them with OpenAI Whisper and extracts every file path mentioned. Connects to GitHub via webhook, so when a merged PR touches a referenced file, DevRamp flags the video as needing an update.",
    tech: ["Next.js", "Convex", "Clerk", "OpenAI Whisper", "GitHub Webhooks"],
    status: "Beta",
    liveUrl: "https://devrampz.vercel.app",
    liveLabel: "Visit DevRamp",
    repoUrl: "https://github.com/Ian-Chege/devramp",
  },
  {
    slug: "potters-church-thika",
    title: "The Potters Church | Thika",
    builtBy: "Client project",
    oneLiner:
      "Church website for The Potters Church, Thika: services, events, and community.",
    description:
      "Homepage with pastoral welcome message, upcoming events (services, evangelism outreach, fellowship gatherings), location and directions, and mission statement. Content managed via Sanity CMS.",
    tech: ["Next.js", "Sanity CMS", "Tailwind", "Framer Motion"],
    liveUrl: "https://www.potterschurch.net/",
    liveLabel: "Visit site",
  },
  {
    slug: "digikids-lms",
    title: "Digikids LMS",
    builtBy: "Built at Castynet",
    oneLiner:
      "Full course-sales e-learning platform prototype: browse, purchase, watch, and track progress.",
    description:
      "Browse and filter courses, purchase via Stripe, chapter progress tracking, teacher mode for course creation with drag-and-drop reordering, video processing via Mux with HLS playback, rich text editor, file uploads via UploadThing.",
    tech: ["Next.js 14", "Prisma", "PostgreSQL", "Stripe", "Mux", "Clerk"],
    status: "Prototype",
    liveUrl: "https://lms-platform-test.vercel.app",
    liveLabel: "Visit demo",
  },
  {
    slug: "drugscan",
    title: "DrugScan",
    oneLiner:
      "AI-powered prescription scanner: snap a photo or type shorthand, get medication details and interaction checks.",
    description:
      "Scan a prescription by camera or gallery, or type shorthand like \"Bruffen 1x3\", enter your condition and allergies, and get AI-generated medication recommendations: dosage, frequency, safety tips, drug interaction warnings.",
    tech: ["Expo", "React Native", "Convex", "OpenAI"],
    status: "Android · iOS coming",
    liveUrl:
      "https://expo.dev/accounts/ianoviewcy/projects/mediscan/builds/cf04c1d4-b220-4107-92e9-b3f3c2dab0af",
    liveLabel: "Download APK",
    repoUrl: "https://github.com/Ian-Chege/DrugScan",
  },
  {
    slug: "collab-board",
    title: "Collab-Board",
    builtBy: "IgniteDev",
    oneLiner:
      "Real-time collaborative whiteboard: draw, sticky-note, and brainstorm together on a shared canvas.",
    description:
      "Create or join a board, invite others, draw together in real time. Toolbar with text, shapes, sticky notes, pencil; layering, coloring, undo/redo, keyboard shortcuts; organizations and invites; favoriting.",
    tech: ["Next.js", "Liveblocks", "Convex", "Clerk", "Tailwind"],
    liveUrl: "https://collabboardx.vercel.app",
    liveLabel: "Visit Collab-Board",
    repoUrl: "https://github.com/IgniteDevKE/Collab-Board",
  },
];
