import CourseImage from "@/components/CourseImage"
import CourseInfo from "@/components/CourseInfo"
import Breadcrumb from "@/components/Breadcrumb"

import Link from "next/link"
const Course = () => {
  return (
    <div className="container page-section">
        <div className="row">
            <div className="my-3">
                <Breadcrumb page={'Courses'} />
            </div>
            <div className="col-md-8 col-sm-12">
                <CourseInfo />
            </div>
            <div className="col-md-4 col-sm-12">
               <div className="">
                    <CourseImage />
                    <div className="mt-3 d-grid gap-2">
                        <button className="btn btn-danger btn-lg text-white">Enroll</button>
                        <Link className="btn btn-info btn-lg text-white" href="/classroom">Classroom</Link>
                    </div>
               </div>
            </div>
            <div className="col-md-12 mt-5">
                <h3 className="text-center mb-5">Related Courses</h3>
     
            </div>
        </div>
    </div>
  )
}

export default Course