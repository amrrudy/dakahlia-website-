import { useI18n } from '../lib/i18n'
import PageHero from '../components/PageHero'

export default function News() {
  const { t } = useI18n()
  const p = t.pages.news

  return (
    <>
      <PageHero title={p.hero.title} subtitle={p.hero.subtitle} />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-x">
          <div className="border-2 border-dashed border-brand-green/20 rounded-2xl p-16 lg:p-24 text-center max-w-3xl mx-auto">
            <div className="inline-block mb-6">
              <svg viewBox="0 0 80 80" className="w-20 h-20 text-brand-green/40 mx-auto" fill="none">
                <rect x="10" y="16" width="60" height="48" rx="4" stroke="currentColor" strokeWidth="2" />
                <path d="M18 28 L62 28 M18 38 L52 38 M18 48 L46 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" opacity="0.5" />
              </svg>
            </div>
            <p className="text-brand-ink/60 text-xl">{p.empty}</p>
          </div>
        </div>
      </section>
    </>
  )
}
