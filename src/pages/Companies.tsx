import { Check, ExternalLink } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import PageHero from '../components/PageHero'

const companyImages: Array<{ src: string; isLogo: boolean; src2?: string }> = [
  // 01 Dakahlia Poultry — day-old chicks at the hatchery
  { src: '/images/poultry-chicks.jpg', isLogo: false },
  // 02 Dakahlia Agriculture — citrus harvest
  { src: '/images/agriculture-citrus.jpg', isLogo: false },
  // 03 Dakahlia Slaughterhouse — processing line
  { src: '/images/slaughterhouse-processing.jpg', isLogo: false },
  // 04 Shams Chemicals — brand logo on dark card
  { src: '/images/shams-logo.png', isLogo: true },
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
  const { t } = useI18n()
  const p = t.pages.companies

  return (
    <>
      <PageHero title={p.hero.title} subtitle={p.hero.subtitle} />

      <section className="py-16 lg:py-24 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow mb-5">{p.intro.eyebrow}</p>
            <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-brand-ink text-balance">{p.intro.title}</h2>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {p.items.map((item, i) => {
              const reversed = i % 2 === 1
              return (
                <article key={item.index} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div className={`relative ${reversed ? 'lg:order-2' : ''}`}>
                    {companyImages[i].isLogo ? (
                      /* Logo card — dark branded background */
                      <div className="rounded-2xl aspect-[5/4] bg-brand-ink flex items-center justify-center gap-6 p-10">
                        <img
                          src={companyImages[i].src}
                          alt={item.name}
                          className={`object-contain ${companyImages[i].src2 ? 'max-w-[45%] max-h-[55%]' : 'max-w-[70%] max-h-[60%]'}`}
                        />
                        {companyImages[i].src2 && (
                          <img
                            src={companyImages[i].src2}
                            alt={item.name}
                            className="max-w-[45%] max-h-[75%] object-contain drop-shadow-2xl"
                          />
                        )}
                      </div>
                    ) : (
                      <div className="img-card rounded-2xl aspect-[5/4]">
                        <img src={companyImages[i].src} alt={item.name} />
                      </div>
                    )}
                    <div className="absolute top-6 start-6 font-display text-7xl text-brand-yellow/90 leading-none">
                      {item.index}
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
