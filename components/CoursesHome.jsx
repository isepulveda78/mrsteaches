import CourseCard from "./CourseCard"

const CoursesHome = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-4 col-sm-12">
                <CourseCard />
            </div>
            <div className="col-md-4 col-sm-12">
                <CourseCard />
            </div>
            <div className="col-md-4 col-sm-12">
                <CourseCard />
            </div>
        </div>
    </div>
  )
}

export default CoursesHome