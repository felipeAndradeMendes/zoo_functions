const data = require('../data/zoo_data');

const { employees, species } = data;

const employeesIds = employees.map((employee) => employee.id);
// console.log('EMPLOYEES IDS:', employeesIds)

const getLocation = (info) => {
  const speciesFound = info.map((id) => species.find((specie) => specie.id === id).location);
  return speciesFound;
};

const getEmployee = (param) => {
  if (param.name) {
    return employees.find((employee) => {
      const { firstName, lastName } = employee;

      return firstName === param.name || lastName === param.name;
    });
  }

  if (param.id) {
    const employeeId = employees.find((employee) => employee.id === param.id);
    // console.log('RETORNO DO FIND NO ID', employeeId);
    // if (employeeId === undefined) {
    //   throw new Error('Informações inválidas');
    // }
    return employeeId;
  }
};

const changeIdForName = (ids) => {
  const idsFound = ids.map((id) => species.filter((specie) => specie.id === id));
  const specieName = idsFound.flat().map((specie) => specie.name);
  return specieName;
};

const getFullEmployeeList = () => {
  const list = employees.map((employee) => employee);
  const formatList = list.map((info) => {
    const { id, firstName, lastName, responsibleFor } = info;
    return ({
      id,
      fullName: `${firstName} ${lastName}`,
      species: changeIdForName(responsibleFor),
      locations: getLocation(responsibleFor),
    });
  });
  return formatList;
};

const validatedId = (param) => {
  const { id } = param;
  if (param.id && !employeesIds.includes(id)) {
    throw new Error('Informações inválidas');
  }
  return null;
};

// if(getEmployee(objParam) === undefined) {
//   console.log('OBJCOM PARAMETRO', getEmployee(objParam))
//   throw new Error('Informações inválidas')
//   // return 'deu ruim!'
// }

const getEmployeesCoverage = (objParam) => {
  if (objParam !== undefined) validatedId(objParam);
  if (objParam) {
    const employeeFound = getEmployee(objParam);
    const { id, firstName, lastName, responsibleFor } = employeeFound;
    const employeeFoundFormated = {
      id,
      fullName: `${firstName} ${lastName}`,
      species: changeIdForName(responsibleFor),
      locations: getLocation(responsibleFor),
    };
    return employeeFoundFormated;
  }
  const fullEmployeeList = getFullEmployeeList();
  return fullEmployeeList;
};

// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage({ id: 'Id QUALQUER' }));
// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }))
console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
