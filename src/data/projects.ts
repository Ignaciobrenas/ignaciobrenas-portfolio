export interface PersonalProject {
  id: string
  titleKey: string
  descKey: string
  tech: string[]
  github: string
  demo?: string
  featured: boolean
  highlightBadge: string
  stars?: number
}

export interface AcademicProject {
  id: string
  name: string
  description: string
  category: 'java' | 'php' | 'qa' | 'web'
  tech: string[]
  github: string
  highlights?: string
}

export const personalProjects: PersonalProject[] = [
  {
    id: 'canva-mcp',
    titleKey: 'projects.canvaMCP.title',
    descKey: 'projects.canvaMCP.desc',
    tech: ['Node.js', 'Model Context Protocol (MCP)', 'OAuth 2.0 PKCE', 'AI Agents', 'Canva API'],
    github: 'https://github.com/Ignaciobrenas/canva-connector-mcp',
    featured: true,
    highlightBadge: 'AI & MCP Protocol',
  },
  {
    id: 'argus-fraud',
    titleKey: 'projects.argusFraud.title',
    descKey: 'projects.argusFraud.desc',
    tech: ['PySpark', 'LightGBM', 'Medallion Architecture', 'FastAPI', 'Streamlit', 'Python'],
    github: 'https://github.com/Ignaciobrenas/Argus-Fraud-Radar',
    featured: true,
    highlightBadge: 'UNITA Erasmus+ BIP Winner',
  },
  {
    id: 'skeleton-meme',
    titleKey: 'projects.skeletonMeme.title',
    descKey: 'projects.skeletonMeme.desc',
    tech: ['Python', 'MediaPipe Face Mesh', 'OpenCV', 'Computer Vision'],
    github: 'https://github.com/Ignaciobrenas/Skeleton-Meme',
    featured: true,
    highlightBadge: 'Computer Vision',
  },
  {
    id: 'run-and-eat-2',
    titleKey: 'projects.runAndEat2.title',
    descKey: 'projects.runAndEat2.desc',
    tech: ['Laravel 11', 'Vue.js', 'Tailwind CSS', 'Vite', 'MySQL'],
    github: 'https://github.com/Ignaciobrenas/RunAndEat-2.0.0',
    featured: false,
    highlightBadge: 'Full-Stack Modern',
  },
  {
    id: 'dama-crm',
    titleKey: 'projects.damaCrm.title',
    descKey: 'projects.damaCrm.desc',
    tech: ['TypeScript', 'Node.js', 'PostgreSQL', 'PrismaORM'],
    github: 'https://github.com/Ignaciobrenas/DAMA-CRM',
    featured: false,
    highlightBadge: 'Enterprise CRM',
  },
  {
    id: 'lugia-terminal',
    titleKey: 'projects.lugiaTerminal.title',
    descKey: 'projects.lugiaTerminal.desc',
    tech: ['PowerShell', 'Windows Terminal', 'Cyberpunk Neon CLI'],
    github: 'https://github.com/Ignaciobrenas/lugia-terminal-setup',
    featured: false,
    highlightBadge: 'Dev Environment',
  },
  {
    id: 'portfolio-old',
    titleKey: 'projects.portfolioOld.title',
    descKey: 'projects.portfolioOld.desc',
    tech: ['HTML5', 'CSS3 Glassmorphism', 'JavaScript', 'Vercel'],
    github: 'https://github.com/Ignaciobrenas/Portfolio',
    demo: 'https://porfoli-gamma.vercel.app',
    featured: false,
    highlightBadge: 'V1 Portfolio',
  },
]

