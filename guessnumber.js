const prompt = require("prompt-sync")();

console.log("***** WELCOME TO THE GUESS NUMBER GAME *****");
let random = Math.floor(Math.random() * 100 + 1);
let num;
random = Number.parseInt(random);
let count = 0;
num = prompt("Guess a Number  : ");
num = Number.parseInt(num);

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
let result = 100 - count;
console.log("you are Guess right number :" + random);
console.log("you are Guess number in " + count + " chances :)");

console.log("Your Scour : " + result);
console.log("***** THANK YOU FOR PLAYING *****");
