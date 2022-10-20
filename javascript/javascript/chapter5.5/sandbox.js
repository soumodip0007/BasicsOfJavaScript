// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');

// paras.forEach( p => {
//     console.log(p.innerText); //textContent
// })
// paras.forEach( p => {
//     console.log(p.textContent); 
// });

paras.forEach( p => {
    if(p.innerText.includes('error')){
        p.classList.add('error');
    }
    if(p.innerText.includes('success')){
        p.classList.add('success');
    }
    if(p.innerText.includes('none')){
        p.classList.add('none');
    }
    if(p.innerText.includes('fail')){
        p.classList.add('fail');
    }

});

const title = document.querySelector('title');

title.classList.toggle('test');
// title.classList.toggle('test');