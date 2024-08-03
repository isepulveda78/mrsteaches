import Stripe from "stripe"
import User from "@/models/User"
import db from "@/utils/database"
import { getToken } from "next-auth/jwt"
import { ObjectId } from "mongoose"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const hander = async (req, res) =>{
    const getSessionEmail = await getToken({req})
   
    try {
        await db()
        const updateUser = await User.findOne({ email: getSessionEmail.email})
        
            const subscriptions = await stripe.subscriptions.list({
                customer: updateUser.stripe_customer_id,
                status: 'all',
                expand: ["data.default_payment_method"],
            })

            if(subscriptions.data[0].customer && subscriptions.data[0].status === 'active'){
            updateUser.stripe_customer_id = subscriptions.data[0].customer
            updateUser.subscriptions = subscriptions.data[0].plan.id
            updateUser.subscription_status = subscriptions.data[0].status
            await updateUser.save()
            res.status(200).send({ message: 'Success', updateUser})

            }else{
                    await User.updateOne(
                        {stripe_customer_id: updateUser.stripe_customer_id }, 
                        {$unset: {subscriptions: "", subscription_status: "", stripe_customer_id: ""}}
                    )
                res.status(200).send({ message: 'Success', updateUser})
            }
        
    } catch (error) {
        console.log(error)
    }
}

export default hander