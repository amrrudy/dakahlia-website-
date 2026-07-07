import { Check } from 'lucide-react'
import { useI18n } from '../lib/i18n'
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
          <h1 className="display-text text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white max-w-4xl whitespace-nowrap">{p.hero.title}</h1>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg max-w-2xl leading-relaxed text-white/75 text-pretty">
            {p.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28">
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
      <section className="py-20 lg:py-28 leaf-bg">
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
                  <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-2xl backdrop-saturate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_8px_24px_-6px_rgba(0,0,0,0.12)] ${
                    i === 0 ? 'bg-brand-green/20 text-brand-green border border-brand-green/30' :
                    i === 1 ? 'bg-brand-yellow/20 text-brand-ink border border-brand-yellow/30' :
                    'bg-white/40 text-brand-ink border border-white/60'
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

      {/* Al Anani Foundation */}
      <LazySection>
      <section className="py-14 lg:py-20 bg-brand-ink text-white relative overflow-hidden">
        {/* Ambient glows */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -start-40 w-[50rem] h-[50rem] rounded-full bg-brand-green/10 blur-[120px]" />
          <div className="absolute -bottom-40 -end-20 w-[40rem] h-[40rem] rounded-full bg-brand-yellow/8 blur-[100px]" />
        </div>

        <div className="container-x relative">
          {/* Header */}
          <div className="mb-8 lg:mb-10">
            <p className="text-[10px] uppercase tracking-[0.38em] text-brand-yellow/70 font-semibold mb-4">{p.foundation.eyebrow}</p>
            <div className="h-px w-full bg-white/8 mb-7" />
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-end">
              <h2 className="display-text text-xl sm:text-2xl md:text-3xl lg:text-[2rem] leading-[1.15] text-white whitespace-pre-line">
                {p.foundation.title}
              </h2>
              <p className="text-sm lg:text-base text-white/55 leading-relaxed text-pretty">{p.foundation.body}</p>
            </div>
          </div>

          {/* Program cards */}
          <div className="grid sm:grid-cols-3 gap-3">
            {p.foundation.programs.map((item, i) => (
              <div
                key={item}
                className="group relative rounded-xl p-4 lg:p-5 overflow-hidden
                  bg-white/5 backdrop-blur-xl backdrop-saturate-150
                  border border-white/10
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                  hover:bg-white/10 hover:border-white/20 hover:-translate-y-1
                  transition-all duration-300"
              >
                <span className="block font-mono text-[10px] tracking-[0.3em] text-white/20 mb-3 select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-white/85 text-sm leading-relaxed">{item}</p>
                <div className="mt-4 h-px w-8 rounded-full bg-brand-yellow/40 group-hover:w-14 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
      </LazySection>
    </>
  )
}
