import React from "react";

const SearchBar = ({searchTerm, onSearchChange, onSearchSubmit}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search Pokémon"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
