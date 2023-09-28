import { getRandomApi } from '@/api'
import { IBeer } from '@/types/beerTypes'
import React from 'react'
import Image from 'next/image'
import Notfound from 'public/beer.png'

const RandomBeer = async () => {
    const getRandom: IBeer = await getRandomApi()
    return (
        <div className="flex items-center gap-3 ">
            {getRandom.image_url ? (
                <Image
                    src={getRandom.image_url}
                    alt={getRandom.name}
                    width={80}
                    height={100}
                    quality={100}
                    sizes="(max-width: 768px) 100vw,(max-width: 1200px) 4vw"
                    className="max-h-96"
                    priority
                />
            ) : <Image
                src={Notfound}
                alt={getRandom.name}
                width={80}
                height={100}
                quality={100}
                priority
            />}

            <aside className="text-left">
                <h2 className=" font-semibold text-xl mt-8 mb-5">{getRandom.name}</h2>
                <p className=" font-normal text-base mt-8 mb-5">{getRandom.tagline}</p>
            </aside>
        </div>
    )
}

export default RandomBeer