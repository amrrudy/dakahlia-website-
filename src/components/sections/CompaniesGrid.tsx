import { Link } from 'react-router-dom'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { useI18n } from '../../lib/i18n'
import Reveal from '../Reveal'
import Blob from '../Blob'

const companyImages = [
  '/images/poultry-chicks.jpg',
  '/images/agriculture-citrus.jpg',
  '/images/slaughterhouse-processing.jpg',
  '/images/Shams.jpg',
  '/images/foundation-sewing.jpg',
]

const companyWebsites: (string | null)[] = [
  'http://dakahliapoultry.com/',
  null,
  'https://temryshop.com/',
  'https://shamschemicals.com/',
  null,
]

const masks = ['organic-mask-1', 'organic-mask-2', 'organic-mask-3']

export default function CompaniesGrid() {
  const { t, dir } = useI18n()

  return (
    <section className="relative py-28 lg:py-40 bg-brand-cream overflow-hidden">
      {/* Floating organic background shapes */}
      <Blob variant={1} float color="var(--brand-green-light)" opacity={0.08}
        className="absolute -top-32 -end-40 w-[36rem] h-[36rem]" />
      <Blob variant={3} float color="var(--brand-yellow)" opacity={0.06}
        className="absolute top-1/2 -start-48 w-[40rem] h-[40rem]" />

      <div className="container-x relative">
        {/* Section header — asymmetric, no box */}
        <div className="max-w-4xl mb-24 lg:mb-32">
          <Reveal as="p" className="eyebrow mb-6">{t.whoWeAre.eyebrow}</Reveal>
          <Reveal as="h2" delay={80}
            className="display-text text-[2.75rem] md:text-6xl lg:text-7xl text-brand-ink">
            {t.whoWeAre.title.split('. ').map((part, i, arr) => (
              <span key={i} className="block">{part}{i < arr.length - 1 ? '.' : ''}</span>
            ))}
          </Reveal>
          <Reveal as="p" delay={160}
            className="mt-8 text-lg lg:text-xl text-brand-ink/60 leading-relaxed max-w-2xl text-pretty">
            {t.whoWeAre.intro}
          </Reveal>
        </div>

        {/* Alternating organic rows — no card grid */}
        <div className="space-y-28 lg:space-y-40">
          {t.whoWeAre.companies.map((c, i) => {
            const reversed = i % 2 === 1
            const isLogo = companyImages[i].includes('logo')
            return (
              <div
                key={c.number}
                className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
              >
                {/* Image side — organic mask, floating */}
                <Reveal
                  direction={reversed ? 'left' : 'right'}
                  className={`relative ${reversed ? 'lg:order-2' : ''}`}
                >
                  <div className="relative group">
                    {/* soft shadow blob behind image */}
                    <div
                      className={`absolute -inset-6 ${masks[i % 3]} bg-brand-green/10 blur-2xl group-hover:bg-brand-green/20 transition-colors duration-700`}
                    />
                    <div
                      className={`relative ${masks[i % 3]} overflow-hidden aspect-[4/3] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]`}
                    >
                      {isLogo ? (
                        <div className="w-full h-full bg-brand-ink flex items-center justify-center p-14">
                          <img loading="lazy" decoding="async" src={companyImages[i]} alt={c.name}
                            className="max-w-[65%] max-h-[60%] object-contain" />
                        </div>
                      ) : (
                        <img loading="lazy" decoding="async" src={companyImages[i]} alt={c.name}
                          className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
                      )}
                    </div>
                    {/* floating number badge */}
                    <div className="absolute -top-5 -start-3 lg:-start-6 animate-soft-bob">
                      <span className="font-display text-6xl lg:text-7xl text-brand-green/15">{c.number}</span>
                    </div>
                  </div>
                </Reveal>

                {/* Text side */}
                <Reveal
                  direction={reversed ? 'right' : 'left'}
                  delay={120}
                  className={reversed ? 'lg:order-1' : ''}
                >
                  <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-brand-green-light mb-4">
                    {String(c.number).padStart(2, '0')}
                  </span>
                  <h3 className="display-text text-3xl md:text-4xl lg:text-5xl text-brand-ink mb-5 text-balance">
                    {c.name}
                  </h3>
                  <p className="text-lg text-brand-ink/65 leading-relaxed text-pretty max-w-lg">
                    {c.desc}
                  </p>
                  <div className="flex flex-col items-start gap-4 mt-6">
                    {c.meta && (
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green">
                        <span className="w-8 h-px bg-brand-green/40" />
                        {c.meta}
                      </span>
                    )}
                    {companyWebsites[i] && (
                      <a
                        href={companyWebsites[i]!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-brand-green font-bold text-xs uppercase tracking-widest
                          bg-white/30 backdrop-blur-xl backdrop-saturate-200
                          border border-brand-green/40
                          shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_4px_16px_-4px_rgba(4,121,62,0.2)]
                          transition-all duration-300
                          hover:bg-brand-green/15 hover:border-brand-green/70 hover:scale-[1.02]
                          active:scale-100"
                      >
                        {t.nav.visitWebsite}
                        <ExternalLink size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </Reveal>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <Reveal className="mt-28 text-center">
          <Link
            to="/companies"
            className="group inline-flex items-center gap-3 text-brand-ink hover:text-brand-green transition-colors"
          >
            <span className="display-text text-2xl lg:text-3xl">{t.nav.companies}</span>
            <span className="w-12 h-12 rounded-full flex items-center justify-center text-brand-green
              bg-brand-green/15 backdrop-blur-xl backdrop-saturate-200
              border border-brand-green/40
              shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_16px_-4px_rgba(4,121,62,0.25)]
              transition-all duration-300
              group-hover:bg-brand-green/30 group-hover:border-brand-green/60 group-hover:scale-110">
              <ArrowUpRight size={20} className={dir === 'rtl' ? 'rotate-[270deg]' : ''} />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
