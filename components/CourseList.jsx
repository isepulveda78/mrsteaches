
import Link from "next/link"

const Courses = () => {
  return (
    <div className="my-5 course-list">
        <div className="text-center">
        <h2 className="text-white">Courses</h2>
        </div>
        <div className="course-list mt-5">
          <div className="mb-1">
            <div className="row">
              <div className="col-md-8">
                <div className="justify-content-start"><Link className="text-white roboto-thin" href="/">Javascript 101</Link></div>
              </div>
              <div className="col-md-4">
                <div className="float-end"><Link className="text-white roboto-thin" href="/">Register</Link></div>
              </div>
            </div>
            
          </div>
          <div className="mb-1">
            <div className="row">
              <div className="col-md-8">
                <div className="justify-content-start"><Link className="text-white roboto-thin" href="/">Minecraft: Coding Fundamentals</Link></div>
              </div>
              <div className="col-md-4">
                <div className="float-end"><Link className="text-white roboto-thin" href="/">Register</Link></div>
              </div>
            </div>
            
         </div>
         <div className="mb-1">
            <div className="row">
              <div className="col-md-8">
                <div className="justify-content-start"><Link className="text-white roboto-thin" href="/">Python Game Development</Link></div>
              </div>
              <div className="col-md-4">
                <div className="float-end"><Link className="text-white roboto-thin" href="/">Register</Link></div>
              </div>
            </div>
            
         </div>

        </div>
    </div>
  )
}

export default Courses