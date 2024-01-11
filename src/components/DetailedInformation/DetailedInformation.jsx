import Stats from "../Stats/Stats";

const DetailedInformation = ({pokemon, pokeSpec, eggGroups, abilities}) => {
  return (
    <div>
      <h2>{pokeSpec.name}</h2>
      <p>#{pokemon.id}</p>
      <p>Egg Groups: {eggGroups.join(" | ")}</p>
      <Stats stats={pokemon.stats} />
      <p>Habitat: {pokeSpec.habitat && pokeSpec.habitat.name}</p>
      <p>Abilities: {abilities.join(" | ")}</p>
      <p>Catch Rate: {pokeSpec.capture_rate}</p>
    </div>
  );
};

export default DetailedInformation;
