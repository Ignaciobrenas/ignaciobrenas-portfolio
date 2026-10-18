import React, { useState, useEffect } from 'react';
import i18n from '../../i18n';
import { Navbar } from './Navbar';
import { CoverChapter } from './CoverChapter';
import { EngineeringSpotlight } from './EngineeringSpotlight';
import { ExperienceChapter } from './ExperienceChapter';
import { WorkChapter } from './WorkChapter';
import { StackChapter } from './StackChapter';
import { CertificationsChapter } from './CertificationsChapter';
import { AboutChapter } from './AboutChapter';
import { ContactChapter } from './ContactChapter';
import { Footer } from './Footer';
import { RetroCharacterStage } from './RetroCharacterStage';
import { IgnacioRetroChatModal } from './IgnacioRetroChatModal';

export const PerformativePortfolio: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<string>('cover');
  const [dialogueTarget, setDialogueTarget] = useState<string>('cover');
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const handleToggleLang = () => {
    const nextLang = lang === 'es' ? 'en' : 'es';
    setLang(nextLang);
    i18n.changeLanguage(nextLang);
  };

  // Ensure i18n starts with current state
  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  // Granular scrollspy to track top-level chapter for Navbar and specific entity for interactive dialogue
  useEffect(() => {
    const SCROLL_TARGETS: { id: string; target: string; chapter: string }[] = [
      { id: 'top', target: 'cover', chapter: 'cover' },
      { id: 'spotlight', target: 'github', chapter: 'cover' },
      { id: 'experience', target: 'experience', chapter: 'experience' },
      { id: 'soteguard', target: 'soteguard', chapter: 'experience' },
      { id: 'vimtech', target: 'vimtech', chapter: 'experience' },
      { id: 'ajma', target: 'ajma', chapter: 'experience' },
      { id: 'work', target: 'work', chapter: 'work' },
      { id: 'dama-crm', target: 'dama-crm', chapter: 'work' },
      { id: 'argus-fraud', target: 'argus-fraud', chapter: 'work' },
      { id: 'canva-mcp', target: 'canva-mcp', chapter: 'work' },
      { id: 'skeleton-meme', target: 'skeleton-meme', chapter: 'work' },
      { id: 'run-and-eat', target: 'run-and-eat', chapter: 'work' },
      { id: 'lugia-terminal', target: 'lugia-terminal', chapter: 'work' },
      { id: 'stack', target: 'stack', chapter: 'stack' },
      { id: 'certifications', target: 'certifications', chapter: 'certifications' },
      { id: 'about', target: 'about', chapter: 'about' },
      { id: 'contact', target: 'contact', chapter: 'contact' },
    ];
    
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const threshold = window.innerHeight * 0.40;
          let currentTarget = 'cover';
          let currentChapter = 'cover';

          for (const item of SCROLL_TARGETS) {
            const el = document.getElementById(item.id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= threshold) {
                currentTarget = item.target;
                currentChapter = item.chapter;
              }
            }
          }

          setActiveChapter(currentChapter);
          setDialogueTarget(currentTarget);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen performative-bg text-white flex flex-col justify-between selection:bg-white selection:text-[#030805]">
      {/* Top Navbar */}
      <Navbar 
        activeChapter={activeChapter} 
        lang={lang} 
        onToggleLang={handleToggleLang} 
      />

      {/* Main Chapter Stage Layout */}
      <main id="main" className="flex-1 pt-[104px] lg:pt-[76px]">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="chapter-grid gap-8 lg:gap-14 items-start">
            
            {/* Left Content Column (Chapters 00 through 07) */}
            <div className="min-w-0 flex flex-col divide-y divide-white/10 pb-36 lg:pb-12">
              <CoverChapter />

              {/* Prominent Spotlight for GitHub, LinkedIn & Credly */}
              <EngineeringSpotlight />

              <ExperienceChapter />
              <WorkChapter />
              <StackChapter />
              <CertificationsChapter />
              <AboutChapter />
              <ContactChapter />
            </div>

            {/* Right Sticky Interactive 32-Bit Sprite Stage (Desktop) */}
            <aside className="hidden lg:block lg:sticky lg:top-24 lg:h-[calc(100vh-7.5rem)] pt-6">
              <RetroCharacterStage 
                activeChapter={dialogueTarget} 
                lang={lang} 
                variant="desktop" 
                onOpenChat={() => setIsChatOpen(true)}
              />
            </aside>

          </div>
        </div>
      </main>

      {/* Mobile Docked Character Stage (Corner Companion on Small Screens) */}
      <aside 
        aria-label="Companion interactivo 32-bit"
        className="block lg:hidden fixed bottom-4 right-3 z-40 pointer-events-auto filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] max-w-[calc(100vw-1.5rem)]"
      >
        <RetroCharacterStage 
          activeChapter={dialogueTarget} 
          lang={lang} 
          variant="mobile" 
          onOpenChat={() => setIsChatOpen(true)}
        />
      </aside>

      {/* 32-Bit Fullscreen/Modal Chat with Ignacio */}
      <IgnacioRetroChatModal 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        lang={lang} 
      />

      {/* Footer */}
      <Footer lang={lang} onToggleLang={handleToggleLang} />
    </div>
  );
};
