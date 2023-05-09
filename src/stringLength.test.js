const stringLength = require('./stringLength');

test('Approved string', () => {
    expect(stringLength('Hello')).toBe(5);
});

test('Empty string', () => {
    expect(() => stringLength('')).toThrow('You need at least one character');
  });

  test('String too long', () => {
    expect(() => stringLength('You should not have more than 10 characters')).toThrow('You should not have more than 10 characters');
  });