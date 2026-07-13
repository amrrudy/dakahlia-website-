import { Link } from 'react-router-dom'
import { Facebook, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import Logo from './Logo'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-brand-ink text-white relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute -top-px inset-x-0 h-12 bg-brand-cream" style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 70%, 95% 100%, 50% 65%, 5% 100%, 0 70%)'
      }} />

      {/* Hiring CTA */}
      <div className="container-x pt-32 pb-20 relative">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end border-b border-white/15 pb-16">
          <div>
            <p className="eyebrow !text-brand-yellow mb-4">{t.footer.contactBlock}</p>
            <h3 className="display-text text-5xl md:text-6xl lg:text-7xl">
              {t.footer.hiringTitle}<br />
              <span className="text-brand-green-light">{t.footer.hiringBody}</span>
            </h3>
          </div>
          <Link
            to="/careers"
            className="inline-flex items-center gap-3 bg-brand-yellow text-brand-ink px-8 py-4 rounded-full font-bold tracking-wide uppercase text-sm hover:bg-white transition-colors whitespace-nowrap"
          >
            {t.footer.hiringCta} →
          </Link>
        </div>

        {/* Logo + columns */}
        <div className="grid lg:grid-cols-4 gap-12 pt-16">
          {/* Brand block */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-5 inline-block mb-6">
              <Logo variant="horizontal" className="h-20 w-auto" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-brand-yellow font-semibold mb-5">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-white/80 hover:text-brand-yellow transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-brand-yellow transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/companies" className="text-white/80 hover:text-brand-yellow transition-colors">{t.nav.companies}</Link></li>
              <li><Link to="/value-chain" className="text-white/80 hover:text-brand-yellow transition-colors">{t.nav.valueChain}</Link></li>
              <li><Link to="/sustainability" className="text-white/80 hover:text-brand-yellow transition-colors">{t.nav.sustainability}</Link></li>
              <li><Link to="/news" className="text-white/80 hover:text-brand-yellow transition-colors">{t.nav.news}</Link></li>
              <li><Link to="/careers" className="text-white/80 hover:text-brand-yellow transition-colors">{t.nav.careers}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-brand-yellow font-semibold mb-5">
              {t.pages.contact.info.officeLabel}
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-brand-green-light flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{t.pages.contact.info.officeValue}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-brand-green-light flex-shrink-0 mt-0.5" />
                <div className="text-white/80">
                  <div>{t.pages.contact.info.hotlineLabel}: <a href="tel:16459" className="hover:text-brand-yellow">{t.pages.contact.info.hotlineValue}</a></div>
                  <div className="text-xs mt-1">{t.pages.contact.info.phoneValue}</div>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-brand-green-light flex-shrink-0 mt-0.5" />
                <a href="mailto:info@dakahlia.com" className="text-white/80 hover:text-brand-yellow">
                  {t.pages.contact.info.emailValue}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-brand-yellow font-semibold mb-5">
              Follow
            </h4>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p className="tracking-wider">{t.footer.rights}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">{t.footer.terms}</a>
            <a href="#" className="hover:text-white">{t.footer.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
