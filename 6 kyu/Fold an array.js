function foldArray(array, runs)
{	
	var newarr=[], x=array.length;
	if (runs<1){return array;}
	for (n=0; n<Math.floor(array.length/2); n++, x--) {
		newarr.push(array[n]+array[x-1]);
		console.log (n + " " + x + " " + newarr) 
	}
	if (array.length%2 != 0){newarr.push(array[Math.floor(array.length/2)])}
  return foldArray (newarr, runs-1);
}
	
	console.log (foldArray([1,2,3,4,5], 2))
    //var input = [ 1, 2, 3, 4, 5 ];
    //var expected = [ 6, 6, 3 ];