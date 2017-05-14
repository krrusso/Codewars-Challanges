function accum(s) {
var res = '';
var str = s.split('');
	for (n=0; n<s.length; n++){
    res += str[n].toUpperCase();
    
    for (j=n; j>0; j--){
      res+= str[n];
  }
      if (n<s.length-1) {res+='-';}
    }
   return res;
}

console.log (accum('test'));