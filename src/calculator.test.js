const Calculator = require('./Calculator');

describe('add', () => {
    test('sum of two positive numbers', () => {
        expect(Calculator.add(4, 4)).toBe(8);
    });

    test('sum of two negative numbers', () => {
        expect(Calculator.add(-3, -3)).toBe(-6);
    });

    test('sum of a positive and negative number', () => {
        expect(Calculator.add(4, -3)).toBe(1);
    });
});

describe('substract', () => {
    test('substract of two positive numbers', () => {
        expect(Calculator.substract(4, 4)).toBe(0);
    });
    test('substract of two negative numbers', () => {
        expect(Calculator.substract(-6, -4)).toBe(-2);
    });
    test('substract of a positive and negative number', () => {
        expect(Calculator.substract(-6, 4)).toBe(-10);
    });
});

describe('divide', () => {
    test('divide of two positive numbers', () => {
        expect(Calculator.divide(5, 5)).toBe(1);
    });
    test('divide of two positive numbers', () => {
        expect(Calculator.divide(10, 5)).toBe(2);
    });
    test('divide of a positive and negative number', () => {
        expect(Calculator.divide(-2, 1)).toBe(-2);
    });
});

describe('multiply', () => {
    test('multiply of two positive numbers', () => {
        expect(Calculator.multiply(5, 5)).toBe(25);
    });
    test('multiply of two negative numbers', () => {
        expect(Calculator.multiply(-5, -5)).toBe(25);
    });
    test('multiply of a positive and negative number', () => {
        expect(Calculator.multiply(5, -5)).toBe(-25);
    });
});

