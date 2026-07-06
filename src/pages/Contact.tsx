import { MapPin, Phone, Mail, Navigation, Clock } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import LazySection from '../components/LazySection'

export default function Contact() {
  const { t, locale } = useI18n()
  const p = t.pages.contact

  return (
    <>
      {/* Hero — full-bleed Google Maps background */}
      <section className="relative overflow-hidden min-h-[460px] lg:min-h-[540px] flex items-end">
        <div className="absolute inset-0">
          <iframe
            title="Dakahlia Group Location"
            src="https://maps.google.com/maps?q=15%20Ramo%20Buildings%2C%20Nasr%20Road%2C%20Nasr%20City%2C%20Cairo%2C%20Egypt&z=16&output=embed"
            className="w-full h-full border-0 grayscale-[0.3] contrast-[0.95]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          {/* Dark gradient overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/55 to-brand-ink/15 pointer-events-none" />
        </div>

        <div className="container-x relative z-10 pt-44 pb-14">
          <h1 className="display-text text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white text-balance max-w-3xl">{p.hero.title}</h1>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg max-w-2xl leading-relaxed text-white/75 text-pretty">
            {p.hero.subtitle}
          </p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=15%20Ramo%20Buildings%2C%20Nasr%20Road%2C%20Nasr%20City%2C%20Cairo%2C%20Egypt"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 mt-7 text-brand-yellow text-sm font-semibold hover:gap-3 transition-all"
          >
            <MapPin size={15} />
            {locale === 'ar' ? 'احصل على الاتجاهات' : 'Get Directions'}
            <Navigation size={13} strokeWidth={2.25} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>

      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -start-24 w-[26rem] h-[26rem] rounded-full bg-brand-green/15 blur-3xl animate-blob-float" />
          <div className="absolute top-1/2 -end-32 w-[30rem] h-[30rem] rounded-full bg-brand-yellow/15 blur-3xl animate-blob-float" style={{ animationDelay: '5s' }} />
          <div className="absolute -bottom-32 start-1/3 w-[24rem] h-[24rem] rounded-full bg-brand-green-light/15 blur-3xl animate-blob-float" style={{ animationDelay: '9s' }} />
        </div>

        <div className="container-x relative">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16">
            {/* Info side — white glass card with nested glass tiles */}
            <div>
              <div className="relative rounded-3xl p-6 lg:p-7 overflow-hidden
                bg-white/50 backdrop-blur-2xl backdrop-saturate-200
                border border-white/70
                shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_30px_60px_-20px_rgba(13,31,23,0.15)]">
                {/* Soft decorative shape */}
                <svg aria-hidden className="absolute -bottom-20 -end-20 w-72 h-72 opacity-20" viewBox="0 0 100 100">
                  <path d="M50 5 C25 25, 25 60, 50 95 C75 60, 75 25, 50 5 Z" fill="#04793e" />
                </svg>

                <div className="relative flex flex-col gap-3">
                  {[
                    { Icon: MapPin, label: p.info.officeLabel, value: p.info.officeValue, isLink: false, href: '' },
                    { Icon: Mail,   label: p.info.emailLabel,  value: `${p.info.emailValue}\n${p.info.email2Value}`, isLink: true,  href: `mailto:${p.info.emailValue}` },
                    { Icon: Phone,      label: p.info.phoneLabel,   value: p.info.phoneValue,   isLink: true,  href: `tel:${p.info.phoneValue.split('/')[0].trim()}` },
                    { Icon: Clock,      label: p.info.hoursLabel,   value: p.info.hoursValue,   isLink: false, href: '' },
                  ].map(({ Icon, label, value, isLink, href }) => {
                    const Wrapper: 'div' | 'a' = isLink ? 'a' : 'div'
                    return (
                      <Wrapper
                        key={label}
                        {...(isLink ? { href } : {})}
                        className="group flex items-center gap-4 p-4 rounded-2xl
                          bg-white/40 backdrop-blur-xl backdrop-saturate-200
                          border border-white/60
                          shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]
                          transition-all duration-300
                          hover:bg-white/60 hover:border-brand-green/40 hover:-translate-y-0.5
                          hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_12px_30px_-10px_rgba(4,121,62,0.25)]"
                      >
                        <div className="btn-glass-icon w-12 h-12 flex-shrink-0 text-brand-green !bg-brand-green/15 !border-brand-green/30 group-hover:!bg-brand-green group-hover:!text-white group-hover:!border-brand-green/60">
                          <Icon size={20} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-[10px] uppercase tracking-[0.18em] text-brand-green font-bold mb-0.5">{label}</div>
                          <div className="text-brand-ink leading-snug break-words text-[15px] whitespace-pre-line">{value}</div>
                        </div>
                      </Wrapper>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Form side — glass card */}
            <div>
              <p className="eyebrow mb-4">{p.form.eyebrow}</p>
              <h2 className="display-text text-2xl sm:text-3xl md:text-4xl text-brand-ink mb-8">{p.form.title}</h2>
              <form className="relative space-y-5 rounded-3xl p-8 lg:p-10
                bg-white/45 backdrop-blur-2xl backdrop-saturate-200
                border border-white/70
                shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_30px_60px_-20px_rgba(13,31,23,0.15)]">
                <div>
                  <label className="label-glass text-sm font-semibold text-brand-ink mb-2">{p.form.fields.name}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/55 backdrop-blur-xl backdrop-saturate-200 border-2 border-brand-ink/8 text-brand-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] focus:outline-none focus:bg-white/75 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all" />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="label-glass text-sm font-semibold text-brand-ink mb-2">{p.form.fields.email}</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/55 backdrop-blur-xl backdrop-saturate-200 border-2 border-brand-ink/8 text-brand-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] focus:outline-none focus:bg-white/75 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all" />
                  </div>
                  <div>
                    <label className="label-glass text-sm font-semibold text-brand-ink mb-2">{p.form.fields.phone}</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl bg-white/55 backdrop-blur-xl backdrop-saturate-200 border-2 border-brand-ink/8 text-brand-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] focus:outline-none focus:bg-white/75 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="label-glass text-sm font-semibold text-brand-ink mb-2">{p.form.fields.subject}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/55 backdrop-blur-xl backdrop-saturate-200 border-2 border-brand-ink/8 text-brand-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] focus:outline-none focus:bg-white/75 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all" />
                </div>
                <div>
                  <label className="label-glass text-sm font-semibold text-brand-ink mb-2">{p.form.fields.message}</label>
                  <textarea rows={6} className="w-full px-4 py-3 rounded-xl bg-white/55 backdrop-blur-xl backdrop-saturate-200 border-2 border-brand-ink/8 text-brand-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] focus:outline-none focus:bg-white/75 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all resize-none" />
                </div>
                <button type="button" className="btn-primary !py-4">{p.form.button}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Global Reach — stylized world map with Egypt focal marker ──── */}
      <LazySection>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Soft atmospheric glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[55%] rounded-full bg-brand-green/8 blur-3xl" />
        </div>

        <div className="container-x relative">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="eyebrow mb-5">{p.global.eyebrow}</p>
            <h2 className="display-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brand-ink text-balance mb-5">
              {p.global.title}
            </h2>
            <p className="text-base sm:text-lg text-brand-ink/65 leading-relaxed text-pretty">
              {p.global.body}
            </p>
          </div>

          {/* Stylized world map — gray continents with Egypt focal marker */}
          <div className="relative max-w-5xl mx-auto">
            {/* Curved spherical perspective wrapper */}
            <div
              className="relative aspect-[16/9] flex items-center justify-center"
              style={{ perspective: '1400px' }}
            >
              <div
                className="relative w-full h-full"
                style={{ transform: 'rotateX(12deg)', transformStyle: 'preserve-3d' }}
              >
                {/* Map image — public-domain world SVG, tinted gray */}
                <img
                  src="/images/world-map.svg"
                  alt="World map"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-contain"
                  style={{ filter: 'grayscale(1) brightness(1.05) opacity(0.85)' }}
                />

                {/* Egypt focal pulse marker — positioned over Egypt on the world map */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute z-10"
                  style={{ left: '54.5%', top: '38%' }}
                >
                  {/* Outer halo */}
                  <span className="absolute rounded-full bg-brand-green/25 blur-xl" style={{ width: '120px', height: '120px', left: '-60px', top: '-60px' }} />
                  {/* Animated ping ring */}
                  <span className="absolute rounded-full bg-brand-green/40 animate-ping" style={{ width: '32px', height: '32px', left: '-16px', top: '-16px' }} />
                  {/* Core dot */}
                  <span className="relative block rounded-full bg-brand-green ring-2 ring-white shadow-[0_0_24px_rgba(4,121,62,0.7)]" style={{ width: '14px', height: '14px', marginLeft: '-7px', marginTop: '-7px' }} />
                </div>

                {/* Egypt marker label */}
                <div
                  className="absolute z-10"
                  style={{ left: '54.5%', top: '38%' }}
                >
                  <div
                    className="absolute inline-flex items-center gap-2 px-3 py-1.5 rounded-full whitespace-nowrap
                      bg-white/55 backdrop-blur-2xl backdrop-saturate-200
                      border border-white/60
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_10px_24px_-8px_rgba(4,121,62,0.35)]"
                    style={{ left: '18px', top: '-28px' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                    <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-brand-ink">{p.global.marker}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft drop shadow under the map (the "globe shadow" from the inspiration) */}
            <div
              aria-hidden
              className="pointer-events-none mx-auto -mt-6 h-6 rounded-[50%] bg-brand-ink/15 blur-2xl"
              style={{ width: '70%' }}
            />
          </div>
        </div>
      </section>
      </LazySection>
    </>
  )
}
