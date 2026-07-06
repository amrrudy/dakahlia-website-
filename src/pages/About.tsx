import { useRef, useState, useEffect } from 'react'
import { Pencil } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import LazySection from '../components/LazySection'

/** Single timeline step — alternates side on desktop, slides in on scroll */
function TimelineStep({
  index,
  text,
  image,
}: {
  index: number
  text: string
  image?: string
}) {
  const ref = useRef<HTMLLIElement>(null)
  const [visible, setVisible] = useState(false)
  const isLeft = index % 2 === 0

  useEffect(() => {
    if (!ref.current || visible) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -80px 0px' },
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [visible])

  const number = String(index + 1).padStart(2, '0')

  return (
    <li ref={ref} className="relative lg:grid lg:grid-cols-2 lg:gap-12 mb-12 lg:mb-20">
      {/* Marker dot on the central line */}
      <span
        aria-hidden
        className={`absolute z-10
          start-[4px] lg:start-1/2 ltr:lg:-translate-x-1/2 rtl:lg:translate-x-1/2 top-1.5
          inline-flex items-center justify-center w-7 h-7 rounded-full
          bg-white/75 backdrop-blur-xl backdrop-saturate-200
          border-2 border-brand-green/60
          shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_10px_24px_-8px_rgba(4,121,62,0.45)]
          transition-[opacity,scale] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${visible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-brand-green" />
      </span>

      {/* Opposite cell — empty space across from the card; hosts the optional illustration */}
      <div className={`${image ? 'flex ps-14 mb-5 lg:ps-0 lg:mb-0' : 'hidden'} lg:flex items-center justify-center ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}>
        {image && (
          <div className="relative inline-block">
            <img
              aria-hidden
              src={image}
              alt=""
              loading="lazy"
              decoding="async"
              className={`block max-w-full max-h-44 lg:max-h-80 w-auto h-auto object-contain select-none mix-blend-multiply
                ${visible ? 'animate-sketch-in' : 'opacity-0'}`}
              style={{ animationDelay: visible ? '240ms' : '0ms' }}
            />
            {visible && (
              <div
                aria-hidden
                className="absolute inset-y-0 left-0 pointer-events-none animate-pen-track overflow-visible"
                style={{ animationDelay: '240ms' }}
              >
                <span className="absolute top-1/2 right-0 animate-pen-wiggle text-brand-green drop-shadow-[0_3px_6px_rgba(4,121,62,0.45)]">
                  <Pencil size={26} strokeWidth={2} fill="currentColor" />
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Card */}
      <div
        className={`ps-14 lg:ps-0 ${isLeft ? 'lg:order-1 lg:pe-14' : 'lg:order-2 lg:ps-14'}
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${visible ? 'opacity-100 translate-x-0' : `opacity-0 ${isLeft ? '-translate-x-6' : 'translate-x-6'}`}`}
        style={{ transitionDelay: visible ? '120ms' : '0ms' }}
      >
        <div
          className={`sticky-note relative rounded-2xl p-6 lg:p-7 pt-8 lg:pt-9
            bg-white/10 backdrop-blur-2xl backdrop-saturate-200
            border border-white/40
            shadow-[0_22px_46px_-14px_rgba(13,31,23,0.30),0_4px_12px_-2px_rgba(13,31,23,0.18),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(255,255,255,0.2)]
            transition-transform duration-500 ease-out
            hover:rotate-0 hover:-translate-y-0.5
            ${index % 2 === 0 ? '-rotate-[0.7deg]' : 'rotate-[0.7deg]'}`}
          style={{
            transformOrigin: 'top center',
            backgroundImage:
              'radial-gradient(120% 80% at 0% 0%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 55%), radial-gradient(100% 70% at 100% 100%, rgba(4,121,62,0.10) 0%, rgba(4,121,62,0) 60%)',
          }}
        >
          {/* Push-pin — brand green */}
          <span
            aria-hidden
            className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-5 h-5 rounded-full"
            style={{
              background:
                'radial-gradient(circle at 32% 30%, #8fd97f 0%, #04793e 55%, #013318 100%)',
              boxShadow:
                '0 4px 6px -1px rgba(13,31,23,0.45), 0 1px 2px rgba(13,31,23,0.3), inset -2px -2px 3px rgba(0,0,0,0.35), inset 2px 2px 3px rgba(255,255,255,0.5)',
            }}
          />
          {/* Pin specular highlight */}
          <span
            aria-hidden
            className="absolute -top-[9px] left-1/2 -translate-x-[6px] z-20 w-1.5 h-1.5 rounded-full bg-white/85 blur-[0.5px]"
          />

          {/* Light sweep — top → bottom shimmer that runs once when the card enters view */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            {visible && (
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1/4 animate-glass-sweep"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)',
                  animationDelay: '320ms',
                }}
              />
            )}
          </div>

          {/* Number tag */}
          <div className="flex items-center gap-3 mb-3">
            <span className="font-display text-2xl text-brand-green leading-none">{number}</span>
            <span className="h-px flex-1 bg-brand-green/15" />
          </div>

          <p className="text-[15px] lg:text-base text-brand-ink/75 leading-relaxed text-pretty">{text}</p>
        </div>
      </div>
    </li>
  )
}

export default function About() {
  const { t } = useI18n()
  const p = t.pages.about

  return (
    <>
      {/* Custom About Hero — full-bleed background image */}
      <section className="relative overflow-hidden min-h-[460px] lg:min-h-[540px] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/images/about-hero-cinematic.jpg"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 50%' }}
          />
        </div>
        {/* Dark gradient overlay — heavy at bottom for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/55 to-brand-ink/15 pointer-events-none" />

        <div className="container-x relative z-10 pt-44 pb-14">
          <h1 className="display-text text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white text-balance max-w-3xl whitespace-pre-line leading-[1.05]">{p.hero.title}</h1>
          <p className="mt-6 text-lg max-w-2xl leading-relaxed text-white/75 text-pretty">
            {p.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Intro — Our Story as a vertical timeline */}
      <section className="pt-20 lg:pt-28 pb-4 lg:pb-6">
        <div className="container-x">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <p className="eyebrow">{p.intro.eyebrow}</p>
          </div>

          {/* Zigzag timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central vertical pipeline — start-side on mobile, centered on desktop;
                logical translate so it stays centered in both LTR and RTL */}
            <span
              aria-hidden
              className="pointer-events-none absolute top-2 bottom-24 w-0.5 rounded-full
                start-[17px] lg:start-1/2 ltr:lg:-translate-x-1/2 rtl:lg:translate-x-1/2
                bg-gradient-to-b from-brand-green/70 via-brand-green/45 to-brand-green/0
                shadow-[0_0_8px_rgba(4,121,62,0.18)]
                [mask-image:linear-gradient(to_bottom,transparent,black_6%,black_94%,transparent)]"
            >
              {/* Electric pulse traveling down the wire */}
              <span
                aria-hidden
                className="absolute left-1/2 -translate-x-1/2 w-3 h-20 animate-rail-pulse"
              >
                <span
                  className="block w-full h-full rounded-full animate-rail-pulse-halo"
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 0%, rgba(98,188,84,0.55) 30%, rgba(255,255,255,0.95) 50%, rgba(98,188,84,0.55) 70%, transparent 100%)',
                    filter: 'blur(0.4px)',
                  }}
                />
              </span>
            </span>

            <ol className="relative">
              {p.intro.paragraphs.map((para, idx) => (
                <TimelineStep
                  key={idx}
                  index={idx}
                  text={para}
                  image={
                    idx === 0 ? '/images/about-origin-barn.png'
                    : idx === 1 ? '/images/about-1981-chicks.png'
                    : idx === 2 ? '/images/about-expansion.png'
                    : idx === 3 ? '/images/about-slaughterhouse.png'
                    : idx === 4 ? '/images/about-agriculture.png'
                    : idx === 5 ? '/images/about-shams.png'
                    : idx === 6 ? '/images/about-foundation.png'
                    : idx === 7 ? '/images/about-today.png'
                    : undefined
                  }
                />
              ))}
            </ol>

            {/* Closing badge centered at the bottom of the pipeline */}
            <div className="relative flex justify-center -mt-6">
              <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl
                bg-brand-green/15 backdrop-blur-2xl backdrop-saturate-200
                border border-brand-green/40
                shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                <div className="font-display text-3xl text-brand-green leading-none">{p.intro.statBadge}</div>
                <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-brand-green/80">{p.intro.statBadgeLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision + Mission */}
      <LazySection>
      <section className="relative py-14 lg:py-20 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-48 -start-48 w-[56rem] h-[56rem] rounded-full bg-brand-green/5 blur-[140px]" />
          <div className="absolute -bottom-48 -end-32 w-[48rem] h-[48rem] rounded-full bg-brand-yellow/4 blur-[140px]" />
        </div>

        <div className="container-x relative">

          {/* Eyebrow + rule */}
          <div className="mb-10 lg:mb-14">
            <p className="text-[10px] uppercase tracking-[0.38em] text-brand-ink/30 font-semibold">
              {p.visionMission.eyebrow}
            </p>
          </div>

          {/* Vision + Mission */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">

            {/* Vision */}
            <div className="py-12 lg:py-0 lg:pe-20 xl:pe-28">
              <span className="block font-mono text-[11px] tracking-[0.3em] text-brand-ink/20 mb-5 select-none">01</span>
              <span className="block text-[10px] uppercase tracking-[0.38em] text-brand-green font-bold mb-4">
                {p.visionMission.visionLabel}
              </span>
              <h3 className="display-text text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.08] text-brand-ink mb-5 text-balance">
                {p.visionMission.visionTitle}
              </h3>
              <p className="text-sm lg:text-base text-brand-ink/55 leading-relaxed text-pretty max-w-lg">
                {p.visionMission.visionBody}
              </p>
              <div className="mt-7 h-px w-14 rounded-full bg-brand-green/40" />
            </div>

            {/* Mission */}
            <div className="py-12 lg:py-0 lg:ps-20 xl:ps-28">
              <span className="block font-mono text-[11px] tracking-[0.3em] text-brand-ink/20 mb-5 select-none">02</span>
              <span className="block text-[10px] uppercase tracking-[0.38em] text-brand-yellow font-bold mb-4">
                {p.visionMission.missionLabel}
              </span>
              <h3 className="display-text text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.08] text-brand-ink mb-5 text-balance">
                {p.visionMission.missionTitle}
              </h3>
              <p className="text-sm lg:text-base text-brand-ink/55 leading-relaxed text-pretty max-w-lg">
                {p.visionMission.missionBody}
              </p>
              <div className="mt-7 h-px w-14 rounded-full bg-brand-yellow/50" />
            </div>

          </div>
        </div>
      </section>
      </LazySection>

      {/* Values */}
      <LazySection>
      <section className="relative py-14 lg:py-20 overflow-hidden">
        <div className="container-x relative">

          {/* Header */}
          <div className="mb-10 lg:mb-14">
            <p className="text-[10px] uppercase tracking-[0.38em] text-brand-ink/30 font-semibold mb-4">
              {p.values.eyebrow}
            </p>
            <h2 className="display-text text-2xl sm:text-3xl lg:text-4xl text-brand-ink text-balance max-w-xl">
              {p.values.title}
            </h2>
          </div>

          {/* Values — editorial rows */}
          <div className="grid lg:grid-cols-2 gap-x-20">
            {p.values.items.map((v, i) => (
              <div key={v.name} className="border-t border-brand-ink/8 py-7 lg:py-8">
                <div className="flex gap-8 items-start">
                  <span className="font-mono text-[10px] tracking-[0.28em] text-brand-ink/20 pt-1 select-none flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="display-text text-xl sm:text-2xl lg:text-[1.6rem] text-brand-ink mb-2 leading-tight">
                      {v.name}
                    </h3>
                    <p className="text-sm text-brand-ink/50 leading-relaxed">
                      {v.body}
                    </p>
                  </div>
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
