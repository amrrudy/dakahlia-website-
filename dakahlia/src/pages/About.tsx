import { useI18n } from '../lib/i18n'
import PageHero from '../components/PageHero'

export default function About() {
  const { t } = useI18n()
  const p = t.pages.about

  return (
    <>
      <PageHero eyebrow={p.hero.eyebrow} title={p.hero.title} subtitle={p.hero.subtitle} />

      {/* Intro section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="img-card rounded-2xl aspect-[4/5]">
                <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80" alt="" />
              </div>
              <div className="absolute -bottom-6 -end-6 bg-brand-green text-white px-7 py-5 rounded-2xl shadow-xl">
                <div className="font-display text-3xl leading-none">{p.intro.statBadge.split(' ')[0]}</div>
                <div className="text-xs uppercase tracking-wider mt-1 opacity-80">
                  {p.intro.statBadge.split(' ').slice(1).join(' ')}
                </div>
              </div>
            </div>
            <div>
              <p className="eyebrow mb-6">{p.intro.eyebrow}</p>
              <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-brand-ink text-balance">
                {p.intro.title}
              </h2>
              <div className="mt-8 space-y-5 text-lg text-brand-ink/70 leading-relaxed text-pretty">
                <p>{p.intro.p1}</p>
                <p>{p.intro.p2}</p>
                <p>{p.intro.p3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey / Timeline */}
      <section className="py-20 lg:py-28 bg-brand-cream relative leaf-bg">
        <div className="container-x">
          <div className="max-w-3xl mb-16">
            <p className="eyebrow mb-5">{p.journey.eyebrow}</p>
            <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-brand-ink text-balance">
              {p.journey.title}
            </h2>
          </div>

          <div className="relative">
            {/* Timeline center line */}
            <div className="absolute start-6 lg:start-1/2 lg:-translate-x-1/2 top-2 bottom-2 w-px bg-brand-green/20" />

            <ol className="space-y-12 lg:space-y-20">
              {p.journey.items.map((item, i) => (
                <li key={i} className={`relative ${i % 2 === 0 ? 'lg:pe-1/2 lg:text-end' : 'lg:ps-1/2'}`}>
                  {/* Dot */}
                  <div className="absolute start-4 lg:start-1/2 lg:-translate-x-1/2 top-1 w-5 h-5 rounded-full bg-brand-yellow border-4 border-brand-cream shadow" />

                  <div className={`ps-16 lg:ps-0 ${i % 2 === 0 ? 'lg:pe-16' : 'lg:ps-16'}`}>
                    <div className="inline-block px-3 py-1 rounded-full bg-brand-green text-white text-xs font-bold tracking-wider uppercase mb-3">
                      {item.year}
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl text-brand-ink mb-3">{item.title}</h3>
                    <p className="text-brand-ink/70 leading-relaxed max-w-md text-pretty">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Vision + Mission */}
      <section className="py-20 lg:py-28 bg-brand-ink text-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="bg-brand-green rounded-3xl p-10 lg:p-12 relative overflow-hidden">
              <svg className="absolute -top-10 -end-10 w-40 h-40 opacity-10" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="white" />
              </svg>
              <h3 className="font-display text-3xl lg:text-4xl mb-5 relative">{p.visionMission.visionTitle}</h3>
              <p className="text-white/90 leading-relaxed relative">{p.visionMission.visionBody}</p>
            </div>
            <div className="bg-brand-yellow text-brand-ink rounded-3xl p-10 lg:p-12 relative overflow-hidden">
              <svg className="absolute -bottom-10 -start-10 w-40 h-40 opacity-15" viewBox="0 0 100 100">
                <path d="M50 5 L60 40 L95 50 L60 60 L50 95 L40 60 L5 50 L40 40 Z" fill="#04793e" />
              </svg>
              <h3 className="font-display text-3xl lg:text-4xl mb-5 relative">{p.visionMission.missionTitle}</h3>
              <p className="text-brand-ink/85 leading-relaxed relative">{p.visionMission.missionBody}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow mb-5">{p.values.eyebrow}</p>
            <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-brand-ink text-balance">
              {p.values.title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {p.values.items.map((v, i) => (
              <div
                key={v.name}
                className="group relative bg-brand-cream rounded-2xl p-8 hover:bg-brand-green hover:text-white transition-all duration-500"
              >
                <div className="font-display text-5xl text-brand-green-light group-hover:text-brand-yellow transition-colors opacity-50">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display text-2xl mt-4 mb-3 leading-tight">{v.name}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
            <div>
              <p className="eyebrow mb-5">{p.leadership.eyebrow}</p>
              <h2 className="display-text text-4xl md:text-5xl text-brand-ink text-balance">
                {p.leadership.title}
              </h2>
            </div>
            <div className="space-y-5 text-lg text-brand-ink/70 leading-relaxed text-pretty">
              <p>{p.leadership.p1}</p>
              <p>{p.leadership.p2}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
