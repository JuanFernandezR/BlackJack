import { notifyWhoWins } from "./notify_who_wins";
import { getComputerCard } from "./get_computer_card";
import { NO_RISK_SCORE, BLACKJACK_VALUE, COMPUTER_DELAY } from "../constants/app_constants";

/**
 * Create the alert that notify who wins.
 * @constructor
 * @param {number} playerScore Example -> 0
 * @param {number} computerScore Example -> 0
 * @param  {Array<string>} deck Example -> ['1C', '3D', '2H', 'AS']
 * @param  {Array<string>} computerDeck Example -> ['1C', '3D', '2H', 'AS']
 * @param {Element} computerCards Example -> <div>...<img></img></div>
 * @param {Element} small Example -> <small></small>
 * @return {number} The score value -> 0
 */

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const computerTry = async (playerScore, computerScore, deck, computerDeck, computerCards, small) => {
  try {

    do {
      computerScore = getComputerCard(deck, computerDeck, computerScore, computerCards, small);
      await delay(COMPUTER_DELAY);
      if (playerScore > BLACKJACK_VALUE) {
        break;
      }
  
    } while (computerScore <= NO_RISK_SCORE || ((computerScore < playerScore) && (computerScore <= BLACKJACK_VALUE)));
  
    notifyWhoWins(computerScore, playerScore);

    return computerScore;

  } catch (error) {
    console.error("Error en computerTry:", error);
  }
};