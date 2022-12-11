const data = require('../data/zoo_data');

const { prices } = data;

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

const countEntrants = (entrantsZoo) => {
  let sumChild = 0;
  let sumAdult = 0;
  let sumSenior = 0;

  entrantsZoo.forEach((cur) => {
    if (cur.age < 18) sumChild += 1;
    if (cur.age >= 50)sumSenior += 1;
    if (cur.age >= 18 && cur.age < 50) sumAdult += 1;
  });
  const objRes = { child: sumChild, adult: sumAdult, senior: sumSenior };
  return objRes;
};
console.log(countEntrants(entrants));

const calculateEntry = (entrantsZoo) => {
  if (entrantsZoo === undefined) return 0;
  if (Object.keys(entrantsZoo).length === 0) return 0;

  const { child, adult, senior } = countEntrants(entrantsZoo);
  const childPrice = child * prices.child;
  const adultPrice = adult * prices.adult;
  const seniorPrice = senior * prices.senior;

  const finalSum = (childPrice + adultPrice + seniorPrice);

  return finalSum;
  // return 0;
};

// const entrantsTest = [
//   { name: 'Jose' , age: 5 },
//   { name: 'bunda', age: 50 },
// ];
console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
//
