import { useState, useRef, useMemo } from 'react'
import { Users, Shield, Heart, Upload, FileText, X, CheckCircle2, RotateCcw } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import TypedHeading from '../components/TypedHeading'
import LazySection from '../components/LazySection'

const cultureIcons = [Users, Shield, Heart]

/** Six unique random ints between 1 and 9, shuffled for display order */
function generateCaptchaCards() {
  const pool = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return pool.slice(0, 6)
}

export default function Careers() {
  const { t } = useI18n()
  const p = t.pages.careers

  // --- Form state ---
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [cover, setCover] = useState('')
  const [cvFile, setCvFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Card-ordering captcha
  const [captchaSeed, setCaptchaSeed] = useState(0)
  const cards = useMemo(() => {
    void captchaSeed
    return generateCaptchaCards()
  }, [captchaSeed])
  const sortedCards = useMemo(() => [...cards].sort((a, b) => a - b), [cards])
  const [clickedOrder, setClickedOrder] = useState<number[]>([])
  const [captchaError, setCaptchaError] = useState(false)

  const captchaVerified =
    clickedOrder.length === cards.length &&
    clickedOrder.every((v, i) => v === sortedCards[i])

  // Submit is enabled only when every required field is filled AND captcha passed
  const isFormValid =
    name.trim().length > 0 &&
    email.trim().length > 0 &&
    phone.trim().length > 0 &&
    cvFile !== null &&
    captchaVerified

  // Honeypot — bots will fill this; real users don't see it
  const [honeypot, setHoneypot] = useState('')

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 5 * 1024 * 1024) return // hard cap 5MB
    setCvFile(file)
  }

  const clearCv = () => {
    setCvFile(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleCardClick = (value: number) => {
    if (captchaVerified) return
    if (clickedOrder.includes(value)) return
    const next = [...clickedOrder, value]
    const expected = sortedCards[next.length - 1]
    if (value !== expected) {
      // Wrong card — flag error and reset selection
      setCaptchaError(true)
      setClickedOrder([])
      return
    }
    setCaptchaError(false)
    setClickedOrder(next)
  }

  const resetCaptcha = () => {
    setClickedOrder([])
    setCaptchaError(false)
    setCaptchaSeed((s) => s + 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (honeypot) return // bot trap
    if (!isFormValid) return
    // Real submission would go here (POST to backend).
    setCaptchaError(false)
    alert('Application submitted!')
    setName('')
    setEmail('')
    setPhone('')
    setCover('')
    clearCv()
    resetCaptcha()
  }

  return (
    <>
      {/* Custom Careers Hero — full-bleed background image */}
      <section className="relative overflow-hidden min-h-[460px] lg:min-h-[540px] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/images/careers.png"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 65%' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/55 to-brand-ink/15 pointer-events-none" />

        <div className="container-x relative z-10 pt-44 pb-14">
          <TypedHeading
            text={p.hero.title}
            className="display-text text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white text-balance max-w-3xl"
          />
          <p className="mt-6 text-lg max-w-2xl leading-relaxed text-white/75 text-pretty">
            {p.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -start-24 w-[26rem] h-[26rem] rounded-full bg-brand-green/15 blur-3xl animate-blob-float" />
          <div className="absolute bottom-0 -end-32 w-[28rem] h-[28rem] rounded-full bg-brand-yellow/15 blur-3xl animate-blob-float" style={{ animationDelay: '5s' }} />
        </div>

        <div className="container-x relative">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 mb-16">
            <div>
              <p className="eyebrow mb-5">{p.culture.eyebrow}</p>
              <h2 className="display-text text-4xl md:text-5xl text-brand-ink text-balance">
                {p.culture.title}
              </h2>
            </div>
            <div className="lg:pt-10">
              <p className="text-lg text-brand-ink/70 leading-relaxed text-pretty">
                {p.culture.intro}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {p.culture.items.map((item, i) => {
              const Icon = cultureIcons[i]
              return (
                <div
                  key={item.title}
                  className="group relative rounded-2xl p-10 overflow-hidden
                    bg-white/45 backdrop-blur-2xl backdrop-saturate-200
                    border border-white/70
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_20px_50px_-20px_rgba(13,31,23,0.15)]
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-brand-green/40
                    hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_30px_70px_-20px_rgba(4,121,62,0.35)]"
                >
                  {/* Subtle green sheen on hover */}
                  <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-green/0 to-brand-green/0 group-hover:from-brand-green/10 group-hover:to-brand-green/0 transition-colors duration-500" />

                  <div className="relative">
                    <div className="btn-glass-icon w-14 h-14 mb-6 text-brand-green !bg-brand-green/15 !border-brand-green/30 group-hover:!bg-brand-green group-hover:!text-white group-hover:!border-brand-green/60">
                      <Icon size={26} strokeWidth={1.8} />
                    </div>
                    <h3 className="font-display text-2xl mb-3 leading-tight text-brand-ink">{item.title}</h3>
                    <p className="text-sm text-brand-ink/70 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <LazySection>
      <section className="relative py-20 lg:py-28 bg-brand-cream overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 start-1/4 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-brand-green-light/15 blur-3xl animate-blob-float" />
        </div>

        <div className="container-x relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="eyebrow mb-5">{p.positions.eyebrow}</p>
            <h2 className="display-text text-4xl md:text-5xl text-brand-ink text-balance">
              {p.positions.title}
            </h2>
          </div>

          <div className="relative rounded-2xl p-12 lg:p-16 text-center max-w-3xl mx-auto
            bg-white/40 backdrop-blur-2xl backdrop-saturate-200
            border-2 border-dashed border-brand-green/30
            shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_20px_50px_-20px_rgba(13,31,23,0.12)]">
            <p className="text-brand-ink/60 text-lg">{p.positions.empty}</p>
          </div>
        </div>
      </section>
      </LazySection>

      {/* Application Form */}
      <LazySection minHeight={1000}>
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 end-1/4 w-[26rem] h-[26rem] rounded-full bg-brand-green/15 blur-3xl animate-blob-float" />
          <div className="absolute -bottom-32 -start-24 w-[28rem] h-[28rem] rounded-full bg-brand-yellow/15 blur-3xl animate-blob-float" style={{ animationDelay: '6s' }} />
        </div>

        <div className="container-x relative">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="eyebrow mb-5">{p.apply.eyebrow}</p>
              <h2 className="display-text text-4xl md:text-5xl text-brand-ink text-balance">
                {p.apply.title}
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="relative space-y-5 rounded-3xl p-8 lg:p-12
                bg-white/45 backdrop-blur-2xl backdrop-saturate-200
                border border-white/70
                shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_30px_60px_-20px_rgba(13,31,23,0.15)]"
            >
              <div>
                <label className="label-glass text-sm font-semibold text-brand-ink mb-2">{p.apply.fields.name}</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/55 backdrop-blur-xl backdrop-saturate-200 border-2 border-brand-ink/8 text-brand-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] focus:outline-none focus:bg-white/75 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="label-glass text-sm font-semibold text-brand-ink mb-2">{p.apply.fields.email}</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/55 backdrop-blur-xl backdrop-saturate-200 border-2 border-brand-ink/8 text-brand-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] focus:outline-none focus:bg-white/75 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
                  />
                </div>
                <div>
                  <label className="label-glass text-sm font-semibold text-brand-ink mb-2">{p.apply.fields.phone}</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/55 backdrop-blur-xl backdrop-saturate-200 border-2 border-brand-ink/8 text-brand-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] focus:outline-none focus:bg-white/75 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="label-glass text-sm font-semibold text-brand-ink mb-2">{p.apply.fields.cover}</label>
                <textarea
                  rows={5}
                  value={cover}
                  onChange={(e) => setCover(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/55 backdrop-blur-xl backdrop-saturate-200 border-2 border-brand-ink/8 text-brand-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] focus:outline-none focus:bg-white/75 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all resize-none"
                />
              </div>

              {/* ── CV upload ─────────────────────────────────────────── */}
              <div>
                <label className="label-glass text-sm font-semibold text-brand-ink mb-2">{p.apply.fields.cv}</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  required
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleFile}
                  className="sr-only"
                  id="cv-upload"
                />
                {!cvFile ? (
                  <label
                    htmlFor="cv-upload"
                    className="group flex flex-col items-center justify-center gap-2 cursor-pointer
                      px-6 py-8 rounded-xl bg-white/55 backdrop-blur-xl backdrop-saturate-200
                      border-2 border-dashed border-brand-ink/15 text-brand-ink/70
                      hover:bg-white/75 hover:border-brand-green/40 hover:text-brand-green
                      transition-all"
                  >
                    <Upload size={22} className="transition-transform group-hover:-translate-y-0.5" />
                    <span className="text-sm font-semibold">{p.apply.fields.cv}</span>
                    <span className="text-[11px] text-brand-ink/55">{p.apply.cvHint}</span>
                  </label>
                ) : (
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-brand-green/10 backdrop-blur-xl border-2 border-brand-green/30">
                    <FileText size={18} className="text-brand-green flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-brand-green flex-shrink-0" />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-green font-bold">{p.apply.cvUploaded}</span>
                      </div>
                      <div className="text-sm text-brand-ink truncate mt-0.5">{cvFile.name}</div>
                    </div>
                    <button
                      type="button"
                      onClick={clearCv}
                      aria-label="Remove file"
                      className="flex-shrink-0 w-7 h-7 rounded-full bg-white/60 hover:bg-white text-brand-ink/60 hover:text-brand-ink flex items-center justify-center transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
              </div>

              {/* ── Anti-bot: honeypot + math captcha ─────────────────── */}
              <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden>
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* ── Card-ordering captcha ─────────────────────────────── */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <label className="label-glass text-sm font-semibold text-brand-ink">
                    {p.apply.captchaLabel}
                  </label>
                  {captchaVerified ? (
                    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] font-bold text-brand-green">
                      <CheckCircle2 size={13} />
                      {p.apply.captchaSuccess}
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={resetCaptcha}
                      className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] font-bold text-brand-ink/55 hover:text-brand-green transition-colors"
                    >
                      <RotateCcw size={12} />
                      {p.apply.captchaReset}
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  {cards.map((value) => {
                    const ordinal = clickedOrder.indexOf(value)
                    const isClicked = ordinal >= 0
                    return (
                      <button
                        key={value}
                        type="button"
                        onClick={() => handleCardClick(value)}
                        disabled={captchaVerified}
                        className={`relative w-14 h-16 rounded-lg border flex items-center justify-center select-none
                          backdrop-blur-2xl backdrop-saturate-200
                          transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                          ${captchaVerified
                            ? 'bg-brand-green/20 border-brand-green/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_8px_18px_-8px_rgba(4,121,62,0.35)] cursor-default'
                            : isClicked
                              ? 'bg-brand-green/15 border-brand-green/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_6px_14px_-6px_rgba(4,121,62,0.3)] scale-95'
                              : captchaError
                                ? 'bg-red-500/10 border-red-500/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_6px_14px_-6px_rgba(239,68,68,0.3)] hover:bg-red-500/15 hover:-translate-y-1'
                                : 'bg-white/30 border-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_8px_18px_-8px_rgba(13,31,23,0.15)] hover:bg-white/55 hover:border-brand-green/45 hover:-translate-y-1 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_12px_24px_-8px_rgba(4,121,62,0.3)]'}
                        `}
                      >
                        <span className={`font-display text-2xl tabular-nums transition-colors
                          ${captchaVerified || isClicked ? 'text-brand-green' : 'text-brand-ink/85'}`}>
                          {value}
                        </span>
                        {isClicked && (
                          <span className="absolute -top-1.5 -end-1.5 w-4 h-4 rounded-full bg-brand-green text-white flex items-center justify-center text-[9px] font-bold leading-none">
                            {ordinal + 1}
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>

                {captchaError && !captchaVerified && (
                  <p className="mt-3 text-xs text-red-600 font-semibold">{p.apply.captchaError}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={!isFormValid}
                className="btn-primary w-full justify-center !py-4
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
              >
                {p.apply.button}
              </button>
            </form>
          </div>
        </div>
      </section>
      </LazySection>
    </>
  )
}
