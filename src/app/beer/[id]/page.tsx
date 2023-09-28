"use client"
import Modal from '@/components/modal'
import { IBeer } from '@/types/beerTypes';

interface PageProps {
    params: { id: string, name: string }
    searchParams: string
}


const getId = async (id: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_API_URL}/${id}`, {
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

const BeerDetails = async ({ params }: PageProps) => {
    const beer: IBeer[] = await getId(params.id)
    const onClose = async () => { alert('abriu') }
    const onOk = async () => { alert('fechou') }

    console.log(beer)
    return (

        <Modal title='teste' onClose={onClose} onOk={onOk}>
            {beer.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                </div>
            ))}
        </Modal>

    )
}

export default BeerDetails