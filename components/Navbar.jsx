'use client'
import Image from "next/image"
import logo from "@/assets/images/logo.png"
import Link from "next/link"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"
import { signOut, useSession } from "next-auth/react"
import profileImage from "@/assets/images/f.webp"

const NavBar = () => {

  const { status, data: session } = useSession()
 const profileSocialImage = session?.user?.image

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
                    <li className="nav-item"><Link className="nav-link fw-bold link-light" href="/subjects">Subjects</Link></li>
                    {!session && <li className="nav-item"><Link className="nav-link fw-bold link-light" href="/login" >Login</Link></li>}
                    {!session && <li className="nav-item"><Link className="nav-link fw-bold link-light" href="/register" >Register</Link></li>}
                    {session && <li className="nav-item"><Link className="nav-link fw-bold link-light" href="#" onClick={() => signOut()}>Logout</Link></li>}
                    {session && <li className="nav-item d-flex"><Link className="nav-link fw-bold text-success" href="/profile">{session.user.name}</Link><Link className="nav-link fw-bold text-success" href="/profile"><Image src={profileImage === '' ? profileSocialImage : profileImage} width={30} height={30} className="img-fluid rounded-circle"/></Link></li>}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar