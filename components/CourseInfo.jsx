import { BsPerson } from "react-icons/bs"
import { LuGamepad2 } from "react-icons/lu";
import { FaWindows, FaApple, FaChrome } from "react-icons/fa";

const CourseInfo = () => {
  return (
    <div className="course-info">
        <h2 className="text-center">Course Title</h2>
        <div className="my-2 row">
            <div className="col">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
        <hr />
        <div className="my-2 row text-center">
            <div className="col">
                <BsPerson className="text-danger mb-1" /> 10 +
            </div>
            <div className="col">
                <LuGamepad2 className="text-danger mb-1" /> Javascript
            </div>
        </div>
        <hr />
        <div className="my-2 row text-center">
            <div className="my-2"><h4>Tech Requirement:</h4></div>
            <div className="col">
                <FaWindows className="text-info"/> Windows PC
            </div>
            <div className="col">
                <FaApple className="text-info"/> Mac
            </div>
            <div className="col">
                <FaChrome className="text-info"/> Chromebook
            </div>
        </div>
    </div>
  )
}

export default CourseInfo