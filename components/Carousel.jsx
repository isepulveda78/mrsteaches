import Image from "next/image"
import comingSoon from '@/assets/images/coming-soon.webp'


const Carousel = () => {
  return (
     <div id="coursel" className="carousel slide shadlow-lg mb-2">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <Image src={comingSoon} width={638} height={353} priority={true} alt="..." className="d-block w-100 rounded img-fluid"/>
            </div>
            <div className="carousel-item">
                <Image src={comingSoon} width={638} height={353} priority={true}  alt="..." className="d-block w-100 rounded img-fluid" />
            </div>
            <div className="carousel-item">
                <Image src={comingSoon} width={638} height={353} priority={true}  alt="..." className="d-block w-100 rounded img-fluid"/>
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