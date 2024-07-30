import Stripe from "stripe"
import { getToken } from "next-auth/jwt"
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const handler = async (req, res) => {
    const allPrices = await stripe.prices.list()
    const prices = res.json(allPrices.data.reverse())
    return prices
}

export default handler
