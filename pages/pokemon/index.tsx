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
            </div>
        </>
    );
}