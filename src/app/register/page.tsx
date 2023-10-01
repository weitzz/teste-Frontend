import Container from '@/components/container'
import Button from '@/components/forms/button'
import Input from '@/components/forms/input'
import Link from 'next/link'
import React from 'react'
import Form from './form'

const Register = async () => {


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
    }
    return (

        <Container>
            <h2 className='flex items-center justify-center mt-4 text-lg text-slate-700'>Registar</h2>
            <Form />
            {/* <div className=" flex flex-col sm:justify-center items-center bg-slate-100 ">
                    <h2 className="text-base text-slate-500 font-semibold">Registrar</h2>
                    <form onSubmit={ }>
                        <Input label='Email' placeholder="email@email.com" type="text" name={""} {...username} />
                        <Input label='Senha' placeholder="***" type="password" name={""} {...password} />
                        <Button>Entrar</Button>
                    </form>
                    <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-yellow-300 after:ml-4 after:block after:h-px after:flex-grow after:bg-yellow-300'>
                        ou
                    </div>
                    <Button onClick={() => signIn('google')}>
                        Entrar com Google
                    </Button>
                    <p className='text-center text-sm text-gray-600 mt-2'>
                        Se você  não tem uma conta, por favor
                        <Link className='text-blue-500 hover:underline' href='/register'>
                            Registre-se
                        </Link>
                    </p>
                </div> */}

        </Container>


    )
}

export default Register