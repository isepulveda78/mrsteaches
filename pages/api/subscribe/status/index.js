import Stripe from "stripe"
import User from "@/models/User"
import db from "@/utils/database"
import { getToken } from "next-auth/jwt"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const hander = async (req, res) =>{
    const getUserToken = await getToken({req})
    try {
        await db()
        const updateUser = await User.findById(getUserToken._id)

            const subscriptions = await stripe.subscriptions.list({
                customer: updateUser.stripe_customer_id,
                status: 'all',
                expand: ["data.default_payment_method"],
            })
            //console.log(subscriptions)
            updateUser.stripe_customer_id = subscriptions.data[0].customer
            updateUser.subscriptions = subscriptions.data[0].plan.id
            updateUser.subscription_status = subscriptions.data[0].cancel_at_period_end
            await updateUser.save()
            res.status(200).send({ message: 'Success', updateUser})
    } catch (error) {
        console.log(error)
    }
}

export default hander