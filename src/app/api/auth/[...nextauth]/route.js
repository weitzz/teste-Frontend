import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'
import bcrypt from 'bcrypt'
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const authOption = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            name: 'credentialsGoogle',
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                nome: {},
                email: {},
                password: {}
            },
            async authorize(credentials) {
                if (!credentials.email || !credentials.password) {
                    return null
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if (!user) {
                    return null
                }
                const passwordCheck = await bcrypt.compare(credentials.password, user.hashpassword)

                if (!passwordCheck) {
                    return null
                }

                return user
            }
        })

    ],
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === 'development'
}
const handler = NextAuth(authOption)


export { handler as GET, handler as POST }