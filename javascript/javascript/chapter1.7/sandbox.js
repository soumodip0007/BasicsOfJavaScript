let age = 25;

//loose comparison (different types can still be equal)

// console.log(age == 25);
// console.log(age == '25');
// console.log(age != '25');


//strict comaprison (different types cannot be equal)

// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

// //type conversion

// let score = '100';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = ('hello');
// let result = Number('hello');
// let result = String(50);
// let result = Boolean(100);
// let result = Boolean(0);
let result = Boolean('0');
// let result = Boolean('');
console.log(result, typeof result);