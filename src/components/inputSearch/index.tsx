"use client"
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi';

const InputSearch = () => {
    const [search, setSearch] = useState('')
    const [result, setResult] = useState('')

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await fetch(`${process.env.NEXT_API_URL}?beer_name=${search}`);
            if (!response.ok) {
                throw new Error('Não foi possível realizar a pesquisa.');
            }
            const data = await response.json();
            console.log(data)
            console.log(search)
            setResult(data);
        } catch (error) {
            console.error('Erro durante a pesquisa:', error);
        }

    }
    return (
        <form onSubmit={handleSearch} className='w-full bg-slate-100 my-5 flex gap-2 items-center justify-between rounded-lg p-2  border-2 hover:border-2 border-yellow-300'>
            <input className="bg-slate-100 outline-none w-11/12" type="text" placeholder='Pesquise a sua cerveja' value={search} onChange={(e) => setSearch(e.target.value)} />
            <button type='submit'><FiSearch size={24} color="#f1c40f" /></button>
        </form>
    )
}

export default InputSearch