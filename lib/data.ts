import type {
  NavLink,
  Experience,
  Project,
  SkillCategory,
  Education,
  Certification,
  StatCard,
  ContactInfo,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero", sectionId: "hero" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Experience", href: "#experience", sectionId: "experience" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Education", href: "#education", sectionId: "education" },
  { label: "Certifications", href: "#certifications", sectionId: "certifications" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

export const HERO_TECH_PILLS: string[] = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Redux Toolkit",
  "Tailwind CSS",
  "Docker",
];

export const STAT_CARDS: StatCard[] = [
  { value: "3+", label: "Years of Experience" },
  { value: "2", label: "Companies" },
  { value: "21+", label: "Pages Delivered" },
  { value: "7+", label: "Production Projects" },
];

export const ABOUT_SUMMARY =
  "Full Stack Developer with 3+ years of experience in React.js, Next.js, TypeScript, JavaScript, Node.js, and PostgreSQL, building scalable enterprise web applications and REST API integrations. Specialized in component library development, Redux Toolkit state management, performance optimization, and SSR/SSG migration — delivering 35% faster page loads, 30% Lighthouse improvement, and 25% reduction in development effort. Experienced in micro frontend architecture, responsive design, and cross-team collaboration across production-scale environments.";

export const WHY_HIRE_ME: {
  icon: string;
  title: string;
  description: string;
}[] = [
  {
    icon: "Rocket",
    title: "Live, production-grade delivery",
    description:
      "Shipped and maintained live enterprise platforms — AALP, Adani ConneX, Adani Logistics, and Henkel's reporting dashboard — used by real business teams, not just demos.",
  },
  {
    icon: "RefreshCw",
    title: "Migration & modernisation specialist",
    description:
      "Led a React-to-Next.js SSR/SSG migration and refactored 50+ class components to Hooks on a live production app under a tight deadline, with zero regressions.",
  },
  {
    icon: "ListChecks",
    title: "Complex, multi-step form systems",
    description:
      "Designed 6-step dynamic form workflows with conditional validation for enterprise onboarding, cutting user errors by 30%.",
  },
  {
    icon: "Cpu",
    title: "Full-stack, AI-assisted engineering",
    description:
      "Built an AI-powered bank reconciliation tool end to end — React/MUI front end integrated with .NET APIs and SQL Server — including a manual-match fallback for unmatched transactions.",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "advaiya",
    role: "Software Engineer",
    company: "Advaiya Solutions",
    location: "Udaipur, Rajasthan",
    period: "Mar 2025 – Present",
    current: true,
    bullets: [
      "Designed dynamic multi-step forms with conditional validation (React.js, TypeScript), reducing submission errors by 30%",
      "Developed a reusable React TypeScript component library with standardized design patterns, cutting development effort by 25% across 3 product teams",
      "Optimized performance via lazy loading, code splitting, and memoisation (useMemo/useCallback) with Redux state management, achieving 35% page-load improvement",
      "Integrated RESTful APIs into enterprise dashboards with real-time data synchronization and efficient state-driven UI updates",
      "Delivered 21+ responsive, WCAG-compliant pages (Bootstrap, Tailwind CSS) with cross-browser compatibility",
    ],
    metrics: ["30% fewer errors", "25% dev effort cut", "35% faster loads", "21+ pages"],
  },
  {
    id: "techondater",
    role: "Software Engineer",
    company: "Techondater Pvt. Ltd.",
    location: "Udaipur, Rajasthan",
    period: "Nov 2022 – Mar 2025",
    current: false,
    bullets: [
      "Led migration of enterprise application from React.js to Next.js (SSR/SSG), improving Lighthouse scores by 30% and boosting organic SEO rankings",
      "Refactored 50+ class-based components to React Hooks (useState, useEffect, useReducer), improving code reusability, testability, and long-term maintainability",
      "Implemented Redux Toolkit global state management, reducing complexity by 40% and eliminating prop-drilling across deeply nested component trees",
      "Built and maintained RESTful Node.js/Express.js API services backed by PostgreSQL and MySQL, supporting mission-critical enterprise business workflows",
      "Engineered an iframe-based micro frontend architecture unifying 8+ independent business modules into a single shell application",
      "Maintained >80% test coverage across critical paths using Jest and React Testing Library",
    ],
    metrics: ["30% Lighthouse gain", "50+ components", "40% less complexity", "80%+ test coverage"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "crf",
    title: "Chintan Research Foundation — Publications Portal",
    description:
      "Next.js platform for browsing and managing research publications and datasets, with dynamic filtering by person, date, year, and custom columns. Each record resolves to a dedicated detail page with downloadable source files.",
    stack: ["Next.js", "React.js", "Data Filtering", "File Downloads"],
    status: "In Progress",
  },
  {
    id: "bank-reconciliation",
    title: "AI-Powered Bank Reconciliation System",
    description:
      "Internal application that uses AI to automatically match bank transactions against company records, cutting manual reconciliation effort. Owned full-stack development, .NET API integration, the MUI-based UI, and a manual-match workflow for unresolved transactions.",
    stack: ["React.js", "Material UI", ".NET APIs", "SQL Server", "JavaScript"],
    status: "Internal Project",
  },
  {
    id: "aalp",
    title: "AALP Enterprise Platform",
    description:
      "Enterprise dashboards and multi-step onboarding with real-time REST API integrations and a TypeScript component library serving 500+ internal users.",
    stack: ["React.js", "TypeScript", "REST APIs", "Bootstrap"],
    github: "https://github.com/vandana-kumawat",
  },
  {
    id: "hooks-migration",
    title: "Production Class-to-Hooks Migration",
    description:
      "Migrated a live, production React application from class components to functional components with Hooks under a tight deadline. Navigated multiple third-party library dependencies and complex state management while shipping zero regressions, improving long-term maintainability and readability.",
    stack: ["React.js", "React Hooks", "Regression Testing"],
  },
  {
    id: "modernisation",
    title: "Enterprise Application Modernisation",
    description:
      "Migrated legacy React.js app to Next.js (SSR/SSG); refactored 50+ components to React Hooks, delivering 30% performance improvement and measurable SEO gains.",
    stack: ["Next.js", "SSR/SSG", "SEO", "React Hooks"],
    github: "https://github.com/vandana-kumawat",
  },
  {
    id: "multimodule",
    title: "Multi-Module Enterprise Platform",
    description:
      "Unified 8+ independent business modules via iframe-based micro frontend architecture with Redux-powered persistent tab management for concurrent workflows.",
    stack: ["Micro Frontend", "Redux", "iframe Architecture", "Node.js"],
    github: "https://github.com/vandana-kumawat",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "Monitor",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "React Hooks",
      "Context API",
      "React Native",
    ],
  },
  {
    id: "styling",
    title: "Styling",
    icon: "Palette",
    skills: [
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "WCAG Accessibility",
    ],
  },
  {
    id: "backend",
    title: "Backend & DB",
    icon: "Database",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    id: "tools",
    title: "Tools & Cloud",
    icon: "Wrench",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "AWS",
      "Docker",
      "CI/CD",
      "Jest",
      "React Testing Library",
      "Contentful CMS",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "Mohanlal Sukhadia University (M.L.S.U)",
    location: "Udaipur, Rajasthan",
    year: "2022",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "az700",
    title: "Microsoft Certified: Azure Network Engineer Associate (AZ-700)",
    issuer: "Microsoft",
    year: "2026",
  },
  {
    id: "meta-frontend",
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta / Coursera",
    year: "2026",
  },
  {
    id: "react-nextjs",
    title: "React, Next.js & Redux – Complete Guide",
    issuer: "Udemy",
    year: "",
  },
  {
    id: "gitlab",
    title: "GitLab Certified Associate",
    issuer: "GitLab",
    year: "",
  },
];

export const CONTACT_INFO: ContactInfo = {
  email: "vandanavk100@gmail.com",
  phone: "6377051301",
  linkedin: "https://linkedin.com/in/vandana-kumawat-486aa6231",
  github: "https://github.com/vandana-kumawat",
};

export const PERSONAL = {
  name: "Vandana Kumawat",
  title: "Full Stack Developer",
  shortBio: "Building scalable enterprise web applications with React, Next.js, and Node.js.",
};
