import IntroSection from "./IntroSection"
import Navbar from "./Navbar"
import SocialSection from "./SocialSection"
import TechnologiesSection from "./TechnologiesSection"

const LandingPage = () => {
  return (
    <div className="bg-white relative">
        <Navbar />
        <IntroSection />
        <SocialSection />
        <TechnologiesSection />
    </div>
  )
}

export default LandingPage
