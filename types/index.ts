export interface NavLink {
  label: string;
  href: string;
  sectionId: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  bullets: string[];
  metrics: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  status?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export interface StatCard {
  value: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
