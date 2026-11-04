import React, { useState, useEffect } from 'react';
import { CheckCircle2, Calendar, ShieldCheck, ArrowRight, ArrowLeft, Globe2 } from 'lucide-react';
import { CookieConsentBanner } from '../../components/CookieConsentBanner';
import { openCookiePreferences } from '../../utils/cookieConsent';
import { initMetaPixelIfConsented } from '../../utils/metaPixel';

export const ThankYouPage: React.FC = () => {
  // Language resolution: URL param > localStorage > default 'es'
  const [lang, setLang] = useState<'en' | 'es'>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang')?.toLowerCase();
      if (urlLang === 'es' || urlLang === 'en') {
        return urlLang;
      }
      const saved = localStorage.getItem('esf_preferred_lang')?.toLowerCase();
      if (saved === 'es' || saved === 'en') {
        return saved as 'en' | 'es';
      }
    }
    return 'es';
  });

  // Initialize Meta Pixel conditionally if marketing consent is granted (Standard PageView only)
  // Per requirements: No automatic Meta Lead event is triggered on this URL.
  useEffect(() => {
    initMetaPixelIfConsented();
  }, []);

  // Update document title, description and html lang attribute dynamically
  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.documentElement.lang = lang === 'es' ? 'es-US' : 'en-US';

    const pageTitle =
      lang === 'es'
        ? '¡Recibimos tu solicitud! | Eversafe Financial'
        : 'We received your request! | Eversafe Financial';

    const pageDesc =
      lang === 'es'
        ? 'Gracias por contactar a Eversafe Financial. Hemos recibido tu información para ayudarte a explorar tus opciones de cobertura ACA 2027.'
        : "Thank you for contacting Eversafe Financial. We've received your information to help you explore your ACA 2027 coverage options.";

    document.title = pageTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', pageDesc);
  }, [lang]);

  // Language switcher that preserves query parameters
  const switchLanguage = (newLang: 'en' | 'es') => {
    if (newLang === lang) return;
    setLang(newLang);

    if (typeof window !== 'undefined') {
      localStorage.setItem('esf_preferred_lang', newLang);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLang);
      window.history.replaceState({}, '', url.toString());
    }
  };

  const isEs = lang === 'es';

  return (
    <div className="min-h-screen bg-[#FAFBFD] text-brand-navy flex flex-col font-sans selection:bg-brand-purple/20 selection:text-brand-purple">
      {/* Minimal Top Header */}
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="https://eversafefinancial.com/"
            className="flex items-center gap-3 transition-transform duration-200 hover:scale-[1.01]"
            title="Eversafe Financial — Home"
          >
            <img
              src="https://res.cloudinary.com/drghl4bjl/image/upload/f_auto,q_auto/v1783574808/eversafe-financial-isotype-full-color_gjverm.png"
              alt="Eversafe Financial Logo"
              className="h-8 sm:h-9 w-auto object-contain"
            />
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-brand-navy leading-none font-display">
                Eversafe <span className="text-brand-purple">Financial</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-brand-slate font-semibold mt-1">
                ACA 2027
              </span>
            </div>
          </a>

          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-full border border-slate-200 text-xs font-bold">
            <button
              type="button"
              onClick={() => switchLanguage('es')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                lang === 'es'
                  ? 'bg-white text-brand-purple shadow-sm'
                  : 'text-brand-slate hover:text-brand-navy'
              }`}
              aria-label="Cambiar a español"
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => switchLanguage('en')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                lang === 'en'
                  ? 'bg-white text-brand-purple shadow-sm'
                  : 'text-brand-slate hover:text-brand-navy'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Main Centered Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="max-w-lg w-full bg-white rounded-3xl p-8 sm:p-11 border border-slate-200/70 shadow-[0_20px_50px_rgba(18,32,51,0.06)] text-center transition-all">
          {/* Turquoise Confirmation Icon */}
          <div className="w-20 h-20 rounded-3xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#00A896] mx-auto mb-6 shadow-sm">
            <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight font-display mb-4">
            {isEs ? '¡Recibimos tu solicitud!' : 'We received your request!'}
          </h1>

          {/* Body Text */}
          <p className="text-sm sm:text-base text-brand-slate leading-relaxed mb-8 max-w-md mx-auto">
            {isEs
              ? 'Gracias por contactar a Eversafe Financial. Hemos recibido tu información para ayudarte a explorar tus opciones de cobertura ACA 2027.'
              : "Thank you for contacting Eversafe Financial. We've received your information to help you explore your ACA 2027 coverage options."}
          </p>

          {/* Primary CTA: Schedule my free consultation */}
          <div className="flex flex-col gap-3.5 mb-8">
            <a
              href="https://eversafefinancial.com/book"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-brand-purple text-white font-bold text-base shadow-lg shadow-brand-purple/25 hover:bg-brand-purple-hover active:scale-[0.99] transition-all group"
            >
              <Calendar className="w-5 h-5 text-white/90" />
              <span>
                {isEs ? 'Agendar mi asesoría gratuita' : 'Schedule my free consultation'}
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Secondary navigation back to main website */}
            <a
              href="https://eversafefinancial.com/"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-brand-slate hover:text-brand-purple transition-colors py-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>
                {isEs ? 'Volver a la página principal' : 'Return to main website'}
              </span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-brand-slate/80">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00A896]" />
              <span className="font-medium">
                Mary Rivera · Licensed Insurance Advisor
              </span>
            </div>
            <span className="hidden sm:inline text-slate-300">·</span>
            <span>
              {isEs ? 'Asesoría sin costo ni compromiso' : 'No cost, no obligation consultation'}
            </span>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="w-full py-6 px-4 text-center text-xs text-brand-slate/70 border-t border-slate-100 bg-white/50">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Eversafe Financial. {isEs ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://eversafefinancial.com/#privacy"
              className="hover:text-brand-purple transition-colors"
            >
              {isEs ? 'Política de Privacidad' : 'Privacy Policy'}
            </a>
            <span>·</span>
            <button
              type="button"
              onClick={openCookiePreferences}
              className="hover:text-brand-purple transition-colors cursor-pointer"
            >
              {isEs ? 'Configuración de Cookies' : 'Cookie Settings'}
            </button>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      <CookieConsentBanner />
    </div>
  );
};
