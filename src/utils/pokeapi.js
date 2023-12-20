const baseUrl = "https://pokeapi.co/api/v2/pokemon";

const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status} ${res.statusText}`);
};

const getPokemon = async (value) => {
  const res = await fetch(`${baseUrl}/${value}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return processServerResponse(res);
};

const api = { getPokemon };
export default api;
