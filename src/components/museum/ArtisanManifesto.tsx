import React from 'react';
import { 
  BookOpen, 
  MapPin, 
  Mail, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Sparkles,
  ShieldCheck,
  Feather
} from 'lucide-react';

export const ArtisanManifesto: React.FC = () => {
  const stats = [
    { value: '2+', label: 'Años de Trayectoria Práctica', detail: 'Entornos de producción reales' },
    { value: '30+', label: 'Repositorios Catalogados', detail: 'Arquitecturas abiertas y auditables' },
    { value: '100%', label: 'Compromiso & Rigor', detail: 'Estándares de calidad y testing' },
    { value: 'DAW 2', label: 'Especialización STUCOM', detail: 'Desarrollo de Aplicaciones Web' },
  ];

  const softSkills = [
    'Liderazgo Técnico',
    'Organización Metódica',
    'Resolución de Problemas Complejos',
    'Trabajo en Equipo Colaborativo',
    'Proactividad & Adaptabilidad Rápida',
    'Metodologías Agile & GitFlow',
  ];

  return (
    <section id="manifiesto" className="relative py-28 overflow-hidden">
      {/* Background Section Separation Line */}
      <div className="gallery-divider max-w-5xl mx-auto mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exhibition Room Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2015] border border-[#cfa859]/30 text-xs font-mono text-[#cfa859]">
            <BookOpen className="w-3.5 h-3.5 text-[#e9c878]" />
            <span>SALA I · MONOGRAFÍA DEL ARTESANO</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f6ebd0]">
            El Manifiesto de la Creación
          </h2>
          <p className="text-sm sm:text-base text-[#a6a193] font-light max-w-xl mx-auto">
            "El buen software no se escribe por inercia; se esculpe con la misma templanza, precisión y elegancia con la que se empasta un lienzo de óleo."
          </p>
        </div>

        {/* Main Monograph Card with subtle embossed transparent logo in background */}
        <div className="relative rounded-xl p-8 sm:p-12 lg:p-14 bg-gradient-to-br from-[#07160d]/90 via-[#050f09]/95 to-[#040905] border border-[#cfa859]/25 shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden">
          
          {/* Transparent Logo Watermark in background */}
          <div className="absolute -right-10 -bottom-10 w-96 h-96 opacity-[0.035] pointer-events-none select-none">
            <img src="/images/logo.png" alt="Monograma de fondo" className="w-full h-full object-contain filter invert" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative z-10">
            
            {/* Left Column: Biography & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-2.5 text-[#cfa859] font-mono text-xs uppercase tracking-widest">
                <Feather className="w-4 h-4 text-[#e9c878]" />
                <span>Perfil & Filosofía de Trabajo</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#f6ebd0]">
                Ignacio Breñas Muñoz
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#ede7da]/85 font-light leading-relaxed">
                <p>
                  Afincado en <strong className="text-[#f6ebd0] font-normal">Barcelona, España</strong> y disponible para posiciones en Barcelona y alrededores (así como esquemas híbridos o remotos), mi vocación como desarrollador de software nace del aprecio por la estructura impecable y la solidez técnica. 
                </p>
                <p>
                  Cuento con una sólida base forjada en el <span className="text-[#e9c878]">Centro de Estudios STUCOM Pelai</span>, cursando tanto el <strong className="text-[#f6ebd0] font-normal">CFGS en Desarrollo de Aplicaciones Web (DAW)</strong> como el <strong className="text-[#f6ebd0] font-normal">CFGM en Sistemas Microinformáticos y Redes (SMR)</strong>. Esta dualidad me otorga una perspectiva integral: comprendo desde la infraestructura de redes y virtualización hasta el código de front-end y la lógica de servidor más refinada.
                </p>
                <p>
                  Actualmente ejerzo como <span className="text-[#e9c878] font-medium">Software Developer Intern en Soterguard</span>, desarrollando soluciones on-premise, APIs RESTful de alto rendimiento con Node.js y TypeScript, optimización de bases de datos PostgreSQL con PrismaORM y despliegues virtualizados mediante Docker y contenedores LXC.
                </p>
              </div>

              {/* Soft Skills Badges */}
              <div className="pt-4 space-y-3">
                <span className="text-xs font-mono text-[#cfa859] uppercase tracking-wider block">
                  Cualidades del Oficio & Ética de Trabajo
                </span>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <span 
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0c1e13] border border-[#1b4329] text-xs text-[#ede7da] hover:border-[#cfa859]/50 transition-colors"
                    >
                      <Sparkles className="w-3 h-3 text-[#cfa859]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Curatorial Dossier & Contact Essentials */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Curator Dossier Box */}
              <div className="p-6 rounded-lg bg-[#06120a] border border-[#cfa859]/30 relative shadow-inner">
                <div className="text-[11px] font-mono tracking-widest text-[#cfa859] uppercase mb-4 flex items-center justify-between border-b border-[#cfa859]/20 pb-2">
                  <span>EXPEDIENTE CURATORIAL</span>
                  <Award className="w-4 h-4 text-[#e9c878]" />
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#cfa859] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#a6a193] block text-[11px]">Residencia & Entorno</span>
                      <span className="text-[#ede7da] font-medium block">Barcelona, España</span>
                      <span className="text-[#a6a193] text-[10px] font-mono block mt-0.5 text-[#e9c878]/90">
                        Disponible para Barcelona y alrededores
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#cfa859] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#a6a193] block text-[11px]">Despacho Electrónico</span>
                      <a href="mailto:ignaciobrenas@gmail.com" className="text-[#e9c878] hover:underline font-mono">
                        ignaciobrenas@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#cfa859] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#a6a193] block text-[11px]">Disponibilidad Profesional</span>
                      <span className="text-[#ede7da] font-mono">
                        Inmediata (Híbrido / Presencial / Remoto)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Briefcase className="w-4 h-4 text-[#cfa859] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#a6a193] block text-[11px]">Posición Actual</span>
                      <span className="text-[#ede7da]">Software Developer Intern @ Soterguard</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-4 h-4 text-[#cfa859] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#a6a193] block text-[11px]">Alma Máter</span>
                      <span className="text-[#ede7da]">STUCOM Pelai (Barcelona)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-[#cfa859]/15">
                    <ShieldCheck className="w-4 h-4 text-[#e9c878] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#a6a193] block text-[11px]">Idiomas</span>
                      <span className="text-[#ede7da]">Castellano (Nativo) · Inglés (Técnico / Profesional)</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Statistical Pedestals */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, i) => (
                  <div 
                    key={i}
                    className="p-4 rounded-lg bg-[#08150d] border border-[#163623] hover:border-[#cfa859]/30 transition-all duration-300 text-center"
                  >
                    <div className="font-serif text-2xl font-bold text-gold-gradient">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-medium text-[#ede7da] mt-1">
                      {stat.label}
                    </div>
                    <div className="text-[9px] font-mono text-[#a6a193]/70 mt-0.5">
                      {stat.detail}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
