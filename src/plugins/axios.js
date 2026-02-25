/**
 * axios.js
 * Shared axios instance for the entire application.
 *
 * Single Responsibility: configures the base HTTP client only.
 * All components depend on this abstraction, not raw axios.
 */
import axios from 'axios'

const apiClient = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
})

export default apiClient
