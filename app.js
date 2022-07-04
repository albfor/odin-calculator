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
		case "*":
			return multiply(a, b);
		case "/":
			return divide(a, b);
	}
}

function init() {
	display.value = 0;
	document.getElementById("evaluate").addEventListener("click", evaluate);
	document.getElementById("clear").addEventListener("click", clear);
	document.getElementById("decimal").addEventListener("click", handleDecimal);
	document.getElementById("undo").addEventListener("click", handleUndo);
	initNumber();
	initOperator();
	initKeyboard();
}

function initNumber() {
	const numbers = document.querySelectorAll(".number");
	numbers.forEach((n) => {
		n.addEventListener("click", (event) => {
			handleNumber(event.target.textContent);
		});
	});
}

function initOperator() {
	const operations = document.querySelectorAll(".operator");
	operations.forEach((operator) => {
		operator.addEventListener("click", (event) => {
			handleOperation(event.target.textContent);
		});
	});
}

function initKeyboard() {
	document.addEventListener("keydown", (event) => {
		const key = event.key;
		const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
		const operations = ["+", "-", "/", "*"];

		if (numbers.includes(key)) {
			handleNumber(key);
		}

		if (operations.includes(key)) {
			handleOperation(key);
		}

		if (key === "Enter") {
			evaluate();
		}

		if (key === ".") {
			handleDecimal();
		}

		if (key === "Backspace") {
			handleUndo();
		}
	});
}

function handleUndo() {
	display.value = display.value.slice(0, -1);
}

function handleDecimal() {
	for (let i = 0; i < display.value.length; i++) {
		if (display.value.charAt(i) === ".") return;
	}

	display.value += ".";
}

function clear() {
	a = undefined;
	display.value = "0";
	lastOperator = true;
}

function evaluate() {
	if (a === undefined || operator === "") return;
	a = operate(operator, a, display.value);
	display.value = a;
	lastOperator = true;
}

function handleNumber(num) {
	if (lastOperator) {
		display.value = num;
	} else {
		display.value += num;
	}
	lastOperator = false;
}

function handleOperation(op) {
	if (a === undefined) {
		a = display.value;
	} else {
		a = operate(operator, a, display.value);
		display.value = a;
	}
	operator = op;
	lastOperator = true;
}

module.exports = {
	add,
	subtract,
	multiply,
	divide,
	operate,
};
