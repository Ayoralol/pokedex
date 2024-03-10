import styles from "./EncounterInformation.module.scss";

const EncounterInformation = ({pokeEnc}) => {
  if (pokeEnc.length === 0) {
    return <p>No wild encounter information :(</p>;
  }

  return (
    <div className={styles.wrap}>
      {pokeEnc.map((item, index) => {
        const areaName = item.location_area.name;
        const method = item.version_details[0].encounter_details[0].method.name;
        const versions = [
          ...new Set(item.version_details.map((detail) => detail.version.name)),
        ];

        return (
          <div key={index} className={styles.cont}>
            <p className={styles.cont_text}>Area: {areaName}</p>
            <p className={styles.cont_text}>Method: {method}</p>
            <p className={styles.cont_text}>Versions: {versions.join(", ")}</p>
          </div>
        );
      })}
    </div>
  );
};

export default EncounterInformation;
