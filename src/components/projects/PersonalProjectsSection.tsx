import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { personalProjects } from '../../data/projects'
import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi'

export const PersonalProjectsSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial light */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-widest uppercase">
            <FiFolder /> {t('projects.badge')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t('projects.title')}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-panel p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
                project.featured
                  ? 'border-cyan-500/30 hover:border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.1)] hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]'
                  : 'border-white/10 hover:border-white/25 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]'
              }`}
            >
              <div className="space-y-4">
                {/* Card Top: Highlight Badge & Links */}
                <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-white/5 border border-white/10 text-cyan-300">
                    {project.highlightBadge}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-black/40 border border-white/10 text-gray-300 hover:text-white hover:border-cyan-400 transition-colors"
                      title={t('projects.viewCode')}
                    >
                      <FiGithub size={16} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 hover:text-white hover:bg-cyan-500 transition-colors"
                        title={t('projects.liveDemo')}
                      >
                        <FiExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-mono text-white group-hover:text-cyan-300 transition-colors">
                  {t(project.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed font-sans">
                  {t(project.descKey)}
                </p>
              </div>

              {/* Bottom: Tech Stack Pills & Action Link */}
              <div className="pt-6 mt-6 border-t border-white/5 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((techItem, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded bg-black/50 border border-white/10 text-[11px] font-mono text-gray-300"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>{t('projects.viewCode')}</span>
                    <span>&rarr;</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>{t('projects.liveDemo')}</span>
                      <FiExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
