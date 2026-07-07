// All site content in English and Arabic
// Source: Group_Website.docx — client-provided final copy

export type Locale = 'en' | 'ar'

export interface Dict {
  nav: {
    home: string
    about: string
    companies: string
    valueChain: string
    sustainability: string
    news: string
    careers: string
    contact: string
    cta: string
    visitWebsite: string
  }
  hero: {
    eyebrow: string
    headline: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
    stat1Label: string
    stat1Value: string
    stat2Label: string
    stat2Value: string
    stat3Label: string
    stat3Value: string
  }
  whoWeAre: {
    eyebrow: string
    title: string
    intro: string
    companies: Array<{
      number: string
      name: string
      desc: string
      meta?: string
    }>
  }
  pillars: {
    integration: { title: string; body: string }
    sustainability: { title: string; body: string }
  }
  vision: {
    eyebrow: string
    headline: string
    body: string
  }
  storyTeaser: {
    eyebrow: string
    title: string
    body: string
    cta: string
  }
  careersTeaser: {
    eyebrow: string
    title: string
    body: string
    cta: string
    employees: Array<{ name: string; location: string }>
  }
  newsTeaser: {
    title: string
    cta: string
    empty: string
  }
  footer: {
    tagline: string
    hiringTitle: string
    hiringBody: string
    hiringCta: string
    quickLinks: string
    contactBlock: string
    rights: string
    terms: string
    privacy: string
  }
  pages: {
    about: {
      hero: { eyebrow: string; title: string; subtitle: string }
      intro: {
        eyebrow: string
        title: string
        paragraphs: string[]
        statBadge: string
        statBadgeLabel: string
      }
      integration: { title: string; body: string }
      whatDrivesUs: {
        eyebrow: string
        title: string
        intro: string
        values: string[]
      }
      visionMission: {
        eyebrow: string
        tagline: string
        visionLabel: string
        visionTitle: string
        visionBody: string
        missionLabel: string
        missionTitle: string
        missionBody: string
      }
      values: {
        eyebrow: string
        title: string
        items: Array<{ name: string; body: string }>
      }
      leadership: {
        eyebrow: string
        title: string
        p1: string
        p2: string
      }
    }
    companies: {
      hero: { title: string; subtitle: string }
      intro: { eyebrow: string; title: string }
      items: Array<{
        index: string
        name: string
        tagline: string
        body: string
        bullets: string[]
      }>
    }
    valueChain: {
      hero: { title: string; subtitle: string }
      approach: { eyebrow: string; title: string; body: string }
      farmToTable: { eyebrow: string; title: string; body: string; badge: string }
      model: {
        eyebrow: string
        title: string
        stages: Array<{ num: string; title: string; body: string }>
      }
      strength: {
        eyebrow: string
        title: string
        body: string
        stats: Array<{ value: string; label: string }>
      }
    }
    sustainability: {
      hero: { title: string; subtitle: string }
      intro: { eyebrow: string; title: string; body: string }
      pillars: Array<{
        title: string
        body: string
        bullets: string[]
      }>
      foundation: {
        eyebrow: string
        title: string
        body: string
        programs: string[]
      }
    }
    news: {
      hero: { title: string; subtitle: string }
      empty: string
      backToNews: string
      readTimeLabel: string
      moreStories: string
      notFound: string
    }
    careers: {
      hero: { title: string; subtitle: string }
      culture: {
        eyebrow: string
        title: string
        intro: string
        items: Array<{ title: string; body: string }>
      }
      positions: { eyebrow: string; title: string; empty: string }
      apply: {
        eyebrow: string
        title: string
        fields: { name: string; email: string; phone: string; cover: string; cv: string }
        cvHint: string
        cvUploaded: string
        captchaLabel: string
        captchaPlaceholder: string
        captchaError: string
        captchaSuccess: string
        captchaReset: string
        button: string
      }
    }
    contact: {
      hero: { title: string; subtitle: string }
      info: {
        officeLabel: string
        officeValue: string
        emailLabel: string
        emailValue: string
        email2Value: string
        phoneLabel: string
        phoneValue: string
        hotlineLabel: string
        hotlineValue: string
        hoursLabel: string
        hoursValue: string
      }
      form: {
        eyebrow: string
        title: string
        fields: { name: string; email: string; phone: string; subject: string; message: string }
        button: string
      }
      map: {
        eyebrow: string
        title: string
        body: string
        directions: string
      }
      global: {
        eyebrow: string
        title: string
        body: string
        marker: string
      }
    }
    terms: {
      hero: { title: string; subtitle: string }
      lastUpdated: string
      sections: Array<{ title: string; body: string[] }>
    }
    privacy: {
      hero: { title: string; subtitle: string }
      lastUpdated: string
      sections: Array<{ title: string; body: string[] }>
    }
    faq: {
      hero: { title: string; subtitle: string }
      groups: Array<{
        eyebrow: string
        items: Array<{ question: string; answer: string }>
      }>
      ctaTitle: string
      ctaBody: string
      ctaButton: string
    }
  }
}

