/**
 * useCarousel — Single Responsibility composable that owns carousel state
 * and auto-advance behaviour. Components only call goTo / current, they do
 * NOT need to know how the timer works (Dependency Inversion).
 *
 * @param {number | () => number} total   - total number of slides, or a getter
 *                                          function that returns the total (useful
 *                                          when the slide list is loaded async).
 * @param {number} interval                - auto-advance interval in ms (default 4 000)
 */
import { ref, onMounted, onUnmounted } from 'vue'

export function useCarousel(total, interval = 4000) {
    const current = ref(0)
    let timer = null

    /** Resolve total regardless of whether it's a value or a getter. */
    function getTotal() {
        return typeof total === 'function' ? total() : total
    }

    function goTo(index) {
        current.value = index
        restartTimer()
    }

    function next() {
        const len = getTotal()
        if (len > 0) {
            current.value = (current.value + 1) % len
        }
    }

    function restartTimer() {
        clearInterval(timer)
        timer = setInterval(next, interval)
    }

    onMounted(() => restartTimer())
    onUnmounted(() => clearInterval(timer))

    return { current, goTo }
}
