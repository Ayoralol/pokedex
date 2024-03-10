import styles from "./GeneralInformation.module.scss";

const GeneralInformation = ({
  pokemon,
  types,
  pokeSpec,
  flavorText,
  isShiny,
  toggleShiny,
}) => {
  const genName = () => {
    if (pokeSpec.generation.name === "generation-i") {
      return "Gen 1 - Red/Blue/Yellow";
    } else if (pokeSpec.generation.name === "generation-ii") {
      return "Gen 2 - Gold/Silver/Crystal";
    } else if (pokeSpec.generation.name === "generation-iii") {
      return "Gen 3 - Ruby/Sapphire/Emerald";
    } else if (pokeSpec.generation.name === "generation-iv") {
      return "Gen 4 - Diamond/Pearl/Platinum";
    } else if (pokeSpec.generation.name === "generation-v") {
      return "Gen 5 - Black/White";
    } else if (pokeSpec.generation.name === "generation-vi") {
      return "Gen 6 - X/Y";
    } else if (pokeSpec.generation.name === "generation-vii") {
      return "Gen 7 - Sun/Moon";
    } else if (pokeSpec.generation.name === "generation-viii") {
      return "Gen 8 - Sword/Shield";
    }
  };

  const genderRatio = (genderRate) => {
    if (genderRate === -1) {
      return "Genderless";
    } else {
      const femaleRatio = (genderRate / 8) * 100;
      const maleRatio = 100 - femaleRatio;
      return `${maleRatio}% Male, ${femaleRatio}% Female`;
    }
  };

  return (
    <div className={styles.cont}>
      <div className={styles.cont_left}>
        <h2 className={styles.name}>{pokemon.name}</h2>
        <p className={styles.num}>#{pokemon.id}</p>
        <img
          src={
            isShiny
              ? pokemon.sprites.front_shiny
              : pokemon.sprites.front_default
          }
          alt={isShiny ? "Shiny " + pokemon.name : pokemon.name}
          className={styles.img}
        />
        <button onClick={toggleShiny} className={styles.btn}>
          {isShiny ? "Standard" : "Shiny"}
        </button>
      </div>
      <div className={styles.cont_right}>
        <p className={styles.cont_right_text}>{types.join(" | ")}</p>
        <p className={styles.cont_right_text}>Height: {pokemon.height}</p>
        <p className={styles.cont_right_text}>Weight: {pokemon.weight}</p>
        <p className={styles.cont_right_text}>
          Generation: {genName(pokeSpec.generation.name)}
        </p>
        <p className={styles.cont_right_flav}>{flavorText}</p>
        <p className={styles.cont_right_text}>
          Gender Ratio: {genderRatio(pokeSpec.gender_rate)}
        </p>
      </div>
    </div>
  );
};

export default GeneralInformation;
