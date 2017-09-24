import Permutations from './permutations';

describe('Permutations', () => {
  const permutations = new Permutations();

  it('should return all permutations for "abcd"', () => {
    const result = permutations.getPermsWithoutDups('abcd');
    console.log(result.length, result);
  });

  it('should return all permutations for "aabc"', () => {
    const result = permutations.getPermsWithDups('aabc');
    console.log(result.length, result);
  });
});
