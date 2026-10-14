import React from 'react';
import { ChevronUp, Sparkles, Heart, Award } from 'lucide-react';

export const MuseumFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020503] border-t border-[#cfa859]/20 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#cfa859]/15">
          
          {/* Logo & Curatorial Distinction */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full p-1 bg-gradient-to-tr from-[#9d7732] via-[#e9c878] to-[#143621] shadow-md flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#06120a] flex items-center justify-center p-1.5">
                <img src="/images/logo.png" alt="Ignacio Breñas Logo" className="w-full h-full object-contain" />
              </div>
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-[#f6ebd0] tracking-wider block">
                IGNACIO BREÑAS MUÑOZ
              </span>
              <span className="text-xs font-mono text-[#cfa859]">
                Museo de Arte & Arquitectura de Software · Barcelona (y alrededores)
              </span>
            </div>
          </div>

          {/* Return to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-[#cfa859]/30 bg-[#06120a] hover:bg-[#0d2216] text-[#cfa859] hover:text-[#f6ebd0] text-xs font-mono transition-all duration-300"
          >
            <span>Retornar al Foyer</span>
            <ChevronUp className="w-4 h-4 text-[#cfa859] group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#a6a193]/70 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Ignacio Breñas Muñoz. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-2 text-[#cfa859]/80">
            <Sparkles className="w-3.5 h-3.5 text-[#e9c878]" />
            <span>Colección permanente concebida en Astro, TypeScript y Óleo sobre lienzo</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
