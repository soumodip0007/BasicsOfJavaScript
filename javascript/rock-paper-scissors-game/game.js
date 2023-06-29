const game = ()=> {
let uscore=0;
let cscore=0;

const startGame = ()=>{
    const playBtn = document.querySelector('.intro button');
    const introscreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener("click",()=>{
     introscreen.classList.add("fadeout");
     match.classList.add("fadein");

    });
};
// play match
 const playmatch=()=> {
        const options = document.querySelectorAll('.options button');
        const userhand = document.querySelector('.user-hand');
        const computerhand = document.querySelector('.computer-hand');
        const hands=document.querySelectorAll('.hands img');

        hands.forEach(hand=>{
            hand.addEventListener("animationend",function(){
        this.style.animation="";
       });
        });


        // computer options
        const computeroptions = ["rock", "paper", "scissors"];

    options.forEach(option=>{
    option.addEventListener("click",function(){
    const computernumber = Math.floor(Math.random() * 3);
    const computerchoice=computeroptions[computernumber];
setTimeout(()=>{
   comparehands(this.textContent,computerchoice); 
   
    // update images
    userhand.src=`./assets/${this.textContent}.png`;
    computerhand.src=`./assets/${computerchoice}.png`;
},2000);
    userhand.style.animation="shakerr 2s ease";
    computerhand.style.animation="shakerc 2s ease";
});
});
};

const updatescore=()=>{
    const userscore=document.querySelector(`.user-score p`);
    const computerscore=document.querySelector(`.computer-score p`);
    userscore.textContent=uscore;
    computerscore.textContent=cscore;
}

const comparehands=(userchoice,computerchoice)=>{
    const winner =document.querySelector('.winner');

    if(userchoice === computerchoice){
        winner.textContent="it is a tie";
        return;
    }

    // for a rock
    if(userchoice === 'rock'){
        if(computerchoice === 'scissors'){
            winner.textContent="Mario wins";
            uscore++;
            updatescore();
        return;
        }
        else{
            winner.textContent='Luigi wins';
       cscore++;
       updatescore();
        return;
        }
    }

// check for paper
    if(userchoice === 'paper'){
        if(computerchoice === 'scissors'){
            winner.textContent="Luigi wins";
           cscore++;
           updatescore();
            return;
        }
        else{
            winner.textContent='Mario wins';
          uscore++;
          updatescore();
    return;    
    }
    }
    

    // check for scissors
    if(userchoice === 'scissors'){
        if(computerchoice === 'rock'){
            winner.textContent="Luigi wins";
        cscore++;
        updatescore();
            return;
        }
        else{
            winner.textContent='Mario wins';
        uscore++;
        updatescore();
        return;
        }
    }
}


//its all the inner function
startGame();
playmatch();
};
game();
