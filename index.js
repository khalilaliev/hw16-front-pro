/// task 1 ///

const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

/// task 2 ///

let minValue = arr[0];
let minIndex = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < minValue) {
    minValue = arr[i];
    minIndex = i;
  }
}
console.log("task 2:", minValue, ",", minIndex);

/// task 3 ///

let maxValue = arr[0];
let maxIndex = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxValue) {
    maxValue = arr[i];
    maxIndex = i;
  }
}
console.log("task 3:", maxValue, ",", maxIndex);

/// task 4 ///

const negativeValue = arr.filter((value) => value < 0).sort((x, y) => x - y);
console.log("task 4:", negativeValue);

/// task 5 ///

const negativeArr = arr.filter((negative) => negative > 0);
const pairedNegativeValue = [];

negativeArr.forEach((negative) => {
  if (arr.includes(negative) && negative % 2 !== 0) {
    pairedNegativeValue.push(negative);
  }
});

console.log("task 5:", pairedNegativeValue);

/// task 6 ///

const positiveArr = arr.filter((positive) => positive > 0);
let pairedPositiveValue = [];

positiveArr.forEach((positive) => {
  if (arr.includes(positive) && positive % 2 === 0) {
    pairedPositiveValue.push(positive);
  }
});

console.log("task 6:", pairedPositiveValue);

/// task 7 ///

const pairedSum = pairedPositiveValue.reduce((sum, index) => sum + index, 0);

console.log("task 7:", pairedSum);

/// task 8 ///

const SumOfPairedNegativeValue = pairedNegativeValue.reduce(
  (sum, index) => sum + index,
  0
);
console.log("task 8:", SumOfPairedNegativeValue);

/// task 9 ///

const sumOfPositiveValue = arr.filter((value) => value > 0);
let result = sumOfPositiveValue.reduce((item, index) => item * index, 1);

console.log("task 9:", result);

/// task 10 ///

const maxValueOfArray = Math.max(...arr);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== maxValueOfArray) {
    arr[i] = 0;
  }
}
console.log("task 10:", arr);
