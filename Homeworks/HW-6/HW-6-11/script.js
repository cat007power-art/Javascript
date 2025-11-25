let suits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6','7','8','9','10','jack','queen','king','ace'];

let deck = [];

for (let suit of suits) {
    for (let value of values) {
        let color = (suit === 'diamond' || suit === 'heart') ? 'red' : 'black';
        deck.push({cardSuit: suit, value: value, color: color});
    }
}

let packedDeck = deck.reduce((acc, card) => {
    if (card.cardSuit === 'spade') acc.spades.push(card);
    if (card.cardSuit === 'diamond') acc.diamonds.push(card);
    if (card.cardSuit === 'heart') acc.hearts.push(card);
    if (card.cardSuit === 'clubs') acc.clubs.push(card);
    return acc;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });

console.log(packedDeck);