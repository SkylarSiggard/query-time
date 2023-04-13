import React from "react";
import Link from 'next/link'


export default function PokemonPage() {

    return (
        <>
            <div>
                <h1>PokemonPage</h1>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <form action="/[id].tsx" method="post"> 
                    <label htmlFor="pokemon">Pokemon:</label>
                    <input type="text" id="pokemon" name="pokemon" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}