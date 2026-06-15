import { useEffect, useRef, useState } from 'react'

/**
 * FloatingMedallion — a real-photo centerpiece for the hero.
 * An organic-masked photo that gently floats, tilts on scroll (parallax),
 * ringed by a soft halo with drifting golden particles.
 * Pure CSS/React — no WebGL, lightweight, always smooth.
 */
export default function FloatingMedallion({
  image = '/images/chick-medallion.jpg',
  className = '',
}: { image?: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = window.scrollY
        setOffset(y)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  // gentle parallax: medallion drifts up and tilts slightly as you scroll
  const translateY = offset * -0.08
  const rotate = Math.min(offset * 0.01, 8)

  // 14 golden particles at fixed polar positions
  const particles = Array.from({ length: 14 }, (_, i) => {
    const angle = (i / 14) * Math.PI * 2
    const radius = 48 + (i % 3) * 6
    return {
      left: 50 + Math.cos(angle) * radius,
      top: 50 + Math.sin(angle) * radius,
      size: 4 + (i % 3) * 3,
      delay: (i % 7) * 0.6,
      dur: 5 + (i % 4),
    }
  })

  return (
    <div ref={ref} className={className} aria-hidden="true">
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{ transform: `translateY(${translateY}px)` }}
      >
        {/* Soft halo glow behind */}
        <div className="absolute w-[88%] h-[88%] rounded-full bg-brand-yellow/20 blur-3xl animate-soft-bob" />

        {/* Rotating dashed ring accent */}
        <svg className="absolute w-[108%] h-[108%] animate-slow-spin opacity-40" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="96" fill="none" stroke="var(--brand-yellow)"
            strokeWidth="0.6" strokeDasharray="2 8" />
        </svg>

        {/* The photo medallion — organic mask, floating */}
        <div
          className="relative w-[78%] aspect-square organic-mask-1 overflow-hidden shadow-2xl ring-1 ring-white/20 animate-soft-bob"
          style={{ transform: `rotate(${rotate}deg)`, transition: 'transform 0.3s ease-out' }}
        >
          <img src={image} alt="" className="w-full h-full object-cover scale-105" />
          {/* warm gradient sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/10 via-transparent to-brand-yellow/15" />
        </div>

        {/* Floating golden particles */}
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-brand-yellow animate-soft-bob"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              opacity: 0.7,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
              boxShadow: '0 0 8px var(--brand-yellow)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
