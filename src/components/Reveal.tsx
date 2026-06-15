import { type ReactNode, type ElementType } from 'react'
import { useReveal } from '../lib/useReveal'

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'

const offsets: Record<Direction, string> = {
  up: 'translateY(40px)',
  down: 'translateY(-40px)',
  left: 'translateX(40px)',
  right: 'translateX(-40px)',
  scale: 'scale(0.92)',
  fade: 'none',
}

interface RevealProps {
  children: ReactNode
  as?: ElementType
  direction?: Direction
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  once?: boolean
}

/**
 * Wraps children and animates them into view on scroll.
 * Organic easing, configurable direction + stagger delay.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  direction = 'up',
  delay = 0,
  duration = 900,
  className = '',
  threshold = 0.15,
  once = true,
}: RevealProps) {
  const { ref, shown } = useReveal<HTMLElement>({ threshold, once })

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : offsets[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  )
}
