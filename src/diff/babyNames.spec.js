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
      ['John', 'Johnny'],
      ['Chris', 'Kris'],
      ['Chris', 'Christopher'],
    ];
    // console.log('test = ', babyNames.findSetForName('Chris', synonyms));

    const result = babyNames.aggregate(names, synonyms);
    console.log('result = ', result);
    expect(result).toEqual({ Jon: 27, Chris: 36 });
  });

  it('should return aggregated list of names as array', () => {
    // Names: John (15), Jon (12), Chris (13), Kris (4), Christopher (19)
    // Synonyms: (Jon, John), (John, Johnny), (Chris, Kris), (Chris, Christopher)
    const names = {
      John: 10,
      Jon: 3,
      Davis: 2,
      Kari: 3,
      Johnny: 11,
      Carlton: 8,
      Carleton: 2,
      Jonathan: 9,
      Carrie: 5,
      Denis: 1,
      Bugaga: 1,
      Alex: 1,
    };

    const synonyms = [
      ['Jonathan', 'John'],
      ['Jon', 'Johnny'],
      ['Denis', 'Bugaga'],
      ['Bugaga', 'Alex'],
      ['Alex', 'Jon'],
      ['John', 'Denis'],
      ['Kari', 'Carrie'],
      ['Carleton', 'Carlton'],
    ];
    const result = babyNames.aggregate(names, synonyms);

    expect(result).toEqual({
      Jonathan: 36,
      Davis: 2,
      Kari: 8,
      Carleton: 10,
    });

  });
});
