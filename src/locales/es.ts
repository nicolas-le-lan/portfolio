import type { PortfolioContent } from '../types';

export const es: PortfolioContent = {
  // --- SECCIÓN PORTAFOLIO ---
  meta: { date: "Diciembre 2025" },
  nav: { 
    home: "Inicio", 
    projects: "Proyectos", 
    skills: "Habilidades", 
    education: "Formación", 
    contact: "Contacto", 
    role: "Pasante Ing. Ciberseguridad" 
  },
  hero: {
    title: "Nicolas LE LAN",
    subtitle: "Asegurando el futuro digital",
    desc: "Estudiante de ingeniería en ESIEA especializado en Ciberseguridad. Forjo mi experiencia entre la defensa de infraestructuras y la respuesta a incidentes. Con experiencia en EDF y SNS Solutions, combino rigor técnico y adaptabilidad internacional. Busco prácticas de 4 meses desde abril de 2026.",
    cta: "Ver Proyectos",
    contact: "Contactarme"
  },
  sectionTitles: { 
    summary: "Inicio",
    about: "Sobre mí",
    projects: "Proyectos", 
    skills: "Habilidades Técnicas", 
    education: "Formación", 
    interests: "Intereses", 
    context: "Contexto", 
    objectives: "Objetivos",
    process: "Algoritmo y Proceso",
    results: "Output / Resultados", 
    back: "Volver",
    moreInfo: "Más info",
    conclusion: "Perspectivas",
    softSkills: "Habilidades Blandas",
    projection: "Objetivo Profesional"
  },
  aboutMe: {
    title: "Sobre el agente",
    text: [
      "Apasionado por la informática desde joven, he orientado mi carrera hacia la protección de sistemas de información y la resiliencia de infraestructuras críticas.",
      "Mi enfoque es pragmático: entender los vectores de ataque para construir defensas robustas. Me esfuerzo por asegurar arquitecturas 'by design' y garantizar la continuidad operativa ante amenazas."
    ],
    stats: [
      { label: "Edad", value: "24 Años" },
      { label: "Experiencia", value: "3 Años" },
      { label: "Misiones", value: "EDF / SNS" }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Respuesta a Incidentes y Forense",
      company: "Desafío SNS Security",
      tags: ["Forense", "Wireshark", "Gestión de Crisis"],
      shortDesc: "Simulación completa de una investigación digital tras un compromiso del sistema.",
      iconName: 'shield',
      context: "Análisis de una campaña de phishing ficticia que provocó una intrusión crítica en una infraestructura corporativa.",
      objectives: "Identificar el vector de infección, rastrear movimientos laterales del atacante y extraer Indicadores de Compromiso (IoC).",
      process: [
        "Análisis profundo de logs y volcados de memoria para aislar procesos maliciosos.",
        "Reconstrucción de sesiones de red vía Wireshark para entender la exfiltración de datos.",
        "Identificación de la carga útil (malware) y del 'Paciente Cero' de la infección."
      ],
      results: [
        "Vector de ataque formalmente identificado y amenaza contenida.",
        "Redacción de un informe técnico completo de investigación con recomendaciones.",
        "Optimización de la metodología de diagnóstico bajo presión de tiempo."
      ]
    },
    {
      id: 2,
      title: "Virtualización Industrial",
      company: "EDF - División Nuclear (DIPDE)",
      tags: ["VirtualBox", "Seguridad OT", "Sandbox"],
      shortDesc: "Creación de un entorno virtualizado 'iso-producción' para el pre-despliegue de software.",
      iconName: 'server',
      context: "Misión en la División de Ingeniería del Parque Nuclear. Necesidad de asegurar actualizaciones de software de la cadena CAD antes de producción.",
      objectives: "Diseñar un 'sandbox' virtualizado que replique fielmente la cadena CAD para validar evoluciones en fase de pre-despliegue.",
      process: [
        "Auditoría de la configuración de hardware y software existente.",
        "Despliegue de una infraestructura 'espejo' en VirtualBox incluyendo máquinas críticas y flujos de red.",
        "Redacción de procedimientos operativos para el uso del sandbox por equipos de ingeniería."
      ],
      results: [
        "Entorno de pre-despliegue operativo entregado y adoptado.",
        "Aseguramiento de ciclos de actualización mediante pruebas aisladas en sandbox.",
        "Documentación técnica estructurada garantizando la perennidad de la herramienta."
      ]
    },
    {
      id: 3,
      title: "Optimización Térmica Residencial",
      company: "Proyecto ESIEA (CAP Project)",
      tags: ["Flutter", "Algorítmica", "UI/UX"],
      shortDesc: "App para la colocación óptima de radiadores para eficiencia energética.",
      iconName: 'cpu',
      context: "Proyecto grupal sobre confort térmico y ahorro energético.",
      objectives: "Desarrollar una solución de software para determinar la ubicación ideal de emisores de calor en una vivienda.",
      process: [
        "Análisis de necesidades de clientes potenciales para definir funciones clave.",
        "Desarrollo de un algoritmo de colocación térmica basado en restricciones de espacio y pérdida de calor.",
        "Diseño de interfaz móvil en Flutter para modelar el apartamento o casa.",
        "Implementación de persistencia de datos para guardar configuraciones."
      ],
      results: [
        "Aplicación móvil funcional que permite visualización clara de la colocación óptima.",
        "Interfaz intuitiva elogiada por usuarios de prueba por su facilidad de uso.",
        "Validación del algoritmo frente a requisitos técnicos y expectativas del mercado."
      ]
    }
  ],
  education: [
    { school: "ESIEA París", degree: "Ingeniería - Mayor en Ciberseguridad", date: "2024 - 2027", location: "París", desc: "Arquitectura segura, Criptografía, Admin. de redes y Gestión de proyectos." },
    { school: "SeoulTech", degree: "Semestre Internacional", date: "2024", location: "Seúl, Corea del Sur", desc: "Desarrollo Backend (Server-side), Bases de datos y Python. Inmersión multicultural." },
    { school: "IUT de Béziers", degree: "Grado en Redes y Telecom. (Esp. Ciber)", date: "2022 - 2024", location: "Béziers", desc: "Seguridad SI, Admin. Redes Cisco, Forense y despliegue FTTH." },
    { school: "IT Sligo", degree: "Semestre Internacional", date: "2022", location: "Sligo, Irlanda", desc: "Inglés técnico, Análisis de datos y Diseño UX/UI." },
    { school: "EPITA Lyon", degree: "Ciclo Preparatorio Ing.", date: "2019 - 2022", location: "Lyon", desc: "Matemáticas aplicadas, Algorítmica (C), Física y Electrónica." }
  ],
  certifications: [
    { name: "Stormshield Network Administrator (SNA)", issuer: "Stormshield" }
  ],
  interests: [
    { name: "Escalada", iconName: "mountain" },
    { name: "Viajes (Asia, Europa, América)", iconName: "plane" },
    { name: "Voluntariado (Banco de Alimentos)", iconName: "heart" }
  ],
  skillsCategory: { languages: "Idiomas", tools: "Herramientas Técnicas", network: "Competencias Clave" },
  languages: [
    { name: "Francés", level: "Nativo" },
    { name: "Inglés", level: "Profesional (B2/TOEIC 850)" },
    { name: "Español", level: "Intermedio (B1)" },
    { name: "Japonés", level: "Principiante (A2)" }
  ],
  conclusion: {
    softSkillsList: [
      { title: "Adaptabilidad", desc: "Probada por inmersiones académicas y culturales en Corea del Sur e Irlanda." },
      { title: "Mente analítica", desc: "Desarrollada mediante práctica forense, análisis de logs y resolución de incidentes complejos." },
      { title: "Trabajo en equipo", desc: "Consolidado en proyectos colaborativos a gran escala y experiencia corporativa." }
    ],
    projectionText: "Deseo convertirme en un ingeniero en ciberseguridad pragmático, capaz de unir la técnica pura con los desafíos estratégicos de la empresa. Mi ambición es diseñar arquitecturas seguras 'by design' siendo un socio facilitador para el negocio."
  },
  footer: {
    desc: "Ingeniero de Ciberseguridad en formación. Especializado en protección de infraestructuras, respuesta a incidentes y forense.",
    linksTitle: "Navegación",
    sysStatusTitle: "Estado del Sistema",
    rights: "© 2025 Nicolas LE LAN. Todos los derechos reservados.",
    operational: "Prácticas Disponibles (Abril 2026)",
    secure: "Sistema Seguro"
  },

  // --- SECCIÓN CV (RESUME) ---
  resume: {
    labels: {
      download: "Imprimir / Guardar como PDF",
      back: "Volver al Portafolio",
      skills: "HABILIDADES TÉCNICAS",
      langs: "IDIOMAS",
      exp: "EXPERIENCIA PROFESIONAL",
      edu: "FORMACIÓN ACADÉMICA",
      interests: "INTERESES",
      contact_note: "CV generado desde el portfolio."
    },
    profile: {
      name: "Nicolas LE LAN",
      title: "ESTUDIANTE DE INGENIERÍA EN CIBERSEGURIDAD",
      summary: "Estudiante en busca de prácticas de 4 meses a partir de abril de 2026. Serio y motivado, acostumbrado al trabajo en equipo y a entornos exigentes. Móvil y operativo.",
      location: "Marsella, Francia",
      driverLicense: "Licencia B"
    },
    contact: {
      linkedin_url: "https://linkedin.com/in/le-lan-nicolas",
      github_url: "https://github.com/nicolas-le-lan",
      email_placeholder: "Contacto vía LinkedIn",
      phone_placeholder: "+33 6 79 16 96 86"
    },
    skills: [
      "Suite Office", "Python", "LaTeX", "Docker", 
      "C", "Wireshark", "C#", "Packet Tracer", 
      "Java", "Git", "Stormshield (Certificado)"
    ],
    languages: [
      { name: "Inglés", level: "B2 (TOEIC: 850)" },
      { name: "Español", level: "B1" },
      { name: "Japonés", level: "A2" },
      { name: "Francés", level: "Nativo" }
    ],
    experience: [
      {
        role: "Técnico Informático",
        company: "SNS SOLUTIONS",
        location: "Marsella",
        date: "2024 (Prácticas 4 meses + CDD 1 mes)",
        details: [
          "Soporte Técnico N1: Diagnóstico y resolución de incidencias.",
          "Resolución de incidentes: Mantenimiento hardware y software remoto.",
          "Gestión de parque: Preparación y despliegue de 30 estaciones de trabajo para clientes B2B.",
          "Documentación: Uso de herramientas de ticketing y enriquecimiento de base de conocimientos."
        ],
        tags: []
      },
      {
        role: "Asistente de Ingeniero en Ciberseguridad",
        company: "EDF - División Ingeniería Nuclear",
        location: "Marsella",
        date: "2023 (Prácticas 2 meses)",
        details: [
          "Proyecto de Virtualización: Réplica de cadena CAD en VirtualBox para entorno de pruebas seguro.",
          "Documentación Técnica: Redacción de procedimientos de instalación y operación."
        ],
        tags: []
      }
    ],
    education: [
      {
        school: "ESIEA París",
        degree: "Ciclo de Ingeniería (Ciberseguridad)",
        location: "París",
        date: "2024 - 2027",
        details: [
          "Cursos: Java, C, Python, Oracle SQL, Ciberseguridad.",
          "Semestre Internacional (SeoulTech, Corea): Backend, Bases de datos, Python.",
          "Proyecto IoT (Flutter/Dart): Gestión térmica, UI/UX.",
          "Proyecto Algo (C): Analizador de texto."
        ]
      },
      {
        school: "IUT de Béziers",
        degree: "Grado en Redes y Telecomunicaciones",
        location: "Béziers",
        date: "2022 - 2024",
        details: [
          "Cursos: Seguridad SI, redes Cisco, gestión de proyectos.",
          "Desafío SNS Security: Simulación phishing y forense.",
          "Despliegue FTTH: Ingeniería de fibra óptica."
        ]
      },
      {
        school: "EPITA Lyon",
        degree: "Ciclo Preparatorio",
        location: "Lyon",
        date: "2019 - 2022",
        details: [
          "Cursos: Algoritmos, Matemáticas, Física.",
          "Semestre Internacional (IT Sligo, Irlanda): Inglés técnico, Backend, UX/UI.",
          "Proyectos C/C#: OCR, Sudoku, Videojuegos."
        ]
      }
    ],
    interests: "Voluntariado, Escalada, Viajes (Europa, Canadá, EE. UU., Asia)."
  }
};