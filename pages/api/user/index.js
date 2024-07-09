import { getToken } from "next-auth/jwt"
import User from "@/models/User"
import db from "@/utils/database"
import bcryptjs from 'bcryptjs'

const handler = async (req, res) => {
    const user = await getToken({req})
    if(!user || (user && !user.isAdmin)){
        return res.status(401).send('Sigin required')
    }

    if (req.method === 'GET') {
        return getHandler(req, res, user);
      } else if (req.method === 'PUT') {
        return putHandler(req, res, user);
      } else if (req.method === 'DELETE') {
        return deleteHandler(req, res, user);
      } else {
        return res.status(400).send({ message: 'Method not allowed' });
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
        user.name = req.body.name
        user.image = req.body.image
        user.password = bcryptjs.hashSync(req.body.password)
        await user.save()
        res.send({message: 'Profile updated!'})
    }else{
        res.status(404).send({message: 'Profile not found'})
    }
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