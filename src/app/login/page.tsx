"use client"
import Container from "@/components/container"
import Button from "@/components/forms/button"
import Input from "@/components/forms/input"
import SignInButton from "@/components/signInButton"
import useForm from "@/hooks/useForm"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Form from "./form"



const Login = () => {

    return (
        <main className="mt-6">
            <Container>
                <h2 className="text-base text-slate-500 font-semibold">Login</h2>
                <Form />
            </Container>
        </main>






    )
}

export default Login