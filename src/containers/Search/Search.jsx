import React, {useState} from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import TypeSearch from "../TypeSearch/TypeSearch";
import styles from "./Search.module.scss";

function Search({
  allPokemon,
  onSearchResults,
  regenerateNumbers,
  allTypes,
  onTypeSearch,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (term) => {
    const filteredPokemon = allPokemon.results.filter((pokemon) =>
      pokemon.name.includes(term)
    );
    let pokemonNumbers = filteredPokemon.map(
      (pokemon) => pokemon.url.split("/")[6]
    );
    pokemonNumbers = [...new Set(pokemonNumbers)];
    pokemonNumbers = pokemonNumbers.slice(0, 20);
    onSearchResults(pokemonNumbers);
  };

  return (
    <div className={styles.cont}>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />
      <button onClick={regenerateNumbers} className={styles.btn}>
        Generate Random Team
      </button>
      <TypeSearch allTypes={allTypes} onTypeSearch={onTypeSearch} />
    </div>
  );
}

export default Search;
