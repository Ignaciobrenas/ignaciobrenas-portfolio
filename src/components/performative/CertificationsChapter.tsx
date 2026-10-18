import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Check, Copy, ShieldCheck, Award } from 'lucide-react';

export const CertificationsChapter: React.FC = () => {
  const { t } = useTranslation();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const certs = [
    {
      id: 'ethical-hacker',
      key: 'badgeEthicalHacker',
      descKey: 'badgeEthicalHackerDesc',
      issuerKey: 'issuerCisco',
      date: '2025',
      badgeImg: '/images/badges/cisco-ethical-hacker.png',
      credlyUrl: 'https://www.credly.com/users/ignacio-brenas-munoz',
      credentialId: 'CISCO-ETH-HACKER-VERIFIED',
      accentColor: '#10b981',
      bgGradient: 'from-[#0d2a1b] via-[#071910] to-[#030906]',
    },
    {
      id: 'agile-explorer',
      key: 'badgeAgile',
      descKey: 'badgeAgileDesc',
      issuerKey: 'issuerIbm',
      date: '2024',
      badgeImg: '/images/badges/ibm-agile-explorer.png',
      credlyUrl: 'https://www.credly.com/users/ignacio-brenas-munoz',
      credentialId: 'IBM-AGILE-EXPLORER-VERIFIED',
      accentColor: '#38bdf8',
      bgGradient: 'from-[#0c2230] via-[#06141c] to-[#02070a]',
    },
    {
      id: 'cybersecurity',
      key: 'badgeCybersecurity',
      descKey: 'badgeCybersecurityDesc',
      issuerKey: 'issuerCisco',
      date: '2024',
      badgeImg: '/images/badges/cisco-cybersecurity.png',
      credlyUrl: 'https://www.credly.com/users/ignacio-brenas-munoz',
      credentialId: 'CISCO-CYBERSEC-INTRO-VERIFIED',
      accentColor: '#ffffff',
      bgGradient: 'from-[#1a2620] via-[#0d1611] to-[#030805]',
    },
    {
      id: 'data-science',
      key: 'badgeDataScience',
      descKey: 'badgeDataScienceDesc',
      issuerKey: 'issuerCisco',
      date: '2024',
      badgeImg: '/images/badges/cisco-data-science.png',
      credlyUrl: 'https://www.credly.com/users/ignacio-brenas-munoz',
      credentialId: 'CISCO-DATA-SCIENCE-VERIFIED',
      accentColor: '#38bdf8',
      bgGradient: 'from-[#0b2433] via-[#061520] to-[#02070a]',
    },
  ];

  const handleCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="certifications" data-chapter="certifications" className="relative pt-12 lg:pt-20">
      <div className="flex flex-col items-start min-w-0 w-full">
        
        {/* Chapter Header */}
        <header className="flex flex-col items-start">
          <div className="flex items-center gap-4">
            <span 
              aria-hidden="true" 
              className="inline-flex shrink-0 -rotate-8 items-center justify-center border-2 border-white bg-[#0c2316] font-display font-extrabold text-white shadow-[0_6px_16px_rgba(255,255,255,0.15)] size-12 rounded-[12px] text-[20px]"
            >
              {t('certifications.chapterNum')}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-none font-extrabold tracking-[-0.035em] text-white">
              {t('certifications.chapterTitle')}
            </h2>
          </div>
          <p className="hand mt-3 ml-2 text-[22px] lg:text-[26px] text-white">
            {t('certifications.chapterHand')}
          </p>
        </header>

        {/* Lead description */}
        <p className="mt-4 text-[16px] lg:text-[18px] leading-[1.55] text-[#94a3b8]">
          {t('certifications.lead')}
        </p>

        {/* Prominent Credly Official Verification Banner */}
        <div className="mt-7 w-full rounded-2xl p-5 sm:p-6 bg-emerald-950/20 backdrop-blur-xl border border-emerald-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.18)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-white shrink-0 shadow-sm">
              <ShieldCheck className="size-6 text-emerald-400" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
                {t('certifications.bannerVerification')}
              </span>
              <span className="font-display text-[17px] sm:text-[18px] font-extrabold text-white block">
                {t('certifications.bannerTitle')}
              </span>
              <span className="text-[12px] text-[#94a3b8]">
                {t('certifications.bannerSubtitle')}
              </span>
            </div>
          </div>

          <a
            href="https://www.credly.com/users/ignacio-brenas-munoz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-xl bg-white hover:bg-emerald-400 text-[#030805] px-5 text-[13px] font-bold transition-all shadow-md shrink-0 active:scale-95"
          >
            <span>{t('certifications.bannerCta')}</span>
            <ExternalLink className="size-4" />
          </a>
        </div>

        {/* Certifications Cards Grid */}
        <div className="mt-6 grid grid-cols-1 gap-5 w-full sm:grid-cols-2 items-stretch">
          {certs.map((c, cIdx) => {
            const isCopied = copiedId === c.id;
            const title = t(`certifications.${c.key}`);
            const desc = t(`certifications.${c.descKey}`);
            const issuer = t(`certifications.${c.issuerKey}`);

            return (
              <article 
                key={c.id} 
                className="group relative rounded-2xl p-6 bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between h-full shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
              >
                <div>
                  {/* Security Pass Header */}
                  <div className="flex items-start justify-between gap-3 pb-4 border-b border-white/10 text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-emerald-400 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/25 flex items-center gap-1">
                        <Award className="size-3" />
                        <span>{t('certifications.certificationNum')} #{cIdx + 1}</span>
                      </span>
                      <span className="text-white/60 font-medium">{issuer}</span>
                    </div>

                    <span 
                      className="rounded-full border px-2.5 py-0.5 font-bold tracking-wider bg-white/5"
                      style={{ borderColor: c.accentColor, color: c.accentColor }}
                    >
                      {c.date}
                    </span>
                  </div>

                  {/* Badge & Title Layout */}
                  <div className="mt-4 flex items-start gap-4">
                    <div className="relative size-14 shrink-0 p-1 rounded-lg bg-white/5 border border-white/10 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                      <img 
                        src={c.badgeImg} 
                        alt={title}
                        className="size-full object-contain filter drop-shadow" 
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-display text-[18px] sm:text-[19px] font-extrabold text-white leading-tight">
                        {title}
                      </h3>
                      <p className="mt-1 text-[11.5px] font-semibold text-white/60 uppercase">
                        {t('certifications.issuedBy')} {issuer}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3.5 text-[13px] leading-relaxed text-[#94a3b8]">
                    {desc}
                  </p>
                </div>

                {/* Perforated Security Stub (Ticket Separation) */}
                <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2.5">
                  <a
                    href={c.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>{t('certifications.verifyOnCredly')}</span>
                    <ExternalLink className="size-3.5" />
                  </a>

                  <button
                    onClick={() => handleCopy(c.id, c.credentialId)}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 px-3 py-1.5 text-[11px] font-medium text-white/90 hover:text-white transition-all active:scale-95"
                    title={t('certifications.copyId')}
                  >
                    {isCopied ? (
                      <>
                        <Check className="size-3 text-emerald-400" />
                        <span className="text-emerald-400">{t('certifications.copied')}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3 text-white/70" />
                        <span>{t('certifications.copyId')}</span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
