// Defining variables
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const button = document.querySelector('#button');
const ps = document.querySelector('#p-score');
const cs = document.querySelector('#c-score');
const rounds = document.querySelector('#rounds');
const winner = document.querySelector('#winner');
const display = document.querySelector('#display');
const stats = document.querySelector('#stats');

// Initially taking the round var as 0;
let round = 0;
// Defining 2D array for both the player;
let score = [0, 0];

// Defining weapons array
const weapons = ['rock', 'paper', 'scissor'];

// Use of methods like Math.floor and Math.random to randomly choose the weapon
let compChoice = () => {
	let choice = weapons[Math.floor(Math.random() * weapons.length)];
	// returning the choice is a must to output the result
	return choice;
};

// Display button property
button.style.display = 'none';

//Event Listeners

button.addEventListener('click', clearAll);

// Here the function of the addEventListener is array func becoz ->
rock.addEventListener('click', () => {
	playGame('rock', compChoice());
});

paper.addEventListener('click', () => {
	playGame('paper', compChoice());
});

scissor.addEventListener('click', () => {
	playGame('scissor', compChoice());
});

// Functions

// playGame function - switch case to pick the choice from user and comp and display the winner
function playGame(playerChoice, compChoice) {
	button.style.display = 'none';
	switch (playerChoice) {
		case 'rock':
			if (compChoice === 'paper') {
				winner.textContent = `You loose compChoice:${compChoice}, yourChoice: ${playerChoice}`;
				score[1]++;
				ps.textContent = `${score[0]}`;
				cs.textContent = `${score[1]}`;
			} else if ((compChoice = 'scissor')) {
				winner.textContent = `You win compChoice:${compChoice}, yourChoice: ${playerChoice}`;
				score[0]++;
				ps.textContent = `${score[0]}`;
				cs.textContent = `${score[1]}`;
			} else {
				winner.textContent = `It's a tie`;
				ps.textContent = `${score[0]}`;
				cs.textContent = `${score[1]}`;
			}
			break;
		case 'paper':
			if (compChoice === 'scissor') {
				winner.textContent = `You loose compChoice:${compChoice}, yourChoice: ${playerChoice}`;
				score[1]++;
				ps.textContent = `${score[0]}`;
				cs.textContent = `${score[1]}`;
			} else if ((compChoice = 'rock')) {
				winner.textContent = `You win compChoice:${compChoice}, yourChoice: ${playerChoice}`;
				score[0]++;
				ps.textContent = `${score[0]}`;
				cs.textContent = `${score[1]}`;
			} else {
				winner.textContent = `It's a tie`;
				ps.textContent = `${score[0]}`;
				cs.textContent = `${score[1]}`;
			}
			break;
		case 'scissor':
			if (compChoice === 'rock') {
				winner.textContent = `You loose compChoice:${compChoice}, yourChoice: ${playerChoice}`;
				score[1]++;
				ps.textContent = `${score[0]}`;
				cs.textContent = `${score[1]}`;
			} else if ((compChoice = 'paper')) {
				winner.textContent = `You win compChoice:${compChoice}, yourChoice: ${playerChoice}`;
				score[0]++;
				ps.textContent = `${score[0]}`;
				cs.textContent = `${score[1]}`;
			} else {
				winner.textContent = `It's a tie`;
				ps.textContent = `${score[0]}`;
				cs.textContent = `${score[1]}`;
			}
			break;
	}
	round++;
	rounds.textContent = `${round}`;
	if (round === 5) {
		endGame();
	}
}

//Ending function to update the winner and stats
function endGame() {
	if (score[0] > score[1]) {
		winner.textContent = `HURRAY you are the winner!!`;
	} else if (score[0] < score[1]) {
		winner.textContent = `Hmm Comp is the winner`;
	} else {
		winner.textContent = 'Tie Tie !!!';
	}

	button.style.display = 'block';
	stats.style.display = 'none';
}

//New game function
function clearAll() {
	score[0] = 0;
	score[1] = 0;
	rounds.textContent = `${(round = 0)}`;
	ps.textContent = `${score[0]}`;
	cs.textContent = `${score[1]}`;
	stats.style.display = 'block';
	winner.textContent = ``;
}
