import Carousel from "./Carousel"
import LearnMore from "./LearnMore"

const Hero = () => {
  return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12">
                    <Carousel />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 ">
                    <LearnMore />        
                </div>
            </div>
        </div>
  )
}

export default Hero