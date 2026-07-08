import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '../../lib/i18n'
import Reveal from '../Reveal'

export default function StoryTeaser() {
  const { t, dir } = useI18n()

  return (
    <section className="relative overflow-hidden">

      {/* Mobile: stacked layout */}
      <div className="block lg:hidden">
        {/* Video top */}
        <div className="relative w-full h-44 sm:h-56 overflow-hidden bg-brand-ink">
          <video
            src="/videos/story-teaser.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-cream to-transparent" />
        </div>
        {/* Content below */}
        <div className="px-6 pt-8 pb-12">
          <Reveal direction="up">
            <p className="eyebrow mb-5">
              {t.storyTeaser.eyebrow}
            </p>
            <h2 className={`display-text text-brand-ink text-[2rem] sm:text-[2.375rem] mb-6 ${dir === 'rtl' ? 'leading-[1.45] whitespace-pre-line' : 'leading-tight'}`}>
              {t.storyTeaser.title}
            </h2>
          </Reveal>
          <Reveal direction="up" delay={80}>
            <p className="text-[1.125rem] text-brand-ink/65 leading-relaxed mb-8">
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
      <div className="hidden lg:flex min-h-[560px] xl:min-h-[680px] items-stretch">
        {/* Left — video bleeding from edge */}
        <div className="relative w-[32%] xl:w-[28%] flex-shrink-0 bg-brand-ink">
          <video
            src="/videos/story-teaser.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className={`absolute inset-y-0 end-0 w-32 ${dir === 'rtl' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-transparent to-brand-cream`} />
        </div>
        {/* Right — content */}
        <div className="relative flex-1 flex flex-col justify-center py-14 ps-8 pe-10 xl:py-20 xl:ps-12 xl:pe-16">
          <Reveal direction="left">
            <p className="eyebrow mb-5">
              {t.storyTeaser.eyebrow}
            </p>
            <h2
              className={`display-text text-brand-ink tracking-tight mb-8 ${dir === 'rtl' ? 'leading-[1.45] whitespace-pre-line' : 'leading-tight'}`}
              style={{ fontSize: 'clamp(2.125rem, 3.4vw, 3.65rem)' }}
            >
              {t.storyTeaser.title}
            </h2>
          </Reveal>
          <Reveal direction="left" delay={80}>
            <p className="text-[1.25rem] text-brand-ink/65 leading-relaxed text-pretty mb-8">
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
