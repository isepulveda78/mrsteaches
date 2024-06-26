

export async function getCourses(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_COURSES}`, { next: { revalidate: 10 } })
    const courses = await res.json()
    return courses
 }
