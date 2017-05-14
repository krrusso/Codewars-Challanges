function encrypt(text, n) {
	if (n ==0){return text;}
	text = text.split('');
	for (k=0; k<n; k++){
			if (k>0){text = arr;}
			var arr = [];
	for (i=1; i<=2; i++){
	for (j=0; j<text.length; j++){
		if (i==1){
		if (j%2 != 0){
			arr.push(text[j]);
		}
	}
			else if (i==2){
				if (j % 2 == 0){arr.push(text[j]);}
			}
	}
}
}
arr = arr.join('');
return arr;
}

function decrypt(encryptedText, n) {
	if (n==0){return encryptedText;}
	function dcry(text, i, arr1, arr2){
		var arr2 = text.slice(text.length)
		
		if (arr1.length == text.length){
			console.log (arr1);
			return arr1.join('');}
		if (i % 2 != 0) {return arr1.push(text[i]) + dcry(text.slice(1), i+1, arr1);}
		else {
			return arr1.push(text[y+(i/2)]) + dcry(text.slice(y/2, (y/2+1)),  i+1, arr1);}
		}
	return dcry(encryptedText, 0, [], []);
}

var x = encrypt('abcdefgh', 1);
console.log (x);
var y = decrypt(x, 1);
console.log (y);


//"hsi  etTi sats!"
/*
	function dcry(encryptedText, i, arr1, arr2){
		
		console.log(arr1 + '||' + arr2);
		if (i == text.length){return arr1.concat(arr2).join('');}
		if (i%2!=0) {return arr1.push(encryptedText[i]) + dcry(encryptedText, i+1, arr1, arr2);}
		else if (i%2==0) {return arr2.push(encryptedText[i]) + dcry(encryptedText, i+1, arr1, arr2);}
	}*/