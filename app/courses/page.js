import CourseCard from "@/components/CourseCard"
import Breadcrumb from "@/components/Breadcrumb"
import Link from "next/link"
const Courses = () => {
  return (
    <div className="container">
        <div className="mt-3">
            <Breadcrumb page={'Courses'} />
            <h2 className="my-3 text-center">Courses</h2>
            <div className="row">
                <div className="col-lg-3 col-md-0">
                    <div class="nav flex-column navbar-dark mb-5">
                        <h3>Ages</h3>
                        <hr />
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                5 +
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                8 - 10
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                10 +
                            </label>
                        </div>
                    </div>
                    <div class="nav flex-column navbar-dark mb-5">
                        <h3>Subjects</h3>
                        <hr />
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                HTML & CSS
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Javascript
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Python
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Minecraft
                            </label>
                        </div>
                    </div>
                </div>
            
                    <div className="col-lg-9">
                      <div className="row">
                      <div className="col-md-6">
                            <CourseCard />
                        </div>
                        <div className="col-md-6">
                            <CourseCard />
                        </div>
                        <div className="col-md-6">
                            <CourseCard />
                        </div>
                        <div className="col-md-6">
                            <CourseCard />
                        </div>
                        <div className="col-md-6">
                            <CourseCard />
                        </div>
                      </div>
                    </div>
    
            </div>
        </div>
    </div>
  )
}

export default Courses