import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-reveal hook. Returns a ref + a boolean that flips to true
 * the first time the element enters the viewport.
 *
 * Usage:
 *   const { ref, shown } = useReveal()
 *   <div ref={ref} className={`reveal ${shown ? 'in' : ''}`}>…</div>
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: { threshold?: number; rootMargin?: string; once?: boolean } = {}
) {
  const { threshold = 0.15, rootMargin = '0px 0px -10% 0px', once = true } = options
  const ref = useRef<T | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setShown(false)
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, shown }
}

/**
 * Tracks scroll progress (0→1) of an element through the viewport.
 * Useful for parallax and scroll-driven transforms.
 */
export function useScrollProgress<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight
        // 0 when element bottom enters viewport, 1 when its top leaves
        const p = 1 - (rect.top + rect.height) / (vh + rect.height)
        setProgress(Math.min(1, Math.max(0, p)))
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return { ref, progress }
}
