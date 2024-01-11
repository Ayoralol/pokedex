const renderEvolutions = (evolutionChain, index = 0) => {
  if (!evolutionChain) {
    return null;
  }

  return (
    <div key={index}>
      <h2>{evolutionChain.species.name}</h2>
      <p>#{evolutionChain.species.url.split("/")[6]}</p>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          evolutionChain.species.url.split("/")[6]
        }.png`}
        alt={evolutionChain.species.name}
      />
      {evolutionChain.evolves_to.map((nextEvo, index) => {
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
            {renderEvolutions(nextEvo, index)}
          </div>
        );
      })}
    </div>
  );
};

export default renderEvolutions;
