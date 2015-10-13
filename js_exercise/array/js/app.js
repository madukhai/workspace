


function makeNumArray(n){
	var nums = [];
	for(var i=0;i<n;i++){
		nums.push(Math.floor(Math.random()*1000 + 1));
	}
	return nums;
}

function sumUpDivisible(){
	var length = nums.length;
	var sumUp = 0;
	for(var i=0;i<length;i++){
		if (nums[i]%5 == 0){
			sumUp += nums[i];
		}
	}
	console.log(sumUp);
}

function insertion_sort(a){
	var length = a.length;
	for(var i=0;i<length;i++){
		for (var k=i ; k > 0 && a[k] < a[k-1]; k--){
			var current = a[k];
			a[k] = a[k-1];
			a[k-1] = current;
		}
	}
}

function selection_sort(a){
	var length = a.length;
	for(var i=0;i<length;i++){
		var key = i;
		for(var j=i;j<length;j++){

			if(a[key] > a[j]){
				key = j;
			}
		}
		
		var current = a[i];
		a[i] = a[key];
		a[key] = current;
		
	}

}

function bubble_sort(a){
	var length = a.length;
	for (var i=0;i<length;i++){

		for(j=0;j<length-i;j++){
			if(a[j] > a[j+1]){
				var current = a[j];
				a[j] = a[j+1];
				a[j+1] = current;
			}
		}
	}
}

function merge_sort(a){
	var res = [];
	var length = a.length;
	if (length == 1){
		return a;
	}else{
		
		var h = length/2;
		var left = a.slice(0,h);
		var right = a.slice(h,length);
		left = merge_sort(left);
		right = merge_sort(right);
		res = merge(left,right);

		return res;
		
	}
}

function merge(left, right){
	var res = [];
	var i = 0;
	var j = 0;
	console.log(left);
		console.log(right);
	while (i < left.length && j < right.length){

	
		if(left[i] < right[j]){
			res.push(left[i]);
			i++;
		}else{
			res.push(right[j]);
			j++;
		}
	}
	
	if ( i == left.length){
		res = res.concat(right.slice(j));
		
	}else{
		res = res.concat(left.slice(i));
	}
	console.log(res);
	console.log("-------------");
	return res;
}





// var a = makeNumArray(8);
// console.log(a);
// insertion_sort(a);
// console.log(a);
// console.log("insertion_sort---------------------");

// var b = makeNumArray(8);
// console.log(b);
// selection_sort(b);
// console.log(b);
// console.log("selection_sort---------------------");


// var c = makeNumArray(8);
// console.log(c);
// bubble_sort(c);
// console.log(c);
// console.log("bubble_sort---------------");

var d = makeNumArray(8);
console.log(d);
d = merge_sort(d);
console.log(d);

