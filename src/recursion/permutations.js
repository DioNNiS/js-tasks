/*
  Permutations without Dups:
  Write a method to compute all permutations of a string of unique characters .
*/

class Permutations {

  getPermsWithDups(str) {
    const result = [];

    if (str.length === 0) {
      result.push('');
      return result;
    }

    const first = str[0]; // get first character
    const remainder = str.substring(1); // remove first character
    const words = this.getPermsWithoutDups(remainder);
    words.forEach((word) => {
      for (let i = 0; i <= word.length; i++) { // <= is important
        const temp = this._insertCharAt(word, first, i);
        if (result.indexOf(temp) === -1) {
          result.push(temp);
        }
      }
    });

    return result;
  }

  // n! permutations
  // for n=4, count = 24
  getPermsWithoutDups(str) {
    const result = [];

    if (str.length === 0) {
      result.push('');
      return result;
    }

    const first = str[0]; // get first character
    const remainder = str.substring(1); // remove first character
    const words = this.getPermsWithoutDups(remainder);
    words.forEach((word) => {
      for (let i = 0; i <= word.length; i++) { // <= is important
        const temp = this._insertCharAt(word, first, i);
        result.push(temp);
      }
    });

    return result;
  }

  _insertCharAt(str, char, i) {
    const left = str.substring(0, i);
    const right = str.substring(i);
    return left + char + right;
  }
}

export default Permutations;