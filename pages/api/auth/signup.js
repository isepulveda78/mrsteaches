import bcryptjs from 'bcryptjs'
import User from '@/models/User'
import db from '@/utils/database'

async function handler(req, res) {
  if (req.method !== 'POST') {
    return
  }
  const { email, password } = req.body
  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 5
  ) {
    res.status(422).json({
      message: 'Validation error',
    })
    return
  }

  await db.connect()

  const existingUser = await User.findOne({ email: email })
  if (existingUser) {
    res.status(422).json({ message: 'User exists already!' })
    await db.disconnect()
    return
  }

  const newUser = new User({
    email,
    password: bcryptjs.hashSync(password),
    isAdmin: false,
  })

  const user = await newUser.save()
  await db.disconnect()
  res.status(201).send({
    message: 'Created user!',
    _id: user._id,
    email: user.email,
    isAdmin: user.isAdmin,
  })
}

export default handler