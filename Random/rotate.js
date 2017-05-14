function rotate(arr, steps) {
	for (n=0; n<steps; n++){
		//console.log (arr);
		var stuff  = arr.pop();
		arr.unshift(stuff);		
		//console.log(stuff);
	}
	return (arr);
}

var test = rotate([1,2,3,4,5], 4)

console.log(test);