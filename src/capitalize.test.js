test('capitalize string', () => {
    expect(capitalize('hello')).toBe('Hello');
});

function capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
};