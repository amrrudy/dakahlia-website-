import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { useI18n } from '../../lib/i18n'
import { articles } from '../../lib/news'
import Reveal from '../Reveal'


export default function NewsTeaser() {
  const { t, locale, dir } = useI18n()
  const latest = articles.slice(0, 4)

  return (
    <section className="relative bg-brand-ink overflow-hidden">

      {/* ── Section header ── */}
      <div className="container-x pt-20 pb-12 flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <p className="eyebrow !text-brand-green-light mb-4">{t.newsTeaser.title}</p>
          <h2 className="display-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
            {locale === 'ar' ? 'آخر المستجدات' : 'Stories & Updates'}
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <Link
            to="/news"
            className="group inline-flex items-center gap-2 text-white/60 hover:text-brand-yellow transition-colors font-semibold uppercase tracking-wider text-sm"
          >
            {t.newsTeaser.cta}
            <ArrowUpRight
              size={16}
              className={`transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${dir === 'rtl' ? 'rotate-[270deg]' : ''}`}
            />
          </Link>
        </Reveal>
      </div>

      {/* ── Expanding-panel strip — narrow by default, premium expand on hover ── */}
      <div className="flex flex-col md:flex-row h-[600px] md:h-[560px]">
        {latest.map((article, i) => (
          <Link
            key={article.id}
            to={`/news/${article.id}`}
            className="group relative block overflow-hidden cursor-pointer
              border-s border-white/5 first:border-s-0
              flex-1 md:hover:flex-[1.8]
              transition-[flex-grow,flex-shrink] duration-[900ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {/* Background image */}
            <div className="absolute inset-0 overflow-hidden">
              <img loading="lazy" decoding="async"
                src={article.image}
                alt=""
                className={`absolute inset-0 w-full h-full transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] scale-110 group-hover:scale-100 ${
                  article.image.includes('logo') ? 'object-contain bg-brand-ink p-16' : 'object-cover'
                }`}
              />
            </div>

            {/* Gradient overlay — heavier when narrow, lighter when expanded */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/75 to-brand-ink/40 transition-opacity duration-[900ms] group-hover:opacity-70" />

            {/* Brand-green tint slides in from the bottom on hover */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[900ms]" />

            {/* Animated bottom accent bar */}
            <div className="pointer-events-none absolute bottom-0 inset-x-0 h-[3px] bg-brand-yellow scale-x-0 group-hover:scale-x-100 origin-start transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />



            {/* Always-visible compact title (vertical orientation when narrow) */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-7">

              {/* Title — slides up subtly when expanded */}
              <h3 className="font-display text-lg lg:text-xl text-white leading-tight text-balance
                transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:text-brand-yellow
                group-hover:-translate-y-1
                line-clamp-3 group-hover:line-clamp-none">
                {locale === 'ar' ? article.titleAr : article.title}
              </h3>

              {/* Date + read more — height + opacity reveal */}
              <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100
                transition-all duration-[700ms] delay-[200ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/20 gap-3">
                  <span className="text-xs text-white/55 whitespace-nowrap">
                    {locale === 'ar' ? article.dateAr : article.date}
                  </span>
                  {/* Read CTA — glass pill with sliding arrow */}
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                    bg-brand-yellow/15 backdrop-blur-xl backdrop-saturate-200
                    border border-brand-yellow/40
                    text-brand-yellow text-[10px] font-bold uppercase tracking-[0.22em] whitespace-nowrap
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]
                    transition-all duration-300
                    group-hover:bg-brand-yellow group-hover:text-brand-ink">
                    {locale === 'ar' ? 'اقرأ' : 'Read'}
                    <ArrowRight
                      size={13}
                      strokeWidth={2.5}
                      className={`transition-transform duration-500 delay-[350ms] group-hover:translate-x-1 ${dir === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : ''}`}
                    />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>
  )
}
