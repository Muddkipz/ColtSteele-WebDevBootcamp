function isEven(x) {
	return num % 2 === 0;
}

function factorial(num) {
	var result = 1;

	for(var i = 2; i<= num; i++) {
		result = result * i;
	}
}


function kebabToSnake(str) {
	var str;

	var newStr = str.replace(/-/g, "_");

	return newStr;
}