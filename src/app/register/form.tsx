'use client';

import Button from '@/components/forms/button';
import Input from '@/components/forms/input';
import useForm from '@/hooks/useForm';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation'

export default function Form() {
    const router = useRouter()
    const email = useForm('email')
    const password = useForm('')
    const nome = useForm('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email.validate() && password.validate()) {
            const formData = new FormData(e.currentTarget);
            const requestBody = {
                nome: formData.get('nome'),
                email: formData.get('email'),
                password: formData.get('password'),
            };
            const requestOptions = {
                method: 'POST',
                body: JSON.stringify(requestBody),
            };
            try {
                const response = await fetch(`/api/register`, requestOptions);
                const userInfo = await response.json();
                console.log({ response });
                console.log(userInfo);
                router.push('/login');
            } catch (error) {
                console.error('Error al enviar la solicitud:', error);
            }
        }
    };
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 mx-auto max-w-md mt-10"
            >
                <Input id={'nome'} label='Nome' placeholder="" type="text" name={"nome"}  {...nome} />
                <Input id={'email'} label='Email' placeholder="email@email.com" type="text" name={"email"}  {...email} />
                <Input id={'password'} label='Senha' placeholder="***" type="password" name={"password"}  {...password} />
                <Button type="submit">Registrar</Button>

            </form>
            <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-yellow-300 after:ml-4 after:block after:h-px after:flex-grow after:bg-yellow-300'>
                ou
            </div>
            <div className='flex flex-col gap-2 mx-auto max-w-lg mt-10 '>

                <Button onClick={() => signIn('google')}>
                    Entrar com Google
                </Button>
                <p className='text-center text-sm text-gray-600 mt-2'>
                    Se você tem uma conta, por favor
                    <Link className='text-blue-500 hover:underline' href='/login'>
                        Login
                    </Link>
                </p>
            </div>
        </>
    );
}