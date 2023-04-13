import React from "react";
import Link from 'next/link'

export default function HomePage() {

    return (
        <>
            <div>
                <h1>HomePage</h1>
                <li>
                    <Link href="/pokemon">Pokemon</Link>
                </li>
            </div>
        </>
    );
}