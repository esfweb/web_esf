import React, { useEffect, useState, useMemo } from 'react';
import { ShieldCheck, Lock, Loader2 } from 'lucide-react';

interface GhlFormEmbedProps {
  lang: 'en' | 'es';
}

const GHL_FORMS = {
  es: {
    id: 'CBbu2UfBMp4dCq7AKYOm',
    url: 'https://api.leadconnectorhq.com/widget/form/CBbu2UfBMp4dCq7AKYOm',
    iframeId: 'inline-CBbu2UfBMp4dCq7AKYOm',
    title: 'Formulario de Asesoría Gratuita ACA 2027 | Eversafe Financial',
  },
  en: {
    id: '1li3izJuH0ZHRGQcNNzp',
    url: 'https://api.leadconnectorhq.com/widget/form/1li3izJuH0ZHRGQcNNzp',
    iframeId: 'inline-1li3izJuH0ZHRGQcNNzp',
    title: 'ACA 2027 Free Consultation Form | Eversafe Financial',
  },
} as const;

export const GhlFormEmbed: React.FC<GhlFormEmbedProps> = ({ lang }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const currentConfig = GHL_FORMS[lang];

  // Load the GHL embed script once globally
  useEffect(() => {
    const SCRIPT_ID = 'ghl-form-embed-script';
    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Reset loading indicator when language changes
  useEffect(() => {
    setIframeLoaded(false);
  }, [lang]);

  // Construct iframe src with preserved UTM and attribution parameters
  const iframeSrc = useMemo(() => {
    if (typeof window === 'undefined') return currentConfig.url;

    try {
      const searchParams = new URLSearchParams(window.location.search);
      const utmParams = new URLSearchParams();

      const trackingKeys = [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_content',
        'utm_term',
        'fbclid',
        'gclid',
      ];

      trackingKeys.forEach((key) => {
        const val = searchParams.get(key);
        if (val) {
          utmParams.set(key, val);
        }
      });

      const queryString = utmParams.toString();
      return queryString ? `${currentConfig.url}?${queryString}` : currentConfig.url;
    } catch {
      return currentConfig.url;
    }
  }, [currentConfig.url]);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    // Trigger resize event so form_embed.js recalculates dimensions if supported
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('resize'));
    }
  };

  return (
    <div
      id="ghl-form-container"
      className="relative w-full rounded-3xl bg-white border border-brand-purple/20 shadow-[0_20px_50px_rgba(140,73,177,0.08)] overflow-hidden transition-all duration-300"
    >
      {/* Top Banner inside Card */}
      <div className="bg-gradient-to-r from-brand-purple/10 via-brand-purple-light to-accent/10 px-6 py-4 border-b border-brand-purple/15 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
            {lang === 'es' ? 'Completa el formulario' : 'Complete the Form'}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-brand-slate font-medium">
          <Lock className="w-3.5 h-3.5 text-brand-purple" />
          <span>{lang === 'es' ? 'Conexión Segura' : 'Secure Connection'}</span>
        </div>
      </div>

      {/* Form Content Area */}
      <div className="p-4 sm:p-6 md:p-8 min-h-[820px] sm:min-h-[869px] relative flex flex-col justify-start">
        {/* Loading Skeleton */}
        {!iframeLoaded && (
          <div className="absolute inset-x-4 top-8 bottom-8 flex flex-col items-center justify-center bg-white/90 z-10 transition-opacity duration-300">
            <div className="w-12 h-12 rounded-2xl bg-brand-purple-light flex items-center justify-center text-brand-purple mb-4 animate-spin">
              <Loader2 className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-brand-navy">
              {lang === 'es'
                ? 'Cargando formulario de Eversafe Financial...'
                : 'Loading Eversafe Financial form...'}
            </p>
            <p className="text-xs text-brand-slate mt-1">
              {lang === 'es'
                ? 'Conexión segura para tu solicitud'
                : 'Secure connection for your request'}
            </p>
          </div>
        )}

        {/* Single active official GHL iframe */}
        <div className="w-full h-full min-h-[820px] sm:min-h-[869px] overflow-visible">
          <iframe
            key={currentConfig.id}
            src={iframeSrc}
            id={currentConfig.iframeId}
            data-layout="INLINE"
            data-trigger-type="alwaysShow"
            data-activation-type="alwaysActivated"
            data-height="869"
            data-cookie-consent="true"
            data-cookie-consent-provider="auto"
            data-form-id={currentConfig.id}
            title={currentConfig.title}
            onLoad={handleIframeLoad}
            style={{
              width: '100%',
              minHeight: '869px',
              border: 'none',
              borderRadius: '12px',
              display: 'block',
            }}
            scrolling="no"
          />
        </div>
      </div>

      {/* Card Micro-Footer with Trust Guarantees */}
      <div className="bg-[#FAFBFD] px-6 py-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] text-brand-slate">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-accent" />
          <span>
            {lang === 'es'
              ? 'Atención directa con Mary Rivera, Licensed Insurance Advisor'
              : 'Direct consultation with Mary Rivera, Licensed Insurance Advisor'}
          </span>
        </div>
        <div className="text-slate-400">
          {lang === 'es'
            ? 'Sin costo de asesoría · Sin compromiso'
            : 'Zero advisory fee · No obligation'}
        </div>
      </div>
    </div>
  );
};
