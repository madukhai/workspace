/*
	Battle of the Century
	---------------------------------------
	The time has come for the most anticipated boxing match of
	the 21st century. 

	Fat Ronald vs Skinny Joe!

	Fat Ronald hits like a truck, but he has little in the way of speed
	and accuracy.

	Skinny Joe doesn't have much meat on his bones, but his boxing
	skills are top notch and he can get in and out quickly.

	== INSTRUCTIONS ==
	Design a game that allows Fat Ronald and Skinny Joe to duke it out!

	Fat Ronald lands his punches 25% of the time, but he hits for 2 HP
	Skinny Joe lands his punches 50% of the time, but he hits for 1 HP

	Once one of their HP's reaches 0 you should stop the game a declare a winner!

	Be sure to add some fun commentary when they land a punch or miss.

	== HINT == 
	getRandom returns a random number between the min and max inclusive.
	so for getRandom(1, 2) it could return either a 1 or a 2
*/

var joeHP = 4;
var ronaldHP = 4;
var game = true;

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

function fight() {

	// Joe Punches
	
		console.log("Joe Throws a Jab...");
		var hit = Math.random();
		if (hit <= 0.5){
			ronaldHP --;
			console.log("hit!");
			if(ronaldHP == 0){
				console.log("It's over! Finally Joe beats that monster! Joe came, Joe saw, Joe conquered!");
				game = false;
			}
		}else{
			console.log("miss~lol");
		}
		
	

	
		
		// Ronald Punches
		console.log("Here comes Fat Ronald...");
		var hit = Math.random();
		if (hit <= 0.25){
			joeHP -= 2;
			console.log("hit!");
			if (joeHP == 0){
				console.log("Joe is down! He made it! Ronald made it! Oh my god... what a punch!!!");
				game = false;
			}
		}else{
			console.log("miss~lol");
		}
	
		
	
	// Round Recap
	console.log("After that round Joe's HP is at " + joeHP + " and Ronald's is at " + ronaldHP + "\n")

	// Keep the loop going
	return game;
}

var gameLoop = setInterval(function () {
	if (!fight()) {
		clearInterval(gameLoop); // clears the interval and stops the game
	}
}, 1000); //pauses the loop for 1 second and then reruns










