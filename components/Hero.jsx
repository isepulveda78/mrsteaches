import background from '../assets/images/background.png'
import Search from './Search'
const Hero = () => {
  return (
    <header className="page-header-ui page-header-ui-dark bg-img-cover overlay overlay-primary overlay-90" >
    <div className="page-header-ui-content py-5 position-relative">
        <div className="container px-5">
            <div className="row gx-5 justify-content-center">
                <div className="col-xl-8 col-lg-10 text-center">
                    <h1 className="page-header-ui-title">Educational Games</h1>
                    <p className="page-header-ui-text mb-5">Created by a teacher for teachers</p>
                </div>
            </div>
            <div className="row gx-5 justify-content-center">
                <div className="col-xl-6 col-lg-8 text-center">
                    <Search />
                </div>
            </div>
        </div>
    </div>
    <div className="svg-border-rounded text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
    </div>
</header>
  )
}

export default Hero