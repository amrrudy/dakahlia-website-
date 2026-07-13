import { useI18n } from '../../lib/i18n'

export default function VisionStatement() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/90 via-brand-green-dark/85 to-brand-ink/95" />
      </div>

      {/* Decorative shape */}
      <svg className="absolute -bottom-20 -right-20 w-[500px] h-[500px] opacity-10" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="none" stroke="#e2e01b" strokeWidth="1" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#e2e01b" strokeWidth="1" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="#e2e01b" strokeWidth="1" />
      </svg>

      <div className="container-x relative py-24 lg:py-32 text-white">
        <div className="max-w-5xl">
          <p className="eyebrow !text-brand-yellow mb-8">{t.vision.eyebrow}</p>
          <blockquote className="display-text text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-balance leading-[0.95]">
            {t.vision.headline}
          </blockquote>
          <p className="mt-10 text-xl text-white/80 max-w-2xl leading-relaxed text-pretty">
            {t.vision.body}
          </p>
        </div>
      </div>
    </section>
  )
}
