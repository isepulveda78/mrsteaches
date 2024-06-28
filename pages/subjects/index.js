import CourseCard from "@/components/CourseCard"
import Breadcrumb from "@/components/Breadcrumb"
import Layout from "@/components/Layout"
import NavBar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { getCourses } from '@/utils/wp_courses'

const Courses = ({ courses }) => {
  return (
  <>
  <Layout>
    <NavBar />
       <main className="wrapper">
        <div className="page-section">
            <div className="container">
                    <Breadcrumb page={'Courses'} />
                    <div className="row">
                        <div className="col-lg-3 col-md-0">
                            <div className="nav flex-column navbar-dark mb-5">
                                <h3>Ages</h3>
                                <hr />
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        5 +
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        8 - 10
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        10 +
                                    </label>
                                </div>
                            </div>
                            <div className="nav flex-column navbar-dark mb-5">
                                <h3>Subjects</h3>
                                <hr />
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        HTML & CSS
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Javascript
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Python
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Minecraft
                                    </label>
                                </div>
                            </div>
                        </div>
                    
                            <div className="col-lg-9">
                                <h2 className="mb-5 text-center">Courses</h2>
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
    <Footer />
  </Layout>
  </>
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