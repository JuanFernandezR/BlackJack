import { getCardValue } from "./get_card_value";

/**
 * Subtract a card from a deck.
 * @param {number} score Example -> 0
 * @param {HTMLElement} small Example -> small
 * @param {string} card Example -> AH
 * @return {number} The score value -> 0
 */

export const getUpdateScoreFromCard = ( score, small, card) => {
    score += getCardValue(card);
    small.innerText = score;
    return score;
};