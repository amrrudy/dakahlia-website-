import { useI18n } from '../../lib/i18n'
import { useScrollProgress } from '../../lib/useReveal'
import Reveal from '../Reveal'

export default function VisionStatement() {
  const { t } = useI18n()
  const { ref, progress } = useScrollProgress<HTMLDivElement>()

  return (
    <section ref={ref} className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Parallax background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/citrus-orchard.jpg"
          alt=""
          className="w-full h-[120%] object-cover"
          style={{ transform: `translateY(${progress * -8}%)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-brand-ink/30 to-brand-ink/20" />
      </div>

      {/* Organic floating accents */}
      <svg className="absolute -bottom-24 -end-24 w-[34rem] h-[34rem] opacity-10 animate-slow-spin" viewBox="0 0 200 200" aria-hidden="true">
        <circle cx="100" cy="100" r="80" fill="none" stroke="#e2e01b" strokeWidth="1" />
        <circle cx="100" cy="100" r="58" fill="none" stroke="#e2e01b" strokeWidth="1" />
        <circle cx="100" cy="100" r="36" fill="none" stroke="#e2e01b" strokeWidth="1" />
      </svg>

      <div className="container-x relative py-28 lg:py-36 text-white">
        <div className="max-w-5xl">
          <Reveal as="p" className="eyebrow !text-brand-yellow mb-8">{t.vision.eyebrow}</Reveal>
          <Reveal as="blockquote" delay={100}
            className="display-text text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-balance leading-[0.95]">
            {t.vision.headline}
          </Reveal>
          <Reveal as="p" delay={220}
            className="mt-10 text-xl text-white/80 max-w-2xl leading-relaxed text-pretty">
            {t.vision.body}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
