function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0; // This line is problematic
  }
}

let result = compare(NaN, NaN); // result will be 0, which is unexpected
console.log(result); // Output: 0