import { fr } from './locales/fr';
import { en } from './locales/en';
import { es } from './locales/es';
import { ja } from './locales/ja';
import type { Language, PortfolioContent } from './types';
import { Shield, Server, Cpu, Mountain, Plane, Heart, Terminal, Database, Network, GitGraph, Coffee, FileCode } from 'lucide-react';

export const content: Record<Language, PortfolioContent> = { fr, en, es, ja };

// Mapper pour les icônes
export const iconMap: any = {
  shield: Shield,
  server: Server,
  cpu: Cpu,
  mountain: Mountain,
  plane: Plane,
  heart: Heart
};

// Liste des compétences techniques
export const hardSkills = [
  { name: "Python", icon: Terminal },
  { name: "C / C++", icon: FileCode },
  { name: "Java", icon: Coffee },
  { name: "Docker", icon: Database },
  { name: "Git", icon: GitGraph },
  { name: "Wireshark", icon: Network },
  { name: "Packet Tracer", icon: Network },
];