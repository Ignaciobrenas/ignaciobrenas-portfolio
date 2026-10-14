import React, { useState, useEffect } from 'react';
import { 
  Palette, 
  Layers, 
  Scroll, 
  GraduationCap, 
  Mail, 
  FileDown, 
  Menu, 
  X, 
  BookOpen,
  Sparkles
} from 'lucide-react';

interface MuseumNavbarProps {
  currentLang?: 'es' | 'en';
}

export const MuseumNavbar: React.FC<MuseumNavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Manifiesto', href: '#manifiesto', icon: BookOpen, badge: 'Sala I' },
    { label: 'Obras al Óleo', href: '#obras', icon: Palette, badge: 'Sala II' },
    { label: 'El Atelier', href: '#atelier', icon: Layers, badge: 'Sala III' },
    { label: 'Trayectoria', href: '#trayectoria', icon: Scroll, badge: 'Sala IV' },
    { label: 'Academia', href: '#academia', icon: GraduationCap, badge: 'Sala V' },
    { label: 'Contratarme', href: '#contacto', icon: Mail, badge: 'Sala VI' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#040b07]/90 backdrop-blur-md border-b border-[#cfa859]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3' 
          : 'bg-gradient-to-b from-[#030805]/90 via-[#030805]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Museum Seal */}
          <a href="#" className="group flex items-center gap-3.5 focus:outline-none">
            <div className="relative w-11 h-11 rounded-full p-[1.5px] bg-gradient-to-tr from-[#9d7732] via-[#e9c878] to-[#143621] shadow-[0_0_15px_rgba(207,168,89,0.3)] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-full bg-[#06120a] flex items-center justify-center p-1.5 overflow-hidden">
                <img 
                  src="/images/logo.png" 
                  alt="Ignacio Breñas Logo" 
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] transition-all duration-300 group-hover:brightness-125"
                />
              </div>
              {/* Subtle pulsing gilded ring */}
              <div className="absolute inset-0 rounded-full border border-[#e9c878]/30 animate-ping opacity-20 pointer-events-none"></div>
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-bold tracking-[0.18em] text-[#f6ebd0] group-hover:text-[#e9c878] transition-colors leading-tight">
                IGNACIO BREÑAS
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#cfa859]/80 uppercase font-mono flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#e9c878] animate-pulse"></span>
                Atelier & Colección
              </span>
            </div>
          </a>

          {/* Desktop Navigation Halls */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative px-3 py-2 rounded-md text-xs font-medium text-[#ede7da]/80 hover:text-[#f6ebd0] transition-colors flex items-center gap-1.5"
                >
                  <Icon className="w-3.5 h-3.5 text-[#cfa859]/70 group-hover:text-[#e9c878] transition-all duration-300 group-hover:scale-110" />
                  <span>{item.label}</span>
                  <span className="absolute -top-1 right-1 text-[8px] font-mono text-[#cfa859]/50 group-hover:text-[#e9c878] opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.badge}
                  </span>
                  <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-gradient-to-r from-transparent via-[#e9c878] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              );
            })}
          </nav>

          {/* Right Action: Download Catalog / CV */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/CV_IgnacioBrenas.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-[#06120a] bg-gradient-to-r from-[#e9c878] via-[#cfa859] to-[#b3883b] hover:from-[#f6ebd0] hover:to-[#e9c878] transition-all duration-300 shadow-[0_4px_15px_rgba(207,168,89,0.25)] hover:shadow-[0_6px_25px_rgba(207,168,89,0.45)] hover:scale-102"
            >
              <FileDown className="w-3.5 h-3.5 text-[#06120a] transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span className="tracking-wider uppercase font-mono text-[11px]">Curriculum Vitae</span>
              <Sparkles className="w-3 h-3 text-[#06120a]/80" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#cfa859] hover:text-[#f6ebd0] hover:bg-[#0f2719] border border-[#cfa859]/20 transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050e08]/98 border-b border-[#cfa859]/30 px-6 py-6 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-[#ede7da] hover:text-[#f6ebd0] hover:bg-[#0d2216] border border-transparent hover:border-[#cfa859]/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-[#cfa859]" />
                    <span>{item.label}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#cfa859]/60">{item.badge}</span>
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t border-[#cfa859]/20">
              <a
                href="/CV_IgnacioBrenas.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#06120a] bg-gradient-to-r from-[#e9c878] to-[#cfa859]"
              >
                <FileDown className="w-4 h-4" />
                Descargar Catálogo Curatorial (CV)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
