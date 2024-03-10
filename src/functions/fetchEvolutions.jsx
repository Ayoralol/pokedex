import fetchFunction from "./fetchFunction";

const fetchEvolutions = async (chainIds) => {
  const data = await Promise.all(
    chainIds.map(async (id) => {
      try {
        const data = await fetchFunction(
          `https://pokeapi.co/api/v2/evolution-chain/${id}`
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

export default fetchEvolutions;
