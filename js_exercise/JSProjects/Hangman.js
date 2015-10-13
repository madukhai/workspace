/*
	Hangman
	---------------------------------------
	Let's make Hangman! Some code is already provided for printing
	a simple man as you guess wrong. Using the printHangman(count)
	function, add the code the print the man as someone gets
	wrong answers as well as the logic for the game.

	THIS ONE MUST BE DONE USING JSFIDDLE SINCE PROMPT IS USED.

	It would be helpful to write a command that allows you to stop 
	the game incase someone wants to quit.

	Your game wont be perfect but do your best!

	HINT: What type of conditional would be best for implementing
	the printHangman function? 
*/

function printHangman(count) {
	var man = "";
	var head = " ( ) \n";
	var arms = " \\|/\n";
	var belly = "  |\n";
	var legs = " / \\";
	man = man + head + arms+ belly + legs;

	alert(man);
}

var game = true;

while (game) {
    if (start == undefined) {
        var count = 0;
        var win = 0;
        var word = prompt("Pick a word!");
        var gameWin = word.length;
        console.log(gameWin + " wrong answers and you lose!");
    }
    var guess = prompt("Pick a letter!");
    var start = true;


}








