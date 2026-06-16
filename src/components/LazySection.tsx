import { useRef, useState, useEffect, ReactNode } from 'react'

type Props = {
  children: ReactNode
  /** Approx height to reserve before mount — avoids layout shift */
  minHeight?: number | string
  /** How early to start mounting before scrolling into view */
  rootMargin?: string
}

export default function LazySection({
  children,
  minHeight = 600,
  rootMargin = '400px',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (visible || !ref.current) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [visible, rootMargin])

  return (
    <div ref={ref} style={visible ? undefined : { minHeight }}>
      {visible && children}
    </div>
  )
}
