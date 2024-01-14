import Stats from "../Stats/Stats";
import styles from "./DetailedInformation.module.scss";

const DetailedInformation = ({
  pokemon,
  pokeSpec,
  eggGroups,
  abilities,
  isShiny,
  toggleShiny,
}) => {
  return (
    <div className={styles.cont}>
      <div className={styles.cont_left}>
        <h2 className={styles.name}>{pokeSpec.name}</h2>
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
        <p className={styles.cont_right_text}>
          Egg Groups: {eggGroups.join(" | ")}
        </p>
        <Stats stats={pokemon.stats} />
        <p className={styles.cont_right_text}>
          Habitat: {pokeSpec.habitat && pokeSpec.habitat.name}
        </p>
        <p className={styles.cont_right_text}>
          Abilities: {abilities.join(" | ")}
        </p>
        <p className={styles.cont_right_text}>
          Catch Rate: {pokeSpec.capture_rate}
        </p>
      </div>
    </div>
  );
};

export default DetailedInformation;
