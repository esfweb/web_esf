import React, { useState } from "react";
import { TranslationSet } from "../translations";

interface QuizCardProps {
  t: TranslationSet;
}

export default function QuizCard({ t }: QuizCardProps) {
  const [step, setStep] = useState<number>(1);
  
  // Guardamos las respuestas en state
  const [answers, setAnswers] = useState({
    coverageType: "",
    currentSituation: "",
    coverageFor: ""
  });

  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);

  const handleNext = () => {
    if (step === 1 && !answers.coverageType) return;
    if (step === 2 && !answers.currentSituation) return;
    if (step === 3 && !answers.coverageFor) return;

    if (step === 3) {
      setIsEvaluating(true);
      // Guardar en localStorage para respaldo y posible integración con el formulario
      localStorage.setItem("eversafe_quiz_answers", JSON.stringify(answers));
      
      setTimeout(() => {
        setIsEvaluating(false);
        setStep(4);
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
    setAnswers({
      coverageType: "",
      currentSituation: "",
      coverageFor: ""
    });
  };

  const q1Options = [
    { value: "Obamacare / ACA", label: t.quiz.q1Opt1, icon: "🩺" },
    { value: "Medicare", label: t.quiz.q1Opt2, icon: "👴" },
    { value: "Private Plan", label: t.quiz.q1Opt3, icon: "💼" },
    { value: "Dental & Vision", label: t.quiz.q1Opt4, icon: "🦷" },
    { value: "Hospitalization / Accident", label: t.quiz.q1Opt5, icon: "🏥" },
    { value: "Not Sure / Needs Guidance", label: t.quiz.q1Opt6, icon: "🤷" }
  ];

  const q2Options = [
    { value: "Uninsured", label: t.quiz.q2Opt1, icon: "❌" },
    { value: "Has Insurance but wants better options", label: t.quiz.q2Opt2, icon: "🔍" },
    { value: "Turning 65 / Medicare eligible", label: t.quiz.q2Opt3, icon: "🎂" },
    { value: "No subsidy eligibility", label: t.quiz.q2Opt4, icon: "📉" },
    { value: "Needs supplemental plan", label: t.quiz.q2Opt5, icon: "➕" },
    { value: "Not Sure", label: t.quiz.q2Opt6, icon: "❓" }
  ];

  const q3Options = [
    { value: "Only Me", label: t.quiz.q3Opt1, icon: "👤" },
    { value: "Partner", label: t.quiz.q3Opt2, icon: "💑" },
    { value: "Children", label: t.quiz.q3Opt3, icon: "👶" },
    { value: "Family", label: t.quiz.q3Opt4, icon: "👨‍👩‍👧‍👦" },
    { value: "Older Adult", label: t.quiz.q3Opt5, icon: "👵" }
  ];

  const progressPercent = step === 4 ? 100 : ((step - 1) / 3) * 100;

  return (
    <div className="w-full max-w-md bg-white rounded-lg p-6 md:p-8 shadow-[0_4px_16px_rgba(13,27,46,0.04)] border border-slate-100 relative overflow-hidden transition-all duration-300">
      {/* Absolute brand purple glow accent */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-purple/5 rounded-full blur-2xl pointer-events-none"></div>

      {/* Progress Bar (Gradual color) */}
      <div className="w-full bg-secondary h-1.5 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: `${progressPercent}%`,
            backgroundColor: step === 1 ? '#8c49b1' : step === 2 ? '#b373d6' : step === 3 ? '#26d2bd' : '#00c2a8'
          }}
        ></div>
      </div>

      {/* Header section of the Quiz */}
      {step < 4 && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] uppercase tracking-widest text-brand-purple font-bold flex items-center gap-1.5">
              <span>🌟</span> {t.quiz.eyebrow}
            </span>
            <span className="text-xs font-mono font-medium bg-brand-purple-light text-brand-purple px-2.5 py-0.5 rounded-full">
              {t.quiz.step} {step} / 3
            </span>
          </div>
          <h4 className="text-lg font-bold font-sans tracking-tight text-brand-navy mt-1.5">
            {t.quiz.title}
          </h4>
          <p className="text-xs text-brand-slate mt-1">
            {t.quiz.subtitle}
          </p>
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
          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <label className="block text-sm sm:text-base font-bold text-brand-navy mb-1.5 leading-snug">
                {t.quiz.q1Title}
              </label>
              <div className="flex flex-col gap-2">
                {q1Options.map((opt) => {
                  const isSelected = answers.coverageType === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        setAnswers((prev) => ({ ...prev, coverageType: opt.value }));
                        setTimeout(handleNext, 300);
                      }}
                      className={`w-full text-left py-3 px-4 rounded-lg border transition-all duration-200 text-xs sm:text-sm font-semibold flex items-center gap-2.5 ${
                        isSelected
                          ? "bg-brand-purple text-white border-accent ring-2 ring-accent/40 shadow-md scale-[1.01]"
                          : "bg-[#F3F3F4] border-transparent hover:bg-brand-purple-light hover:text-brand-purple text-brand-slate"
                      }`}
                    >
                      <span className="text-base sm:text-lg flex-shrink-0">{opt.icon}</span>
                      <span>{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-4">
              <label className="block text-sm sm:text-base font-bold text-brand-navy mb-1.5 leading-snug">
                {t.quiz.q2Title}
              </label>
              <div className="flex flex-col gap-2">
                {q2Options.map((opt) => {
                  const isSelected = answers.currentSituation === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        setAnswers((prev) => ({ ...prev, currentSituation: opt.value }));
                        setTimeout(handleNext, 300);
                      }}
                      className={`w-full text-left py-3 px-4 rounded-lg border transition-all duration-200 text-xs sm:text-sm font-semibold flex items-center gap-2.5 ${
                        isSelected
                          ? "bg-brand-purple text-white border-accent ring-2 ring-accent/40 shadow-md scale-[1.01]"
                          : "bg-[#F3F3F4] border-transparent hover:bg-brand-purple-light hover:text-brand-purple text-brand-slate"
                      }`}
                    >
                      <span className="text-base sm:text-lg flex-shrink-0">{opt.icon}</span>
                      <span>{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-4">
              <label className="block text-sm sm:text-base font-bold text-brand-navy mb-1.5 leading-snug">
                {t.quiz.q3Title}
              </label>
              <div className="flex flex-col gap-2">
                {q3Options.map((opt) => {
                  const isSelected = answers.coverageFor === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        setAnswers((prev) => ({ ...prev, coverageFor: opt.value }));
                        setTimeout(handleNext, 300);
                      }}
                      className={`w-full text-left py-3 px-4 rounded-lg border transition-all duration-200 text-xs sm:text-sm font-semibold flex items-center gap-2.5 ${
                        isSelected
                          ? "bg-brand-purple text-white border-accent ring-2 ring-accent/40 shadow-md scale-[1.01]"
                          : "bg-[#F3F3F4] border-transparent hover:bg-brand-purple-light hover:text-brand-purple text-brand-slate"
                      }`}
                    >
                      <span className="text-base sm:text-lg flex-shrink-0">{opt.icon}</span>
                      <span>{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* RESULT STEP */}
          {step === 4 && (
            <div className="space-y-6 animate-fade-in-up">
              <div>
                <div className="p-5 rounded-lg bg-accent-light/10 border border-accent/25 mb-4 text-center sm:text-left animate-pulse-slow">
                  <h4 className="text-sm sm:text-base font-bold text-accent flex items-center justify-center sm:justify-start gap-1.5 uppercase tracking-wide">
                    🌟 {t.quiz.resultTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-slate-dark leading-relaxed mt-2.5">
                    {t.quiz.resultDesc}
                  </p>
                </div>

                <div className="space-y-4 text-center mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      const element = document.getElementById("schedule-consultation");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-4 px-6 rounded-lg text-xs sm:text-sm uppercase tracking-wide shadow-md hover:scale-102 active:scale-98 transition-all duration-300 cursor-pointer block text-center"
                  >
                    🚀 {t.quiz.resultCta}
                  </button>

                  <button
                    type="button"
                    onClick={resetQuiz}
                    className="text-brand-slate hover:text-brand-purple transition text-xs font-semibold underline decoration-dotted mt-4 inline-block cursor-pointer"
                  >
                    🔄 {t.quiz.resultBack}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Navigation controls */}
          {step < 4 && (
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
                  (step === 1 && !answers.coverageType) ||
                  (step === 2 && !answers.currentSituation) ||
                  (step === 3 && !answers.coverageFor)
                }
                className={`py-2 px-5 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                  ((step === 1 && !answers.coverageType) ||
                    (step === 2 && !answers.currentSituation) ||
                    (step === 3 && !answers.coverageFor))
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
