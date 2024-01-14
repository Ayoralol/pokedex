import {useState, useEffect} from "react";
import ModalNav from "../../components/ModalNav/ModalNav";
import mapEggGroups from "../../functions/mapEggGroups";
import mapAbilities from "../../functions/mapAbilities";
import randomFlavorText from "../../functions/randomFlavorText";
import GeneralInformation from "../../components/GeneralInformation/GeneralInformation.jsx";
import DetailedInformation from "../../components/DetailedInformation/DetailedInformation.jsx";
import MovesInformation from "../../components/MovesInformation/MovesInformation.jsx";
import EncounterInformation from "../../components/EncounterInformation/EncounterInformation.jsx";
import EvolutionInformation from "../../components/EvolutionInformation/EvolutionInformation.jsx";
import styles from "./Modal.module.scss";

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
  const [flavorText, setFlavorText] = useState(() => {
    let text = randomFlavorText(pokeSpec.flavor_text_entries);
    if (text !== "No English entries found") {
      text = text.replace(/\uad[\f\n]/g, "");
      text = text.replace(/[\f\n]/g, " ");
    }
    return text;
  });
  useEffect(() => {
    let text = randomFlavorText(pokeSpec.flavor_text_entries);
    if (text !== "No English entries found") {
      text = text.replace(/\uad[\f\n]/g, "");
      text = text.replace(/[\f\n]/g, " ");
    }
    setFlavorText(text);
  }, [pokeSpec]);

  if (!isOpen) {
    return null;
  }

  const eggGroups = mapEggGroups(pokeSpec ? pokeSpec.egg_groups : null);
  const abilities = mapAbilities(pokemon.abilities);

  const toggleShiny = () => {
    setIsShiny(!isShiny);
  };

  return (
    <div onClick={onClose} className={styles.back}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.cont}>
        <ModalNav
          setSelectedSection={setSelectedSection}
          selected={selectedSection}
        />
        {/* General Information */}
        {selectedSection === "General Information" && (
          <GeneralInformation
            pokemon={pokemon}
            types={types}
            pokeSpec={pokeSpec}
            flavorText={flavorText}
            isShiny={isShiny}
            toggleShiny={toggleShiny}
          />
        )}
        {/* Detailed Information */}
        {selectedSection === "Detailed Information" && (
          <DetailedInformation
            pokemon={pokemon}
            pokeSpec={pokeSpec}
            eggGroups={eggGroups}
            abilities={abilities}
            isShiny={isShiny}
            toggleShiny={toggleShiny}
          />
        )}
        {/* Evolution Information */}
        {selectedSection === "Evolution Information" && (
          <EvolutionInformation pokeEvo={pokeEvo.chain} />
        )}
        {/* Moves Information */}
        {selectedSection === "Moves Information" && (
          <MovesInformation moves={pokemon.moves} />
        )}
        {/* Encounter Information */}
        {selectedSection === "Encounter Information" && (
          <EncounterInformation pokeEnc={pokeEnc} />
        )}
      </div>
    </div>
  );
};

export default Modal;
