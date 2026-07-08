import { useState, useRef, useEffect } from 'react'

type Props = React.VideoHTMLAttributes<HTMLVideoElement> & {
  poster?: string
  children?: React.ReactNode // <source> elements
}

export default function ProgressiveVideo({
  poster,
  children,
  src,
  className = '',
  style,
  ...props
}: Props) {
  const [ready, setReady] = useState(false)
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    // Don't animate for users who prefer reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause()
      return
    }

    // Pause when scrolled off-screen, resume when back in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Shimmer + spinner while buffering */}
      <div
        aria-hidden
        className={`absolute inset-0 skeleton-shimmer flex items-center justify-center transition-opacity duration-500 pointer-events-none ${
          ready ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="loader" style={{ '--size': '1.2px' } as React.CSSProperties} />
      </div>

      <video
        ref={ref}
        poster={poster}
        src={src}
        className={className}
        style={{ opacity: ready ? 1 : 0, transition: 'opacity 600ms ease', ...style }}
        onCanPlay={() => setReady(true)}
        {...props}
      >
        {children}
      </video>
    </>
  )
}
