function findNb(m) {
 var pile = 1;
 if (m===pile){return 1;}
	for (n= 2; n<(Math.sqrt(m)); n++){
		if (pile == m){return n-1;}
		pile += Math.pow(n, 3);
		//if (n>10000000){return -1, console.log ('exit');}
	}

    return (-1);
}

console.log (findNb(91716553919377));