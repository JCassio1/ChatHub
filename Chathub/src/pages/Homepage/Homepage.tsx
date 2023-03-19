import Navbar from '../../components/layout/Navbar'
import BrandsSection from './components/BrandsSection'
import HeroSection from './components/HeroSection'
import MidSection from './components/MidSection'

const Homepage = () => {
  return (
    <>
      <section>
        <Navbar />
        <HeroSection />
        <BrandsSection />
        <MidSection />
      </section>
    </>
  )
}

export default Homepage
