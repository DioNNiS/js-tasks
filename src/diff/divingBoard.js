/*
Diving Board:
You are building a diving board by placing a bunch of planks of wood end-to-end.
There are two types of planks, one of length shorter and one of length longer.
You must use exactly K planks of wood. Write a method to generate all possible lengths for the diving board.
*/

class DivingBoard {

  // HashSet<Integer> allLengths(int k, int shorter, int longer) {

  allLengths(k, shorter, longer) {
    const result = [];

    for (let i = 0; i <= k; i++) {
      result.push(i * shorter + (k - i) * longer);
    }

    return result;
  }
}

export default DivingBoard;
