import { FaHtml5, FaPython } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMinecraft } from "react-icons/si";

const TaughtHome = () => {
  return (
    <div className="container taught">
        <div className="row text-center py-5">
                <div className="mb-3">
                    <h2>What is taught?</h2>        
                </div>
                <div className="col-md-3 mb-2">
                    <FaHtml5 className="large-icon me-3" />HTML & CSS
                </div>
                <div className="col-md-3 mb-2">
                    <IoLogoJavascript className="large-icon me-3" />Javascript
                </div>
                <div className="col-md-3 mb-2">
                    <FaPython className="large-icon me-3" />Python
                </div>
                <div className="col-md-3 mb-2">
                    <SiMinecraft className="large-icon me-3" />Coding in Minecraft
                </div>
                <div className="mt-3">
                    <p>From <span className="fw-bolder">websites</span> to <b>game development,</b> here at 8 Bit Cafe, we learn some some of the latest technology that the industry uses. </p>
                </div>
        </div>
    </div>
  )
}

export default TaughtHome