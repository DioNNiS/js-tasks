/**
 * Word Frequencies:
 * Design a method to find the frequency of occurrences of any given word in a book.
 * What if we were running this algorithm multiple times?
 */

class WordFrequency {

  // int - String[] book, String word
  singleQuery(book, word) {
    const bookWords = book.split(' ');

    let result = 0;

    bookWords.forEach((element) => {
      if (element.toLowerCase() === word.toLowerCase()) {
        result++;
      }
    });

    return result;
  }

  // int - String[] book, String word
  multiQuery(book, word) {
    const hashMap = {};
    const wordLowerCase = word;
    const bookWords = book.split(' ');

    bookWords.forEach((element) => {
      const temp = element.toLowerCase();

      if (hashMap[temp]) {
        hashMap[temp]++;
      } else {
        hashMap[temp] = 1;
      }
    });

    return hashMap[wordLowerCase] ? hashMap[wordLowerCase] : 0;
  }
}

WordFrequency.bugaga = () => {
  console.log('buagag');
};

export default WordFrequency;
