function Mormons(startingNumber, reach, target, n){
	if (startingNumber >= target && !n) return 0;
	else if (startingNumber >= target) return n
	if (!n) n=0;
	return Mormons(startingNumber+ (startingNumber*reach), reach, target, n+1);
}

var x = Mormons(40,2,121)
console.log (x);