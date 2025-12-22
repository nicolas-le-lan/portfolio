export type Language = 'fr' | 'en' | 'es' | 'ja';

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
}