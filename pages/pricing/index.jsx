import Layout from "@/components/Layout"
import { useEffect, useState } from "react"
import axios from "axios"
import PriceCard from "@/components/PriceCard"
import { useRouter } from "next/router"

const Prices = () => {
    const [ prices, setPrices ] = useState([])
    const [ userSubscriptions, setUserSubscription ] = useState([])
    const router = useRouter()

    useEffect(()=> {
        fetchPrices()
    },[])
    
    const fetchPrices = async () => {
        const { data } = await axios.get('/api/subscribe/prices')
        setPrices(data)
    }

const handleClick = async (e, price) => {
    e.preventDefault()
    const { data } = await axios.post("/api/subscribe", {
        priceId: price.id
     })
        window.open(data)
}
  return (
    <Layout>
        <div className="wrapper">
            <div className="container">
                <div className="page-section">
                    {prices && prices.map((price) => {
                        if(price.nickname !== "Monthly"){
                            return
                        }
                        return (
                            <PriceCard 
                            key={price.id}
                            price={price}
                            handleSubscription={handleClick}
                            userSubscriptions={userSubscriptions}
                        />
                        )
                    })}
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Prices