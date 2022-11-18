// 1. Print all even numbers from 0 – 10
// Try to make the solution to this problem as efficiently as possible. Consider
// using loops that would allow you to type the fewest characters/commands.
// While you could simply print the even numbers, get creative and see how you
// could output them in a way that would work up to 10 or even up to 10,000 with little extra effort.

// Pattern 1
let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const printAllEvenNumbers1 = () => {
  for (let i = 1; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      console.log(number[i]);
    }
  }
};
printAllEvenNumbers1();

// Pattern 2
const printAllEvenNumbers2 = (number) => {
  for (let i = 1; i <= number; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
};
printAllEvenNumbers2(10000);

// =========================================================================

// 2. Print a table containing multiplication tables
// Let's start with the tables that many of us had to memorize in school.
// Can you print a table that contains all the answers to the multiplication tables from 1 through 10?
// Like Challenge #1, can you create an efficient solution that you could easily expand should you need the 12 times table?

const printMultiplicationTable = (number) => {
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number; j++) {
      console.log(i + "×" + j + "=" + i * j);
    }
  }
};

printMultiplicationTable(12);

// =========================================================================

// 3. Create a length converter function
// Creating a function is a skill that'll be useful in many settings, and as you progress,
// you'll be working on much more complicated functions than this one.
// But a function that converts units of measure can be pretty handy in multiple professions and industries.
// Let's start with a conversion from kilometers to miles. The function should include the input in kilometers and
// return the answer in miles.

const createLengthConverter = (kilometers) => {
  let result = kilometers / 1.609344;
  return kilometers + "km = " + result.toFixed(6) + " mile";
};

createLengthConverter(1);

// =========================================================================

// 4. Calculate the sum of numbers within an array
// You can create your own array of numbers but consider trying this problem with a few different sets to verify your solution.
// Have one array with negative and positive numbers and another with integers and decimals.
// You could also try using arrays of different lengths. If you're feeling comfortable with this,
// try the slightly more challenging bonus challenge below.
// Bonus intermediate challenge: Create a function that can return the sum of a particular column or row number in a table.

let numbers = [-3, -2, -1, 1, 2, 3, 4, 5, 1.2];

const calculateSumOfNumbers = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = array[i] + sum;
  }
  return sum;
};

calculateSumOfNumbers(numbers);

// =========================================================================

// 5. Create a function that reverses an array
// This challenge is particularly helpful if you're planning to become a Data Scientist.
// Manipulating data is a significant part of the role, and building the foundations now will help you
// later down the road when you're working with large databases.
// Start small here and work your way up. Begin with an array of 5 numbers, and then try your program with a larger array to verify its success.

// Pattern1
let numbers = [1, 2, 3, 4, 5];
const reverseArray1 = (array) => {
  let newNumbers = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newNumbers.push(numbers[i]);
  }
  return newNumbers;
};

reverseArray1(numbers);

// Pattern2
let numbers = [1, 2, 3, 4, 5];

const reverseArray2 = (array) => {
  return array.reverse();
};

reverseArray2(numbers);

// =========================================================================

// 6. Sort an array from lowest to highest
// You could create a function for this solution as well, but be sure to try your program with varying lengths and types of arrays.
// Try one with all integers, another with negative numbers, and another with decimals.

// Pattern1
let numbers = [3, -2, 5, 4, 10, 6, 3, 1];
const sortArray1 = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let current = array[j];
        array[j] = array[j + 1];
        array[j + 1] = current;
      }
    }
  }
  return numbers;
};

sortArray1(numbers);

// Pattern2
let numbers = [3, -2, 5, 4, 10, 6, 3, 1];

const sortArray2 = (array) => {
  return array.sort(compareNumbers);
};

const compareNumbers = (a, b) => {
  return a - b;
};

sortArray2(numbers);

// =========================================================================

// 7. Create a function that filters out negative numbers
// In this challenge, you'll have a function that takes an array as an input and returns an array.
// But if all goes according to plan, it'll remove the negative numbers.
// This is another example of a task that'll be useful when combing through data and looking for clever ways to eliminate "bad data."

// Pattern1
let numbers = [3, -2, 5, 4, 10, 6, 3, 1];
const filterNegativeNumbers1 = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      array.splice(i, 1);
    }
  }
  return array;
};

filterNegativeNumbers1(numbers);

// Pattern2

let numbers = [3, -2, 5, 4, 10, -6, 3, 1];

const filterNegativeNumbers2 = (array) => {
  let result = array.filter(checkNegativeNumber);
  return result;
};

const checkNegativeNumber = (num) => {
  return num > 0;
};

filterNegativeNumbers2(numbers);

// =========================================================================

// 8. Remove the spaces found in a string
// Yet another way to clean up data is to remove any errors or unnecessary spaces.
// This function will take in a string and then return it with all spaces removed.
// Think about if you were tasked with cleaning up customer data at your job.
// You could scale this function to clean up specific fields of data, such as zip codes.

let myName = "Yuki K asugai";
const removeSpace = (str) => {
  return str.replace(/\s/g, "");
};

removeSpace(myName);

// =========================================================================

// 9. Return a Boolean if a number is divisible by 10
// Here, you'll create a function that'll give you a "true" or "false" Boolean as its output.
// The inputted number should only return a "true" if it's divisible by 10. Otherwise, your program should return a "false" answer.

const returnBoolean = (num) => {
  if (num % 10 === 0) {
    return true;
  } else {
    return false;
  }
};

returnBoolean(100);

// =========================================================================

// 10. Return the number of vowels in a string
// Create a function that'll return an integer of the number of vowels found in a string.
// This is a great way to practice determining the features of a dataset.
// If you use JavaScript later in your career, you'll be well-prepared to determine what datasets (or just strings) consist of.
// If you feel like an extra challenge, consider returning the number of characters.

let word = "Good morning everyone!";
const numberOfVowels = (str) => {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (const element of str.toLowerCase()) {
    if (vowels.includes(element)) {
      count++;
    }
  }
  return count;
};

numberOfVowels(word);

// =========================================================================
