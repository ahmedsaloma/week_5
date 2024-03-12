/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let str = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log( str.charAt(2).toUpperCase() + str.slice(3,6)); // Zero

// 8 H
console.log("H".repeat(8)); // HHHHHHHH

// Return Array
console.log(str.split(" ",1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(str.substr(0,7) + str.substr(11) ); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(str.substr(0,2).toLowerCase() + str.substr(2).toUpperCase()); // eLZERO WEB SCHOOl