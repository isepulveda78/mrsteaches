import { useSession } from "next-auth/react"
import Link from "next/link"
import { FaRegCheckCircle } from "react-icons/fa"
import { useState, useEffect } from 'react'
import { toast } from "react-toastify"
import axios from "axios"
const PriceCard = ({ price, handleSubscription, userSubscriptions }) => {

  const { data: session, update } = useSession()
  const [ subscription, setSubscriptions ] = useState('')

    useEffect(() => {
        if(session){
         getUserSubscriptionStatus()
        }
     },[session])

    const getUserSubscriptionStatus = async () => {
       
        try {
           const { data } = await axios.get(`/api/subscribe/access`)
           if(data.user){
                setSubscriptions(data.user.subscription_status)
           } else {
              toast.error('Not authorized!')
           }  
        } catch (error) {
            toast.error(error)
        }
    }

    return (
      <div className="col-lg-4 mb-5 mb-lg-0">
      <div className="card pricing h-100">
          <div className="card-body p-5">
              <div className="text-center">
                  <div className="badge bg-light text-dark rounded-pill badge-marketing badge-sm">{price.nickname}</div>
                  <div className="pricing-price">
                      <sup>$</sup>
                      4.99
                      <span className="pricing-price-period">/mo</span>
                  </div>
              </div>
              <ul className="fa-ul pricing-list">
                  <li className="pricing-list-item">
                      <FaRegCheckCircle className="far fa-circle text-teal me-2"/>
                      <span className="text-dark">1 user</span>
                  </li>
                  <li className="pricing-list-item">
                      <FaRegCheckCircle className="far fa-circle text-teal me-2"/>
                      <span className="text-dark">Community support</span>
                  </li>
                  <li className="pricing-list-item">
                     <FaRegCheckCircle className="far fa-circle text-teal me-2"/>
                      All Games
                  </li>
              </ul>

            <div className="d-grid mt-2">
              { subscription === 'active' ? 
                    ( <Link
                      href="/lessons"
                      className="btn btn-danger btn-lg text-white">
                      Have fun teaching!
                      </Link> 
                    )
                    :
                    ( <button 
                      onClick={(e) => handleSubscription(e, price)}
                      className="btn btn-primary btn-lg text-white"
                      >Subscribe</button> 
                    )
                }
             </div>
          </div>
      </div>
  </div>
    )
  }

export default PriceCard