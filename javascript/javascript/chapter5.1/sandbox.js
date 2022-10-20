// const para = document.querySelector('p');
// const para = document.querySelector('.error');
// const para = document.querySelector('div.error');
// const para = document.querySelector('body > 1');

// console.log(para);

const paras = document.querySelectorAll('p');

// paras.forEach(para =>{
//     console.log(para);
// })

const errors = document.querySelectorAll('.error');

console.log(paras[0]);
console.log(paras[2]);
console.log(errors);

// get an element by ID
const title = document.getElementById('page-title');
console.log(title)


// get an element by their class name we can't use forEach in it.
const error = document.getElementsByClassName('.error');
console.log(error);


//get element by their class name
const para = document.getElementsByTagName('p');
console.log(para);
console.log(paras[1]);