export const academicProjects: AcademicProject[] = [
  // Java & OOP
  {
    id: 'cardealership-mysql',
    name: 'CarDealership-Java-MySQL',
    description: 'Sistema integral de concesionario vehicular aplicando patrón arquitectónico DAO y persistencia en MySQL vía JDBC.',
    category: 'java',
    tech: ['Java', 'JDBC', 'MySQL', 'DAO Pattern', 'STUCOM'],
    github: 'https://github.com/Ignaciobrenas/CarDealership-Java-MySQL',
    highlights: 'Patrón DAO & Transacciones JDBC',
  },
  {
    id: 'java-shop',
    name: 'Java-Shop-Management',
    description: 'Gestión completa de tienda e inventario aplicando principios avanzados de Programación Orientada a Objetos en Java.',
    category: 'java',
    tech: ['Java', 'OOP', 'Inventario', 'Colecciones'],
    github: 'https://github.com/Ignaciobrenas/Java-Shop-Management',
    highlights: 'POO Avanzada & Modelado',
  },
  {
    id: 'startrek-census',
    name: 'StarTrek-Census-App-Java',
    description: 'Aplicación de censo galáctico modelando especies alienígenas y poblaciones planetarias mediante herencia y polimorfismo.',
    category: 'java',
    tech: ['Java', 'OOP', 'Simulación', 'Star Trek'],
    github: 'https://github.com/Ignaciobrenas/StarTrek-Census-App-Java',
    highlights: 'Herencia y Clases Abstractas',
  },
  {
    id: 'ignacio-bank',
    name: 'IgnacioBank-Management-System',
    description: 'Simulador bancario en Java con gestión de cuentas, depósitos, transferencias y control de saldos concurrentes.',
    category: 'java',
    tech: ['Java', 'OOP', 'Banking Core'],
    github: 'https://github.com/Ignaciobrenas/IgnacioBank-Management-System',
    highlights: 'Lógica Bancaria',
  },
  {
    id: 'java-people',
    name: 'Java_People',
    description: 'Aplicación desktop desarrollada con Java Swing implementando de forma estricta el patrón Model-View-Controller (MVC).',
    category: 'java',
    tech: ['Java', 'Swing GUI', 'MVC Pattern'],
    github: 'https://github.com/Ignaciobrenas/Java_People',
    highlights: 'Patrón MVC Estricto',
  },
  {
    id: 'student-management',
    name: 'Student-Management-System-Java',
    description: 'Gestión de expedientes académicos de estudiantes con validación de notas, filtros y persistencia de datos.',
    category: 'java',
    tech: ['Java', 'OOP', 'Gestión Académica'],
    github: 'https://github.com/Ignaciobrenas/Student-Management-System-Java',
  },
  {
    id: 'restaurant-staff',
    name: 'Restaurant-Staff-Management-Java',
    description: 'Jerarquía de empleados de hostelería demostrando polimorfismo, interfaces y métodos abstractos.',
    category: 'java',
    tech: ['Java', 'Polimorfismo', 'Interfaces'],
    github: 'https://github.com/Ignaciobrenas/Restaurant-Staff-Management-Java',
  },
  {
    id: 'cardealership-oop',
    name: 'CarDealership-Java-OOP',
    description: 'Simulador de roles de empleados de concesionario vehicular con jerarquía de herencia orientada a objetos.',
    category: 'java',
    tech: ['Java', 'Herencia', 'OOP'],
    github: 'https://github.com/Ignaciobrenas/CarDealership-Java-OOP',
  },
  {
    id: 'java-store-fundamentals',
    name: 'Java-Store-Fundamentals',
    description: 'Ejercicios de consola y fundamentos de arquitectura de clases en Java.',
    category: 'java',
    tech: ['Java', 'POO Fundamentos'],
    github: 'https://github.com/Ignaciobrenas/Java-Store-Fundamentals',
  },
  {
    id: 'digital-clock',
    name: 'Digital-Clock-Java',
    description: 'Utilidad y simulación de reloj digital en tiempo real con formateo dinámico en consola.',
    category: 'java',
    tech: ['Java', 'Time API', 'Hilos'],
    github: 'https://github.com/Ignaciobrenas/Digital-Clock-Java',
  },

  // PHP & Backend
  {
    id: 'poo-bank-php',
    name: 'MP0613_RA3_POO_Bank',
    description: 'Simulador bancario con PHP 8.x, patrón Strategy (Overdraft), transacciones polimórficas y batería de tests en PHPUnit.',
    category: 'php',
    tech: ['PHP 8.x', 'Strategy Pattern', 'PHPUnit', 'TDD', 'DAW 2'],
    github: 'https://github.com/Ignaciobrenas/MP0613_RA3_POO_Bank',
    highlights: 'Strategy Pattern & PHPUnit TDD',
  },
  {
    id: 'nurse-simulator',
    name: 'Nurse-Simulator',
    description: 'Simulador interactivo de protocolos médicos y enfermería desarrollado con el framework Symfony en PHP.',
    category: 'php',
    tech: ['PHP', 'Symfony', 'Simulador Médico'],
    github: 'https://github.com/Ignaciobrenas/Nurse-Simulator',
    highlights: 'Framework Symfony',
  },
  {
    id: 'intro-php-50',
    name: 'MP0613_RA1RA2_IntroPHP',
    description: '50 ejercicios prácticos de desarrollo backend en PHP con 190 tests PHPUnit automatizados para verificación integral.',
    category: 'php',
    tech: ['PHP', '190 Tests', 'PHPUnit', 'Algoritmia'],
    github: 'https://github.com/Ignaciobrenas/MP0613_RA1RA2_IntroPHP',
    highlights: '190 Tests Automatizados',
  },
  {
    id: 'php-sessions',
    name: 'PHP-Sessions-Practices',
    description: 'Control de sesiones de usuario, estado de autenticación, control de expiración y persistencia segura en PHP.',
    category: 'php',
    tech: ['PHP', 'Sesiones HTTP', 'Seguridad'],
    github: 'https://github.com/Ignaciobrenas/PHP-Sessions-Practices',
  },
  {
    id: 'php-forms-validation',
    name: 'PHP-Forms-Validation-Practices',
    description: 'Sanitización de inputs, validación en servidor contra XSS/inyecciones y renderizado condicional de errores.',
    category: 'php',
    tech: ['PHP', 'Sanitización', 'Seguridad Web'],
    github: 'https://github.com/Ignaciobrenas/PHP-Forms-Validation-Practices',
  },
  {
    id: 'php-arrays',
    name: 'PHP-Arrays-Practices',
    description: 'Estructuras de datos asociativas, ordenación algorítmica y tratamiento matricial en PHP.',
    category: 'php',
    tech: ['PHP', 'Algoritmos', 'Estructuras'],
    github: 'https://github.com/Ignaciobrenas/PHP-Arrays-Practices',
  },
  {
    id: 'php-fundamentals',
    name: 'PHP-Fundamentals-Practices',
    description: 'Estructuras de control, funciones puras y fundamentos del motor PHP.',
    category: 'php',
    tech: ['PHP', 'Sintaxis', 'Fundamentos'],
    github: 'https://github.com/Ignaciobrenas/PHP-Fundamentals-Practices',
  },

  // QA & Testing
  {
    id: 'dojo-search-qa',
    name: 'DojoSearch-Platform',
    description: 'Laboratorio de QA y code review: detección, aislamiento y corrección de defectos de renderizado y lógica.',
    category: 'qa',
    tech: ['QA', 'Code Review', 'Bug Fixing', 'PHP'],
    github: 'https://github.com/Ignaciobrenas/DojoSearch-Platform',
    highlights: 'Inspección de Defectos & QA',
  },
  {
    id: 'find-ur-music-qa',
    name: 'FindUrMusic-Platform',
    description: 'Laboratorio de depuración backend en plataforma musical: análisis de consultas PDO, trazabilidad de errores y parches.',
    category: 'qa',
    tech: ['QA', 'PDO Debugging', 'Code Review', 'PHP'],
    github: 'https://github.com/Ignaciobrenas/FindUrMusic-Platform',
    highlights: 'Depuración PDO & Backend',
  },
  {
    id: 'knockout-zone-qa',
    name: 'KnockoutZone-Platform',
    description: 'Laboratorio de resolución de fallos en plataforma web: refactorización de código defectuoso y testeo funcional.',
    category: 'qa',
    tech: ['QA', 'Debugging', 'Refactor', 'PHP'],
    github: 'https://github.com/Ignaciobrenas/KnockoutZone-Platform',
  },

  // Web
  {
    id: 'run-and-eat-v1',
    name: 'RunAndEat',
    description: 'Plataforma original de eventos gastronómicos urbanos con PHP nativo, MySQL relacional, JavaScript y servidor Apache.',
    category: 'web',
    tech: ['PHP Vanilla', 'MySQL', 'JavaScript', 'Apache'],
    github: 'https://github.com/Ignaciobrenas/RunAndEat',
    highlights: 'Stack LAMP Clásico',
  },
]
