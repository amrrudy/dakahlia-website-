import { useState } from 'react'

type Props = React.VideoHTMLAttributes<HTMLVideoElement> & {
  src: string
}

export default function ProgressiveVideo({ src, className = '', style, ...props }: Props) {
  const [ready, setReady] = useState(false)

  return (
    <>
      {/* Shimmer + spinner while loading */}
      <div
        aria-hidden
        className={`absolute inset-0 skeleton-shimmer flex items-center justify-center transition-opacity duration-500 pointer-events-none ${ready ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="loader" style={{ '--size': '1.2px' } as React.CSSProperties} />
      </div>

      <video
        src={src}
        className={className}
        style={{ opacity: ready ? 1 : 0, transition: 'opacity 600ms ease', ...style }}
        onCanPlay={() => setReady(true)}
        {...props}
      />
    </>
  )
}
