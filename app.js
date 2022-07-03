let operator = '';
let a, b = 0;

init();

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
	switch (operation) {
		case "+":
			return add(a, b);
		case "-":
			return subtract(a, b);
		case "X":
			return multiply(a, b);
		case "/":
			return divide(a, b);
	}
}

function init() {
	const operations = document.querySelectorAll('.operator');
	operations.forEach(operator => {
		operator.addEventListener('click', setOperation);
	});

	document.getElementById('execute').addEventListener('click', () => {
		b = document.getElementById('display').value;
		document.getElementById('display').value = operate(operator, a, b);
	});

}

function setOperation() {
	operator = this.textContent;
	a = document.getElementById('display').value;
}



module.exports = {
	add,
	subtract,
	multiply,
	divide,
	operate
};
