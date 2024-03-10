import React, {useState} from "react";
import Modal from "../../containers/Modal/Modal";
import styles from "./Card.module.scss";

const Card = ({pokemon, pokeEnc, pokeSpec, pokeEvo}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (event) => {
    event.stopPropagation();
    setIsModalOpen(false);
  };

  let types = pokemon.types.map((type) => type.type.name);

  return (
    <div onClick={handleOpenModal} className={styles.cont}>
      <p className={styles.name}>{pokeSpec.name}</p>
      <p className={styles.num}>#{pokemon.id}</p>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className={styles.img}
      />
      <p className={styles.types}>{types.join(" | ")}</p>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        pokemon={pokemon}
        types={types}
        pokeEnc={pokeEnc}
        pokeSpec={pokeSpec}
        pokeEvo={pokeEvo}
      />
    </div>
  );
};

export default Card;
