import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { 
  FiUser, 
  FiMapPin, 
  FiMail, 
  FiPhone, 
  FiAward, 
  FiCheckCircle, 
  FiTrendingUp, 
  FiUsers, 
  FiTarget, 
  FiGlobe,
  FiDownload
} from 'react-icons/fi'

export const AboutSection: React.FC = () => {
  const { t } = useTranslation()

  const softSkills = [
    { name: t('about.softSkills.leadership'), icon: FiAward, color: 'text-amber-400 border-amber-500/30 bg-amber-950/20' },
    { name: t('about.softSkills.organization'), icon: FiTarget, color: 'text-blue-400 border-blue-500/30 bg-blue-950/20' },
    { name: t('about.softSkills.problemSolving'), icon: FiCheckCircle, color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20' },
    { name: t('about.softSkills.teamwork'), icon: FiUsers, color: 'text-purple-400 border-purple-500/30 bg-purple-950/20' },
    { name: t('about.softSkills.proactivity'), icon: FiTrendingUp, color: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/20' },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-widest uppercase">
            <FiUser /> {t('about.badge')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t('about.title')}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            {t('about.lead')}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Bio text (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 font-mono">
                <span className="text-cyan-400">&gt;</span> Formación & Visión Técnica
              </h3>
              <p className="text-gray-300 leading-relaxed font-sans text-base">
                {t('about.bio1')}
              </p>
              <p className="text-gray-300 leading-relaxed font-sans text-base">
                {t('about.bio2')}
              </p>
              <p className="text-gray-300 leading-relaxed font-sans text-base">
                {t('about.bio3')}
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-panel p-4 rounded-xl border border-white/10 text-center">
                <span className="block text-2xl sm:text-3xl font-mono font-extrabold text-cyan-400">
                  {t('about.stats.experienceYears')}
                </span>
                <span className="text-xs text-gray-400 font-sans mt-1 block">
                  {t('about.stats.experienceLabel')}
                </span>
              </div>
              <div className="glass-panel p-4 rounded-xl border border-white/10 text-center">
                <span className="block text-2xl sm:text-3xl font-mono font-extrabold text-emerald-400">
                  {t('about.stats.repos')}
                </span>
                <span className="text-xs text-gray-400 font-sans mt-1 block">
                  {t('about.stats.reposLabel')}
                </span>
              </div>
              <div className="glass-panel p-4 rounded-xl border border-white/10 text-center">
                <span className="block text-2xl sm:text-3xl font-mono font-extrabold text-blue-400">
                  {t('about.stats.academicRate')}
                </span>
                <span className="text-xs text-gray-400 font-sans mt-1 block">
                  {t('about.stats.academicLabel')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Details Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
              <h3 className="text-base font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-3">
                <FiUser className="text-cyan-400" />
                <span>{t('about.infoTitle')}</span>
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-gray-300">
                  <FiMapPin className="text-cyan-400 shrink-0" />
                  <span>{t('about.location')}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FiMail className="text-emerald-400 shrink-0" />
                  <a href="mailto:ignaciobrenas@gmail.com" className="hover:text-emerald-400 transition-colors">
                    {t('about.email')}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300 pt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                  <span className="text-emerald-300 font-mono text-xs">{t('about.status')}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/CV_IgnacioBrenas.pdf"
                  download="CV_IgnacioBrenas.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 border border-white/15 hover:border-cyan-400/50 hover:bg-white/10 text-cyan-300 font-mono text-xs tracking-wider uppercase transition-all"
                >
                  <FiDownload />
                  <span>Descargar CV Completo (PDF)</span>
                </a>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-base font-mono font-bold text-white uppercase tracking-wider border-b border-white/10 pb-3">
                {t('about.softSkillsTitle')}
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {softSkills.map((skill, i) => {
                  const Icon = skill.icon
                  return (
                    <span
                      key={i}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono ${skill.color}`}
                    >
                      <Icon size={14} />
                      <span>{skill.name}</span>
                    </span>
                  )
                })}
              </div>
            </div>

            {/* Languages */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-base font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-3">
                <FiGlobe className="text-cyan-400" />
                <span>{t('about.languagesTitle')}</span>
              </h3>
              <div className="space-y-3 pt-1">
                <div>
                  <div className="flex justify-between text-xs font-mono text-gray-300 mb-1">
                    <span className="font-bold text-cyan-400">ES · {t('about.languages.spanish')}</span>
                    <span className="text-cyan-400">100%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-cyan-400 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-mono text-gray-300 mb-1">
                    <span className="font-bold text-emerald-400">EN · {t('about.languages.english')}</span>
                    <span className="text-emerald-400">80%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-emerald-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
