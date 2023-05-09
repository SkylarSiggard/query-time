import api from "./api";

export const postNickname = async (pokemon: string, nickname: string) => {
  const response = await api({
    name: `${pokemon}/nickname`,
    method: "POST",
    path: 'https://backend-server.com/',
    body: JSON.stringify({ nickname }),
    headers: { 'Content-Type': 'application/json' },
  });
  return response;
};
