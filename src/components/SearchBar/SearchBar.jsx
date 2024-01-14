import styles from "./SearchBar.module.scss";

const SearchBar = ({searchTerm, onSearchChange, onSearchSubmit}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search Pokémon"
        className={styles.input}
      />
      <button type="submit" className={styles.btn}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
