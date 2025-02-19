/**
 * Subtract a card from a deck.
 * @constructor
 * @param  {Array<string>} deck Example -> ['1C', '3D', '2H', 'AS']
 * @returns {string} The subtracted card.
 */

export const getCard = (deck) => deck.pop();