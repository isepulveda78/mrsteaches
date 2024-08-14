import Link from "next/link"
import { FaFacebookF, FaGithub, FaYoutube, FaRegCopyright } from "react-icons/fa"
const Footer = () => {
  return (
    <div id="layoutDefault_footer">
    <footer className="footer pt-10 pb-5 mt-auto bg-white footer-light">
        <div className="container px-5">
            <div className="row gx-5">
                <div className="col-lg-3">
                    <div className="footer-brand">Mr. S Teaches</div>
                    <div className="mb-3">Created by a teacher for teachers</div>
                    <div className="icon-list-social mb-5">
                        <Link className="icon-list-social-link" href="#!"><FaFacebookF className="fab fa-instagram" /></Link>
                        <Link className="icon-list-social-link" href="#!"><FaGithub className="fab fa-instagram" /></Link>
                        <Link className="icon-list-social-link" href="#!"><FaYoutube className="fab fa-instagram" /></Link>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="row gx-5">
                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                            <div className="text-uppercase-expanded text-xs mb-4">Product</div>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><Link href="#!">Landing</Link></li>
                                <li className="mb-2"><Link href="#!">Pages</Link></li>
                                <li className="mb-2"><Link href="#!">Sections</Link></li>
                                <li className="mb-2"><Link href="#!">Documentation</Link></li>
                                <li><Link href="#!">Changelog</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                            <div className="text-uppercase-expanded text-xs mb-4">Technical</div>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><Link href="#!">Documentation</Link></li>
                                <li className="mb-2"><Link href="#!">Changelog</Link></li>
                                <li className="mb-2"><Link href="#!">Theme Customizer</Link></li>
                                <li><Link href="#!">UI Kit</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                            <div className="text-uppercase-expanded text-xs mb-4">Includes</div>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><Link href="#!">Utilities</Link></li>
                                <li className="mb-2"><Link href="#!">Components</Link></li>
                                <li className="mb-2"><Link href="#!">Layouts</Link></li>
                                <li className="mb-2"><Link href="#!">Code Samples</Link></li>
                                <li className="mb-2"><Link href="#!">Products</Link></li>
                                <li className="mb-2"><Link href="#!">Affiliates</Link></li>
                                <li><Link href="#!">Updates</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="text-uppercase-expanded text-xs mb-4">Legal</div>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><Link href="#!">Privacy Policy</Link></li>
                                <li className="mb-2"><Link href="#!">Terms and Conditions</Link></li>
                                <li><Link href="#!">License</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-5" />
            <div className="row gx-5 align-items-center">
                <div className="col-md-6 small">Copyright <FaRegCopyright className="mx-1"/> Your Website 2023</div>
                <div className="col-md-6 text-md-end small">
                    <Link href="#!">Privacy Policy</Link>
                   <FaRegCopyright className="mx-1"/>
                    <Link href="#!">Terms &amp; Conditions</Link>
                </div>
            </div>
        </div>
    </footer>
</div>
  )
}

export default Footer