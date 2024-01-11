import fetchFunction from "./fetchFunction";

const fetchAllTypes = async () => {
  const allTypes = [];

  for (let i = 1; i <= 18; i++) {
    const typeData = await fetchFunction(
      `https://pokeapi.co/api/v2/type/${i}/`
    );
    const typeObject = {
      type: typeData.name,
      pokemon: typeData.pokemon
        .map((pokemon) => pokemon.pokemon.url.split("/")[6])
        .filter((number) => number <= 1025),
    };
    allTypes.push(typeObject);
  }

  return allTypes;
};

export default fetchAllTypes;
