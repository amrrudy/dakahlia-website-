import { useRef, useState } from 'react'
import { Check, ExternalLink } from 'lucide-react'
import { useI18n } from '../lib/i18n'

/** Card that tilts in 3D following the cursor position */
function TiltLogoCard({
  src,
  label,
}: {
  src: string
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, glow: { x: 50, y: 50 } })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    setTilt({
      rx: -(py - 0.5) * 14,
      ry: (px - 0.5) * 14,
      glow: { x: px * 100, y: py * 100 },
    })
  }

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, glow: { x: 50, y: 50 } })
  }

  return (
    <div className="flex-shrink-0" style={{ perspective: '900px' }}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative aspect-square w-32 sm:w-36 lg:w-40
          rounded-2xl
          bg-white/45 backdrop-blur-2xl backdrop-saturate-200
          border border-white/70
          shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_18px_40px_-15px_rgba(13,31,23,0.18)]
          overflow-hidden cursor-pointer"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 250ms cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        {/* Cursor-following glow */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${tilt.glow.x}% ${tilt.glow.y}%, rgba(4,121,62,0.22), transparent 55%)`,
          }}
        />
        {/* Top shine */}
        <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent" />

        <div className="relative h-full flex items-center justify-center p-2.5" style={{ transform: 'translateZ(20px)' }}>
          <img
            src={src}
            alt={label}
            loading="lazy"
            decoding="async"
            className="max-w-[92%] max-h-[92%] object-contain"
          />
        </div>
      </div>
    </div>
  )
}

const companyImages: Array<{ src: string; isLogo: boolean; src2?: string }> = [
  // 01 Dakahlia Poultry — day-old chicks at the hatchery
  { src: '/images/poultry-chicks.jpg', isLogo: false },
  // 02 Dakahlia Agriculture — citrus harvest
  { src: '/images/agriculture-citrus.jpg', isLogo: false },
  // 03 Dakahlia Slaughterhouse — processing line
  { src: '/images/slaughterhouse-processing.jpg', isLogo: false },
  // 04 Shams Chemicals — full-bleed facility photo
  { src: '/images/Shams.jpg', isLogo: false },
  // 05 Al Anani Foundation — medical outreach
  { src: '/images/anani-foundation-medical.jpg', isLogo: false },
]

const companyLogos: string[] = [
  '/images/Poultry.png',
  '/images/Agriculture.png',
  '/images/Slaughterhouse.png',
  '/images/Shams.png',
  '/images/Foundation.png',
]

