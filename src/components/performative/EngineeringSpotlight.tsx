import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, ShieldCheck, CheckCircle2, GitBranch, Star } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export const EngineeringSpotlight: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative my-8 w-full">
      <div className="rounded-[28px] border-2 border-white/20 bg-gradient-to-b from-[#0a1f13] via-[#05110a] to-[#030805] p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-extrabold tracking-[0.12em] text-[#10b981] uppercase bg-[#10b981]/10 px-3 py-1 rounded-full border border-[#10b981]/30">
              <span className="size-2 rounded-full bg-[#10b981] animate-ping" />
              <span>{t('spotlight.badge')}</span>
            </span>
            <h3 className="mt-2.5 font-display text-[26px] sm:text-[30px] font-extrabold tracking-tight text-white">
              {t('spotlight.title')}
            </h3>
          </div>
          <p className="max-w-[420px] text-[14.5px] leading-relaxed text-[#94a3b8]">
            {t('spotlight.subtitle')}
          </p>
        </div>

        {/* 3 Prominent Cards Grid */}
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          
          {/* 1. GITHUB HERO CARD */}
          <a
            href="https://github.com/Ignaciobrenas"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between rounded-[22px] border border-white/10 bg-[#06140c]/90 p-5 lg:p-6 shadow-md hover:border-[#10b981] hover:shadow-[0_12px_35px_rgba(16,185,129,0.2)] hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="size-13 rounded-2xl bg-[#0e2a1a] border border-[#10b981]/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-inner">
                  <SiGithub className="size-7 text-[#10b981] group-hover:text-white transition-colors" />
                </div>
                <span className="font-mono text-[11px] font-extrabold text-[#10b981] bg-[#10b981]/10 px-2.5 py-1 rounded-md border border-[#10b981]/30">
                  {t('spotlight.githubBadge')}
                </span>
              </div>

              <h4 className="mt-4 font-display text-[22px] font-extrabold text-white group-hover:text-[#10b981] transition-colors flex items-center gap-2">
                <span>{t('spotlight.githubTitle')}</span>
                <ArrowUpRight className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </h4>
              <p className="font-mono text-[12.5px] font-bold text-white/80 mt-0.5">
                {t('spotlight.githubHandle')}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-[#94a3b8]">
                {t('spotlight.githubDesc')}
              </p>

              {/* Repos spotlight tags */}
              <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                <span className="rounded-md bg-[#10b981]/15 px-2.5 py-1 font-mono text-[11px] font-bold text-[#10b981] border border-[#10b981]/30">
                  DAMA-CRM
                </span>
                <span className="rounded-md bg-[#030805] px-2.5 py-1 font-mono text-[11px] font-bold text-white border border-white/10">
                  canva-connector-mcp
                </span>
                <span className="rounded-md bg-[#030805] px-2.5 py-1 font-mono text-[11px] font-bold text-white border border-white/10">
                  Argus-Fraud-Radar
                </span>
              </div>
            </div>

            <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#10b981] group-hover:translate-x-1 transition-transform">
              <span>{t('spotlight.viewProfile')}</span>
            </div>
          </a>

          {/* 2. LINKEDIN HERO CARD */}
          <a
            href="https://www.linkedin.com/in/ignacio-brenas-mu%C3%B1oz-65a88a297/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between rounded-[22px] border border-white/10 bg-[#04121a]/90 p-5 lg:p-6 shadow-md hover:border-[#0077b5] hover:shadow-[0_12px_35px_rgba(0,119,181,0.25)] hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="size-13 rounded-2xl bg-[#082233] border border-[#0077b5]/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:-rotate-6 transition-transform shadow-inner">
                  <FaLinkedin className="size-7 text-[#0077b5] group-hover:text-white transition-colors" />
                </div>
                <span className="font-mono text-[11px] font-extrabold text-[#38bdf8] bg-[#0077b5]/15 px-2.5 py-1 rounded-md border border-[#0077b5]/30">
                  {t('spotlight.linkedinBadge')}
                </span>
              </div>

              <h4 className="mt-4 font-display text-[22px] font-extrabold text-white group-hover:text-[#38bdf8] transition-colors flex items-center gap-2">
                <span>{t('spotlight.linkedinTitle')}</span>
                <ArrowUpRight className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </h4>
              <p className="font-mono text-[12.5px] font-bold text-[#38bdf8] mt-0.5">
                {t('spotlight.linkedinHandle')}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-[#94a3b8]">
                {t('spotlight.linkedinDesc')}
              </p>

              {/* Highlights */}
              <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                <span className="rounded-md bg-[#030805] px-2.5 py-1 font-mono text-[11px] font-bold text-white border border-white/10">
                  Barcelona / Remoto
                </span>
                <span className="rounded-md bg-[#030805] px-2.5 py-1 font-mono text-[11px] font-bold text-[#38bdf8] border border-white/10">
                  Open to Work
                </span>
              </div>
            </div>

            <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#38bdf8] group-hover:translate-x-1 transition-transform">
              <span>{t('spotlight.viewProfile')}</span>
            </div>
          </a>

          {/* 3. CREDLY HERO CARD */}
          <a
            href="https://www.credly.com/users/ignacio-brenas-munoz"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between rounded-[22px] border border-white/10 bg-[#0d2a1b]/90 p-5 lg:p-6 shadow-md hover:border-white hover:shadow-[0_12px_35px_rgba(255,255,255,0.15)] hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="size-13 rounded-2xl bg-white/10 border border-white/30 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-inner">
                  <ShieldCheck className="size-7 text-[#10b981] group-hover:text-white transition-colors" />
                </div>
                <span className="font-mono text-[11px] font-extrabold text-white bg-white/10 px-2.5 py-1 rounded-md border border-white/20">
                  {t('spotlight.credlyBadge')}
                </span>
              </div>

              <h4 className="mt-4 font-display text-[22px] font-extrabold text-white group-hover:text-[#10b981] transition-colors flex items-center gap-2">
                <span>{t('spotlight.credlyTitle')}</span>
                <ArrowUpRight className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </h4>
              <p className="font-mono text-[12.5px] font-bold text-white/80 mt-0.5">
                {t('spotlight.credlyHandle')}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-[#94a3b8]">
                {t('spotlight.credlyDesc')}
              </p>

              {/* 4 Badges mini preview thumbnails */}
              <div className="mt-4 flex items-center gap-2 pt-3 border-t border-white/5">
                <img 
                  src="/images/badges/cisco-ethical-hacker.png" 
                  alt="Cisco Ethical Hacker" 
                  className="size-8 object-contain filter drop-shadow group-hover:scale-110 transition-transform" 
                />
                <img 
                  src="/images/badges/ibm-agile-explorer.png" 
                  alt="IBM Agile Explorer" 
                  className="size-8 object-contain filter drop-shadow group-hover:scale-110 transition-transform" 
                />
                <img 
                  src="/images/badges/cisco-cybersecurity.png" 
                  alt="Cisco Cybersecurity" 
                  className="size-8 object-contain filter drop-shadow group-hover:scale-110 transition-transform" 
                />
                <img 
                  src="/images/badges/cisco-data-science.png" 
                  alt="Cisco Data Science" 
                  className="size-8 object-contain filter drop-shadow group-hover:scale-110 transition-transform" 
                />
              </div>
            </div>

            <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-white group-hover:text-[#10b981] group-hover:translate-x-1 transition-all">
              <span>{t('spotlight.viewProfile')}</span>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};
