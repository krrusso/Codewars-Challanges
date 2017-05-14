 function decodeMorse (morseCode){
morseCode = morseCode.trim();

	function translateLetter (morse) {return MORSE_CODE[morse];} 

	function translateWord (word) {
		word = word.split(' ');
		for (i=0, wurd=''; i<word.length; i++){
			wurd += translateLetter(word[i]);
		}
		return wurd;
	}

	function tanslateSentence (morseCode) {
		morseCode = morseCode.split('   ');
		for (n=0, sentence=''; n<morseCode.length; n++){
			sentence += translateWord(morseCode[n]) + ' ';
		}
	return sentence;
	}

return tanslateSentence(morseCode).trim();

}


console.log(decodeMorse ('hey jude'));

/*
Test.describe("Example from description", function(){
Test.assertEquals(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
});

Test.describe("Your own tests", function(){
// Add more tests here
});

*/