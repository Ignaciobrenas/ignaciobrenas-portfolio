import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, GitBranch, Shield, Cpu, Layers, Sparkles, CheckCircle2, Calendar, FileText, Users, Kanban } from 'lucide-react';
import { 
  SiTypescript, 
  SiNodedotjs, 
  SiPython, 
  SiFastapi, 
  SiStreamlit, 
  SiOpencv, 
  SiLaravel, 
  SiVuedotjs, 
  SiTailwindcss, 
  SiVite, 
  SiPostgresql, 
  SiPrisma, 
  SiMysql, 
  SiApachespark,
  SiReact,
  SiRedis,
  SiDocker
} from 'react-icons/si';
import { VscTerminalPowershell } from 'react-icons/vsc';

export const WorkChapter: React.FC = () => {
  const { t } = useTranslation();

  // Helper to render official brand icons for tech pills
  const renderTechIcon = (tag: string) => {
    const lower = tag.toLowerCase();
    if (lower.includes('typescript')) return <SiTypescript className="size-3.5 text-[#3178c6]" />;
    if (lower.includes('react')) return <SiReact className="size-3.5 text-[#61dafb]" />;
    if (lower.includes('node')) return <SiNodedotjs className="size-3.5 text-[#5fa04e]" />;
    if (lower.includes('python')) return <SiPython className="size-3.5 text-[#3776ab]" />;
    if (lower.includes('pyspark')) return <SiApachespark className="size-3.5 text-[#e25a1c]" />;
    if (lower.includes('fastapi')) return <SiFastapi className="size-3.5 text-[#05998b]" />;
    if (lower.includes('streamlit')) return <SiStreamlit className="size-3.5 text-[#ff4b4b]" />;
    if (lower.includes('opencv')) return <SiOpencv className="size-3.5 text-[#5c3ee8]" />;
    if (lower.includes('laravel')) return <SiLaravel className="size-3.5 text-[#ff2d20]" />;
    if (lower.includes('vue')) return <SiVuedotjs className="size-3.5 text-[#42b883]" />;
    if (lower.includes('tailwind')) return <SiTailwindcss className="size-3.5 text-[#06b6d4]" />;
    if (lower.includes('vite')) return <SiVite className="size-3.5 text-[#646cff]" />;
    if (lower.includes('postgresql')) return <SiPostgresql className="size-3.5 text-[#4169e1]" />;
    if (lower.includes('prisma')) return <SiPrisma className="size-3.5 text-white" />;
    if (lower.includes('redis')) return <SiRedis className="size-3.5 text-[#dc382d]" />;
    if (lower.includes('docker')) return <SiDocker className="size-3.5 text-[#2496ed]" />;
    if (lower.includes('mysql')) return <SiMysql className="size-3.5 text-[#4479a1]" />;
    if (lower.includes('powershell')) return <VscTerminalPowershell className="size-3.5 text-[#5391fe]" />;
    return <span className="size-1.5 rounded-full bg-[#10b981]" />;
  };

  return (
    <section id="work" data-chapter="work" className="relative pt-12 lg:pt-20">
      <div className="flex flex-col items-start min-w-0 w-full">
        
        {/* Chapter Header */}
        <header className="flex flex-col items-start">
          <div className="flex items-center gap-4">
            <span 
              aria-hidden="true" 
              className="inline-flex shrink-0 -rotate-8 items-center justify-center border-2 border-white bg-[#0c2316] font-display font-extrabold text-white shadow-[0_6px_16px_rgba(255,255,255,0.15)] size-12 rounded-[12px] text-[20px]"
            >
              {t('work.chapterNum')}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-none font-extrabold tracking-[-0.035em] text-white">
              {t('work.chapterTitle')}
            </h2>
          </div>
          <p className="hand mt-3 ml-2 text-[22px] lg:text-[26px] text-white">
            {t('work.chapterHand')}
          </p>
        </header>

        {/* Lead description */}
        <p className="mt-4 text-[16px] lg:text-[18px] leading-[1.55] text-[#94a3b8] max-w-2xl">
          {t('work.lead')}
        </p>

        {/* Editorial Layout: 2 Hero Showcase Projects + 4 Deliverables Grid */}
        <div className="mt-9 flex flex-col gap-8 w-full">
          
          {/* ======================================================== */}
          {/* SUPREME HERO SHOWCASE 1: DAMA-CRM (PROYECTO TOP) */}
          {/* ======================================================== */}
          <article 
            id="dama-crm"
            className="scroll-mt-28 group relative rounded-[32px] border-2 border-[#10b981] bg-gradient-to-br from-[#072416]/95 via-[#03110a]/95 to-[#010603]/98 p-6 sm:p-8 lg:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl hover:shadow-[0_30px_70px_rgba(16,185,129,0.3)] transition-all duration-300 overflow-hidden"
          >
            {/* Ambient emerald backlight glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#10b981]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#10b981]/30 transition-all duration-500" />
            
            {/* Top Bar: Flagship Pill, DAMA Logo & Verified Stamp */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] font-black text-[#030805] uppercase tracking-wider bg-[#10b981] px-3.5 py-1 rounded-full shadow-sm">
                  PROYECTO TOP // 01
                </span>
                <span className="font-mono text-[12px] text-[#94a3b8] hidden sm:inline">
                  Enterprise Modular SaaS · 100% Strict TypeScript
                </span>
              </div>

              {/* Official DAMA-CRM Logo Header Display */}
              <div className="flex items-center gap-2.5">
                <div className="px-3 py-1 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                  <img 
                    src="/images/assets/dama-logo-white.png" 
                    alt="DAMA-CRM Logo" 
                    className="h-6 sm:h-7 w-auto object-contain" 
                  />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#10b981] bg-[#10b981]/15 px-3 py-0.5 font-mono text-[11px] font-bold text-[#10b981]">
                  <span className="size-1.5 rounded-full bg-[#10b981] animate-ping" />
                  <span>116_TESTS_PASS</span>
                </span>
              </div>
            </div>

            {/* Title & Core Architectural Value */}
            <div className="relative z-10 mt-5">
              <h3 className="font-display text-[27px] sm:text-[34px] font-extrabold text-white tracking-tight leading-tight group-hover:text-emerald-300 transition-colors">
                {t('work.projects.damaCrm.title')}
              </h3>

              <p className="mt-3.5 text-[15px] sm:text-[16.5px] leading-relaxed text-white/90">
                {t('work.projects.damaCrm.desc')}
              </p>

              {/* 4 Core Pillars of DAMA-CRM (Modular Ecosystem) */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 rounded-2xl bg-[#030a06] border border-white/10 p-3.5 text-[13px] text-white/90">
                  <FileText className="size-4 text-[#10b981] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Facturación Legal ISO 19005-1</strong>
                    <span className="text-[#94a3b8] text-[12px]">PDF/A-3b para AEAT, proformas, rectificativas y firma digital pública por token.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-[#030a06] border border-white/10 p-3.5 text-[13px] text-white/90">
                  <Users className="size-4 text-[#10b981] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Multi-Tenant Real & 2FA RBAC</strong>
                    <span className="text-[#94a3b8] text-[12px]">Aislamiento estricto por subdominio, roles por permisos y seguridad 2FA OTP.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-[#030a06] border border-white/10 p-3.5 text-[13px] text-white/90">
                  <Calendar className="size-4 text-[#10b981] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Sincronización Apple & Google Calendar</strong>
                    <span className="text-[#94a3b8] text-[12px]">Integración bidireccional vía webcal:// e importación .ics para eventos y recordatorios.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-[#030a06] border border-white/10 p-3.5 text-[13px] text-white/90">
                  <Kanban className="size-4 text-[#10b981] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Pipeline Kanban & Paridad 11 Idiomas</strong>
                    <span className="text-[#94a3b8] text-[12px]">Embudo visual drag & drop, WebSockets reactivos y soporte multi-idioma completo.</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack & Action Button */}
              <div className="mt-7 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Prisma', 'Redis', 'Docker', 'Tailwind'].map((tag) => (
                    <span 
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-md bg-[#030805] border border-white/15 px-2.5 py-1 font-mono text-[11.5px] font-bold text-white shadow-sm hover:border-[#10b981]/50 transition-colors"
                    >
                      {renderTechIcon(tag)}
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/Ignaciobrenas/DAMA-CRM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-full bg-white px-6 text-[14px] font-extrabold text-[#030805] hover:bg-[#10b981] active:scale-95 transition-all shadow-md shrink-0 w-full sm:w-auto group/btn"
                >
                  <GitBranch className="size-4 text-[#030805]" />
                  <span>{t('work.viewCode')}</span>
                  <ExternalLink className="size-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </article>

          {/* ======================================================== */}
          {/* HERO SHOWCASE 2: ARGUS FRAUD RADAR */}
          {/* ======================================================== */}
          <article 
            id="argus-fraud"
            className="scroll-mt-28 group relative rounded-[32px] border-2 border-[#38bdf8]/40 bg-gradient-to-br from-[#0c2233]/95 via-[#061421]/90 to-[#02060a]/98 p-6 sm:p-8 lg:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-xl hover:border-[#38bdf8] hover:shadow-[0_25px_60px_rgba(56,189,248,0.25)] transition-all duration-300 overflow-hidden"
          >
            {/* Ambient cyan backlight glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#38bdf8]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#38bdf8]/25 transition-all duration-500" />
            
            {/* Top Bar: Category Pill & Status Badge */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[11px] font-black text-[#38bdf8] uppercase tracking-wider bg-[#38bdf8]/15 px-3 py-1 rounded-full border border-[#38bdf8]/30">
                  FLAGSHIP // 02
                </span>
                <span className="font-mono text-[12px] text-[#94a3b8] hidden sm:inline">
                  UNITA Erasmus+ BIP · STUCOM Pelai
                </span>
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#38bdf8] bg-[#38bdf8]/10 px-3.5 py-1 font-mono text-[11px] font-bold text-[#38bdf8]">
                <span className="size-2 rounded-full bg-[#38bdf8] animate-ping" />
                <span>BIG_DATA_ML</span>
              </span>
            </div>

            {/* Title & Core Value */}
            <div className="relative z-10 mt-5">
              <h3 className="font-display text-[27px] sm:text-[34px] font-extrabold text-white tracking-tight leading-tight group-hover:text-cyan-300 transition-colors">
                {t('work.projects.argusFraud.title')}
              </h3>

              <p className="mt-3.5 text-[15px] sm:text-[16.5px] leading-relaxed text-white/90">
                {t('work.projects.argusFraud.desc')}
              </p>

              {/* Architectural Highlights Checklist */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 text-[13px] text-white/90">
                  <Layers className="size-4 text-[#38bdf8] shrink-0" />
                  <span>Pipeline Medallion (Bronze/Silver/Gold) en PySpark</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 text-[13px] text-white/90">
                  <Cpu className="size-4 text-[#38bdf8] shrink-0" />
                  <span>Inferencia predictiva en tiempo real sobre LightGBM</span>
                </div>
              </div>

              {/* Tech Stack & Action Button */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {['PySpark', 'LightGBM', 'FastAPI', 'Streamlit', 'Python'].map((tag) => (
                    <span 
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-md bg-[#030805] border border-white/15 px-2.5 py-1 font-mono text-[11.5px] font-bold text-white shadow-sm hover:border-[#38bdf8]/50 transition-colors"
                    >
                      {renderTechIcon(tag)}
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/Ignaciobrenas/Argus-Fraud-Radar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-full bg-white px-5 text-[13.5px] font-extrabold text-[#030805] hover:bg-[#38bdf8] hover:text-[#030805] active:scale-95 transition-all shadow-md shrink-0 w-full sm:w-auto group/btn"
                >
                  <GitBranch className="size-4 text-[#030805]" />
                  <span>{t('work.viewCode')}</span>
                  <ExternalLink className="size-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </article>

          {/* ======================================================== */}
          {/* DELIVERABLES 2-COLUMN GRID (CANVA, SKELETON, RUN&EAT, LUGIA) */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            
            {/* 3. CANVA CONNECTOR MCP */}
            <article 
              id="canva-mcp"
              className="scroll-mt-28 group relative rounded-[28px] border border-white/15 bg-gradient-to-b from-[#081a11]/90 via-[#040e08]/90 to-[#020503]/95 p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl hover:border-[#10b981] hover:shadow-[0_20px_45px_rgba(16,185,129,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                  <span className="font-mono text-[11px] font-bold text-[#10b981] uppercase tracking-wider bg-[#10b981]/15 px-2.5 py-0.5 rounded border border-[#10b981]/30">
                    AI PROTOCOL · MCP
                  </span>
                  <span className="font-mono text-[11px] font-bold text-white/80">
                    OAUTH 2.0 PKCE
                  </span>
                </div>

                <h3 className="mt-4 font-display text-[22px] sm:text-[25px] font-extrabold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                  {t('work.projects.canvaMcp.title')}
                </h3>

                <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/85">
                  {t('work.projects.canvaMcp.desc')}
                </p>

                <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 text-[12.5px] font-mono text-[#10b981]">
                  <span>Model Context Protocol de Anthropic con contratos Zod estrictos</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {['TypeScript', 'Node.js', 'MCP Protocol'].map((t) => (
                    <span key={t} className="inline-flex items-center gap-1 rounded bg-[#030805] border border-white/15 px-2 py-0.5 font-mono text-[11px] font-bold text-white">
                      {renderTechIcon(t)}
                      <span>{t}</span>
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/Ignaciobrenas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-white hover:text-[#10b981] transition-colors self-start sm:self-auto"
                >
                  <span>{t('work.viewCode')}</span>
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </article>

            {/* 4. SKELETON-MEME TOOL */}
            <article 
              id="skeleton-meme"
              className="scroll-mt-28 group relative rounded-[28px] border border-white/15 bg-gradient-to-b from-[#0e1626]/90 via-[#070d17]/90 to-[#02050a]/95 p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl hover:border-[#818cf8] hover:shadow-[0_20px_45px_rgba(129,140,248,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                  <span className="font-mono text-[11px] font-bold text-[#818cf8] uppercase tracking-wider bg-[#818cf8]/15 px-2.5 py-0.5 rounded border border-[#818cf8]/30">
                    COMPUTER VISION
                  </span>
                  <span className="font-mono text-[11px] font-bold text-white/80">
                    60 FPS CPU
                  </span>
                </div>

                <h3 className="mt-4 font-display text-[22px] sm:text-[25px] font-extrabold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                  {t('work.projects.skeletonMeme.title')}
                </h3>

                <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/85">
                  {t('work.projects.skeletonMeme.desc')}
                </p>

                <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 text-[12.5px] font-mono text-[#818cf8]">
                  <span>MediaPipe Face Mesh + OpenCV a 60 FPS sobre CPU sin sobrecarga</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'MediaPipe', 'OpenCV'].map((t) => (
                    <span key={t} className="inline-flex items-center gap-1 rounded bg-[#030805] border border-white/15 px-2 py-0.5 font-mono text-[11px] font-bold text-white">
                      {renderTechIcon(t)}
                      <span>{t}</span>
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/Ignaciobrenas/Skeleton-Meme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-white hover:text-[#818cf8] transition-colors self-start sm:self-auto"
                >
                  <span>{t('work.viewCode')}</span>
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </article>

            {/* 5. RUN & EAT 2.0 */}
            <article 
              id="run-and-eat"
              className="scroll-mt-28 group relative rounded-[28px] border border-white/15 bg-gradient-to-b from-[#18110b]/90 via-[#0e0906]/90 to-[#030201]/95 p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl hover:border-[#f97316] hover:shadow-[0_20px_45px_rgba(249,115,22,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                  <span className="font-mono text-[11px] font-bold text-[#f97316] uppercase tracking-wider bg-[#f97316]/15 px-2.5 py-0.5 rounded border border-[#f97316]/30">
                    FULL-STACK WEB
                  </span>
                  <span className="font-mono text-[11px] font-bold text-white/80">
                    LARAVEL 11 + VUE
                  </span>
                </div>

                <h3 className="mt-4 font-display text-[22px] sm:text-[25px] font-extrabold text-white tracking-tight group-hover:text-orange-300 transition-colors">
                  {t('work.projects.runAndEat.title')}
                </h3>

                <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/85">
                  {t('work.projects.runAndEat.desc')}
                </p>

                <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 text-[12.5px] font-mono text-[#f97316]">
                  <span>Gestión de eventos urbanos y reservas con Vite y Tailwind</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {['Laravel 11', 'Vue.js', 'Tailwind', 'MySQL'].map((t) => (
                    <span key={t} className="inline-flex items-center gap-1 rounded bg-[#030805] border border-white/15 px-2 py-0.5 font-mono text-[11px] font-bold text-white">
                      {renderTechIcon(t)}
                      <span>{t}</span>
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/Ignaciobrenas/RunAndEat-2.0.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-white hover:text-[#f97316] transition-colors self-start sm:self-auto"
                >
                  <span>{t('work.viewCode')}</span>
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </article>

            {/* 6. LUGIA TERMINAL SETUP */}
            <article 
              id="lugia-terminal"
              className="scroll-mt-28 group relative rounded-[28px] border border-white/15 bg-gradient-to-b from-[#1c0f24]/90 via-[#100714]/90 to-[#040105]/95 p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl hover:border-[#c084fc] hover:shadow-[0_20px_45px_rgba(192,132,252,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                  <span className="font-mono text-[11px] font-bold text-[#c084fc] uppercase tracking-wider bg-[#c084fc]/15 px-2.5 py-0.5 rounded border border-[#c084fc]/30">
                    DEV ENVIRONMENT
                  </span>
                  <span className="font-mono text-[11px] font-bold text-white/80">
                    {'<10ms BOOT'}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-[22px] sm:text-[25px] font-extrabold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                  {t('work.projects.lugiaTerminal.title')}
                </h3>

                <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/85">
                  {t('work.projects.lugiaTerminal.desc')}
                </p>

                <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 text-[12.5px] font-mono text-[#c084fc]">
                  <span>Perfilado de módulos PowerShell 7 con arranque en menos de 10ms</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {['PowerShell', 'Windows Terminal'].map((t) => (
                    <span key={t} className="inline-flex items-center gap-1 rounded bg-[#030805] border border-white/15 px-2 py-0.5 font-mono text-[11px] font-bold text-white">
                      {renderTechIcon(t)}
                      <span>{t}</span>
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/Ignaciobrenas/lugia-terminal-setup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-white hover:text-[#c084fc] transition-colors self-start sm:self-auto"
                >
                  <span>{t('work.viewCode')}</span>
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </article>

          </div>

        </div>

        {/* Progress Footer for chapter */}
        <p className="mt-12 flex items-center gap-3.5 text-[14px] font-bold text-[#94a3b8]">
          <span className="flex gap-[5px]" aria-hidden="true">
            <span className="h-2.5 w-3.5 rounded-full bg-[#10b981]" />
            <span className="h-2.5 w-[30px] rounded-full bg-[#10b981]" />
            <span className="h-2.5 w-3.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-3.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-3.5 rounded-full bg-white/20" />
          </span>
          <span>{t('work.nextChapter')}</span>
        </p>

      </div>
    </section>
  );
};
