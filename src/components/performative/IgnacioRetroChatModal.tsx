import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  X, Send, Sparkles, Volume2, VolumeX, RotateCcw, MessageSquare, 
  Briefcase, Car, Terminal, MapPin, Bot, Award, Mail, Star, 
  ShieldCheck, Zap, Square, Code2, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { retroAudio } from '../../utils/retroAudio';

export interface IgnacioRetroChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: 'es' | 'en';
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'ignacio';
  text: string;
  pose?: string;
  timestamp: string;
}

interface FaqItem {
  id: string;
  label: { es: string; en: string };
  icon: React.ReactNode;
  userQuestion: { es: string; en: string };
  ignacioAnswer: { es: string; en: string };
  pose: string;
}

const TALK_FRAMES = [
  '/images/sprites/ignacio_talk_mid.svg',
  '/images/sprites/ignacio_talk_open.svg',
  '/images/sprites/ignacio_talk_gesture.svg',
];

const SOTERGUARD_TALK_FRAMES = [
  '/images/sprites/ignacio_soterguard_talk_mid.svg',
  '/images/sprites/ignacio_soterguard_talk_open.svg',
  '/images/sprites/ignacio_soterguard_talk_gesture.svg',
];

export const IgnacioRetroChatModal: React.FC<IgnacioRetroChatModalProps> = ({
  isOpen,
  onClose,
  lang = 'es',
}) => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [currentPose, setCurrentPose] = useState<string>('/images/sprites/ignacio_wave.svg');
  const [displayedAnswer, setDisplayedAnswer] = useState<string>('');
  const [isMuted, setIsMuted] = useState<boolean>(() => retroAudio.getMuted());
  const [autoReceiveMode, setAutoReceiveMode] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimerRef = useRef<number | null>(null);
  const mouthTimerRef = useRef<number | null>(null);
  const pendingAnswerRef = useRef<{
    fullText: string;
    finalPose: string;
    isSoterguard: boolean;
  } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const faqScrollRef = useRef<HTMLDivElement>(null);

  // FAQ Topics configured with exact real-world information requested by the user
  const FAQ_TOPICS: FaqItem[] = [
    {
      id: 'experience',
      label: { es: 'Soterguard & Experiencia', en: 'Soterguard & Experience' },
      icon: <Briefcase className="size-3.5 text-[#10b981]" />,
      userQuestion: {
        es: '¿Cuál es tu experiencia laboral y qué has construido en producción?',
        en: 'What is your work experience and what have you engineered in production?',
      },
      ignacioAnswer: {
        es: '* Actualmente trabajo como Full Stack Developer Intern en Soterguard con automatizaciones en n8n. Participo en todas las etapas del ciclo de desarrollo de aplicaciones On-Premise y en el ecosistema Stoam SaaS (Stoam Connect), utilizando TypeScript, Node.js, React, Tailwind CSS y Python.\n\n* Integro sistemas con ERPs empresariales líderes (Sage, A3ERP y Odoo) para sincronización de inventarios, pedidos y facturación, además de gestionar bases de datos PostgreSQL con PrismaORM y despliegues con Docker y LXC.\n\n* En mi día a día trabajo bajo metodología Agile con tableros Kanban, resolviendo incidencias técnicas en entornos de producción de PYMES y realizando llamadas directas con clientes para entender sus necesidades y darles soluciones rápidas.\n\n* Anteriormente estuve en VimTech en diagnóstico y reparación de hardware Apple y Linux, y en AJMA como voluntario audiovisual y administrador web.',
        en: '* Currently, I work as a Full Stack Developer Intern at Soterguard with n8n workflow automations. I participate in every stage of the software development lifecycle for On-Premise and web solutions, as well as the Stoam SaaS (Stoam Connect) ecosystem, utilizing TypeScript, Node.js, React, Tailwind CSS, and Python.\n\n* I build deep integrations with market-leading ERP platforms (Sage, A3ERP, Odoo) for bidirectional data synchronization, managing PostgreSQL with PrismaORM and Docker/LXC deployments.\n\n* I operate under Agile methodologies with Kanban project boards, resolving production incidents for SMEs and conducting direct discovery and support calls with clients to address their business needs.\n\n* Previously, I worked at VimTech in Apple hardware diagnostics and Linux hardening, and at AJMA managing audiovisual tech and official web infrastructure.',
      },
      pose: '/images/sprites/ignacio_soterguard_confident.svg',
    },
    {
      id: 'personal-projects',
      label: { es: 'Proyectos Personales', en: 'Personal Projects' },
      icon: <Code2 className="size-3.5 text-[#10b981]" />,
      userQuestion: {
        es: '¿Cuáles son tus proyectos personales y qué tecnologías utilizas en ellos?',
        en: 'What are your personal projects and what technologies do you use in them?',
      },
      ignacioAnswer: {
        es: '* Mis proyectos personales reflejan mi pasión por la ingeniería rigurosa y las arquitecturas de alta fiabilidad:\n\n1. DAMA-CRM (TypeScript 100% estricto · Node.js · PostgreSQL · PrismaORM · Redis · 116 tests):\nCRM y ERP modular empresarial con cero "any". Implementa facturación legal certificada ISO 19005-1 (PDF/A-3b), sincronización bidireccional con Apple Calendar (CalDAV/EventKit), auditoría transaccional estricta y 116 tests automatizados pasando.\n\n2. Canva Connector MCP (TypeScript · Model Context Protocol · OAuth 2.0 PKCE):\nServidor local de IA que conecta asistentes LLM (como Claude o Cursor) directamente con las APIs de diseño de Canva siguiendo la especificación MCP de Anthropic con autenticación segura y esquemas Zod estrictos.\n\n3. Argus Fraud Radar (PySpark · LightGBM · Big Data · ML):\nMotor predictivo de detección de fraudes con inferencia en <15ms sobre flujos masivos de transacciones, desarrollado para el programa europeo UNITA Erasmus+ BIP.\n\n4. Skeleton-Meme Tool (Python · OpenCV · MediaPipe):\nPipeline de visión artificial en tiempo real a 60 FPS con tracking de articulaciones corriendo 100% en CPU sin requerir tarjeta gráfica dedicada.\n\n5. HyperTerminal Neón (PowerShell 7 · Windows Terminal · Debian):\nEntorno CLI cyberpunk de ultra-baja latencia con arranque optimizado (<10ms) y autocompletado predictivo.',
        en: '* My personal projects demonstrate my dedication to clean code, performance, and deterministic software architectures:\n\n1. DAMA-CRM (100% Strict TypeScript · Node.js · PostgreSQL · PrismaORM · Redis · 116 tests):\nModular enterprise CRM & ERP with zero "any" types. Incorporates ISO 19005-1 legal invoicing (PDF/A-3b), bidirectional Apple Calendar synchronization, transactional audit logging, and 116 passing tests.\n\n2. Canva Connector MCP (TypeScript · Model Context Protocol · OAuth 2.0 PKCE):\nAutonomous local AI server linking LLMs (Claude, Cursor) to Canva design APIs via Anthropic\'s MCP standard with strict PKCE token security.\n\n3. Argus Fraud Radar (PySpark · LightGBM · Big Data · ML):\nPredictive fraud analytics engine delivering <15ms inference latency across high-throughput data pipelines for the UNITA Erasmus+ BIP initiative.\n\n4. Skeleton-Meme Tool (Python · OpenCV · MediaPipe):\nReal-time 60 FPS computer vision and pose tracking pipeline executing purely on standard CPU without dedicated GPU requirements.\n\n5. HyperTerminal Neon (PowerShell 7 · Windows Terminal · Debian):\nLow-latency cyberpunk CLI workstation tuned for PowerShell 7 and Debian with sub-10ms launch times and predictive completion.',
      },
      pose: '/images/sprites/ignacio_coding.svg',
    },
    {
      id: 'java',
      label: { es: 'Java & Proyectos STUCOM', en: 'Java & STUCOM Projects' },
      icon: <Terminal className="size-3.5 text-[#ea2d2e]" />,
      userQuestion: {
        es: '¿Qué experiencia tienes en Java y qué proyectos académicos has desarrollado?',
        en: 'What is your background in Java and what academic projects have you built?',
      },
      ignacioAnswer: {
        es: '* ¡Domino Java con sólidos fundamentos de arquitectura! En el centro de estudios STUCOM Pelai he desarrollado proyectos troncales aplicando POO avanzada, concurrencia, JDBC y persistencia híbrida:\n\n1. StarSTUCOM: Simulador galáctico en Java puro con polimorfismo, herencia, interfaces, genéricos y gestión de especies y flotas.\n2. IgnacioBank: Motor bancario transaccional con validación estricta de cuentas (IBAN), rutinas concurrentes atómicas y libros de transacciones contables inmutables.\n3. AutoGest Concesionario: Aplicación de escritorio Java Swing con persistencia híbrida en MySQL y ficheros binarios serializados.\n4. Nurse Simulator: Plataforma web de simulación clínica en Symfony (PHP/Twig/MySQL).',
        en: '* I have strong Java skills with rigorous architectural foundations! At STUCOM Pelai, I built core deliverables applying advanced OOP, multithreading, JDBC, and hybrid persistence:\n\n1. StarSTUCOM: Galactic-scale space simulation in pure Java featuring polymorphism, inheritance, interfaces, generics, and fleet combat.\n2. IgnacioBank: Transactional banking engine with strict IBAN validation, atomic concurrency routines, and immutable audit logs.\n3. AutoGest Dealership: Desktop Java Swing GUI with hybrid persistence across MySQL and serialized binary files.\n4. Nurse Simulator: Clinical care web training platform built with Symfony (PHP/Twig/MySQL).',
      },
      pose: '/images/sprites/ignacio_coding.svg',
    },
    {
      id: 'mobility',
      label: { es: 'Movilidad & Transporte', en: 'Mobility & Travel' },
      icon: <Car className="size-3.5 text-[#38bdf8]" />,
      userQuestion: {
        es: '¿Qué disponibilidad de movilidad y desplazamientos tienes?',
        en: 'What is your mobility status and travel availability?',
      },
      ignacioAnswer: {
        es: '* ¡Tengo total movilidad! Actualmente me muevo a diario con máxima puntualidad y soltura en transporte público (red de trenes/Rodalies, metro y autobuses) por toda Barcelona y su área metropolitana.\n\n* ¡Y una novedad muy importante: actualmente me estoy sacando el carnet de conducir de coche para disponer en breve de vehículo propio y movilidad geográfica 100% independiente!\n\n* Estoy disponible tanto para puestos presenciales o híbridos en Cataluña como para puestos 100% remotos.',
        en: '* I have full mobility! Currently, I commute seamlessly via public transit (trains, subway, buses) throughout Barcelona and the entire metropolitan area.\n\n* Plus an exciting update: I am currently working on obtaining my driver\'s license (carnet de coche) to achieve full independent vehicular mobility very soon!\n\n* I am fully open to on-site, hybrid (Barcelona area), and 100% remote engineering positions.',
      },
      pose: '/images/sprites/ignacio_thumbs_up.svg',
    },
    {
      id: 'stack',
      label: { es: 'Stack Tecnológico', en: 'Tech Stack' },
      icon: <Terminal className="size-3.5 text-[#34d399]" />,
      userQuestion: {
        es: '¿Cuál es tu stack tecnológico principal y qué criterios de arquitectura aplicas?',
        en: 'What is your primary tech stack and architecture philosophy?',
      },
      ignacioAnswer: {
        es: '* Mi núcleo principal es TypeScript con tipado 100% estricto (cero tipos "any"), Node.js, Java (POO avanzada, concurrencia, JDBC y Swing), Python, PostgreSQL y PrismaORM para persistencia relacional transaccional.\n\n* En infraestructura: Docker, contenedores LXC, WSL, Linux SysAdmin (Debian/Ubuntu) y Nginx.\n\n* En frontend: React, Vue.js, Tailwind CSS y Vite.\n\n* Mi criterio: cero bloat innecesario. Arquitectura orientada a contratos estrictos, baja latencia y observabilidad real en producción.',
        en: '* My core stack is 100% strict TypeScript (zero "any" types), Node.js, Java (advanced OOP, multithreading, JDBC, Swing), Python, PostgreSQL, and PrismaORM for ACID relational persistence.\n\n* In infrastructure: Docker, LXC containers, WSL, Linux SysAdmin (Debian/Ubuntu), and Nginx.\n\n* In frontend: React, Vue.js, Tailwind CSS, and Vite.\n\n* My philosophy: zero unnecessary bloat. Strictly typed data contracts, sub-millisecond latencies, and production observability.',
      },
      pose: '/images/sprites/ignacio_coding.svg',
    },
    {
      id: 'location',
      label: { es: 'Ubicación & Modalidad', en: 'Location & Work Mode' },
      icon: <MapPin className="size-3.5 text-[#f59e0b]" />,
      userQuestion: {
        es: '¿Dónde resides y en qué modalidad de trabajo prefieres incorporarte?',
        en: 'Where are you based and what work mode do you prefer?',
      },
      ignacioAnswer: {
        es: '* Resido en el área de Barcelona (España).\n\n* Modalidades: Estoy totalmente abierto tanto a modelo Híbrido (en Barcelona y alrededores) como a modelo 100% Remoto para cualquier parte del mundo.\n\n* Dispongo de una estación de trabajo optimizada de alto rendimiento y conexión de fibra óptica simétrica de ultra-baja latencia.',
        en: '* I am based in the Barcelona metropolitan area (Spain).\n\n* Work models: Fully open to Hybrid setups in the Barcelona area or 100% Remote positions globally.\n\n* I maintain a high-performance local developer workstation and ultra-low-latency fiber optic networking.',
      },
      pose: '/images/sprites/ignacio_coffee.svg',
    },
    {
      id: 'ai-mcp',
      label: { es: 'IA & Protocolo MCP', en: 'AI & MCP Tooling' },
      icon: <Bot className="size-3.5 text-[#a855f7]" />,
      userQuestion: {
        es: '¿Cómo trabajas con agentes de IA y qué es el Canva Connector MCP?',
        en: 'How do you engineer AI agents and what is the Canva Connector MCP?',
      },
      ignacioAnswer: {
        es: '* He desarrollado el Canva Connector MCP, un servidor que implementa el estándar Model Context Protocol de Anthropic para conectar asistentes LLM (como Claude o Cursor) directamente con las APIs de diseño de Canva.\n\n* Incorpora autenticación OAuth 2.0 PKCE autónoma sin fugas de credenciales y esquemas JSON estrictamente tipados.\n\n* Mi forma de trabajar: yo actúo como arquitecto definiendo alcance y contratos; los agentes ejecutan tareas de código en paralelo bajo arneses de tests automáticos.',
        en: '* I engineered the Canva Connector MCP, a local server implementing Anthropic\'s Model Context Protocol standard to connect LLMs directly to Canva APIs.\n\n* It features autonomous OAuth 2.0 PKCE authentication with zero credential leaks and strictly typed JSON tool schemas.\n\n* My agent workflow: I design the scope and contracts; autonomous subagents implement features in parallel under strict automated test suites.',
      },
      pose: '/images/sprites/ignacio_ai_holo.svg',
    },
    {
      id: 'projects',
      label: { es: 'Proyectos Destacados', en: 'Top Deliverables' },
      icon: <Star className="size-3.5 text-[#eab308]" />,
      userQuestion: {
        es: '¿Qué proyectos me recomiendas revisar para evaluar tu nivel técnico?',
        en: 'Which repositories do you recommend to assess your technical depth?',
      },
      ignacioAnswer: {
        es: '* Te recomiendo especialmente estos repositorios destacados:\n\n1. DAMA-CRM: Mi proyecto estrella. CRM y ERP modular empresarial con TypeScript 100% estricto (cero any), PostgreSQL, PrismaORM, Redis, facturación legal ISO 19005-1 (PDF/A-3b), sincronización con Apple Calendar y 116 tests pasando.\n2. Argus Fraud Radar: Pipeline de Big Data y ML desarrollado para el programa europeo UNITA Erasmus+ BIP con inferencia en <15ms sobre PySpark y LightGBM.\n3. StarSTUCOM & IgnacioBank: Proyectos troncales en Java con arquitectura POO avanzada, concurrencia y persistencia transaccional.\n4. Canva Connector MCP: Integración de IA con el protocolo Model Context Protocol (MCP) y flujo seguro OAuth 2.0 PKCE en local.\n5. Skeleton-Meme Tool: Visión artificial en tiempo real con OpenCV y MediaPipe a 60 FPS corriendo exclusivamente en CPU.',
        en: '* I specifically recommend inspecting these key deliverables:\n\n1. DAMA-CRM: My flagship project. An enterprise modular CRM & ERP built with 100% strict TypeScript (zero any), PostgreSQL, PrismaORM, Redis, legal ISO 19005-1 invoicing (PDF/A-3b), Apple Calendar synchronization, and 116 passing tests.\n2. Argus Fraud Radar: Big Data & ML pipeline built for the UNITA Erasmus+ BIP program with <15ms inference on PySpark & LightGBM.\n3. StarSTUCOM & IgnacioBank: Core Java deliverables featuring advanced OOP, concurrency routines, and transactional persistence.\n4. Canva Connector MCP: Autonomous AI tooling with Anthropic\'s Model Context Protocol and local OAuth 2.0 PKCE.\n5. Skeleton-Meme Tool: Real-time computer vision at 60 FPS purely on standard CPU via OpenCV and MediaPipe.',
      },
      pose: '/images/sprites/ignacio_idea.svg',
    },
    {
      id: 'certifications',
      label: { es: 'Certificaciones Cisco / IBM', en: 'Cisco / IBM Credentials' },
      icon: <Award className="size-3.5 text-[#38bdf8]" />,
      userQuestion: {
        es: '¿Qué certificaciones y credenciales verificadas posees?',
        en: 'What verified certifications and badges do you hold?',
      },
      ignacioAnswer: {
        es: '* Cuento con 4 insignias verificadas en Credly emitidas oficialmente por Cisco Networking Academy e IBM:\n\n- Cisco Networking Academy: Fundamentos de redes, direccionamiento IP, conmutación y capas de transporte.\n- IBM: Fundamentos de software, metodología y ciberseguridad.\n\n* Esto me permite entender la ingeniería desde el paquete físico en el cable hasta la aplicación web.',
        en: '* I hold 4 verified badges on Credly issued by Cisco Networking Academy and IBM:\n\n- Cisco Networking Academy: Networking fundamentals, IP routing, transport protocols.\n- IBM: Software engineering, agile development, and cybersecurity.\n\n* This grounding allows me to troubleshoot issues from network packets to high-level application architectures.',
      },
      pose: '/images/sprites/ignacio_read_specs.svg',
    },
    {
      id: 'contact',
      label: { es: 'Contacto & Contratación', en: 'Hire & Contact' },
      icon: <Mail className="size-3.5 text-[#ec4899]" />,
      userQuestion: {
        es: '¿Cómo podemos hablar para una entrevista o propuesta de trabajo?',
        en: 'How can we schedule an interview or discuss a job opening?',
      },
      ignacioAnswer: {
        es: '* ¡Estaré encantado de hablar contigo!\n\n- Formulario directo: Al final de este portfolio tienes la sección de contacto directo.\n- LinkedIn: linkedin.com/in/ignacio-breñas-muñoz-02a90b218\n- GitHub: github.com/Ignaciobrenas con más de 30 repositorios públicos.\n\n* Respondo habitualmente en menos de 24 horas.',
        en: '* I\'d love to connect with you!\n\n- Direct form: Available at the bottom section of this portfolio.\n- LinkedIn: linkedin.com/in/ignacio-breñas-muñoz-02a90b218\n- GitHub: github.com/Ignaciobrenas with 30+ public repos.\n\n* I typically respond within 24 hours.',
      },
      pose: '/images/sprites/ignacio_mail.svg',
    },
    {
      id: 'github',
      label: { es: 'GitHub & Open Source', en: 'GitHub & Open Source' },
      icon: <SiGithub className="size-3.5 text-[#10b981]" />,
      userQuestion: {
        es: '¿Qué proyectos y código abierto tienes en tu GitHub?',
        en: 'What projects and open-source systems do you host on GitHub?',
      },
      ignacioAnswer: {
        es: '* En mi GitHub oficial (github.com/Ignaciobrenas) tengo más de 30 repositorios públicos.\n\n* En todos ellos priorizo tipado 100% estricto en TypeScript (cero "any"), arquitectura modular, suites de tests automatizados y contenedores Docker listos para desplegar en producción.',
        en: '* On my official GitHub (github.com/Ignaciobrenas) I maintain over 30 public repositories.\n\n* Across all codebases, I enforce 100% strict TypeScript (zero "any"), modular design patterns, robust test suites, and production-ready Docker containers.',
      },
      pose: '/images/sprites/ignacio_github.svg',
    },
    {
      id: 'linkedin',
      label: { es: 'LinkedIn & Trayectoria', en: 'LinkedIn & Career' },
      icon: <FaLinkedin className="size-3.5 text-[#0ea5e9]" />,
      userQuestion: {
        es: '¿Cómo es tu red profesional en LinkedIn y cuál es tu disponibilidad?',
        en: 'What is your LinkedIn professional profile and current availability?',
      },
      ignacioAnswer: {
        es: '* En LinkedIn (linkedin.com/in/ignacio-breñas-muñoz-02a90b218) comparto mi trayectoria técnica y mi trabajo como Software Developer Intern en Soterguard.\n\n* Actualmente estoy "Open to Work" con disponibilidad inmediata tanto para posiciones híbridas en el área de Barcelona como en remoto 100%.',
        en: '* On LinkedIn (linkedin.com/in/ignacio-breñas-muñoz-02a90b218) I publish technical milestones and updates from my role as Software Developer Intern at Soterguard.\n\n* I am actively Open to Work with immediate availability for hybrid setups in Barcelona or 100% remote roles.',
      },
      pose: '/images/sprites/ignacio_linkedin.svg',
    },
    {
      id: 'credly',
      label: { es: 'Credly & 4 Insignias', en: 'Credly & 4 Badges' },
      icon: <ShieldCheck className="size-3.5 text-[#f59e0b]" />,
      userQuestion: {
        es: '¿Qué certificaciones tienes verificadas en Credly?',
        en: 'What verified credentials do you have on Credly?',
      },
      ignacioAnswer: {
        es: '* En Credly (credly.com/users/ignacio-brenas-munoz) tengo 4 insignias verificadas criptográficamente:\n\n1. Cisco Ethical Hacker\n2. IBM Agile Explorer\n3. Cisco Cybersecurity\n4. Cisco Data Science\n\n* Todas cuentan con respaldo digital emitido oficialmente por Cisco Networking Academy e IBM.',
        en: '* On Credly (credly.com/users/ignacio-brenas-munoz) I hold 4 cryptographically verified badges:\n\n1. Cisco Ethical Hacker\n2. IBM Agile Explorer\n3. Cisco Cybersecurity\n4. Cisco Data Science\n\n* All backed by official digital certificates issued by Cisco Networking Academy and IBM.',
      },
      pose: '/images/sprites/ignacio_credly.svg',
    },
  ];

  // Initialize initial greeting when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialGreeting: ChatMessage = {
        id: 'initial',
        sender: 'ignacio',
        text: lang === 'es'
          ? '* ¡Hola! Soy Ignacio Breñas en versión interactiva 32-Bit. Puedes preguntarme cualquier detalle sobre mi experiencia, stack técnico, ubicación o disponibilidad de movilidad pulsando los botones de abajo o escribiendo tu pregunta.'
          : "* Hi there! I'm Ignacio Breñas in 32-Bit interactive mode. Ask me anything about my experience, tech stack, location, or mobility status using the buttons below or typing directly.",
        pose: '/images/sprites/ignacio_wave.svg',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([initialGreeting]);
      setCurrentPose('/images/sprites/ignacio_wave.svg');
      retroAudio.playChime();
    }
  }, [isOpen, messages.length, lang]);

  // Lock body scroll and cleanup timers when modal is closed
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      if (typingTimerRef.current) window.clearTimeout(typingTimerRef.current);
      if (mouthTimerRef.current) window.clearInterval(mouthTimerRef.current);
      setIsTyping(false);
      setDisplayedAnswer('');
    }
    return () => {
      document.body.style.overflow = '';
      if (typingTimerRef.current) window.clearTimeout(typingTimerRef.current);
      if (mouthTimerRef.current) window.clearInterval(mouthTimerRef.current);
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, displayedAnswer, isTyping]);

  // Typewriter effect handler for answering
  const typeAnswer = useCallback((fullText: string, finalPose: string, isSoterguard: boolean = false) => {
    if (typingTimerRef.current) window.clearTimeout(typingTimerRef.current);
    if (mouthTimerRef.current) window.clearInterval(mouthTimerRef.current);

    pendingAnswerRef.current = { fullText, finalPose, isSoterguard };

    // If auto-receive mode is enabled, immediately commit the response without typewriter delay
    if (autoReceiveMode) {
      setIsTyping(false);
      setCurrentPose(finalPose);
      setMessages((prev) => [
        ...prev,
        {
          id: `ignacio-${Date.now()}`,
          sender: 'ignacio',
          text: fullText,
          pose: finalPose,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setDisplayedAnswer('');
      pendingAnswerRef.current = null;
      retroAudio.playChime();
      return;
    }

    setIsTyping(true);
    setDisplayedAnswer('');
    let charIdx = 0;
    let mouthIdx = 0;

    const activeTalkFrames = (isSoterguard || finalPose.includes('soterguard')) ? SOTERGUARD_TALK_FRAMES : TALK_FRAMES;

    // Mouth animation while typing
    mouthTimerRef.current = window.setInterval(() => {
      mouthIdx = (mouthIdx + 1) % activeTalkFrames.length;
      setCurrentPose(activeTalkFrames[mouthIdx]);
    }, 110);

    const typeNext = () => {
      if (charIdx < fullText.length) {
        const nextChar = fullText.charAt(charIdx);
        charIdx++;
        setDisplayedAnswer(fullText.slice(0, charIdx));

        if (nextChar !== ' ' && charIdx % 2 === 0) {
          retroAudio.playBlip();
        }

        let delay = 20;
        if (nextChar === '.' || nextChar === '!') delay = 120;
        else if (nextChar === ',' || nextChar === ':') delay = 60;

        typingTimerRef.current = window.setTimeout(typeNext, delay);
      } else {
        if (mouthTimerRef.current) window.clearInterval(mouthTimerRef.current);
        setIsTyping(false);
        setCurrentPose(finalPose);
        setMessages((prev) => [
          ...prev,
          {
            id: `ignacio-${Date.now()}`,
            sender: 'ignacio',
            text: fullText,
            pose: finalPose,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
        setDisplayedAnswer('');
        pendingAnswerRef.current = null;
      }
    };

    typingTimerRef.current = window.setTimeout(typeNext, 70);
  }, [autoReceiveMode]);

  // Instantly receive the complete message automatically without waiting
  const handleAutoReceive = useCallback(() => {
    if (!isTyping || !pendingAnswerRef.current) return;
    if (typingTimerRef.current) window.clearTimeout(typingTimerRef.current);
    if (mouthTimerRef.current) window.clearInterval(mouthTimerRef.current);

    const { fullText, finalPose } = pendingAnswerRef.current;
    setMessages((prev) => [
      ...prev,
      {
        id: `ignacio-${Date.now()}`,
        sender: 'ignacio',
        text: fullText,
        pose: finalPose,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setDisplayedAnswer('');
    setIsTyping(false);
    setCurrentPose(finalPose);
    pendingAnswerRef.current = null;
    retroAudio.playChime();
    setTimeout(() => inputRef.current?.focus(), 50);
  }, [isTyping]);

  // Stop answering immediately so user can ask something else right away
  const handleStop = useCallback(() => {
    if (!isTyping) return;
    if (typingTimerRef.current) window.clearTimeout(typingTimerRef.current);
    if (mouthTimerRef.current) window.clearInterval(mouthTimerRef.current);

    const finalPose = pendingAnswerRef.current?.finalPose || '/images/sprites/ignacio_confident.svg';
    if (displayedAnswer.trim()) {
      setMessages((prev) => [
        ...prev,
        {
          id: `ignacio-${Date.now()}`,
          sender: 'ignacio',
          text: displayedAnswer + (t('chat.stoppedSuffix') || ' [Respuesta detenida]'),
          pose: finalPose,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }

    setDisplayedAnswer('');
    setIsTyping(false);
    setCurrentPose(finalPose);
    pendingAnswerRef.current = null;
    retroAudio.playBlip();
    setTimeout(() => inputRef.current?.focus(), 50);
  }, [isTyping, displayedAnswer, t]);

  // Horizontal scroll helper for quick FAQ pills
  const scrollFaqBar = (direction: 'left' | 'right') => {
    if (faqScrollRef.current) {
      const offset = direction === 'left' ? -260 : 260;
      faqScrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
      retroAudio.playBlip();
    }
  };

  // Handle selecting an FAQ item
  const handleSelectFaq = (faq: FaqItem) => {
    if (isTyping) return;

    const userQ = faq.userQuestion[lang] || faq.userQuestion.es;
    const ignacioA = faq.ignacioAnswer[lang] || faq.ignacioAnswer.es;

    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        sender: 'user',
        text: userQ,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);

    const isSoterguard = Boolean(faq.id === 'experience' || faq.pose.includes('soterguard'));
    typeAnswer(ignacioA, faq.pose, isSoterguard);
  };

  // Keyword intent matching for freeform text questions
  const handleSendCustomText = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isTyping) return;

    const userText = inputText.trim();
    setInputText('');

    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        sender: 'user',
        text: userText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);

    const lower = userText.toLowerCase().trim();

    // A. Saludos / Greetings (hola, hello, hey, buenas, etc.)
    if (/^(hola|buenas|buenos d[ií]as|buenas tardes|buenas noches|hey|hello|hi|saludos|qu[eé] tal|c[oó]mo est[aá]s|what'?s up)/i.test(lower) || lower === 'hola' || lower === 'hello' || lower === 'hi' || lower === 'buenas' || lower === 'hey') {
      const answer = lang === 'es'
        ? '* ¡Hola! 👋 ¡Qué bien verte por aquí! Soy Ignacio Breñas en versión interactiva 32-Bit.\n\n* Puedes preguntarme cualquier detalle sobre mi trabajo como Full Stack Developer en Soterguard, mis proyectos personales (como DAMA-CRM o Canva Connector MCP), mi stack técnico o mi disponibilidad para trabajar. ¿Sobre qué te gustaría hablar?'
        : "* Hello! 👋 Great to have you here! I'm Ignacio Breñas in 32-Bit interactive companion mode.\n\n* Feel free to ask me anything about my Full Stack engineering work at Soterguard, my personal projects (such as DAMA-CRM or Canva Connector MCP), my tech stack, or my work availability. What would you like to explore?";
      typeAnswer(answer, '/images/sprites/ignacio_wave.svg', false);
      return;
    }

    // B. Despedidas / Farewells (adiós, adios, chao, chau, bye, see you, etc.)
    if (/^(adi[oó]s|chao|chau|hasta luego|hasta pronto|nos vemos|bye|goodbye|see you|cuidate|cu[ií]date)/i.test(lower) || lower === 'adios' || lower === 'adiós' || lower === 'bye' || lower === 'chao') {
      const answer = lang === 'es'
        ? '* ¡Hasta pronto! 👋 Muchas gracias por tu visita y por dedicar un rato a explorar mi portfolio.\n\n* Si quieres que hablemos sobre alguna oportunidad técnica o colaboración, puedes escribirme por el formulario de contacto o conectar en LinkedIn (linkedin.com/in/ignacio-breñas-muñoz-02a90b218). ¡Que tengas un excelente día!'
        : "* Goodbye! 👋 Thank you so much for taking the time to explore my work and engineering journey.\n\n* If you'd like to collaborate or discuss an engineering opportunity, feel free to reach out via the contact form or on LinkedIn (linkedin.com/in/ignacio-breñas-muñoz-02a90b218). Have a wonderful day!";
      typeAnswer(answer, '/images/sprites/ignacio_wave_both.svg', false);
      return;
    }

    // C. Agradecimientos / Gratitude (gracias, thank you, genial, etc.)
    if (/^(gracias|muchas gracias|mil gracias|genial|perfecto|top|crack|excelente|thanks|thank you|thx)/i.test(lower) || lower === 'gracias' || lower === 'thanks') {
      const answer = lang === 'es'
        ? '* ¡De nada! Es un placer compartir cómo construyo software de alto rendimiento. Si quieres comentar cualquier arquitectura en detalle o charlar sobre una oportunidad, ¡estaré encantado!'
        : "* You're very welcome! It's a true pleasure sharing how I build reliable, high-performance software. If you'd like to talk architecture or discuss an opportunity, feel free to connect!";
      typeAnswer(answer, '/images/sprites/ignacio_grateful.svg', false);
      return;
    }

    // D. Identidad / ¿Quién eres? (who are you, preséntate, etc.)
    if (
      lower.includes('quien eres') || 
      lower.includes('quién eres') || 
      lower.includes('como te llamas') || 
      lower.includes('cómo te llamas') || 
      lower.includes('who are you') || 
      lower.includes('what is your name') || 
      lower.includes('presentate') || 
      lower.includes('preséntate') || 
      lower.includes('sobre ti') || 
      lower.includes('hablame de ti') || 
      lower.includes('háblame de ti')
    ) {
      const answer = lang === 'es'
        ? '* ¡Mucho gusto! Soy Ignacio Breñas Muñoz, Desarrollador de Software y estudiante de DAW en Barcelona.\n\n* Me considero una persona curiosa, resolutiva y con gran capacidad de adaptación. Actualmente trabajo como Full Stack Developer Intern en Soterguard desarrollando software web y On-Premise con TypeScript, Node.js, React, Tailwind CSS y Python, implementando flujos de automatización en n8n e integrando sistemas ERP líderes (Sage, A3ERP y Odoo).'
        : "* Nice to meet you! I'm Ignacio Breñas Muñoz, Software Developer and DAW student based in Barcelona.\n\n* I'm a curious, proactive, and resilient problem-solver. Currently, I work as a Full Stack Developer Intern at Soterguard engineering web and On-Premise software with TypeScript, Node.js, React, Tailwind CSS, and Python, orchestrating n8n automations, and integrating core ERP platforms (Sage, A3ERP, Odoo).";
      typeAnswer(answer, '/images/sprites/ignacio_confident.svg', false);
      return;
    }

    // E. Estudios / Formación / Edad / STUCOM / DAW
    if (
      lower.includes('edad') || 
      lower.includes('años tienes') || 
      lower.includes('cuantos años') || 
      lower.includes('cuántos años') || 
      lower.includes('estudias') || 
      lower.includes('estudiando') || 
      lower.includes('daw') || 
      lower.includes('stucom') || 
      lower.includes('estudios') ||
      lower.includes('formacion') ||
      lower.includes('formación')
    ) {
      const answer = lang === 'es'
        ? '* Estoy en mi 2º año del Grado Superior en Desarrollo de Aplicaciones Web (DAW) en el centro de estudios STUCOM Pelai (Barcelona).\n\n* Además de mi formación técnica oficial, cuento con 4 certificaciones verificadas de Cisco e IBM en Credly y participé en el programa europeo UNITA Erasmus+ BIP desarrollando el pipeline de Big Data y Machine Learning Argus Fraud Radar.'
        : "* I am in my 2nd year of the Higher Technical Degree in Web Application Development (DAW) at STUCOM Pelai in Barcelona.\n\n* Alongside my technical academic career, I hold 4 verified credentials from Cisco and IBM on Credly, and participated in the European UNITA Erasmus+ BIP program engineering the Argus Fraud Radar ML pipeline.";
      typeAnswer(answer, '/images/sprites/ignacio_books.svg', false);
      return;
    }

    // F. Ayuda / ¿Qué puedes hacer? / Capacidades
    if (
      lower.includes('ayuda') || 
      lower.includes('help') || 
      lower.includes('que sabes hacer') || 
      lower.includes('qué sabes hacer') || 
      lower.includes('que puedes hacer') || 
      lower.includes('qué puedes hacer') || 
      lower.includes('opciones') || 
      lower.includes('comandos') ||
      lower.includes('que te puedo preguntar') ||
      lower.includes('qué te puedo preguntar')
    ) {
      const answer = lang === 'es'
        ? '* ¡Puedo darte detalles sobre cualquier faceta de mi perfil! Por ejemplo:\n\n1. Soterguard & Experiencia Full Stack, n8n y ERPs (Sage, A3ERP, Odoo)\n2. Proyectos Personales (DAMA-CRM, Canva Connector MCP, Argus Fraud, etc.)\n3. Stack Tecnológico (TypeScript, Node.js, React, Python, Docker, PostgreSQL)\n4. Movilidad y Vehículo (transporte público metropolitano y carnet en proceso)\n5. Certificaciones Cisco / IBM en Credly\n6. Disponibilidad para contratación y cómo contactarme\n\nPuedes pulsar cualquiera de los botones de la barra horizontal o escribir directamente tu consulta.'
        : "* I can provide detailed insights into every aspect of my engineering background! For example:\n\n1. Soterguard & Full Stack Experience, n8n, and ERPs (Sage, A3ERP, Odoo)\n2. Personal Projects (DAMA-CRM, Canva Connector MCP, Argus Fraud, etc.)\n3. Tech Stack (TypeScript, Node.js, React, Python, Docker, PostgreSQL)\n4. Mobility & Transportation (Barcelona transit and driver's license in progress)\n5. Cisco & IBM Verified Credentials on Credly\n6. Hiring Availability and how to get in touch\n\nTap any pill in the horizontal bar or type your inquiry directly!";
      typeAnswer(answer, '/images/sprites/ignacio_idea.svg', false);
      return;
    }

    // G. Sueldo / Disponibilidad / Incorporación (Hiring)
    if (
      lower.includes('sueldo') || 
      lower.includes('salario') || 
      lower.includes('tarifa') || 
      lower.includes('cuanto cobras') || 
      lower.includes('cuánto cobras') || 
      lower.includes('incorporacion') || 
      lower.includes('incorporación') || 
      lower.includes('cuando puedes') || 
      lower.includes('cuándo puedes') || 
      lower.includes('empezar') || 
      lower.includes('contratarte')
    ) {
      const answer = lang === 'es'
        ? '* ¡Tengo disponibilidad inmediata («Open to Work»)! Busco unirme a proyectos dinámicos donde aportar solvencia técnica como Full Stack o Backend Developer.\n\n* Modalidad: Totalmente abierto a modelo Híbrido en el área de Barcelona o 100% Remoto.\n\n* En cuanto a condiciones y detalles de contratación, estaré encantado de comentarlo en una llamada o entrevista. ¡Escríbeme por el formulario de contacto o conecta en LinkedIn!'
        : "* I have immediate availability ('Open to Work')! I'm actively looking to join high-performing engineering teams as a Full Stack or Backend Developer.\n\n* Setup: Fully open to Hybrid setups in Barcelona or 100% Remote.\n\n* Regarding compensation and contract details, I'd be glad to discuss them during an interview or introductory call. Drop me a line via the contact form or LinkedIn!";
      typeAnswer(answer, '/images/sprites/ignacio_thumbs_up.svg', false);
      return;
    }

    // H. Humor / Chiste (Easter Egg)
    if (
      lower.includes('chiste') || 
      lower.includes('joke') || 
      lower.includes('gracioso') || 
      lower.includes('divertido') || 
      lower.includes('humor') || 
      lower.includes('easter egg')
    ) {
      const answer = lang === 'es'
        ? '* ¿Sabes por qué los desarrolladores odian la luz del sol? ¡Porque no tiene sintaxis resaltada y atrae a los bugs! 😄\n\n* Por eso prefiero el modo oscuro, terminales neón cyberpunk y TypeScript 100% estricto.'
        : "* Why do developers dislike direct sunlight? Because it lacks syntax highlighting and attracts bugs! 😄\n\n* That's why I stick to dark mode, cyberpunk neon terminals, and 100% strict TypeScript.";
      typeAnswer(answer, '/images/sprites/ignacio_laugh.svg', false);
      return;
    }

    // I. Idiomas / Languages
    if (
      lower.includes('idioma') || 
      lower.includes('idiomas') || 
      lower.includes('lenguas') || 
      lower.includes('ingles') || 
      lower.includes('inglés') || 
      lower.includes('catalan') || 
      lower.includes('catalán') || 
      lower.includes('languages') || 
      lower.includes('english')
    ) {
      const answer = lang === 'es'
        ? '* Hablo con fluidez tres idiomas:\n\n1. Castellano: Nativo\n2. English: Inglés técnico profesional para comunicación internacional, documentación técnica y trabajo en equipo.\n3. Català: Nativo (educación íntegra en Cataluña).'
        : "* I am proficient in three languages:\n\n1. Spanish (Castellano): Native\n2. English: Professional technical working proficiency for international collaboration, RFCs, and code review.\n3. Catalan: Native (educated in Catalonia).";
      typeAnswer(answer, '/images/sprites/ignacio_confident.svg', false);
      return;
    }

    // 1. Soterguard / Stoam (with black t-shirt and Soterguard logo sprite)
    if (lower.includes('soterguard') || lower.includes('stoam')) {
      const faq = FAQ_TOPICS.find((f) => f.id === 'experience')!;
      typeAnswer(faq.ignacioAnswer[lang] || faq.ignacioAnswer.es, '/images/sprites/ignacio_soterguard_confident.svg', true);
      return;
    }

    // 1b. GitHub & Open Source
    if (lower.includes('github') || lower.includes('repositorio') || lower.includes('repos') || lower.includes('open source')) {
      const faq = FAQ_TOPICS.find((f) => f.id === 'github')!;
      typeAnswer(faq.ignacioAnswer[lang] || faq.ignacioAnswer.es, '/images/sprites/ignacio_github.svg', false);
      return;
    }

    // 1c. LinkedIn & Professional Network
    if (lower.includes('linkedin') || lower.includes('red profesional') || lower.includes('conectar')) {
      const faq = FAQ_TOPICS.find((f) => f.id === 'linkedin')!;
      typeAnswer(faq.ignacioAnswer[lang] || faq.ignacioAnswer.es, '/images/sprites/ignacio_linkedin.svg', false);
      return;
    }

    // 1d. Credly & Verified Badges
    if (lower.includes('credly') || lower.includes('insignia') || lower.includes('badge') || lower.includes('cisco') || lower.includes('ibm') || lower.includes('hacker')) {
      const faq = FAQ_TOPICS.find((f) => f.id === 'credly')!;
      typeAnswer(faq.ignacioAnswer[lang] || faq.ignacioAnswer.es, '/images/sprites/ignacio_credly.svg', false);
      return;
    }

    // 1e. Personal Projects (DAMA-CRM, Canva Connector, Argus, Skeleton-Meme, HyperTerminal)
    if (
      lower.includes('personal') || 
      lower.includes('personales') || 
      lower.includes('propios') || 
      lower.includes('mis proyectos') ||
      lower.includes('proyectos personales')
    ) {
      const faq = FAQ_TOPICS.find((f) => f.id === 'personal-projects')!;
      typeAnswer(faq.ignacioAnswer[lang] || faq.ignacioAnswer.es, faq.pose, false);
      return;
    }

    // 2. Java / OOP / Academic Projects
    if (lower.includes('java') || lower.includes('jvm') || lower.includes('starstucom') || lower.includes('ignaciobank') || lower.includes('concesionario') || lower.includes('nurse') || lower.includes('poo') || lower.includes('oop')) {
      const faq = FAQ_TOPICS.find((f) => f.id === 'java')!;
      typeAnswer(faq.ignacioAnswer[lang] || faq.ignacioAnswer.es, faq.pose, false);
      return;
    }

    // 3. Mobility / Car license
    if (lower.includes('coche') || lower.includes('carnet') || lower.includes('conducir') || lower.includes('movilidad') || lower.includes('transporte') || lower.includes('desplaz') || lower.includes('viajar')) {
      const faq = FAQ_TOPICS.find((f) => f.id === 'mobility')!;
      typeAnswer(faq.ignacioAnswer[lang] || faq.ignacioAnswer.es, faq.pose, false);
      return;
    }

    // 4. General Work Experience / Internships
    if (lower.includes('experiencia') || lower.includes('n8n') || lower.includes('vimtech') || lower.includes('ajma') || lower.includes('trabajo') || lower.includes('practica') || lower.includes('cv') || lower.includes('curriculum')) {
      const faq = FAQ_TOPICS.find((f) => f.id === 'experience')!;
      typeAnswer(faq.ignacioAnswer[lang] || faq.ignacioAnswer.es, faq.pose, true);
      return;
    }

    // 5. Tech Stack
    if (lower.includes('stack') || lower.includes('tecnolog') || lower.includes('typescript') || lower.includes('python') || lower.includes('docker') || lower.includes('node') || lower.includes('base de datos') || lower.includes('postgresql')) {
      const faq = FAQ_TOPICS.find((f) => f.id === 'stack')!;
      typeAnswer(faq.ignacioAnswer[lang] || faq.ignacioAnswer.es, faq.pose, false);
      return;
    }

    // 6. Location / Remote
    if (lower.includes('donde') || lower.includes('vives') || lower.includes('barcelona') || lower.includes('ubicacion') || lower.includes('remoto') || lower.includes('hibrido') || lower.includes('presencial')) {
      const faq = FAQ_TOPICS.find((f) => f.id === 'location')!;
      typeAnswer(faq.ignacioAnswer[lang] || faq.ignacioAnswer.es, faq.pose, false);
      return;
    }

    // 7. AI & MCP
    if (lower.includes('ia') || lower.includes('ai') || lower.includes('mcp') || lower.includes('agente') || lower.includes('claude') || lower.includes('inteligencia') || lower.includes('llm')) {
      const faq = FAQ_TOPICS.find((f) => f.id === 'ai-mcp')!;
      typeAnswer(faq.ignacioAnswer[lang] || faq.ignacioAnswer.es, faq.pose, false);
      return;
    }

    // 8. Projects
    if (lower.includes('proyecto') || lower.includes('dama') || lower.includes('crm') || lower.includes('canva') || lower.includes('argus') || lower.includes('skeleton') || lower.includes('github') || lower.includes('repositorio')) {
      const faq = FAQ_TOPICS.find((f) => f.id === 'projects')!;
      typeAnswer(faq.ignacioAnswer[lang] || faq.ignacioAnswer.es, faq.pose, false);
      return;
    }

    // 9. Certifications
    if (lower.includes('certificacion') || lower.includes('cisco') || lower.includes('ibm') || lower.includes('credly') || lower.includes('titulo') || lower.includes('estudio')) {
      const faq = FAQ_TOPICS.find((f) => f.id === 'certifications')!;
      typeAnswer(faq.ignacioAnswer[lang] || faq.ignacioAnswer.es, faq.pose, false);
      return;
    }

    // 10. Contact
    if (lower.includes('contacto') || lower.includes('correo') || lower.includes('email') || lower.includes('linkedin') || lower.includes('contratar') || lower.includes('entrevista') || lower.includes('telefono')) {
      const faq = FAQ_TOPICS.find((f) => f.id === 'contact')!;
      typeAnswer(faq.ignacioAnswer[lang] || faq.ignacioAnswer.es, faq.pose, false);
      return;
    }

    // Friendly fallback
    const fallbackAnswer = lang === 'es'
      ? '* ¡Excelente pregunta! Sobre ese aspecto en particular, estaré encantado de detallártelo en una llamada o por escrito. Puedes enviarme un mensaje directo con el formulario de contacto o conectar en LinkedIn (Ignacio Breñas Muñoz).'
      : "* Great question! For specifics on that topic, I'd be happy to discuss it directly via email or LinkedIn (Ignacio Breñas Muñoz). Drop me a line anytime!";
    typeAnswer(fallbackAnswer, '/images/sprites/ignacio_confident.svg');
  };

  const handleReset = () => {
    if (isTyping) return;
    setMessages([]);
    setCurrentPose('/images/sprites/ignacio_wave.svg');
    retroAudio.playChime();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xl sm:p-4 lg:p-6 select-none animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Chat interactivo con Ignacio Breñas"
    >
      {/* 
        Main Container:
        Full viewport (100dvh) on mobile, centered floating glass dialog with rounded borders on tablet & desktop
      */}
      <div className="relative w-full h-[100dvh] sm:h-auto sm:max-h-[88vh] lg:max-w-4xl flex flex-col bg-[#07170e]/95 backdrop-blur-2xl sm:rounded-3xl border-0 sm:border border-emerald-500/30 shadow-[0_24px_80px_rgba(0,0,0,0.8),0_0_50px_rgba(16,185,129,0.18)] overflow-hidden transition-all">
        
        {/* Unified Cyber Console Header Bar */}
        <div className="flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3.5 bg-emerald-950/50 backdrop-blur-xl border-b border-emerald-500/25 text-white z-20 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
            <div className="relative size-10 sm:size-12 rounded-xl sm:rounded-2xl bg-emerald-950/60 border border-emerald-500/35 p-1 flex items-center justify-center shadow-[0_4px_16px_rgba(16,185,129,0.2)] shrink-0">
              <img 
                src={currentPose} 
                alt="Avatar de Ignacio Breñas" 
                className={`w-full h-full object-contain filter drop-shadow ${isTyping ? '' : 'sprite-breathe'}`}
              />
              <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-emerald-400 border-2 border-[#07170e] animate-pulse" />
            </div>

            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-display font-extrabold text-[14.5px] sm:text-[17px] text-white tracking-tight truncate">
                  Ignacio Breñas
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-500/30 shrink-0">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>32-Bit</span>
                </span>
              </div>
              <span className="text-[11px] sm:text-[12px] text-emerald-300/80 font-medium truncate">
                {isTyping ? t('chat.statusTyping') : t('chat.statusReady')}
              </span>
            </div>
          </div>

          {/* Action buttons: Auto-Receive Mode, Sound Mute, Reset, and prominent Close button */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <button
              type="button"
              onClick={() => {
                setAutoReceiveMode((prev) => !prev);
                retroAudio.playBlip();
              }}
              className={`p-1.5 sm:px-3 sm:py-1.5 rounded-xl border transition-all text-xs font-medium flex items-center gap-1.5 ${
                autoReceiveMode
                  ? 'bg-emerald-500/25 border-emerald-400 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                  : 'bg-white/5 hover:bg-white/10 border-white/15 text-white/80 hover:text-white'
              }`}
              title={t('chat.autoReceiveTooltip')}
            >
              <Zap className={`size-3.5 sm:size-4 ${autoReceiveMode ? 'fill-emerald-400 text-emerald-400' : 'text-emerald-400/80'}`} />
              <span className="hidden md:inline text-[11px]">
                {autoReceiveMode ? t('chat.autoModeActive') : t('chat.autoMode')}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setIsMuted(retroAudio.toggleMute())}
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white/80 hover:text-white transition-all text-xs font-medium flex items-center gap-1.5"
              title={t('chat.toggleSound')}
            >
              {isMuted ? <VolumeX className="size-3.5 sm:size-4 text-white/40" /> : <Volume2 className="size-3.5 sm:size-4 text-emerald-400" />}
              <span className="hidden md:inline text-[11px]">{isMuted ? t('chat.soundMuted') : t('chat.soundActive')}</span>
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white/80 hover:text-white transition-all text-xs font-medium flex items-center gap-1.5"
              title={t('chat.resetTitle')}
            >
              <RotateCcw className="size-3.5 sm:size-4" />
              <span className="hidden md:inline text-[11px]">{t('chat.resetChat')}</span>
            </button>

            {/* Prominent Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-red-500/15 hover:bg-red-500/30 text-red-300 hover:text-white border border-red-500/30 hover:border-red-400 text-[11.5px] font-semibold transition-all shadow-sm active:scale-95"
              title={t('chat.closeTitle')}
            >
              <X className="size-4" />
              <span className="hidden xs:inline">{t('chat.close')}</span>
            </button>
          </div>
        </div>

        {/* Message Log Scroll Area */}
        <div className="flex-1 min-h-0 overflow-y-auto p-3.5 sm:p-5 lg:p-6 space-y-3.5 sm:space-y-4">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div 
                key={msg.id} 
                className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-full`}
              >
                <div className="flex items-center gap-2 mb-1.5 px-1 text-[11px] text-white/60 font-medium">
                  <span className={isUser ? 'text-sky-300 font-semibold' : 'text-emerald-400 font-semibold'}>
                    {isUser ? t('chat.you') : 'Ignacio Breñas'}
                  </span>
                  <span>·</span>
                  <span>{msg.timestamp}</span>
                </div>

                <div 
                  className={`
                    p-4 rounded-2xl max-w-[92%] sm:max-w-[85%] text-[14.5px] sm:text-[15px] leading-relaxed shadow-lg
                    ${isUser 
                      ? 'bg-sky-500/15 backdrop-blur-xl border border-sky-400/30 text-sky-50 rounded-tr-sm' 
                      : 'bg-[#0a2013]/70 backdrop-blur-xl border border-emerald-500/25 text-zinc-100 rounded-tl-sm'}
                  `}
                >
                  <p className="whitespace-pre-line m-0 select-text font-sans">
                    {msg.text}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Real-time typing bubble */}
          {isTyping && displayedAnswer && (
            <div className="flex flex-col items-start max-w-full animate-fadeIn">
              <div className="flex items-center gap-2 mb-1.5 px-1 text-[11px] text-emerald-400 font-medium">
                <span className="font-semibold">Ignacio Breñas</span>
                <span>·</span>
                <span className="animate-pulse">{t('chat.typing')}</span>
              </div>
              <div 
                onClick={handleAutoReceive}
                className="p-4 rounded-2xl rounded-tl-sm max-w-[92%] sm:max-w-[85%] text-[14.5px] sm:text-[15px] leading-relaxed bg-[#0a2013]/70 backdrop-blur-xl border border-emerald-500/25 text-zinc-100 shadow-lg cursor-pointer hover:border-emerald-400/50 transition-colors"
                title={t('chat.autoReceiveTooltip')}
              >
                <p className="whitespace-pre-line m-0 inline font-sans">
                  {displayedAnswer}
                </p>
                <span className="inline-block w-2 h-4 bg-emerald-400 ml-1.5 animate-pulse align-middle rounded-sm" />

                {/* Inline Action Buttons inside bubble */}
                <div className="mt-3 pt-2.5 border-t border-emerald-500/20 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAutoReceive();
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/35 border border-emerald-500/40 text-emerald-300 hover:text-white text-[12px] font-semibold transition-all shadow-sm active:scale-95"
                    title={t('chat.autoReceiveTooltip')}
                  >
                    <Zap className="size-3.5 fill-emerald-400 text-emerald-400" />
                    <span>{t('chat.autoReceive')}</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStop();
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-500/20 hover:bg-red-500/35 border border-red-500/40 text-red-300 hover:text-white text-[12px] font-semibold transition-all shadow-sm active:scale-95"
                    title={t('chat.stopTooltip')}
                  >
                    <Square className="size-3 fill-red-400 text-red-400" />
                    <span>{t('chat.stop')}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick FAQ Questions Chips Bar with dedicated cyber styles */}
        <div className="relative bg-gradient-to-r from-[#030d07] via-[#06170d] to-[#030d07] backdrop-blur-xl py-2.5 px-3 sm:px-6 flex flex-col gap-2">
          {/* Glowing neon divider line */}
          <div className="chat-horizontal-divider absolute top-0 inset-x-0" />

          <div className="flex items-center justify-between text-[11.5px] text-white/70">
            <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
              <MessageSquare className="size-3.5 text-emerald-400" />
              <span>{t('chat.suggestedQuestions')}</span>
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-white/50 hidden sm:inline">
                {t('chat.topicsAvailable')}
              </span>
              <div className="hidden sm:flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => scrollFaqBar('left')}
                  className="p-1 rounded-md bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/30 text-white/70 hover:text-white transition-all active:scale-95"
                  title={t('chat.scrollLeft')}
                >
                  <ChevronLeft className="size-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollFaqBar('right')}
                  className="p-1 rounded-md bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/30 text-white/70 hover:text-white transition-all active:scale-95"
                  title={t('chat.scrollRight')}
                >
                  <ChevronRight className="size-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable FAQ buttons grid/row with custom .chat-horizontal-bar */}
          <div 
            ref={faqScrollRef}
            className="flex items-center gap-2 overflow-x-auto pb-2 chat-horizontal-bar scroll-smooth"
          >
            {FAQ_TOPICS.map((faq) => {
              const isPersonalProjects = faq.id === 'personal-projects';
              return (
                <button
                  key={faq.id}
                  type="button"
                  disabled={isTyping}
                  onClick={() => handleSelectFaq(faq)}
                  className={`
                    flex-shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all shadow-sm active:scale-95 disabled:opacity-40
                    ${isPersonalProjects
                      ? 'bg-gradient-to-r from-emerald-500/25 to-teal-500/20 hover:from-emerald-500/35 hover:to-teal-500/30 border border-emerald-400/50 text-emerald-200 hover:text-white shadow-[0_0_12px_rgba(16,185,129,0.25)] font-semibold'
                      : 'bg-white/[0.04] hover:bg-emerald-500/15 border border-white/10 hover:border-emerald-500/35 text-white/90 hover:text-white'}
                  `}
                >
                  {faq.icon}
                  <span>{faq.label[lang] || faq.label.es}</span>
                </button>
              );
            })}
          </div>

          {/* Bottom glowing neon divider */}
          <div className="chat-horizontal-divider absolute bottom-0 inset-x-0" />
        </div>

        {/* Dynamic Action Controls Bar when Typing */}
        {isTyping && (
          <div className="px-4 py-2 bg-emerald-950/70 backdrop-blur-xl border-t border-emerald-500/25 flex flex-wrap items-center justify-between gap-2.5 animate-fadeIn">
            <div className="flex items-center gap-2 text-[12px] text-emerald-300 font-medium">
              <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{t('chat.statusTyping')}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleStop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/20 hover:bg-red-500/35 border border-red-500/40 text-red-300 hover:text-white text-[12px] font-bold transition-all shadow-sm active:scale-95"
                title={t('chat.stopTooltip')}
              >
                <Square className="size-3.5 fill-red-400 text-red-400" />
                <span>{t('chat.stop')}</span>
              </button>

              <button
                type="button"
                onClick={handleAutoReceive}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 text-[12px] font-extrabold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] active:scale-95"
                title={t('chat.autoReceiveTooltip')}
              >
                <Zap className="size-3.5 fill-slate-950 text-slate-950" />
                <span>{t('chat.autoReceive')}</span>
              </button>
            </div>
          </div>
        )}

        {/* Bottom Custom Question Input Bar */}
        <form 
          onSubmit={handleSendCustomText}
          className="p-2.5 sm:p-4 bg-black/50 backdrop-blur-2xl border-t border-emerald-500/20 flex items-center gap-2 sm:gap-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))]"
        >
          <div className="relative flex-1">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={t('chat.inputPlaceholder')}
              disabled={isTyping}
              className="w-full bg-white/[0.05] hover:bg-white/[0.08] focus:bg-white/[0.09] border border-white/15 focus:border-emerald-400/60 rounded-xl px-3.5 sm:px-4 py-2 sm:py-2.5 text-[16px] sm:text-[14px] text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-emerald-400/50 transition-all font-sans disabled:opacity-60"
            />
          </div>

          {isTyping ? (
            <button
              type="button"
              onClick={handleStop}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 h-10 rounded-xl bg-red-500/25 hover:bg-red-500/40 border border-red-500/40 text-red-300 font-bold transition-all shadow-md active:scale-95 flex-shrink-0 text-xs"
              title={t('chat.stopTooltip')}
            >
              <Square className="size-3.5 fill-red-400 text-red-400" />
              <span className="hidden sm:inline">{t('chat.stop')}</span>
            </button>
          ) : (
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="inline-flex items-center justify-center size-10 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold disabled:opacity-30 transition-all shadow-md active:scale-95 flex-shrink-0"
              title={t('chat.sendTitle')}
            >
              <Send className="size-4" />
            </button>
          )}
        </form>

      </div>
    </div>
  );
};
