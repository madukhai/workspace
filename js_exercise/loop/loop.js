function triangle(){
	var str = "";
	for (var i=0; i<6;i++){
		str += "#"
		console.log(str);
	}
}

function fizzBuzz(){
	var i = 1;
	while (i <= 100){
		if (i % 3 == 0 && i % 5 == 0){
			console.log("FizzBuzz");
		}else if (i % 3 == 0){
			console.log("Fizz");
		}else if (i % 5 == 0){
			console.log("Buzz");
		}else{
			console.log(i);
		}
		i++;
	}
}

function chessBoard(){
	var i = 0;
	var res = "";
	while(i < 72){
		i++;
		if(i % 9 == 0){
			res += "\n"
		}else if (i % 2 == 0){
			res += "#";
		}else{
			res += " ";
		}

	}
	console.log(res);
}

function numSqs(x){
	var i = 0;
	var res = "";
	while( i < x){
		i++;
		var j = 0;
		while ( j < i){
			res += i;
			j++;
		}
	}
	console.log(res);
}

//  upgraded for even if the input is more than 10, it remains the shape.
function numPyramid(x){
	var i =0;
	var res = "";
	while (i < x){
		i++;
		for(var k = 0; k < x-i; k++){
			res += "  ";
		}
		
		var j = 0;
		while (j < i){
			if(i < 10){
				res += " ";
			}
			res += "  ";
			res += i;
			j++;
		}
		res += "\n";
	}
	console.log(res);
}

function do_while(){

	var i = 0;
	do{
		console.log(i);
		i++;

	}
	while(i < 0);
}

numPyramid(9);