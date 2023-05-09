const reverseString = require('./reverseString');

test('Reverse string', () => {
    expect(reverseString('hello')).toBe('olleh');
});