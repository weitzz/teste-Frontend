import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <main className='text-center'>
            <p className='text-3xl'>Nao encontrado</p>
            <Link href={'/beer'}>voltar</Link>
        </main>
    )
}

export default NotFound