const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'clash royal is a high level game!';

const paras = document.querySelectorAll('p');

// paras.forEach(para =>{
//     console.log(para.innerText);
//     para.innerText += 'new text';
// });

const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML +='<h2> this is a new h2 </h2>';

const people = ['wiz', 'pekka', 'vulk'];
people.forEach(person =>{
    content.innerHTML += `<p>${person}</p>`
});