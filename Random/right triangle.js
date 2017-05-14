function rightTriangle(rows) {
   
   	for (n=rows, output=''; n>0; n--){
   		for (i = n; i>0; i--){
   			output += '*';
   		}
   		if (n!==1){output += '\n';}
   	} 
   	return output;
} 

test = rightTriangle(4);
console.log (test);