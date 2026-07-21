import React, { useState } from "react";
import { ArrowLeft, Home, Check, X, TrendingUp, Lock, Percent, HeartHandshake, Shield, HelpCircle, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

interface WhyIulPageProps {
  onBackToHome: () => void;
  lang: "en" | "es";
  onExploreServices: (serviceName: string) => void;
  onScheduleConsultation?: () => void;
}

export function WhyIulPage({ onBackToHome, lang, onExploreServices, onScheduleConsultation }: WhyIulPageProps) {
  // Accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleCtaClick = () => {
    // Navigates back, and triggers prefilling for IUL
    onExploreServices("Index Universal Life (IUL)");
  };

  const faqs = lang === "en" ? [
    {
      q: "Is an Index Universal Life (IUL) policy safe?",
      a: "Yes, IUL policies come with a floor (typically 0%) which protects your accumulated cash value from negative market returns. Even if the S&P 500 or selected index crashes by 20% or 30%, your cash value is locked in and will not decrease due to index losses. You participate in market upside but bypass downside risk entirely."
    },
    {
      q: "How does the Tax-Free Retirement Income function?",
      a: "As your IUL cash value grows, you can access it through tax-free policy loans. Because these are structured as policy loans rather than standard distribution withdrawals, they do not trigger income tax under IRS Section 7702. The policy's cash value continues to grow, and the loan balance is ultimately paid off tax-free by the final death benefit when the time comes."
    },
    {
      q: "Can I withdraw money if I need it before age 59.5?",
      a: "Yes! Traditional retirement plans like a 401(k) or traditional IRA penalize you with a 10% IRS penalty plus full ordinary income taxes for withdrawals before age 59½. An IUL has no IRS-imposed age restriction. You can access your cash value at any age, for any purpose (such as college funding, buying real estate, or business capital), with no IRS penalties."
    },
    {
      q: "Who is an Index Universal Life policy best suited for?",
      a: "An IUL is an exceptional vehicle if you are looking to maximize retirement savings, high earners who have already maxed out their traditional 401(k) limits, those seeking tax diversification, or families wanting built-in estate preservation and critical/chronic illness living benefits. It is a highly customizable financial tool."
    }
  ] : [
    {
      q: "¿Es segura una póliza de Index Universal Life (IUL)?",
      a: "Sí, las pólizas IUL vienen con un 'piso' mínimo (típicamente del 0%) que protege tu valor en efectivo acumulado contra retornos negativos del mercado. Incluso si el S&P 500 o el índice seleccionado se desploma un 20% o 30%, tu dinero está a salvo y no disminuirá de valor por pérdidas del mercado. Participas del crecimiento del mercado pero evitas las caídas."
    },
    {
      q: "¿Cómo funciona el ingreso de retiro libre de impuestos?",
      a: "A medida que el valor en efectivo de tu IUL crece, puedes acceder a él mediante préstamos de póliza libres de impuestos. Debido a que se estructuran como préstamos en lugar de retiros regulares, no generan impuestos sobre la renta según la sección 7702 del código del IRS. El valor remanente sigue rindiendo intereses y los saldos pendientes se cancelan libre de impuestos con el beneficio por fallecimiento final."
    },
    {
      q: "¿Puedo retirar dinero si lo necesito antes de los 59.5 años?",
      a: "¡Sí! Los planes de jubilación tradicionales como el 401(k) o el IRA tradicional te penalizan con un 10% ante el IRS más impuestos ordinarios completos si retiras fondos antes de los 59½ años. El IUL no tiene ninguna restricción de edad del IRS. Puedes usar tu valor en efectivo a cualquier edad y para cualquier fin sin penalizaciones fiscales."
    },
    {
      q: "¿Para quién es más adecuada una póliza de Index Universal Life?",
      a: "Un IUL es un instrumento excelente si buscas maximizar tus ahorros de jubilación, para profesionales con altos ingresos que ya completaron los límites de su 401(k), personas que buscan diversificación fiscal, o familias que desean protección para enfermedades críticas/crónicas integrada y transferencia libre de herencias."
    }
  ];

  return (
    <div className="bg-brand-gray-soft min-h-screen py-12 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Navigation Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <nav className="flex items-center gap-2 text-xs font-semibold text-brand-slate uppercase tracking-wider" aria-label="Breadcrumb">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-1.5 hover:text-brand-purple transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              Home
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-brand-purple font-extrabold">Why IUL</span>
          </nav>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-navy hover:text-brand-purple hover:translate-x-[-2px] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "en" ? "Back to Home Page" : "Volver al inicio"}
          </button>
        </div>

        {/* HERO HEADER */}
        <div className="relative bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-purple rounded-lg p-8 md:p-12 lg:p-14 text-white overflow-hidden shadow-xl border border-slate-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Column 1: Info & Headings */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="text-[11px] uppercase tracking-widest font-extrabold text-accent bg-white/10 border border-white/15 px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                {lang === "en" ? "Modern Retirement Alternative" : "Alternativa de retiro moderna"}
              </span>
              <h1 className="text-3xl md:text-5xl font-black font-display leading-tight tracking-tight">
                {lang === "en" 
                  ? "Why IUL Offers More Security & Flexibility Than Traditional Plans" 
                  : "Por qué el IUL ofrece más seguridad y flexibilidad que los planes tradicionales"}
              </h1>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed font-medium">
                {lang === "en"
                  ? "Retirement planning shouldn't mean leaving your life savings vulnerable to market crashes or tied down by government rules. Discover how Index Universal Life outperforms standard investment avenues."
                  : "La planificación del retiro no debería significar exponer tus ahorros a las caídas del mercado o restringirlos con reglas rígidas del gobierno. Descubre cómo Index Universal Life supera las alternativas estándar."}
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => {
                    const quizElem = document.getElementById("hero-iul-quiz");
                    if (quizElem) {
                      quizElem.scrollIntoView({ behavior: "smooth", block: "center" });
                    } else {
                      handleCtaClick();
                    }
                  }}
                  className="bg-accent hover:bg-accent-hover text-brand-navy font-semibold py-3.5 px-8 rounded-lg text-xs sm:text-sm tracking-wider shadow-sm hover:shadow-md transform hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 text-center cursor-pointer"
                >
                  {lang === "en" ? "Check My Qualification" : "Analizar mi calificación"}
                </button>
                <a
                  href="#comparison-block"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-3.5 px-8 rounded-lg text-xs sm:text-sm tracking-wider text-center transition-all duration-300"
                >
                  {lang === "en" ? "See Detailed Comparison" : "Ver comparación detallada"}
                </a>
              </div>
            </div>

            {/* Column 2: Quiz Embedded directly inside the Hero! */}
            <div id="hero-iul-quiz" className="lg:col-span-5 flex justify-center w-full relative z-20 scroll-mt-24">
              <div className="w-full max-w-md">
                <div className="text-center mb-4 lg:hidden">
                  <span className="text-xs font-bold uppercase text-accent tracking-wider">
                    {lang === "en" ? "IUL Qualification Quiz" : "Quiz de calificación IUL"}
                  </span>
                </div>
                <IulInteractiveQuiz 
                  lang={lang} 
                  isLight={true} 
                  onComplete={onScheduleConsultation || handleCtaClick} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* COMPARISON BLOCK */}
        <section id="comparison-block" className="space-y-6 scroll-mt-6">
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-display tracking-tight">
              {lang === "en" ? "Side-by-Side Strategy Comparison" : "Comparación estratégica lado a lado"}
            </h2>
            <p className="text-xs sm:text-sm text-brand-slate">
              {lang === "en"
                ? "See how Index Universal Life (IUL) stands strong against 401(k) and Roth IRA limitations."
                : "Observa cómo Index Universal Life (IUL) se mantiene firme frente a las limitaciones del 401(k) y Roth IRA de jubilación tradicional."}
            </p>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-brand-navy text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider font-display">
                    <th className="p-5 sm:p-6 w-[25%]">{lang === "en" ? "Provisions" : "Aspectos de control"}</th>
                    <th className="p-5 sm:p-6 bg-brand-purple/15 text-brand-purple text-center border-x border-slate-700/10 w-[25%]">🏆 IUL (IRS 7702)</th>
                    <th className="p-5 sm:p-6 text-center text-slate-300 w-[25%]">401(k) / Traditional IRA</th>
                    <th className="p-5 sm:p-6 text-center text-slate-300 w-[25%]">Roth IRA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-brand-navy font-medium">
                  
                  {/* Feature 1 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 sm:p-6 font-bold text-brand-navy-light">
                      {lang === "en" ? "Market Downside Protection" : "Protección ante caídas de mercado"}
                    </td>
                    <td className="p-5 sm:p-6 bg-brand-purple-light/25 border-x border-slate-100 text-center">
                      <div className="text-brand-purple font-extrabold flex items-center justify-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                        <span>{lang === "en" ? "0% Floor (No Losses)" : "Piso 0% (sin pérdidas)"}</span>
                      </div>
                    </td>
                    <td className="p-5 sm:p-6 text-slate-500 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <X className="w-4 h-4 text-rose-500 stroke-[3]" />
                        <span>{lang === "en" ? "Full Market Risk" : "Riesgo de pérdida total"}</span>
                      </div>
                    </td>
                    <td className="p-5 sm:p-6 text-slate-500 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <X className="w-4 h-4 text-rose-500 stroke-[3]" />
                        <span>{lang === "en" ? "Full Market Risk" : "Riesgo de pérdida total"}</span>
                      </div>
                    </td>
                  </tr>

                  {/* Feature 2 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 sm:p-6 font-bold text-brand-navy-light">
                      {lang === "en" ? "Taxation of Retirement Income" : "Impuestos al ingreso de retiro"}
                    </td>
                    <td className="p-5 sm:p-6 bg-brand-purple-light/25 border-x border-slate-100 text-center">
                      <div className="text-brand-purple font-extrabold flex items-center justify-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                        <span>{lang === "en" ? "100% Tax-Free Loans" : "100% libre de impuestos"}</span>
                      </div>
                    </td>
                    <td className="p-5 sm:p-6 text-slate-500 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <X className="w-4 h-4 text-rose-500 stroke-[3]" />
                        <span>{lang === "en" ? "Taxed as Ordinary Income" : "Tributa como ingreso ordinario"}</span>
                      </div>
                    </td>
                    <td className="p-5 sm:p-6 text-slate-500 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                        <span>{lang === "en" ? "Tax-Free" : "Libre de impuestos"}</span>
                      </div>
                    </td>
                  </tr>

                  {/* Feature 3 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 sm:p-6 font-bold text-brand-navy-light">
                      {lang === "en" ? "Annual Contribution Limits" : "Límites anuales de contribución"}
                    </td>
                    <td className="p-5 sm:p-6 bg-brand-purple-light/25 border-x border-slate-100 text-center">
                      <div className="text-brand-purple font-extrabold flex items-center justify-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                        <span>{lang === "en" ? "Unlimited (IRS limits apply to death benefit size)" : "Ilimitado (sin topes anuales rígidos)"}</span>
                      </div>
                    </td>
                    <td className="p-5 sm:p-6 text-slate-500 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <X className="w-4 h-4 text-rose-500 stroke-[3]" />
                        <span>{lang === "en" ? "Strict Caps (~$23,000)" : "Tope estricto (~$23,000)"}</span>
                      </div>
                    </td>
                    <td className="p-5 sm:p-6 text-slate-500 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <X className="w-4 h-4 text-rose-500 stroke-[3]" />
                        <span>{lang === "en" ? "Very Low (~$7,000) & Income limits" : "Muy bajos (~$7,000) y topes de ingresos"}</span>
                      </div>
                    </td>
                  </tr>

                  {/* Feature 4 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 sm:p-6 font-bold text-brand-navy-light">
                      {lang === "en" ? "Penalty-Free Early Access" : "Acceso anticipado sin penalidad"}
                    </td>
                    <td className="p-5 sm:p-6 bg-brand-purple-light/25 border-x border-slate-100 text-center">
                      <div className="text-brand-purple font-extrabold flex items-center justify-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                        <span>{lang === "en" ? "Access at Any Age" : "Acceso a cualquier edad"}</span>
                      </div>
                    </td>
                    <td className="p-5 sm:p-6 text-slate-500 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <X className="w-4 h-4 text-rose-500 stroke-[3]" />
                        <span>{lang === "en" ? "10% IRS Penalty < 59.5" : "10% penalidad antes de 59.5"}</span>
                      </div>
                    </td>
                    <td className="p-5 sm:p-6 text-slate-500 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <X className="w-4 h-4 text-rose-500 stroke-[3]" />
                        <span>{lang === "en" ? "10% Earnings Penalty < 59.5" : "Permite retirar solo base de aportes"}</span>
                      </div>
                    </td>
                  </tr>

                  {/* Feature 5 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 sm:p-6 font-bold text-brand-navy-light">
                      {lang === "en" ? "Accelerated Illness benefits" : "Beneficios en vida acelerados"}
                    </td>
                    <td className="p-5 sm:p-6 bg-brand-purple-light/25 border-x border-slate-100 text-center">
                      <div className="text-brand-purple font-extrabold flex items-center justify-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                        <span>{lang === "en" ? "Included for Chronic/Terminal illness" : "Incluido para enfermedades crónicas/graves"}</span>
                      </div>
                    </td>
                    <td className="p-5 sm:p-6 text-slate-500 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <X className="w-4 h-4 text-rose-500 stroke-[3]" />
                        <span>{lang === "en" ? "None" : "Ninguno"}</span>
                      </div>
                    </td>
                    <td className="p-5 sm:p-6 text-slate-500 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <X className="w-4 h-4 text-rose-500 stroke-[3]" />
                        <span>{lang === "en" ? "None" : "Ninguno"}</span>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
            
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 text-center">
              <p className="text-[10px] sm:text-xs text-brand-slate font-medium">
                ⚠️ {lang === "en" 
                    ? "Comparison indicators represent standard product terms. Actual benefits are subject to individual underwriting guidelines and policy structure details."
                    : "Los indicadores de comparación representan términos habituales. Los beneficios finales están sujetos a planes de suscripción individuales y estructuras de póliza."}
              </p>
            </div>
          </div>
        </section>

        {/* FEATURE BENTO GRID */}
        <section className="space-y-8">
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-display tracking-tight">
              {lang === "en" ? "Unpacking the Top 5 IUL Benefits" : "Desglosando los 5 beneficios clave del IUL"}
            </h2>
            <p className="text-xs sm:text-sm text-brand-slate">
              {lang === "en"
                ? "How Index Universal Life provides structural flexibility and shields your cash value from market drops."
                : "Cómo Index Universal Life proporciona flexibilidad estructural y blinda tu valor de efectivo de la volatilidad bursátil."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Box 1 */}
            <div className="bg-white rounded-lg p-6 border border-slate-100 hover:border-brand-purple/20 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-10 h-10 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-navy font-display">
                {lang === "en" ? "1. 0% Market Floor Guarantee" : "1. Garantía de piso de mercado de 0%"}
              </h3>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-medium">
                {lang === "en"
                  ? "When equity markets drop, your account balance is contractually protected with a 0% return floor. Compound safely by banking all previous market segment gains."
                  : "Cuando el mercado accionario cae, tu saldo queda protegido bajo contrato con un piso mínimo del 0%. Capitaliza de forma segura reteniendo todas las ganancias pasadas registradas."}
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white rounded-lg p-6 border border-slate-100 hover:border-brand-purple/20 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-10 h-10 bg-brand-purple/5 border border-brand-purple/10 text-brand-purple rounded-lg flex items-center justify-center">
                <Percent className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-navy font-display">
                {lang === "en" ? "2. Tax-Free Income Stream" : "2. Flujo de ingresos libre de impuestos"}
              </h3>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-medium">
                {lang === "en"
                  ? "Take tax-free retirement distributions via low-cost policy loans. Avoid raising your income bracket and bypass federal income taxes completely under Internal Revenue Code Section 7702."
                  : "Genera retiros de fondos mediante préstamos de póliza de bajo interés exentos de impuestos. Evita elevar tu rango de ingresos fiscales y saltas los impuestos ordinarios según el código IRC 7702."}
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white rounded-lg p-6 border border-slate-100 hover:border-brand-purple/20 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-10 h-10 bg-amber-50 border border-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-navy font-display">
                {lang === "en" ? "3. No Strict IRS Contribution Limits" : "3. Sin límites de aporte del IRS"}
              </h3>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-medium">
                {lang === "en"
                  ? "Unlike conventional 401k or IRA limits, you can contribute substantial capital amounts dynamically, maximizing tax advantages. Ideal for high-earning households looking for asset diversification."
                  : "A diferencia del tope restrictivo del 401(k), puedes realizar aportes de capital considerables ajustados a tus objetivos financieros y maximizar beneficios tributarios. Excelente para altos ingresos."}
              </p>
            </div>

            {/* Box 4 */}
            <div className="bg-white rounded-lg p-6 border border-slate-100 hover:border-brand-purple/20 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-10 h-10 bg-rose-50 border border-rose-100 text-rose-500 rounded-lg flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-navy font-display">
                {lang === "en" ? "4. Built-In Accelerated Living Benefits" : "4. Beneficios en vida acelerados integrados"}
              </h3>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-medium">
                {lang === "en"
                  ? "Access a high percentage of your death benefit tax-free while still alive in the event of a critical, chronic, or terminal health diagnose to pay medical bills or mortgage commitments."
                  : "Accede a gran parte de tu beneficio por fallecimiento libre de impuestos para solventar costos de salud o deudas ante diagnósticos médicos severos, enfermedades crónicas o terminales."}
              </p>
            </div>

            {/* Box 5 */}
            <div className="bg-white rounded-lg p-6 border border-slate-100 hover:border-brand-purple/20 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-10 h-10 bg-blue-50 border border-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-navy font-display">
                {lang === "en" ? "5. Generational Legacy Wealth" : "5. Legado y traspaso generacional seguro"}
              </h3>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-medium">
                {lang === "en"
                  ? "Your estate transitions directly to your beneficiaries completely exempt from income taxes, bypassing probate. Maintain absolute security for your spouse and heirs."
                  : "Tu patrimonio pasa directamente a tus beneficiarios libre de impuestos sobre ganancias patrimoniales y libre de farragosos procesos sucesorios. Asegura el mañana de tus seres amados."}
              </p>
            </div>

          </div>
        </section>



        {/* FAQs SECTION */}
        <section className="bg-white rounded-lg p-8 md:p-12 shadow-sm border border-slate-100 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-purple/5 text-brand-purple flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold font-display text-brand-navy tracking-tight">
              {lang === "en" ? "Index Universal Life Information & FAQs" : "Preguntas frecuentes de Index Universal Life"}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="border-b border-slate-100 pb-4">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full text-left flex justify-between items-center py-2 text-brand-navy hover:text-brand-purple font-bold text-sm sm:text-base cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-brand-purple" /> : <ChevronDown className="w-4 h-4 text-brand-slate" />}
                  </button>
                  {isOpen && (
                    <div className="mt-2 text-xs sm:text-sm text-brand-slate leading-relaxed font-normal pl-2 border-l-2 border-brand-purple animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* FINAL HERO CTA CARD */}
        <div className="bg-gradient-to-r from-brand-purple/10 to-accent/10 border border-brand-purple/20 rounded-lg p-8 md:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-display tracking-tight">
            {lang === "en" 
              ? "Ready to Build a Tax-Free Protection Strategy?" 
              : "¿Listo para crear una estrategia de protección libre de impuestos?"}
          </h2>
          <p className="text-xs sm:text-sm text-brand-slate max-w-xl mx-auto leading-relaxed">
            {lang === "en"
              ? "Schedule a personalized review to analyze your retirement roadmap and check if Index Universal Life is a match for your target goals."
              : "Agenda una revisión individualizada de tu hoja de ruta jubilatoria y determina si Index Universal Life es la alternativa idónea para ti."}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button
              onClick={() => {
                if (onScheduleConsultation) {
                  onScheduleConsultation();
                } else {
                  handleCtaClick();
                }
              }}
              className="bg-brand-navy hover:bg-brand-navy-light text-white font-semibold py-3.5 px-8 rounded-lg text-xs sm:text-sm transform hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 text-center cursor-pointer"
            >
              💼 {lang === "en" ? "Analyze My Options" : "Ver mis opciones"}
            </button>
            <button
              onClick={onBackToHome}
              className="bg-white hover:bg-slate-50 border border-slate-200 text-brand-navy font-semibold py-3.5 px-8 rounded-lg text-xs sm:text-sm transition-all duration-300 text-center cursor-pointer"
            >
              {lang === "en" ? "← Back to Homepage" : "← Volver al inicio"}
            </button>
          </div>
          <p className="text-[10px] text-brand-slate leading-relaxed">
            {lang === "en"
              ? "Eversafe Financial - Authorized Florida Insurance Advisors. Licensed Florida Agent ID: Mary Rivera. No obligation consultations."
              : "Eversafe Financial - Asesores de Seguros Autorizados en Florida. Agente Autorizada de Florida: Mary Rivera. Consultas sin compromiso alguno."}
          </p>
        </div>

      </div>
    </div>
  );
}

