import React, { useState, useEffect, useRef } from "react";
import {
  Shield,
  Heart,
  Phone,
  Mail,
  Clock,
  MapPin,
  Menu,
  X,
  Check,
  Award,
  Users,
  Briefcase,
  TrendingUp,
  Stethoscope,
  Activity,
  DollarSign,
  ChevronRight,
  ShieldCheck,
  ChevronDown,
  Lock,
  Percent,
  Sparkles,
  ArrowUp,
  MessageCircle
} from "lucide-react";
import { translations, TranslationSet } from "./translations";
import QuizCard from "./components/QuizCard";
import useWeb3Forms from "@web3forms/react";
import { PrivacyPolicy, TermsOfService } from "./components/LegalPages";

// Count-up stats helper component with intersection detection
interface AnimatedStatProps {
  num: string;
  label: string;
  icon: React.ReactNode;
  microCopy: string;
}

function AnimatedStat({ num, label, icon, microCopy }: AnimatedStatProps) {
  const [count, setCount] = useState<number>(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const target = parseInt(num.replace(/\D/g, ""), 10) || 0;

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTimestamp: number | null = null;
          const duration = 1500; // 1.5 seconds animation
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect(); // Animate only once
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  const suffix = num.replace(/[0-9]/g, "");

  return (
    <div
      ref={elementRef}
      className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(18,32,51,0.02)] transition-all hover:shadow-[0_12px_40px_rgba(18,32,51,0.06)] hover:-translate-y-1.5 duration-300"
    >
      <div className="w-12 h-12 bg-brand-purple-light rounded-2xl flex items-center justify-center text-brand-purple mb-3.5">
        {icon}
      </div>
      <div className="text-3xl md:text-3.5xl font-extrabold text-brand-navy tracking-tight">
        {count}
        {suffix}
      </div>
      <div className="text-[10px] md:text-xs font-bold text-brand-navy mt-1 tracking-wider uppercase">
        {label}
      </div>
      <p className="text-[10px] text-brand-slate/75 mt-1.5 italic font-medium max-w-[160px] leading-tight">
        {microCopy}
      </p>
    </div>
  );
}

// Subtle 3D Tilt Wrapper for service cards
interface TiltCardProps {
  children: React.ReactNode;
  popular?: boolean;
  popularLabel?: string;
}

function TiltCard({ children, popular, popularLabel }: TiltCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCoords({ x, y });
  };

  const transformStyle = isHovered
    ? {
        transform: `perspective(1000px) rotateY(${coords.x * 6}deg) rotateX(${coords.y * -6}deg) translateY(-8px)`,
        boxShadow: `0 20px 35px rgba(18, 32, 51, 0.08)`,
        borderLeft: `4px solid #00C2A8`,
      }
    : {
        transform: `perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0)`,
        boxShadow: `0 8px 30px rgba(18, 32, 51, 0.02)`,
        borderLeft: `1px solid rgba(148, 163, 184, 0.1)`,
      };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCoords({ x: 0, y: 0 });
      }}
      style={transformStyle}
      className="relative rounded-3xl p-8 bg-white border border-slate-100 transition-all duration-300 ease-out flex flex-col justify-between h-full group"
    >
      {popular && (
        <span className="absolute top-4 right-4 bg-accent text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-sm z-15 animate-pulse">
          ✨ {popularLabel}
        </span>
      )}
      {children}
    </div>
  );
}

// Expandable Service Item with tooltips for catalogue section (Utiliza el verde suave #7FA89B como check de bienestar)
interface ServiceItemProps {
  label: string;
  desc: string;
}

