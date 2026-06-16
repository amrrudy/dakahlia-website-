import { Check, ExternalLink } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import TypedHeading from '../components/TypedHeading'

const companyImages: Array<{ src: string; isLogo: boolean; src2?: string }> = [
  // 01 Dakahlia Poultry — day-old chicks at the hatchery
  { src: '/images/poultry-chicks.jpg', isLogo: false },
  // 02 Dakahlia Agriculture — citrus harvest
  { src: '/images/agriculture-citrus.jpg', isLogo: false },
  // 03 Dakahlia Slaughterhouse — processing line
  { src: '/images/slaughterhouse-processing.jpg', isLogo: false },
  // 04 Shams Chemicals — full-bleed facility photo
  { src: '/images/Shams.jpg', isLogo: false },
  // 05 Al Anani Foundation — sewing & vocational training
  { src: '/images/foundation-sewing.jpg', isLogo: false },
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
  const { t, dir } = useI18n()
  const p = t.pages.companies
  const isRtl = dir === 'rtl'

  return (
    <>
      {/* Hero with scattered logo background */}
      <section className="relative bg-brand-cream overflow-hidden min-h-[460px] lg:min-h-[540px] flex items-end">

        {/* Scattered brand logos — purely decorative, kept off the title column */}
        {[
          { src: '/images/Agriculture.png',     top: '12%', left: '84%', size: 110, rotate: 5   },
          { src: '/images/Red.png',             top: '4%',  left: '55%', size: 90,  rotate: 15  },
          { src: '/images/Desertgold.png',      top: '22%', left: '60%', size: 100, rotate: 6   },
          { src: '/images/Cleos.png',           top: '28%', left: '90%', size: 95,  rotate: 12  },
          { src: '/images/Foundation.png',      top: '42%', left: '76%', size: 110, rotate: 10  },
          { src: '/images/Harvest.png',         top: '50%', left: '55%', size: 110, rotate: -4  },
          { src: '/images/Shams.png',           top: '45%', left: '91%', size: 110, rotate: 11  },
          { src: '/images/Saucetree.png',       top: '35%', left: '83%', size: 100, rotate: 7   },
          { src: '/images/Aqua.png',            top: '60%', left: '62%', size: 105, rotate: -7  },
          { src: '/images/Market.png',          top: '38%', left: '80%', size: 120, rotate: -5  },
          { src: '/images/Pickletree.png',      top: '6%',  left: '70%', size: 95,  rotate: -6  },
          { src: '/images/Poultry.png',         top: '6%',  left: '5%',  size: 115, rotate: 8   },
          { src: '/images/Citrus.png',          top: '14%', left: '28%', size: 105, rotate: -10 },
          { src: '/images/Sauce.png',           top: '8%',  left: '46%', size: 95,  rotate: -14 },
          { src: '/images/Fayruze.png',         top: '2%',  left: '15%', size: 100, rotate: -8  },
          { src: '/images/ALEEF-LOGO (1).png',  top: '18%', left: '72%', size: 110, rotate: 4   },
        ].map((logo, i) => {
          // Cycle through three drift variants so each logo flies on its own path
          const driftClass = ['animate-drift-a', 'animate-drift-b', 'animate-drift-c'][i % 3]
          return (
          <span
            key={i}
            aria-hidden="true"
            className={driftClass}
            style={{
              position: 'absolute',
              top: logo.top,
              // In RTL, mirror left → right so logos flip to the title-free side
              ...(isRtl ? { right: logo.left } : { left: logo.left }),
              width: logo.size,
              height: logo.size,
              transform: `rotate(${isRtl ? -logo.rotate : logo.rotate}deg)`,
              animationDelay: `-${(i * 1.3) % 11}s`,
              pointerEvents: 'none',
              userSelect: 'none',
              display: 'inline-block',
              willChange: 'translate',
            }}
          >
            <img
              src={logo.src}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain"
            />
          </span>
          )
        })}

        {/* Foreground content */}
        <div className="container-x relative z-10 pt-44 pb-14">
          <TypedHeading
            text={p.hero.title}
            cursorClassName="bg-brand-green"
            className="display-text text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-brand-ink text-balance max-w-3xl"
          />
          <p className="mt-6 text-lg max-w-2xl leading-relaxed text-pretty text-brand-ink/65">
            {p.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow mb-5">{p.intro.eyebrow}</p>
            <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-brand-ink text-balance">{p.intro.title}</h2>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {p.items.map((item, i) => {
              const reversed = i % 2 === 1
              // Asymmetric "leaf" radius — flips per card for visual rhythm
              const leafRadius = reversed
                ? 'rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-2xl rounded-br-2xl'
                : 'rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-2xl rounded-bl-2xl'
              return (
                <article key={item.index} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div className={`group relative ${reversed ? 'lg:order-2' : ''} transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1`}>
                    {companyImages[i].isLogo ? (
                      /* Logo card — dark branded background */
                      <div
                        className={`relative aspect-[5/4] bg-brand-ink flex items-center justify-center gap-6 p-10 overflow-hidden
                          ${leafRadius}
                          shadow-[0_25px_50px_-15px_rgba(13,31,23,0.3)]
                          transition-shadow duration-500
                          group-hover:shadow-[0_35px_70px_-15px_rgba(4,121,62,0.35)]`}
                        style={{ transform: 'translateZ(0)', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                      >
                        <img loading="lazy" decoding="async"
                          src={companyImages[i].src}
                          alt={item.name}
                          className={`object-contain transition-transform duration-700 group-hover:scale-[1.04] ${companyImages[i].src2 ? 'max-w-[45%] max-h-[55%]' : 'max-w-[70%] max-h-[60%]'}`}
                        />
                        {companyImages[i].src2 && (
                          <img loading="lazy" decoding="async"
                            src={companyImages[i].src2}
                            alt={item.name}
                            className="max-w-[45%] max-h-[75%] object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.04]"
                          />
                        )}
                      </div>
                    ) : (
                      <div
                        className={`relative aspect-[5/4] bg-brand-cream isolate overflow-hidden
                          ${leafRadius}
                          shadow-[0_25px_50px_-15px_rgba(13,31,23,0.22)]
                          transition-shadow duration-500
                          group-hover:shadow-[0_35px_70px_-15px_rgba(4,121,62,0.3)]`}
                        style={{ transform: 'translateZ(0)', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          src={companyImages[i].src}
                          alt={item.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                        />
                        {/* Soft inner ring for a refined edge against the photo */}
                        <div aria-hidden className={`absolute inset-0 ring-1 ring-inset ring-white/30 ${leafRadius} pointer-events-none`} />

                        {/* Glass index plate — masked into the card, shares the leaf shape */}
                        <div
                          className={`absolute top-4 ${reversed ? 'end-4' : 'start-4'} z-10 pointer-events-none
                            ${reversed
                              ? 'rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md'
                              : 'rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md'}
                            bg-white/30 backdrop-blur-2xl backdrop-saturate-200
                            border border-white/55
                            shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_10px_24px_-8px_rgba(0,0,0,0.35)]
                            px-4 py-2.5
                            flex items-center gap-2`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                          <span className="font-display text-xl lg:text-2xl text-white leading-none">
                            {item.index}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* For logo cards (dark bg variant), keep an index plate too */}
                    {companyImages[i].isLogo && (
                      <div
                        className={`absolute top-4 ${reversed ? 'end-4' : 'start-4'} z-10 pointer-events-none
                          ${reversed
                            ? 'rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md'
                            : 'rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md'}
                          bg-white/15 backdrop-blur-2xl backdrop-saturate-200
                          border border-white/30
                          shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]
                          px-4 py-2.5
                          flex items-center gap-2`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                        <span className="font-display text-xl lg:text-2xl text-white leading-none">
                          {item.index}
                        </span>
                      </div>
                    )}
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
