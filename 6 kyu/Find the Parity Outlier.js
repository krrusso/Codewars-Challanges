function findOutlier(integers){
  var e=0;
  var o=0;
  for (n=0; n<integers.length; n++){
  	if (integers[n] % 2 === 0){e++;}
  		else {o++;}
  		//if (e === 1 && o > 1){return n+1;}
  		//if (o === 1 && e > 1){return n+1;}
  }

  function checkEven (num) {return num % 2 ===0;}
  function checkOdd (num) {return num % 2 !==0;}
  	if (o>e){return integers.find(checkEven);}
  	else {return integers.find(checkOdd);}
}

