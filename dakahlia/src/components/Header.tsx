import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import Logo from './Logo'
import LangSwitcher from './LangSwitcher'

export default function Header() {
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/companies', label: t.nav.companies },
    { to: '/value-chain', label: t.nav.valueChain },
    { to: '/sustainability', label: t.nav.sustainability },
    { to: '/news', label: t.nav.news },
    { to: '/careers', label: t.nav.careers },
  ]

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-brand-green/10 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between h-20 lg:h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Dakahlia Group">
          <Logo variant="horizontal" className="h-12 lg:h-14 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm font-semibold tracking-wide transition-colors ${
                  isActive
                    ? 'text-brand-green'
                    : 'text-brand-ink/80 hover:text-brand-green'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right side: contact CTA + lang */}
        <div className="hidden lg:flex items-center gap-5">
          <LangSwitcher />
          <Link
            to="/contact"
            className="bg-brand-green text-white px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-brand-green-dark transition-colors"
          >
            {t.nav.cta}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden p-2 text-brand-ink"
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-b border-brand-green/10`}
      >
        <nav className="container-x flex flex-col py-6 gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `py-3 text-base font-semibold border-b border-brand-ink/5 ${
                  isActive ? 'text-brand-green' : 'text-brand-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="mt-5 btn-primary justify-center"
          >
            {t.nav.cta}
          </Link>
          <div className="mt-5 flex justify-center">
            <LangSwitcher />
          </div>
        </nav>
      </div>
    </header>
  )
}
