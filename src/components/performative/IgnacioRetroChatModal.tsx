import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, Send, Sparkles, Volume2, VolumeX, RotateCcw, MessageSquare, Briefcase, Car, Terminal, MapPin, Bot, Award, Mail, Star } from 'lucide-react';
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
  '/images/sprites/ignacio_talk_mid.png',
  '/images/sprites/ignacio_talk_open.png',
  '/images/sprites/ignacio_talk_gesture.png',
];

export const IgnacioRetroChatModal: React.FC<IgnacioRetroChatModalProps> = ({
  isOpen,
  onClose,
  lang = 'es',
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [currentPose, setCurrentPose] = useState<string>('/images/sprites/ignacio_wave.png');
  const [displayedAnswer, setDisplayedAnswer] = useState<string>('');
  const [isMuted, setIsMuted] = useState<boolean>(() => retroAudio.getMuted());

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimerRef = useRef<number | null>(null);
  const mouthTimerRef = useRef<number | null>(null);

  // FAQ Topics configured with exact real-world information requested by the user
  const FAQ_TOPICS: FaqItem[] = [
    {
      id: 'experience',
      label: { es: 'Experiencia & Prácticas', en: 'Work & Internships' },
      icon: <Briefcase className="size-3.5 text-[#10b981]" />,
      userQuestion: {
        es: '¿Cuál es tu experiencia laboral y qué has construido en producción?',
        en: 'What is your work experience and what have you engineered in production?',
      },
      ignacioAnswer: {
        es: '* Actualmente trabajo como Software Developer Intern en Soterguard, desarrollando servicios de backend en Node.js, TypeScript y Python para plataformas web y despliegues On-Premise con Docker y contenedores LXC. Dentro de mis prácticas participo activamente en Stoam SaaS, concretamente en Stoam Connect, conectando plataformas B2B y B2C mediante flujos complejos de automatización con n8n.\n\n* Anteriormente estuve en VimTech en diagnóstico y reparación a nivel de microcomponentes de hardware Apple (Mac, iPhone, iPad) y hardening de macOS y distribuciones Linux (Debian/Ubuntu).\n\n* Y en AJMA colaboro como voluntario técnico en realización audiovisual como operador de cámara, mesas de audio y administrando la web oficial ajma.es.',
        en: '* Currently, I work as a Software Developer Intern at Soterguard, engineering backend logic and on-premise modules with Node.js, TypeScript, and Python. Within my internship, I actively contribute to Stoam SaaS, specifically Stoam Connect, integrating B2B and B2C platforms via complex n8n workflows. I also manage PostgreSQL via PrismaORM and Docker/LXC containers.\n\n* Previously, I worked at VimTech conducting board-level hardware diagnostics on Apple systems (Mac, iPhone, iPad) and OS hardening on macOS & Debian/Ubuntu Linux.\n\n* At AJMA, I volunteer managing the official ajma.es infrastructure, live audio consoles, and operating live broadcast cameras.',
      },
      pose: '/images/sprites/ignacio_hardware.png',
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
      pose: '/images/sprites/ignacio_thumbs_up.png',
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
        es: '* Mi núcleo principal es TypeScript con tipado 100% estricto (cero tipos "any"), Node.js, Python, PostgreSQL y PrismaORM para persistencia relacional transaccional.\n\n* En infraestructura: Docker, contenedores LXC, WSL, Linux SysAdmin (Debian/Ubuntu) y Nginx.\n\n* En frontend: React, Vue.js, Tailwind CSS y Vite.\n\n* Mi criterio: cero bloat innecesario. Arquitectura orientada a contratos estrictos, baja latencia y observabilidad real en producción.',
        en: '* My core stack is 100% strict TypeScript (zero "any" types), Node.js, Python, PostgreSQL, and PrismaORM for ACID relational persistence.\n\n* In infrastructure: Docker, LXC containers, WSL, Linux SysAdmin (Debian/Ubuntu), and Nginx.\n\n* In frontend: React, Vue.js, Tailwind CSS, and Vite.\n\n* My philosophy: zero unnecessary bloat. Strictly typed data contracts, sub-millisecond latencies, and production observability.',
      },
      pose: '/images/sprites/ignacio_coding.png',
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
      pose: '/images/sprites/ignacio_coffee.png',
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
      pose: '/images/sprites/ignacio_ai_holo.png',
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
        es: '* Te recomiendo especialmente estos repositorios destacados:\n\n1. DAMA-CRM: Mi proyecto estrella. Un CRM y ERP modular empresarial con TypeScript 100% estricto (cero any), PostgreSQL, PrismaORM, Redis, facturación legal ISO 19005-1 (PDF/A-3b), sincronización con Apple Calendar y 116 tests automáticos pasando.\n2. Argus Fraud Radar: Pipeline de Big Data y ML desarrollado para el programa europeo UNITA Erasmus+ BIP con inferencia en <15ms sobre PySpark y LightGBM.\n3. Canva Connector MCP: Integración de IA con el protocolo Model Context Protocol (MCP) y flujo seguro OAuth 2.0 PKCE en local.\n4. Skeleton-Meme Tool: Visión artificial en tiempo real con OpenCV y MediaPipe a 60 FPS corriendo exclusivamente en CPU.',
        en: '* I specifically recommend inspecting these key deliverables:\n\n1. DAMA-CRM: My flagship project. An enterprise modular CRM & ERP built with 100% strict TypeScript (zero any), PostgreSQL, PrismaORM, Redis, legal ISO 19005-1 invoicing (PDF/A-3b), Apple Calendar synchronization, and 116 passing tests.\n2. Argus Fraud Radar: Big Data & ML pipeline built for the UNITA Erasmus+ BIP program with <15ms inference on PySpark & LightGBM.\n3. Canva Connector MCP: Autonomous AI tooling with Anthropic\'s Model Context Protocol and local OAuth 2.0 PKCE.\n4. Skeleton-Meme Tool: Real-time computer vision at 60 FPS purely on standard CPU via OpenCV and MediaPipe.',
      },
      pose: '/images/sprites/ignacio_idea.png',
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
      pose: '/images/sprites/ignacio_read_specs.png',
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
        es: '* ¡Estaré encantado de hablar contigo!\n\n- Formulario directo: Al final de este portfolio tienes la sección de contacto directo.\n- LinkedIn: linkedin.com/in/ignacio-brenas-munoz\n- GitHub: github.com/Ignaciobrenas con más de 30 repositorios públicos.\n\n* Respondo habitualmente en menos de 24 horas.',
        en: '* I\'d love to connect with you!\n\n- Direct form: Available at the bottom section of this portfolio.\n- LinkedIn: linkedin.com/in/ignacio-brenas-munoz\n- GitHub: github.com/Ignaciobrenas with 30+ public repos.\n\n* I typically respond within 24 hours.',
        },
      pose: '/images/sprites/ignacio_mail.png',
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
        pose: '/images/sprites/ignacio_wave.png',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([initialGreeting]);
      setCurrentPose('/images/sprites/ignacio_wave.png');
      retroAudio.playChime();
    }
  }, [isOpen, messages.length, lang]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
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
  const typeAnswer = useCallback((fullText: string, finalPose: string) => {
    if (typingTimerRef.current) window.clearTimeout(typingTimerRef.current);
    if (mouthTimerRef.current) window.clearInterval(mouthTimerRef.current);

    setIsTyping(true);
    setDisplayedAnswer('');
    let charIdx = 0;
    let mouthIdx = 0;

    // Mouth animation while typing
    mouthTimerRef.current = window.setInterval(() => {
      mouthIdx = (mouthIdx + 1) % TALK_FRAMES.length;
      setCurrentPose(TALK_FRAMES[mouthIdx]);
    }, 110);

    const typeNext = () => {
      if (charIdx < fullText.length) {
        const nextChar = fullText.charAt(charIdx);
        charIdx++;
        setDisplayedAnswer(fullText.slice(0, charIdx));

        if (nextChar !== ' ' && charIdx % 2 === 0) {
          retroAudio.playBlip();
        }

        let delay = 22;
        if (nextChar === '.' || nextChar === '!') delay = 140;
        else if (nextChar === ',' || nextChar === ':') delay = 70;

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
      }
    };

    typingTimerRef.current = window.setTimeout(typeNext, 80);
  }, []);

  // Fast forward typewriter
  const handleFastForward = useCallback(() => {
    if (!isTyping) return;
    if (typingTimerRef.current) window.clearTimeout(typingTimerRef.current);
    if (mouthTimerRef.current) window.clearInterval(mouthTimerRef.current);
    setIsTyping(false);
    // Find last expected text or complete immediately
  }, [isTyping]);

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

    typeAnswer(ignacioA, faq.pose);
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

    const lower = userText.toLowerCase();

    // 1. Mobility / Car license
    if (lower.includes('coche') || lower.includes('carnet') || lower.includes('conducir') || lower.includes('movilidad') || lower.includes('transporte') || lower.includes('desplaz') || lower.includes('viajar')) {
      const faq = FAQ_TOPICS.find((f) => f.id === 'mobility')!;
      typeAnswer(faq.ignacioAnswer[lang] || faq.ignacioAnswer.es, faq.pose);
      return;
    }

    // 2. Work Experience / Internships
    if (lower.includes('experiencia') || lower.includes('soterguard') || lower.includes('stoam') || lower.includes('n8n') || lower.includes('vimtech') || lower.includes('ajma') || lower.includes('trabajo') || lower.includes('practica') || lower.includes('cv') || lower.includes('curriculum')) {
      const faq = FAQ_TOPICS.find((f) => f.id === 'experience')!;
      typeAnswer(faq.ignacioAnswer[lang] || faq.ignacioAnswer.es, faq.pose);
      return;
    }

    // 3. Tech Stack
    if (lower.includes('stack') || lower.includes('tecnolog') || lower.includes('typescript') || lower.includes('python') || lower.includes('docker') || lower.includes('node') || lower.includes('base de datos') || lower.includes('postgresql')) {
      const faq = FAQ_TOPICS.find((f) => f.id === 'stack')!;
      typeAnswer(faq.ignacioAnswer[lang] || faq.ignacioAnswer.es, faq.pose);
      return;
    }

    // 4. Location / Remote
    if (lower.includes('donde') || lower.includes('vives') || lower.includes('barcelona') || lower.includes('ubicacion') || lower.includes('remoto') || lower.includes('hibrido') || lower.includes('presencial')) {
      const faq = FAQ_TOPICS.find((f) => f.id === 'location')!;
      typeAnswer(faq.ignacioAnswer[lang] || faq.ignacioAnswer.es, faq.pose);
      return;
    }

    // 5. AI & MCP
    if (lower.includes('ia') || lower.includes('ai') || lower.includes('mcp') || lower.includes('agente') || lower.includes('claude') || lower.includes('inteligencia') || lower.includes('llm')) {
      const faq = FAQ_TOPICS.find((f) => f.id === 'ai-mcp')!;
      typeAnswer(faq.ignacioAnswer[lang] || faq.ignacioAnswer.es, faq.pose);
      return;
    }

    // 6. Projects
    if (lower.includes('proyecto') || lower.includes('dama') || lower.includes('crm') || lower.includes('canva') || lower.includes('argus') || lower.includes('skeleton') || lower.includes('github') || lower.includes('repositorio')) {
      const faq = FAQ_TOPICS.find((f) => f.id === 'projects')!;
      typeAnswer(faq.ignacioAnswer[lang] || faq.ignacioAnswer.es, faq.pose);
      return;
    }

    // 7. Certifications
    if (lower.includes('certificacion') || lower.includes('cisco') || lower.includes('ibm') || lower.includes('credly') || lower.includes('titulo') || lower.includes('estudio')) {
      const faq = FAQ_TOPICS.find((f) => f.id === 'certifications')!;
      typeAnswer(faq.ignacioAnswer[lang] || faq.ignacioAnswer.es, faq.pose);
      return;
    }

    // 8. Contact
    if (lower.includes('contacto') || lower.includes('correo') || lower.includes('email') || lower.includes('linkedin') || lower.includes('contratar') || lower.includes('entrevista') || lower.includes('telefono')) {
      const faq = FAQ_TOPICS.find((f) => f.id === 'contact')!;
      typeAnswer(faq.ignacioAnswer[lang] || faq.ignacioAnswer.es, faq.pose);
      return;
    }

    // Friendly fallback
    const fallbackAnswer = lang === 'es'
      ? '* ¡Excelente pregunta! Sobre ese aspecto en particular, estaré encantado de detallártelo en una llamada o por escrito. Puedes enviarme un mensaje directo con el formulario de contacto o conectar en LinkedIn (Ignacio Breñas Muñoz).'
      : "* Great question! For specifics on that topic, I'd be happy to discuss it directly via email or LinkedIn (Ignacio Breñas Muñoz). Drop me a line anytime!";
    typeAnswer(fallbackAnswer, '/images/sprites/ignacio_confident.png');
  };

  const handleReset = () => {
    if (isTyping) return;
    setMessages([]);
    setCurrentPose('/images/sprites/ignacio_wave.png');
    retroAudio.playChime();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xl sm:p-4 lg:p-6 select-none animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Chat interactivo 32-bit con Ignacio Breñas"
    >
      {/* 
        Main Container:
        - Mobile & Tablet: Fullscreen (w-full h-full rounded-none border-none)
        - Desktop: Large sleek retro arcade console (max-w-4xl h-[90vh] rounded-3xl border-2)
      */}
      <div className="relative w-full h-full lg:max-w-4xl lg:h-[88vh] flex flex-col bg-[#030805] lg:rounded-3xl border-0 lg:border-2 border-white/20 shadow-[0_0_80px_rgba(16,185,129,0.35)] overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#06170d] border-b border-white/15 text-white z-20">
          <div className="flex items-center gap-3">
            <div className="relative size-8 rounded-lg bg-[#020704] border border-[#10b981] p-0.5 flex items-center justify-center">
              <img 
                src={currentPose} 
                alt="Ignacio Pixel Avatar" 
                className="w-full h-full object-contain pixelated"
              />
              <span className="absolute -bottom-0.5 -right-0.5 size-2 rounded-full bg-[#10b981] animate-ping" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-[15px] sm:text-[17px] text-white tracking-tight">
                  IGNACIO_AI // 32-BIT
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-[#10b981] bg-[#10b981]/15 px-2 py-0.5 rounded-full border border-[#10b981]/30">
                  <span className="size-1.5 rounded-full bg-[#10b981]" />
                  <span>ONLINE</span>
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#94a3b8] tracking-widest uppercase">
                {lang === 'es' ? 'Chat interactivo con animaciones' : 'Interactive animated companion'}
              </span>
            </div>
          </div>

          {/* Action buttons: Sound Mute, Reset, and prominent Close button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMuted(retroAudio.toggleMute())}
              className="p-1.5 sm:px-2.5 sm:py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white/70 hover:text-white transition-all text-xs font-mono flex items-center gap-1.5"
              title={isMuted ? 'Activar sonido' : 'Silenciar'}
            >
              {isMuted ? <VolumeX className="size-3.5 text-white/40" /> : <Volume2 className="size-3.5 text-[#10b981]" />}
              <span className="hidden sm:inline text-[11px]">{isMuted ? 'MUTE' : 'AUDIO'}</span>
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="p-1.5 sm:px-2.5 sm:py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white/70 hover:text-white transition-all text-xs font-mono flex items-center gap-1.5"
              title="Reiniciar conversación"
            >
              <RotateCcw className="size-3.5" />
              <span className="hidden sm:inline text-[11px]">{lang === 'es' ? 'REINICIAR' : 'RESET'}</span>
            </button>

            {/* Prominent Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/15 hover:bg-red-500/30 text-red-300 hover:text-white border border-red-500/40 hover:border-red-400 font-mono text-[11.5px] font-bold transition-all shadow-sm active:scale-95 ml-1"
              title="Cerrar chat"
            >
              <X className="size-4" />
              <span>{lang === 'es' ? 'CERRAR' : 'CLOSE'}</span>
            </button>
          </div>
        </div>

        {/* Character Visual Stage Banner */}
        <div className="relative px-4 sm:px-6 py-2.5 bg-gradient-to-r from-[#07190f] via-[#040e08] to-[#020603] border-b border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="size-14 sm:size-16 rounded-xl bg-[#020704] border-2 border-white/20 p-1 flex items-center justify-center flex-shrink-0 shadow-inner">
              <img
                src={currentPose}
                alt="Ignacio Pixel Art Avatar"
                className={`w-full h-full object-contain pixelated ${isTyping ? '' : 'sprite-breathe'}`}
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-mono text-[11px] font-bold text-[#10b981] flex items-center gap-1.5">
                <Sparkles className="size-3" />
                <span>IGNACIO BREÑAS MUÑOZ</span>
              </span>
              <span className="font-display text-[13px] sm:text-[14px] text-white/90 truncate font-semibold">
                {isTyping ? (lang === 'es' ? 'Hablando y respondiendo...' : 'Responding...') : (lang === 'es' ? 'Listo para responder tus preguntas' : 'Ready for your questions')}
              </span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span className="font-mono text-[10px] text-white/40 tracking-wider">MOTOR: 32_BIT_SPRITE</span>
          </div>
        </div>

        {/* Message Log Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 font-retro">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div 
                key={msg.id} 
                className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-full`}
              >
                <div className="flex items-center gap-2 mb-1 px-1 text-[10px] font-mono text-white/50">
                  <span className={isUser ? 'text-[#38bdf8] font-bold' : 'text-[#10b981] font-bold'}>
                    {isUser ? (lang === 'es' ? 'TÚ (RECLUTADOR/VISITANTE)' : 'YOU (VISITOR)') : 'IGNACIO'}
                  </span>
                  <span>·</span>
                  <span>{msg.timestamp}</span>
                </div>

                <div 
                  className={`
                    p-3.5 sm:p-4 rounded-2xl max-w-[92%] sm:max-w-[85%] text-[15px] sm:text-[16px] leading-relaxed shadow-lg
                    ${isUser 
                      ? 'bg-gradient-to-br from-[#0c2438] to-[#071520] border border-[#38bdf8]/40 text-white rounded-tr-none' 
                      : 'retro-dialogue-box text-white rounded-tl-none'}
                  `}
                >
                  <p className="whitespace-pre-line m-0 select-text">
                    {msg.text}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Real-time typing bubble */}
          {isTyping && displayedAnswer && (
            <div className="flex flex-col items-start max-w-full animate-fadeIn">
              <div className="flex items-center gap-2 mb-1 px-1 text-[10px] font-mono text-[#10b981] font-bold">
                <span>IGNACIO</span>
                <span>·</span>
                <span className="animate-pulse">{lang === 'es' ? 'Escribiendo...' : 'Typing...'}</span>
              </div>
              <div className="retro-dialogue-box p-3.5 sm:p-4 rounded-2xl max-w-[92%] sm:max-w-[85%] text-[15px] sm:text-[16px] leading-relaxed text-white rounded-tl-none">
                <p className="whitespace-pre-line m-0 inline">
                  {displayedAnswer}
                </p>
                <span className="inline-block w-2 h-4 bg-[#10b981] ml-1.5 animate-pulse align-middle" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick FAQ Questions Chips Bar */}
        <div className="px-3 sm:px-6 py-2.5 bg-[#040e07] border-t border-white/10 flex flex-col gap-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-white/60">
            <span className="flex items-center gap-1.5 font-bold text-[#10b981]">
              <MessageSquare className="size-3" />
              <span>{lang === 'es' ? 'PREGUNTAS FRECUENTES (TOCA PARA PREGUNTAR):' : 'FREQUENT QUESTIONS (TAP TO ASK):'}</span>
            </span>
            <span className="text-[10px] text-white/40 hidden sm:inline">
              {lang === 'es' ? '8 temas preparados' : '8 topics ready'}
            </span>
          </div>

          {/* Scrollable FAQ buttons grid/row */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
            {FAQ_TOPICS.map((faq) => (
              <button
                key={faq.id}
                type="button"
                disabled={isTyping}
                onClick={() => handleSelectFaq(faq)}
                className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#071c10] hover:bg-[#0c2f1b] border border-[#10b981]/30 hover:border-[#10b981] text-[11.5px] font-mono font-bold text-white transition-all shadow-sm active:scale-95 disabled:opacity-50"
              >
                {faq.icon}
                <span>{faq.label[lang] || faq.label.es}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Custom Question Input Terminal */}
        <form 
          onSubmit={handleSendCustomText}
          className="p-3 sm:p-4 bg-[#020603] border-t border-white/10 flex items-center gap-2"
        >
          <div className="relative flex-1">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={lang === 'es' ? 'Escribe tu pregunta sobre experiencia, movilidad, stack...' : 'Ask about experience, mobility, tech stack...'}
              disabled={isTyping}
              className="w-full bg-[#06140b] border border-white/20 focus:border-[#10b981] rounded-full px-4 py-2.5 text-[14px] text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#10b981] font-mono transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={!inputText.trim() || isTyping}
            className="inline-flex items-center justify-center size-10 rounded-full bg-[#10b981] hover:bg-[#34d399] text-[#030805] disabled:opacity-40 transition-all font-bold flex-shrink-0 active:scale-95"
            title="Enviar pregunta"
          >
            <Send className="size-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
