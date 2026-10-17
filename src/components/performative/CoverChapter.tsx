import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowDown, FileText, Send, Sparkles, Terminal, MessageSquare } from 'lucide-react';

interface CoverChapterProps {
  onOpenChat?: () => void;
}

export const CoverChapter: React.FC<CoverChapterProps> = ({ onOpenChat }) => {
  const { t } = useTranslation();

  return (
    <section id="top" data-chapter="cover" className="relative pt-6 lg:pt-14 pb-4">
      <div className="flex flex-col items-start min-w-0 w-full">
        
        {/* Brand Avatar with Animated Holographic Ring (using logo 1.png) */}
        <div className="mb-4 flex items-center gap-3">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-white via-[#10b981] to-[#38bdf8] opacity-75 blur-sm group-hover:opacity-100 group-hover:blur transition duration-500 animate-pulse" />
            <div className="relative size-14 sm:size-16 rounded-xl overflow-hidden border-2 border-white/80 bg-[#0c2316] p-1 shadow-lg">
              <img 
                src="/images/1.png" 
                alt="Ignacio Breñas" 
                className="size-full object-contain filter drop-shadow group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#10b981]">
              <span className="size-2 rounded-full bg-[#10b981] animate-ping" />
              <span>{t('cover.statusActive')}</span>
            </span>
            <span className="font-mono text-[11.5px] text-white/90 font-semibold tracking-wide">
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
          {onOpenChat && (
            <button
              type="button"
              onClick={onOpenChat}
              className="arcade-btn-32bit min-h-[50px] px-6 text-[14px] w-full sm:w-auto"
            >
              <MessageSquare className="size-4" />
              <span>{t('cover.chatButton', { defaultValue: 'Hablar con Ignacio (32-Bit)' })}</span>
            </button>
          )}

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
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/15 bg-[#06110a] px-5 text-[14px] font-mono font-semibold text-[#94a3b8] hover:text-white hover:border-[#38bdf8]/60 transition-all w-full sm:w-auto"
          >
            <FileText className="size-4 text-[#38bdf8] group-hover:scale-110 group-hover:rotate-6 transition-transform" />
            <span>{t('cover.cv')}</span>
          </a>
        </div>

        {/* Quick Identity Badges */}
        <ul className="mt-7 flex flex-wrap gap-2.5">
          <li className="group inline-flex h-9 items-center gap-2 rounded-full border border-[#10b981]/40 bg-[#06180e] px-3.5 text-[13.5px] font-semibold text-white shadow-sm hover:border-[#10b981] transition-colors">
            <span className="size-2 rounded-full bg-[#10b981] group-hover:scale-125 transition-transform" aria-hidden="true" />
            <span>{t('cover.badgeSoterguard')}</span>
          </li>
          <li className="group inline-flex h-9 items-center gap-2 rounded-full border border-white/20 bg-[#0a1a10] px-3.5 text-[13.5px] font-semibold text-white shadow-sm hover:border-white transition-colors">
            <Terminal className="size-3.5 text-white group-hover:rotate-12 transition-transform" />
            <span>{t('cover.badgeDaw')}</span>
          </li>
          <li className="inline-flex h-9 items-center gap-2 rounded-full border border-white/10 bg-[#06110a] px-3.5 text-[13.5px] font-semibold text-[#94a3b8]">
            <span>{t('cover.badgeLangs')}</span>
          </li>
          <li className="group inline-flex h-9 items-center gap-2 rounded-full border border-[#38bdf8]/40 bg-[#061822] px-3.5 text-[13.5px] font-semibold text-[#38bdf8] hover:border-[#38bdf8] transition-colors">
            <Sparkles className="size-3.5 group-hover:scale-125 transition-transform" />
            <span>{t('cover.badgeUnita')}</span>
          </li>
        </ul>

        {/* Scroll Instruction */}
        <p className="mt-10 hidden items-center gap-3 text-[14px] font-bold text-[#94a3b8] lg:flex">
          <span className="inline-flex h-9 w-[24px] justify-center rounded-full border-2 border-dashed border-white/30 pt-[6px]">
            <span className="h-2 w-1 rounded-sm bg-white animate-bounce" />
          </span>
          <span>{t('cover.scrollCue')}</span>
        </p>

      </div>
    </section>
  );
};
