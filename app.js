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
}

module.exports = {
	add,
	subtract,
	multiply,
	divide,
	operate,
};
