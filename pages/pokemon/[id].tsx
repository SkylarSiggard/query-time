import React from "react";
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import getPokemon from '../requests/pokemonApi';

export default function PokemonPage() {
    const router = useRouter();
    const { id } = router.query;

    const { isLoading, isError, data } = useQuery(
        ['pokemon', id],
        () => getPokemon(id as string),
        { enabled: !!id }
    );

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const pokemonName = formData.get('pokemon').toString();
        router.push(`/pokemon/${pokemonName}`);
    };

    return (
        <>
            <li>
                <Link href="/">Home</Link>
            </li>
            <form onSubmit={handleSubmit}>
                <label htmlFor="pokemon">Pokemon</label>
                <input type="text" id="pokemon" name="pokemon" required />
                <button type="submit">Submit</button>
            </form>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error loading data</p>}
            {data && (
                <>
                    <h1>{data.name}</h1>
                    <img src={data.sprites.front_default} alt={data.name} />
                </>
            )}
        </>
    );
}
