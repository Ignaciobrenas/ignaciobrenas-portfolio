import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { HeroScene } from '../../three/HeroScene'
import { FiDownload, FiArrowDown, FiTerminal, FiCpu } from 'react-icons/fi'
import { SiTypescript, SiNodedotjs, SiDocker, SiLinux } from 'react-icons/si'

export const HeroSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* 3D Background */}
      <HeroScene />

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      {/* Radial Gradient Glow in background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (Content) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-mono text-xs tracking-wider backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{t('hero.badge')}</span>
            </div>

            {/* Title & Name */}
            <div>
              <p className="text-gray-400 font-mono text-sm tracking-widest uppercase mb-1 flex items-center gap-2">
                <FiTerminal className="text-cyan-400" />
                <span>{t('hero.greeting')}</span>
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Ignacio <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">Breñas</span>
              </h1>
              <p className="text-xl sm:text-2xl font-mono text-cyan-300 font-semibold mt-2 flex items-center gap-2">
                <span>{t('hero.role')}</span>
                <span className="terminal-cursor text-cyan-400">_</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              {t('hero.description')}
            </p>

            {/* Tech Badges Row */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-cyan-300 backdrop-blur-sm hover:border-cyan-400/50 transition-colors">
                <SiTypescript className="text-blue-400" />
                <span>TypeScript & Node.js</span>
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-emerald-300 backdrop-blur-sm hover:border-emerald-400/50 transition-colors">
                <SiNodedotjs className="text-emerald-400" />
                <span>Soterguard Intern</span>
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-sky-300 backdrop-blur-sm hover:border-sky-400/50 transition-colors">
                <SiDocker className="text-sky-400" />
                <span>Docker & LXC</span>
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-yellow-300 backdrop-blur-sm hover:border-yellow-400/50 transition-colors">
                <SiLinux className="text-yellow-400" />
                <span>Linux SysAdmin</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-black font-mono font-bold text-xs uppercase tracking-wider hover:text-white shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] transition-all hover:scale-105"
              >
                {t('hero.viewProjects')}
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-white/10 hover:border-cyan-400/50 transition-all hover:scale-105"
              >
                {t('hero.contactMe')}
              </a>
              <a
                href="/CV_IgnacioBrenas.pdf"
                download="CV_IgnacioBrenas.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-300 hover:text-white hover:border-cyan-400 transition-colors"
                title="Descargar CV"
              >
                <FiDownload size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Column (User Logo with Cyber Holographic Display) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Outer Pulsing Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-emerald-500 rounded-3xl opacity-30 blur-2xl group-hover:opacity-60 transition duration-700 animate-pulse" />

              {/* Holographic Border Container */}
              <div className="relative rounded-3xl p-3 glass-panel border border-cyan-500/40 shadow-[0_0_40px_rgba(6,182,212,0.25)]">
                {/* Tech HUD top bar */}
                <div className="flex items-center justify-between px-3 py-1.5 mb-2 border-b border-white/10 text-[11px] font-mono text-gray-400">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <FiCpu /> AVATAR_OS
                  </span>
                  <span className="text-emerald-400">SYS_OK · 165Hz</span>
                </div>

                {/* Logo Image */}
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden bg-black/60 relative border border-white/10">
                  <img
                    src="/images/logo.png"
                    alt="Ignacio Breñas"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Scanlines overlay */}
                  <div className="absolute inset-0 scanlines opacity-40 pointer-events-none" />
                </div>

                {/* Tech HUD bottom indicators */}
                <div className="grid grid-cols-2 gap-2 mt-3 text-[11px] font-mono">
                  <div className="bg-black/40 border border-white/5 rounded p-2 text-center">
                    <span className="text-gray-400 block">EDUCATION</span>
                    <span className="text-cyan-300 font-bold">DAW 2 @ STUCOM</span>
                  </div>
                  <div className="bg-black/40 border border-white/5 rounded p-2 text-center">
                    <span className="text-gray-400 block">ROLE</span>
                    <span className="text-emerald-300 font-bold">SOTERGUARD</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex flex-col items-center justify-center text-gray-500 hover:text-cyan-400 transition-colors"
        >
          <a href="#about" className="flex flex-col items-center gap-2 cursor-pointer">
            <span className="text-[11px] font-mono tracking-widest uppercase">
              {t('hero.scrollDown')}
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
            >
              <FiArrowDown className="text-cyan-400" size={18} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
