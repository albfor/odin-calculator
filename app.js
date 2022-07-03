let operator = '';
let a, b = 0;
const display = document.getElementById('display');

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
	a = Number(a);
	b = Number(b);
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
	display.value = 0;
	const operations = document.querySelectorAll('.operator');
	operations.forEach(operator => {
		operator.addEventListener('click', setOperation);
	});

	document.getElementById('execute').addEventListener('click', () => {
		b = display.value;
		display.value = operate(operator, a, b);
	});

	const numbers = document.querySelectorAll('.number');
	numbers.forEach(n => {
		n.addEventListener('click', (event) => {
			if (display.value === '0') {
				display.value = event.target.textContent;
			} else {
				display.value += event.target.textContent;
			}
		});
	});
}

function setOperation() {
	operator = this.textContent;
	a = display.value;
	display.value = 0;
}



module.exports = {
	add,
	subtract,
	multiply,
	divide,
	operate
};
