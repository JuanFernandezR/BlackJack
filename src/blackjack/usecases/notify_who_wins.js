import { END_MESSAGES, BLACKJACK_VALUE } from "../constants/app_constants";

/**
 * Create the alert that notify who wins.
 * @constructor
 * @param {number} playerScore Example -> 0
 * @param {number} computerScore Example -> 0
 * @returns {alert} The created alert.
 */

export const notifyWhoWins = (computerScore, playerScore) => computerScore > BLACKJACK_VALUE || (playerScore <= BLACKJACK_VALUE && playerScore > computerScore) ? alert(END_MESSAGES.WIN) :
  playerScore === computerScore ? alert(END_MESSAGES.DRAW) : alert(END_MESSAGES.LOSE);