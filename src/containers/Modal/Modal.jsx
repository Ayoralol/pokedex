import {useState} from "react";
import ModalNav from "../../components/ModalNav/ModalNav";
import mapEggGroups from "../../functions/mapEggGroups";
import Stats from "../../components/Stats/Stats";
import mapAbilities from "../../functions/mapAbilities";

const Modal = ({
  isOpen,
  onClose,
  pokemon,
  types,
  pokeEnc,
  pokeSpec,
  pokeEvo,
}) => {
  const [isShiny, setIsShiny] = useState(false);

  if (!isOpen) {
    return null;
  }

  const eggGroups = mapEggGroups(pokeSpec ? pokeSpec.egg_groups : null);
  const abilities = mapAbilities(pokemon.abilities);

  const toggleShiny = () => {
    setIsShiny(!isShiny);
  };

  return (
    <div>
      <ModalNav />
      <button onClick={onClose}>Close</button>
      {/* General Information */}
      <div>
        <h2>{pokemon.name}</h2>
        <p>#{pokemon.id}</p>
        <img
          src={
            isShiny
              ? pokemon.sprites.front_shiny
              : pokemon.sprites.front_default
          }
          alt={isShiny ? "Shiny " + pokemon.name : pokemon.name}
        />
        <button onClick={toggleShiny}>{isShiny ? "Standard" : "Shiny"}</button>
        <p>{types.join(" | ")}</p>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
      </div>
      {/* Detailed Information */}
      <div>
        <h2>{pokemon.name}</h2>
        <p>#{pokemon.id}</p>
        <p>Egg Groups: {eggGroups.join(" | ")}</p>
        <Stats stats={pokemon.stats} />
        <button>Moves FILLER</button>
        <button>Encounter Areas FILLER</button>
        <p>Abilities: {abilities.join(" | ")}</p>
      </div>
      {/* Evolution Information */}
      <div></div>
      {/* Display pokeEnc, pokeSpec, pokeEvo data here */}
    </div>
  );
};
export default Modal;
