function compare(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return NaN; // Handle NaN values explicitly
  } else if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

let result = compare(NaN, NaN); // result will be NaN, as expected
console.log(result); // Output: NaN

result = compare(5, 10);
console.log(result); // Output: -1

result = compare(10, 5);
console.log(result); // Output: 1

result = compare(5, 5);
console.log(result); // Output: 0