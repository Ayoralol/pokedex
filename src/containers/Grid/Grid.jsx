import React from "react";
import Card from "../../components/Card/Card";
import styles from "./Grid.module.scss";

const Grid = ({pokeMain, pokeEnc, pokeSpec, pokeEvo}) => {
  return (
    <div className={styles.grid}>
      {pokeMain.map((pokemon, ind) => (
        <Card
          key={pokemon.id}
          pokemon={pokemon}
          pokeEnc={pokeEnc[ind]}
          pokeSpec={pokeSpec[ind]}
          pokeEvo={pokeEvo[ind]}
        />
      ))}
    </div>
  );
};

export default Grid;
