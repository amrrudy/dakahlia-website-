import { useEffect, useState } from 'react'

interface TypedHeadingProps {
  text: string
  className?: string
  /** Per-character interval in ms (default 55) */
  speed?: number
  /** Delay before typing starts in ms (default 250) */
  startDelay?: number
  /** Tailwind classes for the blinking cursor; cursor takes the current text color via bg-current */
  cursorClassName?: string
}

/**
 * Typewriter heading. Renders an invisible full-text placeholder behind a typing layer
 * so the layout never shifts as characters appear.
 *
 * Re-runs the typing animation whenever the `text` prop changes (e.g. locale switch).
 */
export default function TypedHeading({
  text,
  className = '',
  speed = 55,
  startDelay = 250,
  cursorClassName = 'bg-brand-yellow',
}: TypedHeadingProps) {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    setTyped('')
    if (!text) return
    let i = 0
    const charsPerTick = Math.max(1, Math.ceil(text.length / 60))
    let intervalId: ReturnType<typeof setInterval> | undefined
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i = Math.min(text.length, i + charsPerTick)
        setTyped(text.slice(0, i))
        if (i >= text.length && intervalId) clearInterval(intervalId)
      }, speed)
    }, startDelay)
    return () => {
      clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [text, speed, startDelay])

  const done = typed.length >= text.length

  return (
    <h1 className={`relative ${className}`}>
      {/* Invisible full-text placeholder reserves layout so nothing shifts */}
      <span aria-hidden className="invisible select-none">{text}</span>
      {/* Typing layer */}
      <span className="absolute inset-0">
        {typed}
        <span
          aria-hidden
          className={`inline-block w-[0.06em] h-[0.78em] align-middle ms-2 rounded-sm ${cursorClassName} ${
            done ? 'opacity-0 transition-opacity duration-700' : 'animate-cursor-blink'
          }`}
        />
      </span>
    </h1>
  )
}
