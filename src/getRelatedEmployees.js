const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => {
  const managers = employees.map((employee) => employee.managers);
  const newArr = [...new Set(managers.flat())];
  return newArr.includes(id);
};
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

const getRelatedEmployees = (managerId) => {
  // seu código aqui
};

module.exports = { isManager, getRelatedEmployees };
