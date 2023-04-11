
import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios"

export default function IndexPage() {

    const [searchValue, setSearchValue] = React.useState("");
    const { isLoading, error, data } = useQuery({
        queryKey: ['allPokemon'],
        queryFn: () =>
            fetch('https://pokeapi.co/api/v2/pokemon/').then(
                (res) => res.json(),
            ), 
    }) 

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred'

    return (
        <div>
            <h1>{`Total Pokemon pulled ${data.count}`}</h1>
            {/* <h1>Search Your Pokemon</h1>
            <input
                type="text"
                onChange={({ target: { value } }) => setSearchValue(value)}
                value={searchValue}
            /> */}
        </div>
    );
}