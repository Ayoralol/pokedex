import styles from "./Stats.module.scss";

const Stats = ({stats}) => {
  return (
    <div className={styles.cont}>
      <h3 className={styles.head}>Base Stats</h3>
      <div className={styles.stat}>
        <p>HP:</p>
        <p>{stats[0].base_stat}</p>
      </div>
      <div className={styles.stat}>
        <p>Attack:</p>
        <p>{stats[1].base_stat}</p>
      </div>
      <div className={styles.stat}>
        <p>Defense:</p>
        <p>{stats[2].base_stat}</p>
      </div>
      <div className={styles.stat}>
        <p>Special Attack:</p>
        <p>{stats[3].base_stat}</p>
      </div>
      <div className={styles.stat}>
        <p>Special Defense:</p>
        <p>{stats[4].base_stat}</p>
      </div>
      <div className={styles.stat}>
        <p>Speed:</p>
        <p>{stats[5].base_stat}</p>
      </div>
    </div>
  );
};

export default Stats;
