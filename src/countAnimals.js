const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = (animal) => {
  const totalResidentsArr = species.reduce((acc, cur) => {
    const { name, residents } = cur;

    acc[name] = residents.length;
    return acc;
  }, {});
  return totalResidentsArr;
};

console.log(countAnimals());

module.exports = countAnimals;
