import styles from "./EvolutionInformation.module.scss";

const EvolutionInformation = ({pokeEvo, index = 0}) => {
  if (!pokeEvo) {
    return null;
  }

  return (
    <div key={index} className={styles.wrap}>
      <div className={styles.evolutionStage}>
        <h2>{pokeEvo.species.name}</h2>
        <p>#{pokeEvo.species.url.split("/")[6]}</p>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            pokeEvo.species.url.split("/")[6]
          }.png`}
          alt={pokeEvo.species.name}
        />
      </div>
      {pokeEvo.evolves_to.length > 0 &&
        pokeEvo.evolves_to.map((nextEvo, index) => {
          const evolutionDetails = nextEvo.evolution_details[0];
          const evolutionTrigger = evolutionDetails?.trigger?.name || "Unknown";
          let evolutionCondition = "Unknown";

          if (evolutionTrigger === "level-up") {
            evolutionCondition = `Level ${
              evolutionDetails?.min_level || "Unknown"
            }`;
          } else if (evolutionTrigger === "use-item") {
            evolutionCondition = `${evolutionDetails?.item?.name || "Unknown"}`;
          } else if (evolutionTrigger === "trade") {
            evolutionCondition = evolutionDetails?.trade_species
              ? `Trade for ${evolutionDetails.trade_species.name}`
              : "Trade";
          } else if (evolutionTrigger === "shed") {
            evolutionCondition = "Shedding";
          } else if (evolutionTrigger === "other") {
            evolutionCondition = "Special Condition";
          }

          return (
            <div key={index} className={styles.evolutionStage}>
              <p>
                Evolution Conditions: {evolutionTrigger} ({evolutionCondition})
              </p>
              <EvolutionInformation pokeEvo={nextEvo} index={index} />
            </div>
          );
        })}
    </div>
  );
};

export default EvolutionInformation;
