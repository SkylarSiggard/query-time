import api from "./api";

export const getPokemon = async (pokemon?: string) => {
  const pokemonResponse = await api({
    name: pokemon || "",
    method: "GET",
    path: "https://pokeapi.co/api/v2/pokemon/",
  });

  try {
    /// This is a fake endpoint that doesn't exist
    const nicknameResponse = await api({
      name: `${pokemon}/nickname`,
      method: "GET",
      path: "https://backend-server.com/",
    });

    return {
      ...pokemonResponse,
      nickname: nicknameResponse.nickname,
    };
  } catch (error) {
    console.error("Error fetching nickname:", error);

    return {
      ...pokemonResponse,
      nickname: null,
    };
  }
};
