const app = require("./app");

describe("app", () => {
	test("add 1 and 1", () => {
		expect(app.add(1, 1)).toBe(2);
	});

	test("subtract 1 from 2", () => {
		expect(app.subtract(2, 1)).toBe(1);
	});

	test("multiply 3 and 4", () => {
		expect(app.multiply(3, 4)).toBe(12);
	});

	test("divide 10 by 2", () => {
		expect(app.divide(10, 2)).toBe(5);
	});

	test("operate add", () => {
		expect(app.operate(app.add, 3, 4)).toBe(7);
	});

	test("operate subtract", () => {
		expect(app.operate(app.subtract, 3, 4)).toBe(-1);
	});

	test("operate multiply", () => {
		expect(app.operate(app.multiply, 3, 4)).toBe(12);
	});

	test("operate divide", () => {
		expect(app.operate(app.divide, 3, 4)).toBe(3 / 4);
	});
});
