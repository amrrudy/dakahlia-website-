import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, ArrowRight } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import PageHero from '../components/PageHero'

export default function FAQ() {
  const { t, dir } = useI18n()
  const p = t.pages.faq

  // Track which item is open via "groupIdx-itemIdx" string; null = all closed
  const [openKey, setOpenKey] = useState<string | null>('0-0')

  const toggle = (key: string) =>
    setOpenKey((current) => (current === key ? null : key))

  return (
    <>
      <PageHero title={p.hero.title} subtitle={p.hero.subtitle} />

      <section className="relative py-16 lg:py-24 bg-brand-cream overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -start-24 w-[26rem] h-[26rem] rounded-full bg-brand-green/12 blur-3xl animate-blob-float" />
          <div className="absolute top-1/2 -end-32 w-[28rem] h-[28rem] rounded-full bg-brand-yellow/12 blur-3xl animate-blob-float" style={{ animationDelay: '5s' }} />
          <div className="absolute -bottom-32 start-1/3 w-[24rem] h-[24rem] rounded-full bg-brand-green-light/12 blur-3xl animate-blob-float" style={{ animationDelay: '9s' }} />
        </div>

        <div className="container-x relative max-w-4xl">
          {p.groups.map((group, gi) => (
            <div key={group.eyebrow} className={gi > 0 ? 'mt-14 lg:mt-20' : ''}>
              {/* Group eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-brand-green" />
                <span className="text-[10px] uppercase tracking-[0.32em] text-brand-green font-bold">
                  {group.eyebrow}
                </span>
              </div>

              {/* Accordion items */}
              <div className="space-y-3">
                {group.items.map((item, ii) => {
                  const key = `${gi}-${ii}`
                  const isOpen = openKey === key
                  return (
                    <div
                      key={key}
                      className={`relative rounded-2xl overflow-hidden
                        bg-white/45 backdrop-blur-2xl backdrop-saturate-200
                        border border-white/70
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_15px_40px_-15px_rgba(13,31,23,0.15)]
                        transition-all duration-500
                        ${isOpen ? 'border-brand-green/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_25px_55px_-15px_rgba(4,121,62,0.25)]' : ''}`}
                    >
                      <button
                        type="button"
                        onClick={() => toggle(key)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-start"
                      >
                        <span className="font-display text-lg lg:text-xl text-brand-ink leading-snug">
                          {item.question}
                        </span>
                        <span
                          className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300
                            ${isOpen
                              ? 'bg-brand-green/25 backdrop-blur-xl backdrop-saturate-200 border border-brand-green/40 text-brand-green rotate-45 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_12px_-4px_rgba(4,121,62,0.3)]'
                              : 'bg-brand-green/10 border border-brand-green/20 text-brand-green'}`}
                        >
                          <Plus size={16} strokeWidth={2.5} />
                        </span>
                      </button>

                      {/* Answer panel — height + opacity reveal */}
                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                          ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 lg:px-6 pb-5 lg:pb-6 -mt-1">
                            <div className="pt-4 border-t border-brand-ink/10 text-brand-ink/75 leading-[1.7] text-pretty">
                              {item.answer}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          {/* Final CTA card — glassy */}
          <div className="mt-16 lg:mt-20 relative rounded-3xl p-8 lg:p-10 overflow-hidden text-center
            bg-white/40 backdrop-blur-2xl backdrop-saturate-200
            border border-white/70
            shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_30px_60px_-20px_rgba(13,31,23,0.15)]">
            {/* Subtle brand-green sheen overlay for identity */}
            <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-green/[0.06] via-transparent to-brand-yellow/[0.06]" />

            <div className="relative">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-brand-ink mb-3">{p.ctaTitle}</h2>
              <p className="text-brand-ink/70 mb-6 max-w-md mx-auto">{p.ctaBody}</p>
              <Link
                to="/contact"
                className="btn-outline !px-5 !py-2 !text-[11px] !tracking-[0.22em]"
              >
                {p.ctaButton}
                <ArrowRight size={12} className={dir === 'rtl' ? 'rotate-180' : ''} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
