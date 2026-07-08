import { useRef, useState, useEffect, ReactNode } from 'react'

type Props = {
  children: ReactNode
  minHeight?: number | string
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
    <div
      ref={ref}
      // content-visibility:auto lets the browser skip paint/layout for off-screen content
      // contain-intrinsic-size provides a size hint so scroll position is stable
      style={visible
        ? { contentVisibility: 'visible' }
        : {
            minHeight,
            contentVisibility: 'auto',
            containIntrinsicSize: `0 ${typeof minHeight === 'number' ? `${minHeight}px` : minHeight}`,
          }
      }
    >
      {visible && children}
    </div>
  )
}
