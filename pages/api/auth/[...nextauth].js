import bcryptjs from 'bcryptjs'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import User from '@/models/User'
import db from '@/utils/database'
import GoogleProvider from "next-auth/providers/google"
import { disconnect } from 'mongoose'


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

      const user = await User.findOne({ email: session.user.email })

      session.user.id = user._id.toString()
      session.user.name = user.name.toString()
      session.user.email = user.email.toString()

      return session
    },

      async redirect({ url, baseUrl }) {
        return baseUrl
      }
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await db
        const user = await User.findOne({
          email: credentials.email,
        })
   
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
  pages: {
    signIn: '/login',
    signOut: '/',
    classroom: '/classroom'
  }
})

