import React from "react";
import { ArrowLeft, Home, Shield, FileText, Mail, FileCheck } from "lucide-react";

interface LegalPageProps {
  onBackToHome: () => void;
  lang: "en" | "es";
}

export function PrivacyPolicy({ onBackToHome, lang }: LegalPageProps) {
  return (
    <div className="bg-brand-gray-soft min-h-screen py-12 px-4 md:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumbs & Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <nav className="flex items-center gap-2 text-xs font-semibold text-brand-slate uppercase tracking-wider" aria-label="Breadcrumb">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-1.5 hover:text-brand-purple transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              Home
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-brand-purple font-extrabold">Privacy Policy</span>
          </nav>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-navy hover:text-brand-purple hover:translate-x-[-2px] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "en" ? "Back to Home" : "Volver al Inicio"}
          </button>
        </div>

        {/* Legal Card Box */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-slate-100 relative overflow-hidden">
          {/* Subtle decoration line at top */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-purple to-accent" />

          {/* Header */}
          <div className="border-b border-slate-100 pb-8 mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 bg-brand-purple/5 border border-brand-purple/10 px-3 py-1 rounded-full text-brand-purple">
              <Shield className="w-4 h-4" />
              <span className="text-[10px] uppercase font-black tracking-widest">
                {lang === "en" ? "Legal Documents" : "Documentación Legal"}
              </span>
            </div>
            
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-slate">
              Last updated: 2026
            </p>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-navy">
              Privacy Policy
            </h1>
          </div>

          {/* Legal Document Content */}
          <div className="prose max-w-none text-brand-navy/95 leading-relaxed space-y-8 font-sans">
            <div>
              <p className="text-base sm:text-lg text-brand-navy-light font-medium">
                At EverSafe Financial, we value your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data when you use our website or contact us through our forms.
              </p>
            </div>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> Data Controller
              </h2>
              <p className="text-sm sm:text-base pl-0 md:pl-5 font-normal">
                EVERSAFE FINANCIAL LLC is responsible for the processing of your personal data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> Data We Collect
              </h2>
              
              <div className="pl-0 md:pl-5 space-y-4">
                <div className="bg-slate-50/70 rounded-2xl p-5 border border-slate-100/80">
                  <h3 className="text-sm font-extrabold text-brand-navy uppercase tracking-wider mb-2.5 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                    Personal Information
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base font-medium">
                    <li>Full name</li>
                    <li>Phone number</li>
                    <li>Email address</li>
                    <li>Any other information we request through our forms</li>
                  </ul>
                </div>

                <div className="bg-slate-50/70 rounded-2xl p-5 border border-slate-100/80">
                  <h3 className="text-sm font-extrabold text-brand-navy uppercase tracking-wider mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                    Technical Data
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Information such as IP address, browser type, and pages visited through cookies or analytics tools, to the extent collected automatically.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> Purpose of the Treatment
              </h2>
              <p className="text-sm sm:text-base pl-0 md:pl-5">
                We use your data to:
              </p>
              <ul className="list-disc pl-5 md:pl-10 space-y-2 text-sm sm:text-base font-medium">
                <li>Respond to contact and information requests.</li>
                <li>Send commercial and marketing communications, with prior express acceptance.</li>
                <li>Improve our services and personalize your experience on our website, hosted by GoHighLevel.</li>
                <li>Manage and optimize the operation of the website.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> Consent for SMS
              </h2>
              <p className="text-sm sm:text-base pl-0 md:pl-5">
                By providing your phone number, you agree to receive:
              </p>
              <ul className="list-disc pl-5 md:pl-10 space-y-2 text-sm sm:text-base font-medium mb-4">
                <li>Notifications, alerts, and commercial communications via SMS.</li>
              </ul>
              
              <div className="pl-0 md:pl-5 bg-brand-sage-light/60 border border-brand-sage-light p-4 rounded-xl space-y-1.5 text-xs sm:text-sm">
                <p className="font-bold text-brand-navy">SMS Policies & Rates:</p>
                <p><span className="font-semibold">Rates:</span> Charges may apply depending on your carrier.</p>
                <p><span className="font-semibold">Control:</span> To unsubscribe, send a message with the word <strong className="text-brand-purple">STOP</strong>.</p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> Sharing Data
              </h2>
              <div className="pl-0 md:pl-5 space-y-3 text-sm sm:text-base">
                <p>We do not sell or rent your information.</p>
                <p>
                  We only share your data with third-party providers necessary for our operations, such as email marketing or SMS platforms, and with legal authorities when required.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> Your Rights
              </h2>
              <p className="text-sm sm:text-base pl-0 md:pl-5">
                You have the right to:
              </p>
              <ul className="list-disc pl-5 md:pl-10 space-y-2 text-sm sm:text-base font-medium">
                <li>Access, rectify, or delete your personal data.</li>
                <li>Withdraw your consent to the processing or sending of communications at any time.</li>
                <li>File complaints with data protection authorities.</li>
              </ul>
              <div className="mt-4 pl-0 md:pl-5 font-semibold text-sm sm:text-base">
                To exercise these rights, contact us at:{" "}
                <a
                  href="mailto:mary@eversafefinancial.com"
                  className="text-brand-purple hover:text-brand-purple-hover underline inline-flex items-center gap-1.5"
                >
                  <Mail className="w-4 h-4 text-accent inline" />
                  mary@eversafefinancial.com
                </a>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> Security
              </h2>
              <p className="text-sm sm:text-base pl-0 md:pl-5">
                We implement technical measures, such as SSL and encryption, and organizational measures to protect your data.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> Changes to This Policy
              </h2>
              <p className="text-sm sm:text-base pl-0 md:pl-5">
                This policy may be updated due to legal or operational changes. We will notify you of relevant changes by email or through a banner on the site.
              </p>
            </section>
          </div>
        </div>

        {/* Back Button underneath */}
        <div className="flex justify-center mt-10">
          <button
            onClick={onBackToHome}
            className="px-6 py-3 bg-brand-navy hover:bg-brand-navy-light text-white font-bold rounded-2xl text-sm transition-all transform hover:scale-105 active:scale-95 cursor-pointer shadow-md inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4 text-accent" />
            {lang === "en" ? "← Back to Home Page" : "← Volver a la Página Principal"}
          </button>
        </div>
      </div>
    </div>
  );
}

export function TermsOfService({ onBackToHome, lang }: LegalPageProps) {
  return (
    <div className="bg-brand-gray-soft min-h-screen py-12 px-4 md:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumbs & Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <nav className="flex items-center gap-2 text-xs font-semibold text-brand-slate uppercase tracking-wider" aria-label="Breadcrumb">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-1.5 hover:text-brand-purple transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              Home
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-brand-purple font-extrabold">Terms of Service</span>
          </nav>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-navy hover:text-brand-purple hover:translate-x-[-2px] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "en" ? "Back to Home" : "Volver al Inicio"}
          </button>
        </div>

        {/* Legal Card Box */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-slate-100 relative overflow-hidden">
          {/* Subtle decoration line at top */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-purple to-accent" />

          {/* Header */}
          <div className="border-b border-slate-100 pb-8 mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 bg-brand-purple/5 border border-brand-purple/10 px-3 py-1 rounded-full text-brand-purple">
              <FileCheck className="w-4 h-4" />
              <span className="text-[10px] uppercase font-black tracking-widest">
                {lang === "en" ? "Terms & Conditions" : "Términos y Condiciones"}
              </span>
            </div>
            
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-slate">
              Last updated: 2026
            </p>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-navy">
              Terms of Service
            </h1>
          </div>

          {/* Legal Document Content */}
          <div className="prose max-w-none text-brand-navy/95 leading-relaxed space-y-8 font-sans">
            <div>
              <p className="text-base sm:text-lg text-brand-navy-light font-medium">
                By accessing and using this website, you agree to comply with these Terms of Service. If you disagree with any part of these terms, please do not use the site.
              </p>
            </div>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> Acceptance of the Terms
              </h2>
              <p className="text-sm sm:text-base pl-0 md:pl-5">
                By accessing and using this website, you agree to comply with these Terms of Service. If you disagree with any part of it, please do not use the site.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> Use of the Site
              </h2>
              <div className="pl-0 md:pl-5 space-y-2">
                <p className="text-sm sm:text-base">
                  The user agrees to use the site lawfully and in accordance with current regulations.
                </p>
                <ul className="list-disc pl-5 text-sm sm:text-base font-semibold">
                  <li>Use of the site for illegal or unauthorized purposes is prohibited.</li>
                </ul>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> Intellectual Property
              </h2>
              <div className="pl-0 md:pl-5 space-y-3 text-sm sm:text-base">
                <p>
                  All content, including text, images, logos, graphics, and other materials, is the property of EVERSAFE FINANCIAL LLC or third parties who have authorized its use.
                </p>
                <p>
                  Reproduction, distribution, or modification of all or part of the content is not permitted without express authorization.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> Limitation of Liability
              </h2>
              <div className="pl-0 md:pl-5 space-y-3 text-sm sm:text-base">
                <p>
                  EVERSAFE FINANCIAL LLC does not guarantee the accuracy, completeness, or currency of the content of the site.
                </p>
                <p>
                  It is not responsible for interruption of service or for direct or indirect damages that may arise from the use of the site.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> Modifications
              </h2>
              <div className="pl-0 md:pl-5 space-y-3 text-sm sm:text-base">
                <p>We reserve the right to modify these terms at any time.</p>
                <p>
                  Modifications will be published on the site and, if significant, the user will be notified.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> Data Protection
              </h2>
              <p className="text-sm sm:text-base pl-0 md:pl-5">
                The processing of personal data will be governed by our Privacy Policy, which is incorporated into these Terms of Service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> Applicable Law and Jurisdiction
              </h2>
              <div className="pl-0 md:pl-5 space-y-3 text-sm sm:text-base">
                <p>These terms are governed by the laws in force in the State of Florida, United States.</p>
                <p>
                  For any dispute, the parties submit to the jurisdiction of the competent courts.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> Security
              </h2>
              <p className="text-sm sm:text-base pl-0 md:pl-5">
                We implement technical measures, such as SSL and encryption, and organizational measures to protect your data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> Contact
              </h2>
              <div className="pl-0 md:pl-5 space-y-2">
                <p className="text-sm sm:text-base">
                  For inquiries or complaints, please contact us at:
                </p>
                <p className="font-semibold text-sm sm:text-base">
                  <a
                    href="mailto:mary@eversafefinancial.com"
                    className="text-brand-purple hover:text-brand-purple-hover underline inline-flex items-center gap-1.5"
                  >
                    <Mail className="w-4 h-4 text-accent inline" />
                    mary@eversafefinancial.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Back Button underneath */}
        <div className="flex justify-center mt-10">
          <button
            onClick={onBackToHome}
            className="px-6 py-3 bg-brand-navy hover:bg-brand-navy-light text-white font-bold rounded-2xl text-sm transition-all transform hover:scale-105 active:scale-95 cursor-pointer shadow-md inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4 text-accent" />
            {lang === "en" ? "← Back to Home Page" : "← Volver a la Página Principal"}
          </button>
        </div>
      </div>
    </div>
  );
}
