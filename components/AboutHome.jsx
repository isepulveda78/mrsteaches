import { LuCheckCircle } from "react-icons/lu"
import { PiBooksFill } from "react-icons/pi"
import { BiMath } from "react-icons/bi"
import { TbWriting } from "react-icons/tb"
import { LuCode2 } from "react-icons/lu"
import Image from "next/image"
import students from "@/assets/images/students.png"

const AboutHome = () => {
  return (
        <div className='container'>
              <div className="row">
                <div className="about-home home-title-margin">
                    <div className="col-md-8 offset-md-2">
                        <div className="text-center text-white"><h2>What we do at Mr. S Teaches?</h2>
                        <span className="w-75 text-center small text-secondary">Online, we tutor in different subjects. Our subjects include:</span>
                        </div>
                    </div>
                    <div className="my-5 text-center">
                        <div className="row">
                            <div className="col p-1">
                                <PiBooksFill className="text-success mb-1 me-3 fs-5"/><small className="fw-bold fs-5 text-white">Reading</small>
                            </div>
                            <div className="col p-1">
                                <BiMath className="text-success mb-1 me-3 fs-5"/><small className="fw-bold fs-5 text-white">Math</small>
                            </div>
                            <div className="col p-1">
                                <TbWriting className="text-success mb-1 me-3 fs-5"/><small className="fw-bold fs-5 text-white">Writing</small>
                            </div>
                            <div className="col p-1">
                                <LuCode2 className="text-success mb-1 me-3 fs-5"/><small className="fw-bold fs-5 text-white">Coding</small>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <div className="row">
                    <div className="col-md-6 col-sm-12 text-center my-5">
                    <p className="display-6 lead text-white">Online Tutoring</p>
                      <h4 className="text-secondary">Why learn online?</h4>
                      <div className="mt-2">
                            <div className="my-3 text-white"><LuCheckCircle className="text-success me-3"/>Learn anywhere</div>
                            <div className="my-3 text-white"><LuCheckCircle className="text-success me-3"/>Customized Curriculum</div>
                            <div className="my-3 text-white"><LuCheckCircle className="text-success me-3"/>Reduced Costs</div>
                            <div className="my-3 text-white"><LuCheckCircle className="text-success me-3"/>Increased Engagement</div>
                      </div>
                        <div className="mt-4">
                            <button className="btn btn-secondary btn-lg text-white text-center">Learn More</button>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <Image src={students} width={500} height={450} priority={true} alt="..." className="img-fluid mb-5 rounded p-2 bg-success"/>
                    </div>
              </div>
        </div>
  )
}

export default AboutHome
