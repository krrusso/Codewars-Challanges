function getHeight(cycles) {
    
    for (n = 1, height =1; n<=cycles; n++){
    	if (n%2 === 0){height++} 
    	else {height = height*2;}
}
return height;
}


var test = getHeight(3);
console.log (test);