
import User from '@/models/User'
import db from '@/utils/database'
import { signToken } from '@/utils/auth'


const handler = async (req, res) => {
  try {
    await db()

    const newUser = new User({
        email: req.body.email,
        password: req.body.password,
        isAdmin: false,
      })

      const user = await newUser.save()

      const token = signToken(user)
      res.status(200).send({
        token,
        _id: user._id,
        email: user.email,
        isAdmin: user.isAdmin,
      })

  } catch (error) {
    console.log(error)
  }


}

export default handler