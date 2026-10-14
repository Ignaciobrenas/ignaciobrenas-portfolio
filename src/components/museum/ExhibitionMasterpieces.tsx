import React, { useState } from 'react';
import { 
  Palette, 
  ExternalLink, 
  Eye, 
  Sparkles, 
  Award, 
  Layers, 
  X,
  Maximize2
} from 'lucide-react';
import { GithubIcon } from './MuseumIcons';

interface Artwork {
  id: string;
  accNumber: string;
  title: string;
  subtitle: string;
  medium: string[];
  description: string;
  curatorNote: string;
  image: string;
  award?: string;
  github: string;
  demo?: string;
  year: string;
}

export const ExhibitionMasterpieces: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const artworks: Artwork[] = [
    {
      id: 'canva-mcp',
      accNumber: 'ACC. NO. 2026.01',
      title: 'Canva Connector MCP',
      subtitle: 'El Escribano Autónomo & Protocolo MCP',
      image: '/images/art-canva-mcp.jpg',
      award: 'Protocolo de IA & Conectividad',
      year: '2026',
      medium: ['Node.js', 'Model Context Protocol (MCP)', 'OAuth 2.0 PKCE', 'Canva API', 'Agentes IA'],
      description: 'Conector de grado de producción que implementa el estándar Model Context Protocol (MCP) y Canva Connect API con autenticación OAuth 2.0 PKCE, capacitando a agentes autónomos de IA para componer, editar y manipular presentaciones de diseño gráfico.',
      curatorNote: 'Una síntesis sublime entre el protocolo de agentes de vanguardia y la orquestación creativa. Los agentes inteligentes dejan de ser meros redactores para convertirse en compositores visuales directos.',
      github: 'https://github.com/Ignaciobrenas/canva-connector-mcp',
    },
    {
      id: 'argus-fraud',
      accNumber: 'ACC. NO. 2026.02',
      title: 'Argus Fraud Radar',
      subtitle: 'El Ojo Vigilante · Detección Bancaria',
      image: '/images/art-argus-radar.jpg',
      award: 'Galardonado UNITA Erasmus+ BIP',
      year: '2026',
      medium: ['PySpark', 'Arquitectura Medallion', 'LightGBM', 'FastAPI', 'Streamlit', 'Python'],
      description: 'Plataforma empresarial de detección de anomalías y fraude financiero en tiempo real. Diseñada sobre una arquitectura de datos Medallion (Bronze/Silver/Gold) procesada con PySpark y modelos predictivos de gradiente LightGBM.',
      curatorNote: 'Premiada internacionalmente en el programa UNITA Erasmus+ BIP. Esta obra combina el procesamiento de grandes volúmenes de datos con una latencia mínima de inferencia en tiempo real.',
      github: 'https://github.com/Ignaciobrenas/Argus-Fraud-Radar',
    },
    {
      id: 'skeleton-meme',
      accNumber: 'ACC. NO. 2025.08',
      title: 'Skeleton-Meme Productivity',
      subtitle: 'Vanitas Digital · Visión por Computador',
      image: '/images/art-skeleton-vision.jpg',
      award: 'Computer Vision & Salud Postural',
      year: '2025',
      medium: ['Python', 'MediaPipe Face Mesh', 'OpenCV', 'Visión Artificial'],
      description: 'Herramienta de ergonomía y vigilancia postural no intrusiva mediante visión por computador. Rastrea la malla geométrica facial (Face Mesh de 468 puntos) para diagnosticar fatiga ocular y distracción frente a la pantalla.',
      curatorNote: 'Evocando la tradición vanitas clásica del Memento Mori, este instrumento alerta al artesano moderno de su propio desgaste postural para preservar su agudeza mental.',
      github: 'https://github.com/Ignaciobrenas/Skeleton-Meme',
    },
    {
      id: 'run-and-eat-2',
      accNumber: 'ACC. NO. 2025.11',
      title: 'RunAndEat 2.0.0',
      subtitle: 'El Banquete Urbano · Sistema Gastronómico',
      image: '/images/art-gastronomy.jpg',
      award: 'Arquitectura Full-Stack Moderna',
      year: '2025',
      medium: ['Laravel 11', 'Vue.js', 'Tailwind CSS', 'Vite', 'MySQL'],
      description: 'Ecosistema de reservas culinarias y dinamización de eventos gastronómicos urbanos. Arquitectura modular con Laravel 11, interfaz reactiva con Vue.js, autenticación blindada y gestión transaccional.',
      curatorNote: 'Un renacimiento integral de la plataforma LAMP originaria, reconcebida con fluidez reactiva, API RESTful desacoplada y diseño editorial refinado.',
      github: 'https://github.com/Ignaciobrenas/RunAndEat-2.0.0',
    },
    {
      id: 'dama-crm',
      accNumber: 'ACC. NO. 2026.03',
      title: 'DAMA-CRM',
      subtitle: 'El Libro Mayor Mercantil · Gestión Corporativa',
      image: '/images/dama.png',
      award: 'Enterprise Data Flow',
      year: '2026',
      medium: ['TypeScript', 'Node.js', 'PostgreSQL', 'PrismaORM'],
      description: 'Sistema empresarial de gestión de relaciones con clientes y ciclo de vida de oportunidades de negocio. Tipado estricto extremo, transacciones atomizadas en PostgreSQL y capa de abstracción PrismaORM.',
      curatorNote: 'Concebido para estructurar y auditar flujos mercantiles complejos con una pureza arquitectónica intachable.',
      github: 'https://github.com/Ignaciobrenas/DAMA-CRM',
    },
  ];

  return (
    <section id="obras" className="relative py-28 overflow-hidden">
      <div className="gallery-divider max-w-5xl mx-auto mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exhibition Room Header */}
        <div className="text-center max-w-3xl mx-auto mb-18 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2015] border border-[#cfa859]/30 text-xs font-mono text-[#cfa859]">
            <Palette className="w-3.5 h-3.5 text-[#e9c878]" />
            <span>SALA II · COLECCIÓN PRINCIPAL AL ÓLEO</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f6ebd0]">
            Obras de Software al Óleo
          </h2>
          <p className="text-sm sm:text-base text-[#a6a193] font-light max-w-2xl mx-auto">
            Cada desarrollo presentado como una pintura al óleo de salón, acompañada de su ficha museística, número de registro curatorial y acceso a su código fuente abierto.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {artworks.map((art) => (
            <div 
              key={art.id}
              className="gilded-frame rounded-sm p-4 bg-[#07150c] flex flex-col justify-between group"
            >
              {/* Picture Spotlight Light */}
              <div className="w-16 h-1.5 bg-[#cfa859]/70 rounded-full mx-auto mb-3 shadow-[0_0_10px_rgba(233,200,120,0.4)]"></div>

              {/* Framed Canvas */}
              <div className="relative overflow-hidden rounded-xs bg-[#030805] aspect-[16/10] sm:aspect-[4/3] border border-[#030805] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
                <img 
                  src={art.image} 
                  alt={art.title} 
                  className={`w-full h-full ${art.id === 'dama-crm' ? 'object-contain p-8 bg-[#0a1b12]' : 'object-cover'} filter contrast-[1.05] brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-700`}
                />
                
                {/* Award Badge Floating on Canvas */}
                {art.award && (
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-[#040a06]/90 border border-[#cfa859]/40 backdrop-blur-md shadow-lg">
                    <Award className="w-3 h-3 text-[#e9c878]" />
                    <span className="text-[10px] font-mono text-[#f6ebd0] font-medium tracking-wide">
                      {art.award}
                    </span>
                  </div>
                )}

                {/* Inspect Button Overlay */}
                <button
                  onClick={() => setSelectedArtwork(art)}
                  className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm bg-[#06120a]/90 text-[#f6ebd0] border border-[#cfa859]/50 hover:bg-[#cfa859] hover:text-[#040a06] transition-all duration-300 text-xs font-mono shadow-md opacity-0 group-hover:opacity-100"
                  title="Inspeccionar obra"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspeccionar</span>
                </button>
              </div>

              {/* Museum Brass Plaque */}
              <div className="brass-plaque mt-4 p-4 rounded-xs flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#cfa859]/80 uppercase tracking-widest border-b border-[#cfa859]/20 pb-1.5 mb-2">
                    <span>{art.accNumber}</span>
                    <span>{art.year}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#f6ebd0] group-hover:text-[#e9c878] transition-colors">
                    {art.title}
                  </h3>
                  <div className="text-xs font-light text-[#cfa859] italic mb-2.5">
                    {art.subtitle}
                  </div>

                  <p className="text-xs text-[#ede7da]/80 font-light leading-relaxed line-clamp-3 mb-3">
                    {art.description}
                  </p>
                </div>

                <div>
                  {/* Medium / Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {art.medium.slice(0, 3).map((m, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-[#0d2216] border border-[#1b4329] text-[#cfa859]"
                      >
                        {m}
                      </span>
                    ))}
                    {art.medium.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-[#a6a193]/70">
                        +{art.medium.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Actions: GitHub & Modal */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#cfa859]/20">
                    <a
                      href={art.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#f6ebd0] hover:text-[#e9c878] transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Ver Código</span>
                    </a>

                    <button
                      onClick={() => setSelectedArtwork(art)}
                      className="inline-flex items-center gap-1 text-xs font-mono text-[#cfa859] hover:text-[#f6ebd0] transition-colors"
                    >
                      <span>Ficha Completa</span>
                      <Maximize2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Museum Artwork Inspection Modal */}
      {selectedArtwork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#030805]/95 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg bg-[#07150c] border border-[#cfa859]/40 shadow-[0_25px_70px_rgba(0,0,0,0.95)] p-6 sm:p-8">
            
            {/* Close Modal Button */}
            <button
              onClick={() => setSelectedArtwork(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#cfa859] hover:text-[#f6ebd0] hover:bg-[#0f2719] border border-[#cfa859]/30 transition-colors"
              aria-label="Cerrar ficha"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Modal Artwork Image */}
              <div className="md:col-span-6 gilded-frame p-3 bg-[#030805] rounded-xs">
                <img 
                  src={selectedArtwork.image} 
                  alt={selectedArtwork.title} 
                  className={`w-full h-auto rounded-xs ${selectedArtwork.id === 'dama-crm' ? 'p-6 bg-[#0a1b12]' : ''}`}
                />
              </div>

              {/* Modal Curatorial Dossier */}
              <div className="md:col-span-6 space-y-4">
                <div className="text-[11px] font-mono text-[#cfa859] tracking-widest uppercase">
                  {selectedArtwork.accNumber} · REGISTRO OFICIAL
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f6ebd0]">
                  {selectedArtwork.title}
                </h3>
                <div className="text-sm italic text-[#cfa859]">
                  {selectedArtwork.subtitle}
                </div>

                <div className="p-3.5 rounded-md bg-[#0a1c11] border-l-2 border-[#e9c878] text-xs text-[#ede7da]/90 font-light italic leading-relaxed">
                  "{selectedArtwork.curatorNote}"
                </div>

                <p className="text-sm text-[#ede7da]/85 font-light leading-relaxed">
                  {selectedArtwork.description}
                </p>

                <div>
                  <span className="text-[11px] font-mono text-[#cfa859] uppercase tracking-wider block mb-2">
                    Técnica & Materiales del Software
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedArtwork.medium.map((m, i) => (
                      <span 
                        key={i} 
                        className="text-xs font-mono px-2.5 py-1 rounded-sm bg-[#0c2014] border border-[#1b4329] text-[#e9c878]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <a
                    href={selectedArtwork.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-semibold text-[#040a06] bg-gradient-to-r from-[#e9c878] to-[#cfa859] hover:from-[#f6ebd0] hover:to-[#e9c878] shadow-md transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    Examinar Repositorio en GitHub
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
