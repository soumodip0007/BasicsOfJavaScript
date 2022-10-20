const name = 'vulk';

//functions

const greet = () => 'hello';

let resultOne = greet();
console.log(resultOne);

//methods

let resultTwo = name.toUpperCase();
console.log(resultTwo);

//callBacks  

const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
};
myFunc(function(value){
    //do something
    console.log(value);
});
myFunc(value => {
    //do something
    console.log(value);
});



//foreach

let people = ['vulk', 'wiz', 'pekka', 'megaKnight', 'royalChampion'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

people.forEach((person, index) => {
    console.log(index, person);
});

//get a reference to the 'ul'
const ul = document.querySelector('.army');

const army = ['vulk', 'wiz', 'pekka', 'megaKnight', 'royalChampion'];

let html = ``;

army.forEach( person => {
    // create a html template
    html += `<li style="color: purple"> ${person}</li>`;
});
console.log(html);
ul.innerHTML = html;