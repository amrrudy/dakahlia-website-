import { useI18n } from '../lib/i18n'
import PageHero from '../components/PageHero'
import Magnifier from '../components/Magnifier'

export default function Terms() {
  const { t } = useI18n()
  const p = t.pages.terms

  return (
    <Magnifier>
      <PageHero title={p.hero.title} subtitle={p.hero.subtitle} />

      <section className="relative py-16 lg:py-24 bg-brand-cream overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -start-24 w-[26rem] h-[26rem] rounded-full bg-brand-green/12 blur-3xl animate-blob-float" />
          <div className="absolute top-1/2 -end-32 w-[28rem] h-[28rem] rounded-full bg-brand-yellow/12 blur-3xl animate-blob-float" style={{ animationDelay: '5s' }} />
          <div className="absolute -bottom-32 start-1/3 w-[24rem] h-[24rem] rounded-full bg-brand-green-light/12 blur-3xl animate-blob-float" style={{ animationDelay: '9s' }} />
        </div>

        <div className="container-x relative max-w-4xl">
          {/* Glass body card */}
          <article className="relative rounded-3xl p-8 md:p-10 lg:p-14
            bg-white/45 backdrop-blur-2xl backdrop-saturate-200
            border border-white/70
            shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_30px_60px_-20px_rgba(13,31,23,0.15)]">

            {/* Last updated stamp */}
            <div className="flex items-center gap-3 mb-10 pb-6 border-b border-brand-ink/10">
              <span className="h-px w-10 bg-brand-green" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-green font-bold">
                {p.lastUpdated}
              </span>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {p.sections.map((s) => (
                <div key={s.title}>
                  <h2 className="font-display text-xl md:text-2xl text-brand-ink leading-tight mb-4">
                    {s.title}
                  </h2>
                  <div className="space-y-4 text-brand-ink/75 leading-[1.75] text-pretty">
                    {s.body.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </Magnifier>
  )
}
