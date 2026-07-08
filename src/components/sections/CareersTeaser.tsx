import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '../../lib/i18n'
import Reveal from '../Reveal'

/* Clipboard SVG clip icon — glassy */
function ClipboardClip({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glass plate gradient — frosted-white look */}
        <linearGradient id="clipPlate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.85)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.45)" />
        </linearGradient>
        {/* Subtle inner highlight gradient */}
        <linearGradient id="clipPlateInner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.95)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.55)" />
        </linearGradient>
        {/* Ring loop gradient */}
        <linearGradient id="clipRing" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.7)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.35)" />
        </linearGradient>
      </defs>

      {/* Clip base plate — frosted glass with translucent border */}
      <rect x="8" y="14" width="44" height="16" rx="3"
        fill="url(#clipPlate)"
        stroke="rgba(255,255,255,0.7)" strokeWidth="0.5" />
      <rect x="10" y="16" width="40" height="12" rx="2"
        fill="url(#clipPlateInner)" />

      {/* Ring loop — outer + inner stroke */}
      <path
        d="M22 14 C22 6 38 6 38 14"
        stroke="url(#clipRing)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M24 14 C24 9 36 9 36 14"
        stroke="rgba(255,255,255,0.85)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Screws — glass circles */}
      <circle cx="20" cy="22" r="3" fill="rgba(255,255,255,0.55)" stroke="rgba(255,255,255,0.7)" strokeWidth="0.5" />
      <circle cx="20" cy="22" r="1.5" fill="rgba(255,255,255,0.95)" />
      <circle cx="40" cy="22" r="3" fill="rgba(255,255,255,0.55)" stroke="rgba(255,255,255,0.7)" strokeWidth="0.5" />
      <circle cx="40" cy="22" r="1.5" fill="rgba(255,255,255,0.95)" />
    </svg>
  )
}

interface ClipboardCardProps {
  src: string
  name: string
  location: string
  rotate: string
  zIndex: number
  delay: string
}

function ClipboardCard({ src, name, location, rotate, zIndex, delay }: ClipboardCardProps) {
  return (
    <div
      className="animate-soft-bob group"
      style={{ transform: rotate, zIndex, animationDelay: delay, transition: 'transform 0.4s ease' }}
    >
      {/* Glass-style board */}
      <div className="relative rounded-2xl overflow-visible
        bg-white/45 backdrop-blur-2xl backdrop-saturate-200
        border border-white/70
        shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_25px_50px_-15px_rgba(13,31,23,0.25)]
        transition-shadow duration-500
        group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_35px_70px_-15px_rgba(4,121,62,0.3)]"
        style={{ padding: '0 10px 14px 10px', paddingTop: '0' }}
      >
        {/* Clip at top */}
        <div className="flex justify-center" style={{ marginTop: '-10px', marginBottom: '4px' }}>
          <ClipboardClip className="w-16 drop-shadow-md" />
        </div>

        {/* Photo area */}
        <div className="overflow-hidden rounded-xl aspect-[3/4] w-full ring-1 ring-white/40 shadow-inner">
          <img
            src={src}
            alt={name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Name tag strip */}
        <div className="mt-3 px-1 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
          <div className="min-w-0">
            <p className="font-bold text-[12px] text-brand-ink leading-none truncate">{name}</p>
            <p className="text-[10px] text-brand-ink/55 mt-0.5 truncate">{location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CareersTeaser() {
  const { t, dir } = useI18n()
  const employees = t.careersTeaser.employees

  const cards = [
    {
      src: '/images/career-portrait-1.jpg',
      rotate: 'none',
      zIndex: 1,
      delay: '0s',
    },
    {
      src: '/images/career-portrait-2.jpg',
      rotate: 'none',
      zIndex: 2,
      delay: '1.2s',
    },
    {
      src: '/images/career-portrait-3.jpg',
      rotate: 'none',
      zIndex: 3,
      delay: '2.4s',
    },
  ]

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">

          {/* Left — bold headline + text */}
          <Reveal direction="right">
            <h2
              className="display-text text-brand-ink"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.2rem)' }}
            >
              {t.careersTeaser.title}
            </h2>
            <p className="mt-7 text-base lg:text-lg text-brand-ink/60 leading-relaxed max-w-md">
              {t.careersTeaser.body}
            </p>
            {/* Clipboard-style glassy CTA */}
            <div className="mt-9 inline-block">
              <div className="relative rounded-2xl overflow-visible
                bg-white/45 backdrop-blur-2xl backdrop-saturate-200
                border border-white/70
                shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_20px_40px_-15px_rgba(13,31,23,0.2)]"
                style={{ padding: '0 10px 12px 10px' }}>
                <div className="flex justify-center" style={{ marginTop: '-10px', marginBottom: '6px' }}>
                  <ClipboardClip className="w-12 drop-shadow-md" />
                </div>
                <Link
                  to="/careers"
                  className="group flex items-center gap-2 px-7 py-3 rounded-xl text-brand-green font-bold text-xs uppercase tracking-[0.18em] whitespace-nowrap
                    bg-brand-green/15 backdrop-blur-xl backdrop-saturate-200
                    border border-brand-green/40
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_4px_16px_-4px_rgba(4,121,62,0.2)]
                    transition-all duration-300
                    hover:bg-brand-green/25 hover:border-brand-green/70 hover:scale-[1.02]
                    active:scale-100"
                >
                  {t.careersTeaser.cta}
                  <ArrowRight size={14} className={`transition-transform group-hover:translate-x-0.5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right — clipboard portrait cards */}
          <Reveal direction="left" delay={120}>
            <div className="relative flex justify-center items-start gap-2 sm:gap-3 lg:gap-4 pt-6 sm:pt-10 pb-4 sm:pb-6 px-2 sm:px-4">
              {cards.map((card, i) => {
                const emp = employees[i]
                return (
                  <div key={card.src} className="w-[32%] sm:w-[30%] lg:w-[38%] flex-shrink-0">
                    <ClipboardCard
                      src={card.src}
                      name={emp.name}
                      location={emp.location}
                      rotate={card.rotate}
                      zIndex={card.zIndex}
                      delay={card.delay}
                    />
                  </div>
                )
              })}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
