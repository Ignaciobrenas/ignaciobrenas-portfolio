import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiAward, FiCalendar, FiMapPin, FiBookOpen } from 'react-icons/fi'

export const EducationSection: React.FC = () => {
  const { t } = useTranslation()

  const degrees = [
    {
      id: 'daw',
      degree: t('education.daw.degree'),
      center: t('education.daw.center'),
      period: t('education.daw.period'),
      location: t('education.daw.location'),
      description: t('education.daw.description'),
      status: 'En curso (2º año)',
      current: true,
      badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/30',
      keySubjects: ['Desarrollo Web Entorno Servidor (PHP/Laravel)', 'Desarrollo Web Entorno Cliente (JS/TS/React)', 'Diseño de Interfaces Web', 'Despliegue de Aplicaciones Web'],
    },
    {
      id: 'smr',
      degree: t('education.smr.degree'),
      center: t('education.smr.center'),
      period: t('education.smr.period'),
      location: t('education.smr.location'),
      description: t('education.smr.description'),
      status: 'Completado',
      current: false,
      badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/30',
      keySubjects: ['Redes Locales & Cableado Estructurado', 'Sistemas Operativos en Red (Windows Server/Linux)', 'Servicios de Red & Internet', 'Seguridad Informática'],
    },
  ]

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-400 font-mono text-xs tracking-widest uppercase">
            <FiAward /> {t('education.badge')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t('education.title')}
          </h2>
        </motion.div>

        {/* Degree Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {degrees.map((deg, idx) => (
            <motion.div
              key={deg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono border uppercase tracking-wider font-semibold ${deg.badgeColor}`}>
                    {deg.status}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                    <FiCalendar className="text-cyan-400" />
                    <span>{deg.period}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-mono leading-snug">
                    {deg.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-cyan-300 font-medium mt-1">
                    <FiBookOpen className="text-cyan-400" />
                    <span>{deg.center}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1">
                    <FiMapPin />
                    <span>{deg.location}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {deg.description}
                </p>
              </div>

              {/* Key Competencies */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                  Áreas Clave de Especialización:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {deg.keySubjects.map((sub, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded bg-black/40 border border-white/10 text-xs text-gray-300 font-sans"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
