import api from "./api";

export const deleteNickname = async (pokemon: string) => {
  const response = await api({
    name: `${pokemon}/nickname`,
    method: "DELETE",
    path: 'https://backend-server.com/',
  });
  return response;
};
