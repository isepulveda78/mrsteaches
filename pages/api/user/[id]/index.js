import { getToken } from "next-auth/jwt"
import User from "@/models/User"
import db from "@/utils/database"

const handler = async (req, res) => {
    const user = await getToken({req})

        if(user){
            if (req.method === 'GET') {
                return getHandler(req, res, user);
            } else if (req.method === 'PUT') {
                return putHandler(req, res, user);
            } else if (req.method === 'DELETE') {
                return deleteHandler(req, res, user);
            } else {
                return res.status(400).send({ message: 'Method not allowed' });
            }
        }else{
            res.send({message: 'Not authorized'})
        }

}

const getHandler = async (req, res) => {
    await db()
    const user = await User.findById(req.query.id)
    res.send(user)
}

const putHandler = async (req, res) => {
    await db()
    const user = await User.findById(req.query.id)
    if(user){
        user.image = req.body.image
    }
        await user.save()
        res.send({message: 'Profile updated!'})
}

const deleteHandler = async (req, res) => {
    await db()
    const user = await User.findById(req.query.id)
    if(user){
        await user.remove()
        res.send({ message: 'Profile deleted'})
    }else{
        res.status(404).send({ message: 'User not found'})
    }
}
export default handler