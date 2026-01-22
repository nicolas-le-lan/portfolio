export type Language = 'fr' | 'en' | 'es' | 'ja';

// --- Types existants du Portfolio ---
export interface Project {
  id: number;
  title: string;
  company: string;
  tags: string[];
  shortDesc: string;
  context: string;
  objectives: string;
  process: string[];
  results: string[];
  iconName: 'shield' | 'server' | 'cpu';
}

export interface Education {
  school: string;
  degree: string;
  date: string;
  location: string;
  desc: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Interest {
  name: string;
  iconName: 'mountain' | 'plane' | 'heart';
}

// --- Types pour le CV (Resume) ---
export interface ResumeExperience {
  role: string;
  company: string;
  location: string;
  date: string;
  details: string[]; // Liste à puces pour l'expérience
  tags: string[];
}

export interface ResumeEducation {
  school: string;
  degree: string;
  location: string;
  date: string;
  details: string[]; 
}

export interface ResumeData {
  labels: {
    download: string;
    back: string;
    skills: string;
    langs: string;
    exp: string;
    edu: string;
    interests: string;
    contact_note: string;
  };
  profile: {
    name: string;
    title: string;
    summary: string;
    location: string;
    driverLicense?: string; // Permis B
  };
  contact: {
    linkedin_url: string;
    github_url: string;
    email_placeholder: string;
    phone_placeholder: string; // Téléphone
  };
  skills: string[];
  languages: { name: string; level: string }[];
  experience: ResumeExperience[];
  education: ResumeEducation[];
  interests: string;
}

// --- Type Principal Global ---
export interface PortfolioContent {
  meta: { date: string };
  nav: { home: string; projects: string; skills: string; education: string; contact: string; role: string };
  hero: { title: string; subtitle: string; desc: string; cta: string; contact: string };
  sectionTitles: { 
    summary: string;
    about: string;
    projects: string; 
    skills: string; 
    education: string; 
    interests: string; 
    context: string; 
    objectives: string;
    process: string;
    results: string; 
    back: string;
    moreInfo: string;
    conclusion: string;
    softSkills: string;
    projection: string;
  };
  aboutMe: {
    title: string;
    text: string[];
    stats: { label: string; value: string }[];
  };
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  interests: Interest[];
  skillsCategory: { languages: string; tools: string; network: string };
  languages: { name: string; level: string }[];
  conclusion: {
    softSkillsList: { title: string; desc: string }[];
    projectionText: string;
  };
  footer: {
    desc: string;
    linksTitle: string;
    sysStatusTitle: string;
    rights: string;
    operational: string;
    secure: string;
  };
  resume: ResumeData;
}