import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { TechOrbitalScene } from '../../three/TechOrbitalScene'
import { techStackData } from '../../data/techStack'
import type { TechItem } from '../../data/techStack'
import { 
  FiLayers, 
  FiCode, 
  FiCpu, 
  FiDatabase, 
  FiServer, 
  FiActivity, 
  FiInfo
} from 'react-icons/fi'

export const TechStackSection: React.FC = () => {
  const { t } = useTranslation()
  const [selectedTech, setSelectedTech] = useState<TechItem>(techStackData[0])
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const activeTech = hoveredTech || selectedTech

  const categories = [
    { id: 'all', label: t('techStack.tabs.all'), icon: FiLayers },
    { id: 'languages', label: t('techStack.tabs.languages'), icon: FiCode },
    { id: 'frameworks', label: t('techStack.tabs.frameworks'), icon: FiCpu },
    { id: 'database', label: t('techStack.tabs.database'), icon: FiDatabase },
    { id: 'infra', label: t('techStack.tabs.infra'), icon: FiServer },
    { id: 'ai', label: t('techStack.tabs.ai'), icon: FiActivity },
  ]

  const filteredTech = activeCategory === 'all'
    ? techStackData
    : techStackData.filter((item) => item.category === activeCategory)

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden bg-[#06070a]/80">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-widest uppercase">
            <FiCpu /> {t('techStack.badge')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t('techStack.title')}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            {t('techStack.subtitle')}
          </p>
        </motion.div>

        {/* 3D Interactive Scene Container */}
        <div className="relative">
          <TechOrbitalScene
            onHoverTech={setHoveredTech}
            onSelectTech={setSelectedTech}
            selectedTech={selectedTech}
          />

          {/* Interactive HUD overlay card (pinned at top-right on desktop) */}
          <div className="mt-4 md:mt-0 md:absolute md:top-6 md:right-6 max-w-md w-full glass-panel p-5 rounded-xl border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] backdrop-blur-xl z-20">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <span
                  className="w-3.5 h-3.5 rounded-full shrink-0 shadow-[0_0_10px_currentColor]"
                  style={{ backgroundColor: activeTech.color, color: activeTech.color }}
                />
                <h4 className="font-mono font-bold text-lg text-white">
                  {activeTech.name}
                </h4>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-cyan-300 uppercase">
                {activeTech.level}
              </span>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed font-sans mb-3">
              {activeTech.description}
            </p>

            <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-t border-white/5 pt-2">
              <span className="flex items-center gap-1 text-cyan-400">
                <FiInfo size={13} /> {activeTech.category.toUpperCase()}
              </span>
              <span>ORBIT RADIUS: {activeTech.orbitRadius} AU</span>
            </div>
          </div>
        </div>

        {/* Category Filters for 2D Quick Grid */}
        <div className="pt-6 space-y-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold shadow-[0_0_20px_rgba(6,182,212,0.5)] scale-105'
                      : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon size={14} />
                  <span>{cat.label}</span>
                </button>
              )
            })}
          </div>

          {/* 2D Tech Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
            {filteredTech.map((tech) => {
              const isCurrent = selectedTech?.id === tech.id
              return (
                <div
                  key={tech.id}
                  onClick={() => setSelectedTech(tech)}
                  className={`glass-panel p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 group ${
                    isCurrent
                      ? 'border-cyan-400 bg-cyan-950/20 shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                      : 'border-white/5 hover:border-white/20 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="w-3 h-3 rounded-full shadow-[0_0_8px_currentColor]"
                      style={{ backgroundColor: tech.color, color: tech.color }}
                    />
                    <span className="text-[10px] font-mono text-gray-400">
                      {tech.level}
                    </span>
                  </div>
                  <div>
                    <span className="font-mono font-bold text-sm text-white group-hover:text-cyan-300 transition-colors block">
                      {tech.name}
                    </span>
                    <span className="text-[11px] text-gray-400 line-clamp-1">
                      {tech.description}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
