import BabyNames from './babyNames';

describe('BabyNames', () => {
  const babyNames = new BabyNames();

  it('should return aggregated list of names as object', () => {
    // Names: John (15), Jon (12), Chris (13), Kris (4), Christopher (19)
    // Synonyms: (Jon, John), (John, Johnny), (Chris, Kris), (Chris, Christopher)
    const names = {
      John: 15,
      Jon: 12,
      Chris: 13,
      Kris: 4,
      Christopher: 19,
    };

    const synonyms = [
      ['Jon', 'John'],
      ['Johnny', 'John'],
      ['Johnny', 'Denis'],
      ['Denis', 'Bugaga'],
      ['Chris', 'Kris'],
      ['Chris', 'Christopher'],
    ];
    const result = babyNames.aggregateObject(names, synonyms);
    expect(result).toEqual({ Jon: 27, Chris: 36 });
  });

  it('should return aggregated list of names as array', () => {
    // Names: John (15), Jon (12), Chris (13), Kris (4), Christopher (19)
    // Synonyms: (Jon, John), (John, Johnny), (Chris, Kris), (Chris, Christopher)
    const names = [
      { name: 'John', count: 15 },
      { name: 'Jon', count: 12 },
      { name: 'Chris', count: 13 },
      { name: 'Kris', count: 4 },
      { name: 'Christopher', count: 19 },
    ];

    const synonyms = [
      ['Jon', 'John'],
      ['Johnny', 'John'],
      ['Johnny', 'Denis'],
      ['Denis', 'Bugaga'],
      ['Chris', 'Kris'],
      ['Chris', 'Christopher'],
    ];
    const result = babyNames.aggregateArray(names, synonyms);
    expect(result).toEqual([
      { name: 'Jon', count: 27 },
      { name: 'Chris', count: 36 },
    ]);
  });
});
