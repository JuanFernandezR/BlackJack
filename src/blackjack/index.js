import { createDeck, deleteCardImgs, computerTry, getPlayerCard} from './usecases';
import { ZERO, EMPTY_LIST, BLACKJACK_VALUE } from './constants/app_constants';

// Variables

let deck = EMPTY_LIST,
  playerDeck = EMPTY_LIST,
  computerDeck = EMPTY_LIST,
  playerScore = ZERO,
  computerScore = ZERO;

// Binding

const btnNewGame = document.querySelector('#btnNewGame'),
  btnGetCard = document.querySelector('#btnGetCard'),
  btnStop = document.querySelector('#btnStop'),
  smalls = document.querySelectorAll('small'),
  playerCards = document.querySelector('#player-cards'),
  computerCards = document.querySelector('#computer-cards');

// Listeners

btnNewGame.addEventListener('click', () => {
    smalls.forEach(small => small.innerText = ZERO);
    playerScore = ZERO;
    computerScore = ZERO;
    playerDeck = EMPTY_LIST;
    computerDeck = EMPTY_LIST;
    deck = EMPTY_LIST;
    deleteCardImgs();
    deck = createDeck();
    btnGetCard.disabled = false;
    btnStop.disabled = false;
});

btnGetCard.addEventListener('click', () => {
    playerScore = getPlayerCard(deck, playerDeck, playerScore, playerCards, smalls[0], btnGetCard);
    if (playerScore >= BLACKJACK_VALUE) {
        btnGetCard.disabled = true;
        btnStop.disabled = true;
        computerTry(playerScore, computerScore, deck, computerDeck, computerCards, smalls[smalls.length - 1]);
    }
});

btnStop.addEventListener('click', () => {
  btnGetCard.disabled = true;
  btnStop.disabled = true;
  computerScore = computerTry(playerScore, computerScore, deck, computerDeck, computerCards, smalls[smalls.length - 1]);
});

// Start the game

deck = createDeck();