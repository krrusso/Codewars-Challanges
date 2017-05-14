function comp(array1, array2){
	if (!array1 || !array2){return false;}
  for (n=0; n<array2.length; n++){
  	for (i = 0; i<array1.length; i++){
  		console.log(n + ' ' + i);
      if (Math.pow(array1[i], 2) == array2[n]){break;}
  		else if (i == array2.length){return false;}
  	}
  }
return true;

}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 4, 19*19, 161*161, 19*19, 144*144, 19*19];

console.log (comp(a1, a2));