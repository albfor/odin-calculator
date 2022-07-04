let lastOperator = true;
let operator = "";
let a;
const display = document.getElementById("display");

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
	const operations = document.querySelectorAll(".operator");
	operations.forEach((operator) => {
		operator.addEventListener("click", handleOperationClick);
	});

	document.getElementById("evaluate").addEventListener("click", () => {
		if (a === undefined || operator === "") return;
		a = operate(operator, a, display.value);
		display.value = a;
		lastOperator = true;
	});

	const numbers = document.querySelectorAll(".number");
	numbers.forEach((n) => {
		n.addEventListener("click", (event) => {
			if (lastOperator) {
				display.value = event.target.textContent;
			} else {
				display.value += event.target.textContent;
			}
			lastOperator = false;
		});
	});

	document.getElementById("clear").addEventListener("click", clear);

	document.getElementById("decimal").addEventListener("click", (event) => {
		for (let i = 0; i < display.value.length; i++) {
			if (display.value.charAt(i) === ".") return;
		}

		display.value += event.target.textContent;
	});

	document.getElementById("undo").addEventListener("click", () => {
		display.value = display.value.slice(0, -1);
	});
}

function clear() {
	a = undefined;
	display.value = "0";
	lastOperator = true;
}

function handleOperationClick() {
	if (a === undefined) {
		a = display.value;
	} else {
		a = operate(operator, a, display.value);
		display.value = a;
	}
	operator = this.textContent;
	lastOperator = true;
}

module.exports = {
	add,
	subtract,
	multiply,
	divide,
	operate,
};
