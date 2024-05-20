import logo from "@/assets/images/logo.png"
import Image from "next/image"
import { FaFacebook, FaYoutube, FaDiscord, FaRegCopyright } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <>
        <footer className="container p-3">
            <div className="row text-center">
                <div className="col-md-4 col-sm-12">
                    <Image src={logo} width={224} height={47} alt="8 Bit Cafe" className="mb-2" priority={true} />
                    <div className="mt-1 roboto-thin text-white">
                        Thanks for stopping by. If you need anything, feel free to email us at eightbit@eightbitcafe.com.
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <div className="h5 text-white">Menu</div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link roboto-thin" href="#">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link roboto-thin" href="#">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link roboto-thin" href="#">Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link roboto-thin" href="#">Terms</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link roboto-thin" href="#">Privacy</Link>
                            </li>
                        </ul>
                </div>
                <div className="col-md-4 col-sm-12">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <div className="h5 text-white">Around the Web</div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link roboto-thin" href="#"><FaFacebook className="text-white me-3" />
Facebook</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link roboto-thin" href="#"><FaYoutube className="text-white me-3" />YouTube</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link roboto-thin" href="#"><FaDiscord className="text-white me-3" />Discord</Link>
                            </li>
                        </ul>
                </div>
            </div>
        </footer>
        <div className="gradient-background-secondary text-center p-2">
            8 Bit Cafe <FaRegCopyright /> { currentYear }
        </div>
        </>
  )
}

export default Footer