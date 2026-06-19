import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import { articles } from '../lib/news'
import TypedHeading from '../components/TypedHeading'

const glassChip = 'backdrop-blur-xl backdrop-saturate-200 border shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]'
const categoryColors: Record<string, string> = {
  Sustainability: `bg-brand-green/[0.08] text-brand-green border-brand-green/25 ${glassChip}`,
  Products:       `bg-brand-yellow/[0.15] text-brand-ink border-brand-yellow/30 ${glassChip}`,
  Operations:     `bg-brand-ink/[0.06] text-brand-ink border-brand-ink/15 ${glassChip}`,
  Launch:         `bg-brand-green-light/[0.15] text-brand-green border-brand-green-light/30 ${glassChip}`,
  Community:      `bg-brand-yellow/[0.15] text-brand-ink border-brand-yellow/30 ${glassChip}`,
  Partnerships:   `bg-brand-ink/[0.06] text-brand-ink border-brand-ink/15 ${glassChip}`,
}

export default function News() {
  const { t, locale, dir } = useI18n()
  const p = t.pages.news

  return (
    <>
      {/* Custom News Hero — full-bleed background image */}
      <section className="relative overflow-hidden min-h-[460px] lg:min-h-[540px] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/images/agriculture-citrus.jpg"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
        </div>
        {/* Dark gradient overlay — heavy at bottom for legibility, fades to top */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/55 to-brand-ink/15 pointer-events-none" />

        <div className="container-x relative z-10 pt-44 pb-14">
          <TypedHeading
            text={p.hero.title}
            className="display-text text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white text-balance max-w-3xl"
          />
          <p className="mt-5 sm:mt-6 text-base sm:text-lg max-w-2xl leading-relaxed text-white/75 text-pretty">
            {p.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-white via-white to-brand-cream overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -start-24 w-[26rem] h-[26rem] rounded-full bg-brand-green/15 blur-3xl animate-blob-float" />
          <div className="absolute top-1/3 -end-32 w-[28rem] h-[28rem] rounded-full bg-brand-yellow/15 blur-3xl animate-blob-float" style={{ animationDelay: '5s' }} />
          <div className="absolute -bottom-32 start-1/3 w-[24rem] h-[24rem] rounded-full bg-brand-green-light/15 blur-3xl animate-blob-float" style={{ animationDelay: '9s' }} />
        </div>

        <div className="container-x relative">

          {/* Featured article — glass card */}
          <Link
            to={`/news/${articles[0].id}`}
            className="group grid lg:grid-cols-[1.3fr_1fr] gap-0 mb-10 rounded-2xl overflow-hidden
              bg-white/45 backdrop-blur-2xl backdrop-saturate-200
              border border-white/70
              shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_25px_60px_-20px_rgba(13,31,23,0.2)]
              transition-all duration-500
              hover:-translate-y-1
              hover:border-brand-green/40
              hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_35px_80px_-20px_rgba(4,121,62,0.3)]"
          >
            <div className="relative overflow-hidden aspect-[16/9] lg:aspect-auto min-h-[300px]">
              <img loading="lazy" decoding="async"
                src={articles[0].image}
                alt={locale === 'ar' ? articles[0].titleAr : articles[0].title}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 to-transparent" />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <span className={`text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full ${categoryColors[articles[0].category] ?? `bg-brand-green/[0.08] text-brand-green border-brand-green/25 ${glassChip}`}`}>
                  {locale === 'ar' ? articles[0].categoryAr : articles[0].category}
                </span>
                <span className="text-xs text-brand-ink/55">
                  {locale === 'ar' ? articles[0].dateAr : articles[0].date}
                </span>
              </div>
              <h2 className="display-text text-2xl md:text-3xl lg:text-4xl text-brand-ink leading-tight text-balance mb-5">
                {locale === 'ar' ? articles[0].titleAr : articles[0].title}
              </h2>
              <p className="text-brand-ink/70 leading-relaxed text-pretty mb-8">
                {locale === 'ar' ? articles[0].excerptAr : articles[0].excerpt}
              </p>
              <div className="flex items-center gap-2 font-bold text-sm text-brand-green uppercase tracking-wider">
                {locale === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                <ArrowRight size={15} className={`transition-transform group-hover:translate-x-1 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
              </div>
            </div>
          </Link>

          {/* Grid of remaining articles — glass cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article) => (
              <Link
                key={article.id}
                to={`/news/${article.id}`}
                className="group relative rounded-2xl overflow-hidden flex flex-col
                  bg-white/45 backdrop-blur-2xl backdrop-saturate-200
                  border border-white/70
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_15px_40px_-15px_rgba(13,31,23,0.15)]
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-brand-green/40
                  hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_25px_55px_-15px_rgba(4,121,62,0.3)]"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img loading="lazy" decoding="async"
                    src={article.image}
                    alt={locale === 'ar' ? article.titleAr : article.title}
                    className={`w-full h-full transition-transform duration-[1200ms] ease-out group-hover:scale-105 ${article.image.includes('logo') ? 'object-contain bg-brand-ink p-8' : 'object-cover'}`}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full ${categoryColors[article.category] ?? `bg-brand-green/[0.08] text-brand-green border-brand-green/25 ${glassChip}`}`}>
                      {locale === 'ar' ? article.categoryAr : article.category}
                    </span>
                    <span className="text-xs text-brand-ink/45">
                      {locale === 'ar' ? article.dateAr : article.date}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-brand-ink leading-tight text-balance mb-3 flex-1 group-hover:text-brand-green transition-colors">
                    {locale === 'ar' ? article.titleAr : article.title}
                  </h3>
                  <p className="text-sm text-brand-ink/65 leading-relaxed line-clamp-3 mb-5">
                    {locale === 'ar' ? article.excerptAr : article.excerpt}
                  </p>
                  <div className="pt-4 border-t border-brand-ink/10 flex items-center justify-between gap-3">
                    <span className="text-xs text-brand-ink/45">
                      {locale === 'ar' ? article.readTimeAr : article.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-green uppercase tracking-wider">
                      {locale === 'ar' ? 'اقرأ' : 'Read'}
                      <ArrowRight size={12} className={`transition-transform group-hover:translate-x-0.5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
