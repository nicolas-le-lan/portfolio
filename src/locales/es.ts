import type { PortfolioContent } from '../types';

export const es: PortfolioContent = {
  meta: { date: "Diciembre 2025" },
  nav: { 
    home: "Inicio", 
    projects: "Proyectos", 
    skills: "Competencias", 
    education: "Formación", 
    contact: "Contacto", 
    role: "Pasante en Ingeniería de Ciberseguridad" 
  },
  hero: {
    title: "Nicolas LE LAN",
    subtitle: "Asegurando el mundo digital del mañana",
    desc: "Estudiante de ingeniería en ESIEA especializado en Ciberseguridad. Construyo mi experiencia entre la defensa de infraestructuras y la respuesta ante incidentes. Con experiencia previa en EDF y SNS Solutions, combino el rigor técnico con la adaptabilidad internacional. Busco una pasantía de 4 meses a partir de abril de 2026.",
    cta: "Acceder a los proyectos",
    contact: "Contactar conmigo"
  },
  sectionTitles: { 
    summary: "Inicio",
    about: "Sobre mí",
    projects: "Proyectos", 
    skills: "Competencias Técnicas", 
    education: "Formación", 
    interests: "Intereses", 
    context: "Contexto", 
    objectives: "Objetivos",
    process: "Algoritmo y Proceso",
    results: "Output / Resultados", 
    back: "Volver",
    moreInfo: "Más información",
    conclusion: "Perspectivas",
    softSkills: "Competencias Humanas",
    projection: "Objetivo Profesional"
  },
  aboutMe: {
    title: "Sobre el agente",
    text: [
      "Apasionado por la informática desde temprana edad, he orientado mi carrera hacia la protección de los sistemas de información y la resiliencia de las infraestructuras críticas.",
      "Mi enfoque es pragmático: comprender los vectores de ataque para construir una defensa robusta. Me comprometo a asegurar las arquitecturas 'by design' y a garantizar la continuidad operativa frente a las amenazas."
    ],
    stats: [
      { label: "Edad", value: "24 años" },
      { label: "Experiencia", value: "3 años" },
      { label: "Misiones", value: "EDF / SNS" }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Respuesta ante Incidentes y Forense",
      company: "Desafío SNS Security",
      tags: ["Forense", "Wireshark", "Gestión de Crisis"],
      shortDesc: "Simulación completa de una investigación digital tras un compromiso del sistema.",
      iconName: 'shield',
      context: "Análisis de una campaña de phishing ficticia que provocó una intrusión crítica en una infraestructura corporativa.",
      objectives: "Identificar el vector de infección, rastrear los movimientos laterales del atacante y extraer indicadores de compromiso (IoC).",
      process: [
        "Análisis profundo de registros (logs) y volcados de memoria para aislar procesos maliciosos.",
        "Reconstrucción de sesiones de red mediante Wireshark para comprender la exfiltración de datos.",
        "Identificación de la carga útil (malware) y del 'Paciente Cero' de la infección."
      ],
      results: [
        "Vector de ataque identificado formalmente y amenaza contenida.",
        "Redacción de un informe de investigación técnica completo con recomendaciones.",
        "Optimización de la metodología de diagnóstico bajo condiciones de crisis."
      ]
    },
    {
      id: 2,
      title: "Virtualización Industrial",
      company: "EDF - División Nuclear (DIPDE)",
      tags: ["VirtualBox", "Seguridad OT", "Sandbox"],
      shortDesc: "Creación de un entorno 'iso-producción' virtualizado para el pre-despliegue de software.",
      iconName: 'server',
      context: "Misión dentro de la División de Ingeniería del Parque Nuclear. Necesidad de asegurar las actualizaciones de la cadena CAO antes de su puesta en producción.",
      objectives: "Diseñar un entorno aislado (sandbox) virtualizado que replique fielmente la cadena CAO para validar evoluciones en fase de pre-despliegue.",
      process: [
        "Auditoría de la configuración de hardware y software de la cadena física existente.",
        "Despliegue de una infraestructura 'espejo' en VirtualBox, incluyendo máquinas críticas y flujos de red.",
        "Redacción de procedimientos operativos para el uso del entorno de pruebas por los equipos de ingeniería."
      ],
      results: [
        "Entorno de pre-despliegue operativo entregado e implementado.",
        "Aseguramiento de los ciclos de actualización mediante el aislamiento de pruebas.",
        "Documentación técnica estructurada que garantiza la viabilidad de la herramienta de validación."
      ]
    },
    {
      id: 3,
      title: "Optimización Térmica Residencial",
      company: "Proyecto ESIEA (Proyecto CAP)",
      tags: ["Flutter", "Algoritmia", "UI/UX"],
      shortDesc: "Aplicación de ayuda para la ubicación óptima de radiadores para la eficiencia energética.",
      iconName: 'cpu',
      context: "Proyecto grupal enfocado en problemas de confort térmico y ahorro de energía para clientes potenciales.",
      objectives: "Desarrollar una solución de software que determine la ubicación ideal de emisores de calor en una vivienda.",
      process: [
        "Recopilación y análisis de necesidades con clientes potenciales para definir funciones clave.",
        "Desarrollo de un algoritmo de ubicación térmica basado en restricciones de espacio y pérdida de calor.",
        "Diseño de una interfaz móvil en Flutter para modelar casas o departamentos.",
        "Implementación de persistencia de datos para guardar configuraciones de calefacción."
      ],
      results: [
        "Aplicación móvil funcional que ofrece una visualización clara de la ubicación óptima.",
        "Interfaz intuitiva elogiada por usuarios de prueba por su facilidad de uso.",
        "Validación del algoritmo frente a requisitos técnicos y expectativas del mercado."
      ]
    }
  ],
  education: [
    { school: "ESIEA París", degree: "Grado en Ingeniería - Especialidad Ciberseguridad", date: "2024 - 2027", location: "París", desc: "Arquitectura Segura, Criptografía, Administración de Redes y Gestión de Proyectos." },
    { school: "SeoulTech", degree: "Semestre Internacional", date: "2024", location: "Seúl, Corea del Sur", desc: "Desarrollo Backend (Server-side), Bases de Datos y Python. Inmersión cultural y adaptabilidad." },
    { school: "IUT de Béziers", degree: "Grado en Redes y Telecomunicaciones (Ciberseguridad)", date: "2022 - 2024", location: "Béziers", desc: "Seguridad de SI, Administración de Redes Cisco, Forense y despliegue de FTTH." },
    { school: "IT Sligo", degree: "Semestre Internacional", date: "2022", location: "Sligo, Irlanda", desc: "Inglés técnico, Análisis de Datos y Diseño UX/UI." },
    { school: "EPITA Lyon", degree: "Ciclo Preparatorio de Ingeniería", date: "2019 - 2022", location: "Lyon", desc: "Matemáticas Aplicadas, Algoritmia (C), Física y Electrónica." }
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
    { name: "Japonais", level: "Principiante (A2)" }
  ],
  conclusion: {
    softSkillsList: [
      { title: "Adaptabilidad", desc: "Demostrada a través de inmersiones académicas y culturales en Corea del Sur e Irlanda." },
      { title: "Mentalidad Analítica", desc: "Desarrollada mediante la práctica forense, análisis de registros y resolución de incidentes complejos." },
      { title: "Trabajo en Equipo", desc: "Reforzado en proyectos colaborativos a gran escala (Proyecto CAP, desarrollo de videojuegos) y roles corporativos." }
    ],
    projectionText: "Aspiro a convertirme en un ingeniero de ciberseguridad pragmático, capaz de unir la experiencia técnica con los objetivos estratégicos de la empresa. Mi ambición es diseñar arquitecturas 'seguras por diseño' mientras actúo como un socio facilitador para las operaciones comerciales."
  },
  footer: {
    desc: "Ingeniero de Ciberseguridad en formación. Especializado en protección de infraestructuras, respuesta ante incidentes y forense.",
    linksTitle: "Navegación",
    sysStatusTitle: "Estado del Sistema",
    rights: "© 2025 Nicolas LE LAN. Todos los derechos reservados.",
    operational: "Disponible para pasantía (Abril 2026)",
    secure: "Sistema Asegurado"
  }
};