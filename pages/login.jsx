import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { getError } from "@/utils/error"
import { FaGoogle, FaFacebookF } from "react-icons/fa"
import Spinner from "@/components/Spinner"
import Button from "@/components/Button"
import { toast } from "react-toastify"
import Layout from "@/components/Layout"
import { getProviders, signIn, useSession } from 'next-auth/react'


const Login = () => {

const [ isClient, setIsClient ] = useState(false)
const [ email, setEmail ] = useState('')
const [ password, setPassword ] = useState('')
const router = useRouter()
const { redirect } = router.query
const { data: session } = useSession()
const [providers, setProviders] = useState(null)

useEffect(() => {
    setIsClient(true)
    if(session?.user){
        router.push(redirect || '/')
    }
    const setAuthProviders = async () => {
        const res = await getProviders()
        setProviders(res)
      }
  
      setAuthProviders()
},[router, session, redirect]) 


const handleClick = async (e) => {
    e.preventDefault()
    try {
        const result = await signIn('credentials', {
          redirect: false,
          email,
          password,
        });
        if (result.error) {
          toast.error(result.error)
        }
      } catch (err) {
        toast.error(getError(err))
    }
}
return (
<Layout>
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


                             <button type="submit" className="btn btn-primary btn-login">Sign in</button>
                             <hr className="my-4" />

                        </form>
                        {providers && Object.values(providers).map(provider => {
                            if(provider.name === 'Credentials'){
                                return
                            }
                            return (
                            <div key={provider.id}>
                                <button onClick={async () => {await signIn(provider.id)}} className="btn btn-google">
                                    Sign in with {provider.name}
                                </button>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
</Layout>
)}

export default Login