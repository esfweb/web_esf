export interface TranslationSet {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPhone: string;
    ctaIUL: string;
    badge: string;
  };
  quiz: {
    title: string;
    subtitle: string;
    step: string;
    next: string;
    prev: string;
    ageQ: string;
    ageOpt1: string;
    ageOpt2: string;
    ageOpt3: string;
    employedQ: string;
    yes: string;
    no: string;
    healthQ: string;
    healthOpt1: string;
    healthOpt2: string;
    healthOpt3: string;
    goalQ: string;
    goalOpt1: string;
    goalOpt2: string;
    goalOpt3: string;
    goalOpt4: string;
    checking: string;
    qualifiedTitle: string;
    qualifiedDesc: string;
    unqualifiedTitle: string;
    unqualifiedDesc: string;
    fullName: string;
    phoneLabel: string;
    emailLabel: string;
    consent: string;
    submitLead: string;
    leadSuccessTitle: string;
    leadSuccessDesc: string;
  };
  stats: {
    years: { num: string; label: string };
    families: { num: string; label: string };
    products: { num: string; label: string };
    states: { num: string; label: string };
  };
  core: {
    title: string;
    subtitle: string;
    iulTitle: string;
    iulDesc: string;
    obamacareTitle: string;
    obamacareDesc: string;
    medicareTitle: string;
    medicareDesc: string;
    finalExpensesTitle: string;
    finalExpensesDesc: string;
    finalExpensesBadge: string;
    finalExpensesCta: string;
    annuitiesTitle: string;
    annuitiesDesc: string;
    annuitiesBadge: string;
    annuitiesCta: string;
    popular: string;
    cta: string;
  };
  allServices: {
    title: string;
    subtitle: string;
    groupLife: string;
    groupHealth: string;
    kidsSavings: string;
    kidsSavingsDesc: string;
    finalExpenses: string;
    finalExpensesDesc: string;
    mortgageProt: string;
    mortgageProtDesc: string;
    accidental: string;
    accidentalDesc: string;
    taxFreeRet: string;
    taxFreeRetDesc: string;
    rollover: string;
    rolloverDesc: string;
    annuities: string;
    annuitiesDesc: string;
    obamacare: string;
    obamacareDescWeb: string;
    dentalVision: string;
    dentalVisionDesc: string;
    hospitalInd: string;
    hospitalIndDesc: string;
    medicare: string;
    medicareDescWeb: string;
    privateHealth: string;
    privateHealthDesc: string;
  };
  whyChoose: {
    title: string;
    serviceTitle: string;
    serviceDesc: string;
    bilingualTitle: string;
    bilingualDesc: string;
    guidanceTitle: string;
    guidanceDesc: string;
    coverageTitle: string;
    coverageDesc: string;
  };
  about: {
    titleLabel: string;
    bio: string;
    cta: string;
    badge: string;
  };
  iulExplainer: {
    title: string;
    colSavingsTitle: string;
    colSavingsDesc: string;
    col401kTitle: string;
    col401kDesc: string;
    colIulTitle: string;
    colIulDesc: string;
    cta: string;
  };
  contactForm: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    messageLabel: string;
    placeholderMessage: string;
    consentText: string;
    btnSubmit: string;
    successTitle: string;
    successDesc: string;
    errName: string;
    errEmail: string;
    errPhone: string;
    errConsent: string;
    hoursTitle: string;
    hoursWeek: string;
    hoursSat: string;
    hoursSun: string;
    areaLabel: string;
    areaValue: string;
    bilingualHelp: string;
  };
  footer: {
    about: string;
    contactUs: string;
    hours: string;
    bilingual: string;
    rights: string;
  };
  whoWeHelp: {
    title: string;
    subtitle: string;
    items: string[];
  };
  whyContactUs: {
    title: string;
    items: string[];
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
}

