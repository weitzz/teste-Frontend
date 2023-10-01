import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { hash } from "bcrypt"

export const POST = async (req: Request) => {
    try {
        const body = await req.json()
        const { email, username, password } = body

        const existEmail = await db.user.findUnique({
            where: { email: email }
        })
        if (existEmail) {
            return NextResponse.json({
                user: null,
                message: "Já existe um cadastro com esse email"
            }, { status: 409 })
        }

        const existUsername = await db.user.findUnique({
            where: { username: username }
        })
        if (existUsername) {
            return NextResponse.json({
                user: null,
                message: "Este usuário ja possui um cadastro"
            }, { status: 409 })
        }
        const hashPassword = await hash(password, 10)
        const newUser = await db.user.create({
            data: {
                username,
                email,
                password: hashPassword
            }
        })


        return NextResponse.json({ user: newUser, message: "Usuário criado com sucesso." }, { status: 201 })
    }
    catch (error) {
        console.log(error)
    }
}