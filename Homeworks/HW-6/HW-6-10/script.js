let suits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6','7','8','9','10','jack','queen','king','ace'];

let deck = [];

for (let suit of suits) {
    for (let value of values) {
        let color = (suit === 'diamond' || suit === 'heart') ? 'red' : 'black';
        deck.push({cardSuit: suit, value: value, color: color});
    }
}

console.log(deck);
// 1
let spadeAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadeAce);
// 2
let sixes = deck.filter(card => card.value === '6');
console.log(sixes);
// 3
let redCards = deck.filter(card => card.color === 'red');
console.log(redCards);
// 4
let diamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log(diamonds);

// 5
let clubs = deck.filter(card => card.cardSuit === 'clubs' &&
    (card.value === '9' || card.value === '10' || card.value === 'jack' || card.value === 'queen' || card.value === 'king' || card.value === 'ace')
);
console.log(clubs);
