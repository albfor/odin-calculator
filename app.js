function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(operation, a, b) {
	return operation(a, b);
	// switch (operation) {
	// 	case "+":
	// 		return add(a, b);
	// 	case "-":
	// 		return subtract(a, b);
	// 	case "*":
	// 		return multiply(a, b);
	// 	case "/":
	// 		return divide(a, b);
	// }
}

module.exports = {
	add,
	subtract,
	multiply,
	divide,
	operate,
};
