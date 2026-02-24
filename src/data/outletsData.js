/**
 * outletsData.js
 * Single Responsibility: owns the outlet location definitions only.
 */

/**
 * @typedef  {Object} Outlet
 * @property {string} name
 * @property {string} address
 * @property {number} distance  distance in km
 */

/** @type {Outlet[]} */
export const outlets = [
    {
        name: 'Citra Garden 6',
        address: 'Food Junction Citra 6 Blok L2-A Citra Garden City, Jakarta Barat',
        distance: 2.4,
    },
    {
        name: 'Emporium Mall',
        address: 'Emporium Pluit Mall Lt. 2 Jalan Pluit Selatan Raya, Jakarta Utara',
        distance: 6.2,
    },
    {
        name: 'Puri Indah Mall',
        address: 'Bakmi GM Puri Indah Mall, Mall Puri Indah Lt. I Unit 103 Jl. Puri Agung Kembangan, Jakarta Barat',
        distance: 6.4,
    },
    {
        name: 'Lippo Mall Puri',
        address: 'Bakmi GM Lippo Mall Puri, Food Avenue Unit FSC-07, Gedung St. Moritz Lippo Mall Puri Lantai I, Jl. Puri Indah Boulevard Blok UI, Jakarta Barat',
        distance: 6.6,
    },
    {
        name: 'Terminal 3 Ultimate',
        address: 'Bandara Soekarno Hatta Terminal 3 Ultimate Domestic Landside, Lantai 2 Ultimate Food Terminal, Tangerang',
        distance: 7.7,
    },
]
