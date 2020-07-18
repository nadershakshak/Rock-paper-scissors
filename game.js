var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var result = document.getElementById("result")



function ourComputerChoice(){
var randomObject = ["rock", "paper", "scissors"]
  var myRandomNum = Math.floor(Math.random() * 3);

 if (myRandomNum == 0){
     return randomObject[0];
 } else if (myRandomNum == 1){
     return randomObject[1];
 } else {
     return randomObject[2];
 }
};

var myChoice;

function myOurChoice(){
    var ourChoiceHtml = ourComputerChoice();

    if ((myChoice == "rock" && ourChoiceHtml == "scissors")||(myChoice == "scissors" && ourChoiceHtml == "paper")||(myChoice == "paper" && ourChoiceHtml == "rock")){
        result.innerText = "Your choice = "+ myChoice + " " + "==>" +" Computer Choice = " + ourChoiceHtml + "==> " +" You Win 😁 ";
     } else if (myChoice == ourChoiceHtml){
         result.innerText = "Try again "+ "==>" +" Draw 🙄";
     } else {
        result.innerText =  "Your choice = "+ myChoice + " " + "==>" +" Computer Choice = " + ourChoiceHtml + "==> " + "You Loss 🙃";
     }
}
function rockClick() {
    myChoice = "rock";
    myOurChoice();
  }
  function paperClick(){
      myChoice = "paper"
    myOurChoice();
    }
    function scissorsClick(){
        myChoice = "scissors"
        myOurChoice();
    }
    rock.onclick = rockClick;
    paper.onclick = paperClick;
    scissors.onclick = scissorsClick;












