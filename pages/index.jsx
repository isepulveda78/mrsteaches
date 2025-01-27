import AboutHome from '@/components/AboutHome'
import CourseCard from '@/components/CourseCard'
import Layout from '@/components/Layout'
import { getCourses, getSlider } from '@/utils/wp_courses'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useState, useEffect } from 'react'
import BigSpinner from '@/components/BigSpinner'
import { useRouter } from 'next/router'
export default function Home({ courses, slider }){
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      }
      const [ isLoading, setIsLoading ] = useState(true)

      const router = useRouter()
      useEffect(()=> {
        router.isReady && setIsLoading(false)
      }, [])

  return (
    <Layout>
           <div className='page-section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 mx-auto">
                                { isLoading  ? (
                                       <BigSpinner />
                                ) : (
                                
                                    <div className="my5">
                                   
                                       <Carousel 
                                      responsive={responsive} 
                                      className='my-3' 
                                      infinite={true}
                                      autoPlay={true} 
                                      autoPlaySpeed={3000}
                                      >
                                          {slider.map((slide) => (
                                          
                                                  <div key={slide.id}>
                                                      <Image src={slide.featured_image_url} width={638} height={353} priority={true} alt="..." className="d-block w-100 rounded img-fluid"/>
                                                  </div>
                                          ))}
                                      </Carousel>
                                    </div>
                                )}
                          
                            </div>
                        </div>
                    </div>
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
    </Layout>
  )
}

export async function getStaticProps(){

    const courses = await getCourses()
    const slider = await getSlider()

    return {
        props: {
          courses,
          slider
        },
        revalidate: 10,
    }
}