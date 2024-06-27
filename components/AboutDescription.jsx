import { LuCheckCircle } from "react-icons/lu";

const AboutDescription = () => {
  return (
        <div className="container">
              <div className="row">
                <div className="col-md-10 offset-md-1 about">
                    <div className="text-start">
                        <h2 className="pt-4 pb-1 fs-1 fw-bolder text-center">Welcome to 8 Bit Cafe</h2>
                        <div className="my-3 about-paragraph">
                            <p>
                                Hello, I&apos;m Israel Sepulveda. In 2015, I had the chance to live and teach in Beijing, China and had the chance to visit a place called 8 Bit which had old school
                                Nintendos. The original Nintendos were 8 bits, so that&apos;s where the name 8 Bit came from. When I came back to the US, I often thought about having a cafe where I could teach how to create
                                old school video games like the ones Nintendo used to make. 
                            </p>
                            <p>
                                After a couple of years of teaching, I decided to go to a coding bootcamp to learn how to code. Since then, I have worked as a web developer for the school district, and I contracted with 
                                many different companies. I love web development, but my true passion is video games. I decided to create this website which teaches how to create 8 bit games and more.
                                I want to share what I have learned over the years to those who are curious. 
                            </p>
                        </div>
                        <p>8 Bit Cafe is not the traditional cafe. It&apos;s about bringing people together while they embark on their coding journey. Coding alone can be challenging, so 8 Bit Cafe is more about learning. It&apos;s about a community that shares a common goal. You&apos;ll gain: </p>
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

export default AboutDescription
