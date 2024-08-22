import Login from "./Login"
import Image from "next/image"
import logo from '@/assets/images/logo.png'

const OffCanvasLeft = () => {
  return (
    <div className="offcanvas offcanvas-start gradient-background-primary" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="text-center">
              <Image src={logo} width={224} height={47} alt="8 Bit Cafe" priority={true} />
          </div>
              <Login />
        </div>
    </div>
  )
}
export default OffCanvasLeft