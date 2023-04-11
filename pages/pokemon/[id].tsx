
import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios"

export default function PokemonPage() {

    const [searchValue, setSearchValue] = React.useState("");

    return (
        <div>
            <h1>Search Your Pokemon</h1>
            <input
                type="text"
                onChange={({ target: { value } }) => setSearchValue(value)}
                value={searchValue}
            />
        </div>
    );
}