const first_player = document.getElementById('first_player');
const second_player = document.getElementById('second_player');
const first_player_last_card_div = document.getElementById('first_player_last_card');
const second_player_last_card_div = document.getElementById('second_player_last_card');
// const play = document.getElementById('play');
let first_player_last_card;
let second_player_last_card;

var used_cards = new Array();
var first_player_cards = new Array();
var second_player_cards = new Array();
var teko_array = new Array();

// play.addEventListener('click', () => {
//     assignCards();
//     // while (first_player_cards.length > 0 && second_player_cards.length > 0)
//     // {
//     //         first_player_move();
//     //         second_player_move();
//     // }
// });

first_player.addEventListener('click', () => {
    first_player_move()
});

function first_player_move()
{
    first_player_last_card_div.style.backgroundColor = '#FFFFFF';
    if (deck.length != 0) {
        first_player_last_card = chooseRandomCard();
    }
    else {
        first_player_last_card = chooseRandomCardFirstPlayer();
    }
    teko_array.push(first_player_last_card);
    // console.log(first_player_last_card);
    first_player_last_card_div.innerText = first_player_last_card.name + " " + first_player_last_card.suit;

}

function second_player_move()
{
    second_player_last_card_div.style.backgroundColor = '#FFFFFF';
    if (deck.length != 0) {
        second_player_last_card = chooseRandomCard();
    }
    else
    {
        second_player_last_card = chooseRandomCardSecondPlayer();
        }
    teko_array.push(second_player_last_card);
    // console.log(second_player_last_card);
    second_player_last_card_div.innerText = second_player_last_card.name + " " + second_player_last_card.suit
    winnerCalculation();
}

second_player.addEventListener('click', () => {
    second_player_move();
});

function winnerCalculation()
{
    if (first_player_last_card.value > second_player_last_card.value)
    {
        first_player_last_card_div.style.backgroundColor = '#00FF00';
        // first_player_cards.push(second_player_last_card);
        // first_player_cards.push(first_player_last_card);
        while (teko_array.length > 0)
        {
            first_player_cards.push(teko_array.pop());
        }
    }
    else if (first_player_last_card.value < second_player_last_card.value)
    {
        second_player_last_card_div.style.backgroundColor = '#00FF00';
        // second_player_cards.push(first_player_last_card);
        // second_player_cards.push(second_player_last_card);
        while (teko_array.length > 0) {
            second_player_cards.push(teko_array.pop());
        }
    }
    else {
        teko();
    }
    console.log("first player: " + first_player_cards.length + " ___ " + "second player: " + second_player_cards.length);
    whoWon();

}

function whoWon()
{
    if (first_player_cards.length == 52) {
        winnerDeclaration(first_player_last_card_div);
    }
    else if (second_player_cards.length == 52) {
        winnerDeclaration(second_player_last_card_div);
    }
}

function winnerDeclaration(winner)
{
    winner.innerText = "I WON";
}

function teko()
{
    teko_array.push(firstPlayerTekoChooseCard());
    teko_array.push(firstPlayerTekoChooseCard());
    first_player_last_card = firstPlayerTekoChooseCard();
    teko_array.push(first_player_last_card);
    teko_array.push(secondPlayerTekoChooseCard());
    teko_array.push(secondPlayerTekoChooseCard());
    second_player_last_card = secondPlayerTekoChooseCard()
    teko_array.push(second_player_last_card);
    winnerCalculation();
}

function firstPlayerTekoChooseCard() {
    if (deck.length > 0) {
        return deck.pop();
    }
    else if(first_player_cards.length > 0){
        return first_player_cards.pop();
    }
    else {
        winnerDeclaration(second_player_last_card_div);
    }
}

function secondPlayerTekoChooseCard() {
    if (deck.length > 0) {
        return deck.pop();
        
    }
    else if (second_player_cards.length > 0) {

         return second_player_cards.pop();
    }
    else {
        winnerDeclaration(first_player_last_card_div);

    }
}




function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


// function assignCards()
// {
//     while (deck.length > 0)
//     {
//         let card = chooseRandomCard();
//         first_player_cards.push(card);
//         card = chooseRandomCard();
//         second_player_cards.push(card);
//     }
// }

function chooseRandomCard()
{
    const len = deck.length;
    const rndInt = randomIntFromInterval(0, len - 1);
    const returnedCard = deck[rndInt];
    deck.splice(rndInt, 1);
    return returnedCard;
}


function chooseRandomCardFirstPlayer() {
    const len = first_player_cards.length;
    const rndInt = randomIntFromInterval(0, len - 1);
    const returnedCard = first_player_cards[rndInt];
    first_player_cards.splice(rndInt, 1);
    return returnedCard;
}

function chooseRandomCardSecondPlayer() {
    const len = second_player_cards.length;
    const rndInt = randomIntFromInterval(0, len - 1);
    const returnedCard = second_player_cards[rndInt];
    second_player_cards.splice(rndInt, 1);
    return returnedCard;
}

let deck = [
    new card('Ace', 'Hearts', 1),
    new card('Two', 'Hearts', 2),
    new card('Three', 'Hearts', 3),
    new card('Four', 'Hearts', 4),
    new card('Five', 'Hearts', 5),
    new card('Six', 'Hearts', 6),
    new card('Seven', 'Hearts', 7),
    new card('Eight', 'Hearts', 8),
    new card('Nine', 'Hearts', 9),
    new card('Ten', 'Hearts', 10),
    new card('Jack', 'Hearts', 11),
    new card('Queen', 'Hearts', 12),
    new card('King', 'Hearts', 13),
    new card('Ace', 'Diamonds', 1),
    new card('Two', 'Diamonds', 2),
    new card('Three', 'Diamonds', 3),
    new card('Four', 'Diamonds', 4),
    new card('Five', 'Diamonds', 5),
    new card('Six', 'Diamonds', 6),
    new card('Seven', 'Diamonds', 7),
    new card('Eight', 'Diamonds', 8),
    new card('Nine', 'Diamonds', 9),
    new card('Ten', 'Diamonds', 10),
    new card('Jack', 'Diamonds', 11),
    new card('Queen', 'Diamonds', 12),
    new card('King', 'Diamonds', 13),
    new card('Ace', 'Clubs', 1),
    new card('Two', 'Clubs', 2),
    new card('Three', 'Clubs', 3),
    new card('Four', 'Clubs', 4),
    new card('Five', 'Clubs', 5),
    new card('Six', 'Clubs', 6),
    new card('Seven', 'Clubs', 7),
    new card('Eight', 'Clubs', 8),
    new card('Nine', 'Clubs', 9),
    new card('Ten', 'Clubs', 10),
    new card('Jack', 'Clubs', 11),
    new card('Queen', 'Clubs', 12),
    new card('King', 'Clubs', 13),
    new card('Ace', 'Spades', 1),
    new card('Two', 'Spades', 2),
    new card('Three', 'Spades', 3),
    new card('Four', 'Spades', 4),
    new card('Five', 'Spades', 5),
    new card('Six', 'Spades', 6),
    new card('Seven', 'Spades', 7),
    new card('Eight', 'Spades', 8),
    new card('Nine', 'Spades', 9),
    new card('Ten', 'Spades', 10),
    new card('Jack', 'Spades', 11),
    new card('Queen', 'Spades', 12),
    new card('King', 'Spades', 13)
];

function card(name, suit, value) {
    this.name = name;
    this.suit = suit;
    this.value = value;
}