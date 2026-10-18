import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowDown, FileText, Send, Sparkles, Terminal } from 'lucide-react';

export const CoverChapter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="top" data-chapter="cover" className="relative pt-6 lg:pt-14 pb-4">
      <div className="flex flex-col items-start min-w-0 w-full">
        
        {/* Brand Logo floating freely without enclosing box */}
        <div className="mb-5 flex items-center gap-4 sm:gap-5">
          <div className="relative group shrink-0">
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-2xl opacity-70 group-hover:opacity-100 group-hover:blur-3xl transition duration-500 pointer-events-none" />
            <img 
              src="/images/1.png" 
              alt="Ignacio Breñas" 
              className="relative size-18 sm:size-22 lg:size-24 object-contain filter drop-shadow-[0_10px_28px_rgba(16,185,129,0.5)] group-hover:scale-105 group-hover:drop-shadow-[0_14px_36px_rgba(16,185,129,0.75)] transition-all duration-300"
            />
          </div>

          <div className="flex flex-col">
            <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-emerald-400">
              <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{t('cover.statusActive')}</span>
            </span>
            <span className="text-[13px] sm:text-[14px] text-white/90 font-medium tracking-wide mt-0.5">
              {t('cover.statusSubtitle')}
            </span>
          </div>
        </div>

        {/* Handwritten Accent Greeting */}
        <p className="hand ml-1 -rotate-4 text-[32px] text-white lg:text-[40px] drop-shadow-sm select-none">
          {t('cover.handGreeting')}
        </p>

        {/* Hero Name Title */}
        <h1 className="mt-1 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] text-white leading-[0.95]">
          {t('cover.name')}
        </h1>

        {/* Decorative Pure White Wave SVG */}
        <svg 
          width="240" 
          height="20" 
          viewBox="0 0 186 18" 
          fill="none" 
          stroke="#ffffff" 
          className="mt-2.5 w-[160px] lg:w-[230px]" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          aria-hidden="true"
        >
          <path d="M3 10 C 18 2, 30 16, 46 9 S 74 2, 90 10 S 120 16, 136 9 S 166 3, 183 9" />
        </svg>

        {/* Lead Mission / Performative Statement */}
        <p className="mt-5 max-w-[560px] text-[17px] lg:text-[19px] leading-[1.6] text-[#94a3b8]">
          <strong className="text-white font-bold">{t('cover.role')}</strong> {t('cover.roleLocation')}. {t('cover.bio')}
        </p>

        {/* Action Buttons */}
        <div className="mt-7 flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <a
            href="#experience"
            className="group inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full bg-white px-6 text-[15px] font-extrabold text-[#030805] shadow-[0_4px_20px_rgba(255,255,255,0.3)] hover:bg-[#e2e8f0] active:scale-95 transition-all w-full sm:w-auto"
          >
            <span>{t('cover.openPortfolio')}</span>
            <ArrowDown className="size-4 group-hover:translate-y-1 transition-transform animate-bounce text-[#030805]" />
          </a>

          <a
            href="#contact"
            className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/20 bg-[#0a1a10] px-6 text-[15px] font-bold text-white hover:bg-[#163623] hover:border-white active:scale-95 transition-all w-full sm:w-auto shadow-sm"
          >
            <Send className="size-4 text-white group-hover:scale-110 group-hover:translate-x-0.5 transition-transform" />
            <span>{t('cover.contact')}</span>
          </a>

          <a
            href="/CV_IgnacioBreñasMuñoz.pdf"
            download="CV_IgnacioBreñasMuñoz.pdf"
            className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/15 bg-[#06110a] px-5 text-[14px] font-mono font-semibold text-[#94a3b8] hover:text-white hover:border-[#38bdf8]/60 transition-all w-full sm:w-auto"
          >
            <FileText className="size-4 text-[#38bdf8] group-hover:scale-110 group-hover:rotate-6 transition-transform" />
            <span>{t('cover.cv')}</span>
          </a>
        </div>

        {/* Quick Identity Specification Chips */}
        <ul className="mt-7 flex flex-wrap gap-2.5">
          <li className="group inline-flex h-8 items-center gap-2 rounded-lg border border-[#10b981]/40 bg-[#020804] px-3 font-mono text-[12px] font-bold text-white shadow-sm hover:border-[#10b981] transition-colors">
            <span className="size-1.5 rounded-full bg-[#10b981]" aria-hidden="true" />
            <span>{t('cover.badgeSoterguard')}</span>
          </li>
          <li className="group inline-flex h-8 items-center gap-2 rounded-lg border border-white/20 bg-[#020603] px-3 font-mono text-[12px] font-bold text-white shadow-sm hover:border-white transition-colors">
            <Terminal className="size-3.5 text-white" />
            <span>{t('cover.badgeDaw')}</span>
          </li>
          <li className="inline-flex h-8 items-center gap-2 rounded-lg border border-white/15 bg-[#020603] px-3 font-mono text-[12px] font-bold text-[#94a3b8]">
            <span>{t('cover.badgeLangs')}</span>
          </li>
          <li className="group inline-flex h-8 items-center gap-2 rounded-lg border border-[#38bdf8]/40 bg-[#01060a] px-3 font-mono text-[12px] font-bold text-[#38bdf8] hover:border-[#38bdf8] transition-colors">
            <Sparkles className="size-3.5" />
            <span>{t('cover.badgeUnita')}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
