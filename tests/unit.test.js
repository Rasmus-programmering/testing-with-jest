// unit-test.js

// Importerar filen som vi vill testa
const Stack = require('../src/stack');

// Enhets testfall med Jest
test('isEmpty should return true for an empty stack', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
});

// Ett till enhetstestfall
test('isEmpty should return false for a non-empty stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
});
