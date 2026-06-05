import AboutSchoolSection from './components/AboutSchoolSection'
import BilingualSection from './components/BilingualSection'
import DifferentialsCarouselSection from './components/DifferentialsCarouselSection'
import HeroCarousel from './components/HeroCarousel'
import TeachingSegmentsSection from './components/TeachingSegmentsSection'

function HomePage() {
  return (
    <>
      <HeroCarousel />
      <BilingualSection />
      <TeachingSegmentsSection />
      <AboutSchoolSection />
      <DifferentialsCarouselSection />
    </>
  )
}

export default HomePage
