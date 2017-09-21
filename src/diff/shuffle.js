/*
  Shuffle:
  Write a method to shuffle a deck of cards.
  It must be a perfect shuffle-in other words, each of the 52!
  permutations of the deck has to be equally likely.
  Assume that you are given a random number generator which is perfect.
*/

class Shuffle {

  rand(min, max) {
    if (min === max) return min;

    const rand = window.crypto.getRandomValues(new Uint32Array(1))[0];
    const temp = rand % (max - min + 1);
    return min + temp;
  }

  shuffleArray(input) {
    const result = input.slice(); // create a copy of array

    for (let i = 0; i < result.length; i++) {
      const randomIndex = this.rand(0, result.length - 1);
      const temp = result[randomIndex];
      result[randomIndex] = result[i];
      result[i] = temp;
    }

    return result;
  }
}

export default Shuffle;
