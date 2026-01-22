import type { PortfolioContent } from '../types';

export const en: PortfolioContent = {
  // --- PORTFOLIO SECTION ---
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
    desc: "Cybersecurity Engineering student at ESIEA, forging expertise in infrastructure defense and incident response. With experience at EDF and SNS Solutions, I combine technical rigor with international adaptability. Seeking a 4-month internship starting April 2026.",
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
    back: "Back",
    moreInfo: "More Info",
    conclusion: "Perspectives",
    softSkills: "Soft Skills",
    projection: "Professional Goal"
  },
  aboutMe: {
    title: "About the Agent",
    text: [
      "Passionate about IT from a young age, I have directed my career towards Information Systems security and critical infrastructure resilience.",
      "My approach is pragmatic: understanding attack vectors to build robust defenses. I strive to secure architectures 'by design' and ensure operational continuity in the face of threats."
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
      tags: ["Forensics", "Wireshark", "Crisis Mgmt"],
      shortDesc: "Complete simulation of a digital investigation following a system compromise.",
      iconName: 'shield',
      context: "Analysis of a fictitious phishing campaign that led to a critical intrusion within a corporate infrastructure.",
      objectives: "Identify the infection vector, trace the attacker's lateral movements, and extract Indicators of Compromise (IoCs).",
      process: [
        "In-depth analysis of logs and memory dumps to isolate malicious processes.",
        "Reconstruction of network sessions via Wireshark to understand data exfiltration.",
        "Identification of the payload (malware) and the 'Patient Zero' of the infection."
      ],
      results: [
        "Attack vector formally identified and threat contained.",
        "Drafting of a complete technical investigation report with recommendations.",
        "Optimization of diagnostic methodology under time constraints."
      ]
    },
    {
      id: 2,
      title: "Industrial Virtualization",
      company: "EDF - Nuclear Division (DIPDE)",
      tags: ["VirtualBox", "OT Security", "Sandbox"],
      shortDesc: "Creation of a virtualized 'iso-production' environment for software pre-deployment.",
      iconName: 'server',
      context: "Mission within the Nuclear Park Engineering Division. Need to secure software updates for the CAD chain before production rollout.",
      objectives: "Design a virtualized sandbox faithfully replicating the CAD chain to validate evolutions in the pre-deployment phase.",
      process: [
        "Audit of the existing physical hardware and software configuration.",
        "Deployment of a 'mirror' infrastructure under VirtualBox including critical machines and network flows.",
        "Drafting of operating procedures for sandbox use by engineering teams."
      ],
      results: [
        "Operational pre-deployment environment delivered and adopted.",
        "Securing update cycles through isolated sandbox testing.",
        "Structured technical documentation ensuring the validation tool's longevity."
      ]
    },
    {
      id: 3,
      title: "Residential Thermal Optimization",
      company: "ESIEA Project (CAP Project)",
      tags: ["Flutter", "Algorithmics", "UI/UX"],
      shortDesc: "App aiding optimal radiator placement for energy efficiency.",
      iconName: 'cpu',
      context: "Group project addressing thermal comfort and energy saving issues for potential clients.",
      objectives: "Develop a software solution to determine the ideal location for heat emitters in a home.",
      process: [
        "Requirements gathering and analysis from potential clients to define key features.",
        "Development of a thermal placement algorithm based on space constraints and heat loss.",
        "Design of a mobile interface using Flutter to model the apartment or house.",
        "Implementation of data persistence to save heating configurations."
      ],
      results: [
        "Functional mobile application allowing clear visualization of optimal placement.",
        "Intuitive interface praised by test users for ease of use.",
        "Validation of the algorithm against technical requirements and market expectations."
      ]
    }
  ],
  education: [
    { school: "ESIEA Paris", degree: "Master's in Engineering - Cybersecurity Major", date: "2024 - 2027", location: "Paris", desc: "Secure Architecture, Cryptography, Network Administration, and Project Management." },
    { school: "SeoulTech", degree: "International Semester", date: "2024", location: "Seoul, South Korea", desc: "Backend Development (Server-side), Databases, and Python. Multicultural immersion." },
    { school: "IUT of Béziers", degree: "Bachelor in Networks & Telecoms (Cybersecurity Spec.)", date: "2022 - 2024", location: "Béziers", desc: "IS Security, Cisco Network Admin, Forensics, and FTTH deployment." },
    { school: "IT Sligo", degree: "International Semester", date: "2022", location: "Sligo, Ireland", desc: "Technical English, Data Analysis, and UX/UI Design." },
    { school: "EPITA Lyon", degree: "Preparatory Engineering Cycle", date: "2019 - 2022", location: "Lyon", desc: "Applied Mathematics, Algorithmics (C), Physics, and Electronics." }
  ],
  certifications: [
    { name: "Stormshield Network Administrator (SNA)", issuer: "Stormshield" }
  ],
  interests: [
    { name: "Climbing", iconName: "mountain" },
    { name: "Travel (Asia, Europe, America)", iconName: "plane" },
    { name: "Volunteering (Food Bank)", iconName: "heart" }
  ],
  skillsCategory: { languages: "Languages", tools: "Technical Tools", network: "Key Skills" },
  languages: [
    { name: "French", level: "Native" },
    { name: "English", level: "Professional (B2/TOEIC 850)" },
    { name: "Spanish", level: "Intermediate (B1)" },
    { name: "Japanese", level: "Beginner (A2)" }
  ],
  conclusion: {
    softSkillsList: [
      { title: "Adaptability", desc: "Proven by academic and cultural immersions in South Korea and Ireland." },
      { title: "Analytical Mindset", desc: "Developed through Forensics practice, log analysis, and complex incident resolution." },
      { title: "Teamwork", desc: "Consolidated during large-scale collaborative projects (IoT, video game dev) and corporate experience." }
    ],
    projectionText: "I aim to become a pragmatic cybersecurity engineer, bridging the gap between pure technology and strategic business stakes. My ambition is to design 'secure by design' architectures while remaining a facilitating partner for business units."
  },
  footer: {
    desc: "Cybersecurity Engineer in training. Specialized in infrastructure protection, incident response, and forensics.",
    linksTitle: "Navigation",
    sysStatusTitle: "System Status",
    rights: "© 2025 Nicolas LE LAN. All rights reserved.",
    operational: "Internship Available (April 2026)",
    secure: "System Secure"
  },

  // --- RESUME SECTION ---
  resume: {
    labels: {
      download: "Print / Save as PDF",
      back: "Back to Portfolio",
      skills: "TECHNICAL SKILLS",
      langs: "LANGUAGES",
      exp: "EXPERIENCE",
      edu: "EDUCATION",
      interests: "INTERESTS",
      contact_note: "CV generated from portfolio."
    },
    profile: {
      name: "Nicolas LE LAN",
      title: "COMPUTER ENGINEERING STUDENT",
      summary: "Computer engineering student with international experience, currently completing internships in cybersecurity and IT support. Skilled in C, Java, Python, and network systems. Team-oriented, proactive, and quick to learn. Looking for a 4-month internship (April-July 2026).",
      location: "Marseille, France",
      driverLicense: "Driving License (B)"
    },
    contact: {
      linkedin_url: "https://linkedin.com/in/le-lan-nicolas",
      github_url: "https://github.com/nicolas-le-lan",
      email_placeholder: "Contact via LinkedIn",
      phone_placeholder: "+33 6 79 16 96 86"
    },
    skills: [
      "C", "C#", "Java", "Python", 
      "Docker", "LaTeX", "Microsoft Office", 
      "Stormshield Network Administrator"
    ],
    languages: [
      { name: "English", level: "B2 (TOEIC 850)" },
      { name: "Spanish", level: "B1" },
      { name: "Japanese", level: "A2" },
      { name: "French", level: "Native" }
    ],
    experience: [
      {
        role: "Level 1 Technician Intern",
        company: "SNS SOLUTIONS",
        location: "Marseille, France",
        date: "March 2024 - July 2024",
        details: [
          "Provided technical support to clients.",
          "Diagnosed and resolved IT issues.",
          "Collaborated with support team to improve response efficiency."
        ],
        tags: []
      },
      {
        role: "Cybersecurity Engineering Assistant Intern",
        company: "EDF - Nuclear Engineering Division",
        location: "Marseille, France",
        date: "June 2023 - August 2023",
        details: [
          "Virtualized CAD chain in pre-production.",
          "Assisted with network maintenance.",
          "Worked within ADIC team (Support for the Development of Control Engineering)."
        ],
        tags: []
      }
    ],
    education: [
      {
        school: "ESIEA - School of Engineering",
        degree: "Master in Computer Engineering",
        location: "Paris",
        date: "2024 - 2027",
        details: [
          "Relevant Coursework: Object-Oriented Programming (Java), C Programming, Oracle SQL.",
          "Project: Text analyzer in C.",
          "Study Abroad: Seoul National University of Science and Technology (Python, Database, Web)."
        ]
      },
      {
        school: "University Institute of Technology (IUT)",
        degree: "Bachelor in Networks & Telecommunications",
        location: "Béziers",
        date: "Graduated 2024",
        details: [
          "Relevant Coursework: Information Systems Security, Network Design, IT Project Management.",
          "Projects: Simulated phishing attack and forensic analysis (SNS Security), Fiber internet deployment."
        ]
      },
      {
        school: "EPITA - School of Engineering",
        degree: "Preparatory Engineering Cycle",
        location: "Lyon",
        date: "2019 - 2022",
        details: [
          "Relevant Coursework: OOP (C#), C Programming, Algorithmics.",
          "Projects: Sudoku solver app, video game development.",
          "Study Abroad: Institute of Technology (Sligo, Ireland) - UX Design, Server-side programming."
        ]
      }
    ],
    interests: "Climbing, Travel (Japan, Korea, USA), Volunteering."
  }
};