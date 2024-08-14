import Breadcrumb from "@/components/Breadcrumb"
import Link from "next/link"
import { getCourse, getSlugs } from "@/utils/wp_courses"
import Layout from "@/components/Layout"
import NavBar from "@/components/Navbar"
import { BsPerson } from "react-icons/bs"
import DOMPurify from "isomorphic-dompurify"
import Image from "next/image"
import { BiSolidCategoryAlt } from "react-icons/bi"
import axios from "axios"
import { useState, useEffect } from 'react'
import { useSession } from "next-auth/react"
import { toast } from 'react-toastify'

const Course = ( {course} ) => {
    const { data: session, update } = useSession()

    const [ subscription, setSubscriptions ] = useState('')

    useEffect(() => {
        if(session){
         getUserSubscriptionStatus()
        }
     },[session])

    const getUserSubscriptionStatus = async () => {
        try {
           const { data } = await axios.get(`/api/subscribe/access`)
           if(data.user){
                setSubscriptions(data.user.subscription_status)
           } else {
              toast.error('Not authorized!')
           }  
        } catch (error) {
            toast.error(error)
        }
    }

  return (
    <Layout>
        <NavBar />
            <main className="wrapper">
                <div className="container page-section">
                    <div className="row">
                        <div className="my-3">
                            <Breadcrumb page={'Courses'} />
                        </div>
                        <div className="col-md-8 col-sm-12 my-3">
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
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                        <div className="my-3">
                        <div className="card shadow">
                            <div className="card-body">
                                <Image 
                                src={course.featured_image_url} 
                                width={638} 
                                height={353} 
                                priority={true} 
                                alt={`${course.title} image`} 
                                className="img-fluid rounded" />
                            </div>
                        </div>
                        <div className="d-grid mt-1">
                            { subscription ? 
                            ( <Link href="" className="btn btn-danger btn-lg text-white">Play</Link> )
                             :
                            ( <Link href="/pricing" className="btn btn-primary btn-lg text-white">Subscribe</Link> )
                            }
                           
                        </div>
                        </div>
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