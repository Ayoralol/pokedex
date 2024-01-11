import {useState} from "react";
import ModalNav from "../../components/ModalNav/ModalNav";
import mapEggGroups from "../../functions/mapEggGroups";
import Stats from "../../components/Stats/Stats";
import mapAbilities from "../../functions/mapAbilities";
import renderEvolutions from "../../functions/renderEvolutions.jsx";
import renderEncounters from "../../functions/renderEncounters.jsx";

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
  const [selectedSection, setSelectedSection] = useState("General Information");

  if (!isOpen) {
    return null;
  }

  const eggGroups = mapEggGroups(pokeSpec ? pokeSpec.egg_groups : null);
  const abilities = mapAbilities(pokemon.abilities);
  let flavorText = "";
  if (pokeSpec.flavor_text_entries[0].flavor_text) {
    flavorText = pokeSpec.flavor_text_entries[0].flavor_text;
    flavorText = flavorText.replace(/\uad[\f\n]/g, "");
    flavorText = flavorText.replace(/[\f\n]/g, " ");
  }

  const toggleShiny = () => {
    setIsShiny(!isShiny);
  };

  return (
    <div>
      <ModalNav setSelectedSection={setSelectedSection} />
      <button onClick={onClose}>Close</button>
      {/* General Information */}
      {selectedSection === "General Information" && (
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
          <button onClick={toggleShiny}>
            {isShiny ? "Standard" : "Shiny"}
          </button>
          <p>{types.join(" | ")}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Generation: {pokeSpec.generation.name}</p>
          <p>{flavorText}</p>
          <p>Gender Ratio: {(pokeSpec.gender_rate / 8) * 100}% Female</p>
        </div>
      )}
      {/* Detailed Information */}
      {selectedSection === "Detailed Information" && (
        <div>
          <h2>{pokeSpec.name}</h2>
          <p>#{pokemon.id}</p>
          <p>Egg Groups: {eggGroups.join(" | ")}</p>
          <Stats stats={pokemon.stats} />
          <p>Habitat: {pokeSpec.habitat && pokeSpec.habitat.name}</p>
          <p>Abilities: {abilities.join(" | ")}</p>
          <p>Catch Rate: {pokeSpec.capture_rate}</p>
        </div>
      )}
      {/* Evolution Information */}
      {selectedSection === "Evolution Information" && (
        <div>{renderEvolutions(pokeEvo.chain)}</div>
      )}
      {/* Moves Information */}
      {selectedSection === "Moves Information" && (
        <div>
          <h2>Moves</h2>
          {pokemon.moves.map((move, index) => (
            <p key={index}>{move.move.name}</p>
          ))}
        </div>
      )}
      {/* Encounter Information */}
      {selectedSection === "Encounter Information" && (
        <div>
          <h2>Encounter Information</h2>
          {renderEncounters(pokeEnc)}
        </div>
      )}
    </div>
  );
};

export default Modal;
