// Exercise 1: Applying Array.prototype.map()
// Use `.map()` to iterate over the following array
// Create a new array where each value is multiplied by 2 and log the new array:

// const nums = [ 13, 87, 2, 89, 12, 4, 90, 63 ];
// const doubleNums = nums.map(num => {
//     return num * 2;
// })

// console.log(doubleNums);

// Exercise 2: Array destructuring
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

// const pizzaToppings = [ 'Pineapple', 'Olives', 'Anchovies' ];
// const [ firstPizzaTopping, secondPizzaTopping ] = pizzaToppings;

// console.log(firstPizzaTopping);
// console.log(secondPizzaTopping);

// Exercise 3: Destructuring objects
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };
// const { make, model } = car;

// console.log(make);
// console.log(model);

// Exercise 4: Applying the spread operator on arrays
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// const pizzaToppings = [ 'Pineapple', 'Olives', 'Anchovies' ];
// const controversialPizzaToppings = [ ...pizzaToppings ];

// console.log(controversialPizzaToppings);

// Exercise 5: Applying the spread operator on objects
// Duplicate the following object and spread its values into a new variable `myCar`.
// Change the `model` property of `myCar` to 'q7'. Log both objects.

// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };
// const myCar = { ...car };
// myCar.model = 'q7';

// console.log(car);
// console.log(myCar);

// Exercise 6: Dynamic keys in objects
// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// const propertyName = 'email';
// const userProfile = {
//     [propertyName]: 'test@email.com', 
// }
// console.log(userProfile);

// Exercise 7: Import and export
// see exportingFile.js and importingFile.js

//Exercise 8: Default parameters
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:
// 1. `cat`
// 2. `white`
// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// const sentence = (noun = 'cat', adjective = 'white') => {
//     console.log(`The ${noun} is ${adjective}.`);
// }
// sentence();
// sentence('dog', 'furry');

// Exercise 9: The ternary operator
// Convert the following `if...else` statement in to a ternary:

// let pizza = 'tasty';

// // if (pizza === 'tasty') {
// //   console.log('yum');
// // } else {
// //   console.log('yuck');
// // }

// pizza === 'tasty' ? console.log('yum') : console.log('yuck');

// Exercise 10: Boolean gates
// Simulated language configuration (change this variable to test)
const localLangConfig = null; // Change to 'es', 'fr', etc., or keep it null

// Create a variable called LANG
// Assign LANG the value of localLangConfig or 'en' as a default
const LANG = localLangConfig || 'en';

// Log the result
console.log('Language setting:', LANG);

// Simulated user theme preference (change this variable to test)
const userSavedTheme = 'dark'; // Change to 'dark', 'contrast', etc., or keep it null

// Create a variable called USER_THEME
// Assign USER_THEME the value of userSavedTheme or 'light' as a default
const USER_THEME = userSavedTheme || 'light';

// Log the result
console.log('User theme setting:', USER_THEME);