const en: Dict = {
  nav: {
    home: 'Home',
    about: 'Our Story',
    companies: 'Our Companies',
    valueChain: 'Value Chain',
    sustainability: 'Sustainability',
    news: 'News',
    careers: 'Careers',
    contact: 'Contact Us',
    cta: 'Contact Us',
    visitWebsite: 'Visit Website',
  },
  hero: {
    eyebrow: 'Egypt · Integrated Agri-Food Group',
    headline: 'A Diverse Agri-Food Platform\nDriving Tomorrow’s Standards.',
    subtitle: 'We’re not only ready for tomorrow, we’re leading the way.',
    primaryCta: 'Discover Our Companies',
    secondaryCta: 'Our Story',
    stat1Label: 'Years of leadership',
    stat1Value: '40+',
    stat2Label: 'Business divisions',
    stat2Value: '5',
    stat3Label: 'Export markets',
    stat3Value: '50+',
  },
  whoWeAre: {
    eyebrow: 'Our Companies',
    title: 'Five Companies. One Integrated Ecosystem.',
    intro:
      'Built on decades of expertise, our businesses work together to strengthen food systems, support communities, and create sustainable value from farm to table.',
    companies: [
      {
        number: '01',
        name: 'Dakahlia Poultry',
        desc: 'Over 40 years of integrated, science-driven poultry production — from feed manufacturing to processing and veterinary services.',
        meta: '40+ Years of Leadership',
      },
      {
        number: '02',
        name: 'Dakahlia Agriculture',
        desc: 'Over 17,000 feddans of farmland, exporting premium produce to Europe, Russia, Asia, Latin America, and the GCC.',
      },
      {
        number: '03',
        name: 'Dakahlia Slaughterhouse',
        desc: 'Processing capacity of 8,000 birds per hour, delivering premium brands Temry, Al-Dar, and specialized poultry products.',
      },
      {
        number: '04',
        name: 'Shams Chemicals',
        desc: 'Agricultural inputs platform delivering fertilizers, crop protection, and veterinary products backed by global brand partnerships.',
      },
      {
        number: '05',
        name: 'Al Anani Foundation For Social Development',
        desc: 'The CSR arm dedicated to education, healthcare, and community empowerment across Egypt.',
      },
    ],
  },
  pillars: {
    integration: {
      title: 'Integration That Delivers',
      body:
        'Integration is not just how we operate — it is how we create value. By aligning our operations, we strengthen consistency, improve productivity, and build a system designed to adapt, scale, and remain resilient over time.',
    },
    sustainability: {
      title: 'Responsibility & Impact',
      body:
        'Through the Al Anani Foundation and our three sustainability pillars — People, Environment, and Community — we build lasting impact beyond our operations.',
    },
  },
  vision: {
    eyebrow: 'What Drives Us',
    headline: 'Building a leading integrated agri-food group.',
    body: 'Contributing to food security while operating with discipline and responsibility — guided by integrity, excellence, ownership, respect, and commitment to sustainable growth.',
  },
  storyTeaser: {
    eyebrow: 'Our Story',
    title: 'Homegrown. Integrated. Built for scale.',
    body:
      'Building on a robust foundation in the poultry sector, Dakahlia Group has evolved into a fully integrated agri-food platform, connecting every stage of the value chain within one coordinated system, supported by disciplined management and advanced operational infrastructure.',
    cta: 'Read Our Story',
  },
  careersTeaser: {
    eyebrow: 'Careers',
    title: 'Grow with Dakahlia Group',
    body:
      'We offer a professional, growth-oriented environment built on accountability, teamwork, and respect. We are committed to developing talent across our integrated agri-food businesses.',
    cta: 'View Careers',
    employees: [
      { name: 'Ahmed', location: 'Cairo, EG' },
      { name: 'Youssef', location: 'Wadi El Natroun, EG' },
      { name: 'Mona', location: 'Dakahlia, EG' },
    ],
  },
  newsTeaser: {
    title: 'Latest News',
    cta: 'View all news',
    empty: 'No news articles available at this time.',
  },
  footer: {
    tagline: 'A fully integrated agri-food platform built on 40 years of Egyptian excellence.',
    hiringTitle: 'We are hiring.',
    hiringBody: 'Explore opportunities across our businesses.',
    hiringCta: 'View Careers',
    quickLinks: 'Quick Links',
    contactBlock: 'Get in Touch',
    rights: '© DAKAHLIA GROUP 2026. ALL RIGHTS RESERVED',
    terms: 'Terms of Use',
    privacy: 'Privacy Policy',
  },
  pages: {
    about: {
      hero: {
        eyebrow: 'Our Story',
        title: 'Diverse Sectors.\nUnified Vision.\nLeading the Future.',
        subtitle: 'Leading the way toward a more sustainable future.',
      },
      intro: {
        eyebrow: 'Our Story',
        title: 'From 1981 to today',
        paragraphs: [
          'Every success story begins with a challenge. From the very beginning, we understood that true quality is not measured by the product alone, but by the ability to deliver it consistently and at the same high standard. That is why integration and control across every stage of production have been at the heart of our vision since day one. Our journey began in 1981 when the founders acquired their first broiler farm in the Nile Delta. With a clear vision of delivering consistent quality and ensuring reliable supply, the Group built on its deep expertise in feed production and animal health, investing in its own feed manufacturing and nutritional solutions to support flock performance and enhance product quality for both local and international markets.',
          'As demand grew, Dakahlia Group adopted a long-term expansion strategy focused on developing facilities, increasing production capacity, and investing in advanced technologies. Today, the Group operates one of the largest feed mills in Africa, helping establish its position as a leader in Egypt’s poultry and feed industries while building trusted partnerships with customers across Egypt and beyond for more than four decades.',
          'In 1997, Dakahlia Group set out with a clear vision: to establish a modern poultry processing facility that would support the growing needs of the Egyptian market while strengthening quality, food safety, and supply reliability. That vision took shape with the construction of Dakahlia Slaughterhouse in 2012 and the launch of its first production cycle in 2017. This investment represented a major step in completing the Group’s integrated production system and led to the creation of Temry, a poultry brand offering fresh, marinated, frozen, and fully cooked products. Today, Temry is a trusted name among consumers and a key driver of the Group’s continued growth in both local and international markets.',
          'In 1999, the Group expanded into agriculture with the establishment of Dakahlia Agricultural Development, driven by a clear vision to serve global markets. Starting with 700 feddans, the company now manages more than 20,000 feddans and exports premium Egyptian grapes, citrus, potatoes, dates, olives, and olive products to more than 50 countries worldwide.',
          'As the Group’s operations expanded, the need for specialized agricultural solutions led to the establishment of Shams Agricultural Chemicals in 2001. Initially created to support the Group’s agricultural and livestock operations, the company has grown into one of Egypt’s leading providers of fertilizers, crop protection products, and veterinary solutions, supported by partnerships with major international companies and long-standing customer relationships.',
          'Alongside its business growth, Dakahlia Group has remained committed to creating a positive social impact. This commitment led to the establishment of Al-Anani Foundation for Social Development, which drives the Group’s community initiatives in education, healthcare, and social development, creating meaningful and lasting impact beyond business operations.',
          'Today, backed by a strong and stable financial position, advanced facilities, and a team of more than 4,500 employees, Dakahlia Group continues to expand its presence across local and international markets, building on more than four decades of experience and trusted partnerships with customers and partners around the world.',
        ],
        statBadge: '40+ Years',
        statBadgeLabel: 'of excellence',
      },
      integration: {
        title: 'Integration That Delivers',
        body: 'Integration is not just how we operate — it is how we create value. By aligning our operations, we strengthen consistency, improve productivity, and build a system designed to adapt, scale, and remain resilient over time.',
      },
      whatDrivesUs: {
        eyebrow: 'Our Principles',
        title: 'What Drives Us',
        intro: 'Our ambition is to build a leading integrated agri-food group, one that contributes to food security while operating with discipline and responsibility. This is guided by a clear set of principles:',
        values: [
          'Integrity in every decision',
          'Excellence in execution',
          'Ownership of outcomes',
          'Respect for people and partnerships',
          'Commitment to sustainable growth',
        ],
      },
      visionMission: {
        eyebrow: 'Our Foundation',
        tagline: 'Two perspectives, one purpose.',
        visionLabel: 'Vision',
        visionTitle: 'Our Vision',
        visionBody:
          'To be a global leader in the agricultural and food sectors, a paragon of business excellence, and the first choice of our stakeholders.',
        missionLabel: 'Mission',
        missionTitle: 'Our Mission',
        missionBody:
          'Consistently provide superior agriculture and food products on a local and global scale, upholding our values at the core of every endeavor.',
      },
      values: {
        eyebrow: 'Our Values',
        title: 'The principles that guide us',
        items: [
          { name: 'Integrity', body: 'Integrity in every decision we make.' },
          { name: 'Excellence', body: 'Excellence in execution across all operations.' },
          { name: 'Ownership', body: 'Ownership of outcomes at every level.' },
          { name: 'Respect', body: 'Respect for people and partnerships.' },
          { name: 'Growth', body: 'Commitment to growth for the long term.' },
        ],
      },
      leadership: {
        eyebrow: 'Leadership',
        title: 'Strategic direction & governance',
        p1: "Dakahlia Group's leadership embodies a management philosophy rooted in long-term vision, operational excellence, and responsible stewardship. Our governance structure ensures accountability at every level, while empowering our teams to innovate and deliver results.",
        p2: "Guided by the founding Al Anani family's entrepreneurial spirit and commitment to community, our leadership team drives strategic initiatives that balance growth ambitions with sustainable practices.",
      },
    },
    companies: {
      hero: {
        title: 'Our Companies',
        subtitle:
          'Five interconnected businesses working together within one fully integrated agri-food platform.',
      },
      intro: {
        eyebrow: 'Our Portfolio',
        title: 'Strength through integration',
      },
      items: [
        {
          index: '01',
          name: 'Dakahlia Poultry',
          tagline: 'Integrated. Science-driven. Built on trust.',
          body: 'For over 40 years, Dakahlia Poultry has been shaping Egypt\'s poultry industry through a fully integrated, science-driven model built on trust, responsibility, and long-term partnerships. What started as a single broiler farm in the Delta has evolved into a comprehensive value chain covering feed manufacturing, breeder farms, hatcheries, broiler operations, processing, and advanced veterinary services.',
          bullets: [
            'Feed Manufacturing',
            'Breeder Farms',
            'Hatcheries (Day-old chicks)',
            'Broiler Farms (10th of Ramadan & Natroun)',
            'Processing & Slaughtering',
            'Veterinary Services & Biosecurity',
          ],
        },
        {
          index: '02',
          name: 'Dakahlia Agriculture',
          tagline: 'Real farming expertise. Global reach.',
          body: 'Since 1999, Dakahlia Agricultural Development has grown into a leading exporter of premium Egyptian produce, built on real farming expertise, not just trade. With over 17,000 feddans of strategically located farmland across Egypt, we operate a fully integrated agricultural model — exporting more than 3,000 containers annually to Europe, Russia, Asia, Latin America, and the GCC.',
          bullets: [
            'Fresh Produce (Potatoes, Citrus, Grapes)',
            'Processed Products (Raisins, Medjool Dates, Olive Oil, Table Olives)',
            'Integrated Farming & Export Operations',
            'Packing, Cold Storage & Global Distribution',
          ],
        },
        {
          index: '03',
          name: 'Dakahlia Slaughterhouse',
          tagline: 'Processing excellence. Food safety at scale.',
          body: 'Dakahlia Slaughterhouse is the processing backbone of the integrated poultry ecosystem. With a processing capacity of up to 8,000 birds per hour and an annual output of around 45 million birds, our facility delivers high volumes without compromising hygiene or quality. At the heart of our offering is Temry — introducing air-chilled chicken to the Egyptian market.',
          bullets: [
            'Temry — Premium air-chilled poultry range',
            'Al-Dar — High-quality everyday chicken products',
            'Quail & Pigeon — Specialized gourmet segments',
            'Sauce N Saucer — Complementary sauces range',
          ],
        },
        {
          index: '04',
          name: 'Shams Chemicals',
          tagline: 'Agricultural inputs. Built on field expertise.',
          body: 'Since 2006, Shams Agricultural Chemicals has grown into a reliable provider of agricultural inputs in Egypt. Through partnerships with leading international brands such as Omnia Nutriology, Mirstem, and Plymag, we bring advanced agricultural technologies to Egypt — adapting them to local conditions to improve productivity and support more sustainable farming practices.',
          bullets: [
            'Fertilizers & Plant Nutrition Solutions',
            'Crop Protection Products',
            'Veterinary Products',
            'Technical Support & Field Guidance',
            'Partnerships with Global Agricultural Brands',
          ],
        },
        {
          index: '05',
          name: 'Al Anani Foundation',
          tagline: 'Sustainable social impact for Egyptian communities.',
          body: 'Al Anani Foundation for Social Development is the CSR arm of Dakahlia Group, dedicated to creating sustainable social impact through education, healthcare, and community empowerment. Its portfolio includes Al Anani Handicrafts and Handmade Kilim Center, Mahmoud Al Anani School for Applied Agricultural Technology, and the Al Anani Center for Speech Therapy.',
          bullets: [
            'Al Anani Handicrafts & Handmade Kilim Center — Abu Qurqas, Minya',
            'Mahmoud Al Anani School for Applied Agricultural Technology',
            'Al Anani Center for Speech Therapy & Skills Development — Damas',
            'Education, healthcare & community development programs',
          ],
        },
      ],
    },
    valueChain: {
      hero: {
        title: 'Integrated Value Chain',
        subtitle: 'One coordinated system connecting every stage from agricultural inputs to the consumer.',
      },
      approach: {
        eyebrow: 'Our Approach',
        title: 'Integration at every stage',
        body: "Dakahlia Group's value chain model connects agricultural production, inputs, poultry operations, processing, and distribution into a seamless ecosystem. This integration allows us to maintain quality control, optimize efficiency, and deliver superior products — reducing variability and enhancing performance at scale.",
      },
      farmToTable: {
        eyebrow: 'Farm to Consumer',
        title: 'Complete control, consistent quality',
        body: 'By owning every link in the chain — from cultivating the land to delivering the final product — we eliminate inefficiencies and guarantee full traceability. Every decision is guided by a single commitment to excellence.',
        badge: 'Fully traceable from origin to table',
      },
      model: {
        eyebrow: 'The Model',
        title: 'Six interconnected stages',
        stages: [
          { num: '01', title: 'Agricultural Production', body: 'Land reclamation and cultivation across 17,000+ feddans including citrus, potatoes, grapes, olives, and dates.' },
          { num: '02', title: 'Feed & Agricultural Inputs', body: 'Feed manufacturing and agricultural chemicals through Shams Chemicals, ensuring optimal inputs for all operations.' },
          { num: '03', title: 'Poultry Production', body: 'Integrated breeder farms and broiler operations at 10th of Ramadan and Natroun delivering consistent, high-quality production.' },
          { num: '04', title: 'Veterinary & Biosecurity', body: 'Comprehensive animal health programs, biosecurity protocols, and technical farm management services.' },
          { num: '05', title: 'Processing & Brands', body: 'State-of-the-art processing at 8,000 birds per hour, delivering Temry, Al-Dar, and specialty poultry products.' },
          { num: '06', title: 'Distribution & Export', body: 'Over 3,000 containers exported annually to Europe, Russia, Asia, Latin America, and the GCC via Dakahlia Agriculture.' },
        ],
      },
      strength: {
        eyebrow: 'Our Scale',
        title: 'Built for reliable performance',
        body: 'Four decades of operational refinement have produced a platform that delivers consistent quality at scale. Our expertise spans modern farming, advanced processing, and global distribution networks — all working in harmony.',
        stats: [
          { value: '100%', label: 'Vertical Integration' },
          { value: '45M', label: 'Birds Processed Annually' },
          { value: '3,000+', label: 'Export Containers/Year' },
          { value: '17,000+', label: 'Feddans of Farmland' },
        ],
      },
    },
    sustainability: {
      hero: {
        title: 'Sustainability & Social Impact',
        subtitle: 'Embedded in how we operate, develop our people, and engage with the communities around us.',
      },
      intro: {
        eyebrow: 'Our Impact',
        title: 'Three pillars of responsibility',
        body: 'Sustainability is not an afterthought — it is embedded in how we operate, guided by a clear framework built on three pillars: People, Environment, and Community.',
      },
      pillars: [
        {
          title: 'People',
          body: 'We invest in developing the capabilities of our people, both within our operations and across the communities we serve.',
          bullets: [
            'Continuous training for employees to operate and manage modern production systems',
            'Building technical knowledge to keep pace with evolving industry requirements',
            'Educational initiatives including a school within our Minya farms to prepare future generations',
          ],
        },
        {
          title: 'Environment',
          body: 'We are committed to reducing our environmental footprint through efficient resource use and responsible operational practices.',
          bullets: [
            'Integrating solar energy solutions to reduce reliance on conventional power',
            'Enhancing energy efficiency across production systems',
            'Optimizing water and raw material consumption',
            'Full-utilization approach converting by-products into protein meals',
            'Reducing organic waste through structured recovery systems',
          ],
        },
        {
          title: 'Community',
          body: 'We extend our responsibility beyond operations through the Al Anani Foundation for Social Development, focusing on long-term, measurable community impact.',
          bullets: [
            'Supporting education programs',
            'Expanding access to healthcare services',
            'Contributing to community development projects',
          ],
        },
      ],
      foundation: {
        eyebrow: 'Al Anani Foundation',
        title: 'Sustainable social impact\nfor Egyptian communities.',
        body: 'Al Anani Foundation for Social Development is the CSR arm of Dakahlia Group, creating lasting change through education, healthcare, and community empowerment.',
        programs: [
          'Al Anani Handicrafts & Handmade Kilim Center',
          'Mahmoud Al Anani School for Applied Agricultural Technology',
          'Al Anani Center for Speech Therapy & Skills Development',
        ],
      },
    },
    news: {
      hero: {
        title: 'News & Insights',
        subtitle: 'Stay updated on our latest developments, industry participation, and sustainability initiatives.',
      },
      empty: 'No news articles available at this time.',
      backToNews: 'Back to all news',
      readTimeLabel: 'min read',
      moreStories: 'More Stories',
      notFound: 'Article not found.',
    },
    careers: {
      hero: {
        title: 'Careers',
        subtitle: 'A professional, growth-oriented environment built on accountability, teamwork, and respect.',
      },
      culture: {
        eyebrow: 'Grow With Us',
        title: 'Build your career at Dakahlia Group',
        intro: 'We are committed to developing talent across our integrated agri-food businesses, providing opportunities for continuous learning, skill development, and career growth within a structured and dynamic work environment.',
        items: [
          { title: 'Accountability', body: 'Ownership of actions and outcomes with transparent communication at every level.' },
          { title: 'Teamwork', body: 'A collaborative environment where diverse perspectives drive innovation and results.' },
          { title: 'Respect', body: 'Dignity and mutual respect form the foundation of all professional relationships.' },
        ],
      },
      positions: {
        eyebrow: 'Open Positions',
        title: 'Current opportunities',
        empty: 'No open positions at this time.',
      },
      apply: {
        eyebrow: 'Join Our Team',
        title: 'Submit your CV',
        fields: { name: 'Full Name', email: 'Email', phone: 'Phone', cover: 'Cover Letter', cv: 'Upload CV' },
        cvHint: 'PDF or DOC, max 5 MB',
        cvUploaded: 'CV uploaded',
        captchaLabel: 'Tap the cards in order from smallest to largest',
        captchaPlaceholder: 'Answer',
        captchaError: 'Wrong order — try again.',
        captchaSuccess: 'Verified',
        captchaReset: 'Reset',
        button: 'Submit Application',
      },
    },
    contact: {
      hero: {
        title: 'Contact Us',
        subtitle: 'Get in touch with Dakahlia Group for inquiries, partnerships, or more information about our businesses.',
      },
      info: {
        officeLabel: 'Headquarters',
        officeValue: '15 Ramo Buildings, Nasr Road, Nasr City, Cairo, Egypt',
        emailLabel: 'Email',
        emailValue: 'info@dakahlia.com',
        email2Value: 'cs@dakahlia.net',
        phoneLabel: 'Phone',
        phoneValue: '0223054802 / 0223054799',
        hotlineLabel: 'Hotline',
        hotlineValue: '16459',
        hoursLabel: 'Business Hours',
        hoursValue: 'Sun–Thu: 8:00 AM – 5:00 PM\nFri–Sat: Closed',
      },
      form: {
        eyebrow: 'Send a Message',
        title: 'Inquiry form',
        fields: { name: 'Full Name', email: 'Email', phone: 'Phone', subject: 'Subject', message: 'Message' },
        button: 'Send Message',
      },
      map: {
        eyebrow: 'Find Us',
        title: 'Visit our headquarters',
        body: 'Our head office is based in Cairo, Egypt. We welcome partners, suppliers, and guests by appointment.',
        directions: 'Get Directions',
      },
      global: {
        eyebrow: 'Global Reach',
        title: 'From Egypt to the world',
        body: 'Egypt is the heart of our operations — and the gateway to the markets we serve across Europe, Russia, Asia, Latin America, and the Gulf.',
        marker: 'Dakahlia Group · Cairo, Egypt',
      },
    },
    terms: {
      hero: {
        title: 'Terms of Use',
        subtitle: 'The terms and conditions governing your use of the Dakahlia Group website and digital services.',
      },
      lastUpdated: 'Last updated: June 14, 2026',
      sections: [
        {
          title: '1. Acceptance of Terms',
          body: [
            'By accessing or using the Dakahlia Group website (the "Site"), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any part of these terms, you must not use the Site.',
            'We reserve the right to modify or update these terms at any time without prior notice. Your continued use of the Site after such changes constitutes acceptance of the revised terms.',
          ],
        },
        {
          title: '2. Use of the Website',
          body: [
            'The Site is provided for informational purposes about Dakahlia Group and its subsidiaries, products, and services. You may use the Site for lawful purposes only.',
            'You agree not to engage in any conduct that could damage, disable, overburden, or impair the Site or interfere with any other party\'s use of the Site.',
          ],
        },
        {
          title: '3. Intellectual Property',
          body: [
            'All content on the Site — including text, graphics, logos, images, photographs, videos, and software — is the property of Dakahlia Group or its content suppliers and is protected by Egyptian and international copyright, trademark, and other intellectual property laws.',
            'You may not reproduce, distribute, modify, transmit, reuse, repost, or use any of the materials for public or commercial purposes without our prior written consent.',
          ],
        },
        {
          title: '4. User Conduct',
          body: [
            'When submitting information through forms on the Site (including contact, careers, and inquiry forms), you agree to provide accurate, current, and complete information.',
            'You may not use the Site to transmit any unlawful, harmful, threatening, abusive, defamatory, or otherwise objectionable content.',
          ],
        },
        {
          title: '5. Disclaimers',
          body: [
            'The Site and its content are provided on an "as is" and "as available" basis. Dakahlia Group makes no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, or reliability of any information on the Site.',
            'We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.',
          ],
        },
        {
          title: '6. Limitation of Liability',
          body: [
            'To the fullest extent permitted by law, Dakahlia Group shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Site, even if advised of the possibility of such damages.',
          ],
        },
        {
          title: '7. Third-Party Links',
          body: [
            'The Site may contain links to third-party websites or services that are not owned or controlled by Dakahlia Group. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.',
          ],
        },
        {
          title: '8. Governing Law',
          body: [
            'These Terms of Use shall be governed by and construed in accordance with the laws of the Arab Republic of Egypt, without regard to its conflict of law provisions. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Cairo, Egypt.',
          ],
        },
        {
          title: '9. Contact Information',
          body: [
            'If you have any questions about these Terms of Use, please contact us via the Contact page or at info@dakahlia-group.com.',
          ],
        },
      ],
    },
    privacy: {
      hero: {
        title: 'Privacy Policy',
        subtitle: 'How Dakahlia Group collects, uses, and safeguards your information when you interact with our website and services.',
      },
      lastUpdated: 'Last updated: June 14, 2026',
      sections: [
        {
          title: '1. Introduction',
          body: [
            'Dakahlia Group ("we," "us," or "our") is committed to protecting the privacy of visitors to our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit the Site.',
            'By using the Site, you consent to the data practices described in this policy. If you do not agree, please discontinue use of the Site.',
          ],
        },
        {
          title: '2. Information We Collect',
          body: [
            'We may collect personal information that you voluntarily provide when using our contact, careers, or inquiry forms — including your name, email address, phone number, and any message content you share.',
            'We also automatically collect non-identifying technical data such as browser type, device information, IP address, pages visited, referring URL, and timestamps, primarily through standard server logs and analytics services.',
          ],
        },
        {
          title: '3. How We Use Your Information',
          body: [
            'We use the information collected to respond to inquiries, evaluate job applications, improve the content and performance of the Site, and communicate with you about our businesses where relevant.',
            'We do not sell, rent, or trade your personal information to third parties for marketing purposes.',
          ],
        },
        {
          title: '4. Sharing of Information',
          body: [
            'We may share your information with trusted service providers who assist us in operating the Site, conducting our business, or servicing you — provided that they agree to keep this information confidential.',
            'We may also disclose information when required by law, in response to lawful requests by public authorities, or to protect our rights, property, or safety.',
          ],
        },
        {
          title: '5. Cookies and Tracking Technologies',
          body: [
            'The Site may use cookies and similar technologies to enhance user experience, remember preferences (such as language selection), and gather aggregate analytics data.',
            'You can configure your browser to refuse cookies or notify you when cookies are being set. Note that some features of the Site may not function properly without cookies.',
          ],
        },
        {
          title: '6. Data Security',
          body: [
            'We implement reasonable administrative, technical, and physical safeguards designed to protect personal information from unauthorized access, disclosure, alteration, or destruction.',
            'However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.',
          ],
        },
        {
          title: '7. Your Rights',
          body: [
            'You have the right to request access to, correction of, or deletion of the personal information we hold about you. You may also object to or restrict certain processing activities.',
            'To exercise any of these rights, please contact us using the details below. We will respond within a reasonable timeframe.',
          ],
        },
        {
          title: '8. Children\'s Privacy',
          body: [
            'The Site is not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can remove it.',
          ],
        },
        {
          title: '9. International Data Transfers',
          body: [
            'Your information may be processed in countries other than your country of residence, where data protection laws may differ. By using the Site, you consent to such transfers in accordance with this policy.',
          ],
        },
        {
          title: '10. Changes to This Policy',
          body: [
            'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The "Last updated" date at the top will reflect the most recent revision. Continued use of the Site after changes constitutes acceptance of the revised policy.',
          ],
        },
        {
          title: '11. Contact Us',
          body: [
            'If you have any questions or concerns about this Privacy Policy or our handling of your personal information, please contact us via the Contact page or at info@dakahlia-group.com.',
          ],
        },
      ],
    },
    faq: {
      hero: {
        title: 'Frequently Asked Questions',
        subtitle: 'Quick answers about Dakahlia Group, our businesses, careers, partnerships, and how to get in touch.',
      },
      groups: [
        {
          eyebrow: 'About Dakahlia Group',
          items: [
            {
              question: 'What does Dakahlia Group do?',
              answer: 'Dakahlia Group is a fully integrated agri-food platform with over four decades of operational excellence in Egypt. Our businesses span poultry production, agricultural cultivation, food processing, agricultural chemicals, pet nutrition, and community development through the Al Anani Foundation.',
            },
            {
              question: 'Where are your operations located?',
              answer: 'Our head office is based in Cairo, Egypt. Our farms, processing facilities, and operations are spread across the Delta and Upper Egypt, including major sites in Wadi El Natroun, 10th of Ramadan, Minya, and Damietta.',
            },
            {
              question: 'How many companies are part of the Group?',
              answer: 'The Group includes six core businesses: Dakahlia Poultry, Dakahlia Agricultural Development, Dakahlia Slaughterhouse (Temry), Shams Agricultural Chemicals, Petology (Aleef & Lingo brands), and the Al Anani Foundation for Social Development.',
            },
          ],
        },
        {
          eyebrow: 'Products & Services',
          items: [
            {
              question: 'Where can I buy your products?',
              answer: 'Temry premium air-chilled chicken is available at leading retailers and online via temryshop.com. Aleef and Lingo pet food products are available via aleefpetfood.com and across major pet stores nationwide.',
            },
            {
              question: 'Do you export products internationally?',
              answer: 'Yes. Through Dakahlia Agricultural Development, we ship over 3,000 containers annually of premium Egyptian produce — including citrus, potatoes, grapes, and Medjool dates — to markets in Europe, Russia, Asia, Latin America, and the GCC.',
            },
            {
              question: 'Are your products certified?',
              answer: 'All our food production facilities operate under internationally recognized quality and food safety standards. Our agricultural exports meet GlobalG.A.P., HACCP, and destination-specific phytosanitary requirements.',
            },
          ],
        },
        {
          eyebrow: 'Careers & Partnerships',
          items: [
            {
              question: 'How can I apply for a job at Dakahlia Group?',
              answer: 'Visit our Careers page to view open positions and submit an application. We welcome candidates across our integrated agri-food businesses — from agricultural operations and food processing to corporate functions.',
            },
            {
              question: 'How can I partner or supply to Dakahlia Group?',
              answer: 'For supplier, distributor, or strategic partnership inquiries, please reach out via the Contact page or email info@dakahlia-group.com with a brief overview of your offering and area of interest.',
            },
            {
              question: 'Do you offer internships or training programs?',
              answer: 'Yes. We run structured training and development programs across our businesses, including agricultural technology, processing, and management tracks. Specific openings are posted on the Careers page when available.',
            },
          ],
        },
        {
          eyebrow: 'Sustainability & Community',
          items: [
            {
              question: 'What sustainability initiatives do you run?',
              answer: 'Our sustainability strategy covers three pillars — People, Environment, and Community. We invest in solar energy across our operations, optimize water and feed efficiency, run by-product recovery programs, and support education and healthcare through the Al Anani Foundation.',
            },
            {
              question: 'What does the Al Anani Foundation do?',
              answer: 'The Al Anani Foundation for Social Development is our CSR arm, operating the Al Anani Handicrafts & Kilim Center, the Mahmoud Al Anani School for Applied Agricultural Technology, and the Al Anani Center for Speech Therapy & Skills Development.',
            },
          ],
        },
      ],
      ctaTitle: 'Still have questions?',
      ctaBody: 'Our team is ready to help. Reach out and we will get back to you shortly.',
      ctaButton: 'Contact Us',
    },
  },
}

