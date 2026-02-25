import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import 'primeicons/primeicons.css'

// ── Mock API (development only) ───────────────────────────────────────────────
// axiosMock.js registers MockAdapter on the shared axios instance.
// It must be imported before any component that calls the API.
if (import.meta.env.VITE_USE_MOCK === 'true') {
    await import('./plugins/axiosMock.js')
}

createApp(App).mount('#app')