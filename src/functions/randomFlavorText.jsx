const randomFlavorText = (flavorTextEntries) => {
  const englishEntries = flavorTextEntries.filter(
    (entry) => entry.language.name === "en"
  );

  if (englishEntries.length === 0) {
    return "No English entries found";
  }

  const randomEntry =
    englishEntries[Math.floor(Math.random() * englishEntries.length)];

  return randomEntry.flavor_text;
};

export default randomFlavorText;
