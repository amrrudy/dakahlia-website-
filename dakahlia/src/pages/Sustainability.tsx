import { Leaf, Recycle, Droplets, Heart, GraduationCap, Users, HandHeart } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import PageHero from '../components/PageHero'

const envIcons = [Leaf, Recycle, Droplets]
const foundationIcons = [Heart, GraduationCap, Users, HandHeart]

export default function Sustainability() {
  const { t } = useI18n()
  const p = t.pages.sustainability

  return (
    <>
      <PageHero title={p.hero.title} subtitle={p.hero.subtitle} />

      {/* Environmental */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 mb-16">
            <div>
              <p className="eyebrow mb-5">{p.environmental.eyebrow}</p>
              <h2 className="display-text text-4xl md:text-5xl text-brand-ink text-balance">
                {p.environmental.title}
              </h2>
            </div>
            <div className="lg:pt-10">
              <p className="text-lg text-brand-ink/70 leading-relaxed text-pretty">
                {p.environmental.body}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {p.environmental.items.map((item, i) => {
              const Icon = envIcons[i]
              return (
                <div
                  key={item.title}
                  className="group bg-brand-cream rounded-2xl p-8 lg:p-10 hover:bg-brand-green hover:text-white transition-all duration-500"
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

      {/* Commitment + Stats */}
      <section className="py-20 lg:py-28 bg-brand-green text-white relative overflow-hidden">
        <svg className="absolute -top-20 -right-20 w-[500px] h-[500px] opacity-10" viewBox="0 0 100 100">
          <path d="M50 5 C25 25, 25 60, 50 95 C75 60, 75 25, 50 5 Z" fill="white" />
        </svg>

        <div className="container-x relative">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
            <div>
              <p className="eyebrow !text-brand-yellow mb-5">{p.commitment.eyebrow}</p>
              <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-balance">
                {p.commitment.title}
              </h2>
              <p className="mt-8 text-lg text-white/85 leading-relaxed text-pretty">
                {p.commitment.body}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {p.commitment.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 hover:bg-white/15 transition-colors"
                >
                  <div className="font-display text-5xl text-brand-yellow leading-none">{stat.value}</div>
                  <div className="mt-3 text-sm text-white/80 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
            <div className="img-card rounded-2xl aspect-square">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80" alt="" />
            </div>
            <div>
              <p className="eyebrow mb-5">{p.community.eyebrow}</p>
              <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-brand-ink text-balance">
                {p.community.title}
              </h2>
              <p className="mt-8 text-lg text-brand-ink/70 leading-relaxed text-pretty">
                {p.community.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Al Anani Foundation */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow mb-5">{p.foundation.eyebrow}</p>
            <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-brand-ink text-balance">
              {p.foundation.title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {p.foundation.items.map((item, i) => {
              const Icon = foundationIcons[i]
              return (
                <div
                  key={item.title}
                  className="relative bg-brand-cream rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-yellow/20 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-brand-green" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-xl mb-3 leading-tight text-brand-ink">{item.title}</h3>
                  <p className="text-sm text-brand-ink/70 leading-relaxed">{item.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
