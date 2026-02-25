/**
 * axiosMock.js
 * Development-only mock layer.
 *
 * Single Responsibility: intercepts axios requests and returns fixture data.
 * The src/data/ files remain the single source of truth — this file only
 * wires them to HTTP-style endpoints so components can use a real axios flow.
 *
 * ⚠️  Only imported in main.js when import.meta.env.DEV === true.
 */
import MockAdapter from 'axios-mock-adapter'
import apiClient from '@/plugins/axios'

// ── Data sources (unchanged) ──────────────────────────────────────────────────
import { heroBannerImages } from '@/data/heroBannerData'
import { menuItems } from '@/data/menuData'
import { outlets } from '@/data/outletsData'
import { privileges } from '@/data/privilegesData'
import { rewards } from '@/data/rewardsData'

// ── Mock adapter setup ────────────────────────────────────────────────────────
// delayResponse: 300 ms simulates realistic network latency
const mock = new MockAdapter(apiClient, { delayResponse: 300 })

mock.onGet('/banners').reply(200, heroBannerImages)
mock.onGet('/menus').reply(200, menuItems)
mock.onGet('/outlets').reply(200, outlets)
mock.onGet('/privileges').reply(200, privileges)
mock.onGet('/rewards').reply(200, rewards)

// Pass-through for any unmatched request (safety net)
mock.onAny().passThrough()

console.info('[axiosMock] Mock API active — all /api/* requests are intercepted.')
