import AboutDescription from "@/components/AboutDescription"
import Breadcrumb from "@/components/Breadcrumb"

const About = () => {
  return (
    <div className="container">
        <div className="mt-3">
            <Breadcrumb page={'About'} />
        </div>
            <AboutDescription />
    </div>
  )
}

export default About