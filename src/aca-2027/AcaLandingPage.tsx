import React, { useState, useEffect } from 'react';
import {
  Shield,
  ShieldCheck,
  UserCheck,
  CheckCircle2,
  FileText,
  Clock,
  HelpCircle,
  ExternalLink,
  Phone,
  Mail,
  ChevronDown,
  ArrowRight,
  Globe2,
  Lock,
} from 'lucide-react';
import { GhlFormEmbed } from './GhlFormEmbed';
import { CookieConsentBanner } from '../components/CookieConsentBanner';
import { openCookiePreferences } from '../utils/cookieConsent';
import { initMetaPixelIfConsented } from '../utils/metaPixel';

export const AcaLandingPage: React.FC = () => {
  // Language resolution: URL param > localStorage > default 'en'
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
    return 'en';
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Initialize Meta Pixel conditionally if marketing consent is already active
  useEffect(() => {
    initMetaPixelIfConsented();
  }, []);

  // Sync document title, description, and html lang attribute dynamically
  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.documentElement.lang = lang === 'es' ? 'es-US' : 'en-US';

    const pageTitle =
      lang === 'es'
        ? '¿Buscas seguro médico para 2027? | Eversafe Financial'
        : 'Looking for Health Insurance in 2027? | Eversafe Financial';

    const pageDesc =
      lang === 'es'
        ? 'Conoce, revisa o renueva tus opciones de cobertura ACA (Obamacare) para 2027 y verifica si calificas para subsidios. Asesoría personalizada y gratuita con Mary Rivera.'
        : 'Explore, review, or renew your ACA (Obamacare) health coverage for 2027 and check your eligibility for premium tax credits. Free, personalized guidance with Mary Rivera.';

    document.title = pageTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', pageDesc);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', pageDesc);
  }, [lang]);

  // Handle language switch while preserving UTM and query parameters
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

  const scrollToForm = () => {
    const formElement = document.getElementById('ghl-form-container');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FAFBFD] text-brand-navy flex flex-col font-sans selection:bg-brand-purple/20 selection:text-brand-purple">
      {/* 1. MINIMAL HEADER */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="https://eversafefinancial.com/"
            className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.01]"
            title="Eversafe Financial — Home"
          >
            <img
              src="https://res.cloudinary.com/drghl4bjl/image/upload/f_auto,q_auto/v1783574808/eversafe-financial-isotype-full-color_gjverm.png"
              alt="Eversafe Financial Logo"
              className="h-9 w-auto object-contain"
            />
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-brand-navy leading-none font-display">
                Eversafe <span className="text-brand-purple">Financial</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-brand-slate font-semibold mt-1">
                ACA 2027 Advisory
              </span>
            </div>
          </a>

          {/* Right actions: Return link + Language Selector */}
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href="https://eversafefinancial.com/"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-brand-slate hover:text-brand-purple transition-colors"
            >
              <span>{lang === 'es' ? '← Ir a web principal' : '← Main website'}</span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center p-1 bg-slate-100 rounded-full border border-slate-200 text-xs font-bold">
              <button
                type="button"
                onClick={() => switchLanguage('en')}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-brand-purple text-white shadow-sm'
                    : 'text-brand-slate hover:text-brand-navy'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => switchLanguage('es')}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  lang === 'es'
                    ? 'bg-brand-purple text-white shadow-sm'
                    : 'text-brand-slate hover:text-brand-navy'
                }`}
                aria-label="Cambiar a Español"
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. MAIN CONVERSION SECTION (HERO + GHL FORM IN 2-COL DESKTOP) */}
      <main className="flex-1">
        <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-hero-pattern">
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-brand-purple/10 to-accent/10 blur-3xl pointer-events-none -z-10 rounded-full" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* LEFT COLUMN: HERO, BENEFITS & TRUST (Desktop: 7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                {/* Micro Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple-light border border-brand-purple/20 text-brand-purple text-xs font-semibold w-fit mb-5">
                  <Shield className="w-3.5 h-3.5 text-brand-purple" />
                  <span>
                    {lang === 'es'
                      ? 'Inscripción Abierta & Calificación Especial 2027'
                      : '2027 Open Enrollment & Special Guidance'}
                  </span>
                </div>

                {/* Hero Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-[1.15] mb-5 font-display">
                  {lang === 'es' ? (
                    <>
                      ¿Buscas seguro médico para{' '}
                      <span className="text-brand-purple">2027</span>?
                    </>
                  ) : (
                    <>
                      Looking for Health Insurance in{' '}
                      <span className="text-brand-purple">2027</span>?
                    </>
                  )}
                </h1>

                {/* Hero Description */}
                <p className="text-base sm:text-lg text-brand-slate leading-relaxed mb-6 max-w-xl font-normal">
                  {lang === 'es'
                    ? 'Conoce, revisa o renueva tus opciones de cobertura ACA (Obamacare) para 2027 y verifica si calificas para subsidios.'
                    : 'Explore, review, or renew your ACA (Obamacare) health coverage for 2027 and check your eligibility for premium tax credits.'}
                </p>

                {/* 2027 Open Enrollment Key Dates */}
                <div className="mb-6 p-4 rounded-2xl bg-white border border-brand-purple/15 shadow-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                    {/* Date Item 1: Open Enrollment Window */}
                    <div className="sm:pr-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-purple block">
                        {lang === 'es' ? 'Inscripción Abierta 2027' : '2027 Open Enrollment'}
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-brand-navy mt-1">
                        🗓️ {lang === 'es' ? '1 nov. 2026 – 15 ene. 2027' : 'Nov 1, 2026 – Jan 15, 2027'}
                      </p>
                      <p className="text-xs text-brand-slate mt-1 leading-normal">
                        {lang === 'es'
                          ? 'Inscríbete, renueva o cambia tu plan de salud.'
                          : 'Enroll, renew, or change your health plan.'}
                      </p>
                    </div>

                    {/* Date Item 2: Dec 15 Deadline */}
                    <div className="pt-3 sm:pt-0 sm:pl-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-purple block">
                        {lang === 'es' ? 'Fecha límite: 15 dic.' : 'Dec 15 Deadline'}
                      </span>
                      <p className="text-xs text-brand-slate mt-1 leading-normal">
                        {lang === 'es'
                          ? 'Inscríbete hasta el 15 de diciembre de 2026 para tener cobertura desde el 1 de enero de 2027, sujeto a completar la inscripción y pagar la primera prima.'
                          : 'Enroll by Dec 15, 2026, for coverage starting Jan 1, 2027, subject to enrollment completion and payment of the first premium.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile Quick CTA (smooth scroll to form right below) */}
                <div className="lg:hidden mb-8">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-brand-purple text-white font-bold text-base shadow-lg shadow-brand-purple/25 hover:bg-brand-purple-hover active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <span>
                      {lang === 'es' ? 'Solicitar asesoría gratuita' : 'Request a Free Consultation'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-brand-slate/80 text-center sm:text-left mt-2">
                    {lang === 'es'
                      ? 'Toma menos de 2 minutos · Sin costo para ti'
                      : 'Takes under 2 minutes · No advisory fees'}
                  </p>
                </div>

                {/* BENEFITS GRID (4 key benefits without guaranteed promises) */}
                <div className="mt-2 mb-8">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-brand-slate mb-4">
                    {lang === 'es' ? 'Lo que recibirás en tu asesoría' : 'What your consultation includes'}
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Benefit 1 */}
                    <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-start gap-3.5 hover:border-brand-purple/20 transition-colors">
                      <div className="w-9 h-9 rounded-xl bg-brand-purple-light flex items-center justify-center text-brand-purple shrink-0 mt-0.5">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-brand-navy leading-tight">
                          {lang === 'es' ? 'Orientación personalizada' : 'Personalized guidance'}
                        </h3>
                        <p className="text-xs text-brand-slate mt-1 leading-normal">
                          {lang === 'es'
                            ? 'Conversación clara para entender las preferencias y prioridades de cobertura de tu hogar.'
                            : 'Clear discussion to understand your household’s coverage priorities and preferences.'}
                        </p>
                      </div>
                    </div>

                    {/* Benefit 2 */}
                    <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-start gap-3.5 hover:border-brand-purple/20 transition-colors">
                      <div className="w-9 h-9 rounded-xl bg-brand-purple-light flex items-center justify-center text-brand-purple shrink-0 mt-0.5">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-brand-navy leading-tight">
                          {lang === 'es'
                            ? 'Revisión de opciones de cobertura'
                            : 'Coverage options review'}
                        </h3>
                        <p className="text-xs text-brand-slate mt-1 leading-normal">
                          {lang === 'es'
                            ? 'Revisión de planes disponibles, beneficios, costos y opciones de cobertura en tu área.'
                            : 'Review available plans, benefits, costs, and coverage options in your area.'}
                        </p>
                      </div>
                    </div>

                    {/* Benefit 3 */}
                    <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-start gap-3.5 hover:border-brand-purple/20 transition-colors">
                      <div className="w-9 h-9 rounded-xl bg-brand-purple-light flex items-center justify-center text-brand-purple shrink-0 mt-0.5">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-brand-navy leading-tight">
                          {lang === 'es'
                            ? 'Elegibilidad para subsidios'
                            : 'Premium tax credit eligibility'}
                        </h3>
                        <p className="text-xs text-brand-slate mt-1 leading-normal">
                          {lang === 'es'
                            ? 'Orientación sobre los requisitos y factores que determinan la posible ayuda federal para el pago de primas.'
                            : 'Guidance on the requirements and factors that determine potential federal premium tax credits.'}
                        </p>
                      </div>
                    </div>

                    {/* Benefit 4 */}
                    <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-start gap-3.5 hover:border-brand-purple/20 transition-colors">
                      <div className="w-9 h-9 rounded-xl bg-brand-purple-light flex items-center justify-center text-brand-purple shrink-0 mt-0.5">
                        <Globe2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-brand-navy leading-tight">
                          {lang === 'es'
                            ? 'Atención en inglés y español'
                            : 'Support in English and Spanish'}
                        </h3>
                        <p className="text-xs text-brand-slate mt-1 leading-normal">
                          {lang === 'es'
                            ? 'Comunicación clara en tu idioma preferido para resolver tus preguntas sin presiones.'
                            : 'Clear communication in your preferred language to answer questions with no pressure.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* LICENSED ADVISOR TRUST BOX (Mary Rivera) */}
                <div className="p-5 sm:p-6 rounded-3xl bg-white border border-brand-purple/15 shadow-sm mt-2 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="relative shrink-0">
                    <img
                      src="https://res.cloudinary.com/drghl4bjl/image/upload/q_auto/f_auto/v1781560568/mary-rivera-licensed-insurance-advisor-eversafe-financial.jpg_hgybkk.jpg"
                      alt="Mary Rivera - Licensed Insurance Advisor at Eversafe Financial"
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-brand-purple/20 shadow-md"
                    />
                    <div
                      className="absolute -bottom-2 -right-2 bg-accent text-white p-1 rounded-full shadow"
                      title="Mary Rivera, Licensed Insurance Advisor"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="text-center sm:text-left flex-1">
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-accent uppercase tracking-wider mb-1">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span>{lang === 'es' ? 'Asesora de Seguros' : 'Licensed Advisor'}</span>
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy leading-tight">
                      Mary Rivera
                    </h3>
                    <p className="text-xs text-brand-purple font-semibold">
                      {lang === 'es'
                        ? 'Licensed Insurance Advisor · Eversafe Financial'
                        : 'Licensed Insurance Advisor · Eversafe Financial'}
                    </p>
                    <p className="text-xs text-brand-slate mt-2 leading-relaxed">
                      {lang === 'es'
                        ? '«Mi objetivo es brindarte orientación transparente para que conozcas las opciones de seguro médico disponibles y comprendas los criterios de ayuda económica según las pautas oficiales.»'
                        : '“My goal is to provide clear, transparent guidance so you can explore available health coverage options and understand financial assistance guidelines according to official standards.”'}
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: GHL FORM CARD (Desktop: 5 cols, Sticky on large screens) */}
              <div className="lg:col-span-5 w-full">
                <div className="lg:sticky lg:top-24">
                  <GhlFormEmbed lang={lang} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. HOW THE CONSULTATION WORKS (3 Simple Steps) */}
        <section className="py-12 md:py-16 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                {lang === 'es' ? 'Proceso Claro y Transparente' : 'Clear & Simple Process'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mt-1.5 font-display">
                {lang === 'es'
                  ? '¿Cómo funciona la asesoría para ACA 2027?'
                  : 'How Does Your ACA 2027 Consultation Work?'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="p-6 rounded-3xl bg-[#FAFBFD] border border-slate-100 text-center relative">
                <div className="w-10 h-10 rounded-2xl bg-brand-purple text-white font-extrabold flex items-center justify-center mx-auto mb-4 text-sm shadow-md shadow-brand-purple/20">
                  1
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-2">
                  {lang === 'es' ? 'Completa el formulario' : 'Complete the form'}
                </h3>
                <p className="text-xs text-brand-slate leading-relaxed">
                  {lang === 'es'
                    ? 'Llena los datos básicos requeridos en el formulario seguro de esta página. Toma menos de 2 minutos.'
                    : 'Fill in the basic required information on this secure page. Takes under 2 minutes.'}
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-6 rounded-3xl bg-[#FAFBFD] border border-slate-100 text-center relative">
                <div className="w-10 h-10 rounded-2xl bg-brand-purple text-white font-extrabold flex items-center justify-center mx-auto mb-4 text-sm shadow-md shadow-brand-purple/20">
                  2
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-2">
                  {lang === 'es' ? 'Conversación con Mary Rivera' : 'Direct talk with Mary Rivera'}
                </h3>
                <p className="text-xs text-brand-slate leading-relaxed">
                  {lang === 'es'
                    ? 'Conversamos sobre tus prioridades de cobertura, doctores preferidos y resolvemos tus preguntas con claridad.'
                    : 'We talk about your coverage priorities, preferred providers, and answer your questions with clarity.'}
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-6 rounded-3xl bg-[#FAFBFD] border border-slate-100 text-center relative">
                <div className="w-10 h-10 rounded-2xl bg-brand-purple text-white font-extrabold flex items-center justify-center mx-auto mb-4 text-sm shadow-md shadow-brand-purple/20">
                  3
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-2">
                  {lang === 'es' ? 'Elige con tranquilidad' : 'Choose with confidence'}
                </h3>
                <p className="text-xs text-brand-slate leading-relaxed">
                  {lang === 'es'
                    ? 'Decides con información clara qué plan se ajusta a tu salud y bolsillo, sin presiones ni cobros de asesoría.'
                    : 'Decide with complete clarity which plan fits your health and wallet, with zero pressure or advisory fees.'}
                </p>
              </div>
            </div>

            {/* Bottom CTA trigger for scroll */}
            <div className="text-center mt-10">
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-purple hover:text-brand-purple-hover cursor-pointer"
              >
                <span>
                  {lang === 'es'
                    ? 'Ir al formulario de solicitud'
                    : 'Go to consultation form'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* 4. FREQUENTLY ASKED QUESTIONS */}
        <section className="py-12 md:py-16 bg-[#FAFBFD]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                {lang === 'es' ? 'Preguntas Frecuentes' : 'Common Questions'}
              </span>
              <h2 className="text-2xl font-extrabold text-brand-navy mt-1.5 font-display">
                {lang === 'es'
                  ? 'Lo que debes saber sobre ACA 2027'
                  : 'What You Need to Know About ACA 2027'}
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  q:
                    lang === 'es'
                      ? '¿Tiene algún costo recibir esta asesoría?'
                      : 'Does this consultation cost anything?',
                  a:
                    lang === 'es'
                      ? 'No. La orientación y revisión de opciones de Eversafe Financial es 100% gratuita para ti. Las primas mensuales las establecen las aseguradoras de salud de acuerdo con la ley federal, y no pagas ni un centavo más por contar con una asesora licenciada.'
                      : 'No. Eversafe Financial’s consultation and plan review is 100% free of charge to you. Monthly plan premiums are set directly by health carriers under federal law; you never pay extra to receive guidance from a licensed advisor.',
                },
                {
                  q:
                    lang === 'es'
                      ? '¿Cómo se determina si califico para ayuda económica o subsidios?'
                      : 'How is eligibility for financial assistance or subsidies determined?',
                  a:
                    lang === 'es'
                      ? 'La ayuda económica (créditos fiscales de prima y reducciones de costos compartidos) se basa en el tamaño de tu hogar, tu código postal y los ingresos anuales estimados según las pautas oficiales de la ley ACA.'
                      : 'Financial assistance (premium tax credits and cost-sharing reductions) is calculated based on household size, zip code, and estimated annual income in accordance with official ACA federal guidelines.',
                },
                {
                  q:
                    lang === 'es'
                      ? '¿Puedo conservar a mis médicos actuales?'
                      : 'Can I keep my current doctors?',
                  a:
                    lang === 'es'
                      ? 'Durante la asesoría revisamos la red médica (HMO o PPO) de las opciones disponibles para verificar si tus doctores, especialistas y hospitales favoritos participan.'
                      : 'During your consultation, we review the provider networks (HMO or PPO) of available plans to verify whether your preferred doctors, specialists, and hospitals participate.',
                },
                {
                  q:
                    lang === 'es'
                      ? '¿Qué sucede después de enviar el formulario?'
                      : 'What happens after I submit the form?',
                  a:
                    lang === 'es'
                      ? 'Mary Rivera o un miembro autorizado de Eversafe Financial revisará tus datos y se pondrá en contacto contigo a la brevedad para resolver tus dudas y presentarte tus alternativas disponibles.'
                      : 'Mary Rivera or an authorized member of Eversafe Financial will review your submission and contact you promptly to answer questions and present available options.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-brand-navy hover:text-brand-purple cursor-pointer transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-brand-slate shrink-0 transition-transform duration-200 ${
                        openFaq === idx ? 'rotate-180 text-brand-purple' : ''
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-brand-slate leading-relaxed border-t border-slate-100 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. MANDATORY COMPLIANCE & LEGAL NOTICE */}
        <section className="py-8 bg-slate-50 border-t border-slate-200/80 text-[11px] text-brand-slate leading-relaxed">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-brand-slate shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <p className="font-semibold text-brand-navy">
                    {lang === 'es'
                      ? 'Aviso Legal y de Cumplimiento Regulatorio'
                      : 'Regulatory & Compliance Disclosure'}
                  </p>
                  <p>
                    {lang === 'es'
                      ? 'Eversafe Financial es una agencia de seguros independiente. No estamos afiliados con, respaldados ni somos parte de HealthCare.gov, los Centros de Servicios de Medicare y Medicaid (CMS), el gobierno federal de los Estados Unidos ni ninguna entidad gubernamental estatal. La información provista en esta página tiene fines exclusivamente educativos y de orientación general.'
                      : 'Eversafe Financial is an independent insurance agency. We are not affiliated with, endorsed by, or part of HealthCare.gov, the Centers for Medicare & Medicaid Services (CMS), the United States federal government, or any state government entity. The information provided on this page is for educational and general guidance purposes only.'}
                  </p>
                  <p>
                    {lang === 'es'
                      ? 'La elegibilidad para planes de salud, subsidios de prima y montos de ayuda económica está sujeta a los lineamientos federales y estatales aplicables, así como a la información exacta provista por el solicitante en la plataforma oficial correspondiente. Los planes y tarifas están sujetos a las reglas de suscripción de cada compañía de seguros.'
                      : 'Eligibility for health plans, premium tax credits, and financial assistance amounts is subject to applicable federal and state guidelines, as well as the exact information submitted by the applicant on the corresponding official platform. Plans and rates remain subject to carrier underwriting rules.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 6. MINIMAL FOOTER */}
      <footer className="bg-brand-navy text-white py-10 border-t border-brand-navy-light text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/drghl4bjl/image/upload/f_auto,q_auto/v1783574808/eversafe-financial-isotype-full-color_gjverm.png"
                alt="Eversafe Financial"
                className="h-8 w-auto brightness-0 invert opacity-90"
              />
              <span className="font-extrabold text-base tracking-tight text-white font-display">
                Eversafe <span className="text-accent">Financial</span>
              </span>
            </div>

            {/* Direct Contact info */}
            <div className="flex flex-wrap items-center justify-center gap-5 text-slate-300">
              <a
                href="tel:+17273596196"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>+1 (727) 359-6196</span>
              </a>
              <a
                href="mailto:mary@eversafefinancial.com"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>mary@eversafefinancial.com</span>
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-slate-300">
              <a
                href="https://eversafefinancial.com/#privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                {lang === 'es' ? 'Privacidad' : 'Privacy Policy'}
              </a>
              <span className="text-slate-600">·</span>
              <a
                href="https://eversafefinancial.com/#terms-of-service"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                {lang === 'es' ? 'Términos' : 'Terms of Service'}
              </a>
              <span className="text-slate-600">·</span>
              <button
                type="button"
                onClick={openCookiePreferences}
                className="hover:text-white transition-colors underline-offset-4 hover:underline focus:outline-none cursor-pointer"
              >
                {lang === 'es' ? 'Preferencias de cookies' : 'Cookie Preferences'}
              </button>
              <span className="text-slate-600">·</span>
              <a
                href="https://eversafefinancial.com/"
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                {lang === 'es' ? 'Web Principal' : 'Main Website'}
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
            <p>© 2026 Eversafe Financial LLC. All rights reserved.</p>
            <p>
              {lang === 'es'
                ? 'Agencia de seguros independiente · Mary Rivera, Licensed Insurance Advisor'
                : 'Independent insurance agency · Mary Rivera, Licensed Insurance Advisor'}
            </p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Management Banner & Preferences Modal */}
      <CookieConsentBanner lang={lang} />
    </div>
  );
};
