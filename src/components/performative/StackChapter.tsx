import React from 'react';
import { useTranslation } from 'react-i18next';
import { Bot, Code2, Database, Layers, Server, TestTube2, Terminal, Cpu, Zap, Activity, RefreshCw } from 'lucide-react';
import { 
  SiTypescript, 
  SiNodedotjs, 
  SiReact, 
  SiNextdotjs, 
  SiAstro, 
  SiTailwindcss, 
  SiPython, 
  SiDocker, 
  SiPostgresql, 
  SiPrisma, 
  SiGit, 
  SiGithub, 
  SiAnthropic, 
  SiN8N, 
  SiFastapi, 
  SiApachespark, 
  SiPhp, 
  SiMysql, 
  SiLaravel, 
  SiRust, 
  SiGo, 
  SiClickhouse, 
  SiThreedotjs, 
  SiVuedotjs, 
  SiVite, 
  SiCloudflare, 
  SiVercel, 
  SiNginx, 
  SiGithubactions, 
  SiKubernetes, 
  SiTerraform, 
  SiJira, 
  SiVitest, 
  SiConfluence, 
  SiCypress,
  SiLinuxcontainers,
  SiUbuntu,
  SiDebian,
  SiKalilinux,
  SiLinux
} from 'react-icons/si';

interface KeycapItem {
  name: string;
  type: 'daily' | 'prod' | 'explore';
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface StackCategory {
  titleKey: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  keys: KeycapItem[];
}

export const StackChapter: React.FC = () => {
  const { t } = useTranslation();

  const stackCategories: StackCategory[] = [
    {
      titleKey: 'stack.categories.languages',
      icon: Code2,
      accentColor: '#3178C6',
      keys: [
        { name: 'TypeScript', type: 'daily', icon: SiTypescript, color: '#3178C6' },
        { name: 'Node.js', type: 'daily', icon: SiNodedotjs, color: '#5FA04E' },
        { name: 'Python', type: 'daily', icon: SiPython, color: '#3776AB' },
        { name: 'PHP 8.x', type: 'prod', icon: SiPhp, color: '#777BB4' },
        { name: 'SQL', type: 'daily', icon: Database, color: '#4169E1' },
        { name: 'HTML5 & CSS3', type: 'daily', icon: Code2, color: '#E34F26' },
        { name: 'Rust', type: 'explore', icon: SiRust, color: '#DEA584' },
        { name: 'Go', type: 'explore', icon: SiGo, color: '#00ADD8' },
      ],
    },
    {
      titleKey: 'stack.categories.backend',
      icon: Database,
      accentColor: '#10b981',
      keys: [
        { name: 'Claude Code', type: 'daily', icon: SiAnthropic, color: '#D97706' },
        { name: 'Model Context Protocol (MCP)', type: 'daily', icon: Layers, color: '#10B981' },
        { name: 'FastAPI', type: 'daily', icon: SiFastapi, color: '#009688' },
        { name: 'PostgreSQL', type: 'daily', icon: SiPostgresql, color: '#4169E1' },
        { name: 'Prisma ORM', type: 'daily', icon: SiPrisma, color: '#5A67D8' },
        { name: 'Laravel 11', type: 'prod', icon: SiLaravel, color: '#FF2D20' },
        { name: 'PySpark (Big Data)', type: 'prod', icon: SiApachespark, color: '#E25A1C' },
        { name: 'MySQL', type: 'prod', icon: SiMysql, color: '#4479A1' },
        { name: 'n8n Workflows', type: 'prod', icon: SiN8N, color: '#EA4B71' },
        { name: 'ClickHouse', type: 'explore', icon: SiClickhouse, color: '#FFCC01' },
      ],
    },
    {
      titleKey: 'stack.categories.frontend',
      icon: Layers,
      accentColor: '#38bdf8',
      keys: [
        { name: 'React 19', type: 'daily', icon: SiReact, color: '#61DAFB' },
        { name: 'Tailwind CSS', type: 'daily', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Astro', type: 'daily', icon: SiAstro, color: '#BC52EE' },
        { name: 'Three.js / WebGL', type: 'prod', icon: SiThreedotjs, color: '#FFFFFF' },
        { name: 'Next.js', type: 'prod', icon: SiNextdotjs, color: '#FFFFFF' },
        { name: 'Vue.js', type: 'prod', icon: SiVuedotjs, color: '#4FC08D' },
        { name: 'Vite', type: 'prod', icon: SiVite, color: '#646CFF' },
      ],
    },
    {
      titleKey: 'stack.categories.devops',
      icon: Server,
      accentColor: '#ffffff',
      keys: [
        { name: 'Docker', type: 'daily', icon: SiDocker, color: '#2496ED' },
        { name: 'Linux Containers (LXC)', type: 'daily', icon: SiLinuxcontainers, color: '#FCC624' },
        { name: 'WSL 2 & Debian', type: 'daily', icon: SiDebian, color: '#A81D33' },
        { name: 'Ubuntu SysAdmin', type: 'daily', icon: SiUbuntu, color: '#E95420' },
        { name: 'Kali Linux', type: 'prod', icon: SiKalilinux, color: '#557C94' },
        { name: 'Git & GitHub', type: 'daily', icon: SiGithub, color: '#FFFFFF' },
        { name: 'Nginx', type: 'prod', icon: SiNginx, color: '#009639' },
        { name: 'Cloudflare', type: 'prod', icon: SiCloudflare, color: '#F38020' },
        { name: 'Vercel', type: 'prod', icon: SiVercel, color: '#FFFFFF' },
        { name: 'GitHub Actions CI/CD', type: 'prod', icon: SiGithubactions, color: '#2088FF' },
        { name: 'Kubernetes (K8s)', type: 'explore', icon: SiKubernetes, color: '#326CE5' },
        { name: 'Terraform', type: 'explore', icon: SiTerraform, color: '#844FBA' },
      ],
    },
  ];

  return (
    <section id="stack" data-chapter="stack" className="relative pt-12 lg:pt-20">
      <div className="flex flex-col items-start min-w-0 w-full">
        
        {/* Chapter Header */}
        <header className="flex flex-col items-start">
          <div className="flex items-center gap-4">
            <span 
              aria-hidden="true" 
              className="inline-flex shrink-0 -rotate-8 items-center justify-center border-2 border-white bg-[#0c2316] font-display font-extrabold text-white shadow-[0_6px_16px_rgba(255,255,255,0.15)] size-12 rounded-[12px] text-[20px]"
            >
              {t('stack.chapterNum')}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-none font-extrabold tracking-[-0.035em] text-white">
              {t('stack.chapterTitle')}
            </h2>
          </div>
          <p className="hand mt-3 ml-2 text-[22px] lg:text-[26px] text-white">
            {t('stack.chapterHand')}
          </p>
        </header>

        {/* Lead description */}
        <p className="mt-4 text-[16px] lg:text-[18px] leading-[1.55] text-[#94a3b8]">
          {t('stack.lead')}
        </p>

        {/* Categories of Keycaps with Official Animated Brand Icons */}
        <div className="mt-8 flex flex-col gap-8 w-full">
          {stackCategories.map((cat, idx) => {
            const HeaderIcon = cat.icon;
            return (
              <section key={idx} className="flex flex-col gap-3.5">
                <h3 className="inline-flex items-center gap-2.5 text-[16px] font-extrabold text-white">
                  <HeaderIcon className="size-4.5" style={{ color: cat.accentColor }} />
                  <span>{t(cat.titleKey)}</span>
                </h3>

                <ul className="flex flex-wrap gap-2.5">
                  {cat.keys.map((k, kIdx) => {
                    const KeyIcon = k.icon;
                    const styleClass = 
                      k.type === 'daily' 
                        ? 'keycap-daily' 
                        : k.type === 'prod' 
                        ? 'keycap-prod' 
                        : 'keycap-explore';

                    return (
                      <li 
                        key={kIdx} 
                        className={`keycap-key ${styleClass} font-mono group cursor-pointer gap-2.5 shadow-sm hover:scale-105 transition-all duration-200`}
                      >
                        <KeyIcon 
                          className="size-4 shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" 
                          style={{ color: k.color }}
                        />
                        <span className="text-[13px] font-semibold text-white/95 group-hover:text-white transition-colors">
                          {k.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>

        {/* Progress Footer for chapter */}
        <p className="mt-10 flex items-center gap-3.5 text-[14px] font-bold text-[#94a3b8]">
          <span className="flex gap-[5px]" aria-hidden="true">
            <span className="h-2.5 w-3.5 rounded-full bg-[#10b981]" />
            <span className="h-2.5 w-3.5 rounded-full bg-[#10b981]" />
            <span className="h-2.5 w-[30px] rounded-full bg-[#10b981]" />
            <span className="h-2.5 w-3.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-3.5 rounded-full bg-white/20" />
          </span>
          <span>{t('stack.nextChapter')}</span>
        </p>

      </div>
    </section>
  );
};
