var x = 10;
var y = 10;
function test(){
	x = 5;
	var y = 5;
	function add(){
		x = 2;
		var y = 2;
		console.log(x);
		console.log(y);
		console.log("-------");
	}
	add();
	console.log(x);
	console.log(y);
	console.log("-------");
}
test();
console.log(x);
console.log(y);
