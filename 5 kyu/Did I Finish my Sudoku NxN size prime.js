var Sudoku = function(board) 
{
  //   Private methods
  // -------------------------

console.log(board);
sude (board);
  //   Public methods
  // -------------------------
  return {
    isValid: function sude (board) {
      // YOUR SOLUTION
	notMatch = 0;
	quadrant = [];
	s=0;
	match =0;
	size = board[0].length;
	console.log(board);

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
      //return true;
    }
  };
};

var goodSudoku1 = new Sudoku([
  [7,8,4, 1,5,9, 3,2,6],
  [5,3,9, 6,7,2, 8,4,1],
  [6,1,2, 4,3,8, 7,5,9],

  [9,2,8, 7,1,5, 4,6,3],
  [3,5,7, 8,4,6, 1,9,2],
  [4,6,1, 9,2,3, 5,8,7],
  
  [8,7,6, 3,9,4, 2,1,5],
  [2,4,3, 5,6,1, 9,7,8],
  [1,9,5, 2,8,7, 6,3,4]
]);

var goodSudoku2 = new Sudoku([
  [1,4, 2,3],
  [3,2, 4,1],

  [4,1, 3,2],
  [2,3, 1,4]
]);

var badSudoku1 = new Sudoku([
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9]
]);

var badSudoku2 = new Sudoku([
  [1,2,3,4,5],
  [1,2,3,4],
  [1,2,3,4],  
  [1]
]);


describe('Sudoku', function() {
  it ('should be valid', function() {
    Test.assertEquals(goodSudoku1.isValid(), true);
    Test.assertEquals(goodSudoku2.isValid(), true);
  });

  it ('should be invalid', function() {
    Test.assertEquals(badSudoku1.isValid(), false);
    Test.assertEquals(badSudoku2.isValid(), false);
  });
});
