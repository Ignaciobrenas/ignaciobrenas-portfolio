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
        <div className="mt-7 w-full rounded-[24px] border-2 border-white/25 bg-gradient-to-r from-[#0d2a1b] via-[#071910] to-[#030906] p-5 sm:p-6 shadow-[0_12px_35px_rgba(0,0,0,0.7)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-xl bg-white/10 border border-white/30 flex items-center justify-center text-white shrink-0">
              <ShieldCheck className="size-6 text-[#10b981]" />
            </div>
            <div>
              <span className="font-display text-[18px] font-extrabold text-white block">
                Credly Verified Credentials
              </span>
              <span className="text-[13px] font-mono text-[#94a3b8]">
                ID: ignacio-brenas-munoz · Cisco & IBM Issued
              </span>
            </div>
          </div>

          <a
            href="https://www.credly.com/users/ignacio-brenas-munoz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full bg-white px-5 text-[13.5px] font-extrabold text-[#030805] hover:bg-[#e2e8f0] active:scale-95 transition-all shadow-md shrink-0"
          >
            <span>{t('certifications.visitCredlyProfile')}</span>
          </a>
        </div>

        {/* Certifications Cards Grid */}
        <div className="mt-6 grid grid-cols-1 gap-5 w-full sm:grid-cols-2 items-stretch">
          {certs.map((c) => {
            const isCopied = copiedId === c.id;
            const title = t(`certifications.${c.key}`);
            const desc = t(`certifications.${c.descKey}`);
            const issuer = t(`certifications.${c.issuerKey}`);

            return (
              <article 
                key={c.id} 
                className={`group relative rounded-[22px] border border-white/15 bg-gradient-to-br ${c.bgGradient} p-6 shadow-md hover:border-white hover:shadow-[0_12px_35px_rgba(255,255,255,0.1)] transition-all duration-300 flex flex-col justify-between h-full`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    {/* Badge Image Thumbnail */}
                    <div className="relative size-16 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <img 
                        src={c.badgeImg} 
                        alt={title}
                        className="size-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]" 
                      />
                    </div>

                    <span 
                      className="rounded-full border px-3 py-0.5 font-mono text-[11px] font-extrabold tracking-wider bg-white/5"
                      style={{ borderColor: c.accentColor, color: c.accentColor }}
                    >
                      {c.date}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="mt-4 font-display text-[19px] sm:text-[20px] font-extrabold text-white leading-tight">
                    {title}
                  </h3>
                  <p className="mt-1 font-mono text-[12px] font-bold text-white/70">
                    {issuer}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-[13.5px] leading-relaxed text-[#94a3b8]">
                    {desc}
                  </p>
                </div>

                {/* Bottom Actions: Credly Link & Copy ID */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-2.5 pt-4 border-t border-white/10">
                  <a
                    href={c.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-white hover:text-[#10b981] transition-colors"
                  >
                    <span>{t('certifications.viewOnCredly')}</span>
                    <ExternalLink className="size-3.5" />
                  </a>

                  <button
                    onClick={() => handleCopy(c.id, c.credentialId)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#030805] px-3 py-1 font-mono text-[11px] font-bold text-white hover:border-white transition-all active:scale-95"
                    title={t('certifications.copyId')}
                  >
                    {isCopied ? (
                      <>
                        <Check className="size-3 text-[#10b981]" />
                        <span className="text-[#10b981]">{t('certifications.copied')}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3 text-white" />
                        <span>{t('certifications.copyId')}</span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Progress Footer for chapter */}
        <p className="mt-10 flex items-center gap-3.5 text-[14px] font-bold text-[#94a3b8]">
          <span className="flex gap-[5px]" aria-hidden="true">
            <span className="h-2.5 w-3.5 rounded-full bg-[#10b981]" />
            <span className="h-2.5 w-3.5 rounded-full bg-[#10b981]" />
            <span className="h-2.5 w-3.5 rounded-full bg-[#10b981]" />
            <span className="h-2.5 w-[30px] rounded-full bg-[#10b981]" />
            <span className="h-2.5 w-3.5 rounded-full bg-white/20" />
          </span>
          <span>{t('certifications.nextChapter')}</span>
        </p>

      </div>
    </section>
  );
};
