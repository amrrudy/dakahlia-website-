import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { Search, X } from 'lucide-react'

interface MagnifierProps {
  children: ReactNode
  zoom?: number
  lensSize?: number
}

export default function Magnifier({
  children,
  zoom = 1.8,
  lensSize = 220,
}: MagnifierProps) {
  const [active, setActive] = useState(false)
  const [mouse, setMouse] = useState({ x: 0, y: 0, visible: false })
  const [width, setWidth] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const lastMouse = useRef({ clientX: 0, clientY: 0 })
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    setWidth(el.getBoundingClientRect().width)
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) setWidth(e.contentRect.width)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const update = useCallback(() => {
    if (rafRef.current !== null) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = lastMouse.current.clientX - rect.left
      const y = lastMouse.current.clientY - rect.top
      const inside =
        x >= 0 && y >= 0 && x <= rect.width && y <= rect.height
      setMouse({ x, y, visible: inside })
    })
  }, [])

  useEffect(() => {
    if (!active) {
      setMouse((m) => ({ ...m, visible: false }))
      return
    }
    const onMove = (e: MouseEvent) => {
      lastMouse.current = { clientX: e.clientX, clientY: e.clientY }
      update()
    }
    const onScroll = () => update()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(false)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('scroll', onScroll, true)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll, true)
      window.removeEventListener('keydown', onKey)
    }
  }, [active, update])

  const rect = containerRef.current?.getBoundingClientRect()
  const lensLeft = (rect?.left ?? 0) + mouse.x - lensSize / 2
  const lensTop = (rect?.top ?? 0) + mouse.y - lensSize / 2

  return (
    <div ref={containerRef} className="relative">
      {children}

      <button
        type="button"
        onClick={() => setActive((v) => !v)}
        title={active ? 'Hide reading magnifier (Esc)' : 'Show reading magnifier'}
        aria-label={active ? 'Hide reading magnifier' : 'Show reading magnifier'}
        aria-pressed={active}
        className={`fixed bottom-24 end-6 z-[55] w-12 h-12 rounded-full flex items-center justify-center
          backdrop-blur-2xl backdrop-saturate-200
          transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${active
            ? 'bg-brand-green/35 text-white border border-brand-green/50 scale-110 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_15px_35px_-8px_rgba(4,121,62,0.4)]'
            : 'bg-white/35 text-brand-green border border-white/60 hover:bg-white/55 hover:scale-110 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_12px_30px_-10px_rgba(13,31,23,0.25)]'}`}
      >
        {active ? <X size={20} strokeWidth={2.5} /> : <Search size={20} strokeWidth={2.5} />}
      </button>

      {active && mouse.visible && width > 0 && (
        <div
          aria-hidden
          className="fixed pointer-events-none rounded-full overflow-hidden
            bg-white/15 backdrop-blur-md backdrop-saturate-200
            border border-white/60
            shadow-[inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-1px_0_rgba(255,255,255,0.2),0_30px_60px_-10px_rgba(13,31,23,0.35),0_0_0_1px_rgba(4,121,62,0.18)]"
          style={{
            width: lensSize,
            height: lensSize,
            left: lensLeft,
            top: lensTop,
            zIndex: 50,
          }}
        >
          <div
            style={{
              width,
              transform: `scale(${zoom})`,
              transformOrigin: '0 0',
              position: 'absolute',
              left: -mouse.x * zoom + lensSize / 2,
              top: -mouse.y * zoom + lensSize / 2,
            }}
          >
            {children}
          </div>

          {/* Specular highlight to sell the glass look */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              background:
                'radial-gradient(120% 80% at 30% 18%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.18) 22%, rgba(255,255,255,0) 55%)',
              mixBlendMode: 'screen',
            }}
          />
        </div>
      )}
    </div>
  )
}
