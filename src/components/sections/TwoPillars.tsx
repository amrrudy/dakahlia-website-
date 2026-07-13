import { useI18n } from '../../lib/i18n'
import Reveal from '../Reveal'

export default function TwoPillars() {
  const { t, locale } = useI18n()

  const pillars = [
    {
      number: '01',
      title: t.pillars.integration.title,
      body: t.pillars.integration.body,
      accent: 'var(--brand-green-light)',
    },
    {
      number: '02',
      title: t.pillars.sustainability.title,
      body: t.pillars.sustainability.body,
      accent: 'var(--brand-yellow)',
    },
  ]

  return (
    <section className="relative py-20 lg:py-28 xl:py-40 bg-brand-ink text-white overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-48 -start-48 w-[56rem] h-[56rem] rounded-full bg-brand-green/7 blur-[140px]" />
        <div className="absolute -bottom-48 -end-32 w-[48rem] h-[48rem] rounded-full bg-brand-yellow/5 blur-[140px]" />
      </div>

      <div className="container-x relative">

        {/* Eyebrow + rule */}
        <Reveal className="mb-12 sm:mb-16 lg:mb-20">
          <p className="text-[10px] uppercase tracking-[0.38em] text-white/30 font-semibold mb-6">
            {locale === 'ar' ? 'منظوران، غاية واحدة' : 'Two perspectives, one purpose'}
          </p>
          <div className="h-px w-full bg-white/8" />
        </Reveal>

        {/* Pillars */}
        <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/8">
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              direction={i === 0 ? 'right' : 'left'}
              delay={i * 140}
              className={`py-10 sm:py-12 lg:py-0 ${i === 0 ? 'lg:pe-12 xl:pe-20' : 'lg:ps-12 xl:ps-20'}`}
            >
              {/* Number */}
              <span className="block font-mono text-xs tracking-[0.3em] text-white/20 mb-7 sm:mb-10 select-none">
                {p.number}
              </span>

              {/* Heading */}
              <h3 className="display-text text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.08] text-white mb-8 text-balance">
                {p.title}
              </h3>

              {/* Body */}
              <p className="text-base lg:text-lg text-white/50 leading-relaxed text-pretty max-w-lg">
                {p.body}
              </p>

              {/* Accent line */}
              <div
                className="mt-12 h-px w-14 rounded-full"
                style={{ background: p.accent, opacity: 0.55 }}
              />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
