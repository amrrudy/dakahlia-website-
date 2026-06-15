import { Users, Shield, Heart } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import PageHero from '../components/PageHero'

const cultureIcons = [Users, Shield, Heart]

export default function Careers() {
  const { t } = useI18n()
  const p = t.pages.careers

  return (
    <>
      <PageHero title={p.hero.title} subtitle={p.hero.subtitle} />

      {/* Culture */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 mb-16">
            <div>
              <p className="eyebrow mb-5">{p.culture.eyebrow}</p>
              <h2 className="display-text text-4xl md:text-5xl text-brand-ink text-balance">
                {p.culture.title}
              </h2>
            </div>
            <div className="lg:pt-10">
              <p className="text-lg text-brand-ink/70 leading-relaxed text-pretty">
                {p.culture.intro}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {p.culture.items.map((item, i) => {
              const Icon = cultureIcons[i]
              return (
                <div
                  key={item.title}
                  className="group bg-brand-cream rounded-2xl p-10 hover:bg-brand-green hover:text-white transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-green/10 group-hover:bg-brand-yellow flex items-center justify-center mb-6 transition-colors">
                    <Icon size={26} className="text-brand-green group-hover:text-brand-ink transition-colors" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-2xl mb-3 leading-tight">{item.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed">{item.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="eyebrow mb-5">{p.positions.eyebrow}</p>
            <h2 className="display-text text-4xl md:text-5xl text-brand-ink text-balance">
              {p.positions.title}
            </h2>
          </div>

          <div className="border-2 border-dashed border-brand-green/20 rounded-2xl p-12 lg:p-16 text-center max-w-3xl mx-auto bg-white">
            <p className="text-brand-ink/60 text-lg">{p.positions.empty}</p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-x">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="eyebrow mb-5">{p.apply.eyebrow}</p>
              <h2 className="display-text text-4xl md:text-5xl text-brand-ink text-balance">
                {p.apply.title}
              </h2>
            </div>

            <form className="space-y-5 bg-brand-cream rounded-3xl p-8 lg:p-12">
              <div>
                <label className="block text-sm font-semibold text-brand-ink mb-2">{p.apply.fields.name}</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-brand-ink/10 bg-white focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all" />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-brand-ink mb-2">{p.apply.fields.email}</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-brand-ink/10 bg-white focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-ink mb-2">{p.apply.fields.phone}</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-brand-ink/10 bg-white focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-ink mb-2">{p.apply.fields.cover}</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-brand-ink/10 bg-white focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all resize-none" />
              </div>
              <button type="button" className="btn-primary w-full justify-center !py-4">
                {p.apply.button}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
