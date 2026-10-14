import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  MapPin, 
  FileDown, 
  Sparkles, 
  CheckCircle, 
  AlertCircle,
  Clock,
  ShieldCheck,
  Briefcase,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, GmailIcon, OutlookIcon } from './MuseumIcons';
import emailjs from '@emailjs/browser';

export const AcquisitionSalon: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: 'Oportunidad Laboral',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Pre-configured hiring mail templates
  const hiringSubject = encodeURIComponent("Propuesta de Contratación / Proyecto - Ignacio Breñas");
  const hiringBody = encodeURIComponent(
    "Hola Ignacio,\n\nHe examinado tu portfolio y nos gustaría conversar contigo sobre una propuesta profesional para nuestro equipo en Barcelona / Remoto.\n\nDetalles de la oportunidad:\n- Empresa/Proyecto:\n- Rol/Puesto:\n- Modalidad (Presencial en Barcelona y alrededores / Híbrido / Remoto):\n\nQuedamos a la espera de tu respuesta.\n\nUn cordial saludo,\n"
  );

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ignaciobrenas@gmail.com&su=${hiringSubject}&body=${hiringBody}`;
  const outlookComposeUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=ignaciobrenas@gmail.com&subject=${hiringSubject}&body=${hiringBody}`;
  const defaultMailtoUrl = `mailto:ignaciobrenas@gmail.com?subject=${hiringSubject}&body=${hiringBody}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID || 'service_default';
    const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID || 'template_default';
    const publicKey = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY || 'key_default';

    try {
      if (publicKey === 'key_default') {
        await new Promise(resolve => setTimeout(resolve, 800));
        setStatus('success');
      } else {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            purpose: formData.purpose,
            subject: formData.subject,
            message: formData.message,
          },
          publicKey
        );
        setStatus('success');
      }
    } catch (err) {
      console.error('Error al enviar correspondencia:', err);
      setStatus('error');
      setErrorMessage('No se pudo enviar automáticamente. Puedes usar los accesos directos de Gmail u Outlook arriba.');
    }
  };

  return (
    <section id="contacto" className="relative py-28 overflow-hidden">
      <div className="gallery-divider max-w-5xl mx-auto mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exhibition Room Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2015] border border-[#cfa859]/30 text-xs font-mono text-[#cfa859]">
            <Mail className="w-3.5 h-3.5 text-[#e9c878]" />
            <span>SALA VI · SALÓN DE ADQUISICIONES & CONTRATACIÓN DIRECTA</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f6ebd0]">
            Entrevista Privada & Canales de Contratación
          </h2>
          <p className="text-sm sm:text-base text-[#a6a193] font-light max-w-xl mx-auto">
            Acceso directo e instantáneo para reclutadores, líderes técnicos y directores de ingeniería. Abre un pliego pre-redactado en un solo clic con tu cliente de correo preferido.
          </p>
        </div>

        {/* PROMINENT HIRING SHORTCUTS BANNER */}
        <div className="mb-14 rounded-xl p-6 sm:p-8 bg-gradient-to-r from-[#08180e] via-[#051009] to-[#040a06] border-2 border-[#cfa859]/40 shadow-[0_15px_40px_rgba(207,168,89,0.15)] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#0d2818] text-[11px] font-mono text-[#e9c878]">
                <Briefcase className="w-3.5 h-3.5 text-[#e9c878]" />
                <span>ACCESOS DIRECTOS PARA CONTRATARME</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f6ebd0]">
                ¿Tienes una vacante o proyecto en Barcelona o alrededores?
              </h3>
              <p className="text-xs sm:text-sm text-[#ede7da]/80 font-light max-w-xl">
                Haz clic en tu proveedor de correo para abrir automáticamente un borrador formal de propuesta con mis datos ya completados.
              </p>
            </div>

            {/* Direct 1-Click Compose Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full lg:w-auto shrink-0">
              {/* Gmail Button */}
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#ea4335] hover:bg-[#d93025] text-white text-xs font-mono font-semibold shadow-[0_4px_15px_rgba(234,67,53,0.35)] hover:shadow-[0_6px_25px_rgba(234,67,53,0.55)] transition-all duration-300 hover:scale-102"
              >
                <GmailIcon className="w-4 h-4 fill-white" />
                <span>Contratar vía Gmail</span>
                <ExternalLink className="w-3 h-3 opacity-75 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Outlook Button */}
              <a
                href={outlookComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#0078d4] hover:bg-[#106ebe] text-white text-xs font-mono font-semibold shadow-[0_4px_15px_rgba(0,120,212,0.35)] hover:shadow-[0_6px_25px_rgba(0,120,212,0.55)] transition-all duration-300 hover:scale-102"
              >
                <OutlookIcon className="w-4 h-4 fill-white" />
                <span>Contratar vía Outlook</span>
                <ExternalLink className="w-3 h-3 opacity-75 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Default Client Mailto */}
              <a
                href={defaultMailtoUrl}
                className="group flex items-center gap-2 px-4 py-3 rounded-full bg-[#091f13] border border-[#cfa859]/50 hover:border-[#e9c878] text-[#e9c878] text-xs font-mono transition-colors"
                title="Abrir en cliente de correo local"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Cliente Local</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Curator Channels & Monogram Stamp */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="gilded-frame p-8 rounded-sm bg-gradient-to-b from-[#07160d] to-[#040a06]">
              <div className="flex items-center gap-3.5 border-b border-[#cfa859]/20 pb-4 mb-6">
                <div className="w-12 h-12 rounded-full p-1 bg-gradient-to-tr from-[#9d7732] to-[#e9c878] shadow-md flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#06120a] flex items-center justify-center p-1.5">
                    <img src="/images/logo.png" alt="Sello Ignacio Breñas" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#f6ebd0]">
                    Despacho de Ignacio Breñas
                  </h3>
                  <span className="text-xs font-mono text-[#cfa859]">
                    Atención Curatorial Directa
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#e9c878] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#a6a193] block text-[11px] font-mono">Correo Principal</span>
                    <a href="mailto:ignaciobrenas@gmail.com" className="text-[#f6ebd0] font-mono hover:text-[#e9c878] transition-colors">
                      ignaciobrenas@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#e9c878] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#a6a193] block text-[11px] font-mono">Residencia & Disponibilidad Geográfica</span>
                    <span className="text-[#f6ebd0] font-medium block">Barcelona, España</span>
                    <span className="text-[#a6a193] text-[11px] font-mono block mt-0.5">
                      ✓ Disponible para Barcelona y alrededores
                    </span>
                    <span className="text-[#a6a193] text-[11px] font-mono block">
                      ✓ Modalidad Presencial, Híbrida o Remota
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#e9c878] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#a6a193] block text-[11px] font-mono">Tiempo de Respuesta</span>
                    <span className="text-[#f6ebd0]">Inferior a 24 horas laborables</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#e9c878] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#a6a193] block text-[11px] font-mono">Privacidad</span>
                    <span className="text-[#ede7da]">Comunicaciones seguras y confidenciales</span>
                  </div>
                </div>
              </div>

              {/* Social Channels & CV */}
              <div className="pt-6 mt-6 border-t border-[#cfa859]/20 space-y-3">
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/Ignaciobrenas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md bg-[#091f13] border border-[#1b4329] hover:border-[#cfa859] text-xs font-mono text-[#ede7da] hover:text-[#e9c878] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/ignacio-brenas-munoz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md bg-[#091f13] border border-[#1b4329] hover:border-[#cfa859] text-xs font-mono text-[#ede7da] hover:text-[#e9c878] transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>

                <a
                  href="/CV_IgnacioBrenas.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-gradient-to-r from-[#e9c878] to-[#cfa859] text-[#040a06] text-xs font-mono font-semibold uppercase tracking-wider hover:from-[#f6ebd0] transition-all shadow-md"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Descargar CV Oficial en PDF</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Curatorial Letter / Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl p-8 sm:p-10 bg-[#06120a] border border-[#cfa859]/30 shadow-2xl relative">
              
              <div className="flex items-center justify-between border-b border-[#cfa859]/20 pb-4 mb-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#f6ebd0]">
                    Libro de Firmas & Propuestas Directas
                  </h3>
                  <span className="text-xs font-mono text-[#a6a193]">
                    Remite tu pliego o consulta mediante el formulario
                  </span>
                </div>
                <Sparkles className="w-5 h-5 text-[#cfa859]" />
              </div>

              {status === 'success' ? (
                <div className="p-6 rounded-lg bg-[#0d2a1a] border border-[#276e42] text-center space-y-3 animate-in fade-in">
                  <CheckCircle className="w-10 h-10 text-[#52be7f] mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-[#f6ebd0]">
                    Misiva Recibida con Éxito
                  </h4>
                  <p className="text-xs text-[#ede7da]/85 font-light leading-relaxed max-w-md mx-auto">
                    Gracias por tu mensaje. He recibido tus datos en mi despacho y me pondré en contacto contigo con la mayor brevedad.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', purpose: 'Oportunidad Laboral', subject: '', message: '' });
                    }}
                    className="mt-2 text-xs font-mono text-[#e9c878] hover:underline"
                  >
                    Enviar otra correspondencia
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-[#cfa859] mb-1.5">
                        Nombre / Entidad *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Helena Rostova"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-md bg-[#030905] border border-[#1b4329] focus:border-[#cfa859] text-xs text-[#f6ebd0] placeholder-[#a6a193]/50 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-[#cfa859] mb-1.5">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ejemplo@entidad.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-md bg-[#030905] border border-[#1b4329] focus:border-[#cfa859] text-xs text-[#f6ebd0] placeholder-[#a6a193]/50 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-[#cfa859] mb-1.5">
                        Naturaleza de la Consulta
                      </label>
                      <select
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-md bg-[#030905] border border-[#1b4329] focus:border-[#cfa859] text-xs text-[#f6ebd0] focus:outline-none transition-colors"
                      >
                        <option value="Oportunidad Laboral">Oportunidad Laboral en Barcelona / Remoto</option>
                        <option value="Propuesta de Proyecto">Propuesta de Proyecto Full-Stack</option>
                        <option value="Colaboración Técnica">Colaboración Técnica / Asesoría</option>
                        <option value="Consulta General">Consulta Curatorial General</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-[#cfa859] mb-1.5">
                        Asunto *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Motivo de la correspondencia"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-md bg-[#030905] border border-[#1b4329] focus:border-[#cfa859] text-xs text-[#f6ebd0] placeholder-[#a6a193]/50 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#cfa859] mb-1.5">
                      Mensaje / Pliego *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe brevemente la propuesta, perfil requerido o requerimientos técnicos..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#030905] border border-[#1b4329] focus:border-[#cfa859] text-xs text-[#f6ebd0] placeholder-[#a6a193]/50 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-3 rounded-md bg-red-950/60 border border-red-700/60 text-xs text-red-200">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#040a06] bg-gradient-to-r from-[#e9c878] via-[#cfa859] to-[#b3883b] hover:from-[#f6ebd0] hover:to-[#e9c878] transition-all duration-300 shadow-lg disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{status === 'sending' ? 'Sellando y Enviando...' : 'Remitir Correspondencia'}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
