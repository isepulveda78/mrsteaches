import db from "@/utils/database"
import User from "@/models/User"
import { getToken } from "next-auth/jwt"

const getHandler = async( req, res ) => {
    const userToken = await getToken({res})
    try {
        await db()
        const user = await User.findOne({ email: userToken.email })

        if(user.subscription_status === 'active'){
            res.status(200).send({ user })
        }else{
            res.send({ message: 'Not Authroized'})
        }
    } catch (error) {
        res.send({ message: 'Not Authroized'})
    }
}

export default getHandler