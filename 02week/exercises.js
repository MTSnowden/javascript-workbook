// length
let cars = ['Ford', 'BMW', 'Audi', 'Toyota'];
console.log(cars.length);

// conat
let moreCars = ['Buick', 'Mercedes', 'Lexus', "Honda"];
let totalCars = cars.concat(moreCars);
console.log(totalCars);
// cant figure out how to rename the new array

// indexOf and lastIndexOf
console.log(totalCars.indexOf('Honda'));
console.log(totalCars.lastIndexOf('Ford'));

// join
let stringOfCars = totalCars.join();
console.log(stringOfCars);

// split
totalCars = stringOfCars.split(" ");
console.log(totalCars);

// reverse
carsInReverse = totalCars.reverse();
console.log(carsInReverse);
// cant get this one to reverse. still prints items in order

// sort
carsInReverse.sort();
console.log(carsInReverse);
// alert(carsInReverse.indexOf('Audi'));
// not working

// slice

// splice

// push

// pop

// shift

// unshift

// forEach
