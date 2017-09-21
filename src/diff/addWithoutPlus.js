/*
  Add Without Plus:
  Write a function that adds two numbers. You should not use + or any arithmetic operators.
*/

class AddWithoutPlus {
  add(num1, num2) {
    let a = num1;
    let b = num2;

    while (b !== 0) {
      const sum = a ^ b; // add without carrying
      const carry = (a & b) << 1; // carry, but don't add
      a = sum;
      b = carry;
    }

    return a;
  }
}

export default AddWithoutPlus;
