import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, Download, FileText, ZoomIn, ZoomOut, RotateCcw, ExternalLink } from 'lucide-react';

interface CvPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvPreviewModal: React.FC<CvPreviewModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Close on Escape & Lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  // Reset zoom on open
  useEffect(() => {
    if (isOpen) {
      setZoomLevel(1);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 2.0));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  const cvPdfUrl = '/CV_IgnacioBreñasMuñoz.pdf';
  const cvPngUrl = '/CV_IgnacioBreñasMuñoz.png';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-4 md:p-6 transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col w-full max-w-5xl h-[94vh] max-h-[96vh] rounded-2xl border border-white/20 bg-[#060c08] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <header className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-white/10 bg-[#09140e]/95 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="flex items-center justify-center size-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
              <FileText className="size-4.5" />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <h3 id="cv-modal-title" className="font-display text-[15px] sm:text-[17px] font-extrabold text-white truncate">
                  {t('contact.cvModalTitle')}
                </h3>
                <span className="hidden sm:inline-flex items-center rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-mono font-bold text-emerald-400">
                  DAW · SOTERGUARD
                </span>
              </div>
              <p className="text-[11px] font-mono text-[#94a3b8] truncate">
                {t('contact.cvModalSubtitle')}
              </p>
            </div>
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Desktop Zoom Controls */}
            <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1 text-xs font-mono text-white/80">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.75}
                className="p-1 hover:text-white disabled:opacity-40 transition-colors cursor-pointer"
                title="Reducir zoom"
              >
                <ZoomOut className="size-3.5" />
              </button>
              <span className="px-1.5 text-[11px] text-emerald-400 min-w-10 text-center font-bold">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 2.0}
                className="p-1 hover:text-white disabled:opacity-40 transition-colors cursor-pointer"
                title="Aumentar zoom"
              >
                <ZoomIn className="size-3.5" />
              </button>
              {zoomLevel !== 1 && (
                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="p-1 text-[#94a3b8] hover:text-white transition-colors cursor-pointer ml-0.5 border-l border-white/10"
                  title="Restablecer zoom"
                >
                  <RotateCcw className="size-3" />
                </button>
              )}
            </div>

            {/* Download PDF button */}
            <a
              href={cvPdfUrl}
              download="CV_IgnacioBreñasMuñoz.pdf"
              className="inline-flex h-9 sm:h-10 items-center gap-2 rounded-full bg-white px-3.5 sm:px-4 text-[12px] sm:text-[13px] font-mono font-extrabold text-[#030805] hover:bg-[#e2e8f0] active:scale-95 transition-all shadow-md"
              title={t('contact.cvModalDownload')}
            >
              <Download className="size-3.5 sm:size-4 text-[#030805]" />
              <span className="hidden xs:inline">{t('contact.cvModalDownload')}</span>
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="flex items-center justify-center size-9 sm:size-10 rounded-full border border-white/15 bg-white/5 text-white/80 hover:text-white hover:bg-white/15 hover:border-white/40 active:scale-90 transition-all cursor-pointer"
              aria-label={t('contact.cvModalClose')}
              title={t('contact.cvModalClose')}
            >
              <X className="size-4.5" />
            </button>
          </div>
        </header>

        {/* Scrollable Document Container */}
        <div className="flex-1 overflow-auto bg-[#020603] p-3 sm:p-6 flex items-start justify-center">
          <div
            className="transition-transform duration-200 origin-top flex justify-center w-full"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <div className="relative rounded-lg shadow-2xl border border-white/10 bg-white overflow-hidden max-w-[850px] w-full">
              <img
                src={cvPngUrl}
                alt="Curriculum Vitae — Ignacio Breñas Muñoz"
                className="w-full h-auto object-contain block select-none"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Bottom Responsive Action Bar */}
        <footer className="flex items-center justify-between gap-3 px-4 sm:px-6 py-2.5 border-t border-white/10 bg-[#09140e]/95 text-xs font-mono text-[#94a3b8] shrink-0">
          <div className="flex items-center gap-2 text-[11px]">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">PDF Oficial Homologado · STUCOM & Soterguard</span>
            <span className="sm:hidden">PDF Oficial</span>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] text-[#38bdf8] hover:underline"
            >
              <span>Abrir PDF en pestaña</span>
              <ExternalLink className="size-3" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white text-[11px] font-bold cursor-pointer transition-colors"
            >
              {t('contact.cvModalClose')}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};
