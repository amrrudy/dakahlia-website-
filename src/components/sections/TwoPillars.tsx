import { useI18n } from '../../lib/i18n'
import Reveal from '../Reveal'
import Blob from '../Blob'

export default function TwoPillars() {
  const { t } = useI18n()

  const pillars = [
    {
      title: t.pillars.integration.title,
      body: t.pillars.integration.body,
      accent: 'var(--brand-green-light)',
      icon: (
        <path d="M4 12 L9 12 M15 12 L20 12 M12 4 L12 9 M12 15 L12 20 M12 12 m-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      ),
    },
    {
      title: t.pillars.sustainability.title,
      body: t.pillars.sustainability.body,
      accent: 'var(--brand-yellow)',
      icon: (
        <path d="M12 2 L12 22 M12 8 C 8 8, 6 12, 8 16 M12 8 C 16 8, 18 12, 16 16"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      ),
    },
  ]

  return (
    <section className="relative py-28 lg:py-40 bg-brand-ink text-white overflow-hidden">
      {/* Organic floating shapes */}
      <Blob variant={2} float color="var(--brand-green)" opacity={0.18}
        className="absolute -top-40 -start-40 w-[44rem] h-[44rem]" />
      <Blob variant={4} float color="var(--brand-green-light)" opacity={0.1}
        className="absolute -bottom-48 -end-40 w-[40rem] h-[40rem]" />

      {/* Slow rotating ring accent */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.04] animate-slow-spin"
        viewBox="0 0 200 200" aria-hidden="true">
        <circle cx="100" cy="100" r="90" fill="none" stroke="#e2e01b" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="65" fill="none" stroke="#e2e01b" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="#e2e01b" strokeWidth="0.5" />
      </svg>

      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28">
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              direction={i === 0 ? 'right' : 'left'}
              delay={i * 120}
              className="relative"
            >
              {/* Floating icon orb */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-8 animate-soft-bob"
                style={{ background: `color-mix(in srgb, ${p.accent} 18%, transparent)`, animationDelay: `${i * 1.5}s` }}
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8" style={{ color: p.accent }}>
                  {p.icon}
                </svg>
              </div>

              <h3 className="display-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
                {p.title}
              </h3>
              <p className="text-lg text-white/65 leading-relaxed text-pretty max-w-md">
                {p.body}
              </p>

              {/* Organic underline accent */}
              <div className="mt-8 h-1 w-24 rounded-full" style={{ background: p.accent, opacity: 0.5 }} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
