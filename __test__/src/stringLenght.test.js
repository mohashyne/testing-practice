
import stringLength from './../../src/stringLength';


// Test for the stringLength function
test('stringLength returns the correct length of a string', () => {
    const string = 'Hello, world!';
    const expectedLength = 13;

    const length = stringLength(string);
    expect(length).toBe(expectedLength);
});

// Test for the minimum and maximum string length
test('stringLength throws an error if string is shorter than 1 character', () => {
    const string = '';
    expect(() => {
        stringLength(string);
    })
});

test('stringLength throws an error if string is longer than 10 characters', () => {
    const string = '';
    expect(() => {
        stringLength(string);
    })
});
