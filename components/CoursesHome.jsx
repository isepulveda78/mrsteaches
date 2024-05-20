import CourseCard from "./CourseCard"

const CoursesHome = () => {
  return (
    <div className="container">
        <div className="row">
        <div className="my-4">
        <h2 className="text-white text-center">Courses</h2>
        </div>
            <div className="col-md-4 col-sm-12">
                <CourseCard />
            </div>
            <div className="col-md-4 col-sm-12">
                <CourseCard />
            </div>
            <div className="col-md-4 col-sm-12">
                <CourseCard />
            </div>
            <div className="text-center mt-5 mb-4">
                <button className="btn btn-secondary btn-lg text-white">All Courses</button>
            </div>
        </div>
    </div>
  )
}

export default CoursesHome