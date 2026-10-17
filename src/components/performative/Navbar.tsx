import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, MessageSquare } from 'lucide-react';

interface NavbarProps {
  activeChapter: string;
  lang: 'es' | 'en';
  onToggleLang: () => void;
  onOpenChat?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeChapter, lang, onToggleLang, onOpenChat }) => {
  const { t } = useTranslation();
  const mobileNavRef = useRef<HTMLElement>(null);

  const chapters = [
    { id: 'experience', num: '01', labelKey: 'nav.experience' },
    { id: 'work', num: '02', labelKey: 'nav.work' },
    { id: 'stack', num: '03', labelKey: 'nav.stack' },
    { id: 'certifications', num: '04', labelKey: 'nav.certifications' },
    { id: 'about', num: '05', labelKey: 'nav.about' },
  ];

  // Auto-scroll mobile tabs when activeChapter changes
  useEffect(() => {
    if (!mobileNavRef.current) return;
    const activeTab = mobileNavRef.current.querySelector<HTMLElement>(`[data-tab="${activeChapter}"]`);
    if (activeTab) {
      mobileNavRef.current.scrollTo({
        left: activeTab.offsetLeft - 24,
        behavior: 'smooth',
      });
    }
  }, [activeChapter]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#030805]/92 border-b border-white/10 backdrop-blur-md">
      <div className="mx-auto grid h-14 max-w-[1440px] grid-cols-[1fr_auto] items-center gap-2 px-4 lg:h-[72px] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-4 lg:px-12 xl:gap-6">
        
        {/* Brand / Logo (using user's logo 1.png with animated glow & tilt) */}
        <a 
          href="#top" 
          className="inline-flex items-center gap-3 justify-self-start group"
          title="Ir al inicio / Go to top"
        >
          <div className="relative size-8 lg:size-10 rounded-[10px] lg:rounded-xl overflow-hidden border-2 border-white/60 bg-[#0c2316] shadow-[0_0_15px_rgba(255,255,255,0.15)] group-hover:scale-105 group-hover:rotate-3 group-hover:border-white group-hover:shadow-[0_0_22px_rgba(255,255,255,0.35)] transition-all duration-300 flex items-center justify-center p-0.5">
            <img 
              src="/images/1.png" 
              alt="Ignacio Breñas Logo" 
              className="size-full object-contain filter drop-shadow group-hover:brightness-125 transition-all" 
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-[16px] font-extrabold tracking-tight text-white group-hover:text-[#10b981] transition-colors lg:text-[18px]">
              Ignacio Breñas
            </span>
            <span className="font-mono text-[10px] text-[#94a3b8] tracking-widest uppercase hidden sm:block">
              {t('nav.brandSubtitle')}
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Tabs */}
        <nav aria-label="Capítulos" className="hidden items-center gap-1.5 lg:flex">
          {chapters.map((ch) => {
            const isActive = activeChapter === ch.id;
            return (
              <a
                key={ch.id}
                href={`#${ch.id}`}
                data-tab={ch.id}
                aria-current={isActive ? 'true' : undefined}
                className="chapter-tab group"
              >
                <span className="tab-num group-hover:scale-110 transition-transform">{ch.num}</span>
                <span>{t(ch.labelKey)}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center justify-self-end gap-2 xl:gap-3">
          {/* 32-Bit Chat Trigger Button (Desktop only; mobile has it in tab bar & docked companion) */}
          {onOpenChat && (
            <div className="hidden lg:block">
              <button
                type="button"
                onClick={onOpenChat}
                className="arcade-btn-32bit h-9 px-3.5 text-[11px] whitespace-nowrap"
                title="Abrir chat interactivo 32-bit con Ignacio"
              >
                <MessageSquare className="size-3.5" />
                <span>{lang === 'es' ? 'Hablar con Ignacio (32-Bit)' : 'Chat with Ignacio (32-Bit)'}</span>
              </button>
            </div>
          )}

          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="inline-flex h-9 items-center justify-center rounded-full border border-white/20 bg-[#06110a] px-3 font-mono text-[12px] font-bold text-white hover:border-white transition-all hover:scale-105 active:scale-95 shadow-sm"
            title={t('nav.langToggle')}
          >
            <span className={lang === 'es' ? 'text-white font-extrabold underline underline-offset-4 decoration-[#10b981]' : 'text-[#94a3b8]'}>ES</span>
            <span className="mx-1 text-[#64748b]">/</span>
            <span className={lang === 'en' ? 'text-white font-extrabold underline underline-offset-4 decoration-[#10b981]' : 'text-[#94a3b8]'}>EN</span>
          </button>

          {/* Primary Say Hi / Contact CTA */}
          <a
            href="#contact"
            className="group inline-flex h-9 lg:h-10 items-center gap-2 rounded-full bg-white px-4 text-[13px] lg:text-[14px] font-extrabold text-[#030805] hover:bg-[#e2e8f0] hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)] transition-all active:scale-95"
          >
            <Mail className="size-3.5 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
            <span>{t('nav.contactCTA')}</span>
          </a>
        </div>
      </div>

      {/* Mobile Horizontal Scrollable Tab Bar */}
      <nav 
        ref={mobileNavRef}
        aria-label="Capítulos móvil" 
        className="flex h-11 items-center gap-1.5 overflow-x-auto px-3 border-t border-white/10 [scrollbar-width:none] lg:hidden bg-[#030805]/95"
      >
        {onOpenChat && (
          <button
            type="button"
            onClick={onOpenChat}
            className="inline-flex h-[28px] items-center gap-1.5 rounded-full bg-[#10b981] px-2.5 font-mono text-[10.5px] font-black text-[#030805] shrink-0 shadow-sm"
          >
            <MessageSquare className="size-3" />
            <span>Chat 32-Bit</span>
          </button>
        )}
        {chapters.map((ch) => {
          const isActive = activeChapter === ch.id;
          return (
            <a
              key={ch.id}
              href={`#${ch.id}`}
              data-tab={ch.id}
              aria-current={isActive ? 'true' : undefined}
              className="chapter-tab text-[12px] h-[32px] px-3"
            >
              <span className="tab-num">{ch.num}</span>
              <span>{t(ch.labelKey)}</span>
            </a>
          );
        })}
      </nav>
    </header>
  );
};
