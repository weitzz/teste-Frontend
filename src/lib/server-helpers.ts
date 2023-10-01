import { prisma } from "@/lib/db"

export const connectDb = async () => {
    try {
        await prisma.$connect()
    } catch (error) {
        console.log(error)
    }
}