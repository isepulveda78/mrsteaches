import { getCourses } from '@/utils/wp_courses'
import qs from 'qs'
import Layout from '@/components/Layout'
import CourseCard from '@/components/CourseCard'
import Hero from '@/components/Hero'

const Search = ({ games }) => {
  return (
    <Layout>
        <Hero />
         <section className='bg-white py-5"'>
            <div className='container'>
                    <div className="row gx-5">
                    <div className='p-3'>Filter Results:</div>
                        {games.length === 0 ? (
                          <div className='col-md-4 mx-auto'>
                              <h2 className='mt-5 mb-10 card text-center py-5'>
                                No results found
                              </h2>
                          </div>
                        ) : ( games.map((game) => (
                            <>
                                <CourseCard key={game.id} post={game} />
                            </>
                            )
                        ))}
                    </div> 
            </div>
        </section>
    </Layout>
  )
}

export default Search

export async function getServerSideProps({ query: { term } }){
    const query = qs.stringify({
        _where: {
            _or: [
                { title_contains: term },
                { grade_level_contains: term },
            ]
        }
    })
    
    const res = await fetch(`${process.env.WORDPRESS_REST_API_GAMES}?term=${term}`)
    const games = await res.json()

    return {
        props: { games }
    }
}