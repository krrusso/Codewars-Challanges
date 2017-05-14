function createPhoneNumber(numbers){
var phoneNumber= '';
var i=0;
for (n=0; n<=14; n++){
	switch(n) {
    case 0:
        phoneNumber += '(';
        console.log(phoneNumber);
        break;
    case 4:
        phoneNumber += ')';
        break;
     case 5:
     	phoneNumber += ' ';
        break;
     case 9:
     	phoneNumber += '-';
        break;
     case 14:
         return phoneNumber;
    default:
    console.log (phoneNumber);
   		phoneNumber += '' + numbers[i];
   		i++;
   	}
} 

}

console.log (createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

