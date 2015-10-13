

function test(){
	var str = "Web Developement Immersive!";

	// slipt();
	var l1 = str.split();
	var l2 = str.split("");
	var l3 = str.split("e");
	var l4 = str.split(" ");

	console.log(str);
	console.log(l1);
	console.log(l2);
	console.log(l3);
	console.log(l4);


	console.log("\n---------------------------\n");
	
	// toString();
	console.log(l1.toString());
	console.log(l2.toString());
	console.log(l3.toString());
	console.log(l4.toString());

	console.log("\n---------------------------\n");
	// slice() & substring();

	var l5 = l2.slice(2,8);
	console.log(l5);

	var str1 = str.substring(2,8);
	console.log(str1);




}
test();
