//object literals

let user = {
   name: 'wiz', 
   age: 25,
   email: 'abc@gmail.com',
   location: 'India',
   blogs: ['wiz deal with area splash', 'wiz has low 80hp only']
};

console.log(user);
console.log(user.name);

// user.age = 35;
console.log(user.age);

const key = 'location';
console.log(user['location']);

console.log(user['name']);
user['name'] = 'vulk';
console.log(user['name']);

console.log(typeof user);