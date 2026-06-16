import React, { useState } from "react";
import { ArrowLeft, Home, Check, X, TrendingUp, Lock, Percent, HeartHandshake, Shield, HelpCircle, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

interface WhyIulPageProps {
  onBackToHome: () => void;
  lang: "en" | "es";
  onExploreServices: (serviceName: string) => void;
}

export function WhyIulPage({ onBackToHome, lang, onExploreServices }: WhyIulPageProps) {
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
      q: "¿Cómo funciona el Ingreso de Retiro Libre de Impuestos?",
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
            {lang === "en" ? "Back to Home Page" : "Volver al Inicio"}
          </button>
        </div>

        {/* HERO HEADER */}
        <div className="relative bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-purple rounded-3xl p-8 md:p-14 text-white overflow-hidden shadow-xl border border-slate-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-[11px] uppercase tracking-widest font-extrabold text-accent bg-white/10 border border-white/15 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              {lang === "en" ? "Modern Retirement Alternative" : "Alternativa de Retiro Moderna"}
            </span>
            <h1 className="text-3xl md:text-5xl font-black font-sans leading-tight tracking-tight">
              {lang === "en" 
                ? "Why IUL Offers More Security & Flexibility Than Traditional Plans" 
                : "Por Qué el IUL Ofrece Más Seguridad y Flexibilidad que los Planes Tradicionales"}
            </h1>
            <p className="text-sm md:text-lg text-slate-200 leading-relaxed font-medium">
              {lang === "en"
                ? "Retirement planning shouldn't mean leaving your life savings vulnerable to market crashes or tied down by government rules. Discover how Index Universal Life outperforms standard investment avenues."
                : "La planificación del retiro no debería significar exponer tus ahorros a las caídas del mercado o restringirlos con reglas rígidas del gobierno. Descubre cómo Index Universal Life supera las alternativas estándar."}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleCtaClick}
                className="bg-accent hover:bg-[#e0b42c] text-brand-navy font-bold py-3.5 px-8 rounded-2xl text-xs sm:text-sm tracking-wider shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center cursor-pointer"
              >
                {lang === "en" ? "Check My Qualification" : "Analizar Mi Calificación"}
              </button>
              <a
                href="#comparison-block"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3.5 px-8 rounded-2xl text-xs sm:text-sm tracking-wider text-center transition-all duration-300"
              >
                {lang === "en" ? "See Detailed Comparison" : "Ver Comparación Detallada"}
              </a>
            </div>
          </div>
        </div>

        {/* COMPARISON BLOCK */}
        <section id="comparison-block" className="space-y-6 scroll-mt-6">
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-sans tracking-tight">
              {lang === "en" ? "Side-by-Side Strategy Comparison" : "Comparación Estratégica Lado a Lado"}
            </h2>
            <p className="text-xs sm:text-sm text-brand-slate">
              {lang === "en"
                ? "See how Index Universal Life (IUL) stands strong against 401(k) and Roth IRA limitations."
                : "Observa cómo Index Universal Life (IUL) se mantiene firme frente a las limitaciones del 401(k) y Roth IRA de jubilación tradicional."}
            </p>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-brand-navy text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                    <th className="p-5 sm:p-6 w-[25%]">{lang === "en" ? "Provisions" : "Aspectos de Control"}</th>
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
                        <span>{lang === "en" ? "0% Floor (No Losses)" : "Piso 0% (Sin Pérdidas)"}</span>
                      </div>
                    </td>
                    <td className="p-5 sm:p-6 text-slate-500 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <X className="w-4 h-4 text-rose-500 stroke-[3]" />
                        <span>{lang === "en" ? "Full Market Risk" : "Riesgo de Pérdida Total"}</span>
                      </div>
                    </td>
                    <td className="p-5 sm:p-6 text-slate-500 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <X className="w-4 h-4 text-rose-500 stroke-[3]" />
                        <span>{lang === "en" ? "Full Market Risk" : "Riesgo de Pérdida Total"}</span>
                      </div>
                    </td>
                  </tr>

                  {/* Feature 2 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 sm:p-6 font-bold text-brand-navy-light">
                      {lang === "en" ? "Taxation of Retirement Income" : "Impuestos al Ingreso de Retiro"}
                    </td>
                    <td className="p-5 sm:p-6 bg-brand-purple-light/25 border-x border-slate-100 text-center">
                      <div className="text-brand-purple font-extrabold flex items-center justify-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                        <span>{lang === "en" ? "100% Tax-Free Loans" : "100% Libre de Impuestos"}</span>
                      </div>
                    </td>
                    <td className="p-5 sm:p-6 text-slate-500 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <X className="w-4 h-4 text-rose-500 stroke-[3]" />
                        <span>{lang === "en" ? "Taxed as Ordinary Income" : "Tributa como Ingreso Ordinario"}</span>
                      </div>
                    </td>
                    <td className="p-5 sm:p-6 text-slate-500 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                        <span>{lang === "en" ? "Tax-Free" : "Libre de Impuestos"}</span>
                      </div>
                    </td>
                  </tr>

                  {/* Feature 3 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 sm:p-6 font-bold text-brand-navy-light">
                      {lang === "en" ? "Annual Contribution Limits" : "Límites Anuales de Contribución"}
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
                        <span>{lang === "en" ? "Strict Caps (~$23,000)" : "Tope Estricto (~$23,000)"}</span>
                      </div>
                    </td>
                    <td className="p-5 sm:p-6 text-slate-500 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <X className="w-4 h-4 text-rose-500 stroke-[3]" />
                        <span>{lang === "en" ? "Very Low (~$7,000) & Income limits" : "Muy Bajos (~$7,000) y topes de ingresos"}</span>
                      </div>
                    </td>
                  </tr>

                  {/* Feature 4 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 sm:p-6 font-bold text-brand-navy-light">
                      {lang === "en" ? "Penalty-Free Early Access" : "Acceso Anticipado sin Penalidad"}
                    </td>
                    <td className="p-5 sm:p-6 bg-brand-purple-light/25 border-x border-slate-100 text-center">
                      <div className="text-brand-purple font-extrabold flex items-center justify-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                        <span>{lang === "en" ? "Access at Any Age" : "Acceso a Cualquier Edad"}</span>
                      </div>
                    </td>
                    <td className="p-5 sm:p-6 text-slate-500 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <X className="w-4 h-4 text-rose-500 stroke-[3]" />
                        <span>{lang === "en" ? "10% IRS Penalty < 59.5" : "10% Penalidad antes de 59.5"}</span>
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
                      {lang === "en" ? "Accelerated Illness benefits" : "Beneficios en Vida Acelerados"}
                    </td>
                    <td className="p-5 sm:p-6 bg-brand-purple-light/25 border-x border-slate-100 text-center">
                      <div className="text-brand-purple font-extrabold flex items-center justify-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                        <span>{lang === "en" ? "Included for Chronic/Terminal illness" : "Incluido para Enfermedades Crónicas/Graves"}</span>
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-sans tracking-tight">
              {lang === "en" ? "Unpacking the Top 5 IUL Benefits" : "Desglosando los 5 Beneficios Clave del IUL"}
            </h2>
            <p className="text-xs sm:text-sm text-brand-slate">
              {lang === "en"
                ? "How Index Universal Life provides structural flexibility and shields your cash value from market drops."
                : "Cómo Index Universal Life proporciona flexibilidad estructural y blinda tu valor de efectivo de la volatilidad bursátil."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Box 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-brand-purple/20 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-10 h-10 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-navy">
                {lang === "en" ? "1. 0% Market Floor Guarantee" : "1. Garantía de Piso de Mercado de 0%"}
              </h3>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-medium">
                {lang === "en"
                  ? "When equity markets drop, your account balance is contractually protected with a 0% return floor. Compound safely by banking all previous market segment gains."
                  : "Cuando el mercado accionario cae, tu saldo queda protegido bajo contrato con un piso mínimo del 0%. Capitaliza de forma segura reteniendo todas las ganancias pasadas registradas."}
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-brand-purple/20 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-10 h-10 bg-brand-purple/5 border border-brand-purple/10 text-brand-purple rounded-xl flex items-center justify-center">
                <Percent className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-navy">
                {lang === "en" ? "2. Tax-Free Income Stream" : "2. Flujo de Ingresos Libre de Impuestos"}
              </h3>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-medium">
                {lang === "en"
                  ? "Take tax-free retirement distributions via low-cost policy loans. Avoid raising your income bracket and bypass federal income taxes completely under Internal Revenue Code Section 7702."
                  : "Genera retiros de fondos mediante préstamos de póliza de bajo interés exentos de impuestos. Evita elevar tu rango de ingresos fiscales y saltas los impuestos ordinarios según el código IRC 7702."}
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-brand-purple/20 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-10 h-10 bg-amber-50 border border-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-navy">
                {lang === "en" ? "3. No Strict IRS Contribution Limits" : "3. Sin Límites de Aporte del IRS"}
              </h3>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-medium">
                {lang === "en"
                  ? "Unlike conventional 401k or IRA limits, you can contribute substantial capital amounts dynamically, maximizing tax advantages. Ideal for high-earning households looking for asset diversification."
                  : "A diferencia del tope restrictivo del 401(k), puedes realizar aportes de capital considerables ajustados a tus objetivos financieros y maximizar beneficios tributarios. Excelente para altos ingresos."}
              </p>
            </div>

            {/* Box 4 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-brand-purple/20 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-10 h-10 bg-rose-50 border border-rose-100 text-rose-500 rounded-xl flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-navy">
                {lang === "en" ? "4. Built-In Accelerated Living Benefits" : "4. Beneficios en Vida Acelerados Integrados"}
              </h3>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-medium">
                {lang === "en"
                  ? "Access a high percentage of your death benefit tax-free while still alive in the event of a critical, chronic, or terminal health diagnose to pay medical bills or mortgage commitments."
                  : "Accede a gran parte de tu beneficio por fallecimiento libre de impuestos para solventar costos de salud o deudas ante diagnósticos médicos severos, enfermedades crónicas o terminales."}
              </p>
            </div>

            {/* Box 5 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-brand-purple/20 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-10 h-10 bg-blue-50 border border-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-navy">
                {lang === "en" ? "5. Generational Legacy Wealth" : "5. Legado y Traspaso Generacional Seguro"}
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
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-slate-100 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-purple/5 text-brand-purple flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold font-sans text-brand-navy tracking-tight">
              {lang === "en" ? "Index Universal Life Information & FAQs" : "Preguntas Frecuentes de Index Universal Life"}
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
        <div className="bg-gradient-to-r from-brand-purple/10 to-accent/10 border border-brand-purple/20 rounded-3xl p-8 md:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-sans tracking-tight">
            {lang === "en" 
              ? "Ready to Build a Tax-Free Protection Strategy?" 
              : "¿Listo para Crear una Estrategia de Protección Libre de Impuestos?"}
          </h2>
          <p className="text-xs sm:text-sm text-brand-slate max-w-xl mx-auto leading-relaxed">
            {lang === "en"
              ? "Schedule a personalized review to analyze your retirement roadmap and check if Index Universal Life is a match for your target goals."
              : "Agenda una revisión individualizada de tu hoja de ruta jubilatoria y determina si Index Universal Life es la alternativa idónea para ti."}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button
              onClick={handleCtaClick}
              className="bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3.5 px-8 rounded-xl text-xs sm:text-sm transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center cursor-pointer"
            >
              💼 {lang === "en" ? "Analyze My Options" : "Ver Mis Opciones"}
            </button>
            <button
              onClick={onBackToHome}
              className="bg-white hover:bg-slate-50 border border-slate-200 text-brand-navy font-bold py-3.5 px-8 rounded-xl text-xs sm:text-sm transition-all duration-300 text-center cursor-pointer"
            >
              {lang === "en" ? "← Back to Homepage" : "← Volver al Inicio"}
            </button>
          </div>
          <p className="text-[10px] text-brand-slate leading-relaxed">
            {lang === "en"
              ? "EverSafe Financial - Authorized Florida Insurance Advisors. Licensed Florida Agent ID: Mary Rivera. No obligation consultations."
              : "EverSafe Financial - Asesores de Seguros Autorizados en Florida. Agente Autorizada de Florida: Mary Rivera. Consultas sin compromiso alguno."}
          </p>
        </div>

      </div>
    </div>
  );
}
