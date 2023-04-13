import React from "react";
import Link from 'next/link'
import getPokemon from './requests/pokemonApi'

export default function PokemonPage() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const pokemonName = formData.get('pokemon').toString();
        const pokemonData = await getPokemon(pokemonName);
        console.log(pokemonData);
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
        </>
    )
}
