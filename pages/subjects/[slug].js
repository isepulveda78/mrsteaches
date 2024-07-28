import Breadcrumb from "@/components/Breadcrumb"
import Link from "next/link"
import { getCourse, getSlugs } from "@/utils/wp_courses"
import Layout from "@/components/Layout"
import NavBar from "@/components/Navbar"
import { BsPerson } from "react-icons/bs"
import { FaWindows, FaApple, FaChrome } from "react-icons/fa"
import DOMPurify from "isomorphic-dompurify"
import Image from "next/image"
import { BiSolidCategoryAlt } from "react-icons/bi"

const Course = ( {course} ) => {

  return (
    <Layout>
        <NavBar />
            <main className="wrapper">
                <div className="container page-section">
                    <div className="row">
                        <div className="my-3">
                            <Breadcrumb page={'Courses'} />
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <div className="course-info">
                                    <h2 className="text-center">{course.title}</h2>
                                        <div className="my-2 row">
                                            <div className="col">
                                                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(course.content) }}></div>
                                            </div>
                                        </div>
                                    <hr />
                                    <div className="my-2 row text-center">
                                        <div className="col">
                                            <BsPerson className="text-primary mb-1" /> {course.grade_level}
                                        </div>
                                        <div className="col">
                                            <BiSolidCategoryAlt className="text-primary mb-1" /> {course.title}
                                        </div>
                                    </div>
                                            <hr />
                                    <div className="my-2 row text-center">
                                        <div className="my-2"><h4>Tech Requirement:</h4></div>
                                    
                                        <div className="col">
                                            <FaWindows className="text-info"/> Windows PC
                                        </div>
                                        <div className="col">
                                            <FaApple className="text-info"/> Mac
                                        </div>
                                        <div className="col">
                                            <FaChrome className="text-info"/> Chromebook
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                        <div className="">
                        <div className="card shadow">
                            <div className="card-body">
                                <Image src={course.featured_image_url} width={638} height={353} priority={true} alt={`${course.title} image`} className="img-fluid rounded" />
                            </div>
                            <div className="card-title text-center">
                                <div className="fs-5 text-danger">$ {course.price}</div>
                            </div>
                        </div>
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
            </main>
    </Layout>
  )
}

export default Course

export async function getStaticPaths(){
    const paths = await getSlugs()
    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }){
    const course = await getCourse(params.slug)
    return {
        props: {
            course
        },
        revalidate: 10
    }
}