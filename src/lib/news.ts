// Sample news articles — replace with real CMS data when ready

export interface Article {
  id: string
  date: string
  dateAr: string
  category: string
  categoryAr: string
  title: string
  titleAr: string
  excerpt: string
  excerptAr: string
  image: string
  readTime: string
  readTimeAr: string
}

export const articles: Article[] = [
  {
    id: 'solar-expansion-2025',
    date: 'May 12, 2025',
    dateAr: '١٢ مايو ٢٠٢٥',
    category: 'Sustainability',
    categoryAr: 'الاستدامة',
    title: 'Dakahlia Group Expands Solar Energy Capacity Across Wadi El Natroun Operations',
    titleAr: 'مجموعة الدقهلية توسّع طاقتها الشمسية عبر عمليات وادي النطرون',
    excerpt: 'Dakahlia Group has completed a major expansion of its solar energy installations at the Wadi El Natroun agricultural complex, significantly increasing clean energy generation capacity and reducing carbon emissions across its integrated operations.',
    excerptAr: 'أتمت مجموعة الدقهلية توسعة كبرى لمنشآتها للطاقة الشمسية في مجمع وادي النطرون الزراعي، مما رفع بشكل ملحوظ من طاقتها في توليد الكهرباء النظيفة وخفض انبعاثات الكربون عبر عملياتها المتكاملة.',
    image: '/images/solar-panels-real.jpg',
    readTime: '3 min read',
    readTimeAr: '٣ دقائق قراءة',
  },
  {
    id: 'temry-launch-2025',
    date: 'March 28, 2025',
    dateAr: '٢٨ مارس ٢٠٢٥',
    category: 'Products',
    categoryAr: 'المنتجات',
    title: 'Temry Air-Chilled Chicken Sets New Standard for Premium Poultry in Egypt',
    titleAr: 'دجاج تمري المبرد بالهواء يضع معياراً جديداً للدواجن المتميزة في مصر',
    excerpt: 'Dakahlia Slaughterhouse has expanded the Temry product range, introducing Egypt\'s first fully air-chilled premium chicken line. The launch positions Temry as the benchmark for quality and food safety in the Egyptian poultry market.',
    excerptAr: 'وسّعت مجازر الدقهلية مجموعة منتجات تمري، بإطلاق أول خط دجاج متميز مبرد بالهواء بالكامل في مصر، ليضع تمري معياراً للجودة وسلامة الغذاء في سوق الدواجن المصري.',
    image: '/images/hero-4-broiler-interior.jpg',
    readTime: '4 min read',
    readTimeAr: '٤ دقائق قراءة',
  },
  {
    id: 'agriculture-export-2025',
    date: 'February 10, 2025',
    dateAr: '١٠ فبراير ٢٠٢٥',
    category: 'Operations',
    categoryAr: 'العمليات',
    title: 'Dakahlia Agriculture Surpasses 3,000 Export Containers in Record Season',
    titleAr: 'الدقهلية للزراعة تتجاوز ٣٠٠٠ حاوية تصديرية في موسم قياسي',
    excerpt: 'Dakahlia Agricultural Development has recorded its strongest export season to date, shipping over 3,000 containers of premium Egyptian produce — including citrus, potatoes, grapes, and Medjool dates — to markets across Europe, Russia, Asia, and the GCC.',
    excerptAr: 'سجّلت شركة الدقهلية للتطوير الزراعي أقوى موسم تصديري في تاريخها، بشحن أكثر من ٣٠٠٠ حاوية من المنتجات المصرية المتميزة — تشمل الموالح والبطاطس والعنب وتمر المجهول — إلى أسواق في أوروبا وروسيا وآسيا والخليج.',
    image: '/images/agriculture-citrus.jpg',
    readTime: '3 min read',
    readTimeAr: '٣ دقائق قراءة',
  },
  {
    id: 'aleef-petology-2025',
    date: 'January 5, 2025',
    dateAr: '٥ يناير ٢٠٢٥',
    category: 'Launch',
    categoryAr: 'إطلاق',
    title: 'Petology Introduces Aleef — A Science-Backed Premium Pet Nutrition Brand',
    titleAr: 'بتولوجي تطلق أليف — علامة تغذية حيوانات أليفة متميزة مدعومة علمياً',
    excerpt: 'Dakahlia Group has launched Petology, a unified pet nutrition platform built on science and care. The flagship brand Aleef offers vet-informed premium formulations, while sister brand Lingo delivers reliable everyday nutrition at an accessible price point.',
    excerptAr: 'أطلقت مجموعة الدقهلية بتولوجي، منصة موحدة لتغذية الحيوانات الأليفة مبنية على العلم والاهتمام. تقدم العلامة الرئيسية أليف تركيبات متميزة مدروسة بيطرياً، فيما تقدم العلامة الشقيقة لينجو تغذية يومية موثوقة بسعر في متناول الجميع.',
    image: '/images/aleef-logo.png',
    readTime: '2 min read',
    readTimeAr: '٢ دقائق قراءة',
  },
  {
    id: 'anani-foundation-2024',
    date: 'November 20, 2024',
    dateAr: '٢٠ نوفمبر ٢٠٢٤',
    category: 'Community',
    categoryAr: 'المجتمع',
    title: 'Al Anani Foundation Expands Vocational Training Programs Across Minya Governorate',
    titleAr: 'مؤسسة العناني توسّع برامج التدريب المهني في محافظة المنيا',
    excerpt: 'The Al Anani Foundation for Social Development has expanded its vocational training programs, enrolling hundreds of new students in sewing, electrical, and applied agricultural technology courses across its facilities in Minya and Damas.',
    excerptAr: 'وسّعت مؤسسة العناني للتنمية الاجتماعية برامجها للتدريب المهني، بقبول مئات الطلاب الجدد في دورات الخياطة والكهرباء والتكنولوجيا الزراعية التطبيقية في منشآتها بالمنيا ودمياط.',
    image: '/images/community-real.jpg',
    readTime: '4 min read',
    readTimeAr: '٤ دقائق قراءة',
  },
  {
    id: 'shams-partnerships-2024',
    date: 'October 3, 2024',
    dateAr: '٣ أكتوبر ٢٠٢٤',
    category: 'Partnerships',
    categoryAr: 'الشراكات',
    title: 'Shams Chemicals Deepens Global Partnerships to Advance Egyptian Agricultural Productivity',
    titleAr: 'شمس للكيماويات تعمّق شراكاتها العالمية لتعزيز الإنتاجية الزراعية المصرية',
    excerpt: 'Shams Agricultural Chemicals has strengthened its partnerships with leading international agri-input brands including Omnia Nutriology, Mirstem, and Plymag, bringing cutting-edge fertilizer and crop protection technologies to Egyptian farmers.',
    excerptAr: 'عزّزت شمس للكيماويات الزراعية شراكاتها مع شركاء دوليين رائدين في مجال المدخلات الزراعية، من بينهم أومنيا نيوترولوجي وميرستم وبليماج، لإيصال تقنيات الأسمدة وحماية المحاصيل المتقدمة إلى المزارعين المصريين.',
    image: '/images/people-real.jpg',
    readTime: '3 min read',
    readTimeAr: '٣ دقائق قراءة',
  },
]
