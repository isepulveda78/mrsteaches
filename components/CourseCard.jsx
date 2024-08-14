import Image from "next/image"
import { MdArrowRightAlt } from "react-icons/md"
import Link from "next/link"

const CourseCard = ({post}) => {
   if(!post){
    return 'loading...'
   }else{

  return (
            <div className="col-lg-4 mb-lg-0 courses">
                    <div className="card lift mb-3">
                        <div className="card-flag card-flag-dark card-flag-top-right">{post.grade_level}</div>
                            <Link href={`/subjects/${post.slug}`}>
                                <Image 
                                src={post.featured_image_url} 
                                width={638} 
                                height={353} 
                                priority={true} 
                                className="card-img-top img-fluid" 
                                alt={post.title} />
                            </Link>
                            <div className="card-body">
                                <Link href={`/games/${post.slug}`}>
                                    <div className="text-dark text-center">{post.title}</div>
                                </Link>
                             </div>
                    </div>
            </div>
     
  )
}
}

export default CourseCard