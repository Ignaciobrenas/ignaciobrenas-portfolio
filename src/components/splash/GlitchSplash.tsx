import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { MatrixRainCanvas } from './MatrixRainCanvas'
import { FiTerminal, FiAlertTriangle, FiArrowRight } from 'react-icons/fi'

interface GlitchSplashProps {
  onEnter: () => void
}

export const GlitchSplash: React.FC<GlitchSplashProps> = ({ onEnter }) => {
  const { t } = useTranslation()
  const [typedText, setTypedText] = useState('')
  const [isExiting, setIsExiting] = useState(false)
  const fullText = t('splash.subtitle')

  // Beep sound generator using Web Audio API
  const playCyberBeep = () => {
    try {
      const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext
      if (!AudioContext) return
      const ctx = new AudioContext()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(440, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15)
      gain.gain.setValueAtTime(0.08, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.25)
    } catch {
      // Audio not permitted or supported
    }
  }

  // Typewriter effect for terminal text
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 28)
    return () => clearInterval(timer)
  }, [fullText])

  const handleStart = () => {
    if (isExiting) return
    playCyberBeep()
    setIsExiting(true)
    setTimeout(() => {
      onEnter()
    }, 850)
  }

  // Listen to any key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key) {
        handleStart()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isExiting])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={isExiting ? { opacity: 0, scale: 1.05, filter: 'blur(10px) contrast(200%)' } : { opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 bg-[#000000] text-white flex flex-col items-center justify-center p-4 select-none scanlines overflow-hidden cursor-pointer"
        onClick={handleStart}
      >
        {/* Matrix background rain */}
        <MatrixRainCanvas opacity={0.25} />

        {/* Cyber grid floor */}
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

        {/* Glitch Overlay Distortion when exiting */}
        {isExiting && (
          <div className="absolute inset-0 bg-red-600/20 mix-blend-color-dodge animate-pulse pointer-events-none z-30" />
        )}

        <div className="relative z-20 max-w-2xl w-full flex flex-col items-center text-center space-y-6">
          {/* Top terminal badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-xs font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(239,68,68,0.3)]"
          >
            <FiAlertTriangle className="animate-pulse text-red-400" />
            <span>{t('splash.errorTitle')}</span>
          </motion.div>

          {/* Massive 404 Glitch Text */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glitch-wrapper my-2"
          >
            <h1
              className="glitch-text text-8xl md:text-9xl font-black font-mono tracking-tighter text-white"
              data-text={t('splash.errorCode')}
            >
              {t('splash.errorCode')}
            </h1>
          </motion.div>

          {/* Subtitle / Terminal Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full bg-black/80 border border-emerald-500/30 rounded-lg p-4 font-mono text-left shadow-[0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-md"
          >
            <div className="flex items-center gap-2 pb-2 mb-2 border-b border-emerald-900/50 text-xs text-emerald-400/80">
              <FiTerminal className="text-emerald-400" />
              <span>IGNACIO_BRENAS_SYSTEM_RECOVERY.sh</span>
            </div>
            <p className="text-emerald-400 text-sm md:text-base leading-relaxed">
              {typedText}
              <span className="terminal-cursor text-emerald-300 ml-1">█</span>
            </p>
          </motion.div>

          {/* Enter Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pt-4 flex flex-col items-center gap-3"
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleStart()
              }}
              className="group relative px-8 py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-emerald-500 font-mono font-bold text-sm tracking-wider uppercase text-black hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.8)] hover:scale-105 active:scale-95 overflow-hidden flex items-center gap-2 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isExiting ? t('splash.rebooting') : t('splash.pressAnyKey')}
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <span className="text-xs text-gray-500 font-mono tracking-wider animate-pulse">
              [ PRESS ANY KEY OR CLICK SCREEN ]
            </span>
          </motion.div>
        </div>

        {/* Footer info */}
        <div className="absolute bottom-4 text-center font-mono text-[11px] text-gray-600 z-10">
          STUCOM · DAW 2 · SOTERGUARD INTERN · THREE.JS PORTFOLIO KERNEL
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
