import AddWithoutPlus from './addWithoutPlus';

describe('AddWithoutPlus', () => {
  const addWithoutPlus = new AddWithoutPlus();

  it('should add two numbers: 2 + 3', () => {
    const result = addWithoutPlus.add(2, 3);
    expect(result).toBe(5);
  });

  it('should add two numbers: 2 + -3', () => {
    const result = addWithoutPlus.add(2, -3);
    expect(result).toBe(-1);
  });

  it('should add two numbers: 0 + 0', () => {
    const result = addWithoutPlus.add(0, 0);
    expect(result).toBe(0);
  });
});
