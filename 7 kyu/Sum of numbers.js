function GetSum( a,b )
{
	function makeArray (a){
		var parr = [];
		for (n=a[0]; a[1]-n>=0; n++){
			parr.push(n);
		}
		return parr;
	}
	
	var arr = [a, b];
	arr = arr.sort((a, b) => {return a-b});
	var karr = makeArray(arr);
	//var starr = arr.map((a, b) => {while (b-a >0){return}})
	//var starr = arr.map(function (a,b) {return a++});
	starr = karr.reduce((arr, total) => {return arr + total});
   return starr;
}

console.log (GetSum(3, 7));

/*
//--------  MUCH BETTER CODE ---------
//RECURSIVE

function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
} */