//break and continue

const score = [50,25,47,58,100,70,98,91];
for (let i=0; i<score.length; i++){

    if(score[i] === 0){
        continue;
    }
    console.log('score =', score[i]);
    
    if(score[i] === 100){
        console.log('you got top score');
        break;
    }

}

//switch statements

const grade = 'A';

switch(grade){
    case 'A':
        console.log('A');
        break;
    case 'B':
        console.log('B');
        break;
    case 'C':
        console.log('C');
        break;
    case 'D':
        console.log('D');
        break;
    case 'E':
        console.log('E');
        break;
    default:
        console.log('Not valid');
}




//using if statement
if(grade === 'A'){

}else if(grade === 'B'){

}else if(grade === 'C'){
    
}else if(grade === 'D'){
    
}else if(grade === 'E'){
    
}else{

}

//Variables & block scope
let age = 30;

if(true){
    let age = 40;
    let name = 'pekka';
    console.log('inside the code block', age,name);

//   if(true){
//     let age = 50;
//     console.log('inside 2nd code block', age);
//     var test = 'hello!'
//   }
    console.log('outside code block', age,name,test);
}

    // const age = 30;

    // if(true){
    //     const age = 40;
    //     const name = 'pekka';
    //     console.log('inside the code block', age,name);
    // }
    //   if(true){
    //     const age = 50;
    //     console.log('inside 2nd code block', age);
    //   }
    //     console.log('outside code block', age,name);