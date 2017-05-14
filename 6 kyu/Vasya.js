
/*

PROBLEM
-if you're given 100, and you only have 50's or 100's
-if you're given 50, and you only in your pocket, a mumber divisible by 50 (or zero dollars); */

function tickets(peopleInLine){
	var pocket =0, counter= 0;
  if (peopleInLine[0] > 25){return false;}
  function eval (peopleInLine, pocket, counter){
  	  pocket += peopleInLine[counter], pocket -= (peopleInLine[counter] - 25);
  	  if (peopleInLine[counter]==100){pocket -= 100;}
      if (pocket <0) {return 'NO';}
  	while (counter+1 < peopleInLine.length) {return eval (peopleInLine, pocket, counter+1)}
  		return 'YES';
  }
  return eval(peopleInLine, pocket, counter);
}

var test = tickets([25,25,50,100,25,25,50,100,25,25,50,100,25,25,50,100]);
