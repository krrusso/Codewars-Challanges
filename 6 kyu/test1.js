/*function reduce(fraction, n){
 if (fraction[0] == fraction[1]){return fraction;}
 if (!n){n=2;}
 if (fraction[0]%n==0 && fraction[1]%n==0){return reduce ([fraction[0]/n, fraction[1]/n]);}
    if(n*2>fraction[0] && fraction[1]){
    	return fraction;}
  else {return reduce(fraction, n+1);}
}

console.log(reduce([10956590, 13611876]))
*/

/*function reduce(fraction, n){
 if (fraction[0] == fraction[1]){return fraction;}
 if (!n){n=Math.floor(Math.max(fraction.reduce(function(a,b){
  return Math.max(a,b)}))/2)
  console.log (n)}
  if (fraction[0]%n==0 && fraction[1]%n==0){return [fraction[0]/n, fraction[1]/n];}
    if(n<=0){return fraction;}
  else {return reduce(fraction, n-1);}

}
*/
/*function reduce(fraction){
    var g = gcd(fraction[0], fraction[1]);
    return [fraction[0] / g, fraction[1] / g]; //simplify me!
}

function gcd(a, b){
	console.log (b + ' ' + a);
  return b === 0 ? a : gcd(b, a % b);
}

console.log (reduce([744, 86]));

function tribonacci(signature,n){
  if (n==0){return [];}
  signature = tribonacci(signature.push(signature[
}*/

//var s ="stuff";
//s[3]="Q";
//console.log (s);


/*function concatString (){
  var sum =''
    var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
    str = args.forEach(function(n){sum += n});
    return sum;
}

var x = concatString('this', ' ', 'is', ' ', 'test');
console.log (x);

*/

function join (arr, del) {
  var str='';
    for (i=0; i<=arr.length-1; i++){
    if (!del) {str += arr[i];
} else {str += arr[i] + del;
}
}

if (!del) {
    return str;
} else {
    var res = str.substring(0, str.length-1);
    return res;
}
}

console.log (join(['apple', 'banana', 'cherry'], '/'));









