import React from 'react'
import Image from 'next/image'
import Beer from 'public/beer.png'
import Profile from 'public/Customer.svg'
import Link from 'next/link'
const Header = () => {
    return (
        <header className='w-full h-28 bg-slate-100 text-black px-2'>
            <div className='max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between'>
                <nav className='flex justify-center items-center gap-4'>
                    <Link href='/'>
                        <Image src={Beer} alt='logo-cerveja' width={50} height={50} priority />
                    </Link>
                    <Link href='/'>
                        Cervejas
                    </Link>
                    <Link href='/profile'>
                        Perfil
                    </Link>
                </nav>
                <div className='hidden sm:flex justify-center items-center gap-2'>
                    <span>Olá , usuario</span>
                    <Link href='/profile'>
                        <Image src={Profile} alt='logo-cerveja' width={30} height={30} priority />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header