const ar: Dict = {
  nav: {
    home: 'الرئيسية',
    about: 'قصتنا',
    companies: 'شركاتنا',
    valueChain: 'سلسلة القيمة',
    sustainability: 'الاستدامة',
    news: 'الأخبار',
    careers: 'الوظائف',
    contact: 'تواصل معنا',
    cta: 'تواصل معنا',
    visitWebsite: 'زيارة الموقع',
  },
  hero: {
    eyebrow: 'مصر · مجموعة زراعية غذائية متكاملة',
    headline: 'تنوع في القطاعات.\nرؤية موحدة.\nريادة للمستقبل.',
    subtitle: 'نقود الطريق نحو مستقبل أكثر استدامة.',
    primaryCta: 'تعرف على شركاتنا',
    secondaryCta: 'قصتنا',
    stat1Label: 'سنة من الريادة',
    stat1Value: '+٤٠',
    stat2Label: 'قطاعات أعمال',
    stat2Value: '٥',
    stat3Label: 'أسواق التصدير',
    stat3Value: '+٥٠',
  },
  whoWeAre: {
    eyebrow: 'شركاتنا',
    title: 'خمس شركات. منظومة متكاملة واحدة.',
    intro: 'نعمل على بناء منظومة غذائية متكاملة تخلق قيمة مستدامة للمجتمعات، وتدعم تطور الأسواق، وتسهم في مستقبل أكثر استدامة.',
    companies: [
      {
        number: '٠١',
        name: 'الدقهلية للدواجن',
        desc: 'أكثر من ٤٠ عاماً من إنتاج الدواجن المتكامل المدفوع بالعلم — من تصنيع الأعلاف إلى التصنيع والخدمات البيطرية.',
        meta: '+٤٠ سنة من الريادة',
      },
      {
        number: '٠٢',
        name: 'الدقهلية للزراعة',
        desc: 'أكثر من ١٧٠٠٠ فدان من الأراضي الزراعية، نصدر منتجات متميزة إلى أوروبا وروسيا وآسيا وأمريكا اللاتينية ودول الخليج.',
      },
      {
        number: '٠٣',
        name: 'مجازر الدقهلية',
        desc: 'طاقة تصنيعية تصل إلى ٨٠٠٠ طير في الساعة، تقدم العلامات المتميزة تمري والدار ومنتجات الدواجن المتخصصة.',
      },
      {
        number: '٠٤',
        name: 'شمس للكيماويات',
        desc: 'منصة مدخلات زراعية توفر الأسمدة والمبيدات والمنتجات البيطرية بدعم من شراكات مع علامات عالمية.',
      },
      {
        number: '٠٥',
        name: 'مؤسسة العناني للتنمية الاجتماعية',
        desc: 'الذراع الاجتماعية المخصصة للتعليم والرعاية الصحية والتمكين المجتمعي في أنحاء مصر.',
      },
    ],
  },
  pillars: {
    integration: {
      title: 'تكامل يُحقق النتائج',
      body: 'التكامل ليس فقط طريقة عملنا — بل هو كيف نخلق القيمة. بمحاذاة عملياتنا، نعزز الاتساق، ونحسن الإنتاجية، ونبني منظومة مصممة للتكيف والتوسع والصمود.',
    },
    sustainability: {
      title: 'المسؤولية والأثر',
      body: 'من خلال مؤسسة العناني وركائزنا الثلاث للاستدامة — الأشخاص والبيئة والمجتمع — نبني أثراً دائماً يتجاوز عملياتنا.',
    },
  },
  vision: {
    eyebrow: 'ما يحركنا',
    headline: 'بناء مجموعة زراعية غذائية متكاملة رائدة.',
    body: 'المساهمة في الأمن الغذائي مع العمل بانضباط ومسؤولية — موجَّهاً بالنزاهة والتميز وتحمل المسؤولية والاحترام والالتزام بالنمو المستدام.',
  },
  storyTeaser: {
    eyebrow: 'قصتنا',
    title: 'مصري الجذور. متكامل. بُني للتوسع.',
    body: 'انطلاقاً من أساس راسخ في قطاع الدواجن، تطورت مجموعة الدقهلية لتصبح منصة زراعية غذائية متكاملة بالكامل، تربط كل مرحلة من سلسلة القيمة ضمن منظومة واحدة منسقة.',
    cta: 'اقرأ قصتنا',
  },
  careersTeaser: {
    eyebrow: 'الوظائف',
    title: 'انمُ مع مجموعة الدقهلية',
    body: 'نوفر بيئة مهنية تنمو فيها المواهب وتُبنى على المساءلة والعمل الجماعي والاحترام، مع فرص للتعلم المستمر والنمو الوظيفي.',
    cta: 'استعرض الوظائف',
    employees: [
      { name: 'أحمد', location: 'القاهرة' },
      { name: 'يوسف', location: 'وادي النطرون' },
      { name: 'منى', location: 'الدقهلية' },
    ],
  },
  newsTeaser: {
    title: 'آخر الأخبار',
    cta: 'عرض كل الأخبار',
    empty: 'لا توجد مقالات أخبار متاحة حالياً.',
  },
  footer: {
    tagline: 'منصة زراعية غذائية متكاملة بالكامل مبنية على ٤٠ عاماً من التميز المصري.',
    hiringTitle: 'نحن نوظّف.',
    hiringBody: 'اكتشف الفرص المتاحة في شركاتنا.',
    hiringCta: 'استعرض الوظائف',
    quickLinks: 'روابط سريعة',
    contactBlock: 'تواصل معنا',
    rights: '© مجموعة الدقهلية ٢٠٢٦. جميع الحقوق محفوظة',
    terms: 'شروط الاستخدام',
    privacy: 'سياسة الخصوصية',
  },
  pages: {
    about: {
      hero: {
        eyebrow: 'قصتنا',
        title: 'تنوع في القطاعات.\nرؤية موحدة.\nريادة للمستقبل.',
        subtitle: 'نقود الطريق نحو مستقبل أكثر استدامة.',
      },
      intro: {
        eyebrow: 'قصتنا',
        title: 'من ١٩٨١ وحتى اليوم',
        paragraphs: [
          'تبدأ كل قصة نجاح بتحدٍّ. منذ اللحظة الأولى، أدركنا أن الجودة الحقيقية لا تُقاس بالمنتج وحده، بل بالقدرة على تقديمه باستمرار وبالمستوى نفسه من التميز. ولهذا، كان التكامل والسيطرة على مختلف مراحل الإنتاج جزءاً أساسياً من رؤيتنا منذ البداية.',
          'بدأت الرحلة عام ١٩٨١ عندما استحوذ المؤسسون على أول مزرعة تسمين في منطقة الدلتا، برؤية واضحة تقوم على تقديم جودة ثابتة وضمان استمرارية الإمداد. وانطلاقاً من خبراتهم العميقة في مجال الأعلاف والصحة البيطرية، استثمرت المجموعة في إنتاج الأعلاف والإضافات الخاصة بها، بما يدعم صحة القطيع ويرفع جودة المنتج في السوقين المحلي والعالمي.',
          'ومع نمو الطلب، تبنّت مجموعة الدقهلية سياسة توسع طويلة المدى قائمة على تطوير المنشآت، وزيادة الطاقات الإنتاجية، والاستثمار في أحدث التقنيات. واليوم، تضم المجموعة أحد أكبر مصانع الأعلاف في أفريقيا، وهو ما أسهم في ترسيخ مكانتها كأحد الرواد في صناعة الدواجن والأعلاف في مصر، وبناء شراكات ممتدة مع العملاء على مدار أكثر من أربعة عقود داخل مصر وخارجها.',
          'وفي إطار رؤيتها طويلة المدى للتكامل والتطوير، وضعت المجموعة منذ عام ١٩٩٧ هدفاً استراتيجياً يتمثل في إنشاء مجزر دواجن آلي ومتطور يلبي احتياجات السوق المصري ويرتقي بمعايير الجودة وسلامة الغذاء. وتحولت هذه الرؤية إلى واقع مع بدء تنفيذ مجزر الدقهلية عام ٢٠١٢، وانطلاق أول دورة إنتاجية عام ٢٠١٧. وشكّل المجزر خطوة محورية في استكمال منظومة الإنتاج المتكاملة للمجموعة، كما أتاح إطلاق علامة "تمري" التجارية التي تقدم منتجات الدواجن الطازجة والمتبّلة والمجمدة والمطهية بالكامل. واليوم، أصبحت "تمري" علامة موثوقة لدى المستهلكين، وساهمت في توسيع حضور المجموعة داخل الأسواق المحلية والدولية.',
          'وفي عام ١٩٩٩، توسعت المجموعة إلى القطاع الزراعي عبر تأسيس شركة الدقهلية للتنمية الزراعية برؤية واضحة تستهدف الأسواق العالمية. فبعد أن بدأت الرحلة بمساحة ٧٠٠ فدان، تدير الشركة اليوم أكثر من ٢٠ ألف فدان، وتصدر العنب والموالح والبطاطس والتمور والزيتون ومنتجاته إلى أكثر من ٥٠ دولة حول العالم.',
          'ومع توسع أعمال المجموعة، تأسست شركة شمس للكيماويات الزراعية عام ٢٠٠١ لتوفير الأسمدة ومنتجات حماية المحاصيل والحلول البيطرية. وبفضل شراكاتها مع كبرى الشركات العالمية وعلاقاتها الممتدة مع العملاء، أصبحت اليوم أحد أبرز مزودي الحلول الزراعية في السوق المصري.',
          'وبالتوازي مع النمو الاقتصادي، تأسست مؤسسة العناني للتنمية الاجتماعية لتقود جهود المجموعة في مجالات التعليم والرعاية الصحية وتنمية المجتمع؛ إيماناً بأهمية تحقيق أثر مستدام يمتد إلى ما هو أبعد من الأعمال.',
          'واليوم، وبالاستناد إلى مركز مالي قوي ومستقر، ومنشآت متطورة، وفريق عمل يضم أكثر من ٤٫٥٠٠ موظف، تواصل مجموعة الدقهلية توسيع حضورها في الأسواق المحلية والدولية، مستندةً إلى أكثر من أربعة عقود من الخبرة وشراكات طويلة الأمد مع العملاء والشركاء حول العالم.',
        ],
        statBadge: '+٤٠ سنة',
        statBadgeLabel: 'من الخبرة',
      },
      integration: {
        title: 'تكامل يُحقق النتائج',
        body: 'التكامل ليس فقط طريقة عملنا — بل هو كيف نخلق القيمة. بمحاذاة عملياتنا، نعزز الاتساق، ونحسن الإنتاجية، ونبني منظومة مصممة للتكيف والتوسع والصمود.',
      },
      whatDrivesUs: {
        eyebrow: 'مبادئنا',
        title: 'ما يحركنا',
        intro: 'طموحنا هو بناء مجموعة زراعية غذائية متكاملة رائدة، تساهم في الأمن الغذائي وتعمل بانضباط ومسؤولية. يوجّه ذلك مجموعة واضحة من المبادئ:',
        values: [
          'النزاهة في كل قرار',
          'التميز في التنفيذ',
          'تحمل المسؤولية عن النتائج',
          'الاحترام للأشخاص والشراكات',
          'الالتزام بالنمو المستدام',
        ],
      },
      visionMission: {
        eyebrow: 'أساسنا',
        tagline: 'منظوران، هدفٌ واحد.',
        visionLabel: 'الرؤية',
        visionTitle: 'رؤيتنا',
        visionBody: 'أن نكون شركة رائدة عالمياً في قطاعي الزراعة والأغذية، ونموذجًا للتميز في الأعمال، والخيار الأول لشركائنا.',
        missionLabel: 'الرسالة',
        missionTitle: 'مهمتنا',
        missionBody: 'نقدم باستمرار منتجات زراعية وغذائية متميزة على المستوى المحلي، مع التمسك بقيمنا في صميم كل مسعى.',
      },
      values: {
        eyebrow: 'قيمنا',
        title: 'المبادئ التي توجّهنا',
        items: [
          { name: 'النزاهة', body: 'النزاهة في كل قرار نتخذه.' },
          { name: 'التميز', body: 'التميز في التنفيذ عبر جميع العمليات.' },
          { name: 'تحمل المسؤولية', body: 'تحمل المسؤولية عن النتائج على كل المستويات.' },
          { name: 'الاحترام', body: 'الاحترام للأشخاص والشراكات.' },
          { name: 'النمو', body: 'الالتزام بالنمو على المدى الطويل.' },
        ],
      },
      leadership: {
        eyebrow: 'القيادة',
        title: 'التوجيه الاستراتيجي والحوكمة',
        p1: 'تجسّد قيادة مجموعة الدقهلية فلسفة إدارية متجذرة في الرؤية بعيدة المدى والتميز التشغيلي والإشراف المسؤول، مع تمكين الفرق للابتكار وتحقيق نتائج ملموسة.',
        p2: 'مستلهمين من الروح الريادية لعائلة العناني المؤسِّسة والتزامها تجاه المجتمع، يقود فريقنا التنفيذي مبادرات استراتيجية توازن بين طموحات النمو والممارسات المستدامة.',
      },
    },
    companies: {
      hero: {
        title: 'شركاتنا',
        subtitle: 'خمسة قطاعات أعمال مترابطة تعمل معاً ضمن منصة زراعية غذائية متكاملة بالكامل.',
      },
      intro: {
        eyebrow: 'محفظتنا',
        title: 'القوة من خلال التكامل',
      },
      items: [
        {
          index: '٠١',
          name: 'الدقهلية للدواجن',
          tagline: 'متكامل. مدفوع بالعلم. مبني على الثقة.',
          body: 'على مدى أكثر من ٤٠ عاماً، شكّلت الدقهلية للدواجن صناعة الدواجن في مصر من خلال نموذج متكامل ومدفوع بالعلم مبني على الثقة والمسؤولية والشراكات طويلة الأمد. تطورت من مزرعة واحدة في الدلتا إلى سلسلة قيمة شاملة.',
          bullets: [
            'تصنيع الأعلاف',
            'مزارع الأمهات',
            'المفاقس (كتاكيت يوم واحد)',
            'مزارع التسمين (العاشر من رمضان والنطرون)',
            'التصنيع والذبح',
            'الخدمات البيطرية والأمن الحيوي',
          ],
        },
        {
          index: '٠٢',
          name: 'الدقهلية للزراعة',
          tagline: 'خبرة زراعية حقيقية. وصول عالمي.',
          body: 'منذ ١٩٩٩، نمت الدقهلية للتطوير الزراعي لتصبح مصدراً رائداً للمنتجات المصرية المتميزة. بأكثر من ١٧٠٠٠ فدان من الأراضي الزراعية، نصدر أكثر من ٣٠٠٠ حاوية سنوياً إلى أوروبا وروسيا وآسيا وأمريكا اللاتينية والخليج.',
          bullets: [
            'منتجات طازجة (بطاطس، موالح، عنب)',
            'منتجات مصنعة (زبيب، تمر مجهول، زيت زيتون، زيتون مائدة)',
            'عمليات زراعية وتصديرية متكاملة',
            'تعبئة وتخزين مبرد وتوزيع عالمي',
          ],
        },
        {
          index: '٠٣',
          name: 'مجازر الدقهلية',
          tagline: 'تميز في التصنيع. سلامة غذائية على نطاق واسع.',
          body: 'مجازر الدقهلية هي العمود الفقري للتصنيع في منظومة الدواجن المتكاملة. بطاقة تصنيعية تصل إلى ٨٠٠٠ طير في الساعة وإنتاج سنوي يبلغ ٤٥ مليون طير، يُقدم منشأتنا أحجاماً كبيرة دون المساومة على النظافة والجودة.',
          bullets: [
            'تمري — مجموعة دواجن متميزة بتقنية التبريد الهوائي',
            'الدار — منتجات دجاج عالية الجودة للاستهلاك اليومي',
            'سمان وحمام — منتجات دواجن متخصصة',
            'Sauce N Saucer — مجموعة صلصات مكملة',
          ],
        },
        {
          index: '٠٤',
          name: 'شمس للكيماويات',
          tagline: 'مدخلات زراعية مبنية على الخبرة الميدانية.',
          body: 'منذ ٢٠٠٦، نمت شمس للكيماويات الزراعية لتصبح مزوداً موثوقاً للمدخلات الزراعية في مصر. من خلال شراكات مع علامات دولية رائدة كأومنيا نيوترولوجي وميرستم وبليماج، نجلب تقنيات زراعية متقدمة ونكيّفها مع الظروف المحلية.',
          bullets: [
            'الأسمدة وحلول تغذية النبات',
            'منتجات الوقاية من الآفات',
            'المنتجات البيطرية',
            'الدعم الفني والتوجيه الميداني',
            'شراكات مع علامات زراعية عالمية',
          ],
        },
        {
          index: '٠٥',
          name: 'مؤسسة العناني',
          tagline: 'أثر اجتماعي مستدام للمجتمعات المصرية.',
          body: 'مؤسسة العناني للتنمية الاجتماعية هي الذراع الاجتماعية لمجموعة الدقهلية، مكرّسة لخلق أثر اجتماعي مستدام من خلال التعليم والرعاية الصحية والتمكين المجتمعي.',
          bullets: [
            'مركز الحرف اليدوية والكليم — أبو قرقاص، المنيا',
            'مدرسة محمود العناني للتكنولوجيا الزراعية التطبيقية',
            'مركز العناني لعلاج النطق وتنمية المهارات — دمياط',
            'برامج التعليم والرعاية الصحية والتنمية المجتمعية',
          ],
        },
      ],
    },
    valueChain: {
      hero: {
        title: 'سلسلة القيمة المتكاملة',
        subtitle: 'منظومة واحدة منسقة تربط كل مرحلة من المدخلات الزراعية إلى المستهلك.',
      },
      approach: {
        eyebrow: 'منهجنا',
        title: 'التكامل في كل مرحلة',
        body: 'يربط نموذج سلسلة قيمة مجموعة الدقهلية الإنتاج الزراعي والمدخلات وعمليات الدواجن والتصنيع والتوزيع في منظومة متكاملة سلسة، مما يتيح رقابة الجودة وتعظيم الكفاءة وتقديم منتجات متفوقة على نطاق واسع.',
      },
      farmToTable: {
        eyebrow: 'من المزرعة إلى المستهلك',
        title: 'تحكّم كامل، جودة ثابتة',
        body: 'بامتلاكنا كل حلقة في السلسلة — من زراعة الأرض إلى توصيل المنتج النهائي — نقضي على أوجه القصور ونضمن تتبّعاً كاملاً. كل قرار يستند إلى التزام واحد بالتميز.',
        badge: 'إمكانية التتبع الكامل من المنشأ إلى المائدة',
      },
      model: {
        eyebrow: 'النموذج',
        title: 'ست مراحل مترابطة',
        stages: [
          { num: '٠١', title: 'الإنتاج الزراعي', body: 'استصلاح وزراعة أكثر من ١٧٠٠٠ فدان تشمل الموالح والبطاطس والعنب والزيتون والتمر.' },
          { num: '٠٢', title: 'الأعلاف والمدخلات الزراعية', body: 'تصنيع الأعلاف والكيماويات الزراعية عبر شمس للكيماويات لضمان مدخلات مثلى لجميع العمليات.' },
          { num: '٠٣', title: 'إنتاج الدواجن', body: 'مزارع أمهات وعمليات تسمين متكاملة في العاشر من رمضان والنطرون لإنتاج متسق عالي الجودة.' },
          { num: '٠٤', title: 'الخدمات البيطرية والأمن الحيوي', body: 'برامج شاملة لصحة الحيوان وبروتوكولات الأمن الحيوي وخدمات إدارة المزارع الفنية.' },
          { num: '٠٥', title: 'التصنيع والعلامات التجارية', body: 'تصنيع متطور بـ٨٠٠٠ طير في الساعة يقدم تمري والدار ومنتجات دواجن متخصصة.' },
          { num: '٠٦', title: 'التوزيع والتصدير', body: 'أكثر من ٣٠٠٠ حاوية تُصدَّر سنوياً إلى أوروبا وروسيا وآسيا وأمريكا اللاتينية والخليج.' },
        ],
      },
      strength: {
        eyebrow: 'حجمنا',
        title: 'مبني لأداء موثوق',
        body: 'أربعة عقود من الصقل التشغيلي أنتجت منصة تقدم جودة ثابتة على نطاق واسع. تمتد خبرتنا لتشمل الزراعة الحديثة والتصنيع المتقدم وشبكات التوزيع العالمية — كلها تعمل في تناغم.',
        stats: [
          { value: '٪١٠٠', label: 'تكامل رأسي' },
          { value: '٤٥م', label: 'طير يُصنَّع سنوياً' },
          { value: '+٣٠٠٠', label: 'حاوية تصدير سنوياً' },
          { value: '+١٧٠٠٠', label: 'فدان من الأراضي الزراعية' },
        ],
      },
    },
    sustainability: {
      hero: {
        title: 'الاستدامة والأثر الاجتماعي',
        subtitle: 'متجذرة في كيفية عملنا وتطوير كوادرنا وتعاملنا مع المجتمعات المحيطة بنا.',
      },
      intro: {
        eyebrow: 'أثرنا',
        title: 'ثلاث ركائز للمسؤولية',
        body: 'الاستدامة ليست أمراً ثانوياً — إنها متجذرة في كل ما نقوم به، موجَّهة بإطار واضح مبني على ثلاث ركائز: الأشخاص والبيئة والمجتمع.',
      },
      pillars: [
        {
          title: 'الأشخاص',
          body: 'نستثمر في تطوير قدرات كوادرنا، داخل عملياتنا وعبر المجتمعات التي نخدمها.',
          bullets: [
            'تدريب مستمر للموظفين لتشغيل وإدارة أنظمة الإنتاج الحديثة',
            'بناء المعرفة التقنية لمواكبة متطلبات الصناعة المتطورة',
            'مبادرات تعليمية تشمل مدرسة داخل مزارع المنيا لإعداد الأجيال القادمة',
          ],
        },
        {
          title: 'البيئة',
          body: 'نلتزم بتقليل أثرنا البيئي من خلال الاستخدام الكفء للموارد والممارسات التشغيلية المسؤولة.',
          bullets: [
            'دمج حلول الطاقة الشمسية للحد من الاعتماد على الطاقة التقليدية',
            'تعزيز كفاءة الطاقة عبر أنظمة الإنتاج',
            'تحسين استهلاك المياه والمواد الخام',
            'تحويل المخلفات الجانبية إلى وجبات بروتينية قابلة للاستخدام',
            'تقليل النفايات العضوية عبر أنظمة الاسترداد المنظمة',
          ],
        },
        {
          title: 'المجتمع',
          body: 'نمتد بمسؤوليتنا إلى ما هو أبعد من العمليات عبر مؤسسة العناني للتنمية الاجتماعية، مع التركيز على أثر مجتمعي طويل الأمد وقابل للقياس.',
          bullets: [
            'دعم برامج التعليم',
            'توسيع الوصول إلى خدمات الرعاية الصحية',
            'المساهمة في مشاريع التنمية المجتمعية',
          ],
        },
      ],
      foundation: {
        eyebrow: 'مؤسسة العناني',
        title: 'أثر اجتماعي مستدام للمجتمعات المصرية.',
        body: 'مؤسسة العناني للتنمية الاجتماعية هي الذراع المجتمعية لمجموعة الدقهلية، تصنع أثراً مستداماً من خلال التعليم والرعاية الصحية وتمكين المجتمعات.',
        programs: [
          'مركز العناني للحرف اليدوية وصناعة الكليم',
          'مدرسة محمود العناني للتكنولوجيا الزراعية التطبيقية',
          'مركز العناني لعلاج النطق وتنمية المهارات',
        ],
      },
    },
    news: {
      hero: {
        title: 'الأخبار والمستجدات',
        subtitle: 'تابع آخر تطوراتنا ومشاركتنا في الصناعة ومبادراتنا في الاستدامة.',
      },
      empty: 'لا توجد مقالات أخبار متاحة حالياً.',
      backToNews: 'العودة إلى جميع الأخبار',
      readTimeLabel: 'دقائق قراءة',
      moreStories: 'مقالات أخرى',
      notFound: 'المقال غير موجود.',
    },
    careers: {
      hero: {
        title: 'الوظائف',
        subtitle: 'بيئة مهنية تنمو فيها المواهب، مبنية على المساءلة والعمل الجماعي والاحترام.',
      },
      culture: {
        eyebrow: 'انمُ معنا',
        title: 'ابنِ مسيرتك في مجموعة الدقهلية',
        intro: 'نلتزم بتطوير المواهب عبر أعمالنا الزراعية الغذائية المتكاملة، مع توفير فرص للتعلم المستمر وتنمية المهارات والنمو الوظيفي في بيئة عمل منظمة وديناميكية.',
        items: [
          { title: 'المساءلة', body: 'تحمل المسؤولية عن الأفعال والنتائج مع تواصل شفاف على جميع المستويات.' },
          { title: 'العمل الجماعي', body: 'بيئة تعاونية تجمع وجهات نظر متنوعة لدفع الابتكار وتحقيق النتائج.' },
          { title: 'الاحترام', body: 'الكرامة والاحترام المتبادل أساس جميع العلاقات المهنية.' },
        ],
      },
      positions: {
        eyebrow: 'الوظائف الشاغرة',
        title: 'الفرص الحالية',
        empty: 'لا توجد وظائف شاغرة حالياً.',
      },
      apply: {
        eyebrow: 'انضم إلى فريقنا',
        title: 'قدّم سيرتك الذاتية',
        fields: { name: 'الاسم الكامل', email: 'البريد الإلكتروني', phone: 'الهاتف', cover: 'خطاب التقديم', cv: 'تحميل السيرة الذاتية' },
        cvHint: 'PDF أو DOC، بحد أقصى 5 ميجابايت',
        cvUploaded: 'تم تحميل السيرة الذاتية',
        captchaLabel: 'اضغط البطاقات من الأصغر إلى الأكبر',
        captchaPlaceholder: 'الإجابة',
        captchaError: 'ترتيب خاطئ — حاول مرة أخرى.',
        captchaSuccess: 'تم التحقق',
        captchaReset: 'إعادة',
        button: 'إرسال الطلب',
      },
    },
    contact: {
      hero: {
        title: 'تواصل معنا',
        subtitle: 'تواصل مع مجموعة الدقهلية للاستفسارات والشراكات أو الحصول على مزيد من المعلومات.',
      },
      info: {
        officeLabel: 'المقر الرئيسي',
        officeValue: '15 مباني رامو، شارع النصر، مدينة نصر، القاهرة، مصر',
        emailLabel: 'البريد الإلكتروني',
        emailValue: 'info@dakahlia.com',
        email2Value: 'cs@dakahlia.net',
        phoneLabel: 'الهاتف',
        phoneValue: '0223054802 / 0223054799',
        hotlineLabel: 'الخط الساخن',
        hotlineValue: '16459',
        hoursLabel: 'ساعات العمل',
        hoursValue: 'الأحد–الخميس: 8:00 ص – 5:00 م\nالجمعة–السبت: مغلق',
      },
      form: {
        eyebrow: 'أرسل رسالة',
        title: 'نموذج الاستفسار',
        fields: { name: 'الاسم الكامل', email: 'البريد الإلكتروني', phone: 'الهاتف', subject: 'الموضوع', message: 'الرسالة' },
        button: 'إرسال الرسالة',
      },
      map: {
        eyebrow: 'مكاننا',
        title: 'تفضّل بزيارة مقرّنا',
        body: 'يقع مقرّنا الرئيسي في القاهرة، مصر. نرحّب بالشركاء والمورّدين والضيوف بموعد مسبق.',
        directions: 'احصل على الاتجاهات',
      },
      global: {
        eyebrow: 'حضور عالمي',
        title: 'من مصر إلى العالم',
        body: 'مصر قلب عملياتنا — وبوابتنا إلى الأسواق التي نخدمها في أوروبا وروسيا وآسيا وأمريكا اللاتينية والخليج.',
        marker: 'مجموعة الدقهلية · القاهرة، مصر',
      },
    },
    terms: {
      hero: {
        title: 'شروط الاستخدام',
        subtitle: 'الشروط والأحكام التي تحكم استخدامك لموقع مجموعة الدقهلية وخدماتها الرقمية.',
      },
      lastUpdated: 'آخر تحديث: ١٤ يونيو ٢٠٢٦',
      sections: [
        {
          title: '١. قبول الشروط',
          body: [
            'بدخولك أو استخدامك لموقع مجموعة الدقهلية (الموقع)، فإنك توافق على الالتزام بشروط الاستخدام هذه وجميع القوانين واللوائح المعمول بها. إذا كنت لا توافق على أي جزء من هذه الشروط، فلا يجوز لك استخدام الموقع.',
            'نحتفظ بالحق في تعديل أو تحديث هذه الشروط في أي وقت دون إشعار مسبق. ويُعتبر استمرارك في استخدام الموقع بعد هذه التغييرات قبولاً للشروط المعدّلة.',
          ],
        },
        {
          title: '٢. استخدام الموقع',
          body: [
            'يُقدّم الموقع لأغراض إعلامية حول مجموعة الدقهلية وشركاتها التابعة ومنتجاتها وخدماتها. ولا يجوز استخدام الموقع إلا للأغراض المشروعة.',
            'توافق على عدم القيام بأي تصرف قد يُلحق ضرراً بالموقع أو يُعطّله أو يُثقله أو يُعيق استخدام أي طرف آخر للموقع.',
          ],
        },
        {
          title: '٣. الملكية الفكرية',
          body: [
            'جميع المحتويات على الموقع — بما في ذلك النصوص والرسومات والشعارات والصور والفيديوهات والبرمجيات — هي ملك لمجموعة الدقهلية أو مورّديها، ومحميّة بموجب قوانين حقوق النشر والعلامات التجارية والملكية الفكرية المصرية والدولية.',
            'لا يجوز لك إعادة إنتاج أو توزيع أو تعديل أو نقل أو إعادة استخدام أو إعادة نشر أي من هذه المواد لأغراض عامة أو تجارية دون الحصول على موافقتنا الخطية المسبقة.',
          ],
        },
        {
          title: '٤. سلوك المستخدم',
          body: [
            'عند تقديم معلومات عبر النماذج الموجودة على الموقع (بما في ذلك نماذج التواصل والوظائف والاستفسارات)، فإنك توافق على تقديم معلومات دقيقة وحديثة وكاملة.',
            'لا يجوز لك استخدام الموقع لنقل أي محتوى غير قانوني أو ضار أو تهديدي أو مسيء أو تشهيري أو غير لائق.',
          ],
        },
        {
          title: '٥. إخلاء المسؤولية',
          body: [
            'يُقدَّم الموقع ومحتوياته «كما هو» و«حسب التوفّر». ولا تُقدّم مجموعة الدقهلية أيّ ضمانات صريحة أو ضمنية فيما يتعلق بدقة أو اكتمال أو موثوقية أي معلومات على الموقع.',
            'لا نضمن أن يكون الموقع متاحاً دون انقطاع، أو خالياً من الأخطاء أو الفيروسات أو غيرها من العناصر الضارة.',
          ],
        },
        {
          title: '٦. تحديد المسؤولية',
          body: [
            'إلى أقصى حد يسمح به القانون، لن تتحمّل مجموعة الدقهلية المسؤولية عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية تنشأ عن أو ترتبط باستخدامك للموقع، حتى لو تم إعلامها بإمكانية حدوث هذه الأضرار.',
          ],
        },
        {
          title: '٧. الروابط لمواقع الأطراف الثالثة',
          body: [
            'قد يحتوي الموقع على روابط لمواقع أو خدمات تابعة لأطراف ثالثة لا تملكها أو تتحكم بها مجموعة الدقهلية. ولا نتحمّل أي مسؤولية عن محتوى أو سياسات الخصوصية أو الممارسات المتعلّقة بأي مواقع تابعة لأطراف ثالثة.',
          ],
        },
        {
          title: '٨. القانون الحاكم',
          body: [
            'تخضع شروط الاستخدام هذه وتُفسَّر وفقاً لقوانين جمهورية مصر العربية، دون مراعاة لمبادئ تنازع القوانين. وتختص محاكم القاهرة، مصر، اختصاصاً حصرياً بأيّ نزاع ينشأ عن هذه الشروط.',
          ],
        },
        {
          title: '٩. معلومات التواصل',
          body: [
            'إذا كانت لديك أيّ أسئلة بشأن شروط الاستخدام هذه، فيُرجى التواصل معنا عبر صفحة التواصل أو على info@dakahlia-group.com.',
          ],
        },
      ],
    },
    privacy: {
      hero: {
        title: 'سياسة الخصوصية',
        subtitle: 'كيف تجمع مجموعة الدقهلية معلوماتك وتستخدمها وتحميها عند تفاعلك مع موقعنا وخدماتنا.',
      },
      lastUpdated: 'آخر تحديث: ١٤ يونيو ٢٠٢٦',
      sections: [
        {
          title: '١. مقدّمة',
          body: [
            'تلتزم مجموعة الدقهلية («نحن» أو «الشركة») بحماية خصوصية زوّار موقعها الإلكتروني. توضّح سياسة الخصوصية هذه كيفية جمع معلوماتك الشخصية واستخدامها والإفصاح عنها وحمايتها عند زيارتك للموقع.',
            'باستخدامك للموقع، فإنك توافق على ممارسات البيانات الموضّحة في هذه السياسة. وإذا كنت لا توافق، فيُرجى التوقّف عن استخدام الموقع.',
          ],
        },
        {
          title: '٢. المعلومات التي نجمعها',
          body: [
            'قد نجمع المعلومات الشخصية التي تقدّمها طوعاً عند استخدام نماذج التواصل أو الوظائف أو الاستفسارات، بما في ذلك اسمك وبريدك الإلكتروني ورقم هاتفك وأيّ محتوى رسالة تشاركه.',
            'كما نجمع تلقائياً بيانات تقنية غير معرّفة، مثل نوع المتصفح ومعلومات الجهاز وعنوان IP والصفحات التي تتم زيارتها، وذلك عبر سجلات الخادم القياسية وخدمات التحليلات.',
          ],
        },
        {
          title: '٣. كيف نستخدم معلوماتك',
          body: [
            'نستخدم المعلومات التي نجمعها للردّ على الاستفسارات وتقييم طلبات التوظيف وتحسين محتوى الموقع وأدائه، والتواصل معك حول أعمالنا حيثما كان ذلك مناسباً.',
            'لا نبيع أو نؤجّر أو نتاجر بمعلوماتك الشخصية لأطراف ثالثة لأغراض تسويقية.',
          ],
        },
        {
          title: '٤. مشاركة المعلومات',
          body: [
            'قد نشارك معلوماتك مع مزوّدي خدمات موثوقين يساعدوننا في تشغيل الموقع أو إدارة أعمالنا أو تقديم الخدمة لك، بشرط موافقتهم على الحفاظ على سرّية هذه المعلومات.',
            'قد نُفصح عن المعلومات أيضاً عند الاقتضاء بموجب القانون، أو استجابةً لطلبات قانونية من السلطات العامة، أو لحماية حقوقنا أو ممتلكاتنا أو سلامتنا.',
          ],
        },
        {
          title: '٥. ملفّات تعريف الارتباط وتقنيات التتبّع',
          body: [
            'قد يستخدم الموقع ملفّات تعريف الارتباط والتقنيات المماثلة لتحسين تجربة المستخدم وحفظ التفضيلات (مثل اختيار اللغة) وجمع بيانات التحليل المجمّعة.',
            'يمكنك ضبط متصفّحك لرفض ملفّات تعريف الارتباط أو إعلامك عند ضبطها. لاحظ أن بعض ميزات الموقع قد لا تعمل بشكل صحيح دون ملفّات تعريف الارتباط.',
          ],
        },
        {
          title: '٦. أمان البيانات',
          body: [
            'نُطبّق ضوابط إدارية وتقنية ومادية معقولة مصمّمة لحماية المعلومات الشخصية من الوصول غير المصرّح به أو الإفصاح أو التعديل أو التدمير.',
            'ومع ذلك، لا توجد طريقة نقل عبر الإنترنت أو تخزين إلكتروني آمنة بنسبة ١٠٠٪. ولا يمكننا ضمان الأمان المطلق.',
          ],
        },
        {
          title: '٧. حقوقك',
          body: [
            'يحقّ لك طلب الوصول إلى معلوماتك الشخصية أو تصحيحها أو حذفها. كما يمكنك الاعتراض على بعض أنشطة المعالجة أو تقييدها.',
            'لممارسة أيّ من هذه الحقوق، يُرجى التواصل معنا باستخدام تفاصيل الاتصال أدناه. وسنردّ خلال إطار زمني معقول.',
          ],
        },
        {
          title: '٨. خصوصية الأطفال',
          body: [
            'الموقع غير موجّه للأفراد دون سن ١٦ عاماً. ولا نجمع عن قصد معلومات شخصية من الأطفال. وإذا كنت تعتقد أن طفلاً قد قدّم لنا معلومات شخصية، فيُرجى التواصل معنا حتى نتمكّن من إزالتها.',
          ],
        },
        {
          title: '٩. عمليات نقل البيانات الدولية',
          body: [
            'قد تتم معالجة معلوماتك في دول أخرى غير بلد إقامتك، حيث قد تختلف قوانين حماية البيانات. باستخدامك للموقع، فإنك توافق على عمليات النقل هذه وفقاً لهذه السياسة.',
          ],
        },
        {
          title: '١٠. تغييرات على هذه السياسة',
          body: [
            'قد نُحدّث سياسة الخصوصية هذه من وقت لآخر لتعكس التغييرات في ممارساتنا أو المتطلّبات القانونية. وسيعكس تاريخ «آخر تحديث» في الأعلى أحدث مراجعة. ويُعتبر استمرارك في استخدام الموقع بعد التغييرات قبولاً للسياسة المعدّلة.',
          ],
        },
        {
          title: '١١. تواصل معنا',
          body: [
            'إذا كانت لديك أيّ أسئلة أو مخاوف بشأن سياسة الخصوصية هذه أو تعاملنا مع معلوماتك الشخصية، فيُرجى التواصل معنا عبر صفحة التواصل أو على info@dakahlia-group.com.',
          ],
        },
      ],
    },
    faq: {
      hero: {
        title: 'الأسئلة الشائعة',
        subtitle: 'إجابات سريعة عن مجموعة الدقهلية وأعمالنا والوظائف والشراكات وكيفية التواصل معنا.',
      },
      groups: [
        {
          eyebrow: 'عن مجموعة الدقهلية',
          items: [
            {
              question: 'ماذا تفعل مجموعة الدقهلية؟',
              answer: 'مجموعة الدقهلية منصّة زراعية غذائية متكاملة بخبرة تتجاوز أربعة عقود في مصر. تمتدّ أعمالنا عبر إنتاج الدواجن والزراعة وتصنيع الأغذية والكيماويات الزراعية وتغذية الحيوانات الأليفة والتنمية المجتمعية من خلال مؤسسة العناني.',
            },
            {
              question: 'أين تقع عملياتكم؟',
              answer: 'يقع مقرّنا الرئيسي في القاهرة، مصر. وتنتشر مزارعنا ومرافق التصنيع وعملياتنا في الدلتا والصعيد، بما في ذلك مواقع رئيسية في وادي النطرون والعاشر من رمضان والمنيا ودمياط.',
            },
            {
              question: 'كم عدد الشركات التابعة للمجموعة؟',
              answer: 'تضمّ المجموعة ستّة أعمال رئيسية: الدقهلية للدواجن، الدقهلية للتطوير الزراعي، مجازر الدقهلية (تمري)، شمس للكيماويات الزراعية، بتولوجي (علامتي أليف ولينجو)، ومؤسسة العناني للتنمية الاجتماعية.',
            },
          ],
        },
        {
          eyebrow: 'المنتجات والخدمات',
          items: [
            {
              question: 'أين يمكنني شراء منتجاتكم؟',
              answer: 'يتوفّر دجاج تمري المبرّد بالهواء لدى كبار تجار التجزئة وعبر الإنترنت على temryshop.com. وتتوفّر منتجات أليف ولينجو لتغذية الحيوانات الأليفة على aleefpetfood.com وفي متاجر الحيوانات الأليفة الكبرى في جميع أنحاء البلاد.',
            },
            {
              question: 'هل تصدّرون منتجاتكم إلى الخارج؟',
              answer: 'نعم. من خلال الدقهلية للتطوير الزراعي، نشحن أكثر من ٣٠٠٠ حاوية سنوياً من المنتجات المصرية المتميّزة — تشمل الموالح والبطاطس والعنب وتمر المجهول — إلى أسواق في أوروبا وروسيا وآسيا وأمريكا اللاتينية والخليج.',
            },
            {
              question: 'هل منتجاتكم معتمدة؟',
              answer: 'تعمل جميع مرافق إنتاج الأغذية لدينا وفقاً لمعايير الجودة وسلامة الغذاء المعترف بها دولياً. وتستوفي صادراتنا الزراعية متطلّبات GlobalG.A.P. وHACCP والمتطلّبات الصحّية الخاصة بكلّ سوق.',
            },
          ],
        },
        {
          eyebrow: 'الوظائف والشراكات',
          items: [
            {
              question: 'كيف يمكنني التقديم لوظيفة في مجموعة الدقهلية؟',
              answer: 'تفضّل بزيارة صفحة الوظائف للاطّلاع على الفرص المتاحة وتقديم طلبك. نرحّب بالمرشّحين عبر أعمالنا الزراعية الغذائية المتكاملة — من العمليات الزراعية وتصنيع الأغذية إلى الوظائف الإدارية.',
            },
            {
              question: 'كيف يمكنني الشراكة أو التوريد لمجموعة الدقهلية؟',
              answer: 'لاستفسارات الموردين أو الموزّعين أو الشراكات الاستراتيجية، يُرجى التواصل عبر صفحة التواصل أو بالبريد الإلكتروني info@dakahlia-group.com مع لمحة موجزة عن عرضك ومجال اهتمامك.',
            },
            {
              question: 'هل تقدّمون برامج تدريب أو تدريب داخلي؟',
              answer: 'نعم. ندير برامج تدريب وتطوير منظمة عبر أعمالنا، بما في ذلك مسارات التكنولوجيا الزراعية والتصنيع والإدارة. وتُنشر الفرص المحدّدة على صفحة الوظائف عند توفّرها.',
            },
          ],
        },
        {
          eyebrow: 'الاستدامة والمجتمع',
          items: [
            {
              question: 'ما هي مبادرات الاستدامة التي تقومون بها؟',
              answer: 'تغطّي استراتيجيتنا للاستدامة ثلاثة محاور: الناس والبيئة والمجتمع. نستثمر في الطاقة الشمسية عبر عملياتنا، ونُحسّن كفاءة المياه والأعلاف، وندير برامج استرداد المخلّفات، وندعم التعليم والرعاية الصحية عبر مؤسسة العناني.',
            },
            {
              question: 'ماذا تفعل مؤسسة العناني؟',
              answer: 'مؤسسة العناني للتنمية الاجتماعية هي الذراع المجتمعية للمجموعة، وتدير مركز العناني للحرف اليدوية وصناعة الكليم، ومدرسة محمود العناني للتكنولوجيا الزراعية التطبيقية، ومركز العناني لعلاج النطق وتنمية المهارات.',
            },
          ],
        },
      ],
      ctaTitle: 'لا تزال لديك أسئلة؟',
      ctaBody: 'فريقنا جاهز للمساعدة. تواصل معنا وسنردّ عليك في أقرب وقت.',
      ctaButton: 'تواصل معنا',
    },
  },
}

export const content: Record<Locale, Dict> = { en, ar }
