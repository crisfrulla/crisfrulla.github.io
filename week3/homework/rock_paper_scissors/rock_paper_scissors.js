var prompt = require('prompt');

// initializes game; prompts user for rock, paper, or scissors input
function init () {
	prompt.get('choice', function (err, result) {
		var choice = result.choice;

		// error handling - will run prompt again if user does not enter rock, paper, or scissors
		if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') return init();

		// triggers game
		startGame(choice)
	});
}

// turns on prompt; runs init
prompt.start();
init();

function startGame(userChoice) {
	var cpuChoice = generateCPUChoice();
	var winner = compare(userChoice, cpuChoice);
	console.log(winner + ' is the winner!');
}

// YOUR CODE BELOW!

// 1. The function generateCPUChoice should randomly generate and return one of the following values: 'rock', 'paper', or 'scissors'
// Start by creating an array containing: ['rock', 'paper', 'scissors']
// Then, randomly generate a whole number between 0 and 2
// Use this randomly generated number to pull a value from the array (eg myArray[ranomNum])
// Ensure you return this value!
function generateCPUChoice () {
	var gameValues = ['rock', 'paper', 'scissors'];
	var max = 2;
	var randomValues = 	Math.floor( Math.random() * ( max + 1 ) );
	var gameDrawn = gameValues[randomValues];
	return gameDrawn;
}

// 2. The function compare takes two strings (userChoice and cpuChoice) that represent the user's and cpu's respective choices: 'rock', 'paper', or 'scissors'
// This function should compare the two choices, and return a winner
// For example, if userChoice === 'rock' and cpuChoice === 'scissors', then 'user' should be returned
// Hint: use if/else/ele if logic to compare the values and return a winner
var cpuChoice = generateCPUChoice();
var userChoice = generateCPUChoice();


function compare(userChoice, cpuChoice) {

	if ( userChoice === "rock" &&  cpuChoice === "rock") {
		return "Tie: rock - rock";
	} else if ( userChoice === "rock" &&  cpuChoice === "scissors" ) {
		return "You win: rock - scissors";
	} else if ( userChoice === "rock" &&  cpuChoice === "paper") {
		return "You lost: rock - paper";
	} else if ( userChoice === "scissors" &&  cpuChoice === "scissors") {
		return "Tie: scissors - scissors";
	} else if ( userChoice === "scissors" &&  cpuChoice === "rock") {
		return "You lost: scissors - rock";
	} else if ( userChoice === "scissors" &&  cpuChoice === "paper") {
		return "You win: scissors - paper ";
	} else if ( userChoice === "paper" &&  cpuChoice === "paper") {
		return "Tie: paper - paper";
	} else if ( userChoice === "scissors" &&  cpuChoice === "rock") {
		return "You lost: scissors - rock";
	} else if ( userChoice === "scissors" &&  cpuChoice === "paper") {
		return "You win: scissors - paper";
	}
}

compare(userChoice, cpuChoice);
