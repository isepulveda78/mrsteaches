import db from "@/utils/database"
import User from "@/models/User"
import { getToken } from "next-auth/jwt"

const getHandler = async( req, res ) => {
    const getSessionEmail = await getToken({req})
    try {
        await db()
        const user = await User.findOne({ email: getSessionEmail.email})
       
        if(user.subscription_status === 'active'){
            res.status(200).send({ user })
        }
    } catch (error) {
        res.send({ message: 'Not Authroized'})
    }
}

export default getHandler