import { IBeer } from "@/types/beerTypes";

export const getAll = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_API_URL}`, {
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


export const getRandomApi = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_API_URL}/random`, {
            next: { revalidate: 320 }
        })

        if (!res.ok) {
            throw new Error('Nenhuma cerveja encontrada')
        }
        const data: IBeer[] = await res.json();

        if (data.length === 0) {
            throw new Error('Nenhuma cerveja encontrada');
        }
        return data[0]

    } catch (err) {
        throw new Error('Erro ao carregar api')
    }
}