export const translations: Record<"en" | "es", TranslationSet> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact Us",
      cta: "Get Free Quote",
    },
    hero: {
      title: "Protect What Matters Most. Build Wealth That Lasts.",
      subtitle: "Expert insurance guidance from Mary Rivera — tailored solutions for life, health, and retirement across Florida and beyond.",
      ctaPhone: "📞 Talk to Mary: 727-359-6196",
      ctaIUL: "💡 Why IUL Is Better",
      badge: "✅ 4+ Years of Experience  ·  ✅ Licensed in Florida & other states  ·  ✅ Bilingual Service (EN/ES)",
    },
    quiz: {
      title: "Do You Qualify for IUL?",
      subtitle: "Find Out in 5 Simple Steps",
      step: "Step",
      next: "Next →",
      prev: "← Back",
      ageQ: "What is your age?",
      ageOpt1: "Under 18 Years",
      ageOpt2: "18 to 55 Years",
      ageOpt3: "Over 56 Years",
      employedQ: "Are you currently employed?",
      yes: "Yes",
      no: "No",
      healthQ: "Do you have any significant pre-existing health conditions?",
      healthOpt1: "No: I'm in excellent/good health",
      healthOpt2: "Minor issues (e.g., controlled high blood pressure)",
      healthOpt3: "Major conditions (e.g., active cancer, chronic failure)",
      goalQ: "What is your primary financial goal with this policy?",
      goalOpt1: "Tax-Free Savings & Retirement Accumulation",
      goalOpt2: "Family Life Insurance Protection",
      goalOpt3: "Mortgage/Business Protection",
      goalOpt4: "All of the Above",
      checking: "Analyzing your profile...",
      qualifiedTitle: "🌟 Perfect Candidate!",
      qualifiedDesc: "Index Universal Life fits your goals perfectly. Mary will prepare a custom plan to maximize your tax-free cash accumulation.",
      unqualifiedTitle: "🛡️ Excellent Options Available!",
      unqualifiedDesc: "Your profile is better suited for our specialized Term or Legacy Whole Life structures. Mary will craft the perfect package for you.",
      fullName: "Full Name",
      phoneLabel: "Phone Number",
      emailLabel: "Email Address",
      consent: "I consent to receive transactional messages or calls regarding my request.",
      submitLead: "🚀 Find My Perfect Plan in 30 Seconds",
      leadSuccessTitle: "🎉 Profile Saved!",
      leadSuccessDesc: "Thank you! Mary Rivera has received your quiz profile and is preparing your tailored plan. She will contact you directly.",
    },
    stats: {
      years: { num: "4+", label: "Trusted Experience" },
      families: { num: "500+", label: "Families Served" },
      products: { num: "7+", label: "Carrier Products" },
      states: { num: "10+", label: "States Licensed" },
    },
    core: {
      title: "Core Services",
      subtitle: "Safeguard your future with strategies designed for your family today and for generations to come.",
      iulTitle: "Index Universal Life (IUL)",
      iulDesc: "Build lifelong protection with cash value growth tied to market indices, offering flexibility for retirement planning and Tax-Free benefits.",
      obamacareTitle: "Obamacare (ACA) Plans",
      obamacareDesc: "Personalized solutions for Affordable Care Act coverage, ensuring you meet legal requirements while saving money.",
      medicareTitle: "Medicare Plans",
      medicareDesc: "Expert help navigating Medicare Advantage, Supplement Plans, and Part D to maximize your health benefits.",
      finalExpensesTitle: "Final Expenses",
      finalExpensesDesc: "Help protect your loved ones from funeral costs, burial expenses, medical balances, and other end-of-life financial burdens.",
      finalExpensesBadge: "Family Relief",
      finalExpensesCta: "Explore Final Expense Options",
      annuitiesTitle: "Annuities",
      annuitiesDesc: "Create a tax-efficient retirement income strategy with customized solutions that may include annuities, rollovers, and long-term income planning.",
      annuitiesBadge: "Retirement Income",
      annuitiesCta: "Explore Annuity Options",
      popular: "Most Popular",
      cta: "💼 Get Personalized Options Now",
    },
    allServices: {
      title: "All Services We Offer",
      subtitle: "Complete coverage solutions for every stage of life. Hover over any service to see how we assist you.",
      groupLife: "Life & Financial Security",
      groupHealth: "Health & Wellness",
      kidsSavings: "Kids / College Savings Plans",
      kidsSavingsDesc: "Flexible plans designed to grow cash value to fund grandchildren/kids future college tuition or downpayments.",
      finalExpenses: "Final Expenses Coverage",
      finalExpensesDesc: "Ensure peace of mind with whole life plans designed to pay final burial, cremation, and administrative costs.",
      mortgageProt: "Mortgage Protection",
      mortgageProtDesc: "Special life term policy structured to pay off some or all your remaining home mortgage if you pass away prematurely.",
      accidental: "Accidental Protection",
      accidentalDesc: "Direct financial reimbursement for unexpected accidents, injuries, or sudden emergency room visits.",
      taxFreeRet: "Tax-Free Retirement Plans",
      taxFreeRetDesc: "Financial strategies that let you accumulate wealth and withdraw it entirely tax-exempt at retirement age.",
      rollover: "401K / IRA Rollover",
      rolloverDesc: "Safely move old retirement structures into plans that prevent market losses while capturing gain opportunities.",
      annuities: "Annuities",
      annuitiesDesc: "Secure an absolutely guaranteed lifetime income stream that you can never outlive, securing stable longevity.",
      obamacare: "Obamacare (ACA)",
      obamacareDescWeb: "Federal-subsidized health premiums. Check if you qualify for zero or low-cost comprehensive health coverage.",
      dentalVision: "Dental & Vision Insurance",
      dentalVisionDesc: "Stand-alone or bundled plans that cover dental cleaning, crowns, eye checkups, glasses, and contact lenses.",
      hospitalInd: "Hospital Indemnity Plans",
      hospitalIndDesc: "Cash payouts directly to you for hospital admission and daily confinement to cover out-of-pocket costs.",
      medicare: "Medicare",
      medicareDescWeb: "Guidance through original Medicare, Medicare Advantage, Supplements (Medigap), and Part D drug formularies.",
      privateHealth: "Private Health Plans",
      privateHealthDesc: "Flexible, off-exchange individual health insurance options tailored for self-employed or high-income earners.",
    },
    whyChoose: {
      title: "Why Families Trust Mary Rivera",
      serviceTitle: "Personalized Service",
      serviceDesc: "Every plan is structured customized to fit your unique financial goals, family size, and current budget.",
      bilingualTitle: "Bilingual Support",
      bilingualDesc: "We speak your language fluently — providing full English & Spanish assistance with clear, transparent materials.",
      guidanceTitle: "Expert Guidance",
      guidanceDesc: "Informed decisions backed by over 4 years of hands-on experience navigating the industry's largest carriers.",
      coverageTitle: "Trusted Coverage",
      coverageDesc: "Outstanding protection networks, securing your financial future and wellness, today and into the future.",
    },
    about: {
      titleLabel: "Mary Rivera · Licensed Insurance Advisor",
      bio: "With 4 years of experience and an unyielding commitment to integrity, Eversafe Financial is dedicated to providing tailored insurance solutions that protect what truly matters. Drawing on our extensive background in the insurance industry, we empower our clients to make informed decisions, ensuring comprehensive coverage that fits both current needs and future retirement aspirations. Our approach combines professional insight with a genuine passion for shielding individuals and multi-generational families.",
      cta: "⭐ Save Money & Build Wealth Now",
      badge: "Licensed Insurance Advisor • Florida",
    },
    iulExplainer: {
      title: "Why IUL Is the Smart Choice",
      colSavingsTitle: "Traditional Savings Accounts",
      colSavingsDesc: "Extremely low interest rates that trail inflation, fully taxable year-over-year, and offer absolutely zero insurance or family protection.",
      col401kTitle: "Traditional 401K Plans",
      col401kDesc: "Deeply dependent on market crashes, high active management fees, strict penalties for early withdrawals, and 100% taxable at retirement.",
      colIulTitle: "IUL (Index Universal Life)",
      colIulDesc: "Builds compounding cash value linked to positive index performance with a 0% floor guarantee (no market-loss risk), tax-free distributions on retirement, and instant family death benefits.",
      cta: "Learn If You Qualify For IUL",
    },
    contactForm: {
      title: "Get Professional Advice & Tailored Options Now",
      subtitle: "Fill out the secure form below to receive a personalized, custom coverage plan directly from Mary Rivera.",
      nameLabel: "Your Full Name",
      emailLabel: "Your Email Address",
      phoneLabel: "Phone Number",
      messageLabel: "How Can I Assist You?",
      placeholderMessage: "Let me know your doubts or requirements...",
      consentText: "By checking this box, I consent to receive professional transactional messages/calls related to Eversafe coverage requests.",
      btnSubmit: "🛡️ Securing My Family's Future Now",
      successTitle: "📩 Quote Request Received!",
      successDesc: "A warm thank you! Mary Rivera has received your inquiry and is already checking options. She will reach out within 1 business day.",
      errName: "Please provide your full name (at least 3 characters).",
      errEmail: "Please enter a valid email address.",
      errPhone: "Please key in a valid 10-digit phone number.",
      errConsent: "Consent checkbox must be checked to request quote.",
      hoursTitle: "Business Hours",
      hoursWeek: "Monday – Friday: 9:00 AM – 6:00 PM",
      hoursSat: "Saturday: 10:00 AM – 2:00 PM",
      hoursSun: "Sunday: Closed",
      areaLabel: "Service Areas",
      areaValue: "Florida and other U.S. states",
      bilingualHelp: "Te Puedo Ayudar en Español",
    },
    footer: {
      about: "Secure your family's financial future with Mary Rivera's personalized insurance solutions. From Life and Health coverage to Retirement Plans, count on expert guidance every step of the way.",
      contactUs: "Contact Us",
      hours: "Business Hours",
      bilingual: "Te Puedo Ayudar en Español • We Also Speak English",
      rights: "© 2026 Eversafe Financial LLC. All rights reserved. Eversafe Financial is the independent firm of advisor Mary Rivera.",
    },
    whoWeHelp: {
      title: "Who We Help",
      subtitle: "Helping individuals, families, and business owners across Florida navigate their financial protection journey.",
      items: [
        "Families seeking life insurance to shield their loved ones from uncertainty.",
        "Individuals comparing Medicare Advantage, Supplements, and Part D options.",
        "Clients exploring Obamacare (ACA) health plans for subsidized medical coverage.",
        "People planning retirement protection with safe-money growth and tax-free distribution strategies.",
        "Bilingual households who need dedicated, professional support in English and Spanish."
      ]
    },
    whyContactUs: {
      title: "Why Clients Contact Us",
      items: [
        "To receive direct, independent comparisons from the nation's top A-rated insurance carriers.",
        "To custom-design retirement accumulation plans utilizing Index Universal Life (IUL).",
        "To transition legacy accounts (401k/IRA Rollover) safely without penalty or loss risk.",
        "To obtain clear, honest policy reviews with absolutely zero high-pressure sales tactics."
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "What types of insurance does Eversafe Financial help with?",
          a: "We help clients compare life insurance, Medicare plans, ACA options, retirement strategies, and family financial protection solutions."
        },
        {
          q: "Do you offer service in Spanish?",
          a: "Yes. Eversafe Financial provides bilingual support in English and Spanish."
        },
        {
          q: "How do I know which plan is right for me?",
          a: "The right plan depends on your age, family situation, budget, health needs, and long-term goals. We help you compare options clearly."
        },
        {
          q: "Is the quote really free?",
          a: "Yes. Your quote request is free and comes with no obligation."
        },
        {
          q: "Do you work with families and individuals?",
          a: "Yes. We work with individuals, families, and people planning for retirement or long-term financial protection."
        },
        {
          q: "How quickly will someone contact me?",
          a: "After you submit your information, a licensed advisor will review it and follow up as soon as possible."
        }
      ]
    },
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
      cta: "Cotización Gratis",
    },
    hero: {
      title: "Protege Lo Que Más Importa. Construye Riqueza Duradera.",
      subtitle: "Orientación experta de Mary Rivera — soluciones personalizadas para vida, salud y retiro en Florida y más allá.",
      ctaPhone: "📞 Hablar con Mary: (727) 359-6196",
      ctaIUL: "💡 Por Qué IUL es Mejor",
      badge: "✅ 4+ Años de Experiencia  ·  ✅ Licencia en Florida y otros estados  ·  ✅ Servicio Bilingüe (EN/ES)",
    },
    quiz: {
      title: "¿Calificas para IUL?",
      subtitle: "Descúbrelo en 5 Pasos",
      step: "Paso",
      next: "Siguiente →",
      prev: "← Atrás",
      ageQ: "¿Cuál es tu edad?",
      ageOpt1: "Menor de 18 Años",
      ageOpt2: "18 a 55 Años",
      ageOpt3: "Mayor de 56 Años",
      employedQ: "¿Estás empleado actualmente?",
      yes: "Sí",
      no: "No",
      healthQ: "¿Tienes alguna condición significativa preexistente de salud?",
      healthOpt1: "No: gozo de excelente / buena salud",
      healthOpt2: "Leves (hipotensión/hipertensión arterial controlada, asma)",
      healthOpt3: "Crónicas/Graves (Cáncer activo, insuficiencia, secuelas graves)",
      goalQ: "¿Cuál es tu objetivo financiero primordial al adquirir esta póliza?",
      goalOpt1: "Ahorros Libres de Impuestos y Acumulación de Retiro",
      goalOpt2: "Seguro y Protección Familiar",
      goalOpt3: "Protección de Hipoteca o Negocio",
      goalOpt4: "Todas las Anteriores",
      checking: "Analizando tu perfil...",
      qualifiedTitle: "🌟 ¡Candidato Perfecto!",
      qualifiedDesc: "Index Universal Life se adapta perfectamente a tus objetivos. Mary te preparará un plan a la medida para maximizar tu acumulación de efectivo libre de impuestos.",
      unqualifiedTitle: "🛡️ ¡Excelente Opciones Disponibles!",
      unqualifiedDesc: "Tu perfil se adapta mejor a nuestras pólizas de Término Especializado o estructuras de Vida Entera. Mary diseñará el paquete perfecto para ti.",
      fullName: "Nombre Completo",
      phoneLabel: "Número de Teléfono",
      emailLabel: "Correo Electrónico",
      consent: "Doy mi consentimiento para recibir mensajes informativos y llamadas sobre mi solicitud.",
      submitLead: "🚀 Descubrir Mi Plan Perfecto en 30 Segundos",
      leadSuccessTitle: "🎉 ¡Perfil Guardado!",
      leadSuccessDesc: "¡Muchas gracias! Mary Rivera ha guardado tu perfil de quiz y preparará tu opción ideal. Estará en comunicación contigo en breve.",
    },
    stats: {
      years: { num: "4+", label: "Años de Experiencia" },
      families: { num: "500+", label: "Familias Protegidas" },
      products: { num: "7+", label: "Productos Disponibles" },
      states: { num: "10+", label: "Estados Autorizados" },
    },
    core: {
      title: "Servicios Principales",
      subtitle: "Protege tu futuro con estrategias diseñadas para tu familia hoy y para las generaciones venideras.",
      iulTitle: "Index Universal Life (IUL)",
      iulDesc: "Construye protección de por vida con crecimiento de valor en efectivo vinculado a índices de mercado, con flexibilidad para planificación de retiro y beneficios libres de impuestos.",
      obamacareTitle: "Planes de Obamacare (ACA)",
      obamacareDesc: "Soluciones personalizadas para cobertura del Acta de Cuidado Asequible, asegurando que cumplas los requisitos legales mientras ahorras dinero.",
      medicareTitle: "Planes de Medicare",
      medicareDesc: "Ayuda experta para navegar Medicare Advantage, Planes Suplementarios y Parte D para maximizar tus beneficios de salud.",
      finalExpensesTitle: "Gastos Finales",
      finalExpensesDesc: "Ayuda a proteger a tus seres queridos de gastos funerarios, costos de sepelio, saldos médicos y otras cargas financieras al final de la vida.",
      finalExpensesBadge: "Alivio Familiar",
      finalExpensesCta: "Explorar Opciones de Gastos Finales",
      annuitiesTitle: "Anualidades",
      annuitiesDesc: "Crea una estrategia de ingresos de jubilación fiscalmente eficiente con soluciones personalizadas que pueden incluir anualidades, reinversiones y planes de ingresos a largo plazo.",
      annuitiesBadge: "Ingresos de Retiro",
      annuitiesCta: "Explorar Opciones de Anualidades",
      popular: "Más Popular",
      cta: "💼 Ver Mis Opciones Personalizadas Ya",
    },
    allServices: {
      title: "Todos Nuestros Servicios",
      subtitle: "Soluciones de cobertura completas para cada etapa de tu vida. Pasa el cursor por encima para ver detalles de cómo te ayudamos.",
      groupLife: "Seguridad de Vida y Finanzas",
      groupHealth: "Salud y Bienestar",
      kidsSavings: "Planes de Ahorro para Niños y Universidad",
      kidsSavingsDesc: "Ahorros con crecimiento de valor en efectivo garantizado para financiar la carrera de tus hijos o pago inicial de casa.",
      finalExpenses: "Gastos Finales",
      finalExpensesDesc: "Garantiza paz mental para cubrir los costos finales de funeral, fosa y servicios administrativos sin deudas familiares.",
      mortgageProt: "Protección Hipotecaria",
      mortgageProtDesc: "Pólizas de seguro diseñadas específicamente para saldar la deuda de tu casa si llegas a faltar prematuramente.",
      accidental: "Planes Contra Accidentes",
      accidentalDesc: "Compensación monetaria directa al asegurado por lesiones, fracturas u hospitalizaciones debido a accidentes.",
      taxFreeRet: "Planes de Retiro Libres de Impuestos",
      taxFreeRetDesc: "Estructuras financieras autorizadas en EE.UU. que permiten retirar fondos ahorrados para jubilación de manera 100% tax-free.",
      rollover: "Traspaso de 401K / IRA (Rollover)",
      rolloverDesc: "Transfiere fondos de antiguos empleos sin penalidades e impuestos a productos seguros e inmunes a caídas de bolsa.",
      annuities: "Anualidades",
      annuitiesDesc: "Garantiza un flujo de ingresos que no se devaluará y que dura el resto de tu vida para un retiro completamente estable.",
      obamacare: "Obamacare (ACA)",
      obamacareDescWeb: "Seguro médico de salud con subsidio federal para individuos y familias. Obtén cobertura premium desde $0 al mes.",
      dentalVision: "Seguro Dental y de Visión",
      dentalVisionDesc: "Pólizas integradas para cuidar sonrisa y visión, abarcando consultas preventivas, lentes, y cirugías.",
      hospitalInd: "Planes de Indemnización Hospitalaria",
      hospitalIndDesc: "Protección que le paga efectivo directo para complementar su plan médico y saldar deducibles en emergencias o cirugías.",
      medicare: "Medicare",
      medicareDescWeb: "Ayuda imparcial para elegir Medicare Parte A, B, Parte D de medicinas, Planes de Ventaja (C) y Suplementarios (Medigap).",
      privateHealth: "Planes de Salud Privados",
      privateHealthDesc: "Opciones premium para independientes con amplia red de médicos privados en Florida.",
    },
    whyChoose: {
      title: "Por Qué las Familias Confían en Mary Rivera",
      serviceTitle: "Servicio Personalizado",
      serviceDesc: "Cada plan está adaptado a tu situación familiar, presupuestos de gasto actuales y metas reales a mediano plazo.",
      bilingualTitle: "Soporte Bilingüe",
      bilingualDesc: "Te ayudamos con total sencillez en inglés o español. Explicamos cada cláusula pacientemente y en tu propio idioma.",
      guidanceTitle: "Orientación Experta",
      guidanceDesc: "Tomarás decisiones respaldadas por más de 4 años de impecable trayectoria trabajando con las mayores aseguradoras de EE.UU.",
      coverageTitle: "Cobertura Confiable",
      coverageDesc: "Tranquilidad total con aseguradoras de máxima calificación (A+ Rating) protegiendo el porvenir de quienes amas.",
    },
    about: {
      titleLabel: "Mary Rivera · Asesora de Seguros",
      bio: "Con 4 años de experiencia y un compromiso absoluto con la honestidad, Eversafe Financial se dedica a brindar soluciones de seguros personalizadas que protegen lo que verdaderamente importa. Apoyándonos en una sólida trayectoria en la industria de seguros, empoderamos a nuestros clientes con las mejores decisiones, asegurando una cobertura integral que se adapta tanto a las necesidades de hoy como a las aspiraciones de retiro familiar de mañana. Nuestro enfoque combina solidez profesional con pasión genuina para ayudar a asegurar un mañana de máxima paz.",
      cta: "⭐ Ahorrar Dinero y Crear Riqueza Hoy",
      badge: "Asesora de Seguros Autorizada • Florida",
    },
    iulExplainer: {
      title: "Por Qué el IUL Es la Decisión Inteligente",
      colSavingsTitle: "Cuentas de Ahorro Tradicionales",
      colSavingsDesc: "Bajísimo interés real que no vence al aumento de costo de vida, 100% de gravamen impositivo cada año y nula protección por fallecimiento.",
      col401kTitle: "Planes 401K Tradicionales",
      col401kDesc: "Completa exposición a desplomes imprevistos en la bolsa de valores, altas tarifas administrativas de fondos y penalización si requieres usar tu dinero antes de tiempo.",
      colIulTitle: "IUL (Index Universal Life)",
      colIulDesc: "Capital compuesto ligado a los índices alcistas del S&P 500 con piso de seguridad al 0% (nunca pierdes capital original), retiros libres del cobro de tasas de impuestos y seguro de vida inmediato.",
      cta: "Descubre Si Calificas para IUL",
    },
    contactForm: {
      title: "Recibe Asesoría Profesional y Opciones Hechas a Tu Medida Hoy",
      subtitle: "Completa este sencillo formulario para recibir una propuesta a la medida, elaborada personalmente por Mary Rivera.",
      nameLabel: "Tu Nombre Completo",
      emailLabel: "Tu Correo Electrónico",
      phoneLabel: "Número Telefónico",
      messageLabel: "¿Cómo Puedo Ayudarle?",
      placeholderMessage: "Cuéntame tus dudas o necesidades particulares aquí...",
      consentText: "Al marcar esta casilla, autorizo recibir mensajes y comunicaciones profesionales con respecto a mi propuesta de seguros.",
      btnSubmit: "🛡️ Asegurar el Futuro de Mi Familia Hoy",
      successTitle: "📩 ¡Solicitud de Cotización Enviada!",
      successDesc: "¡Muchas gracias! Mary Rivera ya tiene tus datos y está revisando las tasas vigentes. Te contactará en menos de 24 horas hábiles.",
      errName: "Por favor, escribe tu nombre completo (mínimo 3 letras).",
      errEmail: "Por favor, ingresa una dirección de correo válida.",
      errPhone: "Por favor, introduce un teléfono de 10 dígitos.",
      errConsent: "Debe aceptar el consentimiento para procesar la cotización.",
      hoursTitle: "Horario de Atención",
      hoursWeek: "Lunes – Viernes: 9:00 AM – 6:00 PM",
      hoursSat: "Sábado: 10:00 AM – 2:00 PM",
      hoursSun: "Domingo: Cerrado",
      areaLabel: "Zonificación de Servicio",
      areaValue: "Florida y otros estados de la Unión Americana",
      bilingualHelp: "Te Puedo Ayudar en Español",
    },
    footer: {
      about: "Asegura el futuro financiero de tu familia con las soluciones personalizadas de seguro junto a Mary Rivera. Coberturas de Vida, Salud y Retiros estables bajo guía experta.",
      contactUs: "Contáctanos",
      hours: "Horario de Oficina",
      bilingual: "Te Puedo Ayudar en Español • We Also Speak English",
      rights: "© 2026 Eversafe Financial LLC. Todos los derechos reservados. Eversafe Financial es la firma independiente de la asesora Mary Rivera.",
    },
    whoWeHelp: {
      title: "A Quiénes Ayudamos",
      subtitle: "Ayudamos a individuos, familias y dueños de negocios en Florida a navegar su camino de protección financiera.",
      items: [
        "Familias que buscan un seguro de vida para proteger a sus seres queridos de la incertidumbre.",
        "Individuos que comparan opciones de Medicare Advantage, Suplementación y Parte D.",
        "Clientes que exploran planes de salud de Obamacare (ACA) para cobertura médica subsidiada.",
        "Personas que planifican su jubilación con crecimiento seguro y estrategias de retiros libres de impuestos.",
        "Hogares bilingües que necesitan asistencia profesional dedicada tanto en inglés como en español."
      ]
    },
    whyContactUs: {
      title: "Por Qué Nos Contactan los Clientes",
      items: [
        "Para recibir comparaciones directas e independientes de las aseguradoras con clasificación A+ más grandes del país.",
        "Para diseñar planes de acumulación de retiro a la medida utilizando Index Universal Life (IUL).",
        "Para transferir cuentas antiguas (Rollover de 401k/IRA) sin penalidades ni riesgos de caída.",
        "Para obtener revisiones de pólizas claras y honestas, con absoluta ausencia de tácticas de presión de venta."
      ]
    },
    faq: {
      title: "Preguntas Frecuentes",
      items: [
        {
          q: "¿Con qué tipos de seguros ayuda Eversafe Financial?",
          a: "Ayudamos a los clientes a comparar seguros de vida, planes de Medicare, opciones de ACA (Obamacare), estrategias de jubilación y soluciones de protección financiera familiar."
        },
        {
          q: "¿Ofrecen servicio en español?",
          a: "Sí. Eversafe Financial ofrece soporte bilingüe completo en inglés y español."
        },
        {
          q: "¿Cómo sé cuál plan es el adecuado para mí?",
          a: "El plan adecuado depende de su edad, situación familiar, presupuesto, necesidades de salud y metas a largo plazo. Le ayudamos a comparar opciones con total claridad."
        },
        {
          q: "¿La cotización es realmente gratis?",
          a: "Sí. Su solicitud de cotización es totalmente gratuita y no tiene ningún compromiso."
        },
        {
          q: "¿Trabajan con familias e individuos?",
          a: "Sí. Trabajamos con individuos, familias y personas que planifican su jubilación o buscan protección financiera a largo plazo."
        },
        {
          q: "¿Qué tan rápido se pondrán en contacto conmigo?",
          a: "Después de que envíe sus datos, un asesor autorizado los revisará y se comunicará con usted lo antes posible."
        }
      ]
    },
  },
};
