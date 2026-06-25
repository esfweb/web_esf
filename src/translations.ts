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
    eyebrow: string;
    title: string;
    subtitle: string;
    step: string;
    next: string;
    prev: string;
    checking: string;
    q1Title: string;
    q1Opt1: string;
    q1Opt2: string;
    q1Opt3: string;
    q1Opt4: string;
    q1Opt5: string;
    q1Opt6: string;
    q2Title: string;
    q2Opt1: string;
    q2Opt2: string;
    q2Opt3: string;
    q2Opt4: string;
    q2Opt5: string;
    q2Opt6: string;
    q3Title: string;
    q3Opt1: string;
    q3Opt2: string;
    q3Opt3: string;
    q3Opt4: string;
    q3Opt5: string;
    resultTitle: string;
    resultDesc: string;
    resultCta: string;
    resultBack: string;
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
    iulBullets: string[];
    obamacareTitle: string;
    obamacareDesc: string;
    obamacareBullets: string[];
    obamacareCta: string;
    medicareTitle: string;
    medicareDesc: string;
    medicareBullets: string[];
    medicareCta: string;
    privateHealthTitle: string;
    privateHealthDesc: string;
    privateHealthBullets: string[];
    privateHealthCta: string;
    dentalVisionTitle: string;
    dentalVisionDesc: string;
    dentalVisionBullets: string[];
    dentalVisionCta: string;
    finalExpensesTitle: string;
    finalExpensesDesc: string;
    finalExpensesBullets: string[];
    finalExpensesCta: string;
    popular: string;
    cta: string;
  };
  whoWeAre: {
    title: string;
    subtitle: string;
    missionTitle: string;
    missionDesc: string;
    visionTitle: string;
    visionDesc: string;
    valuesTitle: string;
    values: { title: string; desc: string }[];
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
    emailTitle: string;
    phoneTitle: string;
    directEmailTitle: string;
    bilingualPhoneTitle: string;
    companyDisclosuresLabel: string;
    companyDisclosuresValue: string;
    whatsappTitle: string;
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
    subtitle: string;
    items: string[];
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  partners: {
    label: string;
    title: string;
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
      title: "Your Health & Financial Protection, Made Simple",
      subtitle: "From custom health coverage like Obamacare and Medicare to long-term protection, savings, and retirement strategies like IUL. Expert, bilingual guidance tailored to you.",
      ctaPhone: "Talk to Mary: 727-359-6196",
      ctaIUL: "💡 Why IUL Is Better",
      badge: "✅ 4+ Years of Experience  ·  ✅ Licensed in Florida & other states  ·  ✅ Bilingual Service (EN/ES)",
    },
    quiz: {
      eyebrow: "HEALTH COVERAGE",
      title: "Discover which health coverage option fits you best",
      subtitle: "Answer 3 quick questions",
      step: "Step",
      next: "Next →",
      prev: "← Back",
      checking: "Analyzing your profile...",
      q1Title: "What type of coverage are you looking for?",
      q1Opt1: "Obamacare / ACA",
      q1Opt2: "Medicare",
      q1Opt3: "Private health plan",
      q1Opt4: "Dental & vision",
      q1Opt5: "Hospitalization or accidents",
      q1Opt6: "I'm not sure, I need guidance",
      q2Title: "What is your current situation?",
      q2Opt1: "I don't have health insurance",
      q2Opt2: "I have insurance, but I want to look for better options",
      q2Opt3: "I'm about to turn 65 or already have Medicare",
      q2Opt4: "I don't qualify for Marketplace subsidies",
      q2Opt5: "I'm looking for additional coverage to complement my current plan",
      q2Opt6: "I'm not sure",
      q3Title: "Who do you need coverage for?",
      q3Opt1: "Only for me",
      q3Opt2: "For my partner",
      q3Opt3: "For my children",
      q3Opt4: "For my family",
      q3Opt5: "For an older adult",
      resultTitle: "Options could be available for you",
      resultDesc: "Depending on your situation, age, need, and eligibility, you could have different coverage alternatives. Complete your details and a licensed advisor will review your options and contact you as soon as possible.",
      resultCta: "Continue with my quote",
      resultBack: "Review answers",
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
      iulBullets: [
        "0% Floor Guarantee - protect your cash value from market drops.",
        "Tax-Free Retirement Income through strategic policy loans.",
        "No IRS contribution caps & penalty-free access at any age."
      ],
      obamacareTitle: "ACA / Obamacare Health Plans",
      obamacareDesc: "We help you compare Marketplace plans with potential federal subsidies based on your income, household size, and state. An ideal option for individuals and families looking for accessible medical coverage, essential benefits, preventive services, and protection without exclusions for pre-existing conditions.",
      obamacareBullets: [
        "Possible premiums from $0 if you qualify",
        "Subsidies based on income and household size",
        "Coverage for pre-existing conditions",
        "Preventive services included depending on the plan",
        "Help with enrollment, renewals, and Marketplace documents"
      ],
      obamacareCta: "See if I qualify for a subsidy",
      medicareTitle: "Medicare Plans",
      medicareDesc: "Personalized guidance for people approaching age 65, already enrolled in Medicare, or wanting to review their current coverage. We help you compare Medicare Advantage, Part D, supplements, and additional benefits based on your doctors, medications, budget, and health needs.",
      medicareBullets: [
        "Review of Part A, Part B, Part C, and Part D",
        "Comparison of Medicare Advantage and supplemental plans",
        "Help with doctors, medications, and pharmacies",
        "Annual review of benefits"
      ],
      medicareCta: "Review my Medicare options",
      privateHealthTitle: "Private Health Plans",
      privateHealthDesc: "We compare private coverage options for individuals, families, or business owners who do not qualify for subsidies, want alternatives outside the Marketplace, or need a more flexible solution for their situation. We review benefits, provider networks, costs, and requirements before recommending an option.",
      privateHealthBullets: [
        "Alternatives outside the Marketplace",
        "Options based on state, age, and need",
        "Comparison of networks and benefits",
        "Ideal for those who do not qualify for subsidies"
      ],
      privateHealthCta: "Compare private plans",
      dentalVisionTitle: "Dental, Vision & Supplemental Plans",
      dentalVisionDesc: "Complement your medical coverage with benefits designed to help with dental expenses, vision care, hospitalization, accidents, or unexpected costs. These plans can provide additional support to protect your family budget.",
      dentalVisionBullets: [
        "Dental and vision insurance",
        "Hospital indemnity plans",
        "Protection against unexpected expenses",
        "Complements your main insurance",
        "Options for individuals and families"
      ],
      dentalVisionCta: "Explore supplemental benefits",
      finalExpensesTitle: "Final Expenses & Annuities",
      finalExpensesDesc: "We help protect your loved ones from unexpected costs and design retirement income options using specialized final expense and annuity solutions tailored to your unique needs.",
      finalExpensesBullets: [
        "Final expense protection",
        "Annuities for retirement growth",
        "Family and lifestyle shielding",
        "Guaranteed retirement income"
      ],
      finalExpensesCta: "Compare final expense options",
      popular: "Most Popular",
      cta: "💼 Get Personalized Options Now",
    },
    whoWeAre: {
      title: "Who We Are",
      subtitle: "At Eversafe Financial, our purpose is to provide clarity, stability, and peace of mind through every stage of your life's journey.",
      missionTitle: "Our Mission",
      missionDesc: "Our mission is to guide families and individuals in protecting their health, lives, and financial future through personalized solutions in health insurance, life insurance, savings, and retirement. At Eversafe Financial, we provide clear, bilingual, and honest guidance to help every client make informed decisions with confidence and peace of mind.",
      visionTitle: "Our Vision",
      visionDesc: "To be a leading and trusted insurance and financial protection agency, recognized for providing clear guidance, personalized solutions, and bilingual support to families in Florida and other states, with a vision of growth and service nationwide.",
      valuesTitle: "Our Values",
      values: [
        {
          title: "Clarity",
          desc: "Explaining each option in a simple, transparent, and easy-to-understand manner, so that the client can make informed decisions."
        },
        {
          title: "Integrity",
          desc: "Recommending solutions based on the client's real need, maintaining honest and responsible communication."
        },
        {
          title: "Personalized Protection",
          desc: "Offering alternatives tailored to the family, medical, financial, and life situation of each individual."
        },
        {
          title: "Ongoing Support",
          desc: "Providing support before, during, and after the process, creating a long-term relationship of trust with each client."
        }
      ],
    },
    allServices: {
      title: "All Services We Offer",
      subtitle: "Complete coverage solutions for every stage of life.",
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
      emailTitle: "Email Address",
      phoneTitle: "Bilingual Phone Service",
      directEmailTitle: "Direct Agency Email",
      bilingualPhoneTitle: "Bilingual Phone",
      companyDisclosuresLabel: "Company Disclosures:",
      companyDisclosuresValue: "Eversafe Financial LLC is a legally registered Limited Liability Company in Pinellas Park, Florida 33782. Formed on October 12, 2023. Backed by licensed agent Mary Rivera. All products subject to underwriting guidelines.",
      whatsappTitle: "Start WhatsApp Conversation",
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
      subtitle: "Real solutions built on transparency, security, and proven coverage metrics.",
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
          a: "We help clients with health insurance, life insurance, private plans, dental, vision, hospital indemnity, mortgage protection, final expenses, children's savings plans, IUL, annuities, and 401(k) / IRA rollovers. Our focus is to help you find a solution that fits your life stage, budget, and family goals."
        },
        {
          q: "Do you offer service in Spanish?",
          a: "Yes. We provide bilingual guidance in English and Spanish so you can clearly understand your options and make informed decisions with confidence."
        },
        {
          q: "How do I know which plan is right for me?",
          a: "We review your state, age, income, budget, health needs, family situation, and protection goals. Then we compare available options and explain which one might best fit your situation."
        },
        {
          q: "Is the quote really free?",
          a: "Yes. Requesting a quote is free and with no obligation. Our goal is to guide you, compare options, and help you make an informed decision."
        },
        {
          q: "Who does Eversafe Financial help?",
          a: "We help individuals and families who want to protect their health, their lives, and their financial future. We also guide those looking to plan their retirement or build long-term financial protection."
        },
        {
          q: "What happens after I submit my information?",
          a: "After you submit your details, a licensed advisor will review your information and contact you as soon as possible to better understand your situation and explain the available options."
        },
        {
          q: "What are supplemental plans?",
          a: "They are plans that complement your main coverage. They can include dental, vision, hospital indemnity, accidents, or other benefits that help cover additional expenses."
        },
        {
          q: "What is an IUL?",
          a: "An IUL, or Indexed Universal Life, is a permanent life insurance policy that can offer death benefit protection and cash value accumulation tied to an index. It should be evaluated based on your age, health, budget, and goals."
        },
        {
          q: "What are annuities?",
          a: "Annuities are insurance products that can help create retirement income or protect a portion of your savings, depending on the type of contract. It is important to review them based on your goals, liquidity, and time horizon."
        },
        {
          q: "Can I roll over an old 401(k) or IRA?",
          a: "Yes. We can help you review options for a 401(k) or IRA rollover, considering your retirement goals, protection, liquidity, fees, and beneficiaries."
        }
      ]
    },
    partners: {
      label: "Our Partner Carriers",
      title: "We work with the leading insurance carriers"
    },
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
      cta: "Cotización gratis",
    },
    hero: {
      title: "Protección financiera y de salud hecha para ti",
      subtitle: "Desde coberturas de salud como Obamacare y Medicare hasta estrategias de protección, ahorro y retiro a largo plazo como IUL. Guía experta y bilingüe a tu medida.",
      ctaPhone: "Hablar con Mary: (727) 359-6196",
      ctaIUL: "💡 Por qué IUL es mejor",
      badge: "✅ 4+ años de experiencia  ·  ✅ Licencia en Florida y otros estados  ·  ✅ Servicio bilingüe (EN/ES)",
    },
    quiz: {
      eyebrow: "Cobertura de salud",
      title: "Descubre qué opción de cobertura puede ajustarse mejor a ti",
      subtitle: "Responde 3 preguntas rápidas",
      step: "Paso",
      next: "Siguiente →",
      prev: "← Atrás",
      checking: "Analizando tu perfil...",
      q1Title: "¿Qué tipo de cobertura estás buscando?",
      q1Opt1: "Obamacare / ACA",
      q1Opt2: "Medicare",
      q1Opt3: "Plan privado de salud",
      q1Opt4: "Dental y visión",
      q1Opt5: "Hospitalización o accidentes",
      q1Opt6: "No estoy seguro/a, necesito orientación",
      q2Title: "¿Cuál es tu situación actual?",
      q2Opt1: "No tengo seguro médico",
      q2Opt2: "Tengo seguro, pero quiero revisar mejores opciones",
      q2Opt3: "Estoy por cumplir 65 años o ya tengo Medicare",
      q2Opt4: "No califico para subsidios del Marketplace",
      q2Opt5: "Busco cobertura adicional para complementar mi plan actual",
      q2Opt6: "No estoy seguro/a",
      q3Title: "¿Para quién necesitas cobertura?",
      q3Opt1: "Solo para mí",
      q3Opt2: "Para mi pareja",
      q3Opt3: "Para mis hijos",
      q3Opt4: "Para mi familia",
      q3Opt5: "Para un adulto mayor",
      resultTitle: "Podrías tener opciones disponibles para ti",
      resultDesc: "Según tu situación, edad, necesidad y elegibilidad, podrías tener distintas alternativas de cobertura. Completa tus datos y un asesor autorizado revisará tus opciones y se comunicará contigo lo antes posible.",
      resultCta: "Continuar con mi cotización",
      resultBack: "Volver a revisar respuestas",
    },
    stats: {
      years: { num: "4+", label: "Años de experiencia" },
      families: { num: "500+", label: "Familias protegidas" },
      products: { num: "7+", label: "Productos disponibles" },
      states: { num: "10+", label: "Estados autorizados" },
    },
    core: {
      title: "Servicios principales",
      subtitle: "Protege tu futuro con estrategias diseñadas para tu familia hoy y para las generaciones venideras.",
      iulTitle: "Index Universal Life (IUL)",
      iulDesc: "Construye protección de por vida con crecimiento de valor en efectivo vinculado a índices de mercado, con flexibilidad para planificación de retiro y beneficios libres de impuestos.",
      iulBullets: [
        "Garantía de piso del 0% contra caídas del mercado.",
        "Ingresos de jubilación 100% libres de impuestos mediante préstamos.",
        "Sin límites estrictos de aportación y retiros libres de penalización."
      ],
      obamacareTitle: "Planes de salud ACA / Obamacare",
      obamacareDesc: "Te ayudamos a comparar planes del Marketplace con posibilidad de subsidios federales según tu ingreso, hogar y estado. Una opción ideal para personas y familias que buscan cobertura médica accesible, beneficios esenciales, servicios preventivos y protección sin exclusiones por condiciones preexistentes.",
      obamacareBullets: [
        "Posibilidad de primas desde $0 si calificas",
        "Subsidios según ingreso y tamaño del hogar",
        "Cobertura para condiciones preexistentes",
        "Servicios preventivos incluidos según el plan",
        "Ayuda con inscripción, renovación y documentos del Marketplace"
      ],
      obamacareCta: "Ver si califico para subsidio",
      medicareTitle: "Planes de Medicare",
      medicareDesc: "Orientación personalizada para personas que están por cumplir 65 años, ya tienen Medicare o desean revisar su cobertura actual. Te ayudamos a comparar Medicare Advantage, Parte D, suplementos y beneficios adicionales según tus médicos, medicamentos, presupuesto y necesidades de salud.",
      medicareBullets: [
        "Revisión de Parte A, Parte B, Parte C y Parte D",
        "Comparación de Medicare Advantage y planes suplementarios",
        "Ayuda con doctores, medicamentos y farmacias",
        "Revisión anual de beneficios"
      ],
      medicareCta: "Revisar mis opciones de Medicare",
      privateHealthTitle: "Planes privados de salud",
      privateHealthDesc: "Comparamos opciones de cobertura privada para personas, familias o dueños de negocio que no califican para subsidios, desean alternativas fuera del Marketplace o necesitan una solución más flexible según su situación. Revisamos beneficios, red médica, costos y requisitos antes de recomendar una opción.",
      privateHealthBullets: [
        "Alternativas fuera del Marketplace",
        "Opciones según estado, edad and necesidad",
        "Comparación de redes y beneficios",
        "Ideal para quienes no califican a subsidios"
      ],
      privateHealthCta: "Comparar planes privados",
      dentalVisionTitle: "Dental, visión y planes suplementarios",
      dentalVisionDesc: "Complementa tu cobertura médica con beneficios diseñados para ayudarte con gastos dentales, cuidado visual, hospitalización, accidentes o costos inesperados. Estos planes pueden brindar apoyo adicional para proteger tu presupuesto familiar.",
      dentalVisionBullets: [
        "Seguro dental y de visión",
        "Planes de indemnización hospitalaria",
        "Protección ante gastos inesperados",
        "Complemento para tu seguro principal",
        "Opciones para individuos y familias"
      ],
      dentalVisionCta: "Explorar beneficios suplementarios",
      finalExpensesTitle: "Gastos finales y anualidades",
      finalExpensesDesc: "Ayudamos a proteger a tus seres queridos de gastos inesperados y a planificar opciones de ingreso para el retiro mediante soluciones de gastos finales y anualidades según tu necesidad.",
      finalExpensesBullets: [
        "Gastos finales",
        "Anualidades",
        "Protección familiar",
        "Ingresos de retiro"
      ],
      finalExpensesCta: "Comparar gastos finales",
      popular: "Más popular",
      cta: "💼 Ver mis opciones personalizadas ya",
    },
    whoWeAre: {
      title: "Quiénes somos",
      subtitle: "En Eversafe Financial, nuestro propósito es brindar claridad, estabilidad y tranquilidad en cada etapa del camino de tu vida.",
      missionTitle: "Misión",
      missionDesc: "Nuestra misión es guiar a familias e individuos a proteger su salud, su vida y su futuro financiero mediante soluciones personalizadas en seguros de salud, seguros de vida, ahorro y retiro. En Eversafe Financial, brindamos una orientación clara, bilingüe y honesta para ayudar a cada cliente a tomar decisiones informadas con confianza y tranquilidad.",
      visionTitle: "Visión",
      visionDesc: "Ser una agencia líder y de confianza en seguros y protección financiera, reconocida por brindar orientación clara, soluciones personalizadas y acompañamiento bilingüe a familias en Florida y otros estados, con proyección de crecimiento y servicio a nivel nacional.",
      valuesTitle: "Valores",
      values: [
        {
          title: "Claridad",
          desc: "Explicar cada opción de manera sencilla, transparente y fácil de entender, para que el cliente pueda tomar decisiones informadas."
        },
        {
          title: "Integridad",
          desc: "Recomendar soluciones basadas en la necesidad real del cliente, manteniendo una comunicación honesta y responsable."
        },
        {
          title: "Protección personalizada",
          desc: "Ofrecer alternativas adaptadas a la situación familiar, médica, financiera y de vida de cada persona."
        },
        {
          title: "Acompañamiento",
          desc: "Brindar apoyo antes, durante y después del proceso, creando una relación de confianza a largo plazo con cada cliente."
        }
      ],
    },
    allServices: {
      title: "Todos nuestros servicios",
      subtitle: "Soluciones de cobertura completas para cada etapa de tu vida.",
      groupLife: "Seguridad de vida y finanzas",
      groupHealth: "Salud y bienestar",
      kidsSavings: "Planes de ahorro para niños y universidad",
      kidsSavingsDesc: "Ahorros con crecimiento de valor en efectivo garantizado para financiar la carrera de tus hijos o pago inicial de casa.",
      finalExpenses: "Gastos finales",
      finalExpensesDesc: "Garantiza paz mental para cubrir los costos finales de funeral, fosa y servicios administrativos sin deudas familiares.",
      mortgageProt: "Protección hipotecaria",
      mortgageProtDesc: "Pólizas de seguro diseñadas específicamente para saldar la deuda de tu casa si llegas a faltar prematuramente.",
      accidental: "Planes contra accidentes",
      accidentalDesc: "Compensación monetaria directa al asegurado por lesiones, fracturas u hospitalizaciones debido a accidentes.",
      taxFreeRet: "Planes de retiro libres de impuestos",
      taxFreeRetDesc: "Estructuras financieras autorizadas en EE.UU. que permiten retirar fondos ahorrados para jubilación de manera 100% tax-free.",
      rollover: "Traspaso de 401K / IRA (rollover)",
      rolloverDesc: "Transfiere fondos de antiguos empleos sin penalidades e impuestos a productos seguros e inmunes a caídas de bolsa.",
      annuities: "Anualidades",
      annuitiesDesc: "Garantiza un flujo de ingresos que no se devaluará y que dura el resto de tu vida para un retiro completamente estable.",
      obamacare: "Obamacare (ACA)",
      obamacareDescWeb: "Seguro médico de salud con subsidio federal para individuos y familias. Obtén cobertura premium desde $0 al mes.",
      dentalVision: "Seguro dental y de visión",
      dentalVisionDesc: "Pólizas integradas para cuidar sonrisa y visión, abarcando consultas preventivas, lentes, y cirugías.",
      hospitalInd: "Planes de indemnización hospitalaria",
      hospitalIndDesc: "Protección que le paga efectivo directo para complementar su plan médico y saldar deducibles en emergencias o cirugías.",
      medicare: "Medicare",
      medicareDescWeb: "Ayuda imparcial para elegir Medicare Parte A, B, Parte D de medicinas, planes de ventaja (C) y suplementarios (Medigap).",
      privateHealth: "Planes de salud privados",
      privateHealthDesc: "Opciones premium para independientes con amplia red de médicos privados en Florida.",
    },
    whyChoose: {
      title: "Por qué las familias confían en Mary Rivera",
      serviceTitle: "Servicio personalizado",
      serviceDesc: "Cada plan está adaptado a tu situación familiar, presupuestos de gasto actuales y metas reales a mediano plazo.",
      bilingualTitle: "Soporte bilingüe",
      bilingualDesc: "Te ayudamos con total sencillez en inglés o español. Explicamos cada cláusula pacientemente y en tu propio idioma.",
      guidanceTitle: "Orientación experta",
      guidanceDesc: "Tomarás decisiones respaldadas por más de 4 años de impecable trayectoria trabajando con las mayores aseguradoras de EE.UU.",
      coverageTitle: "Cobertura confiable",
      coverageDesc: "Opciones con aseguradoras reconocidas y altamente calificadas, para ayudarte a proteger a tu familia con mayor tranquilidad.",
    },
    about: {
      titleLabel: "Mary Rivera · Asesora de seguros",
      bio: "Con 4 años de experiencia y un compromiso absoluto con la honestidad, Eversafe Financial se dedica a brindar soluciones de seguros personalizadas que protegen lo que verdaderamente importa. Apoyándonos en una sólida trayectoria en la industria de seguros, empoderamos a nuestros clientes con las mejores decisiones, asegurando una cobertura integral que se adapta tanto a las necesidades de hoy como a las aspiraciones de retiro familiar de mañana. Nuestro enfoque combina solidez profesional con pasión genuina para ayudar a asegurar un mañana de máxima paz.",
      cta: "⭐ Ahorrar dinero y crear riqueza hoy",
      badge: "Asesora de seguros autorizada • Florida",
    },
    iulExplainer: {
      title: "Por qué el IUL es la decisión inteligente",
      colSavingsTitle: "Cuentas de ahorro tradicionales",
      colSavingsDesc: "Bajísimo interés real que no vence al aumento de costo de vida, 100% de gravamen impositivo cada año y nula protección por fallecimiento.",
      col401kTitle: "Planes 401K tradicionales",
      col401kDesc: "Completa exposición a desplomes imprevistos en la bolsa de valores, altas tarifas administrativas de fondos y penalización si requieres usar tu dinero antes de tiempo.",
      colIulTitle: "IUL (Index Universal Life)",
      colIulDesc: "Capital compuesto ligado a los índices alcistas del S&P 500 con piso de seguridad al 0% (nunca pierdes capital original), retiros libres del cobro de tasas de impuestos y seguro de vida inmediato.",
      cta: "Descubre si calificas para IUL",
    },
    contactForm: {
      title: "Recibe asesoría profesional y opciones hechas a tu medida hoy",
      subtitle: "Completa este sencillo formulario para recibir una propuesta a la medida, elaborada personalmente por Mary Rivera.",
      nameLabel: "Tu nombre completo",
      emailLabel: "Tu correo electrónico",
      phoneLabel: "Número telefónico",
      messageLabel: "¿Cómo puedo ayudarle?",
      placeholderMessage: "Cuéntame tus dudas o necesidades particulares aquí...",
      consentText: "Al marcar esta casilla, autorizo recibir mensajes y comunicaciones profesionales con respecto a mi propuesta de seguros.",
      btnSubmit: "🛡️ Asegurar el futuro de mi familia hoy",
      successTitle: "📩 ¡Solicitud de cotización enviada!",
      successDesc: "¡Muchas gracias! Mary Rivera ya tiene tus datos y está revisando las tasas vigentes. Te contactará en menos de 24 horas hábiles.",
      errName: "Por favor, escribe tu nombre completo (mínimo 3 letras).",
      errEmail: "Por favor, ingresa una dirección de correo válida.",
      errPhone: "Por favor, introduce un teléfono de 10 dígitos.",
      errConsent: "Debe aceptar el consentimiento para procesar la cotización.",
      hoursTitle: "Horario de atención",
      hoursWeek: "Lunes – viernes: 9:00 AM – 6:00 PM",
      hoursSat: "Sábado: 10:00 AM – 2:00 PM",
      hoursSun: "Domingo: cerrado",
      areaLabel: "Áreas de servicio",
      areaValue: "Florida y otros estados de EE. UU.",
      bilingualHelp: "Te puedo ayudar en español",
      emailTitle: "Correo electrónico",
      phoneTitle: "Servicio telefónico bilingüe",
      directEmailTitle: "Correo directo de la agencia",
      bilingualPhoneTitle: "Teléfono bilingüe",
      companyDisclosuresLabel: "Declaraciones de la compañía:",
      companyDisclosuresValue: "Eversafe Financial LLC es una compañía de responsabilidad limitada legalmente registrada en Pinellas Park, Florida 33782. Constituida el 12 de octubre de 2023. Respaldada por la agente licenciada Mary Rivera. Todos los productos están sujetos a pautas de suscripción.",
      whatsappTitle: "Iniciar conversación de WhatsApp",
    },
    footer: {
      about: "Asegura el futuro financiero de tu familia con las soluciones personalizadas de seguro junto a Mary Rivera. Coberturas de vida, salud y retiros estables bajo guía experta.",
      contactUs: "Contáctanos",
      hours: "Horario de oficina",
      bilingual: "Te puedo ayudar en español • We Also Speak English",
      rights: "© 2026 Eversafe Financial LLC. Todos los derechos reservados. Eversafe Financial es la firma independiente de la asesora Mary Rivera.",
    },
    whoWeHelp: {
      title: "A quiénes ayudamos",
      subtitle: "Ayudamos a familias e individuos en Florida y otros estados a encontrar soluciones de protección para su salud, su vida y su futuro financiero.",
      items: [
        "Familias que buscan un seguro de vida para proteger a sus seres queridos.",
        "Personas que comparan opciones de Medicare Advantage, suplementos y Parte D.",
        "Clientes que exploran planes de salud ACA / Obamacare con posibilidad de subsidios.",
        "Personas que desean planificar su retiro con estrategias de crecimiento y protección.",
        "Hogares bilingües que necesitan orientación profesional en inglés o español."
      ]
    },
    whyContactUs: {
      title: "Por qué nos contactan los clientes",
      subtitle: "Cada cliente llega con una necesidad distinta, pero con un mismo objetivo: encontrar una solución clara, confiable y adecuada para proteger lo que más valora.",
      items: [
        "Para comparar coberturas de salud, vida y beneficios suplementarios según su situación.",
        "Para entender sus opciones antes de elegir, cambiar o complementar un plan existente.",
        "Para proteger a su familia ante gastos médicos, gastos finales, pérdida de ingresos o necesidades futuras.",
        "Para prepararse para el retiro con estrategias de ahorro, protección y crecimiento, incluyendo IUL, anualidades y revisión de rollovers de 401(k) / IRA cuando aplica.",
        "Para recibir una orientación bilingüe y personalizada, con acompañamiento claro durante el proceso."
      ]
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          q: "¿Con qué tipos de seguros ayuda Eversafe Financial?",
          a: "Ayudamos a los clientes con seguros de salud, seguros de vida, planes privados, dental, visión, indemnización hospitalaria, protección hipotecaria, gastos finales, planes de ahorro para niños, IUL, anualidades y rollovers de 401(k) / IRA. Nuestro enfoque es ayudarte a encontrar una solución que se adapte a tu etapa de vida, presupuesto y metas familiares."
        },
        {
          q: "¿Ofrecen servicio en inglés?",
          a: "Sí. Brindamos orientación bilingüe en inglés y español para que puedas entender tus opciones con claridad y tomar decisiones informadas con confianza."
        },
        {
          q: "¿Cómo sé cuál plan es el adecuado para mí?",
          a: "Revisamos tu estado, edad, ingreso, presupuesto, necesidades de salud, situación familiar y objetivos de protección. Luego comparamos opciones disponibles y te explicamos cuál podría ajustarse mejor a tu situación."
        },
        {
          q: "¿La cotización es realmente gratis?",
          a: "Sí. La solicitud de cotización es gratuita y sin compromiso. Nuestro objetivo es orientarte, comparar opciones y ayudarte a tomar una decisión informada."
        },
        {
          q: "¿A quiénes ayuda Eversafe Financial?",
          a: "Ayudamos a individuos y familias que desean proteger su salud, su vida y su futuro financiero. También orientamos a quienes buscan planizar su jubilación o construir protección financiera a largo plazo."
        },
        {
          q: "¿Qué sucede después de enviar mi información?",
          a: "Después de enviar tus datos, un asesor autorizado revisará tu información y se comunicará contigo lo antes posible para conocer mejor tu situación y explicarte las opciones disponibles."
        },
        {
          q: "¿Qué son los planes suplementarios?",
          a: "Son planes que complementan tu cobertura principal. Pueden incluir dental, visión, indemnización hospitalaria, accidentes u otros beneficios que ayudan a cubrir gastos adicionales."
        },
        {
          q: "¿Qué es un IUL?",
          a: "Un IUL, o Indexed Universal Life, es un seguro de vida permanente que puede ofrecer protección por fallecimiento y acumulación de valor en efectivo vinculada a un índice. Debe evaluarse según tu edad, salud, presupuesto y objetivos."
        },
        {
          q: "¿Qué son las anualidades?",
          a: "Las anualidades son productos de seguro que pueden ayudar a crear ingresos de retiro o proteger parte de tus ahorros, dependiendo del tipo de contrato. Es importante revisarlas según tus metas, liquidez y horizonte de tiempo."
        },
        {
          q: "¿Puedo transferir un 401(k) o IRA antiguo?",
          a: "Sí. Podemos ayudarte a revisar opciones para un rollover de 401(k) o IRA, considerando tus objetivos de retiro, protección, liquidez, cargos y beneficiarios."
        }
      ]
    },
    partners: {
      label: "Compañías aliadas",
      title: "Trabajamos con las mejores aseguradoras del mercado"
    },
  },
};
