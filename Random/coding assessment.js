function firstRepeatingLetter(str) {
  
  for (n=0; n<str.length; n++){
  	for (i=1; i<str.length; i++){
  		if (str.charAt(n) === str.charAt(i+n)){
  			console.log (n + ' ' + i);
  			return str.charAt(n);
  		}
  	}
  } 
}

var test = firstRepeatingLetter('hannah');
console.log(test);