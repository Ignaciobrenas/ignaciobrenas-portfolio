import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FiDownload, FiGlobe, FiMenu, FiX, FiTerminal } from 'react-icons/fi'

interface NavbarProps {
  onReopenGlitch?: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onReopenGlitch }) => {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(nextLang)
  }

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#education', label: t('nav.education') },
    { href: '#tech-stack', label: t('nav.techStack') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#academic', label: t('nav.academic') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand with User Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.9)] transition-all">
            <img
              src="/images/logo.png"
              alt="Ignacio Breñas Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-extrabold text-base tracking-wider text-white group-hover:text-cyan-400 transition-colors">
              IGNACIO<span className="text-cyan-400">.DEV</span>
            </span>
            <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono uppercase tracking-wider text-gray-300 hover:text-cyan-400 transition-colors relative py-1 hover:border-b-2 hover:border-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Language Toggle, Reopen 404, CV) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Re-trigger 404 easter egg */}
          {onReopenGlitch && (
            <button
              onClick={onReopenGlitch}
              title="Test 404 Glitch Screen"
              className="px-2.5 py-1.5 rounded-lg border border-red-500/30 bg-red-950/20 text-red-400 hover:bg-red-900/40 text-xs font-mono flex items-center gap-1.5 transition-all"
            >
              <FiTerminal className="text-red-400 animate-pulse" />
              <span>404</span>
            </button>
          )}

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-cyan-300 hover:text-white transition-all cursor-pointer"
            title="Cambiar idioma / Switch language"
          >
            <FiGlobe className="text-cyan-400" />
            <span className="font-bold">{i18n.language.toUpperCase()}</span>
          </button>

          {/* Download CV button */}
          <a
            href="/CV_IgnacioBrenas.pdf"
            download="CV_IgnacioBrenas.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-mono font-bold text-xs tracking-wider uppercase hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all hover:scale-105"
          >
            <FiDownload />
            <span>{t('nav.downloadCV')}</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1 rounded border border-white/10 bg-white/5 text-xs font-mono text-cyan-300"
          >
            <FiGlobe />
            <span>{i18n.language.toUpperCase()}</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-200 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-white/10 mt-3 px-4 pt-3 pb-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-sm uppercase tracking-wider text-gray-300 hover:text-cyan-400 py-1.5 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="/CV_IgnacioBrenas.pdf"
              download="CV_IgnacioBrenas.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-cyan-500 text-black font-mono font-bold text-xs uppercase"
            >
              <FiDownload />
              <span>{t('nav.downloadCV')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
