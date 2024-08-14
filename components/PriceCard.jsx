import { useSession } from "next-auth/react"
import Link from "next/link"
import { FaRegCheckCircle } from "react-icons/fa"

const PriceCard = ({ price, handleSubscription, userSubscriptions }) => {

    const { status, data: session } = useSession()

    const buttonText = () => {
      return session && session?.user ? "Buy the plan" : "Sign up"
    }

    return (
      <div class="col-lg-4 mb-5 mb-lg-0">
      <div class="card pricing h-100">
          <div class="card-body p-5">
              <div class="text-center">
                  <div class="badge bg-light text-dark rounded-pill badge-marketing badge-sm">{price.nickname}</div>
                  <div class="pricing-price">
                      <sup>$</sup>
                      4.99
                      <span class="pricing-price-period">/mo</span>
                  </div>
              </div>
              <ul class="fa-ul pricing-list">
                  <li class="pricing-list-item">
                      <FaRegCheckCircle class="far fa-circle text-teal me-2"/>
                      <span class="text-dark">1 user</span>
                  </li>
                  <li class="pricing-list-item">
                      <FaRegCheckCircle class="far fa-circle text-teal me-2"/>
                      <span class="text-dark">Community support</span>
                  </li>
                  <li class="pricing-list-item">
                     <FaRegCheckCircle class="far fa-circle text-teal me-2"/>
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