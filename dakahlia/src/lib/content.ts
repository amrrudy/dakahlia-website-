// All site content in English and Arabic
// Source: Dakahlia Group prototype (provided by client)

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
        p1: string
        p2: string
        p3: string
        statBadge: string
      }
      journey: {
        eyebrow: string
        title: string
        items: Array<{ year: string; title: string; body: string }>
      }
      visionMission: {
        visionTitle: string
        visionBody: string
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
      farmToTable: {
        eyebrow: string
        title: string
        body: string
        badge: string
      }
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
      environmental: {
        eyebrow: string
        title: string
        body: string
        items: Array<{ title: string; body: string }>
      }
      commitment: {
        eyebrow: string
        title: string
        body: string
        stats: Array<{ value: string; label: string }>
      }
      community: { eyebrow: string; title: string; body: string }
      foundation: {
        eyebrow: string
        title: string
        items: Array<{ title: string; body: string }>
      }
    }
    news: {
      hero: { title: string; subtitle: string }
      empty: string
    }
    careers: {
      hero: { title: string; subtitle: string }
      culture: {
        eyebrow: string
        title: string
        intro: string
        items: Array<{ title: string; body: string }>
      }
      positions: {
        eyebrow: string
        title: string
        empty: string
      }
      apply: {
        eyebrow: string
        title: string
        fields: { name: string; email: string; phone: string; cover: string }
        button: string
      }
    }
    contact: {
      hero: { title: string; subtitle: string }
      info: {
        officeLabel: string
        officeValue: string
        hotlineLabel: string
        hotlineValue: string
        phoneLabel: string
        phoneValue: string
        emailLabel: string
        emailValue: string
        hoursLabel: string
        hoursValue: string
      }
      form: {
        eyebrow: string
        title: string
        fields: { name: string; email: string; phone: string; subject: string; message: string }
        button: string
      }
    }
  }
}

const en: Dict = {
  nav: {
    home: 'Home',
    about: 'About',
    companies: 'Our Companies',
    valueChain: 'Value Chain',
    sustainability: 'Sustainability',
    news: 'News',
    careers: 'Careers',
    contact: 'Contact',
    cta: 'Get in Touch',
  },
  hero: {
    eyebrow: 'Egypt · Since 1990s',
    headline: 'Building integrated food systems for a sustainable future',
    subtitle:
      'From the fertile lands of Egypt to global markets, Dakahlia Group delivers excellence across the entire food and agriculture value chain.',
    primaryCta: 'Discover Our Companies',
    secondaryCta: 'See Our Impact',
    stat1Label: 'Years of leadership',
    stat1Value: '30+',
    stat2Label: 'Business divisions',
    stat2Value: '5',
    stat3Label: 'Vertical integration',
    stat3Value: '100%',
  },
  whoWeAre: {
    eyebrow: 'Who We Are',
    title: 'An integrated ecosystem — from farm to table',
    intro:
      'Five interconnected businesses spanning the entire food and agriculture value chain, built over three decades of Egyptian excellence.',
    companies: [
      {
        number: '01',
        name: 'Poultry',
        desc: 'Integrated broiler and parent stock production with decades of industry leadership across the value chain.',
        meta: '30+ Years of Leadership',
      },
      {
        number: '02',
        name: 'Agriculture',
        desc: 'Large-scale farming and land reclamation in Wadi El Natroun, transforming desert into fertile harvest.',
      },
      {
        number: '03',
        name: 'Food Processing',
        desc: 'State-of-the-art poultry processing with full cold chain management and rigorous food safety protocols.',
      },
      {
        number: '04',
        name: 'Chemicals',
        desc: 'Premium agricultural chemicals and fertilizers backed by global partnerships and science-driven solutions.',
      },
      {
        number: '05',
        name: 'Social Development',
        desc: 'Healthcare, education, and community empowerment programs that uplift Egyptian communities.',
      },
    ],
  },
  pillars: {
    integration: {
      title: 'Integrated Value Chain',
      body:
        'Our unique farm-to-consumer ecosystem connects every stage of production, from agricultural inputs to final distribution, creating unmatched efficiency and quality control.',
    },
    sustainability: {
      title: 'Sustainability & Responsibility',
      body:
        'Through renewable energy adoption, circular economy practices, and the Al Anani Foundation social programs, we build a better future for Egypt and the communities we serve.',
    },
  },
  vision: {
    eyebrow: 'Our Vision',
    headline: 'To achieve global leadership in agriculture and food.',
    body: 'Setting the standard for quality, innovation, and sustainable practices across every market we serve.',
  },
  storyTeaser: {
    eyebrow: 'Our Story',
    title: 'Formed from humble Egyptian roots',
    body:
      'Over three decades of expertise and excellence in operation. As a leading integrated food and agriculture group, our team members and family farmers are dedicated to delivering high-quality products to customers and consumers around the world.',
    cta: 'See Our Story',
  },
  careersTeaser: {
    eyebrow: 'Amazing Careers',
    title: 'Be part of the Dakahlia team',
    body:
      'We are always looking for talented, passionate people to join our team. See what makes a career at Dakahlia Group so amazing.',
    cta: 'View Careers',
    employees: [
      { name: 'Ahmed', location: 'Cairo, EG' },
      { name: 'Mona', location: 'Wadi El Natroun, EG' },
      { name: 'Youssef', location: 'Dakahlia, EG' },
    ],
  },
  newsTeaser: {
    title: 'Our News',
    cta: 'View all news',
    empty: 'No news articles available at this time.',
  },
  footer: {
    tagline: 'Building integrated food systems for a sustainable future.',
    hiringTitle: 'We are hiring.',
    hiringBody: 'Explore opportunities across our companies.',
    hiringCta: 'View Careers',
    quickLinks: 'Quick links',
    contactBlock: 'Get in Touch',
    rights: '© DAKAHLIA GROUP 2026. ALL RIGHTS RESERVED',
    terms: 'Terms of Use',
    privacy: 'Privacy Policy',
  },
  pages: {
    about: {
      hero: {
        eyebrow: 'About Us',
        title: 'About Dakahlia Group',
        subtitle:
          'A diversified, privately owned Egyptian entity with decades of excellence in agriculture and food systems.',
      },
      intro: {
        eyebrow: 'Who We Are',
        title: 'Rooted in Egypt, growing for the world',
        p1: 'Dakahlia Group is a diversified, privately owned Egyptian entity that has grown from its origins in the poultry industry to become a leading integrated food and agriculture group.',
        p2: 'With operations spanning poultry production, agricultural chemicals, food processing, large-scale farming, and social development, we create value at every stage of the food chain.',
        p3: 'Our commitment to quality, innovation, and sustainability drives everything we do — from the fertile lands of the Nile Delta to the global markets we serve.',
        statBadge: '30+ Years of Excellence',
      },
      journey: {
        eyebrow: 'Our Journey',
        title: 'A legacy of growth & innovation',
        items: [
          {
            year: 'Origins',
            title: 'The Beginning',
            body:
              'The Al Anani family establishes the first broiler farms in the Dakahlia governorate, laying the foundation for agricultural excellence.',
          },
          {
            year: 'Expansion',
            title: 'Growing Reach',
            body:
              'Expansion into parent stock operations and strategic partnerships with global leaders in feed additives.',
          },
          {
            year: 'Diversification',
            title: 'New Horizons',
            body:
              'Entry into agriculture with land reclamation in Wadi El Natroun, establishment of processing capabilities, and launch of the Temry consumer brand.',
          },
          {
            year: 'Today',
            title: 'Integrated Group',
            body:
              'A fully diversified group spanning poultry, agriculture, chemicals, food processing, and social development.',
          },
        ],
      },
      visionMission: {
        visionTitle: 'Our Vision',
        visionBody:
          'To achieve global leadership in agriculture and food, setting the standard for quality, innovation, and sustainable practices across every market we serve.',
        missionTitle: 'Our Mission',
        missionBody:
          'To provide superior agricultural and food products to local and global markets, built on a foundation of innovation, integrity, and commitment to the communities we serve.',
      },
      values: {
        eyebrow: 'Our Values',
        title: 'The principles that guide us',
        items: [
          { name: 'Respect', body: 'Valuing every individual and fostering dignity in all interactions.' },
          { name: 'Integrity', body: 'Upholding the highest ethical standards in everything we do.' },
          { name: 'Excellence', body: 'Pursuing the highest quality in products, services, and relationships.' },
          { name: 'Ownership', body: 'Taking personal responsibility for actions and outcomes.' },
          { name: 'Sustainable Growth', body: 'Building for the future while nurturing the present.' },
        ],
      },
      leadership: {
        eyebrow: 'Leadership',
        title: 'Strategic direction & governance',
        p1: "Dakahlia Group's leadership embodies a management philosophy rooted in long-term vision, operational excellence, and responsible stewardship. Our governance structure ensures accountability at every level, while empowering our teams to innovate and deliver results that benefit our customers, communities, and the environment.",
        p2: "Guided by the founding Al Anani family's entrepreneurial spirit and commitment to community, our leadership team drives strategic initiatives that balance growth ambitions with sustainable practices, ensuring Dakahlia Group remains a trusted name in Egyptian and global food systems.",
      },
    },
    companies: {
      hero: {
        title: 'Our Companies',
        subtitle:
          'Five interconnected businesses working together to deliver excellence across the food and agriculture value chain.',
      },
      intro: {
        eyebrow: 'Our Portfolio',
        title: 'Strength through diversification',
      },
      items: [
        {
          index: '01',
          name: 'Dakahlia Poultry',
          tagline: 'The Core Pillar of Operations',
          body:
            'Dakahlia Poultry represents the foundation of the group operations, delivering integrated poultry production excellence through decades of expertise and continuous innovation.',
          bullets: [
            'Broiler and parent stock production',
            'Veterinary products and vaccines distribution',
            'Feed additives and nutrition solutions',
            'Technical support and farm management consulting',
          ],
        },
        {
          index: '02',
          name: 'Shams Chemicals',
          tagline: 'Agricultural Excellence Through Science',
          body:
            'Shams Chemicals provides high-quality agricultural chemicals and fertilizers, supporting Egyptian farmers with science-backed solutions for crop nutrition and protection.',
          bullets: [
            'Soil nutrition products and fertilizers',
            'Crop protection and support inputs',
            'Quality-controlled sourcing from global partners',
            'Technical advisory and application support',
          ],
        },
        {
          index: '03',
          name: 'Dakahlia Slaughterhouse',
          tagline: 'Processing Excellence & Food Safety',
          body:
            'State-of-the-art poultry processing facility ensuring the highest standards of food safety, quality control, and efficient cold chain management.',
          bullets: [
            'Modern slaughtering and processing operations',
            'Comprehensive cold chain management',
            'By-product utilization for protein meals',
            'Strict food safety and quality protocols',
          ],
        },
        {
          index: '04',
          name: 'Dakahlia Agriculture',
          tagline: 'From Desert to Harvest',
          body:
            'Leading the transformation of reclaimed desert land into productive agricultural operations, growing premium crops for domestic and international markets.',
          bullets: [
            'Land reclamation and development in Wadi El Natroun',
            'Cultivation of citrus, potatoes, grapes, olives, and dates',
            'Export operations to international markets',
            'Processing facilities for olive oil, pickling, and raisins',
          ],
        },
        {
          index: '05',
          name: 'Al Anani Foundation',
          tagline: 'Building Stronger Communities',
          body:
            'The social responsibility arm of Dakahlia Group, dedicated to improving lives through healthcare, education, and community development programs.',
          bullets: [
            'Damas Hospital and healthcare services',
            'Agricultural schools and vocational training',
            'Women empowerment through skills programs',
            'Humanitarian aid and food distribution',
          ],
        },
      ],
    },
    valueChain: {
      hero: {
        title: 'Integrated Value Chain',
        subtitle:
          'A farm-to-consumer ecosystem that connects every stage of production for unmatched efficiency and quality.',
      },
      approach: {
        eyebrow: 'Our Approach',
        title: 'Integrated excellence at every stage',
        body:
          "Dakahlia Group's unique value chain model connects agricultural production, inputs, poultry operations, processing, and distribution into a seamless ecosystem. This integration allows us to maintain quality control, optimize efficiency, and deliver superior products from farm to consumer.",
      },
      farmToTable: {
        eyebrow: 'Farm to Consumer',
        title: 'Complete control, consistent quality',
        body:
          'By owning every link in the chain — from cultivating the land to delivering the final product — we eliminate inefficiencies and guarantee traceability. Our vertically integrated model means every decision is guided by a single commitment to excellence.',
        badge: 'Fully traceable from origin to table',
      },
      model: {
        eyebrow: 'The Model',
        title: 'Six interconnected stages',
        stages: [
          { num: '01', title: 'Agricultural Production', body: 'Land reclamation and cultivation of diverse crops including citrus, potatoes, grapes, olives, and dates in Wadi El Natroun.' },
          { num: '02', title: 'Feed Additives & Inputs', body: 'Strategic partnerships for feed additives, agricultural chemicals, and fertilizers through Shams Chemicals.' },
          { num: '03', title: 'Poultry Production', body: 'Integrated broiler and parent stock operations delivering consistent, high-quality poultry production.' },
          { num: '04', title: 'Veterinary & Technical Services', body: 'Comprehensive animal health programs, biosecurity protocols, and farm management support.' },
          { num: '05', title: 'Slaughtering & Processing', body: 'Modern processing facilities with cold chain management and by-product utilization for protein meals.' },
          { num: '06', title: 'Distribution & Market Support', body: 'The Temry brand and comprehensive distribution networks connecting our products to consumers.' },
        ],
      },
      strength: {
        eyebrow: 'Our Strength',
        title: 'Built on decades of experience',
        body:
          'With over three decades in the industry, Dakahlia Group has refined every process across the value chain. Our expertise spans modern farming techniques, advanced processing technology, and efficient distribution networks — all working in harmony.',
        stats: [
          { value: '100%', label: 'Vertical Integration' },
          { value: '6', label: 'Value Chain Stages' },
          { value: '5', label: 'Business Divisions' },
          { value: '30+', label: 'Years of Expertise' },
        ],
      },
    },
    sustainability: {
      hero: {
        title: 'Sustainability & Social Impact',
        subtitle:
          'Building a responsible future through environmental stewardship and deep community investment.',
      },
      environmental: {
        eyebrow: 'Environmental Sustainability',
        title: 'Protecting our planet',
        body:
          'We integrate environmental responsibility into every aspect of our operations, from renewable energy adoption to circular economy practices.',
        items: [
          { title: 'Renewable Energy', body: 'Solar power adoption across operations, driving energy efficiency and reducing carbon footprint through clean energy solutions.' },
          { title: 'Responsible Processing', body: 'Full utilization of by-products through circular economy principles, ensuring zero waste and creating value from every resource.' },
          { title: 'Sustainable Operations', body: 'Water efficiency systems, waste minimization protocols, and environmentally conscious practices throughout all facilities.' },
        ],
      },
      commitment: {
        eyebrow: 'Our Commitment',
        title: 'Sustainability at our core',
        body:
          'Environmental responsibility is not an afterthought — it is embedded into everything we do. From solar-powered facilities to zero-waste processing, we continuously invest in practices that protect the planet while delivering exceptional products.',
        stats: [
          { value: '30%', label: 'Carbon Reduction' },
          { value: '100%', label: 'By-product Utilization' },
          { value: '☀', label: 'Solar Powered Operations' },
          { value: '0', label: 'Zero Waste Processing' },
        ],
      },
      community: {
        eyebrow: 'Community Impact',
        title: 'Investing in people',
        body:
          'Through the Al Anani Foundation, we channel our success back into the communities that surround us. From healthcare and education to women empowerment programs, our social impact initiatives create lasting change for thousands of families.',
      },
      foundation: {
        eyebrow: 'Al Anani Foundation',
        title: 'Social impact & community development',
        items: [
          { title: 'Healthcare', body: 'Damas Hospital provides comprehensive medical services including drug addiction treatment and speech therapy programs.' },
          { title: 'Education', body: 'Agricultural schools and youth skill development programs preparing the next generation for sustainable careers.' },
          { title: "Women's Empowerment", body: 'Carpet weaving, sewing, and textile workshops create economic opportunities and empower women in local communities.' },
          { title: 'Humanitarian Aid', body: 'Regular food distribution programs and seasonal assistance ensuring vulnerable communities receive essential support.' },
        ],
      },
    },
    news: {
      hero: {
        title: 'News & Insights',
        subtitle: 'Stay updated on our latest developments, industry participation, and sustainability initiatives.',
      },
      empty: 'No news articles available at this time.',
    },
    careers: {
      hero: {
        title: 'Careers',
        subtitle: "Join a team that's shaping the future of food and agriculture in Egypt and beyond.",
      },
      culture: {
        eyebrow: 'Work With Us',
        title: 'Our culture',
        intro:
          'At Dakahlia Group, we foster a culture of accountability, teamwork, and mutual respect that empowers every team member.',
        items: [
          { title: 'Teamwork', body: 'Collaborative environment where diverse perspectives drive innovation and results.' },
          { title: 'Accountability', body: 'Ownership of actions and outcomes with transparent communication at every level.' },
          { title: 'Respect', body: 'Dignity and mutual respect form the foundation of all professional relationships.' },
        ],
      },
      positions: {
        eyebrow: 'Open Positions',
        title: 'Current opportunities',
        empty: 'No open positions at this time.',
      },
      apply: {
        eyebrow: 'Submit Your CV',
        title: 'Apply today',
        fields: { name: 'Full Name', email: 'Email', phone: 'Phone', cover: 'Cover Letter' },
        button: 'Submit Application',
      },
    },
    contact: {
      hero: {
        title: 'Contact Us',
        subtitle: "Get in touch with Dakahlia Group. We'd love to hear from you.",
      },
      info: {
        officeLabel: 'Head Office',
        officeValue: '9th Floor, 15 Ramo Buildings, Nasr City, Cairo, Egypt',
        hotlineLabel: 'Hotline',
        hotlineValue: '16459',
        phoneLabel: 'Phone',
        phoneValue: '0223054802 / 0223054799',
        emailLabel: 'Email',
        emailValue: 'info@dakahlia.com',
        hoursLabel: 'Working Hours',
        hoursValue: 'Sun – Thu: 8:00 AM – 5:00 PM',
      },
      form: {
        eyebrow: 'Send a Message',
        title: 'Inquiry form',
        fields: { name: 'Full Name', email: 'Email', phone: 'Phone', subject: 'Subject', message: 'Message' },
        button: 'Send Message',
      },
    },
  },
}

