import bcryptjs from 'bcryptjs'
import User from '@/models/User'
import db from '@/utils/database'

async function handler(req, res) {
  if (req.method !== 'POST') {
    return
  }
  const {name, email, password } = req.body
  if (
    !name ||
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 8
  ) {
    res.status(422).json({
      message: 'Validation error. Password must be at least 8 characters.',
    })
    return
  }

  await db()

  const existingUser = await User.findOne({ email: email })
  if (existingUser) {
    res.status(422).json({ message: 'User exists already!' })
    return
  }

  const newUser = new User({
    name,
    email,
    password: bcryptjs.hashSync(password),
    isAdmin: false,
  })

  const user = await newUser.save()
  res.status(201).send({
    message: 'Created user!',
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  })
}

export default handler