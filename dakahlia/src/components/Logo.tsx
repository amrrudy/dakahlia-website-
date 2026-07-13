interface LogoProps {
  variant?: 'horizontal' | 'vertical' | 'mark'
  className?: string
  alt?: string
}

export default function Logo({ variant = 'horizontal', className = '', alt = 'Dakahlia Group' }: LogoProps) {
  const src =
    variant === 'vertical'
      ? '/logos/dakahlia-vertical.png'
      : '/logos/dakahlia-horizontal.png'

  return <img src={src} alt={alt} className={className} loading="eager" />
}
