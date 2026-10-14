import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { academicProjects } from '../../data/projects'
import { FiBook, FiGithub, FiSearch, FiCheckSquare, FiGlobe } from 'react-icons/fi'
import { FaJava } from 'react-icons/fa'
import { SiPhp } from 'react-icons/si'

export const AcademicProjectsSection: React.FC = () => {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<'all' | 'java' | 'php' | 'qa' | 'web'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filters = [
    { id: 'all', label: t('academic.filterAll'), icon: FiBook },
    { id: 'java', label: t('academic.filterJava'), icon: FaJava },
    { id: 'php', label: t('academic.filterPhp'), icon: SiPhp },
    { id: 'qa', label: t('academic.filterQa'), icon: FiCheckSquare },
    { id: 'web', label: t('academic.filterWeb'), icon: FiGlobe },
  ]

  const filteredProjects = academicProjects.filter((item) => {
    const matchesCategory = filter === 'all' || item.category === filter
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <section id="academic" className="py-24 relative overflow-hidden bg-[#07090f]/70">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-400 font-mono text-xs tracking-widest uppercase">
            <FiBook /> {t('academic.badge')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t('academic.title')}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            {t('academic.subtitle')}
          </p>
        </motion.div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => {
              const Icon = f.icon
              const isActive = filter === f.id
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id as typeof filter)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-105'
                      : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon size={14} />
                  <span>{f.label}</span>
                </button>
              )
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('academic.searchPlaceholder')}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
            />
          </div>
        </div>

        {/* Repositories Counter */}
        <div className="text-xs font-mono text-gray-400 flex items-center justify-between border-b border-white/5 pb-2">
          <span>MOSTRANDO {filteredProjects.length} PROYECTOS ACADÉMICOS</span>
          <span className="text-purple-400">STUCOM PELAI · BARCELONA</span>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 6) * 0.08 }}
              className="glass-panel p-5 rounded-xl border border-white/10 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-white/5 border border-white/10 text-purple-300">
                    {project.category.toUpperCase()}
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    title={t('academic.viewRepo')}
                  >
                    <FiGithub size={16} />
                  </a>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono font-bold text-base text-white group-hover:text-purple-300 transition-colors block line-clamp-1"
                >
                  {project.name}
                </a>

                <p className="text-xs text-gray-300 leading-relaxed font-sans line-clamp-3">
                  {project.description}
                </p>

                {project.highlights && (
                  <div className="text-[11px] font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 px-2 py-1 rounded">
                    ★ {project.highlights}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5 items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-black/40 border border-white/5 text-[10px] font-mono text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[10px] font-mono text-gray-500">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-purple-400 hover:text-purple-300 flex items-center gap-1"
                >
                  <span>Repo</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
