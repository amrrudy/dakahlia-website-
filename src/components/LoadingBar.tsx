import { useEffect, useState } from 'react'

export default function LoadingBar() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPct(35),   80)
    const t2 = setTimeout(() => setPct(62),  450)
    const t3 = setTimeout(() => setPct(85), 1300)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <div className="fixed top-0 inset-x-0 z-[9999] h-[3px] pointer-events-none">
      <div
        className="h-full bg-brand-yellow rounded-r-full"
        style={{
          width: `${pct}%`,
          boxShadow: '0 0 12px rgba(226,224,27,0.8), 0 0 24px rgba(226,224,27,0.3)',
          transition: pct === 0
            ? 'none'
            : pct <= 35
              ? 'width 280ms ease-out'
              : pct <= 62
                ? 'width 500ms ease-out'
                : 'width 1800ms ease-out',
        }}
      />
    </div>
  )
}
