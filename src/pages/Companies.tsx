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

const companyLogos: string[] = [
  '/images/Poultry.png',
  '/images/Agriculture.png',
  '/images/Slaughterhouse.png',
  '/images/Shams.png',
  '/images/Foundation.png',
]

/** Large parallax tilt card with depth layers: photo, index ribbon, floating logo badge */
function ParallaxImageCard({
  imageSrc,
  logoSrc,
  alt,
  index,
  total,
}: {
  imageSrc: string
  logoSrc: string
  alt: string
  index: string
  total: number
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
  const photoShiftX = -tilt.dx * 18   // image pans opposite to cursor (depth illusion)
  const photoShiftY = -tilt.dy * 18
  const ribbonShiftX = tilt.dx * 16   // foreground layer drifts with cursor
  const ribbonShiftY = tilt.dy * 16
  const logoShiftX = tilt.dx * 26     // logo (deepest) drifts more
  const logoShiftY = tilt.dy * 26

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

        {/* Index ribbon — top-left, depth 80, parallax-shifted */}
        <div
          className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full
            bg-white/15 backdrop-blur-xl backdrop-saturate-200
            border border-white/30
            shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]
            text-[10px] font-bold tracking-[0.28em] uppercase text-white/95"
          style={{
            transform: `translate3d(${ribbonShiftX}px, ${ribbonShiftY}px, 80px)`,
            transition: 'transform 250ms cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          {index} / {String(total).padStart(2, '0')}
        </div>

        {/* Floating logo — bottom-right, deepest depth, biggest parallax shift */}
        <div
          className="absolute bottom-5 right-5 w-20 h-20 lg:w-24 lg:h-24
            flex items-center justify-center"
          style={{
            transform: `translate3d(${logoShiftX}px, ${logoShiftY}px, 120px)`,
            transition: 'transform 250ms cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <img
            src={logoSrc}
            alt=""
            loading="lazy"
            decoding="async"
            className="max-w-full max-h-full object-contain drop-shadow-[0_6px_14px_rgba(0,0,0,0.55)]"
          />
        </div>
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
      {/* Hero — split layout: copy left, staggered logo collage right */}
      <section className="relative bg-brand-cream overflow-hidden min-h-[460px] lg:min-h-[540px] flex items-center">
        {/* Decorative blobs */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -start-24 w-[28rem] h-[28rem] rounded-full bg-brand-green/10 blur-3xl animate-blob-float" />
          <div className="absolute -bottom-24 -end-24 w-[26rem] h-[26rem] rounded-full bg-brand-yellow/10 blur-3xl animate-blob-float" style={{ animationDelay: '5s' }} />
        </div>

        <div className="container-x relative z-10 pt-36 pb-14 lg:pt-44 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — copy */}
            <div>
              <p className="eyebrow mb-5">Our Portfolio</p>
              <TypedHeading
                text={p.hero.title}
                cursorClassName="bg-brand-green"
                className="display-text text-[2rem] sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl text-brand-ink text-balance leading-[1.05]"
              />
              <p className="mt-6 text-lg lg:text-xl max-w-xl leading-relaxed text-pretty text-brand-ink/70">
                {p.hero.subtitle}
              </p>
            </div>

            {/* Right — creative 3D scene: canted planetary ring + glowing core + nebula */}
            <div
              className="relative h-[260px] sm:h-[320px] lg:h-[360px] flex items-center justify-center logo-scene"
              style={{ perspective: '1600px' }}
            >
              {/* Background nebula glow — soft, low-opacity */}
              <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full
                  bg-[radial-gradient(circle,rgba(98,188,84,0.10)_0%,rgba(4,121,62,0.05)_45%,transparent_70%)]
                  blur-2xl animate-nebula-pulse" />
              </div>

              {/* Counter-rotating outer orbit ring (decorative line + dots) */}
              <div
                aria-hidden
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  className="orbit-counter relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full
                    border border-dashed border-brand-green/10
                    [--orbit-r:112px] sm:[--orbit-r:128px] lg:[--orbit-r:144px]"
                  style={{ transform: 'rotateX(72deg)' }}
                >
                  {/* Three sparkle dots traveling along the orbit */}
                  {[0, 120, 240].map((deg) => (
                    <span
                      key={deg}
                      className="absolute top-1/2 left-1/2 w-2 h-2 -ms-1 -mt-1 rounded-full
                        bg-brand-green/40 shadow-[0_0_10px_rgba(98,188,84,0.25)]"
                      style={{
                        transform: `rotate(${deg}deg) translateX(var(--orbit-r))`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Canted stage — tilts the whole ring like Saturn */}
              <div
                className="relative w-full h-full flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d', transform: 'rotateX(18deg)' }}
              >
                {/* Central glowing core (stays fixed inside canted stage) */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                  <div
                    className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full
                      bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.5),rgba(98,188,84,0.10)_55%,rgba(4,121,62,0.10)_100%)]
                      backdrop-blur-md
                      border border-brand-green/15
                      flex items-center justify-center
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_25px_70px_rgba(4,121,62,0.10)]
                      animate-core-pulse"
                    style={{ transform: 'rotateX(-18deg)' }}
                  >
                    {/* Inner gloss */}
                    <span aria-hidden className="absolute inset-1 rounded-full bg-gradient-to-br from-white/35 via-transparent to-transparent" />
                    {/* Brand mark */}
                    <img
                      src="/logos/dakahlia-vertical.png"
                      alt="Dakahlia"
                      className="relative w-12 h-12 lg:w-14 lg:h-14 object-contain"
                    />
                    {/* Halo ring */}
                    <span aria-hidden className="absolute -inset-2 rounded-full border border-brand-green/10 animate-halo-pulse" />
                  </div>
                </div>

                {/* Rotating ring of logo cards */}
                <div
                  className="logo-ring relative w-40 h-40 sm:w-44 sm:h-44 lg:w-52 lg:h-52 [--ring-z:170px] sm:[--ring-z:210px] lg:[--ring-z:250px]"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {[
                    { src: '/images/Poultry.png',        label: 'Dakahlia Poultry' },
                    { src: '/images/Agriculture.png',    label: 'Dakahlia Agriculture' },
                    { src: '/images/Slaughterhouse.png', label: 'Dakahlia Slaughterhouses' },
                    { src: '/images/Shams.png',          label: 'Shams Chemicals' },
                    { src: '/images/Foundation.png',     label: 'Al Anani Foundation' },
                  ].map((logo, i, arr) => {
                    const angle = (360 / arr.length) * i
                    return (
                      <div
                        key={logo.src}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          transform: `rotateY(${angle}deg) translateZ(var(--ring-z))`,
                          transformStyle: 'preserve-3d',
                          backfaceVisibility: 'hidden',
                        }}
                      >
                        {/* Per-card float sway with phase offset */}
                        <div
                          className="card-float"
                          style={{
                            animationDelay: `${-i * 1.1}s`,
                            transform: 'rotateX(-18deg)',
                          }}
                        >
                          <TiltLogoCard src={logo.src} label={logo.label} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <style>{`
                @keyframes logoRingSpin {
                  from { transform: rotateY(0deg); }
                  to   { transform: rotateY(360deg); }
                }
                .logo-ring {
                  animation: logoRingSpin 26s linear infinite;
                  will-change: transform;
                }
                .logo-scene:hover .logo-ring { animation-play-state: paused; }

                @keyframes orbit-counter {
                  from { transform: rotateX(72deg) rotateZ(0deg); }
                  to   { transform: rotateX(72deg) rotateZ(-360deg); }
                }
                .orbit-counter {
                  animation: orbit-counter 30s linear infinite;
                  will-change: transform;
                }

                @keyframes nebula-pulse {
                  0%, 100% { opacity: 0.65; transform: scale(1); }
                  50%      { opacity: 1;    transform: scale(1.08); }
                }
                .animate-nebula-pulse {
                  animation: nebula-pulse 6s ease-in-out infinite;
                }

                @keyframes core-pulse {
                  0%, 100% {
                    box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 25px 70px rgba(4,121,62,0.10);
                  }
                  50% {
                    box-shadow: inset 0 1px 0 rgba(255,255,255,0.6), 0 35px 90px rgba(98,188,84,0.15);
                  }
                }
                .animate-core-pulse {
                  animation: core-pulse 3.5s ease-in-out infinite;
                }

                @keyframes halo-pulse {
                  0%, 100% { transform: scale(1);    opacity: 0.4; }
                  50%      { transform: scale(1.25); opacity: 0;   }
                }
                .animate-halo-pulse {
                  animation: halo-pulse 2.6s ease-out infinite;
                }

                @keyframes card-float {
                  0%, 100% { transform: rotateX(-18deg) translateY(0px); }
                  50%      { transform: rotateX(-18deg) translateY(-10px); }
                }
                .card-float {
                  animation: card-float 4.5s ease-in-out infinite;
                  will-change: transform;
                }

                @media (prefers-reduced-motion: reduce) {
                  .logo-ring, .orbit-counter, .animate-nebula-pulse,
                  .animate-core-pulse, .animate-halo-pulse, .card-float {
                    animation: none;
                  }
                }
              `}</style>
            </div>

          </div>
        </div>
      </section>

      <section id="companies-list" className="py-16 lg:py-24 bg-white scroll-mt-24">
        <div className="container-x">
          <div className="space-y-16 lg:space-y-24">
            {p.items.map((item, i) => {
              const reversed = i % 2 === 1
              const offsets = ['lg:mt-0', 'lg:mt-14', 'lg:-mt-4', 'lg:mt-10', 'lg:mt-4']
              const offset = offsets[i % offsets.length]
              return (
                <article key={item.index} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  <div className={`${offset} ${reversed ? 'lg:order-2' : ''}`}>
                    <ParallaxImageCard
                      imageSrc={companyImages[i].src}
                      logoSrc={companyLogos[i]}
                      alt={item.name}
                      index={item.index}
                      total={p.items.length}
                    />
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
