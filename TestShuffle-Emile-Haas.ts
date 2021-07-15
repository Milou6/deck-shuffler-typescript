/// To test your code you can use the playground below
/// TypeScript playground: https://www.typescriptlang.org/play

// 1. With the 2 arrays named 'suit' and 'cards' you should initialize a deck with the initializeDeck function
// 2. The result must be: [1,H,2,H,3,H,....,Q,S,K,S]
// 3. You have to shuffle the deck, you can write your own algo in shuffleDeck and swapCard functions

const suit: Array<string> = ['H', 'C', 'D', 'S']; // Heart, Clubs, Diamond, Spades
const cards: Array<string> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K']; // 1,2,....Queen, King

function start() {
  // Will contain cards as an array of numbers+letters  [1,H,2,H,3,H,....,Q,S,K,S]
  let deckOfCard = new Array<string>(104);

  // Initialize the Deck with valid cards
  initializeDeck(deckOfCard);
  console.log('Init Done');
  printDeck(deckOfCard);

  // Suffle the cards in the deck
  shuffleDeck(deckOfCard);
  console.log('After Shuffle');
  printDeck(deckOfCard);
}

// Create a fully intialiezed deck ready to be used
function initializeDeck(theDeck: Array<string>) {
  // TODO write proper code that will initialize the deck with all cards
  let index = 0;
  for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < cards.length; j++) {
      theDeck[index++] = cards[j];
      theDeck[index++] = suit[i];
    }
  }
}

// Swap two cards in the deck
function swapCard(theDeck: Array<string>, card1: number, card2: number) {
  // TODO Write a function that will swap two cards
  /*
    Since every card is represented by 2 Array indexes, we have to make sure the function doesn't
    'cut' a card in two. For example, with a deck of 4 cards [1,H,2,H,3,H,4,H] :

    swapCard(2,7) --> 1, 4,H, H,3,H,4,H, H,2    ❌ bad, cards got cut

    swapCard(3,7) --> 1,H, 4,H ,3,H, 2,H        ✅ good, cards stayed intact
  */
  if (card1 % 2 == 0) card1++;

  [theDeck[card1], theDeck[card2]] = [theDeck[card2], theDeck[card1]];
  [theDeck[card1 - 1], theDeck[card2 - 1]] = [theDeck[card2 - 1], theDeck[card1 - 1]];
}

// Will shuffle a deck of card making sure the order is random
function shuffleDeck(theDeck: Array<string>) {
  // TODO write the shuffling algo
  /*
      We use the modern version of the Fisher-Yates shuffle to mix the deck in-place (without needing extra space) and in O(n) time, n being the length of the Array.
      
      We start from the end of Array and move left; at each step we swap current card with a random card from its left.
     */
  for (let i = theDeck.length - 1; i > 0; i = i - 2) {
    let randomIndex = Math.floor(Math.random() * i);
    swapCard(theDeck, randomIndex, i);
  }
}

// Print Out a Deck
function printDeck(theDeck: Array<string>) {
  for (let i = 0; i < 52; i++) {
    console.log(theDeck[2 * i] + theDeck[2 * i + 1] + ','); // prints 0-1, 2-3, 4-5, 6-7
  }
}

start();
