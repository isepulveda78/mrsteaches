import Image from "next/image"
import Carousel from "./Carousel"
import CourseList from "./CourseList"

const Hero = () => {
  return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 col-sm-12">
                    <Carousel />
                </div>
                <div className="col-md-5 col-sm-12">
                    <CourseList />
                </div>
            </div>
        </div>
  )
}

export default Hero