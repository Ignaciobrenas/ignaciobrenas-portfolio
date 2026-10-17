import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { SiNodedotjs, SiTypescript, SiPostgresql, SiPrisma, SiDocker, SiPython, SiApple, SiDebian, SiUbuntu, SiNginx, SiN8N } from 'react-icons/si';

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

        {/* Experience Cards Stack */}
        <div className="mt-8 flex flex-col gap-6 w-full">
          
          {/* 1. SOTERGUARD CARD */}
          <article id="soteguard" className="scroll-mt-28 group rounded-[28px] border border-[#10b981]/40 bg-gradient-to-br from-[#0c2417]/95 via-[#06150d]/90 to-[#030906]/95 p-6 lg:p-8 shadow-[0_16px_45px_rgba(0,0,0,0.7)] backdrop-blur-md hover:border-[#10b981] hover:shadow-[0_20px_50px_rgba(16,185,129,0.2)] transition-all duration-300">
            
            {/* Top Bar: Company Logo on Light Plate + Status Stamp */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
              <a 
                href={t('experience.soterguard.website')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 group/logo focus:outline-none"
                title={t('experience.visitWebsite')}
              >
                {/* Authentic Logo on high-contrast frosted badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md shadow-sm border border-white/20 group-hover/logo:bg-white group-hover/logo:scale-105 transition-all">
                  <img 
                    src="/images/assets/soteguard.png" 
                    alt="Soterguard Logo" 
                    className="h-8 sm:h-9 w-auto max-w-[200px] object-contain object-left" 
                  />
                </div>
                <ExternalLink className="size-4 text-white/70 group-hover/logo:text-[#10b981] group-hover/logo:translate-x-0.5 group-hover/logo:-translate-y-0.5 transition-all" />
              </a>

              {/* Status Stamp Badge in header row — never overlapping text */}
              <span className="self-start sm:self-auto inline-flex items-center gap-1.5 rounded-full border border-[#10b981] bg-[#10b981]/15 px-3.5 py-1 font-mono text-[11px] font-extrabold tracking-[0.08em] text-[#10b981] shadow-sm">
                <span className="size-2 rounded-full bg-[#10b981] animate-ping" />
                <span>{t('experience.soterguard.stamp')}</span>
              </span>
            </div>

            {/* Role & Context Details */}
            <div className="mt-5">
              <h3 className="font-display text-[22px] sm:text-[25px] font-extrabold text-white tracking-tight">
                {t('experience.soterguard.role')}
              </h3>

              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13.5px]">
                <a 
                  href={t('experience.soterguard.website')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-[#10b981] inline-flex items-center gap-1 transition-colors underline underline-offset-4 decoration-white/30"
                >
                  <span>{t('experience.soterguard.websiteDisplay')}</span>
                </a>
                <span className="text-white/30">·</span>
                <span className="text-white/80 font-medium">
                  {t('experience.soterguard.type')}
                </span>
                <span className="text-white/30">·</span>
                <span className="font-mono text-[12.5px] text-[#94a3b8]">
                  {t('experience.soterguard.period')}
                </span>
              </div>

              {/* Dedicated Stoam SaaS & Stoam Connect Block */}
              <div className="mt-5 rounded-2xl bg-[#040e08]/90 border border-[#10b981]/35 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-inner">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 min-w-0">
                  {/* Stoam Logo with high-contrast white background plate */}
                  <div className="px-3.5 py-1.5 rounded-xl bg-white shadow-md border border-white/25 shrink-0 flex items-center justify-center">
                    <img 
                      src="/images/assets/stoam.png" 
                      alt="Stoam SaaS Logo" 
                      className="h-7 sm:h-8 w-auto max-w-[130px] object-contain" 
                    />
                  </div>

                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-display font-extrabold text-[15px] sm:text-[16px] text-white">
                        Stoam SaaS · Stoam Connect
                      </span>
                      <span className="font-mono text-[10px] text-[#10b981] font-bold bg-[#10b981]/15 px-2 py-0.5 rounded border border-[#10b981]/30">
                        B2B & B2C CONNECT
                      </span>
                    </div>
                    <p className="text-[13px] sm:text-[13.5px] text-[#94a3b8] mt-1 leading-relaxed">
                      Participación activa en el ecosistema Stoam SaaS y en Stoam Connect, orquestando la sincronización de plataformas B2B y B2C mediante flujos complejos de automatización con <strong className="text-white">n8n</strong>, APIs REST y webhooks.
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-1.5 rounded-full bg-[#ea4b71]/15 border border-[#ea4b71]/35 px-3 py-1 font-mono text-[11px] font-bold text-[#ea4b71]">
                  <SiN8N className="size-3.5 text-[#ea4b71]" />
                  <span>n8n_WORKFLOWS</span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="mt-4 flex flex-col gap-2.5 text-[15px] leading-relaxed text-white/90">
                {(t('experience.soterguard.bullets', { returnObjects: true }) as string[]).map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 mt-1 shrink-0 text-[#10b981]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Stack with Brand Icons */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#030805] border border-white/15 px-2.5 py-1 font-mono text-[11.5px] font-bold text-white shadow-sm hover:border-[#10b981]/50 transition-colors">
                    <SiNodedotjs className="size-3.5 text-[#5fa04e]" />
                    <span>Node.js</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#030805] border border-white/15 px-2.5 py-1 font-mono text-[11.5px] font-bold text-white shadow-sm hover:border-[#10b981]/50 transition-colors">
                    <SiTypescript className="size-3.5 text-[#3178c6]" />
                    <span>TypeScript</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#030805] border border-white/15 px-2.5 py-1 font-mono text-[11.5px] font-bold text-white shadow-sm hover:border-[#ea4b71]/50 transition-colors">
                    <SiN8N className="size-3.5 text-[#ea4b71]" />
                    <span>n8n</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#030805] border border-white/15 px-2.5 py-1 font-mono text-[11.5px] font-bold text-white shadow-sm hover:border-[#10b981]/50 transition-colors">
                    <SiPostgresql className="size-3.5 text-[#4169e1]" />
                    <span>PostgreSQL</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#030805] border border-white/15 px-2.5 py-1 font-mono text-[11.5px] font-bold text-white shadow-sm hover:border-[#10b981]/50 transition-colors">
                    <SiPrisma className="size-3.5 text-white" />
                    <span>PrismaORM</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#030805] border border-white/15 px-2.5 py-1 font-mono text-[11.5px] font-bold text-white shadow-sm hover:border-[#10b981]/50 transition-colors">
                    <SiDocker className="size-3.5 text-[#2496ed]" />
                    <span>Docker</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#030805] border border-white/15 px-2.5 py-1 font-mono text-[11.5px] font-bold text-white shadow-sm hover:border-[#10b981]/50 transition-colors">
                    <SiPython className="size-3.5 text-[#3776ab]" />
                    <span>Python</span>
                  </span>
                </div>

                <a 
                  href={t('experience.soterguard.website')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-white hover:text-[#10b981] transition-colors shrink-0 self-start sm:self-auto"
                >
                  <span>{t('experience.visitWebsite')}</span>
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          </article>

          {/* 2. VIMTECH CARD */}
          <article id="vimtech" className="scroll-mt-28 group rounded-[28px] border border-white/20 bg-gradient-to-br from-[#101f16]/90 via-[#07140d]/85 to-[#030906]/95 p-6 lg:p-8 shadow-[0_16px_45px_rgba(0,0,0,0.6)] backdrop-blur-md hover:border-white hover:shadow-[0_20px_50px_rgba(255,255,255,0.12)] transition-all duration-300">
            
            {/* Top Bar: Company Logo on Light Plate + Status Stamp */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
              <a 
                href={t('experience.vimtech.website')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 group/logo focus:outline-none"
                title={t('experience.visitWebsite')}
              >
                {/* Authentic Logo on high-contrast dark badge for white letters */}
                <div className="inline-flex items-center px-4 py-2 rounded-xl bg-[#121814] backdrop-blur-md shadow-md border border-white/25 group-hover/logo:bg-[#18221b] group-hover/logo:border-white/50 group-hover/logo:scale-105 transition-all">
                  <img 
                    src="/images/assets/vimtech.png" 
                    alt="VimTech Logo" 
                    className="h-7 sm:h-8 w-auto max-w-[170px] object-contain object-left" 
                  />
                </div>
                <ExternalLink className="size-4 text-white/70 group-hover/logo:text-white group-hover/logo:translate-x-0.5 group-hover/logo:-translate-y-0.5 transition-all" />
              </a>

              {/* Status Stamp Badge in header row — never overlapping text */}
              <span className="self-start sm:self-auto inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3.5 py-1 font-mono text-[11px] font-extrabold tracking-[0.08em] text-white shadow-sm">
                <span>{t('experience.vimtech.stamp')}</span>
              </span>
            </div>

            {/* Role & Context Details */}
            <div className="mt-5">
              <h3 className="font-display text-[22px] sm:text-[25px] font-extrabold text-white tracking-tight">
                {t('experience.vimtech.role')}
              </h3>

              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13.5px]">
                <a 
                  href={t('experience.vimtech.website')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-white/80 inline-flex items-center gap-1 transition-colors underline underline-offset-4 decoration-white/30"
                >
                  <span>{t('experience.vimtech.websiteDisplay')}</span>
                </a>
                <span className="text-white/30">·</span>
                <span className="text-white/80 font-medium">
                  {t('experience.vimtech.type')}
                </span>
                <span className="text-white/30">·</span>
                <span className="font-mono text-[12.5px] text-[#94a3b8]">
                  {t('experience.vimtech.period')}
                </span>
              </div>

              {/* Bullets */}
              <ul className="mt-4 flex flex-col gap-2.5 text-[15px] leading-relaxed text-white/90">
                {(t('experience.vimtech.bullets', { returnObjects: true }) as string[]).map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 mt-1 shrink-0 text-white" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Stack with Brand Icons */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#030805] border border-white/15 px-2.5 py-1 font-mono text-[11.5px] font-bold text-white shadow-sm hover:border-white/40 transition-colors">
                    <SiApple className="size-3.5 text-white" />
                    <span>Apple Tech</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#030805] border border-white/15 px-2.5 py-1 font-mono text-[11.5px] font-bold text-white shadow-sm hover:border-white/40 transition-colors">
                    <SiDebian className="size-3.5 text-[#a81d33]" />
                    <span>Debian</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#030805] border border-white/15 px-2.5 py-1 font-mono text-[11.5px] font-bold text-white shadow-sm hover:border-white/40 transition-colors">
                    <SiUbuntu className="size-3.5 text-[#e95420]" />
                    <span>Ubuntu</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#030805] border border-white/15 px-2.5 py-1 font-mono text-[11.5px] font-bold text-white shadow-sm hover:border-white/40 transition-colors">
                    <span>Hardware Diagnostics & QA</span>
                  </span>
                </div>

                <a 
                  href={t('experience.vimtech.website')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-white hover:text-white/80 transition-colors shrink-0 self-start sm:self-auto"
                >
                  <span>{t('experience.visitWebsite')}</span>
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          </article>

          {/* 3. AJMA CARD */}
          <article id="ajma" className="scroll-mt-28 group rounded-[28px] border border-[#38bdf8]/30 bg-gradient-to-br from-[#0c1f2b]/85 via-[#06141d]/85 to-[#030906]/95 p-6 lg:p-8 shadow-[0_16px_45px_rgba(0,0,0,0.6)] backdrop-blur-md hover:border-[#38bdf8] hover:shadow-[0_20px_50px_rgba(56,189,248,0.2)] transition-all duration-300">
            
            {/* Top Bar: Company Logo on Light Plate + Status Stamp */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
              <a 
                href={t('experience.ajma.website')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 group/logo focus:outline-none"
                title={t('experience.visitWebsite')}
              >
                {/* Authentic AJMA Emblem on high-contrast frosted badge */}
                <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md shadow-sm border border-white/20 group-hover/logo:bg-white group-hover/logo:scale-105 transition-all">
                  <img 
                    src="/images/assets/ajma.png" 
                    alt="AJMA Logo" 
                    className="h-9 sm:h-10 w-auto object-contain" 
                  />
                  <span className="font-display font-extrabold text-[17px] text-[#030805]">
                    AJMA
                  </span>
                </div>
                <ExternalLink className="size-4 text-white/70 group-hover/logo:text-[#38bdf8] group-hover/logo:translate-x-0.5 group-hover/logo:-translate-y-0.5 transition-all" />
              </a>

              {/* Status Stamp Badge in header row — never overlapping text */}
              <span className="self-start sm:self-auto inline-flex items-center gap-1.5 rounded-full border border-[#38bdf8]/50 bg-[#38bdf8]/10 px-3.5 py-1 font-mono text-[11px] font-extrabold tracking-[0.08em] text-[#38bdf8] shadow-sm">
                <span>{t('experience.ajma.stamp')}</span>
              </span>
            </div>

            {/* Role & Context Details */}
            <div className="mt-5">
              <h3 className="font-display text-[22px] sm:text-[25px] font-extrabold text-white tracking-tight">
                {t('experience.ajma.role')}
              </h3>

              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13.5px]">
                <a 
                  href={t('experience.ajma.website')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold text-[#38bdf8] hover:text-white inline-flex items-center gap-1 transition-colors underline underline-offset-4 decoration-[#38bdf8]/30"
                >
                  <span>{t('experience.ajma.company')}</span>
                </a>
                <span className="text-white/30">·</span>
                <span className="font-mono text-[12.5px] text-[#94a3b8]">
                  {t('experience.ajma.period')}
                </span>
              </div>

              {/* Official Quote */}
              <p className="mt-3.5 text-[14px] text-white/80 italic bg-white/5 p-4 rounded-xl border border-white/5 leading-relaxed">
                {t('experience.ajma.quote')}
              </p>

              {/* Bullets */}
              <ul className="mt-4 flex flex-col gap-2.5 text-[15px] leading-relaxed text-white/90">
                {(t('experience.ajma.bullets', { returnObjects: true }) as string[]).map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 mt-1 shrink-0 text-[#38bdf8]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Stack with Brand Icons */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#030805] border border-white/15 px-2.5 py-1 font-mono text-[11.5px] font-bold text-white shadow-sm hover:border-[#38bdf8]/50 transition-colors">
                    <SiNginx className="size-3.5 text-[#009639]" />
                    <span>Nginx</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#030805] border border-white/15 px-2.5 py-1 font-mono text-[11.5px] font-bold text-white shadow-sm hover:border-[#38bdf8]/50 transition-colors">
                    <span>Web Architecture</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#030805] border border-white/15 px-2.5 py-1 font-mono text-[11.5px] font-bold text-white shadow-sm hover:border-[#38bdf8]/50 transition-colors">
                    <span>Live Video & Audio Mixing</span>
                  </span>
                </div>

                <a 
                  href={t('experience.ajma.website')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#38bdf8] hover:text-white transition-colors shrink-0 self-start sm:self-auto"
                >
                  <span>{t('experience.visitWebsite')}</span>
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
};
