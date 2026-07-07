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

  /* ── First card: image on top, card below, full width ── */
  if (index === 0) {
    return (
      <li ref={ref} className="relative mb-12 lg:mb-20">
        {/* Image — top, centered */}
        {image && (
          <div className="flex ps-14 mb-5 items-center justify-center">
            <div className="relative inline-block">
              <img
                aria-hidden
                src={image}
                alt=""
                loading="lazy"
                decoding="async"
                className={`block max-w-full max-h-72 lg:max-h-[480px] w-auto h-auto object-contain select-none mix-blend-multiply
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
          </div>
        )}

        {/* Card — full width below the image */}
        <div
          className={`ps-14 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: visible ? '200ms' : '0ms' }}
        >
          <div
            className="sticky-note relative rounded-2xl p-6 lg:p-7 pt-8 lg:pt-9
              bg-white/10 backdrop-blur-2xl backdrop-saturate-200
              border border-white/40
              shadow-[0_22px_46px_-14px_rgba(13,31,23,0.30),0_4px_12px_-2px_rgba(13,31,23,0.18),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(255,255,255,0.2)]
              transition-transform duration-500 ease-out
              hover:rotate-0 hover:-translate-y-0.5
              -rotate-[0.7deg]"
            style={{
              transformOrigin: 'top center',
              backgroundImage:
                'radial-gradient(120% 80% at 0% 0%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 55%), radial-gradient(100% 70% at 100% 100%, rgba(4,121,62,0.10) 0%, rgba(4,121,62,0) 60%)',
            }}
          >
            <span aria-hidden className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-5 h-5 rounded-full"
              style={{
                background: 'radial-gradient(circle at 32% 30%, #8fd97f 0%, #04793e 55%, #013318 100%)',
                boxShadow: '0 4px 6px -1px rgba(13,31,23,0.45), 0 1px 2px rgba(13,31,23,0.3), inset -2px -2px 3px rgba(0,0,0,0.35), inset 2px 2px 3px rgba(255,255,255,0.5)',
              }}
            />
            <span aria-hidden className="absolute -top-[9px] left-1/2 -translate-x-[6px] z-20 w-1.5 h-1.5 rounded-full bg-white/85 blur-[0.5px]" />
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              {visible && (
                <div aria-hidden className="absolute inset-x-0 top-0 h-1/4 animate-glass-sweep"
                  style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)', animationDelay: '320ms' }}
                />
              )}
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px flex-1 bg-brand-green/15" />
            </div>
            <p className="text-[15px] lg:text-base text-brand-ink/75 leading-relaxed text-pretty">{text}</p>
          </div>
        </div>
      </li>
    )
  }

  return (
    <li ref={ref} className="relative lg:grid lg:grid-cols-2 lg:gap-12 mb-12 lg:mb-20">
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

          {/* Divider */}
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px flex-1 bg-brand-green/15" />
          </div>

          <p className="text-[15px] lg:text-base text-brand-ink/75 leading-relaxed text-pretty">{text}</p>
        </div>
      </div>
    </li>
  )
}

function CircleCluster({ accent, images, video }: { accent: 'green' | 'yellow', images: [string, string, string], video?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  const ring = accent === 'green' ? 'border-brand-green/12' : 'border-brand-yellow/15'
  const largeRing = accent === 'green' ? 'ring-brand-green/20 shadow-[0_8px_40px_rgba(4,121,62,0.12)]' : 'ring-brand-yellow/20 shadow-[0_8px_40px_rgba(226,224,27,0.08)]'
  const smallRing = accent === 'green' ? 'ring-brand-green/15' : 'ring-brand-yellow/15'
  const dot1 = accent === 'green' ? 'bg-brand-green/30' : 'bg-brand-yellow/40'
  const dot2 = accent === 'green' ? 'bg-brand-yellow/40' : 'bg-brand-green/30'
  const v = visible
  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[340px] lg:max-w-none" style={{ height: '420px' }}>

      {/* Outer ring — positioned wrapper + animated inner */}
      <div aria-hidden className="absolute pointer-events-none" style={{ width: '308px', height: '308px', top: '-14px', left: '50%', transform: 'translateX(-50%)' }}>
        <div className={`w-full h-full rounded-full border ${ring} transition-[opacity,transform] duration-700 ease-out ${v ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
          style={{ transitionDelay: '60ms' }} />
      </div>

      {/* Large circle — position wrapper keeps translateX(-50%) stable; inner animates scale */}
      <div className="absolute" style={{ width: '284px', height: '284px', top: 0, left: '50%', transform: 'translateX(-50%)' }}>
        <div className={`w-full h-full rounded-full overflow-hidden ring-2 ${largeRing} transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${v ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
          style={{ transitionDelay: '100ms' }}>
          {video ? (
            <video src={video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
          ) : (
            <img src={images[0]} alt="" className="w-full h-full object-cover" loading="lazy" />
          )}
        </div>
      </div>

      {/* Bottom-left circle */}
      <div className="absolute" style={{ width: '164px', height: '164px', bottom: 0, left: 0 }}>
        <div className={`w-full h-full rounded-full overflow-hidden ring-2 ring-brand-ink/10 shadow-md transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${v ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
          style={{ transitionDelay: '230ms' }}>
          <img src={images[1]} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      {/* Bottom-right circle */}
      <div className="absolute" style={{ width: '140px', height: '140px', bottom: '14px', right: 0 }}>
        <div className={`w-full h-full rounded-full overflow-hidden ring-2 ${smallRing} shadow-md transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${v ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
          style={{ transitionDelay: '350ms' }}>
          <img src={images[2]} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      {/* Accent dots */}
      <div aria-hidden className={`absolute w-2.5 h-2.5 rounded-full ${dot1} transition-[opacity,transform] duration-500 ${v ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} style={{ top: '26%', left: '8%', transitionDelay: '460ms' }} />
      <div aria-hidden className={`absolute w-2 h-2 rounded-full ${dot2} transition-[opacity,transform] duration-500 ${v ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} style={{ top: '16%', right: '10%', transitionDelay: '520ms' }} />
      <div aria-hidden className={`absolute w-1.5 h-1.5 rounded-full bg-brand-ink/20 transition-[opacity,transform] duration-500 ${v ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} style={{ bottom: '28%', left: '30%', transitionDelay: '580ms' }} />
    </div>
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

            <ol className="relative">
              {p.intro.paragraphs.map((para, idx) => (
                <TimelineStep
                  key={idx}
                  index={idx}
                  text={para}
                  image={
                    idx === 0 ? '/images/about-1981-chicks.png'
                    : idx === 1 ? '/images/about-expansion.png'
                    : idx === 2 ? '/images/about-slaughterhouse.png'
                    : idx === 3 ? '/images/about-agriculture.png'
                    : idx === 4 ? '/images/about-shams.png'
                    : idx === 5 ? '/images/about-foundation.png'
                    : idx === 6 ? '/images/about-today.png'
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
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-48 -start-48 w-[56rem] h-[56rem] rounded-full bg-brand-green/5 blur-[140px]" />
          <div className="absolute -bottom-48 -end-32 w-[48rem] h-[48rem] rounded-full bg-brand-yellow/4 blur-[140px]" />
        </div>

        <div className="container-x relative space-y-24 lg:space-y-32">

          {/* Section eyebrow */}
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.38em] text-brand-ink/30 font-semibold">
              {p.visionMission.eyebrow}
            </p>
          </div>

          {/* Vision — text left, images right */}
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-20 items-center -mt-8">
            {/* Content */}
            <div>
              <span className="block text-[10px] uppercase tracking-[0.38em] text-brand-green font-bold mb-5">
                {p.visionMission.visionLabel}
              </span>
              <h3 className="display-text text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.08] text-brand-ink mb-5 text-balance">
                {p.visionMission.visionTitle}
              </h3>
              <div className="h-px w-14 rounded-full bg-brand-green/40 mb-6" />
              <p className="text-sm lg:text-base text-brand-ink/55 leading-relaxed text-pretty max-w-lg">
                {p.visionMission.visionBody}
              </p>
            </div>

            <CircleCluster accent="green" images={['/images/hero-1-farm-exterior.jpg', '/images/poultry-chicks.jpg', '/images/citrus-orchard.jpg']} video="/videos/vision-loop.mp4" />
          </div>

          {/* Mission — images left, text right */}
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <CircleCluster accent="yellow" images={['/images/hero-4-broiler-interior.jpg', '/images/mission-temry-wc.png', '/images/mission-citrus.jpg']} video="/videos/mission-loop.mov" />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="block text-[10px] uppercase tracking-[0.38em] text-brand-yellow font-bold mb-5">
                {p.visionMission.missionLabel}
              </span>
              <h3 className="display-text text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.08] text-brand-ink mb-5 text-balance">
                {p.visionMission.missionTitle}
              </h3>
              <div className="h-px w-14 rounded-full bg-brand-yellow/50 mb-6" />
              <p className="text-sm lg:text-base text-brand-ink/55 leading-relaxed text-pretty max-w-lg">
                {p.visionMission.missionBody}
              </p>
            </div>
          </div>

        </div>
      </section>
      </LazySection>

      {/* Values */}
      <LazySection>
      <section className="relative py-14 lg:py-20 overflow-hidden">
        {/* Ambient glows */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -start-24 w-[32rem] h-[32rem] rounded-full bg-brand-green/8 blur-3xl" />
          <div className="absolute -bottom-24 -end-24 w-[28rem] h-[28rem] rounded-full bg-brand-yellow/8 blur-3xl" />
        </div>

        <div className="container-x relative">

          {/* Header */}
          <div className="mb-12 lg:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.38em] text-brand-ink/30 font-semibold mb-4">
                {p.values.eyebrow}
              </p>
              <h2 className="display-text text-2xl sm:text-3xl lg:text-4xl text-brand-ink text-balance max-w-xl">
                {p.values.title}
              </h2>
            </div>
            <div className="h-px sm:w-32 lg:w-48 bg-brand-ink/8 flex-shrink-0 self-center hidden sm:block" />
          </div>

          {/* Values — full-width editorial rows */}
          <div className="divide-y divide-brand-ink/8">
            {p.values.items.map((v) => (
              <div key={v.name} className="group grid lg:grid-cols-[1fr_1.6fr] items-center gap-4 lg:gap-20 py-7 lg:py-9 hover:ps-3 transition-all duration-300">
                <h3 className="display-text text-2xl sm:text-3xl lg:text-[2rem] text-brand-ink group-hover:text-brand-green transition-colors duration-300 leading-tight">
                  {v.name}
                </h3>
                <p className="text-sm lg:text-base text-brand-ink/50 leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
      </LazySection>

    </>
  )
}
