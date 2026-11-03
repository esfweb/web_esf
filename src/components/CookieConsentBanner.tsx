import React, { useState, useEffect } from 'react';
import { Cookie, Check, X } from 'lucide-react';
import {
  getCookieConsent,
  saveCookieConsent,
  ConsentLevel,
} from '../utils/cookieConsent';

interface CookieConsentBannerProps {
  lang: 'en' | 'es';
}

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ lang }) => {
  // Whether the initial floating banner is visible
  const [showBanner, setShowBanner] = useState<boolean>(false);
  // Whether the detailed preferences modal is open
  const [showPreferences, setShowPreferences] = useState<boolean>(false);
  // Current marketing toggle inside preferences modal
  const [marketingAccepted, setMarketingAccepted] = useState<boolean>(false);

  useEffect(() => {
    const current = getCookieConsent();
    if (!current) {
      // No consent decision made yet -> show banner
      setShowBanner(true);
      setMarketingAccepted(false);
    } else {
      setShowBanner(false);
      setMarketingAccepted(current === 'all');
    }

    // Listen for external requests to reopen preferences (e.g. from footer links)
    const handleOpenPrefs = () => {
      const active = getCookieConsent();
      setMarketingAccepted(active === 'all');
      setShowPreferences(true);
    };

    window.addEventListener('esf_open_cookie_preferences', handleOpenPrefs);
    return () => {
      window.removeEventListener('esf_open_cookie_preferences', handleOpenPrefs);
    };
  }, []);

  const handleAcceptAll = () => {
    saveCookieConsent('all');
    setMarketingAccepted(true);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleRejectNonEssential = () => {
    saveCookieConsent('essential');
    setMarketingAccepted(false);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleSaveCustomPreferences = () => {
    const level: ConsentLevel = marketingAccepted ? 'all' : 'essential';
    saveCookieConsent(level);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const isEs = lang === 'es';

  return (
    <>
      {/* 1. COMPACT FLOATING BOTTOM BANNER */}
      {showBanner && (
        <aside
          role="dialog"
          aria-label={isEs ? 'Cookies y Privacidad' : 'Cookies & Privacy'}
          className="fixed bottom-2 sm:bottom-3 inset-x-0 z-50 px-2 sm:px-4 pointer-events-none transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
        >
          <div className="max-w-[920px] mx-auto bg-white/95 backdrop-blur-md rounded-[14px] border border-slate-200/90 shadow-[0_8px_30px_rgba(11,27,61,0.12)] px-[18px] py-[14px] pointer-events-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
              {/* Short Title & Text */}
              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Cookie className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-brand-navy">
                    {isEs ? 'Cookies y Privacidad' : 'Cookies & Privacy'}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-brand-slate leading-snug">
                  {isEs
                    ? 'Usamos cookies esenciales y, solo con tu permiso, cookies de medición para Meta Pixel.'
                    : 'We use essential cookies and, only with your consent, measurement cookies for Meta Pixel.'}
                </p>
              </div>

              {/* 3 Compact Action Buttons */}
              <div className="flex items-center justify-between sm:justify-end gap-1.5 shrink-0 w-full md:w-auto">
                <button
                  type="button"
                  onClick={() => setShowPreferences(true)}
                  className="flex-1 sm:flex-none px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-[11px] sm:text-xs font-semibold text-brand-navy transition-colors text-center"
                >
                  {isEs ? 'Configurar' : 'Preferences'}
                </button>

                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="flex-1 sm:flex-none px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-[11px] sm:text-xs font-semibold text-brand-navy transition-colors text-center"
                >
                  {isEs ? 'Solo necesarias' : 'Necessary only'}
                </button>

                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-none px-3 sm:px-3.5 py-1.5 rounded-lg bg-brand-purple hover:bg-brand-purple-dark text-white text-[11px] sm:text-xs font-semibold shadow-sm transition-all hover:scale-[1.02] text-center"
                >
                  {isEs ? 'Aceptar' : 'Accept'}
                </button>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* 2. COMPACT PREFERENCES MODAL (420px - 520px) */}
      {showPreferences && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-prefs-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-brand-navy/60 backdrop-blur-sm animate-in fade-in duration-200 pointer-events-auto"
        >
          <div className="w-full max-w-[480px] bg-white rounded-2xl border border-slate-200 shadow-2xl p-5 relative max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Cookie className="w-4 h-4 text-brand-purple" />
                <h3 id="cookie-prefs-title" className="text-sm sm:text-base font-bold text-brand-navy">
                  {isEs ? 'Preferencias de Cookies' : 'Cookie Preferences'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="w-7 h-7 rounded-full hover:bg-slate-100 flex items-center justify-center text-brand-slate hover:text-brand-navy transition-colors"
                aria-label={isEs ? 'Cerrar preferencias' : 'Close preferences'}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body: Only Two Clean Sections */}
            <div className="py-4 space-y-3">
              {/* Section 1: Technical & Essential Cookies */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start justify-between gap-3">
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold text-brand-navy">
                      {isEs ? 'Cookies técnicas y esenciales' : 'Technical & essential cookies'}
                    </span>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                      {isEs ? 'Siempre activas' : 'Always active'}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-brand-slate leading-relaxed">
                    {isEs
                      ? 'Necesarias para la navegación básica, seguridad y funcionamiento del sitio y formularios.'
                      : 'Necessary for core navigation, security, and embedded form functionality.'}
                  </p>
                </div>
                <div className="pt-0.5 shrink-0">
                  <div className="w-8 h-5 bg-brand-purple/20 rounded-full p-0.5 cursor-not-allowed opacity-80 flex items-center justify-end">
                    <div className="w-4 h-4 rounded-full bg-brand-purple flex items-center justify-center text-white text-[8px]">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Advertising & Measurement Cookies */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-brand-purple/40 transition-colors flex items-start justify-between gap-3">
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold text-brand-navy">
                      {isEs ? 'Cookies de publicidad y medición' : 'Advertising & measurement cookies'}
                    </span>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-brand-purple/10 text-brand-purple">
                      {isEs ? 'Opcional' : 'Optional'}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-brand-slate leading-relaxed">
                    {isEs
                      ? 'Permiten medir la efectividad de campañas en Meta Pixel. No recopilamos datos de salud.'
                      : 'Used to measure Meta Pixel campaign effectiveness. No health or medical data is collected.'}
                  </p>
                </div>
                <div className="pt-0.5 shrink-0">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={marketingAccepted}
                    onClick={() => setMarketingAccepted(!marketingAccepted)}
                    className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-1 ${
                      marketingAccepted ? 'bg-brand-purple' : 'bg-slate-200'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ease-in-out ${
                        marketingAccepted ? 'translate-x-4' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Bottom Buttons */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-2 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="w-full sm:w-auto px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 text-xs font-semibold text-brand-navy hover:bg-slate-50 transition-colors text-center"
              >
                {isEs ? 'Rechazar opcionales' : 'Reject optional'}
              </button>
              <button
                type="button"
                onClick={handleSaveCustomPreferences}
                className="w-full sm:w-auto px-3 py-1.5 rounded-lg border border-brand-purple/40 text-brand-purple hover:bg-brand-purple/5 text-xs font-semibold transition-colors text-center"
              >
                {isEs ? 'Guardar' : 'Save'}
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="w-full sm:w-auto px-3.5 py-1.5 rounded-lg bg-brand-purple hover:bg-brand-purple-dark text-white text-xs font-semibold shadow-sm transition-all hover:scale-[1.02] text-center"
              >
                {isEs ? 'Aceptar' : 'Accept'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
