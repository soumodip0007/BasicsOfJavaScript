//Math objects

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//random numbers 

const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));

//primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne ${scoreOne} scoreTwo ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne ${scoreOne} scoreTwo ${scoreTwo}`);

//reference values

const userOne = {name: 'wiz', age: 30};
const userTwo = userOne;

// const userTwo = {name: 'vulk', age: 25};
console.log(userOne, userTwo);
userOne.age = 50;
console.log(userOne, userTwo);
userOne.name = 'vulk';
console.log(userOne, userTwo);

