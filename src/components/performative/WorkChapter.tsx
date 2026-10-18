import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  ArrowUpRight, 
  Cpu, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  FileText, 
  Users, 
  Kanban,
  Activity,
  Camera,
  Globe,
  Terminal,
  GraduationCap
} from 'lucide-react';
import { FaJava } from 'react-icons/fa6';
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
  SiDocker,
  SiGithub,
  SiSymfony,
  SiPhp
} from 'react-icons/si';
import { VscTerminalPowershell } from 'react-icons/vsc';

export const WorkChapter: React.FC = () => {
  const { t } = useTranslation();

  // Helper to render official brand icons for tech pills
  const renderTechIcon = (tag: string) => {
    const lower = tag.toLowerCase();
    if (lower.includes('java')) return <FaJava className="size-3.5 text-[#ea2d2e]" />;
    if (lower.includes('symfony')) return <SiSymfony className="size-3.5 text-white" />;
    if (lower.includes('php')) return <SiPhp className="size-3.5 text-[#777bb4]" />;
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
            className="scroll-mt-28 group rounded-2xl p-6 sm:p-8 lg:p-9 bg-[#07190f]/60 backdrop-blur-xl border border-emerald-500/25 hover:border-emerald-500/50 shadow-[0_16px_48px_rgba(0,0,0,0.5)] transition-all duration-300 relative overflow-hidden"
          >
            {/* Top Bar: Engineering Specification & Benchmark Status */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-sans text-[11px] font-bold text-slate-950 uppercase tracking-wide bg-emerald-400 px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                  <Sparkles className="size-3 text-slate-950" />
                  <span>{t('work.projects.damaCrm.stamp')}</span>
                </span>
                <span className="text-[13px] text-slate-300 font-medium hidden sm:inline">
                  {t('work.projects.damaCrm.context')}
                </span>
              </div>

              {/* DAMA Logo & Verified Benchmark Stamp */}
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 rounded-xl bg-white/[0.08] border border-white/15">
                  <img 
                    src="/images/assets/dama-logo-white.png" 
                    alt="DAMA-CRM Logo" 
                    className="h-6 w-auto object-contain" 
                  />
                </div>
                <span className="font-sans text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/25 flex items-center gap-1.5">
                  <CheckCircle2 className="size-3 text-emerald-400" />
                  <span>{t('work.projects.damaCrm.testsStamp')}</span>
                </span>
              </div>
            </div>

            {/* Title & Core Architectural Value */}
            <div className="relative z-10 mt-5">
              <h3 className="font-display text-[26px] sm:text-[32px] font-extrabold text-white tracking-tight leading-tight group-hover:text-emerald-300 transition-colors">
                {t('work.projects.damaCrm.title')}
              </h3>

              <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-slate-300">
                {t('work.projects.damaCrm.desc')}
              </p>

              {/* 4 Architectural Specification Modules of DAMA-CRM */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-start gap-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-md border border-white/10 p-4 text-[13px] text-slate-200 hover:border-emerald-500/30 transition-all">
                  <FileText className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold text-[14px] mb-0.5">{t('work.projects.damaCrm.feature1Title')}</strong>
                    <span className="text-slate-400 text-[12.5px] leading-normal block">{t('work.projects.damaCrm.feature1Desc')}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-md border border-white/10 p-4 text-[13px] text-slate-200 hover:border-emerald-500/30 transition-all">
                  <Users className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold text-[14px] mb-0.5">{t('work.projects.damaCrm.feature2Title')}</strong>
                    <span className="text-slate-400 text-[12.5px] leading-normal block">{t('work.projects.damaCrm.feature2Desc')}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-md border border-white/10 p-4 text-[13px] text-slate-200 hover:border-emerald-500/30 transition-all">
                  <Calendar className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold text-[14px] mb-0.5">{t('work.projects.damaCrm.feature3Title')}</strong>
                    <span className="text-slate-400 text-[12.5px] leading-normal block">{t('work.projects.damaCrm.feature3Desc')}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-md border border-white/10 p-4 text-[13px] text-slate-200 hover:border-emerald-500/30 transition-all">
                  <Kanban className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold text-[14px] mb-0.5">{t('work.projects.damaCrm.feature4Title')}</strong>
                    <span className="text-slate-400 text-[12.5px] leading-normal block">{t('work.projects.damaCrm.feature4Desc')}</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack & Action Button */}
              <div className="mt-7 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  {['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Prisma', 'Redis', 'Docker', 'Tailwind'].map((tag) => (
                    <span 
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] border border-white/10 px-2.5 py-1 text-[12px] font-medium text-slate-200 hover:border-emerald-500/40 transition-colors"
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
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-5 text-[13.5px] font-sans font-bold text-slate-950 active:scale-95 transition-all shadow-md shrink-0 w-full sm:w-auto group/btn"
                >
                  <SiGithub className="size-4 text-slate-950" />
                  <span>{t('work.viewGitHub')}</span>
                  <ArrowUpRight className="size-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </article>

          {/* ======================================================== */}
          {/* HERO SHOWCASE 2: ARGUS FRAUD RADAR */}
          {/* ======================================================== */}
          <article 
            id="argus-fraud"
            className="scroll-mt-28 group rounded-2xl p-6 sm:p-8 lg:p-9 bg-[#061522]/60 backdrop-blur-xl border border-sky-500/25 hover:border-sky-500/50 shadow-[0_16px_48px_rgba(0,0,0,0.5)] transition-all duration-300 relative overflow-hidden"
          >
            {/* Top Bar: Telemetry Pill & Status Badge */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="font-sans text-[11px] font-bold text-sky-300 uppercase tracking-wide bg-sky-500/15 px-3 py-1 rounded-full border border-sky-500/30 flex items-center gap-1.5">
                  <Activity className="size-3 text-sky-300" />
                  <span>{t('work.projects.argusFraud.badge')}</span>
                </span>
                <span className="text-[13px] text-slate-300 font-medium hidden sm:inline">
                  {t('work.projects.argusFraud.context')}
                </span>
              </div>

              <span className="font-sans text-[11px] font-semibold text-sky-300 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/25 flex items-center gap-1.5">
                <CheckCircle2 className="size-3 text-sky-300" />
                <span>{t('work.projects.argusFraud.inferStamp')}</span>
              </span>
            </div>

            {/* Title & Core Value */}
            <div className="relative z-10 mt-5">
              <h3 className="font-display text-[26px] sm:text-[32px] font-extrabold text-white tracking-tight leading-tight group-hover:text-cyan-300 transition-colors">
                {t('work.projects.argusFraud.title')}
              </h3>

              <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-slate-300">
                {t('work.projects.argusFraud.desc')}
              </p>

              {/* Data Pipeline Stages */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/10 p-3.5 text-[13px] text-slate-200">
                  <Layers className="size-4 text-sky-400 shrink-0" />
                  <span>{t('work.projects.argusFraud.feature1')}</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/10 p-3.5 text-[13px] text-slate-200">
                  <Cpu className="size-4 text-sky-400 shrink-0" />
                  <span>{t('work.projects.argusFraud.feature2')}</span>
                </div>
              </div>

              {/* Tech Stack & Action Button */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  {['PySpark', 'LightGBM', 'FastAPI', 'Streamlit', 'Python'].map((tag) => (
                    <span 
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] border border-white/10 px-2.5 py-1 text-[12px] font-medium text-slate-200 hover:border-sky-500/40 transition-colors"
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
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-sky-400 hover:bg-sky-300 px-5 text-[13.5px] font-sans font-bold text-slate-950 active:scale-95 transition-all shadow-md shrink-0 w-full sm:w-auto group/btn"
                >
                  <SiGithub className="size-4 text-slate-950" />
                  <span>{t('work.viewGitHub')}</span>
                  <ArrowUpRight className="size-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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
              className="scroll-mt-28 group rounded-2xl p-6 sm:p-7 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px]">
                  <span className="font-sans font-bold text-emerald-400 uppercase tracking-wide bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
                    <Cpu className="size-3 text-emerald-400" />
                    <span>{t('work.projects.canvaMcp.badge')}</span>
                  </span>
                  <span className="font-sans font-semibold text-slate-400">
                    OAuth 2.0 PKCE
                  </span>
                </div>

                <h3 className="mt-4 font-display text-[20px] sm:text-[22px] font-extrabold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                  {t('work.projects.canvaMcp.title')}
                </h3>

                <p className="mt-2.5 text-[14px] leading-relaxed text-slate-300">
                  {t('work.projects.canvaMcp.desc')}
                </p>

                <div className="mt-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-[12.5px] text-slate-300 flex items-start gap-2.5">
                  <Sparkles className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t('work.projects.canvaMcp.feature')}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {['TypeScript', 'Node.js', 'MCP Protocol'].map((tTag) => (
                    <span key={tTag} className="inline-flex items-center gap-1 rounded-lg bg-white/[0.04] border border-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200">
                      {renderTechIcon(tTag)}
                      <span>{tTag}</span>
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/Ignaciobrenas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-sans font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 self-start sm:self-auto transition-colors"
                >
                  <SiGithub className="size-3.5" />
                  <span>{t('work.viewGitHub')}</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </article>

            {/* 4. SKELETON-MEME TOOL */}
            <article 
              id="skeleton-meme"
              className="scroll-mt-28 group rounded-2xl p-6 sm:p-7 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px]">
                  <span className="font-sans font-bold text-indigo-400 uppercase tracking-wide bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20 flex items-center gap-1.5">
                    <Camera className="size-3 text-indigo-400" />
                    <span>{t('work.projects.skeletonMeme.badge')}</span>
                  </span>
                  <span className="font-sans font-semibold text-slate-400">
                    60 FPS CPU Estable
                  </span>
                </div>

                <h3 className="mt-4 font-display text-[20px] sm:text-[22px] font-extrabold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                  {t('work.projects.skeletonMeme.title')}
                </h3>

                <p className="mt-2.5 text-[14px] leading-relaxed text-slate-300">
                  {t('work.projects.skeletonMeme.desc')}
                </p>

                <div className="mt-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-[12.5px] text-slate-300 flex items-start gap-2.5">
                  <Sparkles className="size-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{t('work.projects.skeletonMeme.feature')}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'MediaPipe', 'OpenCV'].map((tTag) => (
                    <span key={tTag} className="inline-flex items-center gap-1 rounded-lg bg-white/[0.04] border border-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200">
                      {renderTechIcon(tTag)}
                      <span>{tTag}</span>
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/Ignaciobrenas/Skeleton-Meme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-sans font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1.5 self-start sm:self-auto transition-colors"
                >
                  <SiGithub className="size-3.5" />
                  <span>{t('work.viewGitHub')}</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </article>

            {/* 5. RUN & EAT 2.0 */}
            <article 
              id="run-and-eat"
              className="scroll-mt-28 group rounded-2xl p-6 sm:p-7 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px]">
                  <span className="font-sans font-bold text-amber-400 uppercase tracking-wide bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20 flex items-center gap-1.5">
                    <Globe className="size-3 text-amber-400" />
                    <span>{t('work.projects.runAndEat.badge')}</span>
                  </span>
                  <span className="font-sans font-semibold text-slate-400">
                    Laravel 11 + Vue
                  </span>
                </div>

                <h3 className="mt-4 font-display text-[20px] sm:text-[22px] font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                  {t('work.projects.runAndEat.title')}
                </h3>

                <p className="mt-2.5 text-[14px] leading-relaxed text-slate-300">
                  {t('work.projects.runAndEat.desc')}
                </p>

                <div className="mt-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-[12.5px] text-slate-300 flex items-start gap-2.5">
                  <Sparkles className="size-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{t('work.projects.runAndEat.feature')}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {['Laravel 11', 'Vue.js', 'Tailwind', 'MySQL'].map((tTag) => (
                    <span key={tTag} className="inline-flex items-center gap-1 rounded-lg bg-white/[0.04] border border-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200">
                      {renderTechIcon(tTag)}
                      <span>{tTag}</span>
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/Ignaciobrenas/RunAndEat-2.0.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-sans font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5 self-start sm:self-auto transition-colors"
                >
                  <SiGithub className="size-3.5" />
                  <span>{t('work.viewGitHub')}</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </article>

            {/* 6. LUGIA TERMINAL SETUP */}
            <article 
              id="lugia-terminal"
              className="scroll-mt-28 group rounded-2xl p-6 sm:p-7 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px]">
                  <span className="font-sans font-bold text-purple-400 uppercase tracking-wide bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20 flex items-center gap-1.5">
                    <Terminal className="size-3 text-purple-400" />
                    <span>{t('work.projects.lugiaTerminal.badge')}</span>
                  </span>
                  <span className="font-sans font-semibold text-slate-400">
                    Arranque &lt;10ms
                  </span>
                </div>

                <h3 className="mt-4 font-display text-[20px] sm:text-[22px] font-extrabold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                  {t('work.projects.lugiaTerminal.title')}
                </h3>

                <p className="mt-2.5 text-[14px] leading-relaxed text-slate-300">
                  {t('work.projects.lugiaTerminal.desc')}
                </p>

                <div className="mt-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-[12.5px] text-slate-300 flex items-start gap-2.5">
                  <Sparkles className="size-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{t('work.projects.lugiaTerminal.feature')}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {['PowerShell', 'Windows Terminal'].map((tTag) => (
                    <span key={tTag} className="inline-flex items-center gap-1 rounded-lg bg-white/[0.04] border border-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200">
                      {renderTechIcon(tTag)}
                      <span>{tTag}</span>
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/Ignaciobrenas/lugia-terminal-setup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-sans font-semibold text-purple-400 hover:text-purple-300 inline-flex items-center gap-1.5 self-start sm:self-auto transition-colors"
                >
                  <SiGithub className="size-3.5" />
                  <span>{t('work.viewGitHub')}</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </article>

          </div>

          {/* ======================================================== */}
          {/* ACADEMIC & CORE SOFTWARE ENGINEERING PROJECTS (STUCOM)   */}
          {/* ======================================================== */}
          <div className="mt-6 flex flex-col gap-6 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <GraduationCap className="size-5" />
                </div>
                <div>
                  <h3 className="font-display text-[22px] sm:text-[24px] font-extrabold text-white tracking-tight">
                    {t('work.academicSectionTitle')}
                  </h3>
                  <p className="text-[13.5px] text-[#94a3b8] mt-0.5">
                    {t('work.academicSectionSubtitle')}
                  </p>
                </div>
              </div>

              {/* Stucom Logo Badge ON CRISP WHITE PLATE */}
              <div className="inline-flex items-center px-3 py-1.5 rounded-xl bg-white shadow-sm border border-white/20 shrink-0 self-start sm:self-auto">
                <img 
                  src="/images/assets/stucom.svg" 
                  alt="STUCOM Pelai" 
                  className="h-5 w-auto object-contain" 
                />
              </div>
            </div>

            {/* 4 Academic Projects Cards Grid (Strictly Academic, NO QA projects) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* 1. StarSTUCOM */}
              <article className="group rounded-2xl p-6 sm:p-7 bg-[#0a1811]/50 hover:bg-[#0c2217]/65 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px]">
                    <span className="font-sans font-bold text-emerald-400 uppercase tracking-wide bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
                      <FaJava className="size-3 text-[#ea2d2e]" />
                      <span>{t('work.academicProjects.starStucom.badge')}</span>
                    </span>
                    <span className="font-sans font-semibold text-slate-400">
                      {t('work.academicProjects.starStucom.stamp')}
                    </span>
                  </div>

                  <h4 className="mt-4 font-display text-[20px] sm:text-[22px] font-extrabold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                    {t('work.academicProjects.starStucom.title')}
                  </h4>

                  <p className="mt-2.5 text-[14px] leading-relaxed text-slate-300">
                    {t('work.academicProjects.starStucom.desc')}
                  </p>

                  <div className="mt-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-[12.5px] text-slate-300 flex items-start gap-2.5">
                    <Sparkles className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{t('work.academicProjects.starStucom.feature')}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {['Java', 'OOP', 'Algorithms'].map((tTag) => (
                      <span key={tTag} className="inline-flex items-center gap-1 rounded-lg bg-white/[0.04] border border-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200">
                        {renderTechIcon(tTag)}
                        <span>{tTag}</span>
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/Ignaciobrenas/StarSTUCOM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-sans font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 self-start sm:self-auto transition-colors"
                  >
                    <SiGithub className="size-3.5" />
                    <span>{t('work.viewGitHub')}</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </article>

              {/* 2. IgnacioBank */}
              <article className="group rounded-2xl p-6 sm:p-7 bg-[#0a1811]/50 hover:bg-[#0c2217]/65 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px]">
                    <span className="font-sans font-bold text-emerald-400 uppercase tracking-wide bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
                      <FaJava className="size-3 text-[#ea2d2e]" />
                      <span>{t('work.academicProjects.ignacioBank.badge')}</span>
                    </span>
                    <span className="font-sans font-semibold text-slate-400">
                      {t('work.academicProjects.ignacioBank.stamp')}
                    </span>
                  </div>

                  <h4 className="mt-4 font-display text-[20px] sm:text-[22px] font-extrabold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                    {t('work.academicProjects.ignacioBank.title')}
                  </h4>

                  <p className="mt-2.5 text-[14px] leading-relaxed text-slate-300">
                    {t('work.academicProjects.ignacioBank.desc')}
                  </p>

                  <div className="mt-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-[12.5px] text-slate-300 flex items-start gap-2.5">
                    <Sparkles className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{t('work.academicProjects.ignacioBank.feature')}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {['Java', 'Multithreading', 'ACID'].map((tTag) => (
                      <span key={tTag} className="inline-flex items-center gap-1 rounded-lg bg-white/[0.04] border border-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200">
                        {renderTechIcon(tTag)}
                        <span>{tTag}</span>
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/Ignaciobrenas/IgnacioBank-BankingManagemenSystem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-sans font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 self-start sm:self-auto transition-colors"
                  >
                    <SiGithub className="size-3.5" />
                    <span>{t('work.viewGitHub')}</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </article>

              {/* 3. Concesionario AutoGest */}
              <article className="group rounded-2xl p-6 sm:p-7 bg-[#0a1811]/50 hover:bg-[#0c2217]/65 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px]">
                    <span className="font-sans font-bold text-emerald-400 uppercase tracking-wide bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
                      <FaJava className="size-3 text-[#ea2d2e]" />
                      <span>{t('work.academicProjects.concesionario.badge')}</span>
                    </span>
                    <span className="font-sans font-semibold text-slate-400">
                      {t('work.academicProjects.concesionario.stamp')}
                    </span>
                  </div>

                  <h4 className="mt-4 font-display text-[20px] sm:text-[22px] font-extrabold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                    {t('work.academicProjects.concesionario.title')}
                  </h4>

                  <p className="mt-2.5 text-[14px] leading-relaxed text-slate-300">
                    {t('work.academicProjects.concesionario.desc')}
                  </p>

                  <div className="mt-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-[12.5px] text-slate-300 flex items-start gap-2.5">
                    <Sparkles className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{t('work.academicProjects.concesionario.feature')}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {['Java', 'Swing', 'MySQL'].map((tTag) => (
                      <span key={tTag} className="inline-flex items-center gap-1 rounded-lg bg-white/[0.04] border border-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200">
                        {renderTechIcon(tTag)}
                        <span>{tTag}</span>
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/Ignaciobrenas/Concesionario-InterfazGrafica-Ficheros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-sans font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 self-start sm:self-auto transition-colors"
                  >
                    <SiGithub className="size-3.5" />
                    <span>{t('work.viewGitHub')}</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </article>

              {/* 4. Nurse Simulator */}
              <article className="group rounded-2xl p-6 sm:p-7 bg-[#0a1811]/50 hover:bg-[#0c2217]/65 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px]">
                    <span className="font-sans font-bold text-sky-400 uppercase tracking-wide bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/20 flex items-center gap-1.5">
                      <SiSymfony className="size-3 text-white" />
                      <span>{t('work.academicProjects.nurseSimulator.badge')}</span>
                    </span>
                    <span className="font-sans font-semibold text-slate-400">
                      {t('work.academicProjects.nurseSimulator.stamp')}
                    </span>
                  </div>

                  <h4 className="mt-4 font-display text-[20px] sm:text-[22px] font-extrabold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                    {t('work.academicProjects.nurseSimulator.title')}
                  </h4>

                  <p className="mt-2.5 text-[14px] leading-relaxed text-slate-300">
                    {t('work.academicProjects.nurseSimulator.desc')}
                  </p>

                  <div className="mt-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-[12.5px] text-slate-300 flex items-start gap-2.5">
                    <Sparkles className="size-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{t('work.academicProjects.nurseSimulator.feature')}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {['Symfony', 'PHP', 'MySQL'].map((tTag) => (
                      <span key={tTag} className="inline-flex items-center gap-1 rounded-lg bg-white/[0.04] border border-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200">
                        {renderTechIcon(tTag)}
                        <span>{tTag}</span>
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/Ignaciobrenas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-sans font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1.5 self-start sm:self-auto transition-colors"
                  >
                    <SiGithub className="size-3.5" />
                    <span>{t('work.viewGitHub')}</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </article>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
