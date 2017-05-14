/*function tribonacci(signature,n){
	//return signature;
  if (n==0){return [];}
  console.log (signature.length + ' ' + n);
  if (signature.length == n){
  var blah = signature;
  return blah;
  console.log (signature);
  return signature;
}
  if (n == signature.length){return signature;}
  if (n != signature.length){
  signature = tribonacci(signature.concat(signature.slice(signature.length-3).reduce((a,b) => {return a+b;})), n);
} else {return signature;}
}


test = tribonacci([1,1,1], 10);
console.log (test);*/

/*function tribonacci(signature,n){
  if (n==0){return [];}
  if (signature.length == n){return signature;}
  signature = tribonacci(signature.concat(signature.slice(signature.length-3).reduce((a,b) => {return a+b;})), n);
  return signature;
}*/

function tribonacci(signature, n){
  if (n==0){return [];}
  if (signature.length == n){return signature;}
  else {
  var stuff = signature.slice(signature.length-3);
  stuff = stuff.reduce((a,b) => {return a+b;});
  signature.push(stuff);
  return tribonacci (signature, n);
}
}

test = tribonacci([3,2,1],10);
console.log (test);