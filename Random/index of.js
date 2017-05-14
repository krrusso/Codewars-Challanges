function indexOf(str, queryStr) {
  

	  for (i=0; i<str.length; i++){
	  	for (j=0; j<queryStr.length; j++){
	  		if (str.charAt(i+j) != queryStr.charAt(j)){
			break;
	  		}
	  		if (j == queryStr.length -1){return i;}
	  	}
	  }
	  return -1
}

var test = indexOf('the string here', 'ri')
console.log (test);
