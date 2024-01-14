import styles from "./MovesInformation.module.scss";

const MovesInformation = ({moves}) => {
  const groupedMoves = [];
  for (let i = 0; i < moves.length; i += 15) {
    groupedMoves.push(moves.slice(i, i + 15));
  }

  return (
    <div className={styles.cont}>
      <h2 className={styles.head}>Moves</h2>

      {groupedMoves.map((group, index) => (
        <div key={index} className={styles.moves}>
          {group.map((move, i) => (
            <p key={i} className={styles.moves_text}>
              {move.move.name}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MovesInformation;
