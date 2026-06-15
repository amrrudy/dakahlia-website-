import { useI18n } from '../../lib/i18n'

export default function TwoPillars() {
  const { t } = useI18n()

  return (
    <section className="py-24 lg:py-32 bg-brand-ink text-white relative overflow-hidden">
      {/* Decorative leaves */}
      <svg className="absolute top-10 right-10 w-40 h-40 opacity-10" viewBox="0 0 100 100">
        <path d="M50 5 C 30 25, 30 50, 50 95 C 70 50, 70 25, 50 5 Z" fill="#62bc54" />
      </svg>

      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Integration */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 lg:p-12 border border-white/10 hover:border-brand-green-light/50 transition-colors">
            <div className="w-14 h-14 rounded-full bg-brand-green-light/20 flex items-center justify-center mb-8">
              <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-brand-green-light">
                <path d="M4 12 L9 12 M15 12 L20 12 M12 4 L12 9 M12 15 L12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="font-display text-3xl lg:text-4xl mb-5 leading-tight">{t.pillars.integration.title}</h3>
            <p className="text-white/75 leading-relaxed text-pretty">
              {t.pillars.integration.body}
            </p>
          </div>

          {/* Sustainability */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 lg:p-12 border border-white/10 hover:border-brand-yellow/50 transition-colors">
            <div className="w-14 h-14 rounded-full bg-brand-yellow/20 flex items-center justify-center mb-8">
              <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-brand-yellow">
                <path d="M12 2 L12 22 M12 8 C 8 8, 6 12, 8 16 M12 8 C 16 8, 18 12, 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-display text-3xl lg:text-4xl mb-5 leading-tight">{t.pillars.sustainability.title}</h3>
            <p className="text-white/75 leading-relaxed text-pretty">
              {t.pillars.sustainability.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
