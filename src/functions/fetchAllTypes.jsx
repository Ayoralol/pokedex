import fetchFunction from "./fetchFunction";

const fetchAllTypes = async () => {
  const allTypes = [];
  const fetchPromises = [];

  for (let i = 1; i <= 18; i++) {
    const fetchPromise = fetchFunction(
      `https://pokeapi.co/api/v2/type/${i}`
    ).then((typeData) => {
      const pokemonNumbers = typeData.pokemon.map(
        (poke) => poke.pokemon.url.split("/")[6]
      );
      allTypes.push({type: typeData.name, pokemon: pokemonNumbers});
    });
    fetchPromises.push(fetchPromise);
  }

  await Promise.all(fetchPromises);
  return allTypes;
};

export default fetchAllTypes;
