import { useState, useEffect, useContext } from "react"
import { useRouter } from "next/router"
import { Store } from "@/utils/Store"
import { getError } from "@/utils/error"
import NavBar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { FaGoogle, FaFacebookF } from "react-icons/fa"
import Spinner from "@/components/Spinner"
import Button from "@/components/Button"
import { toast } from "react-toastify"
import Layout from "@/components/Layout"
import { signIn, useSession } from 'next-auth/react'

const Register = () => {

const [ isClient, setIsClient ] = useState(false)
const [ email, setEmail ] = useState('')
const [ password, setPassword ] = useState('')
const { state, dispatch } = useContext(Store)
const router = useRouter()
const { redirect } = router.query
const { data: session } = useSession()


useEffect(() => {
    setIsClient(true)
    if(session?.user){
        router.push(redirect || '/')
    }
},[router, session, redirect]) 


const handleClick = async () => {
    try {
        const result = await signIn('credentials', {
            redirect: false,
            email,
            password
        })

        if(result.error){
            toast.error(result.error)
        }
  
    } catch (error) {
        toast.error(getError(error))
    }
}

return (
<>
<Layout>
    <NavBar />
    <div className="container mt-5">
        <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto mt-3">
                <div className="card border-0 shadow rounded-3 my-5">
                    <div className="card-body p-4 p-sm-5">
                        <h5 className="card-title text-center mb-5 fw-light fs-2">Login</h5>
                        <form onSubmit={handleClick} method="POST">
                
                            {isClient ?   
                            <div className="form-floating mb-3">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="email@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label htmlFor="email">
                                    Email Address
                                </label>
                             </div> : <Spinner />}
                               
                            {isClient ? 
                                <div className="form-floating mb-3">
                                <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                />
                                <label htmlFor="password">
                                    Password
                                </label>
                             </div> :  <Spinner />}


                            <Button type="btn-primary btn-login">
                            Sign in
                            </Button>
                            <hr className="my-4" />
                            <Button type="btn-google">
                                <FaGoogle className="text-white fs-5 me-2" />  Sign in with Google
                            </Button>
                            <Button type="btn-facebook">
                                <FaFacebookF className="text-white fs-5 me-2" /> Sign in with Facebook
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Layout>
<Footer />
  </>
  )

}

export default Register