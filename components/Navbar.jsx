'use client'
import Image from "next/image"
import logo from "@/assets/images/logo.png"
import Link from "next/link"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"

const NavBar = () => {

  const [ open, setOpen ] = useState(false)

    const openAndClose = () => {
          if(open){
            setOpen(false)
          }else{
            setOpen(true)
          }
    }

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-primary shadow-lg">
        <div className="container">
            <Link className="text-decoration-none varelaRound text-white mt-1" href="/"><Image src={logo} width={150} height={50} priority={true} className="img-fluid" alt="Mr. S Teaches" /></Link>
            <button onClick={openAndClose} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                {open ? 
                ( <GrClose className="text-success fs-3" /> )
                    :
                ( <GiHamburgerMenu className="text-success fs-3" /> )
            }
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto py-4 py-lg-0">
                    <li className="nav-item"><Link className="nav-link fw-bold link-dark" href="/subjects">Subjects</Link></li>
                    <li className="nav-item"><Link className="nav-link fw-bold link-dark" href="/classroom">Classroom</Link></li>
                    <li className="nav-item"><Link className="nav-link fw-bold link-dark" href="/login" >Login</Link></li>
                    <li className="nav-item"><Link className="nav-link fw-bold link-dark" href="/register" >Register</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar