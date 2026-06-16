import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, ArrowDown } from 'lucide-react'
import { useI18n } from '../../lib/i18n'

const slides = [
  {
    src: '/images/hero-1-farm-exterior.jpg',
    alt: 'Dakahlia poultry farm exterior at sunset',
  },
  {
    src: '/images/hero-2-poultry-houses.jpg',
    alt: 'Dakahlia broiler farm facility',
  },
  {
    src: '/images/hero-3-solar-array.jpg',
    alt: 'Dakahlia solar energy installation',
  },
  {
    src: '/images/hero-4-broiler-interior.jpg',
    alt: 'Dakahlia broiler house interior',
  },
  {
    src: '/images/20210905_130412.jpg',
    alt: 'Dakahlia grain silos facility',
  },
]

const INTERVAL = 5000 // ms between auto-advance

export default function Hero() {
  const { t, dir } = useI18n()
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [typed, setTyped] = useState('')

  const headline = t.hero.headline

  useEffect(() => {
    setTyped('')
    let i = 0
    const charsPerTick = Math.max(1, Math.ceil(headline.length / 60))
    const speed = 55
    const startDelay = 250
    let intervalId: ReturnType<typeof setInterval> | undefined
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i = Math.min(headline.length, i + charsPerTick)
        setTyped(headline.slice(0, i))
        if (i >= headline.length && intervalId) clearInterval(intervalId)
      }, speed)
    }, startDelay)
    return () => {
      clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [headline])

  const typingDone = typed.length >= headline.length

  const goTo = useCallback((idx: number) => {
    if (animating) return
    setAnimating(true)
    setCurrent(idx)
    setTimeout(() => setAnimating(false), 700)
  }, [animating])

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])

  // Auto-advance
  useEffect(() => {
    const id = setInterval(next, INTERVAL)
    return () => clearInterval(id)
  }, [next])

  const PrevIcon = dir === 'rtl' ? ArrowRight : ArrowLeft
  const NextIcon = dir === 'rtl' ? ArrowLeft  : ArrowRight

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">

      {/* ── Slide images ─────────────────────────────────────────── */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-ink via-brand-ink/55 to-brand-ink/25 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-ink/50 to-transparent pointer-events-none" />

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="container-x relative z-20 pb-24 lg:pb-32 pt-36 text-white w-full">
        <div className="max-w-5xl relative z-20">

          <h1 className="display-text text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] text-balance leading-[0.92] relative">
            {/* Invisible full-text placeholder reserves layout space so nothing shifts as we type */}
            <span aria-hidden className="invisible select-none">{headline}</span>
            {/* Typing layer */}
            <span className="absolute inset-0">
              {typed}
              <span
                aria-hidden
                className={`inline-block w-[0.06em] h-[0.78em] align-middle ms-2 bg-brand-yellow rounded-sm ${
                  typingDone ? 'opacity-0 transition-opacity duration-700' : 'animate-cursor-blink'
                }`}
              />
            </span>
          </h1>

          <p
            className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed text-pretty animate-fade-up"
            style={{ animationDelay: '0.5s', opacity: 0 }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: '0.7s', opacity: 0 }}
          >
            <Link
              to="/companies"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase text-white overflow-hidden
                bg-gradient-to-r from-brand-green-dark/10 via-brand-green/10 to-brand-green-light/10
                backdrop-blur-xl backdrop-saturate-200
                border border-white/40
                shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_10px_30px_-8px_rgba(4,121,62,0.35)]
                transition-all duration-300
                hover:bg-gradient-to-r hover:from-brand-green-dark/25 hover:via-brand-green/25 hover:to-brand-green-light/25
                hover:border-white/60 hover:scale-105
                hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_18px_50px_-10px_rgba(226,224,27,0.45),0_0_0_3px_rgba(226,224,27,0.2)]
                active:scale-100"
            >
              {/* Sweeping shine on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-[900ms] ease-out group-hover:translate-x-full"
              />
              <span className="relative z-10">{t.hero.primaryCta}</span>
              <ArrowRight
                size={16}
                className={`relative z-10 transition-transform duration-300 ${
                  dir === 'rtl' ? 'rotate-180 group-hover:-translate-x-1.5' : 'group-hover:translate-x-1.5'
                }`}
              />
            </Link>
            <Link to="/about" className="btn-glass-dark">
              {t.hero.secondaryCta}
            </Link>
          </div>

        </div>
      </div>

      {/* Stats — single small glass card with 3 vertical rows */}
      <div
        className="hidden lg:block absolute end-20 xl:end-24 bottom-28 z-20 animate-fade-up"
        style={{ animationDelay: '0.9s', opacity: 0 }}
      >
        <div className="min-w-[150px] px-4 py-3 rounded-xl
          bg-white/10 backdrop-blur-xl backdrop-saturate-200
          border border-white/25
          shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_12px_30px_-10px_rgba(0,0,0,0.4)]
          divide-y divide-white/15">
          {[
            { value: t.hero.stat1Value, label: t.hero.stat1Label },
            { value: t.hero.stat2Value, label: t.hero.stat2Label },
            { value: t.hero.stat3Value, label: t.hero.stat3Label },
          ].map((s) => (
            <div key={s.label} className="py-2 first:pt-0 last:pb-0">
              <div className="font-display text-xl xl:text-2xl text-brand-yellow leading-none">{s.value}</div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.22em] text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Floating side arrows with progress ring ── */}
      {([
        { onClick: prev, Icon: PrevIcon, side: 'start-6', label: 'Previous slide' },
        { onClick: next, Icon: NextIcon, side: 'end-6',   label: 'Next slide' },
      ] as const).map(({ onClick, Icon, side, label }) => (
        <button
          key={label}
          onClick={onClick}
          aria-label={label}
          className={`absolute ${side} top-1/2 -translate-y-1/2 z-20 group
            w-14 h-14 rounded-full flex items-center justify-center
            text-white
            transition-all duration-500
            hover:scale-110 active:scale-95`}
        >
          {/* Glass disc background */}
          <span aria-hidden className="absolute inset-2 rounded-full
            bg-white/10 backdrop-blur-2xl backdrop-saturate-200
            border border-white/30
            shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_12px_30px_-10px_rgba(0,0,0,0.45)]
            transition-colors duration-300
            group-hover:bg-white/20 group-hover:border-white/50" />

          {/* Progress ring — wraps the disc, restarts each slide via key */}
          <svg
            aria-hidden
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
            viewBox="0 0 56 56"
          >
            {/* Track */}
            <circle cx="28" cy="28" r="26" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
            {/* Progress */}
            <circle
              key={current}
              cx="28" cy="28" r="26"
              fill="none"
              stroke="#e2e01b"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 26}
              style={{ animation: `ringFill ${INTERVAL}ms linear forwards` }}
            />
          </svg>

          {/* Arrow icon */}
          <Icon
            size={18}
            strokeWidth={2.25}
            className={`relative z-10 transition-transform duration-300 ${
              side === 'start-6'
                ? 'group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5'
                : 'group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5'
            }`}
          />
        </button>
      ))}

      {/* Dot indicators at the bottom */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-8 h-2 bg-brand-yellow shadow-[0_0_12px_rgba(226,224,27,0.6)]'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 inset-x-0 z-20 h-[2px] bg-white/10">
        <div
          key={current}
          className="h-full bg-brand-yellow origin-left"
          style={{
            animation: `growWidth ${INTERVAL}ms linear forwards`,
          }}
        />
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/40">
        <ArrowDown size={18} className="animate-bounce" />
      </div>

      <style>{`
        @keyframes growWidth {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </section>
  )
}
