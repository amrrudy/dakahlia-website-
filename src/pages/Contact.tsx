import { MapPin, Phone, Mail, Navigation, Clock, Headphones } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import PageHero from '../components/PageHero'

export default function Contact() {
  const { t } = useI18n()
  const p = t.pages.contact

  return (
    <>
      <PageHero title={p.hero.title} subtitle={p.hero.subtitle} />

      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
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
                    { Icon: Headphones, label: p.info.hotlineLabel, value: p.info.hotlineValue, isLink: true,  href: `tel:${p.info.hotlineValue}` },
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
              <h2 className="display-text text-3xl md:text-4xl text-brand-ink mb-8">{p.form.title}</h2>
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

      {/* ── Map section — premium glass-framed location card ─────────────── */}
      <section className="relative py-20 lg:py-28 bg-brand-cream overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -end-24 w-[28rem] h-[28rem] rounded-full bg-brand-green/15 blur-3xl animate-blob-float" />
          <div className="absolute -bottom-32 -start-24 w-[28rem] h-[28rem] rounded-full bg-brand-yellow/15 blur-3xl animate-blob-float" style={{ animationDelay: '6s' }} />
        </div>

        <div className="container-x relative">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-5">{p.map.eyebrow}</p>
            <h2 className="display-text text-3xl md:text-4xl lg:text-5xl text-brand-ink text-balance mb-5">
              {p.map.title}
            </h2>
            <p className="text-lg text-brand-ink/65 leading-relaxed text-pretty">
              {p.map.body}
            </p>
          </div>

          {/* Map card — glass frame */}
          <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden
            bg-white/45 backdrop-blur-2xl backdrop-saturate-200
            border border-white/70
            shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_30px_70px_-20px_rgba(13,31,23,0.2)]">
            {/* Map iframe with custom styled overlay */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-3xl">
              <iframe
                title="Dakahlia Group Head Office"
                src="https://maps.google.com/maps?q=15%20Ramo%20Buildings%2C%20Nasr%20Road%2C%20Nasr%20City%2C%20Cairo%2C%20Egypt&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale-[0.4] contrast-[0.95] brightness-[1.02] border-0"
              />
              {/* Soft tint overlay — brand-green wash for theme cohesion */}
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-green/[0.06] via-transparent to-brand-yellow/[0.08]" />
              {/* Inner ring */}
              <div aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/30 rounded-3xl" />

              {/* Floating address pill — bottom-left */}
              <div className="absolute bottom-5 start-5 max-w-xs flex items-center gap-3 px-4 py-3 rounded-2xl
                bg-white/70 backdrop-blur-2xl backdrop-saturate-200
                border border-white/70
                shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_12px_30px_-10px_rgba(13,31,23,0.25)]">
                <div className="btn-glass-icon w-10 h-10 flex-shrink-0 text-brand-green !bg-brand-green/15 !border-brand-green/30">
                  <MapPin size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-brand-green font-bold mb-0.5">{p.info.officeLabel}</div>
                  <div className="text-brand-ink text-sm leading-snug truncate">{p.info.officeValue}</div>
                </div>
              </div>

              {/* Floating "Get Directions" pill — top-right */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=15%20Ramo%20Buildings%2C%20Nasr%20Road%2C%20Nasr%20City%2C%20Cairo%2C%20Egypt"
                target="_blank"
                rel="noopener noreferrer"
                className="group absolute top-5 end-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-full
                  bg-brand-green/85 backdrop-blur-xl backdrop-saturate-200
                  border border-white/30
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_12px_30px_-10px_rgba(4,121,62,0.55)]
                  text-white text-[11px] font-bold uppercase tracking-[0.22em]
                  transition-all duration-300
                  hover:bg-brand-green hover:scale-105
                  hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_15px_40px_-10px_rgba(4,121,62,0.7)]"
              >
                <Navigation size={13} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
                {p.map.directions}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
