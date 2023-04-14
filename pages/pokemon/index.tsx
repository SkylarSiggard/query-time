import React from "react";
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function PokemonPage() {
    const router = useRouter();

    //! Sends Input to [id].tsx 
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
        </>
    )
}


