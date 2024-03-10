import styles from "./ModalNav.module.scss";

const ModalNav = ({setSelectedSection, selected}) => {
  return (
    <div className={styles.cont}>
      <div
        onClick={() => setSelectedSection("General Information")}
        className={`${styles.select} ${
          selected === "General Information" ? styles.selected : ""
        }`}>
        <p className={styles.text}>General Information</p>
      </div>
      <div
        onClick={() => setSelectedSection("Detailed Information")}
        className={`${styles.select} ${styles.select_2} ${
          selected === "Detailed Information" ? styles.selected : ""
        }`}>
        <p className={styles.text}>Detailed Information</p>
      </div>
      <div
        onClick={() => setSelectedSection("Evolution Information")}
        className={`${styles.select} ${
          selected === "Evolution Information" ? styles.selected : ""
        }`}>
        <p className={styles.text}>Evolution Information</p>
      </div>
      <div
        onClick={() => setSelectedSection("Moves Information")}
        className={`${styles.select} ${styles.select_2} ${
          selected === "Moves Information" ? styles.selected : ""
        }`}>
        <p className={styles.text}>Moves Information</p>
      </div>
      <div
        onClick={() => setSelectedSection("Encounter Information")}
        className={`${styles.select} ${
          selected === "Encounter Information" ? styles.selected : ""
        }`}>
        <p className={styles.text}>Encounter Information</p>
      </div>
    </div>
  );
};

export default ModalNav;
