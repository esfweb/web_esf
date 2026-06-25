import { TranslationSet } from "../translations";

interface PartnerLogosCarouselProps {
  t: TranslationSet;
}

const PARTNER_LOGOS = [
  {
    name: "AmeriHealth Caritas",
    url: "https://res.cloudinary.com/drghl4bjl/image/upload/v1782318779/eversafe-partner-amerihealth-caritas-logo_g9omoe.png"
  },
  {
    name: "Foresters Financial",
    url: "https://res.cloudinary.com/drghl4bjl/image/upload/v1782318779/eversafe-partner-foresters-financial-logo_ncbnnr.png"
  },
  {
    name: "Oscar Health",
    url: "https://res.cloudinary.com/drghl4bjl/image/upload/v1782318779/eversafe-partner-oscar-health-insurance-logo_pdhisu.png"
  },
  {
    name: "Ambetter",
    url: "https://res.cloudinary.com/drghl4bjl/image/upload/v1782318779/eversafe-partner-ambetter-health-insurance-logo_azfkef.png"
  },
  {
    name: "Aetna",
    url: "https://res.cloudinary.com/drghl4bjl/image/upload/v1782318779/eversafe-partner-aetna-health-insurance-logo_tckwyo.png"
  },
  {
    name: "Ameritas",
    url: "https://res.cloudinary.com/drghl4bjl/image/upload/v1782318779/eversafe-partner-ameritas-life-insurance-logo_mhtzsg.png"
  },
  {
    name: "Blue Cross Blue Shield",
    url: "https://res.cloudinary.com/drghl4bjl/image/upload/v1782318780/eversafe-partner-blue-cross-blue-shield-logo_i2ku15.png"
  },
  {
    name: "Mutual of Omaha",
    url: "https://res.cloudinary.com/drghl4bjl/image/upload/v1782318780/eversafe-partner-mutual-of-omaha-insurance-logo_eky5u0.png"
  },
  {
    name: "Community Health Choice",
    url: "https://res.cloudinary.com/drghl4bjl/image/upload/v1782318780/eversafe-partner-community-health-choice-logo_tuzqe1.png"
  },
  {
    name: "Florida Blue",
    url: "https://res.cloudinary.com/drghl4bjl/image/upload/v1782318780/eversafe-partner-florida-blue-health-insurance-logo_io7kco.png"
  },
  {
    name: "F&G Annuities & Life",
    url: "https://res.cloudinary.com/drghl4bjl/image/upload/v1782318780/eversafe-partner-fg-annuities-life-insurance-logo_clrdln.png"
  },
  {
    name: "UnitedHealthcare",
    url: "https://res.cloudinary.com/drghl4bjl/image/upload/v1782318781/eversafe-partner-united-healthcare-logo_y3osql.png"
  }
];

// Duplicate list to guarantee infinite loop coverage
const DOUBLE_LOGOS = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

export default function PartnerLogosCarousel({ t }: PartnerLogosCarouselProps) {
  return (
    <section 
      id="partner-carriers" 
      className="py-16 bg-white border-b border-slate-100 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
        {/* Title and Badge */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-purple bg-brand-purple/10 px-4 py-1.5 rounded-full inline-block">
            🤝 {t.partners.label}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold font-sans text-brand-navy tracking-tight">
            {t.partners.title}
          </h2>
        </div>

        {/* Infinite Scroll Carousel */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Left and Right Fade overlays for elegant premium look */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee sliding track */}
          <div className="flex w-max items-center animate-marquee hover:[animation-play-state:paused]">
            {DOUBLE_LOGOS.map((logo, index) => (
              <div 
                key={`${logo.name}-${index}`}
                className="flex items-center justify-center px-8 md:px-10 flex-shrink-0"
              >
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  referrerPolicy="no-referrer"
                  className="h-10 md:h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
