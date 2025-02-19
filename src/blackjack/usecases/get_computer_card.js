import { getCard } from "./get_card";
import { getCardImg } from "./get_card_img";
import { getUpdateScoreFromCard } from "./get_update_score_from_card";


/**
 * Get computer card.
 * @param  {Array<string>} deck Example -> ['1C', '3D', '2H', 'AS']
 * @param  {Array<string>} computerDeck Example -> ['1C', '3D', '2H', 'AS']
 * @param {number} computerScore Example -> 0
 * @param {Element} computerCards Example -> <div>...<img></img></div>
 * @param {Element} small Example -> <small></small>
 * @return {number} The score value -> 0
 */

export const getComputerCard = (deck, computerDeck, computerScore, computerCards, small) => {
  const card = getCard(deck);
  computerDeck.push(card);
  computerScore = getUpdateScoreFromCard(computerScore, small, card);
  computerCards.append(getCardImg(card));
  return computerScore;
};