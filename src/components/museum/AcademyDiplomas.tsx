import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  CheckCircle, 
  Calendar, 
  MapPin, 
  Search, 
  ExternalLink,
  Code,
  Sparkles,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { GithubIcon } from './MuseumIcons';
import { academicProjects, type AcademicProject } from '../../data/projects';

export const AcademyDiplomas: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const diplomas = [
    {
      id: 'daw',
      degree: 'CFGS en Desarrollo de Aplicaciones Web (DAW)',
      center: 'Centro de Estudios STUCOM Pelai',
      location: 'Barcelona, España',
      period: '2025 – 2027',
      status: 'Cursando · DAW 2',
      badge: 'Grado Superior',
      description: 'Especialización técnica avanzada en arquitectura web full-stack, frameworks contemporáneos, patrones de diseño de software (DAO, Strategy, MVC), seguridad web y persistencia relacional.',
      highlights: [
        'Desarrollo de clientes reactivos y servicios RESTful',
        'Modelado relacional y transacciones ACID en SQL',
        'Testing exhaustivo con PHPUnit y TDD',
        'Patrones arquitectónicos de la industria',
      ],
    },
    {
      id: 'smr',
      degree: 'CFGM en Sistemas Microinformáticos y Redes (SMR)',
      center: 'Centro de Estudios STUCOM Pelai',
      location: 'Barcelona, España',
      period: '2023 – 2025',
      status: 'Titulado con Distinción',
      badge: 'Grado Medio',
      description: 'Formación profunda en administración de redes de área local, despliegue y hardening de servidores Linux y Windows, virtualización, auditoría y mantenimiento de hardware.',
      highlights: [
        'Administración de sistemas Linux y Windows Server',
        'Configuración de switches, routers y subredes',
        'Virtualización de servidores y almacenamiento',
        'Diagnóstico y soporte técnico a bajo nivel',
      ],
    },
  ];

  const filteredProjects = academicProjects.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesQuery = 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="academia" className="relative py-28 overflow-hidden">
      <div className="gallery-divider max-w-5xl mx-auto mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exhibition Room Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2015] border border-[#cfa859]/30 text-xs font-mono text-[#cfa859]">
            <GraduationCap className="w-3.5 h-3.5 text-[#e9c878]" />
            <span>SALA V · LA ACADEMIA & ARCHIVO DE ESTUDIOS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f6ebd0]">
            Fundamentos de la Academia STUCOM
          </h2>
          <p className="text-sm sm:text-base text-[#a6a193] font-light max-w-xl mx-auto">
            Diplomas oficiales y el archivo completo de más de 20 proyectos académicos estructurados en Java, PHP, QA y Desarrollo Web.
          </p>
        </div>

        {/* Diplomas Cards (Framed Classical Certificates) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {diplomas.map((dip) => (
            <div 
              key={dip.id}
              className="gilded-frame rounded-sm p-6 sm:p-8 bg-gradient-to-br from-[#08180e] via-[#050f09] to-[#030805] relative flex flex-col justify-between"
            >
              <div>
                {/* Header with Seal */}
                <div className="flex items-start justify-between border-b border-[#cfa859]/20 pb-4 mb-5">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#e9c878]">
                      {dip.badge} · {dip.status}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f6ebd0]">
                      {dip.degree}
                    </h3>
                    <div className="text-xs font-mono text-[#cfa859] flex items-center gap-2">
                      <span>{dip.center}</span>
                      <span>·</span>
                      <span>{dip.location}</span>
                    </div>
                  </div>

                  <div className="w-12 h-12 rounded-full border border-[#cfa859]/40 bg-[#0c2315] flex items-center justify-center text-[#e9c878] shrink-0 shadow-lg">
                    <Award className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#ede7da]/85 font-light leading-relaxed mb-5">
                  {dip.description}
                </p>

                {/* Subject highlights */}
                <div className="space-y-2 mb-6">
                  {dip.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#ede7da]/80">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#cfa859]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-[#cfa859] pt-4 border-t border-[#cfa859]/15">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {dip.period}
                </span>
                <span className="text-[#a6a193]/70">
                  Expediente Homologado
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Project Archival Vault Header */}
        <div className="rounded-xl p-6 sm:p-8 bg-[#06140b] border border-[#cfa859]/30 shadow-2xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-[#cfa859]/20 pb-6">
            <div>
              <div className="flex items-center gap-2 text-[#e9c878] font-mono text-xs uppercase tracking-widest mb-1">
                <BookOpen className="w-4 h-4" />
                <span>Archivo Histórico de Prácticas STUCOM</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#f6ebd0]">
                Catálogo de Trabajos Académicos ({academicProjects.length} Obras)
              </h3>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#cfa859] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por tecnología, DAO, tests..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-full bg-[#030905] border border-[#1b4329] focus:border-[#cfa859] text-xs text-[#f6ebd0] placeholder-[#a6a193]/60 focus:outline-none font-mono transition-colors"
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {[
              { id: 'all', label: 'Todos los Proyectos' },
              { id: 'java', label: 'Java & POO Estricto' },
              { id: 'php', label: 'PHP & Patrones Strategy' },
              { id: 'qa', label: 'QA, Debugging & Tests' },
              { id: 'web', label: 'Desarrollo Web & LAMP' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-[#cfa859] text-[#040a06] font-semibold'
                    : 'bg-[#091e13] text-[#ede7da]/80 border border-[#163623] hover:border-[#cfa859]/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Archival Catalog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="p-4 rounded-lg bg-[#040b07] border border-[#163623] hover:border-[#cfa859]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#cfa859]/75 uppercase mb-1.5">
                    <span>{proj.category.toUpperCase()}</span>
                    {proj.highlights && (
                      <span className="text-[#e9c878] truncate max-w-[150px]">
                        {proj.highlights}
                      </span>
                    )}
                  </div>

                  <h4 className="font-serif text-sm font-semibold text-[#f6ebd0] group-hover:text-[#e9c878] transition-colors mb-1.5">
                    {proj.name}
                  </h4>

                  <p className="text-xs text-[#a6a193] font-light leading-relaxed mb-3 line-clamp-2">
                    {proj.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {proj.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded-xs bg-[#0b2114] text-[#cfa859]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ede7da]/70 hover:text-[#e9c878] transition-colors pt-2 border-t border-[#163623] w-full"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Ver Repositorio STUCOM</span>
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
