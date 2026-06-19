import { Check } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import TypedHeading from '../components/TypedHeading'
import LazySection from '../components/LazySection'

const pillarImages = [
  '/images/people-real.jpg',         // real Dakahlia worker — date harvest
  '/images/solar-panels-real.jpg',   // real Dakahlia solar farm photo
  '/images/community-real.jpg',      // real Dakahlia community/education photo
]

const pillarColors = [
  'bg-brand-green',
  'bg-brand-ink',
  'bg-brand-yellow text-brand-ink',
]

export default function Sustainability() {
  const { t } = useI18n()
  const p = t.pages.sustainability

  return (
    <>
      {/* Custom Sustainability Hero — full-bleed background image */}
      <section className="relative overflow-hidden min-h-[460px] lg:min-h-[540px] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/images/solar-panels-real.jpg"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 55%' }}
          />
        </div>
        {/* Dark gradient overlay — heavy at bottom for legibility */}
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

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
            <div>
              <p className="eyebrow mb-5">{p.intro.eyebrow}</p>
              <h2 className="display-text text-3xl sm:text-4xl md:text-5xl text-brand-ink text-balance">
                {p.intro.title}
              </h2>
            </div>
            <div className="lg:pt-12">
              <p className="text-lg sm:text-xl text-brand-ink/70 leading-relaxed text-pretty">{p.intro.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <LazySection>
      <section className="py-20 lg:py-28 bg-brand-cream leaf-bg">
        <div className="container-x space-y-10 lg:space-y-16">
          {p.pillars.map((pillar, i) => {
            const reversed = i % 2 === 1
            return (
              <article key={pillar.title} className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Image */}
                <div className={`${reversed ? 'lg:order-2' : ''}`}>
                  <div className="img-card rounded-2xl aspect-[5/3]">
                    <img loading="lazy" decoding="async" src={pillarImages[i]} alt={pillar.title} />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-xl backdrop-saturate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] ${
                    i === 0 ? 'bg-brand-green/15 text-brand-green border border-brand-green/35' :
                    i === 1 ? 'bg-brand-yellow/15 text-brand-ink border border-brand-yellow/40' :
                    'bg-brand-ink/10 text-brand-ink border border-brand-ink/25'
                  }`}>
                    <span className="font-display text-lg">{String(i + 1).padStart(2, '0')}</span>
                    {pillar.title}
                  </div>
                  <p className="text-lg text-brand-ink/70 leading-relaxed mb-8 text-pretty">{pillar.body}</p>
                  <ul className="space-y-3">
                    {pillar.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center mt-0.5">
                          <Check size={13} className="text-brand-green" strokeWidth={3} />
                        </div>
                        <span className="text-brand-ink/80">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </section>
      </LazySection>

      {/* Dark CTA strip */}
      <LazySection>
      <section className="py-20 lg:py-24 bg-brand-ink text-white relative overflow-hidden">
        <svg className="absolute -top-20 -right-20 w-[500px] h-[500px] opacity-5" viewBox="0 0 100 100">
          <path d="M50 5 C25 25, 25 60, 50 95 C75 60, 75 25, 50 5 Z" fill="white" />
        </svg>
        <div className="container-x relative">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-20 items-center">
            <div>
              <p className="eyebrow !text-brand-yellow mb-5">{p.foundation.eyebrow}</p>
              <h2 className="display-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-balance">
                {p.foundation.title}
              </h2>
            </div>
            <div className="space-y-4 text-white/75 text-lg leading-relaxed">
              <p>{p.foundation.body}</p>
              <ul className="space-y-2 mt-6">
                {p.foundation.programs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-brand-yellow mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      </LazySection>
    </>
  )
}
