import DivingBoard from './divingBoard';

describe('DivingBoard', () => {
  const divingBoard = new DivingBoard();

  it('should calculate k=3, shorter=1, longer=2', () => {
    const result = divingBoard.allLengths(3, 1, 2);
    expect(result).toEqual(jasmine.arrayContaining([3, 4, 5, 6]));
  });
});
