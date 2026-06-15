import { MapPin, Phone, Mail, Clock, Headphones } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import PageHero from '../components/PageHero'

export default function Contact() {
  const { t } = useI18n()
  const p = t.pages.contact

  return (
    <>
      <PageHero title={p.hero.title} subtitle={p.hero.subtitle} />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16">
            {/* Info side */}
            <div>
              <div className="bg-brand-green text-white rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                <svg className="absolute -bottom-16 -end-16 w-64 h-64 opacity-10" viewBox="0 0 100 100">
                  <path d="M50 5 C25 25, 25 60, 50 95 C75 60, 75 25, 50 5 Z" fill="white" />
                </svg>

                <div className="relative space-y-7">
                  <div className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-brand-yellow" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-brand-yellow font-bold mb-1">
                        {p.info.officeLabel}
                      </div>
                      <div className="text-white/95 leading-relaxed">{p.info.officeValue}</div>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                      <Headphones size={18} className="text-brand-yellow" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-brand-yellow font-bold mb-1">
                        {p.info.hotlineLabel}
                      </div>
                      <a href={`tel:${p.info.hotlineValue}`} className="text-white/95 text-2xl font-display hover:text-brand-yellow transition-colors">
                        {p.info.hotlineValue}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-brand-yellow" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-brand-yellow font-bold mb-1">
                        {p.info.phoneLabel}
                      </div>
                      <div className="text-white/95">{p.info.phoneValue}</div>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-brand-yellow" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-brand-yellow font-bold mb-1">
                        {p.info.emailLabel}
                      </div>
                      <a href={`mailto:${p.info.emailValue}`} className="text-white/95 hover:text-brand-yellow transition-colors break-all">
                        {p.info.emailValue}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-brand-yellow" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-brand-yellow font-bold mb-1">
                        {p.info.hoursLabel}
                      </div>
                      <div className="text-white/95">{p.info.hoursValue}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form side */}
            <div>
              <p className="eyebrow mb-4">{p.form.eyebrow}</p>
              <h2 className="display-text text-3xl md:text-4xl text-brand-ink mb-8">
                {p.form.title}
              </h2>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-brand-ink mb-2">{p.form.fields.name}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-brand-ink/10 bg-brand-cream focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all" />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-brand-ink mb-2">{p.form.fields.email}</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-brand-ink/10 bg-brand-cream focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-ink mb-2">{p.form.fields.phone}</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-brand-ink/10 bg-brand-cream focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-ink mb-2">{p.form.fields.subject}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-brand-ink/10 bg-brand-cream focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-ink mb-2">{p.form.fields.message}</label>
                  <textarea rows={6} className="w-full px-4 py-3 rounded-lg border border-brand-ink/10 bg-brand-cream focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all resize-none" />
                </div>
                <button type="button" className="btn-primary !py-4">
                  {p.form.button}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