interface IulInteractiveQuizProps {
  lang: "en" | "es";
  onComplete: () => void;
  isLight?: boolean;
}

export function IulInteractiveQuiz({ lang, onComplete, isLight = false }: IulInteractiveQuizProps) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    age: "",
    employed: "",
    health: "",
    goal: ""
  });
  const [isEvaluating, setIsEvaluating] = useState(false);

  const handleSelect = (field: string, val: string) => {
    setAnswers(prev => ({ ...prev, [field]: val }));
    setTimeout(() => {
      if (step < 4) {
        setStep(prev => prev + 1);
      } else {
        setIsEvaluating(true);
        setTimeout(() => {
          setIsEvaluating(false);
          setStep(5);
        }, 1200);
      }
    }, 200);
  };

  const handleBack = () => {
    if (step > 1) setStep(prev => prev - 1);
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({ age: "", employed: "", health: "", goal: "" });
  };

  const isQualified = answers.health !== "major" && answers.employed === "yes" && answers.age !== "senior";

  const questions = {
    age: {
      title: lang === "en" ? "What is your age?" : "¿Cuál es tu edad?",
      opts: [
        { key: "young", val: lang === "en" ? "Under 18 Years" : "Menor de 18 años", icon: "👶" },
        { key: "adult", val: lang === "en" ? "18 to 55 Years" : "18 a 55 años", icon: "🧑" },
        { key: "senior", val: lang === "en" ? "Over 56 Years" : "Mayor de 56 años", icon: "👵" }
      ]
    },
    employed: {
      title: lang === "en" ? "Are you currently employed or have stable income?" : "¿Estás empleado actualmente o tienes ingresos estables?",
      opts: [
        { key: "yes", val: lang === "en" ? "Yes, active income" : "Sí, ingresos activos", icon: "💼" },
        { key: "no", val: lang === "en" ? "No / Retired" : "No / retirado", icon: "🏠" }
      ]
    },
    health: {
      title: lang === "en" ? "Do you have any significant pre-existing health conditions?" : "¿Tienes alguna condición significativa preexistente de salud?",
      opts: [
        { key: "good", val: lang === "en" ? "No, I'm in excellent/good health" : "No, gozo de excelente / buena salud", icon: "🍏" },
        { key: "minor", val: lang === "en" ? "Minor issues (e.g., controlled high blood pressure)" : "Leves (presión arterial controlada, asma)", icon: "💊" },
        { key: "major", val: lang === "en" ? "Major conditions (e.g., active cancer, chronic failure)" : "Crónicas/Graves (Cáncer activo, insuficiencia severa)", icon: "🏥" }
      ]
    },
    goal: {
      title: lang === "en" ? "What is your primary financial goal with this policy?" : "¿Cuál es tu objetivo financiero primordial al adquirir esta póliza?",
      opts: [
        { key: "savings", val: lang === "en" ? "Tax-Free Savings & Retirement Accumulation" : "Ahorros libres de impuestos y acumulación de retiro", icon: "💰" },
        { key: "protection", val: lang === "en" ? "Family Life Insurance Protection" : "Seguro y protección familiar", icon: "👨‍👩‍👧‍👦" },
        { key: "mortgage", val: lang === "en" ? "Mortgage/Business Protection" : "Protección de hipoteca o negocio", icon: "🔑" },
        { key: "all", val: lang === "en" ? "All of the Above" : "Todas las anteriores", icon: "📈" }
      ]
    }
  };

  const progressPercent = step === 5 ? 100 : ((step - 1) / 4) * 100;

  return (
    <div className={isLight 
      ? "w-full max-w-md bg-white rounded-lg p-6 md:p-8 shadow-sm border border-slate-100 relative overflow-hidden transition-all duration-300"
      : "bg-[#1E293B]/60 backdrop-blur-md rounded-lg p-6 border border-slate-700/60 max-w-xl mx-auto"
    }>
      {isLight && (
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-purple/5 rounded-full blur-2xl pointer-events-none"></div>
      )}

      <div className={isLight ? "w-full bg-secondary h-1.5 rounded-full mb-6 overflow-hidden" : "w-full bg-slate-800 h-1.5 rounded-full mb-6 overflow-hidden"}>
        <div 
          className="h-full bg-accent rounded-full transition-all duration-300" 
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      {isEvaluating ? (
        <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 font-sans">
          <div className={isLight ? "w-10 h-10 border-4 border-brand-purple border-t-transparent rounded-full animate-spin" : "w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin"}></div>
          <p className={isLight ? "text-sm font-semibold text-brand-purple animate-pulse" : "text-sm font-semibold text-slate-300 animate-pulse"}>
            {lang === "en" ? "Analyzing your answers for IUL eligibility..." : "Analizando tus respuestas para elegibilidad de IUL..."}
          </p>
        </div>
      ) : step === 5 ? (
        <div className="space-y-6 font-sans">
          <div className={isLight ? "text-center p-5 bg-slate-50 rounded-lg border border-slate-200 space-y-3" : "text-center p-5 bg-slate-800/80 rounded-lg border border-slate-700 space-y-3"}>
            {isQualified ? (
              <>
                <div className="text-3xl">🌟</div>
                <h3 className={isLight ? "text-lg font-bold text-brand-navy font-display" : "text-lg font-bold text-accent font-display"}>
                  {lang === "en" ? "Perfect Candidate!" : "¡Candidato perfecto!"}
                </h3>
                <p className={isLight ? "text-xs sm:text-sm text-brand-slate leading-relaxed" : "text-xs sm:text-sm text-slate-300 leading-relaxed"}>
                  {lang === "en"
                    ? "Index Universal Life fits your goals perfectly. Eversafe Financial will prepare a custom plan to maximize your tax-free cash accumulation."
                    : "Index Universal Life se adapta perfectamente a tus objetivos. Eversafe Financial te preparará un plan a la medida para maximizar tu acumulación de efectivo libre de impuestos."}
                </p>
              </>
            ) : (
              <>
                <div className="text-3xl">🛡️</div>
                <h3 className={isLight ? "text-lg font-bold text-brand-navy font-display" : "text-lg font-bold text-accent font-display"}>
                  {lang === "en" ? "Excellent Options Available!" : "¡Excelentes opciones disponibles!"}
                </h3>
                <p className={isLight ? "text-xs sm:text-sm text-brand-slate leading-relaxed" : "text-xs sm:text-sm text-slate-300 leading-relaxed"}>
                  {lang === "en"
                    ? "Your profile is better suited for our specialized Term or Legacy Whole Life structures. Eversafe Financial will craft the perfect package for you."
                    : "Tu perfil se adapta mejor a nuestras pólizas de Término Especializado o estructuras de Vida Entera. Eversafe Financial diseñará el paquete perfecto para ti."}
                </p>
              </>
            )}
          </div>

          <div className="flex flex-col gap-3 font-sans">
            <button
              onClick={onComplete}
              className="w-full bg-accent hover:bg-accent-hover text-brand-navy font-semibold py-3.5 px-6 rounded-lg text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer text-center"
            >
              🚀 {lang === "en" ? "Connect with Mary Rivera" : "Conectar con Mary Rivera"}
            </button>
            <button
              onClick={resetQuiz}
              className={isLight ? "text-brand-slate hover:text-brand-purple transition text-xs font-semibold underline decoration-dotted text-center cursor-pointer" : "text-slate-400 hover:text-white transition text-xs font-semibold underline decoration-dotted text-center cursor-pointer"}
            >
              🔄 {lang === "en" ? "Start Over" : "Reiniciar quiz"}
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-5 font-sans">
          <div className="flex justify-between items-center">
            <span className={isLight ? "text-xs font-semibold text-brand-slate uppercase tracking-wider" : "text-xs font-semibold text-slate-400 uppercase tracking-wider"}>
              {lang === "en" ? `Question ${step} of 4` : `Pregunta ${step} de 4`}
            </span>
          </div>

          {step === 1 && (
            <div className="space-y-3">
              <h3 className={isLight ? "text-sm sm:text-base font-bold text-brand-navy leading-snug font-display" : "text-sm sm:text-base font-bold text-white leading-snug font-display"}>{questions.age.title}</h3>
              <div className="flex flex-col gap-2">
                {questions.age.opts.map(opt => {
                  const isSelected = answers.age === opt.key;
                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleSelect("age", opt.key)}
                      className={`w-full text-left py-3 px-4 rounded-lg border transition-all text-xs sm:text-sm font-semibold flex items-center gap-3 cursor-pointer ${
                        isSelected
                          ? isLight
                            ? "bg-brand-purple text-white border-accent ring-2 ring-accent/40 shadow-sm scale-[1.01]"
                            : "bg-accent text-brand-navy border-white ring-2 ring-white/25 scale-[1.01]"
                          : isLight 
                            ? "bg-[#F3F3F4] border-transparent hover:bg-brand-purple-light hover:text-brand-purple text-brand-slate"
                            : "border-slate-700 hover:border-accent hover:bg-slate-800 text-slate-300 hover:text-white"
                      }`}
                    >
                      <span>{opt.icon}</span>
                      <span>{opt.val}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3">
              <h3 className={isLight ? "text-sm sm:text-base font-bold text-brand-navy leading-snug font-display" : "text-sm sm:text-base font-bold text-white leading-snug font-display"}>{questions.employed.title}</h3>
              <div className="flex flex-col gap-2">
                {questions.employed.opts.map(opt => {
                  const isSelected = answers.employed === opt.key;
                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleSelect("employed", opt.key)}
                      className={`w-full text-left py-3 px-4 rounded-lg border transition-all text-xs sm:text-sm font-semibold flex items-center gap-3 cursor-pointer ${
                        isSelected
                          ? isLight
                            ? "bg-brand-purple text-white border-accent ring-2 ring-accent/40 shadow-sm scale-[1.01]"
                            : "bg-accent text-brand-navy border-white ring-2 ring-white/25 scale-[1.01]"
                          : isLight 
                            ? "bg-[#F3F3F4] border-transparent hover:bg-brand-purple-light hover:text-brand-purple text-brand-slate"
                            : "border-slate-700 hover:border-accent hover:bg-slate-800 text-slate-300 hover:text-white"
                      }`}
                    >
                      <span>{opt.icon}</span>
                      <span>{opt.val}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              <h3 className={isLight ? "text-sm sm:text-base font-bold text-brand-navy leading-snug font-display" : "text-sm sm:text-base font-bold text-white leading-snug font-display"}>{questions.health.title}</h3>
              <div className="flex flex-col gap-2">
                {questions.health.opts.map(opt => {
                  const isSelected = answers.health === opt.key;
                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleSelect("health", opt.key)}
                      className={`w-full text-left py-3 px-4 rounded-lg border transition-all text-xs sm:text-sm font-semibold flex items-center gap-3 cursor-pointer ${
                        isSelected
                          ? isLight
                            ? "bg-brand-purple text-white border-accent ring-2 ring-accent/40 shadow-sm scale-[1.01]"
                            : "bg-accent text-brand-navy border-white ring-2 ring-white/25 scale-[1.01]"
                          : isLight 
                            ? "bg-[#F3F3F4] border-transparent hover:bg-brand-purple-light hover:text-brand-purple text-brand-slate"
                            : "border-slate-700 hover:border-accent hover:bg-slate-800 text-slate-300 hover:text-white"
                      }`}
                    >
                      <span>{opt.icon}</span>
                      <span>{opt.val}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-3">
              <h3 className={isLight ? "text-sm sm:text-base font-bold text-brand-navy leading-snug font-display" : "text-sm sm:text-base font-bold text-white leading-snug font-display"}>{questions.goal.title}</h3>
              <div className="flex flex-col gap-2">
                {questions.goal.opts.map(opt => {
                  const isSelected = answers.goal === opt.key;
                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleSelect("goal", opt.key)}
                      className={`w-full text-left py-3 px-4 rounded-lg border transition-all text-xs sm:text-sm font-semibold flex items-center gap-3 cursor-pointer ${
                        isSelected
                          ? isLight
                            ? "bg-brand-purple text-white border-accent ring-2 ring-accent/40 shadow-sm scale-[1.01]"
                            : "bg-accent text-brand-navy border-white ring-2 ring-white/25 scale-[1.01]"
                          : isLight 
                            ? "bg-[#F3F3F4] border-transparent hover:bg-brand-purple-light hover:text-brand-purple text-brand-slate"
                            : "border-slate-700 hover:border-accent hover:bg-slate-800 text-slate-300 hover:text-white"
                      }`}
                    >
                      <span>{opt.icon}</span>
                      <span>{opt.val}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className={isLight ? "flex justify-between items-center pt-3 border-t border-slate-100" : "flex justify-between items-center pt-3 border-t border-slate-800"}>
            <button
              onClick={handleBack}
              disabled={step === 1}
              className={`text-xs font-semibold ${step === 1 ? (isLight ? "text-brand-slate/25 cursor-not-allowed" : "text-slate-600 cursor-not-allowed") : (isLight ? "text-brand-slate hover:text-brand-purple cursor-pointer" : "text-slate-400 hover:text-white cursor-pointer")}`}
            >
              {lang === "en" ? "← Back" : "← Atrás"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

