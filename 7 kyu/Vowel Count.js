function getCount(str) {
  var vowelsCount = 0;
  
 str = str.match(/a|e|i|o|u/gi);
 vowelsCount = str.length;
  
  return vowelsCount;
}

test = getCount('this is the test string with 6');
console.log (test);