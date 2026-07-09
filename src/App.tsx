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
  MessageCircle,
  Calendar,
  Instagram,
  Facebook
} from "lucide-react";
import { translations, TranslationSet } from "./translations";
import QuizCard from "./components/QuizCard";
import useWeb3Forms from "@web3forms/react";
import { PrivacyPolicy, TermsOfService } from "./components/LegalPages";
import { WhyIulPage, IulInteractiveQuiz } from "./components/WhyIulPage";
import { TestimonialsMiniSection } from "./components/TestimonialsMiniSection";
import { GHLQuoteFormEmbed } from "./components/GHLQuoteFormEmbed";
import PartnerLogosCarousel from "./components/PartnerLogosCarousel";

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
        transform: `perspective(1000px) rotateY(${coords.x * 4}deg) rotateX(${coords.y * -4}deg) translateY(-4px)`,
        boxShadow: `0 8px 24px rgba(13, 27, 46, 0.05)`,
        borderLeft: `4px solid #00c2a8`,
      }
    : {
        transform: `perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0)`,
        boxShadow: `0 1px 3px rgba(13, 27, 46, 0.02)`,
        borderLeft: `1px solid rgba(13, 27, 46, 0.06)`,
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
      className="relative rounded-lg p-8 bg-white border border-slate-100 transition-all duration-300 ease-out flex flex-col justify-between h-full group"
    >
      {popular && (
        <span className="absolute top-4 right-4 bg-accent text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded shadow-sm z-15 animate-pulse">
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
      className="relative p-3.5 rounded-lg bg-[#F3F3F4] border-l-4 border-l-transparent hover:border-l-[#00c2a8] hover:bg-gradient-to-r hover:from-brand-purple hover:to-brand-purple-hover hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center gap-3 relative z-10">
        <div className="w-5 h-5 bg-brand-sage-light rounded-full flex items-center justify-center text-brand-sage text-[11px] flex-shrink-0 font-bold border border-brand-sage/20 group-hover:bg-white group-hover:text-brand-purple transition-colors">
          ✓
        </div>
        <span className="text-sm font-semibold text-brand-navy group-hover:text-white transition-colors tracking-tight font-sans">
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
      <div className="hidden md:block absolute left-1/2 bottom-full mb-3 translate-x-1/2 w-64 p-3.5 bg-brand-navy text-white text-xs rounded-lg shadow-md border border-white/10 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 z-50">
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

  const [currentView, setCurrentView] = useState<"home" | "privacy-policy" | "terms-of-service" | "why-iul">("home");
  const [heroQuizTab, setHeroQuizTab] = useState<"health" | "iul">("health");

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
      } else if (hash === "#why-iul" || hash === "#/why-iul") {
        setCurrentView("why-iul");
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
      document.title = "Privacy Policy | Eversafe Financial";
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', 'Read the Privacy Policy of Eversafe Financial to understand how personal information is collected, used, and protected.');
      
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', window.location.origin + "/#privacy-policy");
    } else if (currentView === "terms-of-service") {
      document.title = "Terms of Service | Eversafe Financial";
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', 'Review the Terms of Service for using the Eversafe Financial website, including site usage, intellectual property, and limitations of liability.');
      
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', window.location.origin + "/#terms-of-service");
    } else if (currentView === "why-iul") {
      document.title = lang === "en"
        ? "Why IUL May Beat 401(k) and Roth IRA for Some Families | Eversafe Financial"
        : "¿Por qué el IUL puede superar al 401(k) y Roth IRA para algunas familias? | Eversafe Financial";
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', lang === "en"
        ? "Compare IUL, 401(k), and Roth IRA strategies and learn when Index Universal Life may offer tax advantages, liquidity, and lifelong protection."
        : "Compara estrategias de IUL, 401(k) y Roth IRA y descubre cuándo el Index Universal Life ofrece ventajas fiscales, liquidez y protección permanente.");
      
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', "https://esfweb.github.io/web_esf/why-iul");
    } else {
      document.title = lang === "en" 
        ? "Licensed Florida Insurance Advisor | Eversafe Financial" 
        : "Asesora de Seguros Autorizada en Florida | Eversafe Financial";
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', lang === "en" 
        ? "Licensed Florida insurance advisor helping families find peace of mind with Life Insurance, Medicare, Health Plans, and Retirement Protection." 
        : "Asesora de seguros con licencia en Florida ayudando a familias con Seguros de Vida, Medicare, planes médicos y jubilación segura.");
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
  }, [lang, currentView]);

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
  const [selectedService, setSelectedService] = useState<string>("");
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
      from_name: "EversafeFinancial - New Lead",
      subject: "🔥 New Quote Request - Eversafe Financial",
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
        selected_service: selectedService || "General / Not Specified",
        source: "EversafeFinancial - Quote Form",
        submitted_at: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }),
      });
    } catch (err) {
      console.error("Web3Forms submission error:", err);
    }

    // Save lead backup in localStorage for demonstration and reliability backings
    const oldLeads = JSON.parse(localStorage.getItem("eversafe_leads") || "[]");
    const newLead = { fullName, email, phone, message, selectedService, date: new Date().toISOString() };
    localStorage.setItem("eversafe_leads", JSON.stringify([...oldLeads, newLead]));
  };

  const handlePreFillMessage = (serviceName: string) => {
    setSelectedService(serviceName);
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
    <div className="min-h-screen bg-white text-brand-navy selection:bg-brand-purple-light selection:text-brand-purple font-sans overflow-x-clip">
      
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
            <img
              src="https://res.cloudinary.com/drghl4bjl/image/upload/f_auto,q_auto/v1783574808/eversafe-financial-isotype-full-color_gjverm.png"
              alt="Eversafe Financial Logo"
              referrerPolicy="no-referrer"
              className="w-10 h-10 object-contain transition duration-300 group-hover:scale-105"
            />
            <div>
              <span className="text-lg md:text-xl font-bold font-sans tracking-tight text-brand-navy flex items-center gap-1">
                Eversafe <span className="text-brand-purple">Financial</span>
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

          {/* Quick CTA Navbar button and Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            {/* Elegant Language Switcher for Sticky Header */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-100 hover:border-brand-purple hover:text-brand-purple text-brand-navy focus:outline-none transition-all duration-300 font-extrabold tracking-wider text-xs shadow-sm cursor-pointer"
            >
              <span className="text-[10px] uppercase bg-brand-purple-light text-brand-purple px-1.5 py-0.5 rounded font-black">
                {lang === "en" ? "ES" : "EN"}
              </span>
              <span>
                {lang === "en" ? "Español" : "English"}
              </span>
            </button>

            <a
              href="#schedule-consultation"
              className="inline-block bg-brand-purple hover:bg-brand-purple-hover text-white font-bold py-2.5 px-6 rounded-2xl text-xs md:text-sm tracking-wide transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md shadow-brand-purple/15 whitespace-nowrap"
            >
              ⭐ {t.nav.cta}
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            {/* Compact Language Switcher for Mobile Sticky Header */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-100 text-brand-navy focus:outline-none transition-all duration-300 font-black tracking-wider text-[10px] shadow-sm cursor-pointer"
            >
              <span className="text-brand-purple uppercase">
                {lang === "en" ? "ES" : "EN"}
              </span>
            </button>

            {/* Hamburger trigger on mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center p-2 rounded-xl border border-slate-200 text-brand-navy hover:bg-brand-gray-soft transition focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
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
              href="#schedule-consultation"
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
        className="relative bg-cover md:bg-top bg-center bg-no-repeat pt-20 pb-28 md:py-32 px-4 md:px-8 overflow-hidden border-b border-slate-100/10 min-h-[450px] md:min-h-[650px] flex items-center spotlight-purple"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/drghl4bjl/image/upload/q_auto/f_auto/v1781560568/insurance-advisor-florida-family-financial-protection.jpg_xpfdp2.jpg')"
        }}
      >
        {/* Dark sophisticated gradient overlay for breathing room and perfect text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/98 via-brand-navy/85 to-brand-navy/40 z-0" />

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
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 shadow-md text-xs text-white tracking-widest font-bold anim-1 mx-auto lg:mx-0">
              <Award className="w-4 h-4 text-accent flex-shrink-0 animate-bounce" />
              <span className="text-[9px] md:text-2xs uppercase tracking-[0.15em] font-extrabold text-white/90">
                {lang === "en" ? "Licensed in Florida and other states" : "Licencia en Florida y otros estados"}
              </span>
            </div>

            <div className="space-y-4 anim-2">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-accent bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-lg inline-block">
                {lang === "en" ? "HEALTH, LIFE & FINANCIAL PROTECTION" : "SALUD, VIDA Y PROTECCIÓN FINANCIERA"}
              </span>
              <h1 className="text-4xl sm:text-5.5xl md:text-6.5xl font-extrabold font-display leading-[1.05] text-white tracking-tight max-w-2xl mx-auto lg:mx-0">
                {t.hero.title}
              </h1>
              {/* A1 — HERO: SUBTÍTULO EMOCIONAL */}
              <p className="text-sm md:text-base italic font-semibold text-accent tracking-wider mt-3">
                {lang === "en" 
                  ? "“ Your family deserves more than a policy — they deserve a promise. ”" 
                  : "“ Tu familia merece más que una póliza — merece una promesa. ”"}
              </p>
            </div>
            
            <p className="text-base md:text-lg text-white/95 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 anim-3 tracking-wide">
              {t.hero.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 anim-3 pt-2.5 border-l-3 border-accent pl-4">
              {lang === "en"
                ? "Eversafe Financial helps families and individuals in Florida and other states compare life insurance, Medicare, ACA, private health plans, retirement, and wealth protection solutions with dedicated, personalized bilingual support."
                : "Eversafe Financial ayuda a familias e individuos en Florida y otros estados a comparar soluciones de seguro de vida, Medicare, ACA, planes privados de salud, retiro y protección de patrimonio, con soporte bilingüe y personalizada."}
            </p>

            {/* Direct Calls - Primary CTA with hover + click feedback (K2) */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start anim-4">
                <a
                  href="tel:7273596196"
                  className="bg-accent hover:bg-accent-dark text-brand-navy font-semibold py-4 px-8 rounded-lg text-sm sm:text-base transition-all transform hover:scale-[1.02] active:scale-95 duration-300 text-center shadow-md flex items-center justify-center gap-2 cursor-pointer font-sans"
                >
                  <Phone className="w-4 h-4 fill-brand-navy text-brand-navy" />
                  {t.hero.ctaPhone}
                </a>
                <button
                  onClick={() => {
                    const element = document.getElementById("iul-explainer");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg text-sm sm:text-base border border-white/30 transition-all transform hover:scale-[1.02] active:scale-95 duration-300 text-center flex items-center justify-center gap-2 cursor-pointer font-sans"
                >
                  <Sparkles className="w-4 h-4 text-accent" />
                  {t.hero.ctaIUL}
                </button>
              </div>
              <p className="text-[11px] text-white/60 text-center lg:text-left pl-2 font-semibold">
                {lang === "en" 
                  ? "★ Free personalized consultation · No high sales pressure · 100% help in English & Spanish" 
                  : "★ Consulta personalizada gratuita · Sin presión de ventas · Ayuda en inglés y español"}
              </p>
            </div>

            {/* Verification highlights (A2 trust badges written with real persuasive details) */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-md mx-auto lg:mx-0 anim-5">
              <div className="text-center lg:text-left">
                <span className="block text-[9px] text-accent font-extrabold uppercase tracking-widest">{lang === "en" ? "EXPERIENCE" : "EXPERIENCIA"}</span>
                <span className="block text-xs sm:text-sm font-semibold text-white mt-1.5 leading-snug">
                  {lang === "en" ? "4+ Years Safeguarding Lives" : "4+ años protegiendo vidas"}
                </span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-[9px] text-accent font-extrabold uppercase tracking-widest">{lang === "en" ? "FLUENCY" : "IDIOMAS"}</span>
                <span className="block text-xs sm:text-sm font-semibold text-white mt-1.5 leading-snug">
                  {lang === "en" ? "Full English & Spanish" : "Soporte bilingüe"}
                </span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-[9px] text-accent font-extrabold uppercase tracking-widest">{lang === "en" ? "SECURITY" : "COBERTURA"}</span>
                <span className="block text-xs sm:text-sm font-semibold text-white mt-1.5 leading-snug">
                  {lang === "en" ? "A-Rated Carriers Only" : "Solo aseguradoras A+"}
                </span>
              </div>
            </div>

          </div>

          {/* Column 2: Interactive Dynamic Quiz & Mary Rivera Small Horizontal Badge */}
          <div className="lg:col-span-5 flex flex-col gap-6 items-center justify-center lg:justify-end anim-4 w-full">
            <QuizCard t={t} />
            
            {/* Horizontal Glass Partner Badge (Builds massive personal connection instantly) */}
            <div className="w-full max-w-md bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10 shadow-lg flex items-center gap-4 text-white hover:border-accent/40 transition-colors duration-300">
              <img
                src="https://res.cloudinary.com/drghl4bjl/image/upload/q_auto/f_auto/v1781560568/mary-rivera-licensed-insurance-advisor-eversafe-financial.jpg_hgybkk.jpg"
                alt="Mary Rivera - Licensed Insurance Advisor at Eversafe Financial Florida"
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
      <PartnerLogosCarousel t={t} />

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

          {/* 3-Column Responsive Grid Layout (IUL flagship card + 2 pairs of stacked cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch pt-4">
            
            {/* Column 1: IUL & Final Expenses/Annuities (2 stacked cards) */}
            <div className="w-full flex flex-col gap-8">
              
              {/* Card 1: IUL */}
              <div className="flex flex-col flex-1">
                <TiltCard popular popularLabel={t.core.popular}>
                  <div className="space-y-6 flex-1 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-brand-purple-light rounded-lg flex items-center justify-center text-brand-purple text-2xl shadow-sm border border-brand-purple/10">
                        🗄️
                      </div>
                      <div className="space-y-2">
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase font-bold text-brand-purple tracking-widest">{lang === "en" ? "Accumulation" : "Acumulación"}</span>
                          <h3 className="text-lg font-bold font-display text-brand-navy">
                            {t.core.iulTitle}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                          {t.core.iulDesc}
                        </p>
                        <ul className="space-y-1.5 pt-2">
                          {t.core.iulBullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-1 text-xs text-brand-slate font-medium">
                              <span className="text-emerald-500 font-bold">✓</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <button
                      type="button"
                      onClick={() => handlePreFillMessage(t.core.iulTitle)}
                      className="mt-6 w-full bg-brand-navy hover:bg-brand-navy-light text-white font-semibold py-3 px-4 rounded-lg text-xs sm:text-sm transform hover:scale-[1.01] active:scale-[0.99] hover:shadow-sm transition-all duration-300 text-center group flex items-center justify-center gap-1.5 cursor-pointer font-sans"
                    >
                      <span>{t.core.cta}</span>
                      <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </TiltCard>
              </div>

              {/* Card 6: Gastos Finales y Anualidades */}
              <div className="flex flex-col flex-1">
                <TiltCard>
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center text-teal-500 text-2xl shadow-sm border border-teal-100">
                        🛡️
                      </div>
                      <div className="space-y-2">
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase font-bold text-teal-600 tracking-widest">{lang === "en" ? "RETIREMENT & LEGACY" : "RETIRO Y LEGADO"}</span>
                          <h3 className="text-lg font-bold font-display text-brand-navy">
                            {t.core.finalExpensesTitle}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                          {t.core.finalExpensesDesc}
                        </p>
                        <ul className="space-y-1.5 pt-2">
                          {t.core.finalExpensesBullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-1 text-xs text-brand-slate font-medium">
                              <span className="text-emerald-500 font-bold">✓</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handlePreFillMessage(t.core.finalExpensesTitle)}
                      className="mt-6 w-full bg-brand-navy hover:bg-brand-navy-light text-white font-semibold py-3 px-4 rounded-lg text-xs sm:text-sm transform hover:scale-[1.01] active:scale-[0.99] hover:shadow-sm transition-all duration-300 text-center group flex items-center justify-center gap-1.5 cursor-pointer font-sans"
                    >
                      <span>{t.core.finalExpensesCta}</span>
                      <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </TiltCard>
              </div>

            </div>

            {/* Column 2: Obamacare & Medicare (2 stacked cards) */}
            <div className="w-full flex flex-col gap-8">
              
              {/* Card 2: Obamacare */}
              <div className="flex flex-col flex-1">
                <TiltCard>
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent text-2xl shadow-sm border border-accent/20">
                        🏥
                      </div>
                      <div className="space-y-2">
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase font-bold text-accent tracking-widest">{lang === "en" ? "HEALTH PLANS" : "PLANES DE SALUD"}</span>
                          <h3 className="text-lg font-bold font-display text-brand-navy">
                            {t.core.obamacareTitle}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                          {t.core.obamacareDesc}
                        </p>
                        <ul className="space-y-1.5 pt-2">
                          {t.core.obamacareBullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-1 text-xs text-brand-slate font-medium">
                              <span className="text-emerald-500 font-bold">✓</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handlePreFillMessage(t.core.obamacareTitle)}
                      className="mt-6 w-full bg-brand-navy hover:bg-brand-navy-light text-white font-semibold py-3 px-4 rounded-lg text-xs sm:text-sm transform hover:scale-[1.01] active:scale-[0.99] hover:shadow-sm transition-all duration-300 text-center group flex items-center justify-center gap-1.5 cursor-pointer font-sans"
                    >
                      <span>{t.core.obamacareCta}</span>
                      <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </TiltCard>
              </div>

              {/* Card 3: Medicare */}
              <div className="flex flex-col flex-1">
                <TiltCard>
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-brand-navy text-2xl shadow-sm border border-slate-200">
                        ⚕️
                      </div>
                      <div className="space-y-2">
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase font-bold text-brand-slate tracking-widest">{lang === "en" ? "MEDICARE" : "MEDICARE"}</span>
                          <h3 className="text-lg font-bold font-display text-brand-navy">
                            {t.core.medicareTitle}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                          {t.core.medicareDesc}
                        </p>
                        <ul className="space-y-1.5 pt-2">
                          {t.core.medicareBullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-1 text-xs text-brand-slate font-medium">
                              <span className="text-emerald-500 font-bold">✓</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handlePreFillMessage(t.core.medicareTitle)}
                      className="mt-6 w-full bg-brand-navy hover:bg-brand-navy-light text-white font-semibold py-3 px-4 rounded-lg text-xs sm:text-sm transform hover:scale-[1.01] active:scale-[0.99] hover:shadow-sm transition-all duration-300 text-center group flex items-center justify-center gap-1.5 cursor-pointer font-sans"
                    >
                      <span>{t.core.medicareCta}</span>
                      <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </TiltCard>
              </div>

            </div>

            {/* Column 3: Private Health Plans & Dental/Vision/Supplemental (2 stacked cards) */}
            <div className="w-full flex flex-col gap-8">
              
              {/* Card 4: Private Health Plans */}
              <div className="flex flex-col flex-1">
                <TiltCard>
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-rose-50 rounded-lg flex items-center justify-center text-rose-500 text-2xl shadow-sm border border-rose-100">
                        🔑
                      </div>
                      <div className="space-y-2">
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase font-bold text-rose-500 tracking-widest">{lang === "en" ? "PRIVATE PLANS" : "PLANES PRIVADOS"}</span>
                          <h3 className="text-lg font-bold font-display text-brand-navy">
                            {t.core.privateHealthTitle}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                          {t.core.privateHealthDesc}
                        </p>
                        <ul className="space-y-1.5 pt-2">
                          {t.core.privateHealthBullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-1 text-xs text-brand-slate font-medium">
                              <span className="text-emerald-500 font-bold">✓</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handlePreFillMessage(t.core.privateHealthTitle)}
                      className="mt-6 w-full bg-brand-navy hover:bg-brand-navy-light text-white font-semibold py-3 px-4 rounded-lg text-xs sm:text-sm transform hover:scale-[1.01] active:scale-[0.99] hover:shadow-sm transition-all duration-300 text-center group flex items-center justify-center gap-1.5 cursor-pointer font-sans"
                    >
                      <span>{t.core.privateHealthCta}</span>
                      <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </TiltCard>
              </div>

              {/* Card 5: Dental, Vision & Supplemental */}
              <div className="flex flex-col flex-1">
                <TiltCard>
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-500 text-2xl shadow-sm border border-amber-100">
                        🦷
                      </div>
                      <div className="space-y-2">
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase font-bold text-amber-600 tracking-widest">{lang === "en" ? "SUPPLEMENTAL" : "SUPLEMENTARIOS"}</span>
                          <h3 className="text-lg font-bold font-display text-brand-navy">
                            {t.core.dentalVisionTitle}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                          {t.core.dentalVisionDesc}
                        </p>
                        <ul className="space-y-1.5 pt-2">
                          {t.core.dentalVisionBullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-1 text-xs text-brand-slate font-medium">
                              <span className="text-emerald-500 font-bold">✓</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handlePreFillMessage(t.core.dentalVisionTitle)}
                      className="mt-6 w-full bg-brand-navy hover:bg-brand-navy-light text-white font-semibold py-3 px-4 rounded-lg text-xs sm:text-sm transform hover:scale-[1.01] active:scale-[0.99] hover:shadow-sm transition-all duration-300 text-center group flex items-center justify-center gap-1.5 cursor-pointer font-sans"
                    >
                      <span>{t.core.dentalVisionCta}</span>
                      <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </TiltCard>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. ALL SERVICES (Catálogo Completo - Fondo blanco para rythym contrast, high elegancy) */}
      <section className="py-24 px-4 md:px-8 bg-white border-y border-slate-100/10 relative reveal-init">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-purple bg-brand-purple-light px-4 py-1.5 rounded-lg inline-block">
              💼 {lang === "en" ? "SOLUTIONS FOR YOU & YOUR FAMILY" : "SOLUCIONES PARA TI Y TU FAMILIA"}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-brand-navy tracking-tight">
              {t.allServices.title}
            </h2>
            <p className="text-sm md:text-base text-brand-slate leading-relaxed">
              {t.allServices.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Column 1: Life & Financial Security */}
            <div className="space-y-6 bg-white p-6 md:p-8 rounded-lg border border-slate-100 shadow-[0_4px_16px_rgba(13,27,46,0.03)]">
              <h3 className="text-lg font-bold text-brand-navy font-display flex items-center gap-2.5 pb-4 border-b border-slate-100">
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
            <div className="space-y-6 bg-brand-sage-light p-6 md:p-8 rounded-lg border border-brand-sage/10">
              <h3 className="text-lg font-bold text-brand-navy font-display flex items-center gap-2.5 pb-4 border-b border-brand-sage/20">
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
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-brand-navy tracking-tight">
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
            <div className="bg-white p-7 rounded-lg border border-slate-100 shadow-[0_4px_16px_rgba(13,27,46,0.02)] hover:shadow-md hover:-translate-y-0.5 transition duration-300 space-y-4">
              <div className="w-10 h-10 bg-brand-purple-light rounded-lg flex items-center justify-center text-brand-purple text-lg font-bold">
                🤝
              </div>
              <h3 className="text-sm font-bold text-brand-navy font-display">{t.whyChoose.serviceTitle}</h3>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">{t.whyChoose.serviceDesc}</p>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-7 rounded-lg border border-slate-100 shadow-[0_4px_16px_rgba(13,27,46,0.02)] hover:shadow-md hover:-translate-y-0.5 transition duration-300 space-y-4">
              <div className="w-10 h-10 bg-brand-purple-light rounded-lg flex items-center justify-center text-brand-purple text-lg font-bold">
                🌐
              </div>
              <h3 className="text-sm font-bold text-brand-navy font-display">{t.whyChoose.bilingualTitle}</h3>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">{t.whyChoose.bilingualDesc}</p>
            </div>

            {/* Box 3 */}
            <div className="bg-white p-7 rounded-lg border border-slate-100 shadow-[0_4px_16px_rgba(13,27,46,0.02)] hover:shadow-md hover:-translate-y-0.5 transition duration-300 space-y-4">
              <div className="w-10 h-10 bg-brand-purple-light rounded-lg flex items-center justify-center text-brand-purple text-lg font-bold">
                📊
              </div>
              <h3 className="text-sm font-bold text-brand-navy font-display">{t.whyChoose.guidanceTitle}</h3>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">{t.whyChoose.guidanceDesc}</p>
            </div>

            {/* Box 4 */}
            <div className="bg-white p-7 rounded-lg border border-slate-100 shadow-[0_4px_16px_rgba(13,27,46,0.02)] hover:shadow-md hover:-translate-y-0.5 transition duration-300 space-y-4">
              <div className="w-10 h-10 bg-brand-purple-light rounded-lg flex items-center justify-center text-brand-purple text-lg font-bold">
                🛡️
              </div>
              <h3 className="text-sm font-bold text-brand-navy font-display">{t.whyChoose.coverageTitle}</h3>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">{t.whyChoose.coverageDesc}</p>
            </div>

          </div>

        </div>
      </section>

      {/* 7.5. TARGET AUDIENCE & PREFERENCES (Who We Help & Why Contact Us) */}
      <section className="py-20 px-4 md:px-8 bg-brand-gray-soft border-b border-slate-100/50 relative z-20 reveal-init">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Who We Help block */}
          <div className="space-y-6 bg-white p-8 md:p-10 rounded-lg border border-slate-100 shadow-[0_4px_16px_rgba(13,27,46,0.03)] transition-all duration-300 hover:shadow-lg">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00c2a8] bg-[#00c2a8]/10 px-3.5 py-1.5 rounded-lg inline-block">
                👥 {t.whoWeHelp.title}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold font-display text-brand-navy tracking-tight">
                {t.whoWeHelp.title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                {t.whoWeHelp.subtitle}
              </p>
            </div>
            
            <ul className="space-y-4 pt-2">
              {t.whoWeHelp.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3.5 text-xs sm:text-sm text-brand-navy font-semibold">
                  <span className="w-5.5 h-5.5 bg-[#00c2a8]/15 rounded-full flex items-center justify-center text-brand-navy text-[11px] font-bold mt-0.5 flex-shrink-0 border border-[#00c2a8]/20">
                    ✓
                  </span>
                  <span className="leading-relaxed font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Clients Contact Us block */}
          <div className="space-y-6 bg-white p-8 md:p-10 rounded-lg border border-slate-100 shadow-[0_4px_16px_rgba(13,27,46,0.03)] transition-all duration-300 hover:shadow-lg">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-white bg-brand-purple px-3.5 py-1.5 rounded-lg inline-block">
                💡 {t.whyContactUs.title}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold font-display text-brand-navy tracking-tight">
                {t.whyContactUs.title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                {t.whyContactUs.subtitle}
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
                    alt="Mary Rivera Licensed Insurance Advisor Eversafe Financial Florida portrait"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition duration-500 scale-100 group-hover:scale-105"
                  />
                  {/* Verified badge */}
                  <span className="absolute top-4 left-1/2 -translate-x-1/2 bg-accent text-white font-extrabold text-[9px] tracking-widest uppercase px-3.5 py-1 rounded flex items-center gap-1.5 shadow-md whitespace-nowrap z-10">
                    <ShieldCheck className="w-3.5 h-3.5 text-white fill-accent" />
                    BILINGUAL
                  </span>

                  {/* Gentle gradient overlay for label legibility */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy via-brand-navy/65 to-transparent pt-12 pb-5 text-center">
                    <p className="text-sm font-bold tracking-wide font-display text-accent uppercase">
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
              <span className="text-xs uppercase tracking-widest font-extrabold text-white bg-brand-purple px-4 py-1.5 rounded-lg inline-block">
                🏆 {lang === "en" ? "Meet Your Advisor" : "Conoce a tu asesora"}
              </span>
              
              <h2 className="text-3xl md:text-4.5xl font-extrabold font-display text-brand-navy tracking-tight leading-tight">
                {t.about.titleLabel}
              </h2>
              
              <p className="text-sm md:text-base text-brand-slate leading-relaxed font-normal">
                {t.about.bio}
              </p>

              <div className="pt-4 animate-pop-in">
                <a
                  href="tel:7273596196"
                  className="bg-transparent border border-accent text-accent hover:bg-accent hover:text-white font-semibold py-4 px-8 rounded-lg text-sm transition-all transform hover:scale-102 active:scale-95 duration-300 tracking-wider inline-flex items-center gap-2 shadow-sm hover:shadow-md cursor-pointer font-sans"
                >
                  {t.about.cta}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION (Mission, Vision, Values - Mejora 2) */}
      <section id="who-we-are" className="py-24 px-4 md:px-8 bg-[#FAF8FC] border-t border-brand-purple/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-extrabold text-brand-purple bg-brand-purple/10 px-4 py-1.5 rounded-lg inline-block">
              🤝 {lang === "en" ? "Our Foundation" : "Nuestros cimientos"}
            </span>
            <h2 className="text-3xl md:text-4.5xl font-extrabold font-display text-brand-navy tracking-tight leading-tight">
              {t.whoWeAre.title}
            </h2>
            <p className="text-sm md:text-base text-brand-slate max-w-2xl mx-auto leading-relaxed">
              {t.whoWeAre.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {/* Top row: Mission and Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div className="bg-white p-8 rounded-lg border border-brand-purple/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div className="space-y-4 text-center flex flex-col items-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent text-2xl shadow-sm border border-accent/20">
                    🎯
                  </div>
                  <h3 className="text-xl font-bold font-display text-brand-navy text-center">
                    {t.whoWeAre.missionTitle}
                  </h3>
                  <p className="text-sm text-brand-slate leading-relaxed text-center">
                    {t.whoWeAre.missionDesc}
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-white p-8 rounded-lg border border-brand-purple/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div className="space-y-4 text-center flex flex-col items-center">
                  <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center text-brand-purple text-2xl shadow-sm border border-brand-purple/20">
                    👁️
                  </div>
                  <h3 className="text-xl font-bold font-display text-brand-navy text-center">
                    {t.whoWeAre.visionTitle}
                  </h3>
                  <p className="text-sm text-brand-slate leading-relaxed text-center">
                    {t.whoWeAre.visionDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom row: Values Card with its 4 values in a single row on desktop */}
            <div className="bg-white p-8 rounded-lg border border-brand-purple/10 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="space-y-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-500 text-2xl shadow-sm border border-amber-100">
                    💎
                  </div>
                  <h3 className="text-xl font-bold font-display text-brand-navy text-center">
                    {t.whoWeAre.valuesTitle}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {t.whoWeAre.values.map((val, idx) => (
                    <div key={idx} className="space-y-2 p-5 bg-[#FAF8FC] rounded-lg border border-brand-purple/5 flex flex-col items-center text-center justify-between h-full hover:border-brand-purple/20 transition-all duration-300">
                      <div className="space-y-2 flex flex-col items-center">
                        <div className="flex items-center gap-2 font-bold text-brand-navy text-sm justify-center">
                          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                          <span>{val.title}</span>
                        </div>
                        <p className="text-xs text-brand-slate leading-relaxed font-medium text-center">
                          {val.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <TestimonialsMiniSection 
        lang={lang} 
        onQuoteClick={() => {
          document.getElementById("schedule-consultation")?.scrollIntoView({ behavior: "smooth" });
        }} 
      />

      {/* 9. IUL EXPLAINER (Redesigned: High Authority Deep Navy Blue Background #122033 to build supreme corporate trust) */}
      <section id="iul-explainer" className="py-24 bg-[#FAF7FD] text-brand-navy px-4 md:px-8 relative overflow-hidden reveal-init">
        {/* Abstract Light Background Overlays */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-purple bg-brand-purple/10 py-1.5 px-4 rounded-lg inline-block border border-brand-purple/20">
              💡 {lang === "en" ? "Tax-Free Retirement Strategy" : "Estrategia de retiro libre de impuestos"}
            </span>
            <h2 className="text-3.5xl md:text-4.5xl font-extrabold font-display text-brand-navy tracking-tight leading-tight">
              {lang === "en" ? "Why IUL May Be a Smarter Retirement Strategy Than Traditional Options" : "Por qué el IUL puede ser una estrategia de retiro más inteligente"}
            </h2>
            <p className="text-sm text-brand-slate max-w-2xl mx-auto leading-relaxed">
              {lang === "en" 
                ? "Compare how IUL differs from fully taxable 401(k) plans and limited Roth IRA strategies." 
                 : "Compara cómo el IUL se diferencia de los planes 401(k) totalmente tributables y las estrategias limitadas de Roth IRA."}
            </p>
            {/* A6 — IUL DARK LINE */}
            <p className="text-xs sm:text-sm md:text-base italic text-brand-purple font-semibold tracking-wider pt-1">
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
              className="w-full max-w-md mx-auto rounded-lg shadow-xl border border-slate-100 opacity-95 mb-8"
            />
          </div>

          {/* Hybrid View: Desktop High-Contrast Comparison Matrix, Mobile Card fallback */}
          <div className="hidden lg:block bg-white border border-slate-200/80 rounded-lg overflow-hidden shadow-md">
            <table className="w-full text-left border-collapse font-sans">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-xs uppercase tracking-widest font-extrabold text-brand-navy">
                  <th className="p-6 font-display">{lang === "en" ? "Strategic Benchmark / Feature" : "Indicador / característica"}</th>
                  <th className="p-6 text-rose-600 font-display">{t.iulExplainer.colSavingsTitle}</th>
                  <th className="p-6 text-rose-600 font-display">{t.iulExplainer.col401kTitle}</th>
                  <th className="p-6 text-brand-purple bg-brand-purple/5 font-display">{t.iulExplainer.colIulTitle} 🏆</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm divide-y divide-slate-100 font-medium text-brand-navy">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-bold text-brand-navy">{lang === "en" ? "🛡️ Market Downside Protection" : "🛡️ Protección ante caídas del mercado"}</td>
                  <td className="p-6 text-brand-slate">{lang === "en" ? "Guaranteed Principal (No growth)" : "Principal garantizado (sin crecimiento)"}</td>
                  <td className="p-6 text-brand-slate">{lang === "en" ? "0% Safety (Subject to complete market drops)" : "0% seguro (sujeto a caídas severas)"}</td>
                  <td className="p-6 font-extrabold text-brand-purple bg-brand-purple/5">
                    {lang === "en" ? "100% Floor Protection (0% floor guarantee)" : "100% protegido (garantía de piso del 0%)"}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-bold text-brand-navy">{lang === "en" ? "📈 Average Interest Rate Potential" : "📈 Potencial de tasa de interés promedio"}</td>
                  <td className="p-6 text-brand-slate">{lang === "en" ? "Exceedingly Low (0.01% - 1.5% average)" : "Extremadamente bajo (0.01% - 1.5% promedio)"}</td>
                  <td className="p-6 text-brand-slate">{lang === "en" ? "Highly Variable (Avg. 5% - 7% with volatility)" : "Variable (promedio 5% - 7% con alta volatilidad)"}</td>
                  <td className="p-6 font-extrabold text-brand-purple bg-brand-purple/5">
                    {lang === "en" ? "High Compounding growth (Indexed up to 10% - 12% caps)" : "Alto interés compuesto (indexado hasta 10% - 12%)"}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-bold text-brand-navy">{lang === "en" ? "💸 Withdrawal Tax Status" : "💸 Impuestos al retirar fondos"}</td>
                  <td className="p-6 text-brand-slate">{lang === "en" ? "Fully Taxed annually on interest earned" : "Totalmente gravado anualmente sobre intereses"}</td>
                  <td className="p-6 text-brand-slate">{lang === "en" ? "100% Taxable (Both principal and gains taxed)" : "100% gravable (se cobran impuestos al retirar)"}</td>
                  <td className="p-6 font-extrabold text-brand-purple bg-brand-purple/5">
                    {lang === "en" ? "100% Tax-Free (Legal, structured withdrawal streams)" : "100% libre de impuestos (retiros e ingresos exentos)"}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-bold text-brand-navy">{lang === "en" ? "🕊️ Instant Legacy Guard Shield" : "🕊️ Cobertura de fallecimiento de legado"}</td>
                  <td className="p-6 text-brand-slate">{lang === "en" ? "None (Only what is accumulated is returned)" : "Ninguna (solo heredas lo acumulado)"}</td>
                  <td className="p-6 text-brand-slate">{lang === "en" ? "None (Only what remains is left to heirs)" : "Ninguna (solo heredas el saldo restante)"}</td>
                  <td className="p-6 font-extrabold text-brand-purple bg-brand-purple/5">
                    {lang === "en" ? "Severe Tax-Free Benefit instantly sent to family" : "Póliza millonaria exenta de impuestos para la familia"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:hidden">
            
            {/* Box 1 (Traditional Savings) */}
            <div className="p-8 rounded-lg bg-white border border-slate-100 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-xl text-rose-500">
                  ❌
                </div>
                <h3 className="text-base font-bold text-brand-navy font-display">{t.iulExplainer.colSavingsTitle}</h3>
                <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-normal">{t.iulExplainer.colSavingsDesc}</p>
              </div>
              <div className="text-[10px] text-rose-600 font-bold tracking-wider uppercase bg-rose-50 py-1.5 text-center rounded-lg border border-rose-100">
                Low Return / Taxed
              </div>
            </div>

            {/* Box 2 (401K Account) */}
            <div className="p-8 rounded-lg bg-white border border-slate-100 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-xl text-rose-500">
                  ❌
                </div>
                <h3 className="text-base font-bold text-brand-navy font-display">{t.iulExplainer.col401kTitle}</h3>
                <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-normal">{t.iulExplainer.col401kDesc}</p>
              </div>
              <div className="text-[10px] text-rose-600 font-bold tracking-wider uppercase bg-rose-50 py-1.5 text-center rounded-lg border border-rose-100">
                Market Risk / Fees
              </div>
            </div>

            {/* Box 3 (INDEX UNIVERSAL LIFE - Accented with luxury template accent outline and badge choice) */}
            <div className="p-8 rounded-lg bg-brand-purple/5 border-2 border-brand-purple flex flex-col justify-between space-y-6 relative shadow-md">
              <div className="absolute top-2 right-2 w-12 h-12 bg-brand-purple/10 rounded-full blur-xl pointer-events-none"></div>

              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-brand-purple text-white flex items-center justify-center text-sm font-black shadow-md shadow-brand-purple/10 select-none">
                  ✓
                </div>
                <h3 className="text-base font-bold text-brand-purple font-display flex items-center gap-1.5">
                  {t.iulExplainer.colIulTitle}
                </h3>
                <p className="text-xs sm:text-sm text-brand-navy font-normal leading-relaxed">{t.iulExplainer.colIulDesc}</p>
              </div>
              <div className="text-[11px] text-white font-bold tracking-widest uppercase bg-brand-purple py-2 text-center rounded-lg shadow-sm">
                🏆 Winner Choice
              </div>
            </div>

          </div>

          <div className="flex flex-col items-center justify-center gap-4 pt-6 max-w-xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              {/* Primary CTA */}
              <button
                onClick={() => {
                  setCurrentView("why-iul");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-accent hover:bg-accent-hover text-brand-navy font-semibold py-4 px-8 rounded-lg text-xs sm:text-sm transition-all transform hover:scale-[1.01] active:scale-[0.99] duration-300 tracking-wider inline-flex items-center justify-center gap-2 shadow-sm hover:shadow-md cursor-pointer font-sans"
              >
                ⭐ {lang === "en" ? "See If You Qualify" : "Ver si calificas"}
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => {
                  setCurrentView("why-iul");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-white hover:bg-slate-50 text-brand-navy border border-slate-200 font-semibold py-4 px-8 rounded-lg text-xs sm:text-sm transition-all transform hover:scale-[1.01] active:scale-[0.99] duration-300 tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer font-sans shadow-sm"
              >
                <span>{lang === "en" ? "Explore Why IUL Works →" : "Descubre cómo funciona el IUL →"}</span>
              </button>
            </div>

            {/* Supporting line */}
            <p className="text-[11px] text-brand-slate leading-relaxed max-w-md pt-2">
              {lang === "en"
                ? "Guaranteed growth features may vary by policy. Personalized guidance helps determine fit."
                : "Las características de crecimiento garantizado pueden variar según la póliza. La asesoría personalizada ayuda a determinar la idoneidad."}
            </p>
          </div>

        </div>
      </section>

      {/* 9.5 SCHEDULE CONSULTATION MINI-SECTION (Horizontal layout, premium styling, before FAQs) */}
      <section id="schedule-consultation" className="py-16 bg-gradient-to-br from-brand-navy to-[#1A1235] text-white px-4 md:px-8 relative overflow-hidden border-b border-white/5">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-purple/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Container */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-accent bg-accent/10 border border-accent/25 px-3 py-1 rounded-md inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-accent" />
              <span>{lang === "en" ? "FREE CONSULTATION" : "CONSULTA GRATUITA"}</span>
            </span>
            <h2 className="text-2xl md:text-3.5xl font-extrabold font-display leading-tight tracking-tight">
              {lang === "en" ? "Ready to find the right protection for you?" : "¿Lista/o para encontrar la protección adecuada para ti?"}
            </h2>
            <p className="text-xs sm:text-sm text-white/85 max-w-2xl leading-relaxed">
              {lang === "en"
                ? "Every family has different needs. We review your situation carefully and help you find options tailored to your health, budget, and protection goals."
                : "Cada familia tiene necesidades diferentes. Revisamos tu situación con cuidado y te ayudamos a encontrar opciones que se adapten a tu salud, tu presupuesto y tus metas de protección."}
            </p>
          </div>

          {/* Button Container */}
          <div className="flex-shrink-0 w-full md:w-auto text-center font-sans">
            <a
              href="https://api.leadconnectorhq.com/widget/booking/dPjD3K2ESbGLgoRuoUpP"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-brand-navy font-bold py-4 px-8 rounded-lg text-sm shadow-md transform hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-brand-navy" />
              <span>{lang === "en" ? "Schedule a free consultation" : "Agenda una consulta gratuita"}</span>
            </a>
            <p className="text-[10px] text-white/50 mt-3 font-semibold font-sans">
              {lang === "en" ? "★ No obligation · 100% confidential" : "★ Sin compromiso · 100% confidencial"}
            </p>
          </div>
        </div>
      </section>

      {/* 10. CONTACT / FREE QUOTE (Soft gray background with elegant background image & overlay, highly guided clear form with brand-purple action) */}
      <section 
        id="contact" 
        className="py-24 px-4 md:px-8 relative overflow-hidden bg-cover bg-center bg-no-repeat reveal-init"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/drghl4bjl/image/upload/v1782235846/hf_20260623_172731_2996ad00-a5d4-4363-8674-326d90dbd215_1_go8xyv.png')"
        }}
      >
        {/* Elegant light purple overlay to guarantee absolute legibility and show the beautiful background image */}
        <div className="absolute inset-0 bg-brand-purple/15 lg:bg-gradient-to-r lg:from-brand-purple/20 lg:via-[#FAF7FD]/85 lg:to-[#FAF7FD]/90 z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
             {/* Column 1: FAQ interactive accordions next to the Form */}
            <div className="lg:col-span-6 space-y-6 text-left flex flex-col justify-start">
              <div>
                <span className="text-xs uppercase tracking-widest font-extrabold text-brand-purple bg-brand-purple-light px-4 py-1.5 rounded-lg inline-block mb-3.5">
                  ℹ️ {lang === "en" ? "Common Questions" : "Preguntas frecuentes"}
                </span>
                <h2 className="text-3xl md:text-4.5xl font-extrabold font-display text-brand-navy tracking-tight leading-tight">
                  {t.faq.title}
                </h2>
                <p className="text-xs sm:text-sm text-brand-slate mt-2.5 leading-relaxed">
                  {lang === "en" 
                    ? "Get clear, professional answers directly from licensed advisor Mary Rivera while you complete your inquiry."
                    : "Obtén respuestas claras y profesionales directamente de la asesora Mary Rivera mientras completas tu consulta."}
                </p>
              </div>

              <div className="space-y-4 max-h-[550px] overflow-y-auto pr-2 custom-faq-scrollbar font-sans">
                {t.faq.items.map((item, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div 
                      key={index} 
                      className={`border transition-all duration-300 rounded-lg overflow-hidden backdrop-blur-md relative ${
                        isOpen 
                          ? "border-brand-purple bg-white shadow-[0_12px_30px_rgba(140,73,177,0.08)] scale-[1.01]" 
                          : "border-slate-200 bg-white/80 hover:border-brand-purple/40 hover:bg-white hover:shadow-[0_8px_20px_rgba(140,73,177,0.03)] hover:-translate-y-0.5"
                      }`}
                    >
                      {/* Left color bar highlight on active */}
                      <div className={`absolute top-0 left-0 bottom-0 w-1 transition-all duration-300 ${isOpen ? 'bg-brand-purple' : 'bg-transparent'}`}></div>
                      
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full flex items-start justify-between p-5 md:p-6 text-left cursor-pointer focus:outline-none gap-4"
                        aria-expanded={isOpen}
                      >
                        <div className="flex gap-3.5 items-start">
                          {/* Premium rounded badge */}
                          <span className={`w-7 h-7 rounded text-[10px] font-black flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 ${
                            isOpen 
                              ? "bg-brand-purple text-white shadow-sm" 
                              : "bg-brand-purple/10 text-brand-purple"
                          }`}>
                            Q{index + 1}
                          </span>
                          <span className={`text-xs sm:text-sm font-extrabold tracking-tight leading-snug transition-colors duration-300 ${
                            isOpen ? "text-brand-navy" : "text-brand-navy/90"
                          }`}>
                            {item.q}
                          </span>
                        </div>
                        <span 
                          className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            isOpen 
                              ? "bg-brand-purple text-white border-brand-purple rotate-180 shadow-md shadow-brand-purple/20" 
                              : "bg-slate-50 text-brand-slate border-slate-200"
                          }`}
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </span>
                      </button>

                      <div 
                        className={`transition-all duration-300 ease-in-out ${
                          isOpen ? "max-h-[500px] border-t border-slate-100 border-dashed" : "max-h-0"
                        }`}
                      >
                        <div className="p-5 md:p-6 text-xs sm:text-sm text-brand-slate leading-relaxed font-medium bg-gradient-to-b from-white/10 to-white/95">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Free Quote GoHighLevel Embedded Form */}
            <div className="lg:col-span-6">
              <GHLQuoteFormEmbed lang={lang} />
            </div>

          </div>
        </div>
      </section>
        </>
      ) : currentView === "privacy-policy" ? (
        <PrivacyPolicy onBackToHome={onBackToHome} lang={lang} />
      ) : currentView === "terms-of-service" ? (
        <TermsOfService onBackToHome={onBackToHome} lang={lang} />
      ) : (
        <WhyIulPage
          onBackToHome={onBackToHome}
          lang={lang}
          onExploreServices={(serviceName: string) => {
            onBackToHome();
            setTimeout(() => {
              handlePreFillMessage(serviceName);
            }, 150);
          }}
        />
      )}

      {/* 11. FOOTER (Sleek deep navy #122033 for world-class finance look) */}
      <footer className="bg-brand-navy text-white pt-16 pb-10 px-4 md:px-8 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Column 1: Descriptor */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/drghl4bjl/image/upload/f_auto,q_auto/v1783574808/eversafe-financial-isotype-full-color_gjverm.png"
                alt="Eversafe Financial Logo"
                referrerPolicy="no-referrer"
                className="w-9 h-9 object-contain"
              />
              <span className="text-base font-extrabold text-white tracking-wide">
                Eversafe <span className="text-brand-purple">Financial</span>
              </span>
            </div>
            <p className="text-xs text-brand-slate leading-relaxed max-w-sm">
              {t.footer.about}
            </p>
          </div>

          {/* Column 2: Direct Contact & Service Areas */}
          <div className="md:col-span-4 space-y-5">
            <div className="space-y-4">
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

            <div className="space-y-2 pt-1 border-t border-white/5">
              <h4 className="text-xs uppercase tracking-widest text-[#8C49B1] font-bold">
                {lang === "en" ? "Service Areas" : "Áreas de servicio"}
              </h4>
              <p className="text-xs text-brand-slate leading-relaxed">
                {lang === "en" ? "Florida and other U.S. states" : "Florida y otros estados de EE. UU."}
              </p>
            </div>
          </div>

          {/* Column 3: Contact hours & Socials */}
          <div className="md:col-span-4 space-y-5">
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#8C49B1] font-bold">
                {t.footer.hours}
              </h4>
              <ul className="space-y-1.5 text-xs text-brand-slate font-mono">
                <li>{t.contactForm.hoursWeek}</li>
                <li>{t.contactForm.hoursSat}</li>
                <li>{t.contactForm.hoursSun}</li>
              </ul>
            </div>

            <div className="space-y-2 pt-1 border-t border-white/5">
              <h4 className="text-xs uppercase tracking-widest text-[#8C49B1] font-bold">
                {lang === "en" ? "Follow Us" : "Síguenos"}
              </h4>
              {/* White SVGs for socials */}
              <div className="flex items-center gap-4 pt-1 text-white/65">
                <a 
                  href="https://www.instagram.com/eversafefinancial.llc/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-accent transform hover:scale-110 active:scale-95 transition-all duration-300 inline-block"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 stroke-[1.75]" />
                </a>
                <a 
                  href="https://www.facebook.com/eversafefinancial" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-accent transform hover:scale-110 active:scale-95 transition-all duration-300 inline-block"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 stroke-[1.75]" />
                </a>
              </div>
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
                {lang === "en" ? "Need Immediate Assistance?" : "¿Necesitas ayuda inmediata?"}
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
                    <span className="block text-[9px] uppercase font-bold text-brand-slate tracking-wider">{t.contactForm.bilingualPhoneTitle}</span>
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
                    <span className="block text-[9px] uppercase font-bold text-brand-slate tracking-wider">{t.contactForm.directEmailTitle}</span>
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
                  <span>{t.contactForm.whatsappTitle}</span>
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
