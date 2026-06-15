const words = ['Poultry', 'Agriculture', 'Sustainability', 'Processing', 'Chemicals', 'Community', 'Export']

export default function TextStrip() {
  return (
    <div className="bg-brand-ink border-y border-white/8 py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(2)].map((_, rep) => (
          <span key={rep} className="flex items-center gap-0">
            {words.map((word) => (
              <span key={word} className="inline-flex items-center gap-8 px-8">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/20">{word}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow/30" />
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}
