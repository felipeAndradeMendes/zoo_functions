const data = require('../data/zoo_data');

const { species } = data;

const findAnimal = (animal) => {
  const animalFound = species.find((specie) => {
    const { name } = specie;
    return name === animal.species;
  });

  return animalFound;
};

const noParameter = () => {
  const totalResidentsArr = species.reduce((acc, cur) => {
    const { name, residents } = cur;
    acc[name] = residents.length;
    return acc;
  }, {});
  return totalResidentsArr;
};

const countAnimals = (animal) => {
  if (animal === undefined) return noParameter();
  const animalsFound = findAnimal(animal);

  const { residents } = animalsFound;
  if (animal.sex === undefined) {
    return residents.length;
  }

  const chosenResidents = residents.reduce((acc, cur) => (((cur.sex) === (animal.sex))
    ? (acc + 1)
    : (acc + 0)), 0);

  return chosenResidents;
};

// console.log(countAnimals({ species: 'elephants', sex: 'male' }));
// console.log(countAnimals({ species: 'bears', sex: 'female' }));

module.exports = countAnimals;
