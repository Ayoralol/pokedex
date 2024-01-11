const EncounterInformation = ({pokeEnc}) => {
  if (pokeEnc.length === 0) {
    return <p>No wild encounter information</p>;
  }

  return pokeEnc.map((item, index) => {
    const areaName = item.location_area.name;
    const method = item.version_details[0].encounter_details[0].method.name;
    const versions = [
      ...new Set(item.version_details.map((detail) => detail.version.name)),
    ];

    return (
      <div key={index}>
        <p>Area: {areaName}</p>
        <p>Method: {method}</p>
        <p>Versions: {versions.join(", ")}</p>
      </div>
    );
  });
};

export default EncounterInformation;
