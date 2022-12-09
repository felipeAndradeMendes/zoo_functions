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

  const chosenResidents = residents.reduce((acc, cur) => {
    let sum = 0;
    if (cur.sex === animal.sex) { sum = 1; }
    return acc + sum;
  }, 0);

  return chosenResidents;
};

console.log(countAnimals({ species: 'elephants', sex: 'male' }));

module.exports = countAnimals;

// console.log('Nome da especie', name);
// console.log('Residentes', residents);
// console.log('Parametro da especie', species);
// console.log('Parametro do sexo', sex);

// findAnimal(animal)
// const animalsFound = species.find((specie) => {
//   const { name } = specie;
//   return name === animal.species;
// });

// if (animal === undefined) {
//   const totalResidentsArr = species.reduce((acc, cur) => {
//     const { name, residents } = cur;
//     acc[name] = residents.length;
//     return acc;
//   }, {});
//   return totalResidentsArr;
// }
