import AboutDescription from "@/components/AboutDescription"
import Breadcrumb from "@/components/Breadcrumb"
import TaughtHome from "@/components/TaughtHome"

const About = () => {
  return (
    <div className="container">
        <div className="mt-3">
            <Breadcrumb page={'About'} />
        </div>
            <AboutDescription />
            <TaughtHome />
        
    </div>
  )
}

export default About