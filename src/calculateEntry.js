const data = require('../data/zoo_data');

const entrants = [
	{ name:  'Lara Carvalho', age:  5 },
	{ name:  'Frederico Moreira', age:  5 },
	{ name:  'Pedro Henrique Carvalho', age:  5 },
	{ name:  'Maria Costa', age:  18 },
	{ name:  'Núbia Souza', age:  18 },
	{ name:  'Carlos Nogueira', age:  50 },
];

const countEntrants = (entrants) => {
  let sumChild = 0;
  let sumAdult = 0;
  let sumSenior = 0;
  const res = entrants.forEach((cur) => {
    if (cur.age < 18) sumChild += 1;  
    if (cur.age >= 50)sumSenior += 1;    
    if (cur.age >= 18 && cur.age < 50) sumAdult += 1;        
  });
  objRes = { child: sumChild, adult: sumAdult, senior: sumSenior };
  return objRes
};
// console.log(countEntrants(entrants));

const calculateEntry = (entrants = 0) => {
  // if (entrants === undefined) return 0;
  if (entrants = {}) return 0;
};
console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
//
