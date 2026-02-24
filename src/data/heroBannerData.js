/**
 * heroBannerData.js
 * Single Responsibility: owns the banner slide definitions only.
 * Components import this instead of mixing asset imports with logic.
 */
import hero1 from '@/assets/hero1.jpg'
import hero2 from '@/assets/hero2.jpg'
import hero3 from '@/assets/hero3.jpg'

/** @type {{ src: string, alt: string }[]} */
export const heroBannerImages = [
    { src: hero1, alt: 'Hero banner 1' },
    { src: hero2, alt: 'Hero banner 2' },
    { src: hero3, alt: 'Hero banner 3' },
]
