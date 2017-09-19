/**
 * Factorial Zeros:
 * Write an algorithm which computes the number of trailing zeros in n factorial.
 */

class FactorialZeros {
  getTrailingZeros(number) {
    if (number < 0) {
      return -1;
    }

    let result = 0;
    for (let i = 5; number / i > 0; i *= 5) {
      result += Math.floor(number / i);
    }

    return result;
  }
}

export default FactorialZeros;
