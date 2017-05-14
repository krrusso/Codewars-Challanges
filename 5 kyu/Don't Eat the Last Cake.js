// Constructor (your Captain Obivious)
function Player(){}
// Decide who move first - player or opponent (true if player)
Player.prototype.firstmove = function(cakes){
  if (cakes==1){return false;}
  if (cakes%4==2){return false;}
  return true;
}
// Decide your next move
Player.prototype.move = function(cakes, last){
  if (cakes%4==1){return 3;}
  if (cakes%4==3){return 1;}
  if (cakes%4==0 && last ==2){return 3;} else {return 2;}
  return last == 1 ? 2 : 1;
}