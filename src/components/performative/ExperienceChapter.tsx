import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, ArrowUpRight, Building2, Cpu, Radio } from 'lucide-react';
import { SiNodedotjs, SiTypescript, SiPostgresql, SiPrisma, SiDocker, SiPython, SiApple, SiDebian, SiUbuntu, SiNginx, SiN8N, SiReact, SiTailwindcss } from 'react-icons/si';

export const ExperienceChapter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" data-chapter="experience" className="relative pt-12 lg:pt-20">
      <div className="flex flex-col items-start min-w-0 w-full">
        
        {/* Chapter Header */}
        <header className="flex flex-col items-start">
          <div className="flex items-center gap-4">
            <span 
              aria-hidden="true" 
              className="inline-flex shrink-0 -rotate-8 items-center justify-center border-2 border-white bg-[#0c2316] font-display font-extrabold text-white shadow-[0_6px_16px_rgba(255,255,255,0.15)] size-12 rounded-[12px] text-[20px]"
            >
              {t('experience.chapterNum')}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-none font-extrabold tracking-[-0.035em] text-white">
              {t('experience.chapterTitle')}
            </h2>
          </div>
          <p className="hand mt-3 ml-2 text-[22px] lg:text-[26px] text-white">
            {t('experience.chapterHand')}
          </p>
        </header>

        {/* Lead description */}
        <p className="mt-4 text-[16px] lg:text-[18px] leading-[1.55] text-[#94a3b8]">
          {t('experience.lead')}
        </p>

        {/* Experience Dossier Stack */}
        <div className="mt-8 flex flex-col gap-7 w-full">
          
          {/* 1. SOTERGUARD DOSSIER */}
          <article id="soteguard" className="scroll-mt-28 group rounded-2xl p-6 lg:p-8 bg-[#0a1a12]/50 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-[#0c2217]/65 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
            
            {/* Dossier Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-emerald-300 bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-500/25 tracking-wide">
                  <Building2 className="size-3.5 text-emerald-400" />
                  <span>{t('experience.soterguard.badge')}</span>
                </span>
                <span className="text-[12px] text-white/50 hidden sm:inline font-medium">
                  {t('experience.soterguard.location')}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{t('experience.soterguard.stamp')}</span>
                </span>

                <a 
                  href={t('experience.soterguard.website')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center p-1.5 rounded-lg bg-white/5 border border-white/15 text-white/70 hover:text-white hover:border-emerald-400 transition-all"
                  title={t('experience.visitWebsite')}
                >
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Role Header & Brand Plate with Soterguard Sprite */}
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-[23px] sm:text-[26px] font-extrabold text-white tracking-tight">
                  {t('experience.soterguard.role')}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-x-2.5 text-[13.5px]">
                  <a 
                    href={t('experience.soterguard.website')} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-[#10b981] hover:underline underline-offset-4"
                  >
                    <span>{t('experience.soterguard.websiteDisplay')}</span>
                  </a>
                  <span className="text-white/30">/</span>
                  <span className="text-white/80 font-medium">
                    {t('experience.soterguard.type')}
                  </span>
                  <span className="text-white/30">/</span>
                  <span className="font-mono text-[12px] text-[#94a3b8]">
                    {t('experience.soterguard.period')}
                  </span>
                </div>
              </div>

              {/* Soterguard Brand Mark on white plate + Ignacio in Soterguard shirt */}
              <div className="flex items-center gap-3 shrink-0 self-start sm:self-auto">
                <img 
                  src="/images/sprites/ignacio_soterguard_confident.svg" 
                  alt="Ignacio Breñas — Soterguard" 
                  className="size-12 sm:size-14 object-contain pixelated drop-shadow-[0_4px_12px_rgba(16,185,129,0.35)]" 
                />
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white shadow-sm border border-white/30">
                  <img 
                    src="/images/assets/soteguard.png" 
                    alt="Soterguard Logo" 
                    className="h-7 w-auto max-w-[170px] object-contain object-left" 
                  />
                </div>
              </div>
            </div>

            {/* Dedicated Architectural Sub-System Block: Stoam SaaS & Stoam Connect */}
            <div className="mt-6 rounded-xl bg-white/[0.03] backdrop-blur-md border border-emerald-500/20 p-4 sm:p-5 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="px-2.5 py-1 rounded bg-white shrink-0">
                    <img 
                      src="/images/assets/stoam.png" 
                      alt="Stoam SaaS Logo" 
                      className="h-6 w-auto max-w-[100px] object-contain" 
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-400 block tracking-wide">
                      {t('experience.soterguard.stoamSubtitle')}
                    </span>
                    <span className="font-display font-extrabold text-[15px] text-white">
                      {t('experience.soterguard.stoamTitle')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 rounded-full bg-[#ea4b71]/15 border border-[#ea4b71]/30 px-3 py-1 text-[11px] font-semibold text-[#ea4b71] self-start sm:self-auto">
                  <SiN8N className="size-3.5 text-[#ea4b71]" />
                  <span>{t('experience.soterguard.n8nOrchestration')}</span>
                </div>
              </div>

              <p className="text-[13.5px] text-[#94a3b8] mt-3 leading-relaxed">
                {t('experience.soterguard.stoamDesc')}
              </p>
            </div>

            {/* Bullets with precision markers */}
            <ul className="mt-5 flex flex-col gap-2.5 text-[14.5px] leading-relaxed text-white/90">
              {(t('experience.soterguard.bullets', { returnObjects: true }) as string[]).map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-mono text-[#10b981] font-bold text-[13px] mt-0.5 select-none shrink-0">▸</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Stack Chips in Hardware Row */}
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] backdrop-blur-sm border border-white/10 px-3 py-1 text-[12px] font-medium text-white/90">
                  <SiTypescript className="size-3 text-[#3178c6]" />
                  <span>TypeScript</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] backdrop-blur-sm border border-white/10 px-3 py-1 text-[12px] font-medium text-white/90">
                  <SiNodedotjs className="size-3 text-[#5fa04e]" />
                  <span>Node.js</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] backdrop-blur-sm border border-white/10 px-3 py-1 text-[12px] font-medium text-white/90">
                  <SiReact className="size-3 text-[#61dafb]" />
                  <span>React</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] backdrop-blur-sm border border-white/10 px-3 py-1 text-[12px] font-medium text-white/90">
                  <SiTailwindcss className="size-3 text-[#38bdf8]" />
                  <span>Tailwind</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] backdrop-blur-sm border border-white/10 px-3 py-1 text-[12px] font-medium text-white/90">
                  <SiN8N className="size-3 text-[#ea4b71]" />
                  <span>n8n</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/25 px-3 py-1 text-[12px] font-bold text-emerald-300">
                  <span>Sage · A3ERP · Odoo</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] backdrop-blur-sm border border-white/10 px-3 py-1 text-[12px] font-medium text-white/90">
                  <SiPostgresql className="size-3 text-[#4169e1]" />
                  <span>PostgreSQL</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] backdrop-blur-sm border border-white/10 px-3 py-1 text-[12px] font-medium text-white/90">
                  <SiPrisma className="size-3 text-white" />
                  <span>PrismaORM</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] backdrop-blur-sm border border-white/10 px-3 py-1 text-[12px] font-medium text-white/90">
                  <SiDocker className="size-3 text-[#2496ed]" />
                  <span>Docker</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] backdrop-blur-sm border border-white/10 px-3 py-1 text-[12px] font-medium text-white/90">
                  <SiPython className="size-3 text-[#3776ab]" />
                  <span>Python</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] backdrop-blur-sm border border-white/10 px-3 py-1 text-[12px] font-mono text-white/80">
                  <span>Agile / Kanban</span>
                </span>
              </div>

              <a 
                href={t('experience.soterguard.website')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 text-[13px] font-medium text-emerald-300 hover:text-emerald-200 transition-all shrink-0"
              >
                <span>{t('experience.soterguard.visitLink')}</span>
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </article>

          {/* 2. VIMTECH DOSSIER */}
          <article id="vimtech" className="scroll-mt-28 group rounded-2xl p-6 lg:p-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/25 hover:bg-white/[0.05] transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
            
            {/* Dossier Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-zinc-200 bg-white/10 px-3 py-1 rounded-full border border-white/20 tracking-wide">
                  <Cpu className="size-3.5 text-zinc-300" />
                  <span>{t('experience.vimtech.badge')}</span>
                </span>
                <span className="text-[12px] text-white/50 hidden sm:inline font-medium">
                  {t('experience.vimtech.location')}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/80 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  <span>{t('experience.vimtech.stamp')}</span>
                </span>

                <a 
                  href={t('experience.vimtech.website')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center p-1.5 rounded-lg bg-white/5 border border-white/15 text-white/70 hover:text-white transition-all"
                  title={t('experience.visitWebsite')}
                >
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Role Header & Brand Plate */}
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-[23px] sm:text-[26px] font-extrabold text-white tracking-tight">
                  {t('experience.vimtech.role')}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-x-2.5 text-[13.5px]">
                  <a 
                    href={t('experience.vimtech.website')} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:text-white/80 hover:underline underline-offset-4"
                  >
                    <span>{t('experience.vimtech.websiteDisplay')}</span>
                  </a>
                  <span className="text-white/30">/</span>
                  <span className="text-white/80 font-medium">
                    {t('experience.vimtech.type')}
                  </span>
                  <span className="text-white/30">/</span>
                  <span className="font-mono text-[12px] text-[#94a3b8]">
                    {t('experience.vimtech.period')}
                  </span>
                </div>
              </div>

              {/* Vimtech Logo Plate */}
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-[#141b16] shadow-sm border border-white/20 shrink-0 self-start sm:self-auto">
                <img 
                  src="/images/assets/vimtech.png" 
                  alt="VimTech Logo" 
                  className="h-6 w-auto max-w-[150px] object-contain object-left" 
                />
              </div>
            </div>

            {/* Bullets with precision markers */}
            <ul className="mt-5 flex flex-col gap-2.5 text-[14.5px] leading-relaxed text-white/90">
              {(t('experience.vimtech.bullets', { returnObjects: true }) as string[]).map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-mono text-white/80 font-bold text-[13px] mt-0.5 select-none shrink-0">▸</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Stack Chips in Hardware Row */}
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] backdrop-blur-sm border border-white/10 px-3 py-1 text-[12px] font-medium text-white/90">
                  <SiApple className="size-3 text-white" />
                  <span>Apple Architecture</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] backdrop-blur-sm border border-white/10 px-3 py-1 text-[12px] font-medium text-white/90">
                  <SiDebian className="size-3 text-[#a81d33]" />
                  <span>Debian</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] backdrop-blur-sm border border-white/10 px-3 py-1 text-[12px] font-medium text-white/90">
                  <SiUbuntu className="size-3 text-[#e95420]" />
                  <span>Ubuntu</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] backdrop-blur-sm border border-white/10 px-3 py-1 text-[12px] font-medium text-white/90">
                  <span>{t('experience.vimtech.qaChip')}</span>
                </span>
              </div>

              <a 
                href={t('experience.vimtech.website')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-[13px] font-medium text-white transition-all shrink-0"
              >
                <span>{t('experience.vimtech.visitLink')}</span>
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </article>

          {/* 3. AJMA DOSSIER */}
          <article id="ajma" className="scroll-mt-28 group rounded-2xl p-6 lg:p-8 bg-[#091a26]/45 backdrop-blur-xl border border-sky-500/20 hover:border-sky-500/40 hover:bg-[#0c2438]/55 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
            
            {/* Dossier Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-sky-300 bg-sky-500/15 px-3 py-1 rounded-full border border-sky-500/25 tracking-wide">
                  <Radio className="size-3.5 text-sky-400" />
                  <span>{t('experience.ajma.badge')}</span>
                </span>
                <span className="text-[12px] text-white/50 hidden sm:inline font-medium">
                  {t('experience.ajma.location')}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-sky-300 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/30">
                  <span>{t('experience.ajma.stamp')}</span>
                </span>

                <a 
                  href={t('experience.ajma.website')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center p-1.5 rounded-lg bg-white/5 border border-white/15 text-white/70 hover:text-sky-300 transition-all"
                  title={t('experience.visitWebsite')}
                >
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Role Header & Brand Plate */}
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-[23px] sm:text-[26px] font-extrabold text-white tracking-tight">
                  {t('experience.ajma.role')}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-x-2.5 text-[13.5px]">
                  <a 
                    href={t('experience.ajma.website')} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-[#38bdf8] hover:underline underline-offset-4"
                  >
                    <span>{t('experience.ajma.company')}</span>
                  </a>
                  <span className="text-white/30">/</span>
                  <span className="font-mono text-[12px] text-[#94a3b8]">
                    {t('experience.ajma.period')}
                  </span>
                </div>
              </div>

              {/* AJMA Brand Plate */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white shadow-sm border border-white/30 shrink-0 self-start sm:self-auto">
                <img 
                  src="/images/assets/ajma.png" 
                  alt="AJMA Logo" 
                  className="h-7 w-auto object-contain" 
                />
                <span className="font-display font-black text-[15px] text-[#030805]">
                  AJMA
                </span>
              </div>
            </div>

            {/* Official Endorsement Quote Box */}
            <div className="mt-5 rounded-xl bg-white/[0.04] backdrop-blur-sm border-l-2 border-[#38bdf8] p-4 text-[13.5px] text-white/85 italic leading-relaxed">
              "{t('experience.ajma.quote')}"
            </div>

            {/* Bullets with precision markers */}
            <ul className="mt-5 flex flex-col gap-2.5 text-[14.5px] leading-relaxed text-white/90">
              {(t('experience.ajma.bullets', { returnObjects: true }) as string[]).map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-mono text-[#38bdf8] font-bold text-[13px] mt-0.5 select-none shrink-0">▸</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Stack Chips in Hardware Row */}
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] backdrop-blur-sm border border-white/10 px-3 py-1 text-[12px] font-medium text-white/90">
                  <SiNginx className="size-3 text-[#009639]" />
                  <span>Nginx</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] backdrop-blur-sm border border-white/10 px-3 py-1 text-[12px] font-medium text-white/90">
                  <span>{t('experience.ajma.webArch')}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] backdrop-blur-sm border border-white/10 px-3 py-1 text-[12px] font-medium text-white/90">
                  <span>{t('experience.ajma.avPipeline')}</span>
                </span>
              </div>

              <a 
                href={t('experience.ajma.website')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/25 text-[13px] font-medium text-sky-300 hover:text-sky-200 transition-all shrink-0"
              >
                <span>{t('experience.ajma.visitLink')}</span>
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
};
