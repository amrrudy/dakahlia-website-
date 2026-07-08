import { useRef, useState, useEffect } from 'react'

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  alt: string
}

export default function ProgressiveImg({ src, alt, className = '', style, ...props }: Props) {
  const ref = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Already cached — no flash
    if (ref.current?.complete && ref.current.naturalWidth > 0) setLoaded(true)
  }, [])

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 600ms ease',
        ...style,
      }}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  )
}
