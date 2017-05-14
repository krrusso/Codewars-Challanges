function alphabetPosition(text) {
	var x ='';
	text = text.toLowerCase();
	for (n=0; n<text.length; n++){
		if (text.charCodeAt(n) <= 122 && text.charCodeAt(n) >= 97){
		x =  x + ' ' + (text.charCodeAt(n));
		}
	}
  return x;
}

console.log (alphabetPosition('abcdefghijkllmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZX'));