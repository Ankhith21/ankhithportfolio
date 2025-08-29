export interface Contact {
  email: string;
  phone: string;
}

export interface Socials {
  linkedin: string;
  github: string;
  credly?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  details?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  duration: string;
  description: string[];
}

export interface Project {
  id: string;
  name: string;
  technologies: string;
  description: string;
  longDescription: string[];
  keyFeatures: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Skills {
  technical: string[];
  other: string[];
}

export interface ResumeData {
  name: string;
  tagline: string;
  intro: string;
  contact: Contact;
  socials: Socials;
  summary: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: Project[];
  certifications: Certification[];
  skills: Skills;
}
