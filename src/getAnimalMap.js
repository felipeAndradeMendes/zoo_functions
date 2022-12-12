const data = require('../data/zoo_data');

const { species } = data;

const getLocation = (initials) => {
  const initFormated = initials.toUpperCase();
  const speciesFound = species.filter((specie) => specie.location === initFormated);
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

const getAnimalsNames = (animal, animalSex) => {
  const specieFound = species.find((specie) => specie.name === animal);
  const { residents } = specieFound;
  let animalNames = residents.map((resident) => resident.name);

  if (animalSex) {
    animalNames = residents.filter((resident) => resident.sex === animalSex)
      .map((residentName) => residentName.name);
    // console.log('RETORNO DENTRO DO IF', animalNames)
  }
  // console.log('RETORNO CO PRAMETRO DE SEX', animalNames)

  // sortNames(animalNames);
  const objNames = { [animal]: animalNames };

  return objNames;
};

const getListWithNames = (param1, paramSex) => {
  console.log('PARAM SEX NA FUNÇÃO SEM SORT', paramSex);
  const allLocations = getAllLocations();
  const { NE, NW, SE, SW } = allLocations;
  const animalNameListNE = NE.map((animal) => getAnimalsNames(animal, paramSex));
  const animalNameListNW = NW.map((animal) => getAnimalsNames(animal, paramSex));
  const animalNameListSE = SE.map((animal) => getAnimalsNames(animal, paramSex));
  const animalNameListSW = SW.map((animal) => getAnimalsNames(animal, paramSex));
  const neLoc = 'NE';
  const nwLoc = 'NW';
  const seLoc = 'SE';
  const swLoc = 'SW';
  const animalNameListOBJ = {
    [neLoc]: animalNameListNE,
    [nwLoc]: animalNameListNW,
    [seLoc]: animalNameListSE,
    [swLoc]: animalNameListSW,
  };
  return animalNameListOBJ;
};

const getAnimalsNamesSorted = (animal, animalSex) => {
  const specieFound = species.find((specie) => specie.name === animal);
  const { residents } = specieFound;
  let animalNames = residents.map((resident) => resident.name);

  // console.log('PARAMENTRO ANIMAL SEX', animalSex);
  if (animalSex) {
    animalNames = residents.filter((resident) => resident.sex === animalSex)
      .map((residentName) => residentName.name);
    // console.log('RETORNO DENTRO DO IF', animalNames)
  }
  // console.log('NOMES FILTRADOS POR SEXO', animalNames);
  const animalNamesSorted = animalNames.sort();
  const objNames = { [animal]: animalNamesSorted };

  return objNames;

  // return animalNames;
};

const getListWithNamesSorted = (param1, paramSex) => {
  const allLocations = getAllLocations();
  const { NE, NW, SE, SW } = allLocations;
  const animalNameListNE = NE.map((animal) => getAnimalsNamesSorted(animal, paramSex));
  const animalNameListNW = NW.map((animal) => getAnimalsNamesSorted(animal, paramSex));
  const animalNameListSE = SE.map((animal) => getAnimalsNamesSorted(animal, paramSex));
  const animalNameListSW = SW.map((animal) => getAnimalsNamesSorted(animal, paramSex));
  const neLoc = 'NE';
  const nwLoc = 'NW';
  const seLoc = 'SE';
  const swLoc = 'SW';
  const animalNameListOBJ = {
    [neLoc]: animalNameListNE,
    [nwLoc]: animalNameListNW,
    [seLoc]: animalNameListSE,
    [swLoc]: animalNameListSW,
  };
  return animalNameListOBJ;
};

// console.log(sortNames());
// console.log(getListWithNames(getAllLocations()));
// console.log(getAnimalsNames('lions'));
// console.log(getAllLocations());
// console.log(getLocation('Ne'));

const analyseParameters = (param) => param === undefined || !param.includeNames;

const analyseOtherParameters = (param) => {
  // console.log('PARAMETRO:', param.sorted);
  if (param.sex && param.sorted) return getListWithNamesSorted(null, param.sex);
  if (param.sorted) return getListWithNamesSorted();
  if (param.sex) return getListWithNames(null, param.sex);
};

const getAnimalMap = (options) => {
  if (analyseParameters(options)) return getAllLocations();
  // // sem parametros
  // if (options === undefined) return getAllLocations();
  // // sem parametro "includeNames"
  // if (!options.includeNames) return getAllLocations();

  if (analyseOtherParameters(options)) return analyseOtherParameters(options);
  // // somente com parametros "sex" e "sorted"
  // if (options.sex && options.sorted) return getListWithNamesSorted(null, options.sex);
  // // soment com parametros "includeNames" e "sorted"
  // if (options.sorted) return getListWithNamesSorted();
  // // somente paramentro "includeNames" e "sex"
  // if (options.sex) return getListWithNames(null, options.sex);
  // // somente parametro "includeNames"
  if (options.includeNames) return getListWithNames();
};

console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));
// console.log(getAnimalMap({ sex: 'female', sorted: true}));
// console.log(getAnimalMap());

module.exports = getAnimalMap;

/// RETORNOS ///

// getLocation() => [ 'lions', 'giraffes' ]

// getAllLocations() =>
//  {
//   NE: [ 'lions', 'giraffes' ],
//   NW: [ 'tigers', 'bears', 'elephants' ],
//   SE: [ 'penguins', 'otters' ],
//   SW: [ 'frogs', 'snakes' ]
//  }

// getAnimalsNames() => { lions: [ 'Zena', 'Maxwell', 'Faustino', 'Dee' ] }

// getListWithNames(getAllLocations()) =>
// {
//   NE: [ { lions: [Array] }, { giraffes: [Array] } ],
//   NW: [ { tigers: [Array] }, { bears: [Array] }, { elephants: [Array] } ],
//   SE: [ { penguins: [Array] }, { otters: [Array] } ],
//   SW: [ { frogs: [Array] }, { snakes: [Array] } ]
// }
