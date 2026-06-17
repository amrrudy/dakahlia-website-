import { useRef, useState } from 'react'
import { Check, ExternalLink } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import TypedHeading from '../components/TypedHeading'

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
        className="group relative aspect-square w-28 sm:w-32 lg:w-36
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

        <div className="relative h-full flex items-center justify-center p-4" style={{ transform: 'translateZ(20px)' }}>
          <img
            src={src}
            alt={label}
            loading="lazy"
            decoding="async"
            className="max-w-[80%] max-h-[80%] object-contain"
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
  // 05 Al Anani Foundation — vocational training (electronics)
  { src: '/images/anani-foundation-dropdown.jpg', isLogo: false },
]

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
      {/* Hero — consistent with other pages: full-width title + subtitle, logo strip below */}
      <section className="relative bg-brand-cream overflow-hidden min-h-[460px] lg:min-h-[540px] flex flex-col justify-end">
        <div className="container-x relative z-10 pt-44 pb-14">
          <TypedHeading
            text={p.hero.title}
            cursorClassName="bg-brand-green"
            className="display-text text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-brand-ink text-balance max-w-3xl"
          />
          <p className="mt-6 text-lg max-w-2xl leading-relaxed text-pretty text-brand-ink/65">
            {p.hero.subtitle}
          </p>

          {/* Brand logo strip — 3D cursor-tilt cards */}
          <div className="mt-10 flex flex-wrap items-center justify-start gap-3 sm:gap-4">
            {[
              { src: '/images/Poultry.png',        label: 'Dakahlia Poultry' },
              { src: '/images/Agriculture.png',    label: 'Dakahlia Agriculture' },
              { src: '/images/Slaughterhouse.png', label: 'Dakahlia Slaughterhouses' },
              { src: '/images/Shams.png',          label: 'Shams Chemicals' },
              { src: '/images/Foundation.png',     label: 'Al Anani Foundation' },
            ].map((logo) => (
              <TiltLogoCard key={logo.src} src={logo.src} label={logo.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        {/* Leaf clip-path + gradient defs for stroke */}
        <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
          <defs>
            <clipPath id="dk-leaf-shape" clipPathUnits="objectBoundingBox">
              <path d="M 0.5 0.02 C 0.92 0.22 0.92 0.78 0.5 0.98 C 0.08 0.78 0.08 0.22 0.5 0.02 Z" />
            </clipPath>
            <linearGradient id="dk-leaf-stroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#62bc54" />
              <stop offset="50%" stopColor="#04793e" />
              <stop offset="100%" stopColor="#035a2e" />
            </linearGradient>
          </defs>
        </svg>

        <div className="container-x">
          <div className="space-y-16 lg:space-y-24">
            {p.items.map((item, i) => {
              const reversed = i % 2 === 1
              // Each leaf gets its own tilt + vertical offset so the cards don't sit in a strict grid
              const layoutVariants = [
                { tilt: '-rotate-[8deg]', offset: 'lg:mt-0',  delay: '0s' },
                { tilt:  'rotate-[7deg]', offset: 'lg:mt-16', delay: '1.4s' },
                { tilt: '-rotate-[5deg]', offset: 'lg:-mt-4', delay: '2.8s' },
                { tilt:  'rotate-[9deg]', offset: 'lg:mt-12', delay: '4.2s' },
                { tilt: '-rotate-[6deg]', offset: 'lg:mt-4',  delay: '5.6s' },
              ]
              const v = layoutVariants[i % layoutVariants.length]
              return (
                <article key={item.index} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  <div className={`group relative ${v.offset} ${reversed ? 'lg:order-2' : ''} transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1`}>
                    {/* Sway wrapper — gentle floating loop, doesn't change position */}
                    <div className="animate-leaf-sway" style={{ animationDelay: v.delay }}>
                    {companyImages[i].isLogo ? (
                      /* Logo card — leaf-clipped dark branded plate with gradient + stroke */
                      <div className={`relative aspect-[4/5] ${v.tilt}`}>
                        {/* Soft green glow as the shadow */}
                        <div aria-hidden className="absolute inset-0 bg-brand-green/15 scale-[1.18] blur-2xl pointer-events-none" />

                        <div
                          className="absolute inset-0 bg-gradient-to-br from-brand-ink via-brand-ink to-brand-green-dark flex items-center justify-center gap-6 p-10 overflow-hidden"
                          style={{
                            clipPath: 'url(#dk-leaf-shape)',
                            WebkitClipPath: 'url(#dk-leaf-shape)',
                          }}
                        >
                          <img loading="lazy" decoding="async"
                            src={companyImages[i].src}
                            alt={item.name}
                            className={`object-contain transition-transform duration-700 group-hover:scale-[1.04] ${companyImages[i].src2 ? 'max-w-[40%] max-h-[40%]' : 'max-w-[55%] max-h-[45%]'}`}
                          />
                          {companyImages[i].src2 && (
                            <img loading="lazy" decoding="async"
                              src={companyImages[i].src2}
                              alt={item.name}
                              className="max-w-[40%] max-h-[55%] object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.04]"
                            />
                          )}
                          {/* Light shine across the dark leaf */}
                          <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-brand-green/15 pointer-events-none" />
                        </div>

                        {/* Gradient stroke around the leaf */}
                        <svg
                          className="absolute inset-0 w-full h-full pointer-events-none"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          aria-hidden
                        >
                          <path
                            d="M 50 2 C 92 22 92 78 50 98 C 8 78 8 22 50 2 Z"
                            fill="none"
                            stroke="url(#dk-leaf-stroke)"
                            strokeWidth="0.6"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className={`relative aspect-[4/5] ${v.tilt}`}>
                        {/* Ghost shadow — translucent blurred copy of the image bleeds out behind the leaf */}
                        <img
                          src={companyImages[i].src}
                          alt=""
                          aria-hidden
                          className="absolute inset-0 w-full h-full object-cover scale-[1.18] opacity-10 blur-2xl pointer-events-none"
                        />

                        {/* Leaf-clipped image with gradient overlay */}
                        <div
                          className="absolute inset-0 bg-brand-cream overflow-hidden"
                          style={{
                            clipPath: 'url(#dk-leaf-shape)',
                            WebkitClipPath: 'url(#dk-leaf-shape)',
                          }}
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            src={companyImages[i].src}
                            alt={item.name}
                            className="absolute inset-0 w-full h-full object-cover animate-leaf-image-drift"
                            style={{ animationDelay: `-${i * 3.5}s` }}
                          />
                          {/* Cool gradient overlay — subtle green tint with light shine on top */}
                          <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-brand-green/30 pointer-events-none" />
                          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-brand-ink/25 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Gradient stroke around the leaf edge */}
                        <svg
                          className="absolute inset-0 w-full h-full pointer-events-none"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          aria-hidden
                        >
                          <path
                            d="M 50 2 C 92 22 92 78 50 98 C 8 78 8 22 50 2 Z"
                            fill="none"
                            stroke="url(#dk-leaf-stroke)"
                            strokeWidth="0.6"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </div>
                    )}
                    </div>
                  </div>
                  <div>
                    <p className="eyebrow mb-4">{item.tagline}</p>
                    <h3 className="display-text text-3xl md:text-4xl lg:text-5xl text-brand-ink mb-6 text-balance">{item.name}</h3>
                    <p className="text-lg text-brand-ink/70 leading-relaxed text-pretty mb-8">{item.body}</p>
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
                      <a
                        href={companyWebsites[i]!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group btn-outline mt-8"
                      >
                        {t.nav.visitWebsite}
                        <ExternalLink size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
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
