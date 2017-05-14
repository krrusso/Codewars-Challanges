function doneOrNot(board){
	notMatch = 0;
	quadrant = [];
	s=0;
	match =0;
	size = board[0].length;

	function findDuplicate(array){
	var testArray = array;
	testArray = testArray.sort(function(a, b){return a-b});
	  	for (n=0; n<size; n++){
	  	s++;
	  		if (testArray[n] != testArray[n +1]) {notMatch++;} 
	  		else {
	  			match++;
	  		}
		}
	}

	function createQuad(z, y){
	var x = 0;
		for (quadOut=0; quadOut<Math.sqrt(size); quadOut++){
			for (quadInside=0; quadInside<Math.sqrt(size); quadInside++){
			quadrant[x] = board[quadOut + z][quadInside + y];
			x++; 
			}
		}
	findDuplicate(quadrant);
	}

	for (quadMajor=0; quadMajor<size; quadMajor += Math.sqrt(size)){
		for (quadRow=0; quadRow<size; quadRow+= Math.sqrt(size)){
			createQuad(quadMajor, quadRow);
		}
	}

	for (boardCol= 0; boardCol<size; boardCol++){	
		col = board.map(function(value,index) {return value[boardCol]; });
		findDuplicate(col);
	}

	for (boardRow= 0, row =[]; boardRow<size; boardRow++){
		row[boardRow] = board[boardRow];
		findDuplicate(row[boardRow]); 
	} 
	console.log(match);
	if (size === 9){return (match === 0 ? 'true' : 'false')}
		else if (size === 4){return (match === 0 ? 'true' : 'false')}
	//if (board[0].length === )
}

/*var test1 = doneOrNot  ([
  [7,8,4,  1,5,9,  3,2,6],
  [5,3,9,  6,7,2,  8,4,1],
  [6,1,2,  4,3,8,  7,5,9],

  [9,2,8,  7,1,5,  4,6,3],
  [3,5,7,  8,4,6,  1,9,2],
  [4,6,1,  9,2,3,  5,8,7],

  [8,7,6,  3,9,4,  2,1,5],
  [2,4,3,  5,6,1,  9,7,8],
  [1,9,5,  2,8,7,  6,3,4]
]); */

var test1 = doneOrNot  ([
  [1,4, 1,3],
  [3,2, 4,1],

  [4,1, 3,2],
  [2,3, 1,4]
]); 

/*var test2 = doneOrNot ([[1, 3, 2, 5, 7, 9, 4, 6, 8], 
						[4, 9, 8, 2, 6, 1, 3, 7, 5], 
						[7, 5, 6, 3, 8, 4, 2, 1, 9], 
						[6, 4, 3, 1, 5, 8, 7, 9, 2], 
						[5, 2, 1, 7, 9, 3, 8, 4, 6], 
						[9, 8, 7, 4, 2, 6, 5, 3, 1], 
						[2, 1, 4, 9, 3, 5, 6, 8, 7], 
						[3, 6, 5, 8, 1, 7, 9, 2, 4], 
						[8, 7, 9, 6, 4, 2, 1, 3, 5]]);  */


console.log (test1);

