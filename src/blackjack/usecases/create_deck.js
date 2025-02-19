import { shuffle } from 'underscore';
import { CARD_TYPES } from '../constants/app_constants';
import { SPECIAL_CARD_TYPES, FIRST_CARD_VALUE, END_CARD_VALUE } from '../constants/app_constants';

/**
 * Create a deck.
 * @constructor
 * @returns {Array<string>} The created deck.
 */

export const createDeck = () => {

    let deck = []

    for (let type of CARD_TYPES) {

        for (let i = FIRST_CARD_VALUE; i <= END_CARD_VALUE; i++) {
            deck.push(i + type);
        }

        for (let special of SPECIAL_CARD_TYPES) {
            deck.push(special + type);
        }
    }

    deck = shuffle(deck);

    return deck;
};