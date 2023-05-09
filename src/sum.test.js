const sum = require('./sum');

// Arrange
const a = 1;
const b = 2;
const expectedResult = 3;

// Act
const result = sum(a, b);

// Assert
test('Sumar 1 + 2 debe retornar 3', () => {
  expect(result).toBe(expectedResult);
});

