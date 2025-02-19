import { getCard } from "./get_card";
import { getCardImg } from "./get_card_img";
import { getUpdateScoreFromCard } from "./get_update_score_from_card";
import { BLACKJACK_VALUE } from "../constants/app_constants";

/**
 * Get player card.
 * @param  {Array<string>} deck Example -> ['1C', '3D', '2H', 'AS']
 * @param  {Array<string>} playerDeck Example -> ['1C', '3D', '2H', 'AS']
 * @param {number} playerScore Example -> 0
 * @param {Element} playerCards Example -> <div>...<img></img></div>
 * @param {Element} small Example -> <small></small>
 * @return {number} The score value -> 0
 */

export const getPlayerCard = (deck, playerDeck, playerScore, playerCards, small, btnGetCard) => {
  if (playerScore > BLACKJACK_VALUE) {
    btnGetCard.disabled = true;

  } else if (playerScore === BLACKJACK_VALUE) {
    btnGetCard.disabled = true;

  } else {
    const card = getCard(deck);
    playerDeck.push(card);
    playerScore = getUpdateScoreFromCard( playerScore, small, card);
    playerCards.append(getCardImg(card));
    return playerScore;
  }
};