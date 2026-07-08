import LoadingBar from './LoadingBar'

function Bone({ className = '' }: { className?: string }) {
  return <div className={`skeleton-shimmer rounded-lg ${className}`} />
}

export default function PageSkeleton() {
  return (
    <>
      <LoadingBar />

      {/* Hero block — dark, matches real page heroes */}
      <div className="relative min-h-[420px] sm:min-h-[540px] bg-brand-ink overflow-hidden">
        {/* Subtle shimmer layer over dark bg */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-brand-ink/30 to-transparent" />
        <div className="absolute bottom-12 sm:bottom-16 left-6 sm:left-16 space-y-4">
          <Bone className="h-8 sm:h-14 w-[260px] sm:w-[480px] bg-white/10" />
          <Bone className="h-4 w-[180px] sm:w-[300px] bg-white/8" />
          <div className="flex gap-3 pt-3">
            <Bone className="h-10 sm:h-12 w-36 sm:w-44 rounded-full bg-white/10" />
          </div>
        </div>
        {/* Dot indicators placeholder */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {[0,1,2,3,4].map(i => (
            <span
              key={i}
              className={`block rounded-full bg-white/20 transition-none ${i === 0 ? 'w-6 h-2' : 'w-2 h-2'}`}
            />
          ))}
        </div>
      </div>

      {/* Content section skeleton */}
      <div className="bg-brand-cream py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-14 space-y-10">
          {/* Section label */}
          <Bone className="h-3 w-20 bg-brand-ink/8" />
          {/* Heading */}
          <Bone className="h-8 sm:h-10 w-2/3 bg-brand-ink/10" />
          {/* Body lines */}
          <div className="space-y-3">
            <Bone className="h-4 w-full bg-brand-ink/7" />
            <Bone className="h-4 w-[92%] bg-brand-ink/7" />
            <Bone className="h-4 w-4/5 bg-brand-ink/7" />
          </div>
          {/* Cards row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {[0,1,2].map(i => (
              <Bone key={i} className="h-40 sm:h-52 bg-brand-ink/6" />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
