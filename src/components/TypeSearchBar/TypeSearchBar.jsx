import styles from "./TypeSearchBar.module.scss";

const TypeSearchBar = ({
  type1,
  type2,
  handleType1Change,
  handleType2Change,
  handleSubmit,
  allTypes,
}) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <select
        value={type1}
        onChange={handleType1Change}
        className={styles.select}>
        {allTypes.map((type, index) => (
          <option key={index} value={type.type} className={styles.option}>
            {type.type}
          </option>
        ))}
      </select>
      <select
        value={type2}
        onChange={handleType2Change}
        className={styles.select}>
        <option value="">Blank</option>
        {allTypes.map((type, index) => (
          <option key={index} value={type.type} className={styles.option}>
            {type.type}
          </option>
        ))}
      </select>
      <button type="submit" className={styles.btn}>
        Search
      </button>
    </form>
  );
};

export default TypeSearchBar;
