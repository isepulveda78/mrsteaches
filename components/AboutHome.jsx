import { LuCheckCircle } from "react-icons/lu"
import Image from "next/image"
import students from "@/assets/images/students.png"

const AboutHome = () => {
  return (
        <div className='container'>
              <div className="row">
                <div className="col-md-10 offset-md-1 about">
                    <div className="text-center">
                        <div className="pt-4 pb-1 display-6 lead">Get your coffee ready and join us on a coding journey.</div>
                        <p>8 Bit Cafe is not the traditional cafe. It's about bringing people together while they embark on their coding journey. Coding alone can be challenging, so 8 Bit Cafe is more about learning. It's about a community that shares a common goad. You'll gain: </p>
                    </div>
                    <div className="my-5 text-center">
                        <div className="row">
                            <div className="col p-1">
                                <LuCheckCircle className="text-secondary me-3"/><small className="fw-bold fs-5">Future-Proof Skills</small>
                            </div>
                            <div className="col p-1">
                                <LuCheckCircle className="text-secondary me-3"/><small className="fw-bold fs-5">Intellectual Growth</small>
                            </div>
                            <div className="col p-1">
                                <LuCheckCircle className="text-secondary me-3"/><small className="fw-bold fs-5">Independence</small>
                            </div>
                            <div className="col p-1">
                                <LuCheckCircle className="text-secondary me-3"/><small className="fw-bold fs-5">A Community</small>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <div className="row">
                    <div className="col-md-6 col-sm-12 text-center my-5">
                    <p className="display-6 lead">Live Online Classes</p>
                      <h4>Why learn online?</h4>
                      <div className="mt-1">
                            <div className="my-2"><LuCheckCircle className="text-secondary me-3"/>Learn anywhere</div>
                            <div className="my-2"><LuCheckCircle className="text-secondary me-3"/>Customized Curriculum</div>
                            <div className="my-2"><LuCheckCircle className="text-secondary me-3"/>Reduced Costs</div>
                            <div className="my-2"><LuCheckCircle className="text-secondary me-3"/>Increaded Engagement</div>
                      </div>
                        <div className="mt-3">
                            <button className="btn btn-info btn-lg text-white text-center">Learn More</button>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <Image src={students} width={500} height={450} priority={true} className="img-fluid mb-5 rounded"/>
                    </div>
              </div>
        </div>
  )
}

export default AboutHome
