let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoise = ()=>{
  const option = ["rock","paper","scissor"];
  const randIdx= Math.floor(Math.random()*3);
  return option[randIdx];
}
const drawGame = ()=>{
  console.log("game was draw");
  msg.innerText = " Game was draw. play again!" 
  msg.style.backgroundColor="rgb(196 181 253)" 
  
}
const showWinner = (userwin,userChoice,compChoise) =>{
  if(userwin){
    userScore++;
    userScorePara.innerText=userScore;
    console.log("you win"); 
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoise}` ;
    msg.style.backgroundColor="green"  ;
  }else{
    compScore++;
    compScorePara.innerText=compScore;
    console.log("comp win");
    msg.innerText = ` You lose. ${compChoise} beats Your ${userChoice}`;
    msg.style.backgroundColor="red"  ;    
  }
}
const playGame = (userChoice)=>{
  console.log("user choise = ",userChoice);
  //generate comp choise
  const compChoise =genCompChoise();
  console.log("comp choise = ",compChoise);


  if (userChoice===compChoise){
    drawGame();
  }else{
    let userwin=true;
    if(userChoice === "rock"){
     userwin = compChoise === "paper" ? false : true;
    }else if(userChoice === "paper"){
      userwin = compChoise === "scissor" ? false : true;
    }else{
      userwin = compChoise === "rock" ? false : true ;
    }
    showWinner(userwin,userChoice,compChoise);
  }

};

choices.forEach((choice) => {
    choice.addEventListener("click" , ()=>{
    const userChoice=choice.getAttribute("id");
    console.log("choice was clicked" , userChoice);
    playGame(userChoice);
  });
});










