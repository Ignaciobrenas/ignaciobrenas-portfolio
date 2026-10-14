import React from 'react';
import { 
  Scroll, 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface ProvenanceRecord {
  id: string;
  role: string;
  institution: string;
  period: string;
  location: string;
  badge: string;
  description: string;
  achievements: string[];
  mediums: string[];
}

export const CuratedProvenance: React.FC = () => {
  const records: ProvenanceRecord[] = [
    {
      id: 'soterguard',
      role: 'Software Developer Intern',
      institution: 'Soterguard',
      period: 'Mayo 2026 – Actualidad',
      location: 'Barcelona / Remoto',
      badge: 'Posición Activa en Producción',
      description: 'Ingeniería de software y despliegues para soluciones de cliente y productos On-Premise bajo metodologías ágiles y control riguroso de versiones.',
      achievements: [
        'Desarrollo y mantenimiento de arquitectura de servidor y endpoints RESTful con Node.js, TypeScript y Python.',
        'Modelado, migraciones y optimización de esquemas en PostgreSQL mediante PrismaORM.',
        'Aprovisionamiento y despliegue de contenedores Docker y entornos virtualizados con LXC y WSL.',
        'Colaboración activa en equipo mediante Scrum, revisiones de código y flujo de trabajo GitFlow.',
      ],
      mediums: ['TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'PrismaORM', 'Docker', 'LXC', 'Agile'],
    },
    {
      id: 'vimtech',
      role: 'Técnico Informático en Prácticas',
      institution: 'VimTech',
      period: 'Septiembre 2024 – Marzo 2025',
      location: 'El Masnou, Barcelona',
      badge: 'Taller de Hardware & Sistemas',
      description: 'Mantenimiento preventivo, diagnóstico minucioso y reparación de equipos de computación con alta especialización en arquitectura Apple.',
      achievements: [
        'Diagnóstico y resolución de fallos electrónicos y físicos en hardware corporativo y de consumo.',
        'Instalación, parametrización y securización de sistemas operativos Linux, macOS y Windows.',
        'Asesoramiento tecnológico a medida y gestión de incidencias de usuarios.',
      ],
      mediums: ['Hardware Diagnostics', 'macOS & Apple Ecosystem', 'Linux OS', 'Windows', 'Redes Locales'],
    },
    {
      id: 'ajma',
      role: 'Voluntariado Técnico & Webmaster',
      institution: 'Asociación Juvenil Musical AJMA',
      period: 'Marzo 2023 – Agosto 2025',
      location: 'Barcelona',
      badge: 'Servicio Comunitario & Web',
      description: 'Dirección técnica digital y soporte integral para la infraestructura de la asociación y sus eventos públicos.',
      achievements: [
        'Diseño, despliegue y mantenimiento continuo de la plataforma web oficial de la asociación.',
        'Soporte informático para estaciones de trabajo y configuración de redes en sedes.',
        'Operación de sistemas audiovisuales técnicos (cámaras, sonido en vivo) durante festivales y conciertos.',
      ],
      mediums: ['Web Design', 'Soporte TI', 'Audio/Vídeo en Vivo', 'Gestión de Contenidos'],
    },
  ];

  return (
    <section id="trayectoria" className="relative py-28 overflow-hidden">
      <div className="gallery-divider max-w-5xl mx-auto mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exhibition Room Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2015] border border-[#cfa859]/30 text-xs font-mono text-[#cfa859]">
            <Scroll className="w-3.5 h-3.5 text-[#e9c878]" />
            <span>SALA IV · PROVENIENCIA & TRAYECTORIA</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f6ebd0]">
            Anales de la Trayectoria Profesional
          </h2>
          <p className="text-sm sm:text-base text-[#a6a193] font-light max-w-xl mx-auto">
            El registro cronológico de responsabilidades, estancias técnicas y aportaciones en entornos de producción y servicio tecnológico.
          </p>
        </div>

        {/* Timeline Salon Hang */}
        <div className="relative border-l border-[#cfa859]/30 ml-4 sm:ml-8 lg:ml-12 pl-6 sm:pl-10 space-y-14">
          
          {records.map((rec) => (
            <div 
              key={rec.id}
              className="relative group"
            >
              {/* Timeline Golden Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#050e08] border-2 border-[#cfa859] flex items-center justify-center shadow-[0_0_12px_rgba(207,168,89,0.5)] group-hover:scale-125 group-hover:bg-[#e9c878] transition-all duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-[#e9c878] group-hover:bg-[#030805]"></div>
              </div>

              {/* Record Exhibition Plaque Card */}
              <div className="rounded-xl p-6 sm:p-8 bg-gradient-to-r from-[#07160d] via-[#050e08] to-[#040905] border border-[#cfa859]/25 hover:border-[#cfa859]/50 shadow-[0_15px_40px_rgba(0,0,0,0.7)] transition-all duration-300">
                
                {/* Header of Record */}
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#cfa859]/20 pb-4 mb-5">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0b2114] border border-[#cfa859]/30 text-[10px] font-mono text-[#e9c878] mb-2">
                      <Sparkles className="w-3 h-3" />
                      {rec.badge}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f6ebd0] group-hover:text-[#e9c878] transition-colors">
                      {rec.role}
                    </h3>
                    <div className="text-sm font-medium text-[#cfa859] flex items-center gap-2 mt-0.5">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{rec.institution}</span>
                    </div>
                  </div>

                  <div className="text-right flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#ede7da]/90">
                      <Calendar className="w-3.5 h-3.5 text-[#cfa859]" />
                      <span>{rec.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#a6a193]">
                      <MapPin className="w-3.5 h-3.5 text-[#cfa859]/70" />
                      <span>{rec.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#ede7da]/85 font-light leading-relaxed mb-5">
                  {rec.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 mb-6">
                  {rec.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#ede7da]/80">
                      <CheckCircle2 className="w-4 h-4 text-[#cfa859] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Mediums Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#cfa859]/15">
                  <span className="text-[10px] font-mono uppercase text-[#a6a193] mr-1">
                    Técnicas:
                  </span>
                  {rec.mediums.map((med, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-sm bg-[#091f13] border border-[#184227] text-[#cfa859]"
                    >
                      {med}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
