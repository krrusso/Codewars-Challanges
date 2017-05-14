var Sudoku = function(data) 
{
  //   Private methods
  // -------------------------



  //   Public methods
  // -------------------------
  return {
    isValid: function (board){
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
	  			//console.log (testArray[n]);
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
};
};