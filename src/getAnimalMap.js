const data = require('../data/zoo_data');

const { species } = data;

const getLocation = (initials) => {
  const initFormated = initials.toUpperCase();
  const speciesFound =  species.filter((specie) => specie.location === initFormated);
  const speciesFoundNames = speciesFound.map((specie) => specie.name);
  return speciesFoundNames;
};

const getAllLocations = () => {
  const locationObj = {
    NE: getLocation('NE'),
    NW: getLocation('NW'),
    SE: getLocation('SE'),
    SW: getLocation('SW'),
  };

  return locationObj;
};

const getAnimalsNames = (animal) => {
  const specieFound = species.find((specie) => specie.name === animal);
  const { residents } = specieFound;
  const animalNames = residents.map((resident) => resident.name);
  const objNames = {[animal]: animalNames};

  return objNames;
};

const getListWithNames = () => {
  const allLocations =  getAllLocations();
  const { NE, NW, SE, SW } = allLocations;
  const animalNameListNE = NE.map((animal) => getAnimalsNames(animal));
  const animalNameListNW = NW.map((animal) => getAnimalsNames(animal));
  const animalNameListSE = SE.map((animal) => getAnimalsNames(animal));
  const animalNameListSW = SW.map((animal) => getAnimalsNames(animal));
  const animalNameListOBJ = {
    'NE': animalNameListNE,
    'NW': animalNameListNW,
    'SE': animalNameListSE,
    'SW': animalNameListSW,
  }

  return animalNameListOBJ;
};

// console.log(getListWithNames(getAllLocations()));
// console.log(getAnimalsNames('lions'));
// console.log(getAllLocations());
// console.log(getLocation('Ne'));s

const getAnimalMap = (options) => {
  if (options === undefined) return getAllLocations();
  if (!options.includeNames) return getAllLocations();
  if (options.includeNames) return getListWithNames();

};

// console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
