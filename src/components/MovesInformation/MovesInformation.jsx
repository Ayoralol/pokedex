const MovesInformation = ({moves}) => {
  return (
    <div>
      <h2>Moves</h2>
      {moves.map((move, index) => (
        <p key={index}>{move.move.name}</p>
      ))}
    </div>
  );
};

export default MovesInformation;