/** Large parallax tilt card with depth layers: photo, index ribbon */
function ParallaxImageCard({
  imageSrc,
  alt,
}: {
  imageSrc: string
  alt: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, rz: 0, mx: 50, my: 50, dx: 0, dy: 0, hovering: false })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const nx = px - 0.5 // -0.5..0.5
    const ny = py - 0.5
    setTilt({
      rx: -ny * 22,                 // stronger up/down tilt
      ry:  nx * 26,                 // stronger left/right tilt
      rz:  nx * ny * -8,            // diagonal roll on Z — adds spatial feel
      mx: px * 100,
      my: py * 100,
      dx: nx,
      dy: ny,
      hovering: true,
    })
  }

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, rz: 0, mx: 50, my: 50, dx: 0, dy: 0, hovering: false })
  }

  // Parallax shifts per layer (px)
  const photoShiftX = -tilt.dx * 18
  const photoShiftY = -tilt.dy * 18

  return (
    <div className="relative" style={{ perspective: '1200px' }}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative aspect-[4/5] rounded-[28px] overflow-hidden
          bg-brand-ink
          shadow-[0_30px_70px_-20px_rgba(13,31,23,0.45),0_8px_20px_-8px_rgba(13,31,23,0.25)]
          cursor-pointer"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) rotateZ(${tilt.rz}deg) translateZ(${tilt.hovering ? 30 : 0}px)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 250ms cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        {/* Photo — back layer, pans opposite to cursor for parallax depth */}
        <div
          className="absolute -inset-4"
          style={{
            transform: `translate3d(${photoShiftX}px, ${photoShiftY}px, 0)`,
            transition: 'transform 250ms cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <img
            src={imageSrc}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
          />
        </div>

        {/* Dark gradient for legibility */}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-brand-ink/85 via-brand-ink/15 to-brand-ink/15 pointer-events-none" />

        {/* Cursor-following spotlight glow */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${tilt.mx}% ${tilt.my}%, rgba(255,255,255,0.22), transparent 50%)`,
            opacity: tilt.hovering ? 1 : 0,
          }}
        />

        {/* Top sheen — also shifts a bit with tilt */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/18 via-transparent to-transparent"
          style={{
            transform: `translate3d(${tilt.dx * 6}px, ${tilt.dy * 6}px, 0)`,
          }}
        />



      </div>

      {/* Floor shadow — shifts opposite to tilt for grounded feel */}
      <div
        aria-hidden
        className="absolute inset-x-6 -bottom-4 h-8 rounded-full bg-brand-ink/35 blur-2xl -z-10"
        style={{
          transform: `translate3d(${-tilt.dx * 24}px, 0, 0) scale(${tilt.hovering ? 0.92 : 1})`,
          opacity: tilt.hovering ? 0.85 : 1,
          transition: 'transform 250ms cubic-bezier(0.22,1,0.36,1), opacity 250ms, scale 250ms',
        }}
      />
    </div>
  )
}

// Official websites — null means no external site for that company
const companyWebsites: (string | null)[] = [
  'http://dakahliapoultry.com/',   // 01 Dakahlia Poultry
  null,                             // 02 Dakahlia Agriculture
  'https://temryshop.com/',         // 03 Dakahlia Slaughterhouse
  'https://shamschemicals.com/',    // 04 Shams Chemicals
  null,                             // 05 Al Anani Foundation
]

export default function Companies() {
  const { t } = useI18n()
  const p = t.pages.companies

  return (
    <>
      {/* Hero — same style as About/Story page */}
      <section className="relative overflow-hidden min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/images/companies-hero.jpg"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 50%' }}
          />
        </div>
        {/* Dark gradient overlay — heavy at bottom for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/55 to-brand-ink/15 pointer-events-none" />

        <div className="container-x relative z-10 pt-32 sm:pt-44 pb-10 sm:pb-14">
          <h1 className="display-text text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white text-balance max-w-3xl whitespace-pre-line leading-[1.05]">{p.hero.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-white/75 whitespace-nowrap">
            {p.hero.subtitle}
          </p>
        </div>
      </section>

      <section id="companies-list" className="py-16 lg:py-24 scroll-mt-24">
        <div className="container-x">
          <div className="space-y-16 lg:space-y-24">
            {p.items.map((item, i) => {
              const reversed = i % 2 === 1
              return (
                <article key={item.index} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  <div className={`self-start ${reversed ? 'lg:order-2' : ''}`}>
                    <ParallaxImageCard
                      imageSrc={companyImages[i].src}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex flex-col gap-6 self-start pt-0">
                    <div>
                      <p className="eyebrow mb-3">{item.tagline}</p>
                      <img
                        src={companyLogos[i]}
                        alt=""
                        className="h-40 sm:h-48 lg:h-56 w-auto object-contain mb-1"
                      />
                      <h3 className="display-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brand-ink text-balance">{item.name}</h3>
                    </div>
                    <p className="text-base sm:text-lg text-brand-ink/70 leading-relaxed text-pretty">{item.body}</p>
                    <ul className="space-y-3">
                      {item.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center mt-0.5">
                            <Check size={14} className="text-brand-green" strokeWidth={3} />
                          </div>
                          <span className="text-brand-ink/80">{b}</span>
                        </li>
                      ))}
                    </ul>
                    {companyWebsites[i] && (
                      <div>
                        <a
                          href={companyWebsites[i]!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group btn-outline"
                        >
                          {t.nav.visitWebsite}
                          <ExternalLink size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
