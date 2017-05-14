String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
function wave(s, result, n){
 	if (result.length===s.length){return result}
 		else if(!result){var result=[s], n=1;}
 		var upper =s.slice(n, n+1);
 		upper = upper.toUpperCase(upper);
 		upper = s.replaceAt(n, upper);
 		

 		}


}