'use client'
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Button from "../forms/button"


const SignInButton = () => {
  const { data: session } = useSession()
  return (
    <>
      {session ? (
        <div className='hidden sm:flex justify-center items-center gap-2' >
          <span>Olá, {session?.user?.name}</span>
          <Button onClick={() => signOut()}>
            Sair
          </Button>
          <Image src={session?.user?.image} width={30} height={30} quality={100} className="rounded-full" />
        </div >

      ) : (
        <div className='hidden sm:flex justify-center items-center gap-2' >
          <Button onClick={() => signIn('google')}>
            Entrar
          </Button>
        </div>

      )}
    </>
  )

}

export default SignInButton