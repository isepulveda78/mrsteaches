import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/images/logo.png"
import { RxHamburgerMenu } from "react-icons/rx"
import { BiCart , BiSearch} from "react-icons/bi"
import { BsPerson } from "react-icons/bs"
import OffCanvasRight from "./OffCanvasRight"
import OffCanvasLeft from "./OffCanvasLeft"

const Navigation = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg gradient-background-primary px-2 shadow-lg" id="mainNav">
      <div className="container">
          <Image src={logo} width={224} height={47} alt="8 Bit Cafe" priority={true} />
          <button className="navbar-toggler bg-dark text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <RxHamburgerMenu className="text-white" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav mx-auto">
                  <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3" href="#portfolio">About</Link></li>
                  <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3" href="#about">Services</Link></li>
                  <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 " href="#contact">Learn</Link></li>
              </ul>
                 <ul className="navbar-nav ms-auto">
                  <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link px-0" href="#about"><BiSearch className="text-white fs-4" /></Link></li>
                  <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link px-0" href="#about" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><BsPerson className="text-white fs-4" /></Link></li>
                  <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link px-0" href="#portfolio" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><BiCart className="text-white fs-4" /><span className="cart-number">1</span></Link></li>
              </ul>
          </div>
        </div>
    </nav>
    <OffCanvasRight />
    <OffCanvasLeft />
    </>
  )
}

export default Navigation