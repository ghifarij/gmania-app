/**
 * useCarousel — Single Responsibility composable that owns carousel state
 * and auto-advance behaviour. Components only call goTo / current, they do
 * NOT need to know how the timer works (Dependency Inversion).
 *
 * @param {number} total   - total number of slides
 * @param {number} interval - auto-advance interval in ms (default 4 000)
 */
import { ref, onMounted, onUnmounted } from 'vue'

export function useCarousel(total, interval = 4000) {
    const current = ref(0)
    let timer = null

    function goTo(index) {
        current.value = index
        restartTimer()
    }

    function next() {
        current.value = (current.value + 1) % total
    }

    function restartTimer() {
        clearInterval(timer)
        timer = setInterval(next, interval)
    }

    onMounted(() => restartTimer())
    onUnmounted(() => clearInterval(timer))

    return { current, goTo }
}
