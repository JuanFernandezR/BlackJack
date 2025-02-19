import { SPECIAL_CARD_TYPES, AS_CARD_VALUE, SYMBOL_CARD_VALUE } from "../constants/app_constants";

/**
 * Obtains the numeric value of a card.
 * @constructor
 * @param {Array<string>} SPECIAL_CARD_TYPES Example -> ['A', 'J', 'Q', 'K']
 * @param  {string} card Example -> '1C'
 * @returns {number} The value of the card.
 */

export const getCardValue = (card) => (
    SPECIAL_CARD_TYPES[0].includes(card[0]) ? AS_CARD_VALUE :
        SPECIAL_CARD_TYPES.includes(card[0]) ? SYMBOL_CARD_VALUE :
            card.substring(0, card.length - 1)
) * 1;