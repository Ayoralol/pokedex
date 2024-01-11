const EvolutionInformation = ({pokeEvo, index = 0}) => {
  if (!pokeEvo) {
    return null;
  }

  return (
    <div key={index}>
      <h2>{pokeEvo.species.name}</h2>
      <p>#{pokeEvo.species.url.split("/")[6]}</p>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          pokeEvo.species.url.split("/")[6]
        }.png`}
        alt={pokeEvo.species.name}
      />
      {pokeEvo.evolves_to.map((nextEvo, index) => {
        const evolutionDetails = nextEvo.evolution_details[0];
        const conditions = Object.keys(evolutionDetails)
          .filter(
            (key) =>
              evolutionDetails[key] !== null &&
              evolutionDetails[key] !== false &&
              evolutionDetails[key] !== ""
          )
          .map((key) => {
            if (typeof evolutionDetails[key] === "object") {
              return `${key}: ${evolutionDetails[key].name}`;
            } else {
              return `${key}: ${evolutionDetails[key]}`;
            }
          })
          .join(", ");

        return (
          <div key={index}>
            <p>Evolution Conditions: {conditions}</p>
            <EvolutionInformation pokeEvo={nextEvo} index={index} />
          </div>
        );
      })}
    </div>
  );
};

export default EvolutionInformation;
