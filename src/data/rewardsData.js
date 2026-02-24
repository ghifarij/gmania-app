/**
 * rewardsData.js
 * Single Responsibility: owns the redeemable reward definitions only.
 */
import esTehManisImg from '@/assets/es_teh_manis.png'
import lemonEsTehImg from '@/assets/lemon_es_teh.png'
import pangsitImg from '@/assets/pangsit.png'

/**
 * @typedef  {Object} Reward
 * @property {string} name
 * @property {number} points
 * @property {string} image
 */

/** @type {Reward[]} */
export const rewards = [
    { name: 'Es Teh Manis', points: 40, image: esTehManisImg },
    { name: 'Lemon Es Teh', points: 45, image: lemonEsTehImg },
    { name: 'Paw Patrol Pin', points: 155, image: pangsitImg },
]
