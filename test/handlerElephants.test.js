const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa se o parametro "count" retorna a quantidade corretas de elefantes residentes', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Testa se o parametro "names" retorna os nomes corretos dos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Testa se o parametro "averageAge" rtorana a média de idade dos elefantes corretamente', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('Testa se quando não há um parametro, o retorno da função é "undefined"', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Deve retornar "Parâmetro inválido, é necessário uma string" se parametro não for string', () => {
    expect(handlerElephants(12)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Deve retornar localização dos elefantes quando parametro for "location"', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('Deve retornar "null" quando parametro for uma string imprevista', () => {
    expect(handlerElephants('testando')).toBeNull();
  });
});
