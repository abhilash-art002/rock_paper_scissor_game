let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoise = (userChoice)=>{
  const option = ["rock","paper","scissor"];
  const randIdx= Math.floor(Math.random()*3);
  compResponseImage(option,randIdx,userChoice);
  return option[randIdx];
}

const compResponseImage = (option, randIdx, userChoice) => {
  const compChoice = option[randIdx];
  console.log("Computer chose:", compChoice);

  const isDraw = userChoice === compChoice;

  document.querySelectorAll(".choice").forEach(choice => {
    const id = choice.getAttribute("id");
    const img = choice.querySelector("img");
    const span = choice.querySelector("span");

    // Reset previous styles/text
    img.classList.remove("highlight");
    span.innerText = id;

    if (id === userChoice || id === compChoice) {
      choice.classList.add("active-choice");
      choice.classList.remove("dimmed-choice");

      if (isDraw && id === userChoice) {
        span.innerText = "Draw";
        img.classList.add("highlight");
      } else {
        if (id === userChoice) {
          span.innerText = "User";
        }
        if (id === compChoice) {
          span.innerText = "Comp";
          img.classList.add("highlight");
        }
      }

    } else {
      choice.classList.add("dimmed-choice");
      choice.classList.remove("active-choice");
    }
  });

  // Reset everything after 2 seconds
  setTimeout(() => {
    document.querySelectorAll(".choice").forEach(choice => {
      const id = choice.getAttribute("id");
      const img = choice.querySelector("img");
      const span = choice.querySelector("span");

      img.classList.remove("highlight");
      choice.classList.remove("dimmed-choice", "active-choice");
      span.innerText = id;
    });
  }, 2000);
};

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
  const compChoise =genCompChoise(userChoice);
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

document.querySelector("#reset-btn").addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
  msg.innerText = "Start playing!";
  msg.style.backgroundColor = "rgb(196 181 253)";
});








