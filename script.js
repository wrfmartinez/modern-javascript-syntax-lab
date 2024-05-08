// Exercise 1: Applying Array.prototype.map()
// Use `.map()` to iterate over the following array:
const nums = [13, 87, 2, 89, 12, 4, 90, 63];
// Create a new array where each value is multiplied by 2 and log the new array
const doubleNums = nums.map(num => {
    return num * 2;
})
// console.log(doubleNums);

// Exercise 2: Array destructuring
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstPizzaTopping, secondPizzaTopping] = pizzaToppings;
// console.log(firstPizzaTopping);
// console.log(secondPizzaTopping);

// Exercise 3: Destructuring objects
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
const { make, model } = car;
// console.log(make);
// console.log(model);

