let userScore=0;
let copmScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const comScorepara=document.querySelector("#comp-score");

const showWinner=(userwin,userChoice,comchoice)=>{
    if(userwin)
        {
            userScore++;
            userScorepara.innerText=userScore;
            console.log("you win!");
            msg.innerText=`you win! your ${userChoice} beats ${comchoice}`;
            msg.style.backgroundColor="green";
        }
        else
        {
            copmScore++;
            comScorepara.innerText=copmScore;
            console.log("You lose");
            msg.innerText=`you lose your ${comchoice} beats ${userChoice}`;
            msg.style.backgroundColor="red";
        }
        
}

const drawGame=()=>{
     console.log("game was drow");
    msg.innerText="Game Was Drow.play again.";
    msg.style.backgroundColor="#081b31";
}

const genCompChoice=()=>{
    const option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
}

const playGame=(userChoice)=>{
     const comchoice=genCompChoice();
    if(userChoice===comchoice)
        {
            drawGame();
        }
        else
        {
            let userwin=true;
            if(userChoice==="rock")
                {
                    userwin=comchoice==="paper"?false:true;
                }
                else if(userChoice==="paper")
                {
                   userwin= comchoice==="scissors"?false:true;
                }
                else
                {
                    userwin=comchoice==="rock"?false:true;
                }
                showWinner(userwin,userChoice,comchoice);
        }
    
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});