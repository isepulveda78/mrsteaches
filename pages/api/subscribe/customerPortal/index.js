import db from "@/utils/database"
import User from "@/models/User"
import { getToken } from "next-auth/jwt"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const getHandler = async (req, res) => {
    const useToken = await getToken({req})
    try {
            await db()
            const user = await User.findOne({ email: useToken.email})
            const portalSession = await stripe.billingPortal.sessions.create({
                    customer: user.stripe_customer_id,
                    return_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success`,
        
            })
            res.send(portalSession.url)
    } catch (error) {
        console.log(error)
    }
}

export default getHandler