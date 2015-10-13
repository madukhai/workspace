var number_of_conditions = 6;

function show_answer(option){
 
	var answer;

	// write conditions here
	switch (option){
		case 1:
			answer = "Good Luck!";
			break;
		case 2:
			answer = "You can DO IT!";
			break;
		case 3:
			answer = "You are Sooooooooo beautiful!";
			break;
		case 4:
			answer = "I'm sorry..";
			break;
		case 5:
			answer = "You're ignored....";
			break;
		default:
			answer = "You're done.";
	}

	display_answer(answer);
}


// listener.
$('#start').click(hangman);
$('#key').keyup(match);

// global variables.

var tries = 12;
var word; 
var length; 
var used = "";
var matched = [];
var key = "";
var i;

//  functions

function hangman(){
	used="";
	matched = [];
	word = prompt("please type a word for your friend!");
	length = word.length;
	$('#length').val(length);
	
}

	
	
function match(){
	if (!word){
		alert("please press start botton");
		return;
	}
	key = $(this).val();
	if(used.search(key) == -1){
	
		used += key.slice(-1);
		
		$('#used').val(used);

	}
	
		var index = 0;
	var o = 2;
	i = 0;
	var found = false;
	while(index > -1 && i < length){
		index = word.substring(i, length).search(key);
		if( index > -1){
			found = true;
		}
		i += index ;
		matched[i] = key;
		i ++;

	}

	if( matched.toString() == word.split("").toString()){

		alert("YOU WIN!");
	}
	$('#matched').val(matched.join(" "));
	if (found == false){
		tries --;
	}
	if (tries == 0) {
		alert("YOU LOST!... WORD is " + word);
	}
		
	
	$(this).val("");
	$('#tries').val(tries);
}

	





