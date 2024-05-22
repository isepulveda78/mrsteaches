import Image from "next/image"
import minecraft from '@/assets/images/minecraft.webp'

const CourseImage = () => {
  return (
    <>
        <div className="card shadow">
            <div className="card-body">
                <Image src={minecraft} width={638} height={353} priority={true} alt="" className="img-fluid rounded" />
            </div>
            <div className="card-title text-center">
                <div className="fs-5 text-danger">$ 125</div>
            </div>
        </div>
    </>
  )
}

export default CourseImage