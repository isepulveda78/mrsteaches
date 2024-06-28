import Image from "next/image"
import { BsPerson } from "react-icons/bs"
import Link from "next/link"

const CourseCard = ({post}) => {
   if(!post){
    return 'loading...'
   }else{

  return (
    <div className="col-md-4 col-sm-12">
        <div className="container">
                <div className="card shadow-lg mb-3">
                <Link href={`/subjects/${post.slug}`}><Image src={post.featured_image_url} width={638} height={353} priority={true} className="card-img-top img-fluid" alt={post.title} /></Link>
                    <div className="card-body">

                        <Link href={`/subjects/${post.slug}`}><h5 className="card-title text-center">{post.title}</h5></Link>
                        <p className="card-text">{post.excerpt}</p>
                        <hr />
                        <div className="row">
                            <div className="col text-start">
                                <BsPerson className="text-primary mb-1"/><span className="text-primary">{post.grade_level}</span>
                            </div>
                            <div className="col text-end text-primary">
                                ${post.price}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}
}

export default CourseCard