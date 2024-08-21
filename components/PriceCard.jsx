import { useSession } from "next-auth/react"
import Link from "next/link"
import { FaRegCheckCircle } from "react-icons/fa"

const PriceCard = ({ price, handleSubscription, userSubscriptions }) => {

    const { status, data: session } = useSession()

    const buttonText = () => {
      return session && session?.user ? "Buy the plan" : "Sign up"
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
              <button
              onClick={(e) => handleSubscription(e, price)}
              className='w-100 btn btn-lg bg-primary text-white mt-3'
            >
              {userSubscriptions && userSubscriptions.includes(price.id)
                ? "Access plan"
                : buttonText()}
            </button>
          </div>
      </div>
  </div>
    )
  }

export default PriceCard