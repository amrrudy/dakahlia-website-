import { Link } from 'react-router-dom'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { useI18n } from '../../lib/i18n'

export default function Hero() {
  const { t, dir } = useI18n()
  const Arrow = dir === 'rtl' ? () => <ArrowRight className="rotate-180" size={18} /> : () => <ArrowRight size={18} />

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/40 to-brand-ink/20" />
      </div>

      {/* Decorative leaf scribbles */}
      <svg className="absolute top-32 right-16 w-32 h-32 opacity-30 hidden lg:block animate-sway origin-bottom" viewBox="0 0 100 100">
        <path d="M50 10 Q70 30 60 50 Q50 70 30 60 Q10 50 20 30 Q30 10 50 10 Z" fill="#62bc54" />
      </svg>

      <div className="container-x relative pb-20 lg:pb-28 pt-32 text-white w-full">
        <div className="max-w-5xl">
          <p className="eyebrow !text-brand-yellow mb-6 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            {t.hero.eyebrow}
          </p>
          <h1
            className="display-text text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-balance animate-fade-up"
            style={{ animationDelay: '0.25s', opacity: 0 }}
          >
            {t.hero.headline}
          </h1>
          <p
            className="mt-8 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed text-pretty animate-fade-up"
            style={{ animationDelay: '0.5s', opacity: 0 }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: '0.7s', opacity: 0 }}
          >
            <Link to="/companies" className="btn-primary !bg-brand-yellow !text-brand-ink hover:!bg-white">
              {t.hero.primaryCta} <Arrow />
            </Link>
            <Link to="/sustainability" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-brand-ink">
              {t.hero.secondaryCta}
            </Link>
          </div>

          {/* Stat strip */}
          <div
            className="mt-16 grid grid-cols-3 gap-6 md:gap-10 max-w-2xl pt-8 border-t border-white/20 animate-fade-up"
            style={{ animationDelay: '0.9s', opacity: 0 }}
          >
            <div>
              <div className="font-display text-4xl md:text-5xl text-brand-yellow leading-none">{t.hero.stat1Value}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-white/70">{t.hero.stat1Label}</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-brand-yellow leading-none">{t.hero.stat2Value}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-white/70">{t.hero.stat2Label}</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-brand-yellow leading-none">{t.hero.stat3Value}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-white/70">{t.hero.stat3Label}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-fade-in" style={{ animationDelay: '1.2s', opacity: 0 }}>
        <ArrowDown size={20} className="animate-bounce" />
      </div>
    </section>
  )
}
