import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

interface VerifiedBadge {
  name: string;
  short: string;
  src: string;
}

const VERIFIED_BADGES: VerifiedBadge[] = [
  {
    name: 'Cisco Ethical Hacker',
    short: 'Hacker',
    src: '/images/badges/cisco-ethical-hacker.png',
  },
  {
    name: 'IBM Agile Explorer',
    short: 'Agile',
    src: '/images/badges/ibm-agile-explorer.png',
  },
  {
    name: 'Cisco Cybersecurity',
    short: 'Cyber',
    src: '/images/badges/cisco-cybersecurity.png',
  },
  {
    name: 'Cisco Data Science',
    short: 'Data',
    src: '/images/badges/cisco-data-science.png',
  },
];

export const EngineeringSpotlight: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="spotlight" className="relative my-6 lg:my-8 w-full" aria-label={t('spotlight.ecosystemBadge')}>
      <div className="rounded-3xl p-5 sm:p-7 lg:p-8 bg-gradient-to-br from-[#06140d]/90 via-[#030805]/95 to-[#051109]/90 backdrop-blur-2xl border border-white/15 shadow-[0_16px_50px_rgba(0,0,0,0.5)]">
        
        {/* Header with Title & Subtitle in Horizontal Executive Format */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981] shrink-0" />
            <h3 className="text-[13px] sm:text-[14px] font-extrabold text-white tracking-wide uppercase font-mono">
              {t('spotlight.ecosystemBadge')}
            </h3>
            <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
              HUB 32-BIT
            </span>
          </div>

          <p className="text-[12.5px] sm:text-[13px] text-[#94a3b8] font-medium leading-relaxed max-w-[520px]">
            {t('spotlight.subtitle')}
          </p>
        </div>

        {/* 3 Executive Command Cards in Guaranteed Horizontal Flow (Horizontal Swipe on Mobile, 3-Col Deck on Desktop) */}
        <div className="mt-6 flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 pb-2 lg:grid lg:grid-cols-3 lg:gap-3 xl:gap-4 lg:overflow-visible [scrollbar-width:none]">
          
          {/* ========================================================
              1. GITHUB CARD
          ======================================================== */}
          <a
            href="https://github.com/Ignaciobrenas"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between rounded-2xl border border-white/15 bg-[#020804]/90 hover:bg-[#07190f] p-4 sm:p-5 xl:p-6 shadow-xl hover:border-emerald-500/60 hover:shadow-[0_12px_36px_rgba(16,185,129,0.2)] hover:-translate-y-1 transition-all duration-300 min-w-[280px] sm:min-w-[300px] lg:min-w-0 w-full snap-center"
          >
            <div>
              {/* Card Top Horizontal Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[10.5px] xl:text-[11px] font-mono">
                <span className="text-emerald-400 font-extrabold uppercase tracking-wider bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-500/30 text-[9.5px] xl:text-[10px]">
                  {t('spotlight.githubBadge')}
                </span>
                <span className="text-white/70 font-semibold font-mono text-[10px] xl:text-[11px] truncate">
                  @Ignaciobrenas
                </span>
              </div>

              {/* Identity Row */}
              <div className="mt-4 flex items-center gap-3">
                <div className="size-11 xl:size-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:text-white group-hover:bg-emerald-500/30 group-hover:scale-105 transition-all shadow-sm shrink-0">
                  <SiGithub className="size-6 transition-colors" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display text-[17px] xl:text-[19px] font-extrabold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1.5 leading-tight truncate">
                    <span>{t('spotlight.githubTitle')}</span>
                    <ArrowUpRight className="size-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                  </h4>
                  <p className="text-[11px] xl:text-[12px] font-mono font-bold text-emerald-400/90 truncate">
                    {t('spotlight.githubHandle')}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 text-[12px] xl:text-[13px] leading-relaxed text-[#94a3b8]">
                {t('spotlight.githubDesc')}
              </p>

              {/* Horizontal Repositories Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 xl:px-2.5 xl:py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[9.5px] xl:text-[10.5px] font-semibold text-emerald-300 shadow-sm">
                  <span>DAMA-CRM</span>
                  <span className="text-white/40 font-mono text-[9px] xl:text-[9.5px]">TS · 116 tests</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 xl:px-2.5 xl:py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[9.5px] xl:text-[10.5px] font-medium text-white/90">
                  <span>canva-connector</span>
                  <span className="text-white/40 font-mono text-[9px] xl:text-[9.5px]">Zod · PKCE</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 xl:px-2.5 xl:py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[9.5px] xl:text-[10.5px] font-medium text-white/90">
                  <span>Argus-Fraud</span>
                  <span className="text-white/40 font-mono text-[9px] xl:text-[9.5px]">PySpark · ML</span>
                </div>
              </div>
            </div>

            {/* Bottom Horizontal CTA */}
            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11.5px] xl:text-[12px] font-extrabold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                {t('spotlight.exploreRepos')}
              </span>
              <span className="size-6.5 xl:size-7 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-[#030805] group-hover:translate-x-1 transition-all">
                <ArrowUpRight className="size-3.5 xl:size-4" />
              </span>
            </div>
          </a>

          {/* ========================================================
              2. LINKEDIN DEV IDENTITY CARD
          ======================================================== */}
          <a
            href="https://www.linkedin.com/in/ignacio-bre%C3%B1as-mu%C3%B1oz-02a90b218/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between rounded-2xl border border-white/15 bg-[#020804]/90 hover:bg-[#04111a] p-4 sm:p-5 xl:p-6 shadow-xl hover:border-sky-500/60 hover:shadow-[0_12px_36px_rgba(14,165,233,0.2)] hover:-translate-y-1 transition-all duration-300 min-w-[280px] sm:min-w-[300px] lg:min-w-0 w-full snap-center"
          >
            <div>
              {/* Card Top Horizontal Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[10.5px] xl:text-[11px] font-mono">
                <span className="text-sky-400 font-extrabold uppercase tracking-wider bg-sky-500/15 px-2 py-0.5 rounded-full border border-sky-500/30 text-[9.5px] xl:text-[10px]">
                  {t('spotlight.linkedinBadge')}
                </span>
                <span className="text-white/70 font-semibold text-[10px] xl:text-[11px] truncate">
                  {t('spotlight.linkedinCity')}
                </span>
              </div>

              {/* Identity Row */}
              <div className="mt-4 flex items-center gap-3">
                <div className="size-11 xl:size-12 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:text-white group-hover:bg-sky-500/30 group-hover:scale-105 transition-all shadow-sm shrink-0">
                  <FaLinkedin className="size-6 transition-colors" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display text-[17px] xl:text-[19px] font-extrabold text-white group-hover:text-sky-400 transition-colors flex items-center gap-1.5 leading-tight truncate">
                    <span>{t('spotlight.linkedinTitle')}</span>
                    <ArrowUpRight className="size-3.5 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                  </h4>
                  <p className="text-[11px] xl:text-[12px] font-mono font-bold text-sky-300 truncate">
                    Ignacio Breñas Muñoz
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 text-[12px] xl:text-[13px] leading-relaxed text-[#94a3b8]">
                {t('spotlight.linkedinDesc')}
              </p>

              {/* Horizontal Status Specification Chips */}
              <div className="mt-4 flex flex-col gap-1.5 pt-3 border-t border-white/10">
                <div className="w-full flex items-center justify-between gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[10px] xl:text-[11px] font-semibold text-emerald-300">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-emerald-400 font-bold">Open to Work</span>
                  </div>
                  <span className="text-white/80 font-mono text-[9.5px] xl:text-[10px]">{t('spotlight.availabilityShort')}</span>
                </div>
                <div className="w-full flex items-center justify-between gap-1 px-2.5 py-1 rounded-lg bg-sky-500/10 border border-sky-500/30 text-[10px] xl:text-[11px] font-medium text-white/90">
                  <span className="text-white/60 font-mono text-[9px] xl:text-[10px] shrink-0">{t('spotlight.specialtyLabel')}</span>
                  <span className="text-sky-300 font-bold truncate text-[10px] xl:text-[11px]">{t('spotlight.specialtyValueShort')}</span>
                </div>
              </div>
            </div>

            {/* Bottom Horizontal CTA */}
            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11.5px] xl:text-[12px] font-extrabold text-sky-400 group-hover:text-sky-300 transition-colors">
                {t('spotlight.connectLinkedin')}
              </span>
              <span className="size-6.5 xl:size-7 rounded-full bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:bg-sky-400 group-hover:text-[#030805] group-hover:translate-x-1 transition-all">
                <ArrowUpRight className="size-3.5 xl:size-4" />
              </span>
            </div>
          </a>

          {/* ========================================================
              3. CREDLY CRYPTOGRAPHIC VERIFICATION CARD
          ======================================================== */}
          <a
            href="https://www.credly.com/users/ignacio-brenas-munoz"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between rounded-2xl border border-white/15 bg-[#020804]/90 hover:bg-[#140f04] p-4 sm:p-5 xl:p-6 shadow-xl hover:border-amber-400/60 hover:shadow-[0_12px_36px_rgba(251,191,36,0.2)] hover:-translate-y-1 transition-all duration-300 min-w-[280px] sm:min-w-[300px] lg:min-w-0 w-full snap-center"
          >
            <div>
              {/* Card Top Horizontal Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[10.5px] xl:text-[11px] font-mono">
                <span className="text-amber-400 font-extrabold uppercase tracking-wider bg-amber-400/15 px-2 py-0.5 rounded-full border border-amber-400/30 flex items-center gap-1.5 text-[9.5px] xl:text-[10px]">
                  <CheckCircle2 className="size-3 text-amber-400" />
                  <span>{t('spotlight.credlyBadge')}</span>
                </span>
                <span className="text-white/80 font-bold bg-white/10 px-2 py-0.5 rounded-full text-[9.5px] xl:text-[10px]">
                  {t('spotlight.credlyBadgesCount')}
                </span>
              </div>

              {/* Identity Row */}
              <div className="mt-4 flex items-center gap-3">
                <div className="size-11 xl:size-12 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:text-white group-hover:bg-amber-400/30 group-hover:scale-105 transition-all shadow-sm shrink-0">
                  <ShieldCheck className="size-6 transition-colors" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display text-[17px] xl:text-[19px] font-extrabold text-white group-hover:text-amber-400 transition-colors flex items-center gap-1.5 leading-tight truncate">
                    <span>{t('spotlight.credlyTitle')}</span>
                    <ArrowUpRight className="size-3.5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                  </h4>
                  <p className="text-[10.5px] xl:text-[11.5px] font-mono font-bold text-amber-300 truncate">
                    ignacio-brenas-munoz
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 text-[12px] xl:text-[13px] leading-relaxed text-[#94a3b8]">
                {t('spotlight.credlyDesc')}
              </p>

              {/* Verified Badges Honor Shelf (4 Badges in Horizontal Gallery) */}
              <div className="mt-4 flex items-center justify-between gap-1.5 pt-3 border-t border-white/10">
                {VERIFIED_BADGES.map((badge) => (
                  <div 
                    key={badge.name} 
                    className="flex flex-col items-center gap-1 p-1 rounded-lg bg-white/[0.04] border border-white/10 group-hover:border-amber-400/30 group-hover:bg-amber-400/[0.06] transition-all flex-1 min-w-0"
                    title={badge.name}
                  >
                    <img 
                      src={badge.src} 
                      alt={badge.name} 
                      className="size-6 xl:size-7 object-contain filter drop-shadow group-hover:scale-110 transition-transform shrink-0" 
                    />
                    <span className="text-[7.5px] xl:text-[8px] font-mono font-bold text-white/90 truncate w-full text-center tracking-tight">
                      {badge.short}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Horizontal CTA */}
            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11.5px] xl:text-[12px] font-extrabold text-amber-400 group-hover:text-amber-300 transition-colors">
                {t('spotlight.verifyCredentials')}
              </span>
              <span className="size-6.5 xl:size-7 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-[#030805] group-hover:translate-x-1 transition-all">
                <ArrowUpRight className="size-3.5 xl:size-4" />
              </span>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};
