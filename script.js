/*
How many hours did you spend on this assignment?:
1 hour
What part of the assignment did you spend the most time on?:
uploading onto github
How comfortable did you feel with this assignment? (1-5):
4
Is there anything in this code that you feel pleased about?:
copied most of the code from earlier classes
What's one aspect of your code you would like specific, elaborate feedback on?:
which part of the code is not scalable / could be improved?
*/

var generateRockScissorsPapers = function () {
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    return "rock";
  }
  if (randomNumber == 1) {
    return "paper";
  }
  if (randomNumber == 2) {
    return "scissors";
  }
};

var winCounter = 0;
var totalPlays = 0;
var userName = "";

var main = function (input) {
  if (userName == "") {
    userName = input;
    return `welcome ${userName}! please input rock / paper / scissors to play!`;
  }
  computerChoice = generateRockScissorsPapers();
  console.log(computerChoice);
  if (input != "rock" && input != "paper" && input != "scissors") {
    return `dear ${userName} please input only rock / paper / scissors only`;
  }

  if (
    (input == "rock" && computerChoice == "scissors") ||
    (input == "scissors" && computerChoice == "paper") ||
    (input == "paper" && computerChoice == "rock")
  ) {
    winCounter += 1;
    totalPlays += 1;
    return `${userName} chose ${input} ! computer chose ${computerChoice} ! ${userName} wins! <br> so far ${userName} won ${winCounter}/${totalPlays} rounds`;
  } else if (input == computerChoice) {
    totalPlays += 1;
    return `${userName} and computer both chose ${input} ! it's a tie! <br> so far ${userName} won ${winCounter}/${totalPlays} rounds`;
  } else {
    totalPlays += 1;
    return `${userName} chose ${input} ! computer chose ${computerChoice} ! ${userName} loses! <br> so far ${userName} won ${winCounter}/${totalPlays} rounds`;
  }
};
