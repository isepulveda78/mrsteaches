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
import axios from "axios"
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


const handleClick = async (e) => {
    console.log(email)

    try {
        e.preventDefault()
            await axios.post('/api/auth/signup', {
            email,
            password
        })
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
<NavBar />

  <Footer />
  </>
  )

}

export default Register