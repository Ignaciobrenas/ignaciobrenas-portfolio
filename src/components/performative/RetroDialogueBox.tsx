import React from 'react';
import { useTranslation } from 'react-i18next';
import { Volume2, VolumeX, RotateCcw, FastForward, X } from 'lucide-react';

export interface RetroDialogueBoxProps {
  size?: 'sm' | 'md' | 'lg';
  displayedText: string;
  isTyping: boolean;
  canAdvance: boolean;
  speakerName?: string;
  onAdvance: () => void;
  onFastForward: () => void;
  onReplay: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  onClose?: () => void;
  pointerDirection?: 'down' | 'down-right' | 'left' | 'right' | 'none';
  className?: string;
  currentIndex?: number;
  totalLines?: number;
}

export const RetroDialogueBox: React.FC<RetroDialogueBoxProps> = ({
  size = 'lg',
  displayedText,
  isTyping,
  canAdvance,
  speakerName = 'IGNACIO',
  onAdvance,
  onFastForward,
  onReplay,
  isMuted,
  onToggleMute,
  onClose,
  pointerDirection = 'down',
  className = '',
  currentIndex = 1,
  totalLines = 1,
}) => {
  const { t } = useTranslation();

  // Size-dependent typography and padding
  const sizeClasses = {
    sm: {
      box: 'p-3 text-[14px] leading-snug min-h-[70px]',
      title: 'text-[10px]',
      footer: 'text-[8.5px]',
    },
    md: {
      box: 'p-4 text-[16px] sm:text-[17px] leading-relaxed min-h-[88px]',
      title: 'text-[10.5px]',
      footer: 'text-[9.5px]',
    },
    lg: {
      box: 'p-5 sm:p-5 text-[17px] sm:text-[18.5px] leading-relaxed min-h-[110px]',
      title: 'text-[11px]',
      footer: 'text-[10px]',
    },
  }[size];

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isTyping) {
      onFastForward();
    } else {
      onAdvance();
    }
  };

  return (
    <div className={`relative select-none ${className}`}>
      {/* 32-Bit Enhanced Retro Dialogue Container */}
      <div
        role="button"
        tabIndex={0}
        aria-label={t('dialogueBox.ariaLabel')}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick(e as unknown as React.MouseEvent);
          }
        }}
        className={`
          retro-dialogue-box w-full cursor-pointer transition-all duration-150
          hover:border-[#10b981] active:translate-y-[1px]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]
          ${sizeClasses.box}
        `}
      >
        {/* Header HUD: Speaker Tag, Voice Equalizer Bars, Line Counter & Audio Controls */}
        <div className="flex items-center justify-between border-b border-white/15 pb-2 mb-2.5 text-white/70">
          <div className="flex items-center gap-2.5">
            {/* Live voice wave visualizer */}
            <div className={`flex items-end gap-[2px] h-3.5 px-1 py-0.5 rounded bg-white/5 border border-white/10 ${isTyping ? 'sound-wave-active' : 'sound-wave-idle'}`}>
              <span className="sound-bar w-[2.5px] bg-[#10b981] rounded-full" />
              <span className="sound-bar w-[2.5px] bg-[#10b981] rounded-full" style={{ animationDelay: '0.15s' }} />
              <span className="sound-bar w-[2.5px] bg-[#10b981] rounded-full" style={{ animationDelay: '0.3s' }} />
            </div>

            <span className={`font-mono font-black tracking-widest text-[#10b981] uppercase ${sizeClasses.title}`}>
              {speakerName}
            </span>

            {totalLines > 1 && (
              <span className="font-mono text-[9px] text-[#94a3b8] tracking-wider bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
                {currentIndex}/{totalLines}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
            {/* Replay dialogue */}
            <button
              type="button"
              onClick={onReplay}
              title={t('dialogueBox.replayTitle')}
              className="p-1 rounded text-white/60 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            >
              <RotateCcw className="size-3" />
            </button>

            {/* Fast-forward if typing */}
            {isTyping && (
              <button
                type="button"
                onClick={onFastForward}
                title={t('dialogueBox.fastForwardTitle')}
                className="p-1 rounded text-[#38bdf8] hover:text-white hover:bg-white/10 transition-colors focus:outline-none animate-pulse"
              >
                <FastForward className="size-3" />
              </button>
            )}

            {/* Retro Sound Mute / Unmute */}
            <button
              type="button"
              onClick={onToggleMute}
              title={isMuted ? t('dialogueBox.unmuteSound') : t('dialogueBox.muteSound')}
              className="p-1 rounded text-white/60 hover:text-[#10b981] hover:bg-white/10 transition-colors focus:outline-none"
            >
              {isMuted ? <VolumeX className="size-3 text-white/40" /> : <Volume2 className="size-3 text-[#10b981]" />}
            </button>

            {/* Optional Close Button */}
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                title={t('dialogueBox.closeTitle')}
                className="p-1 rounded text-white/60 hover:text-red-400 hover:bg-white/10 transition-colors focus:outline-none ml-0.5"
              >
                <X className="size-3" />
              </button>
            )}
          </div>
        </div>

        {/* Dialogue Typewriter Text */}
        <div className="font-retro tracking-wide text-white font-normal relative min-h-[42px] flex items-start">
          <p className="inline m-0 whitespace-pre-wrap break-words leading-relaxed">
            {displayedText}
          </p>

          {/* Retro Blinking Advance Arrow indicator when finished */}
          {!isTyping && canAdvance && (
            <span
              className="inline-flex items-center ml-1.5 retro-indicator align-baseline"
              title={t('dialogueBox.continuePrompt')}
            >
              <svg className="size-2.5 text-[#10b981] fill-current drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" viewBox="0 0 10 10">
                <polygon points="0,0 10,0 5,8" />
              </svg>
            </span>
          )}

          {/* Active typing cursor */}
          {isTyping && (
            <span className="inline-block w-1.5 h-4 bg-[#10b981] ml-1.5 animate-pulse align-middle shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
          )}
        </div>

        {/* Footer Interaction Micro-Hint */}
        <div className={`flex items-center justify-between pt-2 mt-2.5 border-t border-white/10 font-mono text-white/40 ${sizeClasses.footer}`}>
          <span>{isTyping ? t('dialogueBox.hintSkip') : t('dialogueBox.hintAdvance')}</span>
          <span className="hidden sm:inline text-[#10b981]/70 font-bold tracking-wider">RETRO_32BIT</span>
        </div>
      </div>

      {/* Retro Speech Bubble Pointer (Punta del bocadillo hacia el personaje) */}
      {pointerDirection === 'down' && (
        <div className="absolute -bottom-3 left-10 sm:left-14 z-20 pointer-events-none">
          <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L11 13L22 0H0Z" fill="#ffffff" />
            <path d="M3 0L11 9.5L19 0H3Z" fill="#030805" />
          </svg>
        </div>
      )}

      {pointerDirection === 'down-right' && (
        <div className="absolute -bottom-3 right-8 sm:right-10 z-20 pointer-events-none">
          <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L11 13L22 0H0Z" fill="#ffffff" />
            <path d="M3 0L11 9.5L19 0H3Z" fill="#030805" />
          </svg>
        </div>
      )}

      {pointerDirection === 'left' && (
        <div className="absolute top-6 -left-3 z-20 pointer-events-none">
          <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 0L0 11L13 22V0Z" fill="#ffffff" />
            <path d="M13 3.5L3 11L13 18.5V3.5Z" fill="#030805" />
          </svg>
        </div>
      )}
    </div>
  );
};

export const UndertaleDialogueBox = RetroDialogueBox;
