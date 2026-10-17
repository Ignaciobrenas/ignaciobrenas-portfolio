import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, MapPin, Languages, Briefcase, GraduationCap, Phone, Car, CheckCircle2 } from 'lucide-react';

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

        {/* 3 Rotated Sticky Notes in Modern White/Cyan/Emerald */}
        <ul className="mt-6 grid grid-cols-1 gap-5 w-full sm:grid-cols-3 items-stretch">
          {/* Note 1: Location */}
          <li className="sticky-note relative rounded-[18px] border border-white/20 bg-gradient-to-br from-[#14291c] to-[#0a1810] p-5 pt-7 sm:rotate-[-1deg] shadow-lg flex flex-col justify-between">
            <div>
              <span className="hand block text-[20px] text-white flex items-center gap-1.5">
                <MapPin className="size-4 text-white" />
                <span>{t('about.locationTitle')}</span>
              </span>
              <span className="mt-1 block text-[15.5px] font-extrabold text-white">
                {t('about.locationValue')}
              </span>
            </div>
            <span className="block text-[12px] font-mono text-[#94a3b8] mt-2">
              {t('about.locationSub')}
            </span>
          </li>

          {/* Note 2: Languages */}
          <li className="sticky-note relative rounded-[18px] border border-[#38bdf8]/40 bg-gradient-to-br from-[#0c2230] to-[#06121c] p-5 pt-7 sm:rotate-[1deg] shadow-lg flex flex-col justify-between">
            <div>
              <span className="hand block text-[20px] text-[#38bdf8] flex items-center gap-1.5">
                <Languages className="size-4 text-[#38bdf8]" />
                <span>{t('about.languagesTitle')}</span>
              </span>
              <span className="mt-1 block text-[15.5px] font-extrabold text-white">
                {t('about.languagesValue')}
              </span>
            </div>
            <span className="block text-[12px] font-mono text-[#94a3b8] mt-2">
              {t('about.languagesSub')}
            </span>
          </li>

          {/* Note 3: Availability */}
          <li className="sticky-note relative rounded-[18px] border border-[#10b981]/40 bg-gradient-to-br from-[#122b1c] to-[#08180e] p-5 pt-7 sm:rotate-[-0.5deg] shadow-lg flex flex-col justify-between">
            <div>
              <span className="hand block text-[20px] text-[#10b981] flex items-center gap-1.5">
                <Briefcase className="size-4 text-[#10b981]" />
                <span>{t('about.availabilityTitle')}</span>
              </span>
              <span className="mt-1 block text-[15.5px] font-extrabold text-white">
                {t('about.availabilityValue')}
              </span>
            </div>
            <span className="block text-[12px] font-mono text-[#94a3b8] mt-2">
              {t('about.availabilitySub')}
            </span>
          </li>
        </ul>

        {/* Official Academic Education & Credentials Block */}
        <div className="mt-8 w-full rounded-[26px] border border-white/20 bg-gradient-to-br from-[#0c2417]/95 via-[#06150d]/90 to-[#030906]/95 p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.7)] backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="size-11 rounded-xl bg-white/10 border border-white/25 flex items-center justify-center text-[#10b981] shadow-inner">
                <GraduationCap className="size-6" />
              </div>
              <div>
                <h4 className="font-display text-[20px] sm:text-[22px] font-extrabold text-white tracking-tight">
                  {t('about.academicTitle')}
                </h4>
                <p className="font-mono text-[12.5px] text-[#94a3b8]">
                  {t('about.academicHand')}
                </p>
              </div>
            </div>
            <span className="self-start sm:self-auto inline-flex items-center gap-1.5 rounded-full border border-[#10b981] bg-[#10b981]/15 px-3 py-1 font-mono text-[11px] font-bold text-[#10b981]">
              <span className="size-1.5 rounded-full bg-[#10b981] animate-ping" />
              <span>STUCOM_PELAI</span>
            </span>
          </div>

          {/* Education Degrees List */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* DAW */}
            <div className="p-4 rounded-xl bg-[#040e08]/90 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[11px] font-bold text-[#10b981] bg-[#10b981]/15 px-2.5 py-0.5 rounded border border-[#10b981]/30">
                  CFGS · GRADO SUPERIOR
                </span>
                <h5 className="mt-2 font-display text-[16px] sm:text-[17px] font-extrabold text-white leading-snug">
                  {t('about.dawDegree')}
                </h5>
                <p className="mt-1 text-[13px] text-[#94a3b8]">
                  {t('about.dawSchool')}
                </p>
              </div>
              <span className="mt-3 block font-mono text-[11.5px] font-bold text-white/80">
                {t('about.dawPeriod')}
              </span>
            </div>

            {/* SMX */}
            <div className="p-4 rounded-xl bg-[#040e08]/90 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[11px] font-bold text-[#38bdf8] bg-[#38bdf8]/15 px-2.5 py-0.5 rounded border border-[#38bdf8]/30">
                  CFGM · GRADO MEDIO
                </span>
                <h5 className="mt-2 font-display text-[16px] sm:text-[17px] font-extrabold text-white leading-snug">
                  {t('about.smxDegree')}
                </h5>
                <p className="mt-1 text-[13px] text-[#94a3b8]">
                  {t('about.smxSchool')}
                </p>
              </div>
              <span className="mt-3 block font-mono text-[11.5px] font-bold text-white/80">
                {t('about.smxPeriod')}
              </span>
            </div>
          </div>

          {/* Direct Phone & Mobility Bar */}
          <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[13.5px]">
            <a 
              href="tel:+34640770380"
              className="inline-flex items-center gap-2 font-mono font-bold text-white hover:text-[#10b981] transition-colors"
            >
              <Phone className="size-4 text-[#10b981]" />
              <span>{t('about.phoneLabel')}:</span>
              <span className="underline underline-offset-4 decoration-white/30">{t('about.phoneValue')}</span>
            </a>

            <div className="inline-flex items-center gap-2 font-mono text-[12.5px] text-[#94a3b8]">
              <Car className="size-4 text-[#38bdf8] shrink-0" />
              <span>{t('about.mobilityValue')}</span>
            </div>
          </div>
        </div>

        {/* What I can do for you / Service Cards */}
        <div className="mt-10 flex items-end gap-3">
          <h3 className="font-mono text-[12px] font-extrabold tracking-[0.08em] text-white uppercase">
            {t('about.servicesTitle')}
          </h3>
          <span className="hand text-[20px] text-white">
            {t('about.servicesHand')}
          </span>
        </div>

        <ul className="mt-4 flex flex-col gap-4 w-full">
          {/* Service 1 */}
          <li className="rounded-[22px] border border-white/20 bg-gradient-to-br from-[#0c2316]/90 to-[#040c07] p-6 sm:p-7 shadow-md flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[12px] font-extrabold text-white">S.01</span>
              <span className="font-mono text-[11px] font-bold text-[#10b981] bg-[#10b981]/10 px-2.5 py-0.5 rounded border border-[#10b981]/30">
                HIGH THROUGHPUT
              </span>
            </div>
            <span className="font-display text-[18px] lg:text-[20px] leading-tight font-extrabold text-white">
              {t('about.service1Title')}
            </span>
            <p className="text-[14px] leading-relaxed text-[#94a3b8]">
              {t('about.service1Desc')}
            </p>
            <a
              href={`mailto:ignaciobrenas@gmail.com?subject=${service1Subject}`}
              className="mt-2 inline-flex min-h-[42px] w-full sm:w-fit items-center justify-center gap-2 rounded-full bg-white px-5 text-[13px] font-extrabold text-[#030805] hover:bg-[#e2e8f0] transition-all shadow-sm"
            >
              <span>{t('about.service1CTA')}</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </li>

          {/* Service 2 */}
          <li className="rounded-[22px] border border-[#10b981]/30 bg-gradient-to-br from-[#092014]/90 to-[#030c06] p-6 sm:p-7 shadow-md flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[12px] font-extrabold text-[#10b981]">S.02</span>
              <span className="font-mono text-[11px] font-bold text-[#38bdf8] bg-[#38bdf8]/10 px-2.5 py-0.5 rounded border border-[#38bdf8]/30">
                MCP PROTOCOL
              </span>
            </div>
            <span className="font-display text-[18px] lg:text-[20px] leading-tight font-extrabold text-white">
              {t('about.service2Title')}
            </span>
            <p className="text-[14px] leading-relaxed text-[#94a3b8]">
              {t('about.service2Desc')}
            </p>
            <a
              href={`mailto:ignaciobrenas@gmail.com?subject=${service2Subject}`}
              className="mt-2 inline-flex min-h-[42px] w-full sm:w-fit items-center justify-center gap-2 rounded-full bg-[#10b981] px-5 text-[13px] font-extrabold text-[#030805] hover:brightness-110 transition-all shadow-sm"
            >
              <span>{t('about.service2CTA')}</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </li>

          {/* Service 3 */}
          <li className="rounded-[22px] border border-[#38bdf8]/30 bg-gradient-to-br from-[#071c26]/90 to-[#020b10] p-6 sm:p-7 shadow-md flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[12px] font-extrabold text-[#38bdf8]">S.03</span>
              <span className="font-mono text-[11px] font-bold text-white bg-white/10 px-2.5 py-0.5 rounded border border-white/20">
                RELIABILITY
              </span>
            </div>
            <span className="font-display text-[18px] lg:text-[20px] leading-tight font-extrabold text-white">
              {t('about.service3Title')}
            </span>
            <p className="text-[14px] leading-relaxed text-[#94a3b8]">
              {t('about.service3Desc')}
            </p>
            <a
              href={`mailto:ignaciobrenas@gmail.com?subject=${service3Subject}`}
              className="mt-2 inline-flex min-h-[42px] w-full sm:w-fit items-center justify-center gap-2 rounded-full bg-[#38bdf8] px-5 text-[13px] font-extrabold text-[#030805] hover:brightness-110 transition-all shadow-sm"
            >
              <span>{t('about.service3CTA')}</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </li>
        </ul>

        {/* Progress Footer for chapter */}
        <p className="mt-10 flex items-center gap-3.5 text-[14px] font-bold text-[#94a3b8]">
          <span className="flex gap-[5px]" aria-hidden="true">
            <span className="h-2.5 w-3.5 rounded-full bg-[#10b981]" />
            <span className="h-2.5 w-3.5 rounded-full bg-[#10b981]" />
            <span className="h-2.5 w-3.5 rounded-full bg-[#10b981]" />
            <span className="h-2.5 w-3.5 rounded-full bg-[#10b981]" />
            <span className="h-2.5 w-[30px] rounded-full bg-[#10b981]" />
          </span>
          <span>{t('about.nextChapter')}</span>
        </p>

      </div>
    </section>
  );
};
