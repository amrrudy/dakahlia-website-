import Hero from '../components/sections/Hero'
import TextStrip from '../components/sections/TextStrip'
import CompaniesGrid from '../components/sections/CompaniesGrid'
import LogoStrip from '../components/sections/LogoStrip'
import VisionStatement from '../components/sections/VisionStatement'
import StoryTeaser from '../components/sections/StoryTeaser'
import NewsTeaser from '../components/sections/NewsTeaser'
import CareersTeaser from '../components/sections/CareersTeaser'
import LazySection from '../components/LazySection'

export default function Home() {
  return (
    <>
      <Hero />
      <TextStrip />
      <LazySection><StoryTeaser /></LazySection>
      <LazySection><CompaniesGrid /></LazySection>
      <LazySection minHeight={200}><LogoStrip /></LazySection>
      <LazySection><VisionStatement /></LazySection>
      <LazySection><NewsTeaser /></LazySection>
      <LazySection><CareersTeaser /></LazySection>
    </>
  )
}
