import Hero from '../components/sections/Hero'
import CompaniesGrid from '../components/sections/CompaniesGrid'
import TwoPillars from '../components/sections/TwoPillars'
import VisionStatement from '../components/sections/VisionStatement'
import StoryTeaser from '../components/sections/StoryTeaser'
import CareersTeaser from '../components/sections/CareersTeaser'
import NewsTeaser from '../components/sections/NewsTeaser'

export default function Home() {
  return (
    <>
      <Hero />
      <CompaniesGrid />
      <TwoPillars />
      <CareersTeaser />
      <VisionStatement />
      <StoryTeaser />
      <NewsTeaser />
    </>
  )
}
