import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '../../lib/i18n'

const images = [
  'https://images.unsplash.com/photo-1569288063648-5d77e51ed8fc?auto=format&fit=crop&w=900&q=80', // poultry
  'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80', // agriculture / field
  'https://images.unsplash.com/photo-1604908554027-3c45ed52f2bd?auto=format&fit=crop&w=900&q=80', // food processing
  'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80', // chemicals/lab — actually let me use a different one
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80', // social/community
]

const companyImages = [
  'https://images.unsplash.com/photo-1569288063648-5d77e51ed8fc?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
]

export default function CompaniesGrid() {
  const { t, dir } = useI18n()

  return (
    <section className="py-24 lg:py-32 bg-brand-cream relative leaf-bg">
      <div className="container-x">
        {/* Section header */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-20 items-end mb-16 lg:mb-24">
          <div>
            <p className="eyebrow mb-5">{t.whoWeAre.eyebrow}</p>
            <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-brand-ink text-balance">
              {t.whoWeAre.title}
            </h2>
          </div>
          <div>
            <p className="text-lg text-brand-ink/70 leading-relaxed max-w-xl text-pretty">
              {t.whoWeAre.intro}
            </p>
            <Link
              to="/companies"
              className={`btn-ghost mt-6 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
            >
              {t.nav.companies} <ArrowRight size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
            </Link>
          </div>
        </div>

        {/* Companies grid: 5 cards, asymmetric — first card spans 2 cols on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {t.whoWeAre.companies.map((c, i) => {
            const isLarge = i === 0
            return (
              <article
                key={c.number}
                className={`group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 ${
                  isLarge ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${isLarge ? 'h-[440px] lg:h-[640px]' : 'h-[260px]'}`}>
                  <img
                    src={companyImages[i]}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/85 via-brand-ink/30 to-transparent" />

                  {/* Number label */}
                  <div className="absolute top-6 start-6">
                    <span className="font-display text-3xl text-brand-yellow font-light">{c.number}</span>
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-6 lg:p-8 text-white">
                    <h3 className={`font-display ${isLarge ? 'text-4xl lg:text-5xl' : 'text-2xl'} leading-tight`}>
                      {c.name}
                    </h3>
                    <p className={`mt-3 text-white/85 leading-relaxed ${isLarge ? 'text-base max-w-md' : 'text-sm'}`}>
                      {c.desc}
                    </p>
                    {c.meta && (
                      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-yellow/90 text-brand-ink text-xs font-bold tracking-wide">
                        {c.meta}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
