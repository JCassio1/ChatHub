import Navbar from '../../components/layout/Navbar'
import TopBanner from '../../components/ui/TopBanner'
import BrandsSection from './components/BrandsSection'
import FeatureSection from './components/FeatureSection'
import HeroSection from './components/HeroSection'
import LowerSection from './components/LowerSection'
import MidSection from './components/MidSection'

const Homepage = () => {
  return (
    <>
      <section>
        <TopBanner bannerText="🎉 We're live - Show us some love on LinkedIn 🎊" />
        <HeroSection />
        <BrandsSection />
        <MidSection />
        <FeatureSection />
        <LowerSection />
      </section>
    </>
  )
}

export default Homepage
