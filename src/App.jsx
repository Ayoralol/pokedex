import React, {useState, useEffect} from "react";
import "./App.scss";
import Grid from "./containers/Grid/Grid";
import generateRandom from "./functions/generateRandom";
import fetchPokemon from "./functions/fetchPokemon";
import fetchPokemonSpecies from "./functions/fetchPokemonSpecies";
import fetchEncounters from "./functions/fetchEncounters";
import fetchEvolutions from "./functions/fetchEvolutions";

function App() {
  const [numbers, setNumbers] = useState(generateRandom());
  const [pokeData, setPokeData] = useState([]);
  const [pokeSpec, setPokeSpec] = useState([]);
  const [pokeEnc, setPokeEnc] = useState([]);
  const [pokeEvo, setPokeEvo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
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
      console.log(regData);
      console.log(speciesData);
      console.log(encountersData);
      console.log(evoData);
    };

    fetchData();
  }, [numbers]);

  const regenerateNumbers = () => {
    setNumbers(generateRandom());
  };

  return (
    <>
      <button onClick={regenerateNumbers}>Generate</button>
      <Grid
        pokeMain={pokeData}
        pokeEnc={pokeEnc}
        pokeSpec={pokeSpec}
        pokeEvo={pokeEvo}
      />
    </>
  );
}

export default App;

// generate numbers OR search functionality
// => fetch that data
// => get data parameters
// => pass data to grid
