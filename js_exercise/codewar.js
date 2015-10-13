var vampire_test = function(a, b){
  var list1 = [];
   var list2 = [];
  var c = String(a) + String(b);
  var mul = String(a*b);
 

  if(c.length != mul.length){
      return false;
    }
  for(var j = 0; j<12; j++){
    list1.push(-1);
    list2.push(-1);
  }
  
  for(var i =0; i< mul.length; i++){
    var index = parseInt(mul[i]);
    
    if(mul[i] === "+"){
      index = 10;
    }else if(mul[i] === "-"){
      index = 11;
    }else{
       var index = parseInt(mul[i]);
   
    }
    list1[index]++;
   }
   
   for(var m = 0; m < c.length; m++){
      var index1 = parseInt(c[i]);
      if(c[i] === "+"){
        index1 = 10;
      }else if(c[i] ==="-"){
        index1 = 11;
      }else{
         var index1 = parseInt(c[i]);
      }
      console.log(index1);
      list2[index1]++;
   }

   console.log(list1);
  console.log(list2);

  for(var n=0;n<12;n++){
    if(list2[n] != list1[n]){
      return false;
    }
  }
 
  return true; // fix me
}




console.log(vampire_test(2947051,8469153));



