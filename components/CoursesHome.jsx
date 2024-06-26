
import CourseCard from "./CourseCard"
import { getCourses } from "@/utils/wp_courses"

const CoursesHome = async () => {
const courses = await getCourses()

  return (
    <div className="container">
                <div className="text-center home-title-margin"><h2>Subjects</h2></div>
        <div className="row">
            {courses.map((course) => (
                <CourseCard key={course.id} post={course} />
            ))} 
        </div>
    </div>
  )
}

  export default CoursesHome