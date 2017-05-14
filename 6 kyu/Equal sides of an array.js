function findEvenIndex(arr)
{
	function addEm(total, arr){return total + arr;}
  if (arr.length>1){
  for (n=1; n<arr.length -1; n++){
  	var left = arr.slice(0, n);
  	left = left.reduce(addEm);
  	var right = arr.slice(n+1, arr.length);
  	right = right.reduce(addEm);
  	if (left === right){return n;} 
  }
  } else if (arr.length ===1){return 0;}
  return -1;
  
}

console.log(findEvenIndex([1,2,3,4,3,2,1]));