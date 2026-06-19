import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import { articles } from '../lib/news'

const glassChip = 'backdrop-blur-xl backdrop-saturate-200 border shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]'
const categoryColors: Record<string, string> = {
  Sustainability: `bg-brand-green/[0.08] text-brand-green border-brand-green/25 ${glassChip}`,
  Products:       `bg-brand-yellow/[0.15] text-brand-ink border-brand-yellow/30 ${glassChip}`,
  Operations:     `bg-brand-ink/[0.06] text-brand-ink border-brand-ink/15 ${glassChip}`,
  Launch:         `bg-brand-green-light/[0.15] text-brand-green border-brand-green-light/30 ${glassChip}`,
  Community:      `bg-brand-yellow/[0.15] text-brand-ink border-brand-yellow/30 ${glassChip}`,
  Partnerships:   `bg-brand-ink/[0.06] text-brand-ink border-brand-ink/15 ${glassChip}`,
}

export default function NewsArticle() {
  const { id } = useParams<{ id: string }>()
  const { t, locale, dir } = useI18n()
  const p = t.pages.news

  const article = articles.find((a) => a.id === id)

  if (!article) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center bg-brand-cream">
        <div className="text-center">
          <p className="text-2xl text-brand-ink/70 mb-6">{p.notFound}</p>
          <Link to="/news" className="btn-primary">
            <ArrowLeft size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
            {p.backToNews}
          </Link>
        </div>
      </section>
    )
  }

  const more = articles.filter((a) => a.id !== article.id).slice(0, 3)

  const title = locale === 'ar' ? article.titleAr : article.title
  const excerpt = locale === 'ar' ? article.excerptAr : article.excerpt
  const category = locale === 'ar' ? article.categoryAr : article.category
  const date = locale === 'ar' ? article.dateAr : article.date
  const readTime = locale === 'ar' ? article.readTimeAr : article.readTime

  return (
    <>
      {/* ── Hero — matches PageHero proportions ── */}
      <section className="relative pt-44 pb-16 lg:pt-52 lg:pb-20 overflow-hidden leaf-bg">
        <div className="absolute -top-20 -right-32 w-[600px] h-[600px] rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full bg-brand-yellow/8 blur-3xl pointer-events-none" />

        <div className="container-x relative">
          <div className="max-w-4xl">
            {/* Back link */}
            <Link
              to="/news"
              className="group inline-flex items-center gap-2 mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-ink/60 hover:text-brand-green transition-colors"
            >
              <ArrowLeft
                size={14}
                className={`transition-transform ${
                  dir === 'rtl'
                    ? 'rotate-180 group-hover:translate-x-1'
                    : 'group-hover:-translate-x-1'
                }`}
              />
              {p.backToNews}
            </Link>

            {/* Category eyebrow pill — sits directly under the back link */}
            <div className="mb-8">
              <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-[0.22em] px-3 py-1.5 rounded-full ${categoryColors[article.category] ?? `bg-brand-green/[0.08] text-brand-green border-brand-green/25 ${glassChip}`}`}>
                {category}
              </span>
            </div>

            {/* Title — PageHero scale */}
            <h1 className="display-text text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-balance text-brand-ink leading-[1.02]">
              {title}
            </h1>

            {/* Meta row */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs text-brand-ink/70 bg-white/40 backdrop-blur-xl backdrop-saturate-200 border border-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                <Calendar size={13} />
                {date}
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs text-brand-ink/70 bg-white/40 backdrop-blur-xl backdrop-saturate-200 border border-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                <Clock size={13} />
                {readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hero image + body — glass-framed ── */}
      <section className="relative pb-20 lg:pb-28 bg-brand-cream overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 -start-24 w-[26rem] h-[26rem] rounded-full bg-brand-green/15 blur-3xl animate-blob-float" />
          <div className="absolute top-1/2 -end-32 w-[28rem] h-[28rem] rounded-full bg-brand-yellow/12 blur-3xl animate-blob-float" style={{ animationDelay: '5s' }} />
          <div className="absolute -bottom-32 start-1/3 w-[24rem] h-[24rem] rounded-full bg-brand-green-light/15 blur-3xl animate-blob-float" style={{ animationDelay: '9s' }} />
        </div>

        <div className="container-x relative">
          {/* Image card — rounded on all sides, pushed down 10px so the top border is visible */}
          <div className="max-w-5xl mx-auto mt-[10px]">
            <div className="relative rounded-3xl overflow-hidden
              border border-white/60
              shadow-[0_30px_70px_-20px_rgba(13,31,23,0.25)]">
              <img loading="lazy" decoding="async"
                src={article.image}
                alt={title}
                className={`block w-full ${article.image.includes('logo') ? 'object-contain bg-brand-ink p-16 aspect-[16/9]' : 'object-cover aspect-[16/9]'}`}
              />
            </div>
          </div>

          {/* Body card */}
          <div className="max-w-3xl mx-auto mt-12 lg:mt-16">
            <article className="relative rounded-3xl p-8 md:p-10 lg:p-14
              bg-white/45 backdrop-blur-2xl backdrop-saturate-200
              border border-white/70
              shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_30px_60px_-20px_rgba(13,31,23,0.15)]">

              {/* Eyebrow ornament */}
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-brand-green" />
                <span className="text-[10px] uppercase tracking-[0.32em] text-brand-green font-bold">
                  {locale === 'ar' ? 'القصة' : 'The Story'}
                </span>
              </div>

              <p className="text-xl lg:text-2xl text-brand-ink leading-[1.55] text-pretty font-display
                first-letter:font-display first-letter:text-7xl first-letter:font-bold
                first-letter:text-brand-green first-letter:float-start first-letter:me-3
                first-letter:mt-1 first-letter:leading-[0.85]">
                {excerpt}
              </p>

              {/* Hairline divider + signature */}
              <div className="mt-10 pt-6 border-t border-brand-ink/10 flex items-center justify-between">
                <span className="font-display italic text-brand-ink/55 text-sm">
                  {locale === 'ar' ? '— مجموعة الدقهلية' : '— Dakahlia Group'}
                </span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-brand-ink/45 font-semibold">
                  {category}
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── More stories ── */}
      {more.length > 0 && (
        <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 end-1/4 w-[26rem] h-[26rem] rounded-full bg-brand-green/12 blur-3xl animate-blob-float" />
            <div className="absolute -bottom-32 -start-24 w-[28rem] h-[28rem] rounded-full bg-brand-yellow/12 blur-3xl animate-blob-float" style={{ animationDelay: '6s' }} />
          </div>

          <div className="container-x relative">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
              <div>
                <p className="eyebrow mb-4">{p.moreStories}</p>
                <h2 className="display-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brand-ink">
                  {locale === 'ar' ? 'مقالات قد تهمك' : 'You may also like'}
                </h2>
              </div>
              <Link to="/news" className="btn-outline !px-5 !py-2.5 !text-xs">
                {p.backToNews}
                <ArrowRight size={14} className={dir === 'rtl' ? 'rotate-180' : ''} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {more.map((a) => (
                <Link
                  key={a.id}
                  to={`/news/${a.id}`}
                  className="group relative rounded-2xl overflow-hidden
                    bg-white/45 backdrop-blur-2xl backdrop-saturate-200
                    border border-white/70
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_15px_40px_-15px_rgba(13,31,23,0.15)]
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-brand-green/40
                    hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_25px_55px_-15px_rgba(4,121,62,0.3)]"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img loading="lazy" decoding="async"
                      src={a.image}
                      alt=""
                      className={`w-full h-full transition-transform duration-[1200ms] ease-out group-hover:scale-105 ${a.image.includes('logo') ? 'object-contain bg-brand-ink p-6' : 'object-cover'}`}
                    />
                  </div>
                  <div className="p-6">
                    <span className={`text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full ${categoryColors[a.category] ?? `bg-brand-green/[0.08] text-brand-green border-brand-green/25 ${glassChip}`}`}>
                      {locale === 'ar' ? a.categoryAr : a.category}
                    </span>
                    <h3 className="font-display text-lg lg:text-xl text-brand-ink mt-4 leading-tight text-balance group-hover:text-brand-green transition-colors">
                      {locale === 'ar' ? a.titleAr : a.title}
                    </h3>
                    <div className="mt-4 pt-4 border-t border-brand-ink/10 flex items-center justify-between text-xs text-brand-ink/55">
                      <span>{locale === 'ar' ? a.dateAr : a.date}</span>
                      <span className="inline-flex items-center gap-1 font-bold uppercase tracking-[0.18em] text-brand-green">
                        {locale === 'ar' ? 'اقرأ' : 'Read'}
                        <ArrowRight size={11} className={`transition-transform group-hover:translate-x-0.5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
