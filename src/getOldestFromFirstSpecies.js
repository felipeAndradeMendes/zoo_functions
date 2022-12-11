const data = require('../data/zoo_data');

const { species, employees } = data;

const getEmployee = (id) => {
  const employeeFound = employees.find((employee) => employee.id === id);
  return employeeFound;
};

const getFirstSpecie = (employee) => {
  const { responsibleFor } = employee;
  const specieFound = species.find((specie) => specie.id === responsibleFor[0]);
  return specieFound;
};

const getOldestAnimal = (name) => {
  const animals = species.find((animal) => animal.name === name);

  const oldest = animals.residents.reduce((acc, cur) => ((acc.age > cur.age) ? acc : cur), 0);

  return oldest;
};

const getOldestFromFirstSpecies = (id) => {
  const employeeFound = getEmployee(id);
  const specieFound = getFirstSpecie(employeeFound);
  const oldestAnimal = getOldestAnimal(specieFound.name);
  const oldestAnimalInfo = Object.values(oldestAnimal);

  return oldestAnimalInfo;
};

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
