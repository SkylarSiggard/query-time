import React, { useState } from "react";
import Link from "next/link";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getPokemonByName } from "../requests/get";
import { postNickname } from "../requests/post";
import { deleteNickname } from "../requests/delete";

export default function PokemonPage() {
  const router = useRouter();
  const { id } = router.query;
  const addNicknameMutation = useMutation((nickname: string) =>
    postNickname(data.name, nickname)
  );
  const deleteNicknameMutation = useMutation(() => deleteNickname(data.name));
  const [nickname, setNickname] = useState("");

  //! Sends Request Folder
  const { isLoading, isError, data } = useQuery(
    ["pokemon", id],
    () => getPokemonByName(id as string),
    { enabled: !!id }
  );

  //! To Request Another Pokemon
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const pokemonName = formData.get("pokemon").toString();
    router.push(`/pokemon/${pokemonName}`);
  };
  //! To Set Nickname
  const handleNicknameSubmit = async () => {
    try {
      await addNicknameMutation.mutateAsync(nickname);
    } catch (error) {
      console.error("Error saving nickname:", error);
    }
  };
  //! To Delete Nickname
  const handleNicknameDelete = async () => {
    try {
      await deleteNicknameMutation.mutateAsync();
      setNickname("");
    } catch (error) {
      setNickname("")
      console.error("Error deleting nickname:", error);
    }
  };

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
          <label htmlFor="nickname">Nickname</label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <button type="button" onClick={handleNicknameSubmit}>
            Set Nickname
          </button>
          {nickname.length > 0 && (
            <button type="button" onClick={handleNicknameDelete}>
              Delete Nickname
            </button>
          )}
        </>
      )}
    </>
  );
}
