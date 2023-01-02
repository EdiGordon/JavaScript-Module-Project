// const suits = ["Spades", "Clubs", "Diamonds", "Hearts"];
// const ranks = [..."23456789".split(""), "10", "J", "Q", "K", "A"];

// const deck: { suit: string; rank: string }[] = [];

// const numOfCardsInDeck = suits.length * ranks.length; //52
// let counter = 0;
// while (deck.length < numOfCardsInDeck) {
//     const randomSuit = suits[Math.floor(Math.random() * suits.length)];
//     const randomRank = ranks[Math.floor(Math.random() * ranks.length)];

//     const randomCard = {
//         suit: randomSuit,
//         rank: randomRank
//     }

//     if (!deck.includes(randomCard)) {
//         deck.push(randomCard)
//     }

//     // how many iterations
//     console.log(++counter)
// }


const suits = ["Spades", "Clubs", "Diamonds", "Hearts"];
const ranks = [..."23456789".split(""), "10", "J", "Q", "K", "A"];

const deck = new Set<{
    suit: string;
    rank: string;
}>();

const numOfCardsInDeck = suits.length * ranks.length; //52
let counter = 0;
while (deck.size < numOfCardsInDeck) {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomRank = ranks[Math.floor(Math.random() * ranks.length)];

    const randomCard = {
        suit: randomSuit,
        rank: randomRank,
    };
    deck.add(randomCard);

    // how many iterations
    console.log(++counter);
}