function ServiceItem({ label, desc }: ServiceItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative p-3.5 rounded-2xl bg-[#F3F3F4] border-l-4 border-l-transparent hover:border-l-[#00C2A8] hover:bg-gradient-to-r hover:from-brand-purple hover:to-brand-purple-hover hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center gap-3 relative z-10">
        <div className="w-5 h-5 bg-brand-sage-light rounded-full flex items-center justify-center text-brand-sage text-[11px] flex-shrink-0 font-bold border border-brand-sage/20 group-hover:bg-white group-hover:text-brand-purple transition-colors">
          ✓
        </div>
        <span className="text-sm font-semibold text-brand-navy group-hover:text-white transition-colors tracking-tight">
          {label}
        </span>
        <span className="ml-auto text-brand-slate group-hover:text-white transition text-[10px] block md:hidden">
          {isOpen ? <X className="w-3 h-3" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </span>
      </div>

      {/* Touch friendly accordion explanation for mobile */}
      {isOpen && (
        <div className="mt-2 pl-8 pr-2 text-[12px] text-brand-slate group-hover:text-white/90 leading-relaxed block md:hidden animate-fade-in-up relative z-10">
          {desc}
        </div>
      )}

      {/* Absolute floating box on desktop hover */}
      <div className="hidden md:block absolute left-1/2 bottom-full mb-3 translate-x-1/2 w-64 p-3.5 bg-brand-navy text-white text-xs rounded-2xl shadow-xl border border-white/10 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
        <div className="relative">
          <p className="leading-relaxed font-normal text-white/90">{desc}</p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-brand-navy"></div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  // Localization setup from localStorage
  const [lang, setLang] = useState<"en" | "es">(() => {
    const saved = localStorage.getItem("eversafe_lang");
    if (saved === "es" || saved === "en") return saved;
    return "en";
  });

  const t: TranslationSet = translations[lang];

  const toggleLanguage = () => {
    const nextLang = lang === "en" ? "es" : "en";
    setLang(nextLang);
    localStorage.setItem("eversafe_lang", nextLang);
  };

  const [currentView, setCurrentView] = useState<"home" | "privacy-policy" | "terms-of-service">("home");

  // Handle URL hashes for single-page app sub-navigation (perfect for GitHub Pages compatibility)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#privacy-policy" || hash === "#/privacy-policy") {
        setCurrentView("privacy-policy");
        window.scrollTo({ top: 0, behavior: "instant" });
      } else if (hash === "#terms-of-service" || hash === "#/terms-of-service") {
        setCurrentView("terms-of-service");
        window.scrollTo({ top: 0, behavior: "instant" });
      } else {
        setCurrentView("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    // Initial check on mount
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Sync SEO Metadata dynamically for excellent crawling
  useEffect(() => {
    if (currentView === "privacy-policy") {
      document.title = "Privacy Policy | EverSafe Financial";
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', 'Read the Privacy Policy of EverSafe Financial to understand how personal information is collected, used, and protected.');
      
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', window.location.origin + "/#privacy-policy");
    } else if (currentView === "terms-of-service") {
      document.title = "Terms of Service | EverSafe Financial";
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', 'Review the Terms of Service for using the EverSafe Financial website, including site usage, intellectual property, and limitations of liability.');
      
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', window.location.origin + "/#terms-of-service");
    } else {
      document.title = lang === "en" 
        ? "Licensed Florida Insurance Advisor | EverSafe Financial" 
        : "Asesora de Seguros Autorizada en Florida | EverSafe Financial";
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', lang === "en" 
          ? "Licensed Florida insurance advisor helping families find peace of mind with Life Insurance, Medicare, Health Plans, and Retirement Protection." 
          : "Asesora de seguros con licencia en Florida ayudando a familias con Seguros de Vida, Medicare, planes médicos y jubilación segura.");
      }
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', window.location.origin + "/");
      }
    }
  }, [currentView, lang]);

  const onBackToHome = () => {
    window.location.hash = "home";
    setCurrentView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll trigger detection to change header look
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [showToTop, setShowToTop] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [shakeFloatingBtn, setShakeFloatingBtn] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Reveal On Scroll Hook
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -45px 0px" });

    const targets = document.querySelectorAll(".reveal-init");
    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 400) {
        setShowToTop(true);
      } else {
        setShowToTop(false);
      }

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShakeFloatingBtn(true);
      setTimeout(() => setShakeFloatingBtn(false), 1000);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Sticky Active Nav Items via Intersection Observer
  const [activeSection, setActiveSection] = useState<string>("home");
  const sectionIds = ["home", "services", "about", "contact"];

  useEffect(() => {
    const options = { rootMargin: "-30% 0px -40% 0px" };
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [lang]);

  // Mobile menu display status
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Quote Form captures
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [consent, setConsent] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>("");

  const [isSubmittingForm, setIsSubmittingForm] = useState<boolean>(false);

  const { submit: submitContactForm } = useWeb3Forms({
    access_key: (import.meta as any).env?.VITE_WEB3FORMS_KEY || "7dc1994b-f9c9-449c-8f4c-18d4d133c452",
    settings: {
      from_name: "EverSafeFinancial - New Lead",
      subject: "🔥 New Quote Request - EverSafe Financial",
    },
    onSuccess: () => {
      setIsSubmittingForm(false);
      setFormError("");
      setFormSubmitted(true);
    },
    onError: () => {
      setIsSubmittingForm(false);
      setFormError(lang === "en" ? "There was an error sending your query. Please try again or call us directly." : "Hubo un error al enviar tu consulta. Por favor intenta de nuevo o llámanos directamente.");
    },
  });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || fullName.trim().length < 3) {
      setFormError(t.contactForm.errName);
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setFormError(t.contactForm.errEmail);
      return;
    }
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setFormError(t.contactForm.errPhone);
      return;
    }
    if (!consent) {
      setFormError(t.contactForm.errConsent);
      return;
    }

    setFormError("");
    setIsSubmittingForm(true);

    try {
      await submitContactForm({
        name: fullName,
        email: email,
        phone: phone,
        message: message || "Quote request",
        source: "EverSafeFinancial - Quote Form",
        submitted_at: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }),
      });
    } catch (err) {
      console.error("Web3Forms submission error:", err);
    }

    // Save lead backup in localStorage for demonstration and reliability backings
    const oldLeads = JSON.parse(localStorage.getItem("eversafe_leads") || "[]");
    const newLead = { fullName, email, phone, message, date: new Date().toISOString() };
    localStorage.setItem("eversafe_leads", JSON.stringify([...oldLeads, newLead]));
  };

  const handlePreFillMessage = (serviceName: string) => {
    const textEN = `Hi Mary Rivera, I would like to get a personalized quote for "${serviceName}". Please contact me with options.`;
    const textES = `Hola Mary Rivera, me gustaría recibir una cotización para "${serviceName}". Por favor contácteme con detalles.`;
    setMessage(lang === "en" ? textEN : textES);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Chat Popup Trigger Widget status
  const [chatOpened, setChatOpened] = useState<boolean>(false);
  const [showNotificationBubble, setShowNotificationBubble] = useState<boolean>(true);

  // Floating button multi-contact tray trigger
  const [floatOpen, setFloatOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white text-brand-navy selection:bg-brand-purple-light selection:text-brand-purple font-sans overflow-x-hidden">
      
      {/* 1. TOP BAR (Sleek deep navy background with clean tracking text) */}
      <div className="w-full bg-brand-navy text-white text-xs py-2.5 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-2 z-55 relative border-b border-white/5 font-sans">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-1 font-medium text-white/90">
          <a
            href="mailto:mary@eversafefinancial.com"
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-brand-purple" />
            mary@eversafefinancial.com
          </a>
          <a
            href="tel:7273596196"
            className="flex items-center gap-1.5 hover:text-accent transition-colors font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-brand-purple" />
            (727) 359-6196
          </a>
        </div>
        <div className="flex items-center gap-5">
          {/* Social Links */}
          <div className="flex items-center gap-3 text-white/70">
            <a
              href="https://www.instagram.com/eversafefinancial.llc/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transform hover:scale-125 active:scale-95 transition-all duration-300 display-inline-block"
              aria-label="Instagram Link"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/eversafefinancial"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transform hover:scale-125 active:scale-95 transition-all duration-300 display-inline-block"
              aria-label="Facebook Link"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
          </div>

          <div className="h-4 w-[1px] bg-white/10"></div>

          {/* Bilingual Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 focus:outline-none hover:text-accent group cursor-pointer transition-colors font-bold tracking-wider"
          >
            <span className="text-[10px] uppercase bg-white/10 px-2 py-0.5 rounded-md border border-white/15 group-hover:border-accent">
              {lang === "en" ? "ES" : "EN"}
            </span>
            <span className="text-[10px] font-semibold text-white/80 group-hover:text-white">
              {lang === "en" ? "Español" : "English"}
            </span>
          </button>
        </div>
      </div>

      {/* 2. HEADER / NAVBAR (Pure white, subtle slim bottom border, high-contrast) */}
      <header
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(18,32,51,0.03)] py-3 border-b border-slate-100"
            : "bg-white py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-md border border-slate-100/80 transition duration-300 group-hover:scale-105 overflow-hidden">
              <img
                src="https://res.cloudinary.com/drghl4bjl/image/upload/q_auto/f_auto/v1781556920/Logo1x1_Prinicpal_rvh4wz.png"
                alt="EverSafe Financial Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-lg md:text-xl font-bold font-sans tracking-tight text-brand-navy flex items-center gap-1">
                EverSafe <span className="text-brand-purple">Financial</span>
              </span>
              <span className="block text-[8px] uppercase tracking-widest font-extrabold text-brand-slate -mt-1 flex items-center gap-1">
                <span>By Mary Rivera · LLC</span>
                <span className="text-brand-sage ml-1">★ Licensed</span>
              </span>
            </div>
          </a>

          {/* Main Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { id: "home", label: t.nav.home },
              { id: "services", label: t.nav.services },
              { id: "about", label: t.nav.about },
              { id: "contact", label: t.nav.contact }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-xs md:text-sm font-bold tracking-wider uppercase transition duration-200 relative py-1.5 block nav-link ${
                  activeSection === item.id
                    ? "text-brand-purple active-nav"
                    : "text-brand-slate hover:text-brand-purple"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Quick CTA Navbar button (Dorado premium #C9A227 o morada de marca, pero no ambos) */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-block bg-brand-purple hover:bg-brand-purple-hover text-white font-bold py-2.5 px-6 rounded-2xl text-xs md:text-sm tracking-wide transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md shadow-brand-purple/15"
            >
              ⭐ {t.nav.cta}
            </a>
          </div>

          {/* Hamburger trigger on mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-xl border border-slate-200 text-brand-navy hover:bg-brand-gray-soft transition focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-lg px-6 py-6 space-y-4 animate-fade-in-up">
            <div className="flex flex-col gap-3">
              {[
                { id: "home", label: t.nav.home },
                { id: "services", label: t.nav.services },
                { id: "about", label: t.nav.about },
                { id: "contact", label: t.nav.contact }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 text-sm font-bold uppercase tracking-wider transition ${
                    activeSection === item.id ? "text-brand-purple pl-1 border-l-4 border-brand-purple" : "text-brand-slate pl-1"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full bg-brand-purple text-white font-bold py-3 px-4 rounded-xl text-center text-sm shadow-md"
            >
              ⭐ {t.nav.cta}
            </a>
          </div>
        )}
      </header>

      {/* K10: Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-[#00C2A8] z-50 transition-all duration-75" 
        style={{ width: `${scrollProgress}%` }} 
      />

      {currentView === "home" ? (
        <>
          {/* 3. HERO SECTION (Re-imagined: Brand new World-Class responsive Hero layout with rich authority signaling) */}
      <section
        id="home"
        className="relative bg-cover md:bg-top bg-center bg-no-repeat pt-20 pb-28 md:py-32 px-4 md:px-8 overflow-hidden border-b border-slate-100 min-h-[450px] md:min-h-[650px] flex items-center spotlight-purple"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/drghl4bjl/image/upload/q_auto/f_auto/v1781560568/insurance-advisor-florida-family-financial-protection.jpg_xpfdp2.jpg')"
        }}
      >
        {/* Dark sophisticated gradient overlay for breathing room and perfect text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/35 z-0" />

        {/* SEO Image for Crawler Compatibility with Alt Text */}
        <img
          src="https://res.cloudinary.com/drghl4bjl/image/upload/q_auto/f_auto/v1781560568/insurance-advisor-florida-family-financial-protection.jpg_xpfdp2.jpg"
          alt="Licensed insurance advisor helping Florida family with financial protection plan"
          referrerPolicy="no-referrer"
          className="sr-only"
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
          
          {/* Column 1: Info, Taglines, CTAs and Badges */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left reveal-init reveal-visible">
            
            {/* Compliance Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg text-xs text-white tracking-widest font-bold anim-1 mx-auto lg:mx-0">
              <Award className="w-4 h-4 text-accent flex-shrink-0 animate-bounce" />
              <span className="text-[9px] md:text-2xs uppercase tracking-[0.15em] font-extrabold">{t.hero.badge.split(" · ")[1]} · LICENSED FLORIDA ADVISOR</span>
            </div>

            <div className="space-y-4 anim-2">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-accent bg-accent/15 border border-accent/20 px-3.5 py-1.5 rounded-full inline-block">
                {lang === "en" ? "WORLD-CLASS FINANCIAL STREAMS" : "FINANZAS Y PROTECCIÓN DE RANGO MUNDIAL"}
              </span>
              <h1 className="text-4xl sm:text-5.5xl md:text-6.5xl font-black font-sans leading-[1.05] text-white tracking-tight max-w-2xl mx-auto lg:mx-0">
                {t.hero.title}
              </h1>
              {/* A1 — HERO: SUBTÍTULO EMOCIONAL */}
              <p className="text-sm md:text-base italic font-extrabold text-accent tracking-wider mt-3">
                {lang === "en" 
                  ? "“ Your family deserves more than a policy — they deserve a promise. ”" 
                  : "“ Tu familia merece más que una póliza — merece una promesa. ”"}
              </p>
            </div>
            
            <p className="text-base md:text-lg text-white/90 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 anim-3">
              {t.hero.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 anim-3 pt-2.5 border-l-3 border-accent pl-4">
              {lang === "en"
                ? "EverSafe Financial helps Florida families, individuals, and business owners compare life insurance, Medicare, ACA, retirement, and wealth protection solutions with dedicated bilingual support."
                : "EverSafe Financial ayuda a familias, individuos y dueños de negocios en Florida a comparar soluciones de seguro de vida, Medicare, ACA, retiro y protección de patrimonio con soporte bilingüe calificado."}
            </p>

            {/* Direct Calls - Primary CTA with hover + click feedback (K2) */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start anim-4">
                <a
                  href="tel:7273596196"
                  className="bg-accent hover:bg-accent-dark text-white font-extrabold py-4.5 px-8 rounded-full text-sm sm:text-base transition-all transform hover:scale-[1.04] active:scale-95 duration-300 text-center shadow-lg hover:shadow-accent/20 flex items-center justify-center gap-2 btn-glow-accent cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  {t.hero.ctaPhone}
                </a>
                <a
                  href="#iul-explainer"
                  className="bg-transparent hover:bg-white/10 text-white font-extrabold py-4.5 px-8 rounded-full text-sm sm:text-base border-2 border-white/30 transition-all transform hover:scale-[1.04] active:scale-95 duration-300 text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-accent" />
                  {t.hero.ctaIUL}
                </a>
              </div>
              <p className="text-[11px] text-white/60 text-center lg:text-left pl-2 font-semibold">
                {lang === "en" 
                  ? "★ Free personalized consultation · No high sales pressure · 100% English & Spanish help" 
                  : "★ Consulta personalizada gratuita · Sin presión de ventas · Ayuda en inglés y español"}
              </p>
            </div>

            {/* Verification highlights (A2 trust badges written with real persuasive details) */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-md mx-auto lg:mx-0 anim-5">
              <div className="text-center lg:text-left">
                <span className="block text-[9px] text-accent font-extrabold uppercase tracking-widest">{lang === "en" ? "EXPERIENCE" : "EXPERIENCIA"}</span>
                <span className="block text-xs sm:text-sm font-extrabold text-white mt-1.5 leading-snug">
                  {lang === "en" ? "4+ Years Safeguarding Lives" : "4+ Años Protegiendo Vidas"}
                </span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-[9px] text-accent font-extrabold uppercase tracking-widest">{lang === "en" ? "FLUENCY" : "IDIOMAS"}</span>
                <span className="block text-xs sm:text-sm font-extrabold text-white mt-1.5 leading-snug">
                  {lang === "en" ? "Full English & Spanish" : "Soporte Bilingüe"}
                </span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-[9px] text-accent font-extrabold uppercase tracking-widest">{lang === "en" ? "SECURITY" : "COBERTURA"}</span>
                <span className="block text-xs sm:text-sm font-extrabold text-white mt-1.5 leading-snug">
                  {lang === "en" ? "A-Rated Carriers Only" : "Sólo Aseguradoras A+"}
                </span>
              </div>
            </div>

          </div>

          {/* Column 2: Interactive Dynamic Quiz & Mary Rivera Small Horizontal Badge */}
          <div className="lg:col-span-5 flex flex-col gap-6 items-center justify-center lg:justify-end anim-4">
            <QuizCard t={t} />
            
            {/* Horizontal Glass Partner Badge (Builds massive personal connection instantly) */}
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 shadow-2xl flex items-center gap-4 text-white hover:border-accent/40 transition-colors duration-300">
              <img
                src="https://res.cloudinary.com/drghl4bjl/image/upload/q_auto/f_auto/v1781560568/mary-rivera-licensed-insurance-advisor-eversafe-financial.jpg_hgybkk.jpg"
                alt="Mary Rivera - Licensed Insurance Advisor at EverSafe Financial Florida"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="rounded-full w-14 h-14 object-cover border-2 border-accent shadow-md flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-extrabold text-xs sm:text-sm text-white flex items-center gap-1.5">
                  Mary Rivera <span className="text-accent text-[9px] uppercase tracking-widest animate-pulse font-bold">● {lang === 'en' ? 'Online' : 'Disponible'}</span>
                </h4>
                <p className="text-[10px] text-white/85 font-semibold truncate mt-0.5">{t.about.badge}</p>
                
                <div className="flex gap-2.5 mt-2">
                  <a href="tel:7273596196" className="text-[9px] uppercase tracking-wider font-black bg-accent hover:bg-accent-dark text-white px-2.5 py-1 rounded transition-colors">
                    📞 {lang === 'en' ? 'Call Advisor' : 'Llamar'}
                  </a>
                  <a href="#contact" className="text-[9px] uppercase tracking-wider font-black bg-white/15 hover:bg-white/25 text-white px-2.5 py-1 rounded border border-white/10 transition-all">
                    💬 {lang === 'en' ? 'Message' : 'Mensaje'}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. STATS BAR (white background with extremely sleek borders) */}
      <section className="bg-white py-12 px-4 md:px-8 border-b border-slate-100 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <AnimatedStat
              num={t.stats.years.num}
              label={t.stats.years.label}
              icon={<Award className="w-5.5 h-5.5" />}
              microCopy={lang === "en" ? "Of unyielding integrity and Florida licensing" : "De inquebrantable integridad y certificación en Florida"}
            />
            <AnimatedStat
              num={t.stats.families.num}
              label={t.stats.families.label}
              icon={<Users className="w-5.5 h-5.5" />}
              microCopy={lang === "en" ? "Protected with tailor-made financial safety nets" : "Protegidas con redes de seguridad financiera a medida"}
            />
            <AnimatedStat
              num={t.stats.products.num}
              label={t.stats.products.label}
              icon={<Briefcase className="w-5.5 h-5.5" />}
              microCopy={lang === "en" ? "Leveraged to maximize cash growth & security" : "Aprovechados para maximizar crecimiento de efectivo y seguridad"}
            />
            <AnimatedStat
              num={t.stats.states.num}
              label={t.stats.states.label}
              icon={<MapPin className="w-5.5 h-5.5" />}
              microCopy={lang === "en" ? "Expanding our shield of trust across the nation" : "Expandiendo nuestro escudo de confianza en la nación"}
            />
          </div>
        </div>
      </section>

      {/* 4.5 CARRIER PARTNERS LOGOS LAYER (Builds massive enterprise-grade corporate credibility) */}
      <section className="bg-slate-50 border-y border-slate-100 py-6 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.14em] text-brand-slate font-extrabold mb-4">
            {lang === "en" ? "Offering authorized coverage from top carriers" : "Ofreciendo cobertura autorizada de las aseguradoras líderes"}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 text-xs sm:text-sm font-sans font-bold text-brand-navy">
            <span>Florida Blue</span>
            <span className="hidden sm:inline text-brand-purple">•</span>
            <span>Aetna</span>
            <span className="hidden sm:inline text-[#00C2A8]">•</span>
            <span>Cigna</span>
            <span className="hidden sm:inline text-brand-purple">•</span>
            <span>Humana</span>
            <span className="hidden sm:inline text-[#00C2A8]">•</span>
            <span>Ambetter</span>
            <span className="hidden sm:inline text-brand-purple">•</span>
            <span>Mutual of Omaha</span>
          </div>
        </div>
      </section>

      {/* 5. CORE FOCUS SERVICES (Soft gray background #F3F3F4 as requested, clean headers) */}
      <section id="services" className="py-24 px-4 md:px-8 bg-brand-gray-soft relative reveal-init">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-purple bg-brand-purple-light px-4 py-1.5 rounded-full inline-block">
              🛡️ {t.core.title}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-sans text-brand-navy tracking-tight leading-normal">
              {t.core.title === "Core Services" ? "Your Strategic Protection Portfolio" : "Planificación de Protección Estratégica"}
            </h2>
            <p className="text-sm md:text-base text-brand-slate leading-relaxed">
              {t.core.subtitle}
            </p>
          </div>

          {/* 3 Columns Core focus cards (Styled with white backgrounds and navy buttons for high authority feeling) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: IUL */}
            <TiltCard popular popularLabel={t.core.popular}>
              <div className="space-y-6">
                <div className="w-12 h-12 bg-brand-purple-light rounded-2xl flex items-center justify-center text-brand-purple text-2xl shadow-sm border border-brand-purple/10">
                  🗄️
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-bold font-sans text-brand-navy">
                    {t.core.iulTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                    {t.core.iulDesc}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handlePreFillMessage(t.core.iulTitle)}
                className="mt-8 w-full bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transform hover:scale-[1.03] active:scale-[0.97] hover:shadow-md transition-all duration-300 text-center group flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{t.core.cta}</span>
                <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
              </button>
            </TiltCard>

            {/* Card 2: Obamacare (Suave acento verde/teal para bienestar) */}
            <TiltCard>
              <div className="space-y-6">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent text-2xl shadow-sm border border-accent/20">
                  🏥
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-bold font-sans text-brand-navy">
                    {t.core.obamacareTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                    {t.core.obamacareDesc}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handlePreFillMessage(t.core.obamacareTitle)}
                className="mt-8 w-full bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transform hover:scale-[1.03] active:scale-[0.97] hover:shadow-md transition-all duration-300 text-center group flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{t.core.cta}</span>
                <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
              </button>
            </TiltCard>

            {/* Card 3: Medicare */}
            <TiltCard>
              <div className="space-y-6">
                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-brand-navy text-2xl shadow-sm border border-slate-200">
                  ⚕️
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-bold font-sans text-brand-navy">
                    {t.core.medicareTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                    {t.core.medicareDesc}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handlePreFillMessage(t.core.medicareTitle)}
                className="mt-8 w-full bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transform hover:scale-[1.03] active:scale-[0.97] hover:shadow-md transition-all duration-300 text-center group flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{t.core.cta}</span>
                <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
              </button>
            </TiltCard>

          </div>

        </div>
      </section>

      {/* 6. ALL SERVICES (Catálogo Completo - Fondo blanco para rythym contrast, high elegancy) */}
      <section className="py-24 px-4 md:px-8 bg-white border-y border-slate-100 relative reveal-init">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-purple bg-brand-purple-light px-4 py-1.5 rounded-full inline-block">
              💼 {t.allServices.title}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-sans text-brand-navy tracking-tight">
              {t.allServices.title}
            </h2>
            <p className="text-sm md:text-base text-brand-slate leading-relaxed">
              {t.allServices.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Column 1: Life & Financial Security */}
            <div className="space-y-6 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(18,32,51,0.02)]">
              <h3 className="text-lg font-bold text-brand-navy font-sans flex items-center gap-2.5 pb-4 border-b border-slate-100">
                <span className="text-xl">💰</span>
                {t.allServices.groupLife}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <ServiceItem label={t.allServices.kidsSavings} desc={t.allServices.kidsSavingsDesc} />
                <ServiceItem label={t.allServices.finalExpenses} desc={t.allServices.finalExpensesDesc} />
                <ServiceItem label={t.allServices.mortgageProt} desc={t.allServices.mortgageProtDesc} />
                <ServiceItem label={t.allServices.accidental} desc={t.allServices.accidentalDesc} />
                <ServiceItem label={t.allServices.taxFreeRet} desc={t.allServices.taxFreeRetDesc} />
                <ServiceItem label={t.allServices.rollover} desc={t.allServices.rolloverDesc} />
                <ServiceItem label={t.allServices.annuities} desc={t.allServices.annuitiesDesc} />
              </div>
            </div>

            {/* Column 2: Health & Wellness (Utiliza el verde suave como acento salud) */}
            <div className="space-y-6 bg-brand-sage-light p-6 md:p-8 rounded-3xl border border-brand-sage/10">
              <h3 className="text-lg font-bold text-brand-navy font-sans flex items-center gap-2.5 pb-4 border-b border-brand-sage/20">
                <span className="text-xl">🏥</span>
                {t.allServices.groupHealth}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <ServiceItem label={t.allServices.obamacare} desc={t.allServices.obamacareDescWeb} />
                <ServiceItem label={t.allServices.dentalVision} desc={t.allServices.dentalVisionDesc} />
                <ServiceItem label={t.allServices.hospitalInd} desc={t.allServices.hospitalIndDesc} />
                <ServiceItem label={t.allServices.medicare} desc={t.allServices.medicareDescWeb} />
                <ServiceItem label={t.allServices.privateHealth} desc={t.allServices.privateHealthDesc} />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. WHY CHOOSE US (Soft gray background #F3F3F4 with family background image overlay) */}
      <section
        className="py-24 px-4 md:px-8 bg-cover bg-center bg-no-repeat relative overflow-hidden reveal-init"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/drghl4bjl/image/upload/q_auto/f_auto/v1781560568/hispanic-family-financial-security-planning-florida.jpg_qtjlyr.jpg')"
        }}
      >
        {/* Soft white/gray overlay for legibility as recommended */}
        <div className="absolute inset-0 bg-[#F3F3F4]/90 z-0" />

        {/* SEO Image with Alt text */}
        <img
          src="https://res.cloudinary.com/drghl4bjl/image/upload/q_auto/f_auto/v1781560568/hispanic-family-financial-security-planning-florida.jpg_qtjlyr.jpg"
          alt="Happy Hispanic family reviewing financial security plan in Florida"
          referrerPolicy="no-referrer"
          loading="lazy"
          className="sr-only"
        />

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold font-sans text-brand-navy tracking-tight">
              {t.whyChoose.title}
            </h2>
            {/* A5 — HOOK PHRASE */}
            <p className="text-xs sm:text-sm md:text-base italic font-bold text-brand-purple tracking-wide">
              {lang === "en" 
                ? "Choosing protection is a personal journey. We walk it by your side." 
                : "Elegir protección es un camino personal. Lo caminamos a tu lado."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Box 1 */}
            <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(18,32,51,0.02)] hover:shadow-md hover:-translate-y-0.5 transition duration-300 space-y-4">
              <div className="w-10 h-10 bg-brand-purple-light rounded-2xl flex items-center justify-center text-brand-purple text-lg font-bold">
                🤝
              </div>
              <h3 className="text-sm font-bold text-brand-navy">{t.whyChoose.serviceTitle}</h3>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">{t.whyChoose.serviceDesc}</p>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(18,32,51,0.02)] hover:shadow-md hover:-translate-y-0.5 transition duration-300 space-y-4">
              <div className="w-10 h-10 bg-brand-purple-light rounded-2xl flex items-center justify-center text-brand-purple text-lg font-bold">
                🌐
              </div>
              <h3 className="text-sm font-bold text-brand-navy">{t.whyChoose.bilingualTitle}</h3>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">{t.whyChoose.bilingualDesc}</p>
            </div>

            {/* Box 3 */}
            <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(18,32,51,0.02)] hover:shadow-md hover:-translate-y-0.5 transition duration-300 space-y-4">
              <div className="w-10 h-10 bg-brand-purple-light rounded-2xl flex items-center justify-center text-brand-purple text-lg font-bold">
                📊
              </div>
              <h3 className="text-sm font-bold text-brand-navy">{t.whyChoose.guidanceTitle}</h3>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">{t.whyChoose.guidanceDesc}</p>
            </div>

            {/* Box 4 */}
            <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(18,32,51,0.02)] hover:shadow-md hover:-translate-y-0.5 transition duration-300 space-y-4">
              <div className="w-10 h-10 bg-brand-purple-light rounded-2xl flex items-center justify-center text-brand-purple text-lg font-bold">
                🛡️
              </div>
              <h3 className="text-sm font-bold text-brand-navy">{t.whyChoose.coverageTitle}</h3>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">{t.whyChoose.coverageDesc}</p>
            </div>

          </div>

        </div>
      </section>

      {/* 7.5. TARGET AUDIENCE & PREFERENCES (Who We Help & Why Contact Us) */}
      <section className="py-20 px-4 md:px-8 bg-brand-gray-soft border-b border-slate-100 relative z-20 reveal-init">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Who We Help block */}
          <div className="space-y-6 bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(18,32,51,0.02)] transition-all duration-300 hover:shadow-lg">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00C2A8] bg-[#00C2A8]/10 px-3 py-1 rounded-full inline-block">
                👥 {t.whoWeHelp.title}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold font-sans text-brand-navy tracking-tight">
                {t.whoWeHelp.title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                {t.whoWeHelp.subtitle}
              </p>
            </div>
            
            <ul className="space-y-4 pt-2">
              {t.whoWeHelp.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3.5 text-xs sm:text-sm text-brand-navy font-semibold">
                  <span className="w-5.5 h-5.5 bg-[#00C2A8]/15 rounded-full flex items-center justify-center text-[#001D1A] text-[11px] font-bold mt-0.5 flex-shrink-0 border border-[#00C2A8]/20">
                    ✓
                  </span>
                  <span className="leading-relaxed font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Clients Contact Us block */}
          <div className="space-y-6 bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(18,32,51,0.02)] transition-all duration-300 hover:shadow-lg">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-white bg-brand-purple px-3 py-1 rounded-full inline-block">
                💡 {t.whyContactUs.title}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold font-sans text-brand-navy tracking-tight">
                {t.whyContactUs.title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                {lang === "en" ? "Real solutions built on transparency, security, and proven coverage metrics." : "Soluciones reales construidas sobre transparencia, seguridad e indicadores probados."}
              </p>
            </div>

            <ul className="space-y-4 pt-2">
              {t.whyContactUs.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3.5 text-xs sm:text-sm text-brand-navy font-semibold">
                  <span className="w-5.5 h-5.5 bg-brand-purple-light rounded-full flex items-center justify-center text-[#8C49B1] text-[11px] font-bold mt-0.5 flex-shrink-0 border border-brand-purple/10">
                    ★
                  </span>
                  <span className="leading-relaxed font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 8. ABOUT SECTION (Mary Rivera commitment with pure white and refined human avatar layout) */}
      <section id="about" className="py-24 px-4 md:px-8 bg-white relative reveal-init">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
             {/* Left Photo Circle Premium Rendering with hover dynamic glow ring K12 */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative group w-72 h-72 md:w-80 md:h-80">
                {/* Decorative delicate brand-purple frame */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-accent rounded-full blur pointer-events-none opacity-20 group-hover:opacity-50 transition duration-500"></div>
                
                {/* Main graphic container */}
                <div className="relative w-full h-full bg-brand-navy border-4 border-[#8c49b1] hover:ring-8 hover:ring-[#8c49b1]/30 hover:border-[#00C2A8] shadow-2xl rounded-full overflow-hidden select-none transition-all duration-500">
                  <img
                    src="https://res.cloudinary.com/drghl4bjl/image/upload/q_auto/f_auto/v1781560567/mary-rivera-insurance-advisor-florida-portrait.jpg_buwljo.jpg"
                    alt="Mary Rivera Licensed Insurance Advisor EverSafe Financial Florida portrait"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition duration-500 scale-100 group-hover:scale-105"
                  />
                  {/* Verified badge */}
                  <span className="absolute top-4 left-1/2 -translate-x-1/2 bg-accent text-white font-extrabold text-[9px] tracking-widest uppercase px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-md whitespace-nowrap z-10">
                    <ShieldCheck className="w-3.5 h-3.5 text-white fill-accent" />
                    BILINGUAL
                  </span>

                  {/* Gentle gradient overlay for label legibility */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy via-brand-navy/65 to-transparent pt-12 pb-5 text-center">
                    <p className="text-sm font-bold tracking-wide font-sans text-accent uppercase">
                      Mary Rivera
                    </p>
                    <p className="text-[10px] text-white/90 tracking-wider font-semibold uppercase mt-0.5 px-4 truncate">
                      {t.about.badge}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Information */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="text-xs uppercase tracking-widest font-extrabold text-white bg-brand-purple px-4 py-1.5 rounded-full inline-block">
                🏆 {lang === "en" ? "Meet Your Advisor" : "Conoce a tu asesora"}
              </span>
              
              <h2 className="text-3xl md:text-4.5xl font-extrabold font-sans text-brand-navy tracking-tight leading-tight">
                {t.about.titleLabel}
              </h2>
              
              <p className="text-sm md:text-base text-brand-slate leading-relaxed font-normal">
                {t.about.bio}
              </p>

              <div className="pt-4 animate-pop-in">
                <a
                  href="tel:7273596196"
                  className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white font-black py-4 px-8 rounded-2xl text-sm transition-all transform hover:scale-105 active:scale-95 duration-300 tracking-wider inline-flex items-center gap-2 shadow-sm hover:shadow-md shadow-accent/15 cursor-pointer"
                >
                  {t.about.cta}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. IUL EXPLAINER (Redesigned: High Authority Deep Navy Blue Background #122033 to build supreme corporate trust) */}
      <section id="iul-explainer" className="py-24 bg-brand-navy text-white px-4 md:px-8 relative overflow-hidden reveal-init">
        {/* Abstract Light Background Overlays */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-bold text-accent bg-white/10 py-1.5 px-4 rounded-full inline-block border border-white/10">
              💡 {lang === "en" ? "BUILD RETIREMENT SAFELY" : "CONSTRUYE TU RETIRO SEGURO"}
            </span>
            <h2 className="text-3.5xl md:text-4.5xl font-extrabold font-sans text-white tracking-tight leading-tight">
              {t.iulExplainer.title}
            </h2>
            {/* A6 — IUL DARK LINE */}
            <p className="text-xs sm:text-sm md:text-base italic text-accent font-medium tracking-wider pt-1">
              " {lang === "en" 
                ? "The market changes. Our promise to protect your assets doesn't." 
                : "El mercado cambia. Nuestra promesa de proteger tus activos no." } "
            </p>
          </div>

          {/* IUL Growth Chart Visual */}
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/drghl4bjl/image/upload/q_auto/f_auto/v1781560568/index-universal-life-insurance-growth-chart-concept.jpg_q5kxhk.jpg"
              alt="Index Universal Life insurance growth chart concept - IUL financial protection"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl opacity-90 mb-8"
            />
          </div>

          {/* Hybrid View: Desktop High-Contrast Comparison Matrix, Mobile Card fallback */}
          <div className="hidden lg:block bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse font-sans">
              <thead>
                <tr className="bg-white/10 border-b border-white/10 text-xs uppercase tracking-widest font-extrabold text-accent">
                  <th className="p-6">{lang === "en" ? "Strategic Benchmark / Feature" : "Indicador / Característica"}</th>
                  <th className="p-6 text-rose-300">{t.iulExplainer.colSavingsTitle}</th>
                  <th className="p-6 text-rose-300">{t.iulExplainer.col401kTitle}</th>
                  <th className="p-6 text-accent bg-white/5">{t.iulExplainer.colIulTitle} 🏆</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm divide-y divide-white/5 font-medium text-white/90">
                <tr>
                  <td className="p-6 font-bold">{lang === "en" ? "🛡️ Market Downside Protection" : "🛡️ Protección ante Caídas del Mercado"}</td>
                  <td className="p-6 text-white/70">{lang === "en" ? "Guaranteed Principal (No growth)" : "Principal Garantizado (Sin crecimiento)"}</td>
                  <td className="p-6 text-white/70">{lang === "en" ? "0% Safety (Subject to complete market drops)" : "0% Seguro (Sujeto a caídas severas)"}</td>
                  <td className="p-6 font-extrabold text-accent bg-white/5">
                    {lang === "en" ? "100% Floor Protection (0% floor guarantee)" : "100% Protegido (Garantía de piso del 0%)"}
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-bold">{lang === "en" ? "📈 Average Interest Rate Potential" : "📈 Potencial de Tasa de Interés Promedio"}</td>
                  <td className="p-6 text-white/70">{lang === "en" ? "Exceedingly Low (0.01% - 1.5% average)" : "Extremadamente Bajo (0.01% - 1.5% promedio)"}</td>
                  <td className="p-6 text-white/70">{lang === "en" ? "Highly Variable (Avg. 5% - 7% with volatility)" : "Variable (Promedio 5% - 7% con alta volatilidad)"}</td>
                  <td className="p-6 font-extrabold text-accent bg-white/5">
                    {lang === "en" ? "High Compounding growth (Indexed up to 10% - 12% caps)" : "Alto Interés Compuesto (Indexado hasta 10% - 12%)"}
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-bold">{lang === "en" ? "💸 Withdrawal Tax Status" : "💸 Impuestos al Retirar Fondos"}</td>
                  <td className="p-6 text-white/70">{lang === "en" ? "Fully Taxed annually on interest earned" : "Totalmente Gravado anualmente sobre intereses"}</td>
                  <td className="p-6 text-white/70">{lang === "en" ? "100% Taxable (Both principal and gains taxed)" : "100% Gravable (Se cobran impuestos al retirar)"}</td>
                  <td className="p-6 font-extrabold text-accent bg-white/5">
                    {lang === "en" ? "100% Tax-Free (Legal, structured withdrawal streams)" : "100% Libre de Impuestos (Retiros e ingresos exentos)"}
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-bold">{lang === "en" ? "🕊️ Instant Legacy Guard Shield" : "🕊️ Cobertura de Fallecimiento de Legado"}</td>
                  <td className="p-6 text-white/70">{lang === "en" ? "None (Only what is accumulated is returned)" : "Ninguna (Sólo heredas lo acumulado)"}</td>
                  <td className="p-6 text-white/70">{lang === "en" ? "None (Only what remains is left to heirs)" : "Ninguna (Sólo heredas el saldo restante)"}</td>
                  <td className="p-6 font-extrabold text-accent bg-white/5">
                    {lang === "en" ? "Severe Tax-Free Benefit instantly sent to family" : "Póliza millonaria exenta de impuestos para la familia"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:hidden">
            
            {/* Box 1 (Traditional Savings) */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-xl text-rose-400">
                  ❌
                </div>
                <h3 className="text-base font-bold text-white font-sans">{t.iulExplainer.colSavingsTitle}</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">{t.iulExplainer.colSavingsDesc}</p>
              </div>
              <div className="text-[10px] text-rose-300 font-bold tracking-wider uppercase bg-rose-950/20 py-1.5 text-center rounded-xl border border-rose-900/10">
                Low Return / Taxed
              </div>
            </div>

            {/* Box 2 (401K Account) */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-xl text-rose-400">
                  ❌
                </div>
                <h3 className="text-base font-bold text-white font-sans">{t.iulExplainer.col401kTitle}</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">{t.iulExplainer.col401kDesc}</p>
              </div>
              <div className="text-[10px] text-rose-300 font-bold tracking-wider uppercase bg-rose-950/20 py-1.5 text-center rounded-xl border border-rose-900/10">
                Market Risk / Fees
              </div>
            </div>

            {/* Box 3 (INDEX UNIVERSAL LIFE - Accented with luxury template accent outline and badge choice) */}
            <div className="p-8 rounded-3xl bg-white/10 border-2 border-accent flex flex-col justify-between space-y-6 relative">
              <div className="absolute top-2 right-2 w-12 h-12 bg-accent/10 rounded-full blur-xl pointer-events-none"></div>

              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-accent text-brand-navy flex items-center justify-center text-sm font-black shadow-md shadow-accent/20 select-none">
                  ✓
                </div>
                <h3 className="text-base font-bold text-accent font-sans flex items-center gap-1.5">
                  {t.iulExplainer.colIulTitle}
                </h3>
                <p className="text-xs sm:text-sm text-white font-normal leading-relaxed">{t.iulExplainer.colIulDesc}</p>
              </div>
              <div className="text-[11px] text-brand-navy font-bold tracking-widest uppercase bg-accent py-2 text-center rounded-xl shadow-sm">
                🏆 Winner Choice
              </div>
            </div>

          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => {
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-accent hover:bg-[#e0b42c] text-brand-navy font-extrabold py-4 px-10 rounded-2xl text-sm transition-all transform hover:scale-105 active:scale-95 duration-300 tracking-wider inline-flex items-center gap-2 shadow-lg hover:shadow-xl shadow-accent/20 cursor-pointer"
            >
              ⭐ {t.iulExplainer.cta}
            </button>
          </div>

        </div>
      </section>

      {/* 9.5. FAQ SECTION (Interactive bilingual accordion with elegant transition effects) */}
      <section id="faq" className="py-24 px-4 md:px-8 bg-white relative border-b border-slate-100 reveal-init">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-brand-purple bg-brand-purple-light px-4 py-1.5 rounded-full inline-block">
              ℹ️ {lang === "en" ? "Common Clarifications" : "Aclaraciones Comunes"}
            </span>
            <h2 className="text-3xl md:text-4.5xl font-extrabold font-sans text-brand-navy tracking-tight">
              {t.faq.title}
            </h2>
            <p className="text-xs sm:text-sm text-brand-slate max-w-xl mx-auto">
              {lang === "en" 
                ? "Find transparent answers to the questions families ask licensed advisor Mary Rivera about financial protection plans in Florida."
                : "Encuentra respuestas transparentes a las preguntas que las familias le hacen a la asesora Mary Rivera sobre seguros y protección en Florida."}
            </p>
          </div>

          <div className="space-y-4">
            {t.faq.items.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "border-brand-purple bg-brand-purple-light/10 shadow-[0_4px_20px_rgba(140,73,177,0.06)]" 
                      : "border-slate-100 bg-white hover:border-slate-300 hover:bg-slate-50/50"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm md:text-base font-bold text-brand-navy pr-4">
                      {item.q}
                    </span>
                    <span 
                      className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen 
                          ? "bg-brand-purple text-white border-brand-purple rotate-180" 
                          : "bg-slate-50 text-brand-slate border-slate-100"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[500px] border-t border-slate-10 border-dashed" : "max-h-0"
                    }`}
                  >
                    <div className="p-5 md:p-6 text-xs sm:text-sm text-brand-slate leading-relaxed font-normal bg-white/40">
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 10. CONTACT / FREE QUOTE (Soft gray background, highly guided clear form with brand-purple action) */}
      <section id="contact" className="py-24 px-4 md:px-8 bg-brand-gray-soft relative reveal-init">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Column 1: Contact Detail Info */}
            <div className="lg:col-span-5 space-y-8 text-center lg:text-left flex flex-col justify-center">
              <div>
                <span className="text-xs uppercase tracking-widest font-extrabold text-white bg-brand-purple px-4 py-1.5 rounded-full inline-block mb-3.5">
                  📞 {lang === "en" ? "GET IN TOUCH" : "MÉTODOS DE CONTACTO"}
                </span>
                <h2 className="text-3.5xl md:text-4.5xl font-extrabold font-sans text-brand-navy tracking-tight">
                  {lang === "en" ? "Let's Build Your Protection Plan — It's Free" : "Construyamos tu Plan de Protección — Es Gratis"}
                </h2>
              </div>

              {/* Direct Info list */}
              <div className="space-y-4">
                
                {/* Email item */}
                <div className="inline-flex lg:flex items-center gap-4 text-left">
                  <div className="w-12 h-12 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center text-brand-purple flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-brand-slate font-bold uppercase tracking-wider">Email Address</span>
                    <a href="mailto:mary@eversafefinancial.com" className="text-sm md:text-base font-bold text-brand-navy hover:text-brand-purple transition-all hover:underline">
                      mary@eversafefinancial.com
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="inline-flex lg:flex items-center gap-4 text-left">
                  <div className="w-12 h-12 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center text-brand-purple flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-purple" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-brand-slate font-bold uppercase tracking-wider">Bilingual Phone Service</span>
                    <a href="tel:7273596196" className="text-sm md:text-base font-bold text-brand-navy hover:text-brand-purple transition-all hover:underline">
                      (727) 359-6196
                    </a>
                  </div>
                </div>

                {/* Hours line */}
                <div className="inline-flex lg:flex items-center gap-4 text-left">
                  <div className="w-12 h-12 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center text-brand-purple flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-purple" />
                  </div>
                  <div className="text-sm text-brand-navy font-normal">
                    <span className="block text-[10px] text-brand-slate font-bold uppercase tracking-wider">{t.contactForm.hoursTitle}</span>
                    <p className="font-semibold text-brand-navy">{t.contactForm.hoursWeek}</p>
                    <p className="font-semibold text-brand-navy">{t.contactForm.hoursSat}</p>
                    <p className="text-brand-slate text-xs">{t.contactForm.hoursSun}</p>
                  </div>
                </div>

                {/* Service areas */}
                <div className="inline-flex lg:flex items-center gap-4 text-left">
                  <div className="w-12 h-12 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center text-brand-purple flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-purple" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-brand-slate font-bold uppercase tracking-wider">{t.contactForm.areaLabel}</span>
                    <p className="text-sm font-semibold text-brand-navy">{t.contactForm.areaValue}</p>
                  </div>
                </div>

              </div>

              {/* Spanish Help indicator */}
              {lang === "es" && (
                <div className="p-4 bg-brand-purple-light border border-brand-purple/10 rounded-2xl text-center md:text-left">
                  <p className="text-brand-purple font-bold text-sm flex items-center justify-center lg:justify-start gap-2">
                    💬 {t.contactForm.bilingualHelp}
                  </p>
                </div>
              )}

              {/* LLC License registration references mapping the exact business parameters */}
              <div className="p-4 rounded-xl border border-slate-200 text-[10px] text-brand-slate leading-normal bg-white/60">
                <span className="font-bold uppercase tracking-wider block text-brand-slate mb-1">Company Disclosures:</span>
                EverSafe Financial LLC is a legally registered Limited Liability Company in Pinellas Park, Florida 33782.
                Formed on October 12, 2023. Backed by licensed agent Mary Rivera. All products subject to underwriting guidelines.
              </div>

            </div>

            {/* Column 2: Free Quote dynamic Form (Pure white, sleek corporate inputs context) */}
            <div className="lg:col-span-7 bg-white p-6 md:p-10 rounded-3xl border border-slate-100 shadow-[0_12px_40px_rgba(18,32,51,0.02)]">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  {/* Sage Green validation indicator checking */}
                  <div className="w-16 h-16 bg-brand-sage-light rounded-full border border-brand-sage text-3xl flex items-center justify-center text-brand-sage mx-auto mb-4 animate-bounce">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy font-sans">
                    {t.contactForm.successTitle}
                  </h3>
                  <p className="text-brand-slate text-sm max-w-sm mx-auto">
                    {t.contactForm.successDesc}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFullName("");
                      setEmail("");
                      setPhone("");
                      setMessage("");
                      setConsent(false);
                    }}
                    className="mt-6 px-6 py-2.5 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs font-bold rounded-xl uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    🔄 Send Another Inquiry / Enviar Otro Mensaje
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold font-sans text-brand-navy tracking-tight">
                      {t.contactForm.title}
                    </h3>
                    <p className="text-xs md:text-sm text-brand-slate mt-1.5">
                      {t.contactForm.subtitle}
                    </p>
                  </div>

                  <form onSubmit={handleContactSubmit} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div>
                        <label className="block text-[11px] font-bold text-brand-slate-dark uppercase tracking-wider mb-1.5 label-focus-transition">
                          {t.contactForm.nameLabel} <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Elizabeth Bennett"
                          className="w-full bg-[#F3F3F4] border border-transparent focus:bg-white focus:border-brand-purple focus:ring-2 focus:ring-[#8C49B1]/30 focus:shadow-[0_0_15px_rgba(140,73,177,0.25)] rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 text-brand-navy placeholder:text-brand-slate/40"
                        />
                      </div>

                      {/* Email input */}
                      <div>
                        <label className="block text-[11px] font-bold text-brand-slate-dark uppercase tracking-wider mb-1.5 label-focus-transition">
                          {t.contactForm.emailLabel} <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="client@mail.com"
                          className="w-full bg-[#F3F3F4] border border-transparent focus:bg-white focus:border-brand-purple focus:ring-2 focus:ring-[#8C49B1]/30 focus:shadow-[0_0_15px_rgba(140,73,177,0.25)] rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 text-brand-navy placeholder:text-brand-slate/40"
                        />
                      </div>
                    </div>

                    {/* Telephone */}
                    <div>
                      <label className="block text-[11px] font-bold text-brand-slate-dark uppercase tracking-wider mb-1.5 label-focus-transition">
                        {t.contactForm.phoneLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(727) 359-6196"
                          className="w-full bg-[#F3F3F4] border border-transparent focus:bg-white focus:border-brand-purple focus:ring-2 focus:ring-[#8C49B1]/30 focus:shadow-[0_0_15px_rgba(140,73,177,0.25)] rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 text-brand-navy placeholder:text-brand-slate/40"
                      />
                    </div>

                    {/* Detailed Message block */}
                    <div>
                      <label className="block text-[11px] font-bold text-brand-slate-dark uppercase tracking-wider mb-1.5 label-focus-transition">
                        {t.contactForm.messageLabel}
                      </label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t.contactForm.placeholderMessage}
                        className="w-full bg-[#F3F3F4] border border-transparent focus:bg-white focus:border-brand-purple focus:ring-2 focus:ring-[#8C49B1]/30 focus:shadow-[0_0_15px_rgba(140,73,177,0.25)] rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 text-brand-navy placeholder:text-brand-slate/40"
                      ></textarea>
                    </div>

                    {/* Checkbox Consent block */}
                    <div className="flex items-start gap-3 bg-brand-purple-light/50 p-3.5 rounded-xl border border-brand-purple/5">
                      <input
                        type="checkbox"
                        required
                        id="contact-consent"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-slate-300 text-brand-purple focus:ring-brand-purple accent-brand-purple cursor-pointer"
                      />
                      <label htmlFor="contact-consent" className="text-[11px] leading-snug text-brand-slate select-none cursor-pointer">
                        {t.contactForm.consentText}
                      </label>
                    </div>

                    {formError && (
                      <p className="text-rose-600 font-semibold text-xs border border-rose-100 bg-rose-50 p-3 rounded-xl animate-shake">
                        ⚠️ {formError}
                      </p>
                    )}

                    {/* Submission button (Brand Purple acento estratégico #8C49B1) with hover pop scale */}
                    <button
                      type="submit"
                      disabled={isSubmittingForm}
                      className={`w-full text-white font-bold py-3.5 px-6 rounded-2xl text-xs sm:text-sm transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg shadow-brand-purple/15 cursor-pointer text-center text-semibold uppercase ${
                        isSubmittingForm ? "bg-brand-purple/50 cursor-not-allowed" : "bg-brand-purple hover:bg-brand-purple-hover"
                      }`}
                    >
                      {isSubmittingForm ? (lang === "en" ? "⏳ SENDING..." : "⏳ ENVIANDO...") : `🚀 ${t.contactForm.btnSubmit}`}
                    </button>

                    {/* A7 — DEBAJO DEL CONTACT SUBMIT BUTTON */}
                    <p className="text-[10px] sm:text-xs text-center text-brand-purple font-semibold italic mt-1 pb-2">
                      {lang === "en" 
                        ? "🔒 Your data is fully protected and never shared. We respect your security." 
                        : "🔒 Tus datos están completamente protegidos y nunca se comparten. Respetamos tu privacidad."}
                    </p>

                    {/* Small policy disclaimer links */}
                    <div className="flex justify-center gap-4 text-[10px] text-brand-slate font-light pt-2">
                      <a href="#privacy-policy" className="hover:underline hover:text-brand-purple transition-colors">Privacy Policy</a>
                      <span>·</span>
                      <a href="#terms-of-service" className="hover:underline hover:text-brand-purple transition-colors">Terms of Service</a>
                    </div>

                  </form>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
        </>
      ) : currentView === "privacy-policy" ? (
        <PrivacyPolicy onBackToHome={onBackToHome} lang={lang} />
      ) : (
        <TermsOfService onBackToHome={onBackToHome} lang={lang} />
      )}

      {/* 11. FOOTER (Sleek deep navy #122033 for world-class finance look) */}
      <footer className="bg-brand-navy text-white pt-16 pb-10 px-4 md:px-8 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Column 1: Descriptor */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-md">
                <img
                  src="https://res.cloudinary.com/drghl4bjl/image/upload/q_auto/f_auto/v1781556920/Logo1x1_Prinicpal_rvh4wz.png"
                  alt="EverSafe Financial Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-base font-extrabold text-white tracking-wide">
                EverSafe <span className="text-brand-purple">Financial</span>
              </span>
            </div>
            <p className="text-xs text-brand-slate leading-relaxed max-w-sm">
              {t.footer.about}
            </p>
          </div>

          {/* Column 2: Direct Contact details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#8C49B1] font-bold">
              {t.footer.contactUs}
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-slate">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <a href="tel:7273596196" className="hover:text-white transition-colors hover:underline">(727) 359-6196</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <a href="mailto:mary@eversafefinancial.com" className="hover:text-white transition-colors hover:underline">mary@eversafefinancial.com</a>
              </li>
              <li className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 font-bold inline-block text-accent text-[10px]">
                💬 {t.footer.bilingual}
              </li>
            </ul>
          </div>

          {/* Column 3: Contact hours details */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#8C49B1] font-bold">
              {t.footer.hours}
            </h4>
            <ul className="space-y-1.5 text-xs text-brand-slate font-mono">
              <li>{t.contactForm.hoursWeek}</li>
              <li>{t.contactForm.hoursSat}</li>
              <li>{t.contactForm.hoursSun}</li>
            </ul>
            
            {/* White SVGs for socials */}
            <div className="flex items-center gap-4 pt-2 text-white/55">
              <a 
                href="https://www.instagram.com/eversafefinancial.llc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent transform hover:scale-125 active:scale-95 transition-all duration-300 inline-block"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/eversafefinancial" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent transform hover:scale-125 active:scale-95 transition-all duration-300 inline-block"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Rights details */}
        <div className="max-w-7xl mx-auto pt-10 mt-10 border-t border-white/5 text-center text-[11px] text-brand-slate space-y-2">
          <p>{t.footer.rights}</p>
          <div className="flex justify-center items-center gap-4 text-brand-slate mt-2">
            <a 
              href="#privacy-policy" 
              className="hover:text-accent hover:underline transition-colors focus:outline-none focus:underline"
            >
              Privacy Policy
            </a>
            <span className="text-white/10 select-none">•</span>
            <a 
              href="#terms-of-service" 
              className="hover:text-accent hover:underline transition-colors focus:outline-none focus:underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>

      {/* 12. BACK-TO-TOP BUTTON */}
      {showToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-5 md:right-8 bg-brand-navy hover:bg-brand-navy-light text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg border border-white/5 z-40 transition-all duration-300 transform scale-100 hover:scale-110 cursor-pointer animate-fade-in-up"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-accent animate-pulse" />
        </button>
      )}

      {/* 13. FLOATING CTA DRAWERS (LLAMADA Y WHATSAPP) */}
      <div className="fixed bottom-6 right-5 md:right-8 z-45 flex flex-col items-end gap-3 font-sans">
        
        {/* Ambient notification bubble above trigger */}
        {showNotificationBubble && (
          <div className="bg-brand-navy border border-white/10 text-white rounded-2xl py-2 px-3.5 shadow-xl text-xs flex items-center gap-2 relative max-w-xs animate-float">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <p className="font-semibold text-[10px] md:text-xs">
              {lang === "en" ? "Hi there! Have questions? Click here" : "¡Hola! ¿Dudas? Haz clic aquí"}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowNotificationBubble(false);
              }}
              className="hover:text-accent ml-2 font-bold p-0.5 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="absolute top-full right-5 border-8 border-transparent border-t-brand-navy"></div>
          </div>
        )}

        {/* Contact Rollout Tray */}
        {floatOpen && (
          <div className="flex flex-col gap-2.5 items-end justify-end mb-1 animate-fade-in-up">
            
            {/* Call Now item */}
            <a
              href="tel:7273596196"
              className="bg-accent hover:bg-accent-dark text-white px-4 py-2 border border-white/10 rounded-full text-xs font-bold shadow-md flex items-center gap-2 select-none hover:scale-105 transition"
            >
              <Phone className="w-4 h-4 text-white fill-white" />
              <span>(727) 359-6196</span>
            </a>

            {/* WhatsApp Link button */}
            <a
              href="https://wa.me/17273596196"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2 border border-white/10 rounded-full text-xs font-bold shadow-md flex items-center gap-2 select-none hover:scale-105 transition"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Direct</span>
            </a>

            {/* Chat Inbox Popup modal trigger */}
            <button
              onClick={() => {
                setChatOpened(true);
                setFloatOpen(false);
              }}
              className="bg-brand-purple hover:bg-brand-purple-hover text-white px-4 py-2 border border-white/10 rounded-full text-xs font-bold shadow-md flex items-center gap-2 hover:scale-105 transition cursor-pointer"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>{lang === "en" ? "Send Simple Inquiry" : "Consulta Directa"}</span>
            </button>

          </div>
        )}

        {/* Main Floating Trigger Button (K1 premium pulse + shake feedback) */}
        <button
          onClick={() => setFloatOpen(!floatOpen)}
          className={`bg-brand-purple hover:bg-brand-purple-hover text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl border border-white/10 cursor-pointer transform hover:scale-110 active:scale-95 transition-all duration-300 relative ${shakeFloatingBtn ? 'animate-shake' : ''}`}
          aria-label="Direct Support Tray"
        >
          {floatOpen ? (
            <X className="w-6 h-6 text-accent" />
          ) : (
            <Phone className="w-6 h-6 text-accent animate-bounce" />
          )}
          {/* Pulsating validation sage green dot representing active state */}
          <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-accent border-2 border-brand-purple rounded-full animate-pulse"></span>
        </button>

      </div>

      {/* 14. INBOX CHAT WIDGET MODAL WINDOW */}
      {chatOpened && (
        <div className="fixed inset-0 z-50 bg-brand-navy/30 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto animate-fade-in-up">
            <button
              onClick={() => setChatOpened(false)}
              className="absolute top-4 right-4 text-brand-slate hover:text-brand-purple transition p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-purple-light text-brand-purple rounded-full flex items-center justify-center text-3xl mx-auto shadow-sm">
                💬
              </div>
              
              <h3 className="text-xl font-bold font-sans text-brand-navy">
                {lang === "en" ? "Need Immediate Assistance?" : "¿Necesitas Ayuda Inmediata?"}
              </h3>
              
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-normal">
                {lang === "en"
                  ? "We understand that selecting insurance is personal. Call us or send an email directly to licensed agent Mary Rivera."
                  : "Entendemos que seleccionar un seguro es algo personal. Llámanos o envíanos un correo directamente a la asesora Mary Rivera."}
              </p>

              <div className="bg-[#F3F3F4] p-4 rounded-2xl border border-slate-100 space-y-3.5 text-left font-sans">
                
                {/* Dial numbers */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-brand-purple">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase font-bold text-brand-slate tracking-wider">Bilingual Phone</span>
                    <a href="tel:7273596196" className="text-sm font-extrabold text-brand-navy hover:text-[#8C49B1] hover:underline transition-colors">
                      (727) 359-6196
                    </a>
                  </div>
                </div>

                {/* Mail inbox details */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-brand-purple">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase font-bold text-brand-slate tracking-wider">Direct Agency Email</span>
                    <a href="mailto:mary@eversafefinancial.com" className="text-sm font-extrabold text-brand-navy hover:text-[#8C49B1] hover:underline transition-colors">
                      mary@eversafefinancial.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp button */}
                <a
                  href="https://wa.me/17273596196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-2.5 px-3.5 rounded-xl text-xs text-center flex items-center justify-center gap-2 transform active:scale-95 transition-all mt-1"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-white" />
                  <span>Start WhatsApp Conversation</span>
                </a>

              </div>

              <div className="pt-2 text-[10px] text-brand-slate font-semibold">
                {lang === "en"
                  ? "Average Response Rate: Less than 1 Hour"
                  : "Tasa de Respuesta Promedio: Menos de 1 Hora"}
              </div>

              <button
                type="button"
                onClick={() => setChatOpened(false)}
                className="w-full bg-brand-navy hover:bg-brand-navy-light text-white py-2.5 px-4 rounded-xl text-xs font-bold transition focus:outline-none cursor-pointer"
              >
                Close / Cerrar
              </button>

            </div>
          </div>
        </div>
      )}

      {/* 15. MOBILE STICKY BOTTOM CONVERSION BAR (Only visible on mobile md:hidden for supreme CRO) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-100 py-3.5 px-6 flex justify-between items-center z-48 shadow-[0_-8px_30px_rgba(18,32,51,0.08)]">
        <a
          href="tel:7273596196"
          className="flex-1 flex flex-col items-center justify-center text-brand-navy hover:text-brand-purple transition-all duration-300"
        >
          <Phone className="w-5 h-5 text-brand-purple stroke-[2.5]" />
          <span className="text-[10px] font-extrabold uppercase tracking-widest mt-1.5">
            {lang === "en" ? "Call Now" : "Llamar"}
          </span>
        </a>
        
        <div className="w-[1.5px] h-8 bg-slate-200/80"></div>
        
        <a
          href="https://wa.me/17273596196"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center text-brand-navy hover:text-brand-purple transition-all duration-300"
        >
          <MessageCircle className="w-5 h-5 text-[#25D366] stroke-[2.5] fill-current" />
          <span className="text-[10px] font-extrabold uppercase tracking-widest mt-1.5">
            WhatsApp
          </span>
        </a>
        
        <div className="w-[1.5px] h-8 bg-slate-200/80"></div>
        
        <a
          href="#contact"
          className="flex-1 flex flex-col items-center justify-center text-brand-navy hover:text-brand-purple transition-all duration-300"
        >
          <Award className="w-5 h-5 text-accent stroke-[2.5]" />
          <span className="text-[10px] font-extrabold uppercase tracking-widest mt-1.5">
            {lang === "en" ? "Free Quote" : "Cotizar"}
          </span>
        </a>
      </div>

    </div>
  );
}
