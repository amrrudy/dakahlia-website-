const logos = [
  { src: '/images/Temry.png',          alt: 'Temry' },
  { src: '/images/Poultry.png',        alt: 'Dakahlia Poultry' },
  { src: '/images/Agriculture.png',    alt: 'Dakahlia Agriculture' },
  { src: '/images/Aqua.png',           alt: 'Dakahlia Aqua' },
  { src: '/images/Slaughterhouse.png', alt: 'Dakahlia Slaughterhouse' },
  { src: '/images/Red.png',            alt: 'Dakahlia Red' },
  { src: '/images/Market.png',         alt: 'Dakahlia Market' },
  { src: '/images/Foundation.png',     alt: 'Al Anani Foundation' },
  { src: '/images/Citrus.png',         alt: 'Citrus Rise' },
  { src: '/images/Desertgold.png',     alt: 'Desert Gold' },
  { src: '/images/Fayruze.png',        alt: 'Fayruze' },
  { src: '/images/Cleos.png',          alt: "Cleo's Garden" },
  { src: '/images/Harvest.png',        alt: 'Harvest Moon' },
  { src: '/images/Oasis.png',          alt: 'Oasis Spring' },
  { src: '/images/Sauce.png',          alt: "Sauce 'n Saucer" },
  { src: '/images/Saucetree.png',      alt: 'Sauce Tree' },
  { src: '/images/Pickletree.png',     alt: 'Pickle Tree' },
  { src: '/images/Shams.png',          alt: 'Shams' },
  { src: '/images/ALEEF-LOGO (1).png', alt: 'Aleef' },
]

// Duplicate for seamless loop
const items = [...logos, ...logos]

export default function LogoStrip() {
  return (
    <div className="relative overflow-hidden select-none py-4 lg:py-8">
      <div className="flex items-center gap-10 logo-strip-track">
        {items.map((logo, i) => (
          <div key={i} className="flex-shrink-0 flex items-center gap-10">
            <img loading="lazy" decoding="async"
              src={logo.src}
              alt={logo.alt}
              className="h-16 sm:h-24 lg:h-[12.3rem] w-auto object-contain"
            />
            <span className="w-1.5 h-1.5 rounded-full bg-brand-ink/15 flex-shrink-0" />
          </div>
        ))}
      </div>

      <style>{`
        .logo-strip-track {
          width: max-content;
          animation: logoScroll 40s linear infinite;
        }
        .logo-strip-track:hover {
          animation-play-state: paused;
        }
        @keyframes logoScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        html[dir='rtl'] .logo-strip-track {
          animation-name: logoScrollRtl;
        }
        @keyframes logoScrollRtl {
          from { transform: translateX(0); }
          to   { transform: translateX(50%); }
        }
      `}</style>
    </div>
  )
}
