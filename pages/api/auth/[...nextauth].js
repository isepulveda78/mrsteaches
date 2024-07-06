import bcryptjs from 'bcryptjs'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import User from '@/models/User'
import db from '@/utils/database'
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id
      if (user?.isAdmin) token.isAdmin = user.isAdmin
      return token
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin
      return session
    },
    async signIn({ profile }) {
        // 1. Connect to database
        await db()
        // 2. Check if user exists
        const userExists = await User.findOne({ email: profile.email })
        // 3. If not, then add user to database
        if (!userExists) {
          // Truncate user name if too long
          const username = profile.name.slice(0, 20)

          const randomPassword = Math.random().toString(36).slice(2) + Math.random().toString(36).toUpperCase().slice(2)
  
          await User.create({
            email: profile.email,
            name: username,
            password: randomPassword,
            image: profile.picture,
          })
        }
        // 4. Return true to allow sign in
        return true
      },
      // Modifies the session object
      async session({ session }) {
        // 1. Get user from database
        const user = await User.findOne({ email: session.user.email })
        // 2. Assign the user id to the session
        session.user.id = user._id.toString()
        session.user.name = user.name.toString()
        session.user.email = user.email.toString()
        // 3. return session
        return session
      },
      async redirect({ url, baseUrl }) {
        // Allows relative callback URLs
        if (url.startsWith(process.env.NEXT_PUBLIC_DOMAIN)) return `${baseUrl}`
        // Allows callback URLs on the same origin
        else if (new URL(url).origin === baseUrl) return url
        return baseUrl
      }
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await db.connect()
        const user = await User.findOne({
          email: credentials.email,
        })
        await db.disconnect()
        if (user && bcryptjs.compareSync(credentials.password, user.password)) {
          return {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
          }
        }
        throw new Error('Invalid email or password')
      },
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
  ],
})

