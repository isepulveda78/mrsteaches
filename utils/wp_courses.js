
import https from 'https'

const API_URL = 'https://israels14.sg-host.com/wp-json/courses/v1/courses'

export async function getCourses(){
    const res = await fetch(API_URL)
    const courses = await res.json()
    return courses
 }

 export async function getCourse(slug){
    const courses = await getCourses()
    const singleCourse = courses.filter((course) => course.slug == slug)
    const course = singleCourse.length > 0 ? singleCourse[0] : null 
    return course
 }

 export async function getSlugs(){
    const courses  = await getCourses()
    const slugs = courses.map((course) => {
        return {
            params: {
                slug: course.slug
            },
        }
    })
   return slugs
 }