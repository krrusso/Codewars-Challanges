var countBits = function(n) {
  if(n==0){return 0;}
  n= n.toString(2);
  n= n.match(/1/g);
  return n.length;
};

console.log(countBits(1028))