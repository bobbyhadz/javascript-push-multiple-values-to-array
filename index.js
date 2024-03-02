// EXAMPLE 1 - Push multiple Values to an Array in JavaScript

const arr = ['a'];

arr.push('b', 'c', 'd');
console.log(arr); // 👉️ ['a', 'b', 'c', 'd']

// ------------------------------------------------------------------

// // EXAMPLE 2 - Push multiple Values to an Array using spread syntax (...)

// let arr = ['a'];
// arr = [...arr, 'b', 'c', 'd'];

// console.log(arr); // 👉️ ['a', 'b', 'c', 'd']

// ------------------------------------------------------------------

// // EXAMPLE 3 - Push multiple Values to an Array using splice()

// const arr = ['a'];

// arr.splice(arr.length, 0, 'b', 'c', 'd');
// console.log(arr); // 👉️ ['a', 'b', 'c', 'd']

// ------------------------------------------------------------------

// // EXAMPLE 4 - Push multiple Values to an Array using unshift()

// const arr = ['d'];

// arr.unshift('a', 'b', 'c');

// console.log(arr); // 👉️ [ 'a', 'b', 'c', 'd' ]

// ------------------------------------------------------------------

// // EXAMPLE 5 - Push multiple Values to an Array using concat()

// const arr = ['a'];

// const result = arr.concat('b', 'c', 'd');

// console.log(result); // 👉️ [ 'a', 'b', 'c', 'd' ]
