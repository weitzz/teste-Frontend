'use client';
import Button from '@/components/forms/button';
import Input from '@/components/forms/input';
import useForm from '@/hooks/useForm';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function Form() {
    const email = useForm('email')
    const password = useForm('')
    const router = useRouter();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email.validate() && password.validate()) {

            const formData = new FormData(e.currentTarget);
            const response = await signIn('credentials', {
                email: formData.get('email'),
                password: formData.get('password'),
                redirect: false,
            });
            router.push('/');
            console.log({ response });
            if (!response?.error) {

                router.refresh();
            }
        }

    };
    return (
        <>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-auto max-w-lg mt-10">
                <Input label='Email' placeholder="email@email.com" type="text" name={""} {...email} />
                <Input label='Senha' placeholder="***" type="password" name={""} {...password} />
                <Button type="submit">Entrar</Button>
            </form>
            <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-yellow-300 after:ml-4 after:block after:h-px after:flex-grow after:bg-yellow-300'>
                ou
            </div>
            <div className='flex flex-col gap-2 mx-auto max-w-lg mt-10 '>

                <Button onClick={() => signIn('google')}>
                    Entrar com Google
                </Button>
                <p className='text-center text-sm text-gray-600 mt-2'>
                    Se você  não tem uma conta, por favor
                    <Link className='text-blue-500 hover:underline' href='/register'>
                        Registre-se
                    </Link>
                </p>
            </div>
        </>
    );
}