function iqTest(numbers){
  numbers = numbers.match(/\d+/g);
  console.log (numbers);
  var e=0;
  var o=0;
  for (n=0; n<numbers.length; n++){
  	if (numbers[n] % 2 === 0){e++;}
  		else {o++;}
  		//if (e === 1 && o > 1){return n+1;}
  		//if (o === 1 && e > 1){return n+1;}
  }

  function checkEven (num) {return num % 2 ===0;}
  function checkOdd (num) {return num % 2 !==0;}
  	if (o>e){return numbers.findIndex(checkEven) + 1;}
  	else {return numbers.findIndex(checkOdd) + 1}
  //console.log (numbers);
}

var test = iqTest("2 9 5 801 3 97 77 3");
console.log (test);