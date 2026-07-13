interface PageHeroProps {
  eyebrow?: string
  title: string
  subtitle: string
  imageUrl?: string
}

export default function PageHero({ eyebrow, title, subtitle, imageUrl }: PageHeroProps) {
  return (
    <section className="relative pt-44 pb-24 lg:pt-52 lg:pb-32 overflow-hidden leaf-bg">
      {/* Decorative blob */}
      <div className="absolute -top-20 -right-32 w-[600px] h-[600px] rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full bg-brand-yellow/8 blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-4xl">
          {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
          <h1 className="display-text text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-balance text-brand-ink">
            {title}
          </h1>
          <p className="mt-8 text-lg md:text-xl text-brand-ink/70 max-w-2xl leading-relaxed text-pretty">
            {subtitle}
          </p>
        </div>

        {imageUrl && (
          <div className="mt-16 rounded-2xl overflow-hidden">
            <img src={imageUrl} alt="" className="w-full h-[400px] object-cover" />
          </div>
        )}
      </div>
    </section>
  )
}
