import React from "react";
import Card from "../../components/Card/Card";
import styles from "./Grid.module.scss";

const Grid = ({pokeMain, pokeEnc, pokeSpec, pokeEvo}) => {
  return (
    <div className={styles.grid}>
      {pokeMain.map((pokemon) => (
        <Card
          key={pokemon.id}
          pokemon={pokemon}
          pokeEnc={pokeEnc}
          pokeSpec={pokeSpec}
          pokeEvo={pokeEvo}
        />
      ))}
    </div>
  );
};

export default Grid;
