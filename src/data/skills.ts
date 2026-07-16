export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Redux",
      "Tailwind CSS",
      "SASS",
      "GraphQL",
      "Figma",
      "UI/UX",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Prisma", "PostgreSQL", "Convex", "Rails"],
  },
  {
    category: "Testing & Tooling",
    items: [
      "Jest",
      "Cypress",
      "GitHub Actions",
      "AWS",
      "Monorepo",
      "Clerk",
      "CI/CD",
    ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  skills?: string[];
  url?: string;
};

export const certifications: Certification[] = [
  {
    name: "Testing Fundamentals",
    issuer: "Master.dev (formerly Frontend Masters)",
    date: "Feb 2025",
  },
  {
    name: "Intermediate React Native",
    issuer: "Master.dev (formerly Frontend Masters)",
    date: "Nov 2024",
    skills: ["React Native"],
  },
  {
    name: "React Native",
    issuer: "Master.dev (formerly Frontend Masters)",
    date: "Oct 2024",
  },
  {
    name: "Complete Intro to Containers",
    issuer: "Master.dev (formerly Frontend Masters)",
    date: "Sep 2024",
    skills: ["Docker", "Containerization"],
  },
  {
    name: "Google Gemini for Developers",
    issuer: "LinkedIn",
    date: "Apr 2024",
    skills: ["Generative AI", "Gemini"],
  },
  {
    name: "Intro to Machine Learning with TensorFlow",
    issuer: "Udacity",
    date: "Sep 2022",
    skills: ["Deep Learning", "Machine Learning"],
  },
];
