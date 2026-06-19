import { useEffect, useRef, useState } from 'react'
import { Workflow, TrendingUp, Package, TreePine } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import PageHero from '../components/PageHero'

const arabicDigits = '٠١٢٣٤٥٦٧٨٩'
const latinDigits  = '0123456789'

function isArabicNumeric(s: string) {
  return /[٠-٩]/.test(s)
}

function arabicToLatin(s: string) {
  return s.replace(/[٠-٩]/g, (c) => String(arabicDigits.indexOf(c)))
}

function toArabicDigits(n: number) {
  return String(n).split('').map((c) => {
    const i = latinDigits.indexOf(c)
    return i >= 0 ? arabicDigits[i] : c
  }).join('')
}

/** Parse a stat value like "100%", "3,000+", "٪١٠٠", "+٣٠٠٠" into target + prefix + suffix. */
function parseStat(value: string) {
  const arabic = isArabicNumeric(value)
  const normalized = arabic ? arabicToLatin(value) : value
  const m = normalized.match(/^(\D*?)([\d,]+)(.*)$/)
  if (!m) return { target: 0, prefix: '', suffix: value, arabic }
  const target = parseInt(m[2].replace(/,/g, ''), 10)
  return { target, prefix: m[1], suffix: m[3], arabic }
}

/** Format an animated number using the parsed original. */
function formatStat(n: number, parsed: ReturnType<typeof parseStat>) {
  const num = parsed.target >= 1000 ? n.toLocaleString('en-US') : String(n)
  return parsed.prefix + (parsed.arabic ? toArabicDigits(n) : num) + parsed.suffix
}

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) {
      setValue(0)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(target * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, active, duration])
  return value
}

const statIcons = [Workflow, TrendingUp, Package, TreePine]

