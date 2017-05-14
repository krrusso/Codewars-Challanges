function songDecoder(song){
 function isStr(str){
 	//console.log(typeof str[0]);
 	return typeof str[0] === 'string';
 }
 function spaceOut(arr){
 	return arr + " ";
 }

	var decoded = song.split("WUB");
	var stuff = decoded.filter(isStr);
	var x = stuff.join(' ');
	/*var last = stuff.pop();
	var x = stuff.map(spaceOut);
	x.push(last);
	x.reduce();*/

	return x;
}

var test = songDecoder("WUBAMWUBBWUBCWUB")
console.log(test);
