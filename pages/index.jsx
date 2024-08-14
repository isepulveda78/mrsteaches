import AboutHome from '@/components/AboutHome'
import CourseCard from '@/components/CourseCard'
import Layout from '@/components/Layout'
import { getCourses, getSlider } from '@/utils/wp_courses'
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
                    {courses.map((course) => (
                        <CourseCard key={course.id} post={course} />
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