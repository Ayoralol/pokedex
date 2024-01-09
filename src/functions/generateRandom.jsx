// generate array of 30 random numbers between 1 and 1025

const generateRandom = () => {
  const randomNumbers = new Set();
  while (randomNumbers.size < 30) {
    randomNumbers.add(Math.floor(Math.random() * 1026));
  }
  return Array.from(randomNumbers);
};

export default generateRandom;
