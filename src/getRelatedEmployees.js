const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => {
  const managers = employees.map((employee) => employee.managers);
  const newArr = [...new Set(managers.flat())];

  return newArr.includes(id);
};
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const employeesManaged = employees.filter((employee) => employee.managers.includes(managerId));
  const employeesName = employeesManaged.map((emp) => `${emp.firstName} ${emp.lastName}`);
  // console.log('bunda velhas')
  return employeesName;
};

// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// console.log(getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = { isManager, getRelatedEmployees };
