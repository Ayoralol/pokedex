const mapEggGroups = (eggGroups) => {
  const eggGroupMapping = {
    monster: "monster",
    plant: "grass",
    dragon: "dragon",
    water1: "water1",
    water2: "water2",
    water3: "water3",
    indeterminate: "amorphous",
    mineral: "mineral",
    humanshape: "human-like",
    fairy: "fairy",
    ground: "field",
    flying: "flying",
    bug: "bug",
  };

  return eggGroups
    ? eggGroups.map((egg) => eggGroupMapping[egg.name] || egg.name)
    : [];
};

export default mapEggGroups;
