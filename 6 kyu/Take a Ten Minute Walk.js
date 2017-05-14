function findOdd(A) {
	console.log (A);
	var why = A.sort(function(a, b){return a-b});
	console.log (why);
 for (n=0; n<=A.length; n++){
 	console.log (why);
  	if (why[n] === why[n+1]){
  		//console.log (why[n] + ' ' + why[n+1]);
  		why.shift();
  		why.shift();
  		n--;
  		//console.log (why);
  	} else {return why[n];}
  }
  return why; 
}

var test = findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);

console.log (test);