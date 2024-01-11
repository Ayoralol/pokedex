import React, {useState, useEffect} from "react";
import "./App.scss";
import Grid from "./containers/Grid/Grid";
import Search from "./containers/Search/Search";
import generateRandom from "./functions/generateRandom";
import fetchPokemon from "./functions/fetchPokemon";
import fetchPokemonSpecies from "./functions/fetchPokemonSpecies";
import fetchEncounters from "./functions/fetchEncounters";
import fetchEvolutions from "./functions/fetchEvolutions";
import fetchAllPokemon from "./functions/fetchAllPokemon";

function App() {
  const [numbers, setNumbers] = useState([59, 133]);
  const [pokeData, setPokeData] = useState([]);
  const [pokeSpec, setPokeSpec] = useState([]);
  const [pokeEnc, setPokeEnc] = useState([]);
  const [pokeEvo, setPokeEvo] = useState([]);
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const allPoke = await fetchAllPokemon();
      setAllPokemon(allPoke);
    };

    fetchAll();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingFetch(true);
      const regData = await fetchPokemon(numbers);
      const speciesData = await fetchPokemonSpecies(numbers);
      const encountersData = await fetchEncounters(numbers);

      const evoUrls = speciesData.map((spec) => spec.evolution_chain.url);
      const evoIds = evoUrls.map((url) => url.split("/")[6]);
      const evoData = await fetchEvolutions(evoIds);

      setPokeData(regData);
      setPokeSpec(speciesData);
      setPokeEnc(encountersData);
      setPokeEvo(evoData);
      setLoadingFetch(false);
    };

    fetchData();
  }, [numbers]);

  const regenerateNumbers = () => {
    setNumbers(generateRandom(6));
  };

  const handleSearchResults = (results) => {
    setNumbers(results);
  };

  return (
    <>
      <button onClick={regenerateNumbers}>Generate Random Team</button>
      <Search allPokemon={allPokemon} onSearchResults={handleSearchResults} />
      {!loadingFetch ? (
        <Grid
          loadingFetch={loadingFetch}
          pokeMain={pokeData}
          pokeEnc={pokeEnc}
          pokeSpec={pokeSpec}
          pokeEvo={pokeEvo}
        />
      ) : (
        <p>Loading Pokemon...</p>
      )}
    </>
  );
}

export default App;

// generate numbers OR search functionality
// => fetch that data
// => get data parameters
// => pass data to grid
