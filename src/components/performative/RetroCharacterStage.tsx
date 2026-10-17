import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PORTFOLIO_DIALOGUES } from '../../data/dialogues';
import { RetroDialogueBox } from './RetroDialogueBox';
import { retroAudio } from '../../utils/retroAudio';
import { Sparkles, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

interface RetroCharacterStageProps {
  activeChapter: string;
  lang?: 'es' | 'en';
  variant?: 'desktop' | 'mobile';
  onOpenChat?: () => void;
}

const TALK_FRAMES = [
  '/images/sprites/ignacio_talk_mid.png',
  '/images/sprites/ignacio_talk_open.png',
  '/images/sprites/ignacio_talk_gesture.png',
];

export const RetroCharacterStage: React.FC<RetroCharacterStageProps> = ({
  activeChapter,
  lang = 'es',
  variant = 'desktop',
  onOpenChat,
}) => {
  const [lineIndex, setLineIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [currentSprite, setCurrentSprite] = useState<string>('/images/sprites/ignacio_idle.png');
  const [isMuted, setIsMuted] = useState<boolean>(() => retroAudio.getMuted());
  const [isMobileMinimized, setIsMobileMinimized] = useState<boolean>(false);

  // References for animation timers
  const typingTimerRef = useRef<number | null>(null);
  const mouthTimerRef = useRef<number | null>(null);
  const mouthFrameIdxRef = useRef<number>(0);

  // Current chapter dialogue node
  const chapterData = PORTFOLIO_DIALOGUES[activeChapter] || PORTFOLIO_DIALOGUES.cover;
  const currentLine = chapterData.lines[lineIndex] || chapterData.lines[0];
  const fullText = currentLine?.text[lang] || currentLine?.text.es || '';

  const [prevChapter, setPrevChapter] = useState(activeChapter);
  const [prevLang, setPrevLang] = useState(lang);

  // Adjust state when active target or language prop changes
  if (activeChapter !== prevChapter || lang !== prevLang) {
    setPrevChapter(activeChapter);
    setPrevLang(lang);
    setLineIndex(0);
  }

  // Clean all timers
  const clearTimers = useCallback(() => {
    if (typingTimerRef.current !== null) {
      window.clearTimeout(typingTimerRef.current);
      typingTimerRef.current = null;
    }
    if (mouthTimerRef.current !== null) {
      window.clearInterval(mouthTimerRef.current);
      mouthTimerRef.current = null;
    }
  }, []);

  // Typewriter and mouth animation effect
  useEffect(() => {
    clearTimers();

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let charIdx = 0;
    mouthFrameIdxRef.current = 0;

    const startTyping = () => {
      if (prefersReducedMotion) {
        setDisplayedText(fullText);
        setIsTyping(false);
        setCurrentSprite(currentLine.pose || '/images/sprites/ignacio_idle.png');
        return;
      }

      setDisplayedText('');
      setIsTyping(true);

      // Mouth animation loop while typing
      mouthTimerRef.current = window.setInterval(() => {
        mouthFrameIdxRef.current = (mouthFrameIdxRef.current + 1) % TALK_FRAMES.length;
        setCurrentSprite(TALK_FRAMES[mouthFrameIdxRef.current]);
      }, 110);

      const typeNextChar = () => {
        if (charIdx < fullText.length) {
          const nextChar = fullText.charAt(charIdx);
          charIdx++;
          setDisplayedText(fullText.slice(0, charIdx));

          // 32-bit retro sound blip on characters
          if (nextChar !== ' ' && charIdx % 2 === 0) {
            retroAudio.playBlip();
          }

          // Slight pause on punctuation
          let delay = 26;
          if (nextChar === '.' || nextChar === '!' || nextChar === '?') {
            delay = 180;
          } else if (nextChar === ',' || nextChar === ':') {
            delay = 90;
          }

          typingTimerRef.current = window.setTimeout(typeNextChar, delay);
        } else {
          // Typing finished
          clearTimers();
          setIsTyping(false);
          // Settle into final line pose
          setCurrentSprite(currentLine.pose || '/images/sprites/ignacio_idle.png');
        }
      };

      typeNextChar();
    };

    typingTimerRef.current = window.setTimeout(startTyping, 80);

    return () => clearTimers();
  }, [fullText, currentLine, clearTimers]);

  // Fast forward to full text immediately
  const handleFastForward = useCallback(() => {
    clearTimers();
    setDisplayedText(fullText);
    setIsTyping(false);
    setCurrentSprite(currentLine.pose || '/images/sprites/ignacio_idle.png');
  }, [fullText, currentLine, clearTimers]);

  // Advance to next dialogue line
  const handleAdvance = useCallback(() => {
    if (isTyping) {
      handleFastForward();
      return;
    }
    const nextIdx = (lineIndex + 1) % chapterData.lines.length;
    setLineIndex(nextIdx);
    setDisplayedText('');
    setIsTyping(true);
  }, [isTyping, lineIndex, chapterData.lines.length, handleFastForward]);

  // Replay current chapter dialogue
  const handleReplay = useCallback(() => {
    clearTimers();
    setLineIndex(0);
    setDisplayedText('');
    setIsTyping(true);
  }, [clearTimers]);

  // Toggle mute
  const handleToggleMute = useCallback(() => {
    const nextMuted = retroAudio.toggleMute();
    setIsMuted(nextMuted);
  }, []);

  // Global key navigation (Space / Enter) when not typing in an input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select' || (e.target as HTMLElement)?.isContentEditable) {
        return;
      }
      if (tag === 'button' || tag === 'a') return;

      if (isTyping) {
        e.preventDefault();
        handleFastForward();
      } else if (chapterData.lines.length > 1) {
        e.preventDefault();
        handleAdvance();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTyping, handleFastForward, handleAdvance, chapterData.lines.length]);

  // ==========================================
  // MOBILE CORNER DOCKED COMPANION VARIANT
  // ==========================================
  if (variant === 'mobile') {
    return (
      <div className="flex flex-col items-end select-none">
        {/* Minimized Floating Avatar in bottom-right corner */}
        {isMobileMinimized ? (
          <button
            type="button"
            onClick={() => setIsMobileMinimized(false)}
            className="group relative size-13 sm:size-14 rounded-full border-2 border-[#10b981] bg-[#030805]/95 shadow-[0_8px_30px_rgba(0,0,0,0.85)] flex items-center justify-center cursor-pointer active:scale-95 transition-all p-1 hover:border-white hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
            title="Hablar con Ignacio"
          >
            <img
              src={currentSprite}
              alt="Ignacio Pixel Art Avatar"
              className="size-10 object-contain pixelated sprite-breathe"
            />
            <span className="absolute top-0 right-0 size-3 rounded-full bg-[#10b981] border-2 border-[#030805] animate-ping" />
            <span className="absolute top-0 right-0 size-3 rounded-full bg-[#10b981] border-2 border-[#030805]" />
          </button>
        ) : (
          /* Expanded Corner View: Floating Speech Bubble above, Standing Ignacio below */
          <div className="flex flex-col items-end gap-1.5 max-w-[300px] sm:max-w-[340px]">
            {/* Speech Bubble pointing down-right towards Ignacio */}
            <div className="w-full relative filter drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
              <RetroDialogueBox
                size="sm"
                displayedText={displayedText}
                isTyping={isTyping}
                canAdvance={chapterData.lines.length > 1}
                speakerName="IGNACIO"
                onAdvance={handleAdvance}
                onFastForward={handleFastForward}
                onReplay={handleReplay}
                isMuted={isMuted}
                onToggleMute={handleToggleMute}
                onClose={() => setIsMobileMinimized(true)}
                pointerDirection="down-right"
                currentIndex={lineIndex + 1}
                totalLines={chapterData.lines.length}
              />
            </div>

            {/* Corner Character Dock & Chat Trigger */}
            <div className="flex items-center gap-2 pr-2">
              {onOpenChat && (
                <button
                  type="button"
                  onClick={onOpenChat}
                  className="arcade-btn-32bit py-1 px-2.5 text-[9.5px] rounded-full shadow-lg"
                  title="Abrir chat 32-bit completo"
                >
                  <MessageSquare className="size-3" />
                  <span>{lang === 'es' ? 'Chat 32-Bit' : '32-Bit Chat'}</span>
                </button>
              )}

              {/* Ignacio Standing Pixel Sprite */}
              <div
                onClick={onOpenChat ? onOpenChat : handleAdvance}
                className="relative size-16 sm:size-18 cursor-pointer group active:scale-95 transition-transform"
                title="Toca para interactuar o chatear con Ignacio"
              >
                <img
                  src={currentSprite}
                  alt="Ignacio Pixel Art Avatar"
                  className="w-full h-full object-contain pixelated sprite-breathe drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
                />
                <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-[#10b981] border border-[#030805]" />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ==========================================
  // DESKTOP RIGHT STICKY STAGE VARIANT
  // ==========================================
  return (
    <div className="relative w-full h-full max-h-[640px] rounded-[24px] border-2 border-white/20 bg-gradient-to-b from-[#06140c]/95 via-[#030805]/95 to-[#091f14]/90 p-4 sm:p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),0_0_45px_rgba(20,56,35,0.35)] backdrop-blur-xl overflow-hidden flex flex-col justify-between">
      
      {/* Top Header HUD */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-[#10b981] animate-ping" />
          <span className="font-mono text-[11px] font-extrabold text-white tracking-wider uppercase">
            IGNACIO BREÑAS · INTERACTIVO
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hud-pill text-[10px] px-2.5 py-0.5 border-[#10b981]/40 text-[#10b981]">
            <Sparkles className="size-3" />
            <span>32_BIT_ENGINE</span>
          </span>
        </div>
      </div>

      {/* Main Interactive Stage Body: Speech Bubble on top, Character Sprite below */}
      <div className="relative z-10 flex-1 flex flex-col justify-between py-2 my-auto">
        
        {/* Dialogue Speech Bubble */}
        <div className="w-full mb-3">
          <RetroDialogueBox
            size="lg"
            displayedText={displayedText}
            isTyping={isTyping}
            canAdvance={chapterData.lines.length > 1}
            speakerName="IGNACIO"
            onAdvance={handleAdvance}
            onFastForward={handleFastForward}
            onReplay={handleReplay}
            isMuted={isMuted}
            onToggleMute={handleToggleMute}
            pointerDirection="down"
            currentIndex={lineIndex + 1}
            totalLines={chapterData.lines.length}
          />
        </div>

        {/* Character Stage Mount with Ambient Glow */}
        <div 
          onClick={onOpenChat ? onOpenChat : handleAdvance}
          className="relative flex-1 min-h-[200px] max-h-[270px] flex items-center justify-center cursor-pointer group"
          title="Haz clic para abrir el chat 32-bit con Ignacio"
        >
          {/* Subtle Ambient Stage Light */}
          <div className="absolute inset-0 bg-radial from-[#10b981]/15 via-transparent to-transparent opacity-60 rounded-full blur-2xl group-hover:opacity-100 transition-opacity" />

          {/* Ignacio Sprite with Pixel Rendering & subtle float */}
          <img
            src={currentSprite}
            alt="Ignacio Breñas — Pixel Art Interactive Sprite"
            className="relative z-10 max-h-[230px] w-auto object-contain pixelated sprite-breathe drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] group-hover:scale-[1.04] transition-transform duration-200"
          />

          {/* Interaction Bubble Badge Hint */}
          <div className="absolute bottom-1 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#030805]/95 border border-[#10b981]/50 text-[10.5px] font-mono text-white shadow-lg group-hover:border-[#10b981] group-hover:bg-[#07190f] transition-all">
            <MessageSquare className="size-3 text-[#10b981]" />
            <span className="font-bold">ABRIR_CHAT_32BIT</span>
          </div>
        </div>

      </div>

      {/* Prominent 32-Bit Arcade Button & Status Footer */}
      <div className="relative z-10 flex flex-col gap-2.5 pt-3 border-t border-white/10">
        {onOpenChat && (
          <button
            type="button"
            onClick={onOpenChat}
            className="arcade-btn-32bit w-full py-2.5 text-[11.5px]"
          >
            <MessageSquare className="size-4" />
            <span>{lang === 'es' ? 'Hablar con Ignacio (32-Bit)' : 'Chat with Ignacio (32-Bit)'}</span>
          </button>
        )}

        <div className="flex items-center justify-between text-xs text-[#94a3b8]">
          <div className="flex items-center gap-1.5">
            <span className="inline-flex size-1.5 rounded-full bg-[#10b981]" />
            <span className="font-mono text-[10px] text-white/70">SPRITE: {currentLine.id.toUpperCase()}</span>
          </div>

          <button
            type="button"
            onClick={handleAdvance}
            className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#030805] border border-white/30 text-white hover:bg-white hover:text-[#030805] transition-all"
          >
            <span>{isTyping ? 'SALTAR' : 'SIGUIENTE'}</span>
          </button>
        </div>
      </div>

    </div>
  );
};

export const UndertaleCharacterStage = RetroCharacterStage;

