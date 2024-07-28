import axios from "axios"
import { useEffect } from "react"
import { useRouter } from "next/router"
import Spinner from "@/components/Spinner"
import Layout from "@/components/Layout"

const Success = () => {

    const router = useRouter()

    useEffect(() => {
        getSubscriptionStatus()
    },[])

    const getSubscriptionStatus = async () => {
        const res = await axios.get('/api/subscribe/status')

        if(res.status === 200){
            router.push('/profile')
        }else{
            router.push('/')
        }
    }

  return (
    <Layout>
        <Spinner />
    </Layout>
  )
}

export default Success