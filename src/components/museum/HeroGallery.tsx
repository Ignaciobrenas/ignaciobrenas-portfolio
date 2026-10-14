import React, { useState, useRef } from 'react';
import { 
  Palette, 
  Mail, 
  Sparkles, 
  ShieldCheck, 
  Terminal, 
  Layers, 
  Volume2, 
  VolumeX, 
  ChevronDown,
  Award
} from 'lucide-react';

export const HeroGallery: React.FC = () => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [frameRotation, setFrameRotation] = useState({ x: 0, y: 0 });
  const frameRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Subtle, elegant 3D tilt
    setFrameRotation({
      x: -y * 0.02,
      y: x * 0.025,
    });
  };

  const handleMouseLeave = () => {
    setFrameRotation({ x: 0, y: 0 });
  };

  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Museum Ceiling Picture Lights (Spotlight Cones) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(233,200,120,0.18)_0%,rgba(16,44,28,0.12)_45%,transparent_75%)] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Gallery Room Indicator & Audio Guide Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#cfa859]/20">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#e9c878] shadow-[0_0_8px_#e9c878]"></span>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#cfa859]">
              GALERÍA PRINCIPAL · SALA DE HONOR
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleAudio}
              className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#cfa859]/30 bg-[#06120a]/80 hover:bg-[#0d2216] text-[#cfa859] hover:text-[#f6ebd0] text-xs font-mono transition-all duration-300"
              title="Audioguía del Museo"
            >
              {isPlayingAudio ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#e9c878] animate-bounce" />
                  <span className="text-[11px] tracking-wide text-[#e9c878]">Audioguía Activa</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#cfa859]/70 group-hover:text-[#e9c878]" />
                  <span className="text-[11px] tracking-wide">Audioguía Curatorial</span>
                </>
              )}
            </button>

            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a1a10] border border-[#163623] text-[11px] font-mono text-[#a6a193]">
              <Award className="w-3.5 h-3.5 text-[#cfa859]" />
              <span>STUCOM Pelai · Barcelona</span>
            </div>
          </div>
        </div>

        {/* Masterpiece Split: Editorial Statement & Framed Oil Painting */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Curatorial Monograph */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d2015] border border-[#cfa859]/30 text-xs font-mono text-[#e9c878]">
              <Sparkles className="w-3.5 h-3.5 text-[#e9c878]" />
              <span>OBRA EXPUESTA · TEMPORADA 2026</span>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#cfa859]/90 block">
                Ignacio Breñas Muñoz
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-[#f6ebd0] leading-[1.12]">
                La precisión del código. <br />
                <span className="text-gold-gradient italic font-normal">
                  El alma del lienzo al óleo.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#ede7da]/80 font-light leading-relaxed max-w-2xl">
              Desarrollador de software afincado en Barcelona. Concibo cada arquitectura 
              con el rigor, la devoción y la armonía visual de un maestro renacentista. 
              Especializado en <strong className="text-[#f6ebd0] font-medium">TypeScript</strong>, <strong className="text-[#f6ebd0] font-medium">Node.js</strong>, bases de datos relacionales y soluciones on-premise en producción.
            </p>

            {/* Curated Distinctions */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-2">
              <div className="p-3 rounded-lg bg-[#07150c]/80 border border-[#163623] hover:border-[#cfa859]/40 transition-colors">
                <ShieldCheck className="w-4 h-4 text-[#e9c878] mb-1.5" />
                <div className="text-[11px] font-mono text-[#cfa859] uppercase">Actualidad</div>
                <div className="text-xs font-medium text-[#ede7da]">Soterguard Intern</div>
              </div>

              <div className="p-3 rounded-lg bg-[#07150c]/80 border border-[#163623] hover:border-[#cfa859]/40 transition-colors">
                <Terminal className="w-4 h-4 text-[#e9c878] mb-1.5" />
                <div className="text-[11px] font-mono text-[#cfa859] uppercase">Especialidad</div>
                <div className="text-xs font-medium text-[#ede7da]">TypeScript & Node</div>
              </div>

              <div className="p-3 rounded-lg bg-[#07150c]/80 border border-[#163623] hover:border-[#cfa859]/40 transition-colors">
                <Layers className="w-4 h-4 text-[#e9c878] mb-1.5" />
                <div className="text-[11px] font-mono text-[#cfa859] uppercase">Formación</div>
                <div className="text-xs font-medium text-[#ede7da]">CFGS DAW & SMR</div>
              </div>

              <div className="p-3 rounded-lg bg-[#07150c]/80 border border-[#163623] hover:border-[#cfa859]/40 transition-colors">
                <Palette className="w-4 h-4 text-[#e9c878] mb-1.5" />
                <div className="text-[11px] font-mono text-[#cfa859] uppercase">Estética</div>
                <div className="text-xs font-medium text-[#ede7da]">Galería al Óleo</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#obras"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide text-[#040a06] bg-gradient-to-r from-[#e9c878] via-[#cfa859] to-[#b3883b] hover:from-[#f6ebd0] hover:to-[#e9c878] transition-all duration-300 shadow-[0_4px_25px_rgba(207,168,89,0.35)] hover:shadow-[0_8px_35px_rgba(207,168,89,0.55)] hover:scale-102"
              >
                <Palette className="w-4 h-4 text-[#040a06] transition-transform duration-300 group-hover:rotate-12" />
                <span>Explorar la Colección</span>
              </a>

              <a
                href="#contacto"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-medium tracking-wide text-[#f6ebd0] bg-[#07160d] border border-[#cfa859]/40 hover:border-[#e9c878] hover:bg-[#0e2717] transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-[#cfa859] group-hover:text-[#e9c878]" />
                <span>Solicitar Adquisición / Contacto</span>
              </a>
            </div>

          </div>

          {/* Right Column: The Central Oil Masterpiece in Gilded Frame */}
          <div 
            className="lg:col-span-5 flex flex-col items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Museum Spotlight Fixture */}
            <div className="w-24 h-3 bg-[#cfa859]/80 rounded-t-sm shadow-[0_0_15px_rgba(233,200,120,0.5)] mb-3 relative flex items-center justify-center">
              <div className="w-20 h-1 bg-[#f6ebd0] rounded-full blur-[1px]"></div>
            </div>

            {/* Framed Canvas with 3D Tilt */}
            <div 
              ref={frameRef}
              style={{
                transform: `perspective(1000px) rotateX(${frameRotation.x}deg) rotateY(${frameRotation.y}deg)`,
                transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="gilded-frame p-4 sm:p-5 rounded-sm max-w-sm sm:max-w-md w-full bg-[#08150d] relative group"
            >
              {/* Ornate corner embellishments */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#e9c878]"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#e9c878]"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#e9c878]"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#e9c878]"></div>

              {/* The Oil Painting Image (Thick Impasto from Desktop/logo.png) */}
              <div className="relative overflow-hidden rounded-xs shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] border border-[#040905]">
                <img 
                  src="/images/logo-oil.png" 
                  alt="Ignacio Breñas - Óleo sobre lienzo con textura impasto" 
                  className="w-full h-auto aspect-square object-cover filter contrast-[1.05] brightness-95 group-hover:brightness-105 group-hover:scale-102 transition-all duration-700"
                />
                
                {/* Canvas Texture overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030805]/40 via-transparent to-transparent pointer-events-none"></div>

                {/* Subtle light reflection sweep on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </div>

              {/* Museum Brass Label Plaque with mounting screws */}
              <div className="brass-plaque mt-4 p-3.5 text-center rounded-xs">
                <div className="text-[10px] font-mono tracking-[0.25em] text-[#cfa859] uppercase">
                  CATÁLOGO NACIONAL · REGISTRO 2026.01
                </div>
                <div className="font-serif text-base font-bold text-[#f6ebd0] tracking-wider mt-0.5">
                  IGNACIO BREÑAS MUÑOZ
                </div>
                <div className="text-xs text-[#a6a193] font-light italic mt-0.5">
                  Óleo matérico sobre lienzo de lino & Escultura digital
                </div>
                <div className="text-[10px] font-mono text-[#cfa859]/75 mt-1 border-t border-[#cfa859]/20 pt-1 flex items-center justify-between px-2">
                  <span>STUCOM Pelai</span>
                  <span>Colección Permanente</span>
                  <span>Barcelona</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-16">
          <a
            href="#manifiesto"
            className="group flex flex-col items-center gap-2 text-[#cfa859]/70 hover:text-[#e9c878] transition-colors"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.25em]">Sala I · Manifiesto</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#cfa859]" />
          </a>
        </div>

      </div>
    </section>
  );
};
