import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Check, Copy, ExternalLink, FileText, ArrowUpRight, ShieldCheck, PhoneCall, Sparkles, Eye, Download } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { CvPreviewModal } from './CvPreviewModal';

export const ContactChapter: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState<boolean>(false);
  const [isCallingHover, setIsCallingHover] = useState<boolean>(false);
  const [isCvPreviewOpen, setIsCvPreviewOpen] = useState<boolean>(false);

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
        <p className="mt-4 inline-flex items-center gap-2 text-[14px] font-medium text-emerald-400">
          <span className="size-2 rounded-full bg-emerald-400 animate-ping" aria-hidden="true" />
          <span>{t('contact.fastReply')}</span>
        </p>

        {/* ======================================================== */}
        {/* INTERACTIVE SPRITE HERO CONSOLE: DIRECT CONTACT & INTERCOM */}
        {/* ======================================================== */}
        <div 
          onMouseEnter={() => setIsCallingHover(true)}
          onMouseLeave={() => setIsCallingHover(false)}
          className="mt-8 w-full rounded-2xl p-6 sm:p-8 bg-[#07170e]/60 backdrop-blur-xl border border-emerald-500/25 hover:border-emerald-500/50 shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-300 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            
            {/* Left Column: Comms Header, Speech Monitor & Action CTAs */}
            <div className="flex-1 min-w-0 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
                  <Sparkles className="size-3 text-emerald-400" />
                  <span>{t('contact.directContactBadge')}</span>
                </span>
                <span className="text-[12px] text-slate-400 flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  <span>{t('contact.availableForRoles')}</span>
                </span>
              </div>

              <h3 className="font-display text-[22px] sm:text-[26px] font-extrabold text-white leading-tight">
                {t('contact.directContactTitle')}
              </h3>

              {/* Speech monitor from sprite */}
              <div className="mt-4 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-[14.5px] sm:text-[15.5px] leading-relaxed text-slate-200 relative w-full shadow-inner">
                <div className="text-[11px] font-mono text-emerald-400 font-semibold mb-1 flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  <span>Ignacio Breñas:</span>
                </div>
                <p className="m-0 font-sans text-slate-300">
                  {isCallingHover ? t('contact.speechBubbleCalling') : t('contact.speechBubbleDefault')}
                </p>
              </div>

              {/* Quick Actions */}
              <div className="mt-5 flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-sans text-[13px] font-bold shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
                >
                  <Mail className="size-4 text-slate-950" />
                  <span>{t('contact.sendEmailNow')}</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ignacio-bre%C3%B1as-mu%C3%B1oz-02a90b218/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-sans text-[13px] font-medium active:scale-95 transition-all"
                >
                  <FaLinkedin className="size-4 text-[#38bdf8]" />
                  <span>LinkedIn</span>
                  <ExternalLink className="size-3 text-white/60" />
                </a>
              </div>
            </div>

            {/* Right Column: Visual Frame for Interactive Sprite */}
            <div 
              onClick={() => setIsCallingHover(!isCallingHover)}
              className="relative shrink-0 flex flex-col items-center cursor-pointer group/sprite"
              title={t('contact.tapToAnimate')}
            >
              <div className="relative size-36 sm:size-44 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 p-2 flex items-center justify-center overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] group-hover/sprite:border-emerald-400/50 transition-colors">
                <img
                  src={isCallingHover ? '/images/sprites/ignacio_call.svg' : '/images/sprites/ignacio_mail.svg'}
                  alt="Ignacio Breñas — Sprite Llamada y Correo"
                  className="w-full h-full object-contain pixelated sprite-breathe drop-shadow-md transition-all duration-200"
                />
              </div>

              <span className="mt-2.5 font-mono text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/30">
                <PhoneCall className="size-3 text-emerald-400" />
                <span>{isCallingHover ? t('contact.callingStatus') : t('contact.availableStatus')}</span>
              </span>
            </div>

          </div>
        </div>

        {/* Transmission Channels Hub (Gmail, Outlook, Client, Clipboard) */}
        <div className="mt-6 grid grid-cols-1 gap-4 w-full sm:grid-cols-2 items-stretch">
          
          {/* Channel 1: Real Official Google Gmail Logo */}
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl p-5 bg-[#140807]/50 hover:bg-[#1c0b0a]/70 backdrop-blur-xl border border-red-500/20 hover:border-red-500/50 transition-all duration-300 flex items-center justify-between gap-3.5 shadow-lg"
          >
            <div className="flex items-center gap-3.5 min-w-0 flex-1">
              <div className="size-12 shrink-0 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                {/* Official Multi-Color Google Gmail SVG */}
                <svg className="size-6 shrink-0" viewBox="0 49.4 512 399.42" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <g fillRule="nonzero">
                      <path fill="#4285F4" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"/>
                      <path fill="#34A853" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"/>
                      <path fill="#FBBC04" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"/>
                    </g>
                    <path fill="#EA4335" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"/>
                    <path fill="#C5221F" fillRule="nonzero" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"/>
                  </g>
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-mono text-[10px] text-red-400 font-bold block uppercase tracking-wider">
                  Google Workspace
                </span>
                <span className="font-display text-[16px] sm:text-[18px] font-extrabold text-white group-hover:text-red-400 transition-colors flex items-center gap-1.5 truncate">
                  <span className="truncate">{t('contact.gmailTitle')}</span>
                  <ArrowUpRight className="size-3.5 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <span className="text-[12px] text-slate-400 block truncate">
                  {t('contact.gmailSub')}
                </span>
              </div>
            </div>
            <span className="shrink-0 font-mono text-[10px] font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full border border-red-500/30 hidden sm:inline-block">
              {t('contact.gmailBadge')}
            </span>
          </a>

          {/* Channel 2: Real Official Microsoft Outlook Logo */}
          <a
            href={outlookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl p-5 bg-[#05111d]/50 hover:bg-[#071829]/70 backdrop-blur-xl border border-sky-500/20 hover:border-sky-500/50 transition-all duration-300 flex items-center justify-between gap-3.5 shadow-lg"
          >
            <div className="flex items-center gap-3.5 min-w-0 flex-1">
              <div className="size-12 shrink-0 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                {/* Official Microsoft Outlook Brand Logo */}
                <img
                  src="/images/assets/outlook_official.svg"
                  alt="Microsoft Outlook"
                  className="size-7 shrink-0 object-contain drop-shadow-sm"
                />
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-mono text-[10px] text-sky-400 font-bold block uppercase tracking-wider">
                  Microsoft 365
                </span>
                <span className="font-display text-[16px] sm:text-[18px] font-extrabold text-white group-hover:text-sky-400 transition-colors flex items-center gap-1.5 truncate">
                  <span className="truncate">{t('contact.outlookTitle')}</span>
                  <ArrowUpRight className="size-3.5 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <span className="text-[12px] text-slate-400 block truncate">
                  {t('contact.outlookSub')}
                </span>
              </div>
            </div>
            <span className="shrink-0 font-mono text-[10px] font-bold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/30 hidden sm:inline-block">
              {t('contact.outlookBadge')}
            </span>
          </a>

          {/* Channel 3: Native Mailto */}
          <a
            href={mailtoUrl}
            className="group rounded-2xl p-5 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all flex items-center justify-between gap-3 shadow-lg"
          >
            <div className="flex items-center gap-3.5 min-w-0 flex-1">
              <div className="size-12 shrink-0 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                <Mail className="size-5 text-emerald-400 group-hover:scale-105 transition-transform" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-mono text-[10px] text-slate-400 font-bold block uppercase tracking-wider">
                  {t('contact.mailAppBadge')}
                </span>
                <span className="font-bold text-[15px] text-white block truncate group-hover:text-emerald-400 transition-colors">
                  {t('contact.mailtoTitle')}
                </span>
                <span className="text-[12px] text-slate-400 block truncate">
                  {t('contact.mailtoSub')}
                </span>
              </div>
            </div>
            <ArrowUpRight className="size-4 shrink-0 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* Channel 4: Copy Email to Clipboard Buffer */}
          <button
            onClick={handleCopyEmail}
            className="group rounded-2xl p-5 bg-white/[0.03] hover:bg-emerald-500/10 backdrop-blur-xl border border-white/10 hover:border-emerald-500/40 transition-all active:scale-98 text-left flex items-center justify-between gap-3 shadow-lg"
          >
            <div className="flex items-center gap-3.5 min-w-0 flex-1">
              <div className="size-12 shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                {copied ? (
                  <Check className="size-5 text-emerald-400" />
                ) : (
                  <Copy className="size-5 text-emerald-400" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-mono text-[10px] text-emerald-400 font-bold block uppercase tracking-wider">
                  {t('contact.copyAddressBadge')}
                </span>
                <span className="font-bold text-[15px] text-white block truncate group-hover:text-emerald-400 transition-colors font-mono">
                  ignaciobrenas@gmail.com
                </span>
                <span className="text-[12px] text-slate-400 block truncate">
                  {copied ? t('contact.copiedEmail') : t('contact.copyEmail')}
                </span>
              </div>
            </div>
            <span className="shrink-0 font-mono text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/25">
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
              className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.1] backdrop-blur-md px-4 sm:px-5 text-[14px] font-bold text-white hover:border-white transition-all shadow-sm"
            >
              <SiGithub className="size-4 text-white" />
              <span>GitHub</span>
              <ArrowUpRight className="size-3.5 text-[#94a3b8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://www.linkedin.com/in/ignacio-bre%C3%B1as-mu%C3%B1oz-02a90b218/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-[#0077b5]/30 bg-[#0077b5]/10 hover:bg-[#0077b5]/20 backdrop-blur-md px-4 sm:px-5 text-[14px] font-bold text-white hover:border-[#0077b5] transition-all shadow-sm"
            >
              <FaLinkedin className="size-4 text-[#0077b5]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="size-3.5 text-[#0077b5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://www.credly.com/users/ignacio-brenas-munoz"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 backdrop-blur-md px-4 sm:px-5 text-[14px] font-mono font-bold text-white hover:border-emerald-500 transition-all shadow-sm"
            >
              <ShieldCheck className="size-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>Credly</span>
              <ArrowUpRight className="size-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* CV Action Group: Download & Interactive Full Responsive Preview */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <a
              href="/CV_IgnacioBreñasMuñoz.pdf"
              download="CV_IgnacioBreñasMuñoz.pdf"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-[14px] font-mono font-extrabold text-[#030805] hover:bg-[#e2e8f0] transition-all shadow-sm flex-1 sm:flex-initial cursor-pointer active:scale-95"
              title={t('contact.downloadCV')}
            >
              <Download className="size-4 text-[#030805] group-hover:translate-y-0.5 transition-transform" />
              <span>{t('contact.downloadCV')}</span>
            </a>

            <button
              type="button"
              onClick={() => setIsCvPreviewOpen(true)}
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-[#091a10] hover:bg-[#0f291a] hover:border-emerald-400/60 backdrop-blur-md px-5 text-[14px] font-mono font-bold text-white transition-all shadow-sm flex-1 sm:flex-initial cursor-pointer active:scale-95"
              title={t('contact.previewCV')}
            >
              <Eye className="size-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>{t('contact.previewCV')}</span>
            </button>
          </div>
        </div>

        {/* Responsive CV Preview Modal */}
        <CvPreviewModal
          isOpen={isCvPreviewOpen}
          onClose={() => setIsCvPreviewOpen(false)}
        />
      </div>
    </section>
  );
};
