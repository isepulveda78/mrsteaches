import User from "@/models/User"
import { getToken } from "next-auth/jwt"
import db from "@/utils/database"
import Stripe from "stripe"
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const handler = async (req, res) => {
    const getUserToken = await getToken({req})
    try {
        await db()
        const user = await User.findById(getUserToken._id)
        const session = await stripe.checkout.sessions.create({
            mode: "subscription",
            payment_method_types: ['card'],
            line_items: [
                {
                    price: req.body.priceId,
                    quantity: 1
                },
            ],
            customer: user.stripe_customer_id,
            success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/profle`,
        })
        res.send(session.url)
    } catch (error) {
        console.log(error)
    }
}

export default handler