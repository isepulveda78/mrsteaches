import Breadcrumb from "@/components/Breadcrumb"
import Link from "next/link"
import { getCourse, getSlugs } from "@/utils/wp_courses"
import Layout from "@/components/Layout"
import NavBar from "@/components/Navbar"
import DOMPurify from "isomorphic-dompurify"
import Image from "next/image"
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
                            <div className="course-info">
                                        <div className="row my-2">
                                                <div className="col-md-8 col-sm-12">
                                                    <h2 className="text-center">{course.title}</h2>
                                                    <div className="content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(course.content) }}></div>
                                                </div>
                                                <div className="col-md-4 col-sm-12">
                                                    <div className="shadow">
                                                        <Image 
                                                        src={course.featured_image_url} 
                                                        width={638} 
                                                        height={353} 
                                                        priority={true} 
                                                        alt={`${course.title} image`} 
                                                        className="img-fluid rounded" />
                                                    </div>

                                                    <div className="d-grid mt-1">
                                                        { subscription === 'active' ? 
                                                        ( <Link href="" className="btn btn-danger btn-lg text-white">Play</Link> )
                                                        :
                                                        ( <Link href="/pricing" className="btn btn-primary btn-lg text-white">Subscribe</Link> )
                                                        }
                                                    </div>
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