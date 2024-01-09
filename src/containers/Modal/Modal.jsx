import React from "react";
import ModalNav from "../../components/ModalNav/ModalNav";

const Modal = ({
  isOpen,
  onClose,
  pokemon,
  types,
  pokeEnc,
  pokeSpec,
  pokeEvo,
}) => {
  if (!isOpen) {
    return null;
  }

  const eggGroups = pokeSpec.egg_groups.map((egg) => egg.name);

  return (
    <div>
      <ModalNav />
      <button onClick={onClose}>Close</button>
      {/* General Information */}
      <div>
        <h2>{pokemon.name}</h2>
        <p>#{pokemon.id}</p>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>{types.join(" | ")}</p>
        <p>{pokemon.height}</p>
        <p>{pokemon.weight}</p>
      </div>
      {/* Detailed Information */}
      <div>
        <h2>{pokemon.name}</h2>
        <p>#{pokemon.id}</p>
        <p>{eggGroups.join(" | ")}</p>
      </div>
      {/* Evolution Information */}
      <div></div>
      {/* Display pokeEnc, pokeSpec, pokeEvo data here */}
    </div>
  );
};
export default Modal;
