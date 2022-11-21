const Calculator = require('./calculator');

const calculator = new Calculator(5, 2);

test('adds 5 + 2 to equal 7', () => {
    expect(calculator.sum()).toBe(7);
});

test('sub 5 - 2 to equal 3', () => {
    expect(calculator.sub()).toBe(3);
});

test('miltiply 5 * 2 to equal 10', () => {
    expect(calculator.mult()).toBe(10);
});