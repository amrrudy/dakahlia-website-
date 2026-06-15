import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '../../lib/i18n'

export default function StoryTeaser() {
  const { t, dir } = useI18n()

  return (
    <section className="py-24 lg:py-32 bg-brand-cream relative">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[5/4]">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=80"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating yellow badge */}
            <div className="absolute -bottom-6 start-6 lg:-start-6 bg-brand-yellow text-brand-ink px-6 py-4 rounded-2xl shadow-lg">
              <div className="font-display text-3xl leading-none">30+</div>
              <div className="text-xs uppercase tracking-wider font-semibold mt-1">
                {t.hero.stat1Label}
              </div>
            </div>
            {/* Decorative egg shape */}
            <svg className="absolute -top-6 end-6 lg:-end-6 w-16 h-20" viewBox="0 0 40 50">
              <ellipse cx="20" cy="28" rx="18" ry="22" fill="#04793e" />
              <ellipse cx="20" cy="28" rx="13" ry="17" fill="none" stroke="#e2e01b" strokeWidth="1" />
            </svg>
          </div>

          {/* Content side */}
          <div>
            <p className="eyebrow mb-6">{t.storyTeaser.eyebrow}</p>
            <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-brand-ink text-balance">
              {t.storyTeaser.title}
            </h2>
            <p className="mt-8 text-lg text-brand-ink/70 leading-relaxed text-pretty">
              {t.storyTeaser.body}
            </p>
            <Link to="/about" className="btn-primary mt-10">
              {t.storyTeaser.cta} <ArrowRight size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
