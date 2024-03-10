import fetchFunction from "./fetchFunction";

const fetchAllPokemon = async () => {
  const allPokemon = await fetchFunction(
    "https://pokeapi.co/api/v2/pokemon?limit=1025"
  );
  return allPokemon;
};

export default fetchAllPokemon;
