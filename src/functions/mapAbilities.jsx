const mapAbilities = (abilities) => {
  let output = ["", "", ""];

  abilities.forEach((ability) => {
    let abilityName = ability.ability.name;
    if (ability.slot === 3) {
      abilityName = abilityName + " (hidden)";
    }
    output[ability.slot - 1] = abilityName;
  });

  return output;
};

export default mapAbilities;
