const data = require('../data/zoo_data');

const { employees } = data;

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) return {};

  const employeeFound = employees.find((employee) => {
    const { firstName, lastName } = employee;
    return firstName === employeeName || lastName === employeeName;
  });

  return employeeFound;
};

// console.log(getEmployeeByName('Emery'));

module.exports = getEmployeeByName;
