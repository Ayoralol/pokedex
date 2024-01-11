import React, {useState} from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

function Search({allPokemon, onSearchResults}) {
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
    <SearchBar
      searchTerm={searchTerm}
      onSearchChange={handleSearchChange}
      onSearchSubmit={handleSearchSubmit}
    />
  );
}

export default Search;
