import { IBeer } from '@/types/beerTypes';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
//import { getAll } from '@/api';
import PaginationControls from '../paginationControls';

const data = [
    'entry 1',
    'entry 2',
    'entry 3',
    'entry 4',
    'entry 5',
    'entry 6',
    'entry 7',
    'entry 8',
    'entry 9',
    'entry 10',
]

interface Props {
    page: string
    per_page: string | string[]
}
export const getAll = async ({ page, per_page }: Props) => {
    try {
        const res = await fetch(`${process.env.NEXT_API_URL}?page=${page}&per_page=${per_page}`, {
            next: { revalidate: 320 }
        })

        if (!res.ok) {
            throw new Error('Nenhuma cerveja encontrada')
        }
        const data: IBeer[] = await res.json();
        return data

    } catch (err) {
        throw new Error('Erro ao carregar api')
    }
}


const ListBeer = async ({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? '5'
    const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...
    const end = start + Number(per_page) // 5, 10, 15 ...


    const beer: IBeer[] = await getAll()
    const entries = data.slice(start, end)
    console.log(beer)
    return (
        <section className='grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {beer.map((item) => (
                <Link href={`/beer/${item.id}`}>
                    <div key={item.id} className='w-full bg-slate-100 rounded-lg p-4 mb-5 shadow-md'>
                        <Image
                            src={item.image_url}
                            alt={item.name}
                            width={80}
                            height={90}
                            quality={100}
                            priority
                        />
                        <div className='flex items-center'>

                            <h2>{item.name}</h2>
                            <p>{item.tagline}</p>
                            <span>{item.first_brewed}</span>

                        </div>

                    </div>
                </Link>
            ))}
            <PaginationControls
                hasNextPage={end < data.length}
                hasPrevPage={start > 0} />
        </section>
    )
}

export default ListBeer