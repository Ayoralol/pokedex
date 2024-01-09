// generate array of 30 random numbers between 1 and 1025

const generateRandom = (amount) => {
  const randomNumbers = new Set();
  while (randomNumbers.size < amount) {
    randomNumbers.add(Math.floor(Math.random() * 1026));
  }
  console.log("Random numbers Generated", Array.from(randomNumbers));
  return Array.from(randomNumbers);
};

export default generateRandom;