export default function ValueChain() {
  const { t } = useI18n()
  const p = t.pages.valueChain

  // Trigger animation on every scroll-into-view (and reset on out-of-view)
  const strengthRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const node = strengthRef.current
    if (!node) return
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <PageHero title={p.hero.title} subtitle={p.hero.subtitle} />

      {/* Approach */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -start-24 w-[26rem] h-[26rem] rounded-full bg-brand-green/15 blur-3xl animate-blob-float" />
          <div className="absolute bottom-0 -end-32 w-[28rem] h-[28rem] rounded-full bg-brand-yellow/15 blur-3xl animate-blob-float" style={{ animationDelay: '5s' }} />
        </div>
        <div className="container-x relative">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
            <div>
              <p className="eyebrow mb-5">{p.approach.eyebrow}</p>
              <h2 className="display-text text-3xl sm:text-4xl md:text-5xl text-brand-ink text-balance">{p.approach.title}</h2>
            </div>
            <div className="lg:pt-16">
              <p className="text-lg text-brand-ink/70 leading-relaxed text-pretty">{p.approach.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Farm to Table — poultry farm hero image */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/flock-chickens.svg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-green/85" />
        </div>
        <div className="container-x relative text-white">
          <div className="max-w-3xl">
            <p className="eyebrow !text-brand-yellow mb-5">{p.farmToTable.eyebrow}</p>
            <h2 className="display-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-balance">{p.farmToTable.title}</h2>
            <p className="mt-8 text-lg text-white/85 leading-relaxed max-w-2xl text-pretty">{p.farmToTable.body}</p>
            <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full text-sm font-bold tracking-wide text-brand-yellow bg-brand-yellow/[0.08] backdrop-blur-xl backdrop-saturate-200 border border-brand-yellow/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
              ✓ {p.farmToTable.badge}
            </div>
          </div>
        </div>
      </section>

      {/* 6 Stages — glass cards (Careers culture-card pattern) */}
      <section className="relative py-20 lg:py-28 bg-brand-cream overflow-hidden leaf-bg">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 start-1/3 w-[28rem] h-[28rem] rounded-full bg-brand-green/15 blur-3xl animate-blob-float" />
          <div className="absolute -bottom-24 -end-24 w-[26rem] h-[26rem] rounded-full bg-brand-yellow/15 blur-3xl animate-blob-float" style={{ animationDelay: '6s' }} />
        </div>
        <div className="container-x relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow mb-5">{p.model.eyebrow}</p>
            <h2 className="display-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-ink text-balance">{p.model.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.model.stages.map((s) => (
              <div
                key={s.num}
                className="group relative rounded-2xl p-8 lg:p-10 overflow-hidden
                  bg-white/45 backdrop-blur-2xl backdrop-saturate-200
                  border border-white/70
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_20px_50px_-20px_rgba(13,31,23,0.15)]
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-brand-green/40
                  hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_30px_70px_-20px_rgba(4,121,62,0.35)]"
              >
                <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-green/0 to-brand-green/0 group-hover:from-brand-green/10 group-hover:to-brand-green/0 transition-colors duration-500" />
                {/* Watermark numeral */}
                <div className="absolute -top-4 -end-2 font-display text-8xl text-brand-green/[0.08] leading-none select-none pointer-events-none group-hover:text-brand-green/15 transition-colors">
                  {s.num}
                </div>
                <div className="relative">
                  <div className="font-display text-3xl text-brand-green leading-none mb-4 group-hover:text-brand-green-dark transition-colors">{s.num}</div>
                  <h3 className="font-display text-2xl text-brand-ink mb-3 leading-tight">{s.title}</h3>
                  <p className="text-brand-ink/70 leading-relaxed text-sm">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strength stats — dark glass cards with count-up animation */}
      <section ref={strengthRef} className="relative py-20 lg:py-28 bg-brand-ink text-white overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(4,121,62,0.28),transparent_55%),radial-gradient(circle_at_85%_75%,rgba(226,224,27,0.14),transparent_55%)]" />
          <div className="absolute -top-32 -end-24 w-[30rem] h-[30rem] rounded-full bg-brand-green/22 blur-3xl animate-blob-float" />
          <div className="absolute -bottom-32 -start-24 w-[28rem] h-[28rem] rounded-full bg-brand-green-light/14 blur-3xl animate-blob-float" style={{ animationDelay: '6s' }} />
        </div>

        <div className="container-x relative">
          {/* Header row */}
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 mb-14 lg:mb-16">
            <div>
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-brand-yellow" />
                <span className="text-[11px] uppercase tracking-[0.32em] text-brand-yellow font-bold">{p.strength.eyebrow}</span>
              </div>
              <h2 className="display-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-balance">{p.strength.title}</h2>
            </div>
            <div className="lg:pt-6">
              <p className="text-lg text-white/75 leading-relaxed text-pretty">{p.strength.body}</p>
            </div>
          </div>

          {/* Records grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {p.strength.stats.map((stat, i) => {
              const Icon = statIcons[i] || Workflow
              return (
                <StatRecord
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  index={i}
                  Icon={Icon}
                  active={inView}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

interface StatRecordProps {
  value: string
  label: string
  index: number
  Icon: typeof Workflow
  active: boolean
}

function StatRecord({ value, label, index, Icon, active }: StatRecordProps) {
  const parsed = parseStat(value)
  const animated = useCountUp(parsed.target, active, 1500 + index * 100)
  const display = formatStat(animated, parsed)

  // Progress for the top accent bar — 100% when active, 0% when not
  return (
    <div
      className="group relative rounded-2xl p-7 lg:p-8 overflow-hidden
        bg-white/[0.06] backdrop-blur-2xl backdrop-saturate-200
        border border-white/15
        shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_20px_50px_-20px_rgba(0,0,0,0.4)]
        transition-all duration-500
        hover:-translate-y-1
        hover:border-brand-yellow/40
        hover:bg-white/[0.09]
        hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_30px_60px_-20px_rgba(226,224,27,0.28)]"
    >
      {/* Top accent line — fills as the section comes into view */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[2px] bg-brand-yellow origin-start"
        style={{
          transform: `scaleX(${active ? 1 : 0})`,
          transition: `transform 1500ms cubic-bezier(0.22,1,0.36,1) ${index * 100}ms`,
        }}
      />
      {/* Watermark icon — large, subtle, in corner */}
      <Icon
        size={120}
        strokeWidth={1}
        className="absolute -bottom-6 -end-6 text-white/[0.04] pointer-events-none"
      />

      {/* Icon chip */}
      <div className="btn-glass-icon w-11 h-11 mb-5 text-brand-yellow !bg-brand-yellow/12 !border-brand-yellow/30">
        <Icon size={18} strokeWidth={1.75} />
      </div>

      {/* Animated value */}
      <div className="font-display text-5xl lg:text-6xl text-brand-yellow leading-none tabular-nums">
        {display}
      </div>

      {/* Label */}
      <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-white/70 font-semibold">
        {label}
      </div>
    </div>
  )
}
