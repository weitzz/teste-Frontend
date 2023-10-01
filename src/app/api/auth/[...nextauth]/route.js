import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'


export const authOption = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        CredentialsProvider({
            credentials: {
                username: { label: "Username", type: "text ", placeholder: "" },
                email: { label: "Email", type: "text ", placeholder: "" },
                password: { label: "Password", type: "password" },

            },
            async authorize(credentials, req) {
                const user = {
                    id: '1',
                    name: 'admin',
                    email: 'admin@admin.com'
                }

                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    pages: {
        signIn: '/login'
    }
}
const handler = NextAuth(authOption)


export { handler as GET, handler as POST }