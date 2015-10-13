var name;
name = "Zhoufeng Zheng";
// alert("Hello! " + name);
var x;
x = 11245
var answer = x % 2;
console.log(answer);
var a = true;
var b = false;
var c = true;
var d = a || b || c;
var e = a && b && c;
var answer1 = 10 - 3 * 5/4 + 202 % 3;
var answer2 = 10 - (3 * (5/4) + (202 % 3));
var result = "answer1 is " + answer1 + "; \nanswer2 is " + answer2 + ".";
console.log(result);
var i = 12;
var j = i.toString();
console.log("j is " + j + ' and type is ' + typeof(j));
var n = "113";
n = parseInt(n);
console.log("n is " + n + ' and type is ' + typeof(n));
var m = "1.12356";
m = parseFloat(m);
console.log("m is " + m + ' and type is ' + typeof(m));
x = parseInt("Hello World");
console.log(x);

var re = /ab + c/;
var e = new RegExp("ab + c");
if (e == re){
	console.log(e);
}else {
	console.log(re);
	console.log(e);
}
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);
var s = "BrainStation";
var s1 = "I'm a BrainStation student.";
var s2 = "I'm a student."
console.log(s1.search(s));
console.log(s2.search(s));
var s3 = "Junior Developer";
newstr = s1.replace(s, s3);
console.log(newstr);

// conditionals.


















