import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi'
import { SiTypescript, SiNodedotjs, SiPython, SiPostgresql, SiPrisma, SiDocker, SiLinux, SiApple, SiWordpress } from 'react-icons/si'

export const ExperienceSection: React.FC = () => {
  const { t } = useTranslation()

  const experiences = [
    {
      id: 'soterguard',
      role: t('experience.soterguard.role'),
      company: t('experience.soterguard.company'),
      period: t('experience.soterguard.period'),
      location: t('experience.soterguard.location'),
      bullets: [
        t('experience.soterguard.bullet1'),
        t('experience.soterguard.bullet2'),
        t('experience.soterguard.bullet3'),
        t('experience.soterguard.bullet4'),
      ],
      current: true,
      tech: [
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-emerald-400' },
        { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-sky-400' },
        { name: 'PrismaORM', icon: SiPrisma, color: 'text-indigo-400' },
        { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
        { name: 'LXC & WSL', icon: SiLinux, color: 'text-yellow-300' },
      ],
    },
    {
      id: 'vimtech',
      role: t('experience.vimtech.role'),
      company: t('experience.vimtech.company'),
      period: t('experience.vimtech.period'),
      location: t('experience.vimtech.location'),
      bullets: [
        t('experience.vimtech.bullet1'),
        t('experience.vimtech.bullet2'),
        t('experience.vimtech.bullet3'),
      ],
      current: false,
      tech: [
        { name: 'Apple Hardware', icon: SiApple, color: 'text-gray-200' },
        { name: 'macOS & Windows', icon: SiLinux, color: 'text-cyan-400' },
        { name: 'Linux OS', icon: SiLinux, color: 'text-yellow-400' },
        { name: 'Soporte TI', icon: FiCheckCircle, color: 'text-emerald-400' },
      ],
    },
    {
      id: 'ajma',
      role: t('experience.ajma.role'),
      company: t('experience.ajma.company'),
      period: t('experience.ajma.period'),
      location: t('experience.ajma.location'),
      bullets: [
        t('experience.ajma.bullet1'),
        t('experience.ajma.bullet2'),
      ],
      current: false,
      tech: [
        { name: 'WordPress', icon: SiWordpress, color: 'text-sky-400' },
        { name: 'Web Design', icon: FiCheckCircle, color: 'text-blue-400' },
        { name: 'Audiovisual & TI', icon: FiCheckCircle, color: 'text-purple-400' },
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#07080d]/60">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 font-mono text-xs tracking-widest uppercase">
            <FiBriefcase /> {t('experience.badge')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t('experience.title')}
          </h2>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-cyan-500/20 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Timeline Glowing Dot */}
              <div
                className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  exp.current
                    ? 'bg-cyan-500/20 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.8)]'
                    : 'bg-black border-gray-700 group-hover:border-blue-400'
                }`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    exp.current ? 'bg-cyan-400 animate-ping' : 'bg-gray-400 group-hover:bg-blue-400'
                  }`}
                />
              </div>

              {/* Card Container */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 group-hover:border-cyan-500/40 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-mono flex items-center gap-2">
                      <span>{exp.role}</span>
                      {exp.current && (
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 uppercase tracking-widest font-normal">
                          Actual
                        </span>
                      )}
                    </h3>
                    <span className="text-base font-semibold text-cyan-400 block mt-0.5">
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-gray-400 gap-1">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar className="text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiMapPin className="text-gray-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 pt-1">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-300">
                      <span className="text-cyan-400 font-mono mt-1">&gt;</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="pt-3 flex flex-wrap gap-2 border-t border-white/5">
                  {exp.tech.map((tItem, tIdx) => {
                    const Icon = tItem.icon
                    return (
                      <span
                        key={tIdx}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/50 border border-white/10 text-xs font-mono text-gray-300 hover:border-cyan-400/40 transition-colors"
                      >
                        <Icon className={tItem.color} size={14} />
                        <span>{tItem.name}</span>
                      </span>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
