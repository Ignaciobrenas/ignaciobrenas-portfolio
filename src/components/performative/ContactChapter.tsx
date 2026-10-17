import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Check, Copy, ExternalLink, Send, FileText, ArrowUpRight, ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export const ContactChapter: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState<boolean>(false);
  const [isCallingHover, setIsCallingHover] = useState<boolean>(false);

  const email = 'ignaciobrenas@gmail.com';
  const defaultSubject = encodeURIComponent(
    i18n.language === 'es' ? 'Contacto Profesional — Ignacio Breñas' : 'Professional Inquiry — Ignacio Breñas'
  );
  const defaultBody = encodeURIComponent(
    i18n.language === 'es'
      ? 'Hola Ignacio,\n\nHe visto tu portfolio y me gustaría hablar contigo sobre un proyecto / oportunidad técnica:\n\n'
      : 'Hello Ignacio,\n\nI reviewed your portfolio and would like to discuss a project / engineering opportunity:\n\n'
  );

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${defaultSubject}&body=${defaultBody}`;
  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${defaultSubject}&body=${defaultBody}`;
  const mailtoUrl = `mailto:${email}?subject=${defaultSubject}&body=${defaultBody}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" data-chapter="contact" className="relative pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div className="flex flex-col items-start min-w-0 w-full">
        
        {/* Handwritten Accent */}
        <p className="hand ml-1 -rotate-4 text-[28px] text-white lg:text-[34px]">
          {t('contact.handGreeting')}
        </p>

        {/* Big Title */}
        <h2 className="mt-1 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] text-white leading-[0.95]">
          {t('contact.title')}
        </h2>

        {/* Subtitle */}
        <p className="mt-4 max-w-[560px] text-[17px] lg:text-[19px] leading-[1.6] text-[#94a3b8]">
          {t('contact.lead')}
        </p>

        {/* Fast Reply Status */}
        <p className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold text-[#10b981]">
          <span className="size-2 rounded-full bg-[#10b981] animate-ping" aria-hidden="true" />
          <span>{t('contact.fastReply')}</span>
        </p>

        {/* ======================================================== */}
        {/* INTERACTIVE SPRITE HERO CARD: "HABLEMOS / LLÁMAME" */}
        {/* ======================================================== */}
        <div 
          onMouseEnter={() => setIsCallingHover(true)}
          onMouseLeave={() => setIsCallingHover(false)}
          className="mt-8 w-full rounded-[28px] border-2 border-[#10b981]/50 bg-gradient-to-br from-[#061c10]/95 via-[#030d07]/95 to-[#010502]/98 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl hover:border-[#10b981] hover:shadow-[0_25px_60px_rgba(16,185,129,0.25)] transition-all duration-300 relative overflow-hidden"
        >
          {/* Ambient light glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#10b981]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            
            {/* Left Column: Speech Bubble & Action CTAs */}
            <div className="flex-1 min-w-0 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold text-[#10b981] bg-[#10b981]/15 px-3 py-1 rounded-full border border-[#10b981]/30 mb-3">
                <Sparkles className="size-3" />
                <span>DIRECT_CONTACT // 32-BIT</span>
              </div>

              <h3 className="font-display text-[22px] sm:text-[26px] font-extrabold text-white leading-tight">
                {i18n.language === 'es' ? '¿Tienes un proyecto o una vacante en tu equipo?' : 'Have an exciting project or opening on your team?'}
              </h3>

              {/* Speech bubble from sprite */}
              <div className="mt-3.5 p-4 rounded-2xl bg-[#030905] border border-white/15 text-[14.5px] sm:text-[15.5px] leading-relaxed text-white/90 relative">
                <p className="m-0 font-retro">
                  {isCallingHover
                    ? (i18n.language === 'es' ? '¡Hablemos! Puedes escribirme por correo directo, mandarme un mensaje o conectar en LinkedIn.' : "Let's talk! Drop me an email, send a message, or connect on LinkedIn.")
                    : (i18n.language === 'es' ? 'Pasa el cursor o pulsa para iniciar la llamada o enviarme un mensaje directo.' : "Hover or tap to start a call or send a direct message.")}
                </p>
              </div>

              {/* Quick Actions */}
              <div className="mt-5 flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#10b981] hover:bg-[#34d399] text-[#030805] font-mono text-[13px] font-bold shadow-md active:scale-95 transition-all"
                >
                  <Mail className="size-4 text-[#030805]" />
                  <span>{i18n.language === 'es' ? 'Enviar Correo Ahora' : 'Send Email Now'}</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ignacio-brenas-mu%C3%B1oz-65a88a297/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-[13px] font-bold active:scale-95 transition-all"
                >
                  <FaLinkedin className="size-4 text-[#0077b5]" />
                  <span>LinkedIn</span>
                  <ExternalLink className="size-3 text-white/60" />
                </a>
              </div>
            </div>

            {/* Right Column: Animated Sprite Mount */}
            <div 
              onClick={() => setIsCallingHover(!isCallingHover)}
              className="relative shrink-0 flex flex-col items-center cursor-pointer group/sprite"
              title={i18n.language === 'es' ? 'Toca para animar a Ignacio' : 'Tap to animate Ignacio'}
            >
              <div className="relative size-36 sm:size-44 rounded-2xl bg-[#020704] border-2 border-white/20 p-2 flex items-center justify-center overflow-hidden shadow-inner group-hover/sprite:border-[#10b981] transition-colors">
                <img
                  src={isCallingHover ? '/images/sprites/ignacio_call.png' : '/images/sprites/ignacio_mail.png'}
                  alt="Ignacio Breñas — Sprite Llamada y Correo"
                  className="w-full h-full object-contain pixelated sprite-breathe drop-shadow-md transition-all duration-200"
                />
              </div>

              <span className="mt-2 font-mono text-[11px] font-bold text-[#10b981] flex items-center gap-1.5 bg-[#030805] px-3 py-0.5 rounded-full border border-[#10b981]/40">
                <PhoneCall className="size-3 text-[#10b981]" />
                <span>{isCallingHover ? (i18n.language === 'es' ? 'LLAMANDO...' : 'CALLING...') : (i18n.language === 'es' ? 'DISPONIBLE' : 'AVAILABLE')}</span>
              </span>
            </div>

          </div>
        </div>

        {/* Direct One-Click Email Launchers Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 w-full sm:grid-cols-2 items-stretch">
          
          {/* Gmail Launcher */}
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-[24px] border border-[#ea4335]/40 bg-gradient-to-br from-[#230d0a]/90 via-[#120605] to-[#050202] p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:border-[#ea4335] hover:shadow-[0_15px_40px_rgba(234,67,53,0.25)] transition-all duration-300 flex items-center justify-between gap-3.5"
          >
            <div className="flex items-center gap-3.5 min-w-0 flex-1">
              <div className="size-12 shrink-0 rounded-xl bg-[#ea4335]/20 border border-[#ea4335]/50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-inner">
                <svg className="size-6 text-[#ea4335] fill-current" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-display text-[17px] sm:text-[19px] font-extrabold text-white group-hover:text-[#ea4335] transition-colors flex items-center gap-1.5 truncate">
                  <span className="truncate">{t('contact.gmailTitle')}</span>
                  <ArrowUpRight className="size-4 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <span className="text-[12.5px] font-mono text-[#94a3b8] block truncate mt-0.5">
                  {t('contact.gmailSub')}
                </span>
              </div>
            </div>
            <span className="shrink-0 font-mono text-[11px] font-extrabold text-[#ea4335] bg-[#ea4335]/15 px-2.5 py-1 rounded-md border border-[#ea4335]/30 hidden sm:inline-block">
              {t('contact.gmailBadge')}
            </span>
          </a>

          {/* Outlook Launcher */}
          <a
            href={outlookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-[24px] border border-[#0078d4]/40 bg-gradient-to-br from-[#071929]/90 via-[#030d17] to-[#010408] p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:border-[#0078d4] hover:shadow-[0_15px_40px_rgba(0,120,212,0.25)] transition-all duration-300 flex items-center justify-between gap-3.5"
          >
            <div className="flex items-center gap-3.5 min-w-0 flex-1">
              <div className="size-12 shrink-0 rounded-xl bg-[#0078d4]/20 border border-[#0078d4]/50 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform shadow-inner">
                <svg className="size-6 text-[#0078d4] fill-current" viewBox="0 0 24 24">
                  <path d="M7.88 12.04c0 .45-.11.87-.33 1.25s-.54.68-.94.9-.88.33-1.43.33c-.57 0-1.06-.12-1.48-.35s-.74-.56-.96-.98-.33-.94-.33-1.55c0-.62.11-1.15.34-1.58s.55-.77.97-.99 1-.34 1.73-.34c.73 0 1.31.11 1.73.34s.73.56.93.99.3 1 .3 1.97zm14.12 7.02V4.94c0-.52-.18-.96-.55-1.33s-.81-.55-1.33-.55H8.79l-8.79 3.8v10.28l8.79 3.8h11.33c.52 0 .96-.18 1.33-.55s.55-.81.55-1.33zM7.34 10.3c-.22-.38-.56-.57-1.01-.57-.45 0-.79.19-1.01.57s-.34.92-.34 1.63c0 .72.11 1.26.34 1.64s.56.57 1.01.57c.45 0 .79-.19 1.01-.57s.33-.92.33-1.64c0-.71-.11-1.25-.33-1.63z"/>
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-display text-[17px] sm:text-[19px] font-extrabold text-white group-hover:text-[#0078d4] transition-colors flex items-center gap-1.5 truncate">
                  <span className="truncate">{t('contact.outlookTitle')}</span>
                  <ArrowUpRight className="size-4 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <span className="text-[12.5px] font-mono text-[#94a3b8] block truncate mt-0.5">
                  {t('contact.outlookSub')}
                </span>
              </div>
            </div>
            <span className="shrink-0 font-mono text-[11px] font-extrabold text-[#0078d4] bg-[#0078d4]/15 px-2.5 py-1 rounded-md border border-[#0078d4]/30 hidden sm:inline-block">
              {t('contact.outlookBadge')}
            </span>
          </a>

        </div>

        {/* Secondary Direct Methods: Native Mailto & Copy Address */}
        <div className="mt-4 grid grid-cols-1 gap-4 w-full sm:grid-cols-2 items-stretch">
          
          {/* Default Client (Mailto) */}
          <a
            href={mailtoUrl}
            className="group rounded-[20px] border border-white/15 bg-[#0c2316]/90 p-5 flex items-center justify-between gap-3 hover:border-white hover:bg-[#163a25] transition-all"
          >
            <div className="flex items-center gap-3.5 min-w-0 flex-1">
              <Mail className="size-5 shrink-0 text-white group-hover:scale-110 transition-transform" />
              <div className="min-w-0 flex-1">
                <span className="font-bold text-[14.5px] text-white block truncate">
                  {t('contact.mailtoTitle')}
                </span>
                <span className="text-[12px] font-mono text-[#94a3b8] block truncate mt-0.5">
                  {t('contact.mailtoSub')}
                </span>
              </div>
            </div>
            <ArrowUpRight className="size-4 shrink-0 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="group rounded-[20px] border border-white/15 bg-[#06110a] p-5 flex items-center justify-between gap-3 hover:border-white hover:bg-[#0c1a10] transition-all active:scale-98 text-left"
          >
            <div className="flex items-center gap-3.5 min-w-0 flex-1">
              {copied ? (
                <Check className="size-5 shrink-0 text-[#10b981]" />
              ) : (
                <Copy className="size-5 shrink-0 text-white group-hover:scale-110 transition-transform" />
              )}
              <div className="min-w-0 flex-1">
                <span className="font-mono text-[14px] font-bold text-white block truncate">
                  {email}
                </span>
                <span className="text-[12px] text-[#94a3b8] block truncate mt-0.5">
                  {copied ? t('contact.copiedEmail') : t('contact.copyEmail')}
                </span>
              </div>
            </div>
            <span className="shrink-0 font-mono text-[11px] font-bold text-white bg-white/10 px-2.5 py-1 rounded-md border border-white/20">
              {copied ? t('contact.copiedBadge') : t('contact.copyBadge')}
            </span>
          </button>

        </div>

        {/* Social Platforms & Verified Profile Cards (Spotlight Hub) */}
        <div className="mt-8 pt-6 border-t border-white/10 w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="https://github.com/Ignaciobrenas"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-[#06110a] px-4 sm:px-5 text-[14px] font-bold text-white hover:border-white hover:bg-[#0c2316] transition-all shadow-sm"
            >
              <SiGithub className="size-4 text-white" />
              <span>GitHub</span>
              <ArrowUpRight className="size-3.5 text-[#94a3b8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://www.linkedin.com/in/ignacio-brenas-mu%C3%B1oz-65a88a297/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-[#0077b5]/40 bg-[#061822] px-4 sm:px-5 text-[14px] font-bold text-white hover:border-[#0077b5] hover:bg-[#0a2333] transition-all shadow-sm"
            >
              <FaLinkedin className="size-4 text-[#0077b5]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="size-3.5 text-[#0077b5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://www.credly.com/users/ignacio-brenas-munoz"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-[#10b981]/40 bg-[#06180e] px-4 sm:px-5 text-[14px] font-mono font-bold text-white hover:border-[#10b981] hover:bg-[#0a2617] transition-all shadow-sm"
            >
              <ShieldCheck className="size-4 text-[#10b981] group-hover:scale-110 transition-transform" />
              <span>Credly</span>
              <ArrowUpRight className="size-3.5 text-[#10b981] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-[14px] font-mono font-extrabold text-[#030805] hover:bg-[#e2e8f0] transition-all shadow-sm w-full sm:w-auto"
          >
            <FileText className="size-4 text-[#030805]" />
            <span>{t('contact.downloadCV')}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
