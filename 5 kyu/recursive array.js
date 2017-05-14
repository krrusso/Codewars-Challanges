      function arrSum(arr) {
		  var sum = 0;
		  for (var i = 0; i < arr.length; i++) {
			   if (typeof arr[i] == 'object'){
			      sum += arrSum(arr[i]);
			   }else if (Number(arr[i])){
			      sum += arr[i];
			   }
		  }
		  return sum;
		}

var test = arrSum([1,3,5,7, [5, 10, [2, 2]]]);
console.log (test);