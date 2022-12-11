const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Se os paramentros forem vazios, retorna toda tablea de horários', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('Se o parametro de hora não for preenchido com numeros corretamente, retorna o erro esperado', () => {
    expect(() => getOpeningHours('monday', '1s:20-am')).toThrow('The hour should represent a number');
  });

  it('Se o parametro de minutos não for preenchido com numeros corretamente, retorna o erro esperado', () => {
    expect(() => getOpeningHours('monday', '10:2o-am')).toThrow('The minutes should represent a number');
  });

  it('Se a abreviação for diferente de "am" ou "pm" retorna o erro esperado', () => {
    expect(() => getOpeningHours('sunday', '08:50-pp')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Se hora for menor que 0 ou maior que 12, retorna o erro esperado', () => {
    expect(() => getOpeningHours('tuesday', '13:20-am')).toThrow('The hour must be between 0 and 12');    
  });

  it('Se o minuto for menor que 0 ou maior que 59, retorna o erro esperado', () => {
    expect(() => getOpeningHours('tuesday', '10:60-am')).toThrow('The minutes must be between 0 and 59');
  });

  it('Deve retornar o erro correto quando o parametro dia não fizer parte da semana', () => {
    expect(() => getOpeningHours('jumaday', '11:35-pm')).toThrow('The day must be valid. Example: Monday');
  });

  it('Deve retornar que o Zoo está fechado quando o dia for "monday"', () => {
    expect(getOpeningHours('monday', '09:55-am')).toBe('The zoo is closed');
  });

  it('Retorna que o Zoo está aberto num dia especifico', () => {
    expect(getOpeningHours('Wednesday', '09:15-am')).toBe('The zoo is open');
  });
});
