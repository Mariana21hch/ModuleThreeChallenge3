// Assignment Code
const generateBtn = document.querySelector("#generate");
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

//
const randomFunc = {
	lower: getLower,
	upper: getUpper,
	number: getNumber,
	symbol: getSymbol
};

// Add event listener to generate button
generateBtn.addEventListener('click', () => {
	const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbols = symbolsEl.checked;
	
 // resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbols, length);
   alert(generatePassword(hasLower, hasUpper, hasNumber, hasSymbols, length));

});

//Generate password function

function generatePassword(lower, upper, number, symbol, length) {
	var generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);


	//Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}
	
	//create a loop
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}




/*Write password to the #password input
function writePassword() {
  var password = generatePassword();
 
  /* var passwordText = document.querySelector("#password");

  passwordText.value = password;

}*/

function getLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

