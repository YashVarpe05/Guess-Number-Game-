const prompt = require("prompt-sync")();

console.log("***** WELCOME TO THE GUESS NUMBER GAME *****");
// initialize the computer randomizer
let random = Math.floor(Math.random() * 100 + 1);
let players;
let num;
let count = 0;
// convert string into number
random = Number.parseInt(random);
num = Number.parseInt(num);

// taking user input
players = prompt("Enter the Name  of player :");
num = prompt("Guess a Number  : ");

while (num != random) {
	if (random < num) {
		console.log("please Guess small number :");
	} else random > num;
	{
		console.log("please Guess big number :");
	}
	num = prompt("Guess a Number  : ");
	num = Number.parseInt(num);
	count++;
}

// calculate the score
let result = 100 - count;
// print the score and Attempt
console.log(`The Generated number :` + random);
console.log(`${players} is  Guess ${random} in  ${count}  attempt :)`);
console.log(`${players} Scour :${result}`);

console.log("***** THANK YOU FOR PLAYING *****");
