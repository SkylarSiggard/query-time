import createError from "http-errors";

type Pokemon = {
  name: string,
  path: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body?: string,
  headers?: { [key: string]: string },
}

export const api = async (req: Pokemon) => {
  const res = await fetch(`${req.path}${req.name}`, {
    method: req.method,
    body: req.body,
    headers: req.headers,
  });
  if (res.status === 401) {
    return;
  }
  if (res.status === 400) {
    const error = await res.text();
    const message = JSON.parse(error);
    throw message;
  }
  if (res.status === 403) {
    const error = await res.text();
    const message = JSON.parse(error);
    throw message;
  }
  if (res.status === 404) {
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
    return Promise.reject(createError(res.status, errorMessage));
  }
};

export default api;


