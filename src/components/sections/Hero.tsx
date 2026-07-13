import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, ArrowDown } from 'lucide-react'
import { useI18n } from '../../lib/i18n'
import ProgressiveImg from '../ProgressiveImg'

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

const INTERVAL = 5000

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
          <ProgressiveImg
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding={i === 0 ? 'sync' : 'async'}
            fetchPriority={i === 0 ? 'high' : 'low'}
          />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-ink/85 via-brand-ink/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-ink/30 to-transparent pointer-events-none" />

      {/* ── Content ──────────────────────────────────────────────── */}
      {/*
        Mobile layout stack from bottom up:
          progress bar  0px
          arrows        28px  (bottom-7)
          dots          56px  (bottom-14)
          gap           ~20px
          content pb    ~96px total → pb-24
      */}
      <div className="container-x relative z-20 w-full pb-24 sm:pb-28 lg:pb-32 pt-28 sm:pt-36 text-white">
        <div className="max-w-3xl lg:max-w-5xl">

          {/* h1 — whitespace-pre-line preserves intentional line-breaks but still wraps */}
          <h1 className={`
            display-text
            text-[1.55rem] xs:text-[1.75rem] sm:text-[2.125rem] md:text-[3.125rem] lg:text-[3.875rem] xl:text-[4.875rem]
            rtl:text-[1.45rem] rtl:xs:text-[1.6rem] rtl:sm:text-[2rem] rtl:md:text-[2.875rem] rtl:lg:text-[3.625rem] rtl:xl:text-[4.625rem]
            leading-[1.12] sm:leading-[1.08] lg:leading-[1.05]
            tracking-tight sm:tracking-[-0.01em] lg:tracking-[-0.02em]
            whitespace-pre-line
            relative
          `}>
            {/* Invisible placeholder holds layout height so content doesn't shift while typing */}
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
            className="mt-4 sm:mt-6 lg:mt-8 text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-xl leading-relaxed text-pretty animate-fade-up"
            style={{ animationDelay: '0.5s', opacity: 0 }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="mt-6 sm:mt-8 lg:mt-10 flex flex-wrap gap-3 sm:gap-4 animate-fade-up"
            style={{ animationDelay: '0.7s', opacity: 0 }}
          >
            <Link
              to="/companies"
              className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-xs sm:text-sm tracking-widest uppercase text-white overflow-hidden
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
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-[900ms] ease-out group-hover:translate-x-full"
              />
              <span className="relative z-10">{t.hero.primaryCta}</span>
              <ArrowRight
                size={15}
                className={`relative z-10 transition-transform duration-300 ${
                  dir === 'rtl' ? 'rotate-180 group-hover:-translate-x-1.5' : 'group-hover:translate-x-1.5'
                }`}
              />
            </Link>
          </div>

        </div>
      </div>

      {/* Stats card — desktop only */}
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

      {/* ── Prev / Next arrows ───────────────────────────────────── */}
      {/*
        Mobile:  flanking the dots at bottom-7 (28px up), small 40×40 buttons
        Desktop: vertically centred on left/right edges, larger 56×56
      */}
      {([
        { onClick: prev, Icon: PrevIcon, side: 'start-3 sm:start-4 lg:start-6', label: 'Previous slide' },
        { onClick: next, Icon: NextIcon, side: 'end-3 sm:end-4 lg:end-6',       label: 'Next slide' },
      ] as const).map(({ onClick, Icon, side, label }) => (
        <button
          key={label}
          onClick={onClick}
          aria-label={label}
          className={`absolute ${side}
            bottom-7 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2
            z-20 group
            w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center
            text-white transition-all duration-500 hover:scale-110 active:scale-95`}
        >
          {/* Glass disc */}
          <span aria-hidden className="absolute inset-2 rounded-full
            bg-white/10 backdrop-blur-2xl backdrop-saturate-200
            border border-white/30
            shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_12px_30px_-10px_rgba(0,0,0,0.45)]
            transition-colors duration-300
            group-hover:bg-white/20 group-hover:border-white/50" />

          {/* Progress ring */}
          <svg
            aria-hidden
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
            viewBox="0 0 56 56"
          >
            <circle cx="28" cy="28" r="26" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
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

          <Icon
            size={18}
            strokeWidth={2.25}
            className={`relative z-10 transition-transform duration-300 ${
              side.startsWith('start')
                ? 'group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5'
                : 'group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5'
            }`}
          />
        </button>
      ))}

      {/* ── Dot indicators ───────────────────────────────────────── */}
      {/* Sit above the arrows row at bottom-14 (56px from bottom) */}
      <div className="absolute bottom-14 sm:bottom-16 lg:bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="p-1.5 -m-1.5 flex items-center justify-center"
          >
            <span className={`block transition-all duration-300 rounded-full ${
              i === current
                ? 'w-6 sm:w-8 h-2 bg-brand-yellow shadow-[0_0_12px_rgba(226,224,27,0.6)]'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`} />
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 inset-x-0 z-20 h-[2px] bg-white/10">
        <div
          key={current}
          className="h-full bg-brand-yellow origin-left"
          style={{ animation: `growWidth ${INTERVAL}ms linear forwards` }}
        />
      </div>

      {/* Scroll cue — hidden on mobile to avoid clashing with arrows */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/40">
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
