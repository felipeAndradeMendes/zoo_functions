const data = require('../data/zoo_data');

const { species, hours } = data;

const getFullList = (listOfDays) => {
  const officeHourExibitionList = listOfDays.map((day) => {
    const animalName = species.filter((specie) => specie.availability.includes(day))
      .map((animal) => animal.name);

    if (day === 'Monday') {
      return ({
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      });
    }

    return ({
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: animalName,
    });
  });
  return officeHourExibitionList;
};

const isAnimalName = (param, speciesList) => {
  const targetSpecie = species.find((specie) => specie.name === param);
  return targetSpecie.availability;
};

const getSchedule = (scheduleTarget) => {
  const speciesZoo = species.map((specie) => specie.name);
  const hourKeys = Object.keys(hours);
  const officeHourExibitionList = getFullList(hourKeys);
  const finalList = officeHourExibitionList.reduce((acc, cur, index) => {
    acc[hourKeys[index]] = cur;
    return acc;
  }, {});

  if (speciesZoo.includes(scheduleTarget)) {
    return isAnimalName(scheduleTarget, speciesZoo);
  }

  if (hourKeys.includes(scheduleTarget)) {
    const daysAndHours = Object.entries(finalList);
    const dayFiltered = daysAndHours.filter((day) => day.includes(scheduleTarget));
    return Object.fromEntries(dayFiltered);
  }
  return finalList;
};

// console.log(getSchedule());

module.exports = getSchedule;

// console.log(teste);
// const obj = {};
// console.log(officeHourExibitionList[0]);
// console.log('OBJETO', obj);

// obj[hourKeys[0]] = officeHourExibitionList[0];
// obj[hourKeys[1]] = officeHourExibitionList[0];

// console.log('OBJETO', obj);

// const officeHourExibitionList = hourKeys.map((day) => {
//   const animalName = species.filter((specie) => specie.availability.includes(day))
//     .map((animal) => animal.name);

//   if (day === 'Monday') {
//     return ({
//       officeHour: 'CLOSED',
//       exhibition: 'The zoo will be closed!',
//     });
//   }

//   return ({
//     officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
//     exhibition: animalName,
//   });
// });

// if (speciesZoo.includes(scheduleTarget)) {
//   const targetSpecie = species.find((specie) => specie.name === scheduleTarget);
//   return targetSpecie.availability;
// }
