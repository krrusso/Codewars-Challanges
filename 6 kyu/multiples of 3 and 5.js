function solution(number) {
	var arr = [0];
	var a = 0;
	for (n=0; n<number; n++){
		if(n %3 ===0 || n %5 ===0) {
			a++;
			arr[a] = n;
			//console.log(arr);
		}
	}
	for (c = arr.length; c>=0; c--){
		if (arr[c] %3 ===0  && arr[c] %5 ===0){
			console.log (arr[c]);
		}
	}


function add(a, b) {return a + b;}
	console.log (arr);
	var sum = arr.reduce(add, 0);
	return sum;
}


var test = solution(20);
console.log (test);

