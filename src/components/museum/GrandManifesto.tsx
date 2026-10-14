import React, { useState } from 'react';
import { 
  Scroll, 
  Feather, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  Quote, 
  Check, 
  Compass,
  Bookmark
} from 'lucide-react';

export const GrandManifesto: React.FC = () => {
  const [activeThesis, setActiveThesis] = useState<number>(0);

  const theses = [
    {
      number: 'I',
      title: 'La Belleza de la Estructura Invisible',
      short: 'Arquitectura Limpia & Modularidad',
      quote: 'Un cuadro no se sostiene por el marco, sino por el bastidor; el software no se define por su superficie, sino por la pureza de sus cimientos.',
      elaboration: 'El código limpio no es un capricho estético; es una necesidad ontológica. Cada función debe poseer una única razón de existir, cada módulo un límite claro y cada interfaz un contrato inquebrantable. La verdadera maestría reside en concebir sistemas tan inteligibles que su mantenimiento resulte un deleite.',
    },
    {
      number: 'II',
      title: 'La Geometría Sagrada del Tipado Estricto',
      short: 'TypeScript & Seguridad de Tipos',
      quote: 'El tipo es el boceto previo al empaste. Quien pinta sin dibujo yerra el trazo; quien programa sin tipos yerra en producción.',
      elaboration: 'Mediante TypeScript eliminamos la ambigüedad en tiempo de compilación. Las interfaces complejas, los genéricos restringidos y el tipado exhaustivo protegen la integridad de la solución, blindando los datos contra regresiones y estados inconsistentes.',
    },
    {
      number: 'III',
      title: 'La Memoria Monumental de los Datos',
      short: 'PostgreSQL, ACID & PrismaORM',
      quote: 'Los datos son los archivos inmutables de la civilización moderna; custodiarlos exige el rigor de un archivero pontificio.',
      elaboration: 'El modelado relacional no admite atajos. Índices ponderados, claves foráneas estrictas, normalización quirúrgica y transacciones ACID garantizan que cada transacción mercantil y registro permanezca incorrupto a lo largo de los años.',
    },
    {
      number: 'IV',
      title: 'La Forja del Silicio & La Infraestructura Viva',
      short: 'Linux, Docker, LXC & On-Premise',
      quote: 'El pintor conoce sus pigmentos; el ingeniero de software debe conocer las entrañas del kernel y la virtualización donde habita su creación.',
      elaboration: 'No dependemos de cajas negras. Desde la gestión de permisos POSIX y el scripting en Bash en entornos Linux, hasta el empaquetado milimétrico en Docker y contenedores LXC, el artesano controla cada vatio y proceso en producción.',
    },
    {
      number: 'V',
      title: 'El Rigor Académico & La Escuela STUCOM',
      short: 'Patrones DAO, Strategy, MVC & TDD',
      quote: 'La inspiración sin método es efímera. La técnica aprendida en el taller y validada por cientos de tests es lo que consagra al maestro.',
      elaboration: 'La formación en STUCOM Pelai (DAW & SMR) cimienta un respeto absoluto por la algoritmia clásica, los patrones de diseño consolidados (Strategy, DAO, Singleton, MVC) y el desarrollo guiado por pruebas (TDD) donde cada caso límite queda auditado.',
    },
    {
      number: 'VI',
      title: 'El Pincel Cósmico de la Inteligencia Artificial',
      short: 'Agentes MCP, PySpark & Visión',
      quote: 'La inteligencia artificial no suplanta la mano del artista; la dota de un astrolabe con el que navegar océanos de datos inexplorados.',
      elaboration: 'A través del Model Context Protocol (MCP) y pipelines distribuidos con PySpark, convertimos modelos generativos y predictivos en herramientas orquestadas al servicio del raciocinio y la automatización empresarial.',
    },
    {
      number: 'VII',
      title: 'El Compromiso Ético de la Durabilidad',
      short: 'Software Sólido para el Mañana',
      quote: 'No firmes una obra que no desearías ver expuesta dentro de una década. Firma sólo lo que resiste el escrutinio del tiempo.',
      elaboration: 'Cada proyecto que sale de mi despacho en Barcelona está concebido con responsabilidad, vocación de servicio y el orgullo artesanal de quien sabe que la excelencia no es un acto fortuito, sino un hábito continuo.',
    },
  ];

  return (
    <section id="manifiesto-completo" className="relative py-28 overflow-hidden">
      <div className="gallery-divider max-w-5xl mx-auto mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exhibition Room Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2015] border border-[#cfa859]/30 text-xs font-mono text-[#cfa859]">
            <Feather className="w-3.5 h-3.5 text-[#e9c878]" />
            <span>DOCUMENTO FUNDACIONAL · MANIFIESTO DEL ARTESANO</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f6ebd0]">
            El Manifiesto de las Siete Tesis
          </h2>
          <p className="text-sm sm:text-base text-[#a6a193] font-light max-w-xl mx-auto">
            Principios irrenunciables que gobiernan cada arquitectura, commit y solución técnica concebida por Ignacio Breñas Muñoz.
          </p>
        </div>

        {/* Parchment Manifesto Presentation Box */}
        <div className="rounded-xl p-8 sm:p-12 bg-gradient-to-br from-[#08180e] via-[#050f09] to-[#030805] border-2 border-[#cfa859]/35 shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative overflow-hidden">
          
          {/* Subtle Wax Seal background */}
          <div className="absolute top-10 right-10 w-48 h-48 opacity-[0.03] pointer-events-none select-none">
            <img src="/images/logo.png" alt="Sello" className="w-full h-full object-contain filter invert" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Nav: 7 Theses directory */}
            <div className="lg:col-span-5 space-y-2">
              <span className="text-[11px] font-mono tracking-widest text-[#cfa859] uppercase block mb-3">
                Índice de Tesis Curatoriales
              </span>

              {theses.map((t, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveThesis(idx)}
                  className={`w-full text-left p-3.5 rounded-lg border transition-all duration-300 flex items-center justify-between ${
                    activeThesis === idx
                      ? 'bg-[#0e2718] border-[#e9c878] shadow-md translate-x-1'
                      : 'bg-[#050e08] border-[#163623] hover:border-[#cfa859]/40 hover:bg-[#091a10]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#050d07] border border-[#cfa859]/40 flex items-center justify-center font-serif text-xs font-bold text-[#e9c878]">
                      {t.number}
                    </span>
                    <div>
                      <span className="font-serif text-xs sm:text-sm font-semibold text-[#f6ebd0] block">
                        {t.title}
                      </span>
                      <span className="text-[10px] font-mono text-[#a6a193]">
                        {t.short}
                      </span>
                    </div>
                  </div>
                  {activeThesis === idx && (
                    <Sparkles className="w-3.5 h-3.5 text-[#e9c878] shrink-0" />
                  )}
                </button>
              ))}
            </div>

            {/* Right Display: Expanded Manifesto Plaque */}
            <div className="lg:col-span-7 bg-[#06120a] p-8 sm:p-10 rounded-lg border border-[#cfa859]/30 relative shadow-inner flex flex-col justify-between min-h-[460px]">
              
              <div>
                <div className="flex items-center justify-between border-b border-[#cfa859]/20 pb-4 mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#cfa859] uppercase tracking-widest">
                    <Bookmark className="w-4 h-4 text-[#e9c878]" />
                    <span>Tesis Curatorial Nº {theses[activeThesis].number}</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#a6a193]">
                    Barcelona · 2026
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f6ebd0] mb-4">
                  {theses[activeThesis].title}
                </h3>

                {/* Classical Quote Callout */}
                <div className="relative pl-6 py-2 my-6 border-l-2 border-[#e9c878] bg-[#091c11]/60 rounded-r-md">
                  <Quote className="w-5 h-5 text-[#cfa859]/40 absolute top-2 left-1.5 -translate-x-1/2" />
                  <p className="font-serif text-sm sm:text-base italic text-[#f6ebd0] leading-relaxed">
                    "{theses[activeThesis].quote}"
                  </p>
                </div>

                {/* Elaboration */}
                <p className="text-sm sm:text-base text-[#ede7da]/85 font-light leading-relaxed">
                  {theses[activeThesis].elaboration}
                </p>
              </div>

              {/* Artisan Seal & Signature */}
              <div className="pt-8 mt-8 border-t border-[#cfa859]/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-[#cfa859]/40 p-1 bg-[#091e12]">
                    <img src="/images/logo.png" alt="Sello" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="font-serif text-xs font-bold text-[#f6ebd0] block">
                      Ignacio Breñas Muñoz
                    </span>
                    <span className="text-[10px] font-mono text-[#cfa859]">
                      Desarrollador de Software & Artesano Digital
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-[#a6a193] block">
                    STUCOM Pelai · Barcelona
                  </span>
                  <span className="text-[10px] font-mono text-[#e9c878]">
                    Vigencia Permanente
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
