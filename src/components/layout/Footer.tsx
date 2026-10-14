import React from 'react'
import { useTranslation } from 'react-i18next'
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export const Footer: React.FC = () => {
  const { t } = useTranslation()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 bg-[#040407] py-12 relative overflow-hidden text-xs font-mono text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-extrabold text-sm text-white tracking-wider">
                IGNACIO<span className="text-cyan-400">.DEV</span>
              </span>
              <p className="text-[10px] text-gray-500">
                Software Developer · STUCOM Pelai · Soterguard
              </p>
            </div>
          </div>

          {/* System status pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t('footer.systemStatus')}</span>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Ignaciobrenas"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
              title="GitHub"
            >
              <FiGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/ignaciobrenas"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:text-blue-400 hover:border-blue-400 transition-colors"
              title="LinkedIn"
            >
              <FiLinkedin size={16} />
            </a>
            <a
              href="mailto:ignaciobrenas@gmail.com"
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:text-emerald-400 hover:border-emerald-400 transition-colors"
              title="Email"
            >
              <FiMail size={16} />
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 hover:text-white hover:bg-cyan-500/20 transition-all cursor-pointer"
              title={t('footer.backToTop')}
            >
              <FiArrowUp size={14} />
              <span className="hidden sm:inline">{t('footer.backToTop')}</span>
            </button>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] text-gray-500">
          <p>© {new Date().getFullYear()} Ignacio Breñas Muñoz. {t('footer.rights')}</p>
          <p>{t('footer.builtWith')}</p>
        </div>
      </div>
    </footer>
  )
}
