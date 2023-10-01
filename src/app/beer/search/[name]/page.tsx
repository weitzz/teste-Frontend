import Card from '@/components/card'
import Container from '@/components/container'
import InputSearch from '@/components/inputSearch'
import { IBeer } from '@/types/beerTypes'
import Link from 'next/link'

const getData = async (name: string) => {
    console.log(name)

    try {
        const res = await fetch(`${process.env.NEXT_API_URL}?beer_name=${name}`)
        return res.json()

    } catch (err) {
        console.log(err)
        return null
    }
}

const SearchBeer = async ({ params: { name } }: { params: { name: string } }) => {
    const beerName: IBeer[] = await getData(name)

    console.log(beerName)

    return (
        <Container>
            <InputSearch />
            <h2 className='w-full mb-2 text-xl'>Cervejas encontradas:</h2>
            <main className='grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {!beerName && (
                    <p>Cerveja não encontrada</p>
                )}
                {beerName.map((item) => (
                    <Link href={`/beer/${item.id}`}>
                        <Card item={item} key={item.id} />
                    </Link>

                )
                )}

            </main>
        </Container>
    )
}

export default SearchBeer