import Shuffle from './shuffle';

describe('Shuffle', () => {
  const shuffle = new Shuffle();

  it('it should suffle numbers', () => {
    const result = shuffle.shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    console.log('shuffle', result);
  });
});
