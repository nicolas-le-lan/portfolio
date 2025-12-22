import type { PortfolioContent } from '../types';

export const en: PortfolioContent = {
  meta: { date: "December 2025" },
  nav: { 
    home: "Home", 
    projects: "Projects", 
    skills: "Skills", 
    education: "Education", 
    contact: "Contact", 
    role: "Cybersecurity Engineering Intern" 
  },
  hero: {
    title: "Nicolas LE LAN",
    subtitle: "Securing Tomorrow's Digital World",
    desc: "Engineering student at ESIEA (Cybersecurity major), I am building my expertise at the intersection of infrastructure defense and incident response. With professional experience at EDF and SNS Solutions, I combine technical rigor with international adaptability. Seeking a 4-month internship starting April 2026.",
    cta: "View Projects",
    contact: "Contact Me"
  },
  sectionTitles: { 
    summary: "Home",
    about: "About Me",
    projects: "Projects", 
    skills: "Technical Skills", 
    education: "Education", 
    interests: "Interests", 
    context: "Context", 
    objectives: "Objectives",
    process: "Algorithm & Process",
    results: "Output / Results", 
    back: "Return",
    moreInfo: "More Info",
    conclusion: "Career Outlook",
    softSkills: "Soft Skills",
    projection: "Professional Goal"
  },
  aboutMe: {
    title: "About the Agent",
    text: [
      "Passionate about IT from a young age, I have geared my career toward information systems protection and critical infrastructure resilience.",
      "My approach is pragmatic: understanding attack vectors to build robust defenses. I am committed to securing architectures 'by design' and ensuring operational continuity in the face of threats."
    ],
    stats: [
      { label: "Age", value: "24 Years" },
      { label: "Experience", value: "3 Years" },
      { label: "Missions", value: "EDF / SNS" }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Incident Response & Forensics",
      company: "SNS Security Challenge",
      tags: ["Forensics", "Wireshark", "Crisis Management"],
      shortDesc: "Full digital investigation simulation following a system compromise.",
      iconName: 'shield',
      context: "Analysis of a fictional phishing campaign that led to a critical intrusion within a corporate infrastructure.",
      objectives: "Identify the infection vector, trace the attacker's lateral movements, and extract Indicators of Compromise (IoC).",
      process: [
        "In-depth analysis of system logs and memory dumps to isolate malicious processes.",
        "Reconstruction of network sessions using Wireshark to understand data exfiltration.",
        "Identification of the payload (malware) and the 'Patient Zero' of the infection."
      ],
      results: [
        "Attack vector formally identified and threat contained.",
        "Authored a comprehensive technical investigation report with remediation steps.",
        "Optimized diagnostic methodology under time-sensitive crisis conditions."
      ]
    },
    {
      id: 2,
      title: "Industrial Virtualization",
      company: "EDF - Nuclear Division (DIPDE)",
      tags: ["VirtualBox", "OT Security", "Sandbox"],
      shortDesc: "Creation of a virtualized 'iso-production' environment for software pre-deployment.",
      iconName: 'server',
      context: "Mission within the Nuclear Fleet Engineering Division. Required to secure CAD chain software updates before production deployment.",
      objectives: "Design a virtualized sandbox faithfully replicating the CAD chain to validate updates during the pre-deployment phase.",
      process: [
        "Audit of the hardware and software configuration of the existing physical chain.",
        "Deployment of a 'mirror' infrastructure on VirtualBox, including critical machines and network flows.",
        "Authored operating procedures for sandbox utilization by engineering teams."
      ],
      results: [
        "Operational pre-deployment environment delivered and implemented.",
        "Secured update cycles by isolating tests within a sandbox environment.",
        "Structured technical documentation ensuring the long-term viability of the validation tool."
      ]
    },
    {
      id: 3,
      title: "Residential Thermal Optimization",
      company: "ESIEA Project (CAP Project)",
      tags: ["Flutter", "Algorithms", "UI/UX"],
      shortDesc: "Decision-support app for optimal radiator placement to improve energy efficiency.",
      iconName: 'cpu',
      context: "Group project addressing thermal comfort and energy-saving challenges for potential clients.",
      objectives: "Develop a software solution to determine the ideal location for heat emitters in a home.",
      process: [
        "Requirements gathering and analysis with potential clients to define key features.",
        "Development of a thermal placement algorithm based on space constraints and heat loss.",
        "Design of a mobile interface using Flutter to model apartments or houses.",
        "Implementation of data persistence to save heating configurations."
      ],
      results: [
        "Functional mobile application providing clear visualization of optimal placement.",
        "Intuitive interface praised by test users for its ease of use.",
        "Validation of the algorithm against technical requirements and market expectations."
      ]
    }
  ],
  education: [
    { school: "ESIEA Paris", degree: "Engineering Degree - Cybersecurity Major", date: "2024 - 2027", location: "Paris", desc: "Secure Architecture, Cryptography, Network Administration, and Project Management." },
    { school: "SeoulTech", degree: "International Semester", date: "2024", location: "Seoul, South Korea", desc: "Backend Development (Server-side), Databases, and Python. Cultural immersion and adaptability." },
    { school: "IUT de Béziers", degree: "Bachelor in Networks & Telecoms (Cyber Specialty)", date: "2022 - 2024", location: "Béziers", desc: "IS Security, Cisco Network Administration, Forensics, and FTTH deployment." },
    { school: "IT Sligo", degree: "International Semester", date: "2022", location: "Sligo, Ireland", desc: "Technical English, Data Analysis, and UX/UI Design." },
    { school: "EPITA Lyon", degree: "Engineering Foundation Program", date: "2019 - 2022", location: "Lyon", desc: "Applied Mathematics, Algorithms (C), Physics, and Electronics." }
  ],
  certifications: [
    { name: "Stormshield Network Administrator (SNA)", issuer: "Stormshield" }
  ],
  interests: [
    { name: "Climbing", iconName: "mountain" },
    { name: "Travel (Asia, Europe, America)", iconName: "plane" },
    { name: "Volunteering (Food Bank)", iconName: "heart" }
  ],
  skillsCategory: { languages: "Languages", tools: "Technical Tools", network: "Core Skills" },
  languages: [
    { name: "French", level: "Native" },
    { name: "English", level: "Professional (B2/TOEIC 850)" },
    { name: "Spanish", level: "Intermediate (B1)" },
    { name: "Japanese", level: "Beginner (A2)" }
  ],
  conclusion: {
    softSkillsList: [
      { title: "Adaptability", desc: "Proven through academic and cultural immersions in South Korea and Ireland." },
      { title: "Analytical Mindset", desc: "Developed through forensics practice, log analysis, and complex incident resolution." },
      { title: "Teamwork", desc: "Strengthened during large-scale collaborative projects (CAP Project, game development) and corporate roles." }
    ],
    projectionText: "I aim to become a pragmatic cybersecurity engineer, capable of bridging pure technical expertise with strategic corporate goals. My ambition is to design 'secure by design' architectures while remaining a facilitating partner for business operations."
  },
  footer: {
    desc: "Cybersecurity Engineer in training. Specialized in infrastructure protection, incident response, and forensics.",
    linksTitle: "Navigation",
    sysStatusTitle: "System Status",
    rights: "© 2025 Nicolas LE LAN. All rights reserved.",
    operational: "Internship Ready (April 2026)",
    secure: "System Secured"
  }
};