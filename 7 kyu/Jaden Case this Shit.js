String.prototype.toJadenCase = function () {
  
  var str = this.trim();
  str = str.split(' ');
  console.log (str);
  
  function firstUpper (word){return word.slice(0,1).toUpperCase() + word.slice(1);}
  
  for (n=0, result =''; n<str.length; n++){
  result += firstUpper (str[n]) + " ";
  console.log (result);
  }
  
  return result.trim();
};

var str = 'jaden case this shit';
console.log(str.toJadenCase());