import React from 'react'
import Image from 'next/image'
import Beer from 'public/beer.png'
import { FiUser } from 'react-icons/fi'
import Link from 'next/link'
const Header = () => {
    return (
        <header className='w-full h-28 bg-slate-100 text-black px-2 border-b-2 border-yellow-300 '>
            <div className='max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between'>
                <nav className='flex justify-center items-center gap-4'>
                    <Link href='/' rel="preload">
                        <Image src={Beer} alt='logo-cerveja' width={50} height={50} priority />
                    </Link>
                    <Link href='/' rel="preload">
                        Cervejas
                    </Link>
                    <Link href='/profile' rel="preload">
                        Perfil
                    </Link>
                </nav>
                <div className='hidden sm:flex justify-center items-center gap-2'>
                    <span>Olá , usuario</span>
                    <Link href='/profile' rel="preload">
                        <FiUser size={24} color="#f1c40f" />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header