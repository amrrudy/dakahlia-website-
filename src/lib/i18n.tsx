import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { content, Locale, Dict } from './content'

interface I18nContextValue {
  locale: Locale
  setLocale: (l: Locale) => void
  t: Dict
  dir: 'ltr' | 'rtl'
}

const I18nContext = createContext<I18nContextValue | null>(null)

const STORAGE_KEY = 'dakahlia.locale'

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null
  if (saved === 'en' || saved === 'ar') return saved
  // Default to Arabic if browser language is Arabic
  if (navigator.language?.toLowerCase().startsWith('ar')) return 'ar'
  return 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const dir: 'ltr' | 'rtl' = locale === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = dir
    window.localStorage.setItem(STORAGE_KEY, locale)
  }, [locale, dir])

  const setLocale = (l: Locale) => setLocaleState(l)

  const value: I18nContextValue = {
    locale,
    setLocale,
    t: content[locale],
    dir,
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider')
  return ctx
}
