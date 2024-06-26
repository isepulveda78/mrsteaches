
import https from 'https'

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
})

export async function getCourses(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_COURSES}`, {
        agent: httpsAgent
    })
    const courses = await res.json()
    return courses
 }
