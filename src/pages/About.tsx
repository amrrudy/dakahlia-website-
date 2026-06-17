import { Check, Eye, Target } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import TypedHeading from '../components/TypedHeading'
import LazySection from '../components/LazySection'

export default function About() {
  const { t } = useI18n()
  const p = t.pages.about

  return (
    <>
      {/* Custom About Hero — full-bleed background image */}
      <section className="relative overflow-hidden min-h-[460px] lg:min-h-[540px] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/images/hero-2-poultry-houses.jpg"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 50%' }}
          />
        </div>
        {/* Dark gradient overlay — heavy at bottom for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/55 to-brand-ink/15 pointer-events-none" />

        <div className="container-x relative z-10 pt-44 pb-14">
          <TypedHeading
            text={p.hero.title}
            className="display-text text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white text-balance max-w-3xl whitespace-pre-line leading-[1.05]"
          />
          <p className="mt-6 text-lg max-w-2xl leading-relaxed text-white/75 text-pretty">
            {p.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
            <div className="relative">
              <div className="img-card cursor-orange rounded-2xl aspect-[4/5]">
                <img loading="lazy" decoding="async" src="/images/citrus-orchard.jpg" alt="" />
              </div>
              <div className="absolute -bottom-6 -end-6 px-7 py-5 rounded-2xl bg-brand-green/30 backdrop-blur-2xl backdrop-saturate-200 border border-brand-green/50 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_20px_50px_-12px_rgba(4,121,62,0.5)]">
                <div className="font-display text-3xl leading-none">{p.intro.statBadge}</div>
                <div className="text-xs uppercase tracking-wider mt-1 opacity-80">of excellence</div>
              </div>
            </div>
            <div>
              <p className="eyebrow mb-6">{p.intro.eyebrow}</p>
              <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-brand-ink text-balance">{p.intro.title}</h2>
              <div className="mt-8 space-y-4 text-lg text-brand-ink/70 leading-relaxed text-pretty">
                {p.intro.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration That Delivers */}
      <LazySection>
      <section className="py-20 lg:py-28 bg-brand-ink text-white relative overflow-hidden">
        <svg className="absolute -top-20 -right-20 w-[500px] h-[500px] opacity-5" viewBox="0 0 100 100">
          <path d="M50 5 C25 25, 25 60, 50 95 C75 60, 75 25, 50 5 Z" fill="white" />
        </svg>
        <div className="container-x relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-balance">{p.integration.title}</h2>
            </div>
            <div>
              <p className="text-xl text-white/80 leading-relaxed text-pretty">{p.integration.body}</p>
            </div>
          </div>
        </div>
      </section>
      </LazySection>

      {/* What Drives Us */}
      <LazySection>
      <section className="relative py-20 lg:py-28 bg-brand-cream overflow-hidden leaf-bg">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 end-1/4 w-[26rem] h-[26rem] rounded-full bg-brand-green/15 blur-3xl animate-blob-float" />
          <div className="absolute -bottom-24 -start-24 w-[28rem] h-[28rem] rounded-full bg-brand-yellow/12 blur-3xl animate-blob-float" style={{ animationDelay: '6s' }} />
        </div>
        <div className="container-x relative">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
            <div>
              <p className="eyebrow mb-5">{p.whatDrivesUs.eyebrow}</p>
              <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-brand-ink text-balance">
                {p.whatDrivesUs.title}
              </h2>
            </div>
            <div className="lg:pt-16">
              <p className="text-lg text-brand-ink/70 leading-relaxed mb-8 text-pretty">{p.whatDrivesUs.intro}</p>
              <ul className="space-y-3">
                {p.whatDrivesUs.values.map((v, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="btn-glass-icon w-7 h-7 flex-shrink-0 mt-0.5 text-brand-green !bg-brand-green/15 !border-brand-green/30">
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span className="text-brand-ink/80 text-lg">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      </LazySection>

      {/* Vision + Mission */}
      <LazySection>
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -start-24 w-[30rem] h-[30rem] rounded-full bg-brand-green/15 blur-3xl animate-blob-float" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[24rem] h-[24rem] rounded-full bg-brand-green-light/10 blur-3xl animate-blob-float" style={{ animationDelay: '3s' }} />
          <div className="absolute -bottom-32 -end-24 w-[30rem] h-[30rem] rounded-full bg-brand-yellow/15 blur-3xl animate-blob-float" style={{ animationDelay: '6s' }} />
        </div>

        <div className="container-x relative">
          {/* Centered section header */}
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-brand-green" />
              <span className="text-[11px] uppercase tracking-[0.32em] text-brand-green font-bold">{p.visionMission.eyebrow}</span>
              <span className="h-px w-10 bg-brand-green" />
            </div>
            <p className="font-display italic text-brand-ink/60 text-lg md:text-xl">
              {p.visionMission.tagline}
            </p>
          </div>

          {/* Diptych — Vision + Mission (simple two-tone premium) */}
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
            {/* VISION */}
            <article className="group relative rounded-2xl p-7 lg:p-8 overflow-hidden
              bg-white/45 backdrop-blur-2xl backdrop-saturate-200
              border border-white/60
              shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_15px_40px_-15px_rgba(13,31,23,0.18)]
              transition-all duration-500
              hover:-translate-y-1
              hover:bg-white/60
              hover:border-brand-green/40
              hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_25px_55px_-15px_rgba(4,121,62,0.3)]">
              {/* Thin colored top edge */}
              <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-brand-green" />

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green transition-colors group-hover:bg-brand-green group-hover:text-white">
                    <Eye size={17} strokeWidth={2} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-brand-green font-bold">{p.visionMission.visionLabel}</span>
                </div>

                <h3 className="font-display text-2xl lg:text-3xl text-brand-ink leading-[1.1] text-balance">
                  {p.visionMission.visionTitle}
                </h3>

                <p className="text-brand-ink/70 leading-relaxed text-pretty text-[14px]">
                  {p.visionMission.visionBody}
                </p>
              </div>
            </article>

            {/* MISSION */}
            <article className="group relative rounded-2xl p-7 lg:p-8 overflow-hidden
              bg-white/45 backdrop-blur-2xl backdrop-saturate-200
              border border-white/60
              shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_15px_40px_-15px_rgba(13,31,23,0.18)]
              transition-all duration-500
              hover:-translate-y-1
              hover:bg-white/60
              hover:border-brand-yellow/70
              hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_25px_55px_-15px_rgba(226,224,27,0.35)]">
              {/* Thin colored top edge */}
              <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-brand-yellow" />

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-ink transition-colors group-hover:bg-brand-yellow">
                    <Target size={17} strokeWidth={2} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-brand-ink font-bold">{p.visionMission.missionLabel}</span>
                </div>

                <h3 className="font-display text-2xl lg:text-3xl text-brand-ink leading-[1.1] text-balance">
                  {p.visionMission.missionTitle}
                </h3>

                <p className="text-brand-ink/70 leading-relaxed text-pretty text-[14px]">
                  {p.visionMission.missionBody}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      </LazySection>

      {/* Values */}
      <LazySection>
      <section className="relative py-20 lg:py-28 bg-brand-cream overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 start-1/3 w-[28rem] h-[28rem] rounded-full bg-brand-green/15 blur-3xl animate-blob-float" />
          <div className="absolute -bottom-24 end-1/4 w-[26rem] h-[26rem] rounded-full bg-brand-yellow/15 blur-3xl animate-blob-float" style={{ animationDelay: '7s' }} />
        </div>
        <div className="container-x relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow mb-5">{p.values.eyebrow}</p>
            <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-brand-ink text-balance">{p.values.title}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {p.values.items.map((v, i) => (
              <div
                key={v.name}
                className="group relative rounded-2xl p-8 overflow-hidden
                  bg-white/45 backdrop-blur-2xl backdrop-saturate-200
                  border border-white/70
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_20px_50px_-20px_rgba(13,31,23,0.15)]
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-brand-green/40
                  hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_30px_70px_-20px_rgba(4,121,62,0.35)]"
              >
                <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-green/0 to-brand-green/0 group-hover:from-brand-green/10 group-hover:to-brand-green/0 transition-colors duration-500" />
                <div className="relative">
                  <div className="font-display text-5xl text-brand-green-light group-hover:text-brand-green transition-colors opacity-60">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display text-2xl mt-4 mb-3 leading-tight text-brand-ink">{v.name}</h3>
                  <p className="text-sm text-brand-ink/70 leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </LazySection>

    </>
  )
}