const ar: Dict = {
  nav: {
    home: 'الرئيسية',
    about: 'من نحن',
    companies: 'شركاتنا',
    valueChain: 'سلسلة القيمة',
    sustainability: 'الاستدامة',
    news: 'الأخبار',
    careers: 'الوظائف',
    contact: 'تواصل معنا',
    cta: 'تواصل معنا',
  },
  hero: {
    eyebrow: 'مصر · منذ التسعينيات',
    headline: 'نبني منظومات غذائية متكاملة لمستقبل مستدام',
    subtitle:
      'من أراضي مصر الخصبة إلى الأسواق العالمية، تقدم مجموعة الدقهلية التميز في كل مراحل سلسلة قيمة الغذاء والزراعة.',
    primaryCta: 'تعرف على شركاتنا',
    secondaryCta: 'اطلع على أثرنا',
    stat1Label: 'سنة من الريادة',
    stat1Value: '+٣٠',
    stat2Label: 'قطاعات أعمال',
    stat2Value: '٥',
    stat3Label: 'تكامل رأسي',
    stat3Value: '٪١٠٠',
  },
  whoWeAre: {
    eyebrow: 'من نحن',
    title: 'منظومة متكاملة — من المزرعة إلى المائدة',
    intro:
      'خمسة قطاعات أعمال مترابطة تغطي كامل سلسلة قيمة الغذاء والزراعة، بُنيت على ثلاثة عقود من التميز المصري.',
    companies: [
      {
        number: '٠١',
        name: 'الدواجن',
        desc: 'إنتاج متكامل لدجاج التسمين وقطعان الأمهات بريادة صناعية تمتد لعقود عبر سلسلة القيمة الكاملة.',
        meta: '+٣٠ سنة من الريادة',
      },
      {
        number: '٠٢',
        name: 'الزراعة',
        desc: 'زراعة واسعة النطاق واستصلاح للأراضي في وادي النطرون، نحوّل الصحراء إلى حصاد وفير.',
      },
      {
        number: '٠٣',
        name: 'تصنيع الأغذية',
        desc: 'تصنيع دواجن بأحدث التقنيات مع إدارة كاملة لسلسلة التبريد ومعايير سلامة غذائية صارمة.',
      },
      {
        number: '٠٤',
        name: 'الكيماويات',
        desc: 'كيماويات وأسمدة زراعية متميزة مدعومة بشراكات عالمية وحلول علمية متقدمة.',
      },
      {
        number: '٠٥',
        name: 'التنمية الاجتماعية',
        desc: 'برامج رعاية صحية وتعليم وتمكين مجتمعي ترتقي بالمجتمعات المصرية.',
      },
    ],
  },
  pillars: {
    integration: {
      title: 'سلسلة قيمة متكاملة',
      body:
        'منظومتنا الفريدة من المزرعة إلى المستهلك تربط كل مرحلة من مراحل الإنتاج، من المدخلات الزراعية وحتى التوزيع النهائي، لتحقق كفاءة ورقابة جودة لا مثيل لهما.',
    },
    sustainability: {
      title: 'الاستدامة والمسؤولية',
      body:
        'من خلال اعتماد الطاقة المتجددة، وممارسات الاقتصاد الدائري، والبرامج الاجتماعية لمؤسسة العناني، نبني مستقبلاً أفضل لمصر وللمجتمعات التي نخدمها.',
    },
  },
  vision: {
    eyebrow: 'رؤيتنا',
    headline: 'أن نحقق الريادة العالمية في الزراعة والغذاء.',
    body: 'نضع المعيار للجودة والابتكار والممارسات المستدامة في كل سوق نخدمه.',
  },
  storyTeaser: {
    eyebrow: 'قصتنا',
    title: 'نشأنا من جذور مصرية أصيلة',
    body:
      'أكثر من ثلاثة عقود من الخبرة والتميز التشغيلي. كمجموعة رائدة متكاملة في الغذاء والزراعة، يكرّس فريقنا ومزارعونا جهودهم لتقديم منتجات عالية الجودة لعملائنا والمستهلكين حول العالم.',
    cta: 'اقرأ قصتنا',
  },
  careersTeaser: {
    eyebrow: 'فرص رائعة',
    title: 'كن جزءاً من فريق الدقهلية',
    body:
      'نبحث دائماً عن المواهب والشغوفين للانضمام إلى فريقنا. اكتشف ما يجعل مسيرتك المهنية في مجموعة الدقهلية تجربة استثنائية.',
    cta: 'استعرض الوظائف',
    employees: [
      { name: 'أحمد', location: 'القاهرة' },
      { name: 'منى', location: 'وادي النطرون' },
      { name: 'يوسف', location: 'الدقهلية' },
    ],
  },
  newsTeaser: {
    title: 'أخبارنا',
    cta: 'عرض كل الأخبار',
    empty: 'لا توجد مقالات أخبار متاحة حالياً.',
  },
  footer: {
    tagline: 'نبني منظومات غذائية متكاملة لمستقبل مستدام.',
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
        eyebrow: 'من نحن',
        title: 'عن مجموعة الدقهلية',
        subtitle:
          'كيان مصري خاص متنوع الأنشطة، يمتلك عقوداً من التميز في مجالي الزراعة والمنظومات الغذائية.',
      },
      intro: {
        eyebrow: 'من نحن',
        title: 'متجذرون في مصر، ننمو نحو العالم',
        p1: 'مجموعة الدقهلية كيان مصري خاص متنوع الأنشطة، نمت من جذورها في صناعة الدواجن لتصبح مجموعة رائدة متكاملة في الغذاء والزراعة.',
        p2: 'تمتد أعمالنا لتشمل إنتاج الدواجن، والكيماويات الزراعية، وتصنيع الأغذية، والزراعة واسعة النطاق، والتنمية الاجتماعية، حيث نخلق قيمة في كل مرحلة من السلسلة الغذائية.',
        p3: 'التزامنا بالجودة والابتكار والاستدامة هو ما يحرّك كل ما نقوم به — من أراضي دلتا النيل الخصبة إلى الأسواق العالمية التي نخدمها.',
        statBadge: '+٣٠ سنة من التميز',
      },
      journey: {
        eyebrow: 'مسيرتنا',
        title: 'إرث من النمو والابتكار',
        items: [
          { year: 'البداية', title: 'الانطلاق', body: 'تأسيس عائلة العناني لأولى مزارع التسمين في محافظة الدقهلية، لتُرسي أساس التميز الزراعي.' },
          { year: 'التوسع', title: 'اتساع الأثر', body: 'التوسع في عمليات قطعان الأمهات وعقد شراكات استراتيجية مع روّاد عالميين في إضافات الأعلاف.' },
          { year: 'التنويع', title: 'آفاق جديدة', body: 'الدخول إلى مجال الزراعة باستصلاح الأراضي في وادي النطرون، وتأسيس قدرات التصنيع، وإطلاق علامة "تمري" للمستهلكين.' },
          { year: 'اليوم', title: 'مجموعة متكاملة', body: 'مجموعة متنوعة بالكامل تشمل الدواجن والزراعة والكيماويات وتصنيع الأغذية والتنمية الاجتماعية.' },
        ],
      },
      visionMission: {
        visionTitle: 'رؤيتنا',
        visionBody:
          'أن نحقق الريادة العالمية في الزراعة والغذاء، ونضع المعيار للجودة والابتكار والممارسات المستدامة في كل سوق نخدمه.',
        missionTitle: 'رسالتنا',
        missionBody:
          'تقديم منتجات زراعية وغذائية متميزة للأسواق المحلية والعالمية، مبنية على أسس الابتكار والنزاهة والالتزام تجاه المجتمعات التي نخدمها.',
      },
      values: {
        eyebrow: 'قيمنا',
        title: 'المبادئ التي توجّهنا',
        items: [
          { name: 'الاحترام', body: 'تقدير كل فرد وترسيخ الكرامة في جميع التعاملات.' },
          { name: 'النزاهة', body: 'الالتزام بأعلى المعايير الأخلاقية في كل ما نقوم به.' },
          { name: 'التميز', body: 'السعي لأعلى مستويات الجودة في المنتجات والخدمات والعلاقات.' },
          { name: 'تحمّل المسؤولية', body: 'تحمّل المسؤولية الشخصية عن الأفعال والنتائج.' },
          { name: 'النمو المستدام', body: 'البناء للمستقبل مع رعاية الحاضر.' },
        ],
      },
      leadership: {
        eyebrow: 'القيادة',
        title: 'التوجيه الاستراتيجي والحوكمة',
        p1: 'تجسّد قيادة مجموعة الدقهلية فلسفة إدارية متجذرة في الرؤية بعيدة المدى، والتميز التشغيلي، والإشراف المسؤول. يضمن هيكلنا الإداري المساءلة على كل المستويات، مع تمكين فرقنا للابتكار وتحقيق نتائج تخدم عملاءنا ومجتمعاتنا وبيئتنا.',
        p2: 'مستلهمين من روح المبادرة لدى عائلة العناني المؤسِّسة والتزامها تجاه المجتمع، يقود فريقنا التنفيذي مبادرات استراتيجية توازن بين طموحات النمو والممارسات المستدامة، ضماناً لبقاء مجموعة الدقهلية اسماً موثوقاً في المنظومات الغذائية المصرية والعالمية.',
      },
    },
    companies: {
      hero: {
        title: 'شركاتنا',
        subtitle: 'خمسة قطاعات أعمال مترابطة تعمل معاً لتقديم التميز عبر سلسلة قيمة الغذاء والزراعة.',
      },
      intro: {
        eyebrow: 'محفظتنا',
        title: 'القوة من خلال التنويع',
      },
      items: [
        {
          index: '٠١',
          name: 'الدقهلية للدواجن',
          tagline: 'الركيزة الأساسية للمجموعة',
          body: 'تمثّل الدقهلية للدواجن أساس عمليات المجموعة، حيث تقدّم تميزاً متكاملاً في إنتاج الدواجن من خلال عقود من الخبرة والابتكار المتواصل.',
          bullets: [
            'إنتاج دجاج التسمين وقطعان الأمهات',
            'توزيع المنتجات البيطرية واللقاحات',
            'إضافات الأعلاف وحلول التغذية',
            'الدعم الفني واستشارات إدارة المزارع',
          ],
        },
        {
          index: '٠٢',
          name: 'شمس للكيماويات',
          tagline: 'التميز الزراعي عبر العلم',
          body: 'تقدّم شمس للكيماويات منتجات كيماوية وأسمدة زراعية عالية الجودة، تدعم المزارع المصري بحلول علمية لتغذية المحاصيل وحمايتها.',
          bullets: [
            'منتجات تغذية التربة والأسمدة',
            'مدخلات حماية ودعم المحاصيل',
            'مصادر موثوقة من شركاء عالميين',
            'دعم استشاري فني للتطبيق',
          ],
        },
        {
          index: '٠٣',
          name: 'مجازر الدقهلية',
          tagline: 'التميز في التصنيع وسلامة الغذاء',
          body: 'منشأة متطورة لتصنيع الدواجن تضمن أعلى معايير سلامة الغذاء ومراقبة الجودة وإدارة سلسلة التبريد بكفاءة.',
          bullets: [
            'عمليات ذبح وتصنيع حديثة',
            'إدارة شاملة لسلسلة التبريد',
            'استغلال المخلفات الجانبية لإنتاج البروتين',
            'بروتوكولات صارمة لسلامة الغذاء والجودة',
          ],
        },
        {
          index: '٠٤',
          name: 'الدقهلية للزراعة',
          tagline: 'من الصحراء إلى الحصاد',
          body: 'نقود تحويل الأراضي الصحراوية المستصلحة إلى عمليات زراعية منتجة، حيث نزرع محاصيل متميزة للأسواق المحلية والدولية.',
          bullets: [
            'استصلاح وتطوير الأراضي في وادي النطرون',
            'زراعة الموالح والبطاطس والعنب والزيتون والتمر',
            'عمليات تصدير إلى الأسواق العالمية',
            'منشآت تصنيع زيت الزيتون والمخللات والزبيب',
          ],
        },
        {
          index: '٠٥',
          name: 'مؤسسة العناني',
          tagline: 'بناء مجتمعات أقوى',
          body: 'الذراع الاجتماعية لمجموعة الدقهلية، مكرّسة لتحسين حياة الناس عبر برامج الرعاية الصحية والتعليم والتنمية المجتمعية.',
          bullets: [
            'مستشفى دمياط والخدمات الصحية',
            'مدارس زراعية وتدريب مهني',
            'تمكين المرأة من خلال برامج المهارات',
            'مساعدات إنسانية وتوزيع غذاء',
          ],
        },
      ],
    },
    valueChain: {
      hero: {
        title: 'سلسلة القيمة المتكاملة',
        subtitle: 'منظومة من المزرعة إلى المستهلك تربط كل مرحلة من مراحل الإنتاج لتحقيق كفاءة وجودة لا مثيل لهما.',
      },
      approach: {
        eyebrow: 'منهجنا',
        title: 'تميز متكامل في كل مرحلة',
        body: 'يربط نموذج سلسلة القيمة الفريد لمجموعة الدقهلية بين الإنتاج الزراعي، والمدخلات، وعمليات الدواجن، والتصنيع، والتوزيع، في منظومة متكاملة. هذا التكامل يتيح لنا الحفاظ على رقابة الجودة، وتعظيم الكفاءة، وتقديم منتجات متفوقة من المزرعة إلى المستهلك.',
      },
      farmToTable: {
        eyebrow: 'من المزرعة إلى المستهلك',
        title: 'تحكّم كامل، جودة ثابتة',
        body: 'بامتلاكنا كل حلقة في السلسلة — من زراعة الأرض إلى توصيل المنتج النهائي — نقضي على أوجه القصور ونضمن تتبّعاً كاملاً. نموذجنا المتكامل رأسياً يعني أن كل قرار يستند إلى التزام واحد بالتميز.',
        badge: 'إمكانية التتبع الكامل من المنشأ إلى المائدة',
      },
      model: {
        eyebrow: 'النموذج',
        title: 'ست مراحل مترابطة',
        stages: [
          { num: '٠١', title: 'الإنتاج الزراعي', body: 'استصلاح الأراضي وزراعة محاصيل متنوعة تشمل الموالح والبطاطس والعنب والزيتون والتمر في وادي النطرون.' },
          { num: '٠٢', title: 'إضافات الأعلاف والمدخلات', body: 'شراكات استراتيجية لإضافات الأعلاف والكيماويات الزراعية والأسمدة عبر شمس للكيماويات.' },
          { num: '٠٣', title: 'إنتاج الدواجن', body: 'عمليات متكاملة لدجاج التسمين وقطعان الأمهات تقدّم إنتاجاً ثابت الجودة.' },
          { num: '٠٤', title: 'الخدمات البيطرية والفنية', body: 'برامج شاملة لصحة الحيوان، وبروتوكولات الأمن الحيوي، ودعم إدارة المزارع.' },
          { num: '٠٥', title: 'الذبح والتصنيع', body: 'منشآت تصنيع حديثة مع إدارة سلسلة التبريد واستغلال المخلفات لإنتاج وجبات البروتين.' },
          { num: '٠٦', title: 'التوزيع ودعم السوق', body: 'علامة "تمري" وشبكات توزيع شاملة تربط منتجاتنا بالمستهلكين.' },
        ],
      },
      strength: {
        eyebrow: 'مصدر قوتنا',
        title: 'بُني على عقود من الخبرة',
        body: 'مع أكثر من ثلاثة عقود في الصناعة، صقلت مجموعة الدقهلية كل عملية عبر سلسلة القيمة. تمتد خبرتنا لتشمل تقنيات الزراعة الحديثة، وتكنولوجيا التصنيع المتقدمة، وشبكات التوزيع الفعالة — كلها تعمل في تناغم.',
        stats: [
          { value: '٪١٠٠', label: 'تكامل رأسي' },
          { value: '٦', label: 'مراحل سلسلة القيمة' },
          { value: '٥', label: 'قطاعات أعمال' },
          { value: '+٣٠', label: 'سنة من الخبرة' },
        ],
      },
    },
    sustainability: {
      hero: {
        title: 'الاستدامة والأثر الاجتماعي',
        subtitle: 'نبني مستقبلاً مسؤولاً من خلال الإشراف البيئي والاستثمار العميق في المجتمعات.',
      },
      environmental: {
        eyebrow: 'الاستدامة البيئية',
        title: 'حماية كوكبنا',
        body: 'ندمج المسؤولية البيئية في كل جانب من عملياتنا، من اعتماد الطاقة المتجددة إلى ممارسات الاقتصاد الدائري.',
        items: [
          { title: 'الطاقة المتجددة', body: 'اعتماد الطاقة الشمسية في عملياتنا، لتعزيز كفاءة الطاقة وتقليل البصمة الكربونية عبر حلول الطاقة النظيفة.' },
          { title: 'تصنيع مسؤول', body: 'استغلال كامل للمخلفات الجانبية وفق مبادئ الاقتصاد الدائري، لضمان انعدام المخلفات وخلق قيمة من كل مورد.' },
          { title: 'عمليات مستدامة', body: 'أنظمة كفاءة المياه، وبروتوكولات تقليل المخلفات، وممارسات واعية بيئياً في جميع المنشآت.' },
        ],
      },
      commitment: {
        eyebrow: 'التزامنا',
        title: 'الاستدامة في صميم عملنا',
        body: 'المسؤولية البيئية ليست أمراً ثانوياً — إنها متجذرة في كل ما نقوم به. من المنشآت العاملة بالطاقة الشمسية إلى التصنيع الخالي من المخلفات، نستثمر باستمرار في ممارسات تحمي الكوكب مع تقديم منتجات استثنائية.',
        stats: [
          { value: '٪٣٠', label: 'تقليل الكربون' },
          { value: '٪١٠٠', label: 'استغلال المخلفات الجانبية' },
          { value: '☀', label: 'عمليات بالطاقة الشمسية' },
          { value: '٠', label: 'تصنيع خالٍ من المخلفات' },
        ],
      },
      community: {
        eyebrow: 'الأثر المجتمعي',
        title: 'الاستثمار في الإنسان',
        body: 'من خلال مؤسسة العناني، نوجّه نجاحنا إلى المجتمعات المحيطة بنا. من الرعاية الصحية والتعليم إلى برامج تمكين المرأة، تُحدث مبادراتنا الاجتماعية تغييراً دائماً لآلاف الأسر.',
      },
      foundation: {
        eyebrow: 'مؤسسة العناني',
        title: 'الأثر الاجتماعي والتنمية المجتمعية',
        items: [
          { title: 'الرعاية الصحية', body: 'يقدّم مستشفى دمياط خدمات طبية شاملة تشمل علاج الإدمان وبرامج علاج النطق.' },
          { title: 'التعليم', body: 'مدارس زراعية وبرامج تنمية مهارات الشباب تُعدّ الجيل القادم لمهن مستدامة.' },
          { title: 'تمكين المرأة', body: 'ورش حياكة السجاد والخياطة والمنسوجات تخلق فرصاً اقتصادية وتمكّن المرأة في المجتمعات المحلية.' },
          { title: 'المساعدات الإنسانية', body: 'برامج منتظمة لتوزيع الغذاء ومساعدات موسمية تضمن وصول الدعم الأساسي للمجتمعات المحتاجة.' },
        ],
      },
    },
    news: {
      hero: {
        title: 'الأخبار والمستجدات',
        subtitle: 'تابع آخر تطوراتنا، ومشاركتنا في الصناعة، ومبادراتنا في الاستدامة.',
      },
      empty: 'لا توجد مقالات أخبار متاحة حالياً.',
    },
    careers: {
      hero: {
        title: 'الوظائف',
        subtitle: 'انضم إلى فريق يصنع مستقبل الغذاء والزراعة في مصر وخارجها.',
      },
      culture: {
        eyebrow: 'اعمل معنا',
        title: 'ثقافتنا',
        intro: 'في مجموعة الدقهلية، نُرسّخ ثقافة المساءلة والعمل الجماعي والاحترام المتبادل التي تمكّن كل عضو في الفريق.',
        items: [
          { title: 'العمل الجماعي', body: 'بيئة تعاونية تجمع وجهات نظر متنوعة لدفع الابتكار والنتائج.' },
          { title: 'تحمّل المسؤولية', body: 'تملّك الأفعال والنتائج مع تواصل شفاف على جميع المستويات.' },
          { title: 'الاحترام', body: 'الكرامة والاحترام المتبادل هما أساس كل العلاقات المهنية.' },
        ],
      },
      positions: {
        eyebrow: 'الوظائف الشاغرة',
        title: 'الفرص الحالية',
        empty: 'لا توجد وظائف شاغرة حالياً.',
      },
      apply: {
        eyebrow: 'قدّم سيرتك الذاتية',
        title: 'قدّم اليوم',
        fields: { name: 'الاسم الكامل', email: 'البريد الإلكتروني', phone: 'الهاتف', cover: 'خطاب التقديم' },
        button: 'إرسال الطلب',
      },
    },
    contact: {
      hero: {
        title: 'تواصل معنا',
        subtitle: 'تواصل مع مجموعة الدقهلية. يسعدنا أن نسمع منك.',
      },
      info: {
        officeLabel: 'المقر الرئيسي',
        officeValue: 'الدور التاسع، ١٥ عمارات رامو، مدينة نصر، القاهرة، مصر',
        hotlineLabel: 'الخط الساخن',
        hotlineValue: '١٦٤٥٩',
        phoneLabel: 'الهاتف',
        phoneValue: '٠٢٢٣٠٥٤٨٠٢ / ٠٢٢٣٠٥٤٧٩٩',
        emailLabel: 'البريد الإلكتروني',
        emailValue: 'info@dakahlia.com',
        hoursLabel: 'ساعات العمل',
        hoursValue: 'الأحد – الخميس: ٨:٠٠ ص – ٥:٠٠ م',
      },
      form: {
        eyebrow: 'أرسل رسالة',
        title: 'نموذج الاستفسار',
        fields: { name: 'الاسم الكامل', email: 'البريد الإلكتروني', phone: 'الهاتف', subject: 'الموضوع', message: 'الرسالة' },
        button: 'إرسال الرسالة',
      },
    },
  },
}

export const content: Record<Locale, Dict> = { en, ar }
