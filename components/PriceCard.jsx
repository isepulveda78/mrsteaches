import { useSession } from "next-auth/react"

const PriceCard = ({ price, handleSubscription, userSubscriptions }) => {

    const { status, data: session } = useSession()

    const buttonText = () => {
      return session && session?.user ? "Buy the plan" : "Sign up"
    }
  
    return (
      <div className="col">
        <div className='card mb-4 rounded-3 shadow-sm'>
          <div className='card-header py-3 bg-primary text-white'>
            <h4 className="my-0 fw-normal">{price.nickname}</h4>
          </div>
  
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              {(price.unit_amount / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}{" "}
              <small className="text-muted fw-light">/mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li className="fw-bold"></li>
              <li>Free market analysis</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
  
            {/* <pre>{JSON.stringify(price, null, 4)}</pre> */}
  
            {/* <Link to="/register"> */}
            <button
              onClick={(e) => handleSubscription(e, price)}
              className='w-100 btn btn-lg bg-primary text-white'
            >
              {userSubscriptions && userSubscriptions.includes(price.id)
                ? "Access plan"
                : buttonText()}
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    )
  }

export default PriceCard