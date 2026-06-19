import { useEffect, useMemo, useState, useRef } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import {
  Search, ChevronDown, Menu, X, ArrowRight,
  Home, Info, Building2, Workflow, Leaf, Newspaper, Briefcase, Mail, FileText,
} from 'lucide-react'
import { useI18n } from '../lib/i18n'
import { articles } from '../lib/news'
import Logo from './Logo'
import LangSwitcher from './LangSwitcher'

type SearchItem = {
  type: 'page' | 'news'
  label: string
  labelAr: string
  desc: string
  descAr: string
  to: string
  Icon: typeof Search
}

interface MegaPanel {
  image: string
  label: string
  desc?: string
  to: string
}
interface NavItem {
  label: string
  to: string
  mega?: MegaPanel[]
  megaCta?: { label: string; to: string }
}

export default function Header() {
  const { t, locale, dir } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const location = useLocation()
  const navigate = useNavigate()
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const isHome = location.pathname === '/'
  const overHero = isHome && !scrolled && !activeMenu

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveMenu(null)
  }, [location.pathname])

  useEffect(() => {
    if (!searchOpen) {
      setSearchQuery('')
      setHighlightedIndex(0)
      return
    }
    // Focus input when search opens
    const id = setTimeout(() => searchInputRef.current?.focus(), 100)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSearchOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(id)
      window.removeEventListener('keydown', onKey)
    }
  }, [searchOpen])

  // Searchable index — pages + news articles
  const searchIndex = useMemo<SearchItem[]>(() => {
    const pages: SearchItem[] = [
      { type: 'page', label: t.nav.home,           labelAr: 'الرئيسية',     desc: 'Dakahlia Group homepage',    descAr: 'الصفحة الرئيسية لمجموعة الدقهلية', to: '/',              Icon: Home },
      { type: 'page', label: t.nav.about,          labelAr: 'عن المجموعة',  desc: 'Our story & leadership',     descAr: 'قصتنا والقيادة',                  to: '/about',         Icon: Info },
      { type: 'page', label: t.nav.companies,      labelAr: 'الشركات',      desc: 'Group companies portfolio',  descAr: 'محفظة شركات المجموعة',           to: '/companies',     Icon: Building2 },
      { type: 'page', label: t.nav.valueChain,     labelAr: 'سلسلة القيمة', desc: 'Farm-to-consumer model',     descAr: 'نموذج المزرعة إلى المستهلك',     to: '/value-chain',   Icon: Workflow },
      { type: 'page', label: t.nav.sustainability, labelAr: 'الاستدامة',    desc: 'Environment & community',    descAr: 'البيئة والمجتمع',                 to: '/sustainability', Icon: Leaf },
      { type: 'page', label: t.nav.news,           labelAr: 'الأخبار',      desc: 'Latest stories & updates',   descAr: 'آخر القصص والمستجدات',           to: '/news',          Icon: Newspaper },
      { type: 'page', label: t.nav.careers,        labelAr: 'الوظائف',      desc: 'Open positions & culture',   descAr: 'الوظائف الشاغرة والثقافة',       to: '/careers',       Icon: Briefcase },
      { type: 'page', label: t.nav.contact, labelAr: 'تواصل معنا', desc: 'Get in touch', descAr: 'تواصل معنا', to: '/contact', Icon: Mail },
    ]
    const news: SearchItem[] = articles.map((a) => ({
      type: 'news',
      label: a.title,
      labelAr: a.titleAr,
      desc: a.category,
      descAr: a.categoryAr,
      to: `/news/${a.id}`,
      Icon: FileText,
    }))
    return [...pages, ...news]
  }, [t])

  const filteredSuggestions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) {
      // Empty query — show top 6 pages (popular destinations)
      return searchIndex.filter((i) => i.type === 'page').slice(0, 6)
    }
    return searchIndex.filter((i) => {
      const hay = `${i.label} ${i.labelAr} ${i.desc} ${i.descAr}`.toLowerCase()
      return hay.includes(q)
    }).slice(0, 6)
  }, [searchIndex, searchQuery])

  // Reset highlight whenever the filtered list changes
  useEffect(() => {
    setHighlightedIndex(0)
  }, [searchQuery])

  const goToSuggestion = (item: SearchItem) => {
    setSearchOpen(false)
    navigate(item.to)
  }

  const onSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlightedIndex((i) => Math.min(i + 1, filteredSuggestions.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlightedIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const item = filteredSuggestions[highlightedIndex]
      if (item) goToSuggestion(item)
    }
  }

  // Bilingual helper: pick EN or AR based on current locale
  const tr = (en: string, ar: string) => (locale === 'ar' ? ar : en)

  const navItems: NavItem[] = [
    {
      label: t.nav.about,
      to: '/about',
    },
    {
      label: t.nav.companies,
      to: '/companies',
      mega: [
        { image: '/images/poultry-chicks.jpg',           label: tr('Dakahlia Poultry',       'الدقهلية للدواجن'),   desc: tr('40+ years integrated poultry',   'أكثر من 40 عاماً في الدواجن المتكاملة'), to: '/companies' },
        { image: '/images/agriculture-citrus.jpg',       label: tr('Dakahlia Agriculture',    'الدقهلية للزراعة'),   desc: tr('17,000+ feddans, global export', 'أكثر من 17,000 فدان وتصدير عالمي'),    to: '/companies' },
        { image: '/images/slaughterhouse-processing.jpg',label: tr('Dakahlia Slaughterhouse', 'مجازر الدقهلية'),     desc: tr('Temry · Al-Dar · 45M birds/yr',  'تمري · الدار · 45 مليون طير/سنوياً'),   to: '/companies' },
        { image: '/images/Shams.jpg',                    label: tr('Shams Chemicals',         'شمس للكيماويات'),     desc: tr('Agricultural inputs & science',  'مدخلات زراعية مدعومة بالعلم'),         to: '/companies' },
        { image: '/images/anani-foundation-dropdown.jpg', label: tr('Al Anani Foundation',     'مؤسسة العناني'),       desc: tr('Social impact & community development', 'أثر اجتماعي وتنمية مجتمعية'),                                          to: '/companies' },
      ],
      megaCta: { label: tr('Explore All Companies', 'استعرض جميع الشركات'), to: '/companies' },
    },
    {
      label: t.nav.sustainability,
      to: '/sustainability',
      mega: [
        { image: '/images/people-real.jpg',       label: tr('People',      'الأشخاص'), desc: tr('Training, education & workforce', 'التدريب والتعليم والقوى العاملة'),         to: '/sustainability' },
        { image: '/images/solar-panels-real.jpg', label: tr('Environment', 'البيئة'),   desc: tr('Solar, circular economy & water', 'الطاقة الشمسية والاقتصاد الدائري والمياه'), to: '/sustainability' },
        { image: '/images/community-real.jpg',    label: tr('Community',   'المجتمع'),  desc: tr('Al Anani Foundation programs',    'برامج مؤسسة العناني'),                       to: '/sustainability' },
      ],
      megaCta: { label: tr('See Our Impact', 'استعرض أثرنا'), to: '/sustainability' },
    },
    { label: t.nav.news,    to: '/news' },
    { label: t.nav.careers, to: '/careers' },
    { label: t.nav.contact, to: '/contact' },
  ]

  const openMenu  = (label: string) => { if (leaveTimer.current) clearTimeout(leaveTimer.current); setActiveMenu(label) }
  const closeMenu = ()               => { leaveTimer.current = setTimeout(() => setActiveMenu(null), 100) }
  const keepMenu  = ()               => { if (leaveTimer.current) clearTimeout(leaveTimer.current) }

  const NAV_GAP = 10 // px — gap from top of viewport
  const NAV_H = 72 // px — keep in sync with h-[72px] below
  const NAV_OFFSET = NAV_GAP + NAV_H // total offset for elements anchored below the header

  return (
    <>
      {/* ── Header bar ─────────────────────────────────────────────────── */}
      <header
        className={`fixed top-[10px] inset-x-[10px] z-50 rounded-2xl transition-all duration-300 backdrop-blur-md backdrop-saturate-150 ${
          overHero
            ? 'bg-white/10 border border-white/15'
            : 'bg-white/55 border border-white/35 shadow-[0_4px_30px_rgba(0,0,0,0.06)]'
        }`}
      >
        <div className="container-x flex items-center h-[72px] gap-6">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0" aria-label="Dakahlia Group">
            <Logo
              variant="horizontal"
              tone={overHero ? 'light' : 'dark'}
              className="h-14 lg:h-16 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center flex-1 justify-center gap-0">
            {navItems.map((item) => {
              const hasMega = !!item.mega
              const isOpen  = activeMenu === item.label
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasMega && openMenu(item.label)}
                  onMouseLeave={closeMenu}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `flex items-center gap-1 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors relative ${
                        overHero
                          ? 'text-white/90 hover:text-white'
                          : isActive || isOpen
                            ? 'text-brand-green'
                            : 'text-brand-ink hover:text-brand-green'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {hasMega && (
                          <ChevronDown
                            size={11}
                            className={`transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        )}
                        {isActive && !overHero && (
                          <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-green rounded-full" />
                        )}
                      </>
                    )}
                  </NavLink>
                </div>
              )
            })}
          </nav>

          {/* Right: lang + search */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0 ms-auto">
            <LangSwitcher inverse={overHero} />
            <button
              onClick={() => setSearchOpen((s) => !s)}
              aria-label="Search"
              className={`btn-glass-icon w-9 h-9 ${overHero ? 'text-white' : 'text-brand-ink'}`}
            >
              <Search size={17} />
            </button>
          </div>

          {/* Mobile hamburger — same dark-glass treatment on every page */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
            className="lg:hidden ms-auto relative inline-flex items-center justify-center w-11 h-11 rounded-full
              backdrop-blur-2xl backdrop-saturate-200
              bg-white/55 border border-brand-ink/15 text-brand-ink
              shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_8px_20px_-8px_rgba(13,31,23,0.18)]
              transition-all duration-300 active:scale-95
              hover:bg-white/75 hover:border-brand-ink/25"
          >
            {mobileOpen ? <X size={20} strokeWidth={2.25} /> : <Menu size={20} strokeWidth={2.25} />}
          </button>
        </div>

      </header>

      {/* ── Spotlight-style search modal ──────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
          searchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!searchOpen}
      >
        {/* Backdrop — click to close */}
        <div
          onClick={() => setSearchOpen(false)}
          className="absolute inset-0 bg-brand-ink/40 backdrop-blur-md"
        />

        {/* Centered card */}
        <div
          className={`absolute left-1/2 top-[18vh] -translate-x-1/2 w-[92%] max-w-[640px] transition-all duration-300 ${
            searchOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 -translate-y-2'
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden
            bg-white/65 backdrop-blur-3xl backdrop-saturate-200
            border border-white/70
            shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_30px_80px_-20px_rgba(13,31,23,0.45)]">

            {/* Search input row */}
            <div className="relative px-5 py-4 border-b border-brand-ink/8">
              <Search
                size={20}
                className="absolute start-6 top-1/2 -translate-y-1/2 text-brand-ink/40"
              />
              <input
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={onSearchKeyDown}
                placeholder={locale === 'ar' ? 'ابحث في الصفحات والأخبار…' : 'Search pages and news…'}
                className="w-full ps-10 pe-16 py-2 bg-transparent text-brand-ink placeholder:text-brand-ink/40 text-lg outline-none border-0"
              />
              {/* Esc hint */}
              <kbd className="absolute end-5 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-wider font-bold text-brand-ink/45 px-2 py-1 rounded-md bg-white/50 border border-brand-ink/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
                Esc
              </kbd>
            </div>

            {/* Suggestions */}
            <div className="px-3 py-3">
              {/* Section header */}
              <div className="px-2 pb-2 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-brand-ink/45">
                  {searchQuery.trim()
                    ? (locale === 'ar' ? 'النتائج' : 'Results')
                    : (locale === 'ar' ? 'انتقل إلى' : 'Jump to')}
                </span>
                <span className="text-[10px] text-brand-ink/35 hidden sm:inline">
                  ↑ ↓ {locale === 'ar' ? 'للتنقل' : 'navigate'}  ·  ↵ {locale === 'ar' ? 'لفتح' : 'open'}
                </span>
              </div>

              {filteredSuggestions.length === 0 ? (
                <div className="py-10 text-center text-sm text-brand-ink/55">
                  {locale === 'ar' ? 'لا توجد نتائج' : 'No matches found'}
                </div>
              ) : (
                <ul className="space-y-1">
                  {filteredSuggestions.map((item, i) => {
                    const Icon = item.Icon
                    const isActive = i === highlightedIndex
                    const label = locale === 'ar' ? item.labelAr : item.label
                    const desc = locale === 'ar' ? item.descAr : item.desc
                    return (
                      <li key={`${item.type}-${item.to}-${i}`}>
                        <button
                          type="button"
                          onMouseEnter={() => setHighlightedIndex(i)}
                          onClick={() => goToSuggestion(item)}
                          className={`w-full group flex items-center gap-3 px-3 py-2.5 rounded-xl text-start
                            transition-colors duration-150
                            ${isActive
                              ? 'bg-brand-green/12'
                              : 'bg-transparent hover:bg-brand-ink/[0.04]'}`}
                        >
                          <span className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors
                            ${isActive ? 'bg-brand-green text-white' : 'bg-brand-green/10 text-brand-green'}`}>
                            <Icon size={16} />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-semibold text-brand-ink truncate">{label}</span>
                            <span className="block text-[11px] text-brand-ink/55 truncate">
                              <span className="uppercase tracking-wider me-2 text-[9px] font-bold">
                                {item.type === 'page'
                                  ? (locale === 'ar' ? 'صفحة' : 'Page')
                                  : (locale === 'ar' ? 'خبر' : 'News')}
                              </span>
                              {desc}
                            </span>
                          </span>
                          <ArrowRight
                            size={14}
                            className={`flex-shrink-0 transition-all ${
                              dir === 'rtl' ? 'rotate-180' : ''
                            } ${
                              isActive
                                ? 'text-brand-green translate-x-0.5'
                                : 'text-brand-ink/30 opacity-0 group-hover:opacity-100'
                            }`}
                          />
                        </button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mega-menu panel — glass design matching the header ──────────── */}
      {navItems.map((item) =>
        item.mega && activeMenu === item.label ? (
          <div
            key={item.label}
            className="fixed inset-x-[10px] z-40 rounded-2xl overflow-hidden border border-white/20
              bg-white/5 backdrop-blur-3xl backdrop-saturate-200
              shadow-[0_20px_60px_-20px_rgba(13,31,23,0.35)]"
            style={{ top: `${NAV_OFFSET + 6}px` }}
            onMouseEnter={keepMenu}
            onMouseLeave={closeMenu}
          >
            {/* Subtle gradient sheen — same as search overlay */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent"
            />
            {/* Inner top highlight line */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />

            {/* ── Card row ── */}
            <div className="container-x relative py-6">
              <div
                className="grid gap-4"
                style={{ gridTemplateColumns: `repeat(${item.mega.length}, 1fr)` }}
              >
                {item.mega.map((panel) => (
                  <Link
                    key={panel.label}
                    to={panel.to}
                    onClick={() => setActiveMenu(null)}
                    className="group relative flex flex-col gap-2.5 p-2 rounded-xl
                      bg-white/30 backdrop-blur-xl backdrop-saturate-200
                      border border-white/40
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]
                      transition-all duration-300
                      hover:bg-white/50 hover:border-brand-green/40
                      hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_15px_30px_-12px_rgba(4,121,62,0.25)]"
                  >
                    {/* Image — fixed height, rounded glass frame */}
                    <div className="relative overflow-hidden rounded-lg bg-brand-cream/50" style={{ height: '150px' }}>
                      <img
                        src={panel.image}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Soft dark vignette on hover for depth */}
                      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Label row */}
                    <div className="px-1 pb-1 flex items-start justify-between gap-1">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-ink group-hover:text-brand-green transition-colors flex items-center gap-1.5">
                          {panel.label}
                          <ArrowRight
                            size={10}
                            className={`opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0 ${dir === 'rtl' ? 'rotate-180' : ''}`}
                          />
                        </p>
                        {panel.desc && <p className="mt-1 text-xs text-brand-ink/55 leading-snug">{panel.desc}</p>}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Glass green CTA bar (matches btn-primary recipe) ── */}
            {item.megaCta && (
              <Link
                to={item.megaCta.to}
                onClick={() => setActiveMenu(null)}
                className="group relative flex items-center gap-2.5 px-8 py-3.5 w-full text-white text-[10px] font-bold uppercase tracking-[0.22em] overflow-hidden
                  bg-brand-green/85 backdrop-blur-xl backdrop-saturate-200
                  border-t border-white/20
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]
                  transition-all duration-300
                  hover:bg-brand-green"
              >
                <ArrowRight size={13} className={`transition-transform duration-300 group-hover:translate-x-1 ${dir === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                {item.megaCta.label}
              </Link>
            )}
          </div>
        ) : null
      )}

      {/* ── Mobile menu ─────────────────────────────────────────────────── */}
      <div
        className={`lg:hidden fixed inset-x-[10px] z-40 rounded-2xl bg-white/75 backdrop-blur-lg backdrop-saturate-150 border border-white/35 overflow-y-auto transition-all duration-300 ease-out ${
          mobileOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ top: `${NAV_OFFSET + 6}px` }}
      >
        <nav className="container-x py-5 flex flex-col divide-y divide-brand-ink/6">
          {navItems.map((item) => (
            <div key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] ${
                    isActive ? 'text-brand-green' : 'text-brand-ink'
                  }`
                }
              >
                {item.label}
                {item.mega && <ChevronDown size={13} />}
              </NavLink>
              {item.mega && (
                <div className="pb-4 ps-3 grid grid-cols-2 gap-2">
                  {item.mega.map((panel) => (
                    <Link
                      key={panel.label}
                      to={panel.to}
                      className="text-[10px] font-semibold uppercase tracking-wider text-brand-ink/60 hover:text-brand-green transition-colors py-1"
                    >
                      {panel.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-5 flex flex-col gap-3">
            <Link to="/contact" className="btn-primary justify-center text-center">{t.nav.cta}</Link>
            <div className="flex justify-center pt-1"><LangSwitcher /></div>
          </div>
        </nav>
      </div>

      {/* Backdrop */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-30 bg-brand-ink/15 backdrop-blur-[1px]"
          style={{ top: `${NAV_OFFSET}px` }}
          onMouseEnter={() => setActiveMenu(null)}
        />
      )}
    </>
  )
}
