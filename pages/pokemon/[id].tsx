import React from "react";
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import getPokemon from '../requests/pokemonApiGetPokemon';

export default function PokemonPage() {
    //todo I want a way to alert when there is an error. I made one but it would repeat. 
    const router = useRouter();
    const { id } = router.query;

    //! Sends Request Folder
    const { isLoading, isError, data } = useQuery(
        ['pokemon', id],
        () => getPokemon(id as string),
        { enabled: !!id }
    );
    //todo but your if loading return loading ui

    //! To Request Another Pokemon
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const pokemonName = formData.get('pokemon').toString();
        router.push(`/pokemon/${pokemonName}`);
    };

    //! To Request Nickname change
    //TODO Mutations
    // const mutation = useMutation({
    //     mutationFn: postTodo,
    //     onSuccess: () => {
    //         // Invalidate and refetch
    //         queryClient.invalidateQueries({ queryKey: ['todos'] })
    //     },
    // })

    return (
        <>
            <li>
                <Link href="/">Home</Link>
            </li>
            <form onSubmit={handleSubmit}>
                <label htmlFor="pokemon">Search Pokemon by name</label>
                <input type="text" id="pokemon" name="pokemon" required />
                <button type="submit">Submit</button>
            </form>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error loading data</p>}
            {data && (
                <>
                    <h1>{data.name}</h1>
                    <img src={data.sprites.front_default} alt={data.name} />
                    <img src={data.sprites.front_shiny} alt={data.name} />
                </>
            )}
            {/* <form onSubmit={handleNickname}>
                <label htmlFor="pokemonNickname">Change Pokemon's Nickname</label>
                <input type="text" id="pokemonNickname" name="pokemonNickname" required />
                <button type="submit">Submit</button>
            </form> */}
        </>
    );
}
