import Image from "next/image"
import comingSoon from '@/assets/images/coming-soon.webp'
import minecraft from '@/assets/images/minecraft.webp'

const Carousel = () => {
  return (
     <div id="coursel" className="carousel slide my-5 shadlow-lg">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <Image src={comingSoon} width={638} height={353} className="d-block w-100 rounded img-fluid" alt="..." />
            </div>
            <div className="carousel-item">
                <Image src={minecraft} width={638} height={353} className="d-block w-100 rounded img-fluid" alt="..." />
            </div>
            <div className="carousel-item">
                <Image src={comingSoon} width={638} height={353} className="d-block w-100 rounded img-fluid" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#coursel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#coursel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
  )
}

export default Carousel