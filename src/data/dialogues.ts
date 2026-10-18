export interface DialogueLine {
  id: string;
  pose: string;
  talkSprite?: string;
  text: {
    es: string;
    en: string;
  };
  mood?: 'neutral' | 'happy' | 'thinking' | 'excited' | 'tech' | 'confident' | 'contact';
}

export interface ChapterDialogue {
  chapterId: string;
  title: {
    es: string;
    en: string;
  };
  lines: DialogueLine[];
}

export const PORTFOLIO_DIALOGUES: Record<string, ChapterDialogue> = {
  cover: {
    chapterId: 'cover',
    title: {
      es: 'IGNACIO BREÑAS',
      en: 'IGNACIO BREÑAS',
    },
    lines: [
      {
        id: 'cover-1',
        pose: '/images/sprites/ignacio_wave.svg',
        text: {
          es: '¡Hola! Soy Ignacio, desarrollador de software. Si quieres conocer mis proyectos o charlar un momento, pulsa sobre mí.',
          en: "Hi! I'm Ignacio, software developer. If you'd like to explore my work or have a quick chat, click on me.",
        },
        mood: 'happy',
      },
      {
        id: 'cover-2',
        pose: '/images/sprites/ignacio_thumbs_up.svg',
        text: {
          es: 'Me centro en crear backends robustos con TypeScript, conectar agentes de IA mediante el protocolo MCP y desarrollar herramientas rápidas.',
          en: 'I focus on building resilient backends with TypeScript, connecting AI agents via the MCP protocol, and crafting fast tools.',
        },
        mood: 'confident',
      },
      {
        id: 'cover-github',
        pose: '/images/sprites/ignacio_github.svg',
        text: {
          es: 'En mi GitHub (@Ignaciobrenas) tengo más de 30 repositorios públicos con servidores MCP, herramientas de analítica y código TypeScript estricto.',
          en: 'On my GitHub (@Ignaciobrenas) I maintain over 30 public repositories featuring MCP servers, analytics pipelines, and strict TypeScript systems.',
        },
        mood: 'tech',
      },
      {
        id: 'cover-linkedin',
        pose: '/images/sprites/ignacio_linkedin.svg',
        text: {
          es: 'En LinkedIn comparto mi trayectoria profesional como Full Stack Developer Intern en Soterguard y mi disponibilidad inmediata para incorporarme a equipos técnicos.',
          en: 'On LinkedIn I share my journey as Full Stack Developer Intern at Soterguard and my immediate availability for new engineering challenges.',
        },
        mood: 'confident',
      },
      {
        id: 'cover-credly',
        pose: '/images/sprites/ignacio_credly.svg',
        text: {
          es: 'Y todas mis certificaciones en Ciberseguridad, Ethical Hacking, Agile y Data Science están verificadas criptográficamente en Credly por Cisco e IBM.',
          en: 'All my credentials in Cybersecurity, Ethical Hacking, Agile, and Data Science are cryptographically verified on Credly by Cisco and IBM.',
        },
        mood: 'excited',
      },
      {
        id: 'cover-3',
        pose: '/images/sprites/ignacio_point_down.svg',
        text: {
          es: 'A lo largo de la página te iré comentando detalles técnicos de lo que hago en cada empresa y en mis proyectos personales.',
          en: 'As you scroll, I will share technical highlights about my day-to-day work at companies and personal projects.',
        },
        mood: 'neutral',
      },
    ],
  },

  experience: {
    chapterId: 'experience',
    title: {
      es: 'EXPERIENCIA',
      en: 'EXPERIENCE',
    },
    lines: [
      {
        id: 'exp-1',
        pose: '/images/sprites/ignacio_confident.svg',
        text: {
          es: 'He trabajado en entornos de producción reales, desde desarrollo de backend y virtualización hasta laboratorio de hardware.',
          en: 'I have worked in live production environments, spanning backend engineering, virtualization, and systems hardware labs.',
        },
        mood: 'confident',
      },
      {
        id: 'exp-2',
        pose: '/images/sprites/ignacio_point_down.svg',
        text: {
          es: 'En cada empresa aprendí algo clave: buenas prácticas de arquitectura, atención al detalle y respeto por los recursos del sistema.',
          en: 'At each company I gained key foundations: sound architecture, meticulous attention to detail, and deep respect for system resources.',
        },
        mood: 'tech',
      },
    ],
  },

  soteguard: {
    chapterId: 'soteguard',
    title: {
      es: 'SOTERGUARD',
      en: 'SOTERGUARD',
    },
    lines: [
      {
        id: 'sg-1',
        pose: '/images/sprites/ignacio_soterguard_confident.svg',
        text: {
          es: 'En Soterguard trabajo como Full Stack Developer, participando en todas las etapas del desarrollo de aplicaciones On-Premise y web con TypeScript, Node, React, Tailwind y Python.',
          en: 'At Soterguard I work as a Full Stack Developer, contributing across all lifecycle stages of web and on-premise solutions using TypeScript, Node, React, Tailwind, and Python.',
        },
        mood: 'tech',
      },
      {
        id: 'sg-2',
        pose: '/images/sprites/ignacio_soterguard_confident.svg',
        text: {
          es: 'Diseño automatizaciones en n8n para Stoam Connect y desarrollo integraciones críticas con ERPs como Sage, A3ERP y Odoo para sincronizar datos B2B y B2C.',
          en: 'I engineer n8n automations for Stoam Connect and develop critical ERP integrations with Sage, A3ERP, and Odoo to seamlessly synchronize B2B and B2C data.',
        },
        mood: 'excited',
      },
      {
        id: 'sg-3',
        pose: '/images/sprites/ignacio_soterguard_wave.svg',
        text: {
          es: 'Trabajo bajo metodología Agile con tableros Kanban, resolviendo incidencias en PYMES y realizando llamadas directas con clientes para conocer sus necesidades.',
          en: 'I operate under Agile methodologies with Kanban boards, resolving production incidents for SMEs and conducting direct discovery calls with clients.',
        },
        mood: 'tech',
      },
    ],
  },

  vimtech: {
    chapterId: 'vimtech',
    title: {
      es: 'VIMTECH',
      en: 'VIMTECH',
    },
    lines: [
      {
        id: 'vt-1',
        pose: '/images/sprites/ignacio_hardware.svg',
        text: {
          es: 'En VimTech trabajé en el laboratorio técnico, diagnosticando averías a nivel de placa y reparando equipos Apple como Mac, iPhone e iPad.',
          en: 'At VimTech I worked in the hardware laboratory, performing board-level diagnostics and specialized Apple repairs for Mac, iPhone, and iPad.',
        },
        mood: 'tech',
      },
      {
        id: 'vt-2',
        pose: '/images/sprites/ignacio_read_specs.svg',
        text: {
          es: 'También realizaba instalación de sistemas macOS, Linux Debian y Windows, configuraciones de red y procesos de recuperación de datos.',
          en: 'I also handled OS deployments on macOS, Debian Linux, and Windows, network configuration, and secure data recovery pipelines.',
        },
        mood: 'thinking',
      },
      {
        id: 'vt-3',
        pose: '/images/sprites/ignacio_thumbs_up.svg',
        text: {
          es: 'Comprender la electrónica y ver cómo sufre el hardware con software mal optimizado te cambia por completo la forma de programar.',
          en: 'Understanding board electronics and seeing how hardware struggles under poorly optimized software completely changes how you code.',
        },
        mood: 'confident',
      },
    ],
  },

  ajma: {
    chapterId: 'ajma',
    title: {
      es: 'AJMA',
      en: 'AJMA',
    },
    lines: [
      {
        id: 'ajma-1',
        pose: '/images/sprites/ignacio_camera.svg',
        text: {
          es: 'En AJMA fui operador de cámara en producciones y eventos en directo, manejando equipos profesionales de grabación audiovisual.',
          en: 'At AJMA I worked as a camera operator for live events and productions, handling professional video recording gear.',
        },
        mood: 'happy',
      },
      {
        id: 'ajma-2',
        pose: '/images/sprites/ignacio_wave.svg',
        text: {
          es: 'Coordinaba las retransmisiones en directo, controlaba las mesas de mezclas de audio y gestionaba el portal web oficial.',
          en: 'I coordinated live streaming broadcasts, managed audio mixing consoles, and maintained the official web portal.',
        },
        mood: 'tech',
      },
    ],
  },

  work: {
    chapterId: 'work',
    title: {
      es: 'PROYECTOS',
      en: 'PROJECTS',
    },
    lines: [
      {
        id: 'work-1',
        pose: '/images/sprites/ignacio_point_down.svg',
        text: {
          es: 'Aquí puedes ver mis proyectos principales, destacando en primer lugar DAMA-CRM, mi SaaS modular con TypeScript 100% estricto.',
          en: 'Here you can explore my key projects, led by DAMA-CRM, my modular SaaS built with 100% strict TypeScript.',
        },
        mood: 'excited',
      },
      {
        id: 'work-2',
        pose: '/images/sprites/ignacio_tablet.svg',
        text: {
          es: 'También encontrarás analítica de Big Data con Argus Fraud Radar, integración de IA con servidores MCP y herramientas en tiempo real.',
          en: 'You will also find Big Data fraud detection with Argus Fraud Radar, AI tooling with MCP servers, and real-time utilities.',
        },
        mood: 'tech',
      },
    ],
  },

  'dama-crm': {
    chapterId: 'dama-crm',
    title: {
      es: 'DAMA-CRM',
      en: 'DAMA-CRM',
    },
    lines: [
      {
        id: 'dama-1',
        pose: '/images/sprites/ignacio_confident.svg',
        text: {
          es: 'DAMA-CRM es mi proyecto estrella: un CRM y ERP modular empresarial construido de principio a fin con TypeScript 100% estricto y cero tipos any.',
          en: 'DAMA-CRM is my flagship deliverable: an enterprise modular CRM and ERP engineered end-to-end with 100% strict TypeScript and zero any types.',
        },
        mood: 'confident',
      },
      {
        id: 'dama-2',
        pose: '/images/sprites/ignacio_coding.svg',
        text: {
          es: 'Cuenta con multi-tenancy real por subdominio, facturación legal ISO 19005-1 PDF/A-3b, sincronización con Apple Calendar y 116 tests automáticos.',
          en: 'It features real multi-tenancy by subdomain, ISO 19005-1 PDF/A-3b legal invoicing, Apple Calendar synchronization, and 116 passing automated tests.',
        },
        mood: 'tech',
      },
    ],
  },

  'argus-fraud': {
    chapterId: 'argus-fraud',
    title: {
      es: 'ARGUS FRAUD RADAR',
      en: 'ARGUS FRAUD RADAR',
    },
    lines: [
      {
        id: 'argus-1',
        pose: '/images/sprites/ignacio_tablet.svg',
        text: {
          es: 'Desarrollé esta plataforma de detección de fraude bancario para el programa europeo UNITA Erasmus+ BIP.',
          en: 'I engineered this bank fraud detection platform for the European UNITA Erasmus+ BIP academic initiative.',
        },
        mood: 'tech',
      },
      {
        id: 'argus-2',
        pose: '/images/sprites/ignacio_coding.svg',
        text: {
          es: 'Organiza los datos con arquitectura Medallion en PySpark, evalúa transacciones con LightGBM y presenta un radar visual con FastAPI y Streamlit.',
          en: 'It structures datasets using Medallion architecture in PySpark, scores transactions via LightGBM, and serves a live radar with FastAPI & Streamlit.',
        },
        mood: 'confident',
      },
    ],
  },

  'canva-mcp': {
    chapterId: 'canva-mcp',
    title: {
      es: 'CANVA CONNECTOR MCP',
      en: 'CANVA CONNECTOR MCP',
    },
    lines: [
      {
        id: 'cmcp-1',
        pose: '/images/sprites/ignacio_ai_holo.svg',
        text: {
          es: 'Implementé el protocolo Model Context Protocol (MCP) para conectar asistentes de IA como Claude con la API oficial de Canva.',
          en: 'I implemented the Model Context Protocol (MCP) to allow AI assistants like Claude to interact directly with the Canva API.',
        },
        mood: 'excited',
      },
      {
        id: 'cmcp-2',
        pose: '/images/sprites/ignacio_idea.svg',
        text: {
          es: 'Incluye flujo de autorización OAuth 2.0 PKCE en local para no comprometer credenciales, y tipado estricto en TypeScript en cada endpoint.',
          en: 'It features a secure local OAuth 2.0 PKCE authorization flow to protect credentials, along with strict TypeScript typing on all endpoints.',
        },
        mood: 'tech',
      },
    ],
  },

  'skeleton-meme': {
    chapterId: 'skeleton-meme',
    title: {
      es: 'SKELETON-MEME',
      en: 'SKELETON-MEME',
    },
    lines: [
      {
        id: 'skel-1',
        pose: '/images/sprites/ignacio_camera.svg',
        text: {
          es: 'Un sistema de visión por computador que detecta posturas corporales y rasgos faciales a 60 fotogramas por segundo usando solo la CPU.',
          en: 'A computer vision pipeline tracking body poses and facial landmarks at 60 frames per second using purely the CPU.',
        },
        mood: 'tech',
      },
      {
        id: 'skel-2',
        pose: '/images/sprites/ignacio_laugh.svg',
        text: {
          es: 'Utiliza MediaPipe y OpenCV para analizar la fatiga ergonómica en directo e interactuar con animaciones dinámicas.',
          en: 'Built with MediaPipe and OpenCV to evaluate ergonomic fatigue in real time and drive interactive dynamic animations.',
        },
        mood: 'happy',
      },
    ],
  },

  'run-and-eat': {
    chapterId: 'run-and-eat',
    title: {
      es: 'RUN & EAT',
      en: 'RUN & EAT',
    },
    lines: [
      {
        id: 'rne-1',
        pose: '/images/sprites/ignacio_thumbs_up.svg',
        text: {
          es: 'Una aplicación web integral para coordinar eventos gastronómicos y reservas, pensada para soportar usuarios simultáneos.',
          en: 'A full-stack web application to organize gastronomic events and reservations, architected for concurrent users.',
        },
        mood: 'confident',
      },
      {
        id: 'rne-2',
        pose: '/images/sprites/ignacio_coding.svg',
        text: {
          es: 'Diseñé la API y la lógica de negocio con Laravel 11, mientras que la interfaz es una SPA reactiva creada con Vue.js y Tailwind CSS.',
          en: 'I architected the backend API and domain logic with Laravel 11, paired with a responsive Vue.js and Tailwind CSS SPA frontend.',
        },
        mood: 'tech',
      },
    ],
  },

  'lugia-terminal': {
    chapterId: 'lugia-terminal',
    title: {
      es: 'LUGIA TERMINAL',
      en: 'LUGIA TERMINAL',
    },
    lines: [
      {
        id: 'lugia-1',
        pose: '/images/sprites/ignacio_read_specs.svg',
        text: {
          es: 'Es mi entorno de desarrollo personalizado para PowerShell 7 y Windows Terminal, configurado para arrancar en menos de 10 milisegundos.',
          en: 'My custom developer terminal configuration for PowerShell 7 and Windows Terminal, tuned to launch in under 10 milliseconds.',
        },
        mood: 'tech',
      },
      {
        id: 'lugia-2',
        pose: '/images/sprites/ignacio_coding.svg',
        text: {
          es: 'Analicé los tiempos de carga de cada módulo y añadí autocompletado inteligente y atajos rápidos para el trabajo diario.',
          en: 'I profiled each module startup cost and integrated predictive completion with ergonomic workflows for daily development.',
        },
        mood: 'confident',
      },
    ],
  },

  stack: {
    chapterId: 'stack',
    title: {
      es: 'TECNOLOGÍAS',
      en: 'TECH STACK',
    },
    lines: [
      {
        id: 'stack-1',
        pose: '/images/sprites/ignacio_coding.svg',
        text: {
          es: 'Trabajo habitualmente con TypeScript, Node.js, Java, Linux, Docker, Python y PostgreSQL.',
          en: 'I regularly work with TypeScript, Node.js, Java, Linux, Docker, Python, and PostgreSQL.',
        },
        mood: 'tech',
      },
      {
        id: 'stack-2',
        pose: '/images/sprites/ignacio_confident.svg',
        text: {
          es: 'Priorizo herramientas consolidadas que ofrecen rendimiento contrastado, buen soporte de la comunidad y estabilidad a largo plazo.',
          en: 'I prioritize proven technologies that deliver tangible performance, active community support, and long-term stability.',
        },
        mood: 'confident',
      },
    ],
  },

  certifications: {
    chapterId: 'certifications',
    title: {
      es: 'CERTIFICACIONES',
      en: 'CREDENTIALS',
    },
    lines: [
      {
        id: 'cert-1',
        pose: '/images/sprites/ignacio_read_specs.svg',
        text: {
          es: 'Cuento con certificaciones oficiales de Cisco Networking Academy e IBM, todas verificables en mi perfil de Credly.',
          en: 'I hold verified industry credentials from Cisco Networking Academy and IBM, publicly auditable on Credly.',
        },
        mood: 'thinking',
      },
      {
        id: 'cert-2',
        pose: '/images/sprites/ignacio_books.svg',
        text: {
          es: 'Abarcan fundamentos de redes de computadores, protocolos de comunicación, ciberseguridad y arquitectura de sistemas.',
          en: 'They certify solid foundations in computer networking, transport protocols, cybersecurity, and system architecture.',
        },
        mood: 'confident',
      },
    ],
  },

  about: {
    chapterId: 'about',
    title: {
      es: 'SOBRE MÍ',
      en: 'ABOUT ME',
    },
    lines: [
      {
        id: 'about-1',
        pose: '/images/sprites/ignacio_coffee.svg',
        text: {
          es: 'Vivo en Barcelona. Me considero una persona curiosa y resolutiva, con un perfil versátil siempre dispuesto a aprender y aportar en nuevos retos.',
          en: 'I live in Barcelona. I consider myself a curious and problem-solving person, with a versatile profile always eager to learn and deliver value.',
        },
        mood: 'neutral',
      },
      {
        id: 'about-2',
        pose: '/images/sprites/ignacio_laugh.svg',
        text: {
          es: 'Fuera de la pantalla me gusta trastear con electrónica antigua, la música, la fotografía y tomar un buen café.',
          en: 'Outside the IDE I enjoy tinkering with retro electronics, music production, photography, and great coffee.',
        },
        mood: 'happy',
      },
    ],
  },

  github: {
    chapterId: 'github',
    title: {
      es: 'GITHUB OFICIAL',
      en: 'OFFICIAL GITHUB',
    },
    lines: [
      {
        id: 'gh-1',
        pose: '/images/sprites/ignacio_github.svg',
        text: {
          es: '¡Bienvenido a mi GitHub (@Ignaciobrenas)! Cuento con más de 30 repositorios públicos donde priorizo TypeScript estricto con cero tipos "any".',
          en: 'Welcome to my GitHub (@Ignaciobrenas)! I host over 30 public repositories adhering to 100% strict TypeScript with zero "any" types.',
        },
        mood: 'tech',
      },
      {
        id: 'gh-2',
        pose: '/images/sprites/ignacio_coding.svg',
        text: {
          es: 'Destacan DAMA-CRM con 116 tests pasando, el Canva Connector MCP con OAuth 2.0 PKCE y Argus Fraud Radar con ML en tiempo real.',
          en: 'Highlights include DAMA-CRM with 116 passing tests, Canva Connector MCP with OAuth 2.0 PKCE, and Argus Fraud Radar with real-time ML.',
        },
        mood: 'confident',
      },
    ],
  },

  linkedin: {
    chapterId: 'linkedin',
    title: {
      es: 'RED PROFESIONAL',
      en: 'LINKEDIN NETWORK',
    },
    lines: [
      {
        id: 'li-1',
        pose: '/images/sprites/ignacio_linkedin.svg',
        text: {
          es: 'En LinkedIn conecto con la comunidad técnica y comparto mi labor como Software Developer Intern en Soterguard.',
          en: 'On LinkedIn I connect with the engineering community and share updates on my role as Software Developer Intern at Soterguard.',
        },
        mood: 'confident',
      },
      {
        id: 'li-2',
        pose: '/images/sprites/ignacio_wave.svg',
        text: {
          es: 'Estoy en búsqueda activa con disponibilidad inmediata en Barcelona (híbrido) o en remoto para todo el mundo.',
          en: 'I am actively open to work with immediate availability in Barcelona (hybrid) or 100% remote worldwide.',
        },
        mood: 'happy',
      },
    ],
  },

  credly: {
    chapterId: 'credly',
    title: {
      es: 'CREDENCIALES VERIFICADAS',
      en: 'VERIFIED CREDENTIALS',
    },
    lines: [
      {
        id: 'cr-1',
        pose: '/images/sprites/ignacio_credly.svg',
        text: {
          es: 'En Credly puedes verificar criptográficamente mis 4 insignias oficiales emitidas por Cisco Networking Academy e IBM.',
          en: 'On Credly you can cryptographically verify my 4 official badges issued by Cisco Networking Academy and IBM.',
        },
        mood: 'excited',
      },
      {
        id: 'cr-2',
        pose: '/images/sprites/ignacio_confident.svg',
        text: {
          es: 'Acreditan competencias prácticas y auditadas en Ethical Hacking, Ciberseguridad, Metodologías Ágiles y Ciencia de Datos.',
          en: 'They certify verified hands-on skills in Ethical Hacking, Cybersecurity, Agile Methodologies, and Data Science.',
        },
        mood: 'tech',
      },
    ],
  },

  contact: {
    chapterId: 'contact',
    title: {
      es: 'CONTACTO',
      en: 'CONTACT',
    },
    lines: [
      {
        id: 'contact-1',
        pose: '/images/sprites/ignacio_mail.svg',
        text: {
          es: '¿Tienes una propuesta interesante o buscas a alguien para tu equipo técnico? ¡Me encantará charlar contigo!',
          en: 'Do you have an exciting technical challenge or an open position on your engineering team? I would love to connect!',
        },
        mood: 'contact',
      },
      {
        id: 'contact-2',
        pose: '/images/sprites/ignacio_call.svg',
        text: {
          es: 'Puedes escribirme por correo directo, conectar en LinkedIn o pulsar en cualquiera de los botones de contacto.',
          en: 'Feel free to send me an email, connect on LinkedIn, or trigger any of the direct contact buttons.',
        },
        mood: 'contact',
      },
      {
        id: 'contact-3',
        pose: '/images/sprites/ignacio_grateful.svg',
        text: {
          es: '¡Muchas gracias por visitar mi portfolio interactivo! ¡Hablamos pronto!',
          en: 'Thank you so much for taking the time to explore my portfolio! Hope to speak with you soon!',
        },
        mood: 'happy',
      },
    ],
  },
};
