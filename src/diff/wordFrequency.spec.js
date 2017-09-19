import WordFrequency from './WordFrequency';

describe('WordFrequency', () => {
  const wordFrequency = new WordFrequency();
  const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

  describe('singleQuery', () => {
    it('should find many words', () => {
      const result = wordFrequency.singleQuery(text, 'the');
      expect(result).toEqual(6);
    });

    it('should find one word', () => {
      const result = wordFrequency.singleQuery(text, 'standard');
      expect(result).toEqual(1);
    });

    it('should not find any words', () => {
      const result = wordFrequency.singleQuery(text, 'test');
      expect(result).toEqual(0);
    });

    it('should handle empty book', () => {
      const result = wordFrequency.singleQuery('', 'the');
      expect(result).toEqual(0);
    });
  });

  describe('multiQuery', () => {
    it('should find many words', () => {
      const result = wordFrequency.multiQuery(text, 'the');
      expect(result).toEqual(6);
    });

    it('should find one word', () => {
      const result = wordFrequency.multiQuery(text, 'standard');
      expect(result).toEqual(1);
    });

    it('should not find any words', () => {
      const result = wordFrequency.multiQuery(text, 'test');
      expect(result).toEqual(0);
    });

    it('should handle empty book', () => {
      const result = wordFrequency.multiQuery('', 'the');
      expect(result).toEqual(0);
    });
  });
});
