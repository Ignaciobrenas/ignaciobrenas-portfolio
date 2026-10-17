import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  lang: 'es' | 'en';
  onToggleLang: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onToggleLang }) => {
  const { t } = useTranslation();

  return (
    <footer className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-6 px-5 pt-8 pb-14 border-t border-white/10 lg:px-16 text-[#94a3b8] w-full">
      
      {/* Left Column */}
      <div className="flex flex-col gap-1.5">
        <p className="text-[14px] font-semibold text-white/90">
          <span className="font-extrabold text-white">Ignacio Breñas Muñoz · 2026</span>
          <span className="text-[#94a3b8]"> — {t('footer.tagline')}</span>
        </p>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#10b981]">
            <ShieldCheck className="size-3.5" />
            <span>STATUS: ONLINE · KERNEL_ACTIVE · &lt;1ms</span>
          </span>
          <span className="text-[#64748b]">·</span>
          <p className="text-[13px] text-[#94a3b8]">
            {t('footer.rights')}
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Language Switcher */}
        <button
          onClick={onToggleLang}
          className="inline-flex h-9 items-center justify-center rounded-full border border-white/15 bg-[#06110a] px-3 font-mono text-[12px] font-bold text-white hover:border-white transition-all shadow-sm"
          title={t('nav.langToggle')}
        >
          <span className={lang === 'es' ? 'text-white font-extrabold' : 'text-[#94a3b8]'}>ES</span>
          <span className="mx-1 text-[#64748b]">/</span>
          <span className={lang === 'en' ? 'text-white font-extrabold' : 'text-[#94a3b8]'}>EN</span>
        </button>

        {/* Back to top */}
        <a
          href="#top"
          className="inline-flex h-9 items-center gap-1.5 rounded-full border border-white/20 bg-[#0a1a10] px-4 text-[13px] font-bold text-white hover:bg-white hover:text-[#030805] shadow-sm transition-all"
        >
          <span>{t('footer.backToTop')}</span>
          <ArrowUp className="size-3.5 text-current" />
        </a>
      </div>

    </footer>
  );
};
