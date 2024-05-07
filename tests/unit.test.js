// unit.test.js

// Importera funktionerna som du vill testa
const stack = require('../src/stack');

// Enhetsprov för peek-funktionen
test('Testar peek-funktionen - förväntat korrekt resultat', () => {
    // Lägger till några element i stacken för att testa peek
    stack.push(1);
    stack.push(2);
    stack.push(3);

    // Förväntad korrekt utgång
    expect(stack.peek()).toBe(3); // Testet förväntar sig 3, vilket är det förväntade resultatet
});

