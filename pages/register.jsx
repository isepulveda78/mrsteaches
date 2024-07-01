import { useState, useEffect, useContext } from "react"
import { useRouter } from "next/router"
import { Store } from "@/utils/Store"
import Cookies from "js-cookie"
import { getError } from "@/utils/error"
import NavBar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { FaGoogle, FaFacebookF } from "react-icons/fa"
import { useForm, Controller } from 'react-hook-form'
import Spinner from "@/components/Spinner"
import Button from "@/components/Button"
import { toast } from "react-toastify"
import axios from "axios"

const Register = () => {

const [ isClient, setIsClient ] = useState(false)
const [ email, setEmail ] = useState('')
const [ password, setPassword ] = useState('')
const { state, dispatch } = useContext(Store)
const { userInfo } = state
const router = useRouter()
const { redirect } = router.query

useEffect(() => {
    setIsClient(true)
    if(userInfo){
        router.push('/')
    }
},[]) 


const handleClick = async (e) => {
    console.log(email)

    try {
        e.preventDefault()
        const { data } = await axios.post('/api/users/register', {
            email,
            password
        })
        if(data.error){
            toast.error(data.error)
        }else{
            dispatch({ type: 'USER_LOGIN', payload: data });
            Cookies.set('userInfo', data);
            toast.success('You are logged in.')
            router.push(redirect || '/');
        }
    } catch (error) {
        toast.error(error)
    }
}

return (
<>
<NavBar />
    <div className="container mt-5">
        <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto mt-3">
                <div className="card border-0 shadow rounded-3 my-5">
                    <div className="card-body p-4 p-sm-5">
                        <h5 className="card-title text-center mb-5 fw-light fs-2">Register</h5>
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
  <Footer />
  </>
  )

}

export default Register