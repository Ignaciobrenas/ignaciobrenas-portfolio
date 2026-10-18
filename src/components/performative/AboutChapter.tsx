import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, MapPin, Languages, Briefcase, Mail, Car } from 'lucide-react';

export const AboutChapter: React.FC = () => {
  const { t, i18n } = useTranslation();

  const service1Subject = encodeURIComponent(
    i18n.language === 'es' ? 'Propuesta: APIs y Servicios Backend' : 'Proposal: APIs & Backend Services'
  );
  const service2Subject = encodeURIComponent(
    i18n.language === 'es' ? 'Propuesta: Servidores MCP e Inteligencia Artificial' : 'Proposal: MCP Servers & AI Integration'
  );
  const service3Subject = encodeURIComponent(
    i18n.language === 'es' ? 'Propuesta: Infraestructura y Testing' : 'Proposal: Infrastructure & System Reliability'
  );

  return (
    <section id="about" data-chapter="about" className="relative pt-12 lg:pt-20">
      <div className="flex flex-col items-start min-w-0 w-full">
        
        {/* Chapter Header */}
        <header className="flex flex-col items-start">
          <div className="flex items-center gap-4">
            <span 
              aria-hidden="true" 
              className="inline-flex shrink-0 -rotate-8 items-center justify-center border-2 border-white bg-[#0c2316] font-display font-extrabold text-white shadow-[0_6px_16px_rgba(255,255,255,0.15)] size-12 rounded-[12px] text-[20px]"
            >
              {t('about.chapterNum')}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-none font-extrabold tracking-[-0.035em] text-white">
              {t('about.chapterTitle')}
            </h2>
          </div>
          <p className="hand mt-3 ml-2 text-[22px] lg:text-[26px] text-white">
            {t('about.chapterHand')}
          </p>
        </header>

        {/* Lead Title */}
        <h3 className="mt-5 font-display text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.25] font-extrabold tracking-[-0.03em] text-white">
          {t('about.leadTitle')}
        </h3>

        {/* Story Paragraphs */}
        <div className="mt-4 flex flex-col gap-3.5 text-[15.5px] lg:text-[16.5px] leading-[1.65] text-white/90">
          <p>{t('about.bio1')}</p>
          <p>{t('about.bio2')}</p>
          <p>{t('about.bio3')}</p>
        </div>

        {/* Handwritten signature */}
        <p className="hand mt-2 self-end text-[28px] text-white select-none">
          — Ignacio Breñas
        </p>

        {/* 3 Rotated Workshop Index Cards with Realistic Washi Tape */}
        <ul className="mt-8 grid grid-cols-1 gap-5 w-full sm:grid-cols-3 items-stretch">
          {/* Note 1: Location */}
          <li className="tactile-index-card p-5 pt-8 sm:rotate-[-1.5deg] flex flex-col justify-between">
            <div className="washi-tape" />
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-white/10 font-mono text-[10px] text-white/50">
                <span>{t('about.card01')}</span>
                <span>{t('about.card01Tag')}</span>
              </div>
              <span className="hand block text-[21px] text-white flex items-center gap-1.5 mt-2.5">
                <MapPin className="size-4 text-[#10b981]" />
                <span>{t('about.locationTitle')}</span>
              </span>
              <span className="mt-1 block text-[15.5px] font-extrabold text-white">
                {t('about.locationValue')}
              </span>
            </div>
            <span className="block text-[12px] font-mono text-[#94a3b8] mt-3 pt-2 border-t border-white/5">
              {t('about.locationSub')}
            </span>
          </li>

          {/* Note 2: Languages */}
          <li className="tactile-index-card p-5 pt-8 sm:rotate-[1.5deg] flex flex-col justify-between" style={{ background: 'linear-gradient(145deg, #091c28 0%, #040e16 100%)', borderColor: 'rgba(56, 189, 248, 0.35)' }}>
            <div className="washi-tape" />
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-white/10 font-mono text-[10px] text-white/50">
                <span>{t('about.card02')}</span>
                <span className="text-[#38bdf8] font-bold tracking-wider">{t('about.card02Tag')}</span>
              </div>
              <span className="hand block text-[21px] text-[#38bdf8] flex items-center gap-1.5 mt-2.5">
                <Languages className="size-4 text-[#38bdf8]" />
                <span>{t('about.languagesTitle')}</span>
              </span>

              {/* Structured Language Rows - English positioned BEFORE Catalan */}
              <div className="mt-3 flex flex-col gap-2">
                {/* 1. Spanish */}
                <div className="flex items-center justify-between rounded-lg bg-white/[0.04] px-2.5 py-1.5 border border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-400" />
                    <span className="text-[13px] font-bold text-white">{t('about.langSpanish')}</span>
                  </div>
                  <span className="font-mono text-[10.5px] font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                    {t('about.langSpanishLevel')}
                  </span>
                </div>

                {/* 2. English (Prominently before Catalan) */}
                <div className="flex items-center justify-between rounded-lg bg-sky-500/[0.08] px-2.5 py-1.5 border border-sky-400/25 shadow-[0_0_12px_rgba(56,189,248,0.12)]">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#38bdf8] animate-pulse" />
                    <span className="text-[13px] font-bold text-white">{t('about.langEnglish')}</span>
                  </div>
                  <span className="font-mono text-[10.5px] font-bold text-[#38bdf8] bg-sky-400/15 px-2 py-0.5 rounded border border-sky-400/30">
                    {t('about.langEnglishLevel')}
                  </span>
                </div>

                {/* 3. Catalan */}
                <div className="flex items-center justify-between rounded-lg bg-white/[0.04] px-2.5 py-1.5 border border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-amber-400" />
                    <span className="text-[13px] font-bold text-white">{t('about.langCatalan')}</span>
                  </div>
                  <span className="font-mono text-[10.5px] font-semibold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    {t('about.langCatalanLevel')}
                  </span>
                </div>
              </div>
            </div>

            <span className="block text-[11.5px] font-mono text-[#94a3b8] mt-3 pt-2 border-t border-white/5">
              {t('about.languagesSub')}
            </span>
          </li>

          {/* Note 3: Availability */}
          <li className="tactile-index-card p-5 pt-8 sm:rotate-[-1deg] flex flex-col justify-between" style={{ background: 'linear-gradient(145deg, #0c2417 0%, #05120a 100%)', borderColor: 'rgba(16, 185, 129, 0.35)' }}>
            <div className="washi-tape" />
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-white/10 font-mono text-[10px] text-white/50">
                <span>{t('about.card03')}</span>
                <span>{t('about.card03Tag')}</span>
              </div>
              <span className="hand block text-[21px] text-[#10b981] flex items-center gap-1.5 mt-2.5">
                <Briefcase className="size-4 text-[#10b981]" />
                <span>{t('about.availabilityTitle')}</span>
              </span>
              <span className="mt-1 block text-[15.5px] font-extrabold text-white">
                {t('about.availabilityValue')}
              </span>
            </div>
            <span className="block text-[12px] font-mono text-[#94a3b8] mt-3 pt-2 border-t border-white/5">
              {t('about.availabilitySub')}
            </span>
          </li>
        </ul>

        {/* Official Academic Education & Credentials Block */}
        <div className="mt-8 w-full rounded-2xl p-6 sm:p-7 bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
            <div className="flex items-center gap-3.5">
              <div className="inline-flex items-center px-3 py-1.5 rounded-xl bg-white shadow-sm border border-white/20 shrink-0">
                <img 
                  src="/images/assets/stucom.svg" 
                  alt="STUCOM Pelai" 
                  className="h-6 sm:h-7 w-auto max-w-[130px] object-contain" 
                />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-emerald-400 block tracking-wide">
                  {t('about.officialDegreeBadge')}
                </span>
                <h4 className="font-display text-[19px] sm:text-[21px] font-extrabold text-white tracking-tight">
                  {t('about.academicTitle')}
                </h4>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-white/80 bg-white/10 px-3 py-1 rounded-full border border-white/20 self-start sm:self-auto">
              {t('about.studyModeBadge')}
            </span>
          </div>

          {/* Education Degrees List */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* DAW */}
            <div className="p-4 sm:p-5 rounded-xl bg-white/[0.04] backdrop-blur-sm border border-white/10 flex flex-col justify-between hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/25">
                    {t('about.cfgsBadge')}
                  </span>
                  <div className="px-2 py-0.5 rounded-md bg-white shrink-0">
                    <img src="/images/assets/stucom.svg" alt="STUCOM Logo" className="h-4 w-auto object-contain" />
                  </div>
                </div>
                <h5 className="mt-2.5 font-display text-[16px] sm:text-[17px] font-extrabold text-white leading-snug">
                  {t('about.dawDegree')}
                </h5>
                <p className="mt-1 text-[13px] text-[#94a3b8]">
                  {t('about.dawSchool')}
                </p>
              </div>
              <span className="mt-3 block text-[11.5px] font-medium text-white/80">
                {t('about.dawPeriod')}
              </span>
            </div>

            {/* SMX */}
            <div className="p-4 sm:p-5 rounded-xl bg-white/[0.04] backdrop-blur-sm border border-white/10 flex flex-col justify-between hover:border-sky-500/40 hover:bg-white/[0.06] transition-all">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-sky-400 bg-sky-500/15 px-2.5 py-0.5 rounded-full border border-sky-500/25">
                    {t('about.cfgmBadge')}
                  </span>
                  <div className="px-2 py-0.5 rounded-md bg-white shrink-0">
                    <img src="/images/assets/stucom.svg" alt="STUCOM Logo" className="h-4 w-auto object-contain" />
                  </div>
                </div>
                <h5 className="mt-2.5 font-display text-[16px] sm:text-[17px] font-extrabold text-white leading-snug">
                  {t('about.smxDegree')}
                </h5>
                <p className="mt-1 text-[13px] text-[#94a3b8]">
                  {t('about.smxSchool')}
                </p>
              </div>
              <span className="mt-3 block text-[11.5px] font-medium text-white/80">
                {t('about.smxPeriod')}
              </span>
            </div>
          </div>

          {/* Direct Email & Mobility Bar (No phone displayed) */}
          <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[13.5px]">
            <a 
              href="mailto:ignaciobrenas@gmail.com"
              className="inline-flex items-center gap-2 font-medium text-white hover:text-emerald-400 transition-colors"
            >
              <Mail className="size-4 text-emerald-400" />
              <span>{t('about.emailLabel')}:</span>
              <span className="underline underline-offset-4 decoration-white/30">{t('about.emailValue')}</span>
            </a>

            <div className="inline-flex items-center gap-2 text-[12px] text-[#94a3b8]">
              <Car className="size-4 text-sky-400 shrink-0" />
              <span>{t('about.mobilityValue')}</span>
            </div>
          </div>
        </div>

        {/* What I can do for you / Service Cards */}
        <div className="mt-10 flex items-end gap-3">
          <h3 className="text-[12px] font-bold tracking-[0.08em] text-white uppercase">
            {t('about.servicesTitle')}
          </h3>
          <span className="hand text-[20px] text-white">
            {t('about.servicesHand')}
          </span>
        </div>

        <ul className="mt-4 flex flex-col gap-4 w-full">
          {/* Service 1 */}
          <li className="rounded-2xl p-6 bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.05] transition-all shadow-md flex flex-col gap-3">
            <div className="flex items-center justify-between text-[11.5px] pb-3 border-b border-white/10">
              <span className="font-semibold text-white/90">{t('about.specialty01')}</span>
              <span className="font-semibold text-emerald-400 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/25">
                {t('about.specialty01Tag')}
              </span>
            </div>
            <span className="font-display text-[18px] lg:text-[20px] leading-tight font-extrabold text-white">
              {t('about.service1Title')}
            </span>
            <p className="text-[13.5px] leading-relaxed text-[#94a3b8]">
              {t('about.service1Desc')}
            </p>
            <a
              href={`mailto:ignaciobrenas@gmail.com?subject=${service1Subject}`}
              className="mt-2 inline-flex min-h-[40px] w-full sm:w-fit items-center justify-center gap-2 rounded-xl bg-white hover:bg-emerald-400 px-5 text-[13px] font-bold text-[#030805] transition-all shadow-sm active:scale-95"
            >
              <span>{t('about.service1CTA')}</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </li>

          {/* Service 2 */}
          <li className="rounded-2xl p-6 bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.05] transition-all shadow-md flex flex-col gap-3">
            <div className="flex items-center justify-between text-[11.5px] pb-3 border-b border-white/10">
              <span className="font-semibold text-emerald-300">{t('about.specialty02')}</span>
              <span className="font-semibold text-sky-400 bg-sky-500/15 px-2.5 py-0.5 rounded-full border border-sky-500/25">
                {t('about.specialty02Tag')}
              </span>
            </div>
            <span className="font-display text-[18px] lg:text-[20px] leading-tight font-extrabold text-white">
              {t('about.service2Title')}
            </span>
            <p className="text-[13.5px] leading-relaxed text-[#94a3b8]">
              {t('about.service2Desc')}
            </p>
            <a
              href={`mailto:ignaciobrenas@gmail.com?subject=${service2Subject}`}
              className="mt-2 inline-flex min-h-[40px] w-full sm:w-fit items-center justify-center gap-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 px-5 text-[13px] font-bold text-[#030805] transition-all shadow-sm active:scale-95"
            >
              <span>{t('about.service2CTA')}</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </li>

          {/* Service 3 */}
          <li className="rounded-2xl p-6 bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-sky-500/40 hover:bg-white/[0.05] transition-all shadow-md flex flex-col gap-3">
            <div className="flex items-center justify-between text-[11.5px] pb-3 border-b border-white/10">
              <span className="font-semibold text-sky-300">{t('about.specialty03')}</span>
              <span className="font-semibold text-white/80 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
                {t('about.specialty03Tag')}
              </span>
            </div>
            <span className="font-display text-[18px] lg:text-[20px] leading-tight font-extrabold text-white">
              {t('about.service3Title')}
            </span>
            <p className="text-[13.5px] leading-relaxed text-[#94a3b8]">
              {t('about.service3Desc')}
            </p>
            <a
              href={`mailto:ignaciobrenas@gmail.com?subject=${service3Subject}`}
              className="mt-2 inline-flex min-h-[40px] w-full sm:w-fit items-center justify-center gap-2 rounded-xl bg-sky-400 hover:bg-sky-300 px-5 text-[13px] font-bold text-[#030805] transition-all shadow-sm active:scale-95"
            >
              <span>{t('about.service3CTA')}</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </li>
        </ul>

      </div>
    </section>
  );
};
