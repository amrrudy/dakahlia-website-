import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '../../lib/i18n'

export default function NewsTeaser() {
  const { t, dir } = useI18n()

  return (
    <section className="py-24 lg:py-32 bg-brand-cream relative">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-brand-ink">
            {t.newsTeaser.title}
          </h2>
          <Link to="/news" className="btn-ghost">
            {t.newsTeaser.cta} <ArrowRight size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
          </Link>
        </div>

        <div className="border-2 border-dashed border-brand-green/20 rounded-2xl p-16 text-center">
          <div className="inline-block mb-6">
            <svg viewBox="0 0 60 60" className="w-16 h-16 text-brand-green/50" fill="none">
              <rect x="8" y="12" width="44" height="36" rx="3" stroke="currentColor" strokeWidth="2" />
              <path d="M14 22 L46 22 M14 30 L40 30 M14 38 L36 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-brand-ink/60 text-lg">{t.newsTeaser.empty}</p>
        </div>
      </div>
    </section>
  )
}
