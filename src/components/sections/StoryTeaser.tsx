import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '../../lib/i18n'
import Reveal from '../Reveal'

export default function StoryTeaser() {
  const { t, dir } = useI18n()

  return (
    <section className="relative bg-brand-cream overflow-hidden">

      {/* Mobile: stacked layout */}
      <div className="block lg:hidden">
        {/* Image top */}
        <div className="relative w-full h-44 sm:h-56 overflow-hidden">
          <img loading="lazy" decoding="async"
            src="/images/temry-chicken-pieces.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-cream to-transparent" />
        </div>
        {/* Content below */}
        <div className="px-6 pt-8 pb-12">
          <Reveal direction="up">
            <p className="text-[11px] uppercase tracking-[0.28em] font-bold text-brand-green mb-4">
              {t.storyTeaser.eyebrow}
            </p>
            <h2 className={`display-text text-brand-ink text-5xl mb-6 ${dir === 'rtl' ? 'leading-[1.45] whitespace-pre-line' : 'leading-[0.88]'}`}>
              {dir === 'rtl' ? (
                t.storyTeaser.title
              ) : (
                t.storyTeaser.title.split('. ').map((part, i, arr) => (
                  <span key={i} className="block">{part}{i < arr.length - 1 ? '.' : ''}</span>
                ))
              )}
            </h2>
          </Reveal>
          <Reveal direction="up" delay={80}>
            <p className="text-base text-brand-ink/65 leading-relaxed mb-8">
              {t.storyTeaser.body}
            </p>
            <Link
              to="/about"
              className="btn-primary"
            >
              {t.storyTeaser.cta}
              <ArrowRight size={14} className={dir === 'rtl' ? 'rotate-180' : ''} />
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Desktop: side-by-side layout */}
      <div className="hidden lg:flex min-h-[680px] items-stretch">
        {/* Left — image bleeding from edge */}
        <div className="relative w-[28%] flex-shrink-0">
          <img loading="lazy" decoding="async"
            src="/images/temry-chicken-pieces.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className={`absolute inset-y-0 end-0 w-32 ${dir === 'rtl' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-transparent to-brand-cream`} />
        </div>
        {/* Right — content */}
        <div className="relative flex-1 flex flex-col justify-center py-20 ps-12 pe-16">
          <Reveal direction="left">
            <p className="text-[11px] uppercase tracking-[0.28em] font-bold text-brand-green mb-4">
              {t.storyTeaser.eyebrow}
            </p>
            <h2
              className={`display-text text-brand-ink tracking-tight mb-8 ${dir === 'rtl' ? 'leading-[1.45] whitespace-pre-line' : 'leading-[0.85]'}`}
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
            >
              {dir === 'rtl' ? (
                t.storyTeaser.title
              ) : (
                t.storyTeaser.title.split('. ').map((part, i, arr) => (
                  <span key={i} className="block">{part}{i < arr.length - 1 ? '.' : ''}</span>
                ))
              )}
            </h2>
          </Reveal>
          <Reveal direction="left" delay={80}>
            <p className="text-lg text-brand-ink/65 leading-relaxed max-w-md text-pretty mb-8">
              {t.storyTeaser.body}
            </p>
            <Link
              to="/about"
              className="btn-primary"
            >
              {t.storyTeaser.cta}
              <ArrowRight size={14} className={dir === 'rtl' ? 'rotate-180' : ''} />
            </Link>
          </Reveal>
        </div>
      </div>

    </section>
  )
}
