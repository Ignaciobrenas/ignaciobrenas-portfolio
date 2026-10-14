import React, { useState } from 'react';
import { 
  Layers, 
  Code2, 
  Boxes, 
  Database, 
  Server, 
  Brain, 
  Sparkles, 
  Flame, 
  Terminal, 
  CheckCircle,
  Eye,
  Sliders,
  Cpu,
  Globe,
  HardDrive,
  GitBranch
} from 'lucide-react';

interface ToolItem {
  id: string;
  name: string;
  level: string;
  description: string;
  color: string;
  icon: any;
}

interface VitrineCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  tools: ToolItem[];
}

export const AtelierInstruments: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories: VitrineCategory[] = [
    {
      id: 'languages',
      title: 'Lenguajes Fundacionales',
      subtitle: 'La gramática pura de la máquina',
      icon: Code2,
      tools: [
        { id: 'ts', name: 'TypeScript', level: 'Avanzado', description: 'Tipado estricto, contratos de interfaces y arquitecturas escalables.', color: '#3178c6', icon: Code2 },
        { id: 'js', name: 'JavaScript (ES6+)', level: 'Avanzado', description: 'Programación asíncrona, event loops y manipulación reactiva.', color: '#f7df1e', icon: Terminal },
        { id: 'node', name: 'Node.js', level: 'Avanzado', description: 'Servicios de servidor, APIs RESTful de baja latencia y microservicios.', color: '#339933', icon: Cpu },
        { id: 'py', name: 'Python', level: 'Competente', description: 'Pipelines analíticos, automatización y modelos de visión/ML.', color: '#3776ab', icon: Sparkles },
        { id: 'php', name: 'PHP 8.x', level: 'Avanzado', description: 'Backend estricto en STUCOM, patrones Strategy y tests PHPUnit.', color: '#777bb4', icon: Terminal },
        { id: 'java', name: 'Java', level: 'Competente', description: 'Principios de POO puros, patrón DAO, JDBC y concurrencia.', color: '#ed8b00', icon: Cpu },
      ]
    },
    {
      id: 'frameworks',
      title: 'Marcos & Estructuras',
      subtitle: 'El andamiaje de la experiencia interactiva',
      icon: Boxes,
      tools: [
        { id: 'react', name: 'React 18 / 19', level: 'Avanzado', description: 'Componentes declarativos, hooks avanzados, optimización de ciclo de vida.', color: '#61dafb', icon: Layers },
        { id: 'astro', name: 'Astro', level: 'Avanzado', description: 'Arquitectura de islas, rendimiento de carga estática ultrarrápida.', color: '#ff5d01', icon: Globe },
        { id: 'three', name: 'Three.js / WebGL', level: 'Intermedio', description: 'Escenas 3D interactivas, shaders, iluminación y cámaras orbitales.', color: '#00ffff', icon: Eye },
        { id: 'laravel', name: 'Laravel 11', level: 'Competente', description: 'Arquitectura MVC empresarial, Eloquent ORM y autenticación.', color: '#ff2d20', icon: Boxes },
        { id: 'symfony', name: 'Symfony', level: 'Intermedio', description: 'Framework robusto PHP, inyección de dependencias modular.', color: '#ffffff', icon: Layers },
      ]
    },
    {
      id: 'databases',
      title: 'Cámaras de Persistencia',
      subtitle: 'El archivo estructurado de la memoria',
      icon: Database,
      tools: [
        { id: 'postgres', name: 'PostgreSQL', level: 'Avanzado', description: 'Consultas relacionales complejas, índices, transacciones ACID.', color: '#4169e1', icon: Database },
        { id: 'prisma', name: 'PrismaORM', level: 'Avanzado', description: 'Modelado relacional declarativo, migraciones y seguridad de tipos en TypeScript.', color: '#2d3748', icon: HardDrive },
        { id: 'mysql', name: 'MySQL', level: 'Avanzado', description: 'Diseño de esquemas relacionales, triggers y procedimientos almacenados.', color: '#4479a1', icon: Database },
      ]
    },
    {
      id: 'infrastructure',
      title: 'Sistemas & Virtualización',
      subtitle: 'La forja del entorno de ejecución',
      icon: Server,
      tools: [
        { id: 'docker', name: 'Docker & LXC', level: 'Competente', description: 'Aislamiento de servicios, contenedores ligeros en producción y Compose.', color: '#2496ed', icon: Server },
        { id: 'linux', name: 'Linux SysAdmin & WSL', level: 'Avanzado', description: 'Administración de servidores, automatizaciones Bash y políticas POSIX.', color: '#fcc624', icon: Terminal },
        { id: 'git', name: 'Git & GitHub CI/CD', level: 'Avanzado', description: 'Control de versiones formal, GitFlow, Pull Requests y auditoría de código.', color: '#f05032', icon: GitBranch },
      ]
    },
    {
      id: 'ai-data',
      title: 'Inteligencia & Visión',
      subtitle: 'La síntesis de datos y percepción artificial',
      icon: Brain,
      tools: [
        { id: 'pyspark', name: 'PySpark & Pandas', level: 'Competente', description: 'Procesamiento distribuido masivo y arquitectura Medallion.', color: '#e25a1c', icon: Brain },
        { id: 'mediapipe', name: 'MediaPipe & OpenCV', level: 'Intermedio', description: 'Geometría facial en tiempo real, detección de contornos y visión.', color: '#00c853', icon: Eye },
        { id: 'powerbi', name: 'Power BI', level: 'Competente', description: 'Cuadros de mando ejecutivos e inteligencia de negocios.', color: '#f2c811', icon: Sliders },
      ]
    }
  ];

  const filteredCategories = activeCategory === 'all' 
    ? categories 
    : categories.filter(c => c.id === activeCategory);

  return (
    <section id="atelier" className="relative py-28 overflow-hidden">
      <div className="gallery-divider max-w-5xl mx-auto mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exhibition Room Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2015] border border-[#cfa859]/30 text-xs font-mono text-[#cfa859]">
            <Layers className="w-3.5 h-3.5 text-[#e9c878]" />
            <span>SALA III · EL ATELIER DEL ARTESANO</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f6ebd0]">
            Instrumentos & Vitrinas Técnicas
          </h2>
          <p className="text-sm sm:text-base text-[#a6a193] font-light max-w-xl mx-auto">
            El repertorio de tecnologías con las que compongo soluciones de software. Cada herramienta clasificada por su dominio e impacto en producción.
          </p>
        </div>

        {/* Vitrine Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-[#cfa859] text-[#040a06] font-semibold shadow-[0_0_15px_rgba(207,168,89,0.35)]'
                : 'bg-[#08150d] text-[#ede7da]/80 border border-[#163623] hover:border-[#cfa859]/40'
            }`}
          >
            Todas las Vitrinas
          </button>
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#cfa859] text-[#040a06] font-semibold shadow-[0_0_15px_rgba(207,168,89,0.35)]'
                    : 'bg-[#08150d] text-[#ede7da]/80 border border-[#163623] hover:border-[#cfa859]/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Vitrine Showcases */}
        <div className="space-y-12">
          {filteredCategories.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <div 
                key={cat.id}
                className="rounded-xl p-6 sm:p-8 bg-gradient-to-b from-[#08170e]/90 to-[#040905]/95 border border-[#cfa859]/25 shadow-[0_15px_40px_rgba(0,0,0,0.7)]"
              >
                {/* Vitrine Header */}
                <div className="flex items-center justify-between border-b border-[#cfa859]/20 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-[#0e2718] border border-[#cfa859]/40 flex items-center justify-center text-[#e9c878]">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f6ebd0]">
                        {cat.title}
                      </h3>
                      <span className="text-xs font-mono text-[#a6a193]">
                        {cat.subtitle}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#cfa859]/70 uppercase tracking-widest hidden sm:inline-block">
                    {cat.tools.length} Instrumentos
                  </span>
                </div>

                {/* Grid of Tools in Vitrine */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.tools.map((tool) => {
                    const ToolIcon = tool.icon;
                    return (
                      <div
                        key={tool.id}
                        className="glass-vitrine p-4 rounded-lg flex items-start gap-3.5 group hover:translate-y-[-2px]"
                      >
                        {/* Animated Lucide Icon with halo */}
                        <div 
                          className="w-10 h-10 rounded-md bg-[#050f09] border border-[#1c452b] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:border-[#cfa859]"
                        >
                          <ToolIcon className="w-5 h-5 text-[#cfa859] group-hover:text-[#e9c878]" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-serif text-sm font-semibold text-[#f6ebd0] group-hover:text-[#e9c878] transition-colors truncate">
                              {tool.name}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#0a1e12] border border-[#cfa859]/30 text-[#e9c878]">
                              {tool.level}
                            </span>
                          </div>

                          <p className="text-xs text-[#a6a193] font-light leading-relaxed line-clamp-2">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
