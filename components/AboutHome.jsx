import { LuCheckCircle } from "react-icons/lu";

const AboutHome = () => {
  return (
        <div className='container'>
              <div className="row">
                <div className="col-md-10 offset-md-1 about">
                    <div className="text-center">
                        <h2 className="pt-4 pb-1 fs-1 fw-bolder">Get your choice of beverage and join 8 Bit Cafe to learn one of the most important skills of the 21st century.</h2>
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
        </div>
  )
}

export default AboutHome
