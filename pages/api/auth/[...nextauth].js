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
    async jwt({ token, user, trigger, session }) {
      if(trigger === "update"){
        return {...token, ...session.user}
      }
      return { ...token, ...user }
    },
    async signIn({ user }) {
      await db()
      const userExists = await User.findOne({ email: user.email })
      if (!userExists) {
        const username = user.name.slice(0, 20)
        const newPassword =  Math.random().toString(36).slice(2) + Math.random().toString(36).toUpperCase().slice(2)
        await User.create({
          email: user.email,
          password: bcryptjs.hashSync(newPassword),
          name: username,
          image: user.picture,
        })
      }
      return true
    },
    async session({ session, token }) {
      await db()
      const user = await User.findOne({ email: session.user.email })
    
      session.user.id = user._id.toString() 
         
      if (token?._id) session.user._id = token._id
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin
      if (token?.image) session.user.image = token.image
      if (session?.image) token.image = session.user.image
      return session
    },
      async redirect({ url, baseUrl }) {
        return baseUrl
      }
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await db()
        const user = await User.findOne({
          email: credentials.email,
        })
   
        if (user && bcryptjs.compareSync(credentials.password, user.password)) {
          return {
            _id: user._id,
            name: user.name,
            email: user.email,
            image: user.image,
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
    classroom: '/classroom',
    profile: '/profile'
  }
})

