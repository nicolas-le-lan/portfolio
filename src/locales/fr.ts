import type { PortfolioContent } from '../types';

export const fr: PortfolioContent = {
  meta: { date: "Décembre 2025" },
  nav: { 
    home: "Accueil", 
    projects: "Projets", 
    skills: "Compétences", 
    education: "Parcours", 
    contact: "Contact", 
    role: "Stagiaire Ingénieur Cybersécurité" 
  },
  hero: {
    title: "Nicolas LE LAN",
    subtitle: "Sécuriser le numérique de demain",
    desc: "Étudiant ingénieur à l'ESIEA spécialisé en Cybersécurité, je forge mon expertise entre défense des infrastructures et réponse sur incident. Fort d'expériences chez EDF et SNS Solutions, j'allie rigueur technique et adaptabilité internationale pour un stage de 4 mois dès avril 2026.",
    cta: "Accéder aux projets",
    contact: "Me contacter"
  },
  sectionTitles: { 
    summary: "Accueil",
    about: "À propos de moi",
    projects: "Projets", 
    skills: "Compétences Techniques", 
    education: "Formation", 
    interests: "Centres d'intérêt", 
    context: "Contexte", 
    objectives: "Objectifs",
    process: "Algorithme & Process",
    results: "Output / Résultats", 
    back: "Retour",
    moreInfo: "Plus d'infos",
    conclusion: "Mes perspectives",
    softSkills: "Compétences Humaines",
    projection: "Cible Professionnelle"
  },
  aboutMe: {
    title: "À propos de l'agent",
    text: [
      "Passionné par l'informatique depuis mon plus jeune âge, j'ai orienté ma carrière vers la protection des systèmes d'information et la résilience des infrastructures critiques.",
      "Mon approche est pragmatique : comprendre les vecteurs d'attaque pour bâtir une défense robuste. Je m'attache à sécuriser les architectures 'by design' et à assurer une continuité opérationnelle face aux menaces."
    ],
    stats: [
      { label: "Âge", value: "24 Ans" },
      { label: "Expérience", value: "3 Ans" },
      { label: "Missions", value: "EDF / SNS" }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Réponse à Incident & Forensic",
      company: "Challenge SNS Security",
      tags: ["Forensic", "Wireshark", "Gestion de Crise"],
      shortDesc: "Simulation complète d'une investigation numérique suite à une compromission système.",
      iconName: 'shield',
      context: "Analyse d'une campagne de phishing fictive ayant entraîné une intrusion critique au sein d'une infrastructure d'entreprise.",
      objectives: "Identifier le vecteur d'infection, tracer les mouvements latéraux de l'attaquant et extraire des indicateurs de compromission (IoC).",
      process: [
        "Analyse approfondie des journaux (logs) et des dumps mémoire pour isoler les processus malveillants.",
        "Reconstruction des sessions réseaux via Wireshark pour comprendre l'exfiltration de données.",
        "Identification de la charge utile (malware) et du 'Patient Zéro' de l'infection."
      ],
      results: [
        "Vecteur d'attaque formellement identifié et menace contenue.",
        "Rédaction d'un rapport d'investigation technique complet avec préconisations.",
        "Optimisation de la méthodologie de diagnostic sous contrainte de temps."
      ]
    },
    {
      id: 2,
      title: "Virtualisation Industrielle",
      company: "EDF - Division Nucléaire (DIPDE)",
      tags: ["VirtualBox", "Sécurité OT", "Bac à sable"],
      shortDesc: "Création d'un environnement 'iso-production' virtualisé pour le pré-déploiement logiciel.",
      iconName: 'server',
      context: "Mission au sein de la Division Ingénierie du Parc Nucléaire. Nécessité de sécuriser les mises à jour logicielles de la chaîne CAO avant leur mise en production.",
      objectives: "Concevoir un 'bac à sable' (sandbox) virtualisé répliquant fidèlement la chaîne de CAO pour valider les évolutions en phase de pré-déploiement.",
      process: [
        "Audit de la configuration matérielle et logicielle de la chaîne physique existante.",
        "Déploiement d'une infrastructure 'miroir' sous VirtualBox incluant machines critiques et flux réseaux.",
        "Rédaction de procédures d'exploitation pour l'utilisation du bac à sable par les équipes d'ingénierie."
      ],
      results: [
        "Environnement de pré-déploiement opérationnel livré et adopté.",
        "Sécurisation des cycles de mise à jour grâce à l'isolation des tests en bac à sable.",
        "Documentation technique structurée garantissant la pérennité de l'outil de validation."
      ]
    },
{
      id: 3,
      title: "Optimisation Thermique Résidentielle",
      company: "Projet ESIEA (CAP Projet)",
      tags: ["Flutter", "Algorithmique", "UI/UX"],
      shortDesc: "Application d'aide au placement optimal de radiateurs pour l'efficacité énergétique.",
      iconName: 'cpu',
      context: "Projet de groupe (CAP Projet) répondant aux problématiques de confort thermique et d'économie d'énergie pour des clients potentiels.",
      objectives: "Développer une solution logicielle permettant de déterminer l'emplacement idéal des émetteurs de chaleur dans une habitation.",
      process: [
        "Recueil et analyse des besoins auprès de clients potentiels pour définir les fonctionnalités clés.",
        "Développement d'un algorithme de placement thermique basé sur les contraintes d'espace et de déperdition.",
        "Conception d'une interface mobile sous Flutter permettant de modéliser l'appartement ou la maison.",
        "Implémentation de la persistance des données pour sauvegarder les configurations de chauffe."
      ],
      results: [
        "Application mobile fonctionnelle permettant une visualisation claire du placement optimal.",
        "Interface intuitive saluée par les utilisateurs tests pour sa facilité de prise en main.",
        "Validation de l'algorithme face aux exigences techniques et attentes du marché."
      ]
    }
  ],
  education: [
    { school: "ESIEA Paris", degree: "Cycle Ingénieur - Majeure Cybersécurité", date: "2024 - 2027", location: "Paris", desc: "Architecture sécurisée, Cryptographie, Administration réseaux et Management de projet." },
    { school: "SeoulTech", degree: "Semestre International", date: "2024", location: "Séoul, Corée du Sud", desc: "Développement Backend (Server-side), Bases de données et Python. Immersion multiculturelle." },
    { school: "IUT de Béziers", degree: "BUT Réseaux & Télécommunications (Spécialité Cyber)", date: "2022 - 2024", location: "Béziers", desc: "Sécurité des SI, Administration Réseaux Cisco, Forensic et déploiement FTTH." },
    { school: "IT Sligo", degree: "Semestre International", date: "2022", location: "Sligo, Irlande", desc: "Anglais technique, Analyse de données et UX/UI Design." },
    { school: "EPITA Lyon", degree: "Prépa Intégrée", date: "2019 - 2022", location: "Lyon", desc: "Mathématiques appliquées, Algorithmique (C), Physique et Électronique." }
  ],
  certifications: [
    { name: "Stormshield Network Administrator (SNA)", issuer: "Stormshield" }
  ],
  interests: [
    { name: "Escalade", iconName: "mountain" },
    { name: "Voyages (Asie, Europe, Amérique)", iconName: "plane" },
    { name: "Bénévolat (Banque Alimentaire)", iconName: "heart" }
  ],
  skillsCategory: { languages: "Langues", tools: "Outils Techniques", network: "Compétences Clés" },
  languages: [
    { name: "Français", level: "Natif" },
    { name: "Anglais", level: "Professionnel (B2/TOEIC 850)" },
    { name: "Espagnol", level: "Intermédiaire (B1)" },
    { name: "Japonais", level: "Débutant (A2)" }
  ],
  conclusion: {
    softSkillsList: [
      { title: "Adaptabilité", desc: "Éprouvée par mes immersions académiques et culturelles en Corée du Sud et en Irlande." },
      { title: "Esprit d'analyse", desc: "Développé par la pratique du Forensic, l'analyse de logs et la résolution d'incidents complexes." },
      { title: "Travail d'équipe", desc: "Consolidé lors de projets collaboratifs d'envergure (IoT, développement de jeux vidéo) et en entreprise." }
    ],
    projectionText: "Je souhaite devenir un ingénieur en cybersécurité pragmatique, capable de faire le pont entre la technique pure et les enjeux stratégiques de l'entreprise. Mon ambition est de concevoir des architectures sécurisées 'by design' tout en restant un partenaire facilitateur pour les métiers."
  },
  footer: {
    desc: "Ingénieur Cybersécurité en formation. Spécialisé en protection des infrastructures, réponse à incident et forensic.",
    linksTitle: "Navigation",
    sysStatusTitle: "Statut du Système",
    rights: "© 2025 Nicolas LE LAN. Tous droits réservés.",
    operational: "Stage Disponible (Avril 2026)",
    secure: "Système Sécurisé"
  }
};