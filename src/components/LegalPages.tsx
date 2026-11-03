import React from "react";
import { ArrowLeft, Home, Shield, Mail, FileCheck, Phone } from "lucide-react";

interface LegalPageProps {
  onBackToHome: () => void;
  lang: "en" | "es";
}

export function PrivacyPolicy({ onBackToHome, lang }: LegalPageProps) {
  const isEs = lang === "es";

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
              {isEs ? "Inicio" : "Home"}
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-brand-purple font-extrabold">
              {isEs ? "Política de Privacidad" : "Privacy Policy"}
            </span>
          </nav>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-navy hover:text-brand-purple hover:translate-x-[-2px] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            {isEs ? "Volver al Inicio" : "Back to Home"}
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
                {isEs ? "Documentación Legal" : "Legal Documents"}
              </span>
            </div>
            
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-slate">
              {isEs ? "Última actualización: 2026" : "Last updated: 2026"}
            </p>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-navy">
              {isEs ? "Política de Privacidad" : "Privacy Policy"}
            </h1>
          </div>

          {/* Legal Document Content */}
          <div className="prose max-w-none text-brand-navy/95 leading-relaxed space-y-8 font-sans">
            <div>
              <p className="text-base sm:text-lg text-brand-navy-light font-medium">
                {isEs
                  ? "En Eversafe Financial valoramos y respetamos su privacidad y nos comprometemos firmemente a proteger su información personal. Esta Política de Privacidad describe cómo EVERSAFE FINANCIAL LLC («Eversafe Financial», «nosotros», «nos» o «nuestro») recopila, utiliza, resguarda y divulga su información cuando visita nuestro sitio web (eversafefinancial.com), solicita cotizaciones de seguros o se comunica con nosotros mediante formularios web, teléfono, correo electrónico o mensajería SMS."
                  : "At Eversafe Financial, we respect your privacy and are committed to protecting your personal information. This Privacy Policy describes how EVERSAFE FINANCIAL LLC (\"Eversafe Financial,\" \"we,\" \"us,\" or \"our\") collects, uses, safeguards, and discloses your information when you visit our website (eversafefinancial.com), request insurance quotes, or communicate with us through web forms, phone, email, or SMS messaging."}
              </p>
            </div>

            {/* 1. Responsable del Tratamiento */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> {isEs ? "Responsable del Tratamiento" : "Data Controller"}
              </h2>
              <div className="text-sm sm:text-base pl-0 md:pl-5 space-y-2">
                <p>
                  {isEs ? (
                    <>
                      <strong>EVERSAFE FINANCIAL LLC</strong> es la entidad responsable del tratamiento de sus datos personales.
                    </>
                  ) : (
                    <>
                      <strong>EVERSAFE FINANCIAL LLC</strong> is the entity responsible for the processing of your personal data.
                    </>
                  )}
                </p>
                <p className="text-brand-slate text-xs sm:text-sm">
                  {isEs
                    ? "Asesora responsable: Mary Rivera, Agente de Seguros con Licencia en Florida y otros estados de EE. UU."
                    : "Primary Advisor: Mary Rivera, Licensed Insurance Advisor in Florida and other U.S. states."}
                </p>
              </div>
            </section>

            {/* 2. Datos que Recopilamos */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> {isEs ? "Datos que Recopilamos" : "Data We Collect"}
              </h2>
              
              <div className="pl-0 md:pl-5 space-y-4">
                <div className="bg-slate-50/70 rounded-2xl p-5 border border-slate-100/80">
                  <h3 className="text-sm font-extrabold text-brand-navy uppercase tracking-wider mb-2.5 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                    {isEs ? "Información Personal Proporcionada Voluntariamente" : "Personal Information Voluntarily Provided"}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base font-medium">
                    {isEs ? (
                      <>
                        <li>Nombre y apellido.</li>
                        <li>Número de teléfono móvil.</li>
                        <li>Dirección de correo electrónico.</li>
                        <li>Estado de residencia o código postal.</li>
                        <li>Detalles sobre sus preferencias o necesidades de cobertura (seguros de salud, ACA/Obamacare, Medicare, vida, IUL, gastos finales, etc.).</li>
                      </>
                    ) : (
                      <>
                        <li>Full name.</li>
                        <li>Mobile phone number.</li>
                        <li>Email address.</li>
                        <li>State of residence or zip code.</li>
                        <li>Details regarding coverage preferences or needs (health insurance, ACA/Obamacare, Medicare, life, IUL, final expense, etc.).</li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="bg-slate-50/70 rounded-2xl p-5 border border-slate-100/80">
                  <h3 className="text-sm font-extrabold text-brand-navy uppercase tracking-wider mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                    {isEs ? "Datos Técnicos y de Navegación" : "Technical & Browsing Data"}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    {isEs
                      ? "Información técnica recopilada automáticamente para garantizar la seguridad, el funcionamiento óptimo del sitio y la prevención de fraudes (como dirección IP abreviada, tipo de navegador, sistema operativo y páginas visitadas)."
                      : "Technical information collected automatically to ensure website security, operational performance, and fraud prevention (such as truncated IP address, browser type, operating system, and pages visited)."}
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Finalidad del Tratamiento y Uso de Plataformas */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> {isEs ? "Finalidad del Tratamiento y Plataformas Tecnológicas" : "Purpose of Processing & Technology Platforms"}
              </h2>
              <p className="text-sm sm:text-base pl-0 md:pl-5">
                {isEs ? "Utilizamos su información únicamente para las siguientes finalidades legítimas:" : "We use your data solely for the following legitimate purposes:"}
              </p>
              <ul className="list-disc pl-5 md:pl-10 space-y-2 text-sm sm:text-base font-medium">
                {isEs ? (
                  <>
                    <li>Responder a sus consultas directas y solicitudes de información o cotización de seguros.</li>
                    <li>Coordinar, confirmar y gestionar citas de asesoría personalizada con Mary Rivera.</li>
                    <li>Analizar y comparar opciones de cobertura entre aseguradoras autorizadas que se adapten a sus requerimientos.</li>
                    <li>Mantener la seguridad, estabilidad y rendimiento de nuestra presencia digital.</li>
                    <li>Cumplir con obligaciones regulatorias y de licenciamiento aplicables al sector de seguros en Estados Unidos.</li>
                  </>
                ) : (
                  <>
                    <li>Respond to your direct inquiries and requests for insurance information or quotes.</li>
                    <li>Coordinate, confirm, and manage personalized advisory appointments with Mary Rivera.</li>
                    <li>Analyze and compare coverage options from authorized carriers suited to your needs.</li>
                    <li>Maintain the security, stability, and performance of our digital presence.</li>
                    <li>Comply with applicable legal, licensing, and regulatory requirements in the United States insurance sector.</li>
                  </>
                )}
              </ul>
              <div className="pl-0 md:pl-5 pt-2">
                <div className="bg-slate-50/80 border border-slate-200/70 rounded-xl p-4 text-xs sm:text-sm text-brand-navy space-y-1.5">
                  <p className="font-bold text-brand-purple">
                    {isEs ? "Aclaración sobre Plataformas Tecnológicas (GoHighLevel):" : "Clarification on Technology Platforms (GoHighLevel):"}
                  </p>
                  <p className="text-brand-slate">
                    {isEs
                      ? "Eversafe Financial utiliza la plataforma tecnológica GoHighLevel (HighLevel) como sistema de gestión de relaciones con clientes (CRM), administración de formularios y canal de gestión de comunicaciones y citas. GoHighLevel actúa como proveedor de servicios y encargado del tratamiento de datos bajo nuestras instrucciones directas. GoHighLevel no aloja la totalidad de nuestro sitio web independiente, ni está autorizado a utilizar su información personal para sus propios fines comerciales o de marketing."
                      : "Eversafe Financial utilizes the GoHighLevel (HighLevel) platform as a Customer Relationship Management (CRM) system, form management tool, and appointment/communication workflow software under our direct instructions. GoHighLevel acts as a technology service provider and data processor. GoHighLevel does not host our entire independent website, nor is it permitted to use your personal information for its own commercial or marketing purposes."}
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Consentimiento y Comunicaciones SMS (Cumplimiento A2P 10DLC) */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> {isEs ? "Comunicaciones por SMS y Consentimiento Expreso (A2P 10DLC)" : "SMS Communications & Express Consent (A2P 10DLC Compliance)"}
              </h2>

              <div className="pl-0 md:pl-5 space-y-3 text-sm sm:text-base">
                <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 text-xs sm:text-sm text-brand-navy">
                  <p className="font-bold text-amber-900 mb-1">
                    {isEs ? "El suministro de su número de teléfono no implica consentimiento automático:" : "Providing your phone number does not imply automatic consent:"}
                  </p>
                  <p className="text-amber-950/90 leading-relaxed">
                    {isEs
                      ? "Proporcionar su número telefónico en nuestro sitio web o en una consulta no implica ni constituye autorización automática para recibir mensajes de texto (SMS). Las comunicaciones por SMS requieren siempre una autorización previa, expresa, opcional y específica mediante una casilla de verificación no marcada previamente u otro mecanismo expreso de suscripción (opt-in)."
                      : "Submitting your telephone number on our website or within an inquiry does NOT imply or constitute automatic consent to receive text messages (SMS). SMS communications strictly require prior, express, optional, and specific authorization, such as an affirmative, unchecked opt-in checkbox or explicit written opt-in mechanism."}
                  </p>
                </div>

                <p>
                  {isEs
                    ? "El consentimiento para recibir mensajes de texto es totalmente voluntario y no es un requisito ni condición para solicitar una cotización, contratar seguros o recibir servicios de Eversafe Financial."
                    : "Consent to receive text messages is completely voluntary and is not a condition of requesting an insurance quote, purchasing insurance coverage, or receiving services from Eversafe Financial."}
                </p>

                <h3 className="text-sm font-extrabold text-brand-navy uppercase tracking-wider pt-2">
                  {isEs ? "Tipos de Comunicaciones por SMS:" : "Types of SMS Communications:"}
                </h3>
                <ul className="list-disc pl-5 md:pl-8 space-y-1.5 text-xs sm:text-sm font-medium">
                  {isEs ? (
                    <>
                      <li>
                        <strong>Mensajes Informativos y Transaccionales:</strong> Confirmaciones de solicitudes iniciadas por usted, recordatorios de citas de asesoría con Mary Rivera, avisos de seguimiento sobre cotizaciones solicitadas y respuestas a preguntas específicas.
                      </li>
                      <li>
                        <strong>Comunicaciones Promocionales:</strong> Eversafe Financial no envía mensajes de texto promocionales ni publicitarios no solicitados. Solo se enviarán mensajes sobre nuevos periodos de inscripción u ofertas informativas si usted ha otorgado un consentimiento previo, separado y explícito para dicho fin.
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <strong>Informational & Transactional Messages:</strong> Confirmations of quote requests initiated by you, appointment reminders for consultations with Mary Rivera, requested follow-up notices on quotes, and direct customer care replies.
                      </li>
                      <li>
                        <strong>Promotional Communications:</strong> Eversafe Financial does not send unsolicited promotional or marketing text messages. Messages regarding new enrollment periods or informational updates are sent only if you have provided prior, separate, and explicit opt-in consent for promotional messages.
                      </li>
                    </>
                  )}
                </ul>

                <div className="bg-brand-sage-light/60 border border-brand-sage-light p-4 rounded-xl space-y-2 text-xs sm:text-sm mt-3">
                  <p className="font-bold text-brand-navy">
                    {isEs ? "Términos Clave del Servicio de SMS:" : "Key SMS Service Terms:"}
                  </p>
                  <p>
                    <span className="font-semibold">{isEs ? "Frecuencia:" : "Frequency:"}</span>{" "}
                    {isEs
                      ? "La frecuencia de los mensajes es variable y dependerá de las interacciones y citas que usted programe (generalmente de 1 a 4 mensajes por consulta o cita)."
                      : "Message frequency is variable based on your interactions and scheduled appointments (typically 1 to 4 messages per inquiry or consultation)."}
                  </p>
                  <p>
                    <span className="font-semibold">{isEs ? "Tarifas:" : "Rates:"}</span>{" "}
                    {isEs
                      ? "Pueden aplicarse tarifas estándar de mensajes y datos según su operador de telefonía móvil («Message and data rates may apply»)."
                      : "Standard message and data rates may apply depending on your wireless carrier plan."}
                  </p>
                  <p>
                    <span className="font-semibold">{isEs ? "Cancelación (STOP):" : "Opt-Out (STOP):"}</span>{" "}
                    {isEs ? (
                      <>
                        Puede cancelar el servicio de SMS en cualquier momento respondiendo con la palabra <strong className="text-brand-purple">STOP</strong> a cualquiera de nuestros mensajes. Recibirá un único mensaje confirmando su baja y no recibirá más SMS a menos que vuelva a suscribirse expresamente.
                      </>
                    ) : (
                      <>
                        You can cancel SMS communications at any time by replying <strong className="text-brand-purple">STOP</strong> to any message. You will receive a single confirmation message verifying your opt-out, and no further messages will be sent unless you re-subscribe.
                      </>
                    )}
                  </p>
                  <p>
                    <span className="font-semibold">{isEs ? "Ayuda (HELP):" : "Help (HELP):"}</span>{" "}
                    {isEs ? (
                      <>
                        Si necesita ayuda o tiene preguntas sobre los mensajes de texto, responda <strong className="text-brand-purple">HELP</strong> o contáctenos directamente a <a href="mailto:mary@eversafefinancial.com" className="text-brand-purple font-semibold hover:underline">mary@eversafefinancial.com</a> o al <a href="tel:7273596196" className="text-brand-purple font-semibold hover:underline">(727) 359-6196</a>.
                      </>
                    ) : (
                      <>
                        If you need help or have questions regarding text messaging, reply <strong className="text-brand-purple">HELP</strong> or contact us directly at <a href="mailto:mary@eversafefinancial.com" className="text-brand-purple font-semibold hover:underline">mary@eversafefinancial.com</a> or <a href="tel:7273596196" className="text-brand-purple font-semibold hover:underline">(727) 359-6196</a>.
                      </>
                    )}
                  </p>
                  <p className="text-[11px] text-brand-slate pt-1">
                    {isEs
                      ? "Los operadores de telefonía móvil (como T-Mobile, AT&T, Verizon y otros) no son responsables de mensajes demorados, perdidos o no entregados."
                      : "Wireless carriers (including T-Mobile, AT&T, Verizon, and others) are not liable for delayed, lost, or undelivered messages."}
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Intercambio de Datos y Cláusula Estricta de Datos Móviles */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> {isEs ? "Intercambio de Datos y No Divulgación a Terceros" : "Data Sharing & Non-Disclosure to Third Parties"}
              </h2>
              <div className="pl-0 md:pl-5 space-y-3 text-sm sm:text-base">
                {/* Mandatory A2P 10DLC mobile non-sharing statement */}
                <div className="bg-purple-50/70 border border-purple-200/80 rounded-xl p-4 text-xs sm:text-sm text-brand-navy">
                  <p className="font-extrabold text-brand-purple mb-1">
                    {isEs ? "Compromiso de No Divulgación de Datos Móviles (A2P 10DLC):" : "Mobile Data Non-Sharing Commitment (A2P 10DLC):"}
                  </p>
                  <p className="font-semibold text-brand-navy-light leading-relaxed">
                    {isEs
                      ? "Ninguna información móvil o datos de consentimiento de suscripción a mensajería de texto serán compartidos, vendidos ni cedidos a terceros ni afiliados con fines comerciales o de marketing. Toda la información de suscripción (opt-in) y consentimiento de SMS se excluye expresamente de cualquier intercambio con terceros."
                      : "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties."}
                  </p>
                </div>

                <p>
                  {isEs
                    ? "Eversafe Financial no vende, arrienda, comercializa ni cede su información personal a redes de mercadeo, intermediarios de datos («data brokers») ni anunciantes externos."
                    : "Eversafe Financial does not sell, lease, trade, or rent your personal information to marketing networks, data brokers, or external advertisers."}
                </p>

                <p>
                  {isEs
                    ? "Solo compartimos información en las siguientes circunstancias indispensables:"
                    : "We only share information under the following necessary circumstances:"}
                </p>
                <ul className="list-disc pl-5 md:pl-8 space-y-1.5 text-xs sm:text-sm font-medium">
                  {isEs ? (
                    <>
                      <li>
                        <strong>Aseguradoras Autorizadas:</strong> Únicamente cuando usted decide formalizar una solicitud o cotización formal de seguro y autoriza expresamente el envío de su solicitud a la aseguradora seleccionada.
                      </li>
                      <li>
                        <strong>Proveedores de Servicios Tecnológicos:</strong> Proveedores que procesan información bajo estrictos acuerdos de confidencialidad para operar nuestro CRM, formularios y comunicaciones (como GoHighLevel), únicamente para prestar los servicios contratados por nosotros.
                      </li>
                      <li>
                        <strong>Requerimientos Legales:</strong> Cuando sea requerido por mandato judicial, leyes federales o estatales, o autoridades regulatorias competentes.
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <strong>Authorized Insurance Carriers:</strong> Solely when you choose to proceed with a formal insurance quote or application and explicitly authorize submitting your application to the selected carrier.
                      </li>
                      <li>
                        <strong>Technology Service Providers:</strong> Vendors operating under strict confidentiality obligations to provide our CRM, form processing, and communications infrastructure (such as GoHighLevel), strictly to deliver the services contracted by us.
                      </li>
                      <li>
                        <strong>Legal & Regulatory Mandates:</strong> When required by court orders, applicable state or federal law, or competent regulatory bodies.
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </section>

            {/* 6. Sus Derechos de Privacidad */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> {isEs ? "Sus Derechos de Privacidad" : "Your Privacy Rights"}
              </h2>
              <p className="text-sm sm:text-base pl-0 md:pl-5">
                {isEs ? "Usted conserva el derecho en todo momento de:" : "You maintain the right at any time to:"}
              </p>
              <ul className="list-disc pl-5 md:pl-10 space-y-2 text-sm sm:text-base font-medium">
                {isEs ? (
                  <>
                    <li>Acceder a sus datos personales y solicitar detalles sobre su tratamiento.</li>
                    <li>Solicitar la rectificación, actualización o supresión de sus datos personales.</li>
                    <li>Revocar su consentimiento para recibir comunicaciones por correo electrónico o SMS (mediante STOP o solicitud directa).</li>
                    <li>Solicitar que no se continúe utilizando su información para contactos posteriores.</li>
                  </>
                ) : (
                  <>
                    <li>Access your personal data and request details regarding its processing.</li>
                    <li>Request rectification, updates, or deletion of your personal data.</li>
                    <li>Withdraw your consent to receive email or SMS communications (via STOP or direct request).</li>
                    <li>Request that your information not be utilized for future contact.</li>
                  </>
                )}
              </ul>
              <div className="mt-4 pl-0 md:pl-5 font-semibold text-sm sm:text-base">
                {isEs ? "Para ejercer cualquiera de estos derechos, contáctenos en: " : "To exercise these rights, please contact us at: "}
                <a
                  href="mailto:mary@eversafefinancial.com"
                  className="text-brand-purple hover:text-brand-purple-hover underline inline-flex items-center gap-1.5"
                >
                  <Mail className="w-4 h-4 text-accent inline" />
                  mary@eversafefinancial.com
                </a>
              </div>
            </section>

            {/* 7. Seguridad y Retención */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> {isEs ? "Seguridad y Retención de Datos" : "Security & Data Retention"}
              </h2>
              <div className="text-sm sm:text-base pl-0 md:pl-5 space-y-2">
                <p>
                  {isEs
                    ? "Implementamos salvaguardas técnicas y organizativas razonables, tales como cifrado mediante certificados SSL/TLS y control de accesos restringidos, para proteger su información contra pérdidas, accesos no autorizados, alteraciones o divulgación indebida."
                    : "We implement reasonable administrative, technical, and physical safeguards, including SSL/TLS encryption and restricted access controls, to protect your personal information against unauthorized access, loss, alteration, or disclosure."}
                </p>
                <p className="text-xs sm:text-sm text-brand-slate">
                  {isEs
                    ? "Conservamos la información personal únicamente durante el tiempo necesario para atender sus solicitudes, cumplir con obligaciones contractuales y satisfacer requerimientos de archivo fiscal, contable y de licencias de seguros conforme a las leyes aplicables."
                    : "We retain personal information only for the duration necessary to fulfill your requests, execute contractual commitments, and comply with applicable insurance licensing, tax, accounting, and legal requirements."}
                </p>
              </div>
            </section>

            {/* 8. Modificaciones */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> {isEs ? "Modificaciones a Esta Política" : "Changes to This Privacy Policy"}
              </h2>
              <p className="text-sm sm:text-base pl-0 md:pl-5">
                {isEs
                  ? "Nos reservamos el derecho de actualizar esta Política de Privacidad periódicamente para reflejar cambios legales, regulatorios u operativos. Cualquier cambio relevante será publicado directamente en esta página con la fecha de última actualización."
                  : "We reserve the right to update this Privacy Policy periodically to reflect legal, regulatory, or operational changes. Any material updates will be published on this page with the updated revision date."}
              </p>
            </section>

            {/* 9. Contacto */}
            <section className="space-y-3 border-t border-slate-100 pt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> {isEs ? "Contacto" : "Contact Information"}
              </h2>
              <div className="pl-0 md:pl-5 space-y-1 text-xs sm:text-sm text-brand-navy">
                <p className="font-bold text-brand-navy text-sm sm:text-base">EVERSAFE FINANCIAL LLC</p>
                <p>Mary Rivera — {isEs ? "Asesora de Seguros con Licencia" : "Licensed Insurance Advisor"}</p>
                <p className="flex items-center gap-1.5 pt-1">
                  <Mail className="w-3.5 h-3.5 text-accent" />
                  <a href="mailto:mary@eversafefinancial.com" className="text-brand-purple hover:underline font-semibold">
                    mary@eversafefinancial.com
                  </a>
                </p>
                <p className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-accent" />
                  <a href="tel:7273596196" className="text-brand-purple hover:underline font-semibold">
                    (727) 359-6196
                  </a>
                </p>
                <p className="text-brand-slate text-[11px] pt-1">
                  {isEs ? "Florida y otros estados de Estados Unidos" : "Florida and other U.S. states"}
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
            {isEs ? "← Volver a la Página Principal" : "← Back to Home Page"}
          </button>
        </div>
      </div>
    </div>
  );
}

export function TermsOfService({ onBackToHome, lang }: LegalPageProps) {
  const isEs = lang === "es";

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
              {isEs ? "Inicio" : "Home"}
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-brand-purple font-extrabold">
              {isEs ? "Términos de Servicio" : "Terms of Service"}
            </span>
          </nav>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-navy hover:text-brand-purple hover:translate-x-[-2px] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            {isEs ? "Volver al Inicio" : "Back to Home"}
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
                {isEs ? "Términos y Condiciones" : "Terms & Conditions"}
              </span>
            </div>
            
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-slate">
              {isEs ? "Última actualización: 2026" : "Last updated: 2026"}
            </p>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-navy">
              {isEs ? "Términos de Servicio" : "Terms of Service"}
            </h1>
          </div>

          {/* Legal Document Content */}
          <div className="prose max-w-none text-brand-navy/95 leading-relaxed space-y-8 font-sans">
            <div>
              <p className="text-base sm:text-lg text-brand-navy-light font-medium">
                {isEs
                  ? "Bienvenido al sitio web de Eversafe Financial. Estos Términos de Servicio («Términos») regulan el acceso y uso de eversafefinancial.com, operado por EVERSAFE FINANCIAL LLC («Eversafe Financial», «nosotros», «nos» o «nuestro»), así como los servicios de orientación, solicitud de cotización y canales de comunicación asociados."
                  : "Welcome to the Eversafe Financial website. These Terms of Service (\"Terms\") govern your access to and use of eversafefinancial.com, operated by EVERSAFE FINANCIAL LLC (\"Eversafe Financial,\" \"we,\" \"us,\" or \"our\"), as well as our associated guidance, quote request services, and communication channels."}
              </p>
            </div>

            {/* 1. Aceptación de los Términos */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> {isEs ? "Aceptación de los Términos" : "Acceptance of the Terms"}
              </h2>
              <p className="text-sm sm:text-base pl-0 md:pl-5">
                {isEs
                  ? "Al acceder, navegar o utilizar este sitio web o enviar formularios de contacto, usted reconoce haber leído, entendido y aceptado cumplir estos Términos de Servicio y nuestra Política de Privacidad. Si no está de acuerdo con alguna parte de estos términos, le solicitamos abstenerse de utilizar el sitio."
                  : "By accessing, browsing, or using this website or submitting contact forms, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, please do not use this site."}
              </p>
            </section>

            {/* 2. Naturaleza Informativa y Asesoría */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> {isEs ? "Orientación sobre Seguros y Alcance del Servicio" : "Insurance Guidance & Scope of Service"}
              </h2>
              <div className="pl-0 md:pl-5 space-y-2 text-sm sm:text-base">
                <p>
                  {isEs
                    ? "El contenido publicado en este sitio web tiene propósitos informativos y de orientación general. La presentación de una solicitud o cotización a través del sitio web no constituye una aprobación inmediata ni la emisión automática de una póliza de seguro."
                    : "Content published on this website is for informational and general guidance purposes. Submitting an inquiry or quote request does not constitute an immediate approval or automatic issuance of an insurance policy."}
                </p>
                <p className="text-xs sm:text-sm text-brand-slate">
                  {isEs
                    ? "Toda cobertura, beneficio, prima, elegibilidad y emisión final está sujeta a los términos, condiciones y aprobación de suscripción de las compañías aseguradoras correspondientes. Mary Rivera es agente de seguros con licencia en Florida y otros estados autorizados."
                    : "All coverage, benefits, premiums, eligibility, and policy issuances are strictly subject to underwriting guidelines, terms, and approval by the respective insurance carriers. Mary Rivera is a licensed insurance advisor in Florida and other authorized states."}
                </p>
              </div>
            </section>

            {/* 3. Uso Lícito del Sitio */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> {isEs ? "Uso Permitido y Responsabilidad del Usuario" : "Permitted Use & User Responsibilities"}
              </h2>
              <div className="pl-0 md:pl-5 space-y-2 text-sm sm:text-base">
                <p>
                  {isEs
                    ? "El usuario se compromete a utilizar el sitio web de manera lícita, proporcionando información veraz, precisa y actualizada en los formularios de consulta."
                    : "You agree to use this website lawfully and provide accurate, truthful, and updated information when completing inquiry forms."}
                </p>
                <ul className="list-disc pl-5 text-xs sm:text-sm font-medium space-y-1">
                  {isEs ? (
                    <>
                      <li>Queda estrictamente prohibido el uso del sitio con fines fraudulentos, ilícitos o no autorizados.</li>
                      <li>Queda prohibido intentar vulnerar la seguridad, introducir software malicioso o interferir con el funcionamiento de los servidores o redes del sitio.</li>
                    </>
                  ) : (
                    <>
                      <li>Using this website for fraudulent, unlawful, or unauthorized purposes is strictly prohibited.</li>
                      <li>Attempting to breach security, introduce malicious code, or disrupt the operation of website servers or networks is strictly prohibited.</li>
                    </>
                  )}
                </ul>
              </div>
            </section>

            {/* 4. SECCIÓN ESPECÍFICA DE SMS Y MENSAJERÍA (A2P 10DLC OBLIGATORIA) */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> {isEs ? "Términos del Servicio de Mensajería de Texto (SMS / A2P 10DLC)" : "SMS Messaging Service Terms (A2P 10DLC Compliance)"}
              </h2>

              <div className="pl-0 md:pl-5 space-y-3 text-sm sm:text-base">
                <div className="bg-purple-50/70 border border-purple-200/80 rounded-2xl p-5 space-y-3">
                  <h3 className="text-sm font-extrabold text-brand-purple uppercase tracking-wider">
                    {isEs ? "Identificación del Remitente y Propósito:" : "Sender Identification & Purpose:"}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-navy leading-relaxed">
                    {isEs
                      ? "Los mensajes de texto son enviados por o en nombre de Eversafe Financial (EVERSAFE FINANCIAL LLC). Las comunicaciones por SMS se limitan estrictamente a confirmar solicitudes de cotización iniciadas por usted, enviar recordatorios y actualizaciones sobre citas de asesoría con Mary Rivera, y brindar seguimiento directo de atención al cliente sobre los servicios solicitados."
                      : "Text messages are sent by or on behalf of Eversafe Financial (EVERSAFE FINANCIAL LLC). SMS communications are strictly limited to confirming quote requests initiated by you, delivering appointment reminders and updates for consultations with Mary Rivera, and providing direct customer support regarding requested insurance services."}
                  </p>

                  <h3 className="text-sm font-extrabold text-brand-purple uppercase tracking-wider pt-1">
                    {isEs ? "Autorización Previa y Sin Campañas Promocionales Genéricas:" : "Prior Authorization & No Generic Marketing Clauses:"}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-navy leading-relaxed">
                    {isEs
                      ? "Solo recibirá mensajes de texto si ha otorgado una autorización previa, expresa y específica mediante una casilla de verificación independiente en nuestros formularios u otro método de suscripción (opt-in). La aceptación de estos Términos de Servicio no autoriza campañas promocionales ni publicitarias genéricas por SMS."
                      : "You will receive text messages only if you have provided prior, express, and specific opt-in authorization through an independent checkbox on our forms or another verified opt-in method. Acceptance of these Terms of Service does not constitute broad or generic authorization for promotional or unsolicited marketing SMS campaigns."}
                  </p>

                  <h3 className="text-sm font-extrabold text-brand-purple uppercase tracking-wider pt-1">
                    {isEs ? "Frecuencia de Mensajes:" : "Message Frequency:"}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-navy leading-relaxed">
                    {isEs
                      ? "La frecuencia de los mensajes es variable y dependerá exclusivamente de sus solicitudes e interacciones con Eversafe Financial (por ejemplo, confirmaciones iniciales, recordatorios previos a su cita programada y respuestas a sus consultas; generalmente de 1 a 4 mensajes por consulta o cita)."
                      : "Message frequency is variable and depends strictly on your requests and interactions with Eversafe Financial (such as initial confirmations, reminders prior to a scheduled consultation, and direct replies to your inquiries; typically 1 to 4 messages per inquiry or appointment)."}
                  </p>

                  <h3 className="text-sm font-extrabold text-brand-purple uppercase tracking-wider pt-1">
                    {isEs ? "Tarifas de Mensajes y Datos:" : "Message and Data Rates:"}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-navy leading-relaxed">
                    {isEs
                      ? "Pueden aplicarse tarifas estándar de mensajes y datos según el plan contratado con su operador de telefonía móvil («Message and data rates may apply»). Eversafe Financial no cobra cargos adicionales por el envío o recepción de mensajes de texto."
                      : "Standard message and data rates may apply according to your wireless carrier plan. Eversafe Financial does not charge an additional fee for sending or receiving text messages."}
                  </p>

                  <h3 className="text-sm font-extrabold text-brand-purple uppercase tracking-wider pt-1">
                    {isEs ? "Cancelación del Servicio (Instrucciones STOP):" : "Opt-Out Instructions (STOP):"}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-navy leading-relaxed">
                    {isEs ? (
                      <>
                        Usted puede cancelar el servicio de mensajes de texto en cualquier momento enviando la palabra <strong className="text-brand-purple">STOP</strong> como respuesta a cualquier SMS recibido. Al enviar STOP, recibirá un único mensaje confirmando la cancelación de su suscripción y no volverá a recibir mensajes SMS a menos que vuelva a solicitarlo o registrarse expresamente.
                      </>
                    ) : (
                      <>
                        You can cancel the SMS service at any time by replying <strong className="text-brand-purple">STOP</strong> to any text message received. Upon texting STOP, you will receive a single confirmation message verifying your cancellation, and no further SMS messages will be sent unless you explicitly re-subscribe.
                      </>
                    )}
                  </p>

                  <h3 className="text-sm font-extrabold text-brand-purple uppercase tracking-wider pt-1">
                    {isEs ? "Ayuda y Soporte Técnico (Instrucciones HELP):" : "Help & Customer Support (HELP):"}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-navy leading-relaxed">
                    {isEs ? (
                      <>
                        Si experimenta dificultades o requiere asistencia con nuestro servicio de mensajería, responda <strong className="text-brand-purple">HELP</strong> al número desde el cual recibió el mensaje, o comuníquese directamente con nuestro equipo de atención a <a href="mailto:mary@eversafefinancial.com" className="text-brand-purple font-semibold hover:underline">mary@eversafefinancial.com</a> o al teléfono <a href="tel:7273596196" className="text-brand-purple font-semibold hover:underline">(727) 359-6196</a>.
                      </>
                    ) : (
                      <>
                        If you experience issues or need assistance with our messaging program, reply <strong className="text-brand-purple">HELP</strong> to the number from which you received the message, or contact our support team directly at <a href="mailto:mary@eversafefinancial.com" className="text-brand-purple font-semibold hover:underline">mary@eversafefinancial.com</a> or by phone at <a href="tel:7273596196" className="text-brand-purple font-semibold hover:underline">(727) 359-6196</a>.
                      </>
                    )}
                  </p>

                  <h3 className="text-sm font-extrabold text-brand-purple uppercase tracking-wider pt-1">
                    {isEs ? "Descargo sobre Operadores Móviles:" : "Carrier Liability Disclaimer:"}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                    {isEs
                      ? "Los operadores de telefonía móvil (incluyendo, entre otros, AT&T, T-Mobile, Verizon y operadores asociados) no son responsables por mensajes demorados, perdidos o no entregados por causas técnicas ajenas a Eversafe Financial («Carriers are not liable for delayed or undelivered messages»)."
                      : "Wireless mobile carriers (including, without limitation, AT&T, T-Mobile, Verizon, and associated carriers) are not liable for delayed, lost, or undelivered messages."}
                  </p>

                  <h3 className="text-sm font-extrabold text-brand-purple uppercase tracking-wider pt-1">
                    {isEs ? "Privacidad y No Transferencia de Datos Móviles:" : "Privacy & Mobile Information Protection:"}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-navy leading-relaxed">
                    {isEs ? (
                      <>
                        Su privacidad es esencial para nosotros. Ningún número de teléfono móvil ni dato de consentimiento de SMS será compartido con terceros con fines de mercadeo. Para más información sobre cómo protegemos sus datos, consulte nuestra{" "}
                        <a href="#privacy-policy" className="text-brand-purple font-bold underline hover:text-brand-purple-hover">
                          Política de Privacidad
                        </a>.
                      </>
                    ) : (
                      <>
                        Your privacy is essential to us. No mobile phone numbers or SMS opt-in consent data will ever be shared with third parties for marketing purposes. For complete details on how we safeguard your data, please review our{" "}
                        <a href="#privacy-policy" className="text-brand-purple font-bold underline hover:text-brand-purple-hover">
                          Privacy Policy
                        </a>.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Propiedad Intelectual */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> {isEs ? "Propiedad Intelectual" : "Intellectual Property"}
              </h2>
              <div className="pl-0 md:pl-5 space-y-3 text-sm sm:text-base">
                <p>
                  {isEs
                    ? "Todo el contenido visual, logotipos, textos, gráficos, marcas y elementos distintivos presentes en este sitio web son propiedad exclusiva de EVERSAFE FINANCIAL LLC o de terceros que han concedido autorización para su uso."
                    : "All visual assets, logos, copy, graphics, trademarks, and distinctive elements on this website are the exclusive property of EVERSAFE FINANCIAL LLC or third parties who have authorized their use."}
                </p>
                <p className="text-xs sm:text-sm text-brand-slate">
                  {isEs
                    ? "Queda prohibida la reproducción, distribución, transmisión o modificación total o parcial de los contenidos del sitio sin autorización previa y por escrito de Eversafe Financial."
                    : "Reproduction, distribution, transmission, or modification of any part of this website without prior written authorization from Eversafe Financial is strictly prohibited."}
                </p>
              </div>
            </section>

            {/* 6. Limitación de Responsabilidad */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> {isEs ? "Limitación de Responsabilidad" : "Limitation of Liability"}
              </h2>
              <div className="pl-0 md:pl-5 space-y-3 text-sm sm:text-base">
                <p>
                  {isEs
                    ? "EVERSAFE FINANCIAL LLC realiza esfuerzos continuos para mantener la exactitud y actualidad del contenido de este sitio web. No obstante, no garantiza la ausencia total de errores o interrupciones temporales del servicio."
                    : "EVERSAFE FINANCIAL LLC makes reasonable efforts to maintain the accuracy and currency of website content. However, we do not warrant that the website will always be error-free or uninterrupted."}
                </p>
                <p className="text-xs sm:text-sm text-brand-slate">
                  {isEs
                    ? "En la máxima medida permitida por las leyes aplicables, Eversafe Financial no será responsable de daños directos, indirectos, incidentales o consecuentes que resulten del uso o la imposibilidad de uso de este sitio web."
                    : "To the maximum extent permitted by applicable law, Eversafe Financial shall not be held liable for direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website."}
                </p>
              </div>
            </section>

            {/* 7. Modificaciones a los Términos */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> {isEs ? "Modificaciones a los Términos" : "Modifications to Terms"}
              </h2>
              <p className="text-sm sm:text-base pl-0 md:pl-5">
                {isEs
                  ? "Nos reservamos el derecho de modificar o actualizar estos Términos de Servicio en cualquier momento. Cualquier modificación entrará en vigor inmediatamente tras su publicación en esta página, indicando la fecha de última actualización."
                  : "We reserve the right to modify or update these Terms of Service at any time. Any changes will become effective immediately upon posting to this page, marked with the updated revision date."}
              </p>
            </section>

            {/* 8. Ley Aplicable y Jurisdicción */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> {isEs ? "Ley Aplicable y Jurisdicción" : "Applicable Law and Jurisdiction"}
              </h2>
              <div className="pl-0 md:pl-5 space-y-2 text-sm sm:text-base">
                <p>
                  {isEs
                    ? "Estos Términos de Servicio se rigen e interpretan conforme a las leyes del Estado de Florida, Estados Unidos, sin dar efecto a principios de conflictos de leyes."
                    : "These Terms of Service are governed by and construed in accordance with the laws of the State of Florida, United States, without giving effect to conflict of laws principles."}
                </p>
                <p className="text-xs sm:text-sm text-brand-slate">
                  {isEs
                    ? "Cualquier controversia o reclamo derivado del uso del sitio web se someterá a la jurisdicción exclusiva de los tribunales competentes en el Estado de Florida."
                    : "Any dispute or claim arising from or relating to the use of this website shall be subject to the exclusive jurisdiction of the competent courts in the State of Florida."}
                </p>
              </div>
            </section>

            {/* 9. Contacto */}
            <section className="space-y-3 border-t border-slate-100 pt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-purple tracking-tight flex items-center gap-2">
                <span className="text-accent">#</span> {isEs ? "Contacto" : "Contact Information"}
              </h2>
              <div className="pl-0 md:pl-5 space-y-1 text-xs sm:text-sm text-brand-navy">
                <p className="font-bold text-brand-navy text-sm sm:text-base">EVERSAFE FINANCIAL LLC</p>
                <p>Mary Rivera — {isEs ? "Asesora de Seguros con Licencia" : "Licensed Insurance Advisor"}</p>
                <p className="flex items-center gap-1.5 pt-1">
                  <Mail className="w-3.5 h-3.5 text-accent" />
                  <a href="mailto:mary@eversafefinancial.com" className="text-brand-purple hover:underline font-semibold">
                    mary@eversafefinancial.com
                  </a>
                </p>
                <p className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-accent" />
                  <a href="tel:7273596196" className="text-brand-purple hover:underline font-semibold">
                    (727) 359-6196
                  </a>
                </p>
                <p className="text-brand-slate text-[11px] pt-1">
                  {isEs ? "Florida y otros estados de Estados Unidos" : "Florida and other U.S. states"}
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
            {isEs ? "← Volver a la Página Principal" : "← Back to Home Page"}
          </button>
        </div>
      </div>
    </div>
  );
}
