
import https from 'https'

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
})

export async function getCourses(){
    const res = await fetch('https://71f.036.myftpupload.com/wp-json/courses/v1/courses', {
        agent: httpsAgent
    })
    const courses = await res.json()
    return courses
 }
