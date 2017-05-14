function digital_root(n, a) {
  	if (n<10){return n;}
  	function getSum(total, num) {return parseInt(total) + parseInt(num);}
  	var arr = n.toString().split('').reduce(getSum);
  	return digital_root(arr, a+1)
}

var test = digital_root(15555);
console.log(test);