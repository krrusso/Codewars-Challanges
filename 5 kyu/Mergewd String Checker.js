function isMerge(s, part1, part2) {
  
  
	//console.log (s + '---' + part1 + '---' + part2);
  	part1=part1.trim().split('');
	part2=part2.trim().split('');
	s=s.trim().split('');
	//console.log (s + '---' + part1 + '---' + part2);

	if (part1.length + part2.length != s.length){return false;}


	for (n=0, arr = [s[0]], p1=0, p2=0; n<s.length; n++){
    if (part1[p1] === part2[p2]){
    	for (i=n, P1=p1, P2=p2; i<s.length-n; i++){
    		if(part1[P1] === s[i] && part2[P2] === s[i]){P1++, P2++, arr.push(part1[P1] || part2[P2]);}
    		else {break;}
    		//console.log ('checker');
    	}
    	//console.log ('checker' + '  ' + part1[P1] + '  ' + part2[P2]);
    	if (P1>P2){p1 += P1, n += i;} else {p2 += P2, n+= i;}
    }
    	//console.log(part1[p1] + '  ' + part2[p2] + '  ' + s[n]);
		if(part1[p1]===s[n]){p1++, arr.push(part1[p1]);}
		else if (part2[p2]===s[n]){p2++, arr.push(part2[p2]);}
		else {
    console.log('false-end')
    console.log (arr);
    return false;}
	}
  console.log('true-end');
  return true;
}

console.log(isMerge("e&T?L((R%x8?1-JQ,tR@n82d':", '&T?L(R?-J,@nd:', 'e(%x81QtR82\''));

//e&T?L((R%x8?1-JQ,tR@n82d':---&T?L(R?-J,@nd:---e(%x81QtR82' false-end

/*
----------BETTER SOLUTION-------

function isMerge(s, part1, part2) {
  return !s ? !(part1 || part2) :
    s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2) ||
    s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
}

*/