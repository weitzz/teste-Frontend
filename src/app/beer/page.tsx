import Container from '@/components/container'
import InputSearch from '@/components/inputSearch'
import ListBeer from '@/components/listBeer'
import RandomBeer from '@/components/randomBeer'
import React from 'react'

const Beer = () => {
    return (
        <main className="w-full">
            <Container>
                <h1 className="text-center font-semibold text-xl mt-8 mb-5 text-slate-800">Cerveja do dia</h1>
                <section className="w-full bg-slate-100 rounded-lg flex justify-around py-3 ">
                    <RandomBeer />
                </section>
                <InputSearch />
                <h1 className="text-center font-semibold text-xl mt-8 mb-5 text-slate-800">Cervejas</h1>
                <ListBeer />
            </Container>
        </main>
    )
}

export default Beer