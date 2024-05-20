import Image from "next/image"
import minecraft from '@/assets/images/minecraft.webp'
import { BsPerson } from "react-icons/bs"

const CourseCard = ({image}) => {
  return (
    <div className="container">
        <div className="card shadow-lg mb-2">
        <Image src={minecraft} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
            <h5 className="card-title text-center">Card title</h5>
            <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <hr />
            <div className="row">
                <div className="col text-start">
                    <BsPerson className="text-danger mb-1"/> <span className="text-danger">8 +</span>
                </div>
                <div className="col text-end text-danger">
                    $ 125
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CourseCard