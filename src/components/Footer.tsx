import { Link } from 'react-router-dom'
import { Facebook, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { useI18n } from '../lib/i18n'
const FAQ_LABEL: Record<string, string> = { en: 'FAQ', ar: 'الأسئلة الشائعة' }
import Logo from './Logo'

export default function Footer() {
  const { t, dir, locale } = useI18n()

  return (
    <div className="px-[10px] pt-12 lg:pt-16 pb-[10px]">
      <footer className="relative overflow-hidden rounded-3xl bg-brand-ink text-white shadow-[0_30px_60px_-30px_rgba(13,31,23,0.5)]">

        {/* Hiring CTA */}
        <div className="container-x pt-12 lg:pt-16 pb-8 lg:pb-10">
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-10 items-end border-b border-white/10 pb-8 lg:pb-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-brand-yellow font-bold mb-3">
                {t.footer.contactBlock}
              </p>
              <h3 className="display-text text-2xl md:text-3xl lg:text-4xl leading-[1.1] text-balance">
                {t.footer.hiringTitle}
                <br />
                <span className="text-brand-green-light">{t.footer.hiringBody}</span>
              </h3>
            </div>
            <Link
              to="/careers"
              className="group inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.28em] text-white hover:text-brand-yellow transition-colors whitespace-nowrap"
            >
              {t.footer.hiringCta}
              <span className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center transition-all duration-300 group-hover:border-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-ink">
                <ArrowRight size={12} className={dir === 'rtl' ? 'rotate-180' : ''} />
              </span>
            </Link>
          </div>

          {/* ── Columns ─────────────────────────────────────────────── */}
          <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 lg:gap-10 pt-8 lg:pt-10">

            {/* Brand block */}
            <div>
              <div className="mb-4 -ms-4">
                <Logo variant="horizontal" tone="light" className="block h-28 w-auto" />
              </div>
              <p className="text-white/65 text-xs leading-relaxed max-w-xs">
                {t.footer.tagline}
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-[9px] uppercase tracking-[0.32em] text-brand-yellow font-bold mb-4">
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-2 text-xs">
                <li><Link to="/"               className="text-white/65 hover:text-white transition-colors">{t.nav.home}</Link></li>
                <li><Link to="/about"          className="text-white/65 hover:text-white transition-colors">{t.nav.about}</Link></li>
                <li><Link to="/companies"      className="text-white/65 hover:text-white transition-colors">{t.nav.companies}</Link></li>
                <li><Link to="/sustainability" className="text-white/65 hover:text-white transition-colors">{t.nav.sustainability}</Link></li>
                <li><Link to="/news"           className="text-white/65 hover:text-white transition-colors">{t.nav.news}</Link></li>
                <li><Link to="/careers"        className="text-white/65 hover:text-white transition-colors">{t.nav.careers}</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[9px] uppercase tracking-[0.32em] text-brand-yellow font-bold mb-4">
                {t.pages.contact.info.officeLabel}
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li className="flex items-start gap-2.5 text-white/65">
                  <MapPin size={12} className="text-brand-yellow/80 flex-shrink-0 mt-0.5" />
                  <span>{t.pages.contact.info.officeValue}</span>
                </li>
                <li className="flex items-center gap-2.5 text-white/65">
                  <Phone size={12} className="text-brand-yellow/80 flex-shrink-0" />
                  <span>{t.pages.contact.info.phoneValue}</span>
                </li>
                <li className="flex items-center gap-2.5 text-white/65">
                  <Mail size={12} className="text-brand-yellow/80 flex-shrink-0" />
                  <a href={`mailto:${t.pages.contact.info.emailValue}`} className="hover:text-white transition-colors">
                    {t.pages.contact.info.emailValue}
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow */}
            <div>
              <h4 className="text-[9px] uppercase tracking-[0.32em] text-brand-yellow font-bold mb-4">
                Follow
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/DakahliaGroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-white/55 hover:text-brand-yellow transition-colors"
                >
                  <Facebook size={15} />
                </a>
                <a
                  href="https://www.linkedin.com/company/dakahlia-group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white/55 hover:text-brand-yellow transition-colors"
                >
                  <Linkedin size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal bar — minimal hairline */}
        <div className="border-t border-white/10">
          <div className="container-x py-3.5 flex flex-col md:flex-row items-center justify-between gap-2 text-[9px] uppercase tracking-[0.24em] text-white/40">
            <p>{t.footer.rights}</p>
            <div className="flex items-center gap-5">
              <Link to="/faq" className="hover:text-white transition-colors">{FAQ_LABEL[locale] ?? 'FAQ'}</Link>
              <Link to="/terms" className="hover:text-white transition-colors">{t.footer.terms}</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">{t.footer.privacy}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
