import CourseCard from "./CourseCard"

const CoursesHome = () => {
  return (
    <div className="container">
                <div className="text-center home-title-margin"><h2>Subjects</h2></div>
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