import { IBeer } from '@/types/beerTypes';
import Link from 'next/link';
import { getAll } from '@/api';
import Card from '../card';



const ListBeer = async () => {
    const beer: IBeer[] = await getAll()
    return (

        <section className='grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {beer.map((item) => (
                <Link href={`/beer/${item.id}`}>
                    <Card item={item} key={item.id} />
                </Link>
            ))}

        </section>

    )
}

export default ListBeer