function sometimes(fn) {
	// your code goes here
  this.counter = 0;
  
  return function(){
    this.counter++;
    if (this.counter <4){
    console.log('sssss');
      return fn;
    }else if(this.counter == 4){
      return  "hmm, I don't know!";
    }else if(this.counter%2){
      return fn;
    }else{
      return "hmm, I don't know";
    }
    
  };
  
}

function add(a, b) {
  return a + b;
}
var f = add;
console.log(f);
console.log(f(12,2));

var s = sometimes(add);
if( s == f){
  console.log(s);
  console.log('------------');
}

var a = s(1,2);
var b = s(2,2);
var c = s(3,2);
var d = s(4,2);
var e = s(5,2);
var f = s(6,2);
var g = s(7,2);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(typeof(a));



// Create your own tests here. These are some of the methods available:
//  Test.expect(boolean, [optional] message) 
//  Test.assertEquals(actual, expected, [optional] message)
//  Test.assertSimilar(actual, expected, [optional] message)
//  Test.assertNotEquals(actual, expected, [optional] message) 
