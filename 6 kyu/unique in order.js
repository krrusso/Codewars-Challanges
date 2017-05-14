var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  if (typeof iterable == 'string'){iterable = iterable.split('');}
  console.log	(iterable.length);
  var result = [iterable[0]];
  var i = 0;
  for (n=1; n<iterable.length; n++){
  		if (iterable[n] != iterable[n+1] && iterable[n] != result[i]) {
  			//return iterable [n];
  		console.log	(result.length)
  		result.push(iterable[n]);
  		i++;
  		}
  	}
  
  console.log	(result)
  return result;
}

var test = uniqueInOrder('AAAABBBCCDAABBB');