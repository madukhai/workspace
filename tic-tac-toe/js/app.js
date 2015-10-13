// listener.



$('#btn1').click(press);
$('#btn2').click(press);
$('#btn3').click(press);
$('#btn4').click(press);
$('#btn5').click(press);
$('#btn6').click(press);
$('#btn7').click(press);
$('#btn8').click(press);
$('#btn9').click(press);

// global varibles.
var player = 0;
var board = [[],[]];
var filled = 0;
var winRoute = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8]];

// functions.


function press(){
	console.log(player);
	if (player == 0){
		$(this).css("background-color", "red");
	}else{
		$(this).css("background-color", "green")
	}
	switch (this.id){
		case "btn1":	
			board[player][0] = 0;
			break;
		case "btn2":
			board[player][1] = 1;
			break;
		case "btn3":
			board[player][2] = 2;
			break;
		case "btn4":
			board[player][3] = 3;
			break;
		case "btn5":
			board[player][4] = 4;
			break;
		case "btn6":
			board[player][5] = 5;
			break;
		case "btn7":
			board[player][6] = 6;
			break;
		case "btn8":
			board[player][7] = 7;
			break;
		default:
			board[player][8] = 8;
	}
	check();
	switchPlayer();
	filled ++;
	if (filled == 9){
		alert("You are TIED!");
	}
}

function switchPlayer(){
	if(player == 1){
		player = 0;
	}else{
		player = 1;
	}
}
function check(){
	var i = 0;
	while (i < 7){
		// because the winRoute has 7 elements.
		var first = winRoute[i][0];
		var second = winRoute[i][1];
		var third = winRoute[i][2];
		var playerboard = board[player];
		if (first == playerboard[first] &&
			second == playerboard[second] &&
			third == playerboard[third]){
			alert("Player " + player + " wins!");
			break;
		}
		i++;
		
	}


}








