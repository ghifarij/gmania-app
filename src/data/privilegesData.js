/**
 * privilegesData.js
 * Single Responsibility: owns the privileges card definitions only.
 */
import platinumImg from '@/assets/privilege_platinum.jpeg'
import goldImg from '@/assets/privilege_gold.jpeg'
import thrImg from '@/assets/privilege_thr.jpeg'
import poinImg from '@/assets/privilege_poin.jpeg'
import jumboImg from '@/assets/privilege_jumbo.jpeg'
import benefitImg from '@/assets/privilege_benefit.jpeg'
import silverImg from '@/assets/privilege_silver.jpeg'

/**
 * @typedef  {Object} Privilege
 * @property {string} title
 * @property {string} expires
 * @property {string} image
 */

/** @type {Privilege[]} */
export const privileges = [
    { title: 'PLATINUM Member 💎', expires: 'Exp. 31 Dec 2024', image: platinumImg },
    { title: 'GOLD Member ✨', expires: 'Exp. 31 Dec 2024', image: goldImg },
    { title: 'THR Reward 🎉', expires: 'Exp. 31 Dec 2024', image: thrImg },
    { title: 'Redeem Point 👋', expires: 'Exp. 31 Dec 2024', image: poinImg },
    { title: 'Sign Up Reward 💰', expires: 'Exp. 31 Dec 2024', image: jumboImg },
    { title: 'Benefit GMania 🍜', expires: 'Exp. 31 Dec 2024', image: benefitImg },
    { title: 'SILVER Member 🥈', expires: 'Exp. 31 Mar 2024', image: silverImg },
]
