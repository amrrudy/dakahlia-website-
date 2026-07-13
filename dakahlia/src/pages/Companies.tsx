import { Check } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import PageHero from '../components/PageHero'

const companyImages = [
  'https://images.unsplash.com/photo-1569288063648-5d77e51ed8fc?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1604908554027-3c45ed52f2bd?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80',
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
            <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-brand-ink text-balance">
              {p.intro.title}
            </h2>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {p.items.map((item, i) => {
              const reversed = i % 2 === 1
              return (
                <article
                  key={item.index}
                  className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                >
                  <div className={`relative ${reversed ? 'lg:order-2' : ''}`}>
                    <div className="img-card rounded-2xl aspect-[5/4]">
                      <img src={companyImages[i]} alt={item.name} />
                    </div>
                    <div className="absolute top-6 start-6 font-display text-7xl text-brand-yellow/90 leading-none">
                      {item.index}
                    </div>
                  </div>

                  <div>
                    <p className="eyebrow mb-4">{item.tagline}</p>
                    <h3 className="display-text text-3xl md:text-4xl lg:text-5xl text-brand-ink mb-6 text-balance">
                      {item.name}
                    </h3>
                    <p className="text-lg text-brand-ink/70 leading-relaxed text-pretty mb-8">
                      {item.body}
                    </p>
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
