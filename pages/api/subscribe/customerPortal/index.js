import db from "@/utils/database"
import User from "@/models/User"
import { getToken } from "next-auth/jwt"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_API_SECRET)

const handler = async (req, res) => {
    const user = await getToken({req})

    try {
        if(user){
            await db()
            const foundUser = await User.findById(user._id)
            if(foundUser){
                const portalSession = await stripe.billingPortal.session.create({
                    customer: foundUser.customerId,
                    return_url: `${process.env.NEXT_PUBLIC_DOMAIN}/profle`
                })
                res.send(portalSession.url)
            }
        }else{
            res.send({ message: 'Not Authorized'})
        }
    } catch (error) {
        
    }
}

export default handler