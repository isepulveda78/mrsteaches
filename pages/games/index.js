import CourseCard from "@/components/CourseCard"
import Breadcrumb from "@/components/Breadcrumb"
import Layout from "@/components/Layout"
import { getCourses } from '@/utils/wp_courses'
import DropdownFilter from "@/components/DropdownFilter"
import Search from "@/components/Search"

const Courses = ({ courses }) => {
  return (
  <Layout>
       <main className="wrapper">
            <div className="page-section">
                <div className="container">
                    <Breadcrumb page={'Courses'} />
                        <div className="row">
                                <div className="col-md-12 col-sm-4">
                                <h2 className="mb-5 text-center">Lessons</h2>
                                    <DropdownFilter />
                                    <div className="row">
                                        {courses.map((course) => (
                                            <CourseCard key={course.id} post={course} />
                                        ))}
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
       </main>
  </Layout>
  )
}

export default Courses


export async function getStaticProps(){

    const courses = await getCourses()

    return {
        props: {
          courses
        },
        revalidate: 10,
    }
}