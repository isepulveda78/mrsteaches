import AboutHome from '@/components/AboutHome'
import CourseCard from '@/components/CourseCard'
import Layout from '@/components/Layout'
import { getCourses } from '@/utils/wp_courses'
import 'react-multi-carousel/lib/styles.css'
import Hero from '@/components/Hero'
import Link from 'next/link'

export default function Home({ courses }){
  return (
    <Layout>
    <Hero />
        <section className="bg-white py-5">
            <div className="container">
            <h2 className='mb-3 text-center'>Our Apps</h2>
                    <div className="row gx-5">
                        {courses.length === 0 ? (
                            <div className='col-md-4 mx-auto'>
                                <h2 className='mt-5 mb-10 card text-center py-5'>
                                    There are no lessons.
                                </h2>
                            </div>
                            ) : ( courses.map((game) => (
                                    <CourseCard key={game.id} post={game} />
                                )
                            ))}
                        </div> 

                <div className='d-grid my-3 text-center'>
                        <Link href="/games" className="btn btn-outline-danger">
                            View All
                        </Link>
                </div>
            </div>
        </section>   
    </Layout>
  )
}

export async function getStaticProps(){
    const allCourses = await getCourses()
    //To display three courses on the front page
    const slicedCourses = Array.prototype.slice.call(allCourses, 6)
    
    let courses = []

    for(var i = 0; i < 3; i++){
        courses[i] = slicedCourses[i]
    }
    return {
        props: {
          courses
        },
        revalidate: 10,
    }
}