const data = require('../data/zoo_data');

const { species } = data;

const getAnimalsOlderThan = (animal, age) => {
  const animalFound = species.find((specie) => specie.name === animal);
  const agesMap = animalFound.residents.map((resident) => resident.age);
  const minAge = agesMap.every((animalAge) => animalAge >= age);

  return minAge;
};

// console.log(getAnimalsOlderThan('penguins', 10));
// console.log(getAnimalsOlderThan('otters', 8));

module.exports = getAnimalsOlderThan;
