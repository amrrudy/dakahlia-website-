import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '../../lib/i18n'

const portraits = [
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
]

export default function CareersTeaser() {
  const { t, dir } = useI18n()

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative leaf in bg */}
      <svg className="absolute top-20 -left-10 w-72 h-72 opacity-[0.04]" viewBox="0 0 100 100">
        <path d="M50 5 C 25 25, 25 60, 50 95 C 75 60, 75 25, 50 5 Z" fill="#04793e" />
      </svg>

      <div className="container-x relative">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-center">
          {/* Content side */}
          <div>
            <p className="eyebrow mb-6">{t.careersTeaser.eyebrow}</p>
            <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-brand-ink text-balance">
              {t.careersTeaser.title}
            </h2>
            <p className="mt-8 text-lg text-brand-ink/70 leading-relaxed text-pretty">
              {t.careersTeaser.body}
            </p>
            <Link to="/careers" className="btn-primary mt-10">
              {t.careersTeaser.cta} <ArrowRight size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
            </Link>
          </div>

          {/* Employee photo grid: 3 portraits with a torn-magazine feel */}
          <div className="grid grid-cols-3 gap-4 lg:gap-6">
            {t.careersTeaser.employees.map((emp, i) => (
              <div
                key={emp.name}
                className={`relative group ${
                  i === 1 ? 'translate-y-8' : i === 2 ? 'translate-y-0' : ''
                }`}
              >
                <div className="img-card aspect-[3/4] rounded-2xl">
                  <img src={portraits[i]} alt={emp.name} />
                </div>
                <div className="absolute -bottom-2 inset-x-0 px-3">
                  <div className="bg-white shadow-md rounded-lg px-3 py-2 text-center">
                    <div className="font-bold text-sm text-brand-ink">{emp.name}</div>
                    <div className="text-xs text-brand-ink/60 mt-0.5">{emp.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
