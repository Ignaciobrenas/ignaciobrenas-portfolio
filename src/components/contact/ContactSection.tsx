import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { 
  FiMail, 
  FiMapPin, 
  FiSend, 
  FiCheckCircle, 
  FiDownload, 
  FiLinkedin, 
  FiGithub,
  FiAward
} from 'react-icons/fi'

export const ContactSection: React.FC = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setStatus('sending')
    // Simulate transmission or hook to mailto / EmailJS
    setTimeout(() => {
      setStatus('success')
      // Prepare mailto fallback
      const mailtoUrl = `mailto:ignaciobrenas@gmail.com?subject=${encodeURIComponent(
        formData.subject || 'Contacto Portfolio'
      )}&body=${encodeURIComponent(
        `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
      )}`
      window.open(mailtoUrl, '_blank')
    }, 1000)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

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
            <FiMail /> {t('contact.badge')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* 2 Columns: Contact info & Message form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold font-mono text-white flex items-center gap-2 border-b border-white/10 pb-4">
                <span className="text-cyan-400">&gt;</span> {t('contact.directContact')}
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:ignaciobrenas@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-400/40 hover:bg-white/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <FiMail size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 block">EMAIL</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-300">
                      ignaciobrenas@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-blue-950/50 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <FiMapPin size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 block">UBICACIÓN</span>
                    <span className="text-sm font-semibold text-white">
                      Barcelona, España (Disponible para Barcelona y alrededores)
                    </span>
                  </div>
                </div>
              </div>

              {/* Social networks */}
              <div className="pt-2">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-3">
                  Perfiles Digitales:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href="https://github.com/Ignaciobrenas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-black/60 border border-white/10 hover:border-cyan-400 text-xs font-mono text-gray-200 hover:text-white transition-all"
                  >
                    <FiGithub size={15} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ignacio-bre%C3%B1as-mu%C3%B1oz-02a90b218/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-black/60 border border-white/10 hover:border-blue-400 text-xs font-mono text-gray-200 hover:text-white transition-all"
                  >
                    <FiLinkedin size={15} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.credly.com/users/ignacio-brenas-munoz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-black/60 border border-white/10 hover:border-amber-500 text-xs font-mono text-gray-200 hover:text-amber-400 transition-all"
                  >
                    <FiAward size={15} className="text-amber-500" />
                    <span>Credly</span>
                  </a>
                </div>
              </div>

              {/* CV Download CTA */}
              <div className="pt-2">
                <a
                  href="/CV_IgnacioBrenas.pdf"
                  download="CV_IgnacioBrenas.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-black font-mono font-bold text-xs uppercase tracking-wider hover:text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:scale-102"
                >
                  <FiDownload size={16} />
                  <span>{t('contact.downloadCVButton')}</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Transmission Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-5"
            >
              <h3 className="text-xl font-bold font-mono text-white flex items-center gap-2 border-b border-white/10 pb-4">
                <FiSend className="text-cyan-400" /> Transmisión de Mensaje
              </h3>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 text-xs font-mono flex items-center gap-2.5 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <FiCheckCircle size={18} />
                  <span>{t('contact.form.success')}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-300 block">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('contact.form.namePlaceholder')}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-300 block">
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-gray-300 block">
                  {t('contact.form.subject')}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t('contact.form.subjectPlaceholder')}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-gray-300 block">
                  {t('contact.form.message')} *
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t('contact.form.messagePlaceholder')}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none font-sans"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-mono font-bold text-xs uppercase tracking-wider hover:text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <FiSend />
                <span>
                  {status === 'sending' ? t('contact.form.sending') : t('contact.form.send')}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
