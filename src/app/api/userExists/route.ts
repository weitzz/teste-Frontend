import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'
import User from '@/models/user'
import { connectMongoDB } from '@/lib/mongodb';



export async function POST(request: Request) {
    try {
        const { email } = await request.json();
        const user = await User.findOne({ email }).select("_id")
        console.log(user)
        return NextResponse.json({ user });

    } catch (e) {
        console.log({ e });
    }

    return NextResponse.json({ message: 'success' });
}