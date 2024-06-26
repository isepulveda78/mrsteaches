

export const dynamic = 'force-dynamic'

export const GET = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_COURSES}`, { next: { revalidate: 10 } })
    const courses = await res.json()

    return new Response(JSON.stringify(courses), { status: 200})
  } catch (error) {
    console.log(error)
    return new Response('Something went wrong', { status: 500 })
  }
}