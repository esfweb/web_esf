import React from "react";
import { CheckCircle2, MessageSquareQuote } from "lucide-react";

interface Testimonial {
  name: string;
  image: string;
  alt: string;
  quote: string;
  date: string;
  badge: string;
  lang: "en" | "es";
}

const testimonials: Testimonial[] = [
  {
    name: "Felix Reyes",
    image: "https://res.cloudinary.com/drghl4bjl/image/upload/q_auto/f_auto/v1781571269/FelixReyes_Testimonio_EversafeFinancial_bn6skf.jpg",
    alt: "Felix Reyes testimonial photo for EverSafe Financial",
    quote: "Gracias por toda tu ayuda, eres la mejor",
    date: "Sep 3, 2024",
    badge: "Verified Recommendation",
    lang: "es"
  },
  {
    name: "Rita Morales",
    image: "https://res.cloudinary.com/drghl4bjl/image/upload/q_auto/f_auto/v1781571269/RitaMorales__Testimonio_EversafeFinancial_ahfl7i.jpg",
    alt: "Rita Morales testimonial photo for EverSafe Financial",
    quote: "Mary me ayudó a entender el mundo de los seguros de una manera fácil y profesional. EverSafe Financial te brinda apoyo y confianza en todo lo que hace.",
    date: "Sep 2, 2024",
    badge: "Verified Recommendation",
    lang: "es"
  },
  {
    name: "Valerie Fletcher",
    image: "https://res.cloudinary.com/drghl4bjl/image/upload/q_auto/f_auto/v1781629541/Valerie_Fletcher_Testimonio_EversafeFinancial_jrdn3w.jpg",
    alt: "Valerie Fletcher testimonial photo for EverSafe Financial",
    quote: "Thank you for today & all your help & I spoke with Anthony & he will call you eventually. It's nice when you come here & everything is so much easier talking to when you're here because you're very thorough & look out for us for what we need. God Bless you Maria. You're such a good lady. Ttys",
    date: "Oct 19, 2024",
    badge: "Verified Recommendation",
    lang: "en"
  }
];

interface Props {
  lang: "en" | "es";
  onQuoteClick: () => void;
}

export function TestimonialsMiniSection({ lang, onQuoteClick }: Props) {
  return (
    <section className="py-20 px-4 md:px-8 bg-brand-gray-soft relative reveal-init border-y border-slate-200/50">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-[11px] uppercase tracking-widest font-extrabold text-brand-purple bg-brand-purple/5 px-3 py-1.5 rounded-full inline-flex border border-brand-purple/10">
            {lang === "en" ? "REAL CLIENT REVIEWS" : "TESTIMONIOS REALES"}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-sans text-brand-navy tracking-tight leading-tight">
            {lang === "en" ? "What Clients Are Saying" : "Lo Que Dicen Nuestros Clientes"}
          </h2>
          <p className="text-sm md:text-base text-brand-slate leading-relaxed">
            {lang === "en" 
              ? "Real words from people who trusted EverSafe Financial for guidance, clarity, and peace of mind." 
              : "Palabras reales de personas que confiaron en EverSafe Financial para recibir guía, claridad y tranquilidad."}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1 relative flex flex-col h-full"
            >
              {/* Quote Icon watermark */}
              <div className="absolute top-6 right-8 text-slate-100">
                <MessageSquareQuote className="w-16 h-16 opacity-50" />
              </div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img 
                  src={test.image} 
                  alt={test.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-xl object-cover shadow-sm ring-2 ring-brand-purple/10 font-sans text-xs text-brand-slate"
                />
                <div>
                  <h3 className="font-bold text-brand-navy font-sans tracking-tight leading-tight">
                    {test.name}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent stroke-[3]" />
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      {test.badge}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1 relative z-10">
                <p className="text-brand-navy text-sm sm:text-base leading-relaxed italic font-medium">
                  "{test.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-50 flex justify-between items-center relative z-10">
                <span className="text-xs text-slate-400 font-medium">{test.date}</span>
                <span className="text-[10px] text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100/80 font-medium">
                  {test.lang === "en" 
                    ? (lang === "en" ? "Original review" : "Reseña en inglés")
                    : (lang === "en" ? "Original in Spanish" : "Reseña original")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="text-center space-y-5 pt-8">
          <p className="text-sm font-medium text-brand-slate">
            {lang === "en" 
              ? "More families trust EverSafe Financial for personalized, bilingual guidance." 
              : "Cada vez más familias confían en EverSafe Financial para recibir orientación personalizada y bilingüe."}
          </p>
          <button
            onClick={onQuoteClick}
            className="bg-brand-navy hover:bg-brand-navy-light text-white font-extrabold py-3 px-8 rounded-xl text-xs sm:text-sm transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md inline-flex cursor-pointer"
          >
            {lang === "en" ? "Get My Free Quote" : "Obtener Mi Cotización"}
          </button>
        </div>
      </div>
    </section>
  );
}
