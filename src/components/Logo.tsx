interface LogoProps {
  variant?: 'horizontal' | 'vertical'
  /** 'light' = white version for dark backgrounds, 'dark' = color version for light backgrounds */
  tone?: 'light' | 'dark' | 'auto'
  className?: string
  alt?: string
}

export default function Logo({ variant = 'horizontal', tone = 'auto', className = '', alt = 'Dakahlia Group' }: LogoProps) {
  const src =
    variant === 'vertical'
      ? '/logos/dakahlia-vertical.png'
      : '/logos/dakahlia-horizontal.png'

  // When tone is 'light', invert the logo so it appears white on dark backgrounds
  const filter = tone === 'light' ? 'brightness(0) invert(1)' : undefined

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={filter ? { filter } : undefined}
      loading="eager"
    />
  )
}
