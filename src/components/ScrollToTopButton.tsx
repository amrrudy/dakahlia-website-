import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

const SIZE = 44       // px — wrapper dimension
const CENTER = SIZE / 2
const RADIUS = 18
const CIRC = 2 * Math.PI * RADIUS

export default function ScrollToTopButton() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const y = window.scrollY
      const pct = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0
      setProgress(pct)
      // Reveal after scrolling 35% of the page (smart trigger)
      setVisible(pct > 0.35)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Stroke offset: 0 = full ring, CIRC = empty
  const offset = CIRC * (1 - progress)

  return (
    <div
      className={`fixed bottom-6 end-6 z-40 w-11 h-11 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${visible
          ? 'opacity-100 translate-y-0 pointer-events-auto animate-idle-bob'
          : 'opacity-0 translate-y-3 pointer-events-none'}`}
    >
      {/* Expanding pulse halos behind the button — draw attention */}
      {visible && (
        <>
          <span aria-hidden className="pointer-events-none absolute inset-0 rounded-full bg-brand-yellow/35 animate-pulse-halo" />
          <span aria-hidden className="pointer-events-none absolute inset-0 rounded-full bg-brand-yellow/25 animate-pulse-halo" style={{ animationDelay: '1.2s' }} />
        </>
      )}

      <button
        type="button"
        onClick={onClick}
        aria-label="Scroll to top"
        className="group relative w-full h-full rounded-full
          flex items-center justify-center
          bg-white/15 backdrop-blur-2xl backdrop-saturate-200
          border border-white/30
          shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_12px_30px_-10px_rgba(13,31,23,0.4)]
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          hover:bg-white/30 hover:border-brand-green/40 hover:scale-110
          hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_16px_40px_-10px_rgba(4,121,62,0.45)]
          active:scale-95"
      >
        {/* Progress ring around the button */}
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
        >
          <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
          <circle
            cx={CENTER} cy={CENTER} r={RADIUS}
            fill="none"
            stroke="#e2e01b"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 200ms linear' }}
          />
        </svg>

        {/* Icon */}
        <ArrowUp size={14} strokeWidth={2.25} className="relative z-10 text-white transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>
    </div>
  )
}
