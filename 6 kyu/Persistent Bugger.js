function persistence(num, counter) {
	var stuff ='';
  counter = counter || 0;
	if (num<10){return counter;}
	stuff = num.toString();
   stuff = stuff.split('');
   var multiply = 1;
   	for (i=0; i<stuff.length; i++){
   	var multiply = stuff[i] * multiply;
		}
		return persistence(multiply, counter +1);
   }