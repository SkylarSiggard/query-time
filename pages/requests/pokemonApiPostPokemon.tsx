import createError from 'http-errors';

export const changeNickname = async (pokemonNickname: string) => {
    //! Cant change the name on the real API so this is just a fake request 
    const res = await fetch(pokemonNickname, { method: "POST" });

    if (res.status === 401) {
        return;
    }
    if (res.status === 400) {
        const error = await res.text();
        const message = JSON.parse(error);
        throw message;
    }
    if (res.ok) {
        try {
            return await res.json();
        } catch (e) {
            return;
        }
    } else if (res.status === 404) {
        throw new Error(`Pokemon was unable to have this Nickname ${pokemonNickname}`);
    } else {
        const errorMessage = await res.text();
        return Promise.reject(createError(res.status, errorMessage));
    }
};

export default changeNickname;