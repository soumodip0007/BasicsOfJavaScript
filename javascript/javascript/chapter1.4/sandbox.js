//template strings
const title = 'Best reads of 2022';
const author = 'Satyajit Roy'
const likes = 3000000;

// concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

//template string way
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

//creating html templates
// let html = `
// <h1>${title}</h1>
// <p> By ${author} </p>
// <span>The blog has ${likes} likes </span>
// `;
