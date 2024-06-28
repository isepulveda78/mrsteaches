import AboutHome from '@/components/AboutHome'
import CourseCard from '@/components/CourseCard'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import NavBar from '@/components/Navbar'
import { getCourses } from '@/utils/wp_courses'

export default function Home({ courses }){
  return (
    <Layout>
        <NavBar />
            <main className="wrapper">
                <div className="page-section">
                    <Hero />
                </div>
                <div className="page-section bg-primary">
                    <AboutHome />
                </div>
                <div className="page-section bg-light">
                    <div className="text-center home-title-margin"><h2>Subjects</h2></div>
                    <div className="container">
                        <div className="row">
                            {courses.map((course) => (
                                <CourseCard key={course.id} post={course} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        <Footer />
    </Layout>
  )
}

export async function getStaticProps(){

    const courses = await getCourses()

    return {
        props: {
          courses
        },
        revalidate: 10,
    }
}