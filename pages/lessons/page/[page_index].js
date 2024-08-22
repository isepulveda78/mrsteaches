import CourseCard from "@/components/CourseCard"
import Breadcrumb from "@/components/Breadcrumb"
import Layout from "@/components/Layout"
import { getCourses } from '@/utils/wp_courses'
import DropdownFilter from "@/components/DropdownFilter"
import { LESSONS_PER_PAGE } from "@/config"
import path from 'path'
import Pagination from "@/components/Pagination"

const Lessons = ({ lessons, numPages, currentPage }) => {
  return (
  <Layout>
       <main className="wrapper">
            <div className="page-section">
                <div className="container">
                    <Breadcrumb page={'Lessons'} />
                        <div className="row">
                                <div className="col-md-12 col-sm-4">
                                <h2 className="mb-5 text-center">Lessons</h2>
                                    <DropdownFilter />
                                    <div className="row">
                                        {lessons.map((lesson) => (
                                            <CourseCard key={lesson.id} post={lesson} />
                                        ))}
                                    </div>
                                    <Pagination currentPage={currentPage} numPages={numPages} />
                                </div>
                        </div>
                </div>
            </div>
       </main>
  </Layout>
  )
}

export default Lessons

export async function getStaticPaths(){
    const lessons = await getCourses()
    const numPages = Math.ceil(lessons.length / LESSONS_PER_PAGE)

    let paths = []

    for(let i = 1; i <= numPages; i++){
        paths.push({
            params: { page_index: i.toString() }
        })
    }

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }){
    const page = parseInt((params && params.page_index) || 1)
    const lessons = await getCourses()

      
    const numPages = Math.ceil(lessons.length / LESSONS_PER_PAGE)
    const pageIndex = page - 1
    const orderedPosts = lessons.slice(
      pageIndex * LESSONS_PER_PAGE,
      (pageIndex + 1) * LESSONS_PER_PAGE
    )

    return {
        props: {
          lessons: orderedPosts,
          numPages,
          currentPage: page,
        },
        revalidate: 10,
    }
}
