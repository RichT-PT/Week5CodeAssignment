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
class Game{
    constructor(){
        this.player1 = [];
        this.player2 = [];
    }
    start(){
        let shuffledDeck = [];
        
        //random array sorting and push code into array
        shuffledDeck.push(//random sort code here)
        )
    }
}

    for(let i = 0; i < shuffledDeck.length; i++){
        if(shuffledDeck[i + 1] % 2 == 0){
            this.player1.push(shuffledDeck[i]);
        }
        else{
            this.player2.push(shuffledDeck[i]);
        }
    }
    if(player1(player1[i]) > (player2(player2{i}))){
        let winningHand = [];
        winningHand.push("P1");
    }
    else{
        winningHand.push("P2");
    }  
    let compareWins1 = 0;
    let compareWins2 = 0; 
    for(let i = 0; i < winningHand.length; i++){
        if(winningHand(winningHand[i]) === "P1"){
            compareWins1 += winningHand[i]
        }
        else{
            compareWins2 += winningHand[i]
        }
        if(compareWins1 > compareWins2){
            window.alert("Player 1 Wins!!!");
        }
        else{
            window.alert("Player 2 Wins!!!");
        }
    }
    }


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
start