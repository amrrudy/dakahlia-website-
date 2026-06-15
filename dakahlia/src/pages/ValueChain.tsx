import { useI18n } from '../lib/i18n'
import PageHero from '../components/PageHero'

export default function ValueChain() {
  const { t } = useI18n()
  const p = t.pages.valueChain

  return (
    <>
      <PageHero title={p.hero.title} subtitle={p.hero.subtitle} />

      {/* Approach */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
            <div>
              <p className="eyebrow mb-5">{p.approach.eyebrow}</p>
              <h2 className="display-text text-4xl md:text-5xl text-brand-ink text-balance">
                {p.approach.title}
              </h2>
            </div>
            <div className="lg:pt-16">
              <p className="text-lg text-brand-ink/70 leading-relaxed text-pretty">
                {p.approach.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Farm to Table */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-green/85" />
        </div>
        <div className="container-x relative text-white">
          <div className="max-w-3xl">
            <p className="eyebrow !text-brand-yellow mb-5">{p.farmToTable.eyebrow}</p>
            <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-balance">
              {p.farmToTable.title}
            </h2>
            <p className="mt-8 text-lg text-white/85 leading-relaxed max-w-2xl text-pretty">
              {p.farmToTable.body}
            </p>
            <div className="mt-8 inline-flex items-center gap-3 bg-brand-yellow text-brand-ink px-5 py-3 rounded-full text-sm font-bold tracking-wide">
              ✓ {p.farmToTable.badge}
            </div>
          </div>
        </div>
      </section>

      {/* The Model — 6 stages */}
      <section className="py-20 lg:py-28 bg-brand-cream leaf-bg">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow mb-5">{p.model.eyebrow}</p>
            <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-brand-ink text-balance">
              {p.model.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.model.stages.map((s, i) => (
              <div
                key={s.num}
                className="group bg-white rounded-2xl p-8 lg:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute -top-4 -end-4 font-display text-8xl text-brand-green/5 leading-none select-none group-hover:text-brand-green/10 transition-colors">
                  {s.num}
                </div>
                <div className="relative">
                  <div className="font-display text-3xl text-brand-green-light leading-none mb-4">
                    {s.num}
                  </div>
                  <h3 className="font-display text-2xl text-brand-ink mb-3 leading-tight">{s.title}</h3>
                  <p className="text-brand-ink/70 leading-relaxed text-sm">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strength + Stats */}
      <section className="py-20 lg:py-28 bg-brand-ink text-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
            <div>
              <p className="eyebrow !text-brand-yellow mb-5">{p.strength.eyebrow}</p>
              <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-balance">
                {p.strength.title}
              </h2>
              <p className="mt-8 text-lg text-white/75 leading-relaxed text-pretty">
                {p.strength.body}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {p.strength.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-brand-yellow/50 transition-colors"
                >
                  <div className="font-display text-5xl lg:text-6xl text-brand-yellow leading-none">
                    {stat.value}
                  </div>
                  <div className="mt-3 text-sm text-white/70 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
