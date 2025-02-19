/**
 * Obtains the image of a card.
 * @constructor
 * @param  {string} card Example -> '1C'
 * @returns {HTMLImageElement} The image of the card.
 */

export const getCardImg = (card) => {
    const img = document.createElement('img');
    img.classList.add('card');
    img.src = `/cards/${card}.png`;
    return img;
  };