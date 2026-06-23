import React, { useState } from "react";
import { TranslationSet } from "../translations";

interface QuizCardProps {
  t: TranslationSet;
}

export default function QuizCard({ t }: QuizCardProps) {
  const [step, setStep] = useState<number>(1);
  const [age, setAge] = useState<string>("");
  const [employed, setEmployed] = useState<string>("");
  const [health, setHealth] = useState<string>("");
  const [goal, setGoal] = useState<string>("");

  // Lead capture state
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [consent, setConsent] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>("");
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);

  const handleNext = () => {
    if (step === 1 && !age) return;
    if (step === 2 && !employed) return;
    if (step === 3 && !health) return;
    if (step === 4 && !goal) return;

    if (step === 4) {
      setIsEvaluating(true);
      setTimeout(() => {
        setIsEvaluating(false);
        setStep(5);
      }, 1000);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const resetQuiz = () => {
    setStep(1);
    setAge("");
    setEmployed("");
    setHealth("");
    setGoal("");
    setFullName("");
    setPhone("");
    setEmail("");
    setConsent(false);
    setFormSubmitted(false);
    setFormError("");
  };

  // Check decision logic
  const isQualified = age === "18-55" && employed === "yes" && health === "none";

  const [isSubmittingQuiz, setIsSubmittingQuiz] = useState<boolean>(false);

  const submitQuizLead = async (quizAnswers: any) => {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: (import.meta as any).env?.VITE_WEB3FORMS_KEY || '7dc1994b-f9c9-449c-8f4c-18d4d133c452',
          subject: "🎯 New Quiz Lead - Eversafe Financial",
          from_name: "EversafeFinancial Quiz",
          name: quizAnswers.name,
          phone: quizAnswers.phone,
          email: quizAnswers.email,
          age_range: quizAnswers.age,
          employment: quizAnswers.employed,
          health_issues: quizAnswers.health,
          coverage_interest: quizAnswers.goal,
          quiz_result: quizAnswers.result,
          source: "Hero Quiz - EversafeFinancial Website",
          submitted_at: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }),
        }),
      });
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Quiz lead submission error:', error);
      return false;
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || fullName.trim().length < 3) {
      setFormError(t.quiz.fullName + " is too short");
      return;
    }
    const phoneRegex = /^\+?[0-9]{7,15}$/;
    if (!phoneRegex.test(phone.replace(/[\s()-]/g, ""))) {
      setFormError(t.quiz.phoneLabel + " seems invalid");
      return;
    }
    if (!email.includes("@") || email.length < 5) {
      setFormError(t.quiz.emailLabel + " is invalid");
      return;
    }
    if (!consent) {
      setFormError(t.quiz.consent);
      return;
    }

    setFormError("");
    setIsSubmittingQuiz(true);

    const answers = {
      name: fullName,
      phone: phone,
      email: email,
      age: age,
      employed: employed,
      health: health,
      goal: goal,
      result: isQualified ? "Qualified / Calificado" : "Unqualified / No Calificado"
    };

    try {
      await submitQuizLead(answers);
    } catch (err) {
      console.error("Quiz submission failed:", err);
    }

    // Save lead backup in localStorage for demonstration and reliability backings
    const oldLeads = JSON.parse(localStorage.getItem("eversafe_leads") || "[]");
    const newLead = { 
      fullName, 
      email, 
      phone, 
      answers, 
      source: "Hero Quiz", 
      date: new Date().toISOString() 
    };
    localStorage.setItem("eversafe_leads", JSON.stringify([...oldLeads, newLead]));

    setIsSubmittingQuiz(false);
    setFormSubmitted(true);
  };

  const progressPercent = step === 5 ? 100 : ((step - 1) / 4) * 100;

  return (
    <div className="w-full max-w-md bg-white rounded-3xl p-6 md:p-8 shadow-[0_12px_40px_rgba(18,32,51,0.06)] border border-slate-100 relative overflow-hidden transition-all duration-300">
      {/* Absolute high-end brand purple glow accent */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-purple/5 rounded-full blur-2xl pointer-events-none"></div>

      {/* Progress Bar (Color dinámico gradual K14) */}
      <div className="w-full bg-secondary h-1.5 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: `${progressPercent}%`,
            backgroundColor: step === 1 ? '#ff863b' : step === 2 ? '#ffbc3b' : step === 3 ? '#3be8ff' : '#00C2A8'
          }}
        ></div>
      </div>

      {/* Header section of the Quiz */}
      {step < 5 && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs uppercase tracking-wider text-brand-purple font-semibold flex items-center gap-1.5">
              <span>🌟</span> {t.quiz.title}
            </span>
            <span className="text-xs font-mono font-medium bg-brand-purple-light text-brand-purple px-2.5 py-0.5 rounded-full">
              {t.quiz.step} {step} / 4
            </span>
          </div>
          <h4 className="text-lg font-bold font-sans tracking-tight text-brand-navy mt-1.5">
            {t.quiz.subtitle}
          </h4>
        </div>
      )}

      {/* Steps Rendering */}
      {isEvaluating ? (
        <div className="py-12 flex flex-col items-center justify-center">
          <div className="w-12 h-12 border-4 border-brand-purple border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-brand-purple animate-pulse text-sm font-medium">{t.quiz.checking}</p>
        </div>
      ) : (
        <>
          {/* STEP 1: AGE */}
          {step === 1 && (
            <div className="space-y-4">
              <label className="block text-base font-medium text-brand-navy mb-2">
                {t.quiz.ageQ}
              </label>
              <div className="flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setAge("under-18");
                    setTimeout(handleNext, 250);
                  }}
                  className={`w-full text-left py-3.5 px-4 rounded-xl border transition-all duration-200 text-sm font-medium ${
                    age === "under-18"
                      ? "bg-brand-purple text-white border-[#00C2A8] ring-2 ring-[#00C2A8]/40 shadow-lg shadow-[#00C2A8]/10 font-semibold animate-option-select"
                      : "bg-[#F3F3F4] border-transparent hover:bg-brand-purple-light hover:text-brand-purple text-brand-slate"
                  }`}
                >
                  <span className="inline-block mr-2 text-base">👦</span>
                  {t.quiz.ageOpt1}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAge("18-55");
                    setTimeout(handleNext, 250);
                  }}
                  className={`w-full text-left py-3.5 px-4 rounded-xl border transition-all duration-200 text-sm font-medium ${
                    age === "18-55"
                      ? "bg-brand-purple text-white border-[#00C2A8] ring-2 ring-[#00C2A8]/40 shadow-lg shadow-[#00C2A8]/10 font-semibold animate-option-select"
                      : "bg-[#F3F3F4] border-transparent hover:bg-brand-purple-light hover:text-brand-purple text-brand-slate"
                  }`}
                >
                  <span className="inline-block mr-2 text-base">👨‍💼</span>
                  {t.quiz.ageOpt2}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAge("over-56");
                    setTimeout(handleNext, 250);
                  }}
                  className={`w-full text-left py-3.5 px-4 rounded-xl border transition-all duration-200 text-sm font-medium ${
                    age === "over-56"
                      ? "bg-brand-purple text-white border-[#00C2A8] ring-2 ring-[#00C2A8]/40 shadow-lg shadow-[#00C2A8]/10 font-semibold animate-option-select"
                      : "bg-[#F3F3F4] border-transparent hover:bg-brand-purple-light hover:text-brand-purple text-brand-slate"
                  }`}
                >
                  <span className="inline-block mr-2 text-base">👵</span>
                  {t.quiz.ageOpt3}
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: EMPLOYED */}
          {step === 2 && (
            <div className="space-y-4">
              <label className="block text-base font-medium text-brand-navy mb-2">
                {t.quiz.employedQ}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setEmployed("yes");
                    setTimeout(handleNext, 250);
                  }}
                  className={`py-6 px-4 rounded-xl border flex flex-col items-center justify-center transition-all duration-200 text-sm font-medium ${
                    employed === "yes"
                      ? "bg-brand-purple text-white border-[#00C2A8] ring-2 ring-[#00C2A8]/40 shadow-lg shadow-[#00C2A8]/10 font-semibold animate-option-select"
                      : "bg-[#F3F3F4] border-transparent hover:bg-brand-purple-light hover:text-brand-purple text-brand-slate"
                  }`}
                >
                  <span className="text-3xl mb-2">💼</span>
                  <span className="font-semibold">{t.quiz.yes}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEmployed("no");
                    setTimeout(handleNext, 250);
                  }}
                  className={`py-6 px-4 rounded-xl border flex flex-col items-center justify-center transition-all duration-200 text-sm font-medium ${
                    employed === "no"
                      ? "bg-brand-purple text-white border-[#00C2A8] ring-2 ring-[#00C2A8]/40 shadow-lg shadow-[#00C2A8]/10 font-semibold animate-option-select"
                      : "bg-[#F3F3F4] border-transparent hover:bg-brand-purple-light hover:text-brand-purple text-brand-slate"
                  }`}
                >
                  <span className="text-3xl mb-2">🛑</span>
                  <span className="font-semibold">{t.quiz.no}</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: HEALTH CONDITIONS */}
          {step === 3 && (
            <div className="space-y-4">
              <label className="block text-base font-medium text-brand-navy mb-2">
                {t.quiz.healthQ}
              </label>
              <div className="flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setHealth("none");
                    setTimeout(handleNext, 250);
                  }}
                  className={`w-full text-left py-3.5 px-4 rounded-xl border transition-all duration-200 text-sm font-medium ${
                    health === "none"
                      ? "bg-brand-purple text-white border-[#00C2A8] ring-2 ring-[#00C2A8]/40 shadow-lg shadow-[#00C2A8]/10 font-semibold animate-option-select"
                      : "bg-[#F3F3F4] border-transparent hover:bg-brand-purple-light hover:text-brand-purple text-brand-slate"
                  }`}
                >
                  <span className="inline-block mr-2 text-base">🍏</span>
                  {t.quiz.healthOpt1}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setHealth("minor");
                    setTimeout(handleNext, 250);
                  }}
                  className={`w-full text-left py-3.5 px-4 rounded-xl border transition-all duration-200 text-sm font-medium ${
                    health === "minor"
                      ? "bg-brand-purple text-white border-[#00C2A8] ring-2 ring-[#00C2A8]/40 shadow-lg shadow-[#00C2A8]/10 font-semibold animate-option-select"
                      : "bg-[#F3F3F4] border-transparent hover:bg-brand-purple-light hover:text-brand-purple text-brand-slate"
                  }`}
                >
                  <span className="inline-block mr-2 text-base">💊</span>
                  {t.quiz.healthOpt2}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setHealth("major");
                    setTimeout(handleNext, 250);
                  }}
                  className={`w-full text-left py-3.5 px-4 rounded-xl border transition-all duration-200 text-sm font-medium ${
                    health === "major"
                      ? "bg-brand-purple text-white border-[#00C2A8] ring-2 ring-[#00C2A8]/40 shadow-lg shadow-[#00C2A8]/10 font-semibold animate-option-select"
                      : "bg-[#F3F3F4] border-transparent hover:bg-brand-purple-light hover:text-brand-purple text-brand-slate"
                  }`}
                >
                  <span className="inline-block mr-2 text-base">🏥</span>
                  {t.quiz.healthOpt3}
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: FINANCIAL GOAL */}
          {step === 4 && (
            <div className="space-y-4">
              <label className="block text-base font-medium text-brand-navy mb-2">
                {t.quiz.goalQ}
              </label>
              <div className="flex flex-col gap-2.5">
                {[
                  { key: "savings", val: t.quiz.goalOpt1, icon: "💰" },
                  { key: "protection", val: t.quiz.goalOpt2, icon: "🏠" },
                  { key: "mortgage", val: t.quiz.goalOpt3, icon: "🔑" },
                  { key: "all", val: t.quiz.goalOpt4, icon: "📈" },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => {
                      setGoal(item.key);
                    }}
                    className={`w-full text-left py-3 px-4 rounded-xl border transition-all duration-200 text-sm font-medium ${
                      goal === item.key
                        ? "bg-brand-purple text-white border-[#00C2A8] ring-2 ring-[#00C2A8]/40 shadow-lg shadow-[#00C2A8]/10 font-semibold animate-option-select"
                        : "bg-[#F3F3F4] border-transparent hover:bg-brand-purple-light hover:text-brand-purple text-brand-slate"
                    }`}
                  >
                    <span className="inline-block mr-2 text-base">{item.icon}</span>
                    {item.val}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: OUTCOME + lead capture form */}
          {step === 5 && (
            <div className="space-y-5 animate-fade-in-up">
              {formSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  {/* Sage/Teal Check box for validation */}
                  <div className="w-16 h-16 bg-accent-light/20 rounded-full border-2 border-accent flex items-center justify-center mx-auto text-3xl text-accent animate-bounce">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy font-sans">
                    {t.quiz.leadSuccessTitle}
                  </h3>
                  <p className="text-sm text-brand-slate leading-relaxed">
                    {t.quiz.leadSuccessDesc}
                  </p>
                  <button
                    type="button"
                    onClick={resetQuiz}
                    className="mt-4 px-5 py-2.5 bg-secondary hover:bg-brand-purple-light hover:text-brand-purple rounded-xl text-xs font-semibold text-brand-slate tracking-wide uppercase transition-all"
                  >
                    🔄 Test Again / Volver a evaluar
                  </button>
                </div>
              ) : (
                <div>
                  {/* Results Diagnostic (Acentos de validacion verde suave / sage / teal) */}
                  <div className="p-4 rounded-2xl bg-accent-light/10 border border-accent/25 mb-4">
                    {isQualified ? (
                      <div>
                        <h4 className="text-sm font-bold text-accent flex items-center gap-1.5 uppercase tracking-wide">
                          🌟 {t.quiz.qualifiedTitle}
                        </h4>
                        <p className="text-xs text-brand-slate-dark leading-relaxed mt-1.5">
                          {t.quiz.qualifiedDesc}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <h4 className="text-sm font-bold text-brand-purple flex items-center gap-1.5 uppercase tracking-wide">
                          🛡️ {t.quiz.unqualifiedTitle}
                        </h4>
                        <p className="text-xs text-brand-slate leading-relaxed mt-1.5">
                          {t.quiz.unqualifiedDesc}
                        </p>
                      </div>
                    )}
                  </div>

                  <h5 className="text-xs font-semibold uppercase text-brand-purple tracking-wider mb-3">
                    📋 Request Eversafe Call / Solicita Llamada
                  </h5>

                  <form onSubmit={handleLeadSubmit} className="space-y-3 text-left">
                    <div>
                      <label className="block text-xs font-medium text-brand-slate-dark mb-1 label-focus-transition">
                        {t.quiz.fullName}
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Mary Rivera Client"
                        className="w-full bg-secondary border border-transparent focus:bg-white focus:border-brand-purple focus:ring-2 focus:ring-[#8C49B1]/20 focus:shadow-[0_0_12px_rgba(140,73,177,0.15)] rounded-xl px-3.5 py-2 text-sm text-brand-navy placeholder-brand-slate/40 focus:outline-none transition-all duration-300"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-brand-slate-dark mb-1 label-focus-transition">
                          {t.quiz.phoneLabel}
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(727) 359-6196"
                          className="w-full bg-secondary border border-transparent focus:bg-white focus:border-brand-purple focus:ring-2 focus:ring-[#8C49B1]/20 focus:shadow-[0_0_12px_rgba(140,73,177,0.15)] rounded-xl px-3.5 py-2 text-sm text-brand-navy placeholder-brand-slate/40 focus:outline-none transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-brand-slate-dark mb-1 label-focus-transition">
                          {t.quiz.emailLabel}
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="client@mail.com"
                          className="w-full bg-secondary border border-transparent focus:bg-white focus:border-brand-purple focus:ring-2 focus:ring-[#8C49B1]/20 focus:shadow-[0_0_12px_rgba(140,73,177,0.15)] rounded-xl px-3.5 py-2 text-sm text-brand-navy placeholder-brand-slate/40 focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 pt-1">
                      <input
                        type="checkbox"
                        id="quiz-consent"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-gray-300 text-brand-purple focus:ring-brand-purple accent-brand-purple"
                      />
                      <label htmlFor="quiz-consent" className="text-[10px] text-brand-slate leading-tight select-none">
                        {t.quiz.consent}
                      </label>
                    </div>

                    {formError && (
                      <p className="text-rose-600 text-xs text-center border border-rose-200 bg-rose-50 py-1.5 px-3 rounded-lg">
                        ⚠️ {formError}
                      </p>
                    )}

                    <div className="flex justify-between items-center gap-3 pt-3">
                      <button
                        type="button"
                        onClick={resetQuiz}
                        className="text-brand-slate hover:text-brand-purple transition text-xs font-semibold underline decoration-dotted capitalize"
                      >
                        Reset / Iniciar
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmittingQuiz}
                        className={`flex-1 text-white transition-all font-bold py-2.5 px-3 rounded-xl text-xs sm:text-sm text-center shadow-md shadow-accent/10 ${
                          isSubmittingQuiz ? "bg-accent/50 cursor-not-allowed" : "bg-accent hover:bg-accent-dark"
                        }`}
                      >
                        {isSubmittingQuiz ? (t.quiz.submitLead === "Send Lead Data" ? "⏳ Sending..." : "⏳ Enviando...") : t.quiz.submitLead}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}

          {/* Navigation buttons */}
          {step < 5 && (
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={handlePrev}
                disabled={step === 1}
                className={`text-xs font-semibold transition ${
                  step === 1 ? "text-brand-slate/25 cursor-not-allowed" : "text-brand-slate hover:text-brand-purple"
                }`}
              >
                {t.quiz.prev}
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={
                  (step === 1 && !age) ||
                  (step === 2 && !employed) ||
                  (step === 3 && !health) ||
                  (step === 4 && !goal)
                }
                className={`py-2 px-5 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                  ((step === 1 && !age) ||
                    (step === 2 && !employed) ||
                    (step === 3 && !health) ||
                    (step === 4 && !goal))
                    ? "bg-[#F3F3F4] text-brand-slate/40 cursor-not-allowed"
                    : "bg-brand-purple hover:bg-brand-purple-hover text-white shadow shadow-brand-purple/10"
                }`}
              >
                {t.quiz.next}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
