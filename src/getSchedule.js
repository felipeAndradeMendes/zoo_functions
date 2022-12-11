const data = require('../data/zoo_data');

const { species, hours } = data;

const getSchedule = (scheduleTarget) => {
  const speciesZoo = species.map((specie) => specie.name);
  const hourKeys = Object.keys(hours);
  
  if (speciesZoo.includes(scheduleTarget)) {
    const targetSpecie = species.find((specie) => specie.name === scheduleTarget);
    return targetSpecie.availability;
  }

  
  const officeHourExibitionList = hourKeys.map((day) => {
    const animalName = species.filter((specie) => specie.availability.includes(day)).map((animal) => animal.name);
    
    if (day === 'Monday') return ({
      'officeHour': 'CLOSED',
      'exhibition': 'The zoo will be closed!',
    })   
    
    return ({
      'officeHour': `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      'exhibition': animalName,
    })    
  });
  // console.log('LISTA DE DIAS E HORARIOS:', officeHourExibitionList);
 
  
  const finalList = officeHourExibitionList.reduce((acc, cur, index) => {
    // console.log('DIA DA SEMANA', hourKeys[index]);
    // console.log('ACC:', acc);
    // console.log('CUR:', cur);
    
    acc[hourKeys[index]] = cur;
    return acc
  }, {})
  
  if (hourKeys.includes(scheduleTarget)) {
    const daysAndHours = Object.entries(finalList);
    const dayFiltered = daysAndHours.filter((day) => day.includes(scheduleTarget));
    return Object.fromEntries(dayFiltered);
  }
  
  
  return finalList;
};

console.log(getSchedule('Mon'));

module.exports = getSchedule;


const teste = species.filter((specie) => specie.availability.includes('Tuesday')).map((animal) => animal.name);

// console.log(teste);
// const obj = {};
// console.log(officeHourExibitionList[0]);
// console.log('OBJETO', obj);

// obj[hourKeys[0]] = officeHourExibitionList[0];
// obj[hourKeys[1]] = officeHourExibitionList[0];

// console.log('OBJETO', obj);