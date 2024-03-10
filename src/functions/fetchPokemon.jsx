import fetchFunction from "./fetchFunction";

const fetchPokemon = async (pokeIds) => {
  const data = await Promise.all(
    pokeIds.map(async (id) => {
      try {
        const data = await fetchFunction(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        return data;
      } catch (error) {
        console.error("Error:", error);
        return null;
      }
    })
  );

  return data;
};

export default fetchPokemon;
