export type ContributionArea = {
  title: string;
  description?: string;
  items: string[];
  tech?: string[];
};

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  dates: string;
  employmentType?: string;
  highlights: string[];
  roadmap?: ContributionArea[];
  tech?: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Viewcy",
    companyUrl: "https://viewcy.com",
    dates: "Jan 2025 to Present",
    highlights: [
      'Built a personalized "For You" recommendation feed for the mobile app, complete with a taste-bootstrap onboarding flow that primes recommendations from day one.',
      'Built the mobile chat and voice interface for ABE, Viewcy\'s AI-driven business operations platform, including the "Talk to Abe" voice call feature.',
      "Shipped Tap to Pay, turning any staff iPhone into a contactless card reader for event check-in with zero extra hardware.",
      "Full-stack across five products: the core ticketing platform, the consumer mobile app, ABE (AI ops), and check-in tooling.",
    ],
    roadmap: [
      {
        title: "Fool's Journey",
        description: "Full-stack SaaS product, built from scratch",
        items: [
          "Webhook-driven email automation that delivers a personalized tarot pull to every event ticket purchaser",
          "Event-scoped card-draw sessions with a full major/minor arcana data model",
        ],
        tech: ["Next.js 15", "TypeScript", "Convex", "React 19"],
      },
      {
        title: "Core Platform",
        description: "Rails API + Next.js web, the main ticketing platform",
        items: [
          "Ticketing, payments, and membership-benefit features",
          "Manage dashboard for organizers",
          "Branded, uncropped OG share cards tuned for iOS and WhatsApp",
        ],
        tech: ["Ruby on Rails", "Next.js"],
      },
      {
        title: "Consumer Mobile App",
        description: "React Native/Expo app for live-event video, tickets, and playlists",
        items: [
          "Persistent video player surface: custom gesture controls, now-playing bar, playback history",
          "Unified global search across events, videos, and tickets",
          'Personalized "For You" recommendation feed with a taste-bootstrap onboarding flow',
          "End-to-end product analytics instrumentation with Mixpanel",
          "Playlist editing, reordering, and sharing",
          'Location-based event discovery: Google Places API, session tokens, GPS "near me" filtering',
          "Two-stage in-app review and feedback prompt",
        ],
        tech: ["Expo", "React Native", "Mixpanel"],
      },
      {
        title: "Check-in App",
        description: "Event-day staff tooling",
        items: [
          "Tap to Pay: contactless payments straight from an iPhone",
          "Engagement-gated, two-stage review and feedback prompt",
          "Versioned auth endpoint migration",
        ],
      },
      {
        title: "ABE",
        description: "Viewcy's AI-driven business operations platform (abe.ing)",
        items: [
          'Mobile chat interface and the "Talk to Abe" voice call feature',
          "Mobile signup flow with OTP verification",
        ],
      },
      {
        title: "Sales & Ops Automation",
        items: [
          "Automated weekly sales reports (gross/net revenue, Stripe fees, refunds), delivered on schedule via Convex cron jobs and Resend",
        ],
      },
      {
        title: "QA & Infrastructure",
        items: [
          "Jest unit tests and Cypress e2e coverage",
          "GitHub Actions CI/CD pipelines gating every PR",
        ],
      },
    ],
    tech: [
      "TypeScript",
      "Next.js",
      "React Native",
      "Expo",
      "Convex",
      "Rails",
      "Jest",
      "Cypress",
    ],
  },
  {
    role: "Founder",
    company: "IgniteDev",
    dates: "Jan 2024 to Present",
    highlights: [
      "Founded a studio building products that positively impact people's lives.",
      "Shipped Selah (Bible meditation app), Collab-Board (real-time collaborative whiteboard), and Lunor (personalized African star-map platform).",
      "Also built a Chrome extension that enhances YouTube with AI summaries, transcripts, and chat, and Ignite-fwk, a frontend framework built to teach developers how frameworks work under the hood.",
    ],
    tech: ["TypeScript", "Next.js", "Convex", "React Native", "Tailwind"],
  },
  {
    role: "Software Engineer",
    company: "Castynet",
    dates: "May 2023 to Jan 2024",
    employmentType: "Full-time",
    highlights: [
      "Piloted the migration of the Digikids Web Platform's front-end codebase from JavaScript to TypeScript, resulting in more than 80% fewer bug reports and 2x faster issue resolution.",
      "Engineered an automated certificate issuance system for learners, cutting manual interventions and delivering certificates 3x faster.",
      "Implemented the majority of the user-facing Digikids E-Learning Platform from a design file.",
      "Instructed 20+ students across multiple programming courses.",
      "CI/CD pipeline integration via Vercel, pull requests, and code reviews.",
    ],
    tech: ["TypeScript", "Next.js", "Firebase", "NeonDB", "Node"],
  },
  {
    role: "Product Support Engineer",
    company: "YouVersion",
    dates: "May 2023 to Jan 2024",
    employmentType: "Part-time",
    highlights: [
      "Collaborated with the YouVersion team, an app with 100+ million users, to supply technical support and resolve bug issues, increasing user satisfaction by more than 50%.",
      "Worked on the translation team, translating user responses to serve the diversity of daily users, boosting engagement from non-English-speaking regions by 15%+.",
    ],
  },
];
