import FactorialZeros from './factorialZeros';

describe('FactorialZeros', () => {
  const factorialZeros = new FactorialZeros();

  it('get zeroes', () => {
    let result = -1000;
    result = factorialZeros.getTrailingZeros(-1);
    expect(result).toEqual(-1);

    result = factorialZeros.getTrailingZeros(1);
    expect(result).toEqual(0);

    result = factorialZeros.getTrailingZeros(5);
    expect(result).toEqual(1);

    result = factorialZeros.getTrailingZeros(26);
    expect(result).toEqual(6);

    result = factorialZeros.getTrailingZeros(51);
    expect(result).toEqual(12);

    result = factorialZeros.getTrailingZeros(100);
    expect(result).toEqual(24);
  });
});
