import { useI18n } from '../lib/i18n'

export default function LangSwitcher({ inverse = false }: { inverse?: boolean }) {
  const { locale, setLocale } = useI18n()
  const base = inverse
    ? 'text-white/80 hover:text-white'
    : 'text-brand-ink/60 hover:text-brand-green'
  const active = inverse ? 'text-white font-bold' : 'text-brand-green font-bold'

  return (
    <div className="btn-glass-pill gap-1 px-3 py-1.5 text-xs font-semibold tracking-wider">
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`transition-colors ${locale === 'en' ? active : base}`}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
      <span className={inverse ? 'text-white/30' : 'text-brand-ink/20'}>/</span>
      <button
        type="button"
        onClick={() => setLocale('ar')}
        className={`transition-colors font-ar ${locale === 'ar' ? active : base}`}
        aria-pressed={locale === 'ar'}
      >
        عربي
      </button>
    </div>
  )
}
