/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(0,3).concat(my[3]).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

// my.shift();

const arr = my.slice(0,3);
arr.shift();

console.log(arr); // ["Elham", "Mazero"]
arr[0] = "Elzero";
console.log(arr[0]); // "Elzero"



console.log(arr[0][++counter]+arr[0][++counter].toUpperCase()); // "rO" 