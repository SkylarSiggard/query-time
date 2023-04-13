

export const getSomething = async () => {

    // do fetch here
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/", { method: "GET" });

    if (res.status === 401) {
        // call logout session expired
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
    } else {
        const errorMessage = await res.text();
        return Promise.reject(new HttpError(errorMessage, res.status));
    }
};