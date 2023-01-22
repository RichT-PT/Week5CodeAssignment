// • Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
// ◦ Use at least one array.
// ◦ Use at least two classes.
// ◦ Your menu should have the options to create, view, and delete elements.

// class card 
// card has Suit
// card has faceValues
// card has rank

class Player {
    constructor(name) {
        this.name = name;
        this.score =0;
        this.hand = [];
    }
}
let player1 = new Player('Kristina');
let player2 = new Player('Ollie');
console.log(player1);

class Card {
    constructor(faceValue, suit, rank)  {
        this.faceValue = faceValue;
        this.suit = suit;
        this.rank = rank;
    }
}

class Deck {
    constructor(){
        this.deck = [];//we want to put 52 card in here
        let faceValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
        let suits = ['heart', 'diamond', 'spades', 'clubs'];
        let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    }
    //method to create
    createDeck(){
        for(let i = 0; i < this.faceValue.length; i++){
           // console.log(this.faceValue[i]);
           for(let s = 0; s < this.suits.length; s++)   {
            this.deck.push(new Card(this.faceValue[i], this.suits[s]));
           }
        }
        console.log(this.deck);
    }

    //method to create
    createDeck(){
        for(let i = 0; i < this.faceValue.length; i++){
            for(let s = 0; s < this.suits.length; s++) {
                this.deck.push(new Card(this.faceValue[i], this.suits[s], this.rank[i]));
            }
        }
    }
}
        console.log(this.deck);
    //method to shuffle (fischer yates)
    // method to deal

// create the deck (52 cards)
// shuffle 52 cards
// deal - interact with



let gameDeck = new Deck();
gameDeck.createDeck();
let card1 = new Card('2', 'Hearts', 2);
let card2 = new Card('Jack', 'Hearts', 11);
console.log(card1.rank);

let p1score = 0;
let p2score = 0;

if(card1.rank > card2.rank) {

    //do something
}