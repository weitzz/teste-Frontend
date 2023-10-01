import { hash } from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()



export async function POST(request: Request) {
    try {
        const { nome, email, password } = await request.json();

        const hashedPassword = await hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                nome,
                email,
                password: hashedPassword
            }
        })
    } catch (e) {
        console.log({ e });
    }

    return NextResponse.json({ message: 'success' });
}