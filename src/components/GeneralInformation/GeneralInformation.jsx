const GeneralInformation = ({
  pokemon,
  types,
  pokeSpec,
  flavorText,
  isShiny,
  toggleShiny,
}) => {
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>#{pokemon.id}</p>
      <img
        src={
          isShiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default
        }
        alt={isShiny ? "Shiny " + pokemon.name : pokemon.name}
      />
      <button onClick={toggleShiny}>{isShiny ? "Standard" : "Shiny"}</button>
      <p>{types.join(" | ")}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Generation: {pokeSpec.generation.name}</p>
      <p>{flavorText}</p>
      <p>Gender Ratio: {(pokeSpec.gender_rate / 8) * 100}% Female</p>
    </div>
  );
};

export default GeneralInformation